"use client";

import { GeneratedLessonPlan } from "@/types/plano";
import { ColorKey, SubjectColor } from "@/lib/subjectColors";
import { SubjectIcon } from "./SubjectIcon";

type Props = {
  title: string;
  subjectKey: ColorKey;
  color: SubjectColor;
  plan: GeneratedLessonPlan;
  onViewDetails: () => void;
};

/** Versão só-leitura do card da grade — usada no modo "Visualizar" pra reduzir o ruído de
 * ter ~30 inputs/textareas abertos ao mesmo tempo quando a professora só quer olhar a semana. */
export function LessonCardCompact({ title, subjectKey, color, plan, onViewDetails }: Props) {
  const badgeStyle = { background: color.text, color: "#ffffff" };

  return (
    <button
      type="button"
      onClick={onViewDetails}
      title="Ver detalhes"
      className="print:pointer-events-none flex flex-col gap-1.5 h-full w-full text-left rounded-[var(--radius-md)] transition-opacity hover:opacity-80"
    >
      <span
        style={badgeStyle}
        className="self-start inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] whitespace-nowrap"
      >
        <SubjectIcon subjectKey={subjectKey} />
        {title}
      </span>

      {plan.theme ? (
        <span className="text-sm font-medium text-[var(--text-strong)] line-clamp-2">{plan.theme}</span>
      ) : (
        <span className="text-sm italic text-[var(--text-muted)]">Sem tema ainda — clique para gerar</span>
      )}

      {plan.description && <span className="text-xs text-[var(--text-muted)] line-clamp-2">{plan.description}</span>}

      {plan.editedManually && <span className="mt-auto text-[10px] text-[var(--amber-600)]">Editado manualmente</span>}
    </button>
  );
}
