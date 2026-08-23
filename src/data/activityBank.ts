// Banco de atividades impressas: para cada tema do banco de temas (src/data/themeBank.ts),
// uma folha de exercícios pronta para o aluno, vinculada ao mesmo "theme" exato usado lá.
// Curada manualmente por matéria — sem geração via IA em tempo real, mesmo espírito do
// banco de temas (ver src/data/themeBank.ts). Piloto: só Língua Portuguesa por enquanto;
// as outras matérias ficam com a lista vazia até serem escritas.

import { OwnSubject } from "@/types/plano";
import { ActivityEntry } from "@/types/activity";

export const ACTIVITY_BANK: Record<OwnSubject, ActivityEntry[]> = {
  matematica: [],
  "lingua-portuguesa": [
    {
      theme: "Lista de nomes da turma e dos livros da sala",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de 3 colegas da sua turma que começam com letras diferentes:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule apenas os nomes de pessoas (e não de objetos):",
          items: ["ANA", "LIVRO", "CADERNO", "PEDRO", "MESA", "JOÃO", "LÁPIS", "MARIA"],
        },
        {
          kind: "lines",
          instruction: "Escreva o título de um livro da sala de aula que você gosta:",
          lines: 1,
        },
        { kind: "draw", instruction: "Desenhe a capa do livro que você escolheu:" },
      ],
    },
    {
      theme: "Organizando o cotidiano com listas",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de um livro que você gostaria de pegar emprestado na sala:",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de 2 colegas do seu grupo de trabalho:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Para que serve uma lista de nomes?",
          options: [
            "Para organizar quem vai fazer cada coisa",
            "Para desenhar",
            "Para jogar bola",
          ],
        },
      ],
    },
    {
      theme: "Leitura de parlendas e trava-línguas",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva uma parlenda ou trava-língua que você sabe de cor:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que rimam com \"GATO\":",
          items: ["SAPATO", "MESA", "RATO", "BOLA", "PATO", "LIVRO"],
        },
        {
          kind: "draw",
          instruction:
            "Treine ler em voz alta apontando cada palavra com o dedo. Depois, desenhe algo que a parlenda faz você lembrar:",
        },
      ],
    },
    {
      theme: "Lendo placas, rótulos e histórias em quadrinhos",
      exercises: [
        {
          kind: "options",
          instruction:
            "O que você acha que está escrito numa placa com o desenho de uma pessoa atravessando a rua?",
          options: ["Faixa de pedestre", "Silêncio, hospital", "Proibido fumar"],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de 3 rótulos de embalagens que você conhece em casa:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um quadrinho (com balão de fala) contando o que você fez hoje de manhã:",
        },
      ],
    },
    {
      theme: "Roda de contos de fadas e fábulas de diferentes culturas",
      exercises: [
        { kind: "lines", instruction: "Qual conto de fadas ou fábula você ouviu na roda? Escreva o nome:", lines: 1 },
        { kind: "lines", instruction: "O que aconteceu no final da história?", lines: 3 },
        { kind: "lines", instruction: "De que país ou cultura veio essa história?", lines: 1 },
        { kind: "draw", instruction: "Desenhe o personagem de que você mais gostou:" },
      ],
    },
    {
      theme: "Cantigas e parlendas da tradição oral",
      exercises: [
        { kind: "lines", instruction: "Escreva o nome de uma cantiga de roda que você cantou hoje:", lines: 1 },
        { kind: "lines", instruction: "Escreva um pedacinho (um verso) da cantiga, de cor:", lines: 2 },
        {
          kind: "options",
          instruction: "Você já conhecia essa cantiga de casa ou da família?",
          options: ["Sim", "Não", "Não tenho certeza"],
        },
        { kind: "draw", instruction: "Desenhe você e seus colegas cantando em roda:" },
      ],
    },
    {
      theme: "Relatos históricos e verbetes de enciclopédia",
      exercises: [
        { kind: "lines", instruction: "Qual foi o assunto do verbete de enciclopédia que você ouviu?", lines: 1 },
        { kind: "lines", instruction: "Escreva 3 informações que você aprendeu:", lines: 3 },
        { kind: "lines", instruction: "Tinha alguma palavra difícil no texto? Qual?", lines: 1 },
      ],
    },
    {
      theme: "Escrevendo listas de palavras",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva uma lista com o nome de 5 brinquedos ou animais que você gosta:",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Circule, na lista de nomes da turma, um nome que comece com a mesma letra do seu:",
          items: ["ANA", "BEATRIZ", "CARLOS", "DANIEL", "ELISA", "FELIPE", "GABRIEL", "HELOÍSA"],
        },
        { kind: "lines", instruction: "Agora copie sua lista com letra bem caprichada:", lines: 5 },
      ],
    },
    {
      theme: "Escrevendo parlendas e quadrinhas de cor",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva de cor uma parlenda ou quadrinha que você sabe (do jeito que você conseguir):",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Escolha 3 palavras da parlenda que você escreveu e separe as sílabas:",
          items: ["1. __________", "2. __________", "3. __________"],
        },
        { kind: "draw", instruction: "Desenhe algo que a parlenda faz você imaginar:" },
      ],
    },
    {
      theme: "Recontando histórias conhecidas",
      exercises: [
        { kind: "lines", instruction: "Qual história você recontou hoje? Escreva o título:", lines: 1 },
        { kind: "lines", instruction: "Quem eram os personagens?", lines: 2 },
        { kind: "lines", instruction: "Onde a história acontecia?", lines: 1 },
        { kind: "draw", instruction: "Desenhe a parte da história que você mais gostou de recontar:" },
      ],
    },
    {
      theme: "Reescrevendo contos conhecidos",
      exercises: [
        { kind: "lines", instruction: "Escreva o começo do conto que você reescreveu:", lines: 3 },
        { kind: "lines", instruction: "Escreva o que aconteceu no meio da história:", lines: 3 },
        { kind: "lines", instruction: "Escreva como a história terminou:", lines: 3 },
      ],
    },
    {
      theme: "Relato escrito de um passeio da turma",
      exercises: [
        { kind: "lines", instruction: "O que aconteceu primeiro no passeio da turma?", lines: 2 },
        { kind: "lines", instruction: "O que aconteceu depois?", lines: 2 },
        { kind: "lines", instruction: "O que aconteceu por último?", lines: 2 },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam tempo:",
          items: ["PRIMEIRO", "CADEIRA", "DEPOIS", "JANELA", "NO FINAL", "LIVRO", "ANTES", "MESA"],
        },
      ],
    },
    {
      theme: "Escrevendo bilhetes e cartões",
      exercises: [
        { kind: "lines", instruction: "Para quem você vai escrever o bilhete?", lines: 1 },
        { kind: "lines", instruction: "Escreva a mensagem do seu bilhete:", lines: 5 },
        { kind: "lines", instruction: "Não esqueça de assinar! Escreva seu nome:", lines: 1 },
      ],
    },
    {
      theme: "Escrevendo regras de brincadeiras e receitas",
      exercises: [
        { kind: "lines", instruction: "Escolha uma brincadeira que você conhece e escreva o nome dela:", lines: 1 },
        {
          kind: "lines",
          instruction: "Escreva as regras da brincadeira, passo a passo (1º, 2º, 3º...):",
          lines: 5,
        },
        { kind: "draw", instruction: "Desenhe como se brinca:" },
      ],
    },
    {
      theme: "Contação de histórias de diferentes culturas",
      exercises: [
        { kind: "lines", instruction: "De que cultura ou lugar veio a história que você ouviu?", lines: 1 },
        { kind: "lines", instruction: "O que você mais gostou nessa história?", lines: 2 },
        {
          kind: "options",
          instruction: "Você gostaria de contar uma história para a turma na próxima roda?",
          options: ["Sim", "Não", "Talvez"],
        },
      ],
    },
    {
      theme: "Explicando o que aprendemos",
      exercises: [
        { kind: "lines", instruction: "Escolha um tema que você aprendeu em outra matéria e escreva o nome:", lines: 1 },
        { kind: "lines", instruction: "Explique com suas palavras o que você aprendeu:", lines: 3 },
        { kind: "lines", instruction: "Escreva uma pergunta que você faria para um colega sobre esse tema:", lines: 2 },
      ],
    },
    {
      theme: "Roda de conversa sobre temas do dia",
      exercises: [
        { kind: "lines", instruction: "Qual foi o tema da roda de conversa de hoje?", lines: 1 },
        { kind: "lines", instruction: "O que você disse na roda?", lines: 2 },
        { kind: "lines", instruction: "O que um colega disse que você achou interessante?", lines: 2 },
      ],
    },
    {
      theme: "Relatando experiências do fim de semana",
      exercises: [
        { kind: "lines", instruction: "O que você fez primeiro no fim de semana?", lines: 2 },
        { kind: "lines", instruction: "O que você fez depois?", lines: 2 },
        { kind: "lines", instruction: "Qual foi a melhor parte do seu fim de semana?", lines: 2 },
        { kind: "draw", instruction: "Desenhe o momento que você mais gostou:" },
      ],
    },
    {
      theme: "Discussão em roda: ouvir e opinar",
      exercises: [
        { kind: "lines", instruction: "Qual foi o assunto da discussão em roda?", lines: 1 },
        { kind: "lines", instruction: "Qual é a sua opinião sobre o assunto?", lines: 2 },
        { kind: "lines", instruction: "Alguém pensou diferente de você? O que essa pessoa disse?", lines: 2 },
      ],
    },
    {
      theme: "Personagens dos contos",
      exercises: [
        { kind: "lines", instruction: "Escreva o nome de um personagem do conto que você ouviu:", lines: 1 },
        {
          kind: "options",
          instruction: "Marque as características desse personagem:",
          options: ["Bom", "Mau", "Corajoso", "Medroso", "Engraçado"],
        },
        { kind: "lines", instruction: "Escreva por que você acha isso:", lines: 2 },
        { kind: "draw", instruction: "Desenhe esse personagem:" },
      ],
    },
    {
      theme: "Revisando textos coletivos: evitando repetições",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Reescreva as frases trocando a palavra repetida por outra parecida:",
          items: [
            "O cachorro correu. O cachorro latiu. → O cachorro correu. __________ latiu.",
            "A menina pulou. A menina riu. → A menina pulou. __________ riu.",
            "O gato dormiu. O gato acordou. → O gato dormiu. __________ acordou.",
          ],
        },
        {
          kind: "lines",
          instruction:
            "Agora escreva você uma frase repetindo uma palavra e depois reescreva trocando por um apelido ou pronome:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Reescrita de texto com coerência",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva um texto curto (3 a 4 frases) contando uma história simples, do começo ao fim:",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "As partes do seu texto fazem sentido juntas?",
          options: ["Sim, tudo se liga", "Mais ou menos", "Preciso revisar"],
        },
        { kind: "lines", instruction: "Leia para um colega e escreva o que ele achou:", lines: 2 },
      ],
    },
    {
      theme: "Separando as palavras do texto",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Separe as palavras das frases escritas sem espaço:",
          items: [
            "OGATOSUBIUNAARVORE → ________________________",
            "AMENINAGOSTADELIVROS → ________________________",
            "AMANHÃVOUAOPARQUE → ________________________",
          ],
        },
        {
          kind: "lines",
          instruction: "Agora escreva uma frase sua grudada (sem espaços) para um colega separar:",
          lines: 1,
        },
      ],
    },
    {
      theme: "Palavras acentuadas",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as palavras que têm acento:",
          items: ["MAÇÃ", "BOLA", "VOVÔ", "CAFÉ", "MESA", "VOCÊ", "LIVRO", "ÁGUA"],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva 3 palavras acentuadas que você conhece:",
          items: ["1. __________", "2. __________", "3. __________"],
        },
        { kind: "lines", instruction: "Agora escreva uma frase usando uma dessas palavras:", lines: 2 },
      ],
    },
    {
      theme: "Palavras difíceis: H, L, LH, C e S",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as palavras com H, L, LH, C ou S:",
          items: ["__OTEL", "O__HO", "__EBOLA", "__APO", "__ORA"],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que começam com \"H\" (mas o H não tem som):",
          items: ["HOJE", "OVO", "HOTEL", "CASA", "HORA", "LIVRO"],
        },
        {
          kind: "lines",
          instruction: "Escreva uma frase usando uma palavra com H, L, LH, C ou S que você aprendeu:",
          lines: 2,
        },
      ],
    },
  ],
  historia: [],
  geografia: [],
  ciencias: [],
};
