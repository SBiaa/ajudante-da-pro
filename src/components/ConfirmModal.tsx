"use client";

import { useDialog } from "@/hooks/useDialog";
import { Button } from "./Button";

type Props = {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  /** "danger" pinta o botão de confirmar em vermelho (excluir, remover). */
  tone?: "primary" | "danger";
  onConfirm: () => void;
  onCancel: () => void;
};

/** Confirmação no mesmo estilo visual dos outros modais do app — substitui window.confirm,
 * que quebra a identidade do sistema (dialog nativo do navegador, sem os tokens do design system). */
export function ConfirmModal({
  title,
  message,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  tone = "primary",
  onConfirm,
  onCancel,
}: Props) {
  const dialogRef = useDialog<HTMLDivElement>({ onClose: onCancel });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4" onClick={onCancel}>
      <div
        ref={dialogRef}
        className="modal-card relative w-full max-w-sm rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-lg)]"
        onClick={(e) => e.stopPropagation()}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
        aria-describedby="confirm-modal-message"
      >
        <h3 id="confirm-modal-title" className="text-[20px] mb-2">
          {title}
        </h3>
        <p id="confirm-modal-message" className="text-sm text-[var(--text-body)] mb-5">
          {message}
        </p>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button variant={tone} onClick={onConfirm} data-autofocus>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
