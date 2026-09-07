/**
 * Texto pro campo "desenvolvimento da aula" do SGP (feedback da Dulci, avaliadora: precisa
 * mostrar atividade prática e produção do aluno, escrito em primeira pessoa do plural — "nós",
 * professora + turma — de um jeito que pareça que a própria professora escreveu, não uma
 * descrição impessoal da habilidade; ver memória feedback_sgp_description_format).
 *
 * Entradas do banco que ainda não têm `sgpDescription` preenchido caem de volta pro
 * `description` puro (formato curto/abstrato antigo).
 */
export function buildSgpDescription(entry: { description: string; sgpDescription?: string }): string {
  return entry.sgpDescription ?? entry.description;
}
