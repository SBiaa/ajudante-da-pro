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
  exercises: ActivityExercise[];
};
