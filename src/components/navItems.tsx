import { ReactNode } from "react";

export type NavItem = { href: string; label: string; icon: ReactNode };

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "flex-none",
};

export const ICONS = {
  home: (
    <svg {...iconProps}>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
    </svg>
  ),
  week: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
  library: (
    <svg {...iconProps}>
      <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z" />
      <path d="M4 19V5M9 7h6" />
    </svg>
  ),
  progress: (
    <svg {...iconProps}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  classes: (
    <svg {...iconProps}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5" />
      <path d="M16 4.5a3.5 3.5 0 010 7M18 14.8c2 .6 3.5 2.3 3.5 5.2" />
    </svg>
  ),
  timetable: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  profile: (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  ),
  admin: (
    <svg {...iconProps}>
      <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
    </svg>
  ),
  logout: (
    <svg {...iconProps}>
      <path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h11" />
    </svg>
  ),
  more: (
    <svg {...iconProps}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  chevron: (
    <svg {...iconProps} width={16} height={16}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
};

/** O dia a dia: o que a professora abre toda semana. */
export const MAIN_NAV: NavItem[] = [
  { href: "/", label: "Início", icon: ICONS.home },
  { href: "/semana", label: "Semana", icon: ICONS.week },
  { href: "/biblioteca", label: "Biblioteca", icon: ICONS.library },
  { href: "/progresso", label: "Progresso", icon: ICONS.progress },
];

/** Configuração: muda pouco, mas precisa ser fácil de achar. */
export const SETUP_NAV: NavItem[] = [
  { href: "/turmas", label: "Turmas e escolas", icon: ICONS.classes },
  { href: "/grade", label: "Horário e cores", icon: ICONS.timetable },
];

export function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
