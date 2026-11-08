"use client";

import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type Options = {
  /** Chamado ao apertar Esc. Quando omitido, Esc não faz nada (útil quando outra camada por
   * cima já trata a tecla). */
  onClose?: () => void;
  /** false desliga o hook sem desmontar o componente (ex.: modal filha aberta por cima). */
  active?: boolean;
};

/**
 * Comportamento padrão de diálogo modal, compartilhado por todas as modais do app:
 * - trava a rolagem da página de trás enquanto está aberta (antes, rolar dentro da modal
 *   arrastava a grade junto);
 * - Esc fecha;
 * - o foco entra na modal ao abrir, fica preso dentro dela (Tab circula) e volta pro
 *   elemento que a abriu ao fechar.
 */
export function useDialog<T extends HTMLElement>({ onClose, active = true }: Options = {}) {
  const ref = useRef<T>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const scrollLockCount = Number(document.body.dataset.scrollLock ?? "0");
    document.body.dataset.scrollLock = String(scrollLockCount + 1);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Foco inicial: o primeiro elemento marcado como data-autofocus, senão o próprio diálogo.
    const initial = el.querySelector<HTMLElement>("[data-autofocus]") ?? el;
    if (initial === el && !el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    initial.focus({ preventScroll: true });

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (onCloseRef.current) {
          e.stopPropagation();
          onCloseRef.current();
        }
        return;
      }
      if (e.key !== "Tab" || !el) return;
      const focusables = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (node) => node.offsetParent !== null
      );
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const current = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (current === first || !el.contains(current))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKey, true);
    return () => {
      document.removeEventListener("keydown", handleKey, true);
      const count = Number(document.body.dataset.scrollLock ?? "1") - 1;
      if (count <= 0) {
        delete document.body.dataset.scrollLock;
        document.body.style.overflow = previousOverflow;
      } else {
        document.body.dataset.scrollLock = String(count);
      }
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [active]);

  return ref;
}
