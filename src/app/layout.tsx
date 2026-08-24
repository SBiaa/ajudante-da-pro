import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import { getProfile } from "@/lib/db/profile";
import { DEFAULT_THEME } from "@/types/profile";
import { ThemeEffects } from "@/components/ThemeEffects";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plano de Aula Semanal",
  description: "Monte o plano de aula semanal do 2º ano, no formato pronto para o SGP.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  let theme = DEFAULT_THEME;
  try {
    const profile = await getProfile();
    theme = profile?.theme ?? DEFAULT_THEME;
  } catch {
    // Sem banco disponível (ex.: build estático): segue com o tema padrão.
  }

  return (
    <html
      lang="pt-BR"
      data-theme={theme}
      className={`${baloo2.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ThemeEffects theme={theme} />
      </body>
    </html>
  );
}
