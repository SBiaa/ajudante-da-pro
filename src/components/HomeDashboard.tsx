"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { OWN_SUBJECT_LABELS, SlotNumber, WEEKDAYS, WEEKDAY_LABELS, Weekday, WeekCell, slotsFor } from "@/types/plano";
import { useApp, ClassEntry } from "@/components/AppShell";
import { useClassActions } from "@/hooks/useWeekActions";
import { addWeeksISO, formatShortDate, getMondayISO, getWeekId } from "@/lib/date";
import { computeCurriculumCoverage } from "@/lib/curriculumCoverage";
import { CoverageBar } from "@/components/CoverageBar";
import { cellTitle, colorKeyFor, weekProgress } from "@/lib/weekHelpers";
import { resolveSubjectColor } from "@/lib/subjectColors";
import { Button } from "@/components/Button";
import { CopyButton } from "@/components/CopyButton";
import { LessonDetailModal } from "@/components/LessonDetailModal";

type Props = {
  /** Por turma: "matéria|tema" dos temas do banco dela que têm atividade ou lição de casa
   * (calculado no servidor — ver src/lib/activityStats.ts). */
  activityThemeKeysByClass: Record<string, string[]>;
};

const TIP_STORAGE_PREFIX = "plano-aula-dica-dispensada:";

function readDismissed(id: string): boolean {
  try {
    return window.localStorage.getItem(TIP_STORAGE_PREFIX + id) === "1";
  } catch {
    return false;
  }
}

function writeDismissed(id: string) {
  try {
    window.localStorage.setItem(TIP_STORAGE_PREFIX + id, "1");
  } catch {
    // sem localStorage (janela privada etc.): a dica só volta na próxima visita, sem drama.
  }
}

const DATE_LABEL = new Intl.DateTimeFormat("pt-BR", { weekday: "long", day: "numeric", month: "long" });

function Card({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-4 sm:p-5 shadow-[var(--shadow-sm)] ${className}`}
    >
      <h2 className="text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--text-muted)] mb-3">{title}</h2>
      {children}
    </section>
  );
}

function ProgressBar({ value, total }: { value: number; total: number }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={total}
      className="h-2 rounded-full bg-[var(--surface-subtle)] overflow-hidden"
    >
      <div className="h-full rounded-full bg-[var(--action-primary)]" style={{ width: `${pct}%` }} />
    </div>
  );
}

type Row = { entry: ClassEntry; slot: SlotNumber; cell: WeekCell };

/** Aba "Início": responde "o que eu faço agora?" (aulas de hoje, de todas as turmas) e mostra o
 * quanto ela já aproveitou do app — tudo calculado a partir do que o app já guarda. */
export function HomeDashboard({ activityThemeKeysByClass }: Props) {
  const router = useRouter();
  const { classes, setup, getClassView, setActiveClassId, setViewedMonday } = useApp();
  const actions = useClassActions();
  const multiple = classes.length > 1;
  const multipleSchools = setup.schools.length > 1;

  // Fim de semana não tem aula: mostra a segunda-feira que vem.
  const now = useMemo(() => new Date(), []);
  const dow = now.getDay(); // 0 = domingo
  const isSchoolDay = dow >= 1 && dow <= 5;
  const thisMonday = useMemo(() => getMondayISO(now), [now]);
  const targetMonday = isSchoolDay ? thisMonday : addWeeksISO(thisMonday, 1);
  const targetDay: Weekday = isSchoolDay ? WEEKDAYS[dow - 1] : "segunda";
  const weekId = getWeekId(targetMonday);

  const [openCell, setOpenCell] = useState<{ classId: string; slot: SlotNumber } | null>(null);

  function goTo(classId: string, path: string, monday?: string) {
    setActiveClassId(classId);
    if (monday) setViewedMonday(monday);
    router.push(path);
  }

  // ---- Hoje: aulas do dia de todas as turmas, ordenadas por horário -----------------------
  const perClass = useMemo(
    () =>
      classes.map((entry) => {
        const view = getClassView(entry.cls.id);
        return { entry, view, week: view.weeks[weekId] };
      }),
    [classes, getClassView, weekId]
  );

  const todayRows = useMemo<Row[]>(() => {
    const rows: Row[] = [];
    for (const { entry, week } of perClass) {
      if (!week) continue;
      for (const slot of slotsFor(entry.school.slotsPerDay)) {
        const cell = week.days[targetDay]?.[slot];
        if (!cell || (cell.kind === "materia-externa" && cell.label.trim() === "")) continue;
        rows.push({ entry, slot, cell });
      }
    }
    return rows.sort((a, b) => a.slot - b.slot);
  }, [perClass, targetDay]);

  const classesWithoutWeek = perClass.filter((p) => !p.week);
  const todayMissing = todayRows.filter(({ cell }) => cell.kind !== "materia-externa" && !cell.plan.theme).length;

  // ---- Semana: soma das turmas -------------------------------------------------------------
  const weekTotals = useMemo(() => {
    let filled = 0;
    let total = 0;
    for (const { entry, week } of perClass) {
      const p = weekProgress(week, slotsFor(entry.school.slotsPerDay));
      if (p) {
        filled += p.filled;
        total += p.total;
      }
    }
    return { filled, total };
  }, [perClass]);
  const firstWithGaps = perClass.find((p) => {
    const pr = weekProgress(p.week, slotsFor(p.entry.school.slotsPerDay));
    return pr && pr.filled < pr.total;
  });

  // ---- Progresso curricular, por turma -----------------------------------------------------
  const coverageByClass = useMemo(
    () =>
      perClass.map(({ entry, view }) => {
        const subjects = entry.cls.subjects.map((subject) => {
          const rows = computeCurriculumCoverage(view.weeks, entry.school.network, entry.cls.gradeYear, subject).filter(
            (r) => r.inBank
          );
          return {
            subject,
            done: rows.filter((r) => r.count > 0).length,
            given: rows.filter((r) => r.givenCount > 0).length,
            total: rows.length,
            pending: rows.filter((r) => r.count === 0),
          };
        });
        const done = subjects.reduce((n, c) => n + c.done, 0);
        const given = subjects.reduce((n, c) => n + c.given, 0);
        const total = subjects.reduce((n, c) => n + c.total, 0);
        const keys = new Set(activityThemeKeysByClass[entry.cls.id] ?? []);
        const usedThemes = new Set<string>();
        for (const e of view.usedExercises) {
          const key = `${e.subject}|${e.theme}`;
          if (keys.has(key)) usedThemes.add(key);
        }
        return { entry, subjects, done, given, total, activityTotal: keys.size, activityUsed: usedThemes.size };
      }),
    [perClass, activityThemeKeysByClass]
  );
  const totalDone = coverageByClass.reduce((n, c) => n + c.done, 0);
  const totalGiven = coverageByClass.reduce((n, c) => n + c.given, 0);
  const totalAll = coverageByClass.reduce((n, c) => n + c.total, 0);
  const activityTotal = coverageByClass.reduce((n, c) => n + c.activityTotal, 0);
  const activityUsed = coverageByClass.reduce((n, c) => n + c.activityUsed, 0);

  // ---- Continue de onde parou --------------------------------------------------------------
  const lastGiven = useMemo(() => {
    const seen = new Set<string>();
    const all = perClass.flatMap(({ entry, view }) =>
      view.themeHistory.map((h) => ({ h, className: entry.cls.label, classId: entry.cls.id }))
    );
    const result: { subject: string; theme: string; className: string }[] = [];
    for (const { h, className, classId } of all.sort((a, b) => (a.h.usedAt < b.h.usedAt ? 1 : -1))) {
      const key = `${classId}|${h.subject}|${h.theme}`;
      if (seen.has(key)) continue;
      seen.add(key);
      result.push({
        subject: h.subject === "leitura-diaria" ? "Leitura Diária" : OWN_SUBJECT_LABELS[h.subject],
        theme: h.theme,
        className,
      });
      if (result.length === 3) break;
    }
    return result;
  }, [perClass]);

  const nextUp = useMemo(
    () =>
      coverageByClass
        .flatMap((c) =>
          c.subjects.flatMap((s) =>
            s.pending.slice(0, 1).map((p) => ({
              subject: OWN_SUBJECT_LABELS[s.subject],
              label: p.label,
              className: c.entry.cls.label,
            }))
          )
        )
        .slice(0, 3),
    [coverageByClass]
  );

  // ---- Dica contextual (uma por vez, dispensável) ------------------------------------------
  // Só renderiza depois da hidratação (a casca mostra o carregamento antes), então ler o
  // localStorage na inicialização é seguro e não diverge do HTML do servidor.
  const [dismissedTips, setDismissedTips] = useState<Set<string>>(
    () => new Set(["atividade", "compartilhar", "banco", "turmas"].filter(readDismissed))
  );

  const anyUsedExercises = perClass.some((p) => p.view.usedExercises.length > 0);
  const anyHistory = perClass.some((p) => p.view.themeHistory.length > 0);
  const tip = useMemo(() => {
    const candidates = [
      !multiple
        ? {
            id: "turmas",
            text: "Dá aula em mais de uma turma ou escola? Cadastre cada uma em “Turmas” e veja as aulas de todas no mesmo dia.",
            href: "/turmas",
            cta: "Cadastrar turmas",
          }
        : null,
      !anyUsedExercises && activityTotal > 0
        ? {
            id: "atividade",
            text: "Você ainda não imprimiu nenhuma atividade. Abra uma aula e toque em “Criar atividade” para montar a folha dos alunos.",
            href: "/semana",
            cta: "Ir para a semana",
          }
        : null,
      anyHistory
        ? {
            id: "compartilhar",
            text: "Precisa mostrar o planejamento à coordenação? Na aba Semana, “Compartilhar semana” gera um link só de leitura.",
            href: "/semana",
            cta: "Ver na Semana",
          }
        : null,
      {
        id: "banco",
        text: "Quer escolher o tema da aula você mesma? A Biblioteca lista todos os temas e atividades do seu ano.",
        href: "/biblioteca",
        cta: "Abrir Biblioteca",
      },
    ];
    return candidates.find((c) => c && !dismissedTips.has(c.id)) ?? null;
  }, [multiple, anyUsedExercises, anyHistory, activityTotal, dismissedTips]);

  const openEntry = openCell ? classes.find((c) => c.cls.id === openCell.classId) : undefined;
  const openWeekCell =
    openCell && openEntry ? perClass.find((p) => p.entry.cls.id === openCell.classId)?.week?.days[targetDay]?.[openCell.slot] : undefined;

  return (
    <div className="flex flex-col gap-4">
      {/* ---- Hoje ---- */}
      <Card title={isSchoolDay ? `Hoje · ${DATE_LABEL.format(now)}` : "Próxima aula · segunda-feira"}>
        {todayRows.length === 0 && classesWithoutWeek.length === 0 ? (
          <p className="text-sm text-[var(--text-muted)]">Nenhuma aula cadastrada em {WEEKDAY_LABELS[targetDay]}.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-[var(--border-subtle)]">
            {todayRows.map(({ entry, slot, cell }) => {
              const colors = resolveSubjectColor(colorKeyFor(cell), getClassView(entry.cls.id).subjectColorOverrides);
              const isExternal = cell.kind === "materia-externa";
              const theme = isExternal ? cell.activity.label : cell.plan.theme;
              return (
                <li
                  key={`${entry.cls.id}-${slot}`}
                  className="flex flex-wrap items-center gap-x-3 gap-y-2 py-3 first:pt-0 last:pb-0"
                >
                  <span className="w-8 flex-none text-sm font-medium text-[var(--text-muted)]">{slot}ª</span>
                  {multiple && (
                    <span className="flex-none rounded-[var(--radius-sm)] border border-[var(--border-strong)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--text-strong)] whitespace-nowrap">
                      {entry.cls.label}
                      {multipleSchools ? ` · ${entry.school.name}` : ""}
                    </span>
                  )}
                  <span
                    style={{ background: colors.text, color: "#fff" }}
                    className="flex-none rounded-full px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.1em] whitespace-nowrap"
                  >
                    {cellTitle(cell)}
                  </span>
                  <span className="flex-1 min-w-[10rem] text-sm">
                    {theme ? (
                      <span className="font-medium text-[var(--text-strong)]">{theme}</span>
                    ) : isExternal ? (
                      <span className="italic text-[var(--text-muted)]">Sem anotação</span>
                    ) : (
                      <span className="italic text-[var(--amber-text)]">Sem tema ainda</span>
                    )}
                  </span>
                  {!isExternal && (
                    <span className="flex gap-2">
                      {theme ? (
                        <>
                          <CopyButton text={cell.plan.description} label="Copiar p/ SGP" variant="primary" size="sm" />
                          <Button size="sm" onClick={() => setOpenCell({ classId: entry.cls.id, slot })}>
                            Abrir
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => actions.generateCell(entry.cls.id, targetMonday, targetDay, slot)}
                          >
                            Sortear tema
                          </Button>
                          <Button size="sm" onClick={() => setOpenCell({ classId: entry.cls.id, slot })}>
                            Abrir
                          </Button>
                        </>
                      )}
                    </span>
                  )}
                </li>
              );
            })}

            {/* Turmas que ainda não têm a semana (ou o horário) criada: o convite fica na própria linha. */}
            {classesWithoutWeek.map(({ entry, view }) => (
              <li key={`missing-${entry.cls.id}`} className="flex flex-wrap items-center gap-x-3 gap-y-2 py-3 first:pt-0 last:pb-0">
                <span className="flex-1 min-w-[10rem] text-sm text-[var(--text-muted)]">
                  <strong className="text-[var(--text-strong)]">{entry.cls.label}</strong>
                  {view.timetable ? " — a semana ainda não foi criada." : " — ainda não tem horário de aulas."}
                </span>
                {view.timetable ? (
                  <span className="flex gap-2">
                    <Button size="sm" variant="primary" onClick={() => actions.createBlankWeek(entry.cls.id, targetMonday)}>
                      Criar semana
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => actions.duplicatePrevious(entry.cls.id, targetMonday)}
                      disabled={!view.weeks[getWeekId(addWeeksISO(targetMonday, -1))]}
                    >
                      Duplicar anterior
                    </Button>
                  </span>
                ) : (
                  <Button size="sm" variant="primary" onClick={() => goTo(entry.cls.id, "/grade")}>
                    Montar horário
                  </Button>
                )}
              </li>
            ))}
          </ul>
        )}
        {todayMissing > 0 && (
          <p className="mt-3 text-xs text-[var(--text-muted)]">
            {todayMissing} aula{todayMissing === 1 ? "" : "s"} sem tema {isSchoolDay ? "hoje" : "na segunda"}.
          </p>
        )}
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {/* ---- Semana ---- */}
        <Card title="Esta semana">
          {weekTotals.total > 0 ? (
            <>
              <p className="text-sm mb-2">
                <span className="text-[22px] font-medium text-[var(--text-strong)]">{weekTotals.filled}</span>
                <span className="text-[var(--text-muted)]"> de {weekTotals.total} aulas com tema</span>
              </p>
              <ProgressBar value={weekTotals.filled} total={weekTotals.total} />
            </>
          ) : (
            <p className="text-sm text-[var(--text-muted)]">A semana ainda não foi criada.</p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant={firstWithGaps ? "primary" : "secondary"}
              onClick={() => goTo((firstWithGaps ?? perClass[0]).entry.cls.id, "/semana", targetMonday)}
            >
              {firstWithGaps
                ? multiple
                  ? `Preparar ${firstWithGaps.entry.cls.label}`
                  : "Preparar o resto da semana"
                : "Abrir a semana"}
            </Button>
          </div>
          <p className="mt-3 text-xs text-[var(--text-muted)]">
            {weekId.replace(/^\d+-W/, "Semana ")} · a partir de {formatShortDate(targetMonday)}
          </p>
        </Card>

        {/* ---- Progresso ---- */}
        <Card title="Seu progresso">
          {totalAll > 0 ? (
            <>
              <p className="text-sm mb-2">
                <span className="text-[22px] font-medium text-[var(--text-strong)]">{totalGiven}</span>
                <span className="text-[var(--text-muted)]">
                  {" "}
                  de {totalAll} habilidades já dadas em aula
                  {totalDone > totalGiven && ` · mais ${totalDone - totalGiven} planejadas`}
                </span>
              </p>
              <CoverageBar given={totalGiven} planned={totalDone - totalGiven} total={totalAll} legend />
              {multiple ? (
                <ul className="mt-3 flex flex-col gap-1 text-xs text-[var(--text-muted)]">
                  {coverageByClass.map((c) => (
                    <li key={c.entry.cls.id} className="flex justify-between gap-2">
                      <span>
                        {c.entry.cls.label}
                        {multipleSchools ? ` · ${c.entry.school.name}` : ""}
                      </span>
                      <span className="tabular-nums" title={`${c.given} dadas e ${c.done - c.given} só planejadas, de ${c.total}`}>
                        {c.given}/{c.total}
                        {c.done > c.given && <span className="text-[var(--plum-800)]"> +{c.done - c.given}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                coverageByClass[0].subjects.length > 1 && (
                  <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-[var(--text-muted)]">
                    {coverageByClass[0].subjects.map((c) => (
                      <li key={c.subject} className="flex justify-between gap-2">
                        <span>{OWN_SUBJECT_LABELS[c.subject]}</span>
                        <span className="tabular-nums" title={`${c.given} dadas e ${c.done - c.given} só planejadas, de ${c.total}`}>
                          {c.given}/{c.total}
                          {c.done > c.given && <span className="text-[var(--plum-800)]"> +{c.done - c.given}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </>
          ) : (
            <p className="text-sm text-[var(--text-muted)]">Ainda não há banco de habilidades para o seu ano.</p>
          )}
          {activityTotal > 0 && (
            <p className="mt-3 text-sm">
              <span className="font-medium text-[var(--text-strong)]">{activityUsed}</span>
              <span className="text-[var(--text-muted)]"> de {activityTotal} atividades já impressas</span>
            </p>
          )}
          <p className="mt-3 text-sm">
            <Link href="/progresso">Ver detalhes do progresso →</Link>
          </p>
        </Card>
      </div>

      {/* ---- Continue de onde parou ---- */}
      <Card title="Continue de onde parou">
        {lastGiven.length === 0 && nextUp.length === 0 ? (
          <p className="text-sm text-[var(--text-muted)]">
            Quando você começar a dar temas nas aulas, os últimos conteúdos e os próximos sugeridos aparecem aqui.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-medium text-[var(--text-muted)] mb-1.5">Últimos conteúdos dados</h3>
              {lastGiven.length === 0 ? (
                <p className="text-sm text-[var(--text-muted)]">Nenhum ainda.</p>
              ) : (
                <ul className="flex flex-col gap-1.5 text-sm">
                  {lastGiven.map((l) => (
                    <li key={`${l.className}|${l.subject}|${l.theme}`}>
                      <span className="text-[var(--text-muted)]">
                        {multiple ? `${l.className} · ` : ""}
                        {l.subject} ·{" "}
                      </span>
                      <span className="text-[var(--text-strong)]">{l.theme}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h3 className="text-xs font-medium text-[var(--text-muted)] mb-1.5">Ainda não dados</h3>
              {nextUp.length === 0 ? (
                <p className="text-sm text-[var(--text-muted)]">Você já passou por todas as habilidades do banco. 🎉</p>
              ) : (
                <ul className="flex flex-col gap-1.5 text-sm">
                  {nextUp.map((n) => (
                    <li key={`${n.className}|${n.subject}|${n.label}`}>
                      <span className="text-[var(--text-muted)]">
                        {multiple ? `${n.className} · ` : ""}
                        {n.subject} ·{" "}
                      </span>
                      <span className="text-[var(--text-strong)]">{n.label}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-2 text-sm">
                <Link href="/biblioteca">Ver na Biblioteca →</Link>
              </p>
            </div>
          </div>
        )}
      </Card>

      {tip && (
        <aside className="print:hidden flex flex-wrap items-center gap-x-3 gap-y-1 rounded-[var(--radius-md)] bg-[var(--surface-brand-soft)] px-4 py-3 text-sm">
          <span aria-hidden="true">💡</span>
          <span className="flex-1 min-w-[12rem] text-[var(--text-body)]">{tip.text}</span>
          <Link href={tip.href} className="font-medium">
            {tip.cta}
          </Link>
          <button
            type="button"
            onClick={() => {
              writeDismissed(tip.id);
              setDismissedTips((prev) => new Set(prev).add(tip.id));
            }}
            className="text-xs text-[var(--text-muted)] underline"
          >
            Dispensar
          </button>
        </aside>
      )}

      {openCell && openEntry && openWeekCell && openWeekCell.kind !== "materia-externa" && (
        <LessonDetailModal
          title={cellTitle(openWeekCell)}
          color={resolveSubjectColor(colorKeyFor(openWeekCell), getClassView(openCell.classId).subjectColorOverrides)}
          context={`${multiple ? `${openEntry.cls.label} · ` : ""}${WEEKDAY_LABELS[targetDay]} · ${openCell.slot}ª aula`}
          subjectKey={openWeekCell.kind === "leitura-diaria" ? "leitura-diaria" : openWeekCell.subject}
          plan={openWeekCell.plan}
          isReading={openWeekCell.kind === "leitura-diaria"}
          onChange={(plan) =>
            actions.handleCellChange(
              openCell.classId,
              targetMonday,
              targetDay,
              openCell.slot,
              openWeekCell.kind === "leitura-diaria"
                ? { kind: "leitura-diaria", plan }
                : { kind: "materia-propria", subject: openWeekCell.subject, plan }
            )
          }
          onGenerate={(keyword) => actions.generateCell(openCell.classId, targetMonday, targetDay, openCell.slot, keyword)}
          onClose={() => setOpenCell(null)}
          gradeYear={openEntry.cls.gradeYear}
          usedExercises={getClassView(openCell.classId).usedExercises}
          onMarkExercisesUsed={(subjectKey, theme, exercises) =>
            actions.markExercisesUsed(openCell.classId, subjectKey, theme, exercises)
          }
        />
      )}
    </div>
  );
}
