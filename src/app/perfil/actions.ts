"use server";

import { revalidatePath } from "next/cache";
import { requireSession } from "@/lib/auth/requireSession";
import { saveProfile } from "@/lib/db/profile";
import { GRADE_OPTIONS, THEME_OPTIONS, DEFAULT_THEME } from "@/types/profile";

export type SaveProfileState = { error: string | null; saved: boolean };

export async function saveProfileAction(
  _prevState: SaveProfileState,
  formData: FormData
): Promise<SaveProfileState> {
  const userId = await requireSession();

  const gradeYear = String(formData.get("gradeYear") ?? "");
  const option = GRADE_OPTIONS.find((g) => g.value === gradeYear);
  if (!option || !option.enabled) {
    return { error: "Esse ano ainda não está disponível.", saved: false };
  }

  const theme = String(formData.get("theme") ?? DEFAULT_THEME);
  const themeOption = THEME_OPTIONS.find((t) => t.value === theme);
  if (!themeOption || !themeOption.enabled) {
    return { error: "Esse tema ainda não está disponível.", saved: false };
  }

  await saveProfile(userId, gradeYear, theme);
  revalidatePath("/perfil");
  revalidatePath("/");
  return { error: null, saved: true };
}
