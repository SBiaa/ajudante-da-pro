import {
  WEEKDAYS,
  SLOT_NUMBERS,
  SlotNumber,
  TimetableEntry,
  WeeklyTimetable,
  WeekPlan,
  WeekCell,
  GeneratedLessonPlan,
  cellAt,
  entryAt,
} from "@/types/plano";
import { isHighSchoolGrade } from "@/types/profile";

export function emptyPlan(): GeneratedLessonPlan {
  return {
    theme: "",
    curriculumCode: "",
    description: "",
    materials: [],
    steps: [],
    classScript: [],
    readingText: "",
    genre: "",
    generatedAt: null,
    editedManually: false,
  };
}

/** Grade fixa inicial: sugestão de 1ª aula com Leitura Diária (editável), demais horários em
 * branco (a definir). No Ensino Médio não há Leitura Diária: a grade começa toda em branco (a
 * professora ainda pode colocar a leitura em qualquer horário, se quiser). */
export function createEmptyTimetable(gradeYear?: string): WeeklyTimetable {
  const withDailyReading = !(gradeYear && isHighSchoolGrade(gradeYear));
  const grid = {} as WeeklyTimetable["grid"];
  for (const day of WEEKDAYS) {
    const dayRow: Partial<Record<SlotNumber, TimetableEntry>> = {};
    for (const slot of SLOT_NUMBERS) {
      dayRow[slot] =
        slot === 1 && withDailyReading ? { kind: "leitura-diaria" } : { kind: "materia-externa", label: "" };
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
      const dayCells: Partial<Record<SlotNumber, WeekCell>> = {};
      for (const slot of SLOT_NUMBERS) {
        // Horário que não existe nem na semana nem na grade (ex.: 8ª aula numa escola de 6) fica
        // de fora, em vez de gravar aulas vazias em toda semana.
        if (!week.days[day]?.[slot] && !timetable.grid[day]?.[slot]) continue;
        const cell = cellAt(week, day, slot);
        const entry = entryAt(timetable, day, slot);
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
    const dayCells: Partial<Record<SlotNumber, WeekCell>> = {};
    for (const slot of SLOT_NUMBERS) {
      const entry = timetable.grid[day]?.[slot];
      if (entry) dayCells[slot] = cellFromEntry(entry);
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
    const dayCells: Partial<Record<SlotNumber, WeekCell>> = {};
    for (const slot of SLOT_NUMBERS) {
      const cell = source.days[day]?.[slot];
      if (!cell) continue;
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

/** Copia o conteúdo planejado de `source` para `target`, só nas aulas que existem nas duas semanas
 * com a mesma matéria (mesma Leitura Diária, ou mesma matéria própria) e que ainda estão vazias em
 * `target` — nunca sobrescreve o que a professora já planejou naquela turma. Serve pra replicar o
 * planejamento entre turmas paralelas (7ºA → 7ºB). Retorna a semana nova e quantas aulas copiou. */
export function copyWeekContent(
  source: WeekPlan,
  target: WeekPlan
): { week: WeekPlan; copied: { subject: string; theme: string }[] } {
  const copied: { subject: string; theme: string }[] = [];
  const days = {} as WeekPlan["days"];
  for (const day of WEEKDAYS) {
    const dayCells = { ...target.days[day] };
    for (const slot of SLOT_NUMBERS) {
      const from = source.days[day]?.[slot];
      const to = target.days[day]?.[slot];
      if (!from || !to) continue;
      if (from.kind === "materia-externa" || to.kind === "materia-externa") continue;
      if (from.kind !== to.kind) continue;
      if (from.kind === "materia-propria" && to.kind === "materia-propria" && from.subject !== to.subject) continue;
      if (!from.plan.theme || !isCellEmpty(to)) continue;
      const plan = structuredClone(from.plan);
      dayCells[slot] = to.kind === "leitura-diaria" ? { kind: "leitura-diaria", plan } : { ...to, plan };
      copied.push({ subject: to.kind === "leitura-diaria" ? "leitura-diaria" : to.subject, theme: plan.theme });
    }
    days[day] = dayCells;
  }
  return { week: { ...target, updatedAt: new Date().toISOString(), days }, copied };
}
