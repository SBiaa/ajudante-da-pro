"use server";

import { revalidatePath } from "next/cache";
import { requireSession } from "@/lib/auth/requireSession";
import { saveTheme } from "@/lib/db/profile";
import { THEME_OPTIONS, DEFAULT_THEME } from "@/types/profile";

export type SaveProfileState = { error: string | null; saved: boolean };

/** Perfil agora só guarda o tema visual: ano, rede e matérias vivem nas turmas (/turmas). */
export async function saveProfileAction(
  _prevState: SaveProfileState,
  formData: FormData
): Promise<SaveProfileState> {
  const userId = await requireSession();

  const theme = String(formData.get("theme") ?? DEFAULT_THEME);
  const themeOption = THEME_OPTIONS.find((t) => t.value === theme);
  if (!themeOption || !themeOption.enabled) {
    return { error: "Esse tema ainda não está disponível.", saved: false };
  }

  await saveTheme(userId, theme);
  revalidatePath("/perfil");
  revalidatePath("/", "layout");
  return { error: null, saved: true };
}
