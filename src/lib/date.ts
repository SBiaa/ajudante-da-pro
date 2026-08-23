// Utilidades de data para navegação entre semanas letivas.

export function toISODate(date: Date): string {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Retorna a segunda-feira (ISO date) da semana que contém `date`. */
export function getMondayISO(date: Date = new Date()): string {
  const d = new Date(date);
  const dayOfWeek = d.getDay(); // 0 = domingo ... 6 = sábado
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  d.setDate(d.getDate() + diffToMonday);
  return toISODate(d);
}

export function addDaysISO(isoDate: string, days: number): string {
  const d = new Date(`${isoDate}T00:00:00`);
  d.setDate(d.getDate() + days);
  return toISODate(d);
}

export function addWeeksISO(isoDate: string, weeks: number): string {
  return addDaysISO(isoDate, weeks * 7);
}

/** Calcula o id de semana ISO (ex: "2026-W08") a partir da segunda-feira daquela semana. */
export function getWeekId(mondayISO: string): string {
  const d = new Date(`${mondayISO}T00:00:00`);
  const target = new Date(d.valueOf());
  const dayNr = (d.getDay() + 6) % 7; // 0 = segunda
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }
  const weekNumber = 1 + Math.round((firstThursday - target.valueOf()) / (7 * 24 * 3600 * 1000));
  const isoYear = new Date(firstThursday).getFullYear();
  return `${isoYear}-W${String(weekNumber).padStart(2, "0")}`;
}

const WEEKDAY_DATE_LABEL = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit" });

export function formatShortDate(isoDate: string): string {
  return WEEKDAY_DATE_LABEL.format(new Date(`${isoDate}T00:00:00`));
}

export function formatFullDate(isoDate: string): string {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" }).format(
    new Date(`${isoDate}T00:00:00`)
  );
}
