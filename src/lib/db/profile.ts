import { sql } from "./client";
import { Network } from "@/types/profile";

export type StoredProfile = { gradeYear: string; theme: string; network: Network };

// A coluna "id" da tabela é o id do usuário (users.id) — cada professora tem uma linha só.
export async function getProfile(userId: number): Promise<StoredProfile | null> {
  const rows = await sql`select grade_year, theme, network from profile where id = ${userId}`;
  if (rows.length === 0) return null;
  return {
    gradeYear: rows[0].grade_year as string,
    theme: rows[0].theme as string,
    network: rows[0].network as Network,
  };
}

export async function saveProfile(userId: number, gradeYear: string, theme: string, network: Network): Promise<void> {
  await sql`
    insert into profile (id, grade_year, theme, network, updated_at)
    values (${userId}, ${gradeYear}, ${theme}, ${network}, now())
    on conflict (id) do update set
      grade_year = excluded.grade_year,
      theme = excluded.theme,
      network = excluded.network,
      updated_at = excluded.updated_at
  `;
}
