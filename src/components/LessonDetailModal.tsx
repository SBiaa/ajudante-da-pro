"use client";

import { useEffect, useState } from "react";
import { GeneratedLessonPlan, OwnSubject } from "@/types/plano";
import { SubjectColor } from "@/lib/subjectColors";
import { findActivity } from "@/lib/activityPicker";
import { findHomework } from "@/lib/homeworkPicker";
import { FREE_BOOK_LINKS } from "@/data/freeBookLinks";
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
};

function linesToArray(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

const fieldClass =
  "w-full text-sm border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-1";

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
}: Props) {
  const [editing, setEditing] = useState(false);
  const [showActivity, setShowActivity] = useState(false);
  const [showHomework, setShowHomework] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [pendingRegenerate, setPendingRegenerate] = useState(false);
  const activity = findActivity(subjectKey, plan.theme);
  const homework = findHomework(subjectKey, plan.theme);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" && !showActivity && !showHomework && !showPresentation) onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, showActivity, showHomework, showPresentation]);

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

  /** O SGP pede o desenvolvimento da aula: o que o professor faz E o que o aluno produz — não
   * basta o resumo da habilidade (curto e abstrato demais), por isso o passo a passo entra junto. */
  const sgpText = [plan.description, plan.steps.join("\n")].filter(Boolean).join("\n\n");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink-900)]/50 p-4" onClick={onClose}>
      <div
        className="modal-card relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[var(--radius-lg)] bg-white p-6 sm:p-8 shadow-[var(--shadow-lg)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <span
              style={{ background: color.bg, color: color.text }}
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em]"
            >
              <SubjectIcon subjectKey={subjectKey} className="w-3.5 h-3.5" />
              {title}
            </span>
            <div className="text-xs text-[var(--text-muted)] mt-1.5">{context}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[var(--ink-400)] hover:text-[var(--ink-700)] text-xl leading-none transition-colors"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        {!readOnly && (
          <div className="flex flex-wrap items-end gap-2 rounded-[var(--radius-md)] bg-[var(--surface-subtle)] p-3 mb-5">
            <div className="flex-1 min-w-[180px]">
              <div className="text-xs font-medium text-[var(--text-muted)] mb-1">Buscar tema (opcional)</div>
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
                className={fieldClass}
              />
            </div>
            <button
              type="button"
              onClick={handleGenerateClick}
              className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975] whitespace-nowrap"
            >
              {plan.theme ? "Gerar de novo" : "Gerar"}
            </button>
          </div>
        )}

        {editing && !readOnly ? (
          <div className="space-y-4">
            <div>
              <div className="text-xs font-medium text-[var(--text-muted)] mb-1">{isReading ? "Título" : "Tema / assunto"}</div>
              <input
                value={plan.theme}
                onChange={(e) => onChange?.({ ...plan, theme: e.target.value, editedManually: true })}
                className={fieldClass}
              />
            </div>

            {!isReading && (
              <div>
                <div className="text-xs font-medium text-[var(--text-muted)] mb-1">Código do currículo</div>
                <input
                  value={plan.curriculumCode}
                  onChange={(e) => onChange?.({ ...plan, curriculumCode: e.target.value, editedManually: true })}
                  className={`${fieldClass} font-mono`}
                />
              </div>
            )}

            <div>
              <div className="text-xs font-medium text-[var(--text-muted)] mb-1">Descrição da atividade (SGP)</div>
              <textarea
                value={plan.description}
                onChange={(e) => onChange?.({ ...plan, description: e.target.value, editedManually: true })}
                rows={2}
                className={fieldClass}
              />
            </div>

            {isReading && (
              <div>
                <div className="text-xs font-medium text-[var(--text-muted)] mb-1">Texto para ler em voz alta</div>
                <textarea
                  value={plan.readingText}
                  onChange={(e) => onChange?.({ ...plan, readingText: e.target.value, editedManually: true })}
                  rows={16}
                  className={`${fieldClass} whitespace-pre-wrap`}
                />
              </div>
            )}

            <div>
              <div className="text-xs font-medium text-[var(--text-muted)] mb-1">Materiais (um por linha)</div>
              <textarea
                value={plan.materials.join("\n")}
                onChange={(e) => onChange?.({ ...plan, materials: linesToArray(e.target.value), editedManually: true })}
                placeholder="Nenhum material especial"
                rows={2}
                className={fieldClass}
              />
            </div>

            <div>
              <div className="text-xs font-medium text-[var(--text-muted)] mb-1">Passo a passo da aula (um por linha)</div>
              <textarea
                value={plan.steps.join("\n")}
                onChange={(e) => onChange?.({ ...plan, steps: linesToArray(e.target.value), editedManually: true })}
                placeholder="Ainda sem passo a passo"
                rows={6}
                className={fieldClass}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)]"
              >
                Concluir edição
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <h3 className="text-[26px]" style={{ fontFamily: "var(--font-display)" }}>
              {plan.theme || "—"}
            </h3>

            {isReading && plan.genre && (
              <div
                style={{ background: color.bg, color: color.text }}
                className="inline-block text-xs font-medium uppercase tracking-[0.14em] rounded-full px-3 py-1"
              >
                {plan.genre}
              </div>
            )}

            {(plan.curriculumCode || plan.description || plan.materials.length > 0 || plan.steps.length > 0) && (
              <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] p-4 sm:p-5 space-y-4">
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Para o SGP
                </div>

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

                {plan.steps.length > 0 && (
                  <div>
                    <div className="text-xs font-medium text-[var(--text-muted)] mb-2">
                      Metodologia — passo a passo da aula
                    </div>
                    <ol className="space-y-2.5">
                      {plan.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-[15px] leading-[1.55] text-[var(--text-body)]">
                          <span
                            style={{ background: color.bg, color: color.text }}
                            className="flex-none w-5 h-5 rounded-full text-xs font-medium flex items-center justify-center"
                          >
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            )}

            {isReading && plan.readingText && (
              <div className="rounded-[var(--radius-md)] bg-[var(--surface-subtle)] p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    Texto para ler em voz alta
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowPresentation(true)}
                      className="text-sm px-3 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)]"
                    >
                      Modo leitura (telão)
                    </button>
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
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)] mb-2">
                  Quer um livro completo? Bibliotecas digitais gratuitas
                </div>
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
              <div className="text-xs text-[var(--amber-600)]">Editado manualmente depois de gerado.</div>
            )}

            <div className="flex flex-wrap justify-end gap-2 pt-2">
              {!readOnly && (
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white"
                >
                  Editar
                </button>
              )}
              <CopyButton text={sgpText} label="Copiar p/ SGP" />
              {activity && (
                <button
                  type="button"
                  onClick={() => setShowActivity(true)}
                  className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)]"
                >
                  Criar atividade
                </button>
              )}
              {homework && (
                <button
                  type="button"
                  onClick={() => setShowHomework(true)}
                  className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)]"
                >
                  Criar lição de casa
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:bg-[var(--surface-subtle)]"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>

      {showActivity && activity && (
        <ActivitySheetModal
          subjectLabel={title}
          theme={plan.theme}
          curriculumCode={plan.curriculumCode}
          color={color}
          entry={activity}
          onClose={() => setShowActivity(false)}
        />
      )}

      {showHomework && homework && (
        <ActivitySheetModal
          subjectLabel={title}
          theme={plan.theme}
          curriculumCode={plan.curriculumCode}
          color={color}
          entry={homework}
          kind="licao-de-casa"
          onClose={() => setShowHomework(false)}
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
          confirmLabel="Gerar de novo"
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
