"use client";

type Props = {
  hasPreviousWeek: boolean;
  onCreateBlank: () => void;
  onDuplicatePrevious: () => void;
};

export function EmptyWeekPrompt({ hasPreviousWeek, onCreateBlank, onDuplicatePrevious }: Props) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-dashed border-[var(--border-strong)] bg-white p-8 text-center">
      <p className="text-[var(--text-muted)] mb-4">Essa semana ainda não tem plano criado.</p>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={onCreateBlank}
          type="button"
          className="text-sm px-5 py-2 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975]"
        >
          Criar semana em branco
        </button>
        <button
          onClick={onDuplicatePrevious}
          disabled={!hasPreviousWeek}
          type="button"
          className="text-sm px-5 py-2 rounded-full border border-[var(--border-subtle)] bg-white text-[var(--text-body)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)] disabled:opacity-[0.5] disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-[var(--border-subtle)]"
          title={hasPreviousWeek ? undefined : "Não há uma semana anterior salva"}
        >
          Duplicar semana anterior
        </button>
      </div>
    </div>
  );
}
