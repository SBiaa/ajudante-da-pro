"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { GRADE_OPTIONS, THEME_OPTIONS, NETWORK_OPTIONS, Network } from "@/types/profile";
import { availableGradesFor } from "@/data/curriculumBanks";
import { logoutAction } from "@/lib/auth/actions";
import { saveProfileAction, SaveProfileState } from "@/app/perfil/actions";
import { CatSpinner } from "@/components/CatSpinner";

type Props = {
  currentGrade: string;
  currentTheme: string;
  currentNetwork: Network;
};

const initialState: SaveProfileState = { error: null, saved: false };

const THEME_SWATCHES: Record<string, string[]> = {
  default: ["#37125f", "#6b32a8", "#c4303c"],
  gatinho: ["#7a3b12", "#d16f2b", "#d9546e"],
};

export function PerfilForm({ currentGrade, currentTheme, currentNetwork }: Props) {
  const [state, formAction, pending] = useActionState(saveProfileAction, initialState);
  const [theme, setTheme] = useState(currentTheme);
  const [network, setNetwork] = useState<Network>(currentNetwork);

  const availableGrades = new Set(availableGradesFor(network));

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)] max-w-md">
      <h2 className="text-[24px] mb-1">Perfil</h2>
      <p className="text-sm text-[var(--text-muted)] mb-4 max-w-[52ch]">
        Escolha a rede de ensino e o ano/série para os quais as atividades serão geradas.
      </p>

      <form action={formAction}>
        <label htmlFor="network" className="block text-sm font-medium text-[var(--text-body)] mb-1.5">
          Rede de ensino
        </label>
        <select
          id="network"
          name="network"
          value={network}
          onChange={(e) => setNetwork(e.target.value as Network)}
          className="w-full text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
        >
          {NETWORK_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

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
            <option key={option.value} value={option.value} disabled={!availableGrades.has(option.value)}>
              {option.label}
              {!availableGrades.has(option.value) ? " (em breve)" : ""}
            </option>
          ))}
        </select>

        <span className="block text-sm font-medium text-[var(--text-body)] mb-1.5">Tema visual</span>
        <input type="hidden" name="theme" value={theme} />
        <div className="grid grid-cols-2 gap-2 mb-3">
          {THEME_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setTheme(option.value)}
              disabled={!option.enabled}
              aria-pressed={theme === option.value}
              className="flex items-center gap-2.5 rounded-[var(--radius-md)] border px-3 py-2.5 text-left transition-colors disabled:opacity-50"
              style={{
                borderColor: theme === option.value ? "var(--action-primary)" : "var(--border-subtle)",
                borderWidth: theme === option.value ? 2 : 1,
                background: theme === option.value ? "var(--surface-brand-soft)" : "white",
              }}
            >
              <span className="text-xl leading-none flex-none">{option.emoji}</span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-medium truncate">
                  {option.label}
                  {!option.enabled ? " (em breve)" : ""}
                </span>
                <span className="mt-1 flex gap-1">
                  {(THEME_SWATCHES[option.value] ?? []).map((hex, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full flex-none"
                      style={{ background: hex }}
                    />
                  ))}
                </span>
              </span>
            </button>
          ))}
        </div>

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

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={pending}
            className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975] disabled:opacity-60"
          >
            {pending && <CatSpinner />}
            {pending ? "Salvando..." : "Salvar"}
          </button>
          <Link href="/" className="text-sm">
            ← Voltar para o plano de aula
          </Link>
        </div>
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
