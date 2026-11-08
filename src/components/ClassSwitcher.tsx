"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/components/AppShell";
import { getGradeLabel, getNetworkLabel } from "@/types/profile";
import { DropdownMenu } from "./DropdownMenu";
import { ICONS } from "./navItems";

/** Cores das bolinhas de cada turma, na ordem em que foram cadastradas. */
const CLASS_COLORS = ["var(--crimson-500)", "var(--green-600)", "var(--plum-700)", "var(--crimson-300)", "var(--ink-600)"];

function initials(label: string): string {
  const compact = label.replace(/\s+/g, "");
  const m = compact.match(/^(\d+)[ºª°]?(?:ano)?([A-Za-z])?/i);
  if (m) return `${m[1]}${m[2]?.toUpperCase() ?? ""}`;
  return compact.slice(0, 2).toUpperCase();
}

/** Turma ativa, sempre no topo da tela. Com mais de uma turma vira um seletor; com uma só é um
 * atalho pra tela de turmas. No Início, no Perfil e em Turmas não há "turma ativa" pra escolher
 * (o Início mostra todas juntas), então mostra só o resumo. */
export function ClassSwitcher() {
  const pathname = usePathname();
  const { classes, activeClassId, setActiveClassId, activeClass, setup } = useApp();
  const multipleSchools = setup.schools.length > 1;
  const colorOf = (id: string) => CLASS_COLORS[Math.max(0, classes.findIndex((c) => c.cls.id === id)) % CLASS_COLORS.length];

  const canSwitch = classes.length > 1 && pathname !== "/" && pathname !== "/perfil" && pathname !== "/turmas";

  if (!canSwitch) {
    const text =
      classes.length > 1
        ? `${classes.length} turmas${multipleSchools ? ` · ${setup.schools.length} escolas` : ""}`
        : `${getGradeLabel(activeClass.cls.gradeYear)} · ${getNetworkLabel(activeClass.school.network)}`;
    return (
      <Link href="/turmas" className="class-chip" title="Ajustar escolas e turmas">
        <span className="class-chip-dot" style={{ background: colorOf(activeClassId) }} aria-hidden="true">
          {classes.length > 1 ? classes.length : initials(activeClass.cls.label)}
        </span>
        <span className="truncate">{text}</span>
      </Link>
    );
  }

  const label = (id: string) => {
    const entry = classes.find((c) => c.cls.id === id) ?? activeClass;
    return multipleSchools ? `${entry.cls.label} · ${entry.school.name}` : entry.cls.label;
  };

  return (
    <DropdownMenu
      align="left"
      triggerClassName="class-chip cursor-pointer"
      panelClassName="w-72"
      trigger={
        <>
          <span className="class-chip-dot" style={{ background: colorOf(activeClassId) }} aria-hidden="true">
            {initials(activeClass.cls.label)}
          </span>
          <span className="sr-only">Turma: </span>
          <span className="truncate">{label(activeClassId)}</span>
          <span className="text-[var(--text-muted)]">{ICONS.chevron}</span>
        </>
      }
    >
      {(close) => (
        <>
          <p className="px-3 pt-1.5 pb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
            Trocar de turma
          </p>
          {classes.map(({ cls, school }) => (
            <button
              key={cls.id}
              type="button"
              role="menuitemradio"
              aria-checked={cls.id === activeClassId}
              onClick={() => {
                setActiveClassId(cls.id);
                close();
              }}
              className={`menu-link ${cls.id === activeClassId ? "font-semibold" : ""}`}
            >
              <span className="class-chip-dot" style={{ background: colorOf(cls.id) }} aria-hidden="true">
                {initials(cls.label)}
              </span>
              <span className="min-w-0 flex-1 truncate">{cls.label}</span>
              <span className="text-xs text-[var(--text-muted)] truncate max-w-[45%]">
                {multipleSchools ? school.name : getNetworkLabel(school.network)}
              </span>
            </button>
          ))}
          <div className="mt-1 pt-1 border-t border-[var(--border-subtle)]">
            <Link href="/turmas" role="menuitem" className="menu-link text-[var(--text-muted)]" onClick={close}>
              {ICONS.classes}
              Gerenciar turmas
            </Link>
          </div>
        </>
      )}
    </DropdownMenu>
  );
}
