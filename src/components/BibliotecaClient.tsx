"use client";

import { useRouter } from "next/navigation";
import { useApp } from "@/components/AppShell";
import { useWeekActions } from "@/hooks/useWeekActions";
import { ContentBankPanel } from "@/components/ContentBankPanel";

/** Aba "Biblioteca": o banco de conteúdo (temas, atividades e lição de casa) do ano da professora. */
export function BibliotecaClient() {
  const router = useRouter();
  const { state, network, gradeYear, allowedSubjects, viewedMonday } = useApp();
  const { markExercisesUsed } = useWeekActions(viewedMonday);

  return (
    <ContentBankPanel
      colorOverrides={state.subjectColorOverrides}
      network={network}
      gradeYear={gradeYear}
      usedExercises={state.usedExercises}
      onMarkExercisesUsed={markExercisesUsed}
      onClose={() => router.push("/semana")}
      allowedSubjects={allowedSubjects}
    />
  );
}
