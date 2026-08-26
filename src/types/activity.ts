// Modelo de dados para atividades impressas (folha de exercícios para o aluno), vinculadas
// a um tema específico do banco de temas (src/data/activityBank.ts). Curadas manualmente,
// como o banco de temas — sem geração via IA em tempo real.

export type ActivityExercise =
  | { kind: "lines"; instruction: string; lines: number; note?: string }
  | { kind: "fill-blank"; instruction: string; items: string[]; note?: string }
  | { kind: "word-select"; instruction: string; items: string[]; note?: string }
  | { kind: "options"; instruction: string; options: string[]; note?: string }
  | { kind: "draw"; instruction: string; note?: string };

/** Uma folha de atividade impressa para um tema específico do banco. */
export type ActivityEntry = {
  /** Deve corresponder exatamente ao "theme" da entrada no banco de temas (BankEntry.theme). */
  theme: string;
  /**
   * Só precisa ser preenchido quando o mesmo texto de "theme" aparece em mais de um ano
   * (ex.: "Compondo e decompondo números" existe igual no 2º e no 3º ano, com números
   * diferentes) — desempata a busca por série. Deixe em branco quando o tema for único.
   */
  gradeYear?: string;
  exercises: ActivityExercise[];
};
