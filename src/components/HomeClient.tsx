"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { StoredAppData } from "@/lib/db/appData";
import {
  WEEKDAYS,
  SLOT_NUMBERS,
  WeekCell,
  WeekPlan,
  Weekday,
  SlotNumber,
  OwnSubject,
  GeneratedLessonPlan,
  WeeklyTimetable,
  getAllowedSubjects,
} from "@/types/plano";
import { useAppState } from "@/hooks/useAppState";
import { getMondayISO, getWeekId, addWeeksISO } from "@/lib/date";
import { createEmptyTimetable, buildWeekPlan, duplicateWeekPlan, syncWeeksWithTimetable } from "@/lib/timetable";
import { pickThemeEntry } from "@/lib/themePicker";
import { exerciseKey } from "@/lib/usedExercises";
import { SourcedExercise } from "@/lib/mergedActivityPicker";
import { Network, getNetworkLabel } from "@/types/profile";
import { TimetableEditor } from "@/components/TimetableEditor";
import { WeekNav } from "@/components/WeekNav";
import { WeekGrid } from "@/components/WeekGrid";
import { EmptyWeekPrompt } from "@/components/EmptyWeekPrompt";
import { AppHeader, AppMenuGroup } from "@/components/AppHeader";
import { SubjectColorEditor } from "@/components/SubjectColorEditor";
import { ThemeHistoryPanel } from "@/components/ThemeHistoryPanel";
import { CurriculumCoveragePanel } from "@/components/CurriculumCoveragePanel";
import { PeriodOverviewPanel } from "@/components/PeriodOverviewPanel";
import { ContentBankPanel } from "@/components/ContentBankPanel";
import { GenerateWeekModal, GenerateWeekMode } from "@/components/GenerateWeekModal";
import { ShareModal } from "@/components/ShareModal";
import { LoadingScreen } from "@/components/LoadingScreen";
import { SyncIndicator } from "@/components/SyncIndicator";
import { Toast, ToastData } from "@/components/Toast";
import { saveStoredTimetableAction, createShareLinkAction } from "@/app/actions";

type Props = {
  userId: number;
  initialTimetable: WeeklyTimetable | null;
  gradeLabel: string;
  gradeYear: string;
  network: Network;
  ownSubject: OwnSubject | null;
  initialAppData: StoredAppData | null;
  isAdmin?: boolean;
  teacherName?: string;
};

/** Um painel por vez no lugar da grade — um único estado em vez de seis booleanos. */
type Panel = "timetable" | "colors" | "history" | "coverage" | "overview" | "bank" | null;

export default function HomeClient({
  userId,
  initialTimetable,
  gradeLabel,
  gradeYear,
  network,
  ownSubject,
  initialAppData,
  isAdmin = false,
  teacherName,
}: Props) {
  const networkLabel = getNetworkLabel(network);
  const allowedSubjects = useMemo(() => getAllowedSubjects(ownSubject), [ownSubject]);
  const { state, setState, hydrated } = useAppState(userId);
  const [viewedMonday, setViewedMonday] = useState(() => getMondayISO());
  const [panel, setPanel] = useState<Panel>(null);
  const [toast, setToast] = useState<ToastData | null>(null);
  const [pendingGenerate, setPendingGenerate] = useState<{ empty: number; filled: number } | null>(null);
  const [shareState, setShareState] = useState<
    { status: "loading" } | { status: "ready"; url: string } | { status: "error"; message: string } | null
  >(null);
  const toastId = useRef(0);

  const showToast = useCallback((data: Omit<ToastData, "id">) => {
    toastId.current += 1;
    setToast({ id: toastId.current, ...data });
  }, []);
  const dismissToast = useCallback(() => setToast(null), []);

  const weekId = useMemo(() => getWeekId(viewedMonday), [viewedMonday]);
  const currentWeek = state.weeks[weekId];
  const previousMonday = useMemo(() => addWeeksISO(viewedMonday, -1), [viewedMonday]);
  const previousWeek = state.weeks[getWeekId(previousMonday)];
  const savedWeeks = useMemo(
    () =>
      Object.values(state.weeks)
        .map((w) => ({ weekId: w.id, weekStartDate: w.weekStartDate }))
        .sort((a, b) => (a.weekStartDate < b.weekStartDate ? -1 : 1)),
    [state.weeks]
  );
  const weekStartDates = useMemo(
    () => Object.fromEntries(Object.values(state.weeks).map((w) => [w.id, w.weekStartDate])),
    [state.weeks]
  );

  /** Quantas aulas próprias da semana já têm tema — pra barra de progresso na WeekNav. */
  const progress = useMemo(() => {
    if (!currentWeek) return undefined;
    let filled = 0;
    let total = 0;
    for (const day of WEEKDAYS) {
      for (const slot of SLOT_NUMBERS) {
        const cell = currentWeek.days[day][slot];
        if (cell.kind === "materia-externa") continue;
        total++;
        if (cell.plan.theme) filled++;
      }
    }
    return { filled, total };
  }, [currentWeek]);

  const menuGroups = useMemo<AppMenuGroup[]>(
    () => [
      {
        title: "Consultar",
        items: [
          { label: "Banco de conteúdo", onClick: () => setPanel("bank") },
          { label: "Temas já dados", onClick: () => setPanel("history") },
          { label: "Cobertura curricular", onClick: () => setPanel("coverage") },
          { label: "Visão geral do período", onClick: () => setPanel("overview") },
        ],
      },
      {
        title: "Configurar",
        items: [
          { label: "Grade fixa semanal", onClick: () => setPanel("timetable") },
          { label: "Cores das matérias", onClick: () => setPanel("colors") },
        ],
      },
    ],
    []
  );

  // Reconcilia com o servidor uma vez, logo após hidratar: adota a grade fixa salva no banco
  // se este dispositivo ainda não tem nenhuma, e adota semanas/histórico/cores do servidor se
  // eles forem mais recentes que os deste dispositivo (ex.: editado em outro aparelho depois
  // da última sincronização daqui). Só roda uma vez — depois disso o próprio dispositivo volta
  // a ser a fonte da verdade e empurra alterações pro servidor (ver useAppState).
  const didReconcileWithServer = useRef(false);
  useEffect(() => {
    if (!hydrated || didReconcileWithServer.current) return;
    didReconcileWithServer.current = true;
    setState((s) => {
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
          subjectColorOverrides: initialAppData.subjectColorOverrides,
        };
      }
      return next;
    });
  }, [hydrated, initialTimetable, initialAppData, setState]);

  function saveTimetable(t: WeeklyTimetable) {
    setState((s) => ({ ...s, timetable: t, weeks: syncWeeksWithTimetable(s.weeks, t, weekId) }));
    saveStoredTimetableAction(t).catch((err) => {
      console.error("Falha ao sincronizar grade horária:", err);
      showToast({ tone: "error", message: "A grade ficou salva neste aparelho, mas não subiu pro servidor." });
    });
  }

  if (!hydrated) {
    return <LoadingScreen />;
  }

  if (!state.timetable) {
    return (
      <main className="max-w-4xl w-full mx-auto px-4 py-6 sm:py-8">
        <AppHeader gradeLabel={gradeLabel} networkLabel={networkLabel} isAdmin={isAdmin} teacherName={teacherName} />
        <p className="text-[var(--text-muted)] mb-6 max-w-[62ch]">
          Antes de começar, configure a grade fixa: qual matéria cai em cada horário, de segunda a sexta.
        </p>
        <TimetableEditor
          timetable={createEmptyTimetable()}
          canCancel={false}
          onSave={saveTimetable}
          onCancel={() => {}}
          allowedSubjects={allowedSubjects}
        />
      </main>
    );
  }

  function handleCellChange(day: Weekday, slot: SlotNumber, cell: WeekCell) {
    setState((s) => {
      const week = s.weeks[weekId];
      if (!week) return s;
      const updatedWeek: WeekPlan = {
        ...week,
        updatedAt: new Date().toISOString(),
        days: { ...week.days, [day]: { ...week.days[day], [slot]: cell } },
      };
      return { ...s, weeks: { ...s.weeks, [weekId]: updatedWeek } };
    });
  }

  /** Sorteia um plano para a matéria, evitando repetir tanto o histórico salvo quanto
   * os temas já sorteados nesta mesma leva (relevante para "Gerar semana inteira"). */
  function pickPlan(subjectKey: OwnSubject | "leitura-diaria", extraRecent: string[] = [], keyword = "") {
    const historyThemes = state.themeHistory
      .filter((t) => t.subject === subjectKey)
      .sort((a, b) => (a.usedAt < b.usedAt ? 1 : -1))
      .slice(0, 8)
      .map((t) => t.theme);
    const entry = pickThemeEntry(network, gradeYear, subjectKey, [...extraRecent, ...historyThemes], keyword);
    if (!entry.theme) return null;
    const plan: GeneratedLessonPlan = {
      theme: entry.theme,
      curriculumCode: entry.curriculumCode,
      description: entry.description,
      materials: entry.materials,
      steps: entry.steps,
      classScript: entry.classScript,
      readingText: entry.readingText,
      genre: entry.genre,
      generatedAt: new Date().toISOString(),
      editedManually: false,
      fullLessonPlan: entry.fullLessonPlan,
    };
    return plan;
  }

  function generateCell(day: Weekday, slot: SlotNumber, keyword = "") {
    const week = currentWeek;
    if (!week) return;
    const cell = week.days[day][slot];
    if (cell.kind === "materia-externa") return;

    const subjectKey = cell.kind === "leitura-diaria" ? "leitura-diaria" : cell.subject;
    const plan = pickPlan(subjectKey, [], keyword);
    if (!plan) {
      showToast({
        tone: "error",
        message: keyword.trim()
          ? `Nenhum tema encontrado para "${keyword.trim()}". Tente outra palavra ou deixe em branco.`
          : "O banco de temas dessa matéria ainda está vazio. Preencha manualmente por enquanto.",
      });
      return;
    }

    setState((s) => {
      const w = s.weeks[weekId];
      if (!w) return s;
      const existingCell = w.days[day][slot];
      if (existingCell.kind === "materia-externa") return s;
      const updatedCell: WeekCell =
        existingCell.kind === "leitura-diaria"
          ? { kind: "leitura-diaria", plan }
          : { kind: "materia-propria", subject: existingCell.subject, plan };
      const updatedWeek: WeekPlan = {
        ...w,
        updatedAt: new Date().toISOString(),
        days: { ...w.days, [day]: { ...w.days[day], [slot]: updatedCell } },
      };
      return {
        ...s,
        weeks: { ...s.weeks, [weekId]: updatedWeek },
        themeHistory: [
          ...s.themeHistory,
          { subject: subjectKey, theme: plan.theme, weekId, usedAt: new Date().toISOString() },
        ],
      };
    });
  }

  function requestGenerateWeek() {
    const week = currentWeek;
    if (!week) return;
    let empty = 0;
    let filled = 0;
    for (const day of WEEKDAYS) {
      for (const slot of SLOT_NUMBERS) {
        const cell = week.days[day][slot];
        if (cell.kind === "materia-externa") continue;
        if (cell.plan.theme) filled++;
        else empty++;
      }
    }
    if (empty + filled === 0) return;
    setPendingGenerate({ empty, filled });
  }

  function generateWeek(mode: GenerateWeekMode) {
    const week = currentWeek;
    if (!week) return;
    const targets: { day: Weekday; slot: SlotNumber }[] = [];
    for (const day of WEEKDAYS) {
      for (const slot of SLOT_NUMBERS) {
        const cell = week.days[day][slot];
        if (cell.kind === "materia-externa") continue;
        if (mode === "empty" && cell.plan.theme) continue;
        targets.push({ day, slot });
      }
    }
    if (targets.length === 0) return;

    const pickedPerSubject: Partial<Record<OwnSubject | "leitura-diaria", string[]>> = {};
    const updates: { day: Weekday; slot: SlotNumber; subjectKey: OwnSubject | "leitura-diaria"; plan: GeneratedLessonPlan }[] =
      [];
    let anyEmptyBank = false;

    for (const { day, slot } of targets) {
      const cell = week.days[day][slot];
      if (cell.kind === "materia-externa") continue;
      const subjectKey = cell.kind === "leitura-diaria" ? "leitura-diaria" : cell.subject;
      const extra = pickedPerSubject[subjectKey] ?? [];
      const plan = pickPlan(subjectKey, extra);
      if (!plan) {
        anyEmptyBank = true;
        continue;
      }
      pickedPerSubject[subjectKey] = [...extra, plan.theme];
      updates.push({ day, slot, subjectKey, plan });
    }

    if (updates.length === 0) {
      if (anyEmptyBank) showToast({ tone: "error", message: "O banco de temas está vazio pra essas matérias." });
      return;
    }

    // Snapshot pro "Desfazer": semana e histórico como estavam antes desta leva.
    const previousWeekSnapshot = week;
    const previousHistoryLength = state.themeHistory.length;

    setState((s) => {
      const w = s.weeks[weekId];
      if (!w) return s;
      let days = w.days;
      const newHistory = [...s.themeHistory];
      for (const { day, slot, subjectKey, plan } of updates) {
        const existingCell = days[day][slot];
        if (existingCell.kind === "materia-externa") continue;
        const updatedCell: WeekCell =
          existingCell.kind === "leitura-diaria"
            ? { kind: "leitura-diaria", plan }
            : { kind: "materia-propria", subject: existingCell.subject, plan };
        days = { ...days, [day]: { ...days[day], [slot]: updatedCell } };
        newHistory.push({ subject: subjectKey, theme: plan.theme, weekId, usedAt: new Date().toISOString() });
      }
      return {
        ...s,
        weeks: { ...s.weeks, [weekId]: { ...w, updatedAt: new Date().toISOString(), days } },
        themeHistory: newHistory,
      };
    });

    const n = updates.length;
    showToast({
      tone: "success",
      message: anyEmptyBank
        ? `${n} aula${n === 1 ? "" : "s"} gerada${n === 1 ? "" : "s"}. Alguma matéria sem banco foi pulada.`
        : `${n} aula${n === 1 ? "" : "s"} gerada${n === 1 ? "" : "s"}.`,
      action: {
        label: "Desfazer",
        onClick: () =>
          setState((s) => ({
            ...s,
            weeks: { ...s.weeks, [weekId]: previousWeekSnapshot },
            themeHistory: s.themeHistory.slice(0, previousHistoryLength),
          })),
      },
    });
  }

  function handleCreateBlankWeek() {
    if (!state.timetable) return;
    const week = buildWeekPlan(state.timetable, weekId, viewedMonday);
    setState((s) => ({ ...s, weeks: { ...s.weeks, [weekId]: week } }));
  }

  function handleDuplicatePrevious() {
    if (!previousWeek) return;
    const week = duplicateWeekPlan(previousWeek, weekId, viewedMonday, true);
    setState((s) => ({ ...s, weeks: { ...s.weeks, [weekId]: week } }));
  }

  function handleExportPdf() {
    window.print();
  }

  function handleJumpToWeek(weekStartDate: string) {
    setViewedMonday(weekStartDate);
    setPanel(null);
  }

  function handleDeleteThemeHistoryEntry(index: number) {
    setState((s) => ({ ...s, themeHistory: s.themeHistory.filter((_, i) => i !== index) }));
  }

  /** Chamada ao imprimir/exportar uma atividade: marca as questões que saíram na folha como
   * "já usada", pra sinalizar (sem bloquear) da próxima vez que a mesma professora montar
   * atividade pro mesmo tema. Não marca de novo o que já estava marcado. */
  function markExercisesUsed(subjectKey: OwnSubject | "leitura-diaria", theme: string, exercises: SourcedExercise[]) {
    setState((s) => {
      const already = new Set(
        s.usedExercises.filter((e) => e.subject === subjectKey && e.theme === theme).map((e) => e.exerciseKey)
      );
      const usedAt = new Date().toISOString();
      const newEntries = exercises
        .filter((ex) => !already.has(exerciseKey(ex)))
        .map((ex) => ({ subject: subjectKey, theme, exerciseKey: exerciseKey(ex), usedAt }));
      if (newEntries.length === 0) return s;
      return { ...s, usedExercises: [...s.usedExercises, ...newEntries] };
    });
  }

  function handleGoToday() {
    setViewedMonday(getMondayISO());
  }

  function handleJumpToDate(isoDate: string) {
    setViewedMonday(getMondayISO(new Date(`${isoDate}T00:00:00`)));
  }

  async function handleShareWeek() {
    if (!currentWeek) return;
    setShareState({ status: "loading" });
    try {
      const token = await createShareLinkAction(currentWeek, state.subjectColorOverrides);
      setShareState({ status: "ready", url: `${window.location.origin}/compartilhado/${token}` });
    } catch (err) {
      console.error("Falha ao gerar link de compartilhamento:", err);
      setShareState({ status: "error", message: "Não foi possível gerar o link. Tente novamente." });
    }
  }

  const closePanel = () => setPanel(null);

  return (
    <main className="max-w-6xl w-full mx-auto px-4 py-6 sm:py-8 flex-1">
      <AppHeader
        gradeLabel={gradeLabel}
        networkLabel={networkLabel}
        menuGroups={menuGroups}
        isAdmin={isAdmin}
        teacherName={teacherName}
        status={<SyncIndicator />}
      />

      {panel === "timetable" ? (
        <TimetableEditor
          timetable={state.timetable}
          canCancel
          onSave={(t) => {
            saveTimetable(t);
            closePanel();
          }}
          onCancel={closePanel}
          allowedSubjects={allowedSubjects}
        />
      ) : panel === "colors" ? (
        <SubjectColorEditor
          overrides={state.subjectColorOverrides}
          onSave={(overrides) => {
            setState((s) => ({ ...s, subjectColorOverrides: overrides }));
            closePanel();
          }}
          onCancel={closePanel}
          allowedSubjects={allowedSubjects}
        />
      ) : panel === "history" ? (
        <ThemeHistoryPanel
          history={state.themeHistory}
          weekStartDates={weekStartDates}
          colorOverrides={state.subjectColorOverrides}
          onClose={closePanel}
          onJumpToWeek={handleJumpToWeek}
          onDeleteEntry={handleDeleteThemeHistoryEntry}
          allowedSubjects={allowedSubjects}
        />
      ) : panel === "coverage" ? (
        <CurriculumCoveragePanel
          weeks={state.weeks}
          network={network}
          gradeYear={gradeYear}
          onClose={closePanel}
          onJumpToWeek={handleJumpToWeek}
          allowedSubjects={allowedSubjects}
        />
      ) : panel === "overview" ? (
        <PeriodOverviewPanel
          weeks={state.weeks}
          currentWeekId={weekId}
          onClose={closePanel}
          onJumpToWeek={handleJumpToWeek}
        />
      ) : panel === "bank" ? (
        <ContentBankPanel
          colorOverrides={state.subjectColorOverrides}
          network={network}
          gradeYear={gradeYear}
          usedExercises={state.usedExercises}
          onMarkExercisesUsed={markExercisesUsed}
          onClose={closePanel}
          allowedSubjects={allowedSubjects}
        />
      ) : (
        <>
          <WeekNav
            weekStartDate={viewedMonday}
            weekId={weekId}
            hasSavedWeek={Boolean(currentWeek)}
            progress={progress}
            onPrevWeek={() => setViewedMonday((d) => addWeeksISO(d, -1))}
            onNextWeek={() => setViewedMonday((d) => addWeeksISO(d, 1))}
            onGoToday={handleGoToday}
            onJumpToDate={handleJumpToDate}
            savedWeeks={savedWeeks}
            onJumpToWeek={setViewedMonday}
          />

          {currentWeek ? (
            <WeekGrid
              week={currentWeek}
              colorOverrides={state.subjectColorOverrides}
              onCellChange={handleCellChange}
              onGenerateCell={generateCell}
              onGenerateWeek={requestGenerateWeek}
              onExportPdf={handleExportPdf}
              onShare={handleShareWeek}
              shareLoading={shareState?.status === "loading"}
              gradeYear={gradeYear}
              usedExercises={state.usedExercises}
              onMarkExercisesUsed={markExercisesUsed}
            />
          ) : (
            <EmptyWeekPrompt
              hasPreviousWeek={Boolean(previousWeek)}
              onCreateBlank={handleCreateBlankWeek}
              onDuplicatePrevious={handleDuplicatePrevious}
            />
          )}
        </>
      )}

      {pendingGenerate && (
        <GenerateWeekModal
          emptyCount={pendingGenerate.empty}
          filledCount={pendingGenerate.filled}
          onConfirm={(mode) => {
            setPendingGenerate(null);
            generateWeek(mode);
          }}
          onCancel={() => setPendingGenerate(null)}
        />
      )}

      {shareState && (
        <ShareModal
          status={shareState.status}
          url={shareState.status === "ready" ? shareState.url : undefined}
          errorMessage={shareState.status === "error" ? shareState.message : undefined}
          onClose={() => setShareState(null)}
          onRetry={handleShareWeek}
        />
      )}

      <Toast toast={toast} onDismiss={dismissToast} />
    </main>
  );
}
