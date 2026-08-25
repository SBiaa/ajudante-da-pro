export type GradeOption = {
  value: string;
  label: string;
};

/** Ano/série que o professor pode escolher no perfil. Quais combinações (rede, ano) têm banco de
 * conteúdo de fato é decidido em runtime por `hasThemeBank` (src/data/curriculumBanks.ts) — a
 * lista aqui é só o catálogo de anos que a interface conhece. */
export const GRADE_OPTIONS: GradeOption[] = [
  { value: "1-ano", label: "1º ano" },
  { value: "2-ano", label: "2º ano" },
  { value: "3-ano", label: "3º ano" },
  { value: "4-ano", label: "4º ano" },
  { value: "5-ano", label: "5º ano" },
];

export const DEFAULT_GRADE = "2-ano";

/** Rede de ensino — decide qual currículo oficial (e banco de conteúdo) é usado: Currículo da
 * Cidade (Prefeitura de SP) ou Currículo Paulista (Estado de SP). */
export type Network = "prefeitura" | "estado";

export type NetworkOption = {
  value: Network;
  label: string;
  shortLabel: string;
};

export const NETWORK_OPTIONS: NetworkOption[] = [
  { value: "prefeitura", label: "Prefeitura de SP (Currículo da Cidade)", shortLabel: "Prefeitura" },
  { value: "estado", label: "Estado de SP (Currículo Paulista)", shortLabel: "Estado" },
];

export const DEFAULT_NETWORK: Network = "prefeitura";

export function getNetworkLabel(network: string): string {
  const option = NETWORK_OPTIONS.find((n) => n.value === network);
  return option?.shortLabel ?? NETWORK_OPTIONS.find((n) => n.value === DEFAULT_NETWORK)!.shortLabel;
}

export type ThemeOption = {
  value: string;
  label: string;
  emoji: string;
  enabled: boolean;
};

/** Tema visual do app (cores, ícones). "default" é a identidade Claudia; os demais são
 * variações divertidas para a sala de aula, escolhidas no Perfil. */
export const THEME_OPTIONS: ThemeOption[] = [
  { value: "default", label: "Claudia (padrão)", emoji: "🐈", enabled: true },
  { value: "gatinho", label: "Gatinho", emoji: "🐱", enabled: true },
];

export const DEFAULT_THEME = "default";

/** Rótulo de exibição do ano/série (ex.: cabeçalho do app) — cai no padrão se o valor salvo
 * não corresponder a nenhuma opção conhecida (perfil nunca configurado, dado antigo/inválido). */
export function getGradeLabel(gradeYear: string): string {
  const option = GRADE_OPTIONS.find((g) => g.value === gradeYear);
  return option?.label ?? GRADE_OPTIONS.find((g) => g.value === DEFAULT_GRADE)!.label;
}
