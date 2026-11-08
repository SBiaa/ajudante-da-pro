import { OwnSubject } from "@/types/plano";
import { Network } from "@/types/profile";
import { getThemeBank } from "@/data/curriculumBanks";
import { findActivity } from "@/lib/activityPicker";
import { findHomework } from "@/lib/homeworkPicker";

/** Chaves "matéria|tema" dos temas do banco da professora (rede + ano) que têm folha de atividade
 * ou lição de casa pronta. Roda no servidor: os bancos de atividade são enormes e não devem ir
 * pro bundle do cliente — a home só recebe a lista de chaves e compara com `usedExercises`. */
export function activityThemeKeys(network: Network, gradeYear: string, subjects: OwnSubject[]): string[] {
  const bank = getThemeBank(network, gradeYear);
  if (!bank) return [];
  const keys: string[] = [];
  for (const subject of subjects) {
    for (const entry of bank[subject] ?? []) {
      if (findActivity(subject, entry.theme, gradeYear) || findHomework(subject, entry.theme, gradeYear)) {
        keys.push(`${subject}|${entry.theme}`);
      }
    }
  }
  return keys;
}
