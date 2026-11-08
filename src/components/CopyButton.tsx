"use client";

import { useState } from "react";

type Props = {
  text: string;
  label?: string;
  /** "primary" pinta como a ação principal da tela (usado no "Copiar p/ SGP" da modal de aula,
   * que é o motivo de o app existir e antes era o menor botão da tela). */
  variant?: "default" | "primary";
  size?: "sm" | "md";
};

export function CopyButton({ text, label = "Copiar", variant = "default", size = "sm" }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard indisponível neste contexto, ignora silenciosamente
    }
  }

  const sizeClass = size === "md" ? "text-sm px-4 py-1.5" : "text-xs px-3 py-1";
  const variantClass =
    variant === "primary"
      ? "bg-[var(--action-primary)] text-white border border-transparent hover:bg-[var(--action-primary-hover)]"
      : "border border-[var(--border-subtle)] bg-white text-[var(--plum-900)] hover:bg-[var(--plum-50)]";

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!text}
      aria-live="polite"
      className={`print:hidden inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-medium transition-colors disabled:opacity-[0.38] disabled:cursor-not-allowed ${sizeClass} ${variantClass}`}
    >
      {copied ? "Copiado!" : label}
    </button>
  );
}
