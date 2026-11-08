// Redefine a senha de um usuário direto no banco (ex.: quando a admin esquece a senha).
//
// Uso:
//   node scripts/reset-password.mjs <usuario>
//
// A nova senha é pedida no terminal, sem aparecer na tela nem ficar no histórico.
// Usa a mesma DATABASE_URL do .env.local e o mesmo hash (scrypt) de create-user.mjs.

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

// Lê uma linha do terminal sem mostrar o que é digitado.
function askHidden(question) {
  return new Promise((resolve) => {
    const stdin = process.stdin;
    process.stdout.write(question);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    let value = "";
    const onData = (ch) => {
      if (ch === "\r" || ch === "\n") {
        stdin.setRawMode(false);
        stdin.pause();
        stdin.off("data", onData);
        process.stdout.write("\n");
        resolve(value);
      } else if (ch === "\u0003") {
        process.stdout.write("\n");
        process.exit(1);
      } else if (ch === "\u007f" || ch === "\b") {
        value = value.slice(0, -1);
      } else {
        value += ch;
      }
    };
    stdin.on("data", onData);
  });
}

async function main() {
  const [username] = process.argv.slice(2);
  if (!username) {
    console.error("Uso: node scripts/reset-password.mjs <usuario>");
    process.exit(1);
  }
  if (!process.stdin.isTTY) {
    console.error("Rode este script num terminal interativo (a senha é digitada escondida).");
    process.exit(1);
  }

  const sql = neon(loadDatabaseUrl());
  const rows = await sql`select id, is_admin from users where username = ${username}`;
  if (rows.length === 0) {
    console.error(`Usuário "${username}" não encontrado.`);
    process.exit(1);
  }

  const password = await askHidden("Nova senha: ");
  const confirm = await askHidden("Repita a senha: ");
  if (!password) {
    console.error("Senha vazia — nada foi alterado.");
    process.exit(1);
  }
  if (password !== confirm) {
    console.error("As senhas não batem — nada foi alterado.");
    process.exit(1);
  }

  const { hash, salt } = hashPassword(password);
  await sql`update users set password_hash = ${hash}, password_salt = ${salt} where id = ${rows[0].id}`;
  console.log(`Senha de "${username}" redefinida${rows[0].is_admin ? " [admin]" : ""}. Já pode entrar em /login.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
