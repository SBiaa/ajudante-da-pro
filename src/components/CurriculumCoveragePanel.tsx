"use client";

import { useMemo, useState } from "react";
import { Button } from "./Button";
import { CoverageBar } from "./CoverageBar";
import { OWN_SUBJECT_LABELS, OwnSubject, WeekPlan } from "@/types/plano";
import { Network } from "@/types/profile";
import { SUBJECT_COLORS } from "@/lib/subjectColors";
import { computeCurriculumCoverage } from "@/lib/curriculumCoverage";
import { formatFullDate, getMondayISO, addWeeksISO, toISODate } from "@/lib/date";

type Props = {
  weeks: Record<string, WeekPlan>;
  network: Network;
  gradeYear: string;
  onClose: () => void;
  onJumpToWeek: (weekStartDate: string) => void;
  /** Matérias disponíveis pra trocar de aba — todas as 5 pro generalista, só 1 pro especialista
   * do 7º-9º ano (ver getAllowedSubjects). */
  allowedSubjects: OwnSubject[];
};

type PresetKey = "bimestre" | "semestre" | "tudo" | "personalizado";


/** Adiciona canal alfa (0-1) a uma cor hex de 6 dígitos, pra criar as camadas de intensidade do
 * heatmap sem precisar de uma paleta separada por matéria. */
function withAlpha(hex: string, alpha: number): string {
  const clamped = Math.max(0, Math.min(1, alpha));
  const alphaHex = Math.round(clamped * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${alphaHex}`;
}

function todayISO(): string {
  return toISODate(new Date());
}

export function CurriculumCoveragePanel({ weeks, network, gradeYear, onClose, onJumpToWeek, allowedSubjects }: Props) {
  const [subject, setSubject] = useState<OwnSubject>(allowedSubjects[0]);
  const [preset, setPreset] = useState<PresetKey>("bimestre");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  const range = useMemo(() => {
    const monday = getMondayISO(new Date(`${todayISO()}T00:00:00`));
    if (preset === "bimestre") return { from: addWeeksISO(monday, -8), to: addWeeksISO(monday, 1) };
    if (preset === "semestre") return { from: addWeeksISO(monday, -24), to: addWeeksISO(monday, 1) };
    if (preset === "tudo") return {};
    return { from: customFrom || undefined, to: customTo || undefined };
  }, [preset, customFrom, customTo]);

  const coverage = useMemo(
    () => computeCurriculumCoverage(weeks, network, gradeYear, subject, range),
    [weeks, network, gradeYear, subject, range]
  );

  const bankEntries = coverage.filter((c) => c.inBank);
  const coveredCount = bankEntries.filter((c) => c.count > 0).length;
  const givenCount = bankEntries.filter((c) => c.givenCount > 0).length;
  const selected = coverage.find((c) => c.code === selectedCode) ?? null;
  const color = SUBJECT_COLORS[subject];

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)]">
      <h2 className="text-[24px] mb-1">Cobertura curricular</h2>
      <p className="text-sm text-[var(--text-muted)] mb-4 max-w-[62ch]">
        Cruza os códigos do {network === "estado" ? "Currículo Paulista" : "Currículo da Cidade"} com as suas semanas.
        Cor cheia com ✓ é habilidade já dada em aula (marque em cada aula, &quot;Marcar como dada&quot;); cor clara é
        só planejada; cinza tracejado ainda não entrou em nenhuma semana do período.
      </p>

      {allowedSubjects.length > 1 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {allowedSubjects.map((key) => (
            <button
              key={key}
              onClick={() => {
                setSubject(key);
                setSelectedCode(null);
              }}
              type="button"
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                subject === key
                  ? "border-[var(--plum-900)] bg-[var(--plum-900)] text-white"
                  : "border-[var(--border-subtle)] bg-white text-[var(--text-muted)] hover:border-[var(--plum-900)]"
              }`}
            >
              {OWN_SUBJECT_LABELS[key]}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {(
          [
            ["bimestre", "Este bimestre"],
            ["semestre", "Este semestre"],
            ["tudo", "Tudo"],
            ["personalizado", "Personalizado"],
          ] as [PresetKey, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setPreset(key)}
            type="button"
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              preset === key
                ? "border-[var(--plum-900)] bg-[var(--plum-900)] text-white"
                : "border-[var(--border-subtle)] bg-white text-[var(--text-muted)] hover:border-[var(--plum-900)]"
            }`}
          >
            {label}
          </button>
        ))}
        {preset === "personalizado" && (
          <span className="flex items-center gap-1.5">
            <input
              type="date"
              value={customFrom}
              onChange={(e) => setCustomFrom(e.target.value)}
              aria-label="De"
              className="text-xs px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
            <span className="text-xs text-[var(--text-muted)]">até</span>
            <input
              type="date"
              value={customTo}
              onChange={(e) => setCustomTo(e.target.value)}
              aria-label="Até"
              className="text-xs px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
          </span>
        )}
      </div>

      <div className="mb-4 max-w-md">
        <p className="text-sm text-[var(--text-body)] mb-2">
          <strong>{givenCount}</strong> de <strong>{bankEntries.length}</strong> habilidades dadas em aula
          {bankEntries.length > 0 && ` (${Math.round((givenCount / bankEntries.length) * 100)}%)`}
          {coveredCount > givenCount && (
            <span className="text-[var(--text-muted)]"> · mais {coveredCount - givenCount} só planejadas</span>
          )}
          .
        </p>
        <CoverageBar given={givenCount} planned={coveredCount - givenCount} total={bankEntries.length} legend />
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {coverage.map((c) => {
          const isSelected = c.code === selectedCode;
          return (
            <button
              key={c.code}
              onClick={() => setSelectedCode((prev) => (prev === c.code ? null : c.code))}
              type="button"
              title={`${c.label}${c.givenCount > 0 ? ` — dada ${c.givenCount}×` : c.count > 0 ? " — só planejada" : ""}`}
              style={
                c.givenCount > 0
                  ? { background: color.text, color: "#fff", borderColor: isSelected ? "var(--ink-900)" : color.text }
                  : c.count > 0
                    ? { background: withAlpha(color.text, 0.14), color: color.text, borderColor: isSelected ? color.text : "transparent" }
                    : { background: "var(--ink-100)", color: "var(--ink-600)", borderColor: isSelected ? color.text : undefined }
              }
              className={`font-mono text-xs px-2.5 py-1.5 rounded-[var(--radius-sm)] border-2 transition-transform ${
                c.count === 0 ? "border-dashed border-[var(--border-subtle)]" : ""
              } ${isSelected ? "scale-[1.05]" : ""}`}
            >
              {c.givenCount > 0 && <span aria-hidden="true">✓ </span>}
              {c.code}
              {c.count > 0 && <span className="ml-1 opacity-80">×{c.count}</span>}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-subtle)] p-4 mb-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-mono text-sm font-medium" style={{ color: color.text }}>
              {selected.code}
            </span>
            <button onClick={() => setSelectedCode(null)} type="button" className="text-xs text-[var(--text-muted)] hover:underline">
              Fechar detalhe
            </button>
          </div>
          <p className="text-sm text-[var(--text-body)] mb-2">{selected.label}</p>
          {selected.count > 0 && (
            <p className="text-xs font-medium mb-2" style={{ color: selected.givenCount > 0 ? "var(--green-600)" : "var(--plum-800)" }}>
              {selected.givenCount > 0
                ? `✓ Dada em ${selected.givenCount} de ${selected.count} aula${selected.count === 1 ? "" : "s"}`
                : `Planejada em ${selected.count} aula${selected.count === 1 ? "" : "s"}, nenhuma marcada como dada`}
            </p>
          )}
          {selected.count === 0 ? (
            <p className="text-xs text-[var(--text-muted)]">Ainda não foi trabalhada nesse período.</p>
          ) : (
            <>
              {selected.themes.length > 0 && (
                <ul className="text-xs text-[var(--text-muted)] list-disc pl-4 mb-2">
                  {selected.themes.map((theme) => (
                    <li key={theme}>{theme}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1.5">
                {selected.weekIds.map((weekId) => {
                  const weekStartDate = weeks[weekId]?.weekStartDate;
                  return (
                    <button
                      key={weekId}
                      onClick={() => weekStartDate && onJumpToWeek(weekStartDate)}
                      type="button"
                      disabled={!weekStartDate}
                      className="text-xs text-[var(--plum-900)] underline disabled:no-underline disabled:text-[var(--text-muted)] disabled:cursor-default"
                    >
                      {weekStartDate ? formatFullDate(weekStartDate) : weekId}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex justify-end">
        <Button variant="secondary" onClick={onClose}>
          Voltar à semana
        </Button>
      </div>
    </div>
  );
}
