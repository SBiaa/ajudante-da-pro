"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
} from "@/types/plano";
import { useAppState } from "@/hooks/useAppState";
import { getMondayISO, getWeekId, addWeeksISO } from "@/lib/date";
import { createEmptyTimetable, buildWeekPlan, duplicateWeekPlan, syncWeeksWithTimetable } from "@/lib/timetable";
import { pickThemeEntry } from "@/lib/themePicker";
import { TimetableEditor } from "@/components/TimetableEditor";
import { WeekNav } from "@/components/WeekNav";
import { WeekGrid } from "@/components/WeekGrid";
import { EmptyWeekPrompt } from "@/components/EmptyWeekPrompt";
import { AppHeader } from "@/components/AppHeader";
import { SubjectColorEditor } from "@/components/SubjectColorEditor";
import { ThemeHistoryPanel } from "@/components/ThemeHistoryPanel";
import { CurriculumCoveragePanel } from "@/components/CurriculumCoveragePanel";
import { PeriodOverviewPanel } from "@/components/PeriodOverviewPanel";
import { ConfirmModal } from "@/components/ConfirmModal";
import { ShareModal } from "@/components/ShareModal";
import { LoadingScreen } from "@/components/LoadingScreen";
import { saveStoredTimetableAction, createShareLinkAction } from "@/app/actions";

type Props = {
  userId: number;
  initialTimetable: WeeklyTimetable | null;
  gradeLabel: string;
  initialAppData: StoredAppData | null;
};

export default function HomeClient({ userId, initialTimetable, gradeLabel, initialAppData }: Props) {
  const { state, setState, hydrated } = useAppState(userId);
  const [viewedMonday, setViewedMonday] = useState(() => getMondayISO());
  const [showTimetableEditor, setShowTimetableEditor] = useState(false);
  const [showColorEditor, setShowColorEditor] = useState(false);
  const [showThemeHistory, setShowThemeHistory] = useState(false);
  const [showCoverage, setShowCoverage] = useState(false);
  const [showPeriodOverview, setShowPeriodOverview] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pendingGenerateWeekCount, setPendingGenerateWeekCount] = useState<number | null>(null);
  const [shareState, setShareState] = useState<
    { status: "loading" } | { status: "ready"; url: string } | { status: "error"; message: string } | null
  >(null);

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
  const menuItems = useMemo(
    () => [
      { label: "Editar grade fixa", onClick: () => setShowTimetableEditor(true) },
      { label: "Cores das matérias", onClick: () => setShowColorEditor(true) },
      { label: "Temas já dados", onClick: () => setShowThemeHistory(true) },
      { label: "Cobertura curricular", onClick: () => setShowCoverage(true) },
      { label: "Visão geral", onClick: () => setShowPeriodOverview(true) },
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
          subjectColorOverrides: initialAppData.subjectColorOverrides,
        };
      }
      return next;
    });
  }, [hydrated, initialTimetable, initialAppData, setState]);

  function saveTimetable(t: WeeklyTimetable) {
    setState((s) => ({ ...s, timetable: t, weeks: syncWeeksWithTimetable(s.weeks, t, weekId) }));
    saveStoredTimetableAction(t).catch((err) => console.error("Falha ao sincronizar grade horária:", err));
  }

  if (!hydrated) {
    return <LoadingScreen />;
  }

  if (!state.timetable) {
    return (
      <main className="max-w-4xl w-full mx-auto px-4 py-8">
        <AppHeader gradeLabel={gradeLabel} />
        <p className="text-[var(--text-muted)] mb-6 max-w-[62ch]">
          Antes de começar, configure a grade fixa: qual matéria cai em cada horário, de segunda a sexta.
        </p>
        <TimetableEditor
          timetable={createEmptyTimetable()}
          canCancel={false}
          onSave={saveTimetable}
          onCancel={() => {}}
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
    const entry = pickThemeEntry(subjectKey, [...extraRecent, ...historyThemes], keyword);
    if (!entry.theme) return null;
    const plan: GeneratedLessonPlan = {
      theme: entry.theme,
      curriculumCode: entry.curriculumCode,
      description: entry.description,
      materials: entry.materials,
      steps: entry.steps,
      readingText: entry.readingText,
      genre: entry.genre,
      generatedAt: new Date().toISOString(),
      editedManually: false,
    };
    return plan;
  }

  function generateCell(day: Weekday, slot: SlotNumber, keyword = "") {
    const week = currentWeek;
    if (!week) return;
    const cell = week.days[day][slot];
    if (cell.kind === "materia-externa") return;
    setError(null);

    const subjectKey = cell.kind === "leitura-diaria" ? "leitura-diaria" : cell.subject;
    const plan = pickPlan(subjectKey, [], keyword);
    if (!plan) {
      setError(
        keyword.trim()
          ? `Nenhum tema encontrado para "${keyword.trim()}". Tente outra palavra ou deixe em branco para gerar livremente.`
          : "O banco de temas dessa matéria ainda está vazio. Preencha manualmente por enquanto."
      );
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
    let count = 0;
    for (const day of WEEKDAYS) {
      for (const slot of SLOT_NUMBERS) {
        if (week.days[day][slot].kind !== "materia-externa") count++;
      }
    }
    if (count === 0) return;
    setPendingGenerateWeekCount(count);
  }

  function generateWeek() {
    const week = currentWeek;
    if (!week) return;
    const targets: { day: Weekday; slot: SlotNumber }[] = [];
    for (const day of WEEKDAYS) {
      for (const slot of SLOT_NUMBERS) {
        if (week.days[day][slot].kind !== "materia-externa") targets.push({ day, slot });
      }
    }
    if (targets.length === 0) return;
    setError(null);

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

    if (anyEmptyBank) {
      setError("Alguma matéria com banco de temas vazio foi pulada — preencha essas manualmente.");
    }
    if (updates.length === 0) return;

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
    setShowThemeHistory(false);
    setShowCoverage(false);
    setShowPeriodOverview(false);
  }

  function handleDeleteThemeHistoryEntry(index: number) {
    setState((s) => ({ ...s, themeHistory: s.themeHistory.filter((_, i) => i !== index) }));
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

  return (
    <main className="max-w-6xl w-full mx-auto px-4 py-8 flex-1">
      <AppHeader gradeLabel={gradeLabel} menuItems={menuItems} />

      {showTimetableEditor ? (
        <TimetableEditor
          timetable={state.timetable}
          canCancel
          onSave={(t) => {
            saveTimetable(t);
            setShowTimetableEditor(false);
          }}
          onCancel={() => setShowTimetableEditor(false)}
        />
      ) : showColorEditor ? (
        <SubjectColorEditor
          overrides={state.subjectColorOverrides}
          onSave={(overrides) => {
            setState((s) => ({ ...s, subjectColorOverrides: overrides }));
            setShowColorEditor(false);
          }}
          onCancel={() => setShowColorEditor(false)}
        />
      ) : showThemeHistory ? (
        <ThemeHistoryPanel
          history={state.themeHistory}
          weekStartDates={weekStartDates}
          onClose={() => setShowThemeHistory(false)}
          onJumpToWeek={handleJumpToWeek}
          onDeleteEntry={handleDeleteThemeHistoryEntry}
        />
      ) : showCoverage ? (
        <CurriculumCoveragePanel weeks={state.weeks} onClose={() => setShowCoverage(false)} onJumpToWeek={handleJumpToWeek} />
      ) : showPeriodOverview ? (
        <PeriodOverviewPanel
          weeks={state.weeks}
          currentWeekId={weekId}
          onClose={() => setShowPeriodOverview(false)}
          onJumpToWeek={handleJumpToWeek}
        />
      ) : (
        <>
          <WeekNav
            weekStartDate={viewedMonday}
            weekId={weekId}
            hasSavedWeek={Boolean(currentWeek)}
            onPrevWeek={() => setViewedMonday((d) => addWeeksISO(d, -1))}
            onNextWeek={() => setViewedMonday((d) => addWeeksISO(d, 1))}
            onGoToday={handleGoToday}
            onJumpToDate={handleJumpToDate}
            savedWeeks={savedWeeks}
            onJumpToWeek={setViewedMonday}
          />

          {error && (
            <div className="print:hidden mb-4 text-sm text-[var(--red-600)] bg-[var(--red-100)] rounded-[var(--radius-md)] px-3 py-2">
              {error}
            </div>
          )}

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

      {pendingGenerateWeekCount !== null && (
        <ConfirmModal
          title="Gerar semana inteira?"
          message={`Isso vai gerar um novo tema para ${pendingGenerateWeekCount} aula${
            pendingGenerateWeekCount === 1 ? "" : "s"
          } desta semana, substituindo o conteúdo já preenchido nelas.`}
          confirmLabel="Gerar semana"
          onConfirm={() => {
            setPendingGenerateWeekCount(null);
            generateWeek();
          }}
          onCancel={() => setPendingGenerateWeekCount(null)}
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
    </main>
  );
}
