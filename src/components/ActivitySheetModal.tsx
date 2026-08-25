"use client";

import { useEffect } from "react";
import { ActivityEntry } from "@/types/activity";
import { SubjectColor } from "@/lib/subjectColors";
import { ActivityWorksheet } from "./ActivityWorksheet";

type Props = {
  subjectLabel: string;
  theme: string;
  curriculumCode: string;
  color: SubjectColor;
  entry: ActivityEntry;
  kind?: "atividade" | "licao-de-casa";
  onClose: () => void;
};

export function ActivitySheetModal({ subjectLabel, theme, curriculumCode, color, entry, kind = "atividade", onClose }: Props) {
  const previewLabel = kind === "licao-de-casa" ? "Pré-visualização da lição de casa" : "Pré-visualização da atividade";
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
        <div className="print:hidden sticky top-0 z-10 flex items-center justify-between gap-3 bg-white border-b border-[var(--border-subtle)] px-5 py-3">
          <div className="text-sm text-[var(--text-muted)]">{previewLabel}</div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975]"
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
          <ActivityWorksheet subjectLabel={subjectLabel} theme={theme} curriculumCode={curriculumCode} color={color} entry={entry} kind={kind} />
        </div>
      </div>
    </div>
  );
}
