"use client";

import { useMemo, useState } from "react";
import { OWN_SUBJECTS, OwnSubject, ThemeHistoryEntry } from "@/types/plano";
import { COLOR_KEY_LABELS } from "@/lib/subjectColors";

type SubjectKey = OwnSubject | "leitura-diaria";

const SUBJECT_FILTERS: SubjectKey[] = [...OWN_SUBJECTS, "leitura-diaria"];

type Props = {
  history: ThemeHistoryEntry[];
  /** weekId -> weekStartDate das semanas ainda salvas, pra permitir pular direto pra semana. */
  weekStartDates: Record<string, string>;
  onClose: () => void;
  onJumpToWeek: (weekStartDate: string) => void;
  onDeleteEntry: (index: number) => void;
};

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

const secondaryButton =
  "text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white";

export function ThemeHistoryPanel({ history, weekStartDates, onClose, onJumpToWeek, onDeleteEntry }: Props) {
  const [subjectFilter, setSubjectFilter] = useState<SubjectKey | "">("");
  const [search, setSearch] = useState("");

  const countBySubject = useMemo(() => {
    const counts: Partial<Record<SubjectKey, number>> = {};
    for (const entry of history) {
      counts[entry.subject] = (counts[entry.subject] ?? 0) + 1;
    }
    return counts;
  }, [history]);

  const rows = useMemo(() => {
    const normSearch = normalize(search.trim());
    return history
      .map((entry, index) => ({ entry, index }))
      .filter(({ entry }) => !subjectFilter || entry.subject === subjectFilter)
      .filter(({ entry }) => !normSearch || normalize(entry.theme).includes(normSearch))
      .sort((a, b) => (a.entry.usedAt < b.entry.usedAt ? 1 : -1));
  }, [history, subjectFilter, search]);

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)]">
      <h2 className="text-[24px] mb-1">Temas já dados</h2>
      <p className="text-sm text-[var(--text-muted)] mb-4 max-w-[62ch]">
        Histórico de temas sorteados, do mais recente para o mais antigo — use pra planejar sem
        repetir assunto e pra ter contexto do que a turma já viu.
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        <button
          onClick={() => setSubjectFilter("")}
          type="button"
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            subjectFilter === ""
              ? "border-[var(--plum-900)] bg-[var(--plum-900)] text-white"
              : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--plum-900)]"
          }`}
        >
          Todas ({history.length})
        </button>
        {SUBJECT_FILTERS.map((key) => (
          <button
            key={key}
            onClick={() => setSubjectFilter((prev) => (prev === key ? "" : key))}
            type="button"
            disabled={!countBySubject[key]}
            className={`text-xs px-3 py-1 rounded-full border transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
              subjectFilter === key
                ? "border-[var(--plum-900)] bg-[var(--plum-900)] text-white"
                : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--plum-900)]"
            }`}
          >
            {COLOR_KEY_LABELS[key]} ({countBySubject[key] ?? 0})
          </button>
        ))}
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por tema..."
        className="w-full max-w-xs mb-4 text-sm px-3 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
      />

      {rows.length === 0 ? (
        <p className="text-sm text-[var(--text-muted)] py-6 text-center">
          {history.length === 0
            ? "Nenhum tema sorteado ainda — o histórico aparece aqui conforme você gera aulas."
            : "Nenhum tema encontrado com esse filtro."}
        </p>
      ) : (
        <div className="flex flex-col divide-y divide-[var(--border-subtle)] max-h-[28rem] overflow-y-auto">
          {rows.map(({ entry, index }) => {
            const weekStartDate = weekStartDates[entry.weekId];
            return (
              <div key={index} className="flex flex-wrap items-center gap-3 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--plum-900)] bg-[var(--plum-100)] rounded-full px-2 py-0.5 flex-none">
                  {COLOR_KEY_LABELS[entry.subject]}
                </span>
                <span className="flex-1 min-w-[160px] text-sm text-[var(--text-body)]">{entry.theme}</span>
                <span className="text-xs text-[var(--text-muted)]">{entry.weekId}</span>
                {weekStartDate ? (
                  <button
                    onClick={() => onJumpToWeek(weekStartDate)}
                    type="button"
                    className="text-xs text-[var(--plum-900)] underline"
                  >
                    Ver semana
                  </button>
                ) : (
                  <span className="text-xs text-[var(--text-muted)] italic">semana não salva</span>
                )}
                <button
                  onClick={() => onDeleteEntry(index)}
                  type="button"
                  title="Remover do histórico"
                  aria-label="Remover do histórico"
                  className="text-xs text-[var(--red-600)] hover:underline"
                >
                  Remover
                </button>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <button onClick={onClose} type="button" className={secondaryButton}>
          Fechar
        </button>
      </div>
    </div>
  );
}
