import { redirect } from "next/navigation";
import { requireSession } from "./requireSession";
import { getUserById } from "@/lib/db/users";

/** Igual a requireSession, mas também garante que quem está logado é admin. Usado só nas
 * páginas/ações de /admin — redireciona pra /login sem sessão e pra / se logada mas não-admin,
 * em vez de estourar um erro genérico pra dentro dessas telas. */
export async function requireAdmin(): Promise<{ userId: number; username: string }> {
  let userId: number;
  try {
    userId = await requireSession();
  } catch {
    redirect("/login");
  }

  const user = await getUserById(userId);
  if (!user || !user.isAdmin) {
    redirect("/");
  }

  return { userId: user.id, username: user.username };
}
