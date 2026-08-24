"use client";

import { useActionState } from "react";
import { loginAction, LoginState } from "@/lib/auth/actions";
import { CatSpinner } from "@/components/CatSpinner";

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="w-full max-w-sm">
      <label htmlFor="password" className="block text-sm font-medium text-[var(--text-body)] mb-1.5">
        Senha
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoFocus
        required
        className="w-full text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
      />

      {state.error && (
        <div className="mb-3 text-sm text-[var(--red-600)] bg-[var(--red-100)] rounded-[var(--radius-md)] px-3 py-2">
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975] disabled:opacity-60"
      >
        {pending && <CatSpinner />}
        {pending ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
