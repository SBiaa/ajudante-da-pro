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

  // "saved" é o que vale pra impressão/PDF; "draft" só existe enquanto a professora está
  // mexendo no painel de personalização, e só substitui o saved quando ela clica em Salvar.
  const [savedSelected, setSavedSelected] = useState<boolean[]>(() => entry.exercises.map(() => true));
  const [draftSelected, setDraftSelected] = useState<boolean[]>(savedSelected);
  const [customizing, setCustomizing] = useState(false);

  const selectedCount = savedSelected.filter(Boolean).length;
  const draftCount = draftSelected.filter(Boolean).length;
  const visibleEntry: ActivityEntry = { ...entry, exercises: entry.exercises.filter((_, i) => savedSelected[i]) };
  const draftEntry: ActivityEntry = { ...entry, exercises: entry.exercises.filter((_, i) => draftSelected[i]) };

  function openCustomize() {
    setDraftSelected(savedSelected);
    setCustomizing(true);
  }

  function handleSave() {
    setSavedSelected(draftSelected);
    setCustomizing(false);
  }

  useEffect(() => {
    document.body.classList.add("has-print-target");
    function handleKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (customizing) setCustomizing(false);
      else onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("has-print-target");
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, customizing]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4 print:static print:inset-auto print:bg-transparent print:p-0"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className={
          customizing
            ? "modal-card relative w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden rounded-[var(--radius-lg)] bg-[var(--surface-subtle)] shadow-[var(--shadow-lg)]"
            : "modal-card relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[var(--radius-lg)] bg-[var(--surface-subtle)] shadow-[var(--shadow-lg)] print:static print:max-h-none print:w-auto print:max-w-none print:overflow-visible print:rounded-none print:shadow-none"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {customizing ? (
          <>
            <div className="flex-none flex items-center justify-between gap-3 bg-white border-b border-[var(--border-subtle)] px-5 py-3">
              <div className="text-sm text-[var(--text-muted)]">
                Personalizar {kind === "licao-de-casa" ? "lição de casa" : "atividade"} — {draftCount} de {totalExercises} questões selecionadas
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={draftCount === 0}
                  className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975] disabled:opacity-50 disabled:pointer-events-none"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => setCustomizing(false)}
                  className="text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:bg-[var(--surface-subtle)]"
                >
                  Cancelar
                </button>
              </div>
            </div>

            <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-6">
              <div className="min-h-0 flex flex-col">
                <div className="flex-none flex items-center justify-between gap-3 mb-2">
                  <div className="text-xs font-medium text-[var(--text-muted)]">Questões</div>
                  <div className="flex gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setDraftSelected(entry.exercises.map(() => true))}
                      className="text-[var(--action-primary)] hover:underline"
                    >
                      Marcar todas
                    </button>
                    <button
                      type="button"
                      onClick={() => setDraftSelected(entry.exercises.map(() => false))}
                      className="text-[var(--action-primary)] hover:underline"
                    >
                      Desmarcar todas
                    </button>
                  </div>
                </div>
                <ul className="flex-1 min-h-0 overflow-y-auto space-y-1 pr-1">
                  {entry.exercises.map((exercise, i) => (
                    <li key={i}>
                      <label className="flex items-start gap-2 text-sm text-[var(--text-body)] cursor-pointer rounded-md px-2 py-1.5 hover:bg-[var(--surface-subtle)]">
                        <input
                          type="checkbox"
                          checked={draftSelected[i]}
                          onChange={() =>
                            setDraftSelected((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
                          }
                          className="mt-0.5 flex-none"
                        />
                        <span>
                          {i + 1}. {exercise.instruction}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-h-0 overflow-y-auto bg-white rounded-[var(--radius-md)] border border-[var(--border-subtle)] p-4">
                <ActivityWorksheet subjectLabel={subjectLabel} theme={theme} color={color} entry={draftEntry} kind={kind} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="print:hidden sticky top-0 z-10 flex items-center justify-between gap-3 bg-white border-b border-[var(--border-subtle)] px-5 py-3">
              <div className="text-sm text-[var(--text-muted)]">
                {previewLabel}
                {selectedCount < totalExercises && ` — ${selectedCount} de ${totalExercises} questões`}
              </div>
              <div className="flex gap-2">
                {totalExercises > 1 && (
                  <button
                    type="button"
                    onClick={openCustomize}
                    className="text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:bg-[var(--surface-subtle)]"
                  >
                    Personalizar atividade
                  </button>
                )}
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

            <div className="activity-print-target bg-white p-4 sm:p-6 print:p-0 print:h-full">
              <ActivityWorksheet subjectLabel={subjectLabel} theme={theme} color={color} entry={visibleEntry} kind={kind} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
