import { sql } from "./client";
import { DEFAULT_GRADE, DEFAULT_NETWORK, Network } from "@/types/profile";
import { OwnSubject } from "@/types/plano";

export type StoredProfile = {
  gradeYear: string;
  theme: string;
  network: Network;
  ownSubject: OwnSubject | null;
  /** Escolas e turmas (ver types/turma.ts). null até a professora configurar — nesse caso o app
   * monta uma turma única a partir dos campos acima. */
  setup: unknown;
};

/** Não há sistema de migração no projeto — "own_subject" e "setup" foram adicionadas depois da
 * tabela original, mesmo padrão informal usado em users.ts/appData.ts. Perfis antigos ficam com
 * os dois nulos (tratado como uma turma generalista) até a professora configurar. */
async function ensureColumns(): Promise<void> {
  await sql`alter table profile add column if not exists own_subject text`;
  await sql`alter table profile add column if not exists setup jsonb`;
}

// A coluna "id" da tabela é o id do usuário (users.id) — cada professora tem uma linha só.
export async function getProfile(userId: number): Promise<StoredProfile | null> {
  await ensureColumns();
  const rows = await sql`select grade_year, theme, network, own_subject, setup from profile where id = ${userId}`;
  if (rows.length === 0) return null;
  return {
    gradeYear: rows[0].grade_year as string,
    theme: rows[0].theme as string,
    network: rows[0].network as Network,
    ownSubject: (rows[0].own_subject as OwnSubject | null) ?? null,
    setup: rows[0].setup ?? null,
  };
}

export async function saveProfile(
  userId: number,
  gradeYear: string,
  theme: string,
  network: Network,
  ownSubject: OwnSubject | null
): Promise<void> {
  await ensureColumns();
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

/** Só troca o tema visual, sem tocar em ano/rede/matéria/turmas. */
export async function saveTheme(userId: number, theme: string): Promise<void> {
  await ensureColumns();
  await sql`
    insert into profile (id, grade_year, theme, network, updated_at)
    values (${userId}, ${DEFAULT_GRADE}, ${theme}, ${DEFAULT_NETWORK}, now())
    on conflict (id) do update set theme = excluded.theme, updated_at = excluded.updated_at
  `;
}

/** Grava escolas/turmas. Ano, rede e matéria antigos são atualizados com os da turma principal
 * pra continuarem coerentes pra quem ainda os lê (link compartilhado, etc.). */
export async function saveSetup(
  userId: number,
  setup: unknown,
  legacy: { gradeYear: string; network: Network; ownSubject: OwnSubject | null }
): Promise<void> {
  await ensureColumns();
  await sql`
    insert into profile (id, grade_year, theme, network, own_subject, setup, updated_at)
    values (${userId}, ${legacy.gradeYear}, 'default', ${legacy.network}, ${legacy.ownSubject}, ${JSON.stringify(setup)}, now())
    on conflict (id) do update set
      grade_year = excluded.grade_year,
      network = excluded.network,
      own_subject = excluded.own_subject,
      setup = excluded.setup,
      updated_at = excluded.updated_at
  `;
}
