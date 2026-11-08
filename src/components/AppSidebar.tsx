"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/lib/auth/actions";
import { DropdownMenu } from "./DropdownMenu";
import { ICONS, MAIN_NAV, NavItem, SETUP_NAV, isActive } from "./navItems";

type Props = {
  isAdmin: boolean;
  teacherName?: string;
};

function SideLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActive(pathname, item.href);
  return (
    <Link href={item.href} aria-current={active ? "page" : undefined} className="nav-link">
      {item.icon}
      <span className="truncate">{item.label}</span>
    </Link>
  );
}

/** Menu lateral fixo (telas a partir de 1024px). O dia a dia em cima, configuração num grupo
 * separado e a conta (Perfil, Admin, Sair) no rodapé, porque é usada raramente. */
export function AppSidebar({ isAdmin, teacherName }: Props) {
  const pathname = usePathname();
  const initial = (teacherName?.trim()[0] ?? "P").toUpperCase();

  return (
    <aside
      aria-label="Menu principal"
      className="print:hidden hidden lg:flex sticky top-0 h-screen w-60 flex-none flex-col gap-1 border-r border-[var(--border-subtle)] bg-white px-3 py-4"
    >
      <Link href="/" className="nav-brand mb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo-mark.svg" alt="" aria-hidden="true" className="brand-mark-icon w-7 h-7 flex-none" />
        <span aria-hidden="true" className="brand-mark-icon-emoji hidden flex-none" />
        <span>Plano de Aula</span>
      </Link>

      <nav aria-label="Principal" className="flex flex-col gap-0.5">
        {MAIN_NAV.map((item) => (
          <SideLink key={item.href} item={item} pathname={pathname} />
        ))}
      </nav>

      <p className="nav-group-label">Configurar</p>
      <nav aria-label="Configurar" className="flex flex-col gap-0.5">
        {SETUP_NAV.map((item) => (
          <SideLink key={item.href} item={item} pathname={pathname} />
        ))}
      </nav>

      <div className="mt-auto pt-3 border-t border-[var(--border-subtle)]">
        <DropdownMenu
          align="left"
          triggerClassName="nav-account"
          panelClassName="bottom-full mb-2 w-56"
          trigger={
            <>
              <span className="nav-avatar" aria-hidden="true">
                {initial}
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block truncate text-sm font-semibold text-[var(--text-strong)]">
                  {teacherName ? `Prof. ${teacherName}` : "Minha conta"}
                </span>
                <span className="block text-xs text-[var(--text-muted)]">Perfil e conta</span>
              </span>
              <span className="text-[var(--text-muted)] rotate-180">{ICONS.chevron}</span>
            </>
          }
        >
          {(close) => (
            <>
              <Link href="/perfil" role="menuitem" className="menu-link" onClick={close}>
                {ICONS.profile}
                Perfil
              </Link>
              {isAdmin && (
                <Link href="/admin" role="menuitem" className="menu-link" onClick={close}>
                  {ICONS.admin}
                  Admin
                </Link>
              )}
              <form action={logoutAction} className="mt-1 pt-1 border-t border-[var(--border-subtle)]">
                <button type="submit" role="menuitem" className="menu-link menu-link-danger">
                  {ICONS.logout}
                  Sair
                </button>
              </form>
            </>
          )}
        </DropdownMenu>
      </div>
    </aside>
  );
}
