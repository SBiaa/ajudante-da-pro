import { FullLessonPlan } from "@/types/plano";

/**
 * Monta o texto completo do plano de aula (objetos de conhecimento, habilidades, objetivos de
 * aprendizagem, desenvolvimento da aula) no formato markdown que a Dulci mandou como referência —
 * pra copiar/exportar como documento à parte do campo curto de SGP (ver
 * src/lib/sgpDescription.ts, que continua sendo o texto curto pro campo "desenvolvimento da
 * aula" do SGP em si).
 */
export function buildFullLessonPlanText(plan: FullLessonPlan): string {
  const sections = [
    `## OBJETOS DE CONHECIMENTO\n\n${bulletList(plan.knowledgeObjects)}`,
    `## HABILIDADES\n\n${plan.skills}`,
    `## OBJETIVOS DE APRENDIZAGEM\n\nAo final das aulas, os estudantes deverão ser capazes de:\n\n${bulletList(plan.learningObjectives)}`,
    plan.developmentMarkdown,
  ];
  return sections.join("\n\n---\n\n");
}

function bulletList(items: string[]): string {
  return items.map((item) => `* ${item}`).join("\n");
}
