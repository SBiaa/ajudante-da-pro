"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/AppShell";
import { getWeekId } from "@/lib/date";
import { CurriculumCoveragePanel } from "@/components/CurriculumCoveragePanel";
import { ThemeHistoryPanel } from "@/components/ThemeHistoryPanel";
import { PeriodOverviewPanel } from "@/components/PeriodOverviewPanel";

type View = "coverage" | "history" | "overview";

const VIEWS: { id: View; label: string; hint: string }[] = [
  { id: "coverage", label: "Habilidades", hint: "O que do currículo já foi trabalhado" },
  { id: "history", label: "Temas dados", hint: "Cada tema que você já deu, por matéria" },
  { id: "overview", label: "Semana a semana", hint: "Visão do período, semana por semana" },
];

/** Aba "Progresso": junta as três consultas sobre o que já foi dado (antes eram três itens soltos
 * no menu Ferramentas, respondendo quase à mesma pergunta). */
export function ProgressoClient() {
  const router = useRouter();
  const { state, setState, network, gradeYear, allowedSubjects, viewedMonday, setViewedMonday } = useApp();
  const [view, setView] = useState<View>("coverage");

  const weekStartDates = useMemo(
    () => Object.fromEntries(Object.values(state.weeks).map((w) => [w.id, w.weekStartDate])),
    [state.weeks]
  );

  function jumpToWeek(weekStartDate: string) {
    setViewedMonday(weekStartDate);
    router.push("/semana");
  }
  const close = () => router.push("/semana");

  return (
    <div>
      <div role="tablist" aria-label="Tipo de progresso" className="print:hidden flex flex-wrap gap-2 mb-1">
        {VIEWS.map((v) => (
          <button
            key={v.id}
            type="button"
            role="tab"
            aria-selected={view === v.id}
            onClick={() => setView(v.id)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
              view === v.id
                ? "border-[var(--action-primary)] bg-[var(--surface-brand-soft)] text-[var(--text-strong)] font-medium"
                : "border-[var(--border-subtle)] bg-white text-[var(--text-body)] hover:border-[var(--border-strong)]"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
      <p className="print:hidden text-xs text-[var(--text-muted)] mb-4">{VIEWS.find((v) => v.id === view)?.hint}</p>

      {view === "coverage" ? (
        <CurriculumCoveragePanel
          weeks={state.weeks}
          network={network}
          gradeYear={gradeYear}
          onClose={close}
          onJumpToWeek={jumpToWeek}
          allowedSubjects={allowedSubjects}
        />
      ) : view === "history" ? (
        <ThemeHistoryPanel
          history={state.themeHistory}
          weekStartDates={weekStartDates}
          colorOverrides={state.subjectColorOverrides}
          onClose={close}
          onJumpToWeek={jumpToWeek}
          onDeleteEntry={(index) =>
            setState((s) => ({ ...s, themeHistory: s.themeHistory.filter((_, i) => i !== index) }))
          }
          allowedSubjects={allowedSubjects}
        />
      ) : (
        <PeriodOverviewPanel
          weeks={state.weeks}
          currentWeekId={getWeekId(viewedMonday)}
          onClose={close}
          onJumpToWeek={jumpToWeek}
        />
      )}
    </div>
  );
}
