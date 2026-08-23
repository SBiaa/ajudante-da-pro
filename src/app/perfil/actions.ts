"use server";

import { revalidatePath } from "next/cache";
import { requireSession } from "@/lib/auth/requireSession";
import { saveProfile } from "@/lib/db/profile";
import { GRADE_OPTIONS } from "@/types/profile";

export type SaveProfileState = { error: string | null; saved: boolean };

export async function saveProfileAction(
  _prevState: SaveProfileState,
  formData: FormData
): Promise<SaveProfileState> {
  await requireSession();

  const gradeYear = String(formData.get("gradeYear") ?? "");
  const option = GRADE_OPTIONS.find((g) => g.value === gradeYear);
  if (!option || !option.enabled) {
    return { error: "Esse ano ainda não está disponível.", saved: false };
  }

  await saveProfile(gradeYear);
  revalidatePath("/perfil");
  return { error: null, saved: true };
}
