"use client";

import { useState } from "react";
import { ManualActivity } from "@/types/plano";
import { SubjectColor } from "@/lib/subjectColors";
import { useDialog } from "@/hooks/useDialog";
import { Button } from "./Button";
import { CopyButton } from "./CopyButton";
import { SubjectIcon } from "./SubjectIcon";

type Props = {
  label: string;
  context: string;
  color: SubjectColor;
  activity: ManualActivity;
  onSave: (activity: ManualActivity) => void;
  onClose: () => void;
};

/** Anotação da aula de outro professor — rascunho local, só grava ao clicar em Salvar. */
export function ExternalActivityModal({ label, context, color, activity, onSave, onClose }: Props) {
  const [draft, setDraft] = useState(activity.label);
  const dialogRef = useDialog<HTMLDivElement>({ onClose });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="external-modal-title"
        className="modal-card relative w-full max-w-md rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-lg)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span
              style={{ background: color.bg, color: color.text }}
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em]"
            >
              <SubjectIcon subjectKey="externa" className="w-3.5 h-3.5" />
              {label || "Outra atividade"}
            </span>
            <div className="text-xs text-[var(--text-muted)] mt-1.5">{context}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[var(--ink-400)] hover:text-[var(--ink-700)] text-xl leading-none transition-colors"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <h3 id="external-modal-title" className="text-[20px] mb-3">
          Anotação da aula
        </h3>
        <textarea
          data-autofocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="O que vai acontecer nessa aula (opcional)"
          rows={5}
          className="w-full text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
        />

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <CopyButton text={draft} label="Copiar" />
          <div className="flex gap-2">
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                onSave({ label: draft });
                onClose();
              }}
            >
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
