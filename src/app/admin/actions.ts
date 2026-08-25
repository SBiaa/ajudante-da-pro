"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import {
  createUser,
  deleteUser,
  resetUserPassword,
  setUserAdmin,
  usernameExists,
} from "@/lib/db/users";

export type AdminFormState = { error: string | null; success: string | null };

export async function adminCreateUserAction(
  _prevState: AdminFormState,
  formData: FormData
): Promise<AdminFormState> {
  await requireAdmin();

  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const isAdmin = formData.get("isAdmin") === "on";

  if (username.length < 3) {
    return { error: "O usuário precisa ter pelo menos 3 caracteres.", success: null };
  }
  if (password.length < 4) {
    return { error: "A senha precisa ter pelo menos 4 caracteres.", success: null };
  }
  if (await usernameExists(username)) {
    return { error: `Já existe um usuário "${username}".`, success: null };
  }

  await createUser(username, password, isAdmin);
  revalidatePath("/admin");
  return { error: null, success: `Usuário "${username}" criado.` };
}

export async function adminResetPasswordAction(
  _prevState: AdminFormState,
  formData: FormData
): Promise<AdminFormState> {
  await requireAdmin();

  const id = Number(formData.get("id"));
  const password = String(formData.get("password") ?? "");
  if (!Number.isInteger(id)) {
    return { error: "Usuário inválido.", success: null };
  }
  if (password.length < 4) {
    return { error: "A senha precisa ter pelo menos 4 caracteres.", success: null };
  }

  await resetUserPassword(id, password);
  revalidatePath("/admin");
  return { error: null, success: "Senha redefinida." };
}

export async function adminToggleAdminAction(id: number, isAdmin: boolean): Promise<void> {
  const { userId } = await requireAdmin();
  if (id === userId) {
    // Evita a professora logada tirar o próprio acesso de admin e ficar trancada fora do painel.
    return;
  }
  await setUserAdmin(id, isAdmin);
  revalidatePath("/admin");
}

export async function adminDeleteUserAction(id: number): Promise<void> {
  const { userId } = await requireAdmin();
  if (id === userId) {
    return;
  }
  await deleteUser(id);
  revalidatePath("/admin");
}
