"use client";

import { useState } from "react";

export function CopyButton({ text, label = "Copiar" }: { text: string; label?: string }) {
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

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!text}
      className="print:hidden text-xs px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-white text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-50)] disabled:opacity-[0.38] disabled:cursor-not-allowed"
    >
      {copied ? "Copiado!" : label}
    </button>
  );
}
