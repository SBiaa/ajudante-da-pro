import { createHash, timingSafeEqual } from "node:crypto";

function sha256(value: string): Buffer {
  return createHash("sha256").update(value, "utf8").digest();
}

/** Compara a senha digitada com APP_PASSWORD em tempo constante (hash de ambos os lados
 * garante buffers do mesmo tamanho, evitando o throw do timingSafeEqual). */
export function verifyPassword(input: string): boolean {
  const expected = process.env.APP_PASSWORD;
  if (!expected) return false;
  return timingSafeEqual(sha256(input), sha256(expected));
}
