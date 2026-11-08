import { OwnSubject } from "@/types/plano";
import { ActivityEntry } from "@/types/activity";
import { ACTIVITY_BANK } from "@/data/activityBank";
import { EM_ACTIVITY_BANK } from "@/data/activityBankEm";

/** Todas as folhas de atividade de uma matéria: o banco principal (Fundamental) mais o do Ensino
 * Médio, que fica num arquivo à parte. */
export function activitiesFor(subjectKey: OwnSubject | "leitura-diaria"): ActivityEntry[] {
  const em = subjectKey === "leitura-diaria" ? [] : (EM_ACTIVITY_BANK[subjectKey] ?? []);
  return [...(ACTIVITY_BANK[subjectKey] ?? []), ...em];
}

/**
 * Busca a folha de atividade curada para o tema exato de uma aula (mesma string usada no
 * banco de temas). Retorna null se a matéria ainda não tem atividades no banco, ou se o
 * tema foi editado manualmente e não bate mais com nenhuma entrada.
 */
export function findActivity(
  subjectKey: OwnSubject | "leitura-diaria",
  theme: string,
  gradeYear?: string
): ActivityEntry | null {
  if (!theme) return null;
  const list = activitiesFor(subjectKey);
  const matches = list.filter((entry) => entry.theme === theme);
  if (matches.length <= 1) return matches[0] ?? null;
  return matches.find((entry) => entry.gradeYear === gradeYear) ?? matches[0];
}
