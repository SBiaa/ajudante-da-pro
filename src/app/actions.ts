"use server";

import { randomBytes } from "node:crypto";
import type { WeekPlan, WeeklyTimetable } from "@/types/plano";
import type { SubjectColorOverrides } from "@/lib/subjectColors";
import { requireSession } from "@/lib/auth/requireSession";
import { saveStoredTimetable } from "@/lib/db/timetable";
import { createSharedWeek } from "@/lib/db/sharedWeek";

export async function saveStoredTimetableAction(timetable: WeeklyTimetable) {
  await requireSession();
  await saveStoredTimetable(timetable);
}

/** Gera um link público (sem login) com uma cópia somente-leitura da semana — só a própria
 * professora logada pode criar um; quem recebe o link não precisa de conta. */
export async function createShareLinkAction(week: WeekPlan, colorOverrides: SubjectColorOverrides): Promise<string> {
  await requireSession();
  const token = randomBytes(9).toString("base64url");
  await createSharedWeek(token, { week, colorOverrides });
  return token;
}
