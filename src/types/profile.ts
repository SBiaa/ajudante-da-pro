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
