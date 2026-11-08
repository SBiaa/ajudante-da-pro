"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { CatSpinner } from "./CatSpinner";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Mostra o spinner e desabilita o botão; o texto continua sendo o `children`. */
  loading?: boolean;
};

/**
 * Botão único do app, com hierarquia fixa:
 * - primary: a ação principal da tela (laranja cheio). Uma por contexto.
 * - secondary: ações comuns (borda neutra). Cancelar/Fechar entram aqui — antes usavam a
 *   cor de marca contornada e disputavam atenção com a primária.
 * - ghost: ações discretas em linha (sem borda), ex.: "Restaurar padrão".
 * - danger: destrutivas (Excluir, Remover).
 */
const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--action-primary)] text-white border border-transparent hover:bg-[var(--action-primary-hover)] active:scale-[0.975]",
  secondary:
    "bg-white border border-[var(--border-subtle)] text-[var(--text-body)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)]",
  ghost: "bg-transparent border border-transparent text-[var(--text-brand)] hover:bg-[var(--plum-50)]",
  danger: "bg-white border border-[var(--red-600)] text-[var(--red-600)] hover:bg-[var(--red-100)]",
};

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1",
  md: "text-sm px-4 py-1.5",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "secondary", size = "md", loading = false, className = "", children, disabled, type = "button", ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors disabled:opacity-[0.5] disabled:cursor-not-allowed disabled:active:scale-100 ${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${className}`}
      {...rest}
    >
      {loading && <CatSpinner />}
      {children}
    </button>
  );
});
