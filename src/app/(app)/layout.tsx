import { ReactNode } from "react";
import { AppShell } from "@/components/AppShell";
import { loadAppData } from "@/lib/appContext";

// Sem isso o Next tenta pré-renderizar em build time (não lê cookies/headers direto, então não
// seria marcada como dinâmica sozinha) e a grade horária ficaria travada no que existia no
// banco durante o build, nunca refletindo gravações posteriores.
export const dynamic = "force-dynamic";

/** Layout das rotas autenticadas com abas (Início, Semana, Biblioteca, Progresso, Grade). Fica
 * montado enquanto ela troca de aba — o estado e a reconciliação com o servidor não reiniciam. */
export default async function AppLayout({ children }: { children: ReactNode }) {
  const data = await loadAppData();
  return (
    <AppShell
      userId={data.userId}
      initialTimetable={data.initialTimetable}
      initialAppData={data.initialAppData}
      setup={data.setup}
      isAdmin={data.isAdmin}
      teacherName={data.teacherName}
    >
      {children}
    </AppShell>
  );
}
