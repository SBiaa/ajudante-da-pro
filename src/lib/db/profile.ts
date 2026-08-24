import { sql } from "./client";

export type StoredProfile = { gradeYear: string; theme: string };

// A coluna "id" da tabela é o id do usuário (users.id) — cada professora tem uma linha só.
export async function getProfile(userId: number): Promise<StoredProfile | null> {
  const rows = await sql`select grade_year, theme from profile where id = ${userId}`;
  if (rows.length === 0) return null;
  return { gradeYear: rows[0].grade_year as string, theme: rows[0].theme as string };
}

export async function saveProfile(userId: number, gradeYear: string, theme: string): Promise<void> {
  await sql`
    insert into profile (id, grade_year, theme, updated_at)
    values (${userId}, ${gradeYear}, ${theme}, now())
    on conflict (id) do update set grade_year = excluded.grade_year, theme = excluded.theme, updated_at = excluded.updated_at
  `;
}
