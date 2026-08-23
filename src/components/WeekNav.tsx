"use client";

import { formatFullDate, addDaysISO } from "@/lib/date";

type Props = {
  weekStartDate: string;
  weekId: string;
  hasSavedWeek: boolean;
  onPrevWeek: () => void;
  onNextWeek: () => void;
  onOpenTimetable: () => void;
  onOpenColorEditor: () => void;
};

const secondaryButton =
  "text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white";

export function WeekNav({
  weekStartDate,
  weekId,
  hasSavedWeek,
  onPrevWeek,
  onNextWeek,
  onOpenTimetable,
  onOpenColorEditor,
}: Props) {
  const friday = addDaysISO(weekStartDate, 4);
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div>
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
      <div className="print:hidden flex flex-wrap gap-2">
        <button onClick={onPrevWeek} type="button" className={secondaryButton}>
          ← Semana anterior
        </button>
        <button onClick={onNextWeek} type="button" className={secondaryButton}>
          Próxima semana →
        </button>
        <button onClick={onOpenTimetable} type="button" className={secondaryButton}>
          Editar grade fixa
        </button>
        <button onClick={onOpenColorEditor} type="button" className={secondaryButton}>
          Cores das matérias
        </button>
      </div>
    </div>
  );
}
