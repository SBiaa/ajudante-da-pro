"use client";

import Link from "next/link";
import { ClassSwitcher } from "./ClassSwitcher";
import { SyncIndicator } from "./SyncIndicator";

/** Barra fina no topo de todas as telas: turma ativa e "Salvo às". No celular também leva a
 * marca, já que lá não existe menu lateral. Substitui o antigo banner roxo, que repetia a
 * saudação em toda tela e empurrava a semana pra baixo. */
export function AppTopbar() {
  return (
    <header className="print:hidden sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-white/95 backdrop-blur">
      <div className="flex h-14 items-center gap-3 px-4 sm:px-6">
        {/* O lg:hidden fica num invólucro: no próprio link, o display da classe .nav-brand
         * (fora de @layer) ganharia do utility. */}
        <span className="lg:hidden">
          <Link href="/" className="nav-brand !px-0" aria-label="Início">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-mark.svg" alt="" aria-hidden="true" className="brand-mark-icon w-7 h-7 flex-none" />
            <span aria-hidden="true" className="brand-mark-icon-emoji hidden flex-none" />
          </Link>
        </span>
        <div className="min-w-0">
          <ClassSwitcher />
        </div>
        <span className="flex-1" />
        {/* Invólucros porque o próprio indicador já é inline-flex e anularia o hidden. */}
        <span className="hidden sm:block flex-none">
          <SyncIndicator className="text-[var(--text-muted)]" />
        </span>
        <span className="sm:hidden flex-none">
          <SyncIndicator className="text-[var(--text-muted)]" compact />
        </span>
      </div>
    </header>
  );
}
