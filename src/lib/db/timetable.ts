import type { WeeklyTimetable } from "@/types/plano";
import { sql } from "./client";

export async function getStoredTimetable(): Promise<WeeklyTimetable | null> {
  const rows = await sql`select data from timetable where id = 1`;
  if (rows.length === 0 || !rows[0].data) return null;
  return rows[0].data as WeeklyTimetable;
}

export async function saveStoredTimetable(timetable: WeeklyTimetable): Promise<void> {
  await sql`
    insert into timetable (id, data, updated_at)
    values (1, ${JSON.stringify(timetable)}, now())
    on conflict (id) do update set data = excluded.data, updated_at = excluded.updated_at
  `;
}
