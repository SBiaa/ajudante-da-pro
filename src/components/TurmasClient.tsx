"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/AppShell";
import { Button } from "@/components/Button";
import { availableGradesFor, subjectsWithBank } from "@/data/curriculumBanks";
import {
  DEFAULT_SLOTS_PER_DAY,
  MAX_SLOTS_PER_DAY,
  MIN_SLOTS_PER_DAY,
  OWN_SUBJECT_LABELS,
  OwnSubject,
} from "@/types/plano";
import { GRADE_OPTIONS, NETWORK_OPTIONS, Network } from "@/types/profile";
import { CUSTOM_SUBJECT_SUGGESTIONS, ClassGroup, School, Setup, newId } from "@/types/turma";
import { saveSetupAction } from "@/app/turmas/actions";

const SLOTS_PER_DAY_OPTIONS = Array.from(
  { length: MAX_SLOTS_PER_DAY - MIN_SLOTS_PER_DAY + 1 },
  (_, i) => MIN_SLOTS_PER_DAY + i
);

/** Mantém só as matérias marcadas que têm banco na rede/série (ex.: Ciências some ao passar para o
 * Ensino Médio). Se nenhuma sobrar, marca todas as que têm banco. */
function fitSubjects(subjects: OwnSubject[], network: Network, gradeYear: string): OwnSubject[] {
  const available = subjectsWithBank(network, gradeYear);
  const kept = subjects.filter((s) => available.includes(s));
  return kept.length > 0 ? kept : available;
}

const fieldClass =
  "w-full text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]";

function CustomSubjects({
  network,
  value,
  onChange,
}: {
  network: Network;
  value: string[];
  onChange: (next: string[]) => void;
}) {
  const [draft, setDraft] = useState("");
  const suggestions = CUSTOM_SUBJECT_SUGGESTIONS[network].filter((s) => !value.includes(s));

  function add(label: string) {
    const clean = label.trim();
    if (!clean || value.includes(clean)) return;
    onChange([...value, clean]);
    setDraft("");
  }

  return (
    <div>
      <span className="block text-sm font-medium text-[var(--text-body)] mb-1">Outras matérias (preenchimento manual)</span>
      <p className="text-xs text-[var(--text-muted)] mb-2 max-w-[60ch]">
        Matérias que ainda não têm banco de temas — entram no seu horário, mas o conteúdo você escreve.
      </p>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {value.map((label) => (
          <span
            key={label}
            className="inline-flex items-center gap-1 rounded-full bg-[var(--surface-brand-soft)] px-2.5 py-1 text-xs font-medium"
          >
            {label}
            <button
              type="button"
              aria-label={`Remover ${label}`}
              onClick={() => onChange(value.filter((v) => v !== label))}
              className="text-[var(--text-muted)] hover:text-[var(--red-600)]"
            >
              ×
            </button>
          </span>
        ))}
        {value.length === 0 && <span className="text-xs text-[var(--text-muted)]">Nenhuma ainda.</span>}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => add(s)}
            className="rounded-full border border-dashed border-[var(--border-strong)] px-2.5 py-1 text-xs text-[var(--text-muted)] hover:bg-[var(--surface-subtle)]"
          >
            + {s}
          </button>
        ))}
      </div>
      <div className="flex gap-2 max-w-sm">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add(draft);
            }
          }}
          placeholder="Outra matéria..."
          className={fieldClass}
          maxLength={40}
        />
        <Button size="sm" onClick={() => add(draft)} disabled={!draft.trim()}>
          Adicionar
        </Button>
      </div>
    </div>
  );
}

/** Tela "Turmas": escolas e turmas da professora — rede por escola, ano e matérias por turma. */
export function TurmasClient() {
  const router = useRouter();
  const { setup } = useApp();
  const [draft, setDraft] = useState<Setup>(() => structuredClone(setup));
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [pending, startTransition] = useTransition();

  function update(next: Setup) {
    setDraft(next);
    setSaved(false);
    setError(null);
  }
  function patchSchool(id: string, patch: Partial<School>) {
    update({ ...draft, schools: draft.schools.map((s) => (s.id === id ? { ...s, ...patch } : s)) });
  }
  function patchClass(id: string, patch: Partial<ClassGroup>) {
    update({ ...draft, classes: draft.classes.map((c) => (c.id === id ? { ...c, ...patch } : c)) });
  }
  function changeSchoolNetwork(school: School, network: Network) {
    const available = new Set(availableGradesFor(network));
    update({
      ...draft,
      schools: draft.schools.map((s) => (s.id === school.id ? { ...s, network } : s)),
      // Turma num ano sem banco na nova rede cai no primeiro ano disponível, em vez de quebrar; as
      // matérias são ajustadas ao banco da nova rede.
      classes: draft.classes.map((c) => {
        if (c.schoolId !== school.id) return c;
        const gradeYear = available.has(c.gradeYear) ? c.gradeYear : (availableGradesFor(network)[0] ?? c.gradeYear);
        return { ...c, gradeYear, subjects: fitSubjects(c.subjects, network, gradeYear) };
      }),
    });
  }
  function addClass(schoolId: string) {
    const school = draft.schools.find((s) => s.id === schoolId)!;
    const grade = availableGradesFor(school.network)[0] ?? "6-ano";
    const label = GRADE_OPTIONS.find((g) => g.value === grade)?.label ?? "Nova turma";
    update({
      ...draft,
      classes: [
        ...draft.classes,
        { id: newId("turma"), schoolId, gradeYear: grade, label, subjects: subjectsWithBank(school.network, grade), customSubjects: [] },
      ],
    });
  }
  function changeClassGrade(cls: ClassGroup, network: Network, gradeYear: string) {
    patchClass(cls.id, { gradeYear, subjects: fitSubjects(cls.subjects, network, gradeYear) });
  }
  function removeClass(id: string) {
    update({ ...draft, classes: draft.classes.filter((c) => c.id !== id) });
  }
  function addSchool() {
    const id = newId("escola");
    const network: Network = "estado";
    const grade = availableGradesFor(network)[0] ?? "6-ano";
    update({
      ...draft,
      schools: [...draft.schools, { id, name: `Escola ${draft.schools.length + 1}`, network, slotsPerDay: DEFAULT_SLOTS_PER_DAY }],
      classes: [
        ...draft.classes,
        {
          id: newId("turma"),
          schoolId: id,
          gradeYear: grade,
          label: GRADE_OPTIONS.find((g) => g.value === grade)?.label ?? "Nova turma",
          subjects: subjectsWithBank(network, grade),
          customSubjects: [],
        },
      ],
    });
  }
  function removeSchool(id: string) {
    update({
      ...draft,
      schools: draft.schools.filter((s) => s.id !== id),
      classes: draft.classes.filter((c) => c.schoolId !== id),
    });
  }

  function save() {
    startTransition(async () => {
      const result = await saveSetupAction(draft);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setDraft(structuredClone(result.setup));
      setSaved(true);
      router.refresh();
    });
  }

  return (
    <div className="max-w-3xl">
      <h2 className="text-[24px] mb-1">Escolas e turmas</h2>
      <p className="text-sm text-[var(--text-muted)] mb-5 max-w-[62ch]">
        Cadastre cada turma em que você dá aula. A rede de ensino é da escola; o ano e as matérias são de cada turma.
        Cada turma tem o próprio horário, as próprias semanas e o próprio progresso.
      </p>

      <div className="flex flex-col gap-5">
        {draft.schools.map((school) => {
          const schoolClasses = draft.classes.filter((c) => c.schoolId === school.id);
          const hasPrimary = schoolClasses.some((c) => c.id === draft.primaryClassId);
          const available = new Set(availableGradesFor(school.network));
          return (
            <section
              key={school.id}
              className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-4 sm:p-5 shadow-[var(--shadow-sm)]"
            >
              <div className="flex flex-wrap items-end gap-3 mb-4">
                <div className="flex-1 min-w-[12rem]">
                  <label htmlFor={`school-${school.id}`} className="block text-sm font-medium mb-1">
                    Nome da escola
                  </label>
                  <input
                    id={`school-${school.id}`}
                    value={school.name}
                    onChange={(e) => patchSchool(school.id, { name: e.target.value })}
                    className={fieldClass}
                    maxLength={60}
                  />
                </div>
                <div className="min-w-[14rem]">
                  <label htmlFor={`net-${school.id}`} className="block text-sm font-medium mb-1">
                    Rede de ensino
                  </label>
                  <select
                    id={`net-${school.id}`}
                    value={school.network}
                    onChange={(e) => changeSchoolNetwork(school, e.target.value as Network)}
                    className={fieldClass}
                  >
                    {NETWORK_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-32">
                  <label htmlFor={`slots-${school.id}`} className="block text-sm font-medium mb-1">
                    Aulas por dia
                  </label>
                  <select
                    id={`slots-${school.id}`}
                    value={school.slotsPerDay}
                    onChange={(e) => patchSchool(school.id, { slotsPerDay: Number(e.target.value) })}
                    className={fieldClass}
                    title="Escola de tempo integral (PEI) costuma ter 8 ou 9 aulas"
                  >
                    {SLOTS_PER_DAY_OPTIONS.map((n) => (
                      <option key={n} value={n}>
                        {n} aulas
                      </option>
                    ))}
                  </select>
                </div>
                {!hasPrimary && (
                  <Button variant="danger" size="sm" onClick={() => removeSchool(school.id)}>
                    Remover escola
                  </Button>
                )}
              </div>

              <div className="flex flex-col gap-4">
                {schoolClasses.map((cls) => {
                  const isPrimary = cls.id === draft.primaryClassId;
                  return (
                    <div key={cls.id} className="rounded-[var(--radius-md)] bg-[var(--surface-subtle)] p-3 sm:p-4">
                      <div className="flex flex-wrap items-end gap-3 mb-3">
                        <div className="w-36">
                          <label htmlFor={`label-${cls.id}`} className="block text-sm font-medium mb-1">
                            Turma
                          </label>
                          <input
                            id={`label-${cls.id}`}
                            value={cls.label}
                            onChange={(e) => patchClass(cls.id, { label: e.target.value })}
                            placeholder="7ºA"
                            className={fieldClass}
                            maxLength={30}
                          />
                        </div>
                        <div className="w-40">
                          <label htmlFor={`grade-${cls.id}`} className="block text-sm font-medium mb-1">
                            Ano/série
                          </label>
                          <select
                            id={`grade-${cls.id}`}
                            value={cls.gradeYear}
                            onChange={(e) => changeClassGrade(cls, school.network, e.target.value)}
                            className={fieldClass}
                          >
                            {GRADE_OPTIONS.map((g) => (
                              <option key={g.value} value={g.value} disabled={!available.has(g.value)}>
                                {g.label}
                                {!available.has(g.value) ? " (em breve)" : ""}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex-1" />
                        {isPrimary ? (
                          <span className="text-xs text-[var(--text-muted)]" title="Guarda os dados que você já tinha antes de cadastrar turmas">
                            Turma principal
                          </span>
                        ) : (
                          <Button variant="danger" size="sm" onClick={() => removeClass(cls.id)}>
                            Remover turma
                          </Button>
                        )}
                      </div>

                      <fieldset className="mb-3">
                        <legend className="text-sm font-medium mb-1">Matérias com banco de temas que você dá nessa turma</legend>
                        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                          {subjectsWithBank(school.network, cls.gradeYear).map((subject: OwnSubject) => (
                            <label key={subject} className="inline-flex items-center gap-2 text-sm">
                              <input
                                type="checkbox"
                                checked={cls.subjects.includes(subject)}
                                onChange={(e) =>
                                  patchClass(cls.id, {
                                    subjects: e.target.checked
                                      ? [...cls.subjects, subject]
                                      : cls.subjects.filter((s) => s !== subject),
                                  })
                                }
                                className="accent-[var(--action-primary)]"
                              />
                              {OWN_SUBJECT_LABELS[subject]}
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <CustomSubjects
                        network={school.network}
                        value={cls.customSubjects}
                        onChange={(customSubjects) => patchClass(cls.id, { customSubjects })}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="mt-4">
                <Button size="sm" onClick={() => addClass(school.id)}>
                  + Adicionar turma nesta escola
                </Button>
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-4">
        <Button onClick={addSchool}>+ Adicionar outra escola</Button>
      </div>

      {error && (
        <div role="alert" className="mt-4 text-sm text-[var(--red-600)] bg-[var(--red-100)] rounded-[var(--radius-md)] px-3 py-2">
          {error}
        </div>
      )}
      {saved && !error && (
        <div className="mt-4 text-sm text-[var(--green-600)] bg-[var(--green-100)] rounded-[var(--radius-md)] px-3 py-2">
          Salvo. Agora monte o horário de cada turma nova em <strong>Semana → Editar grade</strong>.
        </div>
      )}

      <div className="mt-5 flex gap-2">
        <Button variant="primary" onClick={save} loading={pending}>
          {pending ? "Salvando..." : "Salvar turmas"}
        </Button>
        <Button variant="secondary" onClick={() => router.push("/")}>
          Voltar ao início
        </Button>
      </div>
    </div>
  );
}
