import { OwnSubject, UsedExerciseEntry } from "@/types/plano";
import { SourcedExercise } from "./mergedActivityPicker";

/** Os bancos de atividade/lição de casa não têm id próprio — a origem (aula/casa) + o
 * enunciado exato já identificam a questão dentro de um tema sem precisar mexer no formato
 * dos bancos. */
export function exerciseKey(exercise: SourcedExercise): string {
  return `${exercise.source}::${exercise.instruction}`;
}

/** Monta um índice rápido pra checar "essa questão já foi usada?" sem varrer o array inteiro
 * a cada exercício renderizado. */
export function buildUsedExerciseSet(usedExercises: UsedExerciseEntry[]): Set<string> {
  return new Set(usedExercises.map((e) => `${e.subject}|${e.theme}|${e.exerciseKey}`));
}

export function isExerciseUsed(
  usedSet: Set<string>,
  subjectKey: OwnSubject | "leitura-diaria",
  theme: string,
  exercise: SourcedExercise
): boolean {
  return usedSet.has(`${subjectKey}|${theme}|${exerciseKey(exercise)}`);
}
