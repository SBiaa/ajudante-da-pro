"use client";

import { useState } from "react";
import {
  ColorKey,
  COLOR_KEYS,
  COLOR_KEY_LABELS,
  SUBJECT_COLORS,
  SubjectColor,
  SubjectColorOverrides,
} from "@/lib/subjectColors";

type Props = {
  overrides: SubjectColorOverrides;
  onSave: (overrides: SubjectColorOverrides) => void;
  onCancel: () => void;
};

export function SubjectColorEditor({ overrides, onSave, onCancel }: Props) {
  const [draft, setDraft] = useState<SubjectColorOverrides>(() => ({ ...overrides }));

  function colorFor(key: ColorKey): SubjectColor {
    return draft[key] ?? SUBJECT_COLORS[key];
  }

  function setBg(key: ColorKey, bg: string) {
    setDraft((prev) => ({ ...prev, [key]: { ...colorFor(key), bg } }));
  }

  function setAccent(key: ColorKey, text: string) {
    setDraft((prev) => ({ ...prev, [key]: { ...colorFor(key), text } }));
  }

  function resetKey(key: ColorKey) {
    setDraft((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)]">
      <h2 className="text-[24px] mb-1">Cores das matérias</h2>
      <p className="text-sm text-[var(--text-muted)] mb-4 max-w-[62ch]">
        Personalize a cor de fundo e de destaque de cada matéria — o card na grade fica com o fundo
        todo dessa cor, para identificar de longe qual aula é qual.
      </p>

      <div className="flex flex-col gap-2">
        {COLOR_KEYS.map((key) => {
          const color = colorFor(key);
          const isCustom = Boolean(draft[key]);
          return (
            <div
              key={key}
              style={{ background: color.bg, borderLeftColor: color.text }}
              className="flex flex-wrap items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] border-l-4 p-3"
            >
              <span className="flex-1 min-w-[160px] text-sm font-medium" style={{ color: color.text }}>
                {COLOR_KEY_LABELS[key]}
              </span>

              <label className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                Fundo
                <input
                  type="color"
                  value={color.bg}
                  onChange={(e) => setBg(key, e.target.value)}
                  className="h-7 w-9 rounded border border-[var(--border-subtle)] cursor-pointer"
                />
              </label>

              <label className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                Destaque
                <input
                  type="color"
                  value={color.text}
                  onChange={(e) => setAccent(key, e.target.value)}
                  className="h-7 w-9 rounded border border-[var(--border-subtle)] cursor-pointer"
                />
              </label>

              <button
                onClick={() => resetKey(key)}
                type="button"
                disabled={!isCustom}
                className="text-xs text-[var(--plum-900)] underline disabled:no-underline disabled:opacity-40 disabled:cursor-default"
              >
                Restaurar padrão
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex gap-2 justify-end">
        <button
          onClick={onCancel}
          type="button"
          className="text-sm px-4 py-1.5 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white"
        >
          Cancelar
        </button>
        <button
          onClick={() => onSave(draft)}
          type="button"
          className="text-sm px-4 py-1.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975]"
        >
          Salvar cores
        </button>
      </div>
    </div>
  );
}
