import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth/session";

export function proxy(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const userId = verifySessionToken(token);

  if (userId === null) {
    // Visitante sem conta em "/" vê a landing (a URL continua "/"); quem está logado cai
    // direto no painel. O formulário da landing é uma Server Function, que chega como POST
    // em "/" — o rewrite leva esse POST pra mesma rota da landing.
    if (request.nextUrl.pathname === "/") {
      return NextResponse.rewrite(new URL("/bem-vindo", request.url));
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  // "compartilhado/" fica de fora: é a página pública (somente leitura) que abre pra quem
  // recebe um link compartilhado, sem exigir login. "bem-vindo" é a landing pública.
  matcher: ["/((?!login|bem-vindo|compartilhado/|_next/static|_next/image|favicon.ico|brand/|illustrations/).*)"],
};
