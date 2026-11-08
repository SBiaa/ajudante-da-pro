"use server";

import { randomBytes } from "node:crypto";
import type { WeekPlan, WeeklyTimetable } from "@/types/plano";
import type { SubjectColorOverrides } from "@/lib/subjectColors";
import { requireSession } from "@/lib/auth/requireSession";
import { saveStoredTimetable } from "@/lib/db/timetable";
import { createSharedWeek } from "@/lib/db/sharedWeek";
import { saveStoredAppData, type StoredAppData } from "@/lib/db/appData";
import { getProfile } from "@/lib/db/profile";
import { DEFAULT_GRADE, getGradeLabel } from "@/types/profile";

export async function saveStoredTimetableAction(timetable: WeeklyTimetable) {
  const userId = await requireSession();
  await saveStoredTimetable(userId, timetable);
}

/** Sincroniza semanas, histórico de temas e cores personalizadas com o servidor — chamada
 * (com debounce) a cada alteração local, pra não perder tudo ao trocar de dispositivo. */
export async function saveStoredAppDataAction(data: StoredAppData) {
  const userId = await requireSession();
  await saveStoredAppData(userId, data);
}

/** Gera um link público (sem login) com uma cópia somente-leitura da semana — só a própria
 * professora logada pode criar um; quem recebe o link não precisa de conta. */
export async function createShareLinkAction(
  week: WeekPlan,
  colorOverrides: SubjectColorOverrides,
  /** Rótulo da turma de quem compartilha ("7ºA"). Só texto de exibição; sem ele, usa o ano do perfil. */
  classLabel?: string
): Promise<string> {
  const userId = await requireSession();
  const profile = await getProfile(userId);
  const label = classLabel?.trim().slice(0, 40);
  const gradeLabel = label || getGradeLabel(profile?.gradeYear ?? DEFAULT_GRADE);
  const token = randomBytes(9).toString("base64url");
  await createSharedWeek(token, { week, colorOverrides, gradeLabel });
  return token;
}
