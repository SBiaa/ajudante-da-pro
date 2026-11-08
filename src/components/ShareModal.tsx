"use client";

import { useDialog } from "@/hooks/useDialog";
import { Button } from "./Button";
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
  const dialogRef = useDialog<HTMLDivElement>({ onClose });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4" onClick={onClose}>
      <div
        ref={dialogRef}
        className="modal-card relative w-full max-w-md rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-lg)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-modal-title"
      >
        <h3 id="share-modal-title" className="text-[20px] mb-2">
          Compartilhar semana
        </h3>

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
              <Button variant="secondary" onClick={onClose}>
                Fechar
              </Button>
              <Button variant="primary" onClick={onRetry}>
                Tentar de novo
              </Button>
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
                aria-label="Link de compartilhamento"
                className="flex-1 min-w-0 bg-transparent text-sm text-[var(--text-body)] focus:outline-none"
              />
              <CopyButton text={url} label="Copiar link" />
            </div>
            <div className="flex justify-end gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-white text-[var(--text-body)] transition-colors hover:bg-[var(--surface-subtle)]"
              >
                Abrir link
              </a>
              <Button variant="primary" onClick={onClose} data-autofocus>
                Fechar
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
