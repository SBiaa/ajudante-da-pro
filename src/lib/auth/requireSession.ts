import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME, verifySessionToken } from "./session";

/** Reverifica a sessão dentro da própria server action — o proxy pode não cobrir
 * todas as rotas de uma Server Function (ver docs do Next 16 sobre Proxy).
 * Retorna o id do usuário logado, pra toda leitura/gravação ser escopada a ele. */
export async function requireSession(): Promise<number> {
  const token = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  const userId = verifySessionToken(token);
  if (userId === null) {
    throw new Error("Sessão inválida ou expirada.");
  }
  return userId;
}
