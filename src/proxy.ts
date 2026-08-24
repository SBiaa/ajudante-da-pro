import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth/session";

export function proxy(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const isAuthenticated = verifySessionToken(token);

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  // "compartilhado/" fica de fora: é a página pública (somente leitura) que abre pra quem
  // recebe um link compartilhado, sem exigir login.
  matcher: ["/((?!login|compartilhado/|_next/static|_next/image|favicon.ico|brand/).*)"],
};
