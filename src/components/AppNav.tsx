"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { logoutAction } from "@/lib/auth/actions";
import { ICONS, MAIN_NAV, SETUP_NAV, isActive } from "./navItems";

/** Barra de abas fixa no rodapé, só abaixo de 1024px (no computador quem navega é o menu
 * lateral). As 4 telas do dia a dia ficam à mão do polegar; configuração e conta ficam em
 * "Mais", uma folha que sobe de baixo. */
export function AppNav({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  const moreActive =
    SETUP_NAV.some((i) => isActive(pathname, i.href)) || isActive(pathname, "/perfil") || isActive(pathname, "/admin");

  useEffect(() => {
    if (!moreOpen) return;
    sheetRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMoreOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [moreOpen]);

  const close = () => setMoreOpen(false);

  return (
    <>
      <nav
        aria-label="Principal"
        className="print:hidden lg:hidden fixed bottom-0 inset-x-0 z-50 flex border-t border-[var(--border-subtle)] bg-white pb-[env(safe-area-inset-bottom)]"
      >
        {MAIN_NAV.map((tab) => {
          const active = isActive(pathname, tab.href);
          return (
            <Link key={tab.href} href={tab.href} aria-current={active ? "page" : undefined} className="tab-link">
              {tab.icon}
              {tab.label}
            </Link>
          );
        })}
        <button
          type="button"
          className="tab-link"
          aria-haspopup="dialog"
          aria-expanded={moreOpen}
          data-active={moreActive || moreOpen ? "true" : undefined}
          onClick={() => setMoreOpen((v) => !v)}
        >
          {ICONS.more}
          Mais
        </button>
      </nav>

      {moreOpen && (
        <div className="print:hidden lg:hidden fixed inset-0 z-[45]" role="dialog" aria-modal="true" aria-label="Mais opções">
          <button type="button" aria-label="Fechar" className="absolute inset-0 bg-black/30 cursor-default" onClick={close} />
          <div
            ref={sheetRef}
            className="absolute inset-x-0 bottom-0 rounded-t-[22px] bg-white px-3 pt-2 pb-[calc(72px+env(safe-area-inset-bottom))] shadow-[var(--shadow-lg)]"
          >
            <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-[var(--ink-200)]" aria-hidden="true" />
            <p className="nav-group-label">Configurar</p>
            {SETUP_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className="nav-link"
                onClick={close}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <p className="nav-group-label">Conta</p>
            <Link
              href="/perfil"
              aria-current={isActive(pathname, "/perfil") ? "page" : undefined}
              className="nav-link"
              onClick={close}
            >
              {ICONS.profile}
              Perfil
            </Link>
            {isAdmin && (
              <Link href="/admin" className="nav-link" onClick={close}>
                {ICONS.admin}
                Admin
              </Link>
            )}
            <form action={logoutAction}>
              <button type="submit" className="nav-link menu-link-danger w-full">
                {ICONS.logout}
                Sair
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
