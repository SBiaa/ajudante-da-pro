"use client";

import { useEffect } from "react";
import { CopyButton } from "./CopyButton";
import { CatSpinner } from "./CatSpinner";

type Props = {
  status: "loading" | "ready" | "error";
  url?: string;
  errorMessage?: string;
  onClose: () => void;
  onRetry: () => void;
};

/** Resultado de "Compartilhar semana": link público somente-leitura, sem exigir login de
 * quem recebe. Mesmo layout de modal do resto do app, para não quebrar a identidade visual. */
export function ShareModal({ status, url, errorMessage, onClose, onRetry }: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4" onClick={onClose}>
      <div
        className="modal-card relative w-full max-w-md rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-lg)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <h3 className="text-[20px] mb-2">Compartilhar semana</h3>

        {status === "loading" && (
          <p className="flex items-center gap-2 text-sm text-[var(--text-body)] mb-5">
            <CatSpinner className="text-[var(--plum-900)]" />
            Gerando o link…
          </p>
        )}

        {status === "error" && (
          <>
            <p className="text-sm text-[var(--text-body)] mb-5">
              {errorMessage ?? "Não foi possível gerar o link. Tente novamente."}
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:bg-[var(--surface-subtle)]"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={onRetry}
                className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)]"
              >
                Tentar de novo
              </button>
            </div>
          </>
        )}

        {status === "ready" && url && (
          <>
            <p className="text-sm text-[var(--text-body)] mb-3">
              Qualquer pessoa com este link pode ver esta semana — sem precisar de login e sem poder editar. Ele
              expira em 30 dias.
            </p>
            <div className="flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--surface-subtle)] px-3 py-2 mb-5">
              <input
                readOnly
                value={url}
                onFocus={(e) => e.currentTarget.select()}
                className="flex-1 min-w-0 bg-transparent text-sm text-[var(--text-body)] focus:outline-none"
              />
              <CopyButton text={url} label="Copiar link" />
            </div>
            <div className="flex justify-end gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white"
              >
                Abrir link
              </a>
              <button
                type="button"
                onClick={onClose}
                className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)]"
              >
                Fechar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
