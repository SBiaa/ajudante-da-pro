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
import { LessonCardCompact } from "./LessonCardCompact";
import { ExternalCard } from "./ExternalCard";
import { CatSpinner } from "./CatSpinner";
import { LessonDetailModal } from "./LessonDetailModal";
import { ColorKey, SubjectColorOverrides, resolveSubjectColor } from "@/lib/subjectColors";
import { toISODate, addDaysISO } from "@/lib/date";

/** Versão curta do dia da semana — as abas do modo mobile não têm espaço pro rótulo completo
 * usado no cabeçalho de coluna da grade ("Segunda-feira" etc). */
const WEEKDAY_SHORT_LABELS: Record<Weekday, string> = {
  segunda: "Seg",
  terca: "Ter",
  quarta: "Qua",
  quinta: "Qui",
  sexta: "Sex",
};

type Props = {
  week: WeekPlan;
  colorOverrides: SubjectColorOverrides;
  onCellChange?: (day: Weekday, slot: SlotNumber, cell: WeekCell) => void;
  onGenerateCell?: (day: Weekday, slot: SlotNumber, keyword?: string) => void;
  onGenerateWeek?: () => void;
  onExportPdf: () => void;
  onShare?: () => void;
  shareLoading?: boolean;
  /** true na página pública de compartilhamento: sem gerar, editar ou compartilhar de novo —
   * só visualizar e exportar PDF. */
  readOnly?: boolean;
};

function colorKeyFor(cell: WeekCell): ColorKey {
  if (cell.kind === "leitura-diaria") return "leitura-diaria";
  if (cell.kind === "materia-propria") return cell.subject;
  return "externa";
}

export function WeekGrid({
  week,
  colorOverrides,
  onCellChange,
  onGenerateCell,
  onGenerateWeek,
  onExportPdf,
  onShare,
  shareLoading = false,
  readOnly = false,
}: Props) {
  const [detailKey, setDetailKey] = useState<{ day: Weekday; slot: SlotNumber } | null>(null);
  const detailCell = detailKey ? week.days[detailKey.day][detailKey.slot] : null;

  // No mobile já abre no dia de hoje (se ele cair dentro da semana em exibição) em vez de
  // sempre começar na segunda — é o dia que a professora quer ver ao abrir o celular.
  const [mobileDay, setMobileDay] = useState<Weekday>(() => {
    const todayISO = toISODate(new Date());
    const idx = WEEKDAYS.findIndex((_, i) => addDaysISO(week.weekStartDate, i) === todayISO);
    return idx >= 0 ? WEEKDAYS[idx] : WEEKDAYS[0];
  });

  function renderCell(day: Weekday, slot: SlotNumber) {
    const cell = week.days[day][slot];
    const color = resolveSubjectColor(colorKeyFor(cell), colorOverrides);
    return (
      <div
        style={{ borderLeftColor: color.text, background: color.bg }}
        className="week-cell-card relative h-full rounded-[var(--radius-lg)] border border-[var(--border-subtle)] border-l-4 p-2 min-h-[150px] shadow-[var(--shadow-sm)]"
      >
        {cell.kind === "materia-externa" ? (
          <ExternalCard
            label={cell.label}
            color={color}
            activity={cell.activity}
            readOnly={readOnly}
            onChange={onCellChange ? (activity) => onCellChange(day, slot, { ...cell, activity }) : undefined}
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
  }

  return (
    <div>
      <div className="print:hidden flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>{readOnly && <span className="text-sm text-[var(--text-muted)]">Somente leitura</span>}</div>

        <div className="flex gap-2">
          {!readOnly && onGenerateWeek && (
            <button
              onClick={onGenerateWeek}
              type="button"
              className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975]"
            >
              Gerar semana inteira
            </button>
          )}
          {!readOnly && onShare && (
            <button
              onClick={onShare}
              type="button"
              disabled={shareLoading}
              className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)] disabled:opacity-[0.5] disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-[var(--border-subtle)]"
            >
              {shareLoading && <CatSpinner />}
              {shareLoading ? "Gerando link…" : "Compartilhar semana"}
            </button>
          )}
          <button
            onClick={onExportPdf}
            type="button"
            className="text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)]"
          >
            Exportar PDF
          </button>
        </div>
      </div>

      {/* Grade completa (6 colunas) — só cabe de sm pra cima; em telas de celular vira colunas
       * de ~60px, ilegíveis, daí a versão por dia logo abaixo. */}
      <div className="hidden sm:grid gap-2" style={{ gridTemplateColumns: "44px repeat(5, minmax(0, 1fr))" }}>
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
            {WEEKDAYS.map((day) => (
              <div key={`${day}-${slot}`}>{renderCell(day, slot)}</div>
            ))}
          </Fragment>
        ))}
      </div>

      {/* Versão mobile: abas de dia + as aulas daquele dia empilhadas, com largura total pra
       * cada card ficar legível (em vez de espremer 5 dias lado a lado numa tela estreita). */}
      <div className="sm:hidden">
        <div
          role="tablist"
          aria-label="Escolher dia da semana"
          className="flex gap-1.5 overflow-x-auto pb-1 mb-3 -mx-4 px-4"
        >
          {WEEKDAYS.map((day) => (
            <button
              key={day}
              type="button"
              role="tab"
              aria-selected={mobileDay === day}
              onClick={() => setMobileDay(day)}
              className={`flex-none text-sm px-4 py-1.5 rounded-full border transition-colors ${
                mobileDay === day
                  ? "bg-[var(--action-primary)] border-[var(--action-primary)] text-white"
                  : "border-[var(--border-subtle)] text-[var(--text-body)]"
              }`}
            >
              {WEEKDAY_SHORT_LABELS[day]}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          {SLOT_NUMBERS.map((slot) => (
            <div key={slot} className="flex gap-2 items-stretch">
              <div className="flex-none w-6 flex items-start justify-center pt-2 text-sm font-medium text-[var(--ink-400)]">
                {slot}ª
              </div>
              <div className="flex-1 min-w-0">{renderCell(mobileDay, slot)}</div>
            </div>
          ))}
        </div>
      </div>

      {detailCell && detailCell.kind !== "materia-externa" && detailKey && (
        <LessonDetailModal
          title={detailCell.kind === "leitura-diaria" ? "Leitura Diária" : OWN_SUBJECT_LABELS[detailCell.subject]}
          color={resolveSubjectColor(colorKeyFor(detailCell), colorOverrides)}
          context={`${WEEKDAY_LABELS[detailKey.day]} · ${detailKey.slot}ª aula`}
          subjectKey={detailCell.kind === "leitura-diaria" ? "leitura-diaria" : detailCell.subject}
          plan={detailCell.plan}
          isReading={detailCell.kind === "leitura-diaria"}
          onChange={(plan) => onCellChange?.(detailKey.day, detailKey.slot, { ...detailCell, plan })}
          onGenerate={(keyword) => onGenerateCell?.(detailKey.day, detailKey.slot, keyword)}
          onClose={() => setDetailKey(null)}
          readOnly={readOnly}
        />
      )}
    </div>
  );
}
