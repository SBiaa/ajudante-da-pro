"use client";

import { useEffect, useMemo, useState } from "react";
import { ActivityEntry } from "@/types/activity";
import { SourcedExercise } from "@/lib/mergedActivityPicker";
import { exerciseKey } from "@/lib/usedExercises";
import { SubjectColor } from "@/lib/subjectColors";
import { ActivityWorksheet } from "./ActivityWorksheet";

type Props = {
  subjectLabel: string;
  theme: string;
  color: SubjectColor;
  exercises: SourcedExercise[];
  onClose: () => void;
  /** Chaves (ver src/lib/usedExercises.ts) das questões deste tema já impressas antes —
   * só sinaliza "já usada", não impede marcar de novo. */
  usedExerciseKeys?: Set<string>;
  /** Chamado ao clicar em "Imprimir / Exportar PDF", com as questões que saíram na folha. */
  onPrint?: (exercises: SourcedExercise[]) => void;
};

type PrintKind = "atividade" | "licao-de-casa";
type SourceFilter = "todas" | "aula" | "casa";

export function ActivitySheetModal({
  subjectLabel,
  theme,
  color,
  exercises,
  onClose,
  usedExerciseKeys,
  onPrint,
}: Props) {
  const hasAula = exercises.some((e) => e.source === "aula");
  const hasCasa = exercises.some((e) => e.source === "casa");
  const totalExercises = exercises.length;

  // "saved" é o que vale pra impressão/PDF; "draft" só existe enquanto a professora está
  // mexendo no painel de personalização, e só substitui o saved quando ela clica em Salvar.
  const [savedSelected, setSavedSelected] = useState<boolean[]>(() => exercises.map(() => true));
  const [draftSelected, setDraftSelected] = useState<boolean[]>(savedSelected);
  const [customizing, setCustomizing] = useState(false);
  const [filter, setFilter] = useState<SourceFilter>("todas");
  const [printKind, setPrintKind] = useState<PrintKind>(hasAula ? "atividade" : "licao-de-casa");

  const previewLabel = printKind === "licao-de-casa" ? "Pré-visualização da lição de casa" : "Pré-visualização da atividade";
  const selectedCount = savedSelected.filter(Boolean).length;
  const draftCount = draftSelected.filter(Boolean).length;
  const selectedExercises = exercises.filter((_, i) => savedSelected[i]);
  const visibleEntry: ActivityEntry = { theme, exercises: selectedExercises };
  const draftEntry: ActivityEntry = { theme, exercises: exercises.filter((_, i) => draftSelected[i]) };
  const usedInSelectionCount = usedExerciseKeys
    ? selectedExercises.filter((e) => usedExerciseKeys.has(exerciseKey(e))).length
    : 0;

  function handlePrint() {
    onPrint?.(selectedExercises);
    window.print();
  }

  const filteredIndexes = useMemo(
    () => exercises.map((_, i) => i).filter((i) => filter === "todas" || exercises[i].source === filter),
    [exercises, filter]
  );

  function openCustomize() {
    setDraftSelected(savedSelected);
    setFilter("todas");
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

  const printKindToggle = (hasAula && hasCasa) ? (
    <div className="flex rounded-full border border-[var(--border-subtle)] p-0.5 text-xs">
      <button
        type="button"
        onClick={() => setPrintKind("atividade")}
        className={`px-3 py-1 rounded-full transition-colors ${
          printKind === "atividade" ? "bg-[var(--action-primary)] text-white" : "text-[var(--text-muted)]"
        }`}
      >
        Atividade
      </button>
      <button
        type="button"
        onClick={() => setPrintKind("licao-de-casa")}
        className={`px-3 py-1 rounded-full transition-colors ${
          printKind === "licao-de-casa" ? "bg-[var(--action-primary)] text-white" : "text-[var(--text-muted)]"
        }`}
      >
        Lição de casa
      </button>
    </div>
  ) : null;

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
            <div className="flex-none flex flex-wrap items-center justify-between gap-3 bg-white border-b border-[var(--border-subtle)] px-5 py-3">
              <div className="text-sm text-[var(--text-muted)]">
                Personalizar atividade — {draftCount} de {totalExercises} questões selecionadas
              </div>
              <div className="flex items-center gap-2">
                {printKindToggle}
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
                <div className="flex-none flex flex-wrap items-center justify-between gap-2 mb-2">
                  {hasAula && hasCasa ? (
                    <div className="flex gap-1 text-xs">
                      {(
                        [
                          ["todas", "Todas"],
                          ["aula", "Para aula"],
                          ["casa", "Para casa"],
                        ] as [SourceFilter, string][]
                      ).map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setFilter(value)}
                          className={`px-2.5 py-1 rounded-full border transition-colors ${
                            filter === value
                              ? "bg-[var(--action-primary)] text-white border-[var(--action-primary)]"
                              : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:bg-[var(--surface-subtle)]"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-xs font-medium text-[var(--text-muted)]">Questões</div>
                  )}
                  <div className="flex gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() =>
                        setDraftSelected((prev) => prev.map((v, i) => (filteredIndexes.includes(i) ? true : v)))
                      }
                      className="text-[var(--action-primary)] hover:underline"
                    >
                      Marcar todas
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setDraftSelected((prev) => prev.map((v, i) => (filteredIndexes.includes(i) ? false : v)))
                      }
                      className="text-[var(--action-primary)] hover:underline"
                    >
                      Desmarcar todas
                    </button>
                  </div>
                </div>
                <ul className="flex-1 min-h-0 overflow-y-auto space-y-1 pr-1">
                  {filteredIndexes.map((i) => {
                    const exercise = exercises[i];
                    const alreadyUsed = usedExerciseKeys?.has(exerciseKey(exercise)) ?? false;
                    return (
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
                            {i + 1}. {exercise.instruction}{" "}
                            {hasAula && hasCasa && (
                              <span className="text-[11px] uppercase tracking-wide text-[var(--text-muted)]">
                                ({exercise.source === "aula" ? "aula" : "casa"})
                              </span>
                            )}{" "}
                            {alreadyUsed && (
                              <span className="text-[11px] uppercase tracking-wide text-[var(--amber-600)]">
                                já usada
                              </span>
                            )}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="min-h-0 overflow-y-auto bg-white rounded-[var(--radius-md)] border border-[var(--border-subtle)] p-4">
                <ActivityWorksheet subjectLabel={subjectLabel} theme={theme} color={color} entry={draftEntry} kind={printKind} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="print:hidden sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 bg-white border-b border-[var(--border-subtle)] px-5 py-3">
              <div className="text-sm text-[var(--text-muted)]">
                {previewLabel}
                {selectedCount < totalExercises && ` — ${selectedCount} de ${totalExercises} questões`}
              </div>
              <div className="flex items-center gap-2">
                {printKindToggle}
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
                  onClick={handlePrint}
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

            {usedInSelectionCount > 0 && (
              <div className="print:hidden text-xs text-[var(--amber-600)] bg-[var(--amber-100)] px-5 py-2">
                {usedInSelectionCount === 1
                  ? "1 questão selecionada já foi usada antes"
                  : `${usedInSelectionCount} questões selecionadas já foram usadas antes`}
                {" — "}
                <button type="button" onClick={openCustomize} className="underline hover:no-underline">
                  personalizar atividade
                </button>{" "}
                pra trocar.
              </div>
            )}

            <div className="activity-print-target bg-white p-4 sm:p-6 print:p-0 print:h-full">
              <ActivityWorksheet subjectLabel={subjectLabel} theme={theme} color={color} entry={visibleEntry} kind={printKind} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
