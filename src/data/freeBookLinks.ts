// Links externos para bibliotecas digitais gratuitas e legais (domínio público ou distribuição
// autorizada), para quando a professora quiser um livro completo além do banco de Leitura Diária.
// Só links verificados e confiáveis — nada de acervo pirata. Nenhum desses sites é acessado pelo
// app: são apenas atalhos que abrem numa aba nova, sem custo e sem depender de nenhuma API.

export type FreeBookLink = {
  title: string;
  url: string;
  description: string;
};

export const FREE_BOOK_LINKS: FreeBookLink[] = [
  {
    title: "Domínio Público (MEC)",
    url: "https://www.dominiopublico.gov.br/",
    description: "Biblioteca digital do governo federal com acervo de literatura infantil em domínio público, livre para ler e baixar.",
  },
  {
    title: "Acervo Digital SME-SP",
    url: "https://acervodigital.sme.prefeitura.sp.gov.br/",
    description: "Materiais e publicações da própria Secretaria Municipal de Educação de SP, incluindo recursos do Programa Ler e Escrever.",
  },
  {
    title: "Leia com uma Criança (Itaú Social)",
    url: "https://www.itausocial.org.br/leiacomumacrianca/",
    description: "Programa do Itaú Social de incentivo à leitura infantil, com títulos de literatura distribuídos gratuitamente a escolas.",
  },
];
