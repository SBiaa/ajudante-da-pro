import {
  WEEKDAYS,
  SLOT_NUMBERS,
  SlotNumber,
  TimetableEntry,
  WeeklyTimetable,
  WeekPlan,
  WeekCell,
  GeneratedLessonPlan,
} from "@/types/plano";

export function emptyPlan(): GeneratedLessonPlan {
  return {
    theme: "",
    curriculumCode: "",
    description: "",
    materials: [],
    steps: [],
    readingText: "",
    genre: "",
    generatedAt: null,
    editedManually: false,
  };
}

/** Grade fixa inicial: 1ª aula sempre Leitura Diária, demais horários em branco (a definir). */
export function createEmptyTimetable(): WeeklyTimetable {
  const grid = {} as WeeklyTimetable["grid"];
  for (const day of WEEKDAYS) {
    const dayRow = {} as Record<SlotNumber, TimetableEntry>;
    for (const slot of SLOT_NUMBERS) {
      dayRow[slot] = slot === 1 ? { kind: "leitura-diaria" } : { kind: "materia-externa", label: "" };
    }
    grid[day] = dayRow;
  }
  return { id: "timetable-1", updatedAt: new Date().toISOString(), grid };
}

function cellFromEntry(entry: TimetableEntry): WeekCell {
  if (entry.kind === "leitura-diaria") return { kind: "leitura-diaria", plan: emptyPlan() };
  if (entry.kind === "materia-propria") {
    return { kind: "materia-propria", subject: entry.subject, plan: emptyPlan() };
  }
  return { kind: "materia-externa", label: entry.label, activity: { label: "" } };
}

/** Cria uma nova semana em branco a partir da grade fixa configurada. */
export function buildWeekPlan(timetable: WeeklyTimetable, weekId: string, weekStartDate: string): WeekPlan {
  const days = {} as WeekPlan["days"];
  for (const day of WEEKDAYS) {
    const dayCells = {} as Record<SlotNumber, WeekCell>;
    for (const slot of SLOT_NUMBERS) {
      dayCells[slot] = cellFromEntry(timetable.grid[day][slot]);
    }
    days[day] = dayCells;
  }
  const now = new Date().toISOString();
  return { id: weekId, weekStartDate, createdAt: now, updatedAt: now, days };
}

/** Duplica uma semana existente. `keepContent` decide se copia os planos ou recomeça em branco. */
export function duplicateWeekPlan(
  source: WeekPlan,
  newWeekId: string,
  newWeekStartDate: string,
  keepContent: boolean
): WeekPlan {
  const now = new Date().toISOString();
  const days = {} as WeekPlan["days"];
  for (const day of WEEKDAYS) {
    const dayCells = {} as Record<SlotNumber, WeekCell>;
    for (const slot of SLOT_NUMBERS) {
      const cell = source.days[day][slot];
      if (keepContent) {
        dayCells[slot] = structuredClone(cell);
      } else if (cell.kind === "leitura-diaria") {
        dayCells[slot] = { kind: "leitura-diaria", plan: emptyPlan() };
      } else if (cell.kind === "materia-propria") {
        dayCells[slot] = { kind: "materia-propria", subject: cell.subject, plan: emptyPlan() };
      } else {
        dayCells[slot] = { kind: "materia-externa", label: cell.label, activity: { label: "" } };
      }
    }
    days[day] = dayCells;
  }
  return { id: newWeekId, weekStartDate: newWeekStartDate, createdAt: now, updatedAt: now, days };
}
