"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  WEEKDAYS,
  WeekCell,
  WeekPlan,
  Weekday,
  SlotNumber,
  OwnSubject,
  GeneratedLessonPlan,
  cellAt,
} from "@/types/plano";
import { useApp } from "@/components/AppShell";
import { useWeekActions } from "@/hooks/useWeekActions";
import { getMondayISO, addWeeksISO } from "@/lib/date";
import { buildWeekPlan, copyWeekContent } from "@/lib/timetable";
import { weekProgress } from "@/lib/weekHelpers";
import { WeekNav } from "@/components/WeekNav";
import { WeekGrid } from "@/components/WeekGrid";
import { EmptyWeekPrompt } from "@/components/EmptyWeekPrompt";
import { GenerateWeekModal, GenerateWeekMode } from "@/components/GenerateWeekModal";
import { ShareModal } from "@/components/ShareModal";
import { CopyWeekModal } from "@/components/CopyWeekModal";
import { Button } from "@/components/Button";
import { DropdownMenu } from "@/components/DropdownMenu";
import { createShareLinkAction } from "@/app/actions";

/** Aba "Semana": a grade da semana com navegação, geração em lote e compartilhamento. */
export default function SemanaClient() {
  const router = useRouter();
  const { state, setState, gradeYear, slots, viewedMonday, setViewedMonday, showToast, classes, activeClass, activeClassId, setup, getClassView, updateClass } =
    useApp();
  const { weekId, week: currentWeek, previousWeek, pickPlan, handleCellChange, generateCell, createBlankWeek, duplicatePrevious, markExercisesUsed } =
    useWeekActions(viewedMonday);
  const [copyOpen, setCopyOpen] = useState(false);
  const [pendingGenerate, setPendingGenerate] = useState<{ empty: number; filled: number } | null>(null);
  const [shareState, setShareState] = useState<
    { status: "loading" } | { status: "ready"; url: string } | { status: "error"; message: string } | null
  >(null);

  const savedWeeks = useMemo(
    () =>
      Object.values(state.weeks)
        .map((w) => ({ weekId: w.id, weekStartDate: w.weekStartDate }))
        .sort((a, b) => (a.weekStartDate < b.weekStartDate ? -1 : 1)),
    [state.weeks]
  );
  const progress = useMemo(() => weekProgress(currentWeek, slots), [currentWeek, slots]);

  function requestGenerateWeek() {
    const week = currentWeek;
    if (!week) return;
    let empty = 0;
    let filled = 0;
    for (const day of WEEKDAYS) {
      for (const slot of slots) {
        const cell = cellAt(week, day, slot);
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
      for (const slot of slots) {
        const cell = cellAt(week, day, slot);
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
      const cell = cellAt(week, day, slot);
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
    const previousWeekSnapshot: WeekPlan = week;
    const previousHistoryLength = state.themeHistory.length;

    setState((s) => {
      const w = s.weeks[weekId];
      if (!w) return s;
      let days = w.days;
      const newHistory = [...s.themeHistory];
      for (const { day, slot, subjectKey, plan } of updates) {
        const existingCell = days[day]?.[slot];
        if (!existingCell || existingCell.kind === "materia-externa") continue;
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

  async function handleShareWeek() {
    if (!currentWeek) return;
    setShareState({ status: "loading" });
    try {
      const token = await createShareLinkAction(currentWeek, state.subjectColorOverrides, activeClass.cls.label);
      setShareState({ status: "ready", url: `${window.location.origin}/compartilhado/${token}` });
    } catch (err) {
      console.error("Falha ao gerar link de compartilhamento:", err);
      setShareState({ status: "error", message: "Não foi possível gerar o link. Tente novamente." });
    }
  }

  /** Replica os temas desta semana pras turmas escolhidas (só células vazias e de mesma matéria). */
  function copyWeekTo(classIds: string[]) {
    if (!currentWeek) return;
    let total = 0;
    let touched = 0;
    for (const id of classIds) {
      const view = getClassView(id);
      if (!view.timetable) continue;
      const base = view.weeks[weekId] ?? buildWeekPlan(view.timetable, weekId, viewedMonday);
      const { week: merged, copied } = copyWeekContent(currentWeek, base);
      if (copied.length === 0 && view.weeks[weekId]) continue;
      total += copied.length;
      touched += 1;
      const usedAt = new Date().toISOString();
      updateClass(id, (v) => ({
        ...v,
        weeks: { ...v.weeks, [weekId]: merged },
        themeHistory: [
          ...v.themeHistory,
          ...copied.map((c) => ({
            subject: c.subject as OwnSubject | "leitura-diaria",
            theme: c.theme,
            weekId,
            usedAt,
          })),
        ],
      }));
    }
    setCopyOpen(false);
    showToast({
      tone: total > 0 ? "success" : "info",
      message:
        total > 0
          ? `${total} aula${total === 1 ? "" : "s"} copiada${total === 1 ? "" : "s"} para ${touched} turma${touched === 1 ? "" : "s"}.`
          : "Nada para copiar: as aulas de lá já estão preenchidas ou têm outras matérias.",
    });
  }

  const copyTargets = classes
    .filter((c) => c.cls.id !== activeClassId)
    .map((entry) => ({
      entry,
      blocked: getClassView(entry.cls.id).timetable ? undefined : "monte o horário dessa turma primeiro",
    }));

  if (!state.timetable) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-dashed border-[var(--border-strong)] bg-white p-8 text-center">
        <p className="text-[var(--text-muted)] mb-4">
          A turma <strong>{activeClass.cls.label}</strong> ainda não tem horário de aulas.
        </p>
        <Link href="/grade" className="inline-block">
          <Button variant="primary">Montar o horário</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <WeekNav
        weekStartDate={viewedMonday}
        weekId={weekId}
        hasSavedWeek={Boolean(currentWeek)}
        progress={progress}
        onPrevWeek={() => setViewedMonday(addWeeksISO(viewedMonday, -1))}
        onNextWeek={() => setViewedMonday(addWeeksISO(viewedMonday, 1))}
        onGoToday={() => setViewedMonday(getMondayISO())}
        onJumpToDate={(isoDate) => setViewedMonday(getMondayISO(new Date(`${isoDate}T00:00:00`)))}
        savedWeeks={savedWeeks}
        onJumpToWeek={setViewedMonday}
        actions={
          <>
            {currentWeek && (
              <Button variant="primary" onClick={requestGenerateWeek} className="max-sm:flex-1">
                Gerar temas da semana
              </Button>
            )}
            <DropdownMenu
              align="right"
              triggerClassName="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-white text-[var(--text-body)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)] cursor-pointer"
              panelClassName="w-64"
              trigger={
                <>
                  <span className="sr-only">Mais ações da semana</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="5" cy="12" r="1.6" />
                    <circle cx="12" cy="12" r="1.6" />
                    <circle cx="19" cy="12" r="1.6" />
                  </svg>
                </>
              }
            >
              {(close) => (
                <>
                  {currentWeek && (
                    <>
                      <button
                        type="button"
                        role="menuitem"
                        className="menu-link"
                        disabled={shareState?.status === "loading"}
                        onClick={() => {
                          close();
                          handleShareWeek();
                        }}
                      >
                        Compartilhar semana
                      </button>
                      <button
                        type="button"
                        role="menuitem"
                        className="menu-link"
                        onClick={() => {
                          close();
                          window.print();
                        }}
                      >
                        Exportar PDF
                      </button>
                      {classes.length > 1 && (
                        <button
                          type="button"
                          role="menuitem"
                          className="menu-link"
                          onClick={() => {
                            close();
                            setCopyOpen(true);
                          }}
                        >
                          Copiar para outras turmas
                        </button>
                      )}
                      <div className="my-1 border-t border-[var(--border-subtle)]" />
                    </>
                  )}
                  <button
                    type="button"
                    role="menuitem"
                    className="menu-link"
                    onClick={() => {
                      close();
                      router.push("/grade");
                    }}
                  >
                    Editar horário e cores
                  </button>
                </>
              )}
            </DropdownMenu>
          </>
        }
      />

      {currentWeek ? (
        <WeekGrid
          week={currentWeek}
          colorOverrides={state.subjectColorOverrides}
          onCellChange={handleCellChange}
          onGenerateCell={generateCell}
          onGenerateWeek={requestGenerateWeek}
          onExportPdf={() => window.print()}
          hideToolbar
          onShare={handleShareWeek}
          shareLoading={shareState?.status === "loading"}
          gradeYear={gradeYear}
          usedExercises={state.usedExercises}
          onMarkExercisesUsed={markExercisesUsed}
          slots={slots}
        />
      ) : (
        <EmptyWeekPrompt
          hasPreviousWeek={Boolean(previousWeek)}
          onCreateBlank={createBlankWeek}
          onDuplicatePrevious={duplicatePrevious}
        />
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

      {copyOpen && (
        <CopyWeekModal
          source={activeClass}
          targets={copyTargets}
          multipleSchools={setup.schools.length > 1}
          onConfirm={copyWeekTo}
          onCancel={() => setCopyOpen(false)}
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
    </>
  );
}
