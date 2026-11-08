"use server";

import { revalidatePath } from "next/cache";
import { requireSession } from "@/lib/auth/requireSession";
import { getProfile, saveSetup } from "@/lib/db/profile";
import { GRADE_OPTIONS, isSpecialistGrade } from "@/types/profile";
import { hasThemeBank } from "@/data/curriculumBanks";
import { Setup, sanitizeSetup, setupFromLegacyProfile } from "@/types/turma";

export type SaveSetupResult = { ok: true; setup: Setup } | { ok: false; error: string };

/** Grava as escolas e turmas da professora. Valida cada turma (ano existente e com banco de temas
 * na rede da escola) e não deixa sumir a turma principal, onde ficam os dados já existentes. */
export async function saveSetupAction(raw: Setup): Promise<SaveSetupResult> {
  const userId = await requireSession();
  const profile = await getProfile(userId);
  const current = sanitizeSetup(profile?.setup, setupFromLegacyProfile(profile));
  const next = sanitizeSetup(raw, current);

  if (!next.classes.some((c) => c.id === current.primaryClassId)) {
    return { ok: false, error: "A turma principal não pode ser removida — edite-a em vez de apagar." };
  }
  // sanitizeSetup pode ter escolhido outra principal se a original sumiu; força a original.
  next.primaryClassId = current.primaryClassId;

  const schoolById = new Map(next.schools.map((s) => [s.id, s]));
  for (const c of next.classes) {
    if (!GRADE_OPTIONS.some((g) => g.value === c.gradeYear)) {
      return { ok: false, error: `O ano da turma "${c.label}" não é válido.` };
    }
    const school = schoolById.get(c.schoolId)!;
    if (!hasThemeBank(school.network, c.gradeYear)) {
      return { ok: false, error: `A turma "${c.label}" usa um ano que ainda não tem conteúdo nessa rede.` };
    }
    // 1º-6º ano é generalista (as 5 matérias); 7º-9º é por especialista, mas a professora pode
    // dar mais de uma (ex.: Matemática e Ciências), então só exigimos ao menos uma.
    if (c.subjects.length === 0 && !isSpecialistGrade(c.gradeYear)) {
      return { ok: false, error: `Escolha ao menos uma matéria na turma "${c.label}".` };
    }
  }
  if (next.schools.some((s) => !next.classes.some((c) => c.schoolId === s.id))) {
    return { ok: false, error: "Toda escola precisa ter ao menos uma turma." };
  }

  const primary = next.classes.find((c) => c.id === next.primaryClassId)!;
  const primarySchool = schoolById.get(primary.schoolId)!;
  await saveSetup(userId, next, {
    gradeYear: primary.gradeYear,
    network: primarySchool.network,
    ownSubject: primary.subjects.length === 1 && isSpecialistGrade(primary.gradeYear) ? primary.subjects[0] : null,
  });
  revalidatePath("/", "layout");
  return { ok: true, setup: next };
}
