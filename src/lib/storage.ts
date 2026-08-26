import { AppState, GeneratedLessonPlan, WeekPlan } from "@/types/plano";

// A chave inclui o userId: o localStorage é por navegador, não por conta — sem isso, trocar
// de usuário no mesmo navegador reaproveitaria o cache da conta anterior (e sincronizaria os
// dados dela pra conta nova, vazando informação entre contas).
function storageKey(userId: number): string {
  return `plano-aula-app-state-v1:${userId}`;
}

// Época zero: garante que qualquer dado real vindo do servidor seja considerado mais
// recente que um estado local vazio/nunca sincronizado (ver reconciliação em HomeClient).
const NEVER_SYNCED = new Date(0).toISOString();

export function emptyState(): AppState {
  return {
    timetable: null,
    weeks: {},
    themeHistory: [],
    usedExercises: [],
    subjectColorOverrides: {},
    updatedAt: NEVER_SYNCED,
  };
}

/** Preenche campos que possam faltar em dados salvos por uma versão anterior do app. */
function normalizePlan(plan: Partial<GeneratedLessonPlan>): GeneratedLessonPlan {
  return {
    theme: plan.theme ?? "",
    curriculumCode: plan.curriculumCode ?? "",
    description: plan.description ?? "",
    materials: plan.materials ?? [],
    steps: plan.steps ?? [],
    classScript: plan.classScript ?? [],
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

export function loadState(userId: number): AppState {
  if (typeof window === "undefined") return emptyState();
  try {
    const raw = window.localStorage.getItem(storageKey(userId));
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

export function saveState(userId: number, state: AppState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(userId), JSON.stringify(state));
}
