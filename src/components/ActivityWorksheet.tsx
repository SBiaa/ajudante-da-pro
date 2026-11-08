import { ActivityEntry, ActivityExercise } from "@/types/activity";
import { SubjectColor } from "@/lib/subjectColors";

type Props = {
  subjectLabel: string;
  theme: string;
  color: SubjectColor;
  entry: ActivityEntry;
  kind?: "atividade" | "licao-de-casa";
  /** "medio": folha sóbria pro Ensino Médio (letra normal, alternativas A–E, sem enfeites).
   * Padrão "infantil": a folha original, pensada pra alfabetização. */
  variant?: "infantil" | "medio";
  /** Só no estilo "medio": acrescenta o gabarito das questões objetivas numa página separada. */
  showAnswerKey?: boolean;
};

const LETTERS = ["A", "B", "C", "D", "E", "F"];

const kidFont = "'Comic Sans MS', 'Segoe Print', 'Trebuchet MS', sans-serif";

function ExerciseBlock({ exercise, index, color }: { exercise: ActivityExercise; index: number; color: SubjectColor }) {
  return (
    <div className="mb-5">
      <div className="flex items-start gap-2 mb-2">
        <span
          style={{ background: color.text, color: "white" }}
          className="flex-none w-6 h-6 rounded-full text-[13px] font-bold flex items-center justify-center"
        >
          {index}
        </span>
        <strong className="text-[15px] leading-snug">{exercise.instruction}</strong>
      </div>

      <div className="pl-8">
        {exercise.kind === "lines" &&
          Array.from({ length: exercise.lines }).map((_, i) => (
            <div key={i} className="border-b border-dotted border-[#999] h-[26px]" />
          ))}

        {exercise.kind === "fill-blank" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {exercise.items.map((item, i) => (
              <div
                key={i}
                style={{ fontFamily: "'Courier New', monospace" }}
                className="bg-white border border-[#cdd8ef] rounded-lg px-3.5 py-2.5 text-[15px]"
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {exercise.kind === "word-select" && (
          <div className="flex flex-wrap gap-2">
            {exercise.items.map((item, i) => (
              <span
                key={i}
                className="inline-block bg-[#fff3cd] border border-[#e0c266] rounded-md px-2.5 py-1 font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {exercise.kind === "options" && (
          <div className="space-y-1.5">
            {exercise.options.map((opt, i) => (
              <label key={i} className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-[#999] rounded-sm flex-none" />
                {opt}
              </label>
            ))}
          </div>
        )}

        {exercise.kind === "draw" && (
          <div className="border-2 border-dashed border-[#cdd8ef] rounded-lg h-[150px]" />
        )}

        {exercise.kind === "multiple-choice" && (
          <div className="space-y-1.5">
            {exercise.options.map((opt, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="flex-none font-bold">({LETTERS[i]})</span>
                <span>{opt}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {exercise.note && <div className="pl-8 mt-1 text-xs normal-case text-[#666]">{exercise.note}</div>}
    </div>
  );
}

export function ActivityWorksheet({
  subjectLabel,
  theme,
  color,
  entry,
  kind = "atividade",
  variant = "infantil",
  showAnswerKey = false,
}: Props) {
  const heading = kind === "licao-de-casa" ? "Lição de Casa" : "Atividade";
  if (variant === "medio") {
    return (
      <HighSchoolWorksheet
        heading={heading}
        subjectLabel={subjectLabel}
        theme={theme}
        color={color}
        entry={entry}
        showAnswerKey={showAnswerKey}
      />
    );
  }
  return (
    <div
      style={{ fontFamily: kidFont, color: "#2d2d2d", textTransform: "uppercase", borderColor: color.text }}
      className="max-w-[760px] mx-auto p-6 leading-[1.5] border-[3px] border-dashed rounded-[26px] print:max-w-none print:mx-0 print:flex print:h-full print:flex-col print:box-border print:p-4"
    >
      <div className="text-center border-b-4 border-dashed pb-3.5 mb-6" style={{ borderColor: color.text }}>
        <h1 style={{ color: color.text, fontFamily: kidFont }} className="text-[26px] mb-2">
          {heading} — {subjectLabel}
        </h1>
        <div className="flex flex-wrap justify-center gap-2 text-sm normal-case">
          <span className="border-b border-[#999] px-2 py-0.5 min-w-[160px]">Nome: ________________________</span>
          <span className="border-b border-[#999] px-2 py-0.5 min-w-[110px]">Data: ___/___/______</span>
          <span className="border-b border-[#999] px-2 py-0.5 min-w-[90px]">Turma: _______</span>
        </div>
      </div>

      <div
        style={{ borderColor: color.bg, background: color.bg }}
        className="rounded-2xl border-2 px-5 py-4 mb-6"
      >
        <h2 style={{ color: color.text, fontFamily: kidFont }} className="text-[20px] mb-1">
          {theme}
        </h2>
      </div>

      <div className="print:flex-1 print:flex print:flex-col print:justify-around">
        {entry.exercises.map((exercise, i) => (
          <ExerciseBlock key={i} exercise={exercise} index={i + 1} color={color} />
        ))}
      </div>

      <div className="text-center text-xs normal-case text-[#999] mt-8 print:mt-6">Atividade feita com carinho</div>
    </div>
  );
}

/** Folha do Ensino Médio: cabeçalho de prova, letra de texto comum (sem caixa-alta), questões
 * objetivas com texto-base e alternativas A–E, abertas com linhas. O gabarito, quando pedido, vai
 * numa página própria pra professora não imprimir junto das cópias dos alunos sem querer. */
function HighSchoolWorksheet({
  heading,
  subjectLabel,
  theme,
  color,
  entry,
  showAnswerKey,
}: {
  heading: string;
  subjectLabel: string;
  theme: string;
  color: SubjectColor;
  entry: ActivityEntry;
  showAnswerKey: boolean;
}) {
  const keyed = entry.exercises
    .map((exercise, i) => ({ exercise, number: i + 1 }))
    .filter(({ exercise }) => exercise.kind === "multiple-choice");

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1f1f1f" }} className="max-w-[760px] mx-auto leading-[1.55] text-[14px]">
      <div className="border-b-2 pb-3 mb-5" style={{ borderColor: color.text }}>
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h1 className="text-[20px] font-bold" style={{ color: color.text }}>
            {heading} — {subjectLabel}
          </h1>
          <span className="text-[13px] text-[#555]">{theme}</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[13px]">
          <span>Nome: ______________________________________</span>
          <span>Turma: ________</span>
          <span>Data: ___/___/______</span>
        </div>
      </div>

      <ol className="space-y-5">
        {entry.exercises.map((exercise, i) => (
          <li key={i} className="break-inside-avoid">
            <div className="flex gap-2">
              <span className="flex-none font-bold">{i + 1}.</span>
              <div className="flex-1 min-w-0">
                {exercise.kind === "multiple-choice" && exercise.context && (
                  <p className="mb-2 pl-3 border-l-2 border-[#ccc] text-[13.5px] whitespace-pre-line">{exercise.context}</p>
                )}
                <p className="font-semibold mb-2">{exercise.instruction}</p>
                {exercise.kind === "multiple-choice" && (
                  <div className="space-y-1">
                    {exercise.options.map((opt, j) => (
                      <div key={j} className="flex gap-2">
                        <span className="flex-none">({LETTERS[j]})</span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                )}
                {exercise.kind === "lines" &&
                  Array.from({ length: exercise.lines }).map((_, k) => (
                    <div key={k} className="border-b border-[#bbb] h-[26px]" />
                  ))}
                {exercise.kind === "options" && (
                  <div className="space-y-1">
                    {exercise.options.map((opt, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="inline-block w-3.5 h-3.5 border border-[#777] flex-none" />
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
                {(exercise.kind === "fill-blank" || exercise.kind === "word-select") && (
                  <ul className="list-disc pl-5">
                    {exercise.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                {exercise.kind === "draw" && <div className="border border-dashed border-[#bbb] h-[140px]" />}
                {exercise.note && <p className="mt-1 text-[12px] text-[#666]">{exercise.note}</p>}
              </div>
            </div>
          </li>
        ))}
      </ol>

      {showAnswerKey && keyed.length > 0 && (
        <div className="mt-8 pt-4 border-t-2 border-dashed border-[#999] print:mt-0 print:pt-0 print:border-0 print:break-before-page">
          <h2 className="text-[16px] font-bold mb-2">Gabarito (para o professor) — {theme}</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {keyed.map(({ exercise, number }) =>
              exercise.kind === "multiple-choice" ? (
                <li key={number}>
                  {number}. <strong>{LETTERS[exercise.answer]}</strong>
                </li>
              ) : null
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
