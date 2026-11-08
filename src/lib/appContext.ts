import { cache } from "react";
import { getStoredTimetable } from "@/lib/db/timetable";
import { getProfile } from "@/lib/db/profile";
import { getStoredAppData } from "@/lib/db/appData";
import { getUserById } from "@/lib/db/users";
import { requireSession } from "@/lib/auth/requireSession";
import { sanitizeSetup, setupFromLegacyProfile } from "@/types/turma";

/** Dados do servidor que o layout das rotas autenticadas e as páginas precisam. `cache` do React
 * deduplica dentro da mesma requisição: layout e página chamam e o banco só é consultado uma vez. */
export const loadAppData = cache(async () => {
  const userId = await requireSession();
  const [initialTimetable, profile, initialAppData, user] = await Promise.all([
    getStoredTimetable(userId),
    getProfile(userId),
    getStoredAppData(userId),
    getUserById(userId),
  ]);
  // Quem nunca configurou turmas ganha uma turma única montada do perfil antigo — sem migrar dados.
  const setup = sanitizeSetup(profile?.setup, setupFromLegacyProfile(profile));
  return {
    userId,
    initialTimetable,
    initialAppData,
    setup,
    isAdmin: user?.isAdmin ?? false,
    teacherName: user?.username,
  };
});
