"use client";

import { useState } from "react";
import { useDialog } from "@/hooks/useDialog";
import { Button } from "./Button";

export type GenerateWeekMode = "empty" | "all";

type Props = {
  /** Aulas próprias sem tema ainda. */
  emptyCount: number;
  /** Aulas próprias que já têm tema (seriam substituídas no modo "all"). */
  filledCount: number;
  onConfirm: (mode: GenerateWeekMode) => void;
  onCancel: () => void;
};

/**
 * Antes, "Gerar semana inteira" sempre substituía tudo (só com um "tem certeza?"). Agora o
 * padrão é preencher só o que está vazio; substituir o que já foi feito é uma escolha
 * explícita — e o HomeClient ainda oferece "Desfazer" por alguns segundos depois.
 */
export function GenerateWeekModal({ emptyCount, filledCount, onConfirm, onCancel }: Props) {
  const [mode, setMode] = useState<GenerateWeekMode>(emptyCount > 0 ? "empty" : "all");
  const dialogRef = useDialog<HTMLDivElement>({ onClose: onCancel });
  const total = emptyCount + filledCount;

  const optionClass = (active: boolean) =>
    `flex items-start gap-3 rounded-[var(--radius-md)] border p-3 cursor-pointer transition-colors ${
      active ? "border-[var(--action-primary)] bg-[var(--surface-brand-soft)]" : "border-[var(--border-subtle)] hover:bg-[var(--surface-subtle)]"
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4" onClick={onCancel}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="generate-week-title"
        className="modal-card relative w-full max-w-md rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-lg)]"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="generate-week-title" className="text-[20px] mb-1">
          Gerar temas da semana
        </h3>
        <p className="text-sm text-[var(--text-muted)] mb-4">
          Sorteia um tema do banco pra cada aula, evitando repetir o que a turma já viu.
        </p>

        <div className="flex flex-col gap-2 mb-5" role="radiogroup" aria-label="O que gerar">
          <label className={optionClass(mode === "empty")}>
            <input
              type="radio"
              name="generate-mode"
              value="empty"
              checked={mode === "empty"}
              disabled={emptyCount === 0}
              onChange={() => setMode("empty")}
              className="mt-1 accent-[var(--action-primary)]"
              data-autofocus={emptyCount > 0 ? true : undefined}
            />
            <span>
              <span className="block text-sm font-medium text-[var(--text-strong)]">
                Só as aulas vazias ({emptyCount})
              </span>
              <span className="block text-xs text-[var(--text-muted)]">
                {emptyCount === 0 ? "Nenhuma aula está vazia nesta semana." : "O que já foi preenchido fica como está."}
              </span>
            </span>
          </label>
          <label className={optionClass(mode === "all")}>
            <input
              type="radio"
              name="generate-mode"
              value="all"
              checked={mode === "all"}
              onChange={() => setMode("all")}
              className="mt-1 accent-[var(--action-primary)]"
              data-autofocus={emptyCount === 0 ? true : undefined}
            />
            <span>
              <span className="block text-sm font-medium text-[var(--text-strong)]">
                Todas as {total} aulas
              </span>
              <span className="block text-xs text-[var(--text-muted)]">
                {filledCount > 0
                  ? `Substitui o conteúdo de ${filledCount} aula${filledCount === 1 ? "" : "s"} já preenchida${
                      filledCount === 1 ? "" : "s"
                    }. Dá pra desfazer logo em seguida.`
                  : "Nenhuma aula preenchida seria perdida."}
              </span>
            </span>
          </label>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => onConfirm(mode)}>
            Gerar
          </Button>
        </div>
      </div>
    </div>
  );
}
