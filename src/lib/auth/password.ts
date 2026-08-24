import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const KEY_LENGTH = 64;

/** Deriva hash+salt pra guardar no banco — nunca a senha em texto puro. scrypt é nativo do
 * Node (sem dependência nova) e já inclui custo computacional alto o bastante pra dificultar
 * força bruta, diferente de um sha256 simples. */
export function hashPassword(password: string): { hash: string; salt: string } {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, KEY_LENGTH).toString("hex");
  return { hash, salt };
}

/** Recalcula o hash com o mesmo salt e compara em tempo constante, pra não vazar por timing
 * quantos caracteres da senha bateram. */
export function verifyPasswordHash(password: string, hash: string, salt: string): boolean {
  const expected = Buffer.from(hash, "hex");
  const actual = scryptSync(password, salt, KEY_LENGTH);
  if (actual.length !== expected.length) return false;
  return timingSafeEqual(actual, expected);
}
