"use client";

import { useMemo, useState } from "react";
import { OWN_SUBJECTS, OwnSubject, GeneratedLessonPlan } from "@/types/plano";
import { Network } from "@/types/profile";
import { READING_BANK } from "@/data/themeBank";
import { getThemeBank } from "@/data/curriculumBanks";
import { ACTIVITY_BANK } from "@/data/activityBank";
import { HOMEWORK_BANK, HomeworkSubject } from "@/data/homeworkBank";
import { COLOR_KEY_LABELS, SubjectColorOverrides, resolveSubjectColor } from "@/lib/subjectColors";
import { SubjectIcon } from "./SubjectIcon";
import { LessonDetailModal } from "./LessonDetailModal";

type SubjectKey = OwnSubject | "leitura-diaria";

const SUBJECT_FILTERS: SubjectKey[] = [...OWN_SUBJECTS, "leitura-diaria"];

type ContentFilter = "" | "atividade" | "licao-de-casa";

const CONTENT_FILTERS: { key: ContentFilter; label: string }[] = [
  { key: "", label: "Todos" },
  { key: "atividade", label: "Com atividade" },
  { key: "licao-de-casa", label: "Com lição de casa" },
];

type Row = {
  subjectKey: SubjectKey;
  plan: GeneratedLessonPlan;
  hasActivity: boolean;
  hasHomework: boolean;
};

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

const secondaryButton =
  "text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white";

const pillClass = (active: boolean) =>
  `text-xs px-3 py-1 rounded-full border transition-colors ${
    active
      ? "border-[var(--plum-900)] bg-[var(--plum-900)] text-white"
      : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--plum-900)]"
  }`;

type Props = {
  colorOverrides: SubjectColorOverrides;
  network: Network;
  gradeYear: string;
  onClose: () => void;
};

/** Todas as entradas do banco local (temas próprios da combinação rede+ano + leitura diária,
 * que é compartilhada), num formato único pronto pra listar e abrir no LessonDetailModal
 * (mesmo componente usado na grade semanal). */
function buildRows(network: Network, gradeYear: string): Row[] {
  const rows: Row[] = [];
  const bank = getThemeBank(network, gradeYear);
  for (const subject of OWN_SUBJECTS) {
    for (const entry of bank?.[subject] ?? []) {
      const hasActivity = ACTIVITY_BANK[subject].some((a) => a.theme === entry.theme);
      const hasHomework =
        (subject === "matematica" || subject === "lingua-portuguesa") &&
        HOMEWORK_BANK[subject as HomeworkSubject].some((h) => h.theme === entry.theme);
      rows.push({
        subjectKey: subject,
        hasActivity,
        hasHomework,
        plan: {
          theme: entry.theme,
          curriculumCode: entry.curriculumCode,
          description: entry.description,
          materials: entry.materials,
          steps: entry.steps,
          classScript: entry.classScript ?? [],
          readingText: "",
          genre: "",
          generatedAt: null,
          editedManually: false,
        },
      });
    }
  }
  for (const entry of READING_BANK) {
    rows.push({
      subjectKey: "leitura-diaria",
      hasActivity: ACTIVITY_BANK["leitura-diaria"].some((a) => a.theme === entry.theme),
      hasHomework: false,
      plan: {
        theme: entry.theme,
        curriculumCode: "",
        description: entry.description,
        materials: [],
        steps: entry.steps,
        classScript: [],
        readingText: entry.text,
        genre: entry.genre,
        generatedAt: null,
        editedManually: false,
      },
    });
  }
  return rows;
}

/** Tela de consulta ao banco de conteúdo local: todos os temas cadastrados por matéria,
 * com filtro por matéria e por que tipo de material já existe pronto (atividade, lição de
 * casa) — pra ver o que já tem no banco sem precisar sortear uma aula. */
export function ContentBankPanel({ colorOverrides, network, gradeYear, onClose }: Props) {
  const [subjectFilter, setSubjectFilter] = useState<SubjectKey | "">("");
  const [contentFilter, setContentFilter] = useState<ContentFilter>("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Row | null>(null);

  const allRows = useMemo(() => buildRows(network, gradeYear), [network, gradeYear]);

  const countBySubject = useMemo(() => {
    const counts: Partial<Record<SubjectKey, number>> = {};
    for (const row of allRows) counts[row.subjectKey] = (counts[row.subjectKey] ?? 0) + 1;
    return counts;
  }, [allRows]);

  const rows = useMemo(() => {
    const normSearch = normalize(search.trim());
    return allRows.filter((r) => !subjectFilter || r.subjectKey === subjectFilter)
      .filter((r) => contentFilter !== "atividade" || r.hasActivity)
      .filter((r) => contentFilter !== "licao-de-casa" || r.hasHomework)
      .filter(
        (r) =>
          !normSearch ||
          normalize(r.plan.theme).includes(normSearch) ||
          normalize(r.plan.curriculumCode).includes(normSearch) ||
          normalize(r.plan.description).includes(normSearch)
      );
  }, [allRows, subjectFilter, contentFilter, search]);

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)]">
      <h2 className="text-[24px] mb-1">Banco de conteúdo</h2>
      <p className="text-sm text-[var(--text-muted)] mb-4 max-w-[62ch]">
        Tudo que já está pronto no banco local — temas por matéria, com o que cada um já tem de
        atividade e lição de casa. Clique num tema para ver o conteúdo completo.
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        <button onClick={() => setSubjectFilter("")} type="button" className={pillClass(subjectFilter === "")}>
          Todas ({allRows.length})
        </button>
        {SUBJECT_FILTERS.map((key) => (
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

      <div className="flex flex-wrap gap-1.5 mb-4">
        {CONTENT_FILTERS.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setContentFilter((prev) => (prev === opt.key ? "" : opt.key))}
            type="button"
            className={pillClass(contentFilter === opt.key)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por tema, código ou descrição..."
        className="w-full max-w-sm mb-4 text-sm px-3 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
      />

      {rows.length === 0 ? (
        <p className="text-sm text-[var(--text-muted)] py-6 text-center">Nenhum tema encontrado com esse filtro.</p>
      ) : (
        <div className="flex flex-col divide-y divide-[var(--border-subtle)] max-h-[28rem] overflow-y-auto">
          {rows.map((row, i) => {
            const color = resolveSubjectColor(row.subjectKey, colorOverrides);
            return (
              <button
                key={`${row.subjectKey}-${row.plan.theme}-${i}`}
                type="button"
                onClick={() => setSelected(row)}
                className="flex flex-wrap items-center gap-3 py-2.5 text-left hover:bg-[var(--surface-subtle)] transition-colors rounded-[var(--radius-sm)] px-1 -mx-1"
              >
                <span
                  style={{ background: color.bg, color: color.text }}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.06em] rounded-full px-2 py-0.5 flex-none"
                >
                  <SubjectIcon subjectKey={row.subjectKey} className="w-3 h-3" />
                  {COLOR_KEY_LABELS[row.subjectKey]}
                </span>
                <span className="flex-1 min-w-[160px] text-sm text-[var(--text-body)]">{row.plan.theme}</span>
                {row.plan.curriculumCode && (
                  <span className="text-xs font-mono text-[var(--text-muted)]">{row.plan.curriculumCode}</span>
                )}
                {row.hasActivity && (
                  <span className="text-[11px] rounded-full bg-[var(--surface-subtle)] text-[var(--text-muted)] px-2 py-0.5">
                    Atividade
                  </span>
                )}
                {row.hasHomework && (
                  <span className="text-[11px] rounded-full bg-[var(--surface-subtle)] text-[var(--text-muted)] px-2 py-0.5">
                    Lição de casa
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <button onClick={onClose} type="button" className={secondaryButton}>
          Fechar
        </button>
      </div>

      {selected && (
        <LessonDetailModal
          title={COLOR_KEY_LABELS[selected.subjectKey]}
          color={resolveSubjectColor(selected.subjectKey, colorOverrides)}
          context="Banco de conteúdo"
          subjectKey={selected.subjectKey}
          plan={selected.plan}
          isReading={selected.subjectKey === "leitura-diaria"}
          gradeYear={gradeYear}
          onClose={() => setSelected(null)}
          readOnly
        />
      )}
    </div>
  );
}
