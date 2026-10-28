"use client";

import { useActionState } from "react";
import { requestAccessAction, type AccessRequestState } from "@/app/bem-vindo/actions";
import { CatSpinner } from "@/components/CatSpinner";

const initialState: AccessRequestState = { status: "idle", message: null };

const inputClass =
  "w-full text-[15px] bg-white border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:border-transparent";
const labelClass = "block text-sm font-semibold text-[var(--text-strong)] mb-1.5";

export function AccessRequestForm() {
  const [state, formAction, pending] = useActionState(requestAccessAction, initialState);

  if (state.status === "ok") {
    return (
      <div className="rounded-[var(--radius-lg)] bg-[var(--green-100)] border border-[var(--green-500)]/30 p-6 text-center" role="status">
        <p className="text-3xl mb-2" aria-hidden="true">🐾</p>
        <p className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[var(--text-strong)] mb-1">
          Pedido recebido!
        </p>
        <p className="text-[15px] text-[var(--text-body)]">
          {state.message ?? "Assim que liberarmos sua conta, a gente te chama no contato que você deixou."}
        </p>
      </div>
    );
  }

  const v = state.values;

  return (
    <form action={formAction} className="grid gap-4" noValidate>
      <div>
        <label htmlFor="ar-name" className={labelClass}>Seu nome</label>
        <input id="ar-name" name="name" type="text" defaultValue={v?.name} autoComplete="name" required maxLength={120} className={inputClass} />
      </div>
      <div>
        <label htmlFor="ar-contact" className={labelClass}>E-mail ou WhatsApp</label>
        <input
          id="ar-contact"
          name="contact"
          defaultValue={v?.contact}
          type="text"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={160}
          placeholder="voce@email.com ou (11) 91234-5678"
          className={inputClass}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ar-school" className={labelClass}>
            Rede / escola <span className="font-normal text-[var(--text-muted)]">(opcional)</span>
          </label>
          <input id="ar-school" name="school" type="text" defaultValue={v?.school} maxLength={160} placeholder="Ex.: Prefeitura de SP" className={inputClass} />
        </div>
        <div>
          <label htmlFor="ar-grade" className={labelClass}>
            Ano que você dá aula <span className="font-normal text-[var(--text-muted)]">(opcional)</span>
          </label>
          <input id="ar-grade" name="gradeInfo" type="text" defaultValue={v?.gradeInfo} maxLength={120} placeholder="Ex.: 2º ano" className={inputClass} />
        </div>
      </div>

      {/* Armadilha pra robô: escondida de quem enxerga e de leitor de tela. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="ar-website">Não preencha</label>
        <input id="ar-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p className="text-sm text-[var(--red-600)] bg-[var(--red-100)] rounded-[var(--radius-md)] px-3 py-2" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[var(--action-primary)] text-white font-bold text-base px-6 py-3 shadow-[var(--shadow-brand)] transition-colors hover:bg-[var(--action-primary-hover)] active:bg-[var(--action-primary-press)] disabled:opacity-70"
      >
        {pending ? <CatSpinner size={20} /> : null}
        {pending ? "Enviando…" : "Quero acesso"}
      </button>
      <p className="text-xs text-[var(--text-muted)] text-center">
        Usamos seu contato só pra liberar sua conta. Nada de spam.
      </p>
    </form>
  );
}
