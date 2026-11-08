"use client";

import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

type Props = {
  /** Conteúdo do botão que abre o menu. */
  trigger: ReactNode;
  triggerClassName?: string;
  /** Alinhamento do painel em relação ao botão. */
  align?: "left" | "right";
  panelClassName?: string;
  /** Recebe `close` pra fechar o menu depois de escolher um item. */
  children: (close: () => void) => ReactNode;
};

/**
 * Menu suspenso simples, no lugar do `<details>` nativo usado antes: fecha com Esc e com clique
 * fora (o details só fechava clicando de novo no botão) e expõe aria-expanded.
 */
export function DropdownMenu({ trigger, triggerClassName = "", align = "right", panelClassName = "", children }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [shiftX, setShiftX] = useState(0);

  // No celular um painel largo saía da tela pela direita (e criava rolagem lateral). Depois de
  // abrir, mede e empurra o painel pra dentro, com 8px de folga das bordas.
  useLayoutEffect(() => {
    if (!open || !panelRef.current) {
      setShiftX(0);
      return;
    }
    const rect = panelRef.current.getBoundingClientRect();
    const margin = 8;
    const vw = document.documentElement.clientWidth;
    if (rect.right > vw - margin) setShiftX(Math.max(vw - margin - rect.right, margin - rect.left));
    else if (rect.left < margin) setShiftX(margin - rect.left);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handlePointer(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={triggerClassName}
      >
        {trigger}
      </button>
      {open && (
        <div
          ref={panelRef}
          role="menu"
          style={shiftX ? { transform: `translateX(${shiftX}px)` } : undefined}
          className={`absolute z-30 mt-2 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-white p-1.5 shadow-[var(--shadow-lg)] ${
            align === "right" ? "right-0" : "left-0"
          } ${panelClassName}`}
        >
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
}
