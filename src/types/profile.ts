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
  { value: "6-ano", label: "6º ano" },
  { value: "7-ano", label: "7º ano" },
  { value: "8-ano", label: "8º ano" },
  { value: "9-ano", label: "9º ano" },
  { value: "1-serie-em", label: "1ª série EM" },
  { value: "2-serie-em", label: "2ª série EM" },
  { value: "3-serie-em", label: "3ª série EM" },
];

export const DEFAULT_GRADE = "2-ano";

/** Séries do Ensino Médio. Só ficam disponíveis para escolha quando a rede tiver banco de temas
 * registrado para elas (ver availableGradesFor em src/data/curriculumBanks.ts). */
export const HIGH_SCHOOL_GRADES = ["1-serie-em", "2-serie-em", "3-serie-em"];

export function isHighSchoolGrade(gradeYear: string): boolean {
  return HIGH_SCHOOL_GRADES.includes(gradeYear);
}

/** Anos em que o ensino é departamentalizado na prática: cada professor leciona uma ou poucas
 * matérias (diferente do 1º-6º ano, onde o mesmo professor dá as 5 matérias próprias). Inclui
 * todo o Ensino Médio. */
export const SPECIALIST_GRADES = ["7-ano", "8-ano", "9-ano", ...HIGH_SCHOOL_GRADES];

export function isSpecialistGrade(gradeYear: string): boolean {
  return SPECIALIST_GRADES.includes(gradeYear);
}

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
