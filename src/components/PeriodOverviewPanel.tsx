"use client";

import { useMemo, useState } from "react";
import { WeekPlan } from "@/types/plano";
import {
  addDaysISO,
  addWeeksISO,
  formatFullDate,
  getMondayISO,
  getWeekId,
  listMondaysBetween,
  toISODate,
} from "@/lib/date";

type Props = {
  weeks: Record<string, WeekPlan>;
  currentWeekId: string;
  onClose: () => void;
  onJumpToWeek: (weekStartDate: string) => void;
};

type PresetKey = "bimestre" | "semestre" | "personalizado";

const secondaryButton =
  "text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white";

function todayMonday(): string {
  return getMondayISO(new Date(`${toISODate(new Date())}T00:00:00`));
}

export function PeriodOverviewPanel({ weeks, currentWeekId, onClose, onJumpToWeek }: Props) {
  const [preset, setPreset] = useState<PresetKey>("bimestre");
  const [customFrom, setCustomFrom] = useState(() => addWeeksISO(todayMonday(), -4));
  const [customTo, setCustomTo] = useState(() => addWeeksISO(todayMonday(), 4));

  const { from, to } = useMemo(() => {
    const monday = todayMonday();
    if (preset === "bimestre") return { from: addWeeksISO(monday, -4), to: addWeeksISO(monday, 4) };
    if (preset === "semestre") return { from: addWeeksISO(monday, -12), to: addWeeksISO(monday, 12) };
    return { from: customFrom, to: customTo };
  }, [preset, customFrom, customTo]);

  const rows = useMemo(() => {
    if (!from || !to || from > to) return [];
    return listMondaysBetween(getMondayISO(new Date(`${from}T00:00:00`)), getMondayISO(new Date(`${to}T00:00:00`))).map(
      (monday) => {
        const weekId = getWeekId(monday);
        return { weekId, weekStartDate: monday, hasSavedWeek: Boolean(weeks[weekId]) };
      }
    );
  }, [from, to, weeks]);

  const savedCount = rows.filter((r) => r.hasSavedWeek).length;

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)]">
      <h2 className="text-[24px] mb-1">Visão geral do período</h2>
      <p className="text-sm text-[var(--text-muted)] mb-4 max-w-[62ch]">
        Todas as semanas do período, salvas ou não — pra enxergar de uma vez o que já está pronto e
        pular direto pra qualquer uma.
      </p>

      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {(
          [
            ["bimestre", "Bimestre (±4 semanas)"],
            ["semestre", "Semestre (±12 semanas)"],
            ["personalizado", "Personalizado"],
          ] as [PresetKey, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setPreset(key)}
            type="button"
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              preset === key
                ? "border-[var(--plum-900)] bg-[var(--plum-900)] text-white"
                : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--plum-900)]"
            }`}
          >
            {label}
          </button>
        ))}
        {preset === "personalizado" && (
          <span className="flex items-center gap-1.5">
            <input
              type="date"
              value={customFrom}
              onChange={(e) => setCustomFrom(e.target.value)}
              aria-label="De"
              className="text-xs px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
            <span className="text-xs text-[var(--text-muted)]">até</span>
            <input
              type="date"
              value={customTo}
              onChange={(e) => setCustomTo(e.target.value)}
              aria-label="Até"
              className="text-xs px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
          </span>
        )}
      </div>

      <p className="text-sm text-[var(--text-body)] mb-3">
        <strong>{savedCount}</strong> de <strong>{rows.length}</strong> semanas salvas nesse período.
      </p>

      {rows.length === 0 ? (
        <p className="text-sm text-[var(--text-muted)] py-6 text-center">Período inválido — ajuste as datas.</p>
      ) : (
        <div className="flex flex-col divide-y divide-[var(--border-subtle)] max-h-[28rem] overflow-y-auto">
          {rows.map((row) => {
            const isCurrent = row.weekId === currentWeekId;
            return (
              <button
                key={row.weekId}
                onClick={() => onJumpToWeek(row.weekStartDate)}
                type="button"
                className={`flex flex-wrap items-center gap-3 py-2.5 text-left transition-colors hover:bg-[var(--surface-subtle)] ${
                  isCurrent ? "bg-[var(--plum-100)]" : ""
                }`}
              >
                <span className="flex-1 min-w-[220px] text-sm text-[var(--text-body)]">
                  {formatFullDate(row.weekStartDate)} – {formatFullDate(addDaysISO(row.weekStartDate, 4))}
                  {isCurrent && <span className="ml-2 text-xs text-[var(--plum-900)] font-medium">(atual)</span>}
                </span>
                <span className="text-xs text-[var(--text-muted)]">{row.weekId}</span>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.06em] ${
                    row.hasSavedWeek ? "bg-[var(--plum-100)] text-[var(--plum-900)]" : "bg-[var(--ink-100)] text-[var(--ink-600)]"
                  }`}
                >
                  {row.hasSavedWeek ? "salva" : "vazia"}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <button onClick={onClose} type="button" className={secondaryButton}>
          Fechar
        </button>
      </div>
    </div>
  );
}
