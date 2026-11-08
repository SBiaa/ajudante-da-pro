"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { StoredAppData } from "@/lib/db/appData";
import { AppState, ClassWorkspace, OwnSubject, SlotNumber, WeeklyTimetable, slotsFor } from "@/types/plano";
import { Network, getGradeLabel, getNetworkLabel } from "@/types/profile";
import { ClassGroup, School, Setup } from "@/types/turma";
import { useAppState } from "@/hooks/useAppState";
import { getMondayISO, getWeekId } from "@/lib/date";
import { createEmptyTimetable, syncWeeksWithTimetable } from "@/lib/timetable";
import { saveStoredTimetableAction } from "@/app/actions";
import { AppNav } from "@/components/AppNav";
import { AppSidebar } from "@/components/AppSidebar";
import { AppTopbar } from "@/components/AppTopbar";
import { LoadingScreen } from "@/components/LoadingScreen";
import { TimetableEditor } from "@/components/TimetableEditor";
import { Toast, ToastData } from "@/components/Toast";

/** O que o resto do app enxerga de UMA turma — o mesmo formato que AppState tinha antes de
 * existirem turmas, então painéis e modais continuam funcionando sem mudança. */
export type ClassView = Pick<
  AppState,
  "timetable" | "weeks" | "themeHistory" | "usedExercises" | "subjectColorOverrides" | "updatedAt"
>;
type ClassUpdater = ClassView | ((prev: ClassView) => ClassView);

export type ClassEntry = { cls: ClassGroup; school: School };

export type AppContextValue = {
  userId: number;
  setup: Setup;
  classes: ClassEntry[];
  activeClassId: string;
  setActiveClassId: (id: string) => void;
  activeClass: ClassEntry;
  /** Rede e ano da turma ativa (de onde vêm banco de temas e currículo). */
  network: Network;
  gradeYear: string;
  /** Horários de aula visíveis da turma ativa (1 a slotsPerDay da escola dela). */
  slots: SlotNumber[];
  /** Matérias com banco da turma ativa e as matérias manuais (sem banco) que a professora cadastrou. */
  allowedSubjects: OwnSubject[];
  customSubjects: string[];
  /** Dados da turma ativa. */
  state: ClassView;
  setState: (updater: ClassUpdater) => void;
  /** Acesso a qualquer turma, pra telas que juntam várias (Início, copiar semana). */
  getClassView: (classId: string) => ClassView;
  updateClass: (classId: string, updater: ClassUpdater) => void;
  /** Segunda-feira da semana aberta na aba "Semana" — compartilhada entre as rotas pra que
   * "ver na semana" (vindo do Progresso, da Biblioteca ou do Início) abra a semana certa. */
  viewedMonday: string;
  setViewedMonday: (monday: string) => void;
  showToast: (data: Omit<ToastData, "id">) => void;
  saveTimetable: (timetable: WeeklyTimetable) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp precisa estar dentro de <AppShell>");
  return ctx;
}

const EMPTY_WORKSPACE: ClassWorkspace = { timetable: null, weeks: {}, themeHistory: [], usedExercises: [] };

function viewOf(s: AppState, classId: string, primaryClassId: string): ClassView {
  if (classId === primaryClassId) {
    return {
      timetable: s.timetable,
      weeks: s.weeks,
      themeHistory: s.themeHistory,
      usedExercises: s.usedExercises,
      subjectColorOverrides: s.subjectColorOverrides,
      updatedAt: s.updatedAt,
    };
  }
  const ws = s.classData[classId] ?? EMPTY_WORKSPACE;
  return { ...ws, subjectColorOverrides: s.subjectColorOverrides, updatedAt: s.updatedAt };
}

function applyView(s: AppState, classId: string, primaryClassId: string, v: ClassView): AppState {
  if (classId === primaryClassId) {
    return {
      ...s,
      timetable: v.timetable,
      weeks: v.weeks,
      themeHistory: v.themeHistory,
      usedExercises: v.usedExercises,
      subjectColorOverrides: v.subjectColorOverrides,
    };
  }
  return {
    ...s,
    subjectColorOverrides: v.subjectColorOverrides,
    classData: {
      ...s.classData,
      [classId]: {
        timetable: v.timetable,
        weeks: v.weeks,
        themeHistory: v.themeHistory,
        usedExercises: v.usedExercises,
      },
    },
  };
}

const ACTIVE_CLASS_KEY = (userId: number) => `plano-aula-turma-ativa:${userId}`;

type Props = {
  userId: number;
  initialTimetable: WeeklyTimetable | null;
  initialAppData: StoredAppData | null;
  setup: Setup;
  isAdmin: boolean;
  teacherName?: string;
  children: ReactNode;
};

/**
 * Casca das rotas autenticadas (Início, Semana, Biblioteca, Progresso, Grade, Turmas): cabeçalho,
 * abas, aviso flutuante, reconciliação com o servidor e o estado compartilhado. Cada turma tem seus
 * próprios horário/semanas/histórico; o resto do app enxerga a turma ativa como se fosse a única.
 */
export function AppShell({ userId, initialTimetable, initialAppData, setup, isAdmin, teacherName, children }: Props) {
  const { state: raw, setState: setRaw, hydrated } = useAppState(userId);
  const pathname = usePathname();
  const [viewedMonday, setViewedMonday] = useState(() => getMondayISO());
  const [toast, setToast] = useState<ToastData | null>(null);
  const toastId = useRef(0);

  const classes = useMemo<ClassEntry[]>(() => {
    const schoolById = new Map(setup.schools.map((s) => [s.id, s]));
    return setup.classes.flatMap((cls) => {
      const school = schoolById.get(cls.schoolId);
      return school ? [{ cls, school }] : [];
    });
  }, [setup]);
  const primaryClassId = setup.primaryClassId;

  const [storedActiveId, setStoredActiveId] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      return window.localStorage.getItem(ACTIVE_CLASS_KEY(userId));
    } catch {
      return null;
    }
  });
  const activeClass = classes.find((c) => c.cls.id === storedActiveId) ?? classes.find((c) => c.cls.id === primaryClassId) ?? classes[0];
  const activeClassId = activeClass.cls.id;

  const setActiveClassId = useCallback(
    (id: string) => {
      setStoredActiveId(id);
      try {
        window.localStorage.setItem(ACTIVE_CLASS_KEY(userId), id);
      } catch {
        // sem localStorage: a turma ativa só vale nesta visita.
      }
    },
    [userId]
  );

  const showToast = useCallback((data: Omit<ToastData, "id">) => {
    toastId.current += 1;
    setToast({ id: toastId.current, ...data });
  }, []);
  const dismissToast = useCallback(() => setToast(null), []);

  // Reconcilia com o servidor uma vez, logo após hidratar: adota a grade fixa salva no banco
  // se este dispositivo ainda não tem nenhuma, e adota semanas/histórico/cores/turmas do servidor
  // se forem mais recentes que os deste dispositivo (ex.: editado em outro aparelho depois da
  // última sincronização daqui). Só roda uma vez — depois disso o próprio dispositivo volta a ser
  // a fonte da verdade e empurra alterações pro servidor (ver useAppState). Como vive na casca,
  // vale pra qualquer aba em que a professora aterrissar primeiro.
  const didReconcileWithServer = useRef(false);
  useEffect(() => {
    if (!hydrated || didReconcileWithServer.current) return;
    didReconcileWithServer.current = true;
    setRaw((s) => {
      let next = s;
      if (!next.timetable && initialTimetable) {
        next = { ...next, timetable: initialTimetable };
      }
      if (initialAppData && initialAppData.updatedAt > s.updatedAt) {
        next = {
          ...next,
          weeks: initialAppData.weeks,
          themeHistory: initialAppData.themeHistory,
          usedExercises: initialAppData.usedExercises,
          classData: initialAppData.classData ?? {},
          subjectColorOverrides: initialAppData.subjectColorOverrides,
        };
      }
      return next;
    });
  }, [hydrated, initialTimetable, initialAppData, setRaw]);

  const getClassView = useCallback((classId: string) => viewOf(raw, classId, primaryClassId), [raw, primaryClassId]);

  const updateClass = useCallback(
    (classId: string, updater: ClassUpdater) => {
      setRaw((s) => {
        const prev = viewOf(s, classId, primaryClassId);
        const updated = typeof updater === "function" ? updater(prev) : updater;
        return applyView(s, classId, primaryClassId, updated);
      });
    },
    [setRaw, primaryClassId]
  );

  const state = useMemo(() => viewOf(raw, activeClassId, primaryClassId), [raw, activeClassId, primaryClassId]);
  const setState = useCallback((updater: ClassUpdater) => updateClass(activeClassId, updater), [updateClass, activeClassId]);

  const saveTimetable = useCallback(
    (t: WeeklyTimetable) => {
      const forceWeekId = getWeekId(viewedMonday);
      updateClass(activeClassId, (v) => ({ ...v, timetable: t, weeks: syncWeeksWithTimetable(v.weeks, t, forceWeekId) }));
      // A grade da turma principal tem tabela própria no servidor; as demais viajam em class_data.
      if (activeClassId === primaryClassId) {
        saveStoredTimetableAction(t).catch((err) => {
          console.error("Falha ao sincronizar grade horária:", err);
          showToast({ tone: "error", message: "A grade ficou salva neste aparelho, mas não subiu pro servidor." });
        });
      }
    },
    [updateClass, activeClassId, primaryClassId, viewedMonday, showToast]
  );

  const value = useMemo<AppContextValue>(
    () => ({
      userId,
      setup,
      classes,
      activeClassId,
      setActiveClassId,
      activeClass,
      network: activeClass.school.network,
      gradeYear: activeClass.cls.gradeYear,
      slots: slotsFor(activeClass.school.slotsPerDay),
      allowedSubjects: activeClass.cls.subjects,
      customSubjects: activeClass.cls.customSubjects,
      state,
      setState,
      getClassView,
      updateClass,
      viewedMonday,
      setViewedMonday,
      showToast,
      saveTimetable,
    }),
    [
      userId,
      setup,
      classes,
      activeClassId,
      setActiveClassId,
      activeClass,
      state,
      setState,
      getClassView,
      updateClass,
      viewedMonday,
      showToast,
      saveTimetable,
    ]
  );

  if (!hydrated) {
    return <LoadingScreen />;
  }

  const networkLabel = getNetworkLabel(activeClass.school.network);
  const gradeLabel = getGradeLabel(activeClass.cls.gradeYear);
  const greeting = (
    <h1 className="text-[26px] sm:text-[30px] leading-tight mb-4">
      {teacherName ? `Olá, prof ${teacherName}!` : "Plano de Aula Semanal"}
    </h1>
  );

  // Primeiro acesso (turma principal sem horário): sem grade fixa não há semana pra mostrar. Em
  // vez de cair direto num editor de grade sem contexto, explica os dois passos (Turma → Grade).
  if (!raw.timetable && pathname !== "/turmas" && pathname !== "/perfil") {
    return (
      <AppContext.Provider value={value}>
        <AppTopbar />
        <main className="max-w-4xl w-full mx-auto px-4 py-6 sm:py-8">
          {greeting}
          <ol className="mb-6 flex flex-col sm:flex-row gap-3 text-sm">
            <li className="flex-1 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-white px-4 py-3">
              <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Passo 1
              </span>
              <span className="font-medium text-[var(--text-strong)]">
                Confira sua turma: {gradeLabel} · {networkLabel}
              </span>
              <Link href="/turmas" className="block mt-1 text-[13px]">
                Está errado, ou dá aula em mais turmas? Ajustar escolas e turmas →
              </Link>
            </li>
            <li className="flex-1 rounded-[var(--radius-md)] border-2 border-[var(--action-primary)] bg-[var(--surface-brand-soft)] px-4 py-3">
              <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Passo 2 · você está aqui
              </span>
              <span className="font-medium text-[var(--text-strong)]">Monte o seu horário de aulas</span>
              <span className="block mt-1 text-[13px] text-[var(--text-muted)]">
                Diga qual matéria cai em cada horário, de segunda a sexta. Você só faz isso uma vez; depois pode mudar
                quando quiser.
              </span>
            </li>
          </ol>
          <TimetableEditor
            timetable={createEmptyTimetable(classes.find((c) => c.cls.id === primaryClassId)?.cls.gradeYear)}
            canCancel={false}
            onSave={(t) => {
              // Esta tela só aparece sem horário na turma principal.
              updateClass(primaryClassId, (v) => ({ ...v, timetable: t, weeks: syncWeeksWithTimetable(v.weeks, t) }));
              saveStoredTimetableAction(t).catch(() =>
                showToast({ tone: "error", message: "A grade ficou salva neste aparelho, mas não subiu pro servidor." })
              );
            }}
            onCancel={() => {}}
            allowedSubjects={classes.find((c) => c.cls.id === primaryClassId)?.cls.subjects ?? activeClass.cls.subjects}
            customSubjects={classes.find((c) => c.cls.id === primaryClassId)?.cls.customSubjects ?? []}
            slots={slotsFor(classes.find((c) => c.cls.id === primaryClassId)?.school.slotsPerDay)}
          />
          <Toast toast={toast} onDismiss={dismissToast} />
        </main>
      </AppContext.Provider>
    );
  }

  return (
    <AppContext.Provider value={value}>
      <div className="flex flex-1 min-h-0">
        <AppSidebar isAdmin={isAdmin} teacherName={teacherName} />
        {/* --sticky-top: o que fica grudado no topo ao rolar (ex.: dias da semana na grade) desce
         * a altura da barra fina (h-14) pra não sumir por baixo dela. */}
        <div className="flex flex-1 min-w-0 flex-col" style={{ ["--sticky-top" as string]: "56px" }}>
          <AppTopbar />
          <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 flex-1 pb-24 lg:pb-8">
            {pathname === "/" && greeting}
            {children}
          </main>
        </div>
      </div>
      <AppNav isAdmin={isAdmin} />
      <Toast toast={toast} onDismiss={dismissToast} />
    </AppContext.Provider>
  );
}
