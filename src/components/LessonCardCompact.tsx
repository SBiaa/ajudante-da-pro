"use client";

import { GeneratedLessonPlan } from "@/types/plano";
import { ColorKey, SubjectColor } from "@/lib/subjectColors";
import { SubjectTag } from "./SubjectTag";

type Props = {
  title: string;
  subjectKey: ColorKey;
  color: SubjectColor;
  plan: GeneratedLessonPlan;
  onViewDetails: () => void;
  /** Gera um tema direto do card, sem abrir a modal — antes um card vazio pedia dois cliques
   * (abrir a modal e depois "Gerar"). Ausente no modo somente leitura. */
  onGenerate?: () => void;
  /** Aula marcada como dada: ✓ verde ao lado da etiqueta. */
  given?: boolean;
};

/** Cartão de aula da grade. Três estados, decididos pelo contêiner em WeekGrid:
 * planejada (fundo da matéria), vazia (tracejado, sem fundo) e dada (✓ verde no canto).
 * A descrição completa fica no detalhe; aqui só o suficiente pra reconhecer a aula. */
export function LessonCardCompact({ title, subjectKey, color, plan, onViewDetails, onGenerate, given = false }: Props) {
  const isEmpty = !plan.theme;

  if (isEmpty) {
    return (
      <div className="flex flex-col gap-2 h-full">
        <button
          type="button"
          onClick={onViewDetails}
          title="Ver detalhes"
          className="print:pointer-events-none flex flex-col gap-1.5 w-full text-left rounded-[var(--radius-md)]"
        >
          <SubjectTag label={title} subjectKey={subjectKey} color={color} variant="outline" />
          <span className="text-sm text-[var(--text-muted)]">Sem tema ainda</span>
        </button>
        {onGenerate && (
          <button
            type="button"
            onClick={onGenerate}
            className="print:hidden mt-auto self-start inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--border-strong)] bg-white text-[var(--text-strong)] transition-colors hover:border-[var(--action-primary)] hover:text-[var(--plum-800)]"
          >
            <span aria-hidden="true">+</span> Gerar tema
          </button>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onViewDetails}
      title="Ver detalhes"
      className="print:pointer-events-none flex flex-col gap-1.5 h-full w-full text-left rounded-[var(--radius-md)]"
    >
      <span className="flex items-start justify-between gap-1.5 min-w-0">
        <span className="flex min-w-0">
          <SubjectTag label={title} subjectKey={subjectKey} color={color} />
        </span>
        {given && (
          <span
            className="flex-none grid place-items-center w-5 h-5 rounded-full bg-[var(--green-600)] text-white"
            title="Aula dada"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            <span className="sr-only">Aula dada</span>
          </span>
        )}
      </span>
      <span className="text-sm font-semibold leading-snug text-[var(--text-strong)] line-clamp-3">{plan.theme}</span>
      {plan.description && <span className="text-xs text-[var(--text-muted)] line-clamp-2">{plan.description}</span>}
      {plan.editedManually && <span className="mt-auto text-[11px] text-[var(--amber-text)]">Editado à mão</span>}
    </button>
  );
}
