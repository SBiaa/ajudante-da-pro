"use client";

import { ManualActivity } from "@/types/plano";
import { CopyButton } from "./CopyButton";
import { SUBJECT_COLORS, SubjectColor } from "@/lib/subjectColors";
import { SubjectIcon } from "./SubjectIcon";

type Props = {
  label: string;
  activity: ManualActivity;
  color?: SubjectColor;
  onChange?: (activity: ManualActivity) => void;
  readOnly?: boolean;
};

export function ExternalCard({ label, activity, color = SUBJECT_COLORS.externa, onChange, readOnly = false }: Props) {
  return (
    <div className="flex flex-col gap-1.5 h-full">
      <span
        style={{ background: color.text, color: "#ffffff" }}
        className="inline-flex items-center gap-1 self-start rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] whitespace-nowrap"
      >
        <SubjectIcon subjectKey="externa" />
        {label || "Outra atividade"}
      </span>
      {readOnly ? (
        <p className="text-xs text-[var(--text-body)] flex-1 whitespace-pre-wrap">
          {activity.label || <span className="italic text-[var(--text-muted)]">Sem atividade registrada</span>}
        </p>
      ) : (
        <textarea
          value={activity.label}
          onChange={(e) => onChange?.({ label: e.target.value })}
          placeholder="Atividade do dia (opcional)"
          rows={4}
          className="text-xs border border-[var(--border-subtle)] rounded-[var(--radius-md)] px-2 py-1 resize-none flex-1 focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-1"
        />
      )}
      <div className="mt-auto flex justify-end">
        <CopyButton text={activity.label} label="Copiar" />
      </div>
    </div>
  );
}
