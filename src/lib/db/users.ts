import { sql } from "./client";
import { hashPassword, verifyPasswordHash } from "@/lib/auth/password";

export type User = { id: number; username: string; isAdmin: boolean };

export type AdminUserRow = {
  id: number;
  username: string;
  isAdmin: boolean;
  createdAt: string;
  weekCount: number;
  lastActivityAt: string | null;
};

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
        is_admin boolean not null default false,
        created_at timestamptz not null default now()
      )
    `;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (!/pg_type_typname_nsp_index|already exists/i.test(message)) throw err;
  }
  // "users" já existia antes da coluna is_admin — garante que instalações antigas ganhem a
  // coluna sem precisar de um passo de migração manual.
  await sql`alter table users add column if not exists is_admin boolean not null default false`;
}

function toUser(row: Record<string, unknown>): User {
  return { id: row.id as number, username: row.username as string, isAdmin: row.is_admin as boolean };
}

export async function createUser(username: string, password: string, isAdmin = false): Promise<User> {
  await ensureTable();
  const { hash, salt } = hashPassword(password);
  const rows = await sql`
    insert into users (username, password_hash, password_salt, is_admin)
    values (${username}, ${hash}, ${salt}, ${isAdmin})
    returning id, username, is_admin
  `;
  return toUser(rows[0]);
}

export async function verifyLogin(username: string, password: string): Promise<User | null> {
  await ensureTable();
  const rows = await sql`
    select id, username, password_hash, password_salt, is_admin from users where username = ${username}
  `;
  if (rows.length === 0) return null;
  const row = rows[0];
  const ok = verifyPasswordHash(password, row.password_hash as string, row.password_salt as string);
  if (!ok) return null;
  return toUser(row);
}

export async function getUserById(id: number): Promise<User | null> {
  await ensureTable();
  const rows = await sql`select id, username, is_admin from users where id = ${id}`;
  if (rows.length === 0) return null;
  return toUser(rows[0]);
}

/** Lista todas as professoras cadastradas com um retrato do uso (semanas montadas, última
 * atividade) pra alimentar o dashboard do admin. Left join porque nem toda usuária chegou a
 * salvar app_data ainda (conta recém-criada). */
export async function listUsersForAdmin(): Promise<AdminUserRow[]> {
  await ensureTable();
  const rows = await sql`
    select
      u.id,
      u.username,
      u.is_admin,
      u.created_at,
      (select count(*) from jsonb_object_keys(coalesce(a.weeks, '{}'::jsonb))) as week_count,
      a.updated_at as last_activity_at
    from users u
    left join app_data a on a.id = u.id
    order by u.created_at asc
  `;
  return rows.map((row) => ({
    id: row.id as number,
    username: row.username as string,
    isAdmin: row.is_admin as boolean,
    createdAt: new Date(row.created_at as string).toISOString(),
    weekCount: Number(row.week_count),
    lastActivityAt: row.last_activity_at ? new Date(row.last_activity_at as string).toISOString() : null,
  }));
}

export async function setUserAdmin(id: number, isAdmin: boolean): Promise<void> {
  await sql`update users set is_admin = ${isAdmin} where id = ${id}`;
}

export async function resetUserPassword(id: number, newPassword: string): Promise<void> {
  const { hash, salt } = hashPassword(newPassword);
  await sql`update users set password_hash = ${hash}, password_salt = ${salt} where id = ${id}`;
}

export async function usernameExists(username: string): Promise<boolean> {
  await ensureTable();
  const rows = await sql`select 1 from users where username = ${username}`;
  return rows.length > 0;
}

/** Apaga a conta e os dados dela nas outras tabelas (todas chaveadas por users.id, sem FK
 * declarada — ver comentário em appData.ts/profile.ts/timetable.ts sobre o padrão informal). */
export async function deleteUser(id: number): Promise<void> {
  await sql`delete from app_data where id = ${id}`;
  await sql`delete from profile where id = ${id}`;
  await sql`delete from timetable where id = ${id}`;
  await sql`delete from users where id = ${id}`;
}
