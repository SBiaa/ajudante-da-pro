import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { getProfile } from "@/lib/db/profile";
import { DEFAULT_THEME } from "@/types/profile";
import { ThemeEffects } from "@/components/ThemeEffects";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
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
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ThemeEffects theme={theme} />
      </body>
    </html>
  );
}
