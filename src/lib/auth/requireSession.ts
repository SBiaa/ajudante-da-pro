import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME, verifySessionToken } from "./session";

/** Reverifica a sessão dentro da própria server action — o proxy pode não cobrir
 * todas as rotas de uma Server Function (ver docs do Next 16 sobre Proxy). */
export async function requireSession(): Promise<void> {
  const token = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    throw new Error("Sessão inválida ou expirada.");
  }
}
