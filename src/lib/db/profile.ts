import { sql } from "./client";
import { Network } from "@/types/profile";
import { OwnSubject } from "@/types/plano";

export type StoredProfile = { gradeYear: string; theme: string; network: Network; ownSubject: OwnSubject | null };

/** Não há sistema de migração no projeto — "own_subject" foi adicionada depois da tabela
 * original, mesmo padrão informal usado em users.ts/appData.ts. Perfis antigos ficam com
 * own_subject nulo (tratado como generalista) até a professora escolher a matéria dela. */
async function ensureOwnSubjectColumn(): Promise<void> {
  await sql`alter table profile add column if not exists own_subject text`;
}

// A coluna "id" da tabela é o id do usuário (users.id) — cada professora tem uma linha só.
export async function getProfile(userId: number): Promise<StoredProfile | null> {
  await ensureOwnSubjectColumn();
  const rows = await sql`select grade_year, theme, network, own_subject from profile where id = ${userId}`;
  if (rows.length === 0) return null;
  return {
    gradeYear: rows[0].grade_year as string,
    theme: rows[0].theme as string,
    network: rows[0].network as Network,
    ownSubject: (rows[0].own_subject as OwnSubject | null) ?? null,
  };
}

export async function saveProfile(
  userId: number,
  gradeYear: string,
  theme: string,
  network: Network,
  ownSubject: OwnSubject | null
): Promise<void> {
  await ensureOwnSubjectColumn();
  await sql`
    insert into profile (id, grade_year, theme, network, own_subject, updated_at)
    values (${userId}, ${gradeYear}, ${theme}, ${network}, ${ownSubject}, now())
    on conflict (id) do update set
      grade_year = excluded.grade_year,
      theme = excluded.theme,
      network = excluded.network,
      own_subject = excluded.own_subject,
      updated_at = excluded.updated_at
  `;
}
