import { createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE_NAME = "sessao";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 dias

function sign(payload: string): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET não configurado.");
  return createHmac("sha256", secret).update(payload).digest("hex");
}

/** Token de sessão sem estado: "<userId>.<expiraEmMs>.<assinaturaHmac>". Não depende de banco
 * pra verificar — só recalcula a assinatura e compara. O userId viaja assinado dentro do
 * próprio token, então não dá pra forjar "logar como outra pessoa" sem o SESSION_SECRET. */
export function createSessionToken(userId: number): string {
  const expiresAtMs = String(Date.now() + SESSION_MAX_AGE_SECONDS * 1000);
  const payload = `${userId}.${expiresAtMs}`;
  return `${payload}.${sign(payload)}`;
}

/** Retorna o userId do token se válido, ou null (ausente, expirado, ou assinatura não bate). */
export function verifySessionToken(token: string | undefined | null): number | null {
  if (!token) return null;
  const [userIdRaw, expiresAtMs, signature] = token.split(".");
  if (!userIdRaw || !expiresAtMs || !signature) return null;
  if (Date.now() > Number(expiresAtMs)) return null;

  const payload = `${userIdRaw}.${expiresAtMs}`;
  const expectedSignature = sign(payload);
  const a = Buffer.from(signature, "hex");
  const b = Buffer.from(expectedSignature, "hex");
  if (a.length !== b.length) return null;
  if (!timingSafeEqual(a, b)) return null;

  const userId = Number(userIdRaw);
  return Number.isInteger(userId) ? userId : null;
}
