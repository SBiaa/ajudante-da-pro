// Banco de atividades impressas: para cada tema do banco de temas (src/data/themeBank.ts),
// uma folha de exercícios pronta para o aluno, vinculada ao mesmo "theme" exato usado lá.
// Curada manualmente por matéria — sem geração via IA em tempo real, mesmo espírito do
// banco de temas (ver src/data/themeBank.ts). Cobre as 5 matérias próprias e Leitura Diária.

import { OwnSubject } from "@/types/plano";
import { ActivityEntry } from "@/types/activity";

export const ACTIVITY_BANK: Record<OwnSubject | "leitura-diaria", ActivityEntry[]> = {
  "leitura-diaria": [
    {
      theme: "A Lebre e a Tartaruga (Fábula de Esopo - releitura)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os personagens que apareceram na história:",
          items: [
            "LEBRE",
            "TARTARUGA",
            "RAPOSA",
            "URSO",
          ],
        },
        {
          kind: "options",
          instruction: "Por que a lebre perdeu a corrida?",
          options: [
            "Porque ela parou para descansar embaixo de uma árvore e pegou no sono",
            "Porque a tartaruga correu mais rápido do que ela",
            "Porque ela se perdeu no caminho até a árvore grande",
            "Porque o sinal da corrida não foi dado",
          ],
        },
        {
          kind: "lines",
          instruction: "Qual foi a lição que a lebre aprendeu com essa corrida? Escreva com suas palavras.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o momento em que a tartaruga cruza a linha de chegada e os bichos aplaudem.",
        },
      ],
    },
    {
      theme: "O Leão e o Ratinho (Fábula de Esopo - releitura)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os personagens que apareceram na história:",
          items: [
            "LEÃO",
            "RATINHO",
            "CAÇADOR",
            "ELEFANTE",
          ],
        },
        {
          kind: "options",
          instruction: "O que o ratinho fez para salvar o leão preso na rede?",
          options: [
            "Roeu as cordas da rede com seus dentinhos afiados",
            "Chamou outros animais da savana para ajudar",
            "Assustou o caçador que tinha armado a rede",
            "Cortou a rede com uma pedra afiada",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que o leão resolveu soltar o ratinho no começo da história, em vez de comê-lo?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o ratinho roendo as cordas da rede para libertar o leão.",
        },
      ],
    },
    {
      theme: "A Cigarra e a Formiga (Fábula de La Fontaine - releitura)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os personagens que apareceram na história:",
          items: [
            "CIGARRA",
            "FORMIGA",
            "ABELHA",
            "BORBOLETA",
          ],
        },
        {
          kind: "options",
          instruction: "O que a formiga fazia durante o verão, enquanto a cigarra cantava?",
          options: [
            "Guardava grãozinhos de comida para o inverno",
            "Dormia embaixo de uma árvore",
            "Também cantava e dançava com a cigarra",
            "Construía uma casa nova de tijolos",
          ],
        },
        {
          kind: "lines",
          instruction: "O que a cigarra aprendeu no final da história? Escreva com suas palavras.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a formiga recebendo a cigarra no formigueiro, no inverno.",
        },
      ],
    },
    {
      theme: "O Vento Norte e o Sol (Fábula de Esopo - releitura)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule quem apareceu nessa história:",
          items: [
            "VENTO NORTE",
            "SOL",
            "VIAJANTE",
            "LUA",
          ],
        },
        {
          kind: "options",
          instruction: "Quem conseguiu fazer o viajante tirar o casaco?",
          options: [
            "O Sol, brilhando devagar e espalhando calor",
            "O Vento Norte, soprando com toda a força",
            "Os dois, trabalhando juntos",
            "Nenhum dos dois conseguiu",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que soprar com força não fez o viajante tirar o casaco? Explique com suas palavras.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o viajante andando pela estrada, usando seu casaco quentinho.",
        },
      ],
    },
    {
      theme: "O Corvo e a Raposa (Fábula de La Fontaine - releitura)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os personagens que apareceram na história:",
          items: [
            "CORVO",
            "RAPOSA",
            "CORUJA",
            "LOBO",
          ],
        },
        {
          kind: "options",
          instruction: "Por que o corvo deixou o queijo cair do bico?",
          options: [
            "Porque abriu o bico para cantar e mostrar sua voz",
            "Porque a raposa roubou o queijo direto de sua boca",
            "Porque o vento derrubou o queijo da árvore",
            "Porque ele ficou com sono em cima da árvore",
          ],
        },
        {
          kind: "lines",
          instruction: "Qual foi o conselho que a raposa deu ao corvo no final? O que você acha desse conselho?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o corvo no alto da árvore, segurando o queijo no bico.",
        },
      ],
    },
    {
      theme: "Os Três Porquinhos (Conto popular - releitura)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule quem apareceu na história:",
          items: [
            "PORQUINHOS",
            "LOBO",
            "RAPOSA",
            "COELHO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o material de cada casinha, de acordo com a história:",
          items: [
            "A casa do primeiro porquinho era de ___________.",
            "A casa do segundo porquinho era de ___________.",
            "A casa do terceiro porquinho era de ___________.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que a casa de tijolos não caiu quando o lobo soprou?",
          options: [
            "Porque era mais forte e resistente do que as outras",
            "Porque o lobo não soprou com força daquela vez",
            "Porque tinha uma porta de ferro",
            "Porque os três porquinhos seguraram a casa por dentro",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe as três casinhas dos porquinhos: a de palha, a de madeira e a de tijolos.",
        },
      ],
    },
    {
      theme: "O Patinho Feio (Conto de Hans Christian Andersen - releitura)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule quem apareceu na história:",
          items: [
            "PATINHO",
            "CISNES",
            "IRMÃOS DO PATINHO",
            "COELHO",
          ],
        },
        {
          kind: "options",
          instruction: "No final da história, o que o patinho descobre ao se olhar na água?",
          options: [
            "Que ele tinha se tornado um lindo cisne",
            "Que ele estava sujo de lama",
            "Que havia outro patinho igual a ele no lago",
            "Que ele tinha ficado maior, mas continuava sendo um pato",
          ],
        },
        {
          kind: "lines",
          instruction: "Você já se sentiu diferente de todo mundo em algum momento, como o patinho? Conte um pouco.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o patinho se olhando no lago e vendo o reflexo de um cisne.",
        },
      ],
    },
    {
      theme: "Cachinhos Dourados e os Três Ursos (Conto popular inglês - releitura)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule quem apareceu na história:",
          items: [
            "CACHINHOS DOURADOS",
            "PAPAI URSO",
            "MAMÃE URSA",
            "LOBO MAU",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete de acordo com a história:",
          items: [
            "A tigela de mingau que Cachinhos Dourados comeu inteira era a ___________.",
            "A cadeira que quebrou quando ela sentou era a ___________.",
            "A cama em que ela pegou no sono era a ___________.",
          ],
        },
        {
          kind: "options",
          instruction: "O que a família de ursos percebeu quando voltou para casa?",
          options: [
            "Que alguém tinha mexido em tudo",
            "Que a casa tinha pegado fogo",
            "Que faltava comida no armário",
            "Que a porta estava trancada por dentro",
          ],
        },
        {
          kind: "lines",
          instruction: "O que Cachinhos Dourados prometeu a si mesma depois de fugir pela janela?",
          lines: 2,
        },
      ],
    },
    {
      theme: "A Gata Borralheira (Conto de Charles Perrault - releitura)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule quem apareceu na história:",
          items: [
            "GATA BORRALHEIRA",
            "FADA MADRINHA",
            "PRÍNCIPE",
            "RAINHA",
          ],
        },
        {
          kind: "options",
          instruction: "O que aconteceu quando o relógio bateu meia-noite?",
          options: [
            "A magia acabou e ela saiu correndo, perdendo um sapatinho de cristal",
            "O baile terminou e todos foram embora do castelo",
            "A fada madrinha apareceu de novo para ajudar",
            "O príncipe pediu Gata Borralheira em casamento",
          ],
        },
        {
          kind: "lines",
          instruction: "Como o príncipe descobriu quem era a moça misteriosa do baile?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe Gata Borralheira com seu vestido azul e seus sapatinhos de cristal.",
        },
      ],
    },
    {
      theme: "Lenda do Saci-Pererê (Lenda do folclore brasileiro)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as características do Saci-Pererê, de acordo com a lenda:",
          items: [
            "UMA PERNA SÓ",
            "GORRO VERMELHO",
            "CACHIMBO",
            "ASAS",
          ],
        },
        {
          kind: "options",
          instruction: "O que acontece se alguém conseguir pegar o gorrinho vermelho do Saci?",
          options: [
            "Ele fica preso e precisa fazer um pedido para ficar livre de novo",
            "Ele desaparece para sempre da floresta",
            "Ele fica com muito medo e chora",
            "Ele se transforma em outro bicho",
          ],
        },
        {
          kind: "lines",
          instruction: "Você conhece outra lenda ou personagem do folclore brasileiro? Escreva o nome e conte um pouco.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o Saci-Pererê com seu gorro vermelho e seu cachimbo.",
        },
      ],
    },
    {
      theme: "Lenda do Curupira (Lenda do folclore brasileiro)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as características do Curupira, de acordo com a lenda:",
          items: [
            "PÉS VIRADOS PARA TRÁS",
            "CABELOS DE FOGO",
            "UMA PERNA SÓ",
            "ASAS",
          ],
        },
        {
          kind: "options",
          instruction: "Por que as pegadas do Curupira confundem quem tenta segui-lo pela mata?",
          options: [
            "Porque seus pés são virados para trás e as pegadas apontam para o lado errado",
            "Porque ele voa e não deixa pegadas no chão",
            "Porque ele apaga as próprias pegadas com um galho",
            "Porque ele anda sempre de costas",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que é importante cuidar da natureza, como o Curupira ensina nessa lenda?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o Curupira protegendo os animais e as árvores da floresta.",
        },
      ],
    },
    {
      theme: "Lenda da Vitória-Régia (Lenda do folclore brasileiro)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule quem apareceu na lenda:",
          items: [
            "NAIÁ",
            "LUA",
            "SOL",
            "IARA",
          ],
        },
        {
          kind: "options",
          instruction: "No que a Lua transformou Naiá no final da lenda?",
          options: [
            "Em uma flor branca que só desabrocha à noite",
            "Em uma estrela no céu",
            "Em um peixe do rio",
            "Em um pássaro noturno",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que a flor vitória-régia abre suas pétalas à noite e se fecha ao amanhecer, segundo a lenda?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a flor vitória-régia aberta sobre o rio, refletindo a luz da lua.",
        },
      ],
    },
    {
      theme: "Lenda do Boto Cor-de-Rosa (Lenda do folclore brasileiro)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule quem apareceu na lenda:",
          items: [
            "BOTO COR-DE-ROSA",
            "RAPAZ DO CHAPÉU BRANCO",
            "IARA",
            "CURUPIRA",
          ],
        },
        {
          kind: "options",
          instruction: "Como o rapaz misterioso escondia o sinal de que era, na verdade, um boto encantado?",
          options: [
            "Usando sempre um chapéu branco para esconder o buraquinho na cabeça",
            "Usando luvas para esconder as nadadeiras",
            "Só aparecendo durante o dia",
            "Nunca conversando com ninguém na festa",
          ],
        },
        {
          kind: "lines",
          instruction: "O que acontece com o rapaz misterioso quando o sol está quase nascendo?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o boto cor-de-rosa saindo do rio para dançar na festa.",
        },
      ],
    },
    {
      theme: "Lenda da Iara (Lenda do folclore brasileiro)",
      exercises: [
        {
          kind: "options",
          instruction: "Segundo a lenda, por que a Iara canta perto do rio?",
          options: [
            "Porque quer assustar os pescadores",
            "Porque se sente sozinha e gosta de companhia",
            "Porque está com raiva dos moradores",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que a lenda usa para descrever a Iara:",
          items: [
            "CABELOS VERDES",
            "VOZ DOCE",
            "GARRAS AFIADAS",
            "SORRISO",
            "DENTES PONTUDOS",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que é importante cuidar dos rios, segundo a lenda?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a Iara cantando entre as pedras e as plantas do rio.",
        },
      ],
    },
    {
      theme: "O Passarinho que Tinha Medo de Voar",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os personagens que aparecem na história:",
          items: [
            "BENTO",
            "A MÃE DE BENTO",
            "OS IRMÃOS DE BENTO",
            "TOBIAS",
            "O GATO",
          ],
        },
        {
          kind: "options",
          instruction: "O que a mãe disse para ajudar Bento a perder o medo?",
          options: [
            "Que ele podia só abrir as asas e sentir o vento primeiro",
            "Que ele tinha que voar longe logo de uma vez",
            "Que ele nunca ia conseguir voar",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que Bento tinha medo de voar?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Você já teve medo de tentar algo novo? Conte o que aconteceu.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe Bento voando de um galho para o outro.",
        },
      ],
    },
    {
      theme: "A Nuvem Desajeitada",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule quem aparece na história:",
          items: [
            "NUVEM COTÓ",
            "AS OUTRAS NUVENS",
            "OS ANIMAIS COM SEDE",
            "NUVEM ARCO-ÍRIS",
          ],
        },
        {
          kind: "options",
          instruction: "Por que o formato tortinho da Nuvem Cotó conseguiu salvar o dia na seca?",
          options: [
            "Porque conseguia segurar mais gotinhas de água",
            "Porque era mais rápida que as outras nuvens",
            "Porque tinha uma cor diferente das outras",
          ],
        },
        {
          kind: "lines",
          instruction: "O que a história ensina sobre ser diferente dos outros?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a Nuvem Cotó fazendo chover sobre a terra seca.",
        },
      ],
    },
    {
      theme: "O Segredo do Jardim Seco",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os personagens que aparecem na história:",
          items: [
            "LIA",
            "A AVÓ DE LIA",
            "OS COLEGAS DA ESCOLA",
            "SOFIA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Numere em ordem as atitudes de Lia para cuidar do jardim: regar a terra seca, plantar as sementes que ganhou da avó, contar para os colegas e pedir ajuda.",
          items: [
            "1º ___",
            "2º ___",
            "3º ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Segundo a avó de Lia, do que um jardim precisa para crescer?",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe o jardim depois que ficou cheio de vida, com flores e borboletas.",
        },
      ],
    },
    {
      theme: "Dois Amigos e Uma Bola Só",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os personagens que aparecem na história:",
          items: [
            "TOMÁS",
            "DUDA",
            "A PROFESSORA",
            "PEDRO",
          ],
        },
        {
          kind: "options",
          instruction: "O que a professora sugeriu para Tomás e Duda resolverem o problema?",
          options: [
            "Que pensassem em um jogo que os dois pudessem jogar juntos",
            "Que parassem de brincar pelo resto do dia",
            "Que cada um ficasse com a bola em dias diferentes da semana",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que a bola caiu na poça de lama?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Conte sobre uma vez em que você dividiu alguma coisa com um colega.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe Tomás e Duda jogando o novo jogo que eles inventaram.",
        },
      ],
    },
    {
      theme: "A Verdade do Vaso Quebrado",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os personagens que aparecem na história:",
          items: [
            "MARCOS",
            "A PROFESSORA",
            "A TURMA",
            "RAFAEL",
          ],
        },
        {
          kind: "options",
          instruction: "O que aconteceu com o vaso da professora?",
          options: [
            "Uma bola quicou nele durante o recreio e ele caiu",
            "Ele quebrou sozinho porque estava velho",
            "Um aluno jogou ele no chão de propósito",
          ],
        },
        {
          kind: "lines",
          instruction: "Como Marcos se sentiu antes de contar a verdade para a professora?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "O que você faria se tivesse quebrado algo sem querer?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o momento em que Marcos conta a verdade para a professora.",
        },
      ],
    },
    {
      theme: "O Robozinho que Queria Ser Igual",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule quem aparece na história:",
          items: [
            "ZIP",
            "OS OUTROS ROBÔS QUADRADOS",
            "BIP",
            "OS DONOS DA FÁBRICA",
          ],
        },
        {
          kind: "options",
          instruction: "Por que Zip conseguiu consertar a máquina que os outros robôs não conseguiam?",
          options: [
            "Porque seu corpo redondo cabia no tubo estreito e curvo",
            "Porque ele era mais forte que os outros robôs",
            "Porque ele tinha ferramentas especiais",
          ],
        },
        {
          kind: "lines",
          instruction: "Como Zip se sentia no início da história, por ser diferente dos outros robôs?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "O que os robôs aprenderam sobre ter alguém diferente no grupo?",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe o robô Zip, redondo e azul, entrando no tubo curvo.",
        },
      ],
    },
    {
      theme: "Poema do Recreio",
      exercises: [
        {
          kind: "lines",
          instruction: "Copie o verso do poema que você mais gostou.",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule as brincadeiras de recreio que aparecem no poema:",
          items: [
            "BOLA",
            "PULAR CORDA",
            "AMARELINHA",
            "PIQUE-ESCONDE",
            "VÍDEO GAME",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule a palavra que rima com \"vento\" no poema:",
          items: [
            "MOMENTO",
            "JANELA",
            "LIVRO",
            "CADEIRA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe seu momento preferido do recreio.",
        },
      ],
    },
    {
      theme: "Poema da Chuva Que Chegou",
      exercises: [
        {
          kind: "lines",
          instruction: "O que aparece no céu depois que a chuva vai embora?",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule o que aparece no poema durante o dia de chuva:",
          items: [
            "POÇAS NA CALÇADA",
            "CACHORRO CORRENDO PRO ABRIGO",
            "VOVÓ FECHANDO A JANELA",
            "GUARDA-CHUVA COLORIDO",
          ],
        },
        {
          kind: "lines",
          instruction: "Copie o verso do poema que fala sobre o barulho da chuva no telhado.",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe a cena do poema depois da chuva, com o arco-íris no céu.",
        },
      ],
    },
    {
      theme: "Três Haicais da Natureza",
      exercises: [
        {
          kind: "lines",
          instruction: "Qual dos três haicais você mais gostou? Copie-o.",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "No segundo haicai, quem bebe a gota da flor?",
          options: [
            "O beija-flor",
            "A borboleta",
            "A abelha",
          ],
        },
        {
          kind: "lines",
          instruction: "O que a lua faz no terceiro haicai?",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Escolha um dos haicais e desenhe a cena que ele descreve.",
        },
      ],
    },
    {
      theme: "Parlendas da Tradição Oral",
      exercises: [
        {
          kind: "lines",
          instruction: "Copie a parlenda que você mais gostou de recitar.",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases das parlendas com a palavra que falta:",
          items: [
            "Um, dois, ___ com arroz",
            "Cinco, seis, chinelo ___",
            "Batatinha quando nasce, espalha ___ pelo chão",
          ],
        },
        {
          kind: "options",
          instruction: "Na parlenda \"Hoje é domingo\", no que o cachimbo bate?",
          options: [
            "No jarro",
            "Na mesa",
            "No touro",
          ],
        },
        {
          kind: "lines",
          instruction: "Você já conhecia alguma dessas parlendas? Onde ouviu?",
          lines: 2,
        },
      ],
    },
    {
      theme: "Quadrinhas Populares",
      exercises: [
        {
          kind: "lines",
          instruction: "Copie a quadrinha que você mais gostou.",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule a palavra que rima com \"fermento\" na primeira quadrinha:",
          items: [
            "CONTENTAMENTO",
            "JANELA",
            "CACHORRO",
            "LIVRO",
          ],
        },
        {
          kind: "options",
          instruction: "Na segunda quadrinha, o que aconteceu com o cravo e a rosa?",
          options: [
            "Os dois brigaram debaixo de uma sacada",
            "Os dois dançaram juntos no jardim",
            "O cravo ajudou a rosa a florescer",
          ],
        },
        {
          kind: "draw",
          instruction: "Escolha uma das quadrinhas e desenhe a cena que ela mostra.",
        },
      ],
    },
    {
      theme: "Trava-Línguas para Enrolar a Língua",
      exercises: [
        {
          kind: "lines",
          instruction: "Copie o trava-língua que você achou mais difícil de falar.",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule os animais que aparecem nos trava-línguas:",
          items: [
            "RATO",
            "TIGRE",
            "ARANHA",
            "RÃ",
            "CACHORRO",
            "GATO",
          ],
        },
        {
          kind: "options",
          instruction: "No trava-língua \"O rato roeu a roupa do rei de Roma\", o que o rato roeu?",
          options: [
            "A roupa do rei de Roma",
            "O queijo da cozinha",
            "O tapete da sala",
          ],
        },
        {
          kind: "lines",
          instruction: "Depois de treinar, qual trava-língua você conseguiu falar mais rápido sem embolar a língua?",
          lines: 2,
        },
      ],
    },
    {
      theme: "Adivinhas para Adivinhar",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a resposta da adivinha \"tem dentes e não morde\"?",
          options: [
            "O pente",
            "O garfo",
            "O cachorro",
            "A escova",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que são respostas das adivinhas que você ouviu:",
          items: [
            "ABACAXI",
            "BURACO",
            "RELÓGIO",
            "PENTE",
            "BANANA",
            "SAPATO",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva a adivinha que você mais gostou e explique a resposta:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a resposta de uma das adivinhas.",
        },
      ],
    },
    {
      theme: "Ciranda, Cirandinha",
      exercises: [
        {
          kind: "lines",
          instruction: "Copie o verso da cantiga que você mais gostou de cantar:",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule a palavra que rima com \"quebrou\" na cantiga:",
          items: [
            "ACABOU",
            "CIRANDAR",
            "BONITO",
            "RODA",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule a palavra que rima com \"cirandar\":",
          items: [
            "DAR",
            "RODA",
            "VIDRO",
            "AMOR",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a turma de mãos dadas, cantando a ciranda em roda.",
        },
      ],
    },
    {
      theme: "Jornal da Escola: Horta da Turma Dá os Primeiros Frutos",
      exercises: [
        {
          kind: "options",
          instruction: "O que a horta da turma do 2º ano já deu, segundo a notícia?",
          options: [
            "Alface, cenoura e cheiro-verde",
            "Tomate e batata",
            "Milho e feijão",
            "Morango e melancia",
          ],
        },
        {
          kind: "options",
          instruction: "Quanto tempo a turma cuidou da horta até a primeira colheita?",
          options: [
            "Dois meses",
            "Uma semana",
            "Um ano",
            "Dois dias",
          ],
        },
        {
          kind: "lines",
          instruction: "Para que vai ser usada a colheita da horta, segundo a notícia?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Você gostaria de ter uma horta na escola ou em casa? Por quê?",
          lines: 3,
        },
      ],
    },
    {
      theme: "Jornal da Escola: Turma Vence Torneio de Queimada do Recreio",
      exercises: [
        {
          kind: "options",
          instruction: "Qual turma venceu o torneio de queimada?",
          options: [
            "2º B",
            "3º A",
            "1º A",
            "4º C",
          ],
        },
        {
          kind: "options",
          instruction: "Contra qual turma foi a final do torneio?",
          options: [
            "3º A",
            "2º A",
            "1º B",
            "4º A",
          ],
        },
        {
          kind: "lines",
          instruction: "Segundo o jogador entrevistado, por que a turma conseguiu vencer?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Você gosta de jogar queimada ou algum outro esporte? Conte um pouco.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Receita de Salada de Frutas da Turma",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os ingredientes que fazem parte da salada de frutas:",
          items: [
            "MAÇÃ",
            "BANANA",
            "LARANJA",
            "UVAS",
            "MORANGO",
            "ABACAXI",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva em ordem os passos da receita (lavar as frutas, cortar as frutas, misturar na tigela, servir em potinhos):",
          items: [
            "1º ___",
            "2º ___",
            "3º ___",
            "4º ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que é importante lavar bem as frutas antes de cortar?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Você gostaria de experimentar essa salada de frutas? Por quê?",
          lines: 2,
        },
      ],
    },
    {
      theme: "Receita de Suco de Laranja com Hortelã",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os ingredientes do suco de laranja com hortelã:",
          items: [
            "LARANJA",
            "HORTELÃ",
            "ÁGUA",
            "AÇÚCAR",
            "LIMÃO",
            "MORANGO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva em ordem os passos da receita (espremer as laranjas, lavar a hortelã, amassar a hortelã, misturar tudo):",
          items: [
            "1º ___",
            "2º ___",
            "3º ___",
            "4º ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que a receita pede para amassar levemente as folhas de hortelã com as mãos?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Você já ajudou a fazer algum suco em casa? Conte como foi.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Carta para um Amigo de Outra Escola",
      exercises: [
        {
          kind: "lines",
          instruction: "Quem escreveu a carta e para quem ela foi escrita?",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Por que Du lembrou do amigo Rafa durante o passeio ao museu?",
          options: [
            "Porque Rafa adora dinossauro e tinha um esqueleto gigante no museu",
            "Porque Rafa mora perto do museu",
            "Porque o museu era sobre escolas",
            "Porque Rafa já tinha ido ao museu antes",
          ],
        },
        {
          kind: "lines",
          instruction: "Para que Du convidou Rafa?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Agora é sua vez: escreva uma cartinha curta para um amigo ou amiga, contando uma novidade.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Bilhetes do Dia a Dia",
      exercises: [
        {
          kind: "lines",
          instruction: "Quem escreveu o primeiro bilhete e para quem ele foi escrito?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Por que Luiza não pôde trazer o material de Artes?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Para onde Bento foi depois da aula, segundo o bilhete para a mãe?",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Qual é a principal diferença entre um bilhete e uma carta?",
          options: [
            "O bilhete é mais curto e direto, para um aviso rápido",
            "O bilhete é sempre mais longo que a carta",
            "O bilhete não tem remetente",
            "Não existe diferença",
          ],
        },
      ],
    },
    {
      theme: "Convite para a Festa Junina da Escola",
      exercises: [
        {
          kind: "lines",
          instruction: "Qual é a data e o horário da Festa Junina, segundo o convite?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Onde vai acontecer a festa?",
          lines: 1,
        },
        {
          kind: "word-select",
          instruction: "Circule as atrações que vão ter na festa, de acordo com o convite:",
          items: [
            "QUADRILHA",
            "BARRACA DE PESCARIA",
            "FOGUEIRA",
            "SHOW DE MÁGICA",
            "PISCINA",
            "COMIDAS TÍPICAS",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe como você imagina que vai ser a Festa Junina da escola.",
        },
      ],
    },
    {
      theme: "Cartão-Postal de Férias na Praia",
      exercises: [
        {
          kind: "lines",
          instruction: "Quem escreveu o cartão-postal e para quem?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "O que Maite fez na praia, segundo o cartão-postal?",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "O que Maite vai fazer amanhã?",
          options: [
            "Passear de barco",
            "Ir ao museu",
            "Voltar para casa",
            "Fazer um castelo de areia",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um cartão-postal curto contando sobre um lugar que você visitou ou gostaria de visitar.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Verbete de Curiosidade: Tamanduá-Bandeira",
      exercises: [
        {
          kind: "lines",
          instruction: "Por que o tamanduá-bandeira recebe esse nome?",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Como o tamanduá-bandeira consegue capturar formigas e cupins?",
          options: [
            "Com a língua comprida e pegajosa",
            "Com os dentes afiados",
            "Com as asas",
            "Com o bico",
          ],
        },
        {
          kind: "options",
          instruction: "Verdadeiro ou falso: o tamanduá-bandeira enxerga muito bem.",
          options: [
            "Verdadeiro",
            "Falso",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que o tamanduá-bandeira está ameaçado de extinção?",
          lines: 2,
        },
      ],
    },
    {
      theme: "Verbete de Curiosidade: Beija-Flor",
      exercises: [
        {
          kind: "lines",
          instruction: "Por que o beija-flor recebe esse nome?",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Como o beija-flor consegue ficar parado no ar na frente das flores?",
          options: [
            "Batendo as asas muitas vezes por segundo",
            "Segurando na flor com as patas",
            "Pousando sempre no chão",
            "Ele não consegue ficar parado",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que os beija-flores são importantes para a natureza?",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe um beija-flor se alimentando de uma flor.",
        },
      ],
    },
    {
      theme: "Regras da Amarelinha",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais necessários para brincar de amarelinha:",
          items: [
            "GIZ",
            "PEDRINHA",
            "BOLA",
            "CORDA",
            "TAMPINHA",
            "RAQUETE",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva em ordem o que o jogador faz (desenhar a amarelinha, jogar a pedrinha, pular os quadrados, pegar a pedrinha de volta):",
          items: [
            "1º ___",
            "2º ___",
            "3º ___",
            "4º ___",
          ],
        },
        {
          kind: "lines",
          instruction: "O que acontece se o jogador pisar na linha ou perder o equilíbrio?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Você já brincou de amarelinha? Conte como foi ou como você imagina que seria.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Regras do Passa-Anel",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule o material necessário para brincar de passa-anel:",
          items: [
            "ANEL",
            "BOTÃO",
            "MOEDA",
            "BOLA",
            "CORDA",
            "LIVRO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva, em ordem, o que acontece na brincadeira (o que é feito em 1º, 2º, 3º e 4º lugar):",
          items: [
            "1º",
            "2º",
            "3º",
            "4º",
          ],
        },
        {
          kind: "options",
          instruction: "Quem vira o próximo carteiro?",
          options: [
            "Quem acerta com quem está o anel",
            "Quem chega primeiro na roda",
            "O jogador mais velho da turma",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a turma sentada em roda, brincando de passa-anel.",
        },
      ],
    },
    {
      theme: "Perséfone e as Estações do Ano (Mito grego - releitura simplificada)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os nomes dos personagens que aparecem no mito:",
          items: [
            "DEMÉTER",
            "PERSÉFONE",
            "ATENA",
            "ZEUS",
            "HÉRCULES",
          ],
        },
        {
          kind: "options",
          instruction: "Por que Deméter ficava triste e fazia as plantas murcharem?",
          options: [
            "Porque Perséfone precisava ir para o mundo debaixo da terra",
            "Porque ela não gostava do verão",
            "Porque as flores eram feias demais",
          ],
        },
        {
          kind: "lines",
          instruction: "O que esse mito explica sobre as estações do ano?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe Perséfone colhendo flores no campo.",
          note: "Capriche nas cores da primavera!",
        },
      ],
    },
    {
      theme: "Ícaro e as Asas de Cera (Mito grego - releitura simplificada)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os nomes dos personagens que aparecem no mito:",
          items: [
            "DÉDALO",
            "ÍCARO",
            "ZEUS",
            "PERSÉFONE",
            "MINOTAURO",
          ],
        },
        {
          kind: "options",
          instruction: "Que aviso Dédalo deu a Ícaro antes de voarem?",
          options: [
            "Para não voar muito baixo nem muito alto, ficando sempre perto dele",
            "Para voar o mais alto e o mais rápido possível",
            "Para nunca sair voando da ilha",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que é importante ouvir os avisos de quem cuida da gente? Dê um exemplo da sua vida.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe Ícaro voando entre as nuvens com suas asas de cera.",
        },
      ],
    },
    {
      theme: "Karú-Sakaibê e a Origem do Povo (Mito do povo Munduruku - releitura simplificada)",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os nomes dos personagens que aparecem na história:",
          items: [
            "RAIRU",
            "KARÚ-SAKAIBÊ",
            "DÉDALO",
            "PERSÉFONE",
          ],
        },
        {
          kind: "options",
          instruction: "Como Rairu ficou grudado ao tatu e acabou descendo até o centro da terra?",
          options: [
            "Sua mão grudou de cera no rabo do desenho do tatu, que ganhou vida e cavou fundo",
            "Ele caiu em um buraco enquanto corria",
            "Karú-Sakaibê o empurrou para dentro da terra",
          ],
        },
        {
          kind: "lines",
          instruction: "O que aconteceu quando a corda de algodão arrebentou?",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe Rairu grudado no rabo do tatu, sendo puxado para o centro da terra.",
        },
      ],
    },
    {
      theme: "Tirinha: O Dia em que o Guarda-Chuva Sumiu",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os personagens que aparecem na tirinha:",
          items: [
            "BIA",
            "CACHORRO",
            "GATO",
            "PROFESSORA",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a graça (o final engraçado) da tirinha?",
          options: [
            "O cachorro estava escondendo o guarda-chuva o tempo todo, deitado em cima dele",
            "A Bia achou o guarda-chuva rapidinho embaixo da cama",
            "Choveu granizo em vez de chuva normal",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o que você acha que a Bia disse quando descobriu que o cachorro estava com o guarda-chuva.",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe o quinto quadrinho: o que você imagina que acontece depois?",
        },
      ],
    },
    {
      theme: "Relato: Meu Primeiro Dia de Aula",
      exercises: [
        {
          kind: "options",
          instruction: "Como a narradora se sentia antes de chegar à escola?",
          options: [
            "Ansiosa, com o coração disparado",
            "Calma e tranquila",
            "Com sono e sem vontade de ir",
          ],
        },
        {
          kind: "lines",
          instruction: "Como a narradora conseguiu fazer um novo amigo no primeiro dia?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "E você? Lembra de um dia em que estava com medo de algo novo? Conte.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe como você imagina a sala de aula no primeiro dia da narradora.",
        },
      ],
    },
    {
      theme: "Cordel do Menino que Não Queria Estudar",
      exercises: [
        {
          kind: "lines",
          instruction: "Copie a sua estrofe preferida do cordel.",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Por que Zeca ficou atrapalhado no mercado?",
          options: [
            "Porque não sabia ler os preços nem contar o troco",
            "Porque esqueceu o dinheiro em casa",
            "Porque a loja estava fechada",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule a palavra do cordel que rima com ESTUDANTE:",
          items: [
            "VIGILANTE",
            "ESCOLA",
            "MENINO",
            "CARTILHA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o Zeca lendo as placas da rua, depois que aprendeu a ler.",
        },
      ],
    },
    {
      theme: "Três Limeriques Divertidos",
      exercises: [
        {
          kind: "lines",
          instruction: "Copie o seu limerique preferido dos três.",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "No primeiro limerique, circule as palavras que rimam com PINTOR:",
          items: [
            "SALVADOR",
            "FLOR",
            "ROSA",
            "LISTRA",
          ],
        },
        {
          kind: "options",
          instruction: "O que a menina de Belém fez, no segundo limerique?",
          options: [
            "Comeu bolo, comeu pão, guardou doce na mão e ainda quis mais",
            "Fez uma dieta e não comeu nada",
            "Deu a comida toda para o papagaio",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a cena mais engraçada de um dos limeriques, como o gato pintado de cor-de-rosa.",
        },
      ],
    },
    {
      theme: "O Bolinho Fujão (Conto acumulativo - releitura)",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Numere a ordem em que o Bolinho Fujão encontrou os personagens (1º ao 4º):",
          items: [
            "Cachorro",
            "Galinha",
            "Raposa",
            "Velhinha",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os personagens que o bolinho encontrou na história:",
          items: [
            "CACHORRO",
            "GALINHA",
            "RAPOSA",
            "GATO",
            "PORCO",
          ],
        },
        {
          kind: "options",
          instruction: "Por que a raposa conseguiu comer o bolinho, diferente dos outros?",
          options: [
            "Porque o bolinho confiou nela para atravessar o rio",
            "Porque a raposa era mais rápida que o bolinho",
            "Porque o bolinho ficou cansado e parou de correr sozinho",
          ],
        },
        {
          kind: "lines",
          instruction: "Qual foi a lição que o Bolinho Fujão aprendeu tarde demais?",
          lines: 2,
        },
      ],
    },
    {
      theme: "A Lenda da Mula Sem-Cabeça (Lenda do folclore brasileiro)",
      exercises: [
        {
          kind: "options",
          instruction: "Segundo a lenda, quando a Mula Sem-Cabeça aparece?",
          options: [
            "Nas noites de quinta para sexta-feira",
            "Todas as noites do ano",
            "Somente no dia do seu aniversário",
          ],
        },
        {
          kind: "lines",
          instruction: "Como uma pessoa pode quebrar o feitiço da Mula Sem-Cabeça, segundo a lenda?",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "O que é uma lenda?",
          options: [
            "Uma história contada há gerações, sem provas de que seja real",
            "Uma notícia de jornal com fatos comprovados",
            "Uma receita de cozinha",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a Mula Sem-Cabeça galopando pelo caminho, soltando fumaça e fagulhas.",
        },
      ],
    },
    {
      theme: "Reportagem: Um Dia na Vida de Quem Cuida dos Animais do Zoológico",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a primeira tarefa da tratadora ao chegar no zoológico?",
          options: [
            "Verificar a saúde e o comportamento de cada animal",
            "Vender ingressos para os visitantes",
            "Dar banho nos visitantes",
          ],
        },
        {
          kind: "options",
          instruction: "Segundo a reportagem, qual é a alimentação certa de cada animal?",
          options: [
            "Frutas para os macacos, feno para as girafas, carne para os leões",
            "Carne para os macacos e frutas para os leões",
            "Todos os animais comem a mesma comida",
          ],
        },
        {
          kind: "lines",
          instruction: "O que é 'enriquecimento ambiental', segundo a reportagem?",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe um animal do zoológico sendo cuidado pela tratadora.",
        },
      ],
    },
    {
      theme: "Indicação Literária: Por Que Ler \"A Lebre e a Tartaruga\"",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é o gênero do livro indicado?",
          options: [
            "Fábula",
            "Notícia",
            "Receita",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os personagens da fábula indicada:",
          items: [
            "LEBRE",
            "TARTARUGA",
            "RAPOSA",
            "GALINHA",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que a pessoa que escreveu a indicação recomenda essa fábula?",
          lines: 3,
        },
        {
          kind: "lines",
          instruction: "Escreva uma indicação literária curta de um livro que você já leu e gostou.",
          lines: 4,
        },
      ],
    },
  ],
  matematica: [
    {
      theme: "Números no dia a dia",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escreva por extenso os números:",
          items: [
            "7 = __________",
            "15 = __________",
            "23 = __________",
            "40 = __________",
          ],
        },
        {
          kind: "options",
          instruction: "Em qual situação o número indica uma ordem (posição), e não uma quantidade?",
          options: [
            "O 3º lugar da corrida",
            "3 maçãs na fruteira",
            "3 lápis na caixa",
            "3 anos de idade",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um número que você usa no seu dia a dia (número da sua casa, idade ou outro) e explique o que ele representa:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cena com um número usado como código (por exemplo, o número da camisa de um jogador ou o número de uma casa):",
        },
      ],
    },
    {
      theme: "Comparando números",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Compare os números usando os sinais > (maior), < (menor) ou = (igual):",
          items: [
            "45 ___ 54",
            "78 ___ 78",
            "23 ___ 19",
            "100 ___ 99",
          ],
        },
        {
          kind: "options",
          instruction: "Qual desses números é o maior?",
          options: [
            "67",
            "76",
            "60",
            "17",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os números que são maiores que 40:",
          items: [
            "12",
            "45",
            "38",
            "67",
            "29",
            "81",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva três números maiores que 50 e menores que 100:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Compondo e decompondo números",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Decomponha os números em dezenas (D) e unidades (U):",
          items: [
            "36 = ___ D + ___ U",
            "54 = ___ D + ___ U",
            "72 = ___ D + ___ U",
            "89 = ___ D + ___ U",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Componha o número a partir da decomposição:",
          items: [
            "4 D + 5 U = ___",
            "6 D + 0 U = ___",
            "2 D + 8 U = ___",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o número 27 usando bolinhas agrupadas em dezenas e unidades:",
        },
        {
          kind: "lines",
          instruction: "Escreva o número 45 de outro jeito, usando uma soma diferente de dezenas e unidades:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Contando coleções de objetos",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma coleção com 15 objetos (bolinhas, estrelas ou quadradinhos):",
        },
        {
          kind: "fill-blank",
          instruction: "Conte e escreva quantos objetos há em cada grupo:",
          items: [
            "● ● ● ● ● ● ● = ___",
            "★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ = ___",
          ],
        },
        {
          kind: "options",
          instruction: "Qual estratégia ajuda a contar mais rápido um grupo grande de objetos?",
          options: [
            "Contar um a um bem devagar",
            "Agrupar de 10 em 10 e contar os grupos",
            "Adivinhar sem contar",
            "Fechar os olhos",
          ],
        },
        {
          kind: "lines",
          instruction: "Estime quantos lápis há em uma caixa da sala sem contar um a um. Depois conte e escreva se sua estimativa ficou perto do total:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Contagem de 2 em 2, de 5 em 5, de 10 em 10",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Continue a contagem de 2 em 2:",
          items: [
            "2, 4, 6, ___, ___, ___, ___",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Continue a contagem de 5 em 5:",
          items: [
            "5, 10, 15, ___, ___, ___",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Continue a contagem de 10 em 10:",
          items: [
            "10, 20, 30, ___, ___, ___",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Agora conte de 2 em 2 de trás para frente, começando do 20:",
          items: [
            "20, 18, 16, ___, ___, ___",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os números que aparecem quando contamos de 5 em 5 a partir do 0:",
          items: [
            "5",
            "8",
            "10",
            "12",
            "15",
            "20",
            "22",
            "25",
          ],
        },
      ],
    },
    {
      theme: "Continhas de mais e de menos",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Resolva as adições:",
          items: [
            "23 + 15 = ___",
            "34 + 42 = ___",
            "56 + 27 = ___",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Resolva as subtrações:",
          items: [
            "48 - 15 = ___",
            "70 - 26 = ___",
            "93 - 38 = ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Arme e resolva a conta 47 + 35, mostrando o passo a passo:",
          lines: 4,
        },
        {
          kind: "lines",
          instruction: "Escolha uma das continhas acima e explique como você pensou para resolvê-la:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Maior, menor ou igual?",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escreva o número que é um a mais e um a menos:",
          items: [
            "___ , 34 , ___",
            "___ , 50 , ___",
            "___ , 79 , ___",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule o número que está entre 20 e 30:",
          items: [
            "18",
            "25",
            "32",
            "40",
            "22",
          ],
        },
        {
          kind: "options",
          instruction: "Qual afirmação está correta sobre 56 e 65?",
          options: [
            "56 é maior que 65",
            "56 é menor que 65",
            "56 é igual a 65",
            "Não dá para comparar",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um número que seja maior que 40 e menor que 50:",
          lines: 1,
        },
      ],
    },
    {
      theme: "Resolvendo problemas de juntar e separar",
      exercises: [
        {
          kind: "lines",
          instruction: "Leia e resolva: Ana tinha 24 figurinhas. Ganhou mais 18 figurinhas do irmão. Com quantas figurinhas ela ficou?",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete a operação que resolve o problema acima:",
          items: [
            "24 + 18 = ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Leia e resolva: Pedro tinha 35 bolinhas de gude. Deu 12 para um amigo. Com quantas bolinhas ele ficou?",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete a operação que resolve este segundo problema:",
          items: [
            "35 - 12 = ___",
          ],
        },
      ],
    },
    {
      theme: "Problemas de multiplicar e de dividir",
      exercises: [
        {
          kind: "lines",
          instruction: "Leia e resolva: em cada saco há 4 balas. São 3 sacos. Quantas balas há ao todo?",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Desenhe 3 grupos com 4 bolinhas em cada grupo e escreva quantas bolinhas há ao todo:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "4 + 4 + 4 = ___",
            "O dobro de 6 é ___",
            "A metade de 10 é ___",
            "O triplo de 3 é ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Leia e resolva: 12 balas serão divididas igualmente entre 2 crianças. Quantas balas cada uma recebe?",
          lines: 3,
        },
      ],
    },
    {
      theme: "Usando os sinais +, – e =",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com o sinal + ou -:",
          items: [
            "8 ___ 5 = 13",
            "20 ___ 6 = 14",
            "9 ___ 9 = 18",
            "30 ___ 10 = 20",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva o número que falta para a igualdade ficar correta:",
          items: [
            "7 + ___ = 12",
            "___ - 4 = 9",
            "15 = 10 + ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma conta de adição e uma de subtração usando os sinais +, - e =:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Sequências numéricas crescentes e decrescentes",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a sequência crescente:",
          items: [
            "3, 6, 9, ___, ___, ___",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a sequência decrescente:",
          items: [
            "50, 45, 40, ___, ___, ___",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os números que continuam a sequência 10, 20, 30...:",
          items: [
            "35",
            "40",
            "45",
            "50",
            "60",
            "31",
          ],
        },
        {
          kind: "lines",
          instruction: "Invente sua própria sequência crescente com 5 números e escreva a regra que você usou:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Descobrindo o padrão da sequência",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Observe a sequência e escreva os dois próximos números:",
          items: [
            "2, 4, 6, 8, ___, ___",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é o padrão da sequência 1, 3, 5, 7, 9?",
          options: [
            "Soma 1 a cada número",
            "Soma 2 a cada número",
            "Soma 3 a cada número",
            "Multiplica por 2",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique com suas palavras qual é o padrão (regra) da sequência 5, 10, 15, 20:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Onde estou na escola?",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um mapa simples da sua sala de aula, marcando onde fica sua carteira, a porta e o quadro:",
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam posição ou localização:",
          items: [
            "PERTO",
            "CORRENDO",
            "LONGE",
            "AMARELO",
            "AO LADO",
            "ENTRE",
          ],
        },
        {
          kind: "options",
          instruction: "Se você está de frente para o quadro e alguém está atrás de você, essa pessoa está:",
          options: [
            "Entre você e o quadro",
            "Do lado oposto ao quadro, olhando para as suas costas",
            "Em cima do quadro",
            "Dentro da carteira",
          ],
        },
        {
          kind: "lines",
          instruction: "Descreva com palavras como chegar da sua sala até o pátio da escola:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Desenhando croquis",
      exercises: [
        {
          kind: "draw",
          instruction: "Faça um croqui (desenho simples) do caminho da sua casa até a escola, marcando pontos de referência:",
        },
        {
          kind: "lines",
          instruction: "Escreva os pontos de referência (padaria, praça, semáforo etc.) que aparecem no seu croqui:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Um croqui serve para:",
          options: [
            "Mostrar de forma simples um caminho ou lugar",
            "Fazer uma conta de matemática",
            "Escrever uma história",
            "Cantar uma música",
          ],
        },
      ],
    },
    {
      theme: "Formas geométricas espaciais no dia a dia",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escreva o nome da forma geométrica espacial parecida com cada objeto:",
          items: [
            "Bola de futebol: ___________",
            "Caixa de sapato: ___________",
            "Lata de milho: ___________",
            "Casquinha de sorvete: ___________",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os nomes de figuras geométricas espaciais:",
          items: [
            "CUBO",
            "QUADRADO",
            "ESFERA",
            "TRIÂNGULO",
            "CONE",
            "CILINDRO",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe três objetos da sua casa que lembram formas geométricas espaciais (cubo, esfera ou cilindro):",
        },
      ],
    },
    {
      theme: "Formas geométricas planas",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os nomes de figuras geométricas planas:",
          items: [
            "TRIÂNGULO",
            "CUBO",
            "QUADRADO",
            "ESFERA",
            "RETÂNGULO",
            "CÍRCULO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva quantos lados tem cada figura:",
          items: [
            "Triângulo: ___ lados",
            "Quadrado: ___ lados",
            "Retângulo: ___ lados",
            "Círculo: ___ lados",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um triângulo, um quadrado e um círculo:",
        },
        {
          kind: "lines",
          instruction: "Explique uma diferença entre o quadrado e o retângulo:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Provável, improvável ou impossível?",
      exercises: [
        {
          kind: "options",
          instruction: "\"O sol vai nascer amanhã\" é um evento:",
          options: [
            "Provável",
            "Improvável",
            "Impossível",
            "Certo",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as situações impossíveis:",
          items: [
            "CHOVER AMANHÃ",
            "UM PEIXE VOAR SOZINHO",
            "NASCER O SOL",
            "UMA PEDRA FLUTUAR NO AR SEM APOIO",
            "GANHAR NO JOGO DE DADOS",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um evento provável e um evento improvável de acontecer na sua escola:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Lendo tabelas e gráficos de barras",
      exercises: [
        {
          kind: "lines",
          instruction: "Observe: em uma pesquisa, 8 crianças escolheram futebol, 5 escolheram dança e 3 escolheram natação. Qual foi o esporte mais escolhido? Explique como você descobriu:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete com base na pesquisa acima:",
          items: [
            "Futebol: ___ crianças",
            "Dança: ___ crianças",
            "Natação: ___ crianças",
            "Total de crianças: ___",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um gráfico de barras simples representando os dados da pesquisa (futebol, dança, natação):",
        },
      ],
    },
    {
      theme: "Pesquisa da turma em gráficos",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um tema para pesquisar com os colegas (por exemplo, fruta preferida) e escreva 3 opções de resposta:",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Depois de perguntar a 10 colegas, registre os resultados:",
          items: [
            "Opção 1: ___________ — ___ votos",
            "Opção 2: ___________ — ___ votos",
            "Opção 3: ___________ — ___ votos",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma tabela ou gráfico de colunas com os resultados da sua pesquisa:",
        },
      ],
    },
    {
      theme: "Medindo comprimento, capacidade e massa",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com a unidade de medida correta (metro, litro ou quilograma):",
          items: [
            "A altura da porta é medida em ___________",
            "A água de uma garrafa é medida em ___________",
            "O peso de um saco de arroz é medido em ___________",
          ],
        },
        {
          kind: "options",
          instruction: "Qual instrumento usamos para medir a massa (peso) de um objeto?",
          options: [
            "Fita métrica",
            "Balança",
            "Relógio",
            "Copo medidor",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um objeto da sala e escreva como você faria para medir seu comprimento:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Moedas e cédulas do Brasil",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "R$ 5 = ___ moedas de R$ 1",
            "R$ 10 = ___ moedas de R$ 1",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Some os valores:",
          items: [
            "2 moedas de R$ 1 + 1 moeda de R$ 0,50 = R$ ___",
            "1 cédula de R$ 10 + 1 cédula de R$ 5 = R$ ___",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as cédulas que existem no Brasil:",
          items: [
            "R$ 2",
            "R$ 10",
            "R$ 20",
            "R$ 15",
            "R$ 50",
            "R$ 100",
          ],
        },
        {
          kind: "lines",
          instruction: "Você tem R$ 20 e quer comprar um brinquedo de R$ 13. Quanto vai receber de troco? Explique como pensou:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Lendo horas no relógio digital",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escreva por extenso o horário mostrado no relógio digital:",
          items: [
            "7:00 = ___________",
            "12:30 = ___________",
            "15:00 = ___________",
          ],
        },
        {
          kind: "options",
          instruction: "No relógio digital 09:00, que horas são?",
          options: [
            "Nove horas da manhã",
            "Nove e meia",
            "Dezenove horas",
            "Nove minutos",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o horário em que você acorda e o horário em que você vai para a escola:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Usando o calendário da sala",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete usando o calendário da sua sala:",
          items: [
            "Hoje é: ___________",
            "Amanhã será: ___________",
            "Ontem foi: ___________",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva os dias da semana em ordem, começando pelo domingo:",
          items: [
            "1. ___________",
            "2. ___________",
            "3. ___________",
            "4. ___________",
            "5. ___________",
            "6. ___________",
            "7. ___________",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma atividade que você faz toda semana e em qual dia ela acontece:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Jogo de quebra-cabeça",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é uma boa estratégia para começar um quebra-cabeça?",
          options: [
            "Montar as peças das bordas primeiro",
            "Embaralhar todas as peças",
            "Fechar os olhos e tentar encaixar",
            "Começar sem olhar as cores",
          ],
        },
        {
          kind: "lines",
          instruction: "Depois de montar um quebra-cabeça, escreva qual estratégia você usou para começar (bordas, cores, cantos etc.):",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe como ficou o quebra-cabeça depois de montado:",
        },
      ],
    },
    {
      theme: "Torre de Hanói simplificada",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe os 3 pinos e os 3 discos organizados do maior (embaixo) para o menor (em cima):",
        },
        {
          kind: "lines",
          instruction: "Explique a regra do jogo: por que um disco maior não pode ficar em cima de um disco menor?",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete depois de jogar:",
          items: [
            "O número mínimo de movimentos para mover 3 discos é ___ movimentos",
          ],
        },
        {
          kind: "lines",
          instruction: "Depois de jogar a Torre de Hanói com 3 discos, escreva quantos movimentos você usou e se conseguiu fazer menos na segunda tentativa:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Para onde nos movemos na escola",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam direção ou sentido:",
          items: [
            "PARA FRENTE",
            "AMARELO",
            "PARA TRÁS",
            "PARA A DIREITA",
            "BOLA",
            "PARA A ESQUERDA",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o caminho (em passos e direções) que você faz da sala de aula até o refeitório:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Se você está de frente para a lousa e dá meia-volta, passa a ficar de frente para:",
          options: [
            "O fundo da sala",
            "O teto",
            "O chão",
            "A mesma lousa",
          ],
        },
      ],
    },
    {
      theme: "Figuras geométricas espaciais: parecidas ou diferentes?",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com \"tem\" ou \"não tem\":",
          items: [
            "A esfera ___________ pontas.",
            "O cubo ___________ faces planas.",
            "O cilindro ___________ partes arredondadas.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as figuras que têm partes arredondadas:",
          items: [
            "ESFERA",
            "CUBO",
            "CILINDRO",
            "PIRÂMIDE",
            "CONE",
            "BLOCO RETANGULAR",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um cone, um cubo e uma esfera:",
        },
        {
          kind: "lines",
          instruction: "Escreva uma diferença entre o cubo e a esfera:",
          lines: 2,
        },
      ],
    },
    {
      theme: "O que os gráficos estão nos contando?",
      exercises: [
        {
          kind: "lines",
          instruction: "Observe: em um gráfico, \"gato\" tem 10 votos, \"cachorro\" tem 15 votos e \"passarinho\" tem 4 votos. Escreva uma conclusão sobre esse gráfico:",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete com base nos dados acima:",
          items: [
            "Animal mais votado: ___________",
            "Animal menos votado: ___________",
            "Diferença entre cachorro e gato: ___ votos",
          ],
        },
        {
          kind: "options",
          instruction: "Para descobrir qual foi a opção mais escolhida em um gráfico de barras, devemos observar:",
          options: [
            "A barra mais alta",
            "A barra mais baixa",
            "A cor das barras",
            "O nome do gráfico",
          ],
        },
      ],
    },
    {
      theme: "Resolvendo problemas com comprimento, capacidade e massa",
      exercises: [
        {
          kind: "lines",
          instruction: "Leia e resolva: uma fita mede 45 cm. Marina cortou 12 cm para um trabalho. Quantos centímetros de fita sobraram?",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete a operação do problema da fita:",
          items: [
            "45 - 12 = ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Leia e resolva: uma garrafa tem 2 litros de suco. Foram servidos 500 ml em copos. Aproximadamente quanto suco ainda resta na garrafa? Explique seu raciocínio:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Quantos dias faltam?",
      exercises: [
        {
          kind: "lines",
          instruction: "Se hoje é dia 10 e sua festa de aniversário é dia 18, quantos dias faltam? Explique como você contou:",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete usando o calendário:",
          items: [
            "De segunda a sexta são ___ dias",
            "De hoje até daqui a 1 semana são ___ dias",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma data importante para você e quantos dias faltam a partir de hoje:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Explicando como resolvi o problema",
      exercises: [
        {
          kind: "lines",
          instruction: "Resolva o problema: Lucas tinha 30 figurinhas e comprou mais 25. Depois de resolver, explique com suas palavras todo o caminho que você fez para chegar à resposta:",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Complete a operação que você usou:",
          items: [
            "30 + 25 = ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Você poderia ter resolvido esse problema de outro jeito? Explique:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Inventando perguntas para um problema",
      exercises: [
        {
          kind: "lines",
          instruction: "Leia a situação: \"Na caixa há 40 lápis de cor e 15 canetinhas.\" Invente uma pergunta matemática sobre essa situação:",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Agora resolva a pergunta que você inventou e explique como chegou à resposta:",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Se sua pergunta foi \"quantos materiais há ao todo?\", verifique a resposta:",
          items: [
            "40 + 15 = ___",
          ],
        },
      ],
    },
    {
      theme: "Quantificando coleções de jeitos diferentes",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma coleção de 18 objetos organizados em grupos de 2 (pares):",
        },
        {
          kind: "fill-blank",
          instruction: "Complete usando diferentes estratégias de contagem para o número 24:",
          items: [
            "Contando de 1 em 1: ___ objetos",
            "Contando de 2 em 2: ___ pares",
            "Contando de 10 em 10: 2 grupos de 10 e ___ a mais",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a forma mais rápida de contar 50 objetos?",
          options: [
            "Contar um a um",
            "Agrupar de 10 em 10 e contar os grupos",
            "Adivinhar sem contar",
            "Contar de 1 em 1 duas vezes",
          ],
        },
      ],
    },
    {
      theme: "Continuando o padrão da sequência",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Descubra o número que falta na sequência:",
          items: [
            "2, 4, ___, 8, 10",
            "15, ___, 25, 30, 35",
            "9, 12, 15, ___, 21",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os números que dariam continuidade à sequência 3, 6, 9...:",
          items: [
            "11",
            "12",
            "13",
            "15",
            "18",
            "20",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique qual é a regra (padrão) da sequência 9, 12, 15, 18, 21:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Decompondo números para calcular",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Use a decomposição para calcular 34 + 25:",
          items: [
            "34 = 30 + 4",
            "25 = 20 + 5",
            "30 + 20 = ___",
            "4 + 5 = ___",
            "34 + 25 = ___",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Agora calcule decompondo 58 - 23:",
          items: [
            "58 = 50 + 8",
            "23 = 20 + 3",
            "50 - 20 = ___",
            "8 - 3 = ___",
            "58 - 23 = ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que decompor os números pode facilitar o cálculo mental:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Investigando a poluição perto de nós",
      exercises: [
        {
          kind: "lines",
          instruction: "Em uma pesquisa da turma, 12 crianças disseram que já viram lixo jogado na rua, e 8 disseram que não. Quantas crianças participaram da pesquisa? Escreva a conta e a resposta:",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete com os dados da pesquisa:",
          items: [
            "Viram lixo na rua: ___ crianças",
            "Não viram: ___ crianças",
            "Total: ___ crianças",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um gráfico de barras com os resultados da pesquisa sobre lixo na rua:",
        },
        {
          kind: "lines",
          instruction: "Escreva uma ideia para diminuir a poluição perto da sua escola:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Batalha de cartas: quem tem o maior número?",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Em uma batalha de cartas, compare quem venceu usando > ou <:",
          items: [
            "47 ___ 74",
            "9 ___ 90",
            "63 ___ 36",
            "100 ___ 99",
          ],
        },
        {
          kind: "options",
          instruction: "Entre um número de 2 algarismos e um número de 3 algarismos, qual é sempre o maior?",
          options: [
            "O de 3 algarismos",
            "O de 2 algarismos",
            "Depende dos algarismos",
            "Os dois são iguais",
          ],
        },
        {
          kind: "lines",
          instruction: "Você tirou a carta 58 e seu colega tirou a carta 85. Quem venceu a rodada? Explique como você descobriu:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Quantas figurinhas eu tenho a mais?",
      exercises: [
        {
          kind: "lines",
          instruction: "Leia e resolva: Bia tem 32 figurinhas e Léo tem 19. Quantas figurinhas Bia tem a mais que Léo?",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete a operação:",
          items: [
            "32 - 19 = ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Agora invente uma situação parecida com dois colegas e quantidades diferentes de figurinhas:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Quanto pesa cada bicho de estimação?",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com uma estimativa de peso para cada animal (em quilogramas):",
          items: [
            "Um hamster pesa aproximadamente ___ kg (menos de 1)",
            "Um gato pesa aproximadamente ___ kg",
            "Um cachorro grande pesa aproximadamente ___ kg",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule o animal que provavelmente é o mais pesado:",
          items: [
            "HAMSTER",
            "CACHORRO GRANDE",
            "PEIXINHO",
            "PERIQUITO",
          ],
        },
        {
          kind: "lines",
          instruction: "Se você pudesse pesar um bichinho de estimação na balança da escola, como você faria isso? Explique o passo a passo:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Fazendo compras na feirinha da sala",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Na feirinha, cada item custa o valor indicado. Some o total da compra:",
          items: [
            "Maçã R$ 2 + Suco R$ 3 = R$ ___",
            "Bolacha R$ 4 + Fruta R$ 2 = R$ ___",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as moedas que você usaria para pagar exatamente R$ 0,75:",
          items: [
            "R$ 0,50",
            "R$ 0,25",
            "R$ 0,10",
            "R$ 1,00",
            "R$ 0,05",
          ],
        },
        {
          kind: "lines",
          instruction: "Você tem uma cédula de R$ 10 e comprou um item de R$ 6. Quanto de troco você deve receber? Explique como calculou:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Qual é a mais provável de acontecer?",
      exercises: [
        {
          kind: "lines",
          instruction: "Em uma caixa há 8 bolinhas vermelhas e 2 bolinhas azuis. Se você tirar uma bolinha sem olhar, qual cor é mais provável de sair? Explique por quê:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Em um sorteio com 9 bolas amarelas e 1 bola verde, tirar a bola verde é um evento:",
          options: [
            "Pouco provável",
            "Muito provável",
            "Impossível",
            "Certo",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as situações impossíveis em um jogo de dados comum (números de 1 a 6):",
          items: [
            "TIRAR O NÚMERO 6",
            "TIRAR O NÚMERO 7",
            "TIRAR O NÚMERO 0",
            "TIRAR O NÚMERO 3",
          ],
        },
      ],
    },
    {
      theme: "Pesquisa: qual é o animal de estimação preferido da turma?",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Pergunte a 10 colegas qual é o animal de estimação preferido e registre:",
          items: [
            "Cachorro: ___ votos",
            "Gato: ___ votos",
            "Outro animal: ___ votos",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um gráfico de barras com os resultados da sua pesquisa sobre animais de estimação:",
        },
        {
          kind: "lines",
          instruction: "Escreva uma frase contando qual foi o animal preferido da turma:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Seguindo o padrão das profissões",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Observe o padrão e complete quem vem a seguir:",
          items: [
            "Médico, Professor, Médico, Professor, ___________, ___________",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as profissões que aparecem na sequência médico, professor, médico, professor...:",
          items: [
            "MÉDICO",
            "PROFESSOR",
            "BOMBEIRO",
            "DENTISTA",
            "COZINHEIRO",
            "PINTOR",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique qual é a regra (padrão) usada na sequência de profissões acima:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Crie sua própria sequência com 2 profissões se repetindo (escreva o nome de cada uma em ordem):",
        },
      ],
    },
    {
      theme: "Números que são código: a etiqueta da vacina",
      exercises: [
        {
          kind: "options",
          instruction: "O número em uma etiqueta de vacina ou em um armário numerado representa:",
          options: [
            "Um código de identificação, não uma quantidade",
            "Uma quantidade de itens",
            "Uma soma",
            "Uma data",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as situações em que o número funciona como código (não indica quantidade):",
          items: [
            "NÚMERO DA CASA",
            "5 MAÇÃS",
            "NÚMERO DO ÔNIBUS",
            "3 LÁPIS",
            "NÚMERO DA CAMISA DO JOGADOR",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique a diferença entre o número 5 em \"5 lápis\" e o número 5 na porta de uma sala (sala 5):",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Escreva um exemplo de número que funciona como código no seu dia a dia:",
          items: [
            "Exemplo: ___________",
          ],
        },
      ],
    },
  ],
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
          items: [
            "ANA",
            "LIVRO",
            "CADERNO",
            "PEDRO",
            "MESA",
            "JOÃO",
            "LÁPIS",
            "MARIA",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o título de um livro da sala de aula que você gosta:",
          lines: 1,
        },
        {
          kind: "draw",
          instruction: "Desenhe a capa do livro que você escolheu:",
        },
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
          items: [
            "SAPATO",
            "MESA",
            "RATO",
            "BOLA",
            "PATO",
            "LIVRO",
          ],
        },
        {
          kind: "draw",
          instruction: "Treine ler em voz alta apontando cada palavra com o dedo. Depois, desenhe algo que a parlenda faz você lembrar:",
        },
      ],
    },
    {
      theme: "Lendo placas, rótulos e histórias em quadrinhos",
      exercises: [
        {
          kind: "options",
          instruction: "O que você acha que está escrito numa placa com o desenho de uma pessoa atravessando a rua?",
          options: [
            "Faixa de pedestre",
            "Silêncio, hospital",
            "Proibido fumar",
          ],
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
        {
          kind: "lines",
          instruction: "Qual conto de fadas ou fábula você ouviu na roda? Escreva o nome:",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "O que aconteceu no final da história?",
          lines: 3,
        },
        {
          kind: "lines",
          instruction: "De que país ou cultura veio essa história?",
          lines: 1,
        },
        {
          kind: "draw",
          instruction: "Desenhe o personagem de que você mais gostou:",
        },
      ],
    },
    {
      theme: "Cantigas e parlendas da tradição oral",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de uma cantiga de roda que você cantou hoje:",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Escreva um pedacinho (um verso) da cantiga, de cor:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Você já conhecia essa cantiga de casa ou da família?",
          options: [
            "Sim",
            "Não",
            "Não tenho certeza",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você e seus colegas cantando em roda:",
        },
      ],
    },
    {
      theme: "Relatos históricos e verbetes de enciclopédia",
      exercises: [
        {
          kind: "lines",
          instruction: "Qual foi o assunto do verbete de enciclopédia que você ouviu?",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Escreva 3 informações que você aprendeu:",
          lines: 3,
        },
        {
          kind: "lines",
          instruction: "Tinha alguma palavra difícil no texto? Qual?",
          lines: 1,
        },
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
          items: [
            "ANA",
            "BEATRIZ",
            "CARLOS",
            "DANIEL",
            "ELISA",
            "FELIPE",
            "GABRIEL",
            "HELOÍSA",
          ],
        },
        {
          kind: "lines",
          instruction: "Agora copie sua lista com letra bem caprichada:",
          lines: 5,
        },
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
          items: [
            "1. __________",
            "2. __________",
            "3. __________",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe algo que a parlenda faz você imaginar:",
        },
      ],
    },
    {
      theme: "Recontando histórias conhecidas",
      exercises: [
        {
          kind: "lines",
          instruction: "Qual história você recontou hoje? Escreva o título:",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Quem eram os personagens?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Onde a história acontecia?",
          lines: 1,
        },
        {
          kind: "draw",
          instruction: "Desenhe a parte da história que você mais gostou de recontar:",
        },
      ],
    },
    {
      theme: "Reescrevendo contos conhecidos",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o começo do conto que você reescreveu:",
          lines: 3,
        },
        {
          kind: "lines",
          instruction: "Escreva o que aconteceu no meio da história:",
          lines: 3,
        },
        {
          kind: "lines",
          instruction: "Escreva como a história terminou:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Relato escrito de um passeio da turma",
      exercises: [
        {
          kind: "lines",
          instruction: "O que aconteceu primeiro no passeio da turma?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "O que aconteceu depois?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "O que aconteceu por último?",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam tempo:",
          items: [
            "PRIMEIRO",
            "CADEIRA",
            "DEPOIS",
            "JANELA",
            "NO FINAL",
            "LIVRO",
            "ANTES",
            "MESA",
          ],
        },
      ],
    },
    {
      theme: "Escrevendo bilhetes e cartões",
      exercises: [
        {
          kind: "lines",
          instruction: "Para quem você vai escrever o bilhete?",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Escreva a mensagem do seu bilhete:",
          lines: 5,
        },
        {
          kind: "lines",
          instruction: "Não esqueça de assinar! Escreva seu nome:",
          lines: 1,
        },
      ],
    },
    {
      theme: "Escrevendo regras de brincadeiras e receitas",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha uma brincadeira que você conhece e escreva o nome dela:",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Escreva as regras da brincadeira, passo a passo (1º, 2º, 3º...):",
          lines: 5,
        },
        {
          kind: "draw",
          instruction: "Desenhe como se brinca:",
        },
      ],
    },
    {
      theme: "Contação de histórias de diferentes culturas",
      exercises: [
        {
          kind: "lines",
          instruction: "De que cultura ou lugar veio a história que você ouviu?",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "O que você mais gostou nessa história?",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Você gostaria de contar uma história para a turma na próxima roda?",
          options: [
            "Sim",
            "Não",
            "Talvez",
          ],
        },
      ],
    },
    {
      theme: "Explicando o que aprendemos",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um tema que você aprendeu em outra matéria e escreva o nome:",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Explique com suas palavras o que você aprendeu:",
          lines: 3,
        },
        {
          kind: "lines",
          instruction: "Escreva uma pergunta que você faria para um colega sobre esse tema:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Roda de conversa sobre temas do dia",
      exercises: [
        {
          kind: "lines",
          instruction: "Qual foi o tema da roda de conversa de hoje?",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "O que você disse na roda?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "O que um colega disse que você achou interessante?",
          lines: 2,
        },
      ],
    },
    {
      theme: "Relatando experiências do fim de semana",
      exercises: [
        {
          kind: "lines",
          instruction: "O que você fez primeiro no fim de semana?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "O que você fez depois?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Qual foi a melhor parte do seu fim de semana?",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe o momento que você mais gostou:",
        },
      ],
    },
    {
      theme: "Discussão em roda: ouvir e opinar",
      exercises: [
        {
          kind: "lines",
          instruction: "Qual foi o assunto da discussão em roda?",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Qual é a sua opinião sobre o assunto?",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Alguém pensou diferente de você? O que essa pessoa disse?",
          lines: 2,
        },
      ],
    },
    {
      theme: "Personagens dos contos",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de um personagem do conto que você ouviu:",
          lines: 1,
        },
        {
          kind: "options",
          instruction: "Marque as características desse personagem:",
          options: [
            "Bom",
            "Mau",
            "Corajoso",
            "Medroso",
            "Engraçado",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva por que você acha isso:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe esse personagem:",
        },
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
          instruction: "Agora escreva você uma frase repetindo uma palavra e depois reescreva trocando por um apelido ou pronome:",
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
          options: [
            "Sim, tudo se liga",
            "Mais ou menos",
            "Preciso revisar",
          ],
        },
        {
          kind: "lines",
          instruction: "Leia para um colega e escreva o que ele achou:",
          lines: 2,
        },
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
          items: [
            "MAÇÃ",
            "BOLA",
            "VOVÔ",
            "CAFÉ",
            "MESA",
            "VOCÊ",
            "LIVRO",
            "ÁGUA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva 3 palavras acentuadas que você conhece:",
          items: [
            "1. __________",
            "2. __________",
            "3. __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Agora escreva uma frase usando uma dessas palavras:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Palavras difíceis: H, L, LH, C e S",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as palavras com H, L, LH, C ou S:",
          items: [
            "__OTEL",
            "O__HO",
            "__EBOLA",
            "__APO",
            "__ORA",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que começam com \"H\" (mas o H não tem som):",
          items: [
            "HOJE",
            "OVO",
            "HOTEL",
            "CASA",
            "HORA",
            "LIVRO",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma frase usando uma palavra com H, L, LH, C ou S que você aprendeu:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Roda de notícias e reportagens da turma",
      exercises: [
        {
          kind: "lines",
          instruction: "Qual foi a notícia ou reportagem que você ouviu na roda? Escreva do que ela falava:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete com as informações da notícia (quem, o quê, quando, onde):",
          items: [
            "Quem: __________",
            "O quê: __________",
            "Quando: __________",
            "Onde: __________",
          ],
        },
        {
          kind: "options",
          instruction: "As notícias e reportagens contam:",
          options: [
            "Fatos que aconteceram de verdade",
            "Histórias inventadas",
            "Só brincadeiras",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cena da notícia ou reportagem que você ouviu:",
        },
      ],
    },
    {
      theme: "Escrevendo listas com letras móveis",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha o que você vai montar com letras móveis (uma lista de nomes, títulos de livros, uma parlenda...). O que você escolheu?",
          lines: 1,
        },
        {
          kind: "fill-blank",
          instruction: "Depois de montar as palavras com as letras móveis, copie-as aqui:",
          items: [
            "1. __________",
            "2. __________",
            "3. __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma das palavras que você montou. Por que você usou essas letras para escrevê-la? Explique:",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule os tipos de lista que dá para escrever com letras móveis:",
          items: [
            "NOMES",
            "TÍTULOS DE LIVROS",
            "PARLENDAS",
            "QUADRINHAS",
            "TRAVA-LÍNGUAS",
            "NÚMEROS DE TELEFONE",
          ],
        },
      ],
    },
    {
      theme: "Escrevendo indicações literárias e verbetes de curiosidades",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um livro que você leu ou que a turma leu junto e escreva o título:",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Escreva uma indicação para um colega: por que ele deveria ler esse livro?",
          lines: 3,
        },
        {
          kind: "lines",
          instruction: "Escolha um tema que a turma estudou e escreva (ou dite para o professor escrever) um verbete de curiosidade sobre ele:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a capa do livro que você indicou:",
        },
      ],
    },
    {
      theme: "Revisando textos: cortando o que não combina",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Estas frases têm palavras da fala que não combinam com um texto escrito. Reescreva-as sem essas palavras:",
          items: [
            "O menino, tipo, foi para a escola. → __________",
            "A menina comeu a maçã, sabe, e depois brincou. → __________",
            "O cachorro correu, aí, até a praça. → __________",
          ],
        },
        {
          kind: "options",
          instruction: "Palavras como \"tipo\", \"sabe\" e \"aí\" (repetidas o tempo todo) combinam mais com:",
          options: [
            "Uma conversa falada",
            "Um texto escrito para todo mundo ler",
            "Um bilhete formal",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma frase bem organizada, sem palavras sobrando, contando algo que você fez hoje:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Reescrevendo com o mesmo narrador",
      exercises: [
        {
          kind: "options",
          instruction: "Na frase \"Eu fui à floresta e encontrei um lobo\", quem está contando a história?",
          options: [
            "Um personagem da história (1ª pessoa)",
            "Alguém de fora contando sobre os outros (3ª pessoa)",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Reescreva as frases trocando de narrador (de \"eu\" para \"ela/ele\"):",
          items: [
            "Eu encontrei um lobo na floresta. → __________",
            "Eu corri para casa assustado. → __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma história que você conhece e reescreva o começo dela usando o mesmo narrador (1ª ou 3ª pessoa) do original:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Comparando coisas nas histórias",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as frases que comparam uma coisa com outra:",
          items: [
            "FORTE COMO UM LEÃO",
            "CORREU RÁPIDO",
            "DOCE COMO MEL",
            "COMEU O BOLO",
            "BRANCA COMO A NEVE",
            "FOI À ESCOLA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as comparações do jeito que você quiser:",
          items: [
            "Frio como __________",
            "Rápido como __________",
            "Grande como __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Invente uma comparação para descrever um colega ou um bicho de estimação (ex: \"esperto como uma raposa\"):",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe a comparação que você inventou:",
        },
      ],
    },
    {
      theme: "O que as imagens do livro nos contam",
      exercises: [
        {
          kind: "options",
          instruction: "As cores escuras numa ilustração costumam passar a sensação de:",
          options: [
            "Medo ou mistério",
            "Alegria e festa",
            "Nada, é só decoração",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma ilustração de um livro da sala. O que ela mostra que o texto escrito não conta?",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule os recursos que aparecem nas ilustrações de livros:",
          items: [
            "CORES",
            "BALÕES DE FALA",
            "TAMANHO DAS LETRAS",
            "NÚMERO DA PÁGINA",
            "DESENHOS",
            "MOLDURAS",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cena usando cores que combinem com um sentimento (alegre, triste ou assustador):",
        },
      ],
    },
    {
      theme: "Palavras que soam parecido: M, N, NH e til",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as palavras com M ou N (antes de P e B usa-se M, antes das outras letras usa-se N):",
          items: [
            "CA__PO",
            "BA__CO",
            "TA__TO",
            "PO__TE",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras escritas com NH:",
          items: [
            "GALINHA",
            "CAMINHO",
            "BANHO",
            "CARRO",
            "SAPO",
            "PADRINHO",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que têm til (~):",
          items: [
            "IRMÃ",
            "MESA",
            "MAÇÃ",
            "LIVRO",
            "ALGUÉM",
            "PÃO",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma frase usando uma palavra com M, N, NH ou til que você aprendeu hoje:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Para quem e para quê vou escrever?",
      exercises: [
        {
          kind: "options",
          instruction: "Antes de escrever um texto, é importante pensar:",
          options: [
            "Para quem vou escrever e para quê",
            "Só em desenhar bonito",
            "Em nada, é só começar escrevendo",
          ],
        },
        {
          kind: "lines",
          instruction: "Se você fosse escrever um bilhete, para quem seria?",
          lines: 1,
        },
        {
          kind: "fill-blank",
          instruction: "Complete pensando no seu próximo texto:",
          items: [
            "Vou escrever para: __________",
            "O objetivo é: __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Que tipo de texto (gênero) você escolheria para convidar alguém para uma festa: um bilhete, uma lista ou uma receita? Por quê?",
          lines: 2,
        },
      ],
    },
    {
      theme: "De onde vem o assunto do texto",
      exercises: [
        {
          kind: "options",
          instruction: "De onde pode vir o assunto de um texto que vamos escrever?",
          options: [
            "De uma pesquisa, de uma história conhecida ou da nossa imaginação",
            "Só pode vir do livro didático",
            "Não precisa ter assunto",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um assunto que você já conhece bem (um animal, um lugar, uma brincadeira) e escreva o nome dele:",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Escreva 2 coisas que você já sabe sobre esse assunto, antes mesmo de pesquisar:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe o assunto que você escolheu:",
        },
      ],
    },
    {
      theme: "Fazendo o plano do texto",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete o plano do seu texto antes de começar a escrever:",
          items: [
            "Sobre o que vou escrever: __________",
            "Como vai começar: __________",
            "O que vai acontecer no meio: __________",
            "Como vai terminar: __________",
          ],
        },
        {
          kind: "options",
          instruction: "Fazer um plano antes de escrever ajuda porque:",
          options: [
            "Organiza as ideias antes de começar",
            "Deixa o texto mais bagunçado",
            "Não serve para nada",
          ],
        },
        {
          kind: "lines",
          instruction: "Agora escreva o texto seguindo o plano que você fez:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Revisando o texto: a primeira versão não é a última",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva uma primeira versão de um texto curto (3 frases) sobre um assunto que você gosta:",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Depois de escrever a primeira versão, o que você deve fazer?",
          options: [
            "Ler de novo e ver o que pode melhorar",
            "Guardar sem ler",
            "Rasgar a folha",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Releia seu texto e melhore uma frase que ficou confusa. Escreva a frase nova:",
          items: [
            "Frase melhorada: __________",
          ],
        },
        {
          kind: "lines",
          instruction: "O que você mudou da primeira para a segunda versão? Por quê?",
          lines: 2,
        },
      ],
    },
    {
      theme: "Combinando como vai ser o texto antes de escrever",
      exercises: [
        {
          kind: "lines",
          instruction: "A turma vai combinar como vai ser o texto antes de escrever. Que tipo de texto vocês poderiam escrever juntos (bilhete, lista, receita, convite)?",
          lines: 1,
        },
        {
          kind: "options",
          instruction: "Quando a turma tem opiniões diferentes sobre como fazer o texto, o que é melhor fazer?",
          options: [
            "Conversar e ouvir todo mundo até combinar",
            "Só um aluno decide sozinho",
            "Não fazer o texto",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma ideia sua para o texto da turma:",
          lines: 2,
        },
        {
          kind: "lines",
          instruction: "Escreva a ideia de um colega que você achou boa:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Compartilhando o texto para melhorar",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva um texto curto para compartilhar com um colega:",
          lines: 4,
        },
        {
          kind: "lines",
          instruction: "Troque com um colega e escreva um comentário sobre o texto dele (o que ele escreveu bem):",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Escreva uma sugestão para o colega melhorar o texto:",
          items: [
            "Sugestão: __________",
          ],
        },
        {
          kind: "options",
          instruction: "Depois de ouvir a opinião de um colega sobre o seu texto, você pode:",
          options: [
            "Usar a ideia para melhorar seu texto",
            "Ignorar e não mudar nada",
            "Ficar bravo",
          ],
        },
      ],
    },
    {
      theme: "O dado das histórias",
      exercises: [
        {
          kind: "lines",
          instruction: "Que imagem saiu no dado ou na carta que você sorteou?",
          lines: 1,
        },
        {
          kind: "lines",
          instruction: "Invente, com a turma, uma história usando essa imagem. Escreva o começo:",
          lines: 3,
        },
        {
          kind: "lines",
          instruction: "O que aconteceu depois na história coletiva?",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe a parte da história que você ajudou a inventar:",
        },
      ],
    },
  ],
  historia: [
    {
      theme: "Brincadeiras de ontem e de hoje",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as brincadeiras que as nossas avós e avôs também faziam quando eram crianças:",
          items: [
            "PIÃO",
            "VIDEOGAME",
            "PETECA",
            "CELULAR",
            "PIPA",
            "TABLET",
            "AMARELINHA",
            "COMPUTADOR",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte para um adulto da sua família qual brincadeira ele fazia quando era criança e escreva o nome dela aqui:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Essa brincadeira que você descobriu ainda existe hoje em dia?",
          options: [
            "Sim, as crianças ainda brincam disso",
            "Não, quase ninguém brinca mais disso",
            "Não sei",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma brincadeira que você gosta de fazer hoje em dia:",
        },
      ],
    },
    {
      theme: "Nosso repertório de brincadeiras",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escreva 3 brincadeiras que você conhece e gosta de brincar:",
          items: [
            "1. __________",
            "2. __________",
            "3. __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma das brincadeiras que você escreveu e explique como se brinca:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule as brincadeiras que precisam de mais de uma pessoa para acontecer:",
          items: [
            "ESCONDE-ESCONDE",
            "QUEBRA-CABEÇA SOZINHO",
            "PEGA-PEGA",
            "DESENHAR SOZINHO",
            "AMARELINHA",
            "LER SOZINHO",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você brincando da sua brincadeira preferida com um colega:",
        },
      ],
    },
    {
      theme: "Brincadeiras de outras épocas e lugares",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha uma brincadeira e escreva uma diferença entre como se brincava antigamente e como se brinca hoje:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule os materiais que podem ser usados para brincar sem comprar brinquedos prontos:",
          items: [
            "TAMPINHA DE GARRAFA",
            "BOLA DE FUTEBOL NOVA",
            "PEDRINHAS",
            "GALHO DE ÁRVORE",
            "VIDEOGAME",
            "BARBANTE",
          ],
        },
        {
          kind: "options",
          instruction: "Uma mesma brincadeira pode ter nomes diferentes dependendo do lugar onde é jogada. Isso significa que:",
          options: [
            "A mesma brincadeira pode ter nomes diferentes em cidades ou regiões diferentes",
            "Só existe um nome certo para cada brincadeira",
            "Brincadeiras nunca podem mudar de nome",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma brincadeira que você imagina que as crianças faziam há muito tempo, sem internet nem eletricidade:",
        },
      ],
    },
    {
      theme: "Brincadeira é para todo mundo",
      exercises: [
        {
          kind: "options",
          instruction: "Pular corda é uma brincadeira que:",
          options: [
            "Pode ser feita por meninos e meninas",
            "Só pode ser feita por meninas",
            "Só pode ser feita por meninos",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule TODAS as brincadeiras que podem ser feitas por qualquer criança, seja menino ou menina:",
          items: [
            "BONECA",
            "BOLA",
            "PIPA",
            "CORDA",
            "CARRINHO",
            "AMARELINHA",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de uma brincadeira que algumas pessoas acham que é 'só para menino' ou 'só para menina', mas que na verdade qualquer criança pode brincar:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe você brincando de uma brincadeira que alguns colegas achavam que era 'só para menino' ou 'só para menina':",
        },
      ],
    },
    {
      theme: "Jogos e brincadeiras dos povos indígenas",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os jogos e brincadeiras que podem ter origem nos povos indígenas:",
          items: [
            "PETECA",
            "VIDEOGAME",
            "ARCO E FLECHA DE BRINCADEIRA",
            "CELULAR",
            "CORRIDA",
            "TABLET",
          ],
        },
        {
          kind: "options",
          instruction: "Os povos indígenas usam sementes, palha e madeira para fazer seus brinquedos e jogos. Isso mostra que:",
          options: [
            "Eles usam o que a natureza oferece para criar suas brincadeiras",
            "Eles não gostam de brincar",
            "Só existe um jeito certo de fazer brinquedos",
          ],
        },
        {
          kind: "lines",
          instruction: "O que você aprendeu sobre os jogos e brincadeiras dos povos indígenas? Escreva:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um jogo ou brincadeira indígena que você conheceu:",
        },
      ],
    },
    {
      theme: "Jogos e brincadeiras de matriz africana",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as palavras que têm relação com os jogos e brincadeiras de matriz africana que conhecemos:",
          items: [
            "TABULEIRO",
            "SEMENTES",
            "VIDEOGAME",
            "RODA",
            "TAMBOR",
            "CONTROLE REMOTO",
          ],
        },
        {
          kind: "options",
          instruction: "Muitos jogos e brincadeiras de matriz africana são feitos em roda, com música e ritmo. Isso ajuda a:",
          options: [
            "Reunir e aproximar as pessoas que brincam juntas",
            "Separar as pessoas que brincam",
            "Impedir que as pessoas brinquem",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o que você aprendeu sobre um jogo ou brincadeira de matriz africana:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um jogo ou brincadeira de matriz africana que você conheceu:",
        },
      ],
    },
    {
      theme: "Jogo Mancala: um jogo de origem africana",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o jogo Mancala:",
          items: [
            "O Mancala é um jogo de tabuleiro muito antigo, de origem __________.",
            "Para jogar, usamos sementes, pedrinhas ou __________.",
            "O tabuleiro do Mancala tem vários buraquinhos em __________.",
          ],
        },
        {
          kind: "options",
          instruction: "O Mancala é um jogo de:",
          options: [
            "Estratégia, em que é preciso pensar antes de jogar",
            "Sorte, em que ninguém precisa pensar",
            "Corrida, em que é preciso correr rápido",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o tabuleiro do Mancala com as sementes nos buraquinhos:",
        },
        {
          kind: "lines",
          instruction: "Depois de jogar Mancala, escreva o que você achou do jogo:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Jogos e brincadeiras de imigrantes",
      exercises: [
        {
          kind: "options",
          instruction: "Imigrantes são pessoas que:",
          options: [
            "Saem de seu país de origem para viver em outro lugar",
            "Nunca saem de casa",
            "Não têm mais família",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os países de onde podem ter vindo imigrantes que trouxeram suas brincadeiras para o Brasil:",
          items: [
            "ITÁLIA",
            "JAPÃO",
            "ALEMANHA",
            "MESA",
            "LIVRO",
            "PORTUGAL",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um jogo ou brincadeira que veio de outro país e que você conheceu:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma brincadeira trazida por imigrantes que você aprendeu:",
        },
      ],
    },
    {
      theme: "Para que servem as regras dos jogos",
      exercises: [
        {
          kind: "options",
          instruction: "Para que servem as regras de um jogo?",
          options: [
            "Para organizar o jogo e deixar claro o que pode e o que não pode",
            "Para atrapalhar quem está jogando",
            "Para não deixar ninguém brincar",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule o que pode acontecer quando as regras de um jogo não são respeitadas:",
          items: [
            "CONFUSÃO",
            "BRIGA",
            "JOGO ORGANIZADO",
            "DIVERSÃO PARA TODOS",
            "DESENTENDIMENTO",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um jogo que você gosta e escreva uma regra dele:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cena de um jogo sendo jogado com todos respeitando as regras:",
        },
      ],
    },
    {
      theme: "Combinando e respeitando as regras",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva uma regra que você e seus colegas combinaram para brincar na escola:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "O que é melhor fazer quando alguém não quer seguir a regra combinada?",
          options: [
            "Conversar e explicar por que a regra é importante",
            "Brigar com a pessoa",
            "Parar de brincar com ela para sempre",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as atitudes que ajudam a combinar e respeitar regras:",
          items: [
            "CONVERSAR",
            "GRITAR",
            "OUVIR O COLEGA",
            "EMPURRAR",
            "COMBINAR ANTES",
            "TRAPACEAR",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você e seus colegas combinando as regras de uma brincadeira antes de começar a jogar:",
        },
      ],
    },
    {
      theme: "Pesquisando brincadeiras da família",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Entreviste alguém da sua família e complete:",
          items: [
            "Nome da pessoa entrevistada: __________",
            "Brincadeira preferida na infância dela: __________",
            "Com quem essa pessoa brincava: __________",
            "Onde essa pessoa brincava: __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o que essa pessoa contou sobre como era brincar na época dela:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Quem você pode entrevistar para descobrir brincadeiras antigas da família?",
          options: [
            "Avós, pais, tios ou outros parentes mais velhos",
            "Só crianças da sua idade",
            "Não é preciso perguntar para ninguém",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a brincadeira que a pessoa da sua família contou para você:",
        },
      ],
    },
    {
      theme: "Quem pode brincar dessa brincadeira?",
      exercises: [
        {
          kind: "options",
          instruction: "Uma brincadeira que exige correr muito rápido pode ser difícil para:",
          options: [
            "Uma criança que usa cadeira de rodas, por exemplo",
            "Todas as crianças igualmente",
            "Nenhuma criança",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as brincadeiras que são mais fáceis de adaptar para que uma criança com dificuldade para andar também participe:",
          items: [
            "JOGO DE TABULEIRO",
            "CORRIDA COM OBSTÁCULOS",
            "CANTIGA DE RODA SENTADO",
            "PIQUE-PEGA CORRENDO",
            "BRINCADEIRA COM AS MÃOS",
            "PULAR AMARELINHA RÁPIDO",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em uma brincadeira e escreva uma ideia de como ela poderia ser adaptada para que todas as crianças pudessem participar:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe todas as crianças da turma brincando juntas de uma brincadeira adaptada:",
        },
      ],
    },
    {
      theme: "Valorizando as diferenças",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva por que é importante conhecer brincadeiras de outras culturas e lugares:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Quando conhecemos brincadeiras diferentes das nossas, nós:",
          options: [
            "Aprendemos e passamos a valorizar outras culturas",
            "Devemos esquecer as nossas próprias brincadeiras",
            "Não aprendemos nada de novo",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as atitudes que mostram respeito às diferenças:",
          items: [
            "OUVIR O COLEGA",
            "ZOMBAR DE UMA BRINCADEIRA DIFERENTE",
            "EXPERIMENTAR BRINCAR",
            "EXCLUIR QUEM É DIFERENTE",
            "CONVIDAR PARA BRINCAR JUNTO",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe crianças diferentes entre si brincando juntas da mesma brincadeira:",
        },
      ],
    },
    {
      theme: "Investigando um brinquedo como objeto de cultura",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escolha um brinquedo para investigar e complete:",
          items: [
            "Nome do brinquedo: __________",
            "De que material ele é feito: __________",
            "Quem fez ou construiu esse brinquedo: __________",
            "Para que ele é usado: __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva a história desse brinquedo: de onde ele veio e quem já brincou com ele antes de você:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Um brinquedo pode contar a história de uma família ou de um lugar porque:",
          options: [
            "Ele guarda lembranças e pode passar de geração em geração",
            "Ele não tem nenhuma história para contar",
            "Brinquedos não podem ser guardados por muito tempo",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o brinquedo que você investigou, com seus detalhes e decoração:",
        },
      ],
    },
    {
      theme: "Dominó em Libras: aprendendo sinais brincando",
      exercises: [
        {
          kind: "options",
          instruction: "Libras é:",
          options: [
            "A língua brasileira de sinais, usada principalmente por pessoas surdas",
            "Uma língua falada apenas na Itália",
            "Um tipo de brincadeira sem nenhuma regra",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras relacionadas à Libras:",
          items: [
            "SINAIS",
            "MÃOS",
            "LÍNGUA DE SINAIS",
            "GRITAR",
            "SURDO",
            "CANTAR ALTO",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um sinal em Libras que você aprendeu brincando de dominó:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma peça do dominó em Libras com o sinal que você mais gostou:",
        },
      ],
    },
  ],
  geografia: [
    {
      theme: "Nossos lugares de vivência: escola, bairro, rua",
      exercises: [
        {
          kind: "options",
          instruction: "Marque os lugares que fazem parte da sua vivência todos os dias:",
          options: [
            "A escola",
            "O bairro onde moro",
            "A rua da minha casa",
            "Um país que eu nunca visitei",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares onde você costuma passar o seu dia:",
          items: [
            "ESCOLA",
            "PARQUE",
            "RUA DE CASA",
            "PRAÇA",
            "MERCADO",
            "CASA DA VOVÓ",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o que você mais gosta na sua escola e o que mais gosta no seu bairro:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe você brincando na rua ou no bairro onde mora:",
        },
      ],
    },
    {
      theme: "A história das migrações no bairro",
      exercises: [
        {
          kind: "lines",
          instruction: "Pergunte a um adulto da sua família: de onde ele veio antes de morar aqui? Escreva o que você descobriu:",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "A minha família veio de __________.",
            "As pessoas mudam de cidade principalmente por causa de __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os motivos que podem levar uma família a se mudar para outro bairro ou cidade:",
          items: [
            "TRABALHO",
            "ESTUDO",
            "FICAR PERTO DA FAMÍLIA",
            "PASSEIO DE UM DIA",
            "MORADIA MELHOR",
            "FÉRIAS",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a família de alguém que veio de outro lugar para morar no seu bairro:",
        },
      ],
    },
    {
      theme: "Costumes e tradições de diferentes populações",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva uma comida, uma música ou uma festa da sua família que veio de uma tradição ou cultura:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Marque as atitudes de respeito às diferenças:",
          options: [
            "Escutar com atenção histórias de outros costumes",
            "Rir dos costumes diferentes dos meus",
            "Perguntar com respeito sobre uma tradição diferente",
            "Tratar mal quem tem outra religião",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os nomes de festas e tradições que você conhece:",
          items: [
            "FESTA JUNINA",
            "CONGADA",
            "CARNAVAL",
            "MATEMÁTICA",
            "RECREIO",
            "FESTA DO DIVINO",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que é importante respeitar as tradições de outras pessoas:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Conhecendo outros bairros de São Paulo",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de um bairro de São Paulo que você conhece, além do seu:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Eu moro no bairro de __________.",
            "Um bairro diferente do meu é __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Marque o que pode nos ajudar a conhecer outros bairros da cidade:",
          options: [
            "Olhar um mapa de São Paulo",
            "Ver fotos e ilustrações de outros lugares",
            "Conversar com quem mora lá",
            "Fechar os olhos e não pensar em nada",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um mapa simples mostrando o seu bairro e outro bairro de São Paulo que você conhece:",
        },
      ],
    },
    {
      theme: "Sinais de trânsito e transporte público",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os elementos que ajudam na segurança do trânsito:",
          items: [
            "FAIXA DE PEDESTRE",
            "SEMÁFORO",
            "PLACA DE PARE",
            "BALÃO DE FESTA",
            "ASSENTO PREFERENCIAL",
            "BONECO DE NEVE",
          ],
        },
        {
          kind: "options",
          instruction: "O semáforo está vermelho. O que isso significa para os carros?",
          options: [
            "Podem seguir",
            "Devem parar",
            "Devem buzinar",
            "Podem acelerar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o semáforo:",
          items: [
            "A cor __________ manda parar.",
            "A cor __________ manda seguir.",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que existem assentos preferenciais nos ônibus e trens? Explique:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Como chegar de ônibus, trem ou metrô",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o caminho que você faz de casa até a escola (a pé, de ônibus, de carro...):",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Eu vou para a escola de __________.",
            "A viagem demora mais ou menos __________ minutos.",
          ],
        },
        {
          kind: "options",
          instruction: "Marque os meios de transporte público que existem em São Paulo:",
          options: [
            "Ônibus",
            "Metrô",
            "Trem",
            "Foguete espacial",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o transporte que você mais usa para se locomover pela cidade:",
        },
      ],
    },
    {
      theme: "As paisagens que vemos no caminho",
      exercises: [
        {
          kind: "lines",
          instruction: "Descreva uma paisagem que você vê no caminho de casa até a escola:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule elementos que podem aparecer em uma paisagem do bairro:",
          items: [
            "PRÉDIOS",
            "ÁRVORES",
            "RUA",
            "PRAÇA",
            "CASAS",
            "RIO",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma semelhança e uma diferença entre a paisagem da sua rua e a paisagem de outro lugar que você já visitou:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a paisagem que você vê pela janela de casa ou no caminho da escola:",
        },
      ],
    },
    {
      theme: "Desenhando croquis do bairro",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um croqui (desenho simples) do seu bairro, mostrando a sua casa, a escola e uma rua:",
        },
        {
          kind: "word-select",
          instruction: "Circule os elementos que podem aparecer em um croqui do bairro:",
          items: [
            "CASA",
            "ESCOLA",
            "RUA",
            "PRAÇA",
            "MERCADO",
            "NUVEM DE CHUVA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o seu croqui:",
          items: [
            "No meu croqui, a minha casa fica __________ da escola.",
            "Perto da minha casa tem __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique o que é um croqui e para que ele serve:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Onde fica? Frente, atrás, direita, esquerda",
      exercises: [
        {
          kind: "options",
          instruction: "A porta da sala fica na frente da lousa. Isso significa que, quando você olha para a lousa, a porta está:",
          options: [
            "Atrás de você",
            "Na frente de você",
            "Embaixo de você",
            "Dentro da lousa",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Levante a mão __________ (direita ou esquerda).",
            "O que está atrás de você agora é __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam posição ou localização:",
          items: [
            "FRENTE",
            "ATRÁS",
            "AMARELO",
            "DIREITA",
            "ESQUERDA",
            "CADEIRA",
            "EM CIMA",
            "EMBAIXO",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a sua sala de aula vista de cima, mostrando o que fica na frente e o que fica atrás da sua carteira:",
        },
      ],
    },
    {
      theme: "Desenhando com proporção e legenda",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe três objetos da sua casa em tamanhos diferentes: um grande, um médio e um pequeno:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o seu desenho:",
          items: [
            "O objeto maior do meu desenho é __________.",
            "O objeto menor do meu desenho é __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as características que podemos observar em um objeto:",
          items: [
            "TAMANHO",
            "FORMA",
            "TEXTURA",
            "COR",
            "SAUDADE",
            "NOME DO AMIGO",
          ],
        },
        {
          kind: "lines",
          instruction: "O que é uma legenda em um desenho ou mapa? Para que ela serve?",
          lines: 2,
        },
      ],
    },
    {
      theme: "O caminho de casa até a escola",
      exercises: [
        {
          kind: "lines",
          instruction: "Feche os olhos e lembre do caminho de casa até a escola. Escreva um cheiro, um som e uma coisa que você vê nesse caminho:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule as sensações que você pode sentir no caminho para a escola:",
          items: [
            "CHEIRO DE PÃO",
            "BARULHO DE CARRO",
            "FRIO OU CALOR",
            "GOSTO DE SORVETE",
            "TEXTURA DA CALÇADA",
            "COR DAS CASAS",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "No caminho da escola, eu ouço __________.",
            "No caminho da escola, eu sinto o cheiro de __________.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma coisa marcante que você vê todos os dias no caminho de casa até a escola:",
        },
      ],
    },
    {
      theme: "Cuidando das paisagens naturais",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as atitudes que ajudam a cuidar da natureza:",
          items: [
            "JOGAR LIXO NO CHÃO",
            "PLANTAR ÁRVORES",
            "NÃO DESPERDIÇAR ÁGUA",
            "QUEIMAR O MATO",
            "RECICLAR O LIXO",
            "CUIDAR DAS PLANTAS",
          ],
        },
        {
          kind: "options",
          instruction: "Marque exemplos de ação humana que pode prejudicar (degradar) uma paisagem natural:",
          options: [
            "Desmatar uma área verde",
            "Poluir um rio",
            "Plantar uma horta",
            "Jogar lixo em uma praça",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva sobre uma paisagem natural perto de você (praça, parque, rio...) e como as pessoas cuidam ou não cuidam dela:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma paisagem natural bem cuidada e, do lado, uma paisagem natural poluída:",
        },
      ],
    },
    {
      theme: "As plantas mudam com as estações do ano",
      exercises: [
        {
          kind: "options",
          instruction: "Marque as quatro estações do ano:",
          options: [
            "Verão",
            "Outono",
            "Inverno",
            "Primavera",
            "Feriado",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as mudanças que podem acontecer nas plantas ao longo do ano:",
          items: [
            "FOLHAS CAINDO",
            "FLORES DESABROCHANDO",
            "FRUTOS NASCENDO",
            "CARRO PASSANDO",
            "GALHOS SECOS",
            "BROTOS NOVOS",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "No __________ muitas árvores perdem as folhas.",
            "Na __________ várias plantas florescem bastante.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma mesma árvore em duas estações diferentes do ano, mostrando como ela muda:",
        },
      ],
    },
    {
      theme: "Pesquisando com entrevistas e fotografias",
      exercises: [
        {
          kind: "options",
          instruction: "Marque as fontes que podemos usar para pesquisar sobre o bairro:",
          options: [
            "Entrevistar uma pessoa mais velha",
            "Tirar fotografias do lugar",
            "Olhar mapas do bairro",
            "Inventar as respostas sem pesquisar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Uma pergunta que eu faria em uma entrevista é: __________?",
            "Uma coisa que eu fotografaria no meu bairro é __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas perguntas que você faria para um morador antigo do seu bairro:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma fotografia (como se fosse uma foto) de um lugar importante do seu bairro:",
        },
      ],
    },
    {
      theme: "O que fazemos de dia e de noite",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as atividades que costumamos fazer de dia:",
          items: [
            "IR PARA A ESCOLA",
            "DORMIR A NOITE TODA",
            "BRINCAR NO PARQUE",
            "TOMAR CAFÉ DA MANHÃ",
            "VER AS ESTRELAS",
            "ALMOÇAR",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "De dia, eu costumo __________.",
            "De noite, eu costumo __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Marque a atividade que normalmente fazemos à noite:",
          options: [
            "Tomar café da manhã",
            "Ir para a escola",
            "Dormir",
            "Almoçar",
          ],
        },
        {
          kind: "lines",
          instruction: "Compare: o que muda entre o seu dia e a sua noite? Escreva duas diferenças:",
          lines: 2,
        },
      ],
    },
    {
      theme: "De onde vêm os materiais das construções",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais que vêm da natureza e são usados nas construções:",
          items: [
            "MADEIRA",
            "AREIA",
            "ARGILA",
            "BRITA",
            "PLÁSTICO DE BRINQUEDO",
            "PEDRA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Os tijolos são feitos, principalmente, de __________.",
            "As casas de madeira usam a __________ das árvores.",
          ],
        },
        {
          kind: "options",
          instruction: "Marque de onde vem a areia usada nas construções:",
          options: [
            "Da natureza (rios, praias, pedreiras)",
            "De uma fábrica de plástico",
            "Do supermercado",
            "Da lua",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um material usado para construir a sua casa ou a sua escola:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Desenhando de cima: o primeiro passo para ler mapas",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe a sua sala de aula vista de cima, como se você fosse um passarinho olhando para baixo:",
        },
        {
          kind: "options",
          instruction: "Quando olhamos um lugar de cima, como em um mapa, o que conseguimos ver melhor?",
          options: [
            "A forma e a posição dos objetos",
            "O cheiro do lugar",
            "O barulho do lugar",
            "A temperatura do lugar",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as situações em que vemos um lugar de cima:",
          items: [
            "OLHAR PELA JANELA DO AVIÃO",
            "OLHAR UM MAPA",
            "DEITAR NO CHÃO E OLHAR PARA O LADO",
            "SUBIR EM UM LUGAR ALTO",
            "ANDAR NA RUA OLHANDO PARA FRENTE",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Quando vejo um objeto de cima, ele parece __________ (maior ou menor?) do que de perto.",
            "Um mapa mostra o lugar como se estivéssemos olhando de __________.",
          ],
        },
      ],
    },
  ],
  ciencias: [
    {
      theme: "Massa e volume dos materiais",
      exercises: [
        {
          kind: "options",
          instruction: "Qual objeto tem mais massa (é mais pesado)?",
          options: [
            "Uma pena",
            "Uma pedra do mesmo tamanho",
            "Os dois pesam igual",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os objetos que ocupam bastante espaço (têm bastante volume):",
          items: [
            "BOLA DE FUTEBOL",
            "BOTÃO",
            "CAIXA DE SAPATO",
            "CLIPE",
            "MOCHILA CHEIA",
            "MOEDA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "A quantidade de espaço que um objeto ocupa chama-se ___.",
            "A quantidade de matéria de um objeto chama-se ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha dois objetos da sala de aula e compare: qual tem mais massa? Qual ocupa mais espaço?",
          lines: 3,
        },
      ],
    },
    {
      theme: "Materiais que mudam: reversível ou não?",
      exercises: [
        {
          kind: "options",
          instruction: "O gelo derretendo e virando água é uma mudança:",
          options: [
            "Reversível (pode voltar como era)",
            "Irreversível (não pode voltar como era)",
          ],
        },
        {
          kind: "options",
          instruction: "Assar um bolo é uma mudança:",
          options: [
            "Reversível (pode voltar como era)",
            "Irreversível (não pode voltar como era)",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as mudanças que são irreversíveis (não têm volta):",
          items: [
            "FOLHA QUEIMADA",
            "ÁGUA CONGELADA",
            "OVO FRITO",
            "MASSA DE PÃO ASSADA",
            "ROUPA MOLHADA SECANDO",
            "PAPEL RASGADO",
          ],
        },
        {
          kind: "lines",
          instruction: "Descreva uma transformação que você já observou em casa. Ela foi reversível ou irreversível?",
          lines: 3,
        },
      ],
    },
    {
      theme: "Materiais e temperatura",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com quente ou frio(a):",
          items: [
            "A manteiga derrete quando fica ___.",
            "A água vira gelo quando fica muito ___.",
            "O chocolate derrete na mão porque a mão está ___.",
          ],
        },
        {
          kind: "options",
          instruction: "O que acontece com a manteiga quando ela esquenta?",
          options: [
            "Ela fica mais dura",
            "Ela derrete e fica mole",
            "Ela não muda nada",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os materiais que mudam de forma quando esquentam ou esfriam:",
          items: [
            "MANTEIGA",
            "PEDRA",
            "GELO",
            "CHOCOLATE",
            "VIDRO",
            "CERA DE VELA",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um exemplo de material que muda quando fica muito quente e outro que muda quando fica muito frio:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Para onde vai o lixo?",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais que podem ser reciclados:",
          items: [
            "GARRAFA PET",
            "CASCA DE BANANA",
            "LATA DE REFRIGERANTE",
            "GUARDANAPO SUJO",
            "CAIXA DE PAPELÃO",
            "RESTO DE COMIDA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com a cor certa da lixeira de coleta seletiva:",
          items: [
            "Papel: lixeira ___.",
            "Plástico: lixeira ___.",
            "Vidro: lixeira ___.",
            "Metal: lixeira ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Se jogarmos lixo na rua ou no rio, o que pode acontecer?",
          options: [
            "Nada muda",
            "Pode entupir bueiros e poluir a água",
            "O lixo desaparece sozinho",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma ação que você pode fazer para ajudar a cuidar do lixo da sua casa ou escola:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Materiais perecíveis e não perecíveis",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os alimentos perecíveis (estragam rápido):",
          items: [
            "LEITE",
            "ARROZ CRU",
            "BANANA",
            "SAL",
            "PÃO",
            "AÇÚCAR",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "Alimentos ___ estragam rápido e precisam de cuidados especiais.",
            "Alimentos ___ podem durar muito tempo guardados.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual desses alimentos dura mais tempo guardado no armário?",
          options: [
            "Feijão seco",
            "Carne crua",
            "Iogurte",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva dois alimentos perecíveis e dois não perecíveis que existem na sua casa:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Minhocário da sala: observando a decomposição",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "As minhocas ajudam a transformar restos de comida em ___ (adubo).",
          ],
        },
        {
          kind: "options",
          instruction: "Qual desses materiais as minhocas do minhocário conseguem decompor?",
          options: [
            "Casca de fruta",
            "Tampinha de plástico",
            "Pedaço de vidro",
          ],
        },
        {
          kind: "lines",
          instruction: "Descreva como estava a casca de fruta no início e como ela ficou depois de alguns dias no minhocário:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o minhocário da sala, mostrando as minhocas e os restos de comida em decomposição.",
        },
      ],
    },
    {
      theme: "Conservando os alimentos",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os jeitos de conservar alimentos:",
          items: [
            "GUARDAR NA GELADEIRA",
            "DEIXAR NO SOL ABERTO",
            "COLOCAR NO FREEZER",
            "DEIXAR A TAMPA ABERTA",
            "GUARDAR EM POTE FECHADO",
            "DEIXAR EM CIMA DA MESA",
          ],
        },
        {
          kind: "options",
          instruction: "Por que colocamos alimentos na geladeira?",
          options: [
            "Para eles estragarem mais rápido",
            "Para eles durarem mais tempo",
            "Para ficarem mais bonitos",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "O frio ajuda a ___ os alimentos por mais tempo.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o que pode acontecer com um alimento que fica fora da geladeira por muito tempo:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Observando o Sol no céu",
      exercises: [
        {
          kind: "options",
          instruction: "Em que parte do dia o Sol costuma nascer?",
          options: [
            "De manhã, no leste",
            "À noite",
            "No meio-dia sempre no mesmo lugar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "De manhã o Sol aparece mais ___ (baixo/alto) no céu.",
            "No meio do dia o Sol fica mais ___ (baixo/alto) no céu.",
          ],
        },
        {
          kind: "lines",
          instruction: "Observe o céu em três horários diferentes do dia e escreva onde estava o Sol em cada um:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a posição do Sol no céu de manhã, ao meio-dia e no fim da tarde.",
        },
      ],
    },
    {
      theme: "Luz e sombra",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "A sombra aparece quando um objeto bloqueia a ___.",
            "Sem luz, não existe ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Quando a luz do sol vem de um lado só, a sombra do objeto fica:",
          options: [
            "Do lado oposto à luz",
            "Do mesmo lado da luz",
            "A sombra não aparece",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as situações em que aparece sombra:",
          items: [
            "SOL ATRÁS DE VOCÊ",
            "QUARTO TOTALMENTE ESCURO",
            "LANTERNA APONTADA PARA UM OBJETO",
            "DIA NUBLADO SEM LUZ NENHUMA",
            "LÂMPADA ACESA À NOITE",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você em um dia de sol, mostrando sua sombra no chão.",
        },
      ],
    },
    {
      theme: "As fases da Lua",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os nomes das fases da Lua:",
          items: [
            "LUA NOVA",
            "LUA CRESCENTE",
            "LUA QUADRADA",
            "LUA CHEIA",
            "LUA MINGUANTE",
            "LUA TRIANGULAR",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "Quando a Lua está totalmente iluminada e redonda, chamamos de Lua ___.",
            "Quando a Lua não aparece no céu, chamamos de Lua ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Observe a Lua durante alguns dias e escreva o que você percebeu sobre a forma dela:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe as quatro fases da Lua na ordem em que elas aparecem.",
        },
      ],
    },
    {
      theme: "Batimentos, respiração e temperatura do corpo",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "O coração bate e podemos sentir isso, que chamamos de ___.",
            "Quando puxamos e soltamos o ar, estamos fazendo a ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Depois de correr bastante, o que costuma acontecer com os batimentos do coração?",
          options: [
            "Ficam mais rápidos",
            "Ficam mais lentos",
            "Param completamente",
          ],
        },
        {
          kind: "lines",
          instruction: "Coloque a mão no peito antes e depois de pular 10 vezes. Escreva o que você sentiu:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule os sinais que podemos sentir no nosso corpo:",
          items: [
            "BATIMENTOS DO CORAÇÃO",
            "RESPIRAÇÃO",
            "TEMPERATURA DO CORPO",
            "COR DA CAMISETA",
            "TAMANHO DO SAPATO",
          ],
        },
      ],
    },
    {
      theme: "Por que precisamos comer?",
      exercises: [
        {
          kind: "options",
          instruction: "Por que os seres vivos precisam se alimentar?",
          options: [
            "Para ter energia e crescer",
            "Só para se divertir",
            "Não é necessário se alimentar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "A alimentação dá ___ para o nosso corpo funcionar e crescer.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os seres vivos que precisam se alimentar:",
          items: [
            "CACHORRO",
            "PEDRA",
            "PLANTA",
            "CRIANÇA",
            "BONECA",
            "PÁSSARO",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o que pode acontecer com uma pessoa que fica muito tempo sem comer:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Alimentos que ajudam o corpo a crescer",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os alimentos que ajudam o corpo a crescer forte e saudável:",
          items: [
            "LEITE",
            "FRUTAS",
            "REFRIGERANTE",
            "OVOS",
            "BALAS",
            "VERDURAS",
          ],
        },
        {
          kind: "options",
          instruction: "Comer só doces e frituras todos os dias é uma boa forma de crescer saudável?",
          options: [
            "Sim, é o melhor jeito",
            "Não, o corpo precisa de alimentação variada",
            "Tanto faz o que comemos",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "Para o corpo crescer forte, é importante comer alimentos ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva três alimentos que você comeu hoje que ajudam seu corpo a crescer:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Como vivem os animais que conhecemos",
      exercises: [
        {
          kind: "options",
          instruction: "O peixe vive principalmente:",
          options: [
            "Na água",
            "No ar",
            "Debaixo da terra",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o nome do lugar onde cada animal vive:",
          items: [
            "O peixe vive na ___.",
            "O passarinho pode voar no ___.",
            "A minhoca vive dentro da ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os animais que conseguem voar:",
          items: [
            "PASSARINHO",
            "CACHORRO",
            "BORBOLETA",
            "PEIXE",
            "MORCEGO",
            "TARTARUGA",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um animal que você conhece e descreva onde ele vive e o que ele come:",
          lines: 3,
        },
      ],
    },
    {
      theme: "As partes de uma planta",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escreva o nome de cada parte da planta:",
          items: [
            "Fica embaixo da terra e prende a planta no chão: ___.",
            "Sobe do chão e sustenta a planta: ___.",
            "É verde e faz a planta respirar: ___.",
            "Costuma ser colorida e cheirosa: ___.",
          ],
        },
        {
          kind: "options",
          instruction: "O que a planta precisa para crescer bem?",
          options: [
            "Luz e água",
            "Escuridão total",
            "Nada, ela cresce sozinha sem cuidados",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as partes que fazem parte de uma planta:",
          items: [
            "RAIZ",
            "CAULE",
            "FOLHA",
            "RODA",
            "FLOR",
            "MOTOR",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma planta completa e escreva o nome de cada parte: raiz, caule, folha e flor.",
        },
      ],
    },
    {
      theme: "Prevenindo acidentes em casa e na escola",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as atitudes seguras:",
          items: [
            "PEDIR AJUDA DE UM ADULTO PARA MEXER EM TOMADAS",
            "CORRER PERTO DE ESCADAS",
            "NÃO MEXER EM OBJETOS CORTANTES SOZINHO",
            "BRINCAR COM FÓSFOROS",
            "USAR TESOURA COM CUIDADO",
            "PULAR EM CIMA DE CADEIRAS",
          ],
        },
        {
          kind: "options",
          instruction: "O que você deve fazer se encontrar um objeto perigoso, como uma faca ou tesoura solta?",
          options: [
            "Avisar um adulto",
            "Brincar com ele",
            "Esconder para ninguém ver",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um cuidado que você tem em casa ou na escola para evitar acidentes:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma atitude de segurança que você pratica em casa ou na escola.",
        },
      ],
    },
    {
      theme: "Cuidando do corpo",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os hábitos que ajudam a cuidar do corpo:",
          items: [
            "LAVAR AS MÃOS ANTES DE COMER",
            "ESCOVAR OS DENTES",
            "DORMIR BEM",
            "FICAR SEM TOMAR BANHO",
            "COMER FRUTAS E VERDURAS",
            "NÃO LAVAR AS MÃOS APÓS O BANHEIRO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "Devemos escovar os dentes depois das ___.",
            "Devemos lavar as mãos antes de ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que é importante dormir bem todas as noites?",
          options: [
            "Para o corpo descansar e ter energia",
            "Não faz nenhuma diferença",
            "Só para não sentir sono na escola",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva três cuidados que você tem com o seu corpo todos os dias:",
          lines: 3,
        },
      ],
    },
    {
      theme: "De onde vêm as verduras e frutas que comemos",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escreva de qual parte da planta vem cada alimento:",
          items: [
            "A cenoura é uma ___.",
            "A alface é uma ___.",
            "A maçã é um ___.",
            "O brócolis é uma ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os alimentos que comemos a raiz da planta:",
          items: [
            "CENOURA",
            "MAÇÃ",
            "BATATA",
            "ALFACE",
            "BETERRABA",
            "TOMATE",
          ],
        },
        {
          kind: "options",
          instruction: "O tomate é considerado, na botânica, um:",
          options: [
            "Fruto",
            "Raiz",
            "Caule",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma verdura ou fruta que você gosta e escreva de qual parte da planta ela vem:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Montando um prato colorido e saudável",
      exercises: [
        {
          kind: "options",
          instruction: "Um prato saudável deve ter:",
          options: [
            "Vários tipos de alimentos e cores variadas",
            "Só um tipo de alimento",
            "Somente doces",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os alimentos que podem deixar seu prato colorido e saudável:",
          items: [
            "TOMATE",
            "CENOURA",
            "REFRIGERANTE",
            "ALFACE",
            "BATATA FRITA DE PACOTE",
            "BETERRABA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase:",
          items: [
            "Um prato com alimentos de várias ___ costuma ser mais saudável e variado.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um prato colorido e saudável com pelo menos quatro alimentos diferentes.",
        },
      ],
    },
  ],
};
