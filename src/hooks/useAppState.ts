"use client";

import { useCallback, useSyncExternalStore } from "react";
import { AppState } from "@/types/plano";
import { loadState, saveState, emptyState } from "@/lib/storage";
import { saveStoredAppDataAction } from "@/app/actions";

// Estado compartilhado por módulo (fonte externa, sincronizada via useSyncExternalStore).
// No servidor sempre retorna SERVER_SNAPSHOT; no cliente, carrega do localStorage sob demanda.
// Login/logout no App Router fazem redirect() de dentro de uma Server Action, que com JS
// habilitado é uma navegação client-side (SPA) — o módulo NÃO é reinicializado. Por isso o
// cache precisa saber a qual usuário pertence e recarregar quando o userId mudar.
const SERVER_SNAPSHOT: AppState = emptyState();
let cachedState: AppState | null = null;
let cachedUserId: number | null = null;
const listeners = new Set<() => void>();

// Debounce das gravações no servidor: evita um round-trip por tecla digitada, já que
// LessonDetailModal grava a cada onChange. 1.5s é curto o bastante pra não perder a
// última edição se a aba for fechada logo em seguida, na prática.
const SYNC_DEBOUNCE_MS = 1500;
let syncTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleSync(state: AppState) {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    saveStoredAppDataAction({
      weeks: state.weeks,
      themeHistory: state.themeHistory,
      usedExercises: state.usedExercises,
      subjectColorOverrides: state.subjectColorOverrides,
      updatedAt: state.updatedAt,
    }).catch((err) => console.error("Falha ao sincronizar com o servidor:", err));
  }, SYNC_DEBOUNCE_MS);
}

// Recarrega o estado do usuário informado, descartando qualquer sync pendente do usuário
// anterior (senão o debounce dispararia e gravaria dados de A na sessão de B).
function loadForUser(userId: number): AppState {
  if (syncTimer) {
    clearTimeout(syncTimer);
    syncTimer = null;
  }
  cachedUserId = userId;
  return loadState(userId);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getServerSnapshot(): AppState {
  return SERVER_SNAPSHOT;
}

type StateUpdater = AppState | ((prev: AppState) => AppState);

export function useAppState(userId: number) {
  const getSnapshot = useCallback(() => {
    if (cachedState === null || cachedUserId !== userId) {
      cachedState = loadForUser(userId);
    }
    return cachedState;
  }, [userId]);

  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setState = useCallback(
    (updater: StateUpdater) => {
      const prev = cachedState !== null && cachedUserId === userId ? cachedState : loadForUser(userId);
      const updated = typeof updater === "function" ? (updater as (p: AppState) => AppState)(prev) : updater;
      const next = { ...updated, updatedAt: new Date().toISOString() };
      cachedState = next;
      saveState(userId, next);
      scheduleSync(next);
      listeners.forEach((listener) => listener());
    },
    [userId]
  );

  return { state, setState, hydrated: state !== SERVER_SNAPSHOT };
}
