import { ActivityEntry, ActivityExercise } from "@/types/activity";
import { SubjectColor } from "@/lib/subjectColors";

type Props = {
  subjectLabel: string;
  theme: string;
  curriculumCode: string;
  color: SubjectColor;
  entry: ActivityEntry;
};

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
      </div>

      {exercise.note && <div className="pl-8 mt-1 text-xs normal-case text-[#666]">{exercise.note}</div>}
    </div>
  );
}

export function ActivityWorksheet({ subjectLabel, theme, curriculumCode, color, entry }: Props) {
  return (
    <div
      style={{ fontFamily: kidFont, color: "#2d2d2d", textTransform: "uppercase" }}
      className="max-w-[760px] mx-auto p-6 leading-[1.5]"
    >
      <div className="text-center border-b-4 border-dashed pb-3.5 mb-6" style={{ borderColor: color.text }}>
        <h1 style={{ color: color.text, fontFamily: kidFont }} className="text-[26px] mb-2">
          Atividade — {subjectLabel}
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
        {curriculumCode && (
          <div style={{ color: color.text }} className="text-xs normal-case font-mono tracking-wide">
            {curriculumCode}
          </div>
        )}
      </div>

      {entry.exercises.map((exercise, i) => (
        <ExerciseBlock key={i} exercise={exercise} index={i + 1} color={color} />
      ))}

      <div className="text-center text-xs normal-case text-[#999] mt-8">Atividade feita com carinho</div>
    </div>
  );
}
