"use client";

import { useEffect, useMemo, useState } from "react";
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
import { createEmptyTimetable, buildWeekPlan, duplicateWeekPlan } from "@/lib/timetable";
import { pickThemeEntry } from "@/lib/themePicker";
import { TimetableEditor } from "@/components/TimetableEditor";
import { WeekNav } from "@/components/WeekNav";
import { WeekGrid } from "@/components/WeekGrid";
import { EmptyWeekPrompt } from "@/components/EmptyWeekPrompt";
import { AppHeader } from "@/components/AppHeader";
import { SubjectColorEditor } from "@/components/SubjectColorEditor";
import { saveStoredTimetableAction } from "@/app/actions";

type Props = {
  initialTimetable: WeeklyTimetable | null;
};

export default function HomeClient({ initialTimetable }: Props) {
  const { state, setState, hydrated } = useAppState();
  const [viewedMonday, setViewedMonday] = useState(() => getMondayISO());
  const [showTimetableEditor, setShowTimetableEditor] = useState(false);
  const [showColorEditor, setShowColorEditor] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const weekId = useMemo(() => getWeekId(viewedMonday), [viewedMonday]);
  const currentWeek = state.weeks[weekId];
  const previousMonday = useMemo(() => addWeeksISO(viewedMonday, -1), [viewedMonday]);
  const previousWeek = state.weeks[getWeekId(previousMonday)];

  // Se o localStorage deste dispositivo ainda não tem grade fixa, adota a que já está
  // salva no banco (outro dispositivo/sessão anterior), evitando pedir pra configurar de novo.
  useEffect(() => {
    if (hydrated && !state.timetable && initialTimetable) {
      setState((s) => ({ ...s, timetable: initialTimetable }));
    }
  }, [hydrated, state.timetable, initialTimetable, setState]);

  function saveTimetable(t: WeeklyTimetable) {
    setState((s) => ({ ...s, timetable: t }));
    saveStoredTimetableAction(t).catch((err) => console.error("Falha ao sincronizar grade horária:", err));
  }

  if (!hydrated) {
    return <div className="flex-1 flex items-center justify-center text-[var(--text-muted)]">Carregando...</div>;
  }

  if (!state.timetable) {
    return (
      <main className="max-w-4xl w-full mx-auto px-4 py-8">
        <AppHeader />
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
          ? `Nenhum tema encontrado para "${keyword.trim()}". Tente outra palavra ou deixe em branco para sortear livremente.`
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
    const confirmed = window.confirm(
      `Sortear tema para ${targets.length} aulas desta semana? Isso substitui o conteúdo já preenchido nelas.`
    );
    if (!confirmed) return;
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

  return (
    <main className="max-w-6xl w-full mx-auto px-4 py-8 flex-1">
      <AppHeader />

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
      ) : (
        <>
          <WeekNav
            weekStartDate={viewedMonday}
            weekId={weekId}
            hasSavedWeek={Boolean(currentWeek)}
            onPrevWeek={() => setViewedMonday((d) => addWeeksISO(d, -1))}
            onNextWeek={() => setViewedMonday((d) => addWeeksISO(d, 1))}
            onOpenTimetable={() => setShowTimetableEditor(true)}
            onOpenColorEditor={() => setShowColorEditor(true)}
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
              onGenerateWeek={generateWeek}
              onExportPdf={handleExportPdf}
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
    </main>
  );
}
