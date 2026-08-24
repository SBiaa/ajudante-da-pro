import type { WeekPlan } from "@/types/plano";
import type { SubjectColorOverrides } from "@/lib/subjectColors";
import { sql } from "./client";

export type SharedWeekPayload = {
  week: WeekPlan;
  colorOverrides: SubjectColorOverrides;
};

const SHARE_TTL_DAYS = 30;

/** Não há sistema de migração no projeto (tabelas existentes foram criadas à mão) — criar
 * sob demanda aqui mantém o mesmo padrão informal, sem exigir um passo manual extra. */
async function ensureTable(): Promise<void> {
  await sql`
    create table if not exists shared_weeks (
      token text primary key,
      data jsonb not null,
      created_at timestamptz not null default now(),
      expires_at timestamptz not null
    )
  `;
}

export async function createSharedWeek(token: string, payload: SharedWeekPayload): Promise<void> {
  await ensureTable();
  const expiresAt = new Date(Date.now() + SHARE_TTL_DAYS * 24 * 60 * 60 * 1000).toISOString();
  await sql`
    insert into shared_weeks (token, data, expires_at)
    values (${token}, ${JSON.stringify(payload)}, ${expiresAt})
  `;
}

/** Retorna null tanto para token inexistente/expirado quanto para erro de banco (ex.: tabela
 * ainda não criada) — um visitante sem sessão não deve ver um erro 500, só "link não encontrado". */
export async function getSharedWeek(token: string): Promise<SharedWeekPayload | null> {
  try {
    const rows = await sql`select data from shared_weeks where token = ${token} and expires_at > now()`;
    if (rows.length === 0) return null;
    return rows[0].data as SharedWeekPayload;
  } catch {
    return null;
  }
}
