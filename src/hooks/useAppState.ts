"use client";

import { useCallback, useSyncExternalStore } from "react";
import { AppState } from "@/types/plano";
import { loadState, saveState, emptyState } from "@/lib/storage";

// Estado compartilhado por módulo (fonte externa, sincronizada via useSyncExternalStore).
// No servidor sempre retorna SERVER_SNAPSHOT; no cliente, carrega do localStorage sob demanda.
const SERVER_SNAPSHOT: AppState = emptyState();
let cachedState: AppState | null = null;
const listeners = new Set<() => void>();

function getSnapshot(): AppState {
  if (cachedState === null) {
    cachedState = loadState();
  }
  return cachedState;
}

function getServerSnapshot(): AppState {
  return SERVER_SNAPSHOT;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

type StateUpdater = AppState | ((prev: AppState) => AppState);

export function useAppState() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setState = useCallback((updater: StateUpdater) => {
    const prev = cachedState ?? loadState();
    const next = typeof updater === "function" ? (updater as (p: AppState) => AppState)(prev) : updater;
    cachedState = next;
    saveState(next);
    listeners.forEach((listener) => listener());
  }, []);

  return { state, setState, hydrated: state !== SERVER_SNAPSHOT };
}
