"use client";

import { useActionState } from "react";
import { GRADE_OPTIONS } from "@/types/profile";
import { logoutAction } from "@/lib/auth/actions";
import { saveProfileAction, SaveProfileState } from "@/app/perfil/actions";

type Props = {
  currentGrade: string;
};

const initialState: SaveProfileState = { error: null, saved: false };

export function PerfilForm({ currentGrade }: Props) {
  const [state, formAction, pending] = useActionState(saveProfileAction, initialState);

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)] max-w-md">
      <h2 className="text-[24px] mb-1">Perfil</h2>
      <p className="text-sm text-[var(--text-muted)] mb-4 max-w-[52ch]">
        Escolha o ano/série para o qual as atividades serão geradas.
      </p>

      <form action={formAction}>
        <label htmlFor="gradeYear" className="block text-sm font-medium text-[var(--text-body)] mb-1.5">
          Ano/série
        </label>
        <select
          id="gradeYear"
          name="gradeYear"
          defaultValue={currentGrade}
          className="w-full text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
        >
          {GRADE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value} disabled={!option.enabled}>
              {option.label}
              {!option.enabled ? " (em breve)" : ""}
            </option>
          ))}
        </select>

        {state.error && (
          <div className="mb-3 text-sm text-[var(--red-600)] bg-[var(--red-100)] rounded-[var(--radius-md)] px-3 py-2">
            {state.error}
          </div>
        )}
        {state.saved && !state.error && (
          <div className="mb-3 text-sm text-[var(--green-600)] bg-[var(--green-100)] rounded-[var(--radius-md)] px-3 py-2">
            Salvo.
          </div>
        )}

        <button
          type="submit"
          disabled={pending}
          className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975] disabled:opacity-60"
        >
          {pending ? "Salvando..." : "Salvar"}
        </button>
      </form>

      <form action={logoutAction} className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
        <button
          type="submit"
          className="text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white"
        >
          Sair
        </button>
      </form>
    </div>
  );
}
