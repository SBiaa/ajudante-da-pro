"use client";

import { WeekPlan } from "@/types/plano";
import { SubjectColorOverrides } from "@/lib/subjectColors";
import { formatFullDate, addDaysISO } from "@/lib/date";
import { AppHeader } from "@/components/AppHeader";
import { WeekGrid } from "@/components/WeekGrid";

type Props = {
  week: WeekPlan;
  colorOverrides: SubjectColorOverrides;
  gradeLabel: string;
};

export function SharedWeekClient({ week, colorOverrides, gradeLabel }: Props) {
  const friday = addDaysISO(week.weekStartDate, 4);

  return (
    <main className="max-w-6xl w-full mx-auto px-4 py-8 flex-1">
      <AppHeader showProfileLink={false} gradeLabel={gradeLabel} />

      <div className="print:hidden mb-5 flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--surface-brand-soft)] text-[var(--plum-900)] text-sm px-4 py-2.5">
        <span aria-hidden="true">🔒</span>
        Você está vendo uma versão somente leitura deste plano de aula, compartilhada para consulta — sem edição.
      </div>

      <h2 className="text-[24px] mb-4">
        Semana de {formatFullDate(week.weekStartDate)} a {formatFullDate(friday)}
      </h2>

      <WeekGrid
        week={week}
        colorOverrides={colorOverrides}
        onExportPdf={() => window.print()}
        readOnly
      />
    </main>
  );
}
