import Link from "next/link";
import { DEFAULT_GRADE, DEFAULT_NETWORK, getGradeLabel, getNetworkLabel } from "@/types/profile";

export type AppMenuItem = { label: string; onClick: () => void };

type Props = {
  /** false na página pública de compartilhamento — quem recebe o link não tem conta. */
  showProfileLink?: boolean;
  /** Ano/série configurado em /perfil — cai no padrão se quem chamou não tiver o dado à mão. */
  gradeLabel?: string;
  /** Rede de ensino configurada em /perfil (Prefeitura ou Estado) — cai no padrão do mesmo jeito. */
  networkLabel?: string;
  /** Ferramentas (grade fixa, cores, histórico...) agrupadas num só menu — omitido nas telas
   * que não têm nada pra oferecer aqui (configuração inicial, perfil, link compartilhado). */
  menuItems?: AppMenuItem[];
  /** Mostra o link "Admin" — só quando a usuária logada tem is_admin = true. */
  isAdmin?: boolean;
};

export function AppHeader({
  showProfileLink = true,
  gradeLabel = getGradeLabel(DEFAULT_GRADE),
  networkLabel = getNetworkLabel(DEFAULT_NETWORK),
  menuItems,
  isAdmin = false,
}: Props) {
  return (
    <div className="print:hidden relative rounded-[var(--radius-lg)] bg-[var(--surface-brand)] px-6 py-6 mb-6 shadow-[var(--shadow-brand)]">
      {/* Camada decorativa separada, com seu próprio overflow-hidden: se esse clip estivesse
       * no container de fora (como antes), o menu dropdown abaixo seria cortado junto. */}
      <div className="absolute inset-0 overflow-hidden rounded-[var(--radius-lg)] pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo-mark.svg"
          alt=""
          aria-hidden="true"
          className="brand-mark-corner select-none absolute -top-10 -right-10 w-[220px] h-[220px] opacity-[0.1]"
        />
        <span aria-hidden="true" className="brand-mark-corner-emoji select-none absolute -top-2 right-1" />
      </div>

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5 min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-mark.svg" alt="" aria-hidden="true" className="brand-mark-icon w-7 h-7 flex-none mt-0.5" />
          <span aria-hidden="true" className="brand-mark-icon-emoji hidden flex-none" />
          <div className="min-w-0">
            <h1 className="app-header-title text-[22px] sm:text-[28px] leading-tight">Plano de Aula Semanal</h1>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--crimson-200)]">
              {gradeLabel} · Ensino Fundamental 1 · {networkLabel}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-none mt-1">
          {menuItems && menuItems.length > 0 && (
            <details className="relative">
              <summary className="app-header-link list-none [&::-webkit-details-marker]:hidden cursor-pointer text-xs font-medium uppercase tracking-[0.1em] transition-colors flex items-center gap-1">
                Menu
                <span aria-hidden="true" className="text-[8px]">
                  ▾
                </span>
              </summary>
              <div className="absolute right-0 z-30 mt-2 w-56 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-white p-1.5 shadow-[var(--shadow-lg)]">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={(e) => {
                      item.onClick();
                      e.currentTarget.closest("details")?.removeAttribute("open");
                    }}
                    className="block w-full text-left text-sm px-3 py-2 rounded-[var(--radius-sm)] text-[var(--text-body)] hover:bg-[var(--surface-subtle)] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </details>
          )}
          {isAdmin && (
            <Link
              href="/admin"
              className="app-header-link text-xs font-medium uppercase tracking-[0.1em] transition-colors"
            >
              Admin
            </Link>
          )}
          {showProfileLink && (
            <Link
              href="/perfil"
              className="app-header-link text-xs font-medium uppercase tracking-[0.1em] transition-colors"
            >
              Perfil
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
