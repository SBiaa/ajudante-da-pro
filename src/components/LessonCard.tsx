"use client";

import { GeneratedLessonPlan } from "@/types/plano";
import { CopyButton } from "./CopyButton";
import { SubjectColor } from "@/lib/subjectColors";

type Props = {
  title: string;
  color: SubjectColor;
  plan: GeneratedLessonPlan;
  onChange: (plan: GeneratedLessonPlan) => void;
  onViewDetails: () => void;
};

const fieldClass =
  "text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-1";

export function LessonCard({ title, color, plan, onChange, onViewDetails }: Props) {
  const sgpText = [plan.curriculumCode, plan.description].filter(Boolean).join(" — ");
  // Selo em cor sólida (não color.bg): o card inteiro já usa color.bg de fundo,
  // então o selo precisa de contraste próprio para não se misturar com o card.
  const badgeStyle = { background: color.text, color: "#ffffff" };

  return (
    <div className="flex flex-col gap-1.5 h-full">
      <button
        type="button"
        onClick={onViewDetails}
        title="Ver detalhes"
        style={badgeStyle}
        className="print:pointer-events-none self-start inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] hover:opacity-80 text-left whitespace-nowrap"
      >
        {title}
      </button>

      <input
        value={plan.theme}
        onChange={(e) => onChange({ ...plan, theme: e.target.value, editedManually: true })}
        placeholder="Tema / assunto"
        className={fieldClass}
      />
      <textarea
        value={plan.description}
        onChange={(e) => onChange({ ...plan, description: e.target.value, editedManually: true })}
        placeholder="Descrição curta da atividade"
        rows={2}
        className={`${fieldClass} text-xs resize-none`}
      />

      <div className="mt-auto flex justify-end">
        <CopyButton text={sgpText} label="Copiar p/ SGP" />
      </div>
    </div>
  );
}
