"use client";

import { useMemo, useState } from "react";
import { GeneratedLessonPlan, OwnSubject, UsedExerciseEntry } from "@/types/plano";
import { SubjectColor } from "@/lib/subjectColors";
import { findMergedActivity, SourcedExercise } from "@/lib/mergedActivityPicker";
import { buildFullLessonPlanText } from "@/lib/fullLessonPlan";
import { FREE_BOOK_LINKS } from "@/data/freeBookLinks";
import { useDialog } from "@/hooks/useDialog";
import { Button } from "./Button";
import { CopyButton } from "./CopyButton";
import { ActivitySheetModal } from "./ActivitySheetModal";
import { SubjectIcon } from "./SubjectIcon";
import { ConfirmModal } from "./ConfirmModal";
import { ReadingPresentationMode } from "./ReadingPresentationMode";

type Props = {
  title: string;
  color: SubjectColor;
  context: string;
  subjectKey: OwnSubject | "leitura-diaria";
  plan: GeneratedLessonPlan;
  isReading: boolean;
  onChange?: (plan: GeneratedLessonPlan) => void;
  onGenerate?: (keyword?: string) => void;
  onClose: () => void;
  /** true na página pública de compartilhamento: some a busca/sorteio e o botão "Editar". */
  readOnly?: boolean;
  /** Desempata atividade/lição de casa quando o mesmo tema existe em mais de um ano. */
  gradeYear?: string;
  /** Questões já impressas antes — sinaliza "já usada" na hora de personalizar a atividade. */
  usedExercises?: UsedExerciseEntry[];
  onMarkExercisesUsed?: (subjectKey: OwnSubject | "leitura-diaria", theme: string, exercises: SourcedExercise[]) => void;
};

function linesToArray(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

const fieldClass =
  "w-full text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-1";

const eyebrowClass = "text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]";

export function LessonDetailModal({
  title,
  color,
  context,
  subjectKey,
  plan,
  isReading,
  onChange,
  onGenerate,
  onClose,
  readOnly = false,
  gradeYear,
  usedExercises,
  onMarkExercisesUsed,
}: Props) {
  // Edição em rascunho: antes cada tecla já gravava no estado e não existia "Cancelar".
  const [draft, setDraft] = useState<GeneratedLessonPlan | null>(null);
  const editing = draft !== null;
  const [showActivitySheet, setShowActivitySheet] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [pendingRegenerate, setPendingRegenerate] = useState(false);
  const merged = findMergedActivity(subjectKey, plan.theme, gradeYear);
  const usedExerciseKeys = useMemo(
    () =>
      new Set(
        (usedExercises ?? [])
          .filter((e) => e.subject === subjectKey && e.theme === plan.theme)
          .map((e) => e.exerciseKey)
      ),
    [usedExercises, subjectKey, plan.theme]
  );

  // Enquanto uma modal filha está aberta por cima, esta deixa de tratar Esc/foco (a filha cuida).
  const childOpen = showActivitySheet || showPresentation || pendingRegenerate;
  const dialogRef = useDialog<HTMLDivElement>({
    onClose: editing ? () => setDraft(null) : onClose,
    active: !childOpen,
  });

  /** "Gerar de novo" sobrescreve o conteúdo direto — só pausa pra confirmar quando existe uma
   * edição manual em risco de ser perdida; sortear de novo em cima do que já veio do banco de
   * temas não precisa de aviso. */
  function handleGenerateClick() {
    if (plan.theme && plan.editedManually) {
      setPendingRegenerate(true);
    } else {
      onGenerate?.(keyword);
    }
  }

  function startEditing() {
    setDraft({ ...plan });
  }

  function saveDraft() {
    if (!draft) return;
    onChange?.({ ...draft, editedManually: true });
    setDraft(null);
  }

  function updateDraft(patch: Partial<GeneratedLessonPlan>) {
    setDraft((d) => (d ? { ...d, ...patch } : d));
  }

  /** O SGP já tem campo próprio pra habilidade/código — só a descrição precisa ser colada nele.
   * O passo a passo é o guia da professora pra conduzir a aula, não entra nesse texto. */
  const sgpText = plan.description;

  const numberBadge = (i: number) => (
    <span
      style={{ background: color.bg, color: color.text }}
      className="flex-none w-5 h-5 rounded-full text-xs font-medium flex items-center justify-center"
    >
      {i + 1}
    </span>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-2 sm:p-4"
      onClick={editing ? undefined : onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lesson-modal-title"
        className="modal-card relative w-full max-w-2xl max-h-[92vh] sm:max-h-[85vh] flex flex-col overflow-hidden rounded-[var(--radius-lg)] bg-white shadow-[var(--shadow-lg)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho fixo: chip da matéria, título e a ação principal ("Copiar p/ SGP") sempre
         * à vista, mesmo com a modal rolada. Antes o botão ficava no fim de uma modal longa. */}
        <div className="flex-none flex items-start justify-between gap-3 px-5 pt-5 pb-3 sm:px-8 sm:pt-6 border-b border-[var(--border-subtle)]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                style={{ background: color.bg, color: color.text }}
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em]"
              >
                <SubjectIcon subjectKey={subjectKey} className="w-3.5 h-3.5" />
                {title}
              </span>
              <span className="text-xs text-[var(--text-muted)]">{context}</span>
            </div>
            <h3
              id="lesson-modal-title"
              className="mt-1.5 text-[22px] sm:text-[26px] leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {editing ? "Editando aula" : plan.theme || "Sem tema ainda"}
            </h3>
          </div>
          <div className="flex-none flex items-center gap-2 mt-0.5">
            {!editing && sgpText && <CopyButton text={sgpText} label="Copiar p/ SGP" variant="primary" size="md" />}
            <button
              type="button"
              onClick={editing ? () => setDraft(null) : onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--ink-400)] hover:text-[var(--ink-700)] hover:bg-[var(--surface-subtle)] text-xl leading-none transition-colors"
              aria-label={editing ? "Cancelar edição" : "Fechar"}
            >
              ×
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5 sm:px-8">
          {editing && draft && !readOnly ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">
                  {isReading ? "Título" : "Tema / assunto"}
                  <input
                    data-autofocus
                    value={draft.theme}
                    onChange={(e) => updateDraft({ theme: e.target.value })}
                    className={`${fieldClass} mt-1`}
                  />
                </label>
              </div>

              {!isReading && (
                <div>
                  <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">
                    Código do currículo
                    <input
                      value={draft.curriculumCode}
                      onChange={(e) => updateDraft({ curriculumCode: e.target.value })}
                      className={`${fieldClass} mt-1 font-mono`}
                    />
                  </label>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">
                  Descrição da atividade (é isso que vai pro SGP)
                  <textarea
                    value={draft.description}
                    onChange={(e) => updateDraft({ description: e.target.value })}
                    rows={3}
                    className={`${fieldClass} mt-1`}
                  />
                </label>
              </div>

              {isReading && (
                <div>
                  <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">
                    Texto para ler em voz alta
                    <textarea
                      value={draft.readingText}
                      onChange={(e) => updateDraft({ readingText: e.target.value })}
                      rows={16}
                      className={`${fieldClass} mt-1 whitespace-pre-wrap`}
                    />
                  </label>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">
                  Materiais (um por linha)
                  <textarea
                    value={draft.materials.join("\n")}
                    onChange={(e) => updateDraft({ materials: linesToArray(e.target.value) })}
                    placeholder="Nenhum material especial"
                    rows={2}
                    className={`${fieldClass} mt-1`}
                  />
                </label>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">
                  Passo a passo da aula (um por linha)
                  <textarea
                    value={draft.steps.join("\n")}
                    onChange={(e) => updateDraft({ steps: linesToArray(e.target.value) })}
                    placeholder="Ainda sem passo a passo"
                    rows={6}
                    className={`${fieldClass} mt-1`}
                  />
                </label>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">
                  Roteiro detalhado (um por linha, pra guiar você em sala — não vai pro SGP)
                  <textarea
                    value={draft.classScript.join("\n")}
                    onChange={(e) => updateDraft({ classScript: linesToArray(e.target.value) })}
                    placeholder="Ainda sem roteiro detalhado"
                    rows={8}
                    className={`${fieldClass} mt-1`}
                  />
                </label>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {!readOnly && (
                <div className="flex flex-wrap items-end gap-2 rounded-[var(--radius-md)] bg-[var(--surface-subtle)] p-3">
                  <div className="flex-1 min-w-[180px]">
                    <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">
                      {plan.theme ? "Sortear outro tema (opcional: busque por palavra)" : "Buscar tema (opcional)"}
                      <input
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleGenerateClick();
                          }
                        }}
                        placeholder='Ex.: "notícia", "divisão"...'
                        className={`${fieldClass} mt-1`}
                      />
                    </label>
                  </div>
                  <Button variant={plan.theme ? "secondary" : "primary"} onClick={handleGenerateClick} data-autofocus={!plan.theme ? true : undefined}>
                    {plan.theme ? "Sortear outro" : "Gerar tema"}
                  </Button>
                </div>
              )}

              {isReading && plan.genre && (
                <div
                  style={{ background: color.bg, color: color.text }}
                  className="inline-block text-xs font-medium uppercase tracking-[0.12em] rounded-full px-3 py-1"
                >
                  {plan.genre}
                </div>
              )}

              {(plan.curriculumCode || plan.description || plan.materials.length > 0) && (
                <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] p-4 sm:p-5 space-y-4">
                  <div className={eyebrowClass}>Para o SGP</div>

                  {!isReading && plan.curriculumCode && (
                    <div>
                      <div className="text-xs font-medium text-[var(--text-muted)] mb-1">Habilidade trabalhada</div>
                      <div
                        style={{ background: color.bg, color: color.text }}
                        className="inline-block text-sm font-mono rounded-full px-3 py-1"
                      >
                        {plan.curriculumCode}
                      </div>
                    </div>
                  )}

                  {plan.description && (
                    <div>
                      <div className="text-xs font-medium text-[var(--text-muted)] mb-1">Descrição e objetivo da aula</div>
                      <p className="text-[15px] leading-[1.55] text-[var(--text-body)] max-w-[62ch]">{plan.description}</p>
                    </div>
                  )}

                  {plan.materials.length > 0 && (
                    <div>
                      <div className="text-xs font-medium text-[var(--text-muted)] mb-2">Recursos / materiais</div>
                      <div className="flex flex-wrap gap-2">
                        {plan.materials.map((m, i) => (
                          <span
                            key={i}
                            className="text-sm rounded-full bg-[var(--surface-subtle)] text-[var(--text-body)] px-3 py-1"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {plan.steps.length > 0 && (
                <div>
                  <div className={`${eyebrowClass} mb-2`}>Passo a passo da aula</div>
                  <ol className="space-y-2.5">
                    {plan.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-[15px] leading-[1.55] text-[var(--text-body)]">
                        {numberBadge(i)}
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {plan.classScript.length > 0 && (
                <div className="rounded-[var(--radius-md)] bg-[var(--surface-subtle)] p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <div className={eyebrowClass}>Roteiro detalhado — passo a passo pra sala</div>
                    <CopyButton text={plan.classScript.join("\n\n")} label="Copiar roteiro" />
                  </div>
                  <ol className="space-y-3">
                    {plan.classScript.map((line, i) => (
                      <li key={i} className="flex gap-3 text-[15px] leading-[1.55] text-[var(--text-body)]">
                        {numberBadge(i)}
                        <span>{line}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {plan.fullLessonPlan && (
                <div className="rounded-[var(--radius-md)] bg-[var(--surface-subtle)] p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <div className={eyebrowClass}>Plano de aula completo</div>
                    <CopyButton text={buildFullLessonPlanText(plan.fullLessonPlan)} label="Copiar plano completo" />
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-[15px] leading-[1.55] text-[var(--text-body)] max-w-[62ch]">
                    {buildFullLessonPlanText(plan.fullLessonPlan)}
                  </pre>
                </div>
              )}

              {isReading && plan.readingText && (
                <div className="rounded-[var(--radius-md)] bg-[var(--surface-subtle)] p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className={eyebrowClass}>Texto para ler em voz alta</div>
                    <div className="flex items-center gap-2">
                      <Button variant="primary" size="sm" onClick={() => setShowPresentation(true)}>
                        Modo leitura (telão)
                      </Button>
                      <CopyButton text={plan.readingText} label="Copiar texto" />
                    </div>
                  </div>
                  <div className="max-w-[62ch] text-[15px] leading-[1.7] text-[var(--text-body)] space-y-3">
                    {plan.readingText.split("\n").map((paragraph, i) => (
                      <p key={i} className="whitespace-pre-wrap">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {isReading && (
                <div>
                  <div className={`${eyebrowClass} mb-2`}>Quer um livro completo? Bibliotecas digitais gratuitas</div>
                  <div className="flex flex-col gap-1.5">
                    {FREE_BOOK_LINKS.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--action-primary)] hover:underline"
                      >
                        {link.title}
                        <span className="text-[var(--text-muted)]"> — {link.description}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {plan.editedManually && (
                <div className="text-xs text-[var(--amber-text)]">Editado manualmente depois de gerado.</div>
              )}
            </div>
          )}
        </div>

        {/* Rodapé fixo: no modo leitura, ações secundárias; no modo edição, Cancelar/Salvar. */}
        <div className="flex-none flex flex-wrap justify-end gap-2 px-5 py-3 sm:px-8 border-t border-[var(--border-subtle)] bg-white">
          {editing ? (
            <>
              <Button variant="secondary" onClick={() => setDraft(null)}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={saveDraft}>
                Salvar alterações
              </Button>
            </>
          ) : (
            <>
              {!readOnly && onChange && plan.theme && (
                <Button
                  variant={plan.givenAt ? "ghost" : "secondary"}
                  className={`sm:mr-auto ${plan.givenAt ? "!text-[var(--green-600)] hover:!bg-[var(--green-100)]" : ""}`}
                  aria-pressed={Boolean(plan.givenAt)}
                  onClick={() => onChange({ ...plan, givenAt: plan.givenAt ? null : new Date().toISOString() })}
                  title={plan.givenAt ? "Clique pra desmarcar" : "Marca o cartão com ✓ na grade"}
                >
                  {plan.givenAt ? "✓ Aula dada · desfazer" : "Marcar como dada"}
                </Button>
              )}
              {!readOnly && onChange && (
                <Button variant="secondary" onClick={startEditing}>
                  Editar
                </Button>
              )}
              {merged && (
                <Button variant="secondary" onClick={() => setShowActivitySheet(true)}>
                  Criar atividade
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      {showActivitySheet && merged && (
        <ActivitySheetModal
          subjectLabel={title}
          theme={plan.theme}
          color={color}
          exercises={merged.exercises}
          onClose={() => setShowActivitySheet(false)}
          usedExerciseKeys={usedExerciseKeys}
          onPrint={(printed) => onMarkExercisesUsed?.(subjectKey, plan.theme, printed)}
          gradeYear={gradeYear}
        />
      )}

      {showPresentation && isReading && plan.readingText && (
        <ReadingPresentationMode
          theme={plan.theme}
          genre={plan.genre}
          text={plan.readingText}
          onClose={() => setShowPresentation(false)}
        />
      )}

      {pendingRegenerate && (
        <ConfirmModal
          title="Sortear tema de novo?"
          message="Essa aula foi editada manualmente — sortear de novo substitui o que você escreveu, sem volta."
          confirmLabel="Sortear outro"
          onConfirm={() => {
            setPendingRegenerate(false);
            onGenerate?.(keyword);
          }}
          onCancel={() => setPendingRegenerate(false)}
        />
      )}
    </div>
  );
}
