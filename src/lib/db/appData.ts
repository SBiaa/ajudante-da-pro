import type { WeekPlan, ThemeHistoryEntry } from "@/types/plano";
import type { SubjectColorOverrides } from "@/lib/subjectColors";
import { sql } from "./client";

export type StoredAppData = {
  weeks: Record<string, WeekPlan>;
  themeHistory: ThemeHistoryEntry[];
  subjectColorOverrides: SubjectColorOverrides;
  updatedAt: string;
};

/** Não há sistema de migração no projeto (tabelas existentes foram criadas à mão) — criar
 * sob demanda aqui mantém o mesmo padrão informal usado em sharedWeek.ts.
 *
 * `create table if not exists` não é atômico entre conexões: se duas requisições chegam
 * antes da tabela existir (comum aqui, já que o load da página e o primeiro sync debounced
 * disparam quase juntos), o Postgres pode gerar "duplicate key value violates unique
 * constraint pg_type_typname_nsp_index" — as duas tentaram criar o mesmo tipo de linha ao
 * mesmo tempo. Isso só significa que a outra corrida já criou a tabela, então ignoramos. */
async function ensureTable(): Promise<void> {
  try {
    await sql`
      create table if not exists app_data (
        id integer primary key,
        weeks jsonb not null,
        theme_history jsonb not null,
        subject_color_overrides jsonb not null,
        updated_at timestamptz not null
      )
    `;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (!/pg_type_typname_nsp_index|already exists/i.test(message)) throw err;
  }
}

// A coluna "id" da tabela é o id do usuário (users.id) — cada professora tem uma linha só.
export async function getStoredAppData(userId: number): Promise<StoredAppData | null> {
  await ensureTable();
  const rows = await sql`
    select weeks, theme_history, subject_color_overrides, updated_at from app_data where id = ${userId}
  `;
  if (rows.length === 0) return null;
  return {
    weeks: rows[0].weeks as Record<string, WeekPlan>,
    themeHistory: rows[0].theme_history as ThemeHistoryEntry[],
    subjectColorOverrides: rows[0].subject_color_overrides as SubjectColorOverrides,
    updatedAt: new Date(rows[0].updated_at as string).toISOString(),
  };
}

/** `updatedAt` vem do cliente (não usamos `now()`): é o mesmo carimbo comparado na
 * reconciliação em HomeClient, então precisa ser o horário local de quem editou, não o
 * horário em que o servidor recebeu a gravação. */
export async function saveStoredAppData(userId: number, data: StoredAppData): Promise<void> {
  await ensureTable();
  await sql`
    insert into app_data (id, weeks, theme_history, subject_color_overrides, updated_at)
    values (${userId}, ${JSON.stringify(data.weeks)}, ${JSON.stringify(data.themeHistory)}, ${JSON.stringify(data.subjectColorOverrides)}, ${data.updatedAt})
    on conflict (id) do update set
      weeks = excluded.weeks,
      theme_history = excluded.theme_history,
      subject_color_overrides = excluded.subject_color_overrides,
      updated_at = excluded.updated_at
  `;
}
