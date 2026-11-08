"use client";

import { Fragment, useState } from "react";
import {
  WEEKDAYS,
  WEEKDAY_LABELS,
  cellAt,
  OWN_SUBJECT_LABELS,
  OwnSubject,
  WeekPlan,
  WeekCell,
  Weekday,
  SlotNumber,
  UsedExerciseEntry,
} from "@/types/plano";
import { LessonCardCompact } from "./LessonCardCompact";
import { ExternalCard } from "./ExternalCard";
import { ExternalActivityModal } from "./ExternalActivityModal";
import { LessonDetailModal } from "./LessonDetailModal";
import { DropdownMenu } from "./DropdownMenu";
import { Button } from "./Button";
import { SubjectColorOverrides, resolveSubjectColor } from "@/lib/subjectColors";
import { colorKeyFor, slotsInWeek, todayWeekday } from "@/lib/weekHelpers";
import { SourcedExercise } from "@/lib/mergedActivityPicker";

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
  /** Desempata atividade/lição de casa quando o mesmo tema existe em mais de um ano (ver
   * ActivityEntry.gradeYear). Ausente na página pública de compartilhamento, que hoje não
   * guarda o ano — nesse caso cai no primeiro resultado encontrado, como antes. */
  gradeYear?: string;
  /** Questões já impressas antes (ver ActivitySheetModal) — ausente na página pública de
   * compartilhamento, que não tem esse histórico. */
  usedExercises?: UsedExerciseEntry[];
  onMarkExercisesUsed?: (subjectKey: OwnSubject | "leitura-diaria", theme: string, exercises: SourcedExercise[]) => void;
  /** Horários a mostrar (aulas por dia da escola). Ausente na página pública de
   * compartilhamento: aí mostra os horários que a semana tem salvos. */
  slots?: SlotNumber[];
  /** true na Semana: as ações (Gerar, Compartilhar, PDF) ficam na linha do WeekNav. */
  hideToolbar?: boolean;
};

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
  gradeYear,
  usedExercises,
  onMarkExercisesUsed,
  slots: slotsProp,
  hideToolbar = false,
}: Props) {
  const slots = slotsProp ?? slotsInWeek(week);
  const [detailKey, setDetailKey] = useState<{ day: Weekday; slot: SlotNumber } | null>(null);
  const detailCell = detailKey ? cellAt(week, detailKey.day, detailKey.slot) : null;
  const today = todayWeekday(week.weekStartDate);

  // No mobile já abre no dia de hoje (se ele cair dentro da semana em exibição) em vez de
  // sempre começar na segunda — é o dia que a professora quer ver ao abrir o celular.
  const [mobileDay, setMobileDay] = useState<Weekday>(() => today ?? WEEKDAYS[0]);

  function renderCell(day: Weekday, slot: SlotNumber) {
    const cell = cellAt(week, day, slot);
    const color = resolveSubjectColor(colorKeyFor(cell), colorOverrides);
    const isToday = day === today;
    // Três estados: vazia (tracejado, sem fundo), planejada (fundo da matéria) e dada (✓ verde).
    const isEmpty = cell.kind === "materia-externa" ? !cell.activity.label : !cell.plan.theme;
    const isGiven = cell.kind !== "materia-externa" && !isEmpty && Boolean(cell.plan.givenAt);
    return (
      <div
        style={isEmpty ? undefined : { background: color.bg }}
        className={`week-cell-card relative h-full rounded-[var(--radius-lg)] p-2.5 min-h-[128px] transition-[border-color,box-shadow] ${
          isEmpty
            ? "border border-dashed border-[var(--border-strong)] bg-transparent hover:border-[var(--action-primary)]"
            : `border shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] ${
                isToday ? "border-[var(--border-strong)]" : "border-[var(--border-subtle)]"
              }`
        }`}
      >
        {cell.kind === "materia-externa" ? (
          <ExternalCard
            label={cell.label}
            color={color}
            activity={cell.activity}
            onOpen={readOnly ? undefined : () => setDetailKey({ day, slot })}
          />
        ) : (
          <LessonCardCompact
            title={cell.kind === "leitura-diaria" ? "Leitura Diária" : OWN_SUBJECT_LABELS[cell.subject]}
            subjectKey={colorKeyFor(cell)}
            color={color}
            plan={cell.plan}
            given={isGiven}
            onViewDetails={() => setDetailKey({ day, slot })}
            onGenerate={!readOnly && onGenerateCell ? () => onGenerateCell(day, slot) : undefined}
          />
        )}
      </div>
    );
  }

  const secondaryActions = (
    <>
      {!readOnly && onShare && (
        <Button variant="secondary" onClick={onShare} loading={shareLoading}>
          {shareLoading ? "Gerando link…" : "Compartilhar semana"}
        </Button>
      )}
      <Button variant="secondary" onClick={onExportPdf}>
        Exportar PDF
      </Button>
    </>
  );

  return (
    <div>
      {!hideToolbar && (
      <div className="print:hidden flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>{readOnly && <span className="text-sm text-[var(--text-muted)]">Somente leitura</span>}</div>

        {/* Desktop: as três ações lado a lado. Mobile: só a primária + um menu "⋯", senão as
         * três pílulas quebravam em três linhas (com o texto quebrando dentro delas). */}
        <div className="hidden sm:flex gap-2">
          {!readOnly && onGenerateWeek && (
            <Button variant="primary" onClick={onGenerateWeek}>
              Gerar temas da semana
            </Button>
          )}
          {secondaryActions}
        </div>
        <div className="flex sm:hidden gap-2 w-full justify-end">
          {!readOnly && onGenerateWeek && (
            <Button variant="primary" onClick={onGenerateWeek} className="flex-1">
              Gerar temas da semana
            </Button>
          )}
          <DropdownMenu
            align="right"
            triggerClassName="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border-subtle)] bg-white text-[var(--text-body)] text-lg leading-none"
            panelClassName="w-52"
            trigger={
              <span aria-label="Mais ações" title="Mais ações">
                ⋯
              </span>
            }
          >
            {(close) => (
              <div className="flex flex-col gap-1">
                {!readOnly && onShare && (
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onShare();
                      close();
                    }}
                    className="block w-full text-left text-sm px-3 py-2 rounded-[var(--radius-sm)] text-[var(--text-body)] hover:bg-[var(--surface-subtle)]"
                  >
                    Compartilhar semana
                  </button>
                )}
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    onExportPdf();
                    close();
                  }}
                  className="block w-full text-left text-sm px-3 py-2 rounded-[var(--radius-sm)] text-[var(--text-body)] hover:bg-[var(--surface-subtle)]"
                >
                  Exportar PDF
                </button>
              </div>
            )}
          </DropdownMenu>
        </div>
      </div>
      )}

      {/* Grade completa (6 colunas) — só cabe de sm pra cima; em telas de celular vira colunas
       * de ~60px, ilegíveis, daí a versão por dia logo abaixo. */}
      <div className="hidden sm:grid gap-2" style={{ gridTemplateColumns: "44px repeat(5, minmax(0, 1fr))" }}>
        {/* Cabeçalho dos dias fixo no topo ao rolar: com 6 linhas de 150px, a referência de
         * coluna sumia já na 3ª aula. */}
        <div className="sticky top-[var(--sticky-top,0px)] z-10 bg-[var(--background)]" />
        {WEEKDAYS.map((day) => {
          const isToday = day === today;
          return (
            <div
              key={day}
              className={`sticky top-[var(--sticky-top,0px)] z-10 bg-[var(--background)] text-center text-[12px] font-medium uppercase tracking-[0.18em] pt-1 pb-1.5 ${
                isToday ? "text-[var(--text-brand)]" : "text-[var(--text-muted)]"
              }`}
            >
              <span
                className={
                  isToday
                    ? "inline-flex items-center gap-1.5 rounded-full bg-[var(--surface-brand-soft)] px-2.5 py-0.5"
                    : ""
                }
              >
                {WEEKDAY_LABELS[day]}
                {isToday && <span className="text-[11px] tracking-[0.06em] normal-case font-semibold">hoje</span>}
              </span>
            </div>
          );
        })}

        {slots.map((slot) => (
          <Fragment key={slot}>
            <div className="flex items-start justify-center pt-2 text-sm font-medium text-[var(--ink-400)]">{slot}ª</div>
            {WEEKDAYS.map((day) => (
              <div key={`${day}-${slot}`} className={day === today ? "rounded-[var(--radius-lg)] ring-2 ring-[var(--plum-200)]" : ""}>
                {renderCell(day, slot)}
              </div>
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
                  : "border-[var(--border-subtle)] bg-white text-[var(--text-body)]"
              }`}
            >
              {WEEKDAY_SHORT_LABELS[day]}
              {day === today && (
                <span className="ml-1 text-[11px] uppercase tracking-[0.06em] opacity-80">hoje</span>
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          {slots.map((slot) => (
            <div key={slot} className="flex gap-2 items-stretch">
              <div className="flex-none w-6 flex items-start justify-center pt-2 text-sm font-medium text-[var(--ink-400)]">
                {slot}ª
              </div>
              <div className="flex-1 min-w-0">{renderCell(mobileDay, slot)}</div>
            </div>
          ))}
        </div>
      </div>

      {detailCell && detailKey && detailCell.kind !== "materia-externa" && (
        <LessonDetailModal
          title={detailCell.kind === "leitura-diaria" ? "Leitura Diária" : OWN_SUBJECT_LABELS[detailCell.subject]}
          color={resolveSubjectColor(colorKeyFor(detailCell), colorOverrides)}
          context={`${WEEKDAY_LABELS[detailKey.day]} · ${detailKey.slot}ª aula`}
          subjectKey={detailCell.kind === "leitura-diaria" ? "leitura-diaria" : detailCell.subject}
          plan={detailCell.plan}
          isReading={detailCell.kind === "leitura-diaria"}
          gradeYear={gradeYear}
          onChange={(plan) => onCellChange?.(detailKey.day, detailKey.slot, { ...detailCell, plan })}
          onGenerate={(keyword) => onGenerateCell?.(detailKey.day, detailKey.slot, keyword)}
          onClose={() => setDetailKey(null)}
          readOnly={readOnly}
          usedExercises={usedExercises}
          onMarkExercisesUsed={onMarkExercisesUsed}
        />
      )}

      {detailCell && detailKey && detailCell.kind === "materia-externa" && !readOnly && (
        <ExternalActivityModal
          label={detailCell.label}
          context={`${WEEKDAY_LABELS[detailKey.day]} · ${detailKey.slot}ª aula`}
          color={resolveSubjectColor("externa", colorOverrides)}
          activity={detailCell.activity}
          onSave={(activity) => onCellChange?.(detailKey.day, detailKey.slot, { ...detailCell, activity })}
          onClose={() => setDetailKey(null)}
        />
      )}
    </div>
  );
}
