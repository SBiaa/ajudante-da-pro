"use client";

import { useCallback, useMemo } from "react";
import {
  GeneratedLessonPlan,
  OwnSubject,
  SlotNumber,
  WeekCell,
  WeekPlan,
  Weekday,
  cellAt,
} from "@/types/plano";
import { useApp } from "@/components/AppShell";
import { addWeeksISO, getWeekId } from "@/lib/date";
import { buildWeekPlan, duplicateWeekPlan } from "@/lib/timetable";
import { pickThemeEntry } from "@/lib/themePicker";
import { exerciseKey } from "@/lib/usedExercises";
import type { SourcedExercise } from "@/lib/mergedActivityPicker";

/**
 * Ações sobre as semanas de QUALQUER turma (a turma entra como parâmetro): sortear tema, editar
 * célula, criar a semana, marcar questões usadas. É o que o Início usa pra mostrar aulas de várias
 * turmas no mesmo dia; a aba Semana usa o atalho `useWeekActions`, preso à turma ativa.
 */
export function useClassActions() {
  const { classes, getClassView, updateClass, showToast } = useApp();

  const entryOf = useCallback((classId: string) => classes.find((c) => c.cls.id === classId), [classes]);

  /** Sorteia um plano para a matéria, evitando repetir tanto o histórico salvo quanto os temas
   * já sorteados nesta mesma leva (relevante para "Gerar semana inteira"). */
  const pickPlan = useCallback(
    (
      classId: string,
      subjectKey: OwnSubject | "leitura-diaria",
      extraRecent: string[] = [],
      keyword = ""
    ): GeneratedLessonPlan | null => {
      const entry = entryOf(classId);
      if (!entry) return null;
      const historyThemes = getClassView(classId)
        .themeHistory.filter((t) => t.subject === subjectKey)
        .sort((a, b) => (a.usedAt < b.usedAt ? 1 : -1))
        .slice(0, 8)
        .map((t) => t.theme);
      const picked = pickThemeEntry(
        entry.school.network,
        entry.cls.gradeYear,
        subjectKey,
        [...extraRecent, ...historyThemes],
        keyword
      );
      if (!picked.theme) return null;
      return {
        theme: picked.theme,
        curriculumCode: picked.curriculumCode,
        description: picked.description,
        materials: picked.materials,
        steps: picked.steps,
        classScript: picked.classScript,
        readingText: picked.readingText,
        genre: picked.genre,
        generatedAt: new Date().toISOString(),
        editedManually: false,
        fullLessonPlan: picked.fullLessonPlan,
      };
    },
    [entryOf, getClassView]
  );

  const handleCellChange = useCallback(
    (classId: string, monday: string, day: Weekday, slot: SlotNumber, cell: WeekCell) => {
      const weekId = getWeekId(monday);
      updateClass(classId, (v) => {
        const w = v.weeks[weekId];
        if (!w) return v;
        const updatedWeek: WeekPlan = {
          ...w,
          updatedAt: new Date().toISOString(),
          days: { ...w.days, [day]: { ...w.days[day], [slot]: cell } },
        };
        return { ...v, weeks: { ...v.weeks, [weekId]: updatedWeek } };
      });
    },
    [updateClass]
  );

  const generateCell = useCallback(
    (classId: string, monday: string, day: Weekday, slot: SlotNumber, keyword = "") => {
      const weekId = getWeekId(monday);
      const week = getClassView(classId).weeks[weekId];
      if (!week) return;
      const cell = cellAt(week, day, slot);
      if (cell.kind === "materia-externa") return;

      const subjectKey = cell.kind === "leitura-diaria" ? "leitura-diaria" : cell.subject;
      const plan = pickPlan(classId, subjectKey, [], keyword);
      if (!plan) {
        showToast({
          tone: "error",
          message: keyword.trim()
            ? `Nenhum tema encontrado para "${keyword.trim()}". Tente outra palavra ou deixe em branco.`
            : "O banco de temas dessa matéria ainda está vazio. Preencha manualmente por enquanto.",
        });
        return;
      }

      updateClass(classId, (v) => {
        const w = v.weeks[weekId];
        if (!w) return v;
        const existingCell = cellAt(w, day, slot);
        if (existingCell.kind === "materia-externa") return v;
        const updatedCell: WeekCell =
          existingCell.kind === "leitura-diaria"
            ? { kind: "leitura-diaria", plan }
            : { kind: "materia-propria", subject: existingCell.subject, plan };
        const updatedWeek: WeekPlan = {
          ...w,
          updatedAt: new Date().toISOString(),
          days: { ...w.days, [day]: { ...w.days[day], [slot]: updatedCell } },
        };
        return {
          ...v,
          weeks: { ...v.weeks, [weekId]: updatedWeek },
          themeHistory: [
            ...v.themeHistory,
            { subject: subjectKey, theme: plan.theme, weekId, usedAt: new Date().toISOString() },
          ],
        };
      });
    },
    [getClassView, pickPlan, updateClass, showToast]
  );

  const createBlankWeek = useCallback(
    (classId: string, monday: string) => {
      const timetable = getClassView(classId).timetable;
      if (!timetable) return;
      const weekId = getWeekId(monday);
      const created = buildWeekPlan(timetable, weekId, monday);
      updateClass(classId, (v) => ({ ...v, weeks: { ...v.weeks, [weekId]: created } }));
    },
    [getClassView, updateClass]
  );

  const duplicatePrevious = useCallback(
    (classId: string, monday: string) => {
      const previous = getClassView(classId).weeks[getWeekId(addWeeksISO(monday, -1))];
      if (!previous) return;
      const weekId = getWeekId(monday);
      const created = duplicateWeekPlan(previous, weekId, monday, true);
      updateClass(classId, (v) => ({ ...v, weeks: { ...v.weeks, [weekId]: created } }));
    },
    [getClassView, updateClass]
  );

  /** Chamada ao imprimir/exportar uma atividade: marca as questões que saíram na folha como
   * "já usada", pra sinalizar (sem bloquear) da próxima vez que a mesma professora montar
   * atividade pro mesmo tema. Não marca de novo o que já estava marcado. */
  const markExercisesUsed = useCallback(
    (classId: string, subjectKey: OwnSubject | "leitura-diaria", theme: string, exercises: SourcedExercise[]) => {
      updateClass(classId, (v) => {
        const already = new Set(
          v.usedExercises.filter((e) => e.subject === subjectKey && e.theme === theme).map((e) => e.exerciseKey)
        );
        const usedAt = new Date().toISOString();
        const newEntries = exercises
          .filter((ex) => !already.has(exerciseKey(ex)))
          .map((ex) => ({ subject: subjectKey, theme, exerciseKey: exerciseKey(ex), usedAt }));
        if (newEntries.length === 0) return v;
        return { ...v, usedExercises: [...v.usedExercises, ...newEntries] };
      });
    },
    [updateClass]
  );

  return { pickPlan, handleCellChange, generateCell, createBlankWeek, duplicatePrevious, markExercisesUsed };
}

/** Mesmas ações, presas à turma ativa e a uma semana (a que começa em `monday`) — o que a aba
 * Semana, a Biblioteca e o Progresso usam. */
export function useWeekActions(monday: string) {
  const { state, activeClassId } = useApp();
  const actions = useClassActions();
  const weekId = getWeekId(monday);
  const week: WeekPlan | undefined = state.weeks[weekId];
  const previousWeek: WeekPlan | undefined = state.weeks[getWeekId(addWeeksISO(monday, -1))];

  return useMemo(
    () => ({
      weekId,
      week,
      previousWeek,
      pickPlan: (subjectKey: OwnSubject | "leitura-diaria", extraRecent: string[] = [], keyword = "") =>
        actions.pickPlan(activeClassId, subjectKey, extraRecent, keyword),
      handleCellChange: (day: Weekday, slot: SlotNumber, cell: WeekCell) =>
        actions.handleCellChange(activeClassId, monday, day, slot, cell),
      generateCell: (day: Weekday, slot: SlotNumber, keyword = "") =>
        actions.generateCell(activeClassId, monday, day, slot, keyword),
      createBlankWeek: () => actions.createBlankWeek(activeClassId, monday),
      duplicatePrevious: () => actions.duplicatePrevious(activeClassId, monday),
      markExercisesUsed: (subjectKey: OwnSubject | "leitura-diaria", theme: string, exercises: SourcedExercise[]) =>
        actions.markExercisesUsed(activeClassId, subjectKey, theme, exercises),
    }),
    [weekId, week, previousWeek, actions, activeClassId, monday]
  );
}
