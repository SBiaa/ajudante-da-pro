import { OWN_SUBJECT_LABELS, SLOT_NUMBERS, SlotNumber, WEEKDAYS, WeekCell, WeekPlan, Weekday, slotsFor } from "@/types/plano";
import type { ColorKey } from "@/lib/subjectColors";
import { addDaysISO, toISODate } from "@/lib/date";

export function colorKeyFor(cell: WeekCell): ColorKey {
  if (cell.kind === "leitura-diaria") return "leitura-diaria";
  if (cell.kind === "materia-propria") return cell.subject;
  return "externa";
}

/** Título curto da aula (selo do card): matéria própria, Leitura Diária ou o nome da externa. */
export function cellTitle(cell: WeekCell): string {
  if (cell.kind === "leitura-diaria") return "Leitura Diária";
  if (cell.kind === "materia-propria") return OWN_SUBJECT_LABELS[cell.subject];
  return cell.label;
}

/** Dia da semana em exibição que cai em hoje, se houver. */
export function todayWeekday(weekStartDate: string): Weekday | null {
  const todayISO = toISODate(new Date());
  const idx = WEEKDAYS.findIndex((_, i) => addDaysISO(weekStartDate, i) === todayISO);
  return idx >= 0 ? WEEKDAYS[idx] : null;
}

/** Horários que a semana tem salvos (do 1º até o último que existe em algum dia). Usado onde
 * não se sabe a escola — ex.: página pública de compartilhamento. Nunca menos que o padrão. */
export function slotsInWeek(week: WeekPlan): SlotNumber[] {
  let last = 0;
  for (const day of WEEKDAYS) {
    for (const slot of SLOT_NUMBERS) {
      if (week.days[day]?.[slot] && slot > last) last = slot;
    }
  }
  return slotsFor(Math.max(last, slotsFor(undefined).length));
}

/** Quantas aulas próprias da semana já têm tema (as externas não contam). `slots` limita aos
 * horários visíveis da escola — aulas guardadas além disso (a escola reduziu o número de aulas
 * por dia) não contam. */
export function weekProgress(
  week: WeekPlan | undefined,
  slots: SlotNumber[] = SLOT_NUMBERS
): { filled: number; total: number } | undefined {
  if (!week) return undefined;
  let filled = 0;
  let total = 0;
  for (const day of WEEKDAYS) {
    for (const slot of slots) {
      const cell = week.days[day]?.[slot];
      if (!cell || cell.kind === "materia-externa") continue;
      total++;
      if (cell.plan.theme) filled++;
    }
  }
  return { filled, total };
}
