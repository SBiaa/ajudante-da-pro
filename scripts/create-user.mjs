// Cria um novo usuário (professora/testadora) direto no banco.
//
// Uso:
//   node scripts/create-user.mjs <usuario> <senha> [--admin]
//
// Ex.: node scripts/create-user.mjs joana "senha da joana"
//      node scripts/create-user.mjs bia admin --admin
//
// Não depende de nenhum servidor rodando — conecta direto no Neon usando a mesma
// DATABASE_URL do .env.local. Reimplementa o hash de senha (scrypt) em vez de importar de
// src/lib, porque este é um script solto (sem o setup de TS/paths do Next).

import { readFileSync } from "node:fs";
import { randomBytes, scryptSync } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { neon } from "@neondatabase/serverless";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  const envPath = join(__dirname, "..", ".env.local");
  const match = readFileSync(envPath, "utf8").match(/^DATABASE_URL=(.+)$/m);
  if (!match) throw new Error("DATABASE_URL não encontrada em .env.local nem no ambiente.");
  return match[1].trim();
}

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return { hash, salt };
}

async function main() {
  const args = process.argv.slice(2).filter((a) => a !== "--admin");
  const isAdmin = process.argv.includes("--admin");
  const [username, password] = args;
  if (!username || !password) {
    console.error("Uso: node scripts/create-user.mjs <usuario> <senha> [--admin]");
    process.exit(1);
  }

  const sql = neon(loadDatabaseUrl());

  await sql`
    create table if not exists users (
      id serial primary key,
      username text unique not null,
      password_hash text not null,
      password_salt text not null,
      is_admin boolean not null default false,
      created_at timestamptz not null default now()
    )
  `.catch((err) => {
    if (!/pg_type_typname_nsp_index|already exists/i.test(err.message)) throw err;
  });
  await sql`alter table users add column if not exists is_admin boolean not null default false`;

  const existing = await sql`select id from users where username = ${username}`;
  if (existing.length > 0) {
    console.error(`Já existe um usuário "${username}".`);
    process.exit(1);
  }

  const { hash, salt } = hashPassword(password);
  const rows = await sql`
    insert into users (username, password_hash, password_salt, is_admin)
    values (${username}, ${hash}, ${salt}, ${isAdmin})
    returning id, username, is_admin
  `;

  console.log(`Usuário criado: ${rows[0].username} (id ${rows[0].id})${rows[0].is_admin ? " [admin]" : ""}`);
  console.log("Ela já pode fazer login em /login com esse usuário e senha.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
