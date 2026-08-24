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

/** Um horário "vazio" é aquele que a professora ainda não tocou: sem plano sorteado/editado
 * (matéria própria ou Leitura Diária) e sem atividade preenchida (matéria externa). */
function isCellEmpty(cell: WeekCell): boolean {
  if (cell.kind === "materia-externa") return cell.activity.label.trim() === "";
  return !cell.plan.editedManually && cell.plan.generatedAt === null && cell.plan.theme.trim() === "";
}

function sameShape(cell: WeekCell, entry: TimetableEntry): boolean {
  if (cell.kind !== entry.kind) return false;
  if (cell.kind === "materia-propria" && entry.kind === "materia-propria") return cell.subject === entry.subject;
  if (cell.kind === "materia-externa" && entry.kind === "materia-externa") return cell.label === entry.label;
  return true;
}

/** Aplica uma grade fixa recém-editada às semanas já criadas. Por padrão só mexe nos horários
 * ainda vazios — preserva qualquer plano já sorteado ou editado à mão. Na semana indicada por
 * `forceWeekId` (a que está na tela ao editar a grade), todo horário que mudou de matéria no
 * molde é sobrescrito mesmo com conteúdo já gerado — é a semana em que a professora está
 * trabalhando agora, então ela espera ver a mudança refletida na hora, mesmo perdendo o que
 * tinha ali. Retorna o mesmo objeto `weeks` (sem clonar) se nada precisou mudar. */
export function syncWeeksWithTimetable(
  weeks: Record<string, WeekPlan>,
  timetable: WeeklyTimetable,
  forceWeekId?: string
): Record<string, WeekPlan> {
  let anyChanged = false;
  const nextWeeks: Record<string, WeekPlan> = {};
  for (const [weekId, week] of Object.entries(weeks)) {
    const force = weekId === forceWeekId;
    let weekChanged = false;
    const days = {} as WeekPlan["days"];
    for (const day of WEEKDAYS) {
      const dayCells = {} as Record<SlotNumber, WeekCell>;
      for (const slot of SLOT_NUMBERS) {
        const cell = week.days[day][slot];
        const entry = timetable.grid[day][slot];
        if (!sameShape(cell, entry) && (force || isCellEmpty(cell))) {
          dayCells[slot] = cellFromEntry(entry);
          weekChanged = true;
        } else {
          dayCells[slot] = cell;
        }
      }
      days[day] = dayCells;
    }
    if (weekChanged) {
      anyChanged = true;
      nextWeeks[weekId] = { ...week, updatedAt: new Date().toISOString(), days };
    } else {
      nextWeeks[weekId] = week;
    }
  }
  return anyChanged ? nextWeeks : weeks;
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
