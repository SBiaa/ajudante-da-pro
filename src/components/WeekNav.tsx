"use client";

import { formatFullDate, addDaysISO, getMondayISO, getWeekId } from "@/lib/date";

export type SavedWeekEntry = { weekId: string; weekStartDate: string };

type Props = {
  weekStartDate: string;
  weekId: string;
  hasSavedWeek: boolean;
  onPrevWeek: () => void;
  onNextWeek: () => void;
  onGoToday: () => void;
  onJumpToDate: (isoDate: string) => void;
  savedWeeks: SavedWeekEntry[];
  onJumpToWeek: (weekStartDate: string) => void;
};

const secondaryButton =
  "text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white";

export function WeekNav({
  weekStartDate,
  weekId,
  hasSavedWeek,
  onPrevWeek,
  onNextWeek,
  onGoToday,
  onJumpToDate,
  savedWeeks,
  onJumpToWeek,
}: Props) {
  const friday = addDaysISO(weekStartDate, 4);
  const isCurrentWeek = weekId === getWeekId(getMondayISO());

  return (
    <div className="mb-4">
      <div className="mb-3">
        <h2 className="text-[24px]">
          Semana de {formatFullDate(weekStartDate)} a {formatFullDate(friday)}
        </h2>
        <div className="mt-1 flex items-center gap-2 text-xs text-[var(--text-muted)]">
          <span>{weekId}</span>
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.06em] ${
              hasSavedWeek ? "bg-[var(--plum-100)] text-[var(--plum-900)]" : "bg-[var(--ink-100)] text-[var(--ink-600)]"
            }`}
          >
            {hasSavedWeek ? "salva" : "ainda não criada"}
          </span>
        </div>
      </div>

      <div className="print:hidden flex flex-wrap items-center gap-2">
        <button onClick={onPrevWeek} type="button" className={secondaryButton}>
          ← Semana anterior
        </button>
        <button
          onClick={onGoToday}
          type="button"
          disabled={isCurrentWeek}
          title={isCurrentWeek ? "Você já está na semana atual" : undefined}
          className={`${secondaryButton} disabled:opacity-[0.5] disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[var(--plum-900)]`}
        >
          Hoje
        </button>
        <button onClick={onNextWeek} type="button" className={secondaryButton}>
          Próxima semana →
        </button>
        <input
          type="date"
          onChange={(e) => {
            if (e.target.value) onJumpToDate(e.target.value);
          }}
          aria-label="Ir para a semana de uma data específica"
          title="Ir para a semana de uma data específica"
          className="text-sm px-3 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
        />
        <details className="relative">
          <summary className={`${secondaryButton} list-none [&::-webkit-details-marker]:hidden cursor-pointer`}>
            Semanas salvas {savedWeeks.length > 0 && `(${savedWeeks.length})`}
          </summary>
          <div className="absolute left-0 z-20 mt-2 w-72 max-h-80 overflow-y-auto rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-white p-2 shadow-[var(--shadow-lg)]">
            {savedWeeks.length === 0 ? (
              <p className="text-xs text-[var(--text-muted)] px-2 py-1.5">Nenhuma semana salva ainda.</p>
            ) : (
              savedWeeks.map((w) => (
                <button
                  key={w.weekId}
                  type="button"
                  onClick={(e) => {
                    onJumpToWeek(w.weekStartDate);
                    e.currentTarget.closest("details")?.removeAttribute("open");
                  }}
                  className={`block w-full text-left text-sm px-2.5 py-1.5 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--surface-subtle)] ${
                    w.weekId === weekId ? "bg-[var(--plum-100)] text-[var(--plum-900)] font-medium" : "text-[var(--text-body)]"
                  }`}
                >
                  {formatFullDate(w.weekStartDate)} – {formatFullDate(addDaysISO(w.weekStartDate, 4))}
                  <span className="block text-[11px] text-[var(--text-muted)]">{w.weekId}</span>
                </button>
              ))
            )}
          </div>
        </details>
      </div>
    </div>
  );
}
