"use client";

import { useState } from "react";
import { useDialog } from "@/hooks/useDialog";
import { Button } from "./Button";
import type { ClassEntry } from "./AppShell";
import { getGradeLabel } from "@/types/profile";

type Props = {
  /** Turma de onde a semana sai. */
  source: ClassEntry;
  /** Possíveis destinos (todas as outras turmas), já com o que impede copiar (sem horário...). */
  targets: { entry: ClassEntry; blocked?: string }[];
  multipleSchools: boolean;
  onConfirm: (classIds: string[]) => void;
  onCancel: () => void;
};

/** Replica o planejamento da semana pra outras turmas — o caso do professor do F2 que dá a mesma
 * aula em 7ºA, 7ºB e 7ºC. Só preenche o que está vazio no destino e só onde a matéria é a mesma. */
export function CopyWeekModal({ source, targets, multipleSchools, onConfirm, onCancel }: Props) {
  const dialogRef = useDialog<HTMLDivElement>({ onClose: onCancel });
  // Pré-seleciona as turmas do mesmo ano (as paralelas) que podem receber.
  const [selected, setSelected] = useState<Set<string>>(
    () =>
      new Set(
        targets.filter((t) => !t.blocked && t.entry.cls.gradeYear === source.cls.gradeYear).map((t) => t.entry.cls.id)
      )
  );

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4" onClick={onCancel}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="copy-week-title"
        className="modal-card relative w-full max-w-md rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-lg)]"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="copy-week-title" className="text-[20px] mb-1">
          Copiar planejamento para outras turmas
        </h3>
        <p className="text-sm text-[var(--text-muted)] mb-4">
          Leva os temas de <strong>{source.cls.label}</strong> para as turmas marcadas. Só entra o que está vazio lá e
          onde a matéria é a mesma — nada do que você já planejou é sobrescrito.
        </p>

        <ul className="flex flex-col gap-2 mb-5">
          {targets.map(({ entry, blocked }) => (
            <li key={entry.cls.id}>
              <label
                className={`flex items-start gap-3 rounded-[var(--radius-md)] border p-3 ${
                  blocked ? "opacity-60" : "cursor-pointer hover:bg-[var(--surface-subtle)]"
                } border-[var(--border-subtle)]`}
              >
                <input
                  type="checkbox"
                  disabled={Boolean(blocked)}
                  checked={selected.has(entry.cls.id)}
                  onChange={() => toggle(entry.cls.id)}
                  className="mt-1 accent-[var(--action-primary)]"
                />
                <span>
                  <span className="block text-sm font-medium text-[var(--text-strong)]">{entry.cls.label}</span>
                  <span className="block text-xs text-[var(--text-muted)]">
                    {getGradeLabel(entry.cls.gradeYear)}
                    {multipleSchools ? ` · ${entry.school.name}` : ""}
                    {blocked ? ` — ${blocked}` : ""}
                  </span>
                </span>
              </label>
            </li>
          ))}
        </ul>

        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button variant="primary" disabled={selected.size === 0} onClick={() => onConfirm([...selected])}>
            Copiar
          </Button>
        </div>
      </div>
    </div>
  );
}
