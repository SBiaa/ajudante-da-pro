import { OwnSubject } from "@/types/plano";
import { ActivityEntry } from "@/types/activity";
import { ACTIVITY_BANK } from "@/data/activityBank";

/**
 * Busca a folha de atividade curada para o tema exato de uma aula (mesma string usada no
 * banco de temas). Retorna null se a matéria ainda não tem atividades no banco, ou se o
 * tema foi editado manualmente e não bate mais com nenhuma entrada.
 */
export function findActivity(subjectKey: OwnSubject | "leitura-diaria", theme: string): ActivityEntry | null {
  if (!theme) return null;
  const list = ACTIVITY_BANK[subjectKey];
  return list.find((entry) => entry.theme === theme) ?? null;
}
