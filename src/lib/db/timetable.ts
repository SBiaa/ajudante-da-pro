import type { WeeklyTimetable } from "@/types/plano";
import { sql } from "./client";

// A coluna "id" da tabela é o id do usuário (users.id) — cada professora tem uma linha só.
export async function getStoredTimetable(userId: number): Promise<WeeklyTimetable | null> {
  const rows = await sql`select data from timetable where id = ${userId}`;
  if (rows.length === 0 || !rows[0].data) return null;
  return rows[0].data as WeeklyTimetable;
}

export async function saveStoredTimetable(userId: number, timetable: WeeklyTimetable): Promise<void> {
  await sql`
    insert into timetable (id, data, updated_at)
    values (${userId}, ${JSON.stringify(timetable)}, now())
    on conflict (id) do update set data = excluded.data, updated_at = excluded.updated_at
  `;
}
