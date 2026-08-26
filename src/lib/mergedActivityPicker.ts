import { OwnSubject } from "@/types/plano";
import { ActivityExercise } from "@/types/activity";
import { findActivity } from "./activityPicker";
import { findHomework } from "./homeworkPicker";

export type SourcedExercise = ActivityExercise & { source: "aula" | "casa" };

export type MergedActivity = {
  exercises: SourcedExercise[];
};

/**
 * Junta, pro mesmo tema, os exercícios do banco de atividade (aula) e do banco de lição de casa
 * (casa) num único pool — cada exercício marcado com a origem, pra alimentar o filtro da modal
 * "Personalizar atividade". Retorna null quando nenhum dos dois bancos tem entrada pro tema.
 */
export function findMergedActivity(
  subjectKey: OwnSubject | "leitura-diaria",
  theme: string,
  gradeYear?: string
): MergedActivity | null {
  const activity = findActivity(subjectKey, theme, gradeYear);
  const homework = subjectKey === "leitura-diaria" ? null : findHomework(subjectKey, theme, gradeYear);
  if (!activity && !homework) return null;

  const exercises: SourcedExercise[] = [
    ...(activity?.exercises.map((exercise) => ({ ...exercise, source: "aula" as const })) ?? []),
    ...(homework?.exercises.map((exercise) => ({ ...exercise, source: "casa" as const })) ?? []),
  ];
  return { exercises };
}
