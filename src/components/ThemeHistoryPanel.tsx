"use client";

import { useMemo, useState } from "react";
import { OwnSubject, ThemeHistoryEntry } from "@/types/plano";
import { COLOR_KEY_LABELS, SubjectColorOverrides, resolveSubjectColor } from "@/lib/subjectColors";
import { Button } from "./Button";
import { ConfirmModal } from "./ConfirmModal";
import { SubjectIcon } from "./SubjectIcon";

type SubjectKey = OwnSubject | "leitura-diaria";

type Props = {
  history: ThemeHistoryEntry[];
  /** weekId -> weekStartDate das semanas ainda salvas, pra permitir pular direto pra semana. */
  weekStartDates: Record<string, string>;
  /** Cores das matérias escolhidas pela professora — o chip usa a mesma cor da grade. */
  colorOverrides?: SubjectColorOverrides;
  onClose: () => void;
  onJumpToWeek: (weekStartDate: string) => void;
  onDeleteEntry: (index: number) => void;
  /** Matérias que aparecem como pill de filtro — todas as 5 pro generalista, só 1 pro
   * especialista do 7º-9º ano (ver getAllowedSubjects). */
  allowedSubjects: OwnSubject[];
};

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function weekNumberLabel(weekId: string): string {
  const match = weekId.match(/W(\d+)$/);
  return match ? `Semana ${parseInt(match[1], 10)}` : weekId;
}

const pillClass = (active: boolean) =>
  `text-xs px-3 py-1 rounded-full border transition-colors ${
    active
      ? "border-[var(--plum-900)] bg-[var(--plum-900)] text-white"
      : "border-[var(--border-subtle)] bg-white text-[var(--text-muted)] hover:border-[var(--plum-900)]"
  }`;

export function ThemeHistoryPanel({
  history,
  weekStartDates,
  colorOverrides,
  onClose,
  onJumpToWeek,
  onDeleteEntry,
  allowedSubjects,
}: Props) {
  const subjectFilters = useMemo<SubjectKey[]>(() => [...allowedSubjects, "leitura-diaria"], [allowedSubjects]);
  const [subjectFilter, setSubjectFilter] = useState<SubjectKey | "">("");
  const [search, setSearch] = useState("");
  const [pendingDelete, setPendingDelete] = useState<{ index: number; theme: string } | null>(null);

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
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white shadow-[var(--shadow-sm)]">
      {/* Filtros fixos no topo enquanto a lista rola com a página (antes a lista rolava numa
       * caixa de 28rem dentro da página, que também rolava). */}
      <div className="sticky top-0 z-10 rounded-t-[var(--radius-lg)] bg-white px-6 pt-6 pb-4 border-b border-[var(--border-subtle)]">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h2 className="text-[24px]">Temas já dados</h2>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Voltar à semana
          </Button>
        </div>
        <p className="text-sm text-[var(--text-muted)] mb-4 max-w-[62ch]">
          Histórico de temas sorteados, do mais recente para o mais antigo — use pra planejar sem
          repetir assunto e pra ter contexto do que a turma já viu.
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <button onClick={() => setSubjectFilter("")} type="button" className={pillClass(subjectFilter === "")}>
            Todas ({history.length})
          </button>
          {subjectFilters.map((key) => (
            <button
              key={key}
              onClick={() => setSubjectFilter((prev) => (prev === key ? "" : key))}
              type="button"
              disabled={!countBySubject[key]}
              className={`${pillClass(subjectFilter === key)} disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              {COLOR_KEY_LABELS[key]} ({countBySubject[key] ?? 0})
            </button>
          ))}
        </div>

        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por tema..."
          aria-label="Buscar por tema"
          className="w-full max-w-xs text-sm px-3 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
        />
      </div>

      <div className="px-6 pb-6">
        {rows.length === 0 ? (
          <p className="text-sm text-[var(--text-muted)] py-6 text-center">
            {history.length === 0
              ? "Nenhum tema sorteado ainda — o histórico aparece aqui conforme você gera aulas."
              : "Nenhum tema encontrado com esse filtro."}
          </p>
        ) : (
          <div className="flex flex-col divide-y divide-[var(--border-subtle)]">
            {rows.map(({ entry, index }) => {
              const weekStartDate = weekStartDates[entry.weekId];
              const color = resolveSubjectColor(entry.subject, colorOverrides);
              return (
                <div key={index} className="flex flex-wrap items-center gap-3 py-2.5">
                  <span
                    style={{ background: color.bg, color: color.text }}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.06em] rounded-full px-2 py-0.5 flex-none"
                  >
                    <SubjectIcon subjectKey={entry.subject} className="w-3 h-3" />
                    {COLOR_KEY_LABELS[entry.subject]}
                  </span>
                  <span className="flex-1 min-w-[160px] text-sm text-[var(--text-body)]">{entry.theme}</span>
                  <span className="text-xs text-[var(--text-muted)]">{weekNumberLabel(entry.weekId)}</span>
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
                    onClick={() => setPendingDelete({ index, theme: entry.theme })}
                    type="button"
                    title="Remover do histórico"
                    aria-label={`Remover "${entry.theme}" do histórico`}
                    className="text-xs text-[var(--red-600)] hover:underline"
                  >
                    Remover
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {pendingDelete && (
        <ConfirmModal
          title="Remover do histórico?"
          message={`"${pendingDelete.theme}" não vai mais contar pra evitar repetição de tema — essa ação não pode ser desfeita.`}
          confirmLabel="Remover"
          tone="danger"
          onConfirm={() => {
            onDeleteEntry(pendingDelete.index);
            setPendingDelete(null);
          }}
          onCancel={() => setPendingDelete(null)}
        />
      )}
    </div>
  );
}
