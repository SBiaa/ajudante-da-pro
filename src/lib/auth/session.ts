import { createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE_NAME = "sessao";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 dias

function sign(expiresAtMs: string): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET não configurado.");
  return createHmac("sha256", secret).update(expiresAtMs).digest("hex");
}

/** Token de sessão sem estado: "<expiraEmMs>.<assinaturaHmac>". Não depende de banco. */
export function createSessionToken(): string {
  const expiresAtMs = String(Date.now() + SESSION_MAX_AGE_SECONDS * 1000);
  return `${expiresAtMs}.${sign(expiresAtMs)}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [expiresAtMs, signature] = token.split(".");
  if (!expiresAtMs || !signature) return false;
  if (Date.now() > Number(expiresAtMs)) return false;

  const expectedSignature = sign(expiresAtMs);
  const a = Buffer.from(signature, "hex");
  const b = Buffer.from(expectedSignature, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
