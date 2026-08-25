"use client";

import { useActionState, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { AdminUserRow } from "@/lib/db/users";
import {
  adminCreateUserAction,
  adminDeleteUserAction,
  adminResetPasswordAction,
  adminToggleAdminAction,
  type AdminFormState,
} from "@/app/admin/actions";
import { CatSpinner } from "@/components/CatSpinner";
import { ConfirmModal } from "@/components/ConfirmModal";

type Props = {
  users: AdminUserRow[];
  currentUserId: number;
};

const adminInitialState: AdminFormState = { error: null, success: null };

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export function AdminUsersPanel({ users, currentUserId }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [deleteTarget, setDeleteTarget] = useState<AdminUserRow | null>(null);
  const [resetTarget, setResetTarget] = useState<AdminUserRow | null>(null);
  const [busyUserId, setBusyUserId] = useState<number | null>(null);

  const [createState, createFormAction, createPending] = useActionState(adminCreateUserAction, adminInitialState);

  function toggleAdmin(user: AdminUserRow) {
    setBusyUserId(user.id);
    startTransition(async () => {
      await adminToggleAdminAction(user.id, !user.isAdmin);
      router.refresh();
      setBusyUserId(null);
    });
  }

  function confirmDelete() {
    if (!deleteTarget) return;
    const id = deleteTarget.id;
    setBusyUserId(id);
    setDeleteTarget(null);
    startTransition(async () => {
      await adminDeleteUserAction(id);
      router.refresh();
      setBusyUserId(null);
    });
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white shadow-[var(--shadow-sm)]">
      <div className="p-6 border-b border-[var(--border-subtle)]">
        <h2 className="text-[20px] mb-3">Nova usuária</h2>
        <form action={createFormAction} className="flex flex-wrap items-end gap-3">
          <div>
            <label htmlFor="new-username" className="block text-xs font-medium text-[var(--text-body)] mb-1">
              Usuário
            </label>
            <input
              id="new-username"
              name="username"
              type="text"
              required
              minLength={3}
              className="text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block text-xs font-medium text-[var(--text-body)] mb-1">
              Senha
            </label>
            <input
              id="new-password"
              name="password"
              type="text"
              required
              minLength={4}
              className="text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
          </div>
          <label className="flex items-center gap-1.5 text-sm text-[var(--text-body)] pb-2">
            <input type="checkbox" name="isAdmin" className="accent-[var(--action-primary)]" />
            Admin
          </label>
          <button
            type="submit"
            disabled={createPending}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975] disabled:opacity-60"
          >
            {createPending && <CatSpinner />}
            {createPending ? "Criando..." : "Criar usuária"}
          </button>
        </form>
        {createState.error && (
          <p className="mt-3 text-sm text-[var(--red-600)] bg-[var(--red-100)] rounded-[var(--radius-md)] px-3 py-2 inline-block">
            {createState.error}
          </p>
        )}
        {createState.success && (
          <p className="mt-3 text-sm text-[var(--green-600)] bg-[var(--green-100)] rounded-[var(--radius-md)] px-3 py-2 inline-block">
            {createState.success}
          </p>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
              <th className="px-6 py-3 font-medium">Usuário</th>
              <th className="px-3 py-3 font-medium">Criada em</th>
              <th className="px-3 py-3 font-medium">Semanas</th>
              <th className="px-3 py-3 font-medium">Última atividade</th>
              <th className="px-3 py-3 font-medium">Perfil</th>
              <th className="px-6 py-3 font-medium text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const isSelf = user.id === currentUserId;
              const rowBusy = isPending && busyUserId === user.id;
              return (
                <tr key={user.id} className="border-b border-[var(--border-subtle)] last:border-0">
                  <td className="px-6 py-3 font-medium text-[var(--text-strong)]">
                    {user.username}
                    {isSelf && <span className="ml-1.5 text-xs font-normal text-[var(--text-muted)]">(você)</span>}
                  </td>
                  <td className="px-3 py-3 text-[var(--text-muted)]">{formatDate(user.createdAt)}</td>
                  <td className="px-3 py-3 text-[var(--text-muted)]">{user.weekCount}</td>
                  <td className="px-3 py-3 text-[var(--text-muted)]">{formatDate(user.lastActivityAt)}</td>
                  <td className="px-3 py-3">
                    {user.isAdmin ? (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--surface-brand-soft)] text-[var(--text-brand)]">
                        Admin
                      </span>
                    ) : (
                      <span className="text-xs text-[var(--text-muted)]">Professora</span>
                    )}
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center justify-end gap-1.5 flex-wrap">
                      <button
                        type="button"
                        disabled={isSelf || rowBusy}
                        onClick={() => toggleAdmin(user)}
                        className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:bg-[var(--surface-subtle)] disabled:opacity-40"
                      >
                        {user.isAdmin ? "Remover admin" : "Tornar admin"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setResetTarget(user)}
                        className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:bg-[var(--surface-subtle)]"
                      >
                        Redefinir senha
                      </button>
                      <button
                        type="button"
                        disabled={isSelf || rowBusy}
                        onClick={() => setDeleteTarget(user)}
                        className="text-xs px-3 py-1.5 rounded-full border border-[var(--red-600)] text-[var(--red-600)] transition-colors hover:bg-[var(--red-100)] disabled:opacity-40"
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {users.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-6 text-center text-[var(--text-muted)]">
                  Nenhuma usuária cadastrada ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {deleteTarget && (
        <ConfirmModal
          title="Excluir usuária"
          message={`Tem certeza que quer excluir "${deleteTarget.username}"? Todos os planos, grade fixa e perfil dela serão apagados. Essa ação não pode ser desfeita.`}
          confirmLabel="Excluir"
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}

      {resetTarget && (
        <ResetPasswordModal user={resetTarget} onClose={() => setResetTarget(null)} />
      )}
    </div>
  );
}

function ResetPasswordModal({ user, onClose }: { user: AdminUserRow; onClose: () => void }) {
  const [state, formAction, pending] = useActionState<AdminFormState, FormData>(
    adminResetPasswordAction,
    adminInitialState
  );

  if (state.success) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4" onClick={onClose}>
        <div className="modal-card w-full max-w-sm rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-lg)]" onClick={(e) => e.stopPropagation()}>
          <p className="text-sm text-[var(--green-600)] bg-[var(--green-100)] rounded-[var(--radius-md)] px-3 py-2 mb-4">
            Senha de &quot;{user.username}&quot; redefinida.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)]"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4" onClick={onClose}>
      <div
        className="modal-card w-full max-w-sm rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-lg)]"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-[20px] mb-1">Redefinir senha</h3>
        <p className="text-sm text-[var(--text-muted)] mb-4">
          Nova senha para <strong>{user.username}</strong>.
        </p>
        <form action={formAction}>
          <input type="hidden" name="id" value={user.id} />
          <input
            type="text"
            name="password"
            required
            minLength={4}
            autoFocus
            placeholder="Nova senha"
            className="w-full text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
          />
          {state.error && (
            <p className="mb-3 text-sm text-[var(--red-600)] bg-[var(--red-100)] rounded-[var(--radius-md)] px-3 py-2">
              {state.error}
            </p>
          )}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:bg-[var(--surface-subtle)]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={pending}
              className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975] disabled:opacity-60"
            >
              {pending && <CatSpinner />}
              {pending ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
