"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { AccessRequest } from "@/lib/db/accessRequests";
import { adminDeleteAccessRequestAction, adminSetAccessRequestHandledAction } from "@/app/admin/actions";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

/** Fila de "pedir acesso" vinda da landing. A conta continua sendo criada à mão no painel
 * de usuárias abaixo — aqui só se acompanha quem já foi atendida. */
export function AccessRequestsPanel({ requests }: { requests: AccessRequest[] }) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [busyId, setBusyId] = useState<number | null>(null);
  const pending = requests.filter((r) => !r.handledAt).length;

  function run(id: number, fn: () => Promise<void>) {
    setBusyId(id);
    startTransition(async () => {
      await fn();
      router.refresh();
      setBusyId(null);
    });
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white shadow-[var(--shadow-sm)] mb-6">
      <div className="p-6 border-b border-[var(--border-subtle)]">
        <h2 className="text-[20px] text-[var(--text-strong)]">
          Pedidos de acesso{" "}
          {pending > 0 && (
            <span className="ml-1 align-middle text-xs font-bold px-2 py-0.5 rounded-full bg-[var(--plum-100)] text-[var(--plum-800)]">
              {pending} pendente{pending > 1 ? "s" : ""}
            </span>
          )}
        </h2>
        <p className="text-sm text-[var(--text-muted)]">Quem deixou o contato na página inicial.</p>
      </div>
      {requests.length === 0 ? (
        <p className="p-6 text-sm text-[var(--text-muted)]">Nenhum pedido ainda.</p>
      ) : (
        <ul className="divide-y divide-[var(--border-subtle)]">
          {requests.map((r) => (
            <li
              key={r.id}
              className={`p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center gap-3 justify-between ${r.handledAt ? "opacity-60" : ""}`}
            >
              <div className="min-w-0">
                <p className="font-semibold text-[var(--text-strong)]">
                  {r.name} <span className="font-normal text-[var(--text-muted)]">· {r.contact}</span>
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {[r.school, r.gradeInfo].filter(Boolean).join(" · ") || "Sem rede/ano informados"} · pedido em {formatDate(r.createdAt)}
                  {r.handledAt ? ` · atendida em ${formatDate(r.handledAt)}` : ""}
                </p>
              </div>
              <div className="flex gap-2 flex-none">
                <button
                  type="button"
                  disabled={busyId === r.id}
                  onClick={() => run(r.id, () => adminSetAccessRequestHandledAction(r.id, !r.handledAt))}
                  className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] hover:bg-[var(--surface-subtle)] disabled:opacity-50"
                >
                  {r.handledAt ? "Reabrir" : "Marcar atendida"}
                </button>
                <button
                  type="button"
                  disabled={busyId === r.id}
                  onClick={() => run(r.id, () => adminDeleteAccessRequestAction(r.id))}
                  className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--red-600)] hover:bg-[var(--red-100)] disabled:opacity-50"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
