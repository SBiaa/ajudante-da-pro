"use client";

import { useState } from "react";
import {
  WEEKDAYS,
  WEEKDAY_LABELS,
  OWN_SUBJECT_LABELS,
  OwnSubject,
  WeeklyTimetable,
  TimetableEntry,
  SlotNumber,
  Weekday,
  entryAt,
  slotsFor,
} from "@/types/plano";

type Props = {
  timetable: WeeklyTimetable;
  onSave: (timetable: WeeklyTimetable) => void;
  onCancel: () => void;
  canCancel: boolean;
  /** Matérias que o professor pode escolher para uma célula "matéria própria" — todas as 5
   * pro generalista, só 1 pro especialista do 7º-9º ano (ver getAllowedSubjects). */
  allowedSubjects: OwnSubject[];
  /** Matérias sem banco que a professora cadastrou na turma (Arte, Inglês...): viram opção direta
   * no select, em vez de ter que digitar o nome em "Outra" toda vez. */
  customSubjects?: string[];
  /** Horários de aula da escola (ver School.slotsPerDay). Padrão: 6. */
  slots?: SlotNumber[];
};

export function TimetableEditor({
  timetable,
  onSave,
  onCancel,
  canCancel,
  allowedSubjects,
  customSubjects = [],
  slots = slotsFor(undefined),
}: Props) {
  const [grid, setGrid] = useState(() => structuredClone(timetable.grid));

  function setEntry(day: Weekday, slot: SlotNumber, entry: TimetableEntry) {
    setGrid((prev) => ({ ...prev, [day]: { ...prev[day], [slot]: entry } }));
  }

  /** Atalho pro preenchimento inicial: em vez de repetir a mesma escolha em até 30 selects,
   * a professora monta só a segunda-feira e replica pros outros dias — ela ainda pode ajustar
   * pontualmente depois (aqui mesmo ou direto na semana já gerada). */
  function copyMondayToWeek() {
    setGrid((prev) => {
      const monday = prev.segunda;
      const next = { ...prev };
      for (const day of WEEKDAYS) {
        if (day === "segunda") continue;
        const updatedDay = { ...prev[day] };
        for (const slot of slots) {
          updatedDay[slot] = monday[slot] ?? { kind: "materia-externa", label: "" };
        }
        next[day] = updatedDay;
      }
      return next;
    });
  }

  function handleSave() {
    // Grava todos os horários visíveis, mesmo os que ficaram em branco: as semanas novas saem com
    // o número de aulas da escola. Horários além disso (a escola reduziu as aulas) são mantidos.
    const draft: WeeklyTimetable = { id: timetable.id, updatedAt: new Date().toISOString(), grid };
    const full = structuredClone(grid);
    for (const day of WEEKDAYS) {
      for (const slot of slots) full[day] = { ...full[day], [slot]: entryAt(draft, day, slot) };
    }
    onSave({ ...draft, grid: full });
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)]">
      <h2 className="text-[24px] mb-1">Grade fixa semanal</h2>
      <p className="text-sm text-[var(--text-muted)] mb-4 max-w-[62ch]">
        Configure uma vez qual matéria cai em cada horário — isso se repete toda semana e você ainda pode ajustar
        pontualmente depois. Escolha em qual(is) horário(s) entra a Leitura Diária.
      </p>

      <div className="mb-4">
        <button
          onClick={copyMondayToWeek}
          type="button"
          className="text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] transition-colors hover:border-[var(--plum-900)] hover:text-[var(--plum-900)]"
        >
          Copiar segunda-feira para os outros dias
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left p-2 w-14 text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Aula
              </th>
              {WEEKDAYS.map((day) => (
                <th
                  key={day}
                  className="text-left p-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]"
                >
                  {WEEKDAY_LABELS[day]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot} className="border-t border-[var(--border-subtle)]">
                <td className="p-2 font-medium text-[var(--text-muted)] align-top">{slot}ª</td>
                {WEEKDAYS.map((day) => {
                  const entry = grid[day]?.[slot] ?? { kind: "materia-externa" as const, label: "" };
                  const selectValue =
                    entry.kind === "materia-propria"
                      ? entry.subject
                      : entry.kind === "leitura-diaria"
                        ? "leitura-diaria"
                        : customSubjects.includes(entry.label)
                          ? `custom:${entry.label}`
                          : "externa";
                  // Se a célula já tem uma matéria fora da lista permitida (ex.: professor
                  // trocou de matéria/ano depois de montar a grade), mantém essa matéria como
                  // opção só nesta célula — pra ela continuar visível e a professora poder
                  // corrigir manualmente, em vez de sumir sem explicação.
                  const subjectOptions =
                    entry.kind === "materia-propria" && !allowedSubjects.includes(entry.subject)
                      ? [...allowedSubjects, entry.subject]
                      : allowedSubjects;
                  return (
                    <td key={day} className="p-2 align-top">
                      <select
                        value={selectValue}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === "leitura-diaria") {
                            setEntry(day, slot, { kind: "leitura-diaria" });
                          } else if (value.startsWith("custom:")) {
                            setEntry(day, slot, { kind: "materia-externa", label: value.slice("custom:".length) });
                          } else if (value === "externa") {
                            setEntry(day, slot, {
                              kind: "materia-externa",
                              label: entry.kind === "materia-externa" ? entry.label : "",
                            });
                          } else {
                            setEntry(day, slot, { kind: "materia-propria", subject: value as OwnSubject });
                          }
                        }}
                        className="w-full text-xs border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-1.5 py-1 mb-1 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
                      >
                        <option value="leitura-diaria">Leitura Diária</option>
                        {subjectOptions.map((s) => (
                          <option key={s} value={s}>
                            {OWN_SUBJECT_LABELS[s]}
                          </option>
                        ))}
                        {customSubjects.map((label) => (
                          <option key={label} value={`custom:${label}`}>
                            {label}
                          </option>
                        ))}
                        <option value="externa">Outra (digitar nome)</option>
                      </select>
                      {entry.kind === "materia-externa" && !customSubjects.includes(entry.label) && (
                        <input
                          value={entry.label}
                          onChange={(e) => setEntry(day, slot, { kind: "materia-externa", label: e.target.value })}
                          placeholder="Nome da matéria"
                          className="w-full text-xs border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-1.5 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex gap-2 justify-end">
        {canCancel && (
          <button
            onClick={onCancel}
            type="button"
            className="text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-white text-[var(--text-body)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)]"
          >
            Cancelar
          </button>
        )}
        <button
          onClick={handleSave}
          type="button"
          className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975]"
        >
          Salvar grade
        </button>
      </div>
    </div>
  );
}
