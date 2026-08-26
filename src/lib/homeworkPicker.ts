import { ActivityEntry } from "@/types/activity";
import { HOMEWORK_BANK, HomeworkSubject } from "@/data/homeworkBank";

/**
 * Busca a folha de lição de casa curada para o tema exato de uma aula (mesma string usada no
 * banco de temas). Só existe para Matemática e Língua Portuguesa; retorna null para as demais
 * matérias, para Leitura Diária, ou se o tema não tem lição de casa cadastrada.
 */
export function findHomework(subjectKey: string, theme: string, gradeYear?: string): ActivityEntry | null {
  if (!theme) return null;
  const list = HOMEWORK_BANK[subjectKey as HomeworkSubject];
  if (!list) return null;
  const matches = list.filter((entry) => entry.theme === theme);
  if (matches.length <= 1) return matches[0] ?? null;
  return matches.find((entry) => entry.gradeYear === gradeYear) ?? matches[0];
}
