"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyLogin } from "@/lib/db/users";
import { createSessionToken, SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from "./session";

export type LoginState = { error: string | null };

export async function loginAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const user = await verifyLogin(username, password);
  if (!user) {
    return { error: "Usuário ou senha incorretos." };
  }

  (await cookies()).set(SESSION_COOKIE_NAME, createSessionToken(user.id), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });

  redirect("/");
}

export async function logoutAction() {
  (await cookies()).delete(SESSION_COOKIE_NAME);
  redirect("/login");
}
