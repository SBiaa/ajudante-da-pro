"use client";

import { useEffect } from "react";

export type ToastData = {
  id: number;
  message: string;
  tone?: "info" | "success" | "error";
  /** Ação opcional, ex.: "Desfazer". */
  action?: { label: string; onClick: () => void };
  /** ms até sumir sozinho. 0 = só fecha no X. */
  duration?: number;
};

type Props = {
  toast: ToastData | null;
  onDismiss: () => void;
};

const TONE_CLASS: Record<NonNullable<ToastData["tone"]>, string> = {
  info: "bg-[var(--ink-900)] text-white",
  success: "bg-[var(--green-600)] text-white",
  error: "bg-[var(--red-600)] text-white",
};

/** Aviso flutuante no rodapé: substitui o banner de erro fixo (que não tinha como fechar) e dá
 * um lugar pra "Desfazer" depois de gerar a semana. Um por vez — o mais novo substitui. */
export function Toast({ toast, onDismiss }: Props) {
  useEffect(() => {
    if (!toast) return;
    const duration = toast.duration ?? (toast.action ? 8000 : 5000);
    if (duration === 0) return;
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  if (!toast) return null;

  return (
    <div
      role={toast.tone === "error" ? "alert" : "status"}
      aria-live="polite"
      className="print:hidden fixed bottom-20 sm:bottom-4 left-1/2 z-[60] -translate-x-1/2 w-[calc(100%-2rem)] max-w-md"
    >
      <div
        className={`flex items-center gap-3 rounded-[var(--radius-md)] px-4 py-3 text-sm shadow-[var(--shadow-lg)] ${
          TONE_CLASS[toast.tone ?? "info"]
        }`}
      >
        <span className="flex-1">{toast.message}</span>
        {toast.action && (
          <button
            type="button"
            onClick={() => {
              toast.action?.onClick();
              onDismiss();
            }}
            className="flex-none rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.06em] hover:bg-white/25 transition-colors"
          >
            {toast.action.label}
          </button>
        )}
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Fechar aviso"
          className="flex-none text-lg leading-none opacity-70 hover:opacity-100"
        >
          ×
        </button>
      </div>
    </div>
  );
}
