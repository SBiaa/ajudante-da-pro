"use server";

import type { WeeklyTimetable } from "@/types/plano";
import { requireSession } from "@/lib/auth/requireSession";
import { saveStoredTimetable } from "@/lib/db/timetable";

export async function saveStoredTimetableAction(timetable: WeeklyTimetable) {
  await requireSession();
  await saveStoredTimetable(timetable);
}
