import { sql } from "./client";

export type StoredProfile = { gradeYear: string };

export async function getProfile(): Promise<StoredProfile | null> {
  const rows = await sql`select grade_year from profile where id = 1`;
  if (rows.length === 0) return null;
  return { gradeYear: rows[0].grade_year as string };
}

export async function saveProfile(gradeYear: string): Promise<void> {
  await sql`
    insert into profile (id, grade_year, updated_at)
    values (1, ${gradeYear}, now())
    on conflict (id) do update set grade_year = excluded.grade_year, updated_at = excluded.updated_at
  `;
}
