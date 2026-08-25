"use server";

import { revalidatePath } from "next/cache";
import { requireSession } from "@/lib/auth/requireSession";
import { saveProfile } from "@/lib/db/profile";
import { GRADE_OPTIONS, THEME_OPTIONS, DEFAULT_THEME, NETWORK_OPTIONS, DEFAULT_NETWORK, Network } from "@/types/profile";
import { hasThemeBank } from "@/data/curriculumBanks";

export type SaveProfileState = { error: string | null; saved: boolean };

export async function saveProfileAction(
  _prevState: SaveProfileState,
  formData: FormData
): Promise<SaveProfileState> {
  const userId = await requireSession();

  const network = String(formData.get("network") ?? DEFAULT_NETWORK) as Network;
  const networkOption = NETWORK_OPTIONS.find((n) => n.value === network);
  if (!networkOption) {
    return { error: "Essa rede de ensino não é válida.", saved: false };
  }

  const gradeYear = String(formData.get("gradeYear") ?? "");
  const option = GRADE_OPTIONS.find((g) => g.value === gradeYear);
  if (!option || !hasThemeBank(network, gradeYear)) {
    return { error: "Esse ano ainda não está disponível para essa rede.", saved: false };
  }

  const theme = String(formData.get("theme") ?? DEFAULT_THEME);
  const themeOption = THEME_OPTIONS.find((t) => t.value === theme);
  if (!themeOption || !themeOption.enabled) {
    return { error: "Esse tema ainda não está disponível.", saved: false };
  }

  await saveProfile(userId, gradeYear, theme, network);
  revalidatePath("/perfil");
  revalidatePath("/");
  return { error: null, saved: true };
}
