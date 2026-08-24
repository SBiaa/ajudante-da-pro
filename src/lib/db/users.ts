import { sql } from "./client";
import { hashPassword, verifyPasswordHash } from "@/lib/auth/password";

export type User = { id: number; username: string };

/** Não há sistema de migração no projeto — criar sob demanda aqui mantém o mesmo padrão
 * informal usado nas outras tabelas (ver sharedWeek.ts e appData.ts). */
async function ensureTable(): Promise<void> {
  try {
    await sql`
      create table if not exists users (
        id serial primary key,
        username text unique not null,
        password_hash text not null,
        password_salt text not null,
        created_at timestamptz not null default now()
      )
    `;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (!/pg_type_typname_nsp_index|already exists/i.test(message)) throw err;
  }
}

export async function createUser(username: string, password: string): Promise<User> {
  await ensureTable();
  const { hash, salt } = hashPassword(password);
  const rows = await sql`
    insert into users (username, password_hash, password_salt)
    values (${username}, ${hash}, ${salt})
    returning id, username
  `;
  return { id: rows[0].id as number, username: rows[0].username as string };
}

export async function verifyLogin(username: string, password: string): Promise<User | null> {
  await ensureTable();
  const rows = await sql`
    select id, username, password_hash, password_salt from users where username = ${username}
  `;
  if (rows.length === 0) return null;
  const row = rows[0];
  const ok = verifyPasswordHash(password, row.password_hash as string, row.password_salt as string);
  if (!ok) return null;
  return { id: row.id as number, username: row.username as string };
}
