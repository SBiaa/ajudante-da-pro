"use client";

import { useEffect, useState } from "react";
import { ActivityEntry } from "@/types/activity";
import { SubjectColor } from "@/lib/subjectColors";
import { ActivityWorksheet } from "./ActivityWorksheet";

type Props = {
  subjectLabel: string;
  theme: string;
  color: SubjectColor;
  entry: ActivityEntry;
  kind?: "atividade" | "licao-de-casa";
  onClose: () => void;
};

export function ActivitySheetModal({ subjectLabel, theme, color, entry, kind = "atividade", onClose }: Props) {
  const previewLabel = kind === "licao-de-casa" ? "Pré-visualização da lição de casa" : "Pré-visualização da atividade";
  const totalExercises = entry.exercises.length;
  const [selected, setSelected] = useState<boolean[]>(() => entry.exercises.map(() => true));
  const selectedCount = selected.filter(Boolean).length;
  const visibleEntry: ActivityEntry = { ...entry, exercises: entry.exercises.filter((_, i) => selected[i]) };

  function toggleExercise(index: number) {
    setSelected((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }

  useEffect(() => {
    document.body.classList.add("has-print-target");
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("has-print-target");
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4 print:static print:inset-auto print:bg-transparent print:p-0"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className="modal-card relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[var(--radius-lg)] bg-[var(--surface-subtle)] shadow-[var(--shadow-lg)] print:static print:max-h-none print:w-auto print:max-w-none print:overflow-visible print:rounded-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="print:hidden sticky top-0 z-10 bg-white border-b border-[var(--border-subtle)] px-5 py-3 space-y-2.5">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm text-[var(--text-muted)]">{previewLabel}</div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                disabled={selectedCount === 0}
                className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975] disabled:opacity-50 disabled:pointer-events-none"
              >
                Imprimir / Exportar PDF
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:bg-[var(--surface-subtle)]"
              >
                Fechar
              </button>
            </div>
          </div>

          {totalExercises > 1 && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-medium text-[var(--text-muted)]">
                  Escolha as questões ({selectedCount} de {totalExercises} selecionadas)
                </div>
                <div className="flex gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelected(entry.exercises.map(() => true))}
                    className="text-[var(--action-primary)] hover:underline"
                  >
                    Marcar todas
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelected(entry.exercises.map(() => false))}
                    className="text-[var(--action-primary)] hover:underline"
                  >
                    Desmarcar todas
                  </button>
                </div>
              </div>
              <ul className="space-y-1 max-h-32 overflow-y-auto pr-1">
                {entry.exercises.map((exercise, i) => (
                  <li key={i}>
                    <label className="flex items-start gap-2 text-sm text-[var(--text-body)] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selected[i]}
                        onChange={() => toggleExercise(i)}
                        className="mt-0.5 flex-none"
                      />
                      <span className="line-clamp-1">
                        {i + 1}. {exercise.instruction}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="activity-print-target bg-white p-4 sm:p-6 print:p-0 print:h-full">
          <ActivityWorksheet subjectLabel={subjectLabel} theme={theme} color={color} entry={visibleEntry} kind={kind} />
        </div>
      </div>
    </div>
  );
}
