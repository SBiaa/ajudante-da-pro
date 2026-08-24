export type GradeOption = {
  value: string;
  label: string;
  enabled: boolean;
};

/** Ano/série que o professor pode escolher no perfil. Só "2º ano" tem conteúdo hoje
 * (o banco de temas em src/data/themeBank.ts é todo dele) — os demais entram "em breve". */
export const GRADE_OPTIONS: GradeOption[] = [
  { value: "1-ano", label: "1º ano", enabled: false },
  { value: "2-ano", label: "2º ano", enabled: true },
  { value: "3-ano", label: "3º ano", enabled: false },
  { value: "4-ano", label: "4º ano", enabled: false },
  { value: "5-ano", label: "5º ano", enabled: false },
];

export const DEFAULT_GRADE = "2-ano";

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
