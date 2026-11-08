"use client";

import { ReactNode } from "react";
import { formatFullDate, addDaysISO, getMondayISO, getWeekId } from "@/lib/date";
import { DropdownMenu } from "./DropdownMenu";

export type SavedWeekEntry = { weekId: string; weekStartDate: string };

type Props = {
  weekStartDate: string;
  weekId: string;
  hasSavedWeek: boolean;
  /** Quantas aulas da semana já têm tema, e quantas podem ter (as externas não contam). */
  progress?: { filled: number; total: number };
  onPrevWeek: () => void;
  onNextWeek: () => void;
  onGoToday: () => void;
  onJumpToDate: (isoDate: string) => void;
  savedWeeks: SavedWeekEntry[];
  onJumpToWeek: (weekStartDate: string) => void;
  /** Ações da semana (botão principal + menu "⋯"), na mesma linha da navegação. */
  actions?: ReactNode;
};

const MONTHS = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

/** "2 a 6 de novembro" (ou "30 de outubro a 3 de novembro"). O ano só aparece quando não é o
 * ano corrente — o título antigo repetia "de 2026" duas vezes e quebrava em duas linhas. */
function weekRangeLabel(mondayISO: string): string {
  const fridayISO = addDaysISO(mondayISO, 4);
  const [y1, m1, d1] = mondayISO.split("-").map(Number);
  const [y2, m2, d2] = fridayISO.split("-").map(Number);
  const year = y2 !== new Date().getFullYear() ? ` de ${y2}` : "";
  if (m1 === m2) return `${d1} a ${d2} de ${MONTHS[m2 - 1]}${year}`;
  const firstYear = y1 !== y2 ? ` de ${y1}` : "";
  return `${d1} de ${MONTHS[m1 - 1]}${firstYear} a ${d2} de ${MONTHS[m2 - 1]}${year}`;
}

function weekNumber(weekId: string): string | null {
  const match = weekId.match(/W(\d+)$/);
  return match ? String(parseInt(match[1], 10)) : null;
}

const segButton =
  "flex items-center justify-center h-9 min-w-9 px-2.5 text-sm font-medium text-[var(--text-body)] rounded-full transition-colors hover:bg-[var(--surface-subtle)] hover:text-[var(--text-strong)]";
const chevron = (d: string) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

export function WeekNav({
  weekStartDate,
  weekId,
  hasSavedWeek,
  progress,
  onPrevWeek,
  onNextWeek,
  onGoToday,
  onJumpToDate,
  savedWeeks,
  onJumpToWeek,
  actions,
}: Props) {
  const isCurrentWeek = weekId === getWeekId(getMondayISO());
  const num = weekNumber(weekId);

  return (
    <div className="mb-4 flex flex-col gap-3">
      <div>
        <h2 className="text-[22px] sm:text-[26px] leading-tight">
          {num && <span className="text-[var(--text-muted)] font-bold">Semana {num} · </span>}
          {weekRangeLabel(weekStartDate)}
        </h2>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[var(--text-muted)]">
          {isCurrentWeek && (
            <span className="inline-flex items-center rounded-full bg-[var(--surface-accent-soft)] text-[var(--text-accent)] px-2 py-0.5 text-xs font-semibold">
              Semana atual
            </span>
          )}
          {!hasSavedWeek ? (
            <span>Ainda sem plano</span>
          ) : progress && progress.total > 0 ? (
            <span className="inline-flex items-center gap-2" title="Aulas desta semana que já têm tema">
              <span
                className="inline-block h-1.5 w-20 rounded-full bg-[var(--ink-100)] overflow-hidden"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={progress.total}
                aria-valuenow={progress.filled}
                aria-label="Aulas com tema"
              >
                <span
                  className={`block h-full rounded-full transition-[width] ${
                    progress.filled >= progress.total ? "bg-[var(--green-500)]" : "bg-[var(--action-primary)]"
                  }`}
                  style={{ width: `${Math.round((progress.filled / progress.total) * 100)}%` }}
                />
              </span>
              {progress.filled} de {progress.total} aulas com tema
            </span>
          ) : (
            <span>Plano salvo</span>
          )}
        </div>
      </div>

      <div className="print:hidden flex flex-wrap items-center gap-2">
        <div
          role="group"
          aria-label="Navegar entre semanas"
          className="inline-flex items-center gap-0.5 rounded-full border border-[var(--border-subtle)] bg-white p-0.5"
        >
          <button onClick={onPrevWeek} type="button" aria-label="Semana anterior" title="Semana anterior" className={segButton}>
            {chevron("M15 6l-6 6 6 6")}
          </button>
          <button
            onClick={onGoToday}
            type="button"
            aria-pressed={isCurrentWeek}
            title={isCurrentWeek ? "Você está na semana atual" : "Voltar para a semana atual"}
            className={`${segButton} ${isCurrentWeek ? "!bg-[var(--plum-100)] !text-[var(--text-strong)]" : ""}`}
          >
            Hoje
          </button>
          <button onClick={onNextWeek} type="button" aria-label="Próxima semana" title="Próxima semana" className={segButton}>
            {chevron("M9 6l6 6-6 6")}
          </button>
        </div>

        {/* "Ir para data" e "Semanas salvas" eram dois botões; agora é um só seletor. */}
        <DropdownMenu
          align="left"
          triggerClassName="flex items-center gap-2 h-10 px-3.5 rounded-full border border-[var(--border-subtle)] bg-white text-sm font-medium text-[var(--text-body)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)] cursor-pointer"
          panelClassName="w-72"
          trigger={
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
              <span className="max-sm:sr-only">Escolher semana</span>
            </>
          }
        >
          {(close) => (
            <div className="flex flex-col">
              <label className="px-2.5 pt-1.5 pb-2 text-xs font-medium text-[var(--text-muted)]" htmlFor="week-jump-date">
                Ir para a semana de uma data
                <input
                  id="week-jump-date"
                  type="date"
                  onChange={(e) => {
                    if (e.target.value) {
                      onJumpToDate(e.target.value);
                      close();
                    }
                  }}
                  className="mt-1.5 block w-full h-10 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-white px-2.5 text-sm text-[var(--text-strong)]"
                />
              </label>
              <p className="mt-1 border-t border-[var(--border-subtle)] px-2.5 pt-2.5 pb-1 text-xs font-medium text-[var(--text-muted)]">
                Semanas salvas {savedWeeks.length > 0 && `(${savedWeeks.length})`}
              </p>
              <div className="max-h-64 overflow-y-auto">
                {savedWeeks.length === 0 ? (
                  <p className="text-sm text-[var(--text-muted)] px-2.5 py-1.5">Nenhuma semana salva ainda.</p>
                ) : (
                  savedWeeks.map((w) => {
                    const current = w.weekId === weekId;
                    return (
                      <button
                        key={w.weekId}
                        type="button"
                        role="menuitem"
                        aria-current={current ? "true" : undefined}
                        onClick={() => {
                          onJumpToWeek(w.weekStartDate);
                          close();
                        }}
                        className={`flex w-full items-baseline justify-between gap-3 text-left text-sm px-2.5 py-2 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--surface-subtle)] ${
                          current ? "bg-[var(--plum-100)] text-[var(--text-strong)] font-semibold" : "text-[var(--text-body)]"
                        }`}
                        title={`${formatFullDate(w.weekStartDate)} a ${formatFullDate(addDaysISO(w.weekStartDate, 4))}`}
                      >
                        <span>{weekRangeLabel(w.weekStartDate)}</span>
                        <span className="text-xs text-[var(--text-muted)] flex-none">Sem. {weekNumber(w.weekId)}</span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </DropdownMenu>

        {/* No celular ocupa o que sobrar da linha (ou a linha inteira, se quebrar), e o botão
         * principal estica junto. */}
        {actions && <div className="ml-auto flex items-center justify-end gap-2 max-sm:flex-1">{actions}</div>}
      </div>
    </div>
  );
}
