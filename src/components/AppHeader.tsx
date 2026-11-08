import Link from "next/link";
import { ReactNode } from "react";
import { DEFAULT_GRADE, DEFAULT_NETWORK, getGradeLabel, getNetworkLabel } from "@/types/profile";
import { DropdownMenu } from "./DropdownMenu";

export type AppMenuItem = { label: string; onClick: () => void };
export type AppMenuGroup = { title: string; items: AppMenuItem[] };

type Props = {
  /** false na página pública de compartilhamento — quem recebe o link não tem conta. */
  showProfileLink?: boolean;
  /** Ano/série configurado em /perfil — cai no padrão se quem chamou não tiver o dado à mão. */
  gradeLabel?: string;
  /** Rede de ensino configurada em /perfil (Prefeitura ou Estado) — cai no padrão do mesmo jeito. */
  networkLabel?: string;
  /** Ferramentas agrupadas (Configurar / Consultar) — omitido nas telas que não têm nada pra
   * oferecer aqui (configuração inicial, perfil, link compartilhado). */
  menuGroups?: AppMenuGroup[];
  /** Mostra o link "Admin" — só quando a usuária logada tem is_admin = true. */
  isAdmin?: boolean;
  /** Username de quem está logada, pra saudação pessoal ("Olá, prof ..."). Omitido nas telas
   * sem sessão (link compartilhado) — nesses casos o título volta a ser o nome do app. */
  teacherName?: string;
  /** Conteúdo extra na linha de baixo do cabeçalho (ex.: indicador "Salvo às ..."). */
  status?: ReactNode;
  /** true quando a navegação por abas já tem "Perfil" — esconde o link duplicado do cabeçalho
   * (a linha de contexto continua levando ao perfil). */
  profileLinkInNav?: boolean;
  /** Nome da turma ativa ("7ºA"), mostrado na linha de contexto quando há mais de uma turma. */
  classLabel?: string;
  /** Pra onde a linha de contexto leva (padrão: /perfil; com turmas, /turmas). */
  contextHref?: string;
};

/** "Ensino Fundamental 1" era texto fixo, errado pros bancos de 6º a 9º ano que o app já tem. */
function educationLevelFor(gradeLabel: string): string {
  // "1ª série EM" começa com número também — sem isso viraria "Fundamental I".
  if (/série EM$/.test(gradeLabel)) return "Ensino Médio";
  const n = parseInt(gradeLabel, 10);
  if (Number.isNaN(n)) return "Ensino Fundamental";
  return n <= 5 ? "Fundamental I" : "Fundamental II";
}

const headerLink = "app-header-link text-xs font-medium uppercase tracking-[0.1em] transition-colors";

export function AppHeader({
  showProfileLink = true,
  gradeLabel = getGradeLabel(DEFAULT_GRADE),
  networkLabel = getNetworkLabel(DEFAULT_NETWORK),
  menuGroups,
  isAdmin = false,
  teacherName,
  status,
  profileLinkInNav = false,
  classLabel,
  contextHref = "/perfil",
}: Props) {
  const hasMenu = menuGroups?.some((g) => g.items.length > 0);
  const contextLine = `${classLabel ? `${classLabel} · ` : ""}${gradeLabel} · ${educationLevelFor(gradeLabel)} · ${networkLabel}`;

  return (
    <div className="print:hidden relative rounded-[var(--radius-lg)] bg-[var(--surface-brand)] px-4 py-4 sm:px-6 sm:py-5 mb-5 shadow-[var(--shadow-brand)]">
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
            {teacherName && (
              <p className="hidden sm:block text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--crimson-200)]">
                Plano de Aula Semanal
              </p>
            )}
            <h1 className="app-header-title text-[20px] sm:text-[26px] leading-tight sm:truncate">
              {teacherName ? `Olá, prof ${teacherName}!` : "Plano de Aula Semanal"}
            </h1>
            {/* A linha de contexto vira link pro perfil: é lá que se troca de turma/rede, e antes
             * não havia nenhuma pista disso na tela principal. */}
            {showProfileLink ? (
              <Link
                href={contextHref}
                className="app-header-link mt-1 inline-flex items-center gap-1 text-[13px] normal-case tracking-normal font-normal"
                title="Ajustar escolas e turmas"
              >
                <span className="truncate">{contextLine}</span>
                <span aria-hidden="true" className="text-[11px] opacity-70">
                  ✎
                </span>
              </Link>
            ) : (
              <p className="mt-1 text-[13px] text-[var(--plum-100)]">{contextLine}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-none mt-1">
          {hasMenu && menuGroups && (
            <DropdownMenu
              align="right"
              triggerClassName={`${headerLink} flex items-center gap-1 cursor-pointer`}
              panelClassName="w-60"
              trigger={
                <>
                  Ferramentas
                  <span aria-hidden="true" className="text-[8px]">
                    ▾
                  </span>
                </>
              }
            >
              {(close) =>
                menuGroups.map((group, gi) => (
                  <div key={group.title} className={gi > 0 ? "mt-1 pt-1 border-t border-[var(--border-subtle)]" : ""}>
                    <div className="px-3 pt-1.5 pb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {group.title}
                    </div>
                    {group.items.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          item.onClick();
                          close();
                        }}
                        className="block w-full text-left text-sm px-3 py-2 rounded-[var(--radius-sm)] text-[var(--text-body)] hover:bg-[var(--surface-subtle)] transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                ))
              }
            </DropdownMenu>
          )}
          {isAdmin && (
            <Link href="/admin" className={headerLink}>
              Admin
            </Link>
          )}
          {showProfileLink && !profileLinkInNav && (
            <Link href="/perfil" className={headerLink}>
              Perfil
            </Link>
          )}
        </div>
      </div>

      {status && <div className="relative mt-3 text-[var(--plum-100)]">{status}</div>}
    </div>
  );
}
