/**
 * Ilustração genérica por gênero textual da Leitura Diária — uma imagem por gênero (não por
 * história), reaproveitada em todas as entradas daquele gênero. Gerada uma vez via IA (Recraft,
 * créditos Magnific) e salva localmente como .webp; depois disso o app não faz nenhuma chamada
 * paga — é um asset estático igual aos outros. Ver [[plano-aula-no-paid-api]] na memória.
 */
export const GENRE_ILLUSTRATIONS: Record<string, string> = {
  "fábula": "/illustrations/genres/fabula.webp",
  conto: "/illustrations/genres/conto.webp",
  lenda: "/illustrations/genres/lenda.webp",
  "história original": "/illustrations/genres/historia-original.webp",
  poema: "/illustrations/genres/poema.webp",
  haicai: "/illustrations/genres/haicai.webp",
  parlenda: "/illustrations/genres/parlenda.webp",
  quadrinha: "/illustrations/genres/quadrinha.webp",
  "trava-língua": "/illustrations/genres/trava-lingua.webp",
  adivinha: "/illustrations/genres/adivinha.webp",
  cantiga: "/illustrations/genres/cantiga.webp",
  "notícia": "/illustrations/genres/noticia.webp",
  receita: "/illustrations/genres/receita.webp",
  carta: "/illustrations/genres/carta.webp",
  bilhete: "/illustrations/genres/bilhete.webp",
  convite: "/illustrations/genres/convite.webp",
  "cartão-postal": "/illustrations/genres/cartao-postal.webp",
  "verbete de curiosidade": "/illustrations/genres/verbete-de-curiosidade.webp",
  "regra de brincadeira": "/illustrations/genres/regra-de-brincadeira.webp",
  mito: "/illustrations/genres/mito.webp",
  "tirinha/HQ": "/illustrations/genres/tirinha-hq.webp",
  "relato de experiência": "/illustrations/genres/relato-de-experiencia.webp",
  "poema de cordel": "/illustrations/genres/poema-de-cordel.webp",
  limerique: "/illustrations/genres/limerique.webp",
  "conto acumulativo": "/illustrations/genres/conto-acumulativo.webp",
  "conto de assombração": "/illustrations/genres/conto-de-assombracao.webp",
  reportagem: "/illustrations/genres/reportagem.webp",
  "indicação literária": "/illustrations/genres/indicacao-literaria.webp",
};

export function getGenreIllustration(genre: string): string | undefined {
  return GENRE_ILLUSTRATIONS[genre];
}
