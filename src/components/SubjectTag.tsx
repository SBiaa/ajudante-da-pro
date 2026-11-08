import { ColorKey, SubjectColor } from "@/lib/subjectColors";
import { SubjectIcon } from "./SubjectIcon";

type Props = {
  label: string;
  subjectKey: ColorKey;
  color: SubjectColor;
  /** "solid" no cartão preenchido; "outline" no horário vazio, pra pesar menos. */
  variant?: "solid" | "outline";
};

/** Etiqueta da matéria nos cartões da grade. Texto normal, não CAIXA ALTA: com 30 cartões
 * na tela, tudo em maiúsculas espaçadas virava ruído e nada se destacava. */
export function SubjectTag({ label, subjectKey, color, variant = "solid" }: Props) {
  const style =
    variant === "solid"
      ? { background: color.text, color: "#ffffff", borderColor: color.text }
      : { background: "transparent", color: color.text, borderColor: color.text };
  return (
    <span
      style={style}
      className="self-start inline-flex max-w-full items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold"
    >
      <SubjectIcon subjectKey={subjectKey} />
      <span className="truncate">{label}</span>
    </span>
  );
}
