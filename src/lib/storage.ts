import { AppState, GeneratedLessonPlan, WeekPlan } from "@/types/plano";

const STORAGE_KEY = "plano-aula-app-state-v1";

export function emptyState(): AppState {
  return { timetable: null, weeks: {}, themeHistory: [], subjectColorOverrides: {} };
}

/** Preenche campos que possam faltar em dados salvos por uma versão anterior do app. */
function normalizePlan(plan: Partial<GeneratedLessonPlan>): GeneratedLessonPlan {
  return {
    theme: plan.theme ?? "",
    curriculumCode: plan.curriculumCode ?? "",
    description: plan.description ?? "",
    materials: plan.materials ?? [],
    steps: plan.steps ?? [],
    readingText: plan.readingText ?? "",
    genre: plan.genre ?? "",
    generatedAt: plan.generatedAt ?? null,
    editedManually: plan.editedManually ?? false,
  };
}

function normalizeWeek(week: WeekPlan): WeekPlan {
  const days = { ...week.days };
  for (const day of Object.keys(days) as (keyof WeekPlan["days"])[]) {
    const dayCells = { ...days[day] };
    for (const slot of Object.keys(dayCells) as unknown as (keyof typeof dayCells)[]) {
      const cell = dayCells[slot];
      if (cell.kind !== "materia-externa") {
        dayCells[slot] = { ...cell, plan: normalizePlan(cell.plan) };
      }
    }
    days[day] = dayCells;
  }
  return { ...week, days };
}

export function loadState(): AppState {
  if (typeof window === "undefined") return emptyState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw) as AppState;
    const state = { ...emptyState(), ...parsed };
    for (const weekId of Object.keys(state.weeks)) {
      state.weeks[weekId] = normalizeWeek(state.weeks[weekId]);
    }
    return state;
  } catch {
    return emptyState();
  }
}

export function saveState(state: AppState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
