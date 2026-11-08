"use client";

import { retrySync, useSyncStatus } from "@/hooks/useAppState";

const TIME = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" });

type Props = {
  className?: string;
  /** Texto curto, pro topo no celular ("Salvo" em vez de "Salvo às 19:53"). */
  compact?: boolean;
};

/** Indicador discreto de "salvo / salvando / erro" — o único lugar em que a professora vê se
 * o que ela fez neste aparelho já chegou no servidor (e, portanto, nos outros aparelhos). */
export function SyncIndicator({ className = "", compact = false }: Props) {
  const status = useSyncStatus();

  if (status.kind === "idle") return null;

  if (status.kind === "error") {
    return (
      <span className={`inline-flex items-center gap-2 text-xs ${className}`}>
        <span className="inline-block w-2 h-2 rounded-full bg-[var(--red-600)]" aria-hidden="true" />
        <span>{compact ? "Sem conexão" : "Sem conexão, salvo só neste aparelho."}</span>
        <button type="button" onClick={retrySync} className="underline font-medium">
          {compact ? "Tentar" : "Tentar de novo"}
        </button>
      </span>
    );
  }

  const text =
    status.kind === "pending" ? "Salvando…" : compact ? "Salvo" : `Salvo às ${TIME.format(new Date(status.savedAt))}`;

  return (
    <span className={`inline-flex items-center gap-2 text-xs ${className}`} aria-live="polite">
      <span
        className={`inline-block w-2 h-2 rounded-full ${
          status.kind === "pending" ? "bg-[var(--amber-500)] animate-pulse" : "bg-[var(--green-500)]"
        }`}
        aria-hidden="true"
      />
      {text}
    </span>
  );
}
