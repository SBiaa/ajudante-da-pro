import { sql } from "./client";

export type AccessRequest = {
  id: number;
  name: string;
  contact: string;
  school: string | null;
  gradeInfo: string | null;
  createdAt: string;
  handledAt: string | null;
};

/** Mesmo padrão de shared_weeks: sem sistema de migração, a tabela nasce sob demanda. */
async function ensureTable(): Promise<void> {
  await sql`
    create table if not exists access_requests (
      id serial primary key,
      name text not null,
      contact text not null,
      school text,
      grade_info text,
      created_at timestamptz not null default now(),
      handled_at timestamptz
    )
  `;
}

/** Retorna false quando o mesmo contato já tem um pedido pendente — evita duplicar a fila
 * se a pessoa clicar duas vezes ou voltar à página depois. */
export async function createAccessRequest(input: {
  name: string;
  contact: string;
  school: string | null;
  gradeInfo: string | null;
}): Promise<boolean> {
  await ensureTable();
  const existing = await sql`
    select 1 from access_requests
    where lower(contact) = lower(${input.contact}) and handled_at is null
    limit 1
  `;
  if (existing.length > 0) return false;
  await sql`
    insert into access_requests (name, contact, school, grade_info)
    values (${input.name}, ${input.contact}, ${input.school}, ${input.gradeInfo})
  `;
  return true;
}

export async function listAccessRequests(): Promise<AccessRequest[]> {
  await ensureTable();
  const rows = await sql`
    select id, name, contact, school, grade_info, created_at, handled_at
    from access_requests
    order by handled_at is not null, created_at desc
    limit 200
  `;
  return rows.map((r) => ({
    id: Number(r.id),
    name: String(r.name),
    contact: String(r.contact),
    school: r.school ? String(r.school) : null,
    gradeInfo: r.grade_info ? String(r.grade_info) : null,
    createdAt: new Date(r.created_at as string).toISOString(),
    handledAt: r.handled_at ? new Date(r.handled_at as string).toISOString() : null,
  }));
}

export async function setAccessRequestHandled(id: number, handled: boolean): Promise<void> {
  await sql`
    update access_requests
    set handled_at = ${handled ? new Date().toISOString() : null}
    where id = ${id}
  `;
}

export async function deleteAccessRequest(id: number): Promise<void> {
  await sql`delete from access_requests where id = ${id}`;
}
