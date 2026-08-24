"use client";

import { Fragment, useState } from "react";
import {
  WEEKDAYS,
  WEEKDAY_LABELS,
  SLOT_NUMBERS,
  OWN_SUBJECT_LABELS,
  WeekPlan,
  WeekCell,
  Weekday,
  SlotNumber,
} from "@/types/plano";
import { LessonCard } from "./LessonCard";
import { LessonCardCompact } from "./LessonCardCompact";
import { ExternalCard } from "./ExternalCard";
import { LessonDetailModal } from "./LessonDetailModal";
import { ColorKey, SubjectColorOverrides, resolveSubjectColor } from "@/lib/subjectColors";

type GridMode = "view" | "edit";

type Props = {
  week: WeekPlan;
  colorOverrides: SubjectColorOverrides;
  onCellChange: (day: Weekday, slot: SlotNumber, cell: WeekCell) => void;
  onGenerateCell: (day: Weekday, slot: SlotNumber, keyword?: string) => void;
  onGenerateWeek: () => void;
  onExportPdf: () => void;
};

function colorKeyFor(cell: WeekCell): ColorKey {
  if (cell.kind === "leitura-diaria") return "leitura-diaria";
  if (cell.kind === "materia-propria") return cell.subject;
  return "externa";
}

export function WeekGrid({ week, colorOverrides, onCellChange, onGenerateCell, onGenerateWeek, onExportPdf }: Props) {
  const [detailKey, setDetailKey] = useState<{ day: Weekday; slot: SlotNumber } | null>(null);
  const [mode, setMode] = useState<GridMode>("view");
  const detailCell = detailKey ? week.days[detailKey.day][detailKey.slot] : null;

  return (
    <div>
      <div className="print:hidden flex flex-wrap items-center justify-between gap-2 mb-3">
        <div
          role="radiogroup"
          aria-label="Modo de exibição da grade"
          className="inline-flex rounded-full border border-[var(--border-subtle)] bg-white p-0.5"
        >
          <button
            type="button"
            role="radio"
            aria-checked={mode === "view"}
            onClick={() => setMode("view")}
            className={`text-sm px-3.5 py-1 rounded-full transition-colors ${
              mode === "view" ? "bg-[var(--action-primary)] text-white" : "text-[var(--text-body)] hover:bg-[var(--surface-subtle)]"
            }`}
          >
            Visualizar
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={mode === "edit"}
            onClick={() => setMode("edit")}
            className={`text-sm px-3.5 py-1 rounded-full transition-colors ${
              mode === "edit" ? "bg-[var(--action-primary)] text-white" : "text-[var(--text-body)] hover:bg-[var(--surface-subtle)]"
            }`}
          >
            Editar
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onGenerateWeek}
            type="button"
            className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975]"
          >
            Sortear semana inteira
          </button>
          <button
            onClick={onExportPdf}
            type="button"
            className="text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white"
          >
            Exportar PDF
          </button>
        </div>
      </div>

      <div className="grid gap-2" style={{ gridTemplateColumns: "44px repeat(5, minmax(0, 1fr))" }}>
        <div />
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)] pb-1"
          >
            {WEEKDAY_LABELS[day]}
          </div>
        ))}

        {SLOT_NUMBERS.map((slot) => (
          <Fragment key={slot}>
            <div className="flex items-start justify-center pt-2 text-sm font-medium text-[var(--ink-400)]">{slot}ª</div>
            {WEEKDAYS.map((day) => {
              const cell = week.days[day][slot];
              const key = `${day}-${slot}`;
              const color = resolveSubjectColor(colorKeyFor(cell), colorOverrides);
              return (
                <div
                  key={key}
                  style={{ borderLeftColor: color.text, background: color.bg }}
                  className="week-cell-card relative rounded-[var(--radius-lg)] border border-[var(--border-subtle)] border-l-4 p-2 min-h-[150px] shadow-[var(--shadow-sm)]"
                >
                  {cell.kind === "materia-externa" ? (
                    <ExternalCard
                      label={cell.label}
                      color={color}
                      activity={cell.activity}
                      onChange={(activity) => onCellChange(day, slot, { ...cell, activity })}
                    />
                  ) : mode === "edit" ? (
                    <LessonCard
                      title={cell.kind === "leitura-diaria" ? "Leitura Diária" : OWN_SUBJECT_LABELS[cell.subject]}
                      subjectKey={colorKeyFor(cell)}
                      color={color}
                      plan={cell.plan}
                      onChange={(plan) => onCellChange(day, slot, { ...cell, plan })}
                      onViewDetails={() => setDetailKey({ day, slot })}
                    />
                  ) : (
                    <LessonCardCompact
                      title={cell.kind === "leitura-diaria" ? "Leitura Diária" : OWN_SUBJECT_LABELS[cell.subject]}
                      subjectKey={colorKeyFor(cell)}
                      color={color}
                      plan={cell.plan}
                      onViewDetails={() => setDetailKey({ day, slot })}
                    />
                  )}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>

      {detailCell && detailCell.kind !== "materia-externa" && detailKey && (
        <LessonDetailModal
          title={detailCell.kind === "leitura-diaria" ? "Leitura Diária" : OWN_SUBJECT_LABELS[detailCell.subject]}
          color={resolveSubjectColor(colorKeyFor(detailCell), colorOverrides)}
          context={`${WEEKDAY_LABELS[detailKey.day]} · ${detailKey.slot}ª aula`}
          subjectKey={detailCell.kind === "leitura-diaria" ? "leitura-diaria" : detailCell.subject}
          plan={detailCell.plan}
          isReading={detailCell.kind === "leitura-diaria"}
          onChange={(plan) => onCellChange(detailKey.day, detailKey.slot, { ...detailCell, plan })}
          onGenerate={(keyword) => onGenerateCell(detailKey.day, detailKey.slot, keyword)}
          onClose={() => setDetailKey(null)}
        />
      )}
    </div>
  );
}
