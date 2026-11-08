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

/**
 * Situação da sincronização com o servidor, pra mostrar na tela (antes a falha só ia pro
 * console e a professora não tinha como saber se o trabalho tinha subido).
 * - idle: nada pendente desde que a página abriu.
 * - pending: há alteração local ainda não enviada (debounce) ou em envio.
 * - saved: última gravação no servidor deu certo (savedAt = quando).
 * - error: última gravação falhou; o dado continua salvo neste aparelho.
 */
export type SyncStatus =
  | { kind: "idle" }
  | { kind: "pending" }
  | { kind: "saved"; savedAt: string }
  | { kind: "error" };

let syncStatus: SyncStatus = { kind: "idle" };
const syncListeners = new Set<() => void>();

function setSyncStatus(next: SyncStatus) {
  syncStatus = next;
  syncListeners.forEach((listener) => listener());
}

function scheduleSync(state: AppState) {
  if (syncTimer) clearTimeout(syncTimer);
  setSyncStatus({ kind: "pending" });
  syncTimer = setTimeout(() => {
    saveStoredAppDataAction({
      weeks: state.weeks,
      themeHistory: state.themeHistory,
      usedExercises: state.usedExercises,
      classData: state.classData,
      subjectColorOverrides: state.subjectColorOverrides,
      updatedAt: state.updatedAt,
    })
      .then(() => setSyncStatus({ kind: "saved", savedAt: new Date().toISOString() }))
      .catch((err) => {
        console.error("Falha ao sincronizar com o servidor:", err);
        setSyncStatus({ kind: "error" });
      });
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

function subscribeSync(listener: () => void) {
  syncListeners.add(listener);
  return () => syncListeners.delete(listener);
}

const IDLE_SYNC: SyncStatus = { kind: "idle" };

function getSyncSnapshot(): SyncStatus {
  return syncStatus;
}

function getSyncServerSnapshot(): SyncStatus {
  return IDLE_SYNC;
}

/** Situação atual da sincronização com o servidor (ver SyncStatus). */
export function useSyncStatus(): SyncStatus {
  return useSyncExternalStore(subscribeSync, getSyncSnapshot, getSyncServerSnapshot);
}

/** Reenvia o estado atual pro servidor agora (botão "Tentar de novo" do indicador). */
export function retrySync() {
  if (cachedState) scheduleSync(cachedState);
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
