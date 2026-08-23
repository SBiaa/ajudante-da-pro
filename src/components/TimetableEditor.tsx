"use client";

import { useState } from "react";
import {
  WEEKDAYS,
  WEEKDAY_LABELS,
  SLOT_NUMBERS,
  OWN_SUBJECTS,
  OWN_SUBJECT_LABELS,
  OwnSubject,
  WeeklyTimetable,
  TimetableEntry,
  SlotNumber,
  Weekday,
} from "@/types/plano";

type Props = {
  timetable: WeeklyTimetable;
  onSave: (timetable: WeeklyTimetable) => void;
  onCancel: () => void;
  canCancel: boolean;
};

export function TimetableEditor({ timetable, onSave, onCancel, canCancel }: Props) {
  const [grid, setGrid] = useState(() => structuredClone(timetable.grid));

  function setEntry(day: Weekday, slot: SlotNumber, entry: TimetableEntry) {
    setGrid((prev) => ({ ...prev, [day]: { ...prev[day], [slot]: entry } }));
  }

  function handleSave() {
    onSave({ id: timetable.id, updatedAt: new Date().toISOString(), grid });
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)]">
      <h2 className="text-[24px] mb-1">Grade fixa semanal</h2>
      <p className="text-sm text-[var(--text-muted)] mb-4 max-w-[62ch]">
        Configure uma vez qual matéria cai em cada horário — isso se repete toda semana e você ainda pode ajustar
        pontualmente depois. A 1ª aula de todo dia é sempre a Leitura Diária.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left p-2 w-14 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Aula
              </th>
              {WEEKDAYS.map((day) => (
                <th
                  key={day}
                  className="text-left p-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]"
                >
                  {WEEKDAY_LABELS[day]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SLOT_NUMBERS.map((slot) => (
              <tr key={slot} className="border-t border-[var(--border-subtle)]">
                <td className="p-2 font-medium text-[var(--text-muted)] align-top">{slot}ª</td>
                {WEEKDAYS.map((day) => {
                  if (slot === 1) {
                    return (
                      <td key={day} className="p-2 text-[var(--ink-400)] italic align-top">
                        Leitura Diária
                      </td>
                    );
                  }
                  const entry = grid[day][slot];
                  const selectValue = entry.kind === "materia-propria" ? entry.subject : "externa";
                  return (
                    <td key={day} className="p-2 align-top">
                      <select
                        value={selectValue}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === "externa") {
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
                        {OWN_SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {OWN_SUBJECT_LABELS[s]}
                          </option>
                        ))}
                        <option value="externa">Outra (Ed. Física, Artes...)</option>
                      </select>
                      {entry.kind === "materia-externa" && (
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
            className="text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white"
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
