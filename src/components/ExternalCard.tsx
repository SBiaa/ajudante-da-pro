"use client";

import { ManualActivity } from "@/types/plano";
import { SUBJECT_COLORS, SubjectColor } from "@/lib/subjectColors";
import { SubjectTag } from "./SubjectTag";

type Props = {
  label: string;
  activity: ManualActivity;
  color?: SubjectColor;
  /** Abre a modal de edição — omitido no modo somente leitura. */
  onOpen?: () => void;
};

/**
 * Card de aula de outro professor (Ed. Física, Artes...) ou horário livre. Sem anotação, é um
 * horário vazio: o contêiner (WeekGrid) desenha o tracejado e aqui fica só "+ Anotar" — antes
 * "Sem anotação" ocupava um cartão cheio e pesava igual a uma aula pronta.
 */
export function ExternalCard({ label, activity, color = SUBJECT_COLORS.externa, onOpen }: Props) {
  const isEmpty = !activity.label;
  const content = (
    <>
      <SubjectTag
        label={label || "Outra atividade"}
        subjectKey="externa"
        color={color}
        variant={isEmpty ? "outline" : "solid"}
      />
      {isEmpty ? (
        onOpen ? (
          <span className="print:hidden mt-auto self-start inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--border-strong)] bg-white text-[var(--text-strong)]">
            <span aria-hidden="true">+</span> Anotar
          </span>
        ) : (
          <span className="text-sm text-[var(--text-muted)]">Sem atividade registrada</span>
        )
      ) : (
        <span className="text-sm text-[var(--text-body)] whitespace-pre-wrap line-clamp-4">{activity.label}</span>
      )}
    </>
  );

  if (!onOpen) {
    return <div className="flex flex-col gap-1.5 h-full">{content}</div>;
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      title={isEmpty ? "Anotar atividade" : "Editar anotação"}
      className="print:pointer-events-none flex flex-col gap-1.5 h-full w-full text-left rounded-[var(--radius-md)]"
    >
      {content}
    </button>
  );
}
