"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/AppShell";
import { TimetableEditor } from "@/components/TimetableEditor";
import { SubjectColorEditor } from "@/components/SubjectColorEditor";
import { createEmptyTimetable } from "@/lib/timetable";

type View = "grade" | "cores";

/** Configuração da semana: horário fixo (qual matéria cai em cada aula) e cores das matérias.
 * Abre pelo link no rodapé da aba Semana; antes eram itens do menu Ferramentas. */
export function GradeClient() {
  const router = useRouter();
  const { state, setState, allowedSubjects, customSubjects, saveTimetable, gradeYear, slots } = useApp();
  const [view, setView] = useState<View>("grade");
  const done = () => router.push("/semana");

  return (
    <div>
      <div role="tablist" className="flex gap-2 mb-4">
        {(["grade", "cores"] as const).map((v) => (
          <button
            key={v}
            type="button"
            role="tab"
            aria-selected={view === v}
            onClick={() => setView(v)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
              view === v
                ? "border-[var(--action-primary)] bg-[var(--surface-brand-soft)] text-[var(--text-strong)] font-medium"
                : "border-[var(--border-subtle)] bg-white text-[var(--text-body)] hover:border-[var(--border-strong)]"
            }`}
          >
            {v === "grade" ? "Horário das aulas" : "Cores das matérias"}
          </button>
        ))}
      </div>

      {view === "grade" ? (
        <TimetableEditor
          timetable={state.timetable ?? createEmptyTimetable(gradeYear)}
          canCancel
          onSave={(t) => {
            saveTimetable(t);
            done();
          }}
          onCancel={done}
          allowedSubjects={allowedSubjects}
          customSubjects={customSubjects}
          slots={slots}
        />
      ) : (
        <SubjectColorEditor
          overrides={state.subjectColorOverrides}
          onSave={(overrides) => {
            setState((s) => ({ ...s, subjectColorOverrides: overrides }));
            done();
          }}
          onCancel={done}
          allowedSubjects={allowedSubjects}
        />
      )}
    </div>
  );
}
