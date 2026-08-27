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
      gradeYear: "2-ano",
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
      gradeYear: "2-ano",
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
    {
      theme: "Lendo, escrevendo e comparando números naturais",
      exercises: [
        { kind: "fill-blank", instruction: "Escreva por extenso os números:", items: ["234 = ___", "509 = ___", "687 = ___", "912 = ___"] },
        { kind: "fill-blank", instruction: "Compare os números usando os sinais > (maior), < (menor) ou = (igual):", items: ["356 ___ 365", "480 ___ 480", "721 ___ 712", "199 ___ 201"] },
        { kind: "options", instruction: "Qual é o maior número da lista?", options: ["345", "354", "453", "435"] },
        { kind: "lines", instruction: "Escreva em ordem crescente os números: 482, 248, 824, 428.", lines: 1 },
      ],
    },
    {
      theme: "Compondo e decompondo números",
      gradeYear: "3-ano",
      exercises: [
        { kind: "fill-blank", instruction: "Decomponha os números em centenas, dezenas e unidades:", items: ["347 = ___C + ___D + ___U", "506 = ___C + ___D + ___U", "829 = ___C + ___D + ___U"] },
        { kind: "fill-blank", instruction: "Complete a composição:", items: ["4C + 2D + 6U = ___", "7C + 0D + 3U = ___", "2C + 9D + 1U = ___"] },
        { kind: "options", instruction: "O número 632 é formado por:", options: ["6 centenas, 3 dezenas e 2 unidades", "6 dezenas, 3 centenas e 2 unidades", "6 unidades, 3 dezenas e 2 centenas"] },
        { kind: "lines", instruction: "Escreva um número de 3 algarismos e decomponha-o em centenas, dezenas e unidades:", lines: 2 },
      ],
    },
    {
      theme: "Contagem oral em ordem crescente e decrescente",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a sequência em ordem crescente, contando de 1 em 1:", items: ["58, 59, ___, ___, 62", "97, 98, ___, ___, 101"] },
        { kind: "fill-blank", instruction: "Complete a sequência em ordem decrescente, contando de 1 em 1:", items: ["45, 44, ___, ___, 41", "20, 19, ___, ___, 16"] },
        { kind: "lines", instruction: "Comece em 30 e conte de 2 em 2 até 40, escrevendo todos os números:", lines: 1 },
        { kind: "options", instruction: "Contando de trás para frente a partir de 10, qual número vem depois do 6?", options: ["7", "5", "4"] },
      ],
    },
    {
      theme: "Comparando números: maior, menor, dobro e metade",
      exercises: [
        { kind: "fill-blank", instruction: "Calcule o dobro e a metade de cada número:", items: ["Dobro de 12 = ___ / Metade de 12 = ___", "Dobro de 25 = ___ / Metade de 24 = ___", "Dobro de 40 = ___ / Metade de 40 = ___"] },
        { kind: "fill-blank", instruction: "Complete com > (maior que), < (menor que) ou entre:", items: ["18 ___ 15", "9 está ___ 5 e 12", "30 ___ 45"] },
        { kind: "options", instruction: "O triplo de 6 é:", options: ["12", "18", "9"] },
        { kind: "lines", instruction: "Se uma caixa tem 9 lápis, quantos lápis tem o dobro dessa caixa e quantos tem a metade?", lines: 2 },
      ],
    },
    {
      theme: "Números na reta numérica",
      exercises: [
        { kind: "draw", instruction: "Desenhe uma reta numérica de 0 a 20 e marque os números 4, 11 e 17:" },
        { kind: "fill-blank", instruction: "Observando uma reta numérica de 0 a 10, complete os números que faltam entre as marcações:", items: ["0, 1, ___, 3, ___, 5", "5, ___, 7, ___, 9, 10"] },
        { kind: "options", instruction: "Numa reta numérica, o número 8 fica localizado:", options: ["Entre o 7 e o 9", "Entre o 9 e o 10", "Antes do 6"] },
        { kind: "lines", instruction: "Qual número está exatamente na metade do caminho entre 10 e 20 numa reta numérica?", lines: 1 },
      ],
    },
    {
      theme: "Calculando adições e subtrações com estratégias próprias",
      exercises: [
        { kind: "fill-blank", instruction: "Resolva usando a estratégia que preferir (cálculo mental, decomposição ou desenho):", items: ["34 + 25 = ___", "58 - 23 = ___", "47 + 36 = ___", "90 - 47 = ___"] },
        { kind: "lines", instruction: "Explique, com suas palavras, como você calculou 68 + 15 sem usar conta armada:", lines: 3 },
        { kind: "options", instruction: "Uma boa estimativa para 39 + 41 é aproximadamente:", options: ["80", "60", "100"] },
        { kind: "fill-blank", instruction: "Complete decompondo as dezenas e unidades: 45 + 32 = 40 + 5 + 30 + 2 = ___", items: ["___"] },
      ],
    },
    {
      theme: "Resolvendo problemas de juntar, separar e comparar",
      exercises: [
        { kind: "lines", instruction: "Ana tinha 24 figurinhas e ganhou mais 15. Com quantas figurinhas ela ficou? Mostre o cálculo:", lines: 2 },
        { kind: "lines", instruction: "Pedro tinha 50 balas e deu 18 para os amigos. Quantas balas sobraram? Mostre o cálculo:", lines: 2 },
        { kind: "lines", instruction: "Marcos tem 32 carrinhos e Bruna tem 19. Quantos carrinhos a mais Marcos tem do que Bruna?", lines: 2 },
        { kind: "options", instruction: "Quando comparamos duas quantidades para saber a diferença entre elas, usamos:", options: ["Subtração", "Multiplicação", "Nenhuma operação"] },
      ],
    },
    {
      theme: "Adição e subtração com reserva e recurso (conta armada)",
      exercises: [
        { kind: "fill-blank", instruction: "Resolva as adições em conta armada, usando reserva quando necessário:", items: ["48 + 37 = ___", "156 + 268 = ___", "329 + 194 = ___"] },
        { kind: "fill-blank", instruction: "Resolva as subtrações em conta armada, usando recurso quando necessário:", items: ["82 - 45 = ___", "300 - 127 = ___", "521 - 236 = ___"] },
        { kind: "lines", instruction: "Explique quando é preciso 'pedir emprestado' (recurso) numa subtração:", lines: 2 },
        { kind: "options", instruction: "Na conta 65 + 28, ao somar as unidades (5 + 8 = 13), o que fazemos?", options: ["Escrevemos 3 e reservamos 1 dezena", "Escrevemos 13 inteiro", "Ignoramos o 1"] },
      ],
    },
    {
      theme: "Fatos básicos da multiplicação por 2, 3, 4 e 5",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as multiplicações:", items: ["2 x 6 = ___", "3 x 7 = ___", "4 x 5 = ___", "5 x 8 = ___", "3 x 9 = ___"] },
        { kind: "fill-blank", instruction: "Complete as divisões relacionadas:", items: ["10 : 2 = ___", "15 : 3 = ___", "20 : 4 = ___", "25 : 5 = ___"] },
        { kind: "word-select", instruction: "Circule os resultados da tabuada do 4:", items: ["12", "18", "16", "20", "9", "24"] },
        { kind: "options", instruction: "Quanto é 5 x 6?", options: ["30", "25", "35"] },
      ],
    },
    {
      theme: "Problemas de multiplicação: proporcionalidade e arranjo retangular",
      exercises: [
        { kind: "lines", instruction: "Cada caixa tem 4 ovos. Quantos ovos há em 6 caixas? Mostre o cálculo:", lines: 2 },
        { kind: "draw", instruction: "Desenhe um arranjo retangular de 3 linhas por 5 colunas de bolinhas e escreva a multiplicação que ele representa:" },
        { kind: "lines", instruction: "Uma sala tem as cadeiras organizadas em 4 fileiras com 5 cadeiras cada. Quantas cadeiras há ao todo?", lines: 2 },
        { kind: "options", instruction: "Se cada criança ganha 3 balões e há 7 crianças, quantos balões são necessários?", options: ["21", "18", "24"] },
      ],
    },
    {
      theme: "Usando os sinais das operações matemáticas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com o sinal correto (+, -, x, : ou =):", items: ["8 ___ 3 = 11", "20 ___ 4 = 5", "6 ___ 5 = 30", "15 ___ 6 = 9"] },
        { kind: "word-select", instruction: "Circule os sinais usados na multiplicação e na divisão:", items: ["+", "-", "x", ":", "="] },
        { kind: "lines", instruction: "Escreva uma sentença matemática usando o sinal de igualdade (=) que represente 7 + 8:", lines: 1 },
        { kind: "options", instruction: "Qual sinal indica que dois valores são iguais?", options: ["=", "+", ":"] },
      ],
    },
    {
      theme: "Regularidades em sequências numéricas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as sequências, descobrindo a regularidade:", items: ["5, 10, 15, ___, ___, 30", "100, 90, 80, ___, ___, 50", "3, 6, 9, ___, ___, 18"] },
        { kind: "lines", instruction: "Na sequência 4, 8, 12, 16..., qual é a regra usada para passar de um número ao próximo?", lines: 1 },
        { kind: "options", instruction: "Na sequência 50, 45, 40, 35..., qual é o próximo número?", options: ["30", "25", "32"] },
        { kind: "lines", instruction: "Crie sua própria sequência somando sempre 3, começando do número 2:", lines: 1 },
      ],
    },
    {
      theme: "Descobrindo padrões em sequências",
      exercises: [
        { kind: "fill-blank", instruction: "Descubra o padrão e complete os números que faltam:", items: ["2, 4, 6, ___, 10, ___", "1, 3, 5, 7, ___, ___"] },
        { kind: "draw", instruction: "Observe o padrão de figuras: estrela, círculo, círculo, estrela, círculo, círculo... Desenhe as próximas 3 figuras da sequência:" },
        { kind: "lines", instruction: "Explique qual é o padrão da sequência 1, 4, 7, 10, 13...", lines: 2 },
        { kind: "options", instruction: "Na sequência de figuras quadrado, triângulo, quadrado, triângulo..., a 7ª figura será:", options: ["Quadrado", "Triângulo", "Círculo"] },
      ],
    },
    {
      theme: "A ideia de igualdade em sentenças matemáticas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete para que as sentenças fiquem corretas (iguais dos dois lados):", items: ["6 + 4 = ___ + 2", "15 - 5 = 20 - ___", "8 + 3 = ___ - 1"] },
        { kind: "lines", instruction: "Escreva duas sentenças de adição diferentes que tenham o resultado 10:", lines: 2 },
        { kind: "lines", instruction: "Escreva duas sentenças de subtração diferentes que tenham o resultado 5:", lines: 2 },
        { kind: "options", instruction: "A sentença 9 + 1 = 12 - 2 está correta porque:", options: ["Os dois lados resultam em 10", "Os dois lados resultam em 11", "Os dois lados são diferentes"] },
      ],
    },
    {
      theme: "Localizando objetos no espaço com maquetes e croquis",
      exercises: [
        { kind: "draw", instruction: "Desenhe um croqui simples da sua sala de aula, indicando onde fica a porta, a lousa e a sua carteira:" },
        { kind: "lines", instruction: "Observando uma maquete de um bairro, descreva onde fica a escola em relação à praça (na frente, atrás, ao lado):", lines: 2 },
        { kind: "options", instruction: "Um ponto de referência serve para:", options: ["Ajudar a localizar um objeto no espaço", "Colorir o desenho", "Contar os objetos"] },
        { kind: "fill-blank", instruction: "Complete usando pontos de referência (perto de, longe de, ao lado de, em frente a):", items: ["A biblioteca fica ___ da secretaria.", "O parquinho fica ___ do portão."] },
      ],
    },
    {
      theme: "Descrevendo a movimentação de objetos no espaço",
      exercises: [
        { kind: "draw", instruction: "Desenhe um croqui simples mostrando o caminho de casa até a escola, com o início e o fim marcados:" },
        { kind: "lines", instruction: "Descreva o trajeto que um robô deve fazer para ir da porta até a mesa do professor, usando as palavras direita, esquerda, para frente:", lines: 3 },
        { kind: "options", instruction: "Se você está de frente para a lousa e vira para o lado onde fica sua mão que escreve, você virou para:", options: ["A direita (se for destro)", "Para trás", "Para cima"] },
        { kind: "fill-blank", instruction: "Complete indicando a direção do movimento:", items: ["O carrinho andou 3 passos para ___.", "A formiga subiu e depois desceu, ou seja, ela se moveu para ___ e para ___."] },
      ],
    },
    {
      theme: "Elementos das figuras geométricas planas e espaciais",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com o número de lados e vértices de cada figura plana:", items: ["Triângulo: ___ lados e ___ vértices", "Quadrado: ___ lados e ___ vértices", "Pentágono: ___ lados e ___ vértices"] },
        { kind: "fill-blank", instruction: "Complete com o nome dos elementos das figuras espaciais:", items: ["O cubo tem faces, vértices e ___.", "A pirâmide tem uma base e faces em formato de ___."] },
        { kind: "word-select", instruction: "Circule os elementos que uma figura geométrica espacial pode ter:", items: ["Face", "Aresta", "Vértice", "Cor", "Cheiro"] },
        { kind: "draw", instruction: "Desenhe um triângulo e marque seus 3 lados e seus 3 vértices:" },
      ],
    },
    {
      theme: "Comparando figuras planas e espaciais",
      exercises: [
        { kind: "fill-blank", instruction: "Relacione cada figura espacial com a figura plana parecida com ela:", items: ["Cubo se parece com ___", "Bloco retangular se parece com ___", "Esfera se parece com ___", "Pirâmide se parece com ___"] },
        { kind: "options", instruction: "Qual figura plana está relacionada ao cone e ao cilindro?", options: ["Círculo", "Quadrado", "Triângulo"] },
        { kind: "word-select", instruction: "Circule as figuras que são planas (não espaciais):", items: ["Círculo", "Cubo", "Triângulo", "Esfera", "Retângulo"] },
        { kind: "draw", instruction: "Desenhe um objeto do dia a dia que lembre uma esfera e outro que lembre um bloco retangular:" },
      ],
    },
    {
      theme: "Planificações de figuras espaciais",
      exercises: [
        { kind: "lines", instruction: "Explique com suas palavras o que é a planificação de uma figura espacial:", lines: 2 },
        { kind: "options", instruction: "A planificação do cubo é formada por:", options: ["6 quadrados", "4 triângulos", "2 círculos"] },
        { kind: "fill-blank", instruction: "Relacione a figura espacial com sua planificação:", items: ["Cone: um círculo e um ___", "Cilindro: dois círculos e um ___", "Pirâmide: um quadrado (base) e triângulos nas ___"] },
        { kind: "draw", instruction: "Desenhe a planificação (o molde aberto) de uma caixa em formato de bloco retangular:" },
      ],
    },
    {
      theme: "Explorando pirâmides, cubos, cones, cilindros e esferas",
      exercises: [
        { kind: "word-select", instruction: "Circule os nomes das figuras geométricas espaciais:", items: ["Cubo", "Círculo", "Cone", "Triângulo", "Esfera", "Cilindro"] },
        { kind: "fill-blank", instruction: "Complete com o nome do objeto do cotidiano parecido com cada figura espacial:", items: ["Cubo: ___", "Cilindro: ___", "Esfera: ___", "Cone: ___"] },
        { kind: "options", instruction: "Qual figura espacial não possui vértices?", options: ["Esfera", "Cubo", "Pirâmide"] },
        { kind: "lines", instruction: "Escolha uma figura espacial (cubo, cone, cilindro, esfera ou pirâmide) e descreva suas características:", lines: 3 },
      ],
    },
    {
      theme: "O que é mais provável? Explorando o acaso",
      exercises: [
        { kind: "lines", instruction: "Numa caixa há 8 bolinhas azuis e 2 bolinhas vermelhas. É mais provável tirar uma bolinha azul ou vermelha sem olhar? Explique.", lines: 2 },
        { kind: "options", instruction: "Ao jogar um dado comum (de 1 a 6), qual é a chance de cair no número 7?", options: ["Impossível", "Certo", "Provável"] },
        { kind: "options", instruction: "Se uma moeda é jogada para cima, qual evento é mais provável?", options: ["Dar cara ou dar coroa têm a mesma chance", "Sempre dar cara", "Sempre dar coroa"] },
        { kind: "lines", instruction: "Cite um evento do dia a dia que seja pouco provável de acontecer:", lines: 1 },
      ],
    },
    {
      theme: "Lendo tabelas e gráficos de barras",
      gradeYear: "3-ano",
      exercises: [
        { kind: "lines", instruction: "Observe um gráfico de barras sobre o esporte preferido da turma. Qual barra representa o esporte mais votado?", lines: 1 },
        { kind: "options", instruction: "O título de um gráfico serve para indicar:", options: ["O assunto que o gráfico representa", "A cor das barras", "O nome da escola"] },
        { kind: "fill-blank", instruction: "Em um gráfico de barras, futebol recebeu 12 votos e vôlei recebeu 7 votos. A diferença entre eles é de ___ votos.", items: ["___"] },
        { kind: "draw", instruction: "Desenhe um gráfico de barras simples mostrando: 6 alunos preferem suco, 4 preferem água e 3 preferem chá:" },
      ],
    },
    {
      theme: "Fazendo pesquisa e organizando dados em tabelas",
      exercises: [
        { kind: "lines", instruction: "Pergunte a 10 colegas qual é a cor preferida deles e anote os resultados aqui:", lines: 4 },
        { kind: "draw", instruction: "Organize os dados que você coletou em uma tabela simples com duas colunas: cor e número de votos:" },
        { kind: "options", instruction: "Depois de coletar os dados de uma pesquisa, o próximo passo é:", options: ["Organizar e classificar os dados em uma tabela", "Jogar os dados fora", "Contar apenas os primeiros"] },
        { kind: "lines", instruction: "Com base na sua tabela, qual foi a cor mais votada pela turma?", lines: 1 },
      ],
    },
    {
      theme: "Interpretando e descrevendo dados de tabelas e gráficos",
      exercises: [
        { kind: "lines", instruction: "Observe uma tabela de dupla entrada com o número de meninos e meninas que praticam natação e dança. Descreva o que a tabela mostra:", lines: 3 },
        { kind: "options", instruction: "Uma tabela de dupla entrada organiza os dados em:", options: ["Linhas e colunas", "Somente linhas", "Somente uma coluna"] },
        { kind: "fill-blank", instruction: "Com base em um gráfico de colunas sobre animais de estimação (cachorro: 9, gato: 6, peixe: 3), complete:", items: ["O animal mais comum é o ___.", "O animal menos comum é o ___."] },
        { kind: "lines", instruction: "Escreva uma conclusão sobre os dados do gráfico de animais de estimação:", lines: 2 },
      ],
    },
    {
      theme: "Resolvendo problemas com dinheiro",
      exercises: [
        { kind: "lines", instruction: "Uma bala custa R$ 0,50 e um chiclete custa R$ 0,75. Quanto você gasta comprando os dois?", lines: 2 },
        { kind: "lines", instruction: "Joana tem uma nota de R$ 10,00 e comprou um lanche de R$ 6,50. Quanto de troco ela deve receber?", lines: 2 },
        { kind: "fill-blank", instruction: "Complete quantas moedas de R$ 1,00 formam o mesmo valor:", items: ["1 nota de R$ 5,00 = ___ moedas de R$ 1,00", "1 nota de R$ 10,00 = ___ moedas de R$ 1,00"] },
        { kind: "options", instruction: "Para pagar exatamente R$ 8,00, qual combinação é possível?", options: ["1 nota de R$ 5,00 + 3 moedas de R$ 1,00", "1 nota de R$ 5,00 + 1 moeda de R$ 1,00", "2 notas de R$ 2,00"] },
      ],
    },
    {
      theme: "Relações entre dia, semana, mês e ano no calendário",
      exercises: [
        { kind: "fill-blank", instruction: "Observando um calendário, complete:", items: ["Uma semana tem ___ dias.", "Um ano tem ___ meses.", "Um mês tem em média ___ dias."] },
        { kind: "options", instruction: "Um bimestre corresponde a quantos meses?", options: ["2 meses", "4 meses", "6 meses"] },
        { kind: "lines", instruction: "Consultando um calendário, escreva a data de hoje e o dia da semana correspondente:", lines: 1 },
        { kind: "fill-blank", instruction: "Complete quantos meses tem cada período:", items: ["1 semestre = ___ meses", "1 ano = ___ semestres"] },
      ],
    },
    {
      theme: "Lendo horas e minutos no relógio",
      exercises: [
        { kind: "draw", instruction: "Desenhe os ponteiros em um relógio marcando 7 horas e 30 minutos:" },
        { kind: "fill-blank", instruction: "Observando um relógio digital, complete o horário por extenso:", items: ["09:15 = ___ horas e ___ minutos", "14:45 = ___ horas e ___ minutos"] },
        { kind: "lines", instruction: "A aula começa às 13h e termina às 14h30. Quanto tempo dura a aula?", lines: 1 },
        { kind: "options", instruction: "Quantos minutos há em uma hora?", options: ["60 minutos", "100 minutos", "30 minutos"] },
      ],
    },
    {
      theme: "Escolhendo o instrumento certo para medir",
      exercises: [
        { kind: "fill-blank", instruction: "Escreva o instrumento mais adequado para cada medição:", items: ["Medir o comprimento da mesa: ___", "Medir o tempo de uma corrida: ___", "Medir a capacidade de uma garrafa: ___"] },
        { kind: "options", instruction: "Para medir quantos minutos você leva para escovar os dentes, o melhor instrumento é:", options: ["Relógio ou cronômetro", "Régua", "Balança"] },
        { kind: "word-select", instruction: "Circule os instrumentos usados para medir comprimento:", items: ["Fita métrica", "Termômetro", "Régua", "Trena", "Relógio"] },
        { kind: "lines", instruction: "Explique por que não usamos uma régua para medir a capacidade de um copo de água:", lines: 2 },
      ],
    },
    {
      theme: "Medindo comprimentos com metro, centímetro e milímetro",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as conversões:", items: ["1 metro = ___ centímetros", "1 centímetro = ___ milímetros", "2 metros = ___ centímetros"] },
        { kind: "lines", instruction: "Meça com uma régua o comprimento do seu lápis e anote o resultado em centímetros:", lines: 1 },
        { kind: "options", instruction: "Qual unidade é mais adequada para medir o comprimento da sala de aula?", options: ["Metro", "Milímetro", "Centímetro"] },
        { kind: "fill-blank", instruction: "Complete comparando os comprimentos usando > ou <:", items: ["1 metro ___ 80 centímetros", "15 centímetros ___ 1 metro"] },
      ],
    },
    {
      theme: "Medindo capacidades com litro e mililitro",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as conversões:", items: ["1 litro = ___ mililitros", "meio litro = ___ mililitros"] },
        { kind: "lines", instruction: "Uma garrafa tem 2 litros de suco. Se forem usados 500 mililitros, quantos mililitros sobram?", lines: 2 },
        { kind: "options", instruction: "Qual unidade é mais adequada para medir a capacidade de uma colher de remédio?", options: ["Mililitro", "Litro", "Metro"] },
        { kind: "word-select", instruction: "Circule os objetos que costumam ter capacidade medida em litros:", items: ["Garrafa de água", "Piscina", "Colher de chá", "Balde", "Régua"] },
      ],
    },
    {
      theme: "Medindo massa com quilograma e grama",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as conversões:", items: ["1 quilograma = ___ gramas", "meio quilograma = ___ gramas"] },
        { kind: "lines", instruction: "Um pacote de arroz pesa 5 quilogramas e um pacote de feijão pesa 1 quilograma. Qual é o peso total dos dois pacotes juntos?", lines: 2 },
        { kind: "options", instruction: "Qual unidade é mais adequada para pesar uma maçã?", options: ["Grama", "Quilograma", "Litro"] },
        { kind: "word-select", instruction: "Circule os objetos que costumam ser pesados em quilogramas:", items: ["Um saco de batatas", "Uma moeda", "Uma pessoa", "Um clipe de papel", "Uma mochila cheia"] },
      ],
    },
    {
      theme: "Criando e mudando regras de um jogo",
      exercises: [
        { kind: "lines", instruction: "Escolha um jogo que você conhece e escreva as 3 principais regras dele:", lines: 3 },
        { kind: "lines", instruction: "Proponha uma mudança em uma das regras desse jogo, sem tirar o desafio dele:", lines: 2 },
        { kind: "options", instruction: "Ao mudar uma regra de um jogo, é importante que o jogo:", options: ["Continue desafiador e divertido", "Fique impossível de jogar", "Perca todo o sentido"] },
        { kind: "lines", instruction: "Explique o que pode acontecer se um jogo não tiver nenhuma regra:", lines: 2 },
      ],
    },
    {
      theme: "Estratégias para vencer um jogo",
      exercises: [
        { kind: "lines", instruction: "Escolha um jogo de tabuleiro ou de cartas que você joga e descreva uma estratégia que você usa para vencer:", lines: 3 },
        { kind: "lines", instruction: "Explique por que essa estratégia funciona bem nesse jogo:", lines: 2 },
        { kind: "options", instruction: "Ter uma estratégia em um jogo significa:", options: ["Planejar as jogadas para alcançar o objetivo", "Jogar sem pensar", "Copiar sempre o adversário"] },
        { kind: "lines", instruction: "Depois de jogar uma partida, registre se sua estratégia funcionou e o que você mudaria:", lines: 2 },
      ],
    },
    {
      theme: "Projeto: água potável e saúde",
      exercises: [
        { kind: "lines", instruction: "Explique com suas palavras por que é importante beber água potável (tratada e limpa):", lines: 2 },
        { kind: "lines", instruction: "Se uma pessoa deve beber cerca de 2 litros de água por dia e já bebeu 800 mililitros, quantos mililitros ainda faltam?", lines: 2 },
        { kind: "lines", instruction: "Pesquise e registre o número de copos de água que você bebeu ontem. Some o total aproximado em mililitros (considere 1 copo = 200 mL):", lines: 2 },
        { kind: "options", instruction: "Qual atitude ajuda a economizar água potável em casa?", options: ["Fechar a torneira ao escovar os dentes", "Deixar a torneira aberta o tempo todo", "Tomar banhos muito longos"] },
      ],
    },
    {
      theme: "Projeto: saneamento básico e saúde",
      exercises: [
        { kind: "lines", instruction: "Explique com suas palavras o que é saneamento básico e por que ele é importante para a saúde:", lines: 3 },
        { kind: "options", instruction: "A falta de saneamento básico pode causar:", options: ["Doenças relacionadas à água contaminada", "Mais brincadeiras no parque", "Melhor qualidade do ar"] },
        { kind: "lines", instruction: "Numa pesquisa da turma, 18 em cada 25 alunos disseram ter coleta de esgoto em casa. Quantos alunos disseram não ter?", lines: 2 },
        { kind: "lines", instruction: "Cite duas atitudes que ajudam a manter o saneamento básico funcionando bem na sua rua:", lines: 2 },
      ],
    },
    {
      theme: "Criando problemas a partir de uma sentença matemática",
      exercises: [
        { kind: "lines", instruction: "Crie um problema (uma historinha) que possa ser resolvido pela sentença 24 + 18 = 42:", lines: 3 },
        { kind: "lines", instruction: "Crie um problema que possa ser resolvido pela sentença 6 x 5 = 30:", lines: 3 },
        { kind: "lines", instruction: "Depois de criar o problema, resolva-o e verifique se o resultado faz sentido:", lines: 2 },
        { kind: "options", instruction: "Ao criar um problema a partir de uma sentença matemática, é importante que a história:", options: ["Combine com a operação e o resultado da sentença", "Não tenha nenhuma relação com números", "Seja sempre sobre animais"] },
      ],
    },
    {
      theme: "Investigando a propriedade comutativa da adição",
      exercises: [
        { kind: "fill-blank", instruction: "Verifique se a ordem das parcelas muda o resultado, completando:", items: ["7 + 5 = ___ e 5 + 7 = ___", "12 + 8 = ___ e 8 + 12 = ___"] },
        { kind: "lines", instruction: "Explique com suas palavras o que você percebeu ao trocar a ordem dos números na adição:", lines: 2 },
        { kind: "options", instruction: "A propriedade comutativa da adição diz que:", options: ["Trocar a ordem das parcelas não muda o resultado", "Trocar a ordem das parcelas sempre muda o resultado", "Só funciona com números pares"] },
        { kind: "lines", instruction: "Escreva um exemplo próprio de adição e comprove a propriedade comutativa trocando a ordem dos números:", lines: 2 },
      ],
    },
    {
      theme: "Números que marcam lugar: a fila do ônibus",
      exercises: [
        {
          kind: "options",
          instruction: "Pedro chegou na parada e ficou em 4º lugar na fila do ônibus. O número 4 está indicando:",
          options: [
            "A idade de Pedro",
            "A posição de Pedro na fila",
            "A quantidade de ônibus",
            "O horário do ônibus",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o número da posição de cada criança na fila:",
          items: [
            "A primeira criança da fila está em ___ lugar",
            "A criança depois da 2ª está em ___ lugar",
            "A criança depois da 5ª está em ___ lugar",
            "A última criança, a oitava, está em ___ lugar",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva sobre uma vez em que você ficou numa fila (no mercado, na escola, no ônibus). Em que posição você estava?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma fila de pessoas esperando o ônibus e numere cada uma de acordo com sua posição:",
        },
      ],
    },
    {
      theme: "Montando a conta com os sinais certos",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as contas com o sinal + ou -:",
          items: [
            "8 ___ 3 = 11",
            "10 ___ 4 = 6",
            "5 ___ 5 = 10",
            "9 ___ 2 = 7",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam que a conta deve ser de SOMAR (adição):",
          items: [
            "GANHOU",
            "PERDEU",
            "GASTOU",
            "RECEBEU",
            "COMPROU",
            "DEU",
          ],
        },
        {
          kind: "lines",
          instruction: "Maria tinha 6 figurinhas e ganhou mais 3. Escreva a conta com o sinal certo e o resultado:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "João tinha 12 bolinhas de gude e perdeu 5 numa partida. Qual sinal ele deve usar para descobrir quantas restaram?",
          options: [
            "+",
            "-",
            "=",
            "×",
          ],
        },
      ],
    },
    {
      theme: "Trocando moedas: quantas de 1 real formam 5?",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete quantas moedas de 1 real formam o mesmo valor:",
          items: [
            "1 moeda de 5 reais = ___ moedas de 1 real",
            "1 moeda de 2 reais = ___ moedas de 1 real",
            "1 moeda de 10 reais = ___ moedas de 1 real",
            "1 moeda de 1 real = ___ moeda de 1 real",
          ],
        },
        {
          kind: "options",
          instruction: "Se você trocar uma nota de 5 reais só por moedas de 1 real, quantas moedas vai receber?",
          options: [
            "3 moedas",
            "5 moedas",
            "10 moedas",
            "1 moeda",
          ],
        },
        {
          kind: "lines",
          instruction: "Imagine que você vai trocar dinheiro no mercadinho da escola. Escreva o que você compraria com 5 moedas de 1 real:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe 5 moedas de 1 real ao lado de uma moeda de 5 reais, mostrando que valem o mesmo:",
        },
      ],
    },
    {
      theme: "Caça-números na sala de aula",
      exercises: [
        {
          kind: "options",
          instruction: "Observe o número 12 escrito na porta da sala de aula. O que esse número representa?",
          options: [
            "Um código que identifica a sala",
            "A quantidade de alunos da turma",
            "A altura da porta",
            "A hora do recreio",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete dizendo se o número é um código, uma quantidade ou uma medida:",
          items: [
            "O número da camisa do jogador é um ___",
            "O número de lápis dentro da caixa é uma ___",
            "O número marcado na fita métrica é uma ___",
            "O número da sua casa é um ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Procure um número escondido na sala de aula (no relógio, no calendário, num cartaz) e escreva o que ele representa:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe três lugares da sala de aula onde há números escritos, como o calendário, o relógio ou um cartaz.",
        },
      ],
    },
    {
      theme: "Verdadeiro ou falso: a igualdade está certa?",
      exercises: [
        {
          kind: "options",
          instruction: "A sentença 4 + 4 = 9 está:",
          options: [
            "Certa",
            "Errada",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete cada sentença com V (verdadeira) ou F (falsa):",
          items: [
            "6 + 2 = 8 ( ___ )",
            "7 + 1 = 9 ( ___ )",
            "10 - 3 = 7 ( ___ )",
            "5 + 5 = 11 ( ___ )",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma sentença falsa da lista acima e escreva como ela ficaria certa:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma balança de dois pratos bem equilibrada, mostrando uma igualdade que você conhece, como 2 + 2 = 4.",
        },
      ],
    },
    {
      theme: "Montando o valor certo com cédulas e moedas",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com cédulas ou moedas que juntas formam o valor pedido:",
          items: [
            "R$ 5 = ___ + ___",
            "R$ 10 = ___ + ___",
            "R$ 2 = ___ + ___",
            "R$ 1 = ___ + ___",
          ],
        },
        {
          kind: "options",
          instruction: "Para pagar exatamente R$ 7, qual combinação você pode usar?",
          options: [
            "1 nota de R$ 5 e 1 moeda de R$ 2",
            "1 nota de R$ 2 e 1 moeda de R$ 1",
            "2 moedas de R$ 1",
            "1 nota de R$ 10",
          ],
        },
        {
          kind: "lines",
          instruction: "Imagine que você vai comprar um doce de R$ 3 na cantina. Escreva quais moedas ou notas você usaria:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe as cédulas e moedas que você usaria para pagar R$ 6.",
        },
      ],
    },
    {
      theme: "Duelo de dados: quem tira o maior número?",
      exercises: [
        {
          kind: "options",
          instruction: "Dois dados formaram os números 34 e 43. Qual deles é o maior?",
          options: [
            "34",
            "43",
            "Os dois são iguais",
            "Não dá para saber",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Em cada dupla de números, escreva qual é o maior:",
          items: [
            "52 e 25: o maior é ___",
            "18 e 81: o maior é ___",
            "39 e 93: o maior é ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Jogue (ou imagine) dois dados duas vezes seguidas para formar dois números de dois algarismos. Escreva os números e diga qual venceu o duelo:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe dois dados com os pontos organizados para formar o maior número de dois algarismos possível:",
        },
      ],
    },
    {
      theme: "Escada numérica de 3 em 3",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a escada numérica que sobe de 3 em 3:",
          items: [
            "3, 6, 9, ___, ___",
            "10, 13, 16, ___, ___",
            "21, 24, ___, 30, ___",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a regra da sequência 5, 8, 11, 14?",
          options: [
            "Soma 3 a cada degrau",
            "Soma 2 a cada degrau",
            "Soma 5 a cada degrau",
            "Subtrai 3 a cada degrau",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um número para começar e escreva 5 números de uma escada que sobe de 3 em 3:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma escada com 5 degraus e escreva em cada um um número da sequência de 3 em 3, começando no 2:",
        },
      ],
    },
    {
      theme: "Que horas o recreio começa? Lendo o relógio da rotina",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o horário em que o recreio da sua turma começa e o que você mais gosta de fazer nesse momento:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "O relógio digital da escola mostra 09:45. Isso é:",
          options: [
            "9 horas e 45 minutos da manhã",
            "9 horas e 45 minutos da noite",
            "4 horas e 9 minutos",
            "45 horas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete os horários da rotina da escola:",
          items: [
            "A aula começa às ___:00",
            "O recreio começa às ___:00",
            "A aula termina às ___:00",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um relógio digital mostrando a hora em que você acha que o recreio da sua turma começa:",
        },
      ],
    },
    {
      theme: "Ordenando os aniversariantes do mês",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com o nome de quem nasceu primeiro em cada dupla:",
          items: [
            "Bia (dia 4) e Caio (dia 17): nasceu primeiro ___",
            "Duda (dia 25) e Théo (dia 9): nasceu primeiro ___",
            "Sofia (dia 12) e Igor (dia 30): nasceu primeiro ___",
            "Ana (dia 6) e Davi (dia 3): nasceu primeiro ___",
          ],
        },
        {
          kind: "options",
          instruction: "Se um colega nasceu no dia 21 e outro no dia 8, qual data vem primeiro na ordem do calendário?",
          options: [
            "Dia 8",
            "Dia 21",
            "As duas juntas",
            "Nenhuma das duas",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o dia do seu aniversário e o de mais duas pessoas da sua família, em ordem, do menor para o maior número:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um bolo de aniversário com velinhas, mostrando quantos anos você vai fazer no seu próximo aniversário:",
        },
      ],
    },
    {
      theme: "Construindo a sequência dos números pares",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a sequência de números pares:",
          items: [
            "2, 4, 6, ___, 10",
            "12, 14, ___, 18, 20",
            "20, 18, ___, 14, 12",
            "10, ___, 6, 4, 2",
          ],
        },
        {
          kind: "options",
          instruction: "Qual desses números NÃO é par?",
          options: [
            "8",
            "14",
            "21",
            "30",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva os números pares que existem entre 30 e 40:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe 6 bolinhas dentro de uma caixa, formando um número par de bolinhas. Depois escreva esse número:",
        },
      ],
    },
    {
      theme: "Qual relógio mostra o horário mais cedo?",
      exercises: [
        {
          kind: "options",
          instruction: "Observe os horários: 7h e 15h. Qual deles é mais cedo, de manhã?",
          options: [
            "7h",
            "15h",
            "Os dois ao mesmo tempo",
            "Não dá para saber",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete comparando os horários:",
          items: [
            "Entre 8h e 10h, o horário mais cedo é ___",
            "Entre 13h e 9h, o horário mais cedo é ___",
            "Entre 16h e 11h, o horário mais tarde é ___",
            "Entre 6h e 18h, o horário mais tarde é ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o horário que você acorda e o horário que você almoça. Qual dos dois é mais cedo?",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe dois relógios digitais: um mostrando a hora que você vai para a escola e outro mostrando a hora que você volta para casa:",
        },
      ],
    },
    {
      theme: "Montando números com o material dourado",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete decompondo os números em dezenas e unidades:",
          items: [
            "23 = __ dezena(s) e __ unidade(s)",
            "45 = __ dezena(s) e __ unidade(s)",
            "18 = __ dezena(s) e __ unidade(s)",
            "52 = __ dezena(s) e __ unidade(s)",
          ],
        },
        {
          kind: "options",
          instruction: "No material dourado, o que representa a barrinha comprida?",
          options: [
            "Uma dezena",
            "Uma unidade",
            "Uma centena",
            "Meia dezena",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um número entre 10 e 50. Escreva quantas barrinhas (dezenas) e quantos cubinhos (unidades) você usaria para montar esse número:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe as barrinhas e os cubinhos do material dourado para representar o número 27:",
        },
      ],
    },
    {
      theme: "Mapa do tesouro da sala de aula",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um mapa simples da sala de aula, marcando com um X o lugar onde você escondeu o tesouro:",
        },
        {
          kind: "lines",
          instruction: "Escreva as pistas que você daria para um colega chegar até o tesouro (por exemplo: vire à direita perto da porta):",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Se o tesouro está perto da janela, qual é a melhor pista?",
          options: [
            "Ande até a janela e olhe embaixo da mesa",
            "Procure debaixo da cama",
            "Vá até o banheiro",
            "Olhe no armário da cozinha",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam posição ou direção:",
          items: [
            "JANELA",
            "ESQUERDA",
            "LÁPIS",
            "PERTO",
            "CADERNO",
            "DIREITA",
            "MOCHILA",
            "LONGE",
          ],
        },
      ],
    },
    {
      theme: "O que vem depois? Prevendo os dias da semana",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com o dia da semana que falta:",
          items: [
            "Segunda-feira, terça-feira, __________, quinta-feira",
            "Sexta-feira, __________, domingo",
            "__________, terça-feira, quarta-feira",
            "Quarta-feira, quinta-feira, __________",
          ],
        },
        {
          kind: "options",
          instruction: "Se hoje é quinta-feira, que dia será amanhã?",
          options: [
            "Sexta-feira",
            "Quarta-feira",
            "Domingo",
            "Segunda-feira",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o que você faz todo sábado de manhã, em casa ou com a família:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um calendário da semana e marque o dia do seu aniversário ou de alguém da sua família:",
        },
      ],
    },
    {
      theme: "Quebra-cabeça das dezenas e unidades",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a decomposição dos números:",
          items: [
            "34 = ___ dezena(s) e ___ unidade(s)",
            "52 = ___ dezena(s) e ___ unidade(s)",
            "18 = ___ dezena(s) e ___ unidade(s)",
            "70 = ___ dezena(s) e ___ unidade(s)",
          ],
        },
        {
          kind: "options",
          instruction: "Qual par de cartas forma o número 45?",
          options: [
            "Carta 4 (dezena) + carta 5 (unidade)",
            "Carta 5 (dezena) + carta 4 (unidade)",
            "Carta 40 (dezena) + carta 4 (unidade)",
            "Carta 4 (dezena) + carta 45 (unidade)",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um número entre 10 e 99. Escreva-o e depois diga quantas cartas de dezena e quantas cartas de unidade você precisaria para formá-lo:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe as duas cartas (uma de dezena e uma de unidade) que, juntas, formam o número 27:",
          note: "Lembre-se: a carta de dezena mostra um número terminado em zero.",
        },
      ],
    },
    {
      theme: "Onde está escondido o brinquedo?",
      exercises: [
        {
          kind: "options",
          instruction: "Um brinquedo está escondido embaixo da mesa do professor. Qual frase descreve certo essa posição?",
          options: [
            "O brinquedo está embaixo da mesa.",
            "O brinquedo está em cima da mesa.",
            "O brinquedo está longe da mesa.",
            "O brinquedo está dentro do armário.",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra de posição (perto, longe, em cima, embaixo, direita, esquerda):",
          items: [
            "O livro está ___ da estante.",
            "A mochila está ___ da cadeira.",
            "O quadro está ___ da porta.",
            "O lápis caiu e ficou ___ da mesa.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um lugar da sua casa para esconder um brinquedo. Escreva pistas de posição para um colega encontrá-lo:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a sala de aula com um X marcando onde você esconderia um brinquedo. Marque também um objeto que serve de referência (mesa, porta, armário):",
          note: "Use o objeto de referência para dar as pistas depois.",
        },
      ],
    },
    {
      theme: "Estratégia das bordas: montando o quebra-cabeça",
      exercises: [
        {
          kind: "options",
          instruction: "Ao montar um quebra-cabeça, qual é uma estratégia eficiente para começar?",
          options: [
            "Separar as peças de borda (com lado reto) e montá-las primeiro",
            "Colocar todas as peças em uma pilha só",
            "Começar pelo meio, sem olhar as bordas",
            "Misturar as peças de vários quebra-cabeças diferentes",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre como montar um quebra-cabeça:",
          items: [
            "As peças de borda têm pelo menos um lado ___.",
            "As peças do meio se encaixam pelos ___.",
            "Depois de separar as bordas, deve-se montar o ___ primeiro.",
            "No final, sobra montar as peças do ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Depois de montar um quebra-cabeça em grupo, escreva qual estratégia sua equipe usou para separar as peças:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um quebra-cabeça de 9 peças, destacando com uma cor diferente as peças que ficam na borda:",
        },
      ],
    },
    {
      theme: "Os números no nosso dia a dia",
      exercises: [
        {
          kind: "options",
          instruction: "O número 3 na camisa de um jogador de futebol serve para...",
          options: [
            "mostrar quantos anos ele tem",
            "identificar o jogador (é um código)",
            "mostrar quantos gols ele fez hoje",
            "mostrar o preço da camisa",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares onde encontramos números no nosso dia a dia:",
          items: [
            "Relógio",
            "Nuvem",
            "Calendário",
            "Vento",
            "Placa de ônibus",
            "Sombra",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um lugar da escola ou da sua casa onde você vê um número (por exemplo: o relógio, o calendário, a régua):",
        },
        {
          kind: "fill-blank",
          instruction: "Complete com um número que combine com você:",
          items: [
            "Eu tenho ___ anos.",
            "Eu moro no número (ou apto.) ___.",
            "Eu estudo no ___º ano.",
          ],
        },
      ],
    },
    {
      theme: "Descobrindo como se escrevem os números",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete escrevendo o número que falta:",
          items: [
            "Depois do 4 vem o ___.",
            "Antes do 10 vem o ___.",
            "O número entre o 6 e o 8 é o ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule o número 7 toda vez que ele aparecer:",
          items: [
            "7",
            "1",
            "7",
            "4",
            "7",
            "9",
          ],
        },
        {
          kind: "options",
          instruction: "Como se escreve o número \"nove\"?",
          options: [
            "6",
            "9",
            "5",
            "2",
          ],
        },
        {
          kind: "draw",
          instruction: "Escolha um número que você já sabe escrever bem e desenhe essa quantidade de bolinhas ao lado dele:",
        },
      ],
    },
    {
      theme: "Contando e registrando coleções",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma coleção com 6 objetos (podem ser bolinhas, estrelinhas ou o que você quiser):",
        },
        {
          kind: "fill-blank",
          instruction: "Conte os objetos e escreva o número:",
          items: [
            "🍎🍎🍎🍎 = ___",
            "⭐⭐⭐⭐⭐⭐⭐ = ___",
            "🚗🚗 = ___",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a melhor forma de não errar ao contar uma coleção grande de objetos?",
          options: [
            "Contar bem rápido",
            "Contar cada objeto uma única vez, apontando",
            "Contar de olhos fechados",
            "Contar só os objetos coloridos",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma coleção de objetos da sala (lápis, cadeiras, mochilas) e escreva quantos você contou:",
          lines: 1,
        },
      ],
    },
    {
      theme: "Contagem para frente e para trás",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a sequência contando para frente:",
          items: [
            "1, 2, 3, ___, 5",
            "10, 11, ___, 13, 14",
            "20, ___, 22, 23",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete contando para trás:",
          items: [
            "5, 4, ___, 2, 1",
            "10, ___, 8, 7, 6",
          ],
        },
        {
          kind: "options",
          instruction: "Contando de 2 em 2 a partir do 0, qual número vem depois do 4?",
          options: [
            "5",
            "6",
            "8",
            "3",
          ],
        },
        {
          kind: "lines",
          instruction: "Comece no número 1 e escreva contando de 1 em 1 até o 10:",
          lines: 1,
        },
      ],
    },
    {
      theme: "Qual número é maior?",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Compare os números usando os sinais > (maior) ou < (menor):",
          items: [
            "8 ___ 3",
            "5 ___ 9",
            "4 ___ 7",
          ],
        },
        {
          kind: "options",
          instruction: "Qual desses números é o maior?",
          options: [
            "12",
            "9",
            "15",
            "7",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os números maiores que 10:",
          items: [
            "8",
            "15",
            "3",
            "20",
            "9",
            "11",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe dois pratos de frutas: um com 3 frutas e outro com 7 frutas. Depois, faça um X no prato que tem mais frutas:",
        },
      ],
    },
    {
      theme: "Formando pares e grupos",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe 8 sapatos e depois separe-os em pares (de 2 em 2), circulando cada par:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "10 meias formam ___ pares.",
            "6 luvas formam ___ pares.",
          ],
        },
        {
          kind: "options",
          instruction: "Formar pares e grupos ajuda a...",
          options: [
            "contar mais rápido e sem errar",
            "deixar os objetos mais bonitos",
            "esconder os objetos",
            "fazer os objetos sumirem",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as quantidades que dá para separar em pares (de 2 em 2) sem sobrar nenhum:",
          items: [
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
          ],
        },
      ],
    },
    {
      theme: "Mais, menos ou igual?",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um grupo com 5 bolinhas azuis e um grupo com 8 bolinhas vermelhas:",
        },
        {
          kind: "options",
          instruction: "No desenho que você fez, qual grupo tem mais bolinhas?",
          options: [
            "O grupo azul",
            "O grupo vermelho",
            "Os dois têm a mesma quantidade",
            "Nenhum dos dois",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Compare as quantidades e complete com MAIS, MENOS ou IGUAL:",
          items: [
            "6 lápis e 3 lápis: o primeiro grupo tem ___ que o segundo.",
            "4 bolas e 4 bolas: os grupos têm quantidade ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os pares de números que têm a mesma quantidade (são iguais):",
          items: [
            "5 e 5",
            "3 e 7",
            "8 e 8",
            "2 e 4",
          ],
        },
      ],
    },
    {
      theme: "Quebrando e juntando números",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as composições do número 10:",
          items: [
            "10 = 8 + ___",
            "10 = 5 + ___",
            "10 = 2 + ___",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe 7 bolinhas e depois separe-as em dois grupos, circulando cada grupo (por exemplo, 3 e 4):",
        },
        {
          kind: "options",
          instruction: "De quantas formas diferentes podemos formar o número 6 juntando dois números?",
          options: [
            "Só de uma forma",
            "De várias formas (como 1+5, 2+4, 3+3)",
            "É impossível formar o 6",
            "Só com o número 3",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "4 + 3 = ___",
            "6 + 2 = ___",
          ],
        },
      ],
    },
    {
      theme: "Contas de cabeça: fatos da soma e da subtração",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Resolva de cabeça:",
          items: [
            "2 + 2 = ___",
            "5 + 1 = ___",
            "9 - 3 = ___",
            "7 - 2 = ___",
          ],
        },
        {
          kind: "options",
          instruction: "Quanto é 4 + 4?",
          options: [
            "7",
            "8",
            "9",
            "6",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as contas que dão resultado igual a 6:",
          items: [
            "4 + 2",
            "3 + 2",
            "1 + 5",
            "9 - 1",
            "10 - 4",
          ],
        },
        {
          kind: "draw",
          instruction: "Escolha uma conta de soma que você sabe de cabeça e desenhe ela usando bolinhas (por exemplo, 3 + 4):",
        },
      ],
    },
    {
      theme: "O que acontece quando eu acrescento ou tiro?",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Eu tinha 5 balas e ganhei 3. Agora tenho ___ balas.",
            "Eu tinha 8 figurinhas e dei 2. Agora tenho ___ figurinhas.",
          ],
        },
        {
          kind: "options",
          instruction: "Se eu tenho 6 bolinhas e tiro 4, o que acontece com a quantidade?",
          options: [
            "Aumenta",
            "Diminui",
            "Fica a mesma",
            "Some tudo",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe 4 passarinhos em uma árvore. Depois desenhe mais 2 chegando. Escreva quantos ficaram no total:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Tinha 10 lápis, quebrei 3, ficaram ___ lápis inteiros.",
            "Tinha 3 carrinhos, ganhei mais 5, agora tenho ___.",
          ],
        },
      ],
    },
    {
      theme: "Dobro e triplo com objetos",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe 3 bolinhas. Depois, ao lado, desenhe o DOBRO dessa quantidade:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "O dobro de 4 é ___.",
            "O dobro de 5 é ___.",
            "O triplo de 2 é ___.",
          ],
        },
        {
          kind: "options",
          instruction: "O dobro de uma quantidade é...",
          options: [
            "duas vezes essa quantidade",
            "a metade dessa quantidade",
            "essa quantidade menos 1",
            "sempre o número 10",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os números que são o dobro de algum número pequeno (1, 2, 3, 4 ou 5):",
          items: [
            "2",
            "3",
            "6",
            "5",
            "8",
            "7",
          ],
        },
      ],
    },
    {
      theme: "Organizando em grupos iguais",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe 12 bolinhas organizadas em grupos de 4 (grupos com a mesma quantidade):",
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "8 objetos organizados em grupos de 2 formam ___ grupos.",
            "9 objetos organizados em grupos de 3 formam ___ grupos.",
          ],
        },
        {
          kind: "options",
          instruction: "Ao organizar 10 objetos em grupos de 5, quantos grupos iguais formamos?",
          options: [
            "2 grupos",
            "5 grupos",
            "10 grupos",
            "3 grupos",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as quantidades que podem ser organizadas em grupos de 2 sem sobrar nada:",
          items: [
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
          ],
        },
      ],
    },
    {
      theme: "Resolvendo problemas de juntar",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Resolva o problema: Ana tem 4 bonecas e ganhou mais 3. Com quantas bonecas ela ficou?",
          items: [
            "4 + 3 = ___",
          ],
        },
        {
          kind: "draw",
          instruction: "Resolva desenhando: João tinha 5 carrinhos e ganhou mais 2. Desenhe todos os carrinhos que ele tem agora:",
        },
        {
          kind: "options",
          instruction: "Para resolver um problema de JUNTAR, o que devemos fazer com os números?",
          options: [
            "Somar",
            "Comparar tamanhos",
            "Contar as letras",
            "Não fazer nada",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Resolva: na caixa tinham 6 lápis. A professora colocou mais 4. Quantos lápis tem na caixa agora?",
          items: [
            "6 + 4 = ___",
          ],
        },
      ],
    },
    {
      theme: "Organizando por cor, forma e tamanho",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule apenas os objetos que são redondos:",
          items: [
            "Bola",
            "Livro",
            "Roda",
            "Caixa",
            "Relógio de parede",
            "Régua",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe 3 objetos grandes e 3 objetos pequenos, um do lado do outro:",
        },
        {
          kind: "options",
          instruction: "Se eu tenho brinquedos vermelhos, azuis e amarelos e quero organizá-los por cor, o que devo fazer?",
          options: [
            "Juntar os brinquedos da mesma cor",
            "Juntar os brinquedos do mesmo tamanho",
            "Misturar tudo",
            "Jogar fora os coloridos",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Observe a sala de aula e complete:",
          items: [
            "Um objeto redondo da sala: ___",
            "Um objeto grande da sala: ___",
            "Um objeto pequeno da sala: ___",
          ],
        },
      ],
    },
    {
      theme: "Descobrindo o que vem depois no padrão",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Descubra o padrão e complete:",
          items: [
            "🔵🔴🔵🔴🔵___",
            "1, 2, 1, 2, 1, ___",
            "🟩🟩🟨🟩🟩___",
          ],
        },
        {
          kind: "options",
          instruction: "Nesta sequência: círculo, quadrado, círculo, quadrado, círculo, ___. Qual figura vem a seguir?",
          options: [
            "Círculo",
            "Quadrado",
            "Triângulo",
            "Estrela",
          ],
        },
        {
          kind: "draw",
          instruction: "Crie o seu próprio padrão desenhando uma sequência que se repete (por exemplo: bolinha, estrela, bolinha, estrela...):",
        },
        {
          kind: "fill-blank",
          instruction: "Complete a sequência de números:",
          items: [
            "2, 4, 6, ___, 10",
            "5, 10, 15, ___",
          ],
        },
      ],
    },
    {
      theme: "Onde eu estou na sala?",
      exercises: [
        {
          kind: "options",
          instruction: "Se eu estou perto da porta da sala, uma boa forma de dizer onde estou é:",
          options: [
            "Estou perto da porta",
            "Estou em algum lugar",
            "Estou no mundo",
            "Estou na escola inteira",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a sala de aula com a sua carteira e mostre perto de que ela fica (janela, quadro, porta):",
        },
        {
          kind: "word-select",
          instruction: "Circule os pontos de referência que existem na sua sala de aula:",
          items: [
            "Quadro",
            "Porta",
            "Janela",
            "Lua",
            "Mesa da professora",
            "Estrela",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Minha carteira fica perto do(a) ___.",
            "Minha carteira fica longe do(a) ___.",
          ],
        },
      ],
    },
    {
      theme: "Minha posição na sala",
      exercises: [
        {
          kind: "options",
          instruction: "Se o quadro está na sua frente, ele fica:",
          options: [
            "À sua frente",
            "Atrás de você",
            "À sua direita",
            "Embaixo de você",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você sentado na sala de aula e mostre quem está à sua direita e quem está à sua esquerda:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete observando a sua sala de aula:",
          items: [
            "Na minha frente fica ___.",
            "Atrás de mim fica ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam posição:",
          items: [
            "Direita",
            "Esquerda",
            "Amarelo",
            "Frente",
            "Atrás",
            "Grande",
          ],
        },
      ],
    },
    {
      theme: "O caminho até lá",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe o caminho que você faz da sua carteira até a porta da sala de aula:",
        },
        {
          kind: "options",
          instruction: "Para explicar um caminho para alguém, é importante...",
          options: [
            "dizer para onde ir (frente, direita, esquerda)",
            "ficar em silêncio",
            "não dizer nada",
            "só apontar o dedo para o céu",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que usamos para explicar um caminho:",
          items: [
            "Siga em frente",
            "Vire à direita",
            "Coma",
            "Vire à esquerda",
            "Durma",
            "Pare aqui",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete explicando o caminho da sua carteira até o quadro:",
          items: [
            "Primeiro eu ando para ___.",
            "Depois eu viro para ___.",
          ],
        },
      ],
    },
    {
      theme: "Lendo mapinhas da sala",
      exercises: [
        {
          kind: "draw",
          instruction: "Faça um mapinha simples da sala de aula, desenhando o quadro, a porta e a sua carteira:",
        },
        {
          kind: "options",
          instruction: "Um mapinha (croqui) serve para...",
          options: [
            "mostrar como os lugares e objetos estão organizados",
            "contar uma história",
            "mostrar o tempo (clima) do dia",
            "fazer uma conta de matemática",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Observando um mapinha da sala, complete:",
          items: [
            "No mapinha, o quadro fica na parte de ___ (cima/baixo).",
            "A porta fica do lado ___ (direito/esquerdo).",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule o que pode aparecer em um mapinha da sala de aula:",
          items: [
            "Porta",
            "Quadro",
            "Mesas",
            "Estrelas do espaço",
            "Janela",
            "Foguete",
          ],
        },
      ],
    },
    {
      theme: "Formas geométricas no dia a dia",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os objetos que têm o formato parecido com uma bola (esfera):",
          items: [
            "Bola de futebol",
            "Livro",
            "Laranja",
            "Caixa de sapato",
            "Globo terrestre",
            "Régua",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um objeto da sala de aula parecido com um cubo e outro parecido com um cilindro:",
        },
        {
          kind: "options",
          instruction: "Uma lata de refrigerante tem o formato parecido com um:",
          options: [
            "Cilindro",
            "Cubo",
            "Cone",
            "Esfera",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o nome de um objeto parecido com cada forma:",
          items: [
            "Parecido com um cubo: ___",
            "Parecido com uma esfera: ___",
            "Parecido com um cone: ___",
          ],
        },
      ],
    },
    {
      theme: "As faces da caixa",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma caixa em formato de bloco retangular (como uma caixa de sapato) e pinte de cores diferentes as faces que você acha parecidas entre si.",
        },
        {
          kind: "word-select",
          instruction: "Circule os objetos que têm formato de bloco retangular (uma caixa):",
          items: [
            "Caixa de sapato",
            "Bola de futebol",
            "Caixa de fósforos",
            "Bexiga",
            "Estojo",
            "Dado",
          ],
        },
        {
          kind: "options",
          instruction: "As faces de uma caixa de sapato são:",
          options: [
            "Retangulares",
            "Redondas",
            "Pontudas como estrela",
            "A caixa não tem faces",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Observe uma caixa de verdade com a professora e complete:",
          items: [
            "A caixa de sapato tem ____ faces no total.",
            "A face de cima e a de baixo têm o mesmo ____.",
          ],
        },
      ],
    },
    {
      theme: "Rola ou não rola?",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os objetos que ROLAM (têm superfície arredondada):",
          items: [
            "Bola",
            "Dado",
            "Lata redonda",
            "Caixa de sapato",
            "Bexiga",
            "Livro",
          ],
        },
        {
          kind: "options",
          instruction: "Uma bola rola porque a superfície dela é:",
          options: [
            "Arredondada",
            "Plana",
            "Com pontas",
            "Quadrada",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe dois objetos da sala de aula: um que rola e outro que não rola.",
        },
        {
          kind: "fill-blank",
          instruction: "Complete testando os objetos com a turma:",
          items: [
            "A bola tem superfície ____.",
            "O dado tem superfície ____.",
          ],
        },
      ],
    },
    {
      theme: "Desenhando formas geométricas",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe três objetos do seu dia a dia que lembram formas geométricas espaciais (bola, caixa, lata).",
        },
        {
          kind: "word-select",
          instruction: "Circule os objetos parecidos com uma lata (cilindro):",
          items: [
            "Bola",
            "Caixa de sapato",
            "Lata de milho",
            "Cone de sorvete",
            "Livro",
            "Dado",
          ],
        },
        {
          kind: "options",
          instruction: "Qual desses objetos lembra um cone?",
          options: [
            "Casquinha de sorvete",
            "Bola",
            "Caixa de sapato",
            "Livro",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o nome da forma:",
          items: [
            "Uma bola de futebol lembra a forma de uma ____.",
            "Uma caixa de sapato lembra a forma de um ____.",
          ],
        },
      ],
    },
    {
      theme: "Vai acontecer ou não?",
      exercises: [
        {
          kind: "options",
          instruction: "O sol vai nascer amanhã. Isso é:",
          options: [
            "Certeza que vai acontecer",
            "Talvez aconteça",
            "Impossível acontecer",
            "Nunca vai acontecer",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as situações que são IMPOSSÍVEIS de acontecer:",
          items: [
            "Um cachorro falar português",
            "Chover amanhã",
            "Um peixe voar sozinho pelo céu",
            "O sol nascer de manhã",
            "Uma pedra flutuar no ar sem ajuda",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete escolhendo: com certeza, talvez ou impossível.",
          items: [
            "Se eu jogar um dado, ____ eu tirar o número 6.",
            "Se eu soltar uma pedra no ar, ela ____ cair no chão.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma situação que é IMPOSSÍVEL de acontecer (por exemplo, um peixe andando na rua).",
        },
      ],
    },
    {
      theme: "Pesquisando as preferências da turma",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete sobre você:",
          items: [
            "Minha fruta preferida é: ____",
            "Meu brinquedo preferido é: ____",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule a fruta que você mais gosta:",
          items: [
            "Maçã",
            "Banana",
            "Uva",
            "Morango",
            "Melancia",
            "Laranja",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a melhor forma de descobrir o brinquedo preferido da turma?",
          options: [
            "Perguntar para cada colega e anotar",
            "Adivinhar sozinho",
            "Perguntar só para o professor",
            "Não perguntar para ninguém",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o brinquedo que você mais gosta de brincar.",
        },
      ],
    },
    {
      theme: "Lendo tabelas e gráficos simples",
      exercises: [
        {
          kind: "options",
          instruction: "No gráfico de colunas da turma, a coluna mais alta mostra:",
          options: [
            "O item mais escolhido",
            "O item menos escolhido",
            "Um erro no desenho",
            "Nada, é só decoração",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Olhando a tabela feita pela turma, complete:",
          items: [
            "O total de crianças que preferem cachorro: ____",
            "O total de crianças que preferem gato: ____",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um gráfico de colunas simples mostrando: 3 crianças gostam de suco e 5 crianças gostam de água.",
        },
        {
          kind: "word-select",
          instruction: "No seu gráfico, circule a bebida que teve MAIS crianças escolhendo:",
          items: [
            "Suco",
            "Água",
          ],
        },
      ],
    },
    {
      theme: "Coletando e organizando dados",
      exercises: [
        {
          kind: "lines",
          instruction: "A turma vai pesquisar: quantas crianças vieram de tênis hoje e quantas vieram de sandália? Escreva o resultado da contagem:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete com os números da contagem da turma:",
          items: [
            "Número de crianças de tênis: ____",
            "Número de crianças de sandália: ____",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma tabela simples com duas colunas, TÊNIS e SANDÁLIA, e marque um risquinho para cada colega.",
        },
        {
          kind: "options",
          instruction: "Depois de contar e organizar os dados em uma tabela, fica mais fácil:",
          options: [
            "Ver as informações rapidinho",
            "Esquecer tudo",
            "Perder os dados",
            "Confundir os números",
          ],
        },
      ],
    },
    {
      theme: "Contando o que o gráfico mostra",
      exercises: [
        {
          kind: "options",
          instruction: "Para contar quantas crianças escolheram 'cachorro' em um gráfico de colunas, eu devo:",
          options: [
            "Contar os quadradinhos da coluna do cachorro",
            "Adivinhar",
            "Contar a coluna do gato",
            "Não contar nada",
          ],
        },
        {
          kind: "lines",
          instruction: "Observe o gráfico feito pela turma e conte para um colega o que ele mostra. Escreva uma frase sobre o gráfico:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete olhando o gráfico da turma:",
          items: [
            "O animal mais votado foi: ____",
            "O animal menos votado foi: ____",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o gráfico de colunas da turma sobre os animais preferidos, copiando do quadro.",
        },
      ],
    },
    {
      theme: "Medindo com o corpo e objetos",
      exercises: [
        {
          kind: "lines",
          instruction: "Meça a largura da sua mesa usando palmos da sua mão. Escreva quantos palmos ela tem:",
          lines: 1,
        },
        {
          kind: "fill-blank",
          instruction: "Complete depois de medir com a turma:",
          items: [
            "A mesa tem ____ palmos de largura.",
            "A porta da sala tem ____ passos de largura.",
          ],
        },
        {
          kind: "options",
          instruction: "Para medir o comprimento da sala sem usar régua, posso usar:",
          options: [
            "Meus pés, um atrás do outro",
            "Só olhar e adivinhar",
            "Fechar os olhos",
            "Não é possível medir",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você medindo um objeto da sala com palmos, pés ou passos.",
        },
      ],
    },
    {
      theme: "Quem é mais comprido, mais pesado, cabe mais?",
      exercises: [
        {
          kind: "options",
          instruction: "Para saber qual objeto é mais pesado sem usar balança, posso:",
          options: [
            "Segurar um em cada mão e comparar",
            "Só olhar o tamanho",
            "Adivinhar",
            "Perguntar para o objeto",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule, entre os objetos, o que você acha mais PESADO:",
          items: [
            "Lápis",
            "Livro",
            "Borracha",
            "Mochila",
            "Apontador",
            "Estojo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Compare os objetos da sala e complete:",
          items: [
            "Entre o lápis e o livro, o mais comprido é: ____",
            "Entre o copo e a garrafa, o que cabe mais água é: ____",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe dois objetos da sala: um mais comprido e um mais curto.",
        },
      ],
    },
    {
      theme: "Os dias da semana e o calendário",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete olhando o calendário da sala:",
          items: [
            "Hoje é: ____",
            "Amanhã será: ____",
            "Ontem foi: ____",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os dias que são de FIM DE SEMANA:",
          items: [
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado",
            "Domingo",
          ],
        },
        {
          kind: "options",
          instruction: "Quantos dias tem uma semana?",
          options: [
            "7",
            "5",
            "6",
            "10",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o que você mais gosta de fazer no fim de semana.",
        },
      ],
    },
    {
      theme: "Escrevendo a data de hoje",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com a data de hoje:",
          items: [
            "Dia: ____",
            "Mês: ____",
            "Ano: ____",
          ],
        },
        {
          kind: "options",
          instruction: "Uma data completa deve ter:",
          options: [
            "Dia, mês e ano",
            "Só o dia",
            "Só o ano",
            "Só o mês",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um calendário simples e marque com um X o dia de hoje.",
        },
        {
          kind: "lines",
          instruction: "Escreva a data de hoje por extenso (por exemplo: vinte e sete de agosto de dois mil e vinte e seis):",
          lines: 1,
        },
      ],
    },
    {
      theme: "Conhecendo o dinheiro brasileiro",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as MOEDAS do dinheiro brasileiro (não as notas):",
          items: [
            "Moeda de 1 real",
            "Moeda de 25 centavos",
            "Nota de 10 reais",
            "Nota de 2 reais",
            "Moeda de 50 centavos",
            "Nota de 100 reais",
          ],
        },
        {
          kind: "options",
          instruction: "Se eu tenho 1 nota de 2 reais e 1 moeda de 1 real, quanto eu tenho no total?",
          options: [
            "3 reais",
            "2 reais",
            "1 real",
            "4 reais",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete somando o dinheiro:",
          items: [
            "2 moedas de 1 real juntas valem: ____ reais.",
            "1 nota de 5 reais vale: ____ reais.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma moeda e uma nota do dinheiro brasileiro que você conhece.",
        },
      ],
    },
    {
      theme: "Brincando e calculando",
      exercises: [
        {
          kind: "options",
          instruction: "Na brincadeira de amarelinha, para saber quantas casas faltam para chegar ao final, eu preciso:",
          options: [
            "Contar as casas que faltam",
            "Só chutar a pedra",
            "Fechar os olhos",
            "Desistir",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete os cálculos das brincadeiras:",
          items: [
            "Se eu já pulei 4 casas da amarelinha e ela tem 8 casas, faltam ____ casas.",
            "No jogo de bolinha de gude, se eu tinha 6 e ganhei mais 2, fico com ____.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma brincadeira tradicional (amarelinha, corda, bolinha de gude) que você gosta de jogar.",
        },
        {
          kind: "lines",
          instruction: "Depois de brincar de amarelinha com a turma, escreva quantas casas você conseguiu pular de uma vez:",
          lines: 1,
        },
      ],
    },
    {
      theme: "Registrando as regras do jogo",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha uma brincadeira que a turma jogou e escreva uma regra dela:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Para não esquecer as regras de um jogo, é bom:",
          options: [
            "Registrar (escrever ou desenhar) as regras",
            "Não anotar nada",
            "Só lembrar de cabeça sempre",
            "Mudar as regras toda hora",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre os jogos da turma:",
          items: [
            "Na amarelinha, quantas crianças jogam por vez: ____",
            "Quem vence o jogo da memória é quem forma mais ____.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe as regras de um jogo usando desenhos, como se fosse explicar para alguém que nunca jogou.",
        },
      ],
    },
    {
      theme: "Matemática e conservação dos oceanos",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Resolva os probleminhas sobre o mutirão de limpeza da praia:",
          items: [
            "Se eu recolher 3 garrafas e um colega recolher 4, juntos recolhemos ____ garrafas.",
            "Se a praia tinha 10 sacolas de lixo e as crianças recolheram 6, restam ____ sacolas.",
          ],
        },
        {
          kind: "options",
          instruction: "Jogar lixo no mar é uma atitude que:",
          options: [
            "Prejudica os animais marinhos",
            "Ajuda os peixes",
            "Não faz diferença",
            "É sempre bom",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o oceano limpo, com peixes e sem lixo.",
        },
        {
          kind: "word-select",
          instruction: "Circule os itens de LIXO que não deveriam estar no mar:",
          items: [
            "Garrafa de plástico",
            "Peixe",
            "Saco plástico",
            "Tartaruga",
            "Canudinho",
            "Alga",
          ],
        },
      ],
    },
    {
      theme: "Matemática no oceano profundo",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Resolva contando os animais do oceano profundo:",
          items: [
            "Se um polvo tem 8 braços e eu vi 2 polvos, ao todo são ____ braços.",
            "Uma estrela-do-mar tem 5 pontas. Duas estrelas-do-mar juntas têm ____ pontas.",
          ],
        },
        {
          kind: "options",
          instruction: "No oceano profundo, onde não chega luz do sol, os animais costumam ser:",
          options: [
            "Adaptados à escuridão, alguns brilham no escuro",
            "Todos coloridos como no raso",
            "Iguais aos animais da praia",
            "Sempre gigantes",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um animal do oceano profundo que você aprendeu (por exemplo, um peixe que brilha no escuro).",
        },
        {
          kind: "word-select",
          instruction: "Circule os animais que vivem no oceano:",
          items: [
            "Baleia",
            "Cachorro",
            "Polvo",
            "Galinha",
            "Água-viva",
            "Vaca",
          ],
        },
      ],
    },
    {
      theme: "Explicando como eu pensei",
      exercises: [
        {
          kind: "lines",
          instruction: "Resolva: Ana tinha 3 balas e ganhou mais 2. Quantas balas ela tem agora? Escreva como você pensou para resolver:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Quando eu explico como pensei para resolver um problema, eu ajudo:",
          options: [
            "Meus colegas a entenderem meu raciocínio",
            "Ninguém, é perda de tempo",
            "Só a professora a ficar confusa",
            "A esconder a resposta",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe os passos que você fez com os dedos ou com desenhos para resolver 4 + 3.",
        },
        {
          kind: "fill-blank",
          instruction: "Complete contando como você pensou:",
          items: [
            "Para resolver 5 + 2, eu pensei primeiro em ____ e depois em ____.",
          ],
        },
      ],
    },
    {
      theme: "Contando como resolvi o problema",
      exercises: [
        {
          kind: "lines",
          instruction: "Resolva o problema: Pedro tinha 8 figurinhas e perdeu 3. Depois de resolver, conte para um colega o que você fez e escreva o resultado:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre o problema das figurinhas:",
          items: [
            "O resultado do problema foi: ____ figurinhas.",
            "Eu descobri a resposta usando: ____ (desenho, dedos ou contas).",
          ],
        },
        {
          kind: "options",
          instruction: "Depois de resolver um problema, é importante:",
          options: [
            "Contar como cheguei na resposta",
            "Guardar segredo da resposta",
            "Apagar tudo sem mostrar",
            "Não se importar com o resultado",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe como você resolveu o problema das figurinhas do Pedro.",
        },
      ],
    },
    {
      theme: "Lendo, escrevendo e comparando números naturais na reta numerada",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escreva por extenso os números:",
          items: [
            "2.734 = __________",
            "10.501 = __________",
            "45.008 = __________",
          ],
        },
        {
          kind: "options",
          instruction: "Qual número é maior: 8.245 ou 8.254?",
          options: [
            "8.245",
            "8.254",
            "Os dois são iguais",
            "Não é possível saber",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma reta numerada de 0 a 100 e marque os números 15, 47 e 82 com um X.",
        },
        {
          kind: "lines",
          instruction: "Observe os números 3.456 e 3.465. Explique com suas palavras qual é maior e como você descobriu isso comparando algarismo por algarismo.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Compondo e decompondo números naturais",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Decomponha os números em unidades de milhar, centena, dezena e unidade:",
          items: [
            "3.542 = ____UM + ____C + ____D + ____U",
            "8.019 = ____UM + ____C + ____D + ____U",
            "5.276 = ____UM + ____C + ____D + ____U",
          ],
        },
        {
          kind: "options",
          instruction: "Qual decomposição representa corretamente o número 4.608?",
          options: [
            "4.000 + 600 + 0 + 8",
            "4.000 + 60 + 8",
            "400 + 60 + 8",
            "4.000 + 600 + 80",
          ],
        },
        {
          kind: "draw",
          instruction: "Represente com material dourado (ou desenhando quadrados, barras e bolinhas) a composição do número 2.135.",
        },
        {
          kind: "lines",
          instruction: "Explique como você faria para compor o número 6.024 juntando as partes: 6 milhares, 0 centenas, 2 dezenas e 4 unidades.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Recitação oral de sequências numéricas",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as sequências ascendentes:",
          items: [
            "120, 130, 140, ____, ____, ____",
            "205, 210, 215, ____, ____, ____",
            "1.000, 1.100, 1.200, ____, ____, ____",
          ],
        },
        {
          kind: "options",
          instruction: "Na sequência 500, 450, 400, 350..., qual é a regra usada?",
          options: [
            "Subtrai 50 a cada passo",
            "Soma 50 a cada passo",
            "Subtrai 100 a cada passo",
            "Multiplica por 2",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um número entre 500 e 1.000 e escreva, com suas palavras, como você contaria de 10 em 10 a partir dele até chegar perto de 2.000.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma trilha numerada (como um jogo de tabuleiro) começando em 0 e contando de 25 em 25 até 250.",
        },
      ],
    },
    {
      theme: "Estimativas e arredondamentos na resolução de problemas",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Arredonde os números para a dezena mais próxima:",
          items: [
            "47 → ____",
            "83 → ____",
            "125 → ____",
          ],
        },
        {
          kind: "options",
          instruction: "Uma loja vendeu 287 brinquedos em um mês. Arredondando para a centena mais próxima, quantos brinquedos foram vendidos aproximadamente?",
          options: [
            "300",
            "200",
            "280",
            "290",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você faz para decidir se arredonda um número para cima ou para baixo.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cesta com aproximadamente 50 maçãs (não precisa contar uma por uma, faça uma estimativa visual) e escreva sua estimativa.",
        },
      ],
    },
    {
      theme: "Cálculo das quatro operações com estratégias pessoais",
      exercises: [
        {
          kind: "lines",
          instruction: "Calcule 347 + 256 usando uma estratégia pessoal (sem conta armada) e explique passo a passo o que você fez.",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Resolva mentalmente:",
          items: [
            "500 - 180 = ____",
            "25 x 4 = ____",
            "144 ÷ 12 = ____",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a forma mais fácil de calcular 99 + 47 mentalmente?",
          options: [
            "Somar 100 + 47 e depois tirar 1",
            "Somar 90 + 40 e depois 9 + 7",
            "Contar de 1 em 1 a partir de 99",
            "Não dá para calcular sem conta armada",
          ],
        },
        {
          kind: "draw",
          instruction: "Escolha uma estratégia (decompor, arredondar, usar a reta numérica) e desenhe como você resolveria 68 + 25.",
        },
      ],
    },
    {
      theme: "Multiplicando e dividindo por 10, 100 e 1000",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "34 x 10 = ____",
            "34 x 100 = ____",
            "34 x 1.000 = ____",
            "7.500 ÷ 10 = ____",
          ],
        },
        {
          kind: "options",
          instruction: "O que acontece com um número natural quando ele é multiplicado por 100?",
          options: [
            "Acrescentam-se dois zeros à direita",
            "O número dobra",
            "Acrescenta-se um zero à direita",
            "O número diminui",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique a regularidade que você percebe ao dividir 4.000 por 10, por 100 e por 1.000.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um esquema (tabela ou setas) mostrando o que acontece com o número 25 quando multiplicado por 10, 100 e 1.000.",
        },
      ],
    },
    {
      theme: "Fatos básicos da multiplicação por 6, 7, 8 e 9",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Calcule:",
          items: [
            "6 x 7 = ____",
            "8 x 9 = ____",
            "7 x 6 = ____",
            "9 x 8 = ____",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os resultados que aparecem na tabuada do 7:",
          items: [
            "14",
            "20",
            "21",
            "30",
            "35",
            "42",
            "50",
            "56",
            "63",
          ],
        },
        {
          kind: "options",
          instruction: "Qual operação tem o mesmo resultado de 8 x 6?",
          options: [
            "6 x 8",
            "8 + 6",
            "8 x 5",
            "6 x 6",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique um truque ou estratégia que você usa para lembrar a tabuada do 9.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Multiplicação e divisão por decomposição",
      exercises: [
        {
          kind: "lines",
          instruction: "Calcule 23 x 4 decompondo o 23 em 20 + 3. Mostre cada passo do cálculo.",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete a decomposição:",
          items: [
            "14 x 6 = (10 x 6) + (4 x 6) = ____ + ____ = ____",
            "35 x 3 = (30 x 3) + (5 x 3) = ____ + ____ = ____",
          ],
        },
        {
          kind: "options",
          instruction: "Para calcular 27 x 5 por decomposição, qual é a forma correta?",
          options: [
            "(20 x 5) + (7 x 5)",
            "(20 + 5) x (7 + 5)",
            "20 x 7 x 5",
            "27 + 5",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um retângulo dividido em duas partes para representar a multiplicação 16 x 3 usando decomposição (16 = 10 + 6).",
        },
      ],
    },
    {
      theme: "Técnicas convencionais das quatro operações",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Resolva usando a conta armada:",
          items: [
            "456 + 278 = ____",
            "802 - 345 = ____",
            "127 x 6 = ____",
            "384 ÷ 4 = ____",
          ],
        },
        {
          kind: "options",
          instruction: "Ao resolver 253 + 189 com a conta armada, você percebe que 3 + 9 = 12. O que fazer com esse resultado?",
          options: [
            "Escreve 2 e leva 1 para a próxima coluna",
            "Escreve 12 embaixo da coluna",
            "Ignora o 1",
            "Soma tudo de novo",
          ],
        },
        {
          kind: "lines",
          instruction: "Depois de resolver 634 - 258 pela técnica convencional, explique como você pode confirmar se o resultado está certo usando uma estimativa.",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Faça a conta armada de 216 x 3, mostrando todas as etapas (unidades, dezenas, centenas) organizadas em colunas.",
        },
      ],
    },
    {
      theme: "Problemas dos campos aditivo e multiplicativo",
      exercises: [
        {
          kind: "lines",
          instruction: "Uma escola tem 8 salas com 32 alunos cada. Quantos alunos há na escola? Explique como você chegou ao resultado.",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Resolva os problemas:",
          items: [
            "João tinha R$ 250 e ganhou mais R$ 175 de mesada. Quanto ele tem agora? ____",
            "Uma caixa tem 6 fileiras com 9 ovos cada. Quantos ovos há na caixa? ____",
          ],
        },
        {
          kind: "options",
          instruction: "Uma loja tem 4 modelos de camiseta e 3 cores diferentes para cada modelo. De quantas formas diferentes é possível escolher uma camiseta?",
          options: [
            "12",
            "7",
            "43",
            "34",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a situação: um teatro tem 5 fileiras de cadeiras, cada fileira com 8 cadeiras. Desenhe o esquema e escreva quantas cadeiras há no total.",
        },
      ],
    },
    {
      theme: "Números racionais no cotidiano",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as situações do dia a dia em que usamos números racionais (frações ou decimais):",
          items: [
            "Meio quilo de arroz",
            "3 cadeiras na sala",
            "R$ 4,50 de troco",
            "5 lápis na caixa",
            "1/4 de pizza",
            "R$ 12,00 inteiros",
          ],
        },
        {
          kind: "options",
          instruction: "Qual situação representa um número racional na forma decimal?",
          options: [
            "O preço R$ 3,75",
            "5 bolas na caixa",
            "10 alunos na fila",
            "2 cadernos novos",
          ],
        },
        {
          kind: "lines",
          instruction: "Dê dois exemplos de situações do seu dia a dia em que você usa números racionais (frações ou decimais), como em receitas, preços ou medidas.",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma pizza dividida em 8 pedaços e pinte 3 pedaços para representar a fração 3/8.",
        },
      ],
    },
    {
      theme: "Leitura e escrita de números racionais",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escreva por extenso:",
          items: [
            "0,5 = __________",
            "3,25 = __________",
            "1/2 = __________",
            "3/4 = __________",
          ],
        },
        {
          kind: "options",
          instruction: "Como se lê o número 2,75?",
          options: [
            "Duas vírgula setenta e cinco",
            "Vinte e sete vírgula cinco",
            "Dois setenta e cinco",
            "Duzentos e setenta e cinco",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você lê a fração 5/10 e o que ela representa.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma régua ou fita métrica e marque o ponto que representa 0,5 metro (meio metro).",
        },
      ],
    },
    {
      theme: "Comparando e ordenando números racionais",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com >, < ou =:",
          items: [
            "3,5 ___ 3,25",
            "0,7 ___ 0,70",
            "2,1 ___ 1,9",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é o maior número: 4,08 ou 4,8?",
          options: [
            "4,8",
            "4,08",
            "São iguais",
            "Não dá para comparar",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você compara 2,3 e 2,25 para saber qual é maior, mesmo que 2,25 tenha mais algarismos.",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma reta numerada de 0 a 5 e marque os números 1,5 / 2,75 / 4,2 em ordem.",
        },
      ],
    },
    {
      theme: "Sistema decimal na representação de números racionais",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a decomposição decimal:",
          items: [
            "3,45 = 3 inteiros + ____ décimos + ____ centésimos",
            "0,08 = ____ décimos + ____ centésimos",
          ],
        },
        {
          kind: "options",
          instruction: "No número 5,27, o algarismo 2 representa:",
          options: [
            "2 décimos",
            "2 centésimos",
            "2 unidades",
            "2 dezenas",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique a diferença entre a casa dos décimos e a casa dos centésimos em um número decimal, usando o exemplo 6,34.",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma tabela com as colunas: unidade, décimo e centésimo, e represente o número 4,26 nela.",
        },
      ],
    },
    {
      theme: "Sequências numéricas recursivas com múltiplos",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as sequências de múltiplos:",
          items: [
            "Múltiplos de 4: 4, 8, 12, ____, ____, ____",
            "Múltiplos de 6: 6, 12, 18, ____, ____, ____",
            "Múltiplos de 9: 9, 18, 27, ____, ____, ____",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os múltiplos de 5:",
          items: [
            "10",
            "13",
            "15",
            "22",
            "25",
            "30",
            "33",
            "40",
            "44",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a regra da sequência 7, 14, 21, 28...?",
          options: [
            "São múltiplos de 7 (soma-se 7 a cada passo)",
            "São múltiplos de 4",
            "Dobra o número anterior",
            "Subtrai 7 a cada passo",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma tabela de múltiplos de 3 até 30, organizando os números em uma trilha numerada.",
        },
      ],
    },
    {
      theme: "Descobrindo o número desconhecido em uma igualdade",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Descubra o número desconhecido:",
          items: [
            "25 + ___ = 60",
            "___ - 18 = 34",
            "6 x ___ = 48",
            "___ ÷ 5 = 9",
          ],
        },
        {
          kind: "options",
          instruction: "Na igualdade 40 + x = 95, qual é o valor de x?",
          options: [
            "55",
            "45",
            "65",
            "135",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você descobriu o número que falta na igualdade 7 x ___ = 63.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma balança de dois pratos equilibrada representando a igualdade 15 + 10 = 20 + 5.",
        },
      ],
    },
    {
      theme: "Localização de pessoas e objetos em malhas quadriculadas",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma malha quadriculada de 10x10 e marque a posição da sua casa na linha 3, coluna 5.",
        },
        {
          kind: "fill-blank",
          instruction: "Complete as coordenadas dos objetos na malha do seu caderno:",
          items: [
            "A mesa está na linha ___, coluna ___",
            "A porta está na linha ___, coluna ___",
          ],
        },
        {
          kind: "options",
          instruction: "Em uma malha quadriculada, como indicamos a posição de um objeto?",
          options: [
            "Pela linha e pela coluna onde ele está",
            "Só pela cor do quadrado",
            "Só pelo tamanho do objeto",
            "Não é possível indicar posição em malha",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você descreveria para um colega, usando linha e coluna, onde está localizado o seu lugar na sala de aula.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Movimentação e ângulos como mudança de direção",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma malha quadriculada e trace o caminho de um personagem que anda 3 quadrados para frente, vira à direita (mudança de direção) e anda mais 2 quadrados.",
        },
        {
          kind: "fill-blank",
          instruction: "Complete as instruções de movimento:",
          items: [
            "Andar 4 quadrados para frente e virar ____ (direita ou esquerda)",
            "Fazer um giro de meia-volta significa virar ____ graus",
          ],
        },
        {
          kind: "options",
          instruction: "Quando uma pessoa vira 90 graus, ela faz:",
          options: [
            "Um quarto de volta",
            "Meia volta",
            "Uma volta inteira",
            "Não vira nada",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique, usando palavras como 'para frente', 'direita' e 'esquerda', o caminho que você faz da sua carteira até a porta da sala.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Classificando e comparando polígonos",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os nomes de figuras que são polígonos:",
          items: [
            "Triângulo",
            "Círculo",
            "Quadrado",
            "Esfera",
            "Trapézio",
            "Cone",
            "Paralelogramo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete o número de lados e vértices de cada polígono:",
          items: [
            "Triângulo: ____ lados e ____ vértices",
            "Quadrado: ____ lados e ____ vértices",
            "Trapézio: ____ lados e ____ vértices",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a diferença entre um retângulo e um paralelogramo qualquer?",
          options: [
            "O retângulo tem todos os ângulos retos (90°), o paralelogramo nem sempre",
            "Não existe diferença",
            "O paralelogramo tem mais lados",
            "O retângulo não tem 4 lados",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um triângulo, um quadrado, um trapézio e um paralelogramo, identificando o nome de cada um.",
        },
      ],
    },
    {
      theme: "Similaridades e diferenças entre figuras espaciais",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os nomes de figuras espaciais que têm faces planas (poliedros):",
          items: [
            "Cubo",
            "Esfera",
            "Pirâmide",
            "Cilindro",
            "Bloco retangular",
            "Cone",
            "Prisma",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Um dado tem o formato de um ____________",
            "Uma lata de refrigerante tem o formato de um ____________",
            "Uma casquinha de sorvete tem o formato de um ____________",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a diferença entre um cubo e um bloco retangular?",
          options: [
            "O cubo tem todas as faces iguais (quadradas), o bloco retangular não necessariamente",
            "Não existe diferença",
            "O bloco retangular tem menos faces",
            "O cubo tem faces redondas",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma esfera, um cilindro, um cone e um cubo, comparando suas formas (quais têm faces planas, quais têm partes arredondadas).",
        },
      ],
    },
    {
      theme: "Planificação de figuras geométricas espaciais",
      exercises: [
        {
          kind: "options",
          instruction: "Uma planificação com 6 quadrados iguais, quando montada, forma qual figura geométrica espacial?",
          options: [
            "Cubo",
            "Cone",
            "Pirâmide de base quadrada",
            "Cilindro",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete de acordo com a planificação de cada figura espacial:",
          items: [
            "A planificação do cubo tem __________ faces quadradas.",
            "A planificação do cilindro tem __________ círculos e __________ retângulo.",
            "A planificação da pirâmide de base quadrada tem 1 quadrado e __________ triângulos.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a planificação (o molde todo aberto) de uma caixa em forma de bloco retangular, como uma caixa de sapatos. Não esqueça de indicar as 6 faces.",
        },
        {
          kind: "lines",
          instruction: "Se você cortar as bordas de uma lata de leite em pó (formato de cilindro) e abrir totalmente a embalagem, quais formas planas vão aparecer? Explique com suas palavras.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Figuras planas nas faces de poliedros",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com o nome da figura plana que aparece em cada face:",
          items: [
            "As faces laterais de uma pirâmide de base quadrada são __________.",
            "As faces de um cubo são todas __________.",
            "Um prisma de base pentagonal tem 2 faces em forma de __________ e faces laterais em forma de __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Um bloco retangular (paralelepípedo) tem faces com qual formato?",
          options: [
            "Retângulos",
            "Triângulos",
            "Pentágonos",
            "Círculos",
          ],
        },
        {
          kind: "word-select",
          instruction: "Observe uma pirâmide de base triangular. Marque as figuras planas que aparecem em suas faces:",
          items: [
            "Triângulo",
            "Quadrado",
            "Pentágono",
            "Círculo",
            "Retângulo",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um poliedro (sólido geométrico) que tenha pelo menos uma face em formato de pentágono. Escreva o nome das figuras planas que aparecem em cada face.",
        },
      ],
    },
    {
      theme: "Ângulos retos e não retos em figuras poligonais",
      exercises: [
        {
          kind: "word-select",
          instruction: "Observe as figuras a seguir e marque as que têm pelo menos um ângulo reto:",
          items: [
            "Quadrado",
            "Triângulo equilátero",
            "Retângulo",
            "Losango bem achatado",
            "Sala de aula (formato do chão)",
          ],
        },
        {
          kind: "options",
          instruction: "Qual objeto do dia a dia podemos usar para verificar se um ângulo é reto?",
          options: [
            "O canto de uma folha de caderno ou de um livro",
            "Uma régua comprida",
            "Uma fita métrica",
            "Um relógio",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Um ângulo reto mede __________ graus.",
            "Um ângulo menor que 90° é chamado de ângulo __________.",
            "Um ângulo maior que 90° é chamado de ângulo __________.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um quadrilátero que tenha exatamente dois ângulos retos e dois ângulos não retos.",
        },
      ],
    },
    {
      theme: "Chances de ocorrência em eventos aleatórios",
      exercises: [
        {
          kind: "options",
          instruction: "Uma caixa tem 8 bolinhas azuis e 2 bolinhas vermelhas. Se você tirar uma bolinha sem olhar, é mais provável tirar uma bolinha:",
          options: [
            "Azul",
            "Vermelha",
            "As chances são iguais",
            "Impossível saber",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os eventos que têm MAIOR chance de acontecer amanhã:",
          items: [
            "O sol nascer",
            "Chover em um dia de céu bem nublado",
            "Uma pessoa ganhar na loteria",
            "Você respirar",
            "Nevar em São Paulo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete usando: mais, menos ou igualmente.",
          items: [
            "Em um baralho com 4 reis e 48 outras cartas, tirar um rei é __________ provável do que tirar uma carta que não é rei.",
            "Jogar uma moeda e ela cair de cara ou coroa são eventos __________ prováveis.",
          ],
        },
        {
          kind: "lines",
          instruction: "Em uma sacola há 6 bolas amarelas e 1 bola verde. Explique por que é mais provável tirar uma bola amarela do que uma verde.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Interpretando tabelas e gráficos",
      exercises: [
        {
          kind: "lines",
          instruction: "Observe uma tabela com a quantidade de livros lidos por 4 turmas (4ºA: 32, 4ºB: 28, 4ºC: 35, 4ºD: 30). Qual turma leu mais livros? Qual leu menos? Explique como você descobriu.",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Em um gráfico de colunas sobre frutas preferidas, a coluna mais alta representa a fruta __________.",
            "Para saber o valor exato de uma coluna, devo olhar para o __________ (eixo com os números).",
          ],
        },
        {
          kind: "options",
          instruction: "Em uma tabela de dupla entrada com o número de alunos por turma e por turno (manhã/tarde), para saber quantos alunos do 4º ano estudam de manhã, devo:",
          options: [
            "Cruzar a linha do 4º ano com a coluna da manhã",
            "Somar todas as linhas",
            "Olhar só a última coluna",
            "Contar o título da tabela",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um gráfico de colunas simples mostrando quantos animais de estimação (cachorro, gato, peixe) uma turma imaginária tem, usando estes dados: 12 cachorros, 8 gatos, 3 peixes.",
        },
      ],
    },
    {
      theme: "Pesquisa, coleta e organização de dados",
      exercises: [
        {
          kind: "lines",
          instruction: "Explique, em suas palavras, quais são as etapas para fazer uma pesquisa: o que perguntar, para quem perguntar, como anotar as respostas e como mostrar o resultado.",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Antes de fazer uma pesquisa, é preciso definir uma __________ clara para perguntar às pessoas.",
            "Depois de coletar as respostas, devo __________ os dados (organizar em grupos) antes de montar o gráfico.",
            "Uma boa forma de comunicar o resultado de uma pesquisa é usando um __________ de colunas ou barras.",
          ],
        },
        {
          kind: "options",
          instruction: "Se você quer descobrir qual é o esporte favorito da sua turma, qual é a melhor pergunta de pesquisa?",
          options: [
            "Qual é o seu esporte favorito?",
            "Você gosta de esportes?",
            "Quantos anos você tem?",
            "Qual é a sua cor favorita?",
          ],
        },
        {
          kind: "draw",
          instruction: "Faça uma pesquisa com 8 colegas sobre a fruta preferida entre maçã, banana e uva. Desenhe uma tabela com os resultados que você coletou.",
        },
      ],
    },
    {
      theme: "Produzindo textos a partir de dados de pesquisa",
      exercises: [
        {
          kind: "lines",
          instruction: "Observe este gráfico de colunas (imaginário) sobre o meio de transporte usado pelos alunos para ir à escola: a pé (10 alunos), de carro (6 alunos), de ônibus (14 alunos). Escreva um pequeno texto explicando o que o gráfico mostra.",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as etapas de um texto sobre dados:",
          items: [
            "Ao escrever sobre um gráfico, devo começar dizendo qual é o __________ da pesquisa.",
            "Depois, devo destacar qual foi o dado com __________ valor e qual teve o __________ valor.",
            "Por fim, posso escrever uma __________ (o que aprendi com esses dados).",
          ],
        },
        {
          kind: "options",
          instruction: "Qual frase é a mais adequada para descrever um gráfico onde ônibus foi a opção mais votada?",
          options: [
            "A maioria dos alunos vai à escola de ônibus.",
            "Ninguém vai de ônibus para a escola.",
            "Todos os alunos vão a pé.",
            "O gráfico não mostra nada sobre transporte.",
          ],
        },
        {
          kind: "lines",
          instruction: "Depois de olhar uma tabela com o número de gols de 3 times em um campeonato, escreva um pequeno texto contando qual time foi o artilheiro e por quê.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Estimativa e medição de comprimento, massa e capacidade",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com a unidade de medida mais adequada:",
          items: [
            "Para medir a altura de uma porta, a unidade mais adequada é o __________.",
            "Para medir a distância entre duas cidades, usamos o __________.",
            "Para medir o peso de uma pessoa, usamos o __________.",
            "Para medir a quantidade de água em uma garrafa, usamos o __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a unidade de medida mais adequada para pesar um saco de arroz de supermercado?",
          options: [
            "Quilograma (kg)",
            "Centímetro (cm)",
            "Litro (L)",
            "Quilômetro (km)",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as unidades de medida que servem para medir CAPACIDADE (quanto líquido cabe):",
          items: [
            "Litro",
            "Mililitro",
            "Metro",
            "Quilograma",
            "Grama",
          ],
        },
        {
          kind: "lines",
          instruction: "Antes de medir com a régua, estime (chute com cuidado) quantos centímetros tem o seu lápis. Depois, se possível, meça de verdade e compare. O que você descobriu?",
          lines: 3,
        },
      ],
    },
    {
      theme: "Relação entre grandeza e unidade de medida",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "1 metro tem __________ centímetros.",
            "1 quilograma tem __________ gramas.",
            "1 litro tem __________ mililitros.",
            "1 quilômetro tem __________ metros.",
          ],
        },
        {
          kind: "options",
          instruction: "Uma caneta mede aproximadamente 15 centímetros. Isso é o mesmo que:",
          options: [
            "0,15 metro",
            "1,5 metro",
            "150 metros",
            "15 metros",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que usamos o quilômetro para medir a distância entre cidades e o centímetro para medir o comprimento de um lápis, em vez de usar sempre a mesma unidade.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma reta numerada de 0 a 100 representando uma fita métrica de 1 metro, marcando onde ficaria a medida de 25 cm, 50 cm e 75 cm.",
        },
      ],
    },
    {
      theme: "Duração de intervalos de tempo",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete calculando a duração de cada intervalo:",
          items: [
            "Se um filme começa às 14h e termina às 16h30, ele dura __________ horas e __________ minutos.",
            "Se a aula começa às 7h e termina às 7h50, ela dura __________ minutos.",
            "Se uma viagem começa às 9h15 e termina às 11h45, ela dura __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Um jogo de futebol começou às 16h e terminou às 17h45 (com o intervalo incluso). Quanto tempo durou o jogo?",
          options: [
            "1 hora e 45 minutos",
            "2 horas e 15 minutos",
            "45 minutos",
            "1 hora",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você calcula quanto tempo passou entre o horário em que você acorda e o horário em que chega à escola.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe dois relógios: um mostrando a hora que você acha que começa o recreio e outro mostrando a hora que ele termina, considerando que dura 20 minutos.",
        },
      ],
    },
    {
      theme: "Conversões entre unidades de medida de tempo",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "1 semana tem __________ dias.",
            "1 dia tem __________ horas.",
            "1 ano tem __________ meses.",
            "2 semanas têm __________ dias.",
          ],
        },
        {
          kind: "options",
          instruction: "Quantos dias há em 3 semanas?",
          options: [
            "21 dias",
            "18 dias",
            "24 dias",
            "14 dias",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você calcularia quantos dias faltam para as próximas férias, sabendo quantas semanas faltam.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um calendário simples de um mês (pode ser inventado), marcando 4 semanas completas e mostrando quantos dias tem cada uma.",
        },
      ],
    },
    {
      theme: "Valores decimais no sistema monetário brasileiro",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "R$ 5,75 é lido como __________ reais e __________ centavos.",
            "Se eu tenho R$ 10,00 e gasto R$ 3,50, fico com R$ __________.",
            "Duas notas de R$ 20,00 somam R$ __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Ana comprou um lanche de R$ 8,50 e pagou com uma nota de R$ 10,00. Quanto ela recebeu de troco?",
          options: [
            "R$ 1,50",
            "R$ 2,50",
            "R$ 1,00",
            "R$ 18,50",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você faria para somar R$ 4,35 + R$ 2,80 sem usar calculadora.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe as notas e moedas (em reais) que você usaria para pagar exatamente R$ 13,75.",
        },
      ],
    },
    {
      theme: "Perímetro como medida do contorno de figuras",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "O perímetro de um quadrado com lado de 5 cm é __________ cm.",
            "O perímetro de um retângulo com lados 4 cm e 7 cm é __________ cm.",
            "Perímetro é a medida do __________ (contorno) de uma figura.",
          ],
        },
        {
          kind: "options",
          instruction: "Para calcular o perímetro de um triângulo, o que devemos fazer?",
          options: [
            "Somar as medidas dos três lados",
            "Multiplicar os três lados",
            "Somar apenas dois lados",
            "Contar os vértices",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique, com suas palavras, o que é o perímetro de uma figura e dê um exemplo do dia a dia em que calcular o perímetro é útil (por exemplo, cercar um terreno).",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Desenhe um retângulo com 6 cm de comprimento e 3 cm de largura e escreva ao lado o cálculo do seu perímetro.",
        },
      ],
    },
    {
      theme: "Calculando o perímetro em malhas quadriculadas",
      exercises: [
        {
          kind: "lines",
          instruction: "Imagine uma figura desenhada em uma malha quadriculada que ocupa um retângulo de 5 quadradinhos de comprimento por 3 quadradinhos de largura. Explique como você contaria o perímetro dessa figura.",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Em uma malha quadriculada, cada lado de um quadradinho vale __________ unidade.",
            "Um quadrado desenhado com 4 quadradinhos de lado tem perímetro de __________ unidades.",
          ],
        },
        {
          kind: "options",
          instruction: "Uma figura em forma de L desenhada em malha quadriculada tem os lados medindo, em unidades: 4, 2, 2, 2, 2, 4. Qual é o perímetro dessa figura?",
          options: [
            "16 unidades",
            "8 unidades",
            "12 unidades",
            "20 unidades",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe, em uma malha quadriculada (você mesmo desenha os quadradinhos), uma figura em formato de L e calcule o seu perímetro contando os lados.",
        },
      ],
    },
    {
      theme: "Certo, provável e impossível em jogos",
      exercises: [
        {
          kind: "word-select",
          instruction: "Em um jogo de dado comum (de 1 a 6), marque as afirmações CERTAS (sempre verdadeiras):",
          items: [
            "O resultado será um número entre 1 e 6",
            "O resultado será sempre par",
            "O resultado será um número maior que 0",
            "O resultado será sempre o número 6",
            "O resultado não pode ser 7",
          ],
        },
        {
          kind: "options",
          instruction: "Em um jogo de trilha com dado, qual é a chance de tirar um número maior que 4 (ou seja, 5 ou 6)?",
          options: [
            "Pouco provável (só 2 números em 6 possíveis)",
            "Muito provável",
            "Certeza absoluta",
            "Impossível",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete usando: certo, provável ou impossível.",
          items: [
            "Se um jogo usa uma roleta toda pintada de azul, tirar azul é __________.",
            "Se a roleta tem metade azul e metade vermelha, tirar azul ou vermelho é igualmente __________.",
            "Tirar uma cor que não existe na roleta é __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em um jogo de tabuleiro que você conhece. Descreva uma situação certa, uma provável e uma impossível de acontecer nesse jogo.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Antecipando ocorrências para ganhar um jogo",
      exercises: [
        {
          kind: "lines",
          instruction: "Em um jogo de trilha, você está na casa 45 e precisa chegar exatamente na casa 50 para ganhar. Se você joga um dado de 1 a 6, quais números fariam você ultrapassar a casa 50? Explique seu raciocínio.",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Em um jogo de adivinhar cartas onde há 4 cartas viradas para baixo (1 rei e 3 não-reis), qual afirmação é verdadeira sobre suas chances?",
          options: [
            "A chance de acertar o rei é a mesma em qualquer carta escolhida, 1 em 4",
            "Escolher a primeira carta aumenta as chances",
            "Escolher a última carta aumenta as chances",
            "É impossível acertar o rei",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Para ganhar um jogo de dados onde preciso de um número par, devo torcer para sair 2, 4 ou __________.",
            "As chances de sair um número par em um dado comum são __________ das chances totais.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um tabuleiro simples de jogo de trilha com 10 casas e marque quais casas seriam boas de cair para ganhar mais rápido, explicando por quê ao lado.",
        },
      ],
    },
    {
      theme: "Matemática e cultura indígena",
      exercises: [
        {
          kind: "lines",
          instruction: "Muitos povos indígenas brasileiros usam contagens e medidas em suas atividades, como tecer redes, construir ocas e organizar aldeias. Explique como a matemática pode estar presente na construção de uma oca (casa indígena) em formato circular ou oval.",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Se uma aldeia indígena tem 6 ocas e cada oca abriga em média 8 pessoas, a aldeia tem aproximadamente __________ pessoas.",
            "Se um artesão indígena faz colares com um padrão que se repete a cada 4 contas, em um colar de 24 contas esse padrão se repete __________ vezes.",
          ],
        },
        {
          kind: "options",
          instruction: "Os grafismos (desenhos) indígenas, como os do povo Kadiwéu, costumam usar muito qual conceito matemático?",
          options: [
            "Simetria e repetição de padrões geométricos",
            "Números decimais",
            "Porcentagem",
            "Equações",
          ],
        },
        {
          kind: "draw",
          instruction: "Pesquise ou imagine um grafismo (padrão de desenho) indígena e desenhe-o, observando se ele tem simetria (uma metade igual à outra).",
        },
      ],
    },
    {
      theme: "Matemática, biodiversidade e Fome Zero",
      exercises: [
        {
          kind: "lines",
          instruction: "Uma horta escolar plantou 3 canteiros: um com 12 pés de alface, outro com 8 pés de tomate e outro com 15 pés de cenoura. Quantos pés de hortaliças foram plantados ao todo? Explique como você calculou.",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Se uma horta produz 40 kg de alimentos por mês e metade é doada para famílias que precisam, são doados __________ kg.",
            "Se uma pesquisa encontrou 120 espécies de plantas em uma área, e 1/4 delas são frutíferas, isso são __________ espécies frutíferas.",
          ],
        },
        {
          kind: "options",
          instruction: "O projeto Fome Zero busca combater a fome e incentivar a alimentação saudável. Qual conta ajuda a organizar a distribuição de 240 kg de alimentos entre 8 famílias igualmente?",
          options: [
            "240 ÷ 8 = 30 kg para cada família",
            "240 x 8 = 1.920 kg para cada família",
            "240 + 8 = 248 kg para cada família",
            "240 - 8 = 232 kg para cada família",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma horta com pelo menos 3 tipos de plantas diferentes e escreva ao lado quantos pés de cada uma você imaginou, calculando o total.",
        },
      ],
    },
    {
      theme: "Propriedade associativa da adição e da multiplicação",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "(3 + 4) + 5 = 3 + (4 + __________)",
            "(2 x 3) x 4 = 2 x (3 x __________)",
            "Na propriedade associativa, mudar o __________ dos números nas contas não muda o resultado final.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual das opções mostra a propriedade associativa da adição sendo usada corretamente?",
          options: [
            "(6 + 2) + 5 = 6 + (2 + 5)",
            "6 + 2 = 2 + 6",
            "6 x 2 = 2 x 6",
            "6 + 0 = 6",
          ],
        },
        {
          kind: "lines",
          instruction: "Calcule (5 + 3) + 2 e depois 5 + (3 + 2). Compare os resultados e explique o que você percebeu.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe dois grupos de blocos ou bolinhas que representem (2 x 3) x 2 de um jeito e 2 x (3 x 2) de outro jeito, mostrando que o total é o mesmo.",
        },
      ],
    },
    {
      theme: "Regularidades em multiplicações por 0 e por 1",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "7 x 1 = __________",
            "1 x 15 = __________",
            "9 x 0 = __________",
            "0 x 234 = __________",
          ],
        },
        {
          kind: "options",
          instruction: "Qual regra é sempre verdadeira quando multiplicamos um número por 0?",
          options: [
            "O resultado é sempre 0",
            "O resultado é sempre igual ao número",
            "O resultado é sempre 1",
            "Depende do número",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique com suas palavras por que qualquer número multiplicado por 1 dá sempre o próprio número.",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe 5 grupos vazios (sem nenhum elemento dentro) para representar 5 x 0, e depois desenhe 1 grupo com 5 elementos para representar 5 x 1. Compare os resultados.",
        },
      ],
    },
    {
      theme: "Leitura, escrita e comparação de números naturais de várias ordens",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Escreva por extenso os números:",
          items: [
            "45.372 = __________",
            "108.009 = __________",
            "1.250.000 = __________",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a forma correta de comparar os números 87.450 e 87.540?",
          options: [
            "Comparar primeiro a ordem de maior valor até encontrar uma diferença",
            "Comparar apenas o último algarismo",
            "Somar os dois números e ver qual é maior",
            "Contar quantos algarismos tem cada número, ignorando a ordem",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique, com suas palavras, como você descobre se um número é maior que outro quando os dois têm a mesma quantidade de algarismos:",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Escolha um número de 6 algarismos e represente sua decomposição em um quadro de ordens (unidades, dezenas, centenas, unidades de milhar, dezenas de milhar, centenas de milhar):",
        },
      ],
    },
    {
      theme: "Leitura e representação de números racionais na reta numerada",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma reta numerada de 0 a 1, dividida em décimos, e marque os pontos correspondentes a 0,3 e 3/10:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete com a fração ou o decimal equivalente:",
          items: [
            "0,5 = __________ (fração)",
            "3/4 = __________ (decimal)",
            "0,25 = __________ (fração)",
          ],
        },
        {
          kind: "options",
          instruction: "Entre um número inteiro e o próximo, quantos números racionais podemos encontrar?",
          options: [
            "Infinitos números racionais",
            "Exatamente 9 números",
            "Nenhum, só existem os números inteiros",
            "Apenas números pares",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você localizaria o número 1,7 em uma reta numerada que vai de 0 a 3:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Significados dos números racionais: parte-todo e quociente",
      exercises: [
        {
          kind: "options",
          instruction: "Em '3 pizzas divididas igualmente entre 4 amigos', a fração 3/4 representa o significado de:",
          options: [
            "Quociente (divisão entre duas quantidades)",
            "Parte-todo (uma parte de um único inteiro dividido)",
            "Porcentagem",
            "Número decimal apenas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Uma barra de chocolate com 8 pedaços, dos quais comi 5, representa a fração __________ no significado parte-todo",
            "5 barras de chocolate divididas entre 2 pessoas: cada pessoa recebe __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique a diferença entre a fração 1/2 usada para representar 'metade de uma pizza' e a fração 1/2 usada para representar '1 litro de suco dividido entre 2 copos':",
          lines: 5,
        },
        {
          kind: "draw",
          instruction: "Represente com desenhos duas situações: uma em que a fração 2/3 tem o significado de parte-todo, e outra em que ela representa um quociente (uma divisão):",
        },
      ],
    },
    {
      theme: "Comparação e ordenação de frações e números decimais",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a forma mais eficiente de comparar 3/5 e 0,55?",
          options: [
            "Transformar a fração em decimal (3/5 = 0,6) e comparar com 0,55",
            "Comparar apenas os numeradores",
            "Comparar apenas os denominadores",
            "É impossível comparar fração com decimal",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "0,4 em fração é __________",
            "3/4 em decimal é __________",
            "Ordem crescente de 0,4 — 3/4 — 0,15 — 1/2: __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você decidiu qual é maior: 2/3 ou 0,7:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Represente 1/2, 0,3 e 3/4 em uma mesma reta numerada de 0 a 1, para comparar visualmente os três números:",
        },
      ],
    },
    {
      theme: "Investigação da equivalência de frações",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe dois retângulos do mesmo tamanho: no primeiro, pinte 1/2; no segundo, divida em quartos e pinte a quantidade equivalente a 1/2:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frações equivalentes:",
          items: [
            "1/2 = ___/4",
            "1/2 = ___/6",
            "2/3 = ___/6",
            "2/3 = ___/9",
          ],
        },
        {
          kind: "options",
          instruction: "Qual fração é equivalente a 3/4?",
          options: [
            "6/8",
            "3/8",
            "4/3",
            "1/4",
          ],
        },
        {
          kind: "lines",
          instruction: "Observando as frações 2/4, 3/6 e 4/8, explique qual regularidade você percebe na relação entre numerador e denominador que faz com que todas sejam equivalentes a 1/2:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Estratégias de cálculo com as quatro operações",
      exercises: [
        {
          kind: "lines",
          instruction: "Explique, passo a passo, uma estratégia de cálculo mental para resolver 298 + 456 sem usar a conta armada:",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Estime o resultado de 812 - 397 arredondando os números: __________",
            "Agora calcule o resultado exato: __________",
          ],
        },
        {
          kind: "options",
          instruction: "Para calcular 25 x 12 mentalmente, qual estratégia é mais eficiente?",
          options: [
            "Calcular 25 x 10 + 25 x 2",
            "Somar 25 doze vezes uma por uma",
            "Multiplicar 2 x 1 e 5 x 2 separadamente sem juntar",
            "Dividir 25 por 12",
          ],
        },
        {
          kind: "draw",
          instruction: "Escolha uma multiplicação de dois números com dois algarismos cada e represente sua decomposição (por exemplo, usando um retângulo dividido) para calcular o resultado:",
        },
      ],
    },
    {
      theme: "Resolução de problemas dos campos aditivo e multiplicativo",
      exercises: [
        {
          kind: "lines",
          instruction: "Leia o problema: 'Uma escola tem 8 salas de aula, cada uma com 27 alunos. Quantos alunos há na escola ao todo?' Resolva e explique seu raciocínio:",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Resolva:",
          items: [
            "Ana tinha R$ 45,00, ganhou R$ 30,00 de mesada e gastou R$ 18,00 em um livro. Quanto sobrou? Resposta: __________",
          ],
        },
        {
          kind: "options",
          instruction: "Um ônibus tem 42 lugares. Para transportar 250 pessoas, quantos ônibus são necessários no mínimo?",
          options: [
            "6 ônibus",
            "5 ônibus",
            "7 ônibus",
            "4 ônibus",
          ],
        },
        {
          kind: "draw",
          instruction: "Crie e ilustre com um desenho um problema envolvendo multiplicação que possa ser resolvido com a conta 6 x 15:",
        },
      ],
    },
    {
      theme: "Cálculo de adição e subtração com números decimais",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Calcule:",
          items: [
            "12,50 + 7,35 = __________",
            "45,00 - 18,75 = __________",
            "3,08 + 9,4 = __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você organiza a vírgula ao somar 24,3 + 5,67, e por que isso é importante:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Qual é o resultado de 8,2 - 3,45?",
          options: [
            "4,75",
            "5,25",
            "4,85",
            "3,75",
          ],
        },
        {
          kind: "draw",
          instruction: "Represente em um desenho (como um quadro de valor de lugar) a soma 3,25 + 1,8, mostrando como os décimos e centésimos se organizam:",
        },
      ],
    },
    {
      theme: "Cálculo de porcentagens simples e sua relação com frações",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Calcule:",
          items: [
            "50% de 80 = __________",
            "25% de 200 = __________",
            "10% de 350 = __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique a relação entre 50%, a fração 1/2 e o número decimal 0,5:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Uma loja está com 25% de desconto em um produto de R$ 120,00. Qual é o valor do desconto?",
          options: [
            "R$ 30,00",
            "R$ 25,00",
            "R$ 40,00",
            "R$ 20,00",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um quadrado dividido em 10 partes iguais e pinte 75% dele, explicando com uma frase quantas partes você pintou:",
        },
      ],
    },
    {
      theme: "Problemas do campo aditivo com números racionais em forma decimal",
      exercises: [
        {
          kind: "lines",
          instruction: "Leia: 'Marina correu 2,750 km na segunda-feira e 1,340 km na terça-feira. Quantos quilômetros ela correu ao todo?' Resolva e explique seu raciocínio:",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Resolva:",
          items: [
            "Uma garrafa tem 1,5 litro de suco. Se eu usar 0,75 litro numa receita, quanto sobra? Resposta: __________",
          ],
        },
        {
          kind: "options",
          instruction: "Pedro tinha R$ 87,40, recebeu R$ 15,60 e gastou R$ 42,00. Quanto ele tem agora?",
          options: [
            "R$ 61,00",
            "R$ 71,00",
            "R$ 51,00",
            "R$ 45,00",
          ],
        },
        {
          kind: "draw",
          instruction: "Crie e ilustre um problema envolvendo números decimais que possa ser resolvido com a conta 5,25 + 3,80:",
        },
      ],
    },
    {
      theme: "Investigação das propriedades da igualdade",
      exercises: [
        {
          kind: "lines",
          instruction: "Explique por que a igualdade 8 + 5 = 13 continua verdadeira se somarmos 2 aos dois lados: 8 + 5 + 2 = 13 + 2. O que acontece dos dois lados?",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Se x + 4 = 10, então x + 4 - 4 = 10 - __________, logo x = __________",
          ],
        },
        {
          kind: "options",
          instruction: "Se numa balança em equilíbrio 6 = 6, o que acontece se multiplicarmos os dois lados por 3?",
          options: [
            "A balança continua em equilíbrio, pois 18 = 18",
            "A balança desequilibra para a esquerda",
            "A balança desequilibra para a direita",
            "É impossível saber sem mais informações",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma balança de dois pratos em equilíbrio representando a igualdade 5 + 3 = 8, e depois desenhe o que acontece se você retirar 2 de cada prato:",
        },
      ],
    },
    {
      theme: "Problemas envolvendo ampliação e redução proporcional de quantidades",
      exercises: [
        {
          kind: "lines",
          instruction: "Uma receita de bolo para 4 pessoas usa 2 xícaras de farinha. Se eu quiser fazer para 12 pessoas, quantas xícaras vou precisar? Explique seu raciocínio:",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete mantendo a proporção:",
          items: [
            "Se 3 canetas custam R$ 9,00, quanto custam 9 canetas? __________",
          ],
        },
        {
          kind: "options",
          instruction: "Uma foto de 10 cm x 15 cm será ampliada para o dobro do tamanho. Quais serão as novas medidas?",
          options: [
            "20 cm x 30 cm",
            "15 cm x 20 cm",
            "10 cm x 30 cm",
            "12 cm x 17 cm",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um retângulo pequeno de 2 cm x 3 cm em uma malha quadriculada e, ao lado, desenhe a mesma figura ampliada para o triplo do tamanho:",
        },
      ],
    },
    {
      theme: "Problemas de partilha de uma quantidade em partes desiguais",
      exercises: [
        {
          kind: "lines",
          instruction: "Dois irmãos vão repartir R$ 60,00 de uma mesada, mas um deles recebe o dobro do outro por ser mais velho. Quanto cada um recebe? Explique seu raciocínio:",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Repartir 40 figurinhas entre dois amigos, sendo que um recebe 3 vezes mais que o outro: o que recebe menos ganha __________, o que recebe mais ganha __________",
          ],
        },
        {
          kind: "options",
          instruction: "Ao repartir 90 balas entre duas crianças, na razão de 2 para 1 (uma recebe o dobro da outra), quantas balas cada uma recebe?",
          options: [
            "30 e 60",
            "45 e 45",
            "20 e 70",
            "10 e 80",
          ],
        },
        {
          kind: "draw",
          instruction: "Represente com desenhos (bolinhas ou fichas) a partilha de 24 lápis entre duas crianças, sendo que uma recebe o triplo da outra:",
        },
      ],
    },
    {
      theme: "Localização e movimentação de pontos no plano cartesiano",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um plano cartesiano com eixos de 0 a 10 e marque os pontos A(2,3), B(5,7) e C(8,1):",
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "O ponto que está 3 unidades para a direita e 4 unidades para cima da origem tem coordenadas ( __________ , __________ )",
          ],
        },
        {
          kind: "options",
          instruction: "Se um ponto está localizado em (4, 6) e se move 3 unidades para a direita, suas novas coordenadas são:",
          options: [
            "(7, 6)",
            "(4, 9)",
            "(1, 6)",
            "(4, 3)",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique a diferença entre o significado da primeira coordenada (x) e da segunda coordenada (y) de um ponto no plano cartesiano:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Características e classificação de poliedros",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule, entre as figuras abaixo, aquelas que são poliedros (sólidos com faces planas):",
          items: [
            "Cubo",
            "Esfera",
            "Pirâmide de base quadrada",
            "Cilindro",
            "Prisma triangular",
            "Cone",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Um prisma de base retangular tem __________ faces, __________ vértices e __________ arestas",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a principal diferença entre um prisma e uma pirâmide?",
          options: [
            "O prisma tem duas bases paralelas e a pirâmide tem uma base e um vértice (ápice)",
            "O prisma tem faces curvas e a pirâmide não",
            "A pirâmide sempre tem base quadrada e o prisma não",
            "Não há diferença entre eles",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um prisma de base triangular e uma pirâmide de base quadrada, identificando as bases de cada um:",
        },
      ],
    },
    {
      theme: "Planificação de sólidos geométricos",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe a planificação (o molde aberto) de um cubo, mostrando as 6 faces quadradas conectadas:",
        },
        {
          kind: "options",
          instruction: "Qual figura plana forma a planificação da superfície lateral de um cilindro (quando desenrolada)?",
          options: [
            "Um retângulo",
            "Um triângulo",
            "Um círculo",
            "Um quadrado",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "A planificação de uma pirâmide de base quadrada é formada por __________ quadrado(s) e __________ triângulo(s)",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você reconhece se uma planificação de papel, quando dobrada, vai formar um cubo ou uma pirâmide:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Relações entre faces, vértices e arestas de poliedros",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete usando a relação de Euler (F + V = A + 2):",
          items: [
            "Um cubo tem 6 faces, 8 vértices e 12 arestas. Aplicando a relação: 6 + 8 = __________ + 2, ou seja, __________",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique com suas palavras a relação de Euler (faces + vértices = arestas + 2) usando o exemplo de uma pirâmide de base quadrada (5 faces, 5 vértices, 8 arestas):",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Um prisma de base pentagonal tem 7 faces e 10 vértices. Quantas arestas ele deve ter, segundo a relação de Euler?",
          options: [
            "15 arestas",
            "12 arestas",
            "17 arestas",
            "10 arestas",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma tabela comparando três poliedros diferentes (cubo, pirâmide de base triangular e prisma de base triangular), anotando o número de faces, vértices e arestas de cada um:",
        },
      ],
    },
    {
      theme: "Classificação de polígonos pelo número de lados e ângulos",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Um polígono de 5 lados chama-se __________",
            "Um polígono de 6 lados chama-se __________",
            "Um polígono de 8 lados chama-se __________",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule, entre as figuras descritas abaixo, aquelas que são polígonos:",
          items: [
            "Triângulo",
            "Círculo",
            "Hexágono",
            "Elipse",
            "Pentágono",
            "Losango",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a principal diferença entre um polígono regular e um polígono irregular?",
          options: [
            "No regular, todos os lados e ângulos são iguais; no irregular, não",
            "O regular sempre tem 4 lados",
            "O irregular não tem ângulos",
            "Não existe diferença",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um pentágono regular e um pentágono irregular, destacando a diferença entre os lados e ângulos de cada um:",
        },
      ],
    },
    {
      theme: "Circunferência e seus elementos",
      exercises: [
        {
          kind: "draw",
          instruction: "Usando um compasso (ou contornando um objeto redondo), desenhe uma circunferência e marque o centro, um raio e o diâmetro:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Se o raio de uma circunferência mede 5 cm, o diâmetro mede __________ cm",
            "Se o diâmetro mede 18 cm, o raio mede __________ cm",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a relação entre o raio e o diâmetro de uma circunferência?",
          options: [
            "O diâmetro é o dobro do raio",
            "O raio é o dobro do diâmetro",
            "Raio e diâmetro são sempre iguais",
            "Não existe relação entre eles",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique a diferença entre círculo e circunferência, e entre raio e diâmetro:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Composição e decomposição de polígonos com figuras triangulares",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um hexágono e trace linhas para dividi-lo em triângulos, mostrando que ele pode ser formado a partir de figuras triangulares:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Um quadrado pode ser decomposto em __________ triângulos, traçando uma de suas diagonais",
            "Um pentágono pode ser decomposto em __________ triângulos",
          ],
        },
        {
          kind: "options",
          instruction: "Qualquer polígono convexo pode ser decomposto em triângulos traçando:",
          options: [
            "Diagonais a partir de um mesmo vértice",
            "Apenas retas paralelas aos lados",
            "Círculos internos",
            "Não é possível decompor polígonos em triângulos",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que é útil decompor um polígono em triângulos, por exemplo, para calcular sua área:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Ampliação e redução de polígonos em malha quadriculada",
      exercises: [
        {
          kind: "draw",
          instruction: "Em uma malha quadriculada, desenhe um triângulo pequeno e, ao lado, o mesmo triângulo ampliado para o dobro do tamanho, mantendo a proporção:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Um retângulo de 3 x 4 quadradinhos, ampliado para o dobro, terá as medidas __________ x __________",
          ],
        },
        {
          kind: "options",
          instruction: "Ao reduzir um polígono pela metade em uma malha quadriculada, o que deve acontecer com todos os seus lados?",
          options: [
            "Todos os lados devem ser divididos por 2, mantendo a proporção",
            "Apenas um lado muda de tamanho",
            "Os ângulos devem mudar",
            "O número de lados diminui",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique o que pode dar errado se, ao ampliar um polígono, você aumentar apenas a largura e não a altura na mesma proporção:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Simetria de reflexão em figuras planas",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe o eixo de simetria de cada figura: um quadrado, um retângulo e a letra A maiúscula.",
        },
        {
          kind: "word-select",
          instruction: "Marque as letras do alfabeto abaixo que possuem pelo menos um eixo de simetria:",
          items: [
            "A",
            "B",
            "C",
            "F",
            "H",
            "M",
            "N",
            "O",
            "T",
            "S",
          ],
        },
        {
          kind: "options",
          instruction: "Observe uma borboleta desenhada com as asas abertas, uma metade igual à outra. O que podemos afirmar sobre suas duas metades?",
          options: [
            "Elas são simétricas em relação ao eixo que passa pelo corpo da borboleta",
            "Elas são totalmente diferentes uma da outra",
            "Apenas as cores são iguais, o formato não",
            "Não existe nenhuma relação entre as duas metades",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique com suas palavras o que significa dizer que uma figura tem simetria de reflexão. Dê um exemplo de objeto do dia a dia que você conhece.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Identificação de ângulos retos, agudos e obtusos",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque as medidas de ângulo que representam ângulos agudos (menores que 90°):",
          items: [
            "30°",
            "90°",
            "45°",
            "120°",
            "10°",
            "180°",
            "89°",
          ],
        },
        {
          kind: "options",
          instruction: "Os ponteiros de um relógio marcando 3 horas formam um ângulo de:",
          options: [
            "90° (reto)",
            "45° (agudo)",
            "180° (raso)",
            "120° (obtuso)",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um polígono (por exemplo, um pentágono) e marque com um arco cada um dos ângulos internos. Classifique cada um como reto, agudo ou obtuso.",
        },
        {
          kind: "lines",
          instruction: "Observe os ângulos internos de um triângulo retângulo. Explique quantos ângulos retos, agudos e obtusos ele tem.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Resultados possíveis de experimentos aleatórios",
      exercises: [
        {
          kind: "lines",
          instruction: "Se você lançar um dado comum (de 1 a 6), quais são todos os resultados possíveis? Escreva-os e explique se algum número tem mais chance de sair do que outro.",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete pensando nos resultados possíveis de cada experimento:",
          items: [
            "Ao lançar uma moeda, os resultados possíveis são __________ e __________.",
            "Em uma caixa com bolas azul, verde e amarela, ao tirar uma bola ao acaso, os resultados possíveis são __________.",
            "Ao girar uma roleta dividida em 4 partes iguais numeradas de 1 a 4, os resultados possíveis são __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Uma urna tem 3 bolas vermelhas e 3 bolas brancas, todas do mesmo tamanho. Isso é um exemplo de evento:",
          options: [
            "Equiprovável (mesma chance para cada cor)",
            "Impossível",
            "Certo, só pode sair vermelha",
            "Que nunca pode dar branco",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma roleta dividida em 6 partes iguais, numeradas de 1 a 6, e liste todos os resultados possíveis ao girá-la.",
        },
      ],
    },
    {
      theme: "Cálculo da probabilidade de eventos equiprováveis",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete calculando a probabilidade de cada situação:",
          items: [
            "Uma caixa tem 5 bolas: 2 vermelhas e 3 azuis. A probabilidade de tirar uma bola vermelha é __________ em __________.",
            "Em um dado comum, a probabilidade de sair o número 4 é 1 em __________.",
            "Em uma moeda, a probabilidade de dar cara é __________ em __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Em um saco com 10 bolinhas numeradas de 1 a 10, qual é a probabilidade de tirar um número par?",
          options: [
            "5 em 10 (metade)",
            "1 em 10",
            "10 em 10",
            "0 em 10",
          ],
        },
        {
          kind: "lines",
          instruction: "Uma roleta tem 8 partes iguais, sendo 2 vermelhas, 3 azuis e 3 verdes. Explique como você calcularia a probabilidade de a seta parar em uma parte azul.",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma roleta com 4 partes iguais, sendo 1 amarela e 3 verdes. Escreva ao lado a probabilidade de cair em cada cor.",
        },
      ],
    },
    {
      theme: "Associação de tabelas a gráficos de colunas, barras e linhas",
      exercises: [
        {
          kind: "options",
          instruction: "Um gráfico de linhas é mais indicado para mostrar:",
          options: [
            "A variação de um valor ao longo do tempo (por exemplo, temperatura durante a semana)",
            "A quantidade total de alunos de uma escola em um único dia",
            "Apenas números pares",
            "A cor favorita de cada aluno, sem relação com o tempo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Observe um gráfico de colunas sobre o esporte favorito da turma e complete:",
          items: [
            "O __________ do gráfico indica sobre o que ele trata.",
            "A __________ explica o que cada cor ou símbolo representa.",
            "A __________ informa de onde vieram os dados e a __________ diz quando a pesquisa foi feita.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque quais elementos devem aparecer em um gráfico bem construído:",
          items: [
            "Título",
            "Legenda (quando necessário)",
            "Fonte dos dados",
            "Desenho aleatório sem relação com os dados",
            "Eixos com valores",
          ],
        },
        {
          kind: "draw",
          instruction: "Observe esta tabela: Segunda: 5 alunos faltaram; Terça: 2; Quarta: 4; Quinta: 1; Sexta: 3. Transforme esses dados em um gráfico de colunas, com título, legenda e eixos.",
        },
      ],
    },
    {
      theme: "Pesquisa e organização de dados em tabelas e gráficos",
      exercises: [
        {
          kind: "lines",
          instruction: "Planeje uma pesquisa com seus colegas de turma sobre o meio de transporte que cada um usa para ir à escola. Escreva a pergunta que você faria e liste as possíveis respostas.",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Faça uma tabela de frequência imaginando que você perguntou a 10 colegas qual é a estação do ano preferida. Invente os dados e organize em uma tabela com as colunas 'Estação' e 'Número de alunos'.",
        },
        {
          kind: "options",
          instruction: "Altura e idade são exemplos de variáveis:",
          options: [
            "Numéricas (podem ser medidas com números)",
            "Categóricas (não podem ser medidas com números)",
            "Impossíveis de pesquisar",
            "Que não servem para gráficos",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre pesquisa de dados:",
          items: [
            "Cor dos olhos é uma variável __________ (categórica/numérica).",
            "Número de irmãos é uma variável __________ (categórica/numérica).",
            "Depois de coletar os dados de uma pesquisa, organizamos em uma __________ antes de fazer o gráfico.",
          ],
        },
      ],
    },
    {
      theme: "Produção de texto a partir da leitura de tabelas e gráficos",
      exercises: [
        {
          kind: "draw",
          instruction: "Observe este gráfico de colunas imaginário: Frutas preferidas da turma — Maçã: 8 votos, Banana: 5 votos, Uva: 10 votos, Laranja: 3 votos. Desenhe o gráfico de colunas com esses dados, incluindo título e legenda.",
        },
        {
          kind: "lines",
          instruction: "Com base no gráfico que você desenhou na questão anterior, escreva um pequeno texto contando qual fruta foi mais votada, qual foi menos votada e qual a diferença entre elas.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "Ao escrever um texto sobre um gráfico, é importante:",
          options: [
            "Comparar os dados e destacar o maior e o menor valor",
            "Inventar números que não estão no gráfico",
            "Ignorar o título do gráfico",
            "Escrever sobre um assunto diferente do gráfico",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Com base no gráfico das frutas, complete:",
          items: [
            "A fruta mais votada foi a __________, com __________ votos.",
            "A fruta menos votada foi a __________, com __________ votos.",
            "A diferença entre a mais votada e a menos votada é de __________ votos.",
          ],
        },
      ],
    },
    {
      theme: "Resolução de problemas a partir de dados organizados em tabelas e gráficos",
      exercises: [
        {
          kind: "lines",
          instruction: "Uma tabela mostra a venda de livros em uma livraria durante 4 dias: Segunda: 45 livros; Terça: 32 livros; Quarta: 58 livros; Quinta: 27 livros. Quantos livros foram vendidos ao todo nesses 4 dias? Mostre como você calculou.",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Usando a tabela da questão anterior, complete:",
          items: [
            "O dia de maior venda foi __________, com __________ livros.",
            "A diferença entre o dia de maior e o dia de menor venda foi de __________ livros.",
          ],
        },
        {
          kind: "options",
          instruction: "Um gráfico mostra que a Turma A leu 120 livros no mês e a Turma B leu 95 livros. Quantos livros a mais a Turma A leu em relação à Turma B?",
          options: [
            "25 livros",
            "15 livros",
            "35 livros",
            "215 livros",
          ],
        },
        {
          kind: "draw",
          instruction: "Crie uma tabela com a quantidade de gols de 4 times em um campeonato (invente os números) e escreva um problema de matemática que possa ser resolvido usando esses dados.",
        },
      ],
    },
    {
      theme: "Problemas envolvendo medidas de comprimento, massa, tempo, temperatura e capacidade",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as transformações de medida:",
          items: [
            "3 metros = __________ centímetros.",
            "2,5 quilogramas = __________ gramas.",
            "1 hora e 30 minutos = __________ minutos.",
            "4 litros = __________ mililitros.",
          ],
        },
        {
          kind: "lines",
          instruction: "Uma receita de bolo pede 750 mL de leite, mas você só tem um copo medidor de 250 mL. Explique quantas vezes você precisa encher o copo para conseguir a quantidade certa.",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "A temperatura da manhã era 14°C e à tarde subiu para 26°C. Qual foi a variação de temperatura?",
          options: [
            "12°C",
            "10°C",
            "14°C",
            "40°C",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma linha do tempo mostrando um dia (24 horas) e marque três atividades que você faz, indicando o horário de início e o tempo que cada uma dura.",
        },
      ],
    },
    {
      theme: "Cálculo do perímetro de polígonos",
      exercises: [
        {
          kind: "lines",
          instruction: "Um terreno retangular tem 12 metros de comprimento e 8 metros de largura. Explique como calcular o perímetro desse terreno e qual é o resultado.",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Calcule o perímetro de cada figura:",
          items: [
            "O perímetro de um quadrado com lado de 6 cm é __________ cm.",
            "O perímetro de um triângulo com lados de 5 cm, 7 cm e 9 cm é __________ cm.",
            "Um retângulo tem base 10 cm e altura 4 cm. Seu perímetro é __________ cm.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um polígono em uma malha quadriculada (pode ser irregular) com pelo menos 5 lados e calcule seu perímetro contando os quadradinhos das bordas.",
        },
        {
          kind: "options",
          instruction: "Para calcular o perímetro de qualquer polígono, devemos:",
          options: [
            "Somar as medidas de todos os lados",
            "Multiplicar todos os lados entre si",
            "Contar apenas os vértices",
            "Multiplicar a base pela altura",
          ],
        },
      ],
    },
    {
      theme: "Compreensão da área como medida de superfície",
      exercises: [
        {
          kind: "lines",
          instruction: "Explique com suas palavras o que é a área de uma figura e dê um exemplo de situação do dia a dia em que precisamos calcular uma área.",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "A área de uma figura é medida em:",
          options: [
            "Unidades de superfície, como cm² ou m²",
            "Unidades de comprimento, como cm ou m",
            "Unidades de tempo, como minutos",
            "Unidades de massa, como gramas",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe duas figuras diferentes em uma malha quadriculada que tenham a mesma área, mas formatos diferentes.",
        },
        {
          kind: "word-select",
          instruction: "Marque as situações em que estamos medindo área (e não perímetro ou volume):",
          items: [
            "Calcular quantos ladrilhos cobrem o chão de uma sala",
            "Calcular quanto tecido é preciso para cobrir uma mesa",
            "Medir a volta de um jardim com uma cerca",
            "Calcular quanta tinta é necessária para pintar uma parede",
          ],
        },
      ],
    },
    {
      theme: "Cálculo de áreas de retângulos e quadrados em malha quadriculada",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um retângulo de 6 quadradinhos de base por 4 quadradinhos de altura em uma malha quadriculada e conte o total de quadradinhos para encontrar a área.",
        },
        {
          kind: "fill-blank",
          instruction: "Calcule a área de cada figura:",
          items: [
            "A área de um retângulo com base 7 cm e altura 3 cm é __________ cm².",
            "A área de um quadrado com lado 5 cm é __________ cm².",
            "Um retângulo com área 24 cm² e base 6 cm tem altura __________ cm.",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que multiplicamos a base pela altura para encontrar a área de um retângulo, relacionando com a contagem de quadradinhos em uma malha.",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Um quadrado tem lado de 9 cm. Qual é sua área?",
          options: [
            "81 cm²",
            "36 cm²",
            "18 cm²",
            "72 cm²",
          ],
        },
      ],
    },
    {
      theme: "Problemas com o sistema monetário brasileiro",
      exercises: [
        {
          kind: "lines",
          instruction: "Marina foi ao mercado com R$ 50,00. Comprou um pacote de arroz por R$ 18,90, um leite por R$ 5,50 e um pão por R$ 7,30. Quanto ela gastou ao todo e quanto sobrou do dinheiro? Mostre os cálculos.",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Resolva os cálculos com dinheiro:",
          items: [
            "Se um lápis custa R$ 1,75 e você compra 4 lápis, o total é __________.",
            "Uma calculadora custa R$ 32,00. Pagando com uma nota de R$ 50,00, o troco é __________.",
            "R$ 8,45 + R$ 12,60 = __________.",
          ],
        },
        {
          kind: "options",
          instruction: "João comprou 3 cadernos de R$ 9,80 cada e 2 canetas de R$ 3,50 cada. Quanto ele gastou no total?",
          options: [
            "R$ 36,40",
            "R$ 29,40",
            "R$ 33,90",
            "R$ 39,90",
          ],
        },
        {
          kind: "draw",
          instruction: "Monte uma 'lista de compras' com 4 itens e seus preços (invente valores realistas). Calcule o total gasto e mostre como você faria o cálculo passo a passo.",
        },
      ],
    },
    {
      theme: "Noção de volume por meio do empilhamento de cubos",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma pilha de cubinhos formando um bloco retangular com 3 cubos de comprimento, 2 de largura e 2 de altura. Depois, conte e escreva o total de cubinhos usados.",
        },
        {
          kind: "fill-blank",
          instruction: "Calcule o volume em cubinhos:",
          items: [
            "Um bloco formado por 4 cubinhos de comprimento, 3 de largura e 2 de altura tem __________ cubinhos ao todo.",
            "Se um sólido tem volume de 12 cubinhos, ele pode ser formado, por exemplo, por __________ camadas de __________ cubinhos cada.",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como você faria para descobrir o volume de um sólido formado por cubinhos empilhados, sem precisar contar cubo por cubo.",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Uma caixa é montada com 2 camadas de cubinhos, cada camada com 3 fileiras de 4 cubinhos. Quantos cubinhos há na caixa toda?",
          options: [
            "24 cubinhos",
            "9 cubinhos",
            "12 cubinhos",
            "20 cubinhos",
          ],
        },
      ],
    },
    {
      theme: "Jogos de tabuleiro: estratégias e antecipação de jogadas",
      exercises: [
        {
          kind: "lines",
          instruction: "Depois de jogar uma partida de um jogo de tabuleiro (como damas, trilha ou jogo da velha) com um colega, explique qual estratégia você usou para tentar vencer e se ela funcionou.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "No jogo da velha, qual é uma boa estratégia para o primeiro jogador?",
          options: [
            "Jogar no centro do tabuleiro",
            "Jogar sempre no mesmo canto, sem pensar",
            "Copiar a jogada do adversário",
            "Jogar aleatoriamente sem observar o tabuleiro",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as atitudes importantes para jogar bem um jogo de estratégia:",
          items: [
            "Observar as jogadas do adversário",
            "Pensar antes de jogar",
            "Chutar sem pensar",
            "Antecipar possíveis jogadas futuras",
            "Desistir ao primeiro erro",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o tabuleiro de um jogo de estratégia que você conhece (como jogo da velha ou trilha) e marque uma jogada que representaria uma boa estratégia.",
        },
      ],
    },
    {
      theme: "Composição de figuras com peças do Tangram",
      exercises: [
        {
          kind: "draw",
          instruction: "Usando as 7 peças do Tangram (2 triângulos grandes, 1 triângulo médio, 2 triângulos pequenos, 1 quadrado e 1 paralelogramo), desenhe uma composição formando um quadrado grande.",
        },
        {
          kind: "lines",
          instruction: "Explique como você combinou as peças do Tangram para formar a figura da questão anterior. Quais peças você usou e como elas se encaixaram?",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Quantas peças tem um jogo completo de Tangram?",
          options: [
            "7 peças",
            "5 peças",
            "10 peças",
            "6 peças",
          ],
        },
        {
          kind: "draw",
          instruction: "Usando apenas 3 peças do Tangram, desenhe um triângulo grande formado pela junção dessas peças.",
        },
      ],
    },
    {
      theme: "Projeto sobre produção e consumo consciente de alimentos",
      exercises: [
        {
          kind: "lines",
          instruction: "Pesquise (ou estime) quantos quilos de alimentos sua família compra por semana no mercado. Depois, calcule quanto seria em um mês (4 semanas) e explique se esse número parece maior, menor ou parecido com o de outras famílias.",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Resolva os problemas sobre consumo de alimentos:",
          items: [
            "Se uma família consome 3 kg de arroz por mês e mora em um prédio com 20 famílias parecidas, o consumo total do prédio seria __________ kg por mês.",
            "Se um quilo de tomate custa R$ 6,00, o preço de 3 kg é __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual atitude ajuda a reduzir o desperdício de alimentos em casa?",
          options: [
            "Planejar as compras e aproveitar os alimentos por completo",
            "Comprar sempre mais do que se vai consumir",
            "Jogar fora alimentos que ainda podem ser usados",
            "Não guardar as sobras de comida",
          ],
        },
        {
          kind: "draw",
          instruction: "Monte uma tabela com 4 alimentos e a quantidade aproximada que sua família consome por semana. Depois, desenhe um gráfico de colunas com esses dados.",
        },
      ],
    },
    {
      theme: "Projeto sobre impactos sociais e ambientais da produção e consumo",
      exercises: [
        {
          kind: "lines",
          instruction: "Se uma família troca 5 sacolas plásticas por semana por sacolas reutilizáveis, quantas sacolas plásticas deixará de usar em um ano (52 semanas)? Explique seu cálculo e comente por que essa mudança é importante para o meio ambiente.",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Resolva os problemas sobre economia de recursos:",
          items: [
            "Se uma escola economiza 20 litros de água por dia ao consertar uma torneira que pingava, em 30 dias a economia será de __________ litros.",
            "Uma família que recicla 2 kg de papel por semana recicla __________ kg em um mês (4 semanas).",
          ],
        },
        {
          kind: "options",
          instruction: "Qual atitude reduz o impacto ambiental do consumo?",
          options: [
            "Separar o lixo para reciclagem e reduzir o uso de descartáveis",
            "Comprar produtos embalados em muito plástico sempre que possível",
            "Jogar lixo reciclável junto com o lixo comum",
            "Deixar torneiras pingando sem consertar",
          ],
        },
        {
          kind: "draw",
          instruction: "Monte uma tabela comparando a quantidade de lixo reciclável e não reciclável produzida por uma família em uma semana (pode estimar os números) e represente em um gráfico de barras.",
        },
      ],
    },
    {
      theme: "Justificativa da linguagem matemática e das estratégias de resolução",
      exercises: [
        {
          kind: "lines",
          instruction: "Resolva o problema: 'Uma fábrica produz 144 brinquedos e quer embalar em caixas com 12 brinquedos cada. Quantas caixas serão necessárias?' Depois, explique com suas palavras por que você escolheu a operação usada.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "Ao resolver um problema de matemática, por que é importante explicar a estratégia usada, e não só dar a resposta final?",
          options: [
            "Porque mostra o raciocínio e ajuda a verificar se o caminho está correto",
            "Porque deixa a resposta mais bonita",
            "Porque não é necessário, só a resposta final importa",
            "Porque toma mais tempo e atrapalha",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre justificar uma solução:",
          items: [
            "Ao explicar como resolvi um problema de divisão, devo dizer qual __________ usei e por quê.",
            "Justificar uma estratégia significa dizer o __________ que me levou àquela solução.",
          ],
        },
        {
          kind: "draw",
          instruction: "Escolha um problema simples de multiplicação ou divisão e represente, com desenhos (bolinhas, retângulos ou esquemas), como você chegou à resposta.",
        },
      ],
    },
    {
      theme: "Investigação da propriedade distributiva da multiplicação e da divisão",
      exercises: [
        {
          kind: "lines",
          instruction: "Calcule 6 x 14 de duas formas: primeiro multiplicando direto, depois decompondo 14 em 10 + 4 e aplicando a propriedade distributiva (6 x 10 + 6 x 4). Compare os resultados e explique o que você observou.",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Complete usando a propriedade distributiva:",
          items: [
            "7 x 23 pode ser calculado como 7 x 20 + 7 x __________ = __________ + __________ = __________.",
            "A propriedade distributiva também pode ser usada na subtração: 9 x 18 = 9 x 20 - 9 x __________.",
          ],
        },
        {
          kind: "options",
          instruction: "A propriedade distributiva da multiplicação em relação à adição diz que:",
          options: [
            "a x (b + c) = a x b + a x c",
            "a x (b + c) = a + b + c",
            "a x (b + c) = a x b x c",
            "a x (b + c) = (a + b) x c",
          ],
        },
        {
          kind: "draw",
          instruction: "Represente com um desenho (retângulo dividido em partes) por que 5 x 23 é igual a 5 x 20 + 5 x 3.",
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
      gradeYear: "2-ano",
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
      gradeYear: "2-ano",
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
      gradeYear: "2-ano",
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
    {
      theme: "Roda de escuta de contos, mitos e lendas de diferentes culturas",
      exercises: [
        { kind: "options", instruction: "Qual desses tipos de história vocês ouviram hoje na roda de escuta?", options: ["Conto de fadas", "Mito", "Lenda", "Fábula"] },
        { kind: "lines", instruction: "Escreva o título da história que você mais gostou de ouvir:", lines: 2 },
        { kind: "lines", instruction: "Conte, com suas palavras, um trecho que achou interessante:", lines: 3 },
        { kind: "word-select", instruction: "Marque as palavras que podem lembrar elementos de contos, mitos e lendas:", items: ["floresta encantada", "dragão", "herói", "computador", "rio sagrado", "ônibus escolar"] },
        { kind: "draw", instruction: "Desenhe a cena que mais chamou sua atenção na história ouvida:" },
      ],
    },
    {
      theme: "Leitura autônoma de contos e fábulas de diversas culturas",
      exercises: [
        { kind: "lines", instruction: "Escreva o nome do conto ou fábula que você leu sozinho:", lines: 1 },
        { kind: "fill-blank", instruction: "Complete com base na história que você leu:", items: ["O título da história é: __________", "O lugar onde a história acontece é: __________", "A cultura ou o povo de onde vem essa história é: __________"] },
        { kind: "options", instruction: "O que costuma ter uma fábula, diferente de outros textos?", options: ["Animais que falam e uma lição no final", "Somente números e contas", "Uma lista de compras", "Um mapa do tesouro"] },
        { kind: "lines", instruction: "O que essa história te ensinou?", lines: 3 },
        { kind: "draw", instruction: "Desenhe o personagem principal da história que você leu:" },
      ],
    },
    {
      theme: "Leitura compartilhada de um livro em capítulos",
      exercises: [
        { kind: "fill-blank", instruction: "Complete sobre o livro que a turma está lendo:", items: ["Título do livro: __________", "Capítulo lido hoje: __________", "Personagem principal: __________"] },
        { kind: "lines", instruction: "O que aconteceu de mais importante neste capítulo?", lines: 3 },
        { kind: "options", instruction: "O que você acha que vai acontecer no próximo capítulo?", options: ["Uma nova aventura vai começar", "O problema do personagem vai se resolver", "Vai aparecer um novo personagem", "Não sei, quero descobrir lendo"] },
        { kind: "lines", instruction: "Escreva uma pergunta que você gostaria de fazer sobre a história:", lines: 2 },
        { kind: "draw", instruction: "Desenhe a cena que você imaginou ao ouvir este capítulo:" },
      ],
    },
    {
      theme: "Investigando a linguagem dos contos: repetição, comparação e adjetivos",
      exercises: [
        { kind: "word-select", instruction: "Marque os adjetivos usados para descrever personagens e lugares nos contos:", items: ["malvada", "escura", "feroz", "densa", "gentil", "cansado"] },
        { kind: "fill-blank", instruction: "Complete as comparações típicas dos contos:", items: ["Forte como um __________", "Rápido como um __________", "Branca como a __________"] },
        { kind: "options", instruction: "Qual frase é um exemplo de repetição usada nos contos de fadas?", options: ["Era uma vez, era uma vez...", "O menino comprou pão.", "A escola terminou às 5 horas.", "Minha mãe fez o almoço."] },
        { kind: "lines", instruction: "Escreva uma frase com uma comparação, como as que aparecem nos contos:", lines: 2 },
      ],
    },
    {
      theme: "Rodas de notícias e reportagens sobre diferentes grupos sociais",
      exercises: [
        { kind: "lines", instruction: "Escreva o assunto da notícia ou reportagem que você ouviu na roda:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete sobre a notícia ouvida:", items: ["Quem são as pessoas dessa notícia: __________", "O que aconteceu: __________", "Onde aconteceu: __________"] },
        { kind: "options", instruction: "Por que é importante conhecer notícias sobre diferentes grupos de pessoas?", options: ["Para entender e respeitar a diversidade", "Para ficar com medo do diferente", "Porque não é importante", "Só para passar o tempo"] },
        { kind: "lines", instruction: "Escreva o que você aprendeu sobre um grupo social diferente do seu:", lines: 3 },
      ],
    },
    {
      theme: "Conhecendo outras culturas por relatos históricos e verbetes",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com base no relato ou verbete que você ouviu:", items: ["O texto falava sobre o país ou povo: __________", "Um costume interessante que aprendi: __________", "Uma palavra nova que aprendi: __________"] },
        { kind: "options", instruction: "Qual desses textos serve para explicar rapidamente o significado de uma palavra ou tema?", options: ["Verbete de enciclopédia", "Poema", "Fábula", "Bilhete"] },
        { kind: "lines", instruction: "Escreva duas coisas que você descobriu sobre uma cultura diferente da sua:", lines: 3 },
        { kind: "draw", instruction: "Desenhe algo típico da cultura que você conheceu (comida, roupa, festa ou objeto):" },
      ],
    },
    {
      theme: "Pesquisa em diferentes fontes sobre um tema de estudo",
      exercises: [
        { kind: "word-select", instruction: "Marque as fontes que podem ser usadas para pesquisar um tema de estudo:", items: ["Livro de enciclopédia", "Revista", "Site confiável", "Jornal", "Bilhete de um amigo", "Desenho animado qualquer"] },
        { kind: "fill-blank", instruction: "Complete sobre sua pesquisa:", items: ["Tema da minha pesquisa: __________", "Fonte que usei: __________", "Uma informação que encontrei: __________"] },
        { kind: "options", instruction: "Se duas fontes falam coisas diferentes sobre o mesmo assunto, o que devo fazer?", options: ["Comparar e procurar mais uma fonte para confirmar", "Escolher a primeira que li sem pensar", "Inventar uma resposta", "Não escrever nada"] },
        { kind: "lines", instruction: "Escreva uma informação relacionada ao tema que você pesquisou:", lines: 3 },
      ],
    },
    {
      theme: "Selecionando textos para pesquisa usando sumários e títulos",
      exercises: [
        { kind: "options", instruction: "Onde você encontra uma lista com os títulos de cada capítulo de um livro?", options: ["No sumário", "Na capa", "No rodapé", "Na última página"] },
        { kind: "fill-blank", instruction: "Complete sobre o texto que você escolheu:", items: ["Título do texto escolhido: __________", "Subtítulo ou chamada que me chamou atenção: __________"] },
        { kind: "lines", instruction: "Explique por que você escolheu esse texto para pesquisar o tema:", lines: 3 },
        { kind: "word-select", instruction: "Marque as pistas que ajudam a escolher um bom texto para a pesquisa:", items: ["Título", "Subtítulo", "Cor da capa", "Sumário", "Número de páginas", "Chamada de link"] },
      ],
    },
    {
      theme: "Grifando informações importantes para a pesquisa",
      exercises: [
        { kind: "lines", instruction: "Copie duas frases importantes que você grifaria em um texto de pesquisa sobre um tema estudado:", lines: 4 },
        { kind: "options", instruction: "Qual é o objetivo de grifar um trecho do texto?", options: ["Destacar uma informação importante para a pesquisa", "Deixar o texto mais bonito", "Apagar o que não gostou", "Copiar o texto inteiro"] },
        { kind: "fill-blank", instruction: "Complete sobre sua pesquisa:", items: ["Tema da pesquisa: __________", "Página onde encontrei a informação: __________"] },
        { kind: "draw", instruction: "Desenhe como fica uma página de livro com trechos grifados:" },
      ],
    },
    {
      theme: "Preparando um texto teatral para leitura dramática",
      exercises: [
        { kind: "fill-blank", instruction: "Complete sobre a cena que você vai representar:", items: ["Nome da peça ou cena: __________", "Personagem que vou representar: __________", "Um sentimento desse personagem: __________"] },
        { kind: "options", instruction: "Como devemos ler a fala de um personagem muito bravo?", options: ["Com voz firme e mais forte", "Sussurrando bem baixinho", "Cantando", "Sem entonação nenhuma"] },
        { kind: "lines", instruction: "Escreva uma fala curta do seu personagem, pensando em como vai falar:", lines: 3 },
        { kind: "draw", instruction: "Desenhe seu personagem representando a cena:" },
      ],
    },
    {
      theme: "Recontando histórias conhecidas com marcas do registro literário",
      exercises: [
        { kind: "fill-blank", instruction: "Complete o começo e o fim de um reconto, usando marcas típicas da linguagem literária:", items: ["__________, numa terra muito distante...", "E assim, os dois viveram __________."] },
        { kind: "options", instruction: "Qual expressão é típica do início de contos?", options: ["Era uma vez", "Bom dia", "Olá, pessoal", "Fim de semana passado"] },
        { kind: "lines", instruction: "Reconte, em poucas frases, uma história conhecida usando a linguagem dos contos:", lines: 4 },
      ],
    },
    {
      theme: "Reescrita coletiva de um conto conhecido",
      exercises: [
        { kind: "lines", instruction: "Escreva, com a ajuda da turma, o início do conto que vocês reescreveram:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete sobre o conto reescrito pela turma:", items: ["Conto escolhido pela turma: __________", "Personagem principal: __________", "Problema da história: __________"] },
        { kind: "options", instruction: "Ao reescrever um conto conhecido, o que devemos manter?", options: ["Os personagens e o tema principais da história", "Nada, pode mudar tudo", "Só o título", "Só o final"] },
        { kind: "lines", instruction: "Escreva uma parte da história que a turma decidiu mudar e por quê:", lines: 3 },
      ],
    },
    {
      theme: "Criando novos finais para contos de diferentes culturas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete sobre o conto escolhido:", items: ["Conto escolhido: __________", "Cultura de origem do conto: __________"] },
        { kind: "lines", instruction: "Escreva o novo final que você criou para esse conto:", lines: 5 },
        { kind: "options", instruction: "Ao criar um novo final, o que é importante respeitar?", options: ["O tema e os personagens da história original", "Nada, pode inventar qualquer coisa", "Só o nome do autor", "A cor da capa do livro"] },
        { kind: "draw", instruction: "Desenhe uma cena do novo final que você imaginou:" },
      ],
    },
    {
      theme: "Escrevendo indicações literárias e verbetes de curiosidades",
      gradeYear: "3-ano",
      exercises: [
        { kind: "fill-blank", instruction: "Complete sua indicação literária:", items: ["Título do livro indicado: __________", "Por que eu indico esse livro: __________", "Para quem eu indico: __________"] },
        { kind: "options", instruction: "O que é um verbete de curiosidades?", options: ["Um texto curto que explica algo interessante sobre um tema", "Uma carta para um amigo", "Uma lista de compras", "Um poema rimado"] },
        { kind: "lines", instruction: "Escreva um pequeno verbete sobre uma curiosidade de um tema que você estudou:", lines: 4 },
      ],
    },
    {
      theme: "Diário da turma: relatando experiências vividas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a página do diário:", items: ["Data: __________", "O que aconteceu hoje na escola: __________", "Como eu me senti: __________"] },
        { kind: "options", instruction: "Em um diário, é importante organizar os fatos:", options: ["Na ordem em que aconteceram", "De trás para frente", "Sem nenhuma ordem", "Só com desenhos"] },
        { kind: "lines", instruction: "Escreva uma página do diário da turma contando algo que vivemos essa semana:", lines: 5 },
        { kind: "draw", instruction: "Desenhe um momento importante do seu dia para ilustrar o diário:" },
      ],
    },
    {
      theme: "Escrevendo regras de brincadeiras e receitas",
      gradeYear: "3-ano",
      exercises: [
        { kind: "options", instruction: "Em uma receita ou regra de brincadeira, por que a ordem das instruções é importante?", options: ["Porque cada passo depende do anterior para dar certo", "Porque não faz diferença", "Só para enfeitar o texto", "Porque é mais bonito"] },
        { kind: "fill-blank", instruction: "Complete as etapas de uma receita simples:", items: ["1º passo: __________", "2º passo: __________", "3º passo: __________"] },
        { kind: "lines", instruction: "Escreva as regras de uma brincadeira que você conhece:", lines: 5 },
        { kind: "word-select", instruction: "Marque as palavras que costumam aparecer em receitas e regras de jogos:", items: ["primeiro", "misture", "depois", "por fim", "era uma vez", "quem"] },
      ],
    },
    {
      theme: "Contação de histórias de diferentes culturas",
      gradeYear: "3-ano",
      exercises: [
        { kind: "fill-blank", instruction: "Complete o planejamento da contação de histórias:", items: ["História escolhida: __________", "De qual cultura ou país ela vem: __________", "Quem vai contar: __________", "Para quem vamos contar: __________"] },
        { kind: "options", instruction: "O que é importante fazer enquanto um colega conta uma história?", options: ["Ouvir com atenção e respeito", "Conversar sobre outro assunto", "Mexer no celular", "Interromper toda hora"] },
        { kind: "lines", instruction: "Escreva o começo da história que você vai contar para a turma:", lines: 4 },
        { kind: "draw", instruction: "Desenhe um personagem da história que você vai contar:" },
      ],
    },
    {
      theme: "Apresentação oral sobre temas estudados",
      exercises: [
        { kind: "fill-blank", instruction: "Complete o roteiro da sua apresentação:", items: ["Tema da minha apresentação: __________", "Duas informações importantes: __________", "Uma pergunta que posso fazer à turma: __________"] },
        { kind: "lines", instruction: "Escreva um roteiro com anotações para te ajudar na apresentação oral:", lines: 5 },
        { kind: "options", instruction: "Para se preparar bem para uma apresentação oral, é importante:", options: ["Fazer anotações antes de falar", "Decorar tudo sem entender", "Não se preparar", "Falar o mais rápido possível"] },
      ],
    },
    {
      theme: "Relatando experiências vividas para a turma",
      exercises: [
        { kind: "fill-blank", instruction: "Complete sobre a experiência que você vai relatar:", items: ["O que aconteceu: __________", "Quando aconteceu: __________", "Onde aconteceu: __________", "Como eu me senti: __________"] },
        { kind: "lines", instruction: "Escreva um relato de uma experiência que você viveu para compartilhar com a turma:", lines: 5 },
        { kind: "options", instruction: "Um bom relato de experiência deve:", options: ["Contar os fatos na ordem em que aconteceram", "Misturar tudo sem ordem", "Inventar fatos que não aconteceram", "Ser só uma lista de palavras soltas"] },
        { kind: "draw", instruction: "Desenhe a experiência que você relatou:" },
      ],
    },
    {
      theme: "Roda de conversa sobre convivência e respeito",
      exercises: [
        { kind: "options", instruction: "O que fazer quando um colega diz algo desrespeitoso sobre a cor da pele ou o gênero de outra pessoa?", options: ["Conversar e explicar por que isso machuca", "Rir junto", "Fingir que não ouviu", "Repetir a mesma coisa"] },
        { kind: "lines", instruction: "Escreva uma situação de desrespeito relacionada a gênero ou raça que você já viu ou ouviu falar, sem citar nomes:", lines: 3 },
        { kind: "lines", instruction: "O que a turma decidiu, em conjunto, sobre como agir nessas situações?", lines: 3 },
        { kind: "draw", instruction: "Desenhe uma cena em que crianças diferentes brincam juntas com respeito:" },
      ],
    },
    {
      theme: "Comparando a estrutura de diferentes gêneros textuais",
      exercises: [
        { kind: "word-select", instruction: "Marque as partes que costumam aparecer em uma receita:", items: ["Ingredientes", "Modo de preparo", "Rima", "Personagens", "Moral da história"] },
        { kind: "fill-blank", instruction: "Complete comparando dois gêneros textuais:", items: ["Uma receita tem __________, mas um conto tem __________.", "Uma carta começa com __________, mas uma notícia começa com __________."] },
        { kind: "options", instruction: "Qual gênero é organizado em estrofes e versos?", options: ["Poema", "Receita", "Bilhete", "Regra de jogo"] },
        { kind: "lines", instruction: "Escolha dois gêneros textuais e escreva uma diferença entre eles:", lines: 3 },
      ],
    },
    {
      theme: "Caça aos pronomes: eliminando repetições no texto",
      exercises: [
        { kind: "fill-blank", instruction: "Reescreva as frases substituindo a palavra repetida por um pronome:", items: ["A Maria pegou o livro da Maria e leu o livro da Maria. → __________", "O cachorro do João latiu porque o cachorro do João viu um gato. → __________"] },
        { kind: "word-select", instruction: "Marque os pronomes que podem substituir nomes repetidos:", items: ["ele", "ela", "eles", "mesa", "correr", "elas"] },
        { kind: "options", instruction: "Qual é a melhor forma de evitar repetir 'o menino' várias vezes no mesmo texto?", options: ["Usar 'ele' depois da primeira vez que aparece", "Repetir 'o menino' em toda frase", "Apagar o personagem da história", "Trocar por um número"] },
        { kind: "lines", instruction: "Escreva uma frase repetindo um nome e depois reescreva usando um pronome no lugar:", lines: 3 },
      ],
    },
    {
      theme: "Revisando organizadores textuais no texto produzido",
      exercises: [
        { kind: "word-select", instruction: "Marque os organizadores textuais que combinam com um texto narrativo:", items: ["então", "depois", "primeiro passo", "ingredientes", "de repente", "por fim"] },
        { kind: "fill-blank", instruction: "Complete as frases com um organizador textual adequado:", items: ["__________ o menino saiu de casa, começou a chover.", "__________, todos ficaram felizes com o final da história."] },
        { kind: "options", instruction: "Em uma receita, qual sequência de organizadores combina melhor?", options: ["Primeiro, depois, por último", "Era uma vez", "Personagem principal", "Nenhum, receitas não usam organizadores"] },
        { kind: "lines", instruction: "Reescreva uma frase do seu texto trocando um organizador que não combinava por outro mais adequado:", lines: 2 },
      ],
    },
    {
      theme: "Dando coerência ao final de uma história",
      exercises: [
        { kind: "lines", instruction: "Imagine o começo de uma história e escreva um final que combine com ela:", lines: 4 },
        { kind: "options", instruction: "Um final coerente com a história deve:", options: ["Resolver o problema apresentado no início do texto", "Falar de um assunto totalmente diferente", "Não ter nenhuma relação com o começo", "Terminar no meio da frase"] },
        { kind: "fill-blank", instruction: "Complete sobre a história que você imaginou:", items: ["Problema da história: __________", "Como esse problema foi resolvido no final: __________"] },
        { kind: "draw", instruction: "Desenhe a cena final da sua história, mostrando como o problema foi resolvido:" },
      ],
    },
    {
      theme: "Quem conta a história? Narrador em 1ª e 3ª pessoa",
      exercises: [
        { kind: "options", instruction: "Em qual frase o narrador está em 1ª pessoa?", options: ["Eu corri até a floresta e encontrei um lobo.", "Ela correu até a floresta e encontrou um lobo.", "O menino correu até a floresta.", "Os amigos correram até a floresta."] },
        { kind: "fill-blank", instruction: "Reescreva a frase mudando o narrador de 3ª para 1ª pessoa:", items: ["Ela abriu a porta e viu o jardim. → __________"] },
        { kind: "word-select", instruction: "Marque as palavras que indicam narrador em 1ª pessoa:", items: ["eu", "meu", "ele", "ela", "nós", "eles"] },
        { kind: "lines", instruction: "Escreva duas frases contando algo que aconteceu com você, usando narrador em 1ª pessoa:", lines: 3 },
      ],
    },
    {
      theme: "Observando a pontuação do diálogo nos textos",
      exercises: [
        { kind: "word-select", instruction: "Marque os sinais de pontuação usados para marcar a fala dos personagens:", items: ["travessão", "vírgula", "ponto de interrogação", "ponto de exclamação", "cifrão", "parênteses"] },
        { kind: "fill-blank", instruction: "Complete o diálogo usando o travessão para indicar a fala:", items: ["__________ Vamos brincar? — perguntou Ana.", "__________ Já terminei a lição! — respondeu Pedro."] },
        { kind: "options", instruction: "Para que serve o ponto de interrogação em um diálogo?", options: ["Indicar que o personagem está fazendo uma pergunta", "Indicar o fim do texto", "Separar duas palavras", "Substituir uma vírgula"] },
        { kind: "lines", instruction: "Escreva um pequeno diálogo entre dois personagens, usando a pontuação correta:", lines: 4 },
      ],
    },
    {
      theme: "Pontuando o texto: segmentando frases",
      exercises: [
        { kind: "fill-blank", instruction: "Reescreva o texto colocando os pontos finais nos lugares certos:", items: ["o sol nasceu a menina acordou ela tomou café e foi para a escola → __________"] },
        { kind: "options", instruction: "Onde deve ficar o ponto final?", options: ["No final de cada frase, quando a ideia termina", "No começo da frase", "Depois de cada palavra", "Só no final do texto todo"] },
        { kind: "lines", instruction: "Escreva um pequeno texto de três frases, usando ponto final para separar as ideias:", lines: 3 },
        { kind: "word-select", instruction: "Marque os sinais que podem terminar uma frase:", items: ["ponto final", "ponto de interrogação", "ponto de exclamação", "vírgula", "travessão"] },
      ],
    },
    {
      theme: "Descobrindo comparações escondidas: a metáfora",
      exercises: [
        { kind: "options", instruction: "Qual frase é uma metáfora (comparação escondida, sem usar 'como')?", options: ["Seus olhos são duas estrelas.", "Seus olhos brilham como estrelas.", "Ela tem olhos castanhos.", "Ela usa óculos."] },
        { kind: "fill-blank", instruction: "Complete criando suas próprias metáforas:", items: ["Meu coração é um __________.", "A noite é um __________.", "Sua voz é __________."] },
        { kind: "lines", instruction: "Escolha uma metáfora de um texto lido e explique o que ela quer dizer:", lines: 3 },
        { kind: "draw", instruction: "Desenhe a imagem que uma metáfora do texto faz você imaginar:" },
      ],
    },
    {
      theme: "Usando acentos em palavras conhecidas",
      exercises: [
        { kind: "word-select", instruction: "Marque as palavras que precisam de acento gráfico:", items: ["arvore", "cafe", "sofa", "janela", "lapis", "porta"] },
        { kind: "fill-blank", instruction: "Reescreva as palavras colocando o acento no lugar certo:", items: ["arvore → __________", "cafe → __________", "lapis → __________"] },
        { kind: "options", instruction: "Qual dessas palavras está escrita corretamente, com o acento no lugar certo?", options: ["Sábado", "Sabádo", "Sabado", "Sabadó"] },
        { kind: "lines", instruction: "Escreva três palavras acentuadas que você já conhece e usa no dia a dia:", lines: 2 },
      ],
    },
    {
      theme: "Caçando a sílaba tônica nas palavras do texto",
      exercises: [
        { kind: "fill-blank", instruction: "Separe as sílabas e marque a sílaba tônica (a mais forte):", items: ["boneca → __________", "sapato → __________", "árvore → __________"] },
        { kind: "options", instruction: "O que é a sílaba tônica de uma palavra?", options: ["A sílaba pronunciada com mais força", "A primeira sílaba da palavra", "A última letra da palavra", "A sílaba escrita com letra maiúscula"] },
        { kind: "word-select", instruction: "Leia as palavras em voz alta e marque as que têm a força na última sílaba:", items: ["café", "mesa", "sofá", "porta", "jacaré", "gato"] },
        { kind: "lines", instruction: "Escolha uma palavra do seu texto e escreva-a separada em sílabas, destacando a tônica:", lines: 2 },
      ],
    },
    {
      theme: "Relacionando acento gráfico e sílaba tônica",
      gradeYear: "3-ano",
      exercises: [
        { kind: "options", instruction: "Para que serve o acento gráfico em uma palavra?", options: ["Marcar a sílaba pronunciada com mais força", "Deixar a palavra mais bonita", "Indicar o plural", "Separar duas frases"] },
        { kind: "fill-blank", instruction: "Complete explicando onde está a força da palavra:", items: ["Em 'sofá', a força está na sílaba __________.", "Em 'árvore', a força está na sílaba __________."] },
        { kind: "word-select", instruction: "Marque as palavras em que o acento gráfico coincide com a sílaba mais forte:", items: ["sábado", "café", "música", "computador", "relógio", "papel"] },
        { kind: "lines", instruction: "Escreva duas palavras acentuadas e explique em qual sílaba está a força de cada uma:", lines: 3 },
      ],
    },
    {
      theme: "Revisando a grafia de M/N, R/RR e O/U final",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as palavras com M ou N:", items: ["ca__po", "co__prar", "a__tes"] },
        { kind: "word-select", instruction: "Marque as palavras escritas corretamente com RR:", items: ["carro", "caro", "guerra", "gera", "terreno", "tereno"] },
        { kind: "fill-blank", instruction: "Complete as palavras terminadas em O ou U:", items: ["sapat__", "chape__", "jacar__"] },
        { kind: "lines", instruction: "Escreva uma frase usando uma palavra com R e outra com RR:", lines: 2 },
      ],
    },
    {
      theme: "Comparando flexões verbais terminadas em -O e -AM",
      exercises: [
        { kind: "options", instruction: "Qual frase está no plural (mais de uma pessoa fazendo a ação)?", options: ["Os meninos brincaram no parque.", "O menino brincou no parque.", "Ele brincou com o cachorro.", "Ela brincou sozinha."] },
        { kind: "fill-blank", instruction: "Complete as frases com a forma correta do verbo:", items: ["Ontem, eu __________ (brincar) no parque.", "Ontem, eles __________ (brincar) no parque."] },
        { kind: "word-select", instruction: "Marque os verbos que indicam ação de mais de uma pessoa (terminados em -AM):", items: ["correram", "correu", "pularam", "pulou", "cantaram", "cantou"] },
        { kind: "lines", instruction: "Escreva uma frase no singular (uma pessoa) e a mesma frase no plural (várias pessoas):", lines: 2 },
      ],
    },
    {
      theme: "Memorizando a grafia de palavras irregulares",
      exercises: [
        { kind: "word-select", instruction: "Marque as palavras escritas corretamente:", items: ["homem", "omem", "chuva", "xuva", "cereja", "sereja"] },
        { kind: "fill-blank", instruction: "Complete as palavras com a letra certa (H, L, LH, C ou S):", items: ["__oje (dia atual)", "toa__a (usada no banho)", "__ereja (fruta)"] },
        { kind: "options", instruction: "Por que algumas palavras precisam ser memorizadas, e não seguem uma regra?", options: ["Porque nem sempre existe correspondência exata entre letra e som", "Porque são palavras inventadas", "Porque ninguém sabe escrevê-las certo", "Porque são palavras estrangeiras"] },
        { kind: "lines", instruction: "Escreva três palavras difíceis que você já decorou como se escrevem:", lines: 2 },
      ],
    },
    {
      theme: "Dividindo palavras no final da linha",
      exercises: [
        { kind: "fill-blank", instruction: "Divida as palavras em sílabas para saber onde cortar no final da linha:", items: ["computador → __________", "bicicleta → __________", "girassol → __________"] },
        { kind: "options", instruction: "Como devemos dividir uma palavra no final da linha?", options: ["Separando por sílabas, com hífen", "Cortando em qualquer letra", "Nunca podemos dividir uma palavra", "Só se a palavra for pequena"] },
        { kind: "lines", instruction: "Escreva uma palavra grande do seu texto e mostre como ela poderia ser dividida no final da linha:", lines: 2 },
        { kind: "word-select", instruction: "Marque as palavras já divididas corretamente em sílabas:", items: ["ja-ne-la", "jane-la", "bo-ne-ca", "bone-ca"] },
      ],
    },
    {
      theme: "Regras para não deixar uma letra sozinha na linha",
      exercises: [
        { kind: "options", instruction: "Qual divisão está ERRADA porque deixa uma letra sozinha na linha?", options: ["amarel-o", "a-ma-re-lo", "á-gua", "chu-va"] },
        { kind: "fill-blank", instruction: "Reescreva a divisão dessas palavras, sem deixar nenhuma letra sozinha:", items: ["água → __________", "ideia → __________"] },
        { kind: "lines", instruction: "Explique com suas palavras por que não podemos deixar uma letra sozinha no início ou no final da linha:", lines: 3 },
        { kind: "word-select", instruction: "Marque as divisões corretas, que não deixam letra sozinha:", items: ["a-be-lha", "abelh-a", "o-vo", "ov-o"] },
      ],
    },
    {
      theme: "Caça-nomes no varal da sala",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule apenas os nomes de colegas escritos no varal (e não os outros itens):",
          items: [
            "JÚLIA",
            "OUTUBRO",
            "CADERNO",
            "MARCOS",
            "FESTA",
            "BEATRIZ",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de dois colegas da turma que fazem aniversário no mesmo mês que você:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o mês de aniversário:",
          items: [
            "Eu faço aniversário em ___",
            "Um colega da minha fila faz aniversário em ___",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o varal da sala com bandeirinhas mostrando os nomes dos aniversariantes do mês:",
        },
      ],
    },
    {
      theme: "Conto em quadrinhos: reescrevendo em cenas",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um conto que você conhece bem. Escreva o nome do conto e o nome dos personagens principais:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a primeira cena do conto que você escolheu, mostrando como a história começa:",
        },
        {
          kind: "options",
          instruction: "Em um quadrinho, a ordem das cenas precisa:",
          options: [
            "Ser qualquer uma, não importa",
            "Seguir a sequência da história",
            "Sempre começar pelo final",
            "Ter só uma cena",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete o resumo das cenas do seu quadrinho:",
          items: [
            "Cena 1: ___",
            "Cena 2: ___",
            "Cena 3 (final): ___",
          ],
        },
      ],
    },
    {
      theme: "Trocando nomes repetidos por apelidos",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a segunda frase trocando o nome repetido por ELE, ELA ou um apelido:",
          items: [
            "O gato subiu no telhado. ___ dormiu lá.",
            "Ana pegou o livro. ___ leu o livro.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que podem substituir um nome repetido no texto:",
          items: [
            "ELE",
            "CADEIRA",
            "ELA",
            "DEPOIS",
            "O MENINO",
            "AMARELO",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas frases sobre um colega, repetindo o nome dele. Depois, reescreva trocando a segunda vez pelo apelido ou por 'ele/ela':",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Por que é importante não repetir o mesmo nome várias vezes em um texto?",
          options: [
            "Porque é proibido escrever nomes",
            "Porque o texto fica mais bonito e menos repetitivo",
            "Porque cansa a mão de escrever",
            "Porque nomes são difíceis de escrever",
          ],
        },
      ],
    },
    {
      theme: "Como a chuva? Caça às comparações do texto",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as comparações como se fossem de um texto:",
          items: [
            "Ela chorava como a ___",
            "Ele corria como um ___",
            "A menina era leve como uma ___",
          ],
        },
        {
          kind: "options",
          instruction: "Na frase 'Ele estava tão bravo quanto um leão', a palavra 'leão' foi usada para:",
          options: [
            "Dizer que ele virou um leão",
            "Comparar o jeito bravo dele com um leão",
            "Falar sobre animais do zoológico",
            "Enfeitar a frase sem motivo",
          ],
        },
        {
          kind: "lines",
          instruction: "Invente uma comparação para dizer como você fica quando está muito feliz (por exemplo: feliz como...):",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cena que mostre a comparação 'chorava como a chuva':",
        },
      ],
    },
    {
      theme: "Lista de brinquedos do dia do brinquedo",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de 3 brinquedos que os colegas trouxeram para o dia do brinquedo:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule apenas os nomes de brinquedos na lista:",
          items: [
            "BONECA",
            "CADERNO",
            "BOLA",
            "LÁPIS",
            "PIÃO",
            "MOCHILA",
            "CARRINHO",
            "BORRACHA",
          ],
        },
        {
          kind: "options",
          instruction: "Numa lista organizada por ordem alfabética, qual brinquedo viria primeiro?",
          options: [
            "BOLA",
            "PIÃO",
            "CARRINHO",
            "BONECA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o brinquedo preferido que um colega trouxe para o dia do brinquedo.",
        },
      ],
    },
    {
      theme: "Final alternativo para um conto conhecido",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um conto que você conhece bem (como Chapeuzinho Vermelho ou Os Três Porquinhos) e escreva um final diferente para ele:",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Ao inventar um novo final para um conto, o que deve continuar igual?",
          options: [
            "o começo e o meio da história",
            "o final também precisa ser igual",
            "os personagens precisam sumir",
            "a história precisa virar poesia",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as informações sobre o conto que você escolheu:",
          items: [
            "O conto que escolhi se chama: ___",
            "No final original, a história terminava assim: ___",
            "No meu novo final, a história termina assim: ___",
            "O personagem principal do conto é: ___",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a cena do novo final que você inventou para o conto.",
        },
      ],
    },
    {
      theme: "Substituindo \"ele\" e \"ela\" no texto dos animais",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases usando 'ele' ou 'ela' no lugar do nome do animal:",
          items: [
            "O cachorro correu no jardim. ___ estava muito feliz.",
            "A gata dormiu no sofá. ___ ficou lá a tarde toda.",
            "O passarinho voou alto. ___ cantava bonito.",
            "A borboleta pousou na flor. ___ tinha asas coloridas.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que usamos 'ele' ou 'ela' no lugar do nome do animal?",
          options: [
            "para não repetir o mesmo nome várias vezes",
            "porque é mais difícil de escrever",
            "porque o nome do animal está errado",
            "para deixar o texto maior",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas frases sobre um animal que você conhece, usando 'ele' ou 'ela' na segunda frase para não repetir o nome:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um animal e escreva embaixo uma frase sobre ele usando 'ele' ou 'ela'.",
        },
      ],
    },
    {
      theme: "Inventando comparações para o coleguinha",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as comparações:",
          items: [
            "Meu amigo é rápido como um ___",
            "Minha amiga é forte como um ___",
            "Ele é esperto como uma ___",
            "Ela é doce como um ___",
          ],
        },
        {
          kind: "options",
          instruction: "Qual frase é uma comparação?",
          options: [
            "Ela é ligeira como um gato",
            "Ela correu até a escola",
            "Ela tem sete anos",
            "Ela mora perto da escola",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense num colega da turma e escreva uma comparação bonita sobre ele ou ela (por exemplo: é alegre como um passarinho):",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o colega e o animal ou objeto que você usou na comparação, lado a lado.",
        },
      ],
    },
    {
      theme: "Escalando ajudantes do dia",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de 3 colegas da sua turma que podem ser ajudantes do dia essa semana:",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete a escala de ajudantes da semana:",
          items: [
            "Segunda-feira: ___",
            "Terça-feira: ___",
            "Quarta-feira: ___",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule apenas os nomes de colegas que podem virar ajudantes do dia (e não de objetos da sala):",
          items: [
            "ANA",
            "LOUSA",
            "PEDRO",
            "GIZ",
            "MARIA",
            "APAGADOR",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o quadro de ajudantes do dia da sua sala, com o nome do ajudante de hoje:",
        },
      ],
    },
    {
      theme: "Linha do tempo do nosso dia de horta",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o que a turma fez primeiro, depois e por fim no dia de trabalho na horta da escola:",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete o relato do dia de horta usando as palavras do tempo:",
          items: [
            "___, a turma regou as plantas.",
            "___, todos tiraram as ervas daninhas.",
            "___, a turma lavou as mãos e voltou para a sala.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual palavra indica que uma ação aconteceu no final de uma sequência?",
          options: [
            "Por fim",
            "Primeiro",
            "Enquanto",
            "Antes",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe as três etapas do dia de horta em três quadrinhos, na ordem em que aconteceram:",
        },
      ],
    },
    {
      theme: "Colocando em ordem as tiras da história embaralhada",
      exercises: [
        {
          kind: "lines",
          instruction: "Pense em uma história conhecida (como um conto de fadas). Escreva em ordem o que acontece no começo, no meio e no fim:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Ao reorganizar tiras embaralhadas de uma história, qual pista ajuda a descobrir qual tira vem primeiro?",
          options: [
            "A tira que apresenta os personagens e o lugar",
            "A tira com mais palavras",
            "A tira escrita em letra maior",
            "A tira colada mais no alto da folha",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a ordem das partes de uma história:",
          items: [
            "1ª parte: ___",
            "2ª parte: ___",
            "3ª parte: ___",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe três quadrinhos numerados (1, 2 e 3) mostrando o começo, o meio e o fim de uma história que você conhece:",
        },
      ],
    },
    {
      theme: "Comparando duas capas do mesmo livro",
      exercises: [
        {
          kind: "lines",
          instruction: "Observe duas capas diferentes de um mesmo livro. Escreva uma diferença entre elas:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "O que as cores escolhidas na capa de um livro podem ajudar a mostrar?",
          options: [
            "O clima ou o assunto da história",
            "O preço do livro",
            "O número de páginas",
            "O nome da editora somente",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete comparando as duas capas:",
          items: [
            "Na capa 1, as cores são ___",
            "Na capa 2, as cores são ___",
            "Eu prefiro a capa ___ porque ___",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a capa que você imagina para o seu livro preferido, escolhendo bem as cores:",
        },
      ],
    },
    {
      theme: "Adivinhas na roda",
      exercises: [
        {
          kind: "options",
          instruction: "O que é, o que é: tem coroa, mas não é rei; tem espinhos, mas não é rosa. Resposta:",
          options: [
            "Abacaxi",
            "Cachorro",
            "Bicicleta",
            "Sapato",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a adivinha com a palavra que falta:",
          items: [
            "Tenho quatro patas e late, sou o ___",
            "Voo no céu e canto no galho, sou um ___",
            "Sou amarela e as pessoas escorregam com minha casca, sou a ___",
            "Tenho pescoço comprido e vivo na savana, sou a ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma adivinha que você sabe de cor (que já ouviu em casa ou na escola):",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a resposta de uma das adivinhas desta folha:",
        },
      ],
    },
    {
      theme: "Convite para a festa junina da escola",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as partes que não podem faltar num convite:",
          items: [
            "Nome da festa: ___",
            "Dia e horário: ___",
            "Local: ___",
            "Quem está convidando: ___",
          ],
        },
        {
          kind: "options",
          instruction: "Qual informação é mais importante colocar num convite de festa?",
          options: [
            "O local e o horário da festa",
            "A cor da roupa do diretor",
            "O nome de todos os professores",
            "A previsão do tempo do mês passado",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um convite curto para a festa junina da sua escola, dizendo o dia, o horário e o local:",
          lines: 5,
        },
        {
          kind: "draw",
          instruction: "Desenhe o convite decorado com bandeirinhas, balão ou fogueira de festa junina:",
        },
      ],
    },
    {
      theme: "Separando as palavras da mensagem secreta",
      exercises: [
        {
          kind: "lines",
          instruction: "Separe as palavras desta mensagem secreta e reescreva certinho: OGATOSUBIUNOMURO",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Separe as palavras e complete com a mensagem correta:",
          items: [
            "AMENINAGOSTADEBOLA → A menina ___ de bola",
            "OCACHORROCORREUNOPARQUE → O cachorro ___ no parque",
            "EUVOUABRIRACAIXA → Eu vou ___ a caixa",
            "ELAFOIPARAAESCOLA → Ela foi para a ___",
          ],
        },
        {
          kind: "options",
          instruction: "Como você descobre onde termina uma palavra numa mensagem sem espaços?",
          options: [
            "Pensando no som e no sentido de cada palavra",
            "Contando as letras de trás para frente",
            "Olhando só a primeira letra da mensagem",
            "É impossível descobrir",
          ],
        },
        {
          kind: "draw",
          instruction: "Crie sua própria mensagem secreta sem espaços em um papel à parte e desenhe um cadeado ao redor dela:",
        },
      ],
    },
    {
      theme: "Ditado: escolhendo M ou N no final da sílaba",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as palavras com M ou N:",
          items: [
            "ca__po",
            "te__po",
            "a__do",
            "ve__to",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que estão escritas corretamente:",
          items: [
            "CAMPO",
            "TENPO",
            "ANDAR",
            "VENTO",
            "CANPO",
            "PONTE",
            "SIMPLES",
            "BRINCO",
          ],
        },
        {
          kind: "options",
          instruction: "Antes de qual letra usamos sempre N, e não M?",
          options: [
            "T",
            "P",
            "B",
            "M",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas palavras que você conhece com M antes de P ou B:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Poema decorado vira leitura",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o título do poema que sua turma decorou:",
          lines: 1,
        },
        {
          kind: "options",
          instruction: "Por que é importante olhar para o texto escrito enquanto recitamos um poema decorado?",
          options: [
            "Para acompanhar cada verso e não se perder",
            "Para decorar mais rápido",
            "Para não precisar prestar atenção",
            "Para falar mais alto",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva de memória os dois primeiros versos do poema decorado:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cena que o poema faz você imaginar:",
        },
      ],
    },
    {
      theme: "Carta para um amigo de outra turma",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as partes que não podem faltar em uma carta:",
          items: [
            "No começo, escrevo o nome de quem vai __________ a carta",
            "Depois da data, escrevo o __________ da carta",
            "No final, escrevo meu __________",
            "Também escrevo a __________ onde moro ou estudo",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o começo de uma carta para um aluno de outra turma da escola, contando uma novidade:",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Qual frase é uma despedida adequada para terminar a carta?",
          options: [
            "Um abraço, seu amigo",
            "Comprei um sapato novo",
            "O céu está azul hoje",
            "Vou escrever números",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um envelope com o endereço da escola do seu amigo:",
        },
      ],
    },
    {
      theme: "Cortando a frase gigante em pedaços",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Separe as palavras destas frases escrevendo-as com espaços corretos:",
          items: [
            "OGATOSUBIUNOTELHADO = __________",
            "AMENINABRINCACOMABOLA = __________",
            "OSOLESTABRILHANDO = __________",
            "EUGOSTODELIVROS = __________",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule apenas as palavras (ignore os pedaços que não formam palavra sozinhos):",
          items: [
            "CASA",
            "XA",
            "BOLA",
            "TU",
            "LIVRO",
            "PE",
            "JANELA",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma frase curta sobre a escola, separando bem cada palavra:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe cartões, um para cada palavra da frase: 'O CACHORRO CORRE NO PARQUE'.",
        },
      ],
    },
    {
      theme: "Quando escrevo GA-GO-GA e GUE-GUI",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as palavras com GA, GO, GU, GUE ou GUI:",
          items: [
            "___la (a boneca)",
            "___rrafa (bebe água nela)",
            "___tarra (instrumento musical)",
            "___lo (comida gelada)",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras escritas corretamente:",
          items: [
            "GUITARRA",
            "GITARRA",
            "GATO",
            "GARRAFA",
            "GAROFO",
            "GUERRA",
            "GERRA",
            "AGUA",
          ],
        },
        {
          kind: "options",
          instruction: "Por que a palavra 'guitarra' precisa da letra U depois do G?",
          options: [
            "Para manter o som de 'gui' e não virar 'ji'",
            "Porque fica mais bonito",
            "Porque toda palavra tem U",
            "Para a palavra ficar maior",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas palavras que você conhece com GUE ou GUI:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Manchetes de jornal na roda",
      exercises: [
        {
          kind: "options",
          instruction: "Leia as manchetes e marque a que fala sobre um jogo de futebol:",
          options: [
            "TIME DA CIDADE VENCE PARTIDA NO DOMINGO",
            "CHUVA FORTE ATINGE O BAIRRO",
            "ESCOLA RECEBE NOVOS LIVROS",
            "FEIRA DE ARTESANATO ACONTECE NO PARQUE",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule apenas as palavras que poderiam ser o assunto principal de uma manchete de jornal:",
          items: [
            "FUTEBOL",
            "TALVEZ",
            "CHUVA",
            "MUITO",
            "ESCOLA",
            "BEM",
            "CIRCO",
            "OU",
          ],
        },
        {
          kind: "lines",
          instruction: "Invente uma manchete curta para um jornal sobre algo que aconteceu na sua sala de aula:",
          lines: 1,
        },
        {
          kind: "draw",
          instruction: "Escolha uma manchete de jornal que você já viu ou ouviu falar e desenhe uma cena que combine com ela:",
          note: "Pode ser uma manchete sobre esporte, tempo, escola ou cidade.",
        },
      ],
    },
    {
      theme: "Manual de instruções para montar um brinquedo de papel",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases do manual com as palavras de ordem (Primeiro, Depois, Por fim):",
          items: [
            "___, dobre o papel ao meio.",
            "___, recorte na linha marcada.",
            "___, cole as pontas.",
            "___, pinte o brinquedo do jeito que quiser.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual frase é uma instrução, própria de um manual?",
          options: [
            "Dobre o papel ao meio.",
            "O papel é muito bonito.",
            "Eu gostei do brinquedo.",
            "O brinquedo estava na caixa.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um passo (uma instrução) para montar um barquinho de papel:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe os materiais necessários para montar o seu brinquedo de papel (o que apareceria na lista de materiais do manual):",
        },
      ],
    },
    {
      theme: "Acento ou não? Jogo de cartas",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule apenas as palavras que têm acento:",
          items: [
            "CAFÉ",
            "BOLA",
            "AVÓ",
            "MESA",
            "VOCÊ",
            "LIVRO",
            "ÔNIBUS",
            "CADEIRA",
          ],
        },
        {
          kind: "options",
          instruction: "Qual palavra tem acento circunflexo (^)?",
          options: [
            "VOVÔ",
            "SOFÁ",
            "JACARÉ",
            "MAÇÃ",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com estas palavras acentuadas: avó, café, ônibus, você.",
          items: [
            "Minha ___ mora perto da escola.",
            "Meu pai tomou um ___ de manhã.",
            "Esperamos o ___ no ponto.",
            "E ___, gosta de brincar no parque?",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas palavras com acento que você conhece (podem ser nomes de pessoas, comidas ou objetos):",
          lines: 2,
        },
      ],
    },
    {
      theme: "Escolhendo o gênero certo para cada recado",
      exercises: [
        {
          kind: "options",
          instruction: "Você quer avisar a turma sobre uma festa junina na escola, para ser lido por quem passar no corredor. Qual gênero é mais indicado?",
          options: [
            "Cartaz",
            "Bilhete",
            "Lista de compras",
            "Manual de instruções",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva qual gênero é mais indicado para cada situação: bilhete, cartaz ou lista.",
          items: [
            "Avisar a professora que você saiu mais cedo: ___",
            "Anunciar uma festa na escola para todo mundo ver: ___",
            "Anotar o que precisa comprar no mercado: ___",
            "Deixar um recado para a mamãe na geladeira: ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um bilhete curto avisando um colega que você não vai poder brincar hoje:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um cartaz anunciando uma festa da sua turma, com desenho e um título bem grande:",
          note: "Lembre-se: o cartaz precisa ser lido de longe.",
        },
      ],
    },
    {
      theme: "Lista de nomes da turma e da agenda do dia",
      exercises: [
        {
          kind: "word-select",
          instruction: "A professora vai apontar a lista de chamada da turma. Circule os nomes que você já conhece de algum colega:",
          items: [
            "Ana",
            "Bruno",
            "Carla",
            "Diego",
            "Elisa",
            "Felipe",
          ],
        },
        {
          kind: "options",
          instruction: "Todos os dias, onde a turma consulta o que vai fazer naquele dia?",
          options: [
            "Na agenda do dia, no quadro",
            "Na lista de chamada",
            "No cardápio da merenda",
            "No calendário do mês",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete olhando a lista de nomes da sala:",
          items: [
            "A letra inicial do meu nome é __________",
            "O nome do colega que senta perto de mim é __________",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a primeira atividade escrita na agenda do dia de hoje:",
        },
      ],
    },
    {
      theme: "Ficha de empréstimo de livros da sala",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a ficha de empréstimo do livro que você escolheu na sala:",
          items: [
            "Nome do livro: __________",
            "Meu nome: __________",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule na lista o nome do livro que você quer levar para casa esta semana:",
          items: [
            "A Menina e o Vento",
            "O Gato Que Ria",
            "Uma Casa Cheia de Amigos",
            "O Dia da Chuva",
            "Historinhas da Floresta",
          ],
        },
        {
          kind: "options",
          instruction: "Para que serve a ficha de empréstimo de livros da sala?",
          options: [
            "Para anotar quem levou qual livro para casa",
            "Para desenhar a capa do livro",
            "Para copiar a história inteira",
            "Para pintar o nome da escola",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a capa do livro que você escolheu para o empréstimo desta semana:",
        },
      ],
    },
    {
      theme: "Leitura de parlenda conhecida de cor",
      exercises: [
        {
          kind: "word-select",
          instruction: "A turma recita a parlenda \"Um, dois, feijão com arroz\" batendo palmas. Circule as palavras que aparecem nela:",
          items: [
            "um",
            "dois",
            "feijão",
            "arroz",
            "três",
            "quatro",
          ],
        },
        {
          kind: "options",
          instruction: "Quando já sabemos uma parlenda de cor, o que nos ajuda a acompanhar com o dedo o texto escrito no cartaz?",
          options: [
            "Lembrar as palavras que já foram ditas",
            "Contar as figurinhas do cartaz",
            "Olhar para a janela",
            "Guardar o lápis",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a parlenda que a turma sabe de cor:",
          items: [
            "Um, dois, feijão com __________",
            "Cinco, seis, feijão __________",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe algo que a parlenda \"Um, dois, feijão com arroz\" faz você lembrar:",
        },
      ],
    },
    {
      theme: "Roda de leitura de rótulos e embalagens",
      exercises: [
        {
          kind: "word-select",
          instruction: "A professora trouxe embalagens de produtos. Circule os nomes de produtos que você reconhece:",
          items: [
            "arroz",
            "macarrão",
            "leite",
            "suco",
            "biscoito",
            "sabonete",
          ],
        },
        {
          kind: "options",
          instruction: "Como você consegue adivinhar o que tem dentro de uma embalagem mesmo sem ler todas as letras?",
          options: [
            "Olhando o desenho e as cores da embalagem",
            "Balançando a caixa",
            "Cheirando o plástico",
            "Perguntando para o cachorro",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Olhe uma embalagem que a professora mostrou e complete:",
          items: [
            "O nome do produto é __________",
            "A cor que mais aparece na embalagem é __________",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a embalagem de um alimento que você gosta, com o nome dele escrito do seu jeito:",
        },
      ],
    },
    {
      theme: "Roda de contação de contos de fadas e acumulativos",
      exercises: [
        {
          kind: "draw",
          instruction: "A professora contou uma história com personagens de conto de fadas. Desenhe a parte que você mais gostou:",
        },
        {
          kind: "options",
          instruction: "Como começam a maioria dos contos de fadas?",
          options: [
            "Era uma vez...",
            "Ontem à noite...",
            "No ano passado...",
            "Amanhã de manhã...",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os personagens que podem aparecer em um conto de fadas:",
          items: [
            "lobo",
            "fada",
            "princesa",
            "dragão",
            "gato",
            "ônibus",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a história que a turma ouviu:",
          items: [
            "O personagem que eu mais gostei foi __________",
            "A história terminava com a palavra __________",
          ],
        },
      ],
    },
    {
      theme: "Cantigas de roda e seus efeitos de sentido",
      exercises: [
        {
          kind: "options",
          instruction: "Quando cantamos uma cantiga de roda alegre e rápida, como costumamos nos sentir?",
          options: [
            "Animados e com vontade de dançar",
            "Com sono",
            "Com medo",
            "Tristes",
          ],
        },
        {
          kind: "word-select",
          instruction: "A turma cantou \"Ciranda Cirandinha\". Circule as palavras que aparecem nessa cantiga:",
          items: [
            "ciranda",
            "roda",
            "anel",
            "dedo",
            "escola",
            "carro",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a roda que a turma formou para cantar a cantiga de hoje:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a cantiga que a turma cantou:",
          items: [
            "O nome da cantiga é __________",
            "Enquanto cantávamos, fazíamos o gesto de __________",
          ],
        },
      ],
    },
    {
      theme: "Notícias e contos sobre diferentes famílias e culturas",
      exercises: [
        {
          kind: "options",
          instruction: "As famílias podem ser organizadas de formas diferentes. Qual opção mostra isso?",
          options: [
            "Tem família com avós, tem família com pais, tem família com tios",
            "Toda família é igual",
            "Só existe um tipo de família",
            "Família não muda nunca",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a sua família do jeito que ela é:",
        },
        {
          kind: "word-select",
          instruction: "Circule as pessoas que podem fazer parte de uma família:",
          items: [
            "mãe",
            "pai",
            "avó",
            "avô",
            "tio",
            "irmão",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a história que a professora leu sobre famílias diferentes:",
          items: [
            "A família da história morava em __________",
            "Na minha família, quem cuida de mim é __________",
          ],
        },
      ],
    },
    {
      theme: "Conhecendo a história do bairro pela leitura",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um lugar importante do seu bairro (praça, mercado, escola ou outro):",
        },
        {
          kind: "options",
          instruction: "Como podemos descobrir como era o nosso bairro há muito tempo?",
          options: [
            "Ouvindo relatos de pessoas mais velhas e olhando fotos antigas",
            "Inventando uma história qualquer",
            "Não é possível saber",
            "Só assistindo desenho animado",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares que podem existir no seu bairro:",
          items: [
            "praça",
            "mercado",
            "posto de saúde",
            "escola",
            "vulcão",
            "castelo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre o bairro da escola:",
          items: [
            "O nome do meu bairro é __________",
            "Um lugar que eu gosto no bairro é __________",
          ],
        },
      ],
    },
    {
      theme: "Comparando os nomes da turma",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os nomes da lista que têm mais letras do que o seu nome:",
          items: [
            "Ana",
            "Bruno",
            "Catarina",
            "Léo",
            "Fernanda",
            "Igor",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete comparando nomes da turma:",
          items: [
            "Meu nome tem __________ letras",
            "Um nome maior que o meu é __________",
          ],
        },
        {
          kind: "options",
          instruction: "Qual desses nomes começa com a mesma letra que \"Maria\"?",
          options: [
            "Miguel",
            "Ana",
            "Beatriz",
            "Carlos",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma bandeirinha com o seu nome escrito dentro, do jeito que você conseguir:",
        },
      ],
    },
    {
      theme: "Meu nome é assim",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva seu nome completo sozinho, sem olhar para nenhum modelo:",
          lines: 1,
        },
        {
          kind: "draw",
          instruction: "Desenhe a primeira letra do seu nome bem grande e decorada:",
        },
        {
          kind: "options",
          instruction: "Quando você escreve seu nome, a primeira letra deve ser:",
          options: [
            "Letra maiúscula",
            "Todas as letras minúsculas",
            "Um desenho no lugar da letra",
            "Um número",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre o seu nome:",
          items: [
            "Meu nome começa com a letra __________",
            "Meu nome tem __________ letras",
          ],
        },
      ],
    },
    {
      theme: "Lista de livros preferidos da turma",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a lista de livros preferidos, olhando a lista de nomes da turma como referência para escrever:",
          items: [
            "Título do livro que eu escolhi: __________",
            "Esse livro fala sobre __________",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule na lista os títulos de livros que já foram lidos pela turma:",
          items: [
            "A Menina e o Vento",
            "O Gato Que Ria",
            "Uma Casa Cheia de Amigos",
            "O Dia da Chuva",
          ],
        },
        {
          kind: "options",
          instruction: "Para escrever o nome de um livro numa lista, o que podemos usar de ajuda?",
          options: [
            "A capa do livro e a lista de nomes da turma",
            "Só a imaginação, sem olhar nada",
            "O calendário",
            "A lista de compras do mercado",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a capa do seu livro preferido da turma:",
        },
      ],
    },
    {
      theme: "Montando listas com letras móveis",
      exercises: [
        {
          kind: "word-select",
          instruction: "Com as letras móveis, a turma montou palavras. Circule as que parecem palavras montadas certinhas:",
          items: [
            "CASA",
            "GATO",
            "XZQP",
            "BOLA",
            "MRTL",
            "SAPO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete usando uma palavra que você montou com as letras móveis:",
          items: [
            "Palavra que eu montei: __________",
            "Ela começa com a letra __________",
          ],
        },
        {
          kind: "options",
          instruction: "Ao montar uma palavra com letras móveis, o que devemos pensar primeiro?",
          options: [
            "Qual som a palavra tem, letra por letra",
            "Qual a cor da letra",
            "Qual letra é mais bonita",
            "Quantas letras cabem na caixa",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o objeto cujo nome você montou com as letras móveis:",
        },
      ],
    },
    {
      theme: "Escrevendo de cor a parlenda favorita",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva do seu jeito o começo da parlenda que você sabe de cor:",
          lines: 2,
          note: "Não tem problema errar letras, o importante é tentar escrever.",
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras da sua parlenda que também aparecem nesta lista:",
          items: [
            "feijão",
            "arroz",
            "biscoito",
            "pastéis",
            "gato",
            "carro",
          ],
        },
        {
          kind: "options",
          instruction: "Quando escrevemos uma parlenda que sabemos de cor, o mais importante é:",
          options: [
            "Tentar escrever cada palavra, mesmo com erros",
            "Copiar de um livro sem entender",
            "Não escrever nada",
            "Desenhar em vez de escrever",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cena da parlenda que você escreveu:",
        },
      ],
    },
    {
      theme: "Recontando a história com nossas palavras",
      exercises: [
        {
          kind: "options",
          instruction: "Quando recontamos uma história, o que não pode faltar?",
          options: [
            "O começo, o meio e o fim da história",
            "Só o final",
            "Inventar personagens novos",
            "Só os nomes dos personagens",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe em três partes: o começo, o meio e o fim da história que a turma recontou:",
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que ajudam a organizar o reconto de uma história:",
          items: [
            "depois",
            "era uma vez",
            "no final",
            "cachorro",
            "então",
            "mesa",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete o reconto da história com suas palavras:",
          items: [
            "A história começava assim: __________",
            "No final, __________",
          ],
        },
      ],
    },
    {
      theme: "Reescrevendo um conto conhecido",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva do seu jeito o começo do conto que a turma está reescrevendo:",
          lines: 2,
          note: "Você pode ditar para a professora escrever ou escrever do seu jeito.",
        },
        {
          kind: "options",
          instruction: "Ao reescrever um conto conhecido, devemos manter:",
          options: [
            "As partes principais e os personagens da história",
            "Só o título, mudando tudo o resto",
            "Nada da história original",
            "Apenas as cores do desenho",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as partes que não podem faltar quando reescrevemos um conto:",
          items: [
            "personagens",
            "começo",
            "meio",
            "fim",
            "cor da roupa",
            "clima do dia",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a capa do conto que a turma está reescrevendo, com um novo título:",
        },
      ],
    },
    {
      theme: "Indicando um livro para os colegas",
      exercises: [
        {
          kind: "options",
          instruction: "Quando você indica um livro para um colega, o que é mais importante contar?",
          options: [
            "Do que o livro fala",
            "O preço do livro",
            "Quantas páginas tem",
            "A cor da capa",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um livro que você gosta e por que os colegas deveriam ler:",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que podem aparecer em uma indicação de livro:",
          items: [
            "título",
            "autor",
            "personagens",
            "sapato",
            "aventura",
            "banana",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a capa do livro que você indicaria para a turma:",
        },
      ],
    },
    {
      theme: "Relato do passeio da turma",
      exercises: [
        {
          kind: "options",
          instruction: "Quando contamos um passeio, qual palavra usamos para dizer o que aconteceu no início?",
          options: [
            "Primeiro",
            "Depois",
            "Amanhã",
            "Nunca",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o passeio da turma:",
          items: [
            "Primeiro, nós fomos para __________.",
            "Depois, nós __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam a ordem no tempo:",
          items: [
            "primeiro",
            "cadeira",
            "depois",
            "por fim",
            "lápis",
            "então",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o momento que você mais gostou do passeio da turma:",
        },
      ],
    },
    {
      theme: "Convite para a festa da turma",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as informações que não podem faltar em um convite de festa:",
          items: [
            "data",
            "hora",
            "local",
            "cor do céu",
            "nome de quem convida",
            "sabor da lua",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete o convite da festa da turma:",
          items: [
            "A festa vai ser no dia __________.",
            "A festa vai começar às __________ horas.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual dessas frases é um jeito certo de começar um convite?",
          options: [
            "Você está convidado para a nossa festa!",
            "Foi uma vez...",
            "Amanhã vai chover",
            "Não sei o que escrever",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um convite bem bonito para a festa da turma:",
        },
      ],
    },
    {
      theme: "Roda de explicação sobre um tema estudado",
      exercises: [
        {
          kind: "options",
          instruction: "Na roda de explicação, o que devemos fazer quando um colega está falando?",
          options: [
            "Escutar com atenção",
            "Falar ao mesmo tempo",
            "Sair do lugar",
            "Fazer barulho",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que usamos para fazer perguntas:",
          items: [
            "por quê",
            "quando",
            "banana",
            "como",
            "o quê",
            "sapato",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o tema que você explicou (ou gostaria de explicar) para a turma:",
        },
        {
          kind: "lines",
          instruction: "Escreva uma pergunta que você faria para um colega sobre o tema que ele explicou:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Roda de jornal: o que aconteceu essa semana",
      exercises: [
        {
          kind: "options",
          instruction: "Na roda de jornal, sobre o que a turma conversa?",
          options: [
            "Coisas que aconteceram",
            "Só sobre desenhos animados",
            "Só sobre comida",
            "Nada importante",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os assuntos que podem ser contados na roda de jornal:",
          items: [
            "um jogo de futebol",
            "uma novidade da família",
            "o alfabeto inteiro",
            "uma notícia da cidade",
            "a cor do lápis",
            "um passeio",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma novidade que aconteceu essa semana para contar na roda:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe a novidade que você vai contar na roda de jornal:",
        },
      ],
    },
    {
      theme: "Contando o que fiz no fim de semana",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe algo que você fez no fim de semana:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o seu fim de semana:",
          items: [
            "No fim de semana eu fui para __________.",
            "Eu brinquei de __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual palavra mostra que algo já aconteceu?",
          options: [
            "Brinquei",
            "Vou brincar",
            "Brincarei",
            "Brincando amanhã",
          ],
        },
        {
          kind: "lines",
          instruction: "Conte, em uma frase, o que você mais gostou de fazer no fim de semana:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Discussão sobre as regras da sala",
      exercises: [
        {
          kind: "options",
          instruction: "O que devemos fazer quando não concordamos com a opinião de um colega?",
          options: [
            "Esperar a vez e falar com educação",
            "Gritar mais alto",
            "Não deixar ele falar",
            "Ir embora da roda",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as regras importantes para a sala de aula:",
          items: [
            "levantar a mão para falar",
            "gritar sempre",
            "respeitar os colegas",
            "bater nos amigos",
            "guardar o material",
            "esperar a vez",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma regra que você acha importante para a sua sala:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe você cumprindo uma regra da sala de aula:",
        },
      ],
    },
    {
      theme: "Quem são os personagens do conto",
      exercises: [
        {
          kind: "options",
          instruction: "O que é um personagem de uma história?",
          options: [
            "Quem participa da história",
            "O lugar onde a história acontece",
            "O título do livro",
            "A capa do livro",
          ],
        },
        {
          kind: "word-select",
          instruction: "No conto que a professora leu, circule quem pode ser personagem:",
          items: [
            "princesa",
            "lobo",
            "árvore da história",
            "menino",
            "estrela do céu",
            "bruxa",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o personagem que você mais gostou do conto que a professora contou:",
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um personagem do conto e como ele é:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Tirando as repetições do nosso texto",
      exercises: [
        {
          kind: "options",
          instruction: "Qual frase evita repetir o nome 'Ana' duas vezes?",
          options: [
            "Ana correu e ela pulou",
            "Ana correu e Ana pulou",
            "Ana correu e Ana correu",
            "Ana e Ana brincaram",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete trocando a palavra repetida por 'ele' ou 'ela':",
          items: [
            "O gato subiu no telhado. __________ estava com medo.",
            "A menina cantou. __________ tinha uma voz linda.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que podem substituir um nome para não repetir:",
          items: [
            "ele",
            "ela",
            "banana",
            "eles",
            "cadeira",
            "elas",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cena e depois conte para a professora sem repetir o nome do personagem:",
        },
      ],
    },
    {
      theme: "Ajustando as palavras de ligação do texto",
      exercises: [
        {
          kind: "options",
          instruction: "Qual palavra de ligação está sendo repetida demais nesta frase: 'Eu fui, aí brinquei, aí comi, aí voltei'?",
          options: [
            "aí",
            "eu",
            "fui",
            "comi",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras de ligação que podemos usar no lugar de 'aí':",
          items: [
            "depois",
            "então",
            "banana",
            "em seguida",
            "sapato",
            "logo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Troque a palavra 'aí' por outra palavra de ligação:",
          items: [
            "Eu acordei, __________ tomei café.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe as partes de uma historinha em ordem: primeiro, depois e por fim:",
        },
      ],
    },
    {
      theme: "Organizando as partes da nossa história",
      exercises: [
        {
          kind: "options",
          instruction: "Toda história precisa ter, em ordem:",
          options: [
            "Começo, meio e fim",
            "Só o fim",
            "Só o meio",
            "Fim, meio e começo",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que ajudam a organizar a ordem da história:",
          items: [
            "primeiro",
            "cadeira",
            "depois",
            "por fim",
            "então",
            "tênis",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe as três partes de uma história: começo, meio e fim, em três quadrinhos:",
        },
        {
          kind: "lines",
          instruction: "Escreva como termina a história que a turma criou:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Quem está contando a história?",
      exercises: [
        {
          kind: "options",
          instruction: "Quando a história é contada com a palavra 'eu', o narrador é:",
          options: [
            "Um personagem da história",
            "Alguém de fora da história",
            "Ninguém",
            "O título do livro",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as frases contadas com 'eu' (1ª pessoa):",
          items: [
            "Eu corri até a escola",
            "Ela correu até a escola",
            "Eu vi um cachorro",
            "O menino viu um cachorro",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase como se você fosse o personagem contando a história:",
          items: [
            "Eu __________ e depois __________.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe-se como o personagem principal contando a sua própria história:",
        },
      ],
    },
    {
      theme: "Comparando coisas nos textos que lemos",
      exercises: [
        {
          kind: "options",
          instruction: "Qual frase faz uma comparação?",
          options: [
            "O elefante é maior que o rato",
            "O elefante é cinza",
            "O rato é pequeno",
            "O elefante come folhas",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que usamos para comparar:",
          items: [
            "mais que",
            "igual a",
            "banana",
            "menos que",
            "cadeira",
            "como",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as comparações:",
          items: [
            "A girafa é mais alta __________ o cachorro.",
            "O rato é __________ pequeno que o elefante.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe duas coisas bem diferentes de tamanho, uma maior e uma menor:",
        },
      ],
    },
    {
      theme: "Observando as cores e imagens do livro",
      exercises: [
        {
          kind: "options",
          instruction: "Por que os livros ilustrados usam cores e imagens?",
          options: [
            "Para ajudar a entender e deixar a história mais bonita",
            "Só para enfeitar sem motivo",
            "Para confundir o leitor",
            "As cores não têm função",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os elementos que podemos observar nas imagens de um livro:",
          items: [
            "cores",
            "personagens",
            "cenário",
            "o preço do livro",
            "expressões dos personagens",
            "a editora",
          ],
        },
        {
          kind: "draw",
          instruction: "Escolha uma cena de um livro que a professora leu e desenhe usando as cores que você imaginou:",
        },
        {
          kind: "lines",
          instruction: "Escreva o que uma imagem do livro te fez sentir: alegria, medo ou surpresa:",
          lines: 2,
        },
      ],
    },
    {
      theme: "Roda de contos, mitos, lendas e fábulas de diferentes culturas",
      exercises: [
        {
          kind: "options",
          instruction: "Depois da roda de leitura, qual desses elementos costuma aparecer nas FÁBULAS que vocês ouviram?",
          options: [
            "Animais que falam e agem como pessoas, deixando uma lição no final",
            "Um herói que enfrenta um vilão em uma cidade grande",
            "Uma receita explicando passo a passo como fazer um doce",
            "Uma notícia sobre um fato que aconteceu ontem",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com a palavra certa: mito, lenda ou conto.",
          items: [
            "Uma história que explica a origem de algo do mundo, como o surgimento do fogo ou das estrelas, é chamada de __________.",
            "Uma história ligada a um lugar ou a uma crença popular, como o Boto ou o Saci, é chamada de __________.",
            "Uma história inventada, com começo, meio e fim, que pode ou não ensinar uma lição, é chamada de __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os títulos que soam como LENDAS ou MITOS (histórias ligadas a crenças de um povo):",
          items: [
            "A Lenda do Boitatá",
            "O Mito de Prometeu e o Fogo",
            "A raposa e as uvas",
            "A Lenda da Iara",
            "Chapeuzinho Vermelho",
            "O Mito da Criação do Mundo",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma das histórias ouvidas na roda de leitura (conto, mito, lenda ou fábula) e escreva o que mais chamou sua atenção nela.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Discussão sobre organização interna de textos literários",
      exercises: [
        {
          kind: "options",
          instruction: "Em um texto literário, o que é o 'tempo' da narrativa?",
          options: [
            "O momento (época, duração) em que a história acontece",
            "O tamanho da letra usada no livro",
            "O nome da editora que publicou o livro",
            "O preço do livro",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre os elementos de um texto literário.",
          items: [
            "Os __________ são as pessoas, animais ou seres que vivem a história.",
            "O __________ é o lugar onde a história acontece.",
            "A linguagem __________ (o texto escrito) e as ilustrações trabalham juntas para dar sentido à história.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Releia um trecho do texto lido em sala e marque quais marcas de linguagem aparecem nele:",
          items: [
            "Comparações ('parecia um monstro')",
            "Repetição de sons ou palavras",
            "Frases bem curtas para dar suspense",
            "Fórmulas matemáticas",
            "Diálogos entre personagens",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um texto literário lido em sala. Quem são os personagens principais e qual é o tempo (época) em que a história acontece?",
          lines: 4,
        },
      ],
    },
    {
      theme: "Comparando registros literário, jornalístico e publicitário",
      exercises: [
        {
          kind: "options",
          instruction: "Qual característica é típica do registro PUBLICITÁRIO (usado em propagandas)?",
          options: [
            "Frases curtas e chamativas para convencer o leitor a comprar ou fazer algo",
            "Relato imparcial dos fatos, com data e local",
            "Uso de comparações poéticas e narrador que conta uma história",
            "Lista numerada de instruções",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete indicando se o trecho é LITERÁRIO, JORNALÍSTICO ou PUBLICITÁRIO.",
          items: [
            "'A chuva caía como lágrimas sobre o telhado da vila.' — registro __________.",
            "'Prefeitura anuncia nova ciclovia na zona leste nesta segunda-feira.' — registro __________.",
            "'Compre já! Só esta semana, com 50% de desconto!' — registro __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras ou expressões que são características do texto LITERÁRIO:",
          items: [
            "comparação",
            "adjetivação",
            "data e hora do fato",
            "metáfora",
            "preço promocional",
            "descrição poética",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva a mesma ideia — 'está chovendo muito' — de duas formas: uma como um jornalista escreveria e outra como um escritor de literatura escreveria.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Explorando poemas: haicai, cordel e quadrinha",
      exercises: [
        {
          kind: "options",
          instruction: "O que é um HAICAI?",
          options: [
            "Um poema curto de origem japonesa, geralmente com três versos, que retrata a natureza",
            "Um texto jornalístico sobre esportes",
            "Uma lista de compras em versos",
            "Um contrato assinado por duas pessoas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre os tipos de poema estudados.",
          items: [
            "O __________ é um poema popular nordestino, geralmente impresso em folhetos, que conta histórias com rima.",
            "A __________ é um poema curto e engraçado, de quatro versos, comum nas cantigas de roda e no folclore.",
            "O haicai tradicional fala principalmente sobre __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Releia os poemas estudados em sala e marque os recursos que aparecem neles:",
          items: [
            "Rima no final dos versos",
            "Ritmo ao ler em voz alta",
            "Comparações com a natureza",
            "Números de telefone",
            "Repetição de sons",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um haicai (três versos curtos) sobre algo da natureza que você gosta de observar.",
          lines: 3,
          note: "Não precisa rimar — o haicai japonês tradicional não rima.",
        },
      ],
    },
    {
      theme: "Letra e melodia: lendo e ouvindo canções",
      exercises: [
        {
          kind: "options",
          instruction: "O que significa dizer que uma canção é 'multimodal'?",
          options: [
            "Que ela une duas linguagens diferentes — a letra (palavras) e a melodia (música) — para criar sentido",
            "Que ela tem várias versões em vários idiomas",
            "Que só pode ser tocada em um tipo de instrumento",
            "Que é uma canção muito longa",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a leitura de letras de canção.",
          items: [
            "Antes de ouvir a melodia, ao ler só a __________ da canção, imaginamos um jeito de cantá-la.",
            "Depois de ouvir a canção, percebemos se o __________ da melodia (rápido, lento, alegre, triste) combina com o que a letra diz.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Depois de ouvir a canção trabalhada em sala, marque as sensações que a melodia transmitiu:",
          items: [
            "Alegria",
            "Tristeza",
            "Calma",
            "Agitação",
            "Nenhuma emoção",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma canção que você conhece. Antes de pensar na melodia, o que a LETRA (só as palavras) transmite para você? A melodia combina com esse sentido?",
          lines: 4,
        },
      ],
    },
    {
      theme: "Textos dramáticos e situações de encenação",
      exercises: [
        {
          kind: "options",
          instruction: "O que é um texto dramático (como uma peça de teatro)?",
          options: [
            "Um texto escrito para ser encenado, com falas de personagens e indicações de cena",
            "Um texto que só pode ser lido em silêncio",
            "Uma lista de regras de um jogo",
            "Uma receita de bolo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com os termos: rubrica, personagem, diálogo.",
          items: [
            "A fala entre dois ou mais personagens em uma peça é chamada de __________.",
            "As indicações entre parênteses que dizem como o ator deve agir ou se mover são chamadas de __________.",
            "Quem representa um papel na peça é o __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque onde um texto dramático pode ser apresentado:",
          items: [
            "Espetáculo de teatro em um palco",
            "Leitura dramática em voz alta, sem cenário",
            "Teatro de fantoches",
            "Uma prova de matemática",
            "Uma apresentação com bonecos",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno diálogo (fala de dois personagens) sobre uma discussão simples, como decidir o que assistir na TV.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Contexto de produção de textos reivindicatórios e relatos históricos",
      exercises: [
        {
          kind: "options",
          instruction: "Um texto reivindicatório é escrito principalmente para:",
          options: [
            "Pedir ou exigir uma mudança, defendendo um direito ou uma causa",
            "Contar uma história de fadas",
            "Anunciar um produto em promoção",
            "Ensinar uma receita culinária",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete pensando no contexto de produção dos textos.",
          items: [
            "Antes de ler um texto, podemos pensar: quem escreveu, para quem e com qual __________ (objetivo).",
            "Um relato histórico normalmente conta fatos que aconteceram no __________.",
            "Um abaixo-assinado pedindo mais uma praça no bairro é um exemplo de texto __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque situações em que alguém escreveria um texto reivindicatório:",
          items: [
            "Pedir que a escola tenha mais tempo de recreio",
            "Reclamar da falta de coleta de lixo no bairro",
            "Contar a história de um dragão",
            "Pedir a construção de uma rampa de acesso",
            "Anunciar uma promoção de sapatos",
          ],
        },
        {
          kind: "lines",
          instruction: "Imagine que sua turma quer pedir algo para a escola (mais tempo de biblioteca, por exemplo). O que vocês diriam para convencer a direção? Escreva os principais argumentos.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Conhecendo culturas por relatos históricos e divulgação científica",
      exercises: [
        {
          kind: "options",
          instruction: "Uma reportagem é diferente de uma entrevista porque:",
          options: [
            "A reportagem apresenta e explica um fato, enquanto a entrevista traz perguntas e respostas de uma pessoa",
            "A reportagem só tem desenhos",
            "A entrevista nunca tem perguntas",
            "Não há diferença nenhuma",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre os textos que ajudam a conhecer diferentes culturas.",
          items: [
            "Um __________ histórico conta como viviam pessoas de outro tempo ou lugar.",
            "Um artigo de __________ científica explica uma descoberta ou um fenômeno da ciência.",
            "Uma __________ é uma conversa registrada entre quem pergunta e quem responde.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque quais destas fontes podem ajudar a conhecer diferentes culturas:",
          items: [
            "Reportagens sobre outros países",
            "Entrevistas com pessoas de comunidades diferentes",
            "Vídeos documentários",
            "Uma lista de números aleatórios",
            "Relatos históricos de outros povos",
          ],
        },
        {
          kind: "lines",
          instruction: "Se você pudesse entrevistar uma pessoa de outra cultura (de outro país ou de um povo indígena, por exemplo), quais duas perguntas você faria? Escreva-as.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Organização hierárquica de textos de divulgação científica",
      exercises: [
        {
          kind: "options",
          instruction: "Em um texto de divulgação científica, o título geralmente serve para:",
          options: [
            "Apresentar de forma resumida o assunto principal do texto",
            "Enfeitar a página",
            "Substituir a necessidade de parágrafos",
            "Ser ignorado pelo leitor",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a organização de um texto de divulgação científica.",
          items: [
            "Cada __________ novo geralmente apresenta uma ideia ou informação diferente.",
            "As informações mais __________ costumam vir logo no início do texto.",
            "Subtítulos ajudam a organizar o texto em __________ (partes menores).",
          ],
        },
        {
          kind: "word-select",
          instruction: "Releia um texto de divulgação científica estudado em sala e marque o que ele apresenta:",
          items: [
            "Um título que resume o assunto",
            "Parágrafos organizados por tema",
            "Informações comprovadas por pesquisa",
            "Uma moral no final, como nas fábulas",
            "Imagens ou gráficos explicativos",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que separar um texto em parágrafos ajuda o leitor a entender melhor as informações? Explique com suas palavras.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Efeitos de sentido em quadrinhos, charges e tiras",
      exercises: [
        {
          kind: "options",
          instruction: "Nas histórias em quadrinhos, os balões de fala com bordas 'espetadas' (como um raio) costumam indicar:",
          options: [
            "Um grito ou uma fala em tom alto/exaltado",
            "Um pensamento silencioso",
            "Um sussurro",
            "Uma narração do autor",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com os termos: onomatopeia, charge, tira.",
          items: [
            "Uma __________ é uma sequência curta de quadrinhos, geralmente com poucos quadros e um humor rápido.",
            "Uma __________ é um desenho de humor que critica, com ironia, um fato atual (político ou social).",
            "'BUM!', 'TOC TOC' e 'CRAC' são exemplos de __________, palavras que imitam sons.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os recursos usados em quadrinhos para criar efeitos de sentido:",
          items: [
            "Tamanho e formato dos balões",
            "Onomatopeias",
            "Expressão do rosto dos personagens",
            "Cor de fundo da página do caderno",
            "Linhas de movimento ao redor do personagem",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma tira ou charge que você já viu (em jornal, revista ou internet). O que ela fazia rir ou pensar? Explique o que causava esse efeito.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Multimodalidade em textos de projetos interdisciplinares",
      gradeYear: "4-ano",
      exercises: [
        {
          kind: "options",
          instruction: "O que significa 'multimodalidade' em um texto?",
          options: [
            "A combinação de diferentes linguagens (texto escrito, imagem, gráfico) para construir o sentido",
            "Um texto escrito em vários idiomas ao mesmo tempo",
            "Um texto que só usa desenhos, sem nenhuma palavra",
            "Um texto muito comprido",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre textos multimodais usados em projetos de outras áreas (Ciências, História, Geografia).",
          items: [
            "Um __________ ajuda a mostrar números e dados de forma visual, sem precisar escrever tudo em texto.",
            "Uma __________ (foto, desenho, mapa) complementa a explicação escrita, tornando-a mais clara.",
            "Quando texto e imagem se completam, dizemos que o texto é __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos que podem aparecer juntos em um cartaz de projeto interdisciplinar (por exemplo, sobre reciclagem):",
          items: [
            "Texto explicativo",
            "Gráfico de barras com dados",
            "Fotos ou desenhos ilustrativos",
            "Um poema de amor",
            "Um mapa",
          ],
        },
        {
          kind: "lines",
          instruction: "Imagine um cartaz sobre os animais do seu estado, feito para um projeto de Ciências. Que tipos de imagem (fotos, mapas, desenhos) e informações escritas você colocaria nele?",
          lines: 4,
        },
      ],
    },
    {
      theme: "Lendo trechos de textos jurídicos do cotidiano",
      exercises: [
        {
          kind: "options",
          instruction: "O Estatuto da Criança e do Adolescente (ECA) é um exemplo de texto:",
          options: [
            "Jurídico, que define direitos e deveres das crianças e adolescentes",
            "Literário, com personagens fictícios",
            "Publicitário, que vende um produto",
            "Uma canção popular",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a leitura de textos jurídicos do cotidiano.",
          items: [
            "Um __________ é um direito garantido por lei, como o direito à educação.",
            "Textos jurídicos costumam usar uma linguagem mais __________ (formal) do que os textos literários.",
            "O ECA garante que toda criança tem direito à __________, entre outros direitos.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque quais são direitos garantidos às crianças pelo ECA:",
          items: [
            "Direito à educação",
            "Direito à saúde",
            "Direito de trabalhar em qualquer idade",
            "Direito ao lazer",
            "Direito à proteção contra maus-tratos",
          ],
        },
        {
          kind: "lines",
          instruction: "Depois de ler um trecho do ECA em sala, escreva com suas palavras um direito que você achou importante e por quê.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Antecipando o conteúdo de propagandas e anúncios",
      exercises: [
        {
          kind: "options",
          instruction: "Ao ver só a imagem e o título de um anúncio, antes de ler tudo, o que fazemos?",
          options: [
            "Antecipamos (imaginamos) do que ele deve tratar, com base nas pistas visuais",
            "Lemos tudo sem pensar antes",
            "Ignoramos completamente o anúncio",
            "Copiamos o texto sem entender",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a leitura de propagandas e anúncios.",
          items: [
            "Um cartaz de propaganda costuma usar cores fortes e letras grandes para chamar a __________.",
            "Antes de ler todo o texto, podemos observar a __________ e o título para imaginar o assunto.",
            "Anúncios geralmente têm o objetivo de __________ o leitor a comprar ou fazer algo.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Observe um anúncio (real ou trazido pela professora) e marque as pistas que ajudam a antecipar o conteúdo antes de ler tudo:",
          items: [
            "A imagem principal",
            "O título em letras grandes",
            "As cores usadas",
            "O número de páginas de um livro",
            "O logotipo da marca",
          ],
        },
        {
          kind: "lines",
          instruction: "Olhando só para o título 'Água que renova!' de um anúncio, o que você imagina que está sendo vendido? Explique seu raciocínio.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Relendo e marcando trechos importantes do texto",
      exercises: [
        {
          kind: "options",
          instruction: "Por que é útil grifar ou marcar trechos de um texto durante a leitura?",
          options: [
            "Para destacar partes importantes, dúvidas ou trechos para consultar depois",
            "Para deixar o texto mais bonito",
            "Porque é obrigatório em todo texto",
            "Para apagar partes que não gostamos",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre estratégias de releitura.",
          items: [
            "Quando encontramos uma palavra desconhecida, podemos marcá-la para consultar no __________.",
            "Quando um trecho gera __________ (não concordamos com ele), podemos anotar por quê.",
            "Reler um texto ajuda a esclarecer __________ que ficaram da primeira leitura.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Releia um trecho do texto trabalhado em sala e marque os motivos para grifar uma parte dele:",
          items: [
            "Palavra desconhecida",
            "Informação importante para o tema",
            "Trecho que gerou dúvida",
            "Frase que você discorda",
            "Número de página",
          ],
        },
        {
          kind: "lines",
          instruction: "Releia um trecho de um texto que vocês estudaram em sala. Marque (ou anote) uma parte que ficou confusa para você e explique por quê.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Pesquisando em múltiplas fontes sobre um tema de estudo",
      exercises: [
        {
          kind: "options",
          instruction: "Por que é bom pesquisar um tema em mais de uma fonte (livro, site, revista)?",
          options: [
            "Porque diferentes fontes podem trazer informações complementares e ajudam a confirmar os dados",
            "Porque é proibido usar só uma fonte",
            "Porque todas as fontes sempre dizem exatamente a mesma coisa",
            "Porque assim o trabalho fica mais longo, sem outro motivo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre pesquisa escolar.",
          items: [
            "Antes de pesquisar, é importante ativar nossos conhecimentos __________ sobre o assunto.",
            "Livros, __________, sites e revistas são exemplos de fontes de pesquisa.",
            "Ao assistir a um documentário, é importante ter um olhar __________, sem aceitar tudo sem pensar.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque quais são fontes que podem ser usadas em uma pesquisa escolar:",
          items: [
            "Livros",
            "Enciclopédias",
            "Sites confiáveis",
            "Revistas",
            "Jornais",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um tema de Ciências ou História que vocês estudaram. Que fontes (livro, site, documentário) vocês poderiam consultar para aprender mais sobre ele?",
          lines: 4,
        },
      ],
    },
    {
      theme: "Tutoria de leitura oral: preparando a leitura em voz alta",
      exercises: [
        {
          kind: "options",
          instruction: "O que é a 'prosódia' na leitura em voz alta?",
          options: [
            "O jeito de ler com entonação, pausas e ritmo adequados ao sentido do texto",
            "A quantidade de páginas de um texto",
            "O tamanho da letra do texto",
            "O nome do autor do texto",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a preparação da leitura em voz alta.",
          items: [
            "Antes de ler em voz alta, é importante __________ (ler antes, em silêncio) o texto para entendê-lo bem.",
            "Uma notícia deve ser lida com tom mais __________ (sério, informativo).",
            "Um texto teatral pode ser lido dando voz e __________ diferentes para cada personagem.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque o que é importante observar ao preparar uma leitura em voz alta:",
          items: [
            "Onde fazer pausas",
            "Qual palavra merece mais destaque",
            "O tom de voz adequado ao texto",
            "A cor da capa do livro",
            "O ritmo da leitura",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um trecho curto de um texto (notícia, teatro ou poema). Como você leria esse trecho em voz alta — rápido ou devagar, sério ou animado? Explique por quê.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Reescrevendo textos mantendo o tema e o conteúdo",
      exercises: [
        {
          kind: "options",
          instruction: "Ao reescrever um texto, o que deve ser mantido?",
          options: [
            "O tema e o conteúdo principal da história ou do texto original",
            "Nada, pode-se mudar tudo, inclusive o assunto",
            "Apenas o título",
            "Só a quantidade de páginas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a reescrita de textos.",
          items: [
            "Reescrever um texto significa contar a mesma história ou informação com __________ próprias.",
            "É importante manter a __________ dos fatos (a ordem em que acontecem).",
            "Mesmo reescrevendo, a __________ verbal e nominal (concordância) deve estar correta.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Ao reescrever um conto lido em sala, marque o que deve permanecer igual:",
          items: [
            "Os personagens principais",
            "O problema (conflito) da história",
            "O final da história",
            "Suas próprias palavras (isso pode mudar)",
            "O tema central",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um pequeno trecho de uma história conhecida e reescreva-o com suas próprias palavras, mantendo os fatos principais.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Produzindo contos de diferentes culturas",
      exercises: [
        {
          kind: "options",
          instruction: "Para dar coerência a um conto, é importante que:",
          options: [
            "Os fatos tenham uma sequência lógica e façam sentido entre si",
            "Cada frase fale de um assunto diferente e sem relação",
            "Não haja nenhum personagem",
            "O conto não tenha um final",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete pensando na estrutura de um conto.",
          items: [
            "Todo conto tem uma __________ (apresentação), um conflito e um desfecho (final).",
            "A __________ verbal, ou seja, o uso correto dos tempos verbais, ajuda o leitor a entender quando os fatos acontecem.",
            "Contos de diferentes culturas podem ter personagens, lugares e __________ diferentes dos que conhecemos.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Antes de escrever seu conto, marque os elementos que você deve planejar:",
          items: [
            "Quem são os personagens",
            "Onde e quando a história acontece",
            "Qual é o problema (conflito) da história",
            "O preço de um produto",
            "Como a história vai terminar",
          ],
        },
        {
          kind: "lines",
          instruction: "Planeje o início do seu conto: apresente o personagem principal e o lugar onde a história vai acontecer.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Produzindo entrevistas e verbetes de enciclopédia",
      exercises: [
        {
          kind: "options",
          instruction: "Um verbete de enciclopédia se caracteriza por:",
          options: [
            "Explicar de forma objetiva e organizada um termo ou assunto",
            "Contar uma história em primeira pessoa",
            "Ter rima e ritmo",
            "Ser uma lista de compras",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a produção de entrevistas.",
          items: [
            "Antes de uma entrevista, é importante preparar as __________ que serão feitas.",
            "Durante a entrevista, quem pergunta é o __________ e quem responde é o entrevistado.",
            "Um verbete geralmente começa definindo __________ é o assunto tratado.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque o que é necessário planejar antes de fazer uma entrevista sobre um tema de interesse da comunidade:",
          items: [
            "A pessoa que será entrevistada",
            "As perguntas principais",
            "O objetivo da entrevista",
            "A cor da caneta usada",
            "O tema central",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um tema de interesse da comunidade (como reciclagem, segurança ou lazer no bairro) e escreva três perguntas que você faria em uma entrevista sobre esse tema.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Escrevendo cartas de solicitação e reivindicação",
      exercises: [
        {
          kind: "options",
          instruction: "Uma carta de solicitação serve para:",
          options: [
            "Pedir algo de forma educada e justificada a uma pessoa ou instituição",
            "Contar uma história de ficção",
            "Vender um produto",
            "Fazer uma lista de tarefas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a estrutura de uma carta de solicitação.",
          items: [
            "Uma carta formal deve começar com uma __________ (por exemplo, 'Prezado(a) diretor(a),').",
            "No corpo da carta, explicamos o __________ (motivo) do pedido.",
            "No final da carta, colocamos a __________ (despedida) e a assinatura.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque o que deve conter uma carta de reivindicação bem escrita:",
          items: [
            "Saudação inicial",
            "Explicação clara do pedido",
            "Justificativa (motivo do pedido)",
            "Gírias e informalidade exagerada",
            "Despedida e assinatura",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o início de uma carta pedindo à direção da escola uma melhoria que você considera importante (por exemplo, mais livros na biblioteca). Inclua a saudação e o motivo do pedido.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Escrevendo comentários digitais sobre textos lidos",
      exercises: [
        {
          kind: "options",
          instruction: "Um bom comentário digital sobre um texto lido deve:",
          options: [
            "Estabelecer relação clara com o texto original, dizendo a que parte ele se refere",
            "Falar de qualquer assunto, sem relação com o texto",
            "Ser sempre negativo",
            "Copiar o texto original palavra por palavra",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre comentários digitais.",
          items: [
            "Ao comentar um texto na internet, é importante deixar claro a qual __________ do texto você está se referindo.",
            "Um comentário pode expressar uma __________ (concordo, discordo, gostei) sobre o texto.",
            "É importante ser __________ (respeitoso) mesmo quando discordamos de algo.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque características de um bom comentário digital:",
          items: [
            "Relação clara com o texto comentado",
            "Respeito, mesmo ao discordar",
            "Opinião justificada",
            "Ofensas ao autor",
            "Clareza na escrita",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um texto lido em sala e escreva um comentário digital sobre ele, como se fosse postar em um blog de leitura da turma. Deixe claro a que parte do texto você se refere.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Apresentando sínteses orais sobre temas estudados",
      exercises: [
        {
          kind: "options",
          instruction: "Para fazer uma boa apresentação oral sobre um tema estudado, é importante:",
          options: [
            "Preparar um esquema ou notas com os pontos principais antes de falar",
            "Decorar um texto enorme sem entender o assunto",
            "Falar sem se preparar",
            "Copiar tudo de um livro sem organizar as ideias",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a apresentação de sínteses orais.",
          items: [
            "Uma __________ é um resumo dos pontos mais importantes de um tema.",
            "Anotar palavras-chave em __________ ajuda a lembrar o que falar sem precisar ler tudo.",
            "Ao final da apresentação, é interessante abrir espaço para __________ da plateia.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque o que ajuda a preparar uma boa apresentação oral:",
          items: [
            "Fazer um esquema com os pontos principais",
            "Treinar antes de apresentar",
            "Organizar a ordem das ideias",
            "Decorar cada palavra sem entender o sentido",
            "Pensar em possíveis perguntas da plateia",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um tema que vocês estudaram recentemente (de qualquer matéria) e escreva um pequeno esquema com 3 pontos principais que você apresentaria sobre ele.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Debatendo temas atuais com respeito à fala do outro",
      exercises: [
        {
          kind: "options",
          instruction: "Em um debate, quando alguém tem uma opinião diferente da sua, o correto é:",
          options: [
            "Ouvir com respeito e responder com argumentos, sem interromper ou ofender",
            "Gritar mais alto para vencer",
            "Ignorar completamente a pessoa",
            "Rir da opinião do outro",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a participação em debates.",
          items: [
            "Um __________ é uma discussão organizada sobre um tema controverso, em que as pessoas defendem opiniões diferentes.",
            "Para participar bem de um debate, é importante __________ (pesquisar) sobre o assunto antes.",
            "Justificar uma opinião significa apresentar __________ (motivos) para ela.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque atitudes adequadas para um bom debate em sala:",
          items: [
            "Esperar sua vez de falar",
            "Ouvir os colegas com atenção",
            "Justificar sua opinião com argumentos",
            "Interromper os colegas o tempo todo",
            "Respeitar quem pensa diferente",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um tema atual do cotidiano (como uso de celular na escola ou separação do lixo) e escreva sua opinião sobre ele, justificando com pelo menos um motivo.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Registrando informações durante uma escuta oral",
      exercises: [
        {
          kind: "options",
          instruction: "Ao ouvir uma apresentação ou explicação de um colega, fazer anotações ajuda a:",
          options: [
            "Lembrar depois das informações mais importantes",
            "Atrapalhar quem está falando",
            "Perder o fio da explicação",
            "Nada, anotar é desnecessário",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre registros de escuta oral.",
          items: [
            "Durante uma escuta, podemos fazer __________ (anotações rápidas) dos pontos principais.",
            "Um __________ é um desenho organizado que mostra a relação entre as ideias ouvidas.",
            "Registrar por __________ ou vídeo também é uma forma de guardar informações de uma escuta.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque boas formas de registrar informações durante a escuta de uma apresentação:",
          items: [
            "Fazer anotações curtas",
            "Desenhar um esquema",
            "Tirar fotos do quadro ou do material",
            "Conversar com o colega ao lado sobre outro assunto",
            "Gravar um resumo em vídeo (com autorização)",
          ],
        },
        {
          kind: "lines",
          instruction: "Durante a apresentação de um colega (ou de um vídeo assistido em sala), registre por escrito três informações que você considerou mais importantes.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Comparando textos de gêneros diferentes e do mesmo gênero",
      exercises: [
        {
          kind: "options",
          instruction: "Uma receita culinária e um poema podem falar do mesmo assunto (o preparo de um bolo, por exemplo). O que diferencia esses dois textos?",
          options: [
            "A forma como as informações são organizadas e a linguagem usada",
            "O assunto tratado",
            "O tamanho do papel usado para escrever",
            "A cor da tinta",
          ],
        },
        {
          kind: "word-select",
          instruction: "Leia as características abaixo e marque as que pertencem ao gênero NOTÍCIA:",
          items: [
            "título chamativo",
            "rima entre os versos",
            "responde quem, o quê, quando, onde",
            "linguagem informativa e objetiva",
            "personagens fantásticos",
            "data e local do fato",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Compare duas receitas de bolo que a turma leu em sala. Complete:",
          items: [
            "As duas receitas têm em comum a lista de __________ e o modo de __________.",
            "Uma receita pode ser diferente da outra no __________ usado e na quantidade dos ingredientes.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha dois textos do mesmo gênero que a turma leu (duas notícias, dois poemas ou dois bilhetes) e escreva três semelhanças e uma diferença entre eles:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Eliminando repetições no texto com sinônimos e pronomes",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Reescreva substituindo a palavra repetida por um sinônimo ou pronome:",
          items: [
            "'O cachorro correu no parque. O cachorro pegou a bola.' → 'O cachorro correu no parque. __________ pegou a bola.'",
            "'Marina gosta de ler. Marina lê todo dia antes de dormir.' → 'Marina gosta de ler. __________ lê todo dia antes de dormir.'",
          ],
        },
        {
          kind: "word-select",
          instruction: "No texto 'A menina pegou o livro. A menina abriu o livro. A menina começou a ler o livro.', marque as palavras que se repetem em excesso:",
          items: [
            "menina",
            "livro",
            "pegou",
            "abriu",
            "começou",
            "ler",
          ],
        },
        {
          kind: "options",
          instruction: "Qual pronome substitui melhor 'Pedro e Ana' na frase 'Pedro e Ana foram ao mercado. Pedro e Ana compraram frutas.'?",
          options: [
            "Eles",
            "Ele",
            "Nós",
            "Você",
          ],
        },
        {
          kind: "lines",
          instruction: "Reescreva este parágrafo trocando as repetições por sinônimos ou pronomes: 'O gato subiu na árvore. O gato ficou com medo de descer. Um menino ajudou o gato.'",
          lines: 4,
        },
      ],
    },
    {
      theme: "Usando organizadores textuais no texto",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os organizadores textuais que indicam ORDEM ou SEQUÊNCIA de ideias:",
          items: [
            "primeiro",
            "depois",
            "por fim",
            "porém",
            "em seguida",
            "além disso",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete o texto com organizadores textuais adequados:",
          items: [
            "__________, separe todos os ingredientes sobre a mesa.",
            "__________, misture tudo e leve ao forno por 30 minutos.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual organizador textual indica CONCLUSÃO de uma ideia?",
          options: [
            "Portanto",
            "Enquanto isso",
            "No início",
            "Ao mesmo tempo",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno texto contando os passos para escovar os dentes, usando pelo menos três organizadores textuais (primeiro, depois, por fim...):",
          lines: 5,
        },
      ],
    },
    {
      theme: "Mantendo os tempos verbais coerentes no texto",
      exercises: [
        {
          kind: "word-select",
          instruction: "Leia o texto e marque o verbo que está no tempo ERRADO, quebrando a coerência: 'Ontem eu fui ao parque. Eu brinco com meus amigos e depois voltei para casa.'",
          items: [
            "fui",
            "brinco",
            "voltei",
            "parque",
            "amigos",
            "ontem",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete mantendo o mesmo tempo verbal (passado) da frase:",
          items: [
            "Ontem, Lucas __________ (jogar) bola e depois __________ (tomar) banho.",
            "Na semana passada, nós __________ (visitar) a vovó e __________ (comer) bolo.",
          ],
        },
        {
          kind: "options",
          instruction: "Em um texto todo escrito no passado, qual frase MANTÉM a coerência verbal?",
          options: [
            "Ela chegou em casa e guardou a mochila.",
            "Ela chegou em casa e guarda a mochila.",
            "Ela chega em casa e guardou a mochila.",
            "Ela vai chegar em casa e guardava a mochila.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um parágrafo contando o que você fez no último final de semana, usando os verbos sempre no passado:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Articulando as partes do texto e mantendo o narrador",
      exercises: [
        {
          kind: "options",
          instruction: "Em um texto narrado em 1ª pessoa, o narrador é:",
          options: [
            "Uma personagem que participa da história e usa 'eu'",
            "Alguém de fora da história que usa 'ele' ou 'ela'",
            "O autor do livro sempre",
            "O leitor do texto",
          ],
        },
        {
          kind: "word-select",
          instruction: "Leia as frases e marque as que estão narradas em 1ª pessoa:",
          items: [
            "Eu corri até a floresta e me escondi.",
            "Ela correu até a floresta e se escondeu.",
            "Nós encontramos o tesouro escondido.",
            "Ele encontrou o tesouro escondido.",
            "Fui o primeiro a chegar.",
            "João foi o primeiro a chegar.",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Reescreva mantendo o mesmo narrador (3ª pessoa) do começo ao fim:",
          items: [
            "Maria abriu a porta. __________ viu um gato na sala. (complete com Ela)",
            "O menino correu. __________ estava com medo. (complete com Ele)",
          ],
        },
        {
          kind: "lines",
          instruction: "Continue esta história MANTENDO o mesmo narrador (3ª pessoa): 'Era uma vez uma raposa esperta que vivia na floresta. Um dia, ela encontrou uma armadilha...'",
          lines: 5,
        },
      ],
    },
    {
      theme: "Usando a pontuação medial e final com intenção",
      exercises: [
        {
          kind: "options",
          instruction: "Qual pontuação final devemos usar na frase 'Que susto você me deu'?",
          options: [
            "Ponto de exclamação (!)",
            "Ponto final (.)",
            "Dois-pontos (:)",
            "Reticências (...)",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com a pontuação adequada (. ! ? ...):",
          items: [
            "Você já terminou a lição__________",
            "Cuidado, o chão está molhado__________",
            "Eu não sei se vou__________ talvez amanhã__________",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as frases em que a vírgula está separando itens de uma lista:",
          items: [
            "Comprei maçã, banana e uva.",
            "Ana, venha aqui!",
            "Levei lápis, borracha, caderno e régua.",
            "Não, eu não vou.",
            "Trouxe bola, corda e peteca.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno diálogo entre duas personagens usando pelo menos uma pergunta (?), uma exclamação (!) e um ponto final (.):",
          lines: 5,
        },
      ],
    },
    {
      theme: "Analisando as escolhas de palavras no próprio texto",
      exercises: [
        {
          kind: "options",
          instruction: "Por que é importante escolher bem as palavras ao escrever um texto?",
          options: [
            "Porque cada palavra transmite um sentido diferente e pode mudar o que queremos dizer",
            "Porque textos com palavras difíceis são sempre melhores",
            "Porque não faz diferença nenhuma",
            "Porque só interessa o tamanho do texto",
          ],
        },
        {
          kind: "word-select",
          instruction: "Leia a frase 'O menino andou pela rua' e marque as palavras que poderiam substituir 'andou' dando mais expressividade ao texto:",
          items: [
            "caminhou",
            "correu",
            "desfilou",
            "comeu",
            "vagou",
            "dormiu",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escolha a palavra mais expressiva para completar a frase:",
          items: [
            "O vento __________ forte, balançando as árvores. (soprava ou estava?)",
            "A criança __________ de alegria ao ver o presente. (gritou ou falou?)",
          ],
        },
        {
          kind: "lines",
          instruction: "Releia um texto que você escreveu recentemente. Escolha duas palavras que poderiam ser trocadas por outras mais expressivas e reescreva as frases:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Identificando metáforas, comparações e personificações",
      exercises: [
        {
          kind: "options",
          instruction: "Na frase 'Meu coração é um oceano de sentimentos', qual figura de linguagem foi usada?",
          options: [
            "Metáfora",
            "Comparação com 'como'",
            "Onomatopeia",
            "Repetição",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as frases que usam COMPARAÇÃO (com a palavra 'como'):",
          items: [
            "Ela é ligeira como um raio.",
            "Ela é um raio de luz.",
            "O menino nadava como um peixe.",
            "O vento sussurrava segredos.",
            "Forte como um leão.",
            "Seus olhos são estrelas.",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Identifique a figura de linguagem em cada frase:",
          items: [
            "'O sol sorria para a manhã' é um exemplo de __________ (personificação ou comparação?).",
            "'Ela é rápida como o vento' é um exemplo de __________ (metáfora ou comparação?).",
          ],
        },
        {
          kind: "lines",
          instruction: "Crie duas frases: uma com metáfora e outra com personificação, sobre a natureza (sol, lua, chuva, vento, árvores):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Explorando campo semântico e hiperonímia com o dicionário",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque as palavras que pertencem ao mesmo campo semântico de 'cachorro, gato, cavalo':",
          items: [
            "animais",
            "vaca",
            "papel",
            "passarinho",
            "computador",
            "peixe",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o hiperônimo (palavra mais geral) que reúne o grupo:",
          items: [
            "Maçã, banana e laranja são tipos de __________.",
            "Cadeira, mesa e armário são tipos de __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é o hiperônimo da palavra 'rosa'?",
          options: [
            "Flor",
            "Pétala",
            "Jardim",
            "Vermelho",
          ],
        },
        {
          kind: "lines",
          instruction: "Use o dicionário para procurar duas palavras que você não conhece dentro do campo semântico 'profissões'. Escreva o significado de cada uma:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Descobrindo palavras polissêmicas",
      exercises: [
        {
          kind: "options",
          instruction: "O que significa dizer que uma palavra é 'polissêmica'?",
          options: [
            "Que ela tem mais de um significado, dependendo do contexto",
            "Que ela é muito comprida",
            "Que ela só existe no plural",
            "Que ela não pode ser usada em frases",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "A palavra 'manga' pode ter dois sentidos diferentes. Complete:",
          items: [
            "Comi uma __________ doce no almoço. (fruta)",
            "A __________ da camisa estava rasgada. (parte da roupa)",
          ],
        },
        {
          kind: "word-select",
          instruction: "A palavra 'banco' aparece em frases diferentes. Marque as frases em que 'banco' significa 'assento':",
          items: [
            "Sentei no banco da praça.",
            "Fui ao banco pegar dinheiro.",
            "O banco de madeira era confortável.",
            "Meu pai trabalha em um banco.",
            "Havia um banco embaixo da árvore.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha a palavra 'copa' e escreva duas frases em que ela tenha significados diferentes (ex: cômodo da casa e competição esportiva):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Explorando recursos gráfico-textuais do material lido",
      exercises: [
        {
          kind: "options",
          instruction: "Para que serve o NEGRITO em um texto?",
          options: [
            "Para destacar uma palavra ou informação importante",
            "Para indicar que a palavra está errada",
            "Para diminuir o tamanho da letra",
            "Para separar parágrafos",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os recursos gráfico-textuais que você pode encontrar em uma reportagem de revista:",
          items: [
            "título em letra grande",
            "negrito",
            "itálico",
            "assinatura em carta pessoal",
            "colunas de texto",
            "imagens com legenda",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete explicando o efeito de cada recurso:",
          items: [
            "Palavras em __________ (itálico ou sublinhado?) geralmente indicam uma palavra estrangeira ou de destaque.",
            "Letras __________ (grandes ou pequenas?) no título chamam a atenção do leitor logo de início.",
          ],
        },
        {
          kind: "draw",
          instruction: "Observe uma página de um livro ou revista que você tem em casa ou na escola. Desenhe como ela está organizada, indicando onde estão o título, as imagens e os textos em negrito ou itálico.",
        },
      ],
    },
    {
      theme: "Reconhecendo variedades da língua portuguesa",
      exercises: [
        {
          kind: "options",
          instruction: "Por que as pessoas de diferentes regiões do Brasil falam de jeitos diferentes?",
          options: [
            "Porque a língua varia conforme a região, a idade, a profissão e outros fatores",
            "Porque umas pessoas falam certo e outras erradas",
            "Porque só existe um jeito certo de falar português",
            "Porque a televisão obriga todo mundo a falar igual",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que são formas regionais de dizer 'menino/criança' em diferentes partes do Brasil:",
          items: [
            "guri",
            "moleque",
            "pequeno",
            "curumim",
            "cachorro",
            "piá",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com a palavra usada em algumas regiões do Brasil:",
          items: [
            "No Nordeste, 'macaxeira' é o mesmo que __________ em outras regiões.",
            "Em algumas regiões, 'bergamota' é o mesmo que __________ (uma fruta cítrica pequena).",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva três palavras ou expressões diferentes que você conhece e que são usadas de forma diferente em outras regiões ou por outras gerações (avós, por exemplo):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Combatendo o preconceito linguístico",
      exercises: [
        {
          kind: "options",
          instruction: "O que é preconceito linguístico?",
          options: [
            "Discriminar uma pessoa pelo jeito que ela fala",
            "Corrigir um erro de ortografia em uma prova",
            "Ensinar a norma culta na escola",
            "Usar o dicionário para tirar dúvidas",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as atitudes que combatem o preconceito linguístico:",
          items: [
            "respeitar o jeito de falar de cada região",
            "rir de alguém por causa do sotaque",
            "valorizar as diferentes formas de falar português",
            "dizer que só existe um jeito certo de falar",
            "ouvir com atenção pessoas de outros lugares",
            "corrigir os outros na frente de todo mundo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com sua opinião, justificando:",
          items: [
            "Uma pessoa que fala com sotaque de outra região __________. (deve ser respeitada ou deve mudar o jeito de falar?)",
            "Falar 'diferente' da norma culta __________. (significa falar errado ou não significa falar errado?)",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno texto explicando por que é errado zombar do sotaque ou do jeito de falar de uma pessoa:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Analisando substantivos e concordância nominal",
      exercises: [
        {
          kind: "options",
          instruction: "Na frase 'As casas amarelas são bonitas', qual palavra é o substantivo no plural?",
          options: [
            "Casas",
            "Amarelas",
            "São",
            "Bonitas",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque todos os substantivos da frase: 'O menino levou o cachorro e a bola para o parque.'",
          items: [
            "menino",
            "levou",
            "cachorro",
            "bola",
            "parque",
            "para",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete fazendo a concordância nominal correta entre substantivo e adjetivo:",
          items: [
            "As casa__________ branca__________ da rua são antigas. (complete as terminações de plural)",
            "O gato preto e a gata pret__________ dormem juntos.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas frases em que o substantivo esteja no plural e o adjetivo concorde corretamente com ele (ex: as flores coloridas):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Analisando verbos e concordância verbal",
      exercises: [
        {
          kind: "options",
          instruction: "Na frase 'Os alunos estudam para a prova', o verbo 'estudam' está concordando com:",
          options: [
            "O sujeito 'os alunos', no plural",
            "A palavra 'prova'",
            "Nada, verbos não concordam",
            "O substantivo 'alunos' no singular",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os verbos que indicam AÇÃO nas frases: 'O menino correu. Choveu forte ontem. Ela está feliz. Os pássaros cantam.'",
          items: [
            "correu",
            "choveu",
            "está",
            "cantam",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete os verbos concordando com o sujeito:",
          items: [
            "Eu __________ (brincar) todos os dias no parque.",
            "Nós __________ (estudar) português na escola.",
            "Elas __________ (cantar) na apresentação.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva três frases: uma com verbo de ação, uma com verbo de estado e uma com verbo de fenômeno da natureza (como chover, ventar, trovejar):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Acentuando palavras de uso frequente",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque as palavras que estão faltando acento gráfico:",
          items: [
            "sofa",
            "mesa",
            "musica",
            "cadeira",
            "arvore",
            "janela",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Reescreva cada palavra com o acento correto:",
          items: [
            "sofa → __________",
            "arvore → __________",
            "musica → __________",
          ],
        },
        {
          kind: "options",
          instruction: "Qual destas palavras está corretamente acentuada?",
          options: [
            "Café",
            "Cafe",
            "Cafè",
            "Caffé",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva quatro palavras de uso frequente que levam acento (como sofá, café, música, árvore) e forme uma frase com cada uma:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Identificando a sílaba tônica das palavras",
      exercises: [
        {
          kind: "options",
          instruction: "O que é a sílaba tônica de uma palavra?",
          options: [
            "A sílaba pronunciada com mais força",
            "A primeira sílaba da palavra sempre",
            "A última letra da palavra",
            "A sílaba que tem a letra A",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras cuja sílaba tônica é a ÚLTIMA sílaba (oxítonas):",
          items: [
            "café",
            "casa",
            "jacaré",
            "mesa",
            "sofá",
            "porta",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Divida a palavra em sílabas e indique qual é a tônica:",
          items: [
            "'boneca' se divide em bo-ne-ca. A sílaba tônica é __________.",
            "'lápis' se divide em lá-pis. A sílaba tônica é __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha quatro palavras de um texto que você leu recentemente. Divida cada uma em sílabas e indique qual é a sílaba tônica:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Relacionando acento gráfico e sílaba tônica",
      gradeYear: "4-ano",
      exercises: [
        {
          kind: "options",
          instruction: "Qual regra explica por que 'árvore' e 'lâmpada' recebem acento gráfico?",
          options: [
            "Porque a sílaba tônica é a antepenúltima, e todas as proparoxítonas são acentuadas",
            "Porque são palavras longas",
            "Porque começam com vogal",
            "Porque terminam em vogal",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os pares de palavras em que o acento gráfico MUDA o significado da palavra:",
          items: [
            "sabia e sabiá",
            "esta e está",
            "pode e pôde",
            "gato e pato",
            "bola e vela",
            "casa e mesa",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete explicando a diferença de sentido entre as palavras com e sem acento:",
          items: [
            "'Ele já sabia a resposta' (verbo saber, sem acento) é diferente de 'O __________ cantava na árvore' (o pássaro, com acento).",
            "Escrever 'Ela esta feliz' está errado; o certo é 'Ela __________ feliz', com acento, porque é o verbo estar.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas frases usando o par de palavras 'pode' e 'pôde', mostrando que o acento muda o tempo verbal (presente e passado):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Escrevendo palavras regulares contextuais (M/N, R/RR, O/U)",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com M ou N, lembrando que M vem antes de P e B:",
          items: [
            "ca__po (lugar de plantação)",
            "te__po (que passa no relógio)",
            "a__tes (que vem primeiro)",
            "ve__to (o ar que sopra)",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras escritas CORRETAMENTE quanto ao uso de M e N:",
          items: [
            "tampa",
            "tanto",
            "cambo",
            "campo",
            "vento",
            "vemto",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com R ou RR, prestando atenção ao som forte ou fraco entre vogais:",
          items: [
            "ca__o (veículo com motor)",
            "ca__o (valor alto, o contrário de barato)",
            "te__eno (pedaço de terra)",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva quatro palavras que usam R ou RR entre vogais mudando completamente o sentido (como 'careta' e 'carreta'), explicando o significado de cada uma:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Investigando palavras regulares morfológico-gramaticais",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os substantivos terminados em ICE, como 'planície' e 'cúmplice':",
          items: [
            "planície",
            "cúmplice",
            "cadeira",
            "índice",
            "apêndice",
            "janela",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com a terminação OSO ou OSA, usada em adjetivos que indicam 'cheio de':",
          items: [
            "Um dia cheio de chuva é um dia chuv__________.",
            "Uma pessoa cheia de carinho é carinh__________.",
          ],
        },
        {
          kind: "options",
          instruction: "Verbos como 'quis' têm um 'parente' terminado em ISSE no passado (se eu quisesse). Qual destas palavras segue esse mesmo padrão?",
          options: [
            "Fizesse (de fazer)",
            "Gostava (de gostar)",
            "Comendo (de comer)",
            "Estudar (infinitivo)",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas palavras terminadas em EZA (como 'beleza', formada a partir de 'belo') e explique de qual palavra elas vieram:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Escrevendo palavras com flexões em ÃO/AM e coletivos",
      exercises: [
        {
          kind: "options",
          instruction: "Na frase 'Eles cantaram a música toda', por que 'cantaram' termina em AM e não em ÃO?",
          options: [
            "Porque é um verbo no passado, na 3ª pessoa do plural (eles cantaram)",
            "Porque é um substantivo",
            "Porque não existe regra",
            "Porque é uma palavra estrangeira",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com ÃO ou AM, conforme o sentido da frase:",
          items: [
            "Os pássaros voar__________ para longe. (verbo no passado)",
            "Eles com__________ pão no café da manhã. (verbo comer no passado)",
            "Amanhã eles vir__________ à escola. (verbo vir no futuro)",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os substantivos COLETIVOS corretos:",
          items: [
            "cardume (peixes)",
            "matilha (cães)",
            "enxame (abelhas)",
            "gato (animal)",
            "rebanho (ovelhas)",
            "livro (objeto)",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva três frases usando substantivos coletivos diferentes (cardume, matilha, enxame, rebanho, alcateia...):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Escrevendo palavras irregulares com a letra X",
      exercises: [
        {
          kind: "word-select",
          instruction: "A letra X pode ter o som de CH, Z, SS ou KS. Marque as palavras em que o X tem som de CH:",
          items: [
            "xícara",
            "exame",
            "táxi",
            "peixe",
            "próximo",
            "caixa",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com X ou CH, conforme o som da palavra:",
          items: [
            "__________uva (que cai do céu, som de CH)",
            "__________arope (remédio líquido, som de CH)",
          ],
        },
        {
          kind: "options",
          instruction: "Na palavra 'exame', o X tem som de:",
          options: [
            "Z",
            "CH",
            "SS",
            "KS",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva quatro palavras com X, cada uma com um som diferente (CH, Z, SS, KS), e registre-as para consultar depois:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Dividindo sílabas corretamente no final da linha",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a forma CORRETA de dividir a palavra 'carro' no final da linha?",
          options: [
            "car-ro",
            "ca-rro",
            "carr-o",
            "c-arro",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as divisões silábicas CORRETAS para translineação:",
          items: [
            "ca-sa",
            "pas-sa-ro",
            "pás-sa-ro",
            "bo-la",
            "flo-r",
            "ár-vo-re",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Divida corretamente as palavras para translineação, sem deixar uma letra sozinha:",
          items: [
            "'ideia' divide-se em __________.",
            "'água' divide-se em __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva quatro palavras de mais de três sílabas e mostre como cada uma pode ser dividida corretamente no final da linha:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Rodas de leitura de contos, mitos, lendas e fábulas de diferentes culturas",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a principal diferença entre um mito e uma fábula?",
          options: [
            "O mito explica a origem do mundo ou da natureza envolvendo deuses e seres sobrenaturais; a fábula usa animais para ensinar uma lição de moral",
            "O mito é sempre mais curto que a fábula",
            "A fábula não tem nenhum tipo de personagem",
            "Não existe diferença entre os dois gêneros",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque apenas as lendas que fazem parte do folclore brasileiro:",
          items: [
            "Curupira",
            "Cinderela",
            "Saci-Pererê",
            "Chapeuzinho Vermelho",
            "Boitatá",
            "Iara",
          ],
        },
        {
          kind: "lines",
          instruction: "Depois da roda de leitura, escolha um conto, mito, lenda ou fábula que você ouviu e conte, com suas palavras, o que mais chamou sua atenção nele:",
          lines: 5,
          note: "Diga também de que cultura ou região essa história pode ter vindo.",
        },
        {
          kind: "draw",
          instruction: "Desenhe a cena que você imaginou como a mais marcante da história ouvida na roda de leitura.",
          note: "Capriche nos detalhes dos personagens e do cenário.",
        },
      ],
    },
    {
      theme: "Discutindo organização, estilo e ilustração em textos literários",
      exercises: [
        {
          kind: "options",
          instruction: "Quando um narrador \"conversa\" diretamente com o leitor, usando frases como \"Você não vai acreditar no que aconteceu depois\", isso é um recurso de:",
          options: [
            "Estilo do autor, que busca aproximar o leitor da narrativa",
            "Erro de digitação do livro",
            "Regra obrigatória de todo texto literário",
            "Falta de revisão do texto",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a relação entre texto e ilustração em um livro:",
          items: [
            "A ilustração pode mostrar um detalhe que o texto escrito não ___________.",
            "Quando a imagem contradiz o que o texto diz, isso pode criar um efeito de ___________ ou humor.",
            "Em um livro sem nenhuma ilustração, o leitor precisa imaginar sozinho a ___________ das cenas.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um livro ilustrado que você já leu e explique como as imagens ajudaram (ou não) a entender melhor a história:",
          lines: 5,
        },
        {
          kind: "draw",
          instruction: "Escolha um trecho de um texto literário lido em sala e crie uma ilustração para ele, pensando em como ela vai dialogar com as palavras do autor.",
        },
      ],
    },
    {
      theme: "Comparando registros literário, publicitário e jornalístico",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque as características típicas da linguagem publicitária:",
          items: [
            "Frases curtas e de efeito",
            "Linguagem neutra e impessoal",
            "Uso de imperativo (\"compre já\", \"experimente\")",
            "Data e local do fato em destaque",
            "Apelo às emoções do leitor",
          ],
        },
        {
          kind: "options",
          instruction: "Um texto que começa com \"São Paulo, 14 de agosto — Uma pesquisa divulgada ontem mostrou que...\" pertence a qual registro?",
          options: [
            "Registro jornalístico, marcado por data, local e informação verificável",
            "Registro literário, por causa da beleza das palavras",
            "Registro publicitário, porque tenta vender algo",
            "Nenhum registro específico",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete indicando o registro (literário, publicitário ou jornalístico) mais provável de cada trecho:",
          items: [
            "\"Era uma vez, num reino distante, uma menina que conversava com as estrelas.\" — registro ___________.",
            "\"Novo suco vem com 50% mais vitamina C. Peça já o seu!\" — registro ___________.",
            "\"O prefeito anunciou nesta terça-feira um novo plano de mobilidade urbana.\" — registro ___________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um mesmo assunto (por exemplo, uma chuva forte na cidade) e escreva duas versões bem curtas dele: uma como notícia de jornal e outra como início de um conto:",
          lines: 6,
        },
      ],
    },
    {
      theme: "Leitura programada de uma obra literária mais extensa",
      exercises: [
        {
          kind: "lines",
          instruction: "Depois de ler o capítulo combinado para hoje, resuma o que aconteceu, sem contar o final da história:",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "Até agora, qual personagem da obra mais chamou sua atenção?",
          options: [
            "O personagem principal",
            "Um personagem secundário",
            "O narrador",
            "Ainda não consegui escolher",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com suas impressões sobre a leitura de hoje:",
          items: [
            "O trecho que mais me surpreendeu foi quando ___________.",
            "Eu acho que, no próximo capítulo, vai acontecer ___________.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cena do capítulo que você leu hoje, mostrando onde ela se passa e quem está presente.",
        },
      ],
    },
    {
      theme: "Letras de canções e sua relação com o poema",
      exercises: [
        {
          kind: "options",
          instruction: "O que diferencia uma letra de canção de um poema escrito para ser lido?",
          options: [
            "A letra de canção é pensada para ser cantada, com melodia e ritmo musical, enquanto o poema pode existir só na página",
            "Toda letra de canção é automaticamente um poema",
            "Poemas nunca têm rima",
            "Não existe nenhuma diferença entre os dois",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos que costumam aparecer tanto em poemas quanto em letras de canções:",
          items: [
            "Rima",
            "Ritmo",
            "Refrão obrigatório",
            "Repetição de versos",
            "Linguagem figurada (metáforas, comparações)",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em uma canção que você conhece bem (sem copiar a letra). Explique, com suas palavras, sobre o que ela fala e que sentimento ela passa:",
          lines: 5,
          note: "Não copie trechos da letra original — conte com suas próprias palavras.",
        },
        {
          kind: "lines",
          instruction: "Escreva uma pequena estrofe (4 versos) que poderia virar letra de canção, sobre um tema à sua escolha:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Textos reivindicatórios e representações sociais em artigos e relatos históricos",
      exercises: [
        {
          kind: "options",
          instruction: "Um texto reivindicatório é aquele que:",
          options: [
            "Defende um direito ou pede uma mudança em nome de um grupo de pessoas",
            "Apenas conta uma história inventada",
            "Serve só para vender um produto",
            "Não tem nenhum objetivo definido",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete pensando em textos que reivindicam direitos:",
          items: [
            "Um grupo pode reivindicar acesso a ___________ público de qualidade, como saúde ou educação.",
            "Ao ler um relato histórico sobre um movimento social, é importante identificar quem ___________ e por quê.",
          ],
        },
        {
          kind: "lines",
          instruction: "Se você pudesse escrever um pequeno texto reivindicando uma mudança para a sua escola ou seu bairro, o que pediria e por quê?",
          lines: 6,
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que costumam aparecer em textos que defendem direitos e reivindicações:",
          items: [
            "direito",
            "reivindicar",
            "receita",
            "igualdade",
            "cardápio",
            "justiça",
          ],
        },
      ],
    },
    {
      theme: "Relatos históricos e divulgação científica sobre diferentes culturas",
      exercises: [
        {
          kind: "options",
          instruction: "Um artigo de divulgação científica tem como principal objetivo:",
          options: [
            "Explicar de forma clara um conhecimento científico para o público em geral",
            "Contar uma história inventada com final feliz",
            "Vender um produto específico",
            "Registrar uma opinião pessoal sem nenhuma comprovação",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com as características de um relato histórico:",
          items: [
            "O relato histórico apresenta fatos ordenados no ___________, geralmente com datas.",
            "Diferente de um conto, o relato histórico busca ser ___________ aos fatos reais.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma cultura diferente da sua (indígena, africana, asiática, europeia, entre outras) e escreva o que você já sabe ou gostaria de aprender sobre ela:",
          lines: 5,
        },
        {
          kind: "draw",
          instruction: "Escolha um costume, festa ou tradição de uma cultura diferente da sua e desenhe uma cena que a represente.",
        },
      ],
    },
    {
      theme: "Efeitos de sentido em quadrinhos, charges e tiras de diferentes culturas",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os recursos que costumam aparecer em uma HQ ou tira para criar efeitos de sentido:",
          items: [
            "Balões de fala e pensamento",
            "Onomatopeias (BUM, CRAC)",
            "Linhas de movimento",
            "Rodapé com data completa",
            "Expressões faciais exageradas",
          ],
        },
        {
          kind: "options",
          instruction: "Uma charge geralmente tem como objetivo principal:",
          options: [
            "Criticar, de forma bem-humorada, um fato atual ou uma figura pública",
            "Contar uma receita de cozinha",
            "Explicar uma fórmula de matemática",
            "Anunciar um produto novo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete explicando o efeito de alguns recursos usados em quadrinhos:",
          items: [
            "Um balão com bordas pontiagudas costuma indicar que o personagem está ___________ ou gritando.",
            "A onomatopeia \"TOC TOC\" representa o som de ___________.",
          ],
        },
        {
          kind: "draw",
          instruction: "Crie uma pequena tira de 3 quadrinhos contando uma situação engraçada do seu dia a dia, usando balão de fala e pelo menos uma onomatopeia.",
        },
      ],
    },
    {
      theme: "Multimodalidade em textos de projetos interdisciplinares",
      gradeYear: "5-ano",
      exercises: [
        {
          kind: "options",
          instruction: "Quando dizemos que um texto é \"multimodal\", estamos falando de um texto que:",
          options: [
            "Combina diferentes linguagens, como palavras, imagens, gráficos, cores e diagramas, para construir sentido",
            "É escrito em mais de um idioma ao mesmo tempo",
            "Só pode ser lido no computador",
            "Não tem nenhuma imagem",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos que podem tornar um cartaz de projeto interdisciplinar (por exemplo, sobre reciclagem) multimodal:",
          items: [
            "Gráfico de barras",
            "Foto legendada",
            "Texto corrido apenas em preto e branco",
            "Ícones e setas",
            "Mapa com destaques coloridos",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em um cartaz ou apresentação de um projeto de Ciências ou Geografia que você já viu ou fez. Explique como as imagens e os gráficos ajudaram a entender o texto:",
          lines: 5,
        },
        {
          kind: "draw",
          instruction: "Escolha um tema de outra área (Ciências, História ou Geografia) e esboce um cartaz combinando texto curto, um gráfico ou tabela simples e uma imagem.",
        },
      ],
    },
    {
      theme: "Conhecendo trechos de textos da esfera jurídica",
      exercises: [
        {
          kind: "options",
          instruction: "O Estatuto da Criança e do Adolescente (ECA) é um exemplo de texto da esfera:",
          options: [
            "Jurídica, porque estabelece leis e direitos",
            "Literária, porque conta uma história",
            "Publicitária, porque vende um produto",
            "Jornalística, porque só informa notícias do dia",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com palavras comuns em textos jurídicos:",
          items: [
            "Um texto jurídico costuma usar a palavra ___________ para indicar algo que é obrigatório por lei.",
            "O ___________ é a pessoa ou instituição responsável por garantir que uma lei seja cumprida.",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em uma regra da sua escola que poderia virar uma \"lei\" para todos os alunos seguirem. Escreva essa regra explicando por que ela é importante:",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que costumam aparecer em textos da esfera jurídica (leis, estatutos, regimentos):",
          items: [
            "direito",
            "artigo",
            "receita",
            "dever",
            "personagem",
            "cumprir",
          ],
        },
      ],
    },
    {
      theme: "Comparando textos publicitários sobre o mesmo produto",
      exercises: [
        {
          kind: "lines",
          instruction: "Imagine dois anúncios diferentes para o mesmo tênis de corrida: um destaca o preço baixo e outro destaca a qualidade. Escreva uma frase de efeito para cada um:",
          lines: 4,
        },
        {
          kind: "word-select",
          instruction: "Marque os recursos que um anúncio pode usar para convencer o consumidor:",
          items: [
            "Depoimento de cliente satisfeito",
            "Promessa de desconto",
            "Uso de cores chamativas",
            "Data de nascimento do fabricante",
            "Frase de efeito ou slogan",
          ],
        },
        {
          kind: "options",
          instruction: "Ao comparar dois anúncios do mesmo produto, o que é importante observar?",
          options: [
            "Que argumento cada um usa para convencer e a quem cada anúncio parece se dirigir",
            "Apenas o tamanho da letra usada",
            "Apenas a cor de fundo do anúncio",
            "Nada, porque todo anúncio é igual",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete comparando dois tipos de argumento publicitário:",
          items: [
            "Um anúncio que mostra um cientista falando sobre o produto usa o argumento de ___________.",
            "Um anúncio que mostra várias pessoas felizes usando o produto usa o argumento de ___________ (fazer o consumidor se sentir parte de um grupo).",
          ],
        },
      ],
    },
    {
      theme: "Estratégias de releitura: grifar, anotar e consultar dicionário",
      exercises: [
        {
          kind: "options",
          instruction: "Para que serve grifar uma palavra ou trecho durante a releitura de um texto?",
          options: [
            "Para marcar algo importante, uma dúvida ou uma ideia que merece atenção",
            "Para deixar o texto mais bonito",
            "Para apagar aquele trecho da memória",
            "Não serve para nada na leitura",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com a estratégia de leitura mais adequada para cada situação:",
          items: [
            "Quando encontro uma palavra desconhecida, uma boa estratégia é ___________ o significado no dicionário.",
            "Quando um trecho do texto gera dúvida, posso ___________ uma anotação na margem explicando minha dúvida.",
          ],
        },
        {
          kind: "lines",
          instruction: "Releia um texto que você já leu antes (do livro didático ou paradidático). Grife uma palavra desconhecida, procure no dicionário e escreva o significado com suas palavras:",
          lines: 4,
        },
        {
          kind: "word-select",
          instruction: "Marque as ações que fazem parte de uma boa estratégia de releitura:",
          items: [
            "Grifar trechos importantes",
            "Anotar dúvidas na margem",
            "Consultar o dicionário quando necessário",
            "Ler só uma vez e nunca voltar ao texto",
            "Circular palavras desconhecidas",
          ],
        },
      ],
    },
    {
      theme: "Pesquisando em várias fontes para estudar temas das áreas de conhecimento",
      exercises: [
        {
          kind: "options",
          instruction: "Por que é importante pesquisar um mesmo tema em mais de uma fonte (livro, site, revista)?",
          options: [
            "Porque diferentes fontes podem trazer informações complementares e ajudar a confirmar se um dado é confiável",
            "Porque copiar de uma fonte só já é o suficiente",
            "Porque quanto mais fontes, mais bonito fica o trabalho, mesmo sem ler nada",
            "Não é importante, uma fonte já basta sempre",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as fontes de pesquisa confiáveis para um trabalho escolar:",
          items: [
            "Enciclopédia impressa",
            "Site de uma universidade ou instituição de pesquisa",
            "Mensagem sem autor que circula em grupos de família",
            "Reportagem de um jornal conhecido",
            "Documentário sobre o tema",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o passo correto de uma pesquisa escolar:",
          items: [
            "Antes de escrever, é preciso ___________ as informações encontradas em diferentes fontes.",
            "Ao usar uma informação de outra pessoa, devo escrever com minhas próprias ___________, e não copiar.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um tema de Ciências ou História que você está estudando. Escreva duas informações sobre ele que você descobriria em fontes diferentes (por exemplo, um livro e um documentário):",
          lines: 5,
        },
      ],
    },
    {
      theme: "Reescrevendo textos narrativos respeitando o texto-fonte",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um conto curto lido em sala. Reescreva o início da história com suas próprias palavras, mantendo os fatos principais do texto-fonte:",
          lines: 6,
        },
        {
          kind: "options",
          instruction: "Ao reescrever um conto, o que NÃO se deve mudar?",
          options: [
            "Os fatos principais e a ordem em que eles acontecem na história original",
            "As palavras exatas do autor, palavra por palavra",
            "O nome de quem está reescrevendo o texto",
            "O tamanho das letras usadas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre o processo de reescrita de um texto narrativo:",
          items: [
            "Antes de reescrever, é importante ___________ o texto original com atenção.",
            "Depois de escrever, devo ___________ meu texto para corrigir erros e melhorar frases.",
          ],
        },
        {
          kind: "draw",
          instruction: "Depois de reescrever o trecho do conto, desenhe a cena principal da sua versão.",
        },
      ],
    },
    {
      theme: "Produzindo contos com coerência e coesão",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o início de um conto (situação inicial e apresentação do personagem principal), pensando em um conflito que vai surgir na história:",
          lines: 6,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases usando conectivos que ajudam a dar coesão a uma narrativa:",
          items: [
            "No início da manhã, o menino saiu de casa. ___________, encontrou um bilhete misterioso na calçada.",
            "Ela queria muito ir à festa, ___________ precisava terminar a tarefa antes.",
          ],
        },
        {
          kind: "options",
          instruction: "O que significa dizer que um conto tem \"coerência\"?",
          options: [
            "Que as ideias e os fatos do texto fazem sentido entre si, sem contradições",
            "Que o texto tem muitas figuras de linguagem",
            "Que o conto é sempre engraçado",
            "Que o texto é curto",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o personagem principal do conto que você está criando, mostrando como ele é fisicamente e algum detalhe de sua personalidade.",
        },
      ],
    },
    {
      theme: "Criando quadrinhas e novas estrofes para poemas conhecidos",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva uma quadrinha (4 versos, com rima) sobre um tema à sua escolha, como a escola, um animal de estimação ou uma estação do ano:",
          lines: 4,
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que rimam com \"lua\":",
          items: [
            "rua",
            "sala",
            "nua",
            "chuva",
            "chuvarada",
            "crua",
          ],
        },
        {
          kind: "options",
          instruction: "Ao criar uma nova estrofe para um poema já existente, o que é importante manter?",
          options: [
            "O ritmo, o tema e, se possível, o padrão de rima do poema original",
            "Nada, pode mudar tudo completamente",
            "Apenas o título do poema",
            "Só a quantidade de letras",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete o verso mantendo a rima com a palavra anterior:",
          items: [
            "No jardim da minha casa / tem um pé de ___________ (rima com \"rosa\").",
            "O gato dorme na esteira / sonhando com a ___________ (rima com \"lua cheia\").",
          ],
        },
      ],
    },
    {
      theme: "Escrevendo verbetes de curiosidade sobre temas estudados",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um animal, planta ou fenômeno da natureza estudado em Ciências e escreva um verbete de curiosidade sobre ele, em linguagem clara e objetiva:",
          lines: 6,
        },
        {
          kind: "options",
          instruction: "Um verbete de curiosidade deve ser escrito, de preferência, em qual linguagem?",
          options: [
            "Linguagem clara, objetiva e informativa, sem opiniões pessoais",
            "Linguagem cheia de gírias e emojis",
            "Linguagem poética, com muitas rimas",
            "Linguagem exclusivamente técnica e difícil",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com as partes que costumam aparecer em um verbete:",
          items: [
            "O verbete costuma começar apresentando ___________ do assunto (nome, o que é).",
            "Depois, o verbete traz uma ou mais informações ___________ e curiosas sobre o tema.",
          ],
        },
        {
          kind: "draw",
          instruction: "Ilustre o verbete que você escreveu, desenhando o animal, planta ou fenômeno descrito.",
        },
      ],
    },
    {
      theme: "Produzindo um artigo de divulgação científica sobre tema de interesse da comunidade",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um tema de interesse da sua comunidade (por exemplo, coleta seletiva, dengue ou economia de água) e escreva o parágrafo de abertura de um artigo de divulgação científica sobre ele:",
          lines: 6,
        },
        {
          kind: "options",
          instruction: "Qual é o principal objetivo de um artigo de divulgação científica?",
          options: [
            "Explicar um conhecimento científico de forma acessível para o público em geral",
            "Convencer o leitor a comprar um produto",
            "Contar uma história de ficção baseada em fatos científicos",
            "Criticar uma pessoa pública",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com elementos que costumam aparecer em um artigo de divulgação científica:",
          items: [
            "O artigo costuma apresentar ___________ (pesquisas, dados) que sustentam a informação.",
            "É comum o artigo terminar sugerindo ___________ práticas para o leitor sobre o tema.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que costumam aparecer em artigos de divulgação científica:",
          items: [
            "pesquisa",
            "estudo mostra",
            "era uma vez",
            "dados indicam",
            "personagem",
            "especialistas afirmam",
          ],
        },
      ],
    },
    {
      theme: "Escrevendo comentários opinativos sobre temas atuais",
      exercises: [
        {
          kind: "lines",
          instruction: "Leia (ou lembre-se de) uma notícia atual que você conhece e escreva um comentário opinativo curto sobre ela, dizendo o que você pensa e por quê:",
          lines: 6,
        },
        {
          kind: "options",
          instruction: "Um comentário opinativo se diferencia de uma notícia porque:",
          options: [
            "Expressa o ponto de vista de quem escreve, com argumentos, e não apenas relata fatos",
            "Nunca pode ter argumentos",
            "É sempre mais longo que uma notícia",
            "Não pode falar sobre temas atuais",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com expressões usadas para dar opinião em um comentário:",
          items: [
            "\"Na minha ___________, essa decisão foi importante para a cidade.\"",
            "\"___________ eu, esse assunto deveria ser mais discutido nas escolas.\"",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as expressões que servem para introduzir uma opinião em um texto:",
          items: [
            "Eu acho que",
            "Em primeiro lugar, o fato ocorreu",
            "Na minha opinião",
            "Segundo dados do IBGE",
            "Acredito que",
          ],
        },
      ],
    },
    {
      theme: "Produzindo cartas argumentativas de leitor",
      exercises: [
        {
          kind: "lines",
          instruction: "Imagine que você leu uma reportagem sobre a falta de praças arborizadas no seu bairro. Escreva o início de uma carta de leitor para o jornal, expondo sua opinião sobre o assunto:",
          lines: 6,
        },
        {
          kind: "options",
          instruction: "Uma carta argumentativa de leitor tem como principal objetivo:",
          options: [
            "Defender um ponto de vista sobre um assunto lido, apresentando argumentos",
            "Pedir informações pessoais ao jornal",
            "Contar uma história de ficção para o jornal publicar",
            "Divulgar um produto à venda",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as partes de uma carta argumentativa de leitor:",
          items: [
            "No início, o autor costuma citar a ___________ ou o assunto que motivou a carta.",
            "No final, o autor pode propor uma ___________ ou pedir uma providência sobre o problema.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos que geralmente aparecem em uma carta argumentativa de leitor:",
          items: [
            "Local e data",
            "Saudação inicial (\"Prezados\", \"Caro editor\")",
            "Argumentos que sustentam a opinião",
            "Receita de um prato",
            "Assinatura do autor",
          ],
        },
      ],
    },
    {
      theme: "Entrevistando especialistas a partir de roteiro pré-elaborado",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um especialista imaginário (por exemplo, um veterinário, um bombeiro ou um cientista) e escreva 4 perguntas para uma entrevista com essa pessoa sobre sua área de trabalho:",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "Por que é importante preparar um roteiro antes de fazer uma entrevista?",
          options: [
            "Para organizar as perguntas com antecedência e não esquecer nenhum ponto importante",
            "Porque não é preciso ouvir com atenção as respostas",
            "Porque assim não é necessário anotar nada",
            "O roteiro não tem nenhuma utilidade real",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com boas práticas de uma entrevista:",
          items: [
            "Durante a entrevista, é importante ___________ com atenção antes de fazer a próxima pergunta.",
            "Se a resposta do entrevistado gerar dúvida, é possível fazer um ___________ para esclarecer melhor.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as atitudes adequadas para quem está entrevistando um especialista:",
          items: [
            "Ouvir com atenção",
            "Interromper o entrevistado o tempo todo",
            "Anotar as respostas importantes",
            "Fazer perguntas relacionadas ao tema combinado",
            "Agradecer ao final",
          ],
        },
      ],
    },
    {
      theme: "Apresentando ideias em diferentes situações comunicativas orais",
      exercises: [
        {
          kind: "options",
          instruction: "Em uma roda de leitores, qual é a postura mais adequada ao apresentar sua ideia sobre um livro?",
          options: [
            "Falar com clareza, olhando para o grupo, e ouvir também as ideias dos colegas",
            "Falar bem baixo e sem olhar para ninguém",
            "Não deixar nenhum colega falar depois de você",
            "Ler o livro inteiro em voz alta para o grupo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete pensando em diferentes situações comunicativas orais:",
          items: [
            "Em uma roda de jornal, cada aluno apresenta uma ___________ que leu ou ouviu durante a semana.",
            "Em uma roda de conversa, é importante respeitar a ___________ de cada colega para falar.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um assunto que você gostaria de apresentar em uma roda de conversa da sua turma. Escreva um pequeno roteiro do que você diria:",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque as atitudes importantes para uma boa apresentação oral em sala:",
          items: [
            "Falar com voz clara",
            "Olhar para os colegas",
            "Ficar de costas para a turma",
            "Respeitar a vez de cada um falar",
            "Organizar as ideias antes de falar",
          ],
        },
      ],
    },
    {
      theme: "Expondo temas estudados com apoio de esquemas e notas",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um tema estudado recentemente em Ciências, História ou Geografia. Escreva 4 tópicos (notas) que você usaria como apoio para expor esse tema para a turma:",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "Qual é a principal vantagem de usar um esquema ou notas para uma exposição oral?",
          options: [
            "Ajuda a organizar as ideias e lembrar dos pontos principais na hora de falar",
            "Serve apenas para deixar o caderno mais bonito",
            "Não tem nenhuma vantagem, é melhor decorar tudo de cor",
            "Substitui totalmente a necessidade de estudar o tema",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a preparação de uma exposição oral com apoio de esquema:",
          items: [
            "No esquema, é útil destacar as ___________ mais importantes do tema, sem escrever frases inteiras.",
            "Durante a apresentação, é possível fazer ___________ para o público e depois comentar as respostas.",
          ],
        },
        {
          kind: "draw",
          instruction: "Crie um pequeno esquema (com setas, palavras-chave e desenhos) sobre um tema estudado, como se fosse usar esse esquema para apresentar à turma.",
        },
      ],
    },
    {
      theme: "Relatando oralmente experiências vividas",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva um roteiro para contar oralmente uma experiência marcante que você viveu (uma viagem, um passeio, um aprendizado novo), organizando o começo, o meio e o fim:",
          lines: 6,
        },
        {
          kind: "options",
          instruction: "Ao relatar oralmente uma experiência vivida, é importante:",
          options: [
            "Organizar os fatos na ordem em que aconteceram e destacar o que foi mais importante",
            "Inventar fatos que nunca aconteceram",
            "Falar sem nenhuma ordem, misturando tudo",
            "Evitar contar como você se sentiu durante a experiência",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete pensando na organização de um relato oral:",
          items: [
            "No início do relato, é comum situar quando e ___________ a experiência aconteceu.",
            "No final, é interessante contar como você se ___________ depois de viver essa experiência.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as expressões úteis para organizar um relato oral no tempo:",
          items: [
            "Primeiro",
            "Depois",
            "Nunca aconteceu nada",
            "Em seguida",
            "Por fim",
          ],
        },
      ],
    },
    {
      theme: "Debatendo temas atuais controversos com base em pesquisa",
      exercises: [
        {
          kind: "options",
          instruction: "Em um debate sobre um tema controverso, o que é fundamental fazer antes de defender sua opinião?",
          options: [
            "Pesquisar o assunto em fontes confiáveis para embasar os argumentos",
            "Falar o que vier à cabeça, sem se preparar",
            "Copiar a opinião de outra pessoa sem entender",
            "Evitar ouvir os argumentos contrários",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete pensando em regras importantes de um debate escolar:",
          items: [
            "Durante o debate, é preciso respeitar a ___________ de cada colega para falar.",
            "Mesmo discordando de alguém, é importante ___________ o ponto de vista do outro antes de responder.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um tema atual controverso (por exemplo, uso de celular na escola) e escreva dois argumentos: um a favor e um contra:",
          lines: 6,
        },
        {
          kind: "word-select",
          instruction: "Marque as atitudes adequadas para participar de um debate de forma respeitosa:",
          items: [
            "Ouvir o argumento do colega até o fim",
            "Gritar para impedir o outro de falar",
            "Justificar sua opinião com dados ou exemplos",
            "Xingar quem pensa diferente",
            "Aceitar mudar de ideia se o argumento for bom",
          ],
        },
      ],
    },
    {
      theme: "Registrando informações durante situações de escuta oral",
      exercises: [
        {
          kind: "options",
          instruction: "Quando você está ouvindo a apresentação de um colega e quer guardar as informações mais importantes, o que é mais eficiente fazer?",
          options: [
            "Anotar palavras-chave e datas enquanto ouve",
            "Tentar escrever cada palavra dita pelo colega",
            "Esperar terminar tudo para tentar lembrar de cor",
            "Desenhar sem prestar atenção ao que é dito",
          ],
        },
        {
          kind: "lines",
          instruction: "A professora vai ler em voz alta um pequeno texto informativo. Enquanto escuta, anote em tópicos as informações mais importantes (quem, o quê, quando, onde):",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre boas estratégias de registro durante a escuta:",
          items: [
            "Ao ouvir uma exposição, é útil anotar apenas as palavras-__________, não a frase inteira.",
            "Depois de registrar as notas, é importante __________ o que foi anotado para não esquecer o sentido.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os recursos que podem ajudar a registrar informações durante uma escuta oral:",
          items: [
            "esquema com setas",
            "caderno de anotações",
            "celular tocando música",
            "foto do quadro",
            "vídeo da apresentação",
            "conversa paralela",
          ],
        },
      ],
    },
    {
      theme: "Comparando gêneros textuais e suas características específicas",
      exercises: [
        {
          kind: "options",
          instruction: "Uma notícia de jornal e uma receita culinária são gêneros textuais diferentes. O que diferencia esses dois gêneros?",
          options: [
            "A finalidade e a forma como as informações são organizadas",
            "Somente o tamanho do texto",
            "Apenas a cor do papel em que são impressos",
            "Nenhuma diferença, são o mesmo gênero",
          ],
        },
        {
          kind: "word-select",
          instruction: "Leia os nomes de gêneros textuais e marque os que normalmente têm instruções organizadas em passos numerados:",
          items: [
            "receita culinária",
            "poema",
            "manual de instruções",
            "carta pessoal",
            "bula de remédio",
            "conto de fantasia",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Compare dois gêneros textuais completando as frases:",
          items: [
            "Uma notícia tem a função de __________, enquanto um poema tem a função de __________.",
            "Um convite costuma trazer as informações de __________, __________ e __________ do evento.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha dois gêneros textuais que você conhece (por exemplo: bilhete e reportagem) e escreva três diferenças entre eles:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Evitando repetições desnecessárias no texto",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Reescreva as frases substituindo a palavra repetida por um sinônimo, pronome ou hiperônimo adequado:",
          items: [
            "Marina foi ao mercado. Marina comprou frutas e verduras. → Marina foi ao mercado. __________ comprou frutas e verduras.",
            "O cachorro correu no parque. O cachorro latiu para os pássaros. → O cachorro correu no parque. __________ latiu para os pássaros.",
            "Pedro e Ana estudaram juntos. Pedro e Ana tiraram boas notas. → Pedro e Ana estudaram juntos. __________ tiraram boas notas.",
          ],
        },
        {
          kind: "options",
          instruction: "No trecho 'Comprei uma maçã, uma banana e uma pera. Depois lavei as frutas', a palavra 'frutas' foi usada para:",
          options: [
            "Evitar repetir 'maçã, banana e pera' (hiperônimo)",
            "Confundir o leitor",
            "Trocar de assunto",
            "Indicar que são frutas estragadas",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que poderiam substituir 'a menina' em um texto para evitar repetição, sem mudar o sentido:",
          items: [
            "ela",
            "a garota",
            "a estudante",
            "o menino",
            "aquela criança",
            "o carro",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno parágrafo (3 a 4 frases) sobre um animal de estimação, tomando cuidado para não repetir o nome do animal em todas as frases — use pronomes e sinônimos:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Utilizando organizadores textuais no gênero produzido",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os organizadores textuais que indicam SEQUÊNCIA de tempo ou de passos:",
          items: [
            "primeiro",
            "por exemplo",
            "em seguida",
            "além disso",
            "por fim",
            "ou seja",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete o texto instrucional com organizadores textuais adequados:",
          items: [
            "__________, separe os ingredientes.",
            "__________, misture tudo em uma tigela.",
            "__________, leve ao forno por 30 minutos.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual organizador textual é mais adequado para introduzir uma explicação ou justificativa?",
          options: [
            "Porque / pois",
            "Depois",
            "Em primeiro lugar",
            "Finalmente",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno texto explicando como se escova os dentes corretamente, usando pelo menos três organizadores textuais (primeiro, depois, por fim, entre outros):",
          lines: 5,
        },
      ],
    },
    {
      theme: "Mantendo o tempo verbal para garantir a coesão do texto",
      exercises: [
        {
          kind: "options",
          instruction: "Em um texto que narra um fato do passado, qual é o problema da frase: 'Ontem eu fui ao parque e brinco com meus amigos'?",
          options: [
            "Há uma mistura indevida entre passado e presente",
            "Não há nenhum problema",
            "Falta pontuação",
            "A frase está no futuro",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Reescreva as frases mantendo o mesmo tempo verbal (passado) do começo ao fim:",
          items: [
            "Ontem, Lucas acordou cedo, __________ (tomar) café e __________ (ir) para a escola.",
            "No fim de semana, nós __________ (visitar) a vovó e __________ (comer) bolo de chocolate.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os verbos que estão no mesmo tempo verbal (pretérito perfeito) que 'brincou':",
          items: [
            "correu",
            "estudou",
            "brinca",
            "conversou",
            "vou",
            "pulou",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno parágrafo contando o que você fez ontem, mantendo todos os verbos no passado:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Articulando as partes do texto de forma coerente",
      exercises: [
        {
          kind: "options",
          instruction: "Um texto é coerente quando:",
          options: [
            "Suas partes se conectam e fazem sentido umas com as outras",
            "Tem muitas figuras coloridas",
            "É escrito em letra bonita",
            "Usa palavras difíceis",
          ],
        },
        {
          kind: "lines",
          instruction: "Leia as frases embaralhadas abaixo e reescreva-as na ordem correta, formando um texto coerente: 'Depois, ele regou a planta todos os dias.' / 'Por fim, a plantinha floresceu.' / 'João plantou uma semente no jardim.'",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete o texto de forma que as partes façam sentido entre si:",
          items: [
            "Estava chovendo muito, por isso eu __________.",
            "Ana estudou a semana toda, então ela __________ na prova.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os problemas que podem tornar um texto incoerente:",
          items: [
            "ideias contraditórias sem explicação",
            "falta de ligação entre as frases",
            "uso de parágrafos",
            "informação que não tem relação com o assunto",
            "título adequado",
            "conclusão que combina com o texto",
          ],
        },
      ],
    },
    {
      theme: "Usando a pontuação medial e final para dar sentido ao texto",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os sinais de pontuação que são considerados pontuação FINAL (terminam uma frase):",
          items: [
            "ponto final",
            "vírgula",
            "ponto de interrogação",
            "ponto e vírgula",
            "ponto de exclamação",
            "dois-pontos",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com o sinal de pontuação final adequado ao sentido:",
          items: [
            "Que susto eu levei__________",
            "Você já terminou a lição__________",
            "Hoje o dia está lindo__________",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a função da vírgula em: 'Comprei maçã, banana, pera e uva'?",
          options: [
            "Separar os itens de uma enumeração",
            "Terminar a frase",
            "Indicar uma pergunta",
            "Indicar surpresa",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva quatro frases sobre o seu dia, usando pelo menos uma vírgula, um ponto de interrogação e um ponto de exclamação:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Analisando as escolhas de palavras nos textos produzidos",
      exercises: [
        {
          kind: "options",
          instruction: "Em uma carta para um amigo e em uma redação escolar formal, as escolhas de palavras devem ser:",
          options: [
            "Diferentes, pois a linguagem se adapta ao gênero e ao destinatário",
            "Sempre as mesmas",
            "Sempre muito formais",
            "Sempre muito informais",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras mais adequadas para substituir 'legal' em um texto mais formal sobre um passeio a um museu:",
          items: [
            "interessante",
            "maneiro",
            "instrutivo",
            "massa",
            "enriquecedor",
            "da hora",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Reescreva a frase trocando a palavra em destaque por uma mais adequada ao contexto formal: 'O trabalho ficou **bem legal**.'",
          items: [
            "O trabalho ficou __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva a mesma informação (que você foi bem numa prova) de duas formas: uma como diria para um amigo, outra como escreveria para a diretora da escola:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Identificando efeitos de sentido de metáfora e comparação",
      exercises: [
        {
          kind: "options",
          instruction: "Na frase 'Meu avô é um leão quando defende a família', o que está sendo usado?",
          options: [
            "Uma metáfora, comparando o avô a um leão sem usar 'como'",
            "Uma pontuação incomum",
            "Um erro de concordância",
            "Uma pergunta retórica",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as frases que usam COMPARAÇÃO (com a palavra 'como' ou semelhante):",
          items: [
            "Ela é rápida como um raio.",
            "Ela é um raio de velocidade.",
            "Ele nada como um peixe.",
            "Ele é um peixe na água.",
            "O tempo voou.",
            "O tempo passou rápido como um sopro.",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Transforme cada comparação em metáfora, retirando a palavra 'como':",
          items: [
            "Ele é forte como um touro. → Ele é __________.",
            "Ela é doce como o mel. → Ela é __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas frases: uma metáfora e uma comparação, falando sobre uma pessoa que você admira:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Explorando palavras de um mesmo campo semântico com o dicionário",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque as palavras que pertencem ao mesmo campo semântico de 'animal' (podem ser explicadas por esse hiperônimo):",
          items: [
            "cachorro",
            "gato",
            "mesa",
            "elefante",
            "cadeira",
            "pardal",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Consulte o dicionário e complete com uma palavra do mesmo campo semântico:",
          items: [
            "Cão é um hiperônimo para: pastor-alemão, poodle e __________.",
            "Fruta é um hiperônimo para: maçã, banana e __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Para que serve consultar o dicionário ao explorar um campo semântico?",
          options: [
            "Para descobrir palavras relacionadas e seus significados exatos",
            "Para copiar o texto inteiro do dicionário",
            "Para aprender apenas a ortografia, sem se importar com o sentido",
            "Para substituir a necessidade de ler",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um campo semântico (por exemplo: esportes, cores, sentimentos) e escreva cinco palavras que pertencem a ele, consultando o dicionário se precisar:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Identificando palavras polissêmicas em diferentes contextos",
      exercises: [
        {
          kind: "options",
          instruction: "A palavra 'manga' pode significar tanto a fruta quanto a parte da camisa. Esse fenômeno é chamado de:",
          options: [
            "Polissemia",
            "Sinonímia",
            "Antonímia",
            "Homofonia apenas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Escreva duas frases usando a palavra 'banco' com dois sentidos diferentes:",
          items: [
            "1) __________.",
            "2) __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que são polissêmicas (têm mais de um significado, dependendo do contexto):",
          items: [
            "copo",
            "manga",
            "banco",
            "livro (substantivo único)",
            "letra",
            "vela",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha a palavra 'ponto' e escreva três frases em que ela tenha significados diferentes (por exemplo: ponto de ônibus, ponto de costura, pontuação):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Explorando recursos gráfico-textuais em materiais lidos",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os recursos gráfico-textuais que podem aparecer em um texto impresso ou digital:",
          items: [
            "negrito",
            "itálico",
            "sublinhado",
            "cor da letra",
            "tamanho da fonte",
            "som do vento",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é o efeito de sentido de escrever uma palavra em NEGRITO dentro de um texto?",
          options: [
            "Chamar a atenção do leitor para uma informação importante",
            "Indicar que a palavra está errada",
            "Diminuir a importância da palavra",
            "Não tem nenhum efeito",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Observe uma capa de livro ou revista e complete:",
          items: [
            "O título está escrito em letra __________ (tamanho) e na cor __________.",
            "O recurso gráfico que mais chama atenção nessa capa é __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno anúncio (por exemplo, de uma festa junina da escola) indicando quais palavras você colocaria em negrito, em letra maior ou em cor diferente, e por quê:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Conhecendo as variedades linguísticas da língua portuguesa",
      exercises: [
        {
          kind: "options",
          instruction: "Uma pessoa do interior do Nordeste e uma pessoa de São Paulo podem falar português de formas diferentes (sotaque, palavras). Isso acontece porque:",
          options: [
            "A língua portuguesa tem variedades regionais, todas legítimas",
            "Uma das duas formas está errada",
            "Só existe uma forma certa de falar português",
            "Isso nunca acontece de verdade",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os fatores que podem influenciar a variedade linguística de uma pessoa:",
          items: [
            "região onde mora",
            "idade",
            "profissão",
            "cor da roupa que usa",
            "grupo social",
            "escolaridade",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com palavras equivalentes usadas em diferentes regiões do Brasil para o mesmo objeto:",
          items: [
            "Em algumas regiões chama-se 'mandioca', em outras chama-se __________ ou 'macaxeira'.",
            "Em algumas regiões chama-se 'bolacha', em outras chama-se __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas formas diferentes de dizer a mesma frase: uma como você fala no seu dia a dia (variedade informal ou regional) e outra em português mais formal:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Valorizando as variedades linguísticas e combatendo o preconceito linguístico",
      exercises: [
        {
          kind: "options",
          instruction: "Dizer que a forma de falar de uma pessoa do interior é 'errada' ou 'feia' é um exemplo de:",
          options: [
            "Preconceito linguístico",
            "Uma opinião válida sobre gramática",
            "Uma regra da língua portuguesa",
            "Uma brincadeira sem problema",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre respeito às variedades linguísticas:",
          items: [
            "Toda variedade linguística tem sua __________ e deve ser respeitada.",
            "Rir ou zombar do jeito de falar de alguém é uma forma de __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as atitudes que combatem o preconceito linguístico:",
          items: [
            "respeitar diferentes sotaques",
            "valorizar o modo de falar de cada região",
            "corrigir e rir de quem fala diferente",
            "entender que não existe uma única forma 'certa' de falar",
            "usar a forma de falar de alguém para diminuí-lo",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno texto (3 a 4 frases) explicando por que nenhuma forma de falar português é 'melhor' do que outra:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Analisando o papel dos artigos e adjetivos na caracterização dos nomes",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases com um artigo (o, a, os, as, um, uma) adequado:",
          items: [
            "__________ menina alegre chegou cedo.",
            "__________ livros antigos estão na estante.",
            "Comprei __________ presente especial.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os adjetivos presentes na frase: 'A casa grande, antiga e colorida ficava na esquina tranquila do bairro.'",
          items: [
            "grande",
            "antiga",
            "colorida",
            "casa",
            "esquina",
            "tranquila",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a função do adjetivo em uma frase?",
          options: [
            "Caracterizar ou qualificar o substantivo",
            "Substituir o verbo",
            "Indicar o tempo da ação",
            "Ligar duas orações",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma descrição de um animal de estimação (real ou imaginário) usando pelo menos três adjetivos diferentes e os artigos adequados:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Concordância nominal entre artigos, adjetivos e substantivos",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete fazendo a concordância nominal correta entre artigo, adjetivo e substantivo:",
          items: [
            "As flores __________ (amarelo) enfeitavam o jardim.",
            "O menino comprou __________ (novo) tênis __________ (branco).",
          ],
        },
        {
          kind: "options",
          instruction: "Na frase 'As meninas estudiosas terminaram a prova', por que 'estudiosas' está no feminino plural?",
          options: [
            "Porque concorda em gênero e número com 'meninas'",
            "Porque é uma regra sem motivo",
            "Porque 'meninas' está no singular",
            "Porque o verbo exige essa forma",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as frases em que a concordância nominal está CORRETA:",
          items: [
            "As casas antigas foram reformadas.",
            "As casa antiga foram reformada.",
            "Os carros novos brilhavam ao sol.",
            "O menina esperta resolveu o problema.",
            "As meninas espertas resolveram o problema.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva três frases sobre a sua sala de aula, tomando cuidado para fazer a concordância nominal correta entre artigos, adjetivos e substantivos (por exemplo: 'As carteiras enfileiradas...'):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Efeitos de sentido dos modos, tempos e formas nominais dos verbos",
      exercises: [
        {
          kind: "options",
          instruction: "Na frase 'Se eu estudasse mais, tiraria notas melhores', o verbo 'estudasse' está em qual modo verbal?",
          options: [
            "Subjuntivo, indicando uma condição hipotética",
            "Indicativo, indicando certeza",
            "Imperativo, indicando ordem",
            "Infinitivo, sem flexão",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete identificando a forma nominal do verbo destacado:",
          items: [
            "'Correr é bom para a saúde.' → o verbo 'correr' está no __________.",
            "'Estava dormindo quando o telefone tocou.' → 'dormindo' está no __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os verbos que estão no modo IMPERATIVO (dando ordem ou pedido):",
          items: [
            "Feche a porta!",
            "Ele fechou a porta.",
            "Estude para a prova!",
            "Eu estudo todos os dias.",
            "Beba água!",
            "Ela bebeu água.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva duas frases no modo imperativo (dando um conselho ou instrução) e duas frases no modo indicativo (afirmando um fato):",
          lines: 5,
        },
      ],
    },
    {
      theme: "Identificando a sílaba tônica das palavras em textos conhecidos",
      exercises: [
        {
          kind: "word-select",
          instruction: "Leia as palavras em voz alta e marque as que têm a sílaba tônica na ÚLTIMA sílaba (oxítonas):",
          items: [
            "café",
            "sofá",
            "mesa",
            "jacaré",
            "árvore",
            "jiló",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Separe as sílabas e indique qual é a tônica (a mais forte):",
          items: [
            "boneca → bo-ne-ca, a sílaba tônica é __________.",
            "sabonete → sa-bo-ne-te, a sílaba tônica é __________.",
          ],
        },
        {
          kind: "options",
          instruction: "O que é a sílaba tônica de uma palavra?",
          options: [
            "A sílaba pronunciada com mais intensidade/força",
            "A primeira sílaba da palavra sempre",
            "A sílaba escrita em maiúscula",
            "A sílaba que tem acento gráfico obrigatoriamente",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um pequeno texto que você já leu (do livro de Português, por exemplo) e escreva quatro palavras dele, separando as sílabas e destacando qual é a tônica de cada uma:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Relacionando acentos gráficos à tonicidade e à pronúncia",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a diferença de pronúncia entre 'avó' e 'avô'?",
          options: [
            "'Avó' tem o 'o' aberto e 'avô' tem o 'o' fechado",
            "Não existe diferença na pronúncia",
            "'Avó' é plural e 'avô' é singular",
            "A diferença está apenas no gênero, sem mudar o som",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que usam acento circunflexo (som fechado):",
          items: [
            "avô",
            "café",
            "você",
            "árvore",
            "português",
            "pêssego",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete indicando se o som da vogal acentuada é aberto ou fechado:",
          items: [
            "Em 'café', o 'é' tem som __________.",
            "Em 'você', o 'ê' tem som __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno texto usando as palavras 'avó', 'avô', 'café' e 'você', prestando atenção à pronúncia aberta ou fechada de cada acento:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Praticando a acentuação de palavras proparoxítonas",
      exercises: [
        {
          kind: "options",
          instruction: "Todas as palavras proparoxítonas em português:",
          options: [
            "São sempre acentuadas graficamente",
            "Nunca recebem acento",
            "São acentuadas apenas às vezes",
            "Não têm sílaba tônica definida",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras proparoxítonas (acento na antepenúltima sílaba):",
          items: [
            "médico",
            "sábado",
            "matemática",
            "computador",
            "lâmpada",
            "relógio",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as palavras proparoxítonas com o acento gráfico correto:",
          items: [
            "mus__ca (arte dos sons)",
            "hist__ria (relato de fatos)",
            "ling__ística (estudo da língua)",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva quatro palavras proparoxítonas que você conhece (por exemplo: sábado, médico, lâmpada) e use cada uma em uma frase:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Escrevendo palavras regulares contextuais (nasalidade, R/RR, O/U)",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com M ou N, conforme o contexto (antes de P/B usa-se M; antes de outras consoantes usa-se N):",
          items: [
            "ca__po (lugar de plantação)",
            "e__trada (lugar por onde se entra)",
            "ta__bém (palavra de inclusão)",
          ],
        },
        {
          kind: "options",
          instruction: "Por que se escreve 'campo' com M e 'canto' com N?",
          options: [
            "Porque antes de P e B usa-se M, e antes de outras consoantes usa-se N",
            "Porque são regras aleatórias sem explicação",
            "Porque depende da vontade de quem escreve",
            "Porque M e N têm o mesmo som sempre",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras em que o som do R é forte (como em 'carro'), mesmo escritas com apenas um R por estarem no início da palavra ou depois de consoante:",
          items: [
            "rato",
            "carro",
            "tênis",
            "genro",
            "sorriso",
            "caro",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva quatro palavras que sigam a regra de M antes de P/B (por exemplo: campo, também, sombra, bombeiro) em frases completas:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Comparando palavras derivadas ligadas a categorias gramaticais",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete os substantivos derivados de verbos terminados em ÊNCIA e ANÇA:",
          items: [
            "Do verbo 'existir' deriva o substantivo 'exist__ncia'.",
            "Do verbo 'esperar' deriva o substantivo 'esper__nça'.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os substantivos terminados em ANÇA ou ÊNCIA:",
          items: [
            "esperança",
            "paciência",
            "lembrança",
            "caderno",
            "importância",
            "janela",
          ],
        },
        {
          kind: "options",
          instruction: "Palavras como 'paciência', 'inteligência' e 'consciência' têm em comum:",
          options: [
            "Serem substantivos abstratos terminados em ÊNCIA",
            "Serem verbos no infinitivo",
            "Serem todas proparoxítonas",
            "Não terem nenhuma relação entre si",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva três substantivos terminados em ANÇA ou ÊNCIA e o verbo do qual cada um deriva (por exemplo: 'lembrança' vem de 'lembrar'):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Escrevendo substantivos e adjetivos com terminações regulares",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete os substantivos terminados em ICE:",
          items: [
            "cal__ (rua estreita para pedestres)",
            "matr__ (documento de registro escolar)",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os adjetivos terminados em OSO/OSA:",
          items: [
            "cuidadoso",
            "gostoso",
            "amoroso",
            "elegante",
            "famosa",
            "rápido",
          ],
        },
        {
          kind: "options",
          instruction: "Adjetivos que indicam o lugar de origem de uma pessoa (por exemplo, quem nasce em Portugal é 'português') costumam terminar em:",
          options: [
            "ês/esa",
            "oso/osa",
            "eza",
            "isse",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva três adjetivos terminados em OSO ou OSA e use cada um em uma frase (por exemplo: 'cuidadoso', 'gostoso', 'famosa'):",
          lines: 4,
        },
      ],
    },
    {
      theme: "Escrevendo palavras irregulares com X e SC",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com X ou CH, conforme a grafia correta de cada palavra:",
          items: [
            "__ícara (usada para tomar café)",
            "__uva (água que cai do céu)",
            "en__ergar (ver ao longe)",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras em que o X tem som de S:",
          items: [
            "texto",
            "próximo",
            "exceto",
            "táxi",
            "sintaxe",
            "exagero",
          ],
        },
        {
          kind: "options",
          instruction: "Por que as palavras com X e SC são consideradas 'irregulares' na ortografia?",
          options: [
            "Porque não seguem uma regra fixa e precisam ser memorizadas",
            "Porque nunca são usadas na escrita",
            "Porque sempre têm o mesmo som em qualquer palavra",
            "Porque são palavras inventadas",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva quatro palavras com X (com sons diferentes: de S, de Z, de CH ou de KS) e explique o som de cada uma:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Dividindo silabicamente palavras compostas no final da linha",
      exercises: [
        {
          kind: "options",
          instruction: "Ao dividir a palavra composta 'guarda-chuva' no final de uma linha, o correto é:",
          options: [
            "Repetir o hífen no início da linha seguinte: guarda- / -chuva",
            "Nunca dividir a palavra",
            "Dividir sem repetir o hífen",
            "Dividir apenas pela sílaba tônica",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Divida as palavras compostas abaixo como se estivessem no final de uma linha, indicando onde ficaria o hífen:",
          items: [
            "guarda-roupa → guarda-/ __________",
            "beija-flor → beija-/ __________",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras compostas com hífen que seguem a regra de repetir o hífen ao dividir no final da linha:",
          items: [
            "guarda-chuva",
            "girassol",
            "pé-de-moleque",
            "passatempo",
            "arco-íris",
            "beija-flor",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva três palavras compostas com hífen (por exemplo: guarda-chuva, pé-de-moleque, arco-íris) e mostre como cada uma ficaria dividida no final de uma linha:",
          lines: 4,
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
    {
      theme: "Brincadeiras da roça e brincadeiras da cidade",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as brincadeiras que são mais fáceis de fazer no campo, onde tem bastante espaço e natureza:",
          items: [
            "SUBIR EM ÁRVORE",
            "PULAR CORDA",
            "JOGAR CARTINHA",
            "REDE",
            "VIDEOGAME",
            "BRINCAR NO RIO",
            "TABLET",
            "PIPA",
          ],
        },
        {
          kind: "options",
          instruction: "Quem mora na cidade, cheia de prédios e carros, tem menos espaço aberto para brincar. Onde você acha mais fácil soltar pipa?",
          options: [
            "No sítio, porque tem mais espaço aberto",
            "No apartamento, porque é mais alto",
            "Dá no mesmo, não tem diferença",
          ],
        },
        {
          kind: "lines",
          instruction: "Você preferia brincar num lugar cheio de árvores e terra ou num lugar cheio de prédios e asfalto? Escreva o motivo:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma brincadeira que você imagina que uma criança que mora na roça faz todos os dias:",
        },
      ],
    },
    {
      theme: "Amarelinha pelo Brasil: nomes diferentes, mesmo jogo",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a amarelinha:",
          items: [
            "A amarelinha é desenhada no ___ com giz.",
            "Para jogar, a gente pula em ___ pé só.",
            "Em algumas regiões do Brasil, esse jogo tem outro ___.",
            "Depois de jogar a pedrinha, é preciso pular sem pisar no ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Mesmo com nomes diferentes em cada lugar do Brasil, o jogo da amarelinha é parecido em quase tudo. O que isso mostra?",
          options: [
            "Que crianças de lugares diferentes podem gostar das mesmas brincadeiras",
            "Que só existe amarelinha em São Paulo",
            "Que cada brincadeira só pode ter um nome certo",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte para alguém da sua família se conhece outro nome para a amarelinha (como sapata, macaca, avião). Escreva o nome que essa pessoa disse:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe como você imagina o desenho da amarelinha no chão, com os números dentro dos quadrados:",
        },
      ],
    },
    {
      theme: "Corrida de toras: uma tradição indígena",
      exercises: [
        {
          kind: "word-select",
          instruction: "As toras usadas nessa corrida vêm de árvores. Circule as palavras que têm a ver com essa brincadeira indígena:",
          items: [
            "TRONCO",
            "FLORESTA",
            "CONTROLE REMOTO",
            "FORÇA",
            "CORRIDA",
            "SHOPPING",
            "TIME",
            "ELEVADOR",
          ],
        },
        {
          kind: "options",
          instruction: "Na corrida de toras, os times carregam pedaços pesados de tronco de árvore correndo. Por que essa brincadeira precisa ser feita em grupo, e não sozinho?",
          options: [
            "Porque o tronco é pesado e várias pessoas ajudam a carregar",
            "Porque é proibido correr sozinho",
            "Porque só cabe uma pessoa por vez na floresta",
          ],
        },
        {
          kind: "lines",
          instruction: "O que mais te chamou atenção na corrida de toras dos povos Xavante e Krahô? Escreva aqui:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um grupo de crianças carregando um tronco em uma corrida, como fazem os povos Xavante e Krahô:",
        },
      ],
    },
    {
      theme: "Brincadeiras que vieram da Itália",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a bocha:",
          items: [
            "A bocha é uma brincadeira que veio da ___.",
            "Para jogar bocha, a gente lança bolas em direção a uma bola ___.",
            "Ganha quem deixa a bola mais ___ do alvo.",
            "A bocha chegou ao Brasil com as famílias de ___ italianos.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que têm a ver com o jogo de bocha:",
          items: [
            "BOLAS",
            "TIME DE FUTEBOL",
            "GRAMADO",
            "PONTARIA",
            "PISCINA",
            "ALVO",
            "PATINETE",
            "DISTÂNCIA",
          ],
        },
        {
          kind: "lines",
          instruction: "Você tem algum parente ou conhecido que veio de outro país ou é descendente de imigrantes? Escreva o nome dessa pessoa e de onde a família dela veio:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe você jogando bocha com bolinhas de papel ou bolas de gude no chão da sala:",
        },
      ],
    },
    {
      theme: "Combinado antes de brincar",
      exercises: [
        {
          kind: "options",
          instruction: "Antes de começar uma brincadeira em grupo, é importante combinar as regras. Por quê?",
          options: [
            "Para todo mundo saber como brincar e evitar brigas",
            "Para a brincadeira demorar mais tempo",
            "Porque é proibido brincar sem combinar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre os combinados:",
          items: [
            "Antes de brincar, o grupo precisa ___ as regras.",
            "Se alguém não seguir o combinado, pode dar ___.",
            "Um bom combinado ajuda todo mundo a se ___ na brincadeira.",
            "Quando surge uma dúvida durante o jogo, o grupo pode parar e fazer um novo ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em uma brincadeira que você gosta de fazer com amigos. Escreva um combinado importante para essa brincadeira dar certo:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe você e seus colegas conversando em roda para combinar as regras de uma brincadeira:",
        },
      ],
    },
    {
      theme: "Roda de entrevistas: convidando um familiar para contar uma brincadeira",
      exercises: [
        {
          kind: "lines",
          instruction: "Se um familiar seu fosse à escola contar uma brincadeira da infância dele, qual pergunta você faria para ele?",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Por que é importante ouvir uma pessoa mais velha contar como ela brincava quando era criança?",
          options: [
            "Porque aprendemos coisas sobre o passado que não estão em nenhum livro",
            "Porque essa pessoa vai brincar no nosso lugar",
            "Porque não é importante, só serve para passar o tempo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a entrevista com o familiar:",
          items: [
            "Antes da entrevista, é bom preparar as ___ que vamos fazer.",
            "O convidado vai contar uma brincadeira da sua ___.",
            "Enquanto ele fala, devemos ficar em ___ para escutar.",
            "No final, podemos ___ o convidado por ter vindo.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o familiar convidado contando a brincadeira para a turma:",
        },
      ],
    },
    {
      theme: "Como se brincava sem brinquedo comprado",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais que podem virar brinquedo, mesmo sem ir a uma loja:",
          items: [
            "TAMPINHA",
            "GARRAFA",
            "PEDRINHA",
            "LATA",
            "SEMENTE",
            "CONTROLE DE VIDEOGAME",
            "MEIA VELHA",
            "TABLET",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre brinquedos feitos em casa:",
          items: [
            "Com uma meia velha dá para fazer uma ___",
            "Uma lata vazia pode virar um ___",
            "Com jornal amassado dá para fazer uma ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Peça para alguém da sua família contar um brinquedo que ele mesmo fez quando era criança. Escreva aqui o nome desse brinquedo:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Escolha um material simples (tampinha, lata, pedrinha ou meia) e desenhe o brinquedo que você faria com ele:",
          note: "Não esqueça de dar um nome para o seu brinquedo!",
        },
      ],
    },
    {
      theme: "Pião: uma brincadeira, muitos lugares",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um pião, do jeitinho que você imagina que ele seja:",
        },
        {
          kind: "options",
          instruction: "Para o pião rodar bem, o que a criança precisa fazer?",
          options: [
            "Girar ele com a mão ou com um barbante",
            "Só olhar para ele parado",
            "Jogar ele para o alto e pegar de volta",
          ],
        },
        {
          kind: "lines",
          instruction: "Você já brincou de pião ou já viu alguém brincando? Escreva onde foi:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o pião:",
          items: [
            "O pião pode ser feito de ___ ou de plástico",
            "Para o pião girar, muitas crianças usam um ___",
            "Em algumas brincadeiras, o objetivo é ver qual pião gira por mais ___",
          ],
        },
      ],
    },
    {
      theme: "Peteca: brincadeira indígena que virou jogo de todo mundo",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as palavras que têm a ver com a brincadeira de peteca:",
          items: [
            "PENA",
            "BOLA DE FUTEBOL",
            "MÃO",
            "PALHA",
            "CONTROLE",
            "DUPLA",
            "PATINS",
            "REDE",
          ],
        },
        {
          kind: "lines",
          instruction: "Combine com um colega e brinquem de peteca no pátio ou na quadra. Depois, escreva como foi:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Quem inventou a brincadeira de peteca?",
          options: [
            "Os povos indígenas, há muito tempo",
            "Uma fábrica de brinquedos",
            "Os astronautas",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você jogando peteca com um amigo ou amiga:",
        },
      ],
    },
    {
      theme: "Jogos japoneses que chegaram ao Brasil",
      exercises: [
        {
          kind: "lines",
          instruction: "Com a ajuda do professor, faça uma dobradura de origami. Depois, escreva o nome do que você criou:",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule o que a gente usa para fazer uma dobradura de origami:",
          items: [
            "PAPEL",
            "TESOURA",
            "COLA",
            "DOBRAS COM A MÃO",
            "TINTA",
            "PACIÊNCIA",
          ],
        },
        {
          kind: "options",
          instruction: "De onde vieram os jogos e as dobraduras japonesas que brincamos aqui no Brasil?",
          options: [
            "De imigrantes japoneses que vieram morar no Brasil",
            "De uma fábrica de brinquedos brasileira",
            "Ninguém sabe de onde vieram",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a dobradura de origami que você fez ou gostaria de fazer:",
        },
      ],
    },
    {
      theme: "O que fazer quando alguém não respeita a regra",
      exercises: [
        {
          kind: "options",
          instruction: "Um colega não quer seguir a regra do jogo. O que é melhor fazer?",
          options: [
            "Conversar e explicar a regra com calma",
            "Gritar e não deixar mais ele brincar",
            "Desistir de brincar para sempre",
          ],
        },
        {
          kind: "lines",
          instruction: "Conte uma vez em que alguém não seguiu uma regra da brincadeira. O que vocês fizeram para resolver?",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre as regras dos jogos:",
          items: [
            "As regras existem para que a brincadeira seja ___ para todos",
            "Quando alguém não respeita a regra, é importante conversar com ___",
            "Combinar as regras ___ de começar a brincar ajuda a evitar brigas",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe duas crianças combinando as regras de um jogo antes de começar a brincar:",
        },
      ],
    },
    {
      theme: "Brincar com cadeira de rodas: é possível?",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule o que ajuda a incluir um colega que usa cadeira de rodas na brincadeira:",
          items: [
            "ESPAÇO LIVRE PARA PASSAR",
            "REGRAS COMBINADAS COM TODOS",
            "ESCADA ESTREITA",
            "AMIZADE",
            "DEIXAR ELE DE FORA",
            "PACIÊNCIA",
          ],
        },
        {
          kind: "options",
          instruction: "Um colega que usa cadeira de rodas quer brincar de pega-pega com a turma. O que a turma pode fazer?",
          options: [
            "Pensar juntos em um jeito de todos brincarem",
            "Não deixar ele participar",
            "Trocar de brincadeira sem perguntar nada a ele",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em uma brincadeira que você gosta. Escreva uma ideia de como um colega que usa cadeira de rodas poderia participar dela também:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe você e seus colegas brincando juntos, incluindo um amigo que usa cadeira de rodas:",
        },
      ],
    },
    {
      theme: "A pipa ontem e hoje",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais que as pipas de antigamente costumavam ter:",
          items: [
            "PAPEL DE SEDA",
            "VARETA DE BAMBU",
            "LINHA",
            "COLA CASEIRA",
            "PILHA",
            "CONTROLE REMOTO",
            "JORNAL VELHO",
            "MOTOR",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte a um adulto da sua família se ele soltava pipa quando era criança e onde costumava soltar. Escreva o que você descobriu:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "O que é preciso para conseguir soltar uma pipa?",
          options: [
            "Um dia com vento e um espaço aberto",
            "Uma tomada de energia por perto",
            "Pilhas carregadas",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma pipa bem colorida, do jeito que você imagina que era a pipa da sua avó ou do seu avô quando eram crianças:",
        },
      ],
    },
    {
      theme: "Corda e suas variações",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a brincadeira de pular corda:",
          items: [
            "Para pular corda, é preciso ter pelo menos ___ pessoas: quem pula e quem bate a corda",
            "Em muitas brincadeiras de corda, as crianças cantam uma ___ enquanto pulam",
            "Em algumas regiões do Brasil, a brincadeira de pular corda tem um ___ diferente",
          ],
        },
        {
          kind: "lines",
          instruction: "Você conhece alguma música ou parlenda que se canta pulando corda? Escreva o começo dela aqui:",
          lines: 3,
          note: "Se não souber nenhuma, pergunte para um colega ou para um adulto.",
        },
        {
          kind: "word-select",
          instruction: "Circule quem pode participar de uma brincadeira de pular corda:",
          items: [
            "MENINOS",
            "MENINAS",
            "CRIANÇAS DE QUALQUER IDADE",
            "SÓ QUEM CORRE RÁPIDO",
            "QUEM QUISER APRENDER",
            "SÓ ADULTOS",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você pulando corda com dois colegas batendo a corda:",
        },
      ],
    },
    {
      theme: "Arco e flecha de brincadeira",
      exercises: [
        {
          kind: "options",
          instruction: "Por que o arco e flecha é importante para muitos povos indígenas?",
          options: [
            "Porque ajuda na caça, na pesca e também é usado em brincadeiras e jogos",
            "Porque é um brinquedo que só existe em lojas",
            "Porque foi inventado recentemente",
          ],
        },
        {
          kind: "lines",
          instruction: "Com a ajuda do professor, brinque de fazer pontaria com um arco e flecha de brinquedo, feito com materiais seguros. Escreva como foi:",
          lines: 3,
          note: "Nunca aponte o arco e flecha para outra pessoa.",
        },
        {
          kind: "word-select",
          instruction: "Circule o que é preciso para brincar de arco e flecha com segurança:",
          items: [
            "ATENÇÃO",
            "MATERIAL SEGURO",
            "ESPAÇO LIVRE",
            "APONTAR PARA O COLEGA",
            "COMBINAR AS REGRAS ANTES",
            "CORRER SEM OLHAR",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um arco e flecha de brinquedo, feito com materiais que não machucam ninguém:",
        },
      ],
    },
    {
      theme: "Brincadeiras da colônia alemã",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule o que faz parte do jogo de boliche caseiro, trazido pelos imigrantes alemães:",
          items: [
            "GARRAFAS OU PINOS",
            "BOLA",
            "DERRUBAR OS PINOS",
            "TELA DE COMPUTADOR",
            "CONTAR OS PONTOS",
            "JOYSTICK",
          ],
        },
        {
          kind: "options",
          instruction: "Quem trouxe jogos como o boliche caseiro para o Brasil?",
          options: [
            "Famílias de imigrantes alemães que vieram morar aqui",
            "Uma fábrica de brinquedos brasileira",
            "Astronautas em uma viagem espacial",
          ],
        },
        {
          kind: "lines",
          instruction: "Com a ajuda do professor, monte um boliche caseiro com garrafas pet ou latas. Escreva quantos pinos você conseguiu derrubar:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe o jogo de boliche caseiro que você montou ou gostaria de montar:",
        },
      ],
    },
    {
      theme: "Regras da escola e regras do jogo",
      exercises: [
        {
          kind: "options",
          instruction: "As regras da escola e as regras de um jogo servem para quê?",
          options: [
            "Para que todos possam conviver bem e se divertir",
            "Para atrapalhar as crianças",
            "Para que só alguns possam participar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases comparando as regras da escola com as regras de um jogo:",
          items: [
            "Na escola, uma regra é respeitar a ___ dos colegas",
            "Em um jogo de brincadeira, uma regra pode ser esperar a sua ___",
            "Se ninguém seguir as regras, o jogo (ou a aula) fica ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma regra da sua escola e uma regra de um jogo que você gosta de jogar:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a turma combinando as regras de um jogo antes de começar a brincar:",
        },
      ],
    },
    {
      theme: "Adaptando um jogo para todo mundo brincar",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule ideias que ajudam a adaptar um jogo para que todos os colegas possam brincar:",
          items: [
            "EXPLICAR AS REGRAS DE JEITOS DIFERENTES",
            "USAR SINAIS OU GESTOS",
            "DAR MAIS TEMPO QUANDO PRECISAR",
            "DEIXAR ALGUÉM DE FORA",
            "PERGUNTAR O QUE A PESSOA PRECISA",
            "NÃO MUDAR NADA NUNCA",
          ],
        },
        {
          kind: "options",
          instruction: "Um colega tem dificuldade para enxergar bem e quer brincar de um jogo com bola. O que a turma pode fazer?",
          options: [
            "Usar uma bola com guizo, que faz barulho",
            "Trocar de brincadeira sem perguntar nada a ele",
            "Não deixar ele brincar",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um jogo que você conhece bem. Escreva uma ideia de como esse jogo poderia ser adaptado para um colega participar também:",
          lines: 3,
          note: "Pense em coisas como: dar mais tempo, usar sons, mudar o jeito de se mover, explicar de outro jeito.",
        },
        {
          kind: "draw",
          instruction: "Desenhe você e seus colegas brincando juntos, todo mundo participando do mesmo jogo:",
        },
      ],
    },
    {
      theme: "Brincadeiras de rua que quase desapareceram",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as brincadeiras que antigamente eram muito comuns nas ruas do bairro:",
          items: [
            "PIÃO",
            "ELÁSTICO",
            "TABLET",
            "BALÃO",
            "BETE",
            "CELULAR",
            "CINCO MARIAS",
            "COMPUTADOR",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o motivo que você acha mais provável:",
          items: [
            "Hoje em dia tem mais ___ passando na rua, então fica perigoso brincar lá.",
            "Muitas crianças hoje preferem brincar com ___.",
            "Nas ruas de antigamente tinha menos ___ do que hoje.",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte para alguém da sua família se ela brincava na rua quando era criança. Escreva o que essa pessoa contou:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Perto da sua casa, ainda dá para brincar na rua com segurança?",
          options: [
            "Sim, dá para brincar tranquilo",
            "Só com um adulto por perto",
            "Não, é perigoso",
          ],
        },
      ],
    },
    {
      theme: "Bolinha de gude ontem e hoje",
      exercises: [
        {
          kind: "lines",
          instruction: "Pergunte para um adulto da sua família se ele já brincou de bolinha de gude e como era o jogo. Escreva aqui:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares onde dá para brincar de bolinha de gude:",
          items: [
            "CHÃO DE TERRA",
            "PISCINA",
            "CALÇADA",
            "GELADEIRA",
            "QUINTAL",
            "TELHADO",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você brincando de bolinha de gude com um amigo ou amiga:",
          note: "Capriche nas cores das bolinhas!",
        },
        {
          kind: "options",
          instruction: "Você já brincou ou gostaria de brincar de bolinha de gude?",
          options: [
            "Já brinquei e gostei",
            "Nunca brinquei, mas quero experimentar",
            "Não tenho muito interesse",
          ],
        },
      ],
    },
    {
      theme: "Jogo da onça: tabuleiro indígena",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o jogo da onça:",
          items: [
            "O jogo da onça é um jogo de ___ criado por povos indígenas.",
            "No jogo, um jogador é a onça e o outro tem os ___.",
            "Para ganhar o jogo, é preciso pensar bem antes de fazer cada ___.",
          ],
        },
        {
          kind: "options",
          instruction: "No jogo da onça, quem você preferiria ser?",
          options: [
            "A onça",
            "Um dos cachorros",
            "Tanto faz, quero experimentar os dois",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe como você imagina o tabuleiro do jogo da onça:",
          note: "Pode desenhar a onça e os cachorros nas suas casinhas.",
        },
        {
          kind: "lines",
          instruction: "Depois de jogar o jogo da onça na sala, escreva o que você achou dele:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Jogos de tabuleiro trazidos por imigrantes",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os nomes de jogos de tabuleiro:",
          items: [
            "XADREZ",
            "PIPA",
            "GAMÃO",
            "PETECA",
            "DAMAS",
            "PIÃO",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte para alguém da sua família se ela conhece algum jogo de tabuleiro que veio de outro país. Escreva o nome do jogo e de onde ele veio:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Depois de experimentar um jogo de tabuleiro na sala, o que você achou dele?",
          options: [
            "Achei muito divertido",
            "Achei difícil, mas gostei",
            "Não gostei muito",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o tabuleiro do jogo que você experimentou hoje:",
        },
      ],
    },
    {
      theme: "Assembleia da turma: criando regras para o recreio",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva uma regra que você acha importante para brincar bem no recreio:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Na assembleia da turma, como você se sentiu ao dar sua opinião?",
          options: [
            "Confiante para falar",
            "Um pouco nervoso, mas falei",
            "Preferi só escutar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a assembleia da turma:",
          items: [
            "Na assembleia, cada criança tem direito de dar sua ___.",
            "As regras combinadas valem para ___ da turma.",
            "Se alguém não seguir a regra, a turma pode conversar e ___ juntos.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a turma brincando no recreio seguindo a regra que vocês combinaram:",
        },
      ],
    },
    {
      theme: "Brincadeira que dá para brincar sentado",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as brincadeiras que dá para fazer sentado, sem precisar correr:",
          items: [
            "JOGO DA VELHA",
            "PEGA-PEGA",
            "DESENHAR",
            "CORRIDA",
            "ADEDANHA",
            "PULAR CORDA",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de uma brincadeira que dá para fazer sentado e que você gostaria de ensinar para um colega:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Por que é bom conhecer brincadeiras que dá para fazer sentado?",
          options: [
            "Porque assim todo mundo pode brincar junto",
            "Porque é mais fácil de aprender",
            "Porque não cansa",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você brincando sentado com um colega da turma:",
          note: "Pode ser uma brincadeira que vocês inventaram juntos.",
        },
      ],
    },
    {
      theme: "Um brinquedo, dois tempos: pião de ontem e de hoje",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais que já foram usados para fazer um pião:",
          items: [
            "MADEIRA",
            "PLÁSTICO",
            "METAL",
            "VIDRO",
            "ALGODÃO",
            "PAPEL",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o pião:",
          items: [
            "O pião de antigamente era feito principalmente de ___",
            "O pião de hoje em dia pode ser feito de ___",
            "Para o pião rodar, a gente precisa ___ ele com a mão ou com um barbante",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte para alguém da sua família se essa pessoa já brincou de pião. Escreva o que ela contou:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe um pião rodando no chão.",
          note: "Capriche nas cores!",
        },
      ],
    },
    {
      theme: "Brincadeiras de tabuleiro de antigamente e de agora",
      exercises: [
        {
          kind: "options",
          instruction: "Qual jogo de tabuleiro você já jogou ou já viu alguém jogando?",
          options: [
            "Dama",
            "Jogo da velha",
            "Ludo",
            "Nunca joguei nenhum",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule o que a gente costuma usar para jogar em um tabuleiro:",
          items: [
            "DADO",
            "PEÇAS",
            "CONTROLE",
            "CARTAS",
            "TELA",
            "FONE DE OUVIDO",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um jogo de tabuleiro que existe na sua casa ou na escola:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe um tabuleiro de jogo, com as casinhas e as peças.",
        },
      ],
    },
    {
      theme: "Brincadeiras indígenas com bola de borracha natural",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre essa brincadeira indígena:",
          items: [
            "A bola dessa brincadeira é feita de um material natural chamado ___",
            "O jogador precisa rebater a bola para ela não ___ no chão",
            "Essa brincadeira é praticada por povos ___ do Brasil",
          ],
        },
        {
          kind: "options",
          instruction: "Nessa brincadeira indígena, o que os jogadores não podem deixar acontecer?",
          options: [
            "A bola cair no chão",
            "A bola furar",
            "A bola sair da aldeia",
          ],
        },
        {
          kind: "lines",
          instruction: "Você já brincou com uma bola sem deixá-la cair no chão? Conte como foi:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe crianças em roda, rebatendo a bola sem deixá-la cair.",
        },
      ],
    },
    {
      theme: "Brincadeira de roda dos imigrantes portugueses",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule o que a gente precisa para brincar de roda:",
          items: [
            "AMIGOS",
            "MÚSICA CANTADA",
            "MÃOS DADAS",
            "COMPUTADOR",
            "CONTROLE DE VIDEOGAME",
            "TELEVISÃO",
          ],
        },
        {
          kind: "options",
          instruction: "Você já brincou de roda, cantando e de mãos dadas com outras pessoas?",
          options: [
            "Sim, na escola",
            "Sim, em festa ou em casa",
            "Ainda não brinquei",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de uma cantiga de roda que você conhece ou que já cantou:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe um grupo de crianças de mãos dadas, brincando de roda.",
        },
      ],
    },
    {
      theme: "Cartaz das regras combinadas",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases pensando nas regras da turma:",
          items: [
            "Para brincar em grupo sem brigar, é importante ___ a vez de cada um",
            "Se alguém não quiser brincar de um jogo, a gente deve ___ a vontade dele",
            "Quando uma regra não está clara, o melhor é ___ com os colegas antes de começar",
          ],
        },
        {
          kind: "options",
          instruction: "O que a turma deve fazer quando alguém não respeita uma regra combinada?",
          options: [
            "Conversar e lembrar a regra combinada",
            "Não deixar a pessoa brincar mais nunca",
            "Fingir que não viu",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma regra que você acha importante para os momentos de brincadeira na turma:",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe um símbolo para representar a regra que você escreveu, para colar no cartaz da turma.",
        },
      ],
    },
    {
      theme: "Brincadeiras sem falar: incluindo quem não ouve",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule o que podemos usar para brincar sem falar com a boca:",
          items: [
            "GESTOS COM AS MÃOS",
            "OLHAR NOS OLHOS",
            "EXPRESSÃO DO ROSTO",
            "GRITAR BEM ALTO",
            "APITO",
            "SINAIS COMBINADOS",
          ],
        },
        {
          kind: "options",
          instruction: "Se um colega não consegue ouvir o comando de uma brincadeira, o que ajuda ele a participar?",
          options: [
            "Fazer um gesto ou sinal combinado antes de começar",
            "Falar mais rápido",
            "Deixar ele de fora da brincadeira",
          ],
        },
        {
          kind: "lines",
          instruction: "Combine com um colega um sinal de mão para \"começar\" e outro para \"parar\", sem usar a fala. Escreva como ficaram os sinais que vocês inventaram:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe você e um colega brincando juntos, se olhando e usando as mãos para se entender.",
        },
      ],
    },
    {
      theme: "Brincar dentro de casa: ontem e hoje",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as brincadeiras de dentro de casa que as famílias já faziam antes de existir tablet e videogame:",
          items: [
            "DOMINÓ",
            "TABLET",
            "JOGO DA VELHA",
            "VIDEOGAME",
            "BONECA DE PANO",
            "CELULAR",
            "BARALHO",
            "COMPUTADOR",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre brincar dentro de casa:",
          items: [
            "Antigamente, muitas crianças brincavam de ___ com a família à noite.",
            "Hoje em dia, é comum as crianças brincarem de ___ na tela do celular ou tablet.",
            "Uma brincadeira de dentro de casa que não precisa de tela é o jogo de ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Na sua opinião, brincar sem usar tela também pode ser divertido?",
          options: [
            "Sim, muito divertido",
            "Mais ou menos",
            "Não, prefiro só tela",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma brincadeira de dentro de casa que você pode fazer sem ligar nenhuma tela.",
          note: "Pode ser um jogo de tabuleiro, cartas ou outra brincadeira.",
        },
      ],
    },
    {
      theme: "Cirandas de diferentes lugares",
      exercises: [
        {
          kind: "lines",
          instruction: "Cirandas são brincadeiras de roda cantadas. Escreva o nome de uma música de roda que você conhece:",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que têm a ver com a brincadeira de ciranda:",
          items: [
            "RODA",
            "MÃOS DADAS",
            "CANTAR",
            "COMPUTADOR",
            "GIRAR",
            "SOZINHO",
            "MÚSICA",
            "CARRO",
          ],
        },
        {
          kind: "options",
          instruction: "Para brincar de ciranda, o que a turma precisa fazer?",
          options: [
            "Formar uma roda de mãos dadas e cantar junto",
            "Ficar cada um sentado sozinho",
            "Jogar em um tablet",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você e seus colegas de mãos dadas fazendo uma roda de ciranda.",
        },
      ],
    },
    {
      theme: "Cabo de força dos povos indígenas",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o cabo de força:",
          items: [
            "No cabo de força, duas equipes puxam uma ___ cada uma para o seu lado.",
            "Muitos povos ___ brincam de cabo de força em suas festas e celebrações.",
            "Para vencer o jogo, é preciso ___ com os colegas de equipe.",
          ],
        },
        {
          kind: "options",
          instruction: "O que é mais importante para vencer o cabo de força?",
          options: [
            "A força de uma pessoa sozinha",
            "A força e a união de toda a equipe",
            "Ter o cabo mais bonito",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe duas equipes puxando a corda em um jogo de cabo de força.",
        },
        {
          kind: "lines",
          instruction: "Combine com seus colegas de fazer o cabo de força na quadra. Depois escreva: qual equipe ganhou?",
          lines: 2,
        },
      ],
    },
    {
      theme: "Peão e bolinha de gude: herança dos imigrantes",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os objetos usados nas brincadeiras de peão e bolinha de gude:",
          items: [
            "PEÃO",
            "BARBANTE",
            "BOLINHA DE VIDRO",
            "CONTROLE REMOTO",
            "RISCO NO CHÃO",
            "TABLET",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte a um adulto da sua família se ele já brincou de peão ou bolinha de gude e escreva o que ele contou:",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "O peão é uma brincadeira que veio para o Brasil com famílias de ___.",
            "Para rodar o peão, é preciso enrolar um ___ nele.",
            "Na brincadeira de bolinha de gude, cada jogador tenta acertar a bolinha do ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Quem trouxe as brincadeiras de peão e bolinha de gude para o Brasil?",
          options: [
            "Grupos de imigrantes que vieram de outros países",
            "Apenas uma pessoa que inventou sozinha",
            "Ninguém, elas sempre existiram só aqui",
          ],
        },
      ],
    },
    {
      theme: "Brincando de mediar um conflito no jogo",
      exercises: [
        {
          kind: "options",
          instruction: "Durante um jogo, dois colegas discordam sobre uma regra. O que é melhor fazer?",
          options: [
            "Parar, conversar e decidir juntos",
            "Gritar com quem discorda",
            "Sair do jogo bravo sem falar nada",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma coisa que você pode dizer para ajudar a resolver uma briga durante uma brincadeira:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre resolver conflitos:",
          items: [
            "Quando alguém erra a regra sem querer, é bom ___ com calma.",
            "Antes de começar o jogo, todos devem ___ as regras juntos.",
            "Se dois colegas não concordam, uma boa ideia é pedir ajuda do ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe duas crianças conversando para resolver um problema durante um jogo.",
        },
      ],
    },
    {
      theme: "Testando se todo mundo consegue brincar",
      exercises: [
        {
          kind: "options",
          instruction: "Uma brincadeira pode ter suas regras mudadas para incluir mais colegas quando:",
          options: [
            "A turma conversa e decide junta como todos podem participar",
            "Ninguém pode mudar nada nunca",
            "Só uma pessoa decide sem perguntar para ninguém",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases pensando em brincadeiras para todos:",
          items: [
            "Se um colega usa cadeira de rodas, a turma pode pensar em um jeito de ele ___ do jogo.",
            "Uma brincadeira é para todos quando cada criança consegue ___ dela de algum jeito.",
            "Para descobrir se todos podem brincar, é bom ___ antes de começar o jogo.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma brincadeira que a turma gosta. Escreva uma ideia para que qualquer colega consiga participar dela:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe a turma toda brincando junta, com cada colega participando à sua maneira.",
        },
      ],
    },
    {
      theme: "Brincar ontem e hoje: o brinquedo muda com o tempo?",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os brinquedos que já existiam no tempo dos seus avós:",
          items: [
            "PIÃO",
            "BONECA DE PANO",
            "VIDEOGAME",
            "PIPA",
            "CELULAR",
            "IOIÔ",
          ],
        },
        {
          kind: "options",
          instruction: "O que geralmente mudou dos brinquedos de antigamente para os de hoje?",
          options: [
            "Muitos brinquedos de hoje usam pilha, luz e som, e antigamente isso era raro",
            "Antigamente as crianças não podiam brincar",
            "Os brinquedos de antigamente eram todos de ouro",
            "Nada mudou, os brinquedos são sempre iguais",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte para alguém da sua família: \"Qual brinquedo você tinha quando era criança?\" Escreva o nome do brinquedo.",
          lines: 2,
          note: "Se possível, peça que a criança faça a pergunta em casa antes da aula e traga a resposta.",
        },
        {
          kind: "draw",
          instruction: "Desenhe o brinquedo que alguém da sua família usava quando era criança.",
        },
      ],
    },
    {
      theme: "Meu brinquedo, o brinquedo do colega",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe o seu brinquedo favorito, aquele que você vai apresentar para a turma.",
        },
        {
          kind: "lines",
          instruction: "Escreva o nome do brinquedo que você desenhou.",
          lines: 1,
        },
        {
          kind: "word-select",
          instruction: "Circule os brinquedos que os colegas da turma trouxeram para mostrar:",
          items: [
            "BONECA",
            "CARRINHO",
            "BOLA",
            "PIÃO",
            "QUEBRA-CABEÇA",
            "PELÚCIA",
          ],
        },
        {
          kind: "options",
          instruction: "Quando um colega está apresentando o brinquedo dele, o que devemos fazer?",
          options: [
            "Ficar em silêncio e prestar atenção no colega",
            "Conversar bem alto com outro amigo",
            "Sair andando pela sala",
            "Pegar o brinquedo do colega sem pedir",
          ],
        },
      ],
    },
    {
      theme: "Observando as características dos brinquedos",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um brinquedo grande e redondo e, do lado, um brinquedo pequeno e quadrado.",
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que podem descrever um brinquedo:",
          items: [
            "MACIO",
            "GRANDE",
            "AZUL",
            "COMER",
            "PEQUENO",
            "DORMIR",
          ],
        },
        {
          kind: "options",
          instruction: "Uma bola de futebol tem qual formato?",
          options: [
            "Redondo",
            "Quadrado",
            "Comprido e fino",
            "Em forma de estrela",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a frase com uma palavra: minha pelúcia favorita é macia e a cor dela é ___.",
          items: [
            "___",
          ],
          note: "A criança completa com o nome de uma cor.",
        },
      ],
    },
    {
      theme: "De que é feito o meu brinquedo?",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais que podem ser usados para fazer um brinquedo:",
          items: [
            "MADEIRA",
            "PLÁSTICO",
            "PANO",
            "NUVEM",
            "METAL",
            "ÁGUA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete: um pião de madeira é feito de ___.",
          items: [
            "___",
          ],
          note: "Resposta esperada: madeira.",
        },
        {
          kind: "options",
          instruction: "A maioria dos brinquedos que compramos em loja hoje é feita principalmente de que material?",
          options: [
            "Plástico",
            "Gelo",
            "Vidro fino",
            "Papel molhado",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um brinquedo feito de plástico e um brinquedo feito de madeira.",
        },
      ],
    },
    {
      theme: "Brinquedo é de menino, de menina ou de todo mundo?",
      exercises: [
        {
          kind: "options",
          instruction: "Quem pode brincar de boneca?",
          options: [
            "Qualquer criança que gostar de brincar de boneca",
            "Só as meninas",
            "Só os meninos",
            "Ninguém pode brincar de boneca",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os brinquedos que TODAS as crianças podem brincar, meninos e meninas:",
          items: [
            "BOLA",
            "BONECA",
            "CARRINHO",
            "PIPA",
            "QUEBRA-CABEÇA",
            "PANELINHA",
          ],
          note: "Todos os itens da lista devem ser circulados — o objetivo é mostrar que não existe brinquedo exclusivo de um gênero.",
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um brinquedo que você gosta de usar para brincar.",
          lines: 1,
        },
        {
          kind: "draw",
          instruction: "Desenhe você brincando com o seu brinquedo favorito, não importa o que os outros dizem sobre ele ser \"de menino\" ou \"de menina\".",
        },
      ],
    },
    {
      theme: "Os brinquedos da minha família",
      exercises: [
        {
          kind: "lines",
          instruction: "Pergunte a alguém da sua família qual era o brinquedo preferido dele quando era criança e escreva o nome.",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe o brinquedo preferido de uma pessoa da sua família.",
        },
        {
          kind: "word-select",
          instruction: "Circule os brinquedos que podem fazer parte da história de uma família:",
          items: [
            "BONECA DE PANO",
            "TROTINETE",
            "PIÃO",
            "CARRINHO DE MADEIRA",
            "BOLA DE MEIA",
            "PATINETE",
          ],
        },
        {
          kind: "options",
          instruction: "Todas as famílias têm os mesmos brinquedos e as mesmas histórias?",
          options: [
            "Não, cada família tem brinquedos e histórias diferentes, e isso é normal",
            "Sim, todas as famílias são exatamente iguais",
            "Só famílias ricas têm brinquedos",
            "Só famílias grandes podem ter brinquedos",
          ],
        },
      ],
    },
    {
      theme: "Brinquedos de outros tempos",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os brinquedos que são de uma época bem antiga:",
          items: [
            "PIÃO DE MADEIRA",
            "BONECA DE PANO",
            "TABLET",
            "CARRINHO DE ROLIMÃ",
            "FONE SEM FIO",
            "IOIÔ",
          ],
        },
        {
          kind: "options",
          instruction: "Por que é importante conhecer os brinquedos de outros tempos?",
          options: [
            "Porque ajuda a entender como as crianças viviam e brincavam no passado",
            "Porque os brinquedos antigos são proibidos hoje",
            "Porque não existem mais crianças hoje",
            "Porque os brinquedos de hoje não servem para nada",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete: o pião e o ioiô são brinquedos muito ___ (antigos ou modernos?).",
          items: [
            "___",
          ],
          note: "Resposta esperada: antigos.",
        },
        {
          kind: "draw",
          instruction: "Desenhe como você imagina uma criança brincando há muito, muito tempo atrás.",
        },
      ],
    },
    {
      theme: "Brinquedos de outros lugares",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um brinquedo de um lugar diferente da sua cidade que você já viu ou ouviu falar.",
        },
        {
          kind: "word-select",
          instruction: "Circule os brinquedos que podem ser encontrados em outros lugares do Brasil ou do mundo:",
          items: [
            "PIPA",
            "PETECA",
            "BOLA DE GUDE",
            "AMARELINHA",
            "CARRINHO DE CONTROLE REMOTO",
            "PIÃO",
          ],
        },
        {
          kind: "options",
          instruction: "Crianças de lugares diferentes brincam sempre do mesmo jeito?",
          options: [
            "Não, cada lugar pode ter brincadeiras e brinquedos diferentes",
            "Sim, todas as crianças do mundo brincam exatamente igual",
            "Só existe um jeito certo de brincar",
            "Crianças de outros lugares não brincam",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de uma brincadeira ou de um brinquedo que você conhece de outro lugar.",
          lines: 2,
        },
      ],
    },
    {
      theme: "Brinquedos dos povos indígenas",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os brinquedos criados pelos povos indígenas:",
          items: [
            "PETECA",
            "ARCO E FLECHA DE BRINQUEDO",
            "BONECA DE CERÂMICA",
            "VIDEOGAME",
            "PIÃO DE SEMENTE",
            "CELULAR",
          ],
          note: "Peteca, bonecas de cerâmica (como as do povo Karajá) e piões feitos de sementes são exemplos reais de brinquedos indígenas brasileiros.",
        },
        {
          kind: "options",
          instruction: "Os povos indígenas do Brasil são todos iguais entre si?",
          options: [
            "Não, existem muitos povos indígenas diferentes, cada um com sua cultura",
            "Sim, todos os povos indígenas são exatamente iguais",
            "Não existem mais povos indígenas no Brasil",
            "Só existe um povo indígena no mundo",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma peteca, um brinquedo criado pelos povos indígenas que muitas crianças brasileiras usam até hoje.",
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um brinquedo indígena que você conheceu hoje.",
          lines: 1,
        },
      ],
    },
    {
      theme: "A boneca abayomi e outros brinquedos de origem africana",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma boneca abayomi, feita de pedaços de tecido amarrados, sem usar cola nem tesoura.",
        },
        {
          kind: "fill-blank",
          instruction: "Complete: a boneca abayomi é feita com nós de ___ (que material?).",
          items: [
            "___",
          ],
          note: "Resposta esperada: tecido ou pano.",
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que combinam com a boneca abayomi:",
          items: [
            "TECIDO",
            "NÓS",
            "CORES",
            "PILHA",
            "PLÁSTICO",
            "TELA",
          ],
        },
        {
          kind: "options",
          instruction: "De onde veio a tradição de fazer a boneca abayomi?",
          options: [
            "Da cultura africana, trazida também pelo povo negro no Brasil",
            "Foi inventada ontem em uma loja de brinquedos",
            "Veio de outro planeta",
            "Ninguém sabe de onde ela veio",
          ],
        },
      ],
    },
    {
      theme: "Brinquedos de quem veio de longe",
      exercises: [
        {
          kind: "lines",
          instruction: "Pergunte na sua família ou na escola se alguém veio de outro lugar bem longe e qual brinquedo essa pessoa trouxe ou lembra. Escreva o nome do brinquedo.",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe um brinquedo que pode ter vindo de outro país junto com uma família que se mudou para cá.",
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que combinam com uma família imigrante, que veio de outro lugar para morar aqui:",
          items: [
            "VIAGEM",
            "NOVA CASA",
            "LEMBRANÇAS",
            "MONSTRO",
            "OUTRO PAÍS",
            "FANTASMA",
          ],
        },
        {
          kind: "options",
          instruction: "Como devemos receber um colega novo que veio de outro lugar, com brinquedos e costumes diferentes?",
          options: [
            "Com respeito e curiosidade para aprender coisas novas com ele",
            "Rindo dos brinquedos dele",
            "Ignorando o colega novo",
            "Pedindo para ele parar de falar sobre o lugar de onde veio",
          ],
        },
      ],
    },
    {
      theme: "Esse brinquedo é para todo mundo?",
      exercises: [
        {
          kind: "options",
          instruction: "Uma criança que usa cadeira de rodas pode brincar de bola?",
          options: [
            "Sim, existem jeitos de adaptar a brincadeira para ela participar",
            "Não, ela nunca pode brincar de bola",
            "Só se ela ficar de pé o tempo todo",
            "Bola é um brinquedo proibido para ela",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as atitudes que ajudam um colega com deficiência a brincar junto:",
          items: [
            "CHAMAR PARA BRINCAR",
            "ADAPTAR A BRINCADEIRA",
            "EXCLUIR O COLEGA",
            "AJUDAR QUANDO PRECISA",
            "RIR DO COLEGA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você e um colega brincando juntos, cada um do seu jeito.",
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de uma brincadeira que todas as crianças da sua turma podem fazer juntas.",
          lines: 1,
        },
      ],
    },
    {
      theme: "Eu sou eu, você é você",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe o seu rosto, do jeito que você é.",
        },
        {
          kind: "lines",
          instruction: "Escreva o seu nome e uma coisa de que você gosta muito.",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que mostram que as pessoas podem ser diferentes umas das outras:",
          items: [
            "ALTURA",
            "COR DA PELE",
            "JEITO DE RIR",
            "GOSTOS",
            "IGUAIS EM TUDO",
          ],
        },
        {
          kind: "options",
          instruction: "Se um colega gosta de coisas diferentes das que você gosta, o que isso significa?",
          options: [
            "Que cada pessoa é diferente, e isso é normal e deve ser respeitado",
            "Que esse colega está errado",
            "Que vocês não podem mais ser amigos",
            "Que ele precisa gostar das mesmas coisas que você",
          ],
        },
      ],
    },
    {
      theme: "Cada um vê do seu jeito",
      exercises: [
        {
          kind: "options",
          instruction: "Duas crianças olham para a mesma nuvem no céu. Uma diz que parece um cachorro, a outra diz que parece uma flor. Isso pode acontecer?",
          options: [
            "Sim, cada pessoa pode enxergar a mesma coisa de um jeito diferente",
            "Não, só existe uma resposta certa",
            "Não, uma das duas está mentindo",
            "Isso nunca pode acontecer",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma nuvem do jeito que você imagina, com a forma de alguma coisa.",
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que mostram que as pessoas podem pensar diferente sobre a mesma coisa:",
          items: [
            "OPINIÃO",
            "GOSTO",
            "OLHAR",
            "ÚNICO JEITO CERTO",
            "IDEIA",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o que você acha mais bonito: o sol ou a lua? Diga por quê.",
          lines: 2,
        },
      ],
    },
    {
      theme: "De onde vem a água que usamos em São Paulo?",
      exercises: [
        {
          kind: "options",
          instruction: "Antes de chegar na sua torneira, de onde vem a maior parte da água que você usa em casa?",
          options: [
            "De rios e represas que ficam fora da cidade, tratados e enviados por encanamentos",
            "É fabricada em uma fábrica de água",
            "Vem direto da chuva que cai no telhado da sua casa",
            "Nasce dentro da própria caixa d'água do prédio",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o uso da água no seu dia a dia:",
          items: [
            "Usamos água para __________ os alimentos antes de comer.",
            "A água que sai da torneira passa por um tratamento para ficar __________ para beber.",
            "Se a água faltasse por um dia inteiro, a atividade que mais me atrapalharia seria __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque apenas as atividades do dia a dia que dependem diretamente do uso da água:",
          items: [
            "escovar os dentes",
            "lavar roupa",
            "acender a luz",
            "cozinhar o almoço",
            "assistir televisão",
            "tomar banho",
            "dar descarga",
            "carregar o celular",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno texto contando três momentos do seu dia em que você usa água, do momento em que acorda até a hora de dormir.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Os rios na vida das pessoas: transporte, trabalho e lazer",
      exercises: [
        {
          kind: "options",
          instruction: "Por que, no passado, muitas cidades e povoados nasceram nas margens de rios?",
          options: [
            "Porque o rio oferecia água, alimento e um caminho para se locomover",
            "Porque os rios eram usados apenas para fotografias",
            "Porque não existia outro lugar disponível para morar",
            "Porque os rios impediam a chegada de outras pessoas",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as formas como as pessoas usam os rios até os dias de hoje:",
          items: [
            "pesca",
            "transporte de barcos e balsas",
            "passeio e lazer nas margens",
            "construção de arranha-céus",
            "irrigação de plantações",
            "fabricação de roupas em fábricas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a relação das pessoas com os rios:",
          items: [
            "Comunidades ribeirinhas usam o rio para pescar e para __________.",
            "Em algumas cidades, o rio ainda é usado para o __________ de pessoas e mercadorias em barcos.",
            "Muitas famílias visitam as margens de um rio para __________ nos finais de semana.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma cena mostrando pessoas usando um rio: pode ser para trabalhar, se deslocar ou se divertir. Não esqueça de dar um título ao seu desenho.",
        },
      ],
    },
    {
      theme: "Seguindo o caminho da água até a cidade",
      exercises: [
        {
          kind: "lines",
          instruction: "Explique com suas palavras, em ordem, o caminho que a água percorre desde o manancial até chegar na torneira da sua casa.",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o caminho da água até a cidade:",
          items: [
            "A água que abastece São Paulo vem principalmente de __________ e represas.",
            "Depois de captada, a água passa por uma estação de __________ antes de ser distribuída.",
            "A água tratada chega às casas por meio de uma rede de __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras relacionadas ao abastecimento de água de uma cidade:",
          items: [
            "manancial",
            "represa",
            "encanamento",
            "estação de tratamento",
            "semáforo",
            "calçada",
            "reservatório",
            "caminhão de lixo",
          ],
        },
        {
          kind: "options",
          instruction: "O que é um manancial?",
          options: [
            "Um local, como um rio ou represa, de onde se retira água para abastecer a população",
            "Um tipo de caminhão que entrega água",
            "Um aparelho que limpa a água dentro de casa",
            "Um documento que autoriza o uso de água",
          ],
        },
      ],
    },
    {
      theme: "Rios escondidos: por que não vemos mais alguns rios de São Paulo?",
      exercises: [
        {
          kind: "options",
          instruction: "O que aconteceu com vários rios e córregos da cidade de São Paulo ao longo da sua história?",
          options: [
            "Foram colocados dentro de canos ou canalizados sob avenidas, ficando escondidos da vista",
            "Secaram completamente e desapareceram sozinhos",
            "Foram transportados para outra cidade",
            "Nunca existiram, é apenas uma lenda",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que a cidade de São Paulo canalizou e cobriu vários de seus rios e córregos ao longo do tempo.",
          lines: 4,
        },
        {
          kind: "word-select",
          instruction: "Marque os rios e córregos que fizeram parte da história da cidade de São Paulo:",
          items: [
            "Anhangabaú",
            "Tamanduateí",
            "Saracura",
            "Sena",
            "Pinheiros",
            "Danúbio",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre os rios escondidos de São Paulo:",
          items: [
            "A avenida 23 de Maio foi construída sobre o antigo curso do rio __________.",
            "Hoje, muitos moradores não sabem que embaixo de algumas avenidas existe um __________.",
          ],
        },
      ],
    },
    {
      theme: "Como São Paulo usou a água de seus rios ao longo do tempo",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva um texto explicando como o uso do rio Tietê pelos moradores de São Paulo mudou ao longo do tempo, do passado até hoje.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "No começo do século XX, como muitas famílias paulistanas usavam as águas do rio Tietê?",
          options: [
            "Para nadar, pescar e passear, pois as águas ainda eram limpas",
            "Apenas para gerar energia elétrica em usinas",
            "Somente para o transporte de navios grandes",
            "As pessoas nunca se aproximavam do rio",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete comparando o passado e o presente do uso da água em São Paulo:",
          items: [
            "No passado, era comum as pessoas __________ nas águas do Tietê.",
            "Hoje, por causa da poluição, essa mesma atividade se tornou __________.",
            "Ao longo do tempo, o crescimento da cidade fez com que os rios passassem a ser usados também para __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os motivos que fizeram os rios de São Paulo mudarem ao longo da história da cidade:",
          items: [
            "crescimento da população",
            "construção de indústrias",
            "despejo de esgoto sem tratamento",
            "plantio de árvores nativas",
            "aumento de prédios e avenidas",
            "diminuição do número de moradores",
          ],
        },
      ],
    },
    {
      theme: "Grandes rios do Brasil e suas histórias",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com o nome do rio brasileiro correspondente:",
          items: [
            "O rio __________ é o maior rio do mundo em volume de água e corta a floresta amazônica.",
            "O rio __________ é conhecido como 'Velho Chico' e atravessa o sertão nordestino.",
            "O rio __________ corta a cidade de São Paulo e deu nome ao estado.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que o rio São Francisco é chamado de 'rio da integração nacional'?",
          options: [
            "Porque atravessa várias regiões do Brasil e leva água para lugares secos do sertão",
            "Porque nasce e termina dentro da mesma cidade",
            "Porque só existe dentro de um único estado",
            "Porque foi construído por engenheiros no século passado",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os grandes rios brasileiros citados nesta aula:",
          items: [
            "Tietê",
            "São Francisco",
            "Amazonas",
            "Sena",
            "Danúbio",
            "Tâmisa",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um grande rio brasileiro e escreva o que você sabe sobre a sua importância para as pessoas que vivem perto dele.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Tietê, São Francisco e Amazonas: ontem e hoje",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete relacionando cada rio à sua característica marcante:",
          items: [
            "O rio __________ hoje sofre com poluição grave dentro da cidade de São Paulo, mas no passado tinha águas limpas usadas para lazer.",
            "O rio __________ enfrenta períodos de seca que prejudicam comunidades ribeirinhas do sertão nordestino.",
            "O rio __________ é fundamental para os povos da floresta amazônica, que dependem dele para transporte e alimentação.",
          ],
        },
        {
          kind: "options",
          instruction: "O que esses três rios têm em comum, apesar de estarem em regiões tão diferentes do Brasil?",
          options: [
            "Todos são importantes para a vida e a história das pessoas que moram perto deles",
            "Todos têm exatamente o mesmo tamanho",
            "Todos nascem no mesmo lugar",
            "Nenhum deles é usado pelas pessoas hoje em dia",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um desses três rios e compare como ele era no passado e como está hoje.",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque os problemas que podem afetar rios brasileiros como o Tietê e o São Francisco:",
          items: [
            "poluição por esgoto",
            "desmatamento das margens",
            "assoreamento",
            "excesso de chuva no oceano",
            "seca prolongada",
            "reflorestamento constante",
          ],
        },
      ],
    },
    {
      theme: "Um rio famoso do mundo",
      exercises: [
        {
          kind: "draw",
          instruction: "Escolha um rio famoso do mundo estudado em aula e desenhe uma cena representando sua importância histórica. Escreva o nome do rio embaixo do desenho.",
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno texto contando a história de um rio famoso do mundo: onde ele fica, quais povos vivem perto dele e por que ele é importante.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "Por que muitos rios famosos do mundo, como o Nilo, são tão importantes na história da humanidade?",
          options: [
            "Porque permitiram que civilizações antigas se desenvolvessem perto de suas águas",
            "Porque foram criados pelo ser humano há poucos anos",
            "Porque nunca tiveram nenhuma população vivendo perto deles",
            "Porque só servem para fazer fronteira entre países",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a importância histórica de um rio famoso:",
          items: [
            "Um rio famoso do mundo que eu conheço se chama __________.",
            "Esse rio é importante porque __________.",
          ],
        },
      ],
    },
    {
      theme: "Rios que cruzam continentes: Tejo, Nilo e Níger",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete relacionando cada rio ao seu país ou continente:",
          items: [
            "O rio Tejo passa pela cidade de Lisboa, em __________.",
            "O rio Nilo é fundamental para a história do Egito, no continente __________.",
            "O rio Níger atravessa o Mali e outros países da região __________ da África.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que o rio Nilo foi tão importante para o surgimento do antigo Egito?",
          options: [
            "Suas cheias fertilizavam as margens, permitindo o plantio de alimentos no meio do deserto",
            "Ele era usado apenas para construir pirâmides",
            "Ele separava o Egito de todos os outros povos",
            "Ele só existia durante o inverno",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os rios que cruzam continentes diferentes do Brasil, estudados nesta aula:",
          items: [
            "Tejo",
            "Nilo",
            "Níger",
            "Tietê",
            "São Francisco",
            "Amazonas",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um dos rios Tejo, Nilo ou Níger e explique por que ele é importante para o país onde está localizado.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Visita a um rio ou córrego da cidade",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe o rio, córrego, represa ou nascente que você visitou ou conhece na sua cidade, mostrando como ele é hoje.",
        },
        {
          kind: "lines",
          instruction: "Escreva um relato sobre a visita ou observação de um rio, córrego ou represa: o que você viu, sentiu e observou sobre o local.",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque as coisas que podem ser observadas durante a visita a um rio ou córrego da cidade:",
          items: [
            "cor da água",
            "presença de lixo nas margens",
            "plantas ao redor",
            "animais na água",
            "prédios ao fundo",
            "cheiro do local",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a observação de um rio ou córrego da cidade:",
          items: [
            "O nome do rio ou córrego que eu observei ou conheço é __________.",
            "Uma coisa que me chamou atenção nesse local foi __________.",
          ],
        },
      ],
    },
    {
      theme: "Quem vive à beira dos rios? Conhecendo populações ribeirinhas",
      exercises: [
        {
          kind: "options",
          instruction: "O que caracteriza uma população ribeirinha?",
          options: [
            "São pessoas que vivem às margens de rios e organizam sua vida a partir deles",
            "São pessoas que nunca saem de casa",
            "São pessoas que moram apenas em grandes cidades litorâneas",
            "São pessoas que trabalham somente em fábricas",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um texto explicando como os rios influenciam o modo de vida das populações ribeirinhas: moradia, alimentação, transporte e trabalho.",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque os costumes e atividades comuns entre populações ribeirinhas:",
          items: [
            "pesca para alimentação",
            "casas de palafita",
            "transporte em canoas e barcos",
            "uso do metrô todos os dias",
            "cultivo de mandioca nas margens",
            "trabalho em escritórios de vidro",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre populações ribeirinhas:",
          items: [
            "As populações ribeirinhas têm um conhecimento profundo sobre os __________ do rio, como cheias e secas.",
            "Muitas casas ribeirinhas são construídas sobre palafitas para se proteger das __________ do rio.",
          ],
        },
      ],
    },
    {
      theme: "Festas e crenças ligadas à água: heranças indígenas, africanas e europeias",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete relacionando cada crença ou festa à sua herança cultural:",
          items: [
            "A crença em Iara, a mãe-d'água que vive nos rios, é uma herança __________.",
            "A festa em homenagem a Iemanjá, rainha do mar, é uma herança __________.",
            "As procissões de barcos em homenagem a santos, como Nossa Senhora dos Navegantes, são uma herança __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que existem tantas festas e crenças diferentes ligadas à água no Brasil?",
          options: [
            "Porque o Brasil reúne heranças culturais de povos indígenas, africanos e europeus que se misturaram ao longo da história",
            "Porque a água só é importante para um único povo",
            "Porque essas festas foram inventadas recentemente e não têm história",
            "Porque cada estado brasileiro proíbe as festas dos outros",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque elementos ligados a festas ou crenças relacionadas à água:",
          items: [
            "Iemanjá",
            "Iara",
            "procissão de barcos",
            "flores no mar",
            "desfile de carros",
            "oferendas às margens do rio",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma festa ou crença ligada à água e explique de qual herança cultural (indígena, africana ou europeia) ela vem e como ela é celebrada.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Rios poluídos, vidas afetadas: os problemas das águas de São Paulo",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é uma das principais causas da poluição do rio Tietê dentro da cidade de São Paulo?",
          options: [
            "O despejo de esgoto doméstico e industrial sem tratamento adequado",
            "O excesso de peixes nadando no rio",
            "A quantidade grande de chuva na região",
            "O plantio de árvores nas margens do rio",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os grupos de pessoas que costumam ser mais afetados pela poluição dos rios de São Paulo:",
          items: [
            "famílias que moram perto das margens",
            "pescadores locais",
            "crianças que brincam perto do rio",
            "moradores de bairros muito distantes do rio",
            "pessoas que dependem da pesca para se alimentar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre os problemas das águas poluídas em São Paulo:",
          items: [
            "A poluição da água pode causar doenças em pessoas que têm contato __________ com o rio.",
            "Um mau cheiro forte perto de um rio geralmente indica a presença de __________ não tratado.",
            "Uma solução para reduzir a poluição dos rios é investir em __________ de esgoto.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um texto explicando como a poluição de um rio pode mudar a vida das pessoas que moram perto dele.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Conviver com as diferenças: uma cidade de muitos povos",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva um texto explicando por que é importante respeitar as diferentes culturas que formam a cidade de São Paulo, incluindo suas crenças e festas ligadas à água.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "O que significa conviver com o respeito à diferença em uma sociedade formada por muitos povos?",
          options: [
            "Aceitar e valorizar costumes, crenças e formas de viver diferentes das nossas",
            "Obrigar todas as pessoas a seguirem a mesma cultura",
            "Ignorar as tradições dos outros grupos",
            "Escolher apenas uma cultura como a mais correta",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque atitudes que demonstram respeito à diversidade cultural de uma cidade:",
          items: [
            "ouvir com interesse sobre uma festa de outra cultura",
            "zombar de uma crença diferente da minha",
            "aprender sobre costumes de outros povos",
            "impedir uma celebração religiosa alheia",
            "participar respeitosamente de uma tradição diferente da sua",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a convivência entre diferentes culturas em São Paulo:",
          items: [
            "São Paulo é uma cidade formada por pessoas de origem __________, __________ e __________.",
            "Respeitar a diferença significa não __________ os costumes dos outros.",
          ],
        },
      ],
    },
    {
      theme: "O mesmo evento, sentidos diferentes: tempo e espaço na nossa relação com a água",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um mesmo evento relacionado à água, como uma cheia de rio ou um dia de chuva forte, e explique como ele pode ter significados diferentes para pessoas em lugares diferentes.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "Para uma população ribeirinha da Amazônia, o que a cheia de um rio pode significar?",
          options: [
            "Um fenômeno natural que faz parte do ciclo de vida do rio, trazendo peixes e fertilizando o solo",
            "Um problema causado exclusivamente por pessoas da cidade",
            "Um evento que nunca acontece na região",
            "Algo que não interfere na vida das pessoas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete comparando sentidos diferentes para um mesmo evento ligado à água:",
          items: [
            "Para quem mora perto de um rio, uma forte chuva pode significar __________.",
            "Para quem mora em um apartamento distante do rio, essa mesma chuva pode significar apenas __________.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe duas cenas lado a lado mostrando como um mesmo evento com água (como uma chuva forte) pode ser vivido de formas diferentes por pessoas em lugares diferentes.",
        },
      ],
    },
    {
      theme: "Toda fonte conta uma história: quem fez, onde e quando",
      exercises: [
        {
          kind: "options",
          instruction: "Por que é importante saber quem fez uma fotografia, um texto ou um objeto antigo, além de olhar apenas para a imagem ou o texto em si?",
          options: [
            "Porque saber o autor, o local e a época ajuda a entender melhor a mensagem e o contexto da fonte",
            "Porque isso não muda nada na compreensão da fonte histórica",
            "Porque só interessa saber a cor da fonte",
            "Porque toda fonte histórica é sempre igual, não importa quem a fez",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre como analisar uma fonte histórica:",
          items: [
            "Uma fotografia antiga de um rio pode nos contar sobre a __________ em que foi tirada.",
            "Saber quem produziu um relato sobre um rio ajuda a entender seu ponto de __________.",
            "O local onde uma fonte foi criada também influencia as informações que ela __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as informações importantes para entender uma fonte histórica, como uma foto antiga de um rio:",
          items: [
            "quem produziu a fonte",
            "em que época foi produzida",
            "em que lugar foi produzida",
            "a cor da roupa de quem está lendo hoje",
            "para que finalidade foi criada",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma imagem antiga de um rio de São Paulo que você já viu e escreva o que ela pode nos contar sobre quem a fez, onde e quando.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Um rio, muitos olhares: percepções diferentes sobre um mesmo lugar",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um rio estudado nas aulas e escreva como ele pode ser visto de formas diferentes por um pescador, um morador da cidade e um turista.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "Por que pessoas diferentes podem ter percepções diferentes sobre o mesmo rio?",
          options: [
            "Porque cada pessoa tem uma experiência, uma história de vida e uma relação diferente com aquele lugar",
            "Porque o rio muda de aparência para cada pessoa que olha",
            "Porque só existe uma forma correta de enxergar um rio",
            "Porque as pessoas nunca conversam sobre os rios",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque quem pode ter um olhar diferente sobre um mesmo rio:",
          items: [
            "pescador que vive da pesca no rio",
            "morador que vê o rio poluído todo dia",
            "cientista que estuda a qualidade da água",
            "turista que visita o rio pela primeira vez",
            "criança que brinca perto do rio",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o mesmo rio visto por duas pessoas diferentes, como um pescador e um morador da cidade, mostrando o que cada um pode notar de diferente.",
        },
      ],
    },
    {
      theme: "Como vivemos em São Paulo hoje",
      exercises: [
        {
          kind: "options",
          instruction: "Qual desses NÃO é um serviço urbano que encontramos em São Paulo hoje?",
          options: [
            "Coleta de lixo e saneamento básico",
            "Transporte por metrô e ônibus",
            "Hospitais e postos de saúde",
            "Colheita de trigo em plantação própria",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a rotina de quem mora em São Paulo:",
          items: [
            "Para ir à escola ou ao trabalho, muitas pessoas usam __________ (ônibus, metrô, carro, bicicleta).",
            "Em prédios e casas da cidade, a água encanada e a energia elétrica chegam por meio de __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que representam espaços comuns na vida urbana de São Paulo:",
          items: [
            "praça",
            "avenida",
            "shopping",
            "aldeia",
            "estação de metrô",
            "oca",
          ],
        },
        {
          kind: "lines",
          instruction: "Descreva sua rotina em um dia comum: o que você faz de manhã, à tarde e à noite, e quais espaços da cidade você usa nesse dia.",
          lines: 5,
          note: "Incentive o aluno a citar lugares reais do bairro, como escola, mercado, praça ou ponto de ônibus.",
        },
      ],
    },
    {
      theme: "São Paulo ontem e hoje",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha um elemento da cidade (transporte, iluminação, comunicação ou construção) e explique como ele era há 100 anos e como é hoje.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "O que mais mudou na paisagem de São Paulo ao longo do tempo?",
          options: [
            "A cidade cresceu muito e ganhou prédios altos e mais ruas asfaltadas",
            "A cidade diminuiu de tamanho",
            "A cidade deixou de ter pessoas morando nela",
            "Nada mudou desde a fundação da cidade",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete comparando épocas diferentes:",
          items: [
            "Antigamente, muitas ruas de São Paulo eram de __________, e hoje a maioria é asfaltada.",
            "No passado, as notícias demoravam para chegar; hoje, com a internet, as informações chegam de forma __________.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe em duas partes: de um lado, como você imagina uma rua de São Paulo no passado; do outro, como essa mesma rua pode ser hoje.",
          note: "Peça para o aluno legendar os elementos de cada época (transporte, construções, roupas).",
        },
      ],
    },
    {
      theme: "Fontes que contam a história da cidade",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os itens que podem ser usados como fontes históricas para estudar a cidade de São Paulo:",
          items: [
            "fotografia antiga",
            "planta da cidade",
            "carta de um morador",
            "jogo de videogame atual",
            "mapa antigo",
            "propaganda de hoje",
          ],
        },
        {
          kind: "options",
          instruction: "Por que fotografias antigas são consideradas fontes históricas importantes?",
          options: [
            "Porque mostram como eram as ruas, roupas e construções de outra época",
            "Porque são sempre coloridas e bonitas",
            "Porque foram feitas no computador",
            "Porque não têm nenhuma informação útil",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o tipo de fonte histórica adequada:",
          items: [
            "Um documento que mostra como as ruas de uma cidade estavam organizadas em determinada época é chamado de __________.",
            "Quando uma pessoa idosa conta o que viveu na infância, essa é uma fonte histórica chamada __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Imagine que você encontrou uma foto antiga de uma rua de São Paulo. Escreva o que você observaria nela para descobrir como era a vida naquela época.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Cidades que já foram capital do Brasil",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a ordem correta das cidades que já foram capital do Brasil?",
          options: [
            "Salvador, depois Rio de Janeiro, depois Brasília",
            "Brasília, depois São Paulo, depois Salvador",
            "Rio de Janeiro, depois Salvador, depois Brasília",
            "São Paulo, depois Brasília, depois Salvador",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o nome da cidade correspondente:",
          items: [
            "A primeira capital do Brasil, no período colonial, foi __________.",
            "A capital atual do Brasil, construída no século XX, é __________.",
          ],
          note: "Respostas esperadas: Salvador e Brasília.",
        },
        {
          kind: "word-select",
          instruction: "Marque os bens do patrimônio histórico que podem estar ligados a essas cidades que já foram capital:",
          items: [
            "Pelourinho",
            "Pão de Açúcar",
            "Catedral de Brasília",
            "Cristo Redentor",
            "Estádio construído em 2020",
            "Centro Histórico de Salvador",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma cidade que já foi capital do Brasil e explique por que ela foi escolhida para essa função em sua época.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Uma capital do Brasil e São Paulo",
      exercises: [
        {
          kind: "lines",
          instruction: "Escolha uma cidade que já foi capital do Brasil (Salvador, Rio de Janeiro ou Brasília) e compare sua história com a história de São Paulo.",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Complete com semelhanças e diferenças entre as duas cidades estudadas:",
          items: [
            "Uma semelhança entre São Paulo e essa cidade é __________.",
            "Uma diferença entre São Paulo e essa cidade é __________.",
          ],
        },
        {
          kind: "options",
          instruction: "O que significa dizer que uma cidade foi capital do Brasil?",
          options: [
            "Foi o local onde ficava o governo federal do país em determinada época",
            "Foi a cidade com mais habitantes do mundo",
            "Foi a única cidade brasileira com escolas",
            "Foi a cidade onde o Brasil foi descoberto",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os aspectos que podem ser comparados entre duas cidades ao estudar suas histórias:",
          items: [
            "população",
            "arquitetura",
            "clima do dia de hoje",
            "importância política",
            "transporte",
            "cor do céu agora",
          ],
        },
      ],
    },
    {
      theme: "Uma cidade da América Latina",
      exercises: [
        {
          kind: "options",
          instruction: "A América Latina é formada por países que ficam principalmente em qual continente?",
          options: [
            "América",
            "Europa",
            "Ásia",
            "Oceania",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com informações sobre a cidade latino-americana estudada:",
          items: [
            "A cidade estudada, __________, fica no país __________.",
            "Uma característica marcante dessa cidade é __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Compare a cidade latino-americana estudada com São Paulo: o que elas têm em comum e o que é diferente na história de cada uma?",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque os países que fazem parte da América Latina:",
          items: [
            "Argentina",
            "México",
            "Peru",
            "Japão",
            "Colômbia",
            "Alemanha",
          ],
        },
      ],
    },
    {
      theme: "Uma cidade da África",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com informações sobre a cidade africana estudada:",
          items: [
            "A cidade estudada, __________, fica no país __________, no continente africano.",
            "Uma tradição ou característica importante dessa cidade é __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que é importante estudar a história de cidades africanas na escola?",
          options: [
            "Porque a África tem uma história rica e ligada à história do Brasil e do mundo",
            "Porque a África não tem cidades importantes",
            "Porque só existe um país na África",
            "Porque a história africana não tem relação com o Brasil",
          ],
        },
        {
          kind: "lines",
          instruction: "Compare a cidade africana estudada com São Paulo, destacando pelo menos uma semelhança e uma diferença.",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque os países que ficam no continente africano:",
          items: [
            "Nigéria",
            "Egito",
            "Moçambique",
            "Portugal",
            "Quênia",
            "Itália",
          ],
        },
      ],
    },
    {
      theme: "O que as cidades têm em comum",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os elementos que costumam existir em quase todas as cidades estudadas ao longo do ano:",
          items: [
            "moradias",
            "ruas ou caminhos de circulação",
            "locais de comércio",
            "espaços de convivência",
            "naves espaciais",
            "governo ou organização social",
          ],
        },
        {
          kind: "lines",
          instruction: "Pensando em todas as cidades que você estudou este ano (São Paulo, uma antiga capital do Brasil, uma cidade da América Latina e uma da África), escreva o que elas têm em comum.",
          lines: 6,
        },
        {
          kind: "fill-blank",
          instruction: "Complete com características gerais das cidades:",
          items: [
            "Toda cidade precisa organizar o transporte das pessoas e das __________.",
            "As cidades mudam com o tempo por causa do crescimento da __________ e das novas tecnologias.",
          ],
        },
        {
          kind: "options",
          instruction: "Mesmo sendo de países diferentes, por que as cidades estudadas se parecem em alguns aspectos?",
          options: [
            "Porque toda cidade organiza moradia, trabalho, transporte e convivência entre as pessoas",
            "Porque todas as cidades do mundo têm o mesmo nome",
            "Porque todas foram fundadas no mesmo ano",
            "Porque não existem diferenças entre elas",
          ],
        },
      ],
    },
    {
      theme: "Povos indígenas do Xingu",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre os povos indígenas do Xingu:",
          items: [
            "O Parque Indígena do Xingu fica localizado no estado brasileiro do __________.",
            "No Parque do Xingu vivem __________ povos indígenas diferentes, cada um com sua própria língua e cultura.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual afirmação está correta sobre os povos indígenas do Xingu?",
          options: [
            "São vários povos diferentes, cada um com língua, costumes e histórias próprias",
            "Todos os povos indígenas do Brasil são iguais entre si",
            "Os povos do Xingu não existem mais atualmente",
            "Todos os povos do Xingu falam a mesma língua",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque nomes de povos indígenas que vivem no Parque do Xingu:",
          items: [
            "Kamaiurá",
            "Yawalapiti",
            "Kayabi",
            "Vikings",
            "Waurá",
            "Aztecas",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o que você aprendeu sobre onde vivem os povos indígenas do Xingu e por que eles são vários povos diferentes, e não um só.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Modo de vida no Xingu",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque elementos que fazem parte do modo de vida de povos indígenas do Xingu:",
          items: [
            "pesca nos rios",
            "rituais e festas tradicionais",
            "artesanato com materiais da natureza",
            "shopping center",
            "moradia comunitária (maloca)",
            "metrô",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre o modo de vida no Xingu:",
          items: [
            "Os povos do Xingu retiram da natureza, como os rios e as matas, grande parte de sua __________ e de seus materiais.",
            "As tradições, como pinturas corporais e rituais, são transmitidas de geração em geração pelos __________ e anciãos.",
          ],
        },
        {
          kind: "lines",
          instruction: "Descreva três aspectos do modo de vida dos povos indígenas do Xingu que você aprendeu, como moradia, alimentação ou organização social.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "O que caracteriza a relação dos povos do Xingu com a natureza?",
          options: [
            "Uma relação de cuidado e uso equilibrado dos recursos naturais",
            "Uma relação de total desinteresse pela natureza",
            "Uma relação em que a natureza é irrelevante para a cultura",
            "Uma relação baseada apenas em máquinas industriais",
          ],
        },
      ],
    },
    {
      theme: "Vida urbana e vida indígena: semelhanças e diferenças",
      exercises: [
        {
          kind: "lines",
          instruction: "Compare a vida em São Paulo com o modo de vida dos povos indígenas do Xingu, apontando uma semelhança e uma diferença importantes.",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Complete apontando semelhanças entre os dois modos de vida:",
          items: [
            "Tanto na cidade quanto no Xingu, as pessoas vivem em __________ (grupos organizados de convivência).",
            "Em ambos os lugares existem tradições e formas próprias de comemorar, chamadas de __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os aspectos que são DIFERENTES entre a vida urbana em São Paulo e a vida em uma aldeia do Xingu:",
          items: [
            "tipo de moradia",
            "forma de obter alimento",
            "meio de transporte usado",
            "existência de organização social",
            "existência de família",
            "uso de tecnologia digital no dia a dia",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a forma mais adequada de comparar a vida urbana e a vida indígena do Xingu?",
          options: [
            "Reconhecer que são modos de vida diferentes, cada um válido em seu contexto",
            "Considerar que um modo de vida é mais avançado que o outro",
            "Dizer que a vida indígena é atrasada em relação à vida urbana",
            "Ignorar as diferenças entre os dois modos de vida",
          ],
        },
      ],
    },
    {
      theme: "Respeitando diferentes modos de vida",
      exercises: [
        {
          kind: "options",
          instruction: "O que significa respeitar um modo de vida diferente do seu?",
          options: [
            "Reconhecer o valor da cultura do outro, mesmo sendo diferente da sua",
            "Achar que sua cultura é a única correta",
            "Ignorar as tradições de outros povos",
            "Rir de costumes diferentes dos seus",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva por que é importante respeitar os diferentes povos, culturas e épocas que estudamos ao longo do ano, mesmo quando seus costumes são muito diferentes dos nossos.",
          lines: 5,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre respeito às diferenças:",
          items: [
            "Nenhuma cultura é __________ do que outra; todas merecem ser respeitadas.",
            "Preconceito é quando julgamos alguém de forma injusta por causa de sua __________, religião ou modo de vida.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as atitudes que demonstram respeito à diversidade cultural:",
          items: [
            "ouvir com atenção histórias de outros povos",
            "valorizar tradições diferentes das suas",
            "zombar de costumes que você não conhece",
            "aprender sobre outras culturas",
            "excluir quem é diferente",
          ],
        },
      ],
    },
    {
      theme: "São Paulo acessível",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os itens que ajudam a tornar a cidade de São Paulo mais acessível para todas as pessoas:",
          items: [
            "rampas de acesso",
            "piso tátil",
            "ônibus com elevador",
            "escadas sem corrimão",
            "Libras (Língua Brasileira de Sinais)",
            "semáforo sonoro",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre acessibilidade na cidade:",
          items: [
            "A Libras é a língua usada por pessoas __________ para se comunicar.",
            "O piso tátil ajuda pessoas com deficiência __________ a se locomover pelas calçadas com segurança.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que a acessibilidade nas cidades é importante?",
          options: [
            "Porque garante que todas as pessoas, com ou sem deficiência, possam circular e participar da vida na cidade",
            "Porque serve apenas para deixar as ruas mais bonitas",
            "Porque é uma exigência que não beneficia ninguém",
            "Porque só é útil para poucas pessoas",
          ],
        },
        {
          kind: "lines",
          instruction: "Observe as calçadas e ônibus do seu bairro (ou pense em exemplos que você conhece) e escreva o que já é acessível e o que ainda poderia melhorar.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Identidades plurais na cidade",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva sobre a diversidade de pessoas que vivem em São Paulo: diferentes origens, religiões, culturas e famílias. Por que essa diversidade é importante?",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque exemplos de grupos e culturas que fazem parte da diversidade de São Paulo:",
          items: [
            "imigrantes de outros países",
            "comunidades religiosas diferentes",
            "povos indígenas",
            "pessoas de diferentes regiões do Brasil",
            "apenas um único grupo",
            "famílias de diferentes formações",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a diversidade da cidade:",
          items: [
            "São Paulo recebeu, ao longo da sua história, imigrantes de vários países, como __________ e __________.",
            "Identidade plural significa que uma cidade é formada por pessoas com histórias e culturas __________.",
          ],
        },
        {
          kind: "options",
          instruction: "O que é uma identidade plural em uma cidade como São Paulo?",
          options: [
            "A convivência de pessoas com origens, culturas e histórias diferentes em um mesmo lugar",
            "A existência de um único tipo de morador na cidade",
            "A ausência de diferenças entre as pessoas",
            "A proibição de culturas diferentes na cidade",
          ],
        },
      ],
    },
    {
      theme: "O cotidiano muda com o tempo",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete comparando o cotidiano de antes e de agora:",
          items: [
            "Antigamente, para se comunicar à distância, as pessoas usavam carta ou telefone fixo; hoje usam __________.",
            "No passado, muitas famílias buscavam água em poços ou chafarizes; hoje a água chega até as casas por meio de __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma rotina simples do dia a dia (como lavar roupa, se comunicar ou fazer compras) e explique como ela mudou ao longo do tempo.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "Por que estudar pequenas rotinas do cotidiano ajuda a entender a história?",
          options: [
            "Porque essas mudanças mostram transformações na tecnologia e na forma de viver das pessoas",
            "Porque o cotidiano nunca muda",
            "Porque rotinas simples não têm relação com a história",
            "Porque só fatos de guerra fazem parte da história",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque hábitos do cotidiano que mudaram bastante nas últimas décadas:",
          items: [
            "forma de se comunicar",
            "forma de assistir filmes e séries",
            "forma de fazer compras",
            "forma de respirar",
            "forma de estudar",
            "forma de dormir",
          ],
        },
      ],
    },
    {
      theme: "Objetos e imagens contam histórias",
      exercises: [
        {
          kind: "options",
          instruction: "O que podemos descobrir observando um objeto antigo, como um rádio ou um brinquedo?",
          options: [
            "Informações sobre a época, os materiais e os costumes de quem o usava",
            "Nada, pois objetos não têm relação com a história",
            "Apenas o preço do objeto hoje em dia",
            "Somente a cor do objeto",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre o que os objetos e imagens revelam:",
          items: [
            "Uma fotografia antiga pode revelar como eram as __________ e os costumes de uma época.",
            "Um objeto usado no passado, como um ferro a carvão, mostra como as pessoas faziam tarefas do dia a dia sem a __________ que temos hoje.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um objeto antigo da sua família ou que você já viu (foto, brinquedo, utensílio) e escreva o que ele revela sobre a época em que foi usado.",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque os itens que podem ser considerados fontes históricas por meio de objetos e imagens:",
          items: [
            "fotografia de família",
            "brinquedo antigo",
            "carta escrita à mão",
            "notícia de hoje no celular",
            "utensílio de cozinha antigo",
            "pintura de época",
          ],
        },
      ],
    },
    {
      theme: "Cada um vê a história de um jeito",
      exercises: [
        {
          kind: "lines",
          instruction: "Imagine duas pessoas que vivenciaram o mesmo fato em épocas ou situações diferentes. Explique por que elas podem contar essa história de formas diferentes.",
          lines: 5,
        },
        {
          kind: "options",
          instruction: "Por que pessoas diferentes podem ter versões diferentes sobre um mesmo acontecimento?",
          options: [
            "Porque cada pessoa vive a realidade a partir do seu próprio olhar, experiência e lugar social",
            "Porque só existe uma versão correta e as outras são sempre mentiras",
            "Porque as pessoas nunca concordam sobre nada",
            "Porque a história não pode ser contada por mais de uma pessoa",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre os diferentes pontos de vista na história:",
          items: [
            "Duas pessoas que vivem no mesmo bairro, mas em condições diferentes, podem ter __________ diferentes sobre a mesma cidade.",
            "Ouvir várias versões sobre um fato histórico ajuda a ter uma visão mais __________ do que aconteceu.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque situações em que pessoas diferentes podem ter percepções diferentes sobre o mesmo momento histórico:",
          items: [
            "um morador antigo e um morador novo do bairro",
            "uma criança e um adulto na mesma época",
            "pessoas de bairros diferentes da cidade",
            "duas cópias idênticas do mesmo documento",
            "pessoas de culturas diferentes",
            "um mesmo texto lido duas vezes pela mesma pessoa",
          ],
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
    {
      theme: "Meu cantinho preferido na escola",
      exercises: [
        {
          kind: "options",
          instruction: "Marque o lugar da escola que você mais gosta de ficar:",
          options: [
            "O pátio",
            "A sala de aula",
            "A biblioteca",
            "A quadra",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares que existem na sua escola:",
          items: [
            "PÁTIO",
            "BIBLIOTECA",
            "QUADRA",
            "COZINHA",
            "PRAIA",
            "SALA DE AULA",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva por que esse cantinho da escola é o seu preferido:",
          lines: 3,
        },
        {
          kind: "draw",
          instruction: "Desenhe o seu cantinho preferido da escola:",
          note: "Capriche nos detalhes!",
        },
      ],
    },
    {
      theme: "Roupas e enfeites de festas tradicionais",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre roupas e enfeites de festa:",
          items: [
            "Na festa junina se usa chapéu de ___",
            "Para dançar quadrilha, muita gente usa roupa ___",
            "Em festas de aniversário, é comum usar chapéu de ___",
            "Algumas roupas de festa têm fitas e ___ coloridos",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os enfeites que podem aparecer em uma festa:",
          items: [
            "BALÃO",
            "FITA",
            "CHAPÉU",
            "BANDEIRINHA",
            "GELADEIRA",
            "COROA",
          ],
        },
        {
          kind: "options",
          instruction: "Marque a roupa que combina com uma festa tradicional:",
          options: [
            "Roupa de festa junina com chapéu de palha",
            "Roupa de dormir",
            "Roupa de banho",
            "Uniforme de trabalho",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma roupa ou enfeite de uma festa que você conhece:",
          note: "Pode ser uma festa da sua família ou do seu bairro.",
        },
      ],
    },
    {
      theme: "Quanto tempo leva? Comparando percursos da turma",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva como você vai da sua casa até a escola e quanto tempo demora:",
          lines: 3,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o caminho até a escola:",
          items: [
            "Eu moro ___ da escola",
            "Eu venho para a escola de ___",
            "O meu caminho até a escola demora mais ou menos ___ minutos",
            "Eu chego na escola andando bem ___",
          ],
        },
        {
          kind: "options",
          instruction: "Marque como você costuma ir para a escola:",
          options: [
            "A pé",
            "De carro",
            "De ônibus",
            "De bicicleta",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o caminho que você faz de casa até a escola:",
          note: "Marque os lugares que você passa no caminho.",
        },
      ],
    },
    {
      theme: "Croqui da mesa da sala de aula",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os objetos que podem estar em cima da sua mesa:",
          items: [
            "LÁPIS",
            "CADERNO",
            "BORRACHA",
            "GELADEIRA",
            "ESTOJO",
            "LIVRO",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de três objetos que ficam em cima da sua mesa:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Marque de onde é a vista de um croqui feito de cima:",
          options: [
            "De cima, olhando para baixo",
            "De lado",
            "De dentro do objeto",
            "De baixo, olhando para cima",
          ],
        },
        {
          kind: "draw",
          instruction: "Observe os objetos em cima da sua mesa e desenhe-os vistos de cima:",
          note: "Desenhe como se estivesse olhando de cima para baixo, igual um passarinho voando.",
        },
      ],
    },
    {
      theme: "Quente ou fria? A temperatura do meu percurso",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o seu caminho até a escola:",
          items: [
            "Nos lugares com muita árvore, eu sinto mais ___",
            "Nos lugares sem sombra, o sol deixa tudo mais ___",
            "No meio do dia, o caminho costuma ficar mais ___",
            "Debaixo da sombra de uma árvore, a temperatura fica mais ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva se o seu caminho até a escola tem mais sol ou mais sombra:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Marque o lugar que costuma ser mais fresquinho:",
          options: [
            "Embaixo de uma árvore grande",
            "No meio do sol, sem sombra nenhuma",
            "Em cima do asfalto quente",
            "Perto de um muro de metal ao sol",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma parte do seu caminho até a escola que tem sombra ou que tem muito sol:",
          note: "Capriche nas árvores ou no sol bem forte.",
        },
      ],
    },
    {
      theme: "Álbum de fotografias do bairro",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os lugares do bairro que podem aparecer em fotografias:",
          items: [
            "PRAÇA",
            "MERCADO",
            "PADARIA",
            "LUA",
            "PONTO DE ÔNIBUS",
            "IGREJA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as legendas das fotografias do bairro:",
          items: [
            "Esta é uma foto da ___ do meu bairro",
            "Nesta foto aparece a ___ onde eu compro pão",
            "Esta fotografia mostra a ___ onde eu brinco",
            "Esta é a foto do meu lugar ___ no bairro",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de três lugares do seu bairro que você colocaria em um álbum de fotos:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Marque como podemos organizar as fotos de um álbum do bairro:",
          options: [
            "Por tipo de lugar (praças, mercados, escolas)",
            "Todas jogadas sem nenhuma ordem",
            "Apenas fotos de outros países",
            "Sem legenda nenhuma",
          ],
        },
      ],
    },
    {
      theme: "Como era o bairro quando meus pais eram crianças",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as brincadeiras que talvez seus pais faziam na rua quando eram crianças:",
          items: [
            "PIÃO",
            "PIPA",
            "AMARELINHA",
            "BOLA DE GUDE",
            "VIDEOGAME",
            "TABLET",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte para alguém da sua família como era o bairro quando essa pessoa era criança. Escreva o que você descobriu:",
          lines: 4,
          note: "Peça ajuda para um adulto responder às suas perguntas.",
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o bairro de antigamente e de hoje:",
          items: [
            "Antigamente, as pessoas brincavam de ___.",
            "Hoje em dia, eu gosto de brincar de ___.",
            "Uma coisa que mudou no bairro foi ___.",
            "Uma coisa que continua igual até hoje é ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe como você imagina que era a rua do seu bairro na época dos seus pais:",
        },
      ],
    },
    {
      theme: "O caderno de receitas da turma",
      exercises: [
        {
          kind: "options",
          instruction: "Marque o que você mais gosta de comer lá em casa:",
          options: [
            "Comida salgada",
            "Doce",
            "Fruta",
            "Sopa quente",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte para alguém da sua família uma receita fácil e gostosa. Escreva o nome do prato e quem te ensinou:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule os ingredientes que podem aparecer em receitas de família:",
          items: [
            "ARROZ",
            "FEIJÃO",
            "CANELA",
            "PIMENTA",
            "LEITE",
            "AÇÚCAR",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o prato que sua família contou para você, prontinho no prato:",
        },
      ],
    },
    {
      theme: "Manual de instruções: como pegar o ônibus certo",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as instruções para pegar o ônibus certo:",
          items: [
            "Primeiro, eu preciso saber o número do ___.",
            "Depois, eu espero o ônibus no ___.",
            "Na hora de entrar, eu mostro o cartão ou pago a ___.",
            "Para descer, eu aperto a campainha e vou até a ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você esperando o ônibus no ponto certo, na calçada:",
        },
        {
          kind: "options",
          instruction: "Marque o lugar certo para esperar o ônibus:",
          options: [
            "No meio da rua",
            "No ponto de ônibus",
            "Correndo atrás do ônibus",
            "Dentro de uma loja",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva, em ordem, os passos para pegar o ônibus certo até a escola:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Caça ao tesouro com pistas de posição",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam posição:",
          items: [
            "EM CIMA",
            "EMBAIXO",
            "ATRÁS",
            "AMARELO",
            "DENTRO",
            "PULAR",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as pistas do caça ao tesouro:",
          items: [
            "O tesouro estava ___ da mesa.",
            "A primeira pista mandava olhar ___ da cadeira.",
            "Eu encontrei a segunda pista ___ do armário.",
            "A última pista estava ___ da porta.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe onde você escondeu (ou encontrou) o tesouro:",
        },
        {
          kind: "options",
          instruction: "Se a pista diz 'atrás da cortina', onde você deve procurar?",
          options: [
            "Em cima da cortina",
            "Atrás da cortina",
            "Dentro da gaveta",
            "Embaixo da cama",
          ],
        },
      ],
    },
    {
      theme: "Texturas que piso no caminho",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as texturas que você pode sentir com os pés no caminho até a escola:",
          items: [
            "ÁSPERO",
            "LISO",
            "MACIO",
            "DURO",
            "MOLHADO",
            "IRREGULAR",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o chão do seu caminho:",
          items: [
            "O chão da calçada costuma ser ___.",
            "Quando chove, o chão de terra fica ___.",
            "A grama do parque é ___ para os pés.",
            "Uma pedra no meio do caminho pode ser ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense no caminho de casa até a escola. Escreva os tipos de chão que você pisa (calçada, terra, grama...):",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Qual desses chãos é mais liso para andar?",
          options: [
            "Calçada de cimento lisa",
            "Terra cheia de pedras",
            "Grama bem alta",
            "Buraco na rua",
          ],
        },
      ],
    },
    {
      theme: "O que descobrimos na saída de campo",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva três coisas que você observou na caminhada ao redor da escola:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule o que você viu durante a saída de campo:",
          items: [
            "ÁRVORES",
            "CARROS",
            "LOJAS",
            "PÁSSAROS",
            "PRAÇA",
            "LIXO NO CHÃO",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a coisa mais interessante que você viu na saída de campo:",
        },
        {
          kind: "fill-blank",
          instruction: "Complete, organizando o que vimos por categoria:",
          items: [
            "Da natureza, nós vimos ___.",
            "Das construções, nós vimos ___.",
            "Dos animais, nós vimos ___.",
            "Uma coisa que me surpreendeu foi ___.",
          ],
        },
      ],
    },
    {
      theme: "Tudo que tem na minha rua",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule o que você encontra na sua rua:",
          items: [
            "ÁRVORE",
            "PLACA",
            "CALÇADA",
            "SEMÁFORO",
            "POSTE",
            "LIXEIRA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a sua rua:",
          items: [
            "Na minha rua tem uma ___",
            "Eu ando na ___ para não andar na rua",
            "Quando o sinal fica ___, os carros param",
          ],
        },
        {
          kind: "options",
          instruction: "Marque o que ajuda a atravessar a rua com segurança:",
          options: [
            "A faixa de pedestre",
            "O semáforo",
            "Correr sem olhar",
            "Olhar para os dois lados",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a sua rua com tudo que tem nela: casas, árvores, postes e outras coisas.",
          note: "Capriche nos detalhes!",
        },
      ],
    },
    {
      theme: "Um cartão-postal do meu bairro",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um cartão-postal do seu bairro, mostrando o lugar que você mais gosta.",
          note: "Não esqueça de colorir!",
        },
        {
          kind: "lines",
          instruction: "Escreva o nome do seu bairro e um lugar bonito que tem nele:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares que podem aparecer em um cartão-postal do seu bairro:",
          items: [
            "PRAÇA",
            "IGREJA",
            "PADARIA",
            "RIO",
            "MERCADO",
            "PARQUE",
          ],
        },
        {
          kind: "options",
          instruction: "Um cartão-postal serve para:",
          options: [
            "Mostrar um lugar bonito",
            "Contar uma história inventada",
            "Fazer compras",
            "Assistir televisão",
          ],
        },
      ],
    },
    {
      theme: "O trajeto da minha casa até a escola, em texto",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete o texto sobre o seu trajeto até a escola:",
          items: [
            "Eu saio de ___ para ir à escola",
            "Eu vou para a escola de ___",
            "O caminho até a escola demora mais ou menos ___",
          ],
        },
        {
          kind: "options",
          instruction: "Marque como você vai para a escola:",
          options: [
            "A pé",
            "De carro",
            "De ônibus",
            "De bicicleta",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um texto contando o caminho que você faz de casa até a escola:",
          lines: 5,
          note: "Conte o que você vê no caminho.",
        },
        {
          kind: "draw",
          instruction: "Desenhe o caminho que você faz de casa até a escola.",
        },
      ],
    },
    {
      theme: "Robozinho obediente",
      exercises: [
        {
          kind: "options",
          instruction: "Marque os comandos que servem para guiar o robozinho:",
          options: [
            "Vire à direita",
            "Vire à esquerda",
            "Ande para frente",
            "Feche os olhos",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete os comandos do robozinho:",
          items: [
            "Ande três passos para ___",
            "Vire para a ___",
            "Depois vire para a ___",
            "Agora ande para ___",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva os comandos que você deu para o seu colega na brincadeira do robozinho:",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Desenhe o caminho que o robozinho andou, usando setas para frente, trás, direita e esquerda.",
          note: "Use setas para mostrar o caminho.",
        },
      ],
    },
    {
      theme: "Mapa sensorial do meu percurso",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os sons que você escuta no caminho até a escola:",
          items: [
            "BUZINA",
            "PÁSSAROS",
            "MÚSICA",
            "CACHORRO LATINDO",
            "SILÊNCIO",
            "PESSOAS CONVERSANDO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o que você sente no caminho até a escola:",
          items: [
            "No caminho eu sinto o cheiro de ___",
            "No caminho eu escuto o som de ___",
            "No caminho eu toco em uma coisa que é ___ (macia, dura, áspera...)",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o seu mapa sensorial: marque no caminho os lugares onde você sente cheiros, ouve sons e toca em texturas diferentes.",
          note: "Use desenhos ou símbolos para cada sentido.",
        },
        {
          kind: "lines",
          instruction: "Escreva qual foi o cheiro ou som mais interessante que você notou no caminho até a escola:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Gráfico das respostas da entrevista",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva a pergunta que você fez para a sua família na entrevista:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete com as respostas da sua entrevista:",
          items: [
            "Minha mãe respondeu: ___",
            "Meu pai respondeu: ___",
            "Mais pessoas da família responderam: ___",
          ],
        },
        {
          kind: "options",
          instruction: "Um gráfico serve para:",
          options: [
            "Mostrar respostas de um jeito organizado",
            "Contar uma piada",
            "Desenhar um animal",
            "Escrever uma carta",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o gráfico da turma com as respostas da entrevista, usando quadradinhos ou bolinhas para cada resposta.",
          note: "Cada resposta pode ser uma cor diferente.",
        },
      ],
    },
    {
      theme: "Minha casa e minha escola: parecidas ou diferentes?",
      exercises: [
        {
          kind: "options",
          instruction: "Marque as coisas que existem tanto na sua casa quanto na sua escola:",
          options: [
            "Uma porta",
            "Uma cama",
            "Um banheiro",
            "Uma televisão da sua família",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que lembram a ESCOLA:",
          items: [
            "SALA DE AULA",
            "QUARTO",
            "PÁTIO",
            "COZINHA DA VOVÓ",
            "QUADRO",
            "CAMA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases comparando sua casa e sua escola:",
          items: [
            "Na minha casa eu durmo, na escola eu ___",
            "Na escola eu tenho professora, em casa eu tenho ___",
          ],
        },
        {
          kind: "draw",
          instruction: "Divida a folha ao meio: desenhe sua casa de um lado e sua escola do outro:",
          note: "Capriche nos detalhes que mostram o que é parecido e o que é diferente.",
        },
      ],
    },
    {
      theme: "Bairro da zona norte, zona sul, leste ou oeste?",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome do bairro onde fica a sua escola:",
          lines: 2,
        },
        {
          kind: "options",
          instruction: "Em qual zona da cidade de São Paulo fica o bairro da nossa escola?",
          options: [
            "Zona Norte",
            "Zona Sul",
            "Zona Leste",
            "Zona Oeste",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os nomes de zonas da cidade que você já ouviu falar:",
          items: [
            "ZONA NORTE",
            "ZONA SUL",
            "ZONA LESTE",
            "ZONA OESTE",
            "CENTRO",
            "LUA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um mapa simples da cidade dividido em quatro partes e pinte a parte onde fica o bairro da nossa escola:",
        },
      ],
    },
    {
      theme: "Placa informativa do ponto de ônibus da escola",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de uma linha de ônibus que passa perto da escola:",
          lines: 2,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o ônibus perto da escola:",
          items: [
            "O ônibus da linha ___ passa perto da escola",
            "Esse ônibus leva as pessoas até o bairro ___",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as informações que não podem faltar numa placa de ponto de ônibus:",
          items: [
            "NÚMERO DA LINHA",
            "DESTINO DO ÔNIBUS",
            "COR DO CÉU",
            "HORÁRIO",
            "NOME DO MOTORISTA",
            "PONTOS DE PARADA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a placa do ponto de ônibus da escola com o número da linha e o destino:",
          note: "Não esqueça de escrever o número e para onde o ônibus vai.",
        },
      ],
    },
    {
      theme: "Onde está o brinquedo escondido?",
      exercises: [
        {
          kind: "options",
          instruction: "Se o brinquedo está ATRÁS da cadeira, onde você deve procurar?",
          options: [
            "Na frente da cadeira",
            "Atrás da cadeira",
            "Em cima da mesa",
            "Dentro da mochila",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com a palavra de posição certa:",
          items: [
            "O brinquedo está ___ da caixa",
            "O livro está ___ da mesa",
            "O sapato está ___ da cama",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam onde um objeto pode estar:",
          items: [
            "DENTRO",
            "ATRÁS",
            "BONITO",
            "EM CIMA",
            "EMBAIXO",
            "AZUL",
            "AO LADO",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma sala com um brinquedo escondido embaixo da mesa:",
        },
      ],
    },
    {
      theme: "Antes e depois: um lugar poluído que pode melhorar",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de um lugar perto da escola que está sujo ou precisa de cuidado:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Marque o que podemos fazer para melhorar um lugar sujo do bairro:",
          options: [
            "Jogar mais lixo no chão",
            "Recolher o lixo e colocar na lixeira",
            "Plantar uma árvore",
            "Deixar do jeito que está",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o lugar que você escolheu:",
          items: [
            "Antes, o lugar estava ___",
            "Depois de cuidarmos, o lugar pode ficar ___",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe como está o lugar hoje e como ele pode ficar depois de cuidado:",
          note: "Pode dividir a folha em ANTES e DEPOIS.",
        },
      ],
    },
    {
      theme: "Mural de mapas e fotos do bairro",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de dois lugares do bairro que poderiam aparecer numa foto do mural:",
          lines: 2,
        },
        {
          kind: "word-select",
          instruction: "Circule o que podemos usar para montar o mural do bairro:",
          items: [
            "FOTOS",
            "MAPA DO BAIRRO",
            "DESENHOS",
            "BALÃO DE FESTA",
            "RECORTES DE REVISTA",
            "BOLA DE FUTEBOL",
          ],
        },
        {
          kind: "options",
          instruction: "Qual desses itens ajuda a mostrar ONDE fica cada lugar no mural?",
          options: [
            "Um mapa do bairro",
            "Uma música",
            "Um brinquedo",
            "Um lápis de cor",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma foto ou um mapa do seu lugar favorito do bairro para colar no mural da turma:",
        },
      ],
    },
    {
      theme: "Um mapa dos lugares que eu amo",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um mapinha ligando sua casa, sua escola e mais um lugar que você ama.",
          note: "Use linhas para mostrar o caminho entre os lugares.",
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares que poderiam entrar no seu mapa do coração:",
          items: [
            "PRAÇA",
            "CASA DA VOVÓ",
            "PADARIA",
            "ESCOLA",
            "SHOPPING DE OUTRA CIDADE",
            "CAMPO DE FUTEBOL",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases pensando no seu mapa:",
          items: [
            "Eu amo ir para ___ porque me sinto feliz lá.",
            "No caminho de casa até a escola, eu gosto de passar por ___.",
            "Se pudesse desenhar um lugar bem grande no mapa, seria ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um lugar do seu mapa e escreva por que ele é especial para você:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Entrevista: um familiar que mora em outro bairro",
      exercises: [
        {
          kind: "lines",
          instruction: "Entreviste um familiar que mora em outro bairro. Escreva o nome do bairro dele e conte como é lá:",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com as respostas do seu familiar entrevistado:",
          items: [
            "O nome do bairro dele é ___.",
            "Uma coisa que tem lá e não tem no meu bairro é ___.",
            "Uma coisa parecida entre os dois bairros é ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Depois da entrevista, marque o que você descobriu:",
          options: [
            "O bairro dele é parecido com o meu",
            "O bairro dele é bem diferente do meu",
            "Não descobri nada de novo",
            "Ele mora longe da minha casa",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe como você imagina o bairro do seu familiar, a partir do que ele contou:",
          note: "Capriche nos detalhes que ele descreveu na entrevista.",
        },
      ],
    },
    {
      theme: "Foto de ontem, foto de hoje: o bairro mudou?",
      exercises: [
        {
          kind: "options",
          instruction: "Observando fotos antigas e atuais de um lugar do bairro, o que pode ter mudado?",
          options: [
            "As construções ao redor",
            "O tamanho das árvores",
            "As roupas das pessoas nas fotos",
            "A cor do céu",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule o que pode aparecer em uma foto antiga do bairro que não existe mais hoje:",
          items: [
            "CASA ANTIGA",
            "PRÉDIO NOVO",
            "TERRENO VAZIO",
            "LOJA FECHADA",
            "ÁRVORE PEQUENA",
            "CARRO ANTIGO",
          ],
        },
        {
          kind: "lines",
          instruction: "Pergunte a um adulto como era o bairro antigamente e escreva o que ele contou:",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Desenhe duas cenas do mesmo lugar: uma de como você imagina que ele era antes, e outra de como ele é hoje.",
          note: "Use as duas metades da folha, uma para cada desenho.",
        },
      ],
    },
    {
      theme: "Batalha das posições no tabuleiro",
      exercises: [
        {
          kind: "options",
          instruction: "No jogo do tabuleiro, se o comando é 'mova a peça para a direita', o que você faz?",
          options: [
            "Movo a peça para o lado direito",
            "Movo a peça para cima",
            "Movo a peça para trás",
            "Não movo a peça",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete os comandos do jogo com a posição certa: esquerda, direita, cima ou baixo.",
          items: [
            "Para chegar à casa amarela, mova a peça para ___.",
            "Para voltar ao início, mova a peça para ___.",
            "Se a peça está embaixo do quadrado verde, ela deve subir para ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam uma posição no tabuleiro:",
          items: [
            "ESQUERDA",
            "AMARELO",
            "DIREITA",
            "CIMA",
            "REDONDO",
            "BAIXO",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um tabuleiro quadriculado com uma peça em um quadrado e uma seta mostrando para onde ela vai se mover.",
          note: "Escreva se o movimento é para a esquerda, direita, cima ou baixo.",
        },
      ],
    },
    {
      theme: "Detetives do lixo: o que encontramos na rua",
      exercises: [
        {
          kind: "lines",
          instruction: "Vire um detetive: observe o caminho até a escola e escreva o que você encontrou de lixo jogado no chão:",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Qual desses lugares é o certo para jogar o lixo?",
          options: [
            "Na lixeira",
            "No chão da rua",
            "Dentro do bueiro",
            "Embaixo de uma árvore",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule o que pode ser sinal de lixo ou poluição na rua:",
          items: [
            "GARRAFA JOGADA",
            "FLOR",
            "SACOLA PLÁSTICA",
            "PÁSSARO",
            "PAPEL NO CHÃO",
            "LIXEIRA CHEIA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a rua da sua escola bem limpa, sem lixo jogado, do jeito que você gostaria de vê-la:",
          note: "Capriche nos detalhes de como seria um bairro mais limpo.",
        },
      ],
    },
    {
      theme: "Relógio das atividades do dia",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com uma atividade que você faz nesse horário do dia:",
          items: [
            "De manhã, eu costumo ___.",
            "À tarde, eu costumo ___.",
            "À noite, antes de dormir, eu costumo ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual dessas atividades a gente costuma fazer de noite?",
          options: [
            "Dormir",
            "Ir para a escola",
            "Tomar café da manhã",
            "Brincar no recreio",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as atividades que fazem parte do seu dia:",
          items: [
            "ACORDAR",
            "ESTUDAR",
            "JANTAR",
            "DORMIR",
            "TRABALHAR EM ESCRITÓRIO",
            "BRINCAR",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um relógio simples e marque o horário em que você costuma ir dormir.",
          note: "Não esqueça de desenhar os ponteiros.",
        },
      ],
    },
    {
      theme: "A mala da vovó: o que trouxe de outro lugar",
      exercises: [
        {
          kind: "lines",
          instruction: "Pergunte para alguém da sua família se essa pessoa já morou em outra cidade ou outro lugar. Escreva o nome do lugar e uma coisa que essa pessoa trouxe de lá:",
          lines: 4,
        },
        {
          kind: "word-select",
          instruction: "Circule as coisas que podem estar dentro da mala de alguém que mudou de cidade:",
          items: [
            "FOTOGRAFIA DA FAMÍLIA",
            "RECEITA DE COMIDA",
            "BRINQUEDO DE INFÂNCIA",
            "CONTROLE DA TV",
            "ROUPA ANTIGA",
            "CHAVE DO CARRO",
          ],
        },
        {
          kind: "options",
          instruction: "Marque a frase que mostra algo trazido de outro lugar por um familiar:",
          options: [
            "Uma receita de bolo que a bisavó fazia no interior",
            "Um caderno novo comprado ontem",
            "Um brinquedo que ganhei no meu aniversário",
            "Um lápis emprestado do colega",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a mala da sua família. Dentro dela, coloque algo que veio de outro lugar: uma comida, um objeto ou uma história.",
          note: "Pode ser algo que sua família contou para você.",
        },
      ],
    },
    {
      theme: "Álbum de figurinhas dos bairros de São Paulo",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma figurinha para o álbum da turma: escolha um lugar de um bairro de São Paulo que você conhece, como uma praça, um ponto de ônibus, um mercado ou uma igreja.",
        },
        {
          kind: "fill-blank",
          instruction: "Complete as legendas das figurinhas do álbum:",
          items: [
            "Perto da minha casa tem um(a) ___ que eu conheço bem.",
            "No meu bairro, o lugar que eu mais gosto é o(a) ___.",
            "Um bairro diferente do meu que eu já visitei é o ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares que podem aparecer nas figurinhas de um álbum sobre os bairros de São Paulo:",
          items: [
            "PRAÇA",
            "MERCADO MUNICIPAL",
            "PONTO DE ÔNIBUS",
            "IGREJA",
            "ESTAÇÃO DE METRÔ",
            "CASTELO MEDIEVAL",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um bairro que você já visitou e o que tem lá de especial:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Paisagem de prédio ou paisagem de casinha?",
      exercises: [
        {
          kind: "options",
          instruction: "Marque a frase que descreve uma paisagem com prédios altos, um em cima do outro:",
          options: [
            "Paisagem vertical, com prédios",
            "Paisagem horizontal, com casinhas baixas",
            "Paisagem de praia",
            "Paisagem de floresta",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que lembram um bairro de casinhas, com paisagem mais baixa:",
          items: [
            "CASA TÉRREA",
            "QUINTAL",
            "ELEVADOR",
            "PORTÃO",
            "GARAGEM COLETIVA",
            "JANELA DO 10º ANDAR",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre os dois jeitos de morar:",
          items: [
            "Um prédio tem vários ___, um em cima do outro.",
            "Uma casinha geralmente tem só um ou dois ___.",
            "Perto da minha casa, a paisagem é mais de prédio ou de ___?",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe duas paisagens: de um lado, uma rua com prédios; do outro, uma rua com casinhas.",
          note: "Compare os dois desenhos: o que muda entre eles?",
        },
      ],
    },
    {
      theme: "Vestindo o boneco de posições",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe um boneco. Depois, desenhe um chapéu em cima da cabeça dele e um sapato embaixo do pé.",
          note: "Capriche nos detalhes!",
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases usando as palavras de posição (em cima, embaixo, na frente, atrás):",
          items: [
            "O chapéu fica ___ da cabeça do boneco.",
            "O sapato fica ___ do pé do boneco.",
            "A mochila fica ___ das costas do boneco.",
            "Os botões ficam ___ da camisa do boneco.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam posição:",
          items: [
            "EM CIMA",
            "EMBAIXO",
            "NA FRENTE",
            "ATRÁS",
            "BANANA",
            "DEVAGAR",
          ],
        },
        {
          kind: "options",
          instruction: "O boné do boneco está na cabeça dele. Isso quer dizer que o boné está:",
          options: [
            "Em cima do boneco",
            "Embaixo do boneco",
            "Atrás do boneco",
            "Do lado de fora da sala",
          ],
        },
      ],
    },
    {
      theme: "Ação humana que ajuda: quem cuida do nosso bairro",
      exercises: [
        {
          kind: "lines",
          instruction: "Escreva o nome de uma pessoa que trabalha cuidando do seu bairro, como um gari, um jardineiro ou um guarda, e o que ela faz:",
          lines: 3,
        },
        {
          kind: "word-select",
          instruction: "Circule as profissões de quem cuida do bairro:",
          items: [
            "GARI",
            "JARDINEIRO",
            "GUARDA-PARQUE",
            "GUARDA CIVIL METROPOLITANO",
            "ASTRONAUTA",
            "PESCADOR DE ALTO-MAR",
          ],
        },
        {
          kind: "options",
          instruction: "Marque a atitude que ajuda a cuidar do bairro:",
          options: [
            "Jogar o lixo na lixeira certa",
            "Jogar lixo na rua",
            "Arrancar as plantas da praça",
            "Riscar o muro da escola",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma pessoa trabalhando para cuidar do seu bairro: varrendo a rua, cuidando da praça ou plantando uma árvore.",
        },
      ],
    },
    {
      theme: "Quem trabalha de dia, quem trabalha de noite",
      exercises: [
        {
          kind: "options",
          instruction: "Marque um trabalho que geralmente acontece à noite:",
          options: [
            "Padeiro que assa o pão de madrugada",
            "Professor que dá aula de manhã",
            "Feirante que vende frutas de manhã",
            "Motorista de van escolar de manhã",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o trabalho de dia e de noite:",
          items: [
            "O padeiro trabalha de ___ para o pão ficar pronto de manhã.",
            "O professor costuma dar aula durante o ___.",
            "O enfermeiro de plantão noturno trabalha enquanto muita gente está ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule apenas os trabalhos que podem acontecer à noite:",
          items: [
            "VIGIA NOTURNO",
            "PADEIRO DE MADRUGADA",
            "ENFERMEIRO DE PLANTÃO NOTURNO",
            "PROFESSOR DE MANHÃ",
            "FEIRANTE DE MANHÃ",
            "CARTEIRO DE MANHÃ",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de alguém que você conhece que trabalha de dia e de alguém que trabalha de noite:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Meus lugares de vivência: casa e escola",
      exercises: [
        {
          kind: "options",
          instruction: "Que lugar é este: onde mora a sua família, onde você dorme e faz as refeições?",
          options: [
            "Escola",
            "Casa",
            "Praça",
            "Mercado",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as coisas que você pode encontrar na ESCOLA:",
          items: [
            "QUADRO",
            "CAMA",
            "PARQUINHO",
            "GELADEIRA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a sua casa por fora. Capriche na porta, nas janelas e no telhado.",
        },
        {
          kind: "lines",
          instruction: "Escreva uma coisa que tem na sua casa e não tem na escola.",
          lines: 1,
        },
      ],
    },
    {
      theme: "Combinados de convivência na escola",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os combinados que ajudam a sala de aula a ser um lugar bom para todos:",
          items: [
            "LEVANTAR A MÃO PARA FALAR",
            "EMPURRAR OS COLEGAS",
            "GUARDAR OS BRINQUEDOS",
            "GRITAR NA HORA DA AULA",
          ],
        },
        {
          kind: "options",
          instruction: "O que devemos fazer quando queremos falar durante a aula?",
          options: [
            "Levantar a mão e esperar a vez",
            "Gritar o nome da professora",
            "Falar ao mesmo tempo que os colegas",
            "Sair do lugar sem avisar",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um combinado que existe na sua sala de aula.",
          lines: 1,
        },
        {
          kind: "draw",
          instruction: "Desenhe você e um colega brincando juntos no pátio, respeitando a vez um do outro.",
        },
      ],
    },
    {
      theme: "As construções ao redor da escola",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma construção que fica perto da sua escola (uma casa, um prédio, um mercado ou outra).",
        },
        {
          kind: "word-select",
          instruction: "Circule as construções que existem perto da sua escola:",
          items: [
            "CASAS",
            "PRÉDIOS",
            "IGREJA",
            "PADARIA",
          ],
        },
        {
          kind: "options",
          instruction: "As construções ao redor da escola são...",
          options: [
            "Todas iguais",
            "Diferentes umas das outras",
            "Todas muito altas",
            "Todas da mesma cor",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de uma construção que você vê no caminho para a escola.",
          lines: 1,
        },
      ],
    },
    {
      theme: "Tipos de moradia: iguais e diferentes",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os tipos de moradia que você conhece ou já ouviu falar:",
          items: [
            "CASA",
            "APARTAMENTO",
            "PALAFITA",
            "OCA",
          ],
        },
        {
          kind: "options",
          instruction: "Uma moradia construída sobre um rio, apoiada em estacas de madeira, é chamada de:",
          options: [
            "Palafita",
            "Apartamento",
            "Sobrado",
            "Iglu",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a moradia onde você mora.",
        },
        {
          kind: "lines",
          instruction: "As moradias das pessoas são todas iguais? Escreva o que você acha.",
          lines: 2,
        },
      ],
    },
    {
      theme: "Como eu chego até a escola",
      exercises: [
        {
          kind: "options",
          instruction: "Como você vai para a escola?",
          options: [
            "A pé",
            "De carro",
            "De ônibus escolar",
            "De bicicleta",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os meios de transporte que os colegas da sua sala usam para vir à escola:",
          items: [
            "A PÉ",
            "DE CARRO",
            "DE ÔNIBUS",
            "DE BICICLETA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você chegando à escola, usando o meio de transporte que você usa.",
        },
        {
          kind: "lines",
          instruction: "Escreva se você demora pouco tempo ou muito tempo para chegar na escola.",
          lines: 1,
        },
      ],
    },
    {
      theme: "Desenhando o caminho de casa até a escola",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe o caminho que você faz de casa até a escola. Não esqueça de desenhar sua casa no começo e a escola no final.",
        },
        {
          kind: "word-select",
          instruction: "Circule o que você pode encontrar no caminho de casa até a escola:",
          items: [
            "RUA",
            "PRAÇA",
            "SEMÁFORO",
            "PONTE",
          ],
        },
        {
          kind: "options",
          instruction: "Para atravessar a rua com segurança, o certo é:",
          options: [
            "Olhar para os dois lados e atravessar na faixa",
            "Atravessar correndo no meio da rua",
            "Atravessar sem olhar",
            "Atravessar de olhos fechados",
          ],
        },
        {
          kind: "lines",
          instruction: "O caminho de casa até a escola é longe ou perto? Escreva com suas palavras.",
          lines: 1,
        },
      ],
    },
    {
      theme: "Meu endereço e os caminhos que conheço",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra:",
          items: [
            "Eu moro no bairro ___________.",
            "O nome da minha rua é ___________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um lugar que você conhece perto da sua casa (pode ser uma praça, um mercado, uma escola).",
          lines: 1,
        },
        {
          kind: "draw",
          instruction: "Desenhe um lugar que fica no caminho entre a sua casa e a escola.",
        },
        {
          kind: "options",
          instruction: "Para que serve saber o endereço da nossa casa?",
          options: [
            "Para as pessoas conseguirem nos encontrar",
            "Para não fazer nada",
            "Para brincar sozinho",
            "Para desenhar melhor",
          ],
        },
      ],
    },
    {
      theme: "Onde estou? Posição do corpo no espaço",
      exercises: [
        {
          kind: "options",
          instruction: "Se você está sentado na sua cadeira e o quadro está na sua frente, o que fica atrás de você?",
          options: [
            "O fundo da sala",
            "O quadro",
            "O teto",
            "Sua mochila em cima da mesa",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você em pé no pátio da escola. Depois desenhe um amigo do seu lado, um objeto na frente de você e outro atrás.",
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que indicam posição no espaço:",
          items: [
            "EM CIMA",
            "EMBAIXO",
            "NA FRENTE",
            "ATRÁS",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva o que está em cima da sua mesa agora.",
          lines: 1,
        },
      ],
    },
    {
      theme: "Desenhando histórias e caminhos",
      exercises: [
        {
          kind: "draw",
          instruction: "Escolha uma história que você conhece e desenhe o caminho que o personagem percorreu.",
        },
        {
          kind: "lines",
          instruction: "Escreva o nome da história ou brincadeira que você escolheu para desenhar.",
          lines: 1,
        },
        {
          kind: "options",
          instruction: "Quando desenhamos o caminho de uma história, estamos representando...",
          options: [
            "Um itinerário, um trajeto percorrido",
            "Uma receita de comida",
            "Uma lista de nomes",
            "Uma música",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares que podem aparecer no caminho de uma história:",
          items: [
            "CASA DA VOVÓ",
            "FLORESTA",
            "CASTELO",
            "ESCOLA",
          ],
        },
      ],
    },
    {
      theme: "Pontos de referência do bairro",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os pontos de referência que existem no seu bairro:",
          items: [
            "PRAÇA",
            "PADARIA",
            "IGREJA",
            "PARQUE",
          ],
        },
        {
          kind: "options",
          instruction: "Um ponto de referência serve para...",
          options: [
            "Ajudar a gente a se localizar e explicar um caminho",
            "Comer",
            "Dormir",
            "Estudar matemática",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um ponto de referência perto da sua casa (um lugar conhecido que ajuda a explicar o caminho).",
          lines: 1,
        },
        {
          kind: "draw",
          instruction: "Desenhe um ponto de referência do seu bairro, como uma praça, uma padaria ou um parque.",
        },
      ],
    },
    {
      theme: "Natureza e construções na paisagem",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule o que é da NATUREZA (não foi feito pelas pessoas):",
          items: [
            "ÁRVORE",
            "PRÉDIO",
            "RIO",
            "RUA ASFALTADA",
          ],
        },
        {
          kind: "options",
          instruction: "Uma construção feita pelas pessoas é:",
          options: [
            "Uma ponte",
            "Uma montanha",
            "Um rio",
            "Uma árvore",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma paisagem do seu bairro com pelo menos uma coisa da natureza (árvore, morro, rio) e uma construção (casa, prédio, rua).",
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um lugar com bastante natureza (área verde) perto de onde você mora.",
          lines: 1,
        },
      ],
    },
    {
      theme: "Dia e noite: os ritmos da natureza",
      exercises: [
        {
          kind: "options",
          instruction: "Durante o dia, o céu costuma estar...",
          options: [
            "Claro, com o sol",
            "Escuro, com a lua",
            "Sempre chovendo",
            "Sempre nevando",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule o que aparece no céu à NOITE:",
          items: [
            "SOL",
            "LUA",
            "ESTRELAS",
            "ESCOLA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe de um lado o céu de dia e do outro lado o céu de noite.",
        },
        {
          kind: "lines",
          instruction: "Escreva uma coisa que você faz de noite, antes de dormir.",
          lines: 1,
        },
      ],
    },
    {
      theme: "As quatro estações do ano",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os nomes das quatro estações do ano:",
          items: [
            "VERÃO",
            "INVERNO",
            "OUTONO",
            "PRIMAVERA",
          ],
        },
        {
          kind: "options",
          instruction: "Em qual estação costuma fazer mais calor?",
          options: [
            "Verão",
            "Inverno",
            "Nenhuma delas",
            "Sempre faz calor o ano todo",
          ],
        },
        {
          kind: "draw",
          instruction: "Escolha uma estação do ano e desenhe as roupas que as pessoas usam nela.",
        },
        {
          kind: "lines",
          instruction: "Escreva qual estação do ano você mais gosta e por quê.",
          lines: 2,
        },
      ],
    },
    {
      theme: "Legendas para a paisagem do meu bairro",
      exercises: [
        {
          kind: "draw",
          instruction: "Desenhe uma paisagem do seu bairro (rua, casas, árvores, o que você quiser).",
        },
        {
          kind: "fill-blank",
          instruction: "Complete as legendas com uma palavra para explicar o seu desenho:",
          items: [
            "Esta é a minha ___________.",
            "Aqui tem uma ___________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma legenda curta para explicar o desenho que você fez do seu bairro.",
          lines: 1,
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que podem virar legenda para um desenho do seu bairro:",
          items: [
            "CASA",
            "ÁRVORE",
            "SOL",
            "CARRO",
          ],
        },
      ],
    },
    {
      theme: "Quem trabalha na minha escola",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as pessoas que trabalham na sua escola:",
          items: [
            "PROFESSORA",
            "DIRETORA",
            "MERENDEIRA",
            "INSPETOR",
          ],
        },
        {
          kind: "options",
          instruction: "Quem prepara a comida da escola?",
          options: [
            "A merendeira",
            "A diretora",
            "O aluno",
            "O inspetor de trânsito",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma pessoa que trabalha na sua escola e escreva o que ela faz.",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe uma pessoa que trabalha na sua escola, fazendo o seu trabalho.",
        },
      ],
    },
    {
      theme: "Trabalhos no entorno da escola",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule trabalhos que existem perto da sua escola:",
          items: [
            "PADEIRO",
            "MÉDICO",
            "VENDEDOR",
            "MOTORISTA",
          ],
        },
        {
          kind: "options",
          instruction: "Quem trabalha vendendo pão numa padaria é chamado de:",
          options: [
            "Padeiro",
            "Médico",
            "Professor",
            "Bombeiro",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma pessoa trabalhando em um lugar perto da sua escola (padaria, mercado, posto de saúde, etc.).",
        },
        {
          kind: "lines",
          instruction: "Escreva o nome de um trabalho que você já viu sendo feito perto da sua escola.",
          lines: 1,
        },
      ],
    },
    {
      theme: "Raízes e histórias: a diversidade cultural no meu lugar de vivência",
      exercises: [
        {
          kind: "lines",
          instruction: "Converse com alguém da sua família sobre a história dela: de onde veio, o que trouxe de costume, comida ou objeto que ainda existe em casa. Escreva o que você descobriu.",
          lines: 5,
          note: "Pode ser um objeto, uma receita, uma música, uma religião ou uma forma de falar.",
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que representam elementos culturais que uma família pode trazer de sua origem:",
          items: [
            "receita de comida",
            "carro novo",
            "música e dança",
            "religião",
            "jeito de falar",
            "boletim escolar",
            "roupa típica",
            "controle remoto",
          ],
        },
        {
          kind: "options",
          instruction: "Quando pessoas de diferentes origens (indígenas, afro-brasileiras, migrantes, imigrantes) vivem no mesmo bairro, o que costuma acontecer com a cultura local?",
          options: [
            "Ela se mistura e fica mais diversa, com comidas, festas e costumes diferentes convivendo",
            "Ela desaparece completamente",
            "Só uma cultura pode existir por vez",
            "Nada muda, cada cultura fica isolada sem nenhum contato",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre diversidade cultural:",
          items: [
            "Uma pessoa que se muda de um país para outro é chamada de __________.",
            "Uma pessoa que se muda de uma região do Brasil para outra é chamada de __________.",
            "O conjunto de costumes, comidas e crenças de um povo é chamado de sua __________.",
          ],
        },
      ],
    },
    {
      theme: "De onde vieram? Migrações que formaram São Paulo",
      exercises: [
        {
          kind: "options",
          instruction: "Muitas pessoas migraram para São Paulo em busca de:",
          options: [
            "Trabalho e melhores condições de vida",
            "Apenas para conhecer a praia",
            "Fugir do frio o ano todo",
            "Nenhuma das anteriores",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com as palavras: nordestinos, imigrantes, infraestrutura, trabalho",
          items: [
            "Pessoas vindas de outros países são chamadas de __________.",
            "Muitos __________ vieram para São Paulo trabalhar nas fábricas e na construção civil.",
            "As pessoas migravam principalmente em busca de __________.",
            "Quando muita gente chega a uma cidade rápido, pode faltar __________, como água encanada, transporte e escolas.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um mapa simples mostrando uma seta saindo de outro estado (por exemplo, Bahia, Pernambuco ou Minas Gerais) ou de outro país (por exemplo, Itália ou Japão) até a Cidade de São Paulo, representando um caminho migratório.",
          note: "Escreva o nome do lugar de origem e o nome de São Paulo nas pontas da seta.",
        },
        {
          kind: "lines",
          instruction: "Explique com suas palavras: por que a chegada de tantos migrantes e imigrantes ajudou a formar a cidade de São Paulo como ela é hoje?",
          lines: 4,
        },
      ],
    },
    {
      theme: "Como se escolhe quem cuida da cidade: o processo eleitoral municipal",
      exercises: [
        {
          kind: "options",
          instruction: "Quem é a autoridade máxima do poder executivo em um município?",
          options: [
            "O prefeito ou a prefeita",
            "O governador",
            "O presidente",
            "O diretor da escola",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com: prefeito, vereadores, votação, Câmara Municipal",
          items: [
            "Nas eleições municipais, os moradores escolhem o __________ e os __________ da cidade.",
            "Os vereadores eleitos trabalham na __________, criando leis para o município.",
            "A escolha dos representantes acontece por meio da __________, quando cada eleitor vota em um candidato.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque quais dessas funções fazem parte do poder público municipal:",
          items: [
            "cuidar da coleta de lixo da cidade",
            "organizar o transporte público municipal",
            "declarar guerra a outro país",
            "cuidar de escolas municipais e postos de saúde",
            "emitir passaporte",
            "fiscalizar obras e construções na cidade",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que é importante que os moradores de uma cidade escolham, pelo voto, quem vai cuidar dela.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Paisagens produtivas do Estado de São Paulo",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque as atividades produtivas que podem ser encontradas no Estado de São Paulo:",
          items: [
            "plantação de cana-de-açúcar",
            "indústrias na região metropolitana",
            "cultivo de café",
            "extração de petróleo no deserto",
            "criação de gado",
            "portos e comércio no litoral",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete relacionando a paisagem produtiva à sua característica:",
          items: [
            "Nas áreas de plantação de __________, o solo é usado para produzir açúcar e etanol.",
            "Na região metropolitana, predominam as __________, que empregam muitos trabalhadores.",
            "No litoral paulista, o __________ recebe navios que transportam mercadorias para todo o país.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que o Estado de São Paulo apresenta paisagens produtivas tão diferentes (rural, industrial, litorânea)?",
          options: [
            "Porque tem regiões com relevo, clima e ocupação humana diferentes, o que favorece atividades diversas",
            "Porque todas as cidades paulistas são exatamente iguais",
            "Porque o estado não tem nenhuma zona rural",
            "Porque só existe produção industrial no estado",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma paisagem produtiva do Estado de São Paulo (pode ser uma plantação, uma fábrica ou um porto) e escreva embaixo o nome da atividade representada.",
          note: "Capriche nos detalhes que mostram o tipo de trabalho realizado ali.",
        },
      ],
    },
    {
      theme: "Como o Brasil se organiza: distrito, município, estado e região",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a organização político-administrativa do Brasil, da menor para a maior unidade:",
          items: [
            "O __________ é uma parte de um município, uma divisão local.",
            "O __________ é administrado por um prefeito ou prefeita e tem sua própria lei (a lei orgânica).",
            "O __________, também chamado de unidade da Federação, tem um governador.",
            "O Brasil é dividido em cinco grandes __________: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.",
          ],
        },
        {
          kind: "options",
          instruction: "A cidade de São Paulo faz parte de qual grande região do Brasil?",
          options: [
            "Região Sudeste",
            "Região Nordeste",
            "Região Norte",
            "Região Sul",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as palavras que representam unidades político-administrativas do Brasil:",
          items: [
            "distrito",
            "município",
            "quarteirão",
            "estado",
            "região",
            "avenida",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique com suas palavras a diferença entre um município e um estado.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Aldeias indígenas e comunidades quilombolas no Estado de São Paulo",
      exercises: [
        {
          kind: "options",
          instruction: "O que é uma comunidade quilombola?",
          options: [
            "Um território formado por descendentes de escravizados que resistiram e construíram sua própria comunidade",
            "Um bairro criado recentemente por imigrantes europeus",
            "Um tipo de prédio comercial na cidade",
            "Uma escola pública indígena",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre os territórios étnico-culturais do Estado de São Paulo:",
          items: [
            "Os povos originários que vivem em terras demarcadas moram em __________ indígenas.",
            "No litoral e em outras regiões do estado, existem __________, territórios de comunidades negras com história e cultura próprias.",
            "Essas comunidades têm o direito de preservar sua __________, suas tradições e seu modo de vida.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos que costumam fazer parte da cultura de aldeias indígenas e comunidades quilombolas:",
          items: [
            "língua e rituais próprios",
            "shopping center",
            "artesanato tradicional",
            "relação de cuidado com a terra e a natureza",
            "linha de montagem de fábrica",
            "festas e celebrações comunitárias",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que é importante conhecer e respeitar as aldeias indígenas e as comunidades quilombolas que existem no Estado de São Paulo?",
          lines: 4,
        },
      ],
    },
    {
      theme: "Pontos cardeais: se orientando pelo Sol",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com os pontos cardeais: Leste, Oeste, Norte, Sul",
          items: [
            "O Sol nasce no __________ pela manhã.",
            "O Sol se põe no __________ ao final da tarde.",
            "Se você fica de frente para o nascer do Sol, o __________ fica à sua esquerda.",
            "Se você fica de frente para o nascer do Sol, o __________ fica à sua direita.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a forma mais simples de descobrir os pontos cardeais durante o dia, sem usar bússola?",
          options: [
            "Observar de que lado o Sol nasce (Leste) e de que lado ele se põe (Oeste)",
            "Observar a cor do céu à noite",
            "Contar o número de nuvens",
            "Verificar a temperatura do ar",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma rosa dos ventos simples com os quatro pontos cardeais (Norte, Sul, Leste e Oeste) devidamente indicados, e desenhe o Sol nascendo do lado correto.",
          note: "Lembre-se: o Sol nasce a Leste e se põe a Oeste.",
        },
        {
          kind: "lines",
          instruction: "Descreva um exemplo de como os pontos cardeais podem ajudar alguém a se localizar em uma paisagem rural ou urbana, indicando onde ficam prédios, ruas ou plantações.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Tipos de mapas do Estado de São Paulo",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os tipos de mapa que podem ser usados para representar o Estado de São Paulo:",
          items: [
            "mapa político",
            "mapa de bacias hidrográficas",
            "mapa de relevo",
            "mapa de vegetação",
            "cardápio de restaurante",
            "mapa de estradas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Relacione cada tipo de mapa à informação que ele mostra:",
          items: [
            "O mapa __________ mostra a divisão de cidades e seus limites.",
            "O mapa de __________ mostra os rios e as áreas por onde a água escoa.",
            "O mapa de __________ mostra se o terreno é plano, com morros ou montanhas.",
            "O mapa de __________ mostra onde ficam as matas, florestas e outros tipos de cobertura vegetal.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que é útil comparar diferentes tipos de mapas de um mesmo lugar?",
          options: [
            "Porque cada mapa mostra uma informação diferente, e juntas elas ajudam a entender melhor o território",
            "Porque todos os mapas mostram exatamente a mesma coisa",
            "Porque só existe um tipo de mapa correto",
            "Porque mapas não servem para estudar o território",
          ],
        },
        {
          kind: "draw",
          instruction: "Escolha um tipo de mapa (político, de relevo, de vegetação ou de bacias hidrográficas) e desenhe uma versão simples dele, representando o Estado de São Paulo com uma legenda.",
          note: "Não precisa ser exato, mas deve ter título e legenda explicando os símbolos usados.",
        },
      ],
    },
    {
      theme: "São Paulo e suas bacias hidrográficas: como a cidade se formou",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete sobre a formação da cidade a partir das bacias hidrográficas:",
          items: [
            "A Cidade de São Paulo se desenvolveu principalmente às margens do rio __________.",
            "Uma __________ é formada por um rio principal e todos os rios menores que desaguam nele.",
            "As cidades que ficam às margens de um mesmo rio são chamadas de cidades __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Que consequência ambiental costuma ocorrer quando a ocupação humana ao redor dos rios acontece de forma desordenada?",
          options: [
            "Poluição da água, enchentes e degradação das margens dos rios",
            "Os rios ficam automaticamente mais limpos",
            "Não existe nenhuma consequência",
            "A quantidade de água nos rios aumenta sem nenhum problema",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos que fazem parte de uma bacia hidrográfica:",
          items: [
            "rio principal",
            "afluentes (rios menores)",
            "nascente",
            "semáforo",
            "foz",
            "shopping center",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique como a existência de rios e bacias hidrográficas influenciou o crescimento da Cidade de São Paulo ao longo do tempo.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Natureza no meu bairro: preservação e transformação",
      exercises: [
        {
          kind: "lines",
          instruction: "Observe o bairro onde você mora ou a região da escola. Escreva quais elementos da natureza ainda existem ali (árvores, praças, córregos, animais) e quais mudanças causadas pelas pessoas você percebe.",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos da natureza que podem existir dentro de um bairro urbano:",
          items: [
            "praças com árvores",
            "córregos",
            "canteiro central com plantas",
            "postes de luz",
            "pássaros e outros animais",
            "calçadas de concreto",
          ],
        },
        {
          kind: "options",
          instruction: "Qual dessas ações representa uma transformação humana negativa da natureza em um bairro?",
          options: [
            "Despejar lixo e entulho em um córrego",
            "Plantar árvores em uma praça",
            "Criar uma horta comunitária",
            "Cuidar de um jardim público",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "A ação das pessoas sobre a natureza é chamada de ação __________.",
            "Quando uma área verde é mantida e cuidada, dizemos que ela está sendo __________.",
            "Quando o espaço natural é destruído para dar lugar a construções, ocorre um processo de __________.",
          ],
        },
      ],
    },
    {
      theme: "Rios e córregos da cidade: mudanças e vulnerabilidade social",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete sobre as mudanças nos rios e córregos urbanos:",
          items: [
            "Muitos córregos da cidade foram __________, ou seja, colocados dentro de tubos embaixo do asfalto.",
            "A ocupação das margens dos rios por moradias, sem infraestrutura adequada, aumenta o risco de __________.",
            "Famílias que moram perto de córregos poluídos ou em áreas de risco costumam ter menos acesso a __________ e saneamento básico.",
          ],
        },
        {
          kind: "options",
          instruction: "O que significa dizer que um problema ambiental está relacionado à vulnerabilidade social?",
          options: [
            "Que as pessoas com menos recursos financeiros costumam morar em áreas mais expostas a riscos como enchentes",
            "Que todas as pessoas são afetadas igualmente por qualquer problema ambiental",
            "Que apenas os rios são afetados, nunca as pessoas",
            "Que o problema ambiental não tem relação nenhuma com onde as pessoas moram",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as consequências que podem ocorrer quando córregos urbanos são poluídos ou têm as margens ocupadas de forma desordenada:",
          items: [
            "enchentes",
            "mau cheiro e poluição da água",
            "doenças relacionadas à falta de saneamento",
            "aumento da qualidade da água",
            "risco de deslizamento em encostas",
            "redução do risco para os moradores",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que as pessoas que moram perto de rios e córregos poluídos ou em áreas de risco costumam ser as mais afetadas em momentos de chuva forte.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Solo e água: recursos essenciais para a vida",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os usos que as pessoas fazem do solo e da água no dia a dia:",
          items: [
            "plantação de alimentos",
            "extração de areia e minerais",
            "abastecimento de água nas casas",
            "construção de casas e prédios",
            "assistir televisão",
            "irrigação de lavouras",
          ],
        },
        {
          kind: "options",
          instruction: "Por que algumas áreas não devem ser ocupadas para moradia, mesmo havendo falta de espaço na cidade?",
          options: [
            "Porque são áreas de risco, como encostas íngremes ou margens de rios sujeitas a enchentes",
            "Porque são áreas proibidas sem nenhum motivo especial",
            "Porque nelas o solo é sempre mais fértil e por isso ninguém pode morar",
            "Porque toda área da cidade é igualmente segura para se morar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a importância do solo e da água:",
          items: [
            "O solo é usado para o __________ de alimentos, como frutas, verduras e grãos.",
            "A água é essencial para o consumo humano, para a agricultura e para a produção de __________.",
            "Áreas de risco, como encostas e margens de rios, precisam de __________ especial para evitar acidentes.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma paisagem que mostre pelo menos dois usos diferentes do solo e da água (por exemplo, uma plantação e uma represa, ou uma pedreira e um rio).",
          note: "Identifique com uma legenda cada uso representado no desenho.",
        },
      ],
    },
    {
      theme: "Impactos do uso do solo e da água no dia a dia",
      exercises: [
        {
          kind: "options",
          instruction: "Qual atitude do dia a dia ajuda a reduzir os impactos negativos do uso da água na cidade?",
          options: [
            "Evitar o desperdício de água em casa e na escola",
            "Deixar a torneira aberta sem necessidade",
            "Jogar lixo em rios e córregos",
            "Usar mangueira para lavar a calçada todos os dias",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete relacionando o uso inadequado do solo e da água a suas consequências:",
          items: [
            "O desmatamento excessivo pode deixar o __________ mais fraco e sujeito a erosão.",
            "O despejo de esgoto sem tratamento nos rios causa a __________ da água.",
            "O uso exagerado de água na cidade e no campo pode levar à sua __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as atitudes responsáveis de cuidado com o solo e a água:",
          items: [
            "não jogar lixo em rios e córregos",
            "reaproveitar a água da chuva",
            "plantar árvores para proteger o solo",
            "desperdiçar água na hora de escovar os dentes",
            "denunciar poluição de rios",
            "queimar o lixo em terrenos baldios",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um impacto do uso do solo ou da água que você já observou perto da sua casa ou escola e explique como ele afeta a vida das pessoas do bairro.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Trabalho no campo e na cidade: comparando realidades",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque quais trabalhos são mais comuns no campo:",
          items: [
            "plantio e colheita",
            "criação de animais",
            "trabalho em escritório de banco",
            "ordenha de vaca leiteira",
            "operação de caixa em loja de shopping",
            "colheita de laranja",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete comparando o trabalho no campo e na cidade:",
          items: [
            "No campo, muitas pessoas trabalham com __________ e criação de animais.",
            "Na cidade, é comum encontrar trabalhos em __________, comércio e serviços.",
            "O trabalho no campo costuma seguir o ritmo das __________ e da colheita.",
          ],
        },
        {
          kind: "options",
          instruction: "Por que o tipo de trabalho predominante muda entre o campo e a cidade?",
          options: [
            "Porque cada espaço tem características diferentes, como disponibilidade de terra, indústrias e serviços",
            "Porque no campo não existe nenhum tipo de trabalho",
            "Porque na cidade só existe trabalho agrícola",
            "Porque o trabalho é sempre igual em qualquer lugar",
          ],
        },
        {
          kind: "lines",
          instruction: "Compare um tipo de trabalho do campo com um tipo de trabalho da cidade, explicando pelo menos uma diferença entre eles.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Da matéria-prima ao consumo: o caminho dos produtos",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as etapas do caminho de um produto até chegar ao consumidor:",
          items: [
            "Primeiro, a __________ é retirada da natureza, como a cana-de-açúcar ou o algodão.",
            "Depois, ela passa por um processo de __________ em fábricas ou indústrias.",
            "Em seguida, o produto é transportado e distribuído até chegar às __________.",
            "Por fim, o produto chega às mãos do __________.",
          ],
        },
        {
          kind: "options",
          instruction: "O que é uma matéria-prima?",
          options: [
            "Um recurso natural usado como base para fabricar outros produtos",
            "Um produto já pronto para o consumo",
            "Um tipo de dinheiro usado nas fábricas",
            "Uma máquina usada para transportar mercadorias",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque exemplos de matérias-primas produzidas no Estado de São Paulo:",
          items: [
            "cana-de-açúcar",
            "laranja",
            "notebook pronto",
            "leite",
            "celular pronto",
            "algodão",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um produto que você usa no dia a dia (por exemplo, suco, roupa ou papel) e explique, em ordem, o caminho que ele percorreu desde a matéria-prima até chegar até você.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Marcas culturais no meu bairro",
      exercises: [
        {
          kind: "options",
          instruction: "O que significa dizer que um bairro tem 'marcas culturais' deixadas por diferentes grupos de pessoas?",
          options: [
            "Sinais como comidas, festas, línguas, religiões e construções que mostram de onde vieram os moradores",
            "Placas de trânsito espalhadas pelas ruas",
            "O nome do bairro no mapa da cidade",
            "A quantidade de prédios altos que existem ali",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os exemplos que podem ser considerados marcas culturais deixadas por grupos de imigrantes ou migrantes em um bairro:",
          items: [
            "padaria italiana",
            "feira nordestina",
            "templo religioso oriental",
            "poste de luz",
            "restaurante japonês",
            "semáforo",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense no seu bairro ou em um bairro que você conhece bem. Descreva uma marca cultural que existe ali (uma comida típica, uma festa, uma construção, um comércio) e explique de que grupo de pessoas ela pode ter vindo:",
          lines: 4,
          note: "Se não souber a origem, o estudante pode escrever uma hipótese e justificar.",
        },
        {
          kind: "draw",
          instruction: "Desenhe um lugar do seu bairro (uma loja, uma praça, uma igreja, um mercado) que mostre a influência de um grupo cultural diferente do seu. Escreva embaixo do desenho o nome do lugar.",
          note: "Pode ser baseado em observação real ou em pesquisa com a família.",
        },
      ],
    },
    {
      theme: "Quem somos: pesquisa sobre grupos sociais",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre grupos sociais que formam a população brasileira:",
          items: [
            "Os povos __________ foram os primeiros habitantes do território que hoje é o Brasil.",
            "A população __________ é formada por descendentes de pessoas trazidas à força da África.",
            "Pessoas com __________ têm direito a acessibilidade e participação plena na sociedade.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é um exemplo de contribuição dos povos indígenas para a cultura brasileira atual?",
          options: [
            "Palavras da língua tupi que usamos até hoje, como 'Ipiranga' e 'pipoca'",
            "O uso do computador",
            "A construção de arranha-céus",
            "O sistema de metrô de São Paulo",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um grupo social (povos indígenas, população afro-brasileira ou pessoas com deficiência) e escreva o que você descobriu ou já sabia sobre a contribuição desse grupo para o lugar onde você vive:",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque as atitudes que ajudam a garantir a participação de todos os grupos sociais na cidade:",
          items: [
            "rampas de acesso",
            "respeito às diferenças",
            "ignorar quem é diferente",
            "línguas de sinais em eventos públicos",
            "excluir quem tem deficiência",
            "valorizar a cultura de todos",
          ],
        },
      ],
    },
    {
      theme: "Como a cidade é governada",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com os nomes corretos das instituições que governam o município:",
          items: [
            "Quem administra a Prefeitura e é eleito pela população é o __________.",
            "Os __________ são eleitos para fazer e votar as leis da cidade na Câmara Municipal.",
            "Os Conselhos __________ são espaços onde a população pode participar das decisões sobre saúde, educação e outros temas.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a principal função da Câmara de Vereadores em um município como São Paulo?",
          options: [
            "Discutir, propor e votar leis que organizam a vida na cidade e fiscalizar a Prefeitura",
            "Construir hospitais e escolas com as próprias mãos",
            "Dirigir os ônibus do transporte público",
            "Vender produtos na feira do bairro",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique com suas palavras por que é importante que os moradores participem dos Conselhos Municipais e acompanhem o que os vereadores fazem:",
          lines: 4,
        },
        {
          kind: "draw",
          instruction: "Desenhe um esquema simples mostrando quem participa da gestão da cidade: o prefeito, os vereadores e a população. Use setas para mostrar como eles se relacionam.",
          note: "O objetivo é visualizar a estrutura de participação social, não copiar um organograma pronto.",
        },
      ],
    },
    {
      theme: "São Paulo cresceu: e agora?",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque as mudanças que costumam acontecer quando uma cidade como São Paulo cresce muito rápido:",
          items: [
            "aumento do trânsito",
            "mais áreas verdes por pessoa",
            "verticalização (mais prédios)",
            "menos moradias populares",
            "poluição do ar",
            "diminuição da população",
          ],
        },
        {
          kind: "options",
          instruction: "O que significa dizer que São Paulo teve um crescimento urbano acelerado?",
          options: [
            "A cidade ganhou muitos moradores e construções em pouco tempo, mudando sua paisagem e organização",
            "A cidade diminuiu de tamanho ao longo dos anos",
            "A cidade parou de construir novos prédios",
            "A cidade perdeu moradores para outras cidades",
          ],
        },
        {
          kind: "lines",
          instruction: "Cite uma mudança social, uma econômica e uma ambiental provocada pelo crescimento de São Paulo, explicando cada uma em uma frase:",
          lines: 6,
        },
        {
          kind: "draw",
          instruction: "Desenhe duas cenas lado a lado: como você imagina que era uma rua de São Paulo há 80 anos e como é essa mesma rua hoje, depois do crescimento da cidade.",
          note: "Estimula comparação de paisagens antes/depois do crescimento urbano.",
        },
      ],
    },
    {
      theme: "O que faz São Paulo ser São Paulo",
      exercises: [
        {
          kind: "options",
          instruction: "Qual característica é uma marca exclusiva da Cidade de São Paulo, e não de qualquer outra cidade brasileira?",
          options: [
            "Ser a maior cidade do Brasil em população e o principal centro financeiro do país",
            "Ter praias e ser famosa pelo litoral",
            "Ser a capital do Brasil",
            "Ter menos de 100 mil habitantes",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos que ajudam a identificar São Paulo como uma cidade única:",
          items: [
            "Avenida Paulista",
            "grande diversidade de imigrantes",
            "vulcão ativo",
            "centro financeiro do país",
            "maior metrô do Brasil",
            "recife de corais",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre as características de São Paulo:",
          items: [
            "São Paulo é conhecida como a cidade que __________ (não para, funciona o tempo todo).",
            "A cidade reúne pessoas vindas de __________ estados e países diferentes.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um pequeno texto explicando o que você acha que faz São Paulo ser diferente de outras cidades que você conhece ou já ouviu falar:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Ontem e hoje: paisagens paulistanas em fotos",
      exercises: [
        {
          kind: "options",
          instruction: "Para comparar como uma paisagem de São Paulo mudou ao longo do tempo, qual é a melhor estratégia?",
          options: [
            "Observar fotografias antigas e atuais do mesmo lugar e comparar o que mudou e o que permaneceu",
            "Perguntar apenas para uma pessoa o que ela se lembra",
            "Olhar somente fotos recentes, sem comparar com nada",
            "Desenhar o lugar sem nenhuma referência",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque o que costuma aparecer em fotos antigas de bairros paulistanos que já não existe mais ou mudou muito hoje:",
          items: [
            "bondes",
            "casarões",
            "prédios altos de vidro",
            "ruas de terra",
            "carros elétricos modernos",
            "chácaras e sítios",
          ],
        },
        {
          kind: "lines",
          instruction: "Se você pudesse comparar uma foto antiga e uma foto atual de um lugar de São Paulo (uma rua, uma praça, um bairro), o que você imagina que teria mudado e o que teria continuado igual? Explique:",
          lines: 5,
        },
        {
          kind: "draw",
          instruction: "Escolha um lugar conhecido de São Paulo (pode ser perto de casa) e desenhe uma linha do tempo com duas versões: 'antes' e 'depois', mostrando as transformações da paisagem.",
          note: "Trabalha diretamente a comparação de tempos diferentes usada com fotografias e fotos aéreas.",
        },
      ],
    },
    {
      theme: "Vendo cidades do espaço",
      exercises: [
        {
          kind: "options",
          instruction: "O que é uma 'mancha urbana' em uma imagem de satélite?",
          options: [
            "A área ocupada por construções, ruas e bairros, que aparece diferente das áreas verdes ou de água",
            "Uma sombra causada por nuvens na foto",
            "Um erro na qualidade da imagem",
            "A cor do céu vista do espaço",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre imagens de satélite:",
          items: [
            "Em uma imagem de satélite, a área urbana (com prédios e ruas) costuma aparecer em tons de __________.",
            "Já as áreas de vegetação, como matas e parques, aparecem em tons de __________.",
            "Comparando imagens de satélite de anos diferentes, é possível ver se a mancha urbana de uma cidade __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Imagine que você está comparando a imagem de satélite de São Paulo com a de uma cidade menor do interior do estado. Explique duas diferenças que você esperaria ver na mancha urbana de cada uma:",
          lines: 5,
        },
        {
          kind: "draw",
          instruction: "Desenhe, como se fosse visto de cima (vista de satélite), duas cidades: uma pequena, com pouca mancha urbana, e uma grande, como São Paulo, com mancha urbana bem maior.",
          note: "Reforça a leitura de imagens aéreas/satélite para comparar tamanho de cidades.",
        },
      ],
    },
    {
      theme: "Minha legenda, meu mapa",
      exercises: [
        {
          kind: "options",
          instruction: "Para que serve a legenda em um mapa?",
          options: [
            "Explicar o que cada cor, símbolo ou desenho representa no mapa",
            "Decorar o mapa com desenhos bonitos",
            "Mostrar o nome de quem desenhou o mapa",
            "Indicar apenas a data em que o mapa foi feito",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a construção de legendas de mapas:",
          items: [
            "Antes de criar uma legenda, é preciso escolher quais __________ do lugar serão representadas.",
            "Cada símbolo da legenda deve representar sempre a __________ coisa em todo o mapa.",
            "Uma legenda bem-feita ajuda quem olha o mapa a __________ as informações rapidamente.",
          ],
        },
        {
          kind: "draw",
          instruction: "Crie uma legenda com pelo menos 4 símbolos ou cores para representar em um mapa: área urbana muito ocupada, área urbana pouco ocupada, área verde e rios. Depois, use essa legenda para desenhar um mapa simples de um município.",
          note: "Atividade central do tema: elaborar legenda para representar manchas urbanas.",
        },
        {
          kind: "lines",
          instruction: "Explique por que duas pessoas diferentes, olhando o mesmo mapa com a mesma legenda, devem entender as mesmas informações:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Crescer bem: cidade e qualidade de vida",
      exercises: [
        {
          kind: "options",
          instruction: "O que significa 'qualidade de vida' em uma cidade?",
          options: [
            "Ter acesso a moradia digna, saúde, educação, lazer, transporte e meio ambiente equilibrado",
            "Ter a maior quantidade de shoppings possível",
            "Ter o maior número de carros por rua",
            "Ter apenas prédios muito altos",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os fatores que podem melhorar a qualidade de vida das pessoas em uma cidade que cresce muito:",
          items: [
            "mais áreas verdes",
            "saneamento básico",
            "poluição sem controle",
            "transporte público de qualidade",
            "moradias precárias",
            "acesso a postos de saúde",
          ],
        },
        {
          kind: "lines",
          instruction: "O crescimento das cidades pode melhorar a vida de umas pessoas e piorar a de outras. Explique um exemplo dessa diferença, pensando em bairros ricos e bairros mais pobres:",
          lines: 5,
        },
        {
          kind: "lines",
          instruction: "Dê uma sugestão de ação que o poder público poderia tomar para melhorar a qualidade de vida em um bairro que cresceu de forma desorganizada:",
          lines: 3,
        },
      ],
    },
    {
      theme: "Quem cuida da nossa qualidade de vida",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com o órgão ou canal de participação responsável por cada área:",
          items: [
            "Problemas de coleta de lixo e poluição são cuidados por órgãos de __________ ambiental.",
            "Questões de ônibus, metrô e trânsito envolvem a área de __________.",
            "Moradias irregulares e falta de casas envolvem políticas de __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é uma forma de a população participar das decisões sobre melhorias na cidade?",
          options: [
            "Participar de audiências públicas e Conselhos Municipais",
            "Esperar em silêncio sem se manifestar",
            "Reclamar apenas com vizinhos, sem procurar os órgãos responsáveis",
            "Ignorar os problemas do bairro",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um problema do seu bairro (mobilidade, moradia ou meio ambiente) e explique qual órgão público ou conselho poderia ajudar a resolvê-lo e como:",
          lines: 5,
        },
        {
          kind: "word-select",
          instruction: "Marque as áreas que costumam ter órgãos públicos e conselhos voltados para melhorar a qualidade de vida na cidade:",
          items: [
            "meio ambiente",
            "mobilidade urbana",
            "moradia",
            "moda",
            "esportes de alto rendimento",
            "saúde pública",
          ],
        },
      ],
    },
    {
      theme: "Água limpa, água poluída",
      exercises: [
        {
          kind: "options",
          instruction: "Qual dessas é uma das principais causas de poluição de rios em áreas urbanas como São Paulo?",
          options: [
            "Despejo de esgoto sem tratamento diretamente nos rios",
            "Chuva forte no verão",
            "Presença de peixes no rio",
            "Vento soprando sobre a água",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as fontes de poluição da água mencionadas quando falamos de qualidade ambiental dos rios e oceanos:",
          items: [
            "esgoto doméstico",
            "efluentes industriais",
            "lixões",
            "água da chuva limpa",
            "óleo de fábricas",
            "luz do sol",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases comparando água limpa e água poluída:",
          items: [
            "Um rio com água __________ costuma ter cheiro forte, cor escura e pouca vida aquática.",
            "Um rio com água __________ permite a vida de peixes e outros animais aquáticos.",
            "O tratamento de __________ antes de chegar aos rios ajuda a diminuir a poluição da água.",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que a poluição de um rio na cidade pode afetar até os oceanos, mesmo estando longe do litoral:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Trabalho de ontem e de hoje",
      exercises: [
        {
          kind: "options",
          instruction: "Como a tecnologia mudou o trabalho no comércio de São Paulo nos últimos anos?",
          options: [
            "Muitas compras passaram a ser feitas pela internet, mudando a forma como as lojas funcionam",
            "As lojas pararam completamente de existir",
            "O comércio deixou de precisar de trabalhadores",
            "Nada mudou desde o século passado",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete comparando o trabalho de antigamente com o de hoje:",
          items: [
            "Antigamente, muitas tarefas na indústria eram feitas à __________; hoje, várias são feitas por máquinas e robôs.",
            "O setor de __________ cresceu muito em São Paulo, com trabalhos como educação, saúde e tecnologia.",
            "Na agropecuária, o uso de __________ modernas aumentou a produção com menos trabalhadores no campo.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os setores de trabalho que existem na Cidade e no Estado de São Paulo:",
          items: [
            "indústria",
            "comércio",
            "serviços",
            "agropecuária",
            "nenhum desses",
          ],
        },
        {
          kind: "lines",
          instruction: "Converse com um adulto da sua família sobre um trabalho que ele já teve ou conhece que mudou muito com o tempo. Escreva o que você descobriu:",
          lines: 5,
        },
      ],
    },
    {
      theme: "Como nos movemos e nos comunicamos",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os meios de transporte que já foram ou ainda são usados na Cidade de São Paulo:",
          items: [
            "bonde",
            "metrô",
            "ônibus",
            "carroça",
            "trem",
            "avião de papel",
          ],
        },
        {
          kind: "options",
          instruction: "Como os meios de comunicação mudaram ao longo do tempo na cidade?",
          options: [
            "De cartas e telefones fixos passamos a usar celulares e internet, tornando a comunicação mais rápida",
            "As pessoas pararam de se comunicar",
            "Só existiu um tipo de comunicação desde sempre",
            "A comunicação ficou mais lenta com o tempo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete comparando transporte e comunicação de ontem e de hoje:",
          items: [
            "Antes do metrô, um dos principais transportes coletivos de São Paulo era o __________.",
            "Hoje, muitas pessoas se comunicam à distância usando o __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um meio de transporte ou de comunicação e explique como ele mudou desde os tempos dos seus avós até hoje:",
          lines: 5,
        },
      ],
    },
    {
      theme: "De onde vem a energia que usamos",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a principal fonte de energia usada na indústria e no dia a dia da população paulistana?",
          options: [
            "Energia elétrica, produzida principalmente em usinas hidrelétricas",
            "Energia de moinhos de vento em cada casa",
            "Energia solar, usada em 100% das casas",
            "Velas e lamparinas a óleo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre energia em São Paulo:",
          items: [
            "A energia elétrica chega até as casas por meio de __________ elétricos.",
            "No Brasil, boa parte da energia elétrica vem de usinas __________, que usam a força da água.",
            "Usar energia de forma consciente ajuda a __________ os recursos naturais.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os aparelhos e situações do dia a dia que dependem de energia elétrica:",
          items: [
            "geladeira",
            "semáforo",
            "computador",
            "livro de papel",
            "metrô",
            "banco de praça",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que é importante economizar energia elétrica no dia a dia, mesmo morando em uma cidade grande como São Paulo:",
          lines: 4,
        },
      ],
    },
    {
      theme: "Apresentando nossas descobertas",
      exercises: [
        {
          kind: "options",
          instruction: "Por que é importante saber apresentar um trabalho ou pesquisa para os colegas de forma clara?",
          options: [
            "Para que todos entendam as informações e possam aprender com o que foi descoberto",
            "Para terminar a apresentação o mais rápido possível",
            "Porque só o professor precisa entender",
            "Porque não importa se os colegas entendem ou não",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as formas de expressão que podem ser usadas para apresentar um trabalho para a turma:",
          items: [
            "fala oral",
            "expressão corporal (gestos, encenação)",
            "cartazes com desenhos",
            "silêncio total",
            "música ou som",
            "ignorar a plateia",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um tema de Geografia que você estudou este ano (por exemplo, crescimento da cidade, mapas ou qualidade de vida) e planeje como você apresentaria esse assunto para a turma: o que falaria primeiro, o que mostraria e como terminaria:",
          lines: 6,
        },
        {
          kind: "draw",
          instruction: "Faça um cartaz ou esquema visual simples que resuma, com desenhos e poucas palavras, uma descoberta importante que você teve estudando a Cidade de São Paulo neste ano.",
          note: "Serve de apoio visual para a apresentação oral do estudante.",
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
    {
      theme: "Uma balança feita de cabide",
      exercises: [
        {
          kind: "options",
          instruction: "Numa balança de cabide, penduramos um saquinho em cada ponta. Se um lado tem um objeto bem pesado, o que acontece?",
          options: [
            "O lado pesado desce e o outro sobe",
            "Os dois lados ficam parados na mesma altura",
            "O cabide cai no chão",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os objetos que você acha que são MAIS PESADOS:",
          items: [
            "PENA",
            "PEDRA",
            "BORRACHA",
            "LIVRO GROSSO",
            "CLIPE DE PAPEL",
            "SAPATO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a balança de cabide:",
          items: [
            "Na balança, o lado com o objeto mais ___ desce.",
            "Para saber qual objeto pesa mais, colocamos um em cada ___ da balança.",
            "O cabide funciona como o ___ da balança.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha dois objetos da sua mochila. Se você os colocasse na balança de cabide, qual lado desceria? Por quê?",
          lines: 4,
        },
      ],
    },
    {
      theme: "Sorvete de saquinho: do líquido pro sólido com frio",
      exercises: [
        {
          kind: "lines",
          instruction: "No experimento, colocamos leite e açúcar num saquinho pequeno bem fechado e colocamos dentro de outro saquinho com bastante gelo e sal. Depois sacudimos bastante. O que aconteceu com o líquido de dentro depois de um tempo sacudindo?",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Por que colocamos SAL no gelo do saquinho grande?",
          options: [
            "Para o gelo ficar ainda mais gelado e congelar o sorvete mais rápido",
            "Para dar sabor ao sorvete",
            "Para o saquinho não rasgar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre o sorvete de saquinho:",
          items: [
            "Antes de sacudir, o leite com açúcar estava no estado ___.",
            "Depois de sacudir bastante tempo no gelo, o sorvete ficou no estado ___.",
            "O frio fez o líquido virar ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que têm a ver com FRIO:",
          items: [
            "GELO",
            "NEVE",
            "CONGELADOR",
            "FOGO",
            "SOL FORTE",
            "SORVETE",
          ],
        },
      ],
    },
    {
      theme: "Mesma fruta, guardada diferente",
      exercises: [
        {
          kind: "lines",
          instruction: "Cortamos uma maçã ao meio. Uma metade ficou fora da geladeira e a outra ficou guardada dentro da geladeira. No dia seguinte, observamos as duas. Escreva o que você acha que aconteceu com cada uma.",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Qual pedaço de fruta deve estragar mais rápido?",
          options: [
            "O que ficou fora da geladeira",
            "O que ficou dentro da geladeira",
            "Os dois estragam igual",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a conservação dos alimentos:",
          items: [
            "A geladeira deixa os alimentos mais ___.",
            "O frio ajuda a fruta a se conservar por mais ___.",
            "Fora da geladeira, a fruta cortada fica exposta ao ___ do ambiente.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os alimentos que costumamos guardar na geladeira:",
          items: [
            "LEITE",
            "IOGURTE",
            "PÃO FRANCÊS",
            "QUEIJO",
            "BOLACHA",
            "FRUTA CORTADA",
          ],
        },
      ],
    },
    {
      theme: "Caça-sombras pela escola",
      exercises: [
        {
          kind: "draw",
          instruction: "Escolha um objeto do pátio da escola que faz sombra. Desenhe o objeto e a sombra dele.",
          note: "Não esqueça de desenhar o sol também!",
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre as sombras:",
          items: [
            "A sombra aparece quando um objeto bloqueia a passagem da ___.",
            "Lá fora, a fonte de luz mais comum é o ___.",
            "Dentro da sala de aula, a sombra pode aparecer por causa da luz da ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Em qual horário as sombras costumam ficar bem curtinhas?",
          options: [
            "No meio do dia, quando o sol está bem alto",
            "De noite",
            "Quando está chovendo",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares da escola onde você pode encontrar sombras:",
          items: [
            "PÁTIO NO SOL",
            "DEBAIXO DA ÁRVORE",
            "PERTO DA JANELA COM SOL",
            "DENTRO DO ARMÁRIO FECHADO",
            "EMBAIXO DO BRINQUEDO DO PARQUINHO",
            "CORREDOR COM LÂMPADA ACESA",
          ],
        },
      ],
    },
    {
      theme: "Fome de verdade x vontade de comer besteira",
      exercises: [
        {
          kind: "options",
          instruction: "Qual dessas é um sinal de fome de verdade?",
          options: [
            "A barriga ronca e você se sente fraco",
            "Você vê uma propaganda de biscoito na TV",
            "Seu amigo está comendo doce",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a alimentação:",
          items: [
            "Sentir o estômago ___ é um sinal de que o corpo precisa de comida.",
            "Comer besteira só porque deu ___ de comer não é a mesma coisa que ter fome.",
            "O corpo precisa de comida de verdade para ter ___ para brincar e estudar.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os alimentos que ajudam o corpo a ficar forte e saudável:",
          items: [
            "ARROZ E FEIJÃO",
            "BATATA FRITA DE PACOTE",
            "FRUTA",
            "REFRIGERANTE",
            "OVO",
            "SALGADINHO",
          ],
        },
        {
          kind: "lines",
          instruction: "Conte sobre uma vez em que você sentiu fome de verdade. O que você comeu?",
          lines: 3,
        },
      ],
    },
    {
      theme: "Planta no sol, planta no escuro",
      exercises: [
        {
          kind: "lines",
          instruction: "Colocamos duas mudas de feijão iguais para crescer: uma perto da janela, com sol, e outra dentro de um armário escuro. Depois de uma semana, o que você acha que aconteceu com cada uma?",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Por que a planta que ficou no escuro cresce fraca e com folhas pálidas?",
          options: [
            "Porque ela precisa de luz para fazer seu alimento e crescer forte",
            "Porque ela não gosta de água",
            "Porque o armário é muito grande",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre as plantas e a luz:",
          items: [
            "As plantas precisam de ___ para crescerem fortes e verdes.",
            "Sem luz, as folhas da planta ficam mais ___.",
            "A planta que ficou perto da janela recebeu mais ___ do que a que ficou no escuro.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe as duas plantinhas do experimento: uma que cresceu no sol e outra que cresceu no escuro.",
          note: "Mostre a diferença entre elas!",
        },
      ],
    },
    {
      theme: "Peso não é tamanho",
      exercises: [
        {
          kind: "options",
          instruction: "Uma bexiga cheia de ar é bem grande. Uma pedrinha é pequena. Qual das duas você acha que é mais pesada?",
          options: [
            "A bexiga, porque é maior",
            "A pedrinha, mesmo sendo menor",
            "As duas pesam igual",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as coisas pequenas que podem ser bem pesadas:",
          items: [
            "MOEDA",
            "TRAVESSEIRO",
            "CHAVE",
            "PARAFUSO",
            "BALÃO DE FESTA",
            "PILHA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Uma pena é grande, mas é muito ___.",
            "Uma pedrinha é pequena, mas pode ser bem ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em dois objetos da sua casa. Qual deles é maior? Qual deles é mais pesado? É o mesmo objeto ou não?",
          lines: 3,
        },
      ],
    },
    {
      theme: "Roupa molhada no varal",
      exercises: [
        {
          kind: "options",
          instruction: "Uma camiseta molhada foi pendurada no varal, no sol. Outra igual foi pendurada na sombra. Qual vai secar primeiro?",
          options: [
            "A que está no sol",
            "A que está na sombra",
            "As duas secam no mesmo tempo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "O calor do sol faz a água da roupa ___.",
            "Na sombra, a roupa demora mais tempo para ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares onde uma roupa molhada seca mais rápido:",
          items: [
            "VARAL NO SOL",
            "GAVETA FECHADA",
            "QUINTAL ENSOLARADO",
            "ARMÁRIO ESCURO",
            "JANELA COM SOL",
            "PORÃO",
          ],
        },
        {
          kind: "lines",
          instruction: "Tem varal na sua casa? Conte onde ele fica e se pega bastante sol durante o dia.",
          lines: 3,
          note: "Se você não souber, pode perguntar para um adulto em casa.",
        },
      ],
    },
    {
      theme: "Receita de como guardar o lanche",
      exercises: [
        {
          kind: "options",
          instruction: "Qual desses lanches estraga mais rápido se ficar fora da geladeira num dia quente?",
          options: [
            "Iogurte",
            "Bolacha de água e sal",
            "Suco de caixinha fechado",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os alimentos que é melhor guardar na geladeira antes de ir para a escola:",
          items: [
            "IOGURTE",
            "BISCOITO",
            "PRESUNTO",
            "BANANA",
            "SUCO NATURAL",
            "PÃO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Um pote bem fechado ajuda a manter o lanche ___.",
            "Guardar o suco numa garrafinha gelada mantém ele fresco por mais ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma dica para um amigo guardar bem o lanche dele na mochila.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Biscoito das fases da Lua",
      exercises: [
        {
          kind: "options",
          instruction: "Quando um biscoito redondo está inteiro, sem nenhuma mordida, ele se parece com qual fase da Lua?",
          options: [
            "Lua cheia",
            "Lua minguante",
            "Lua nova",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Quando a Lua está toda redonda e iluminada, chamamos de Lua ___.",
            "Quando quase não conseguimos ver a Lua no céu, chamamos de Lua ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os nomes das fases da Lua:",
          items: [
            "LUA CHEIA",
            "LUA NOVA",
            "LUA CRESCENTE",
            "LUA MINGUANTE",
            "SOL",
            "ESTRELA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a Lua como você a viu no céu essa semana: cheia, redonda pela metade ou bem fininha?",
          note: "Se não lembrar, pergunte para alguém da sua casa ou observe a Lua hoje à noite com ajuda de um adulto.",
        },
      ],
    },
    {
      theme: "Sem energia pra brincar",
      exercises: [
        {
          kind: "options",
          instruction: "O que te dá mais energia para correr e brincar bastante no parque?",
          options: [
            "Comer uma refeição balanceada",
            "Ficar o dia todo sem comer",
            "Beber só água gelada",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Os alimentos dão ___ para o nosso corpo se mexer.",
            "Quando ficamos muito tempo sem comer, o corpo fica ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os alimentos que dão bastante energia para brincar:",
          items: [
            "ARROZ",
            "FEIJÃO",
            "BANANA",
            "PEDRA",
            "PÃO",
            "SAPATO",
          ],
        },
        {
          kind: "lines",
          instruction: "Conte uma brincadeira que você gosta de fazer e que precisa de bastante energia.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Dissecando uma planta de verdade",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as partes de uma planta:",
          items: [
            "RAIZ",
            "CAULE",
            "FOLHA",
            "FLOR",
            "RODA",
            "PORTA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "A parte da planta que fica embaixo da terra é a ___.",
            "A parte que sai da terra e sustenta a planta é o ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual parte da planta costuma ficar escondida dentro da terra?",
          options: [
            "A folha",
            "A raiz",
            "A flor",
          ],
        },
        {
          kind: "draw",
          instruction: "Observe com atenção a planta de verdade que o professor trouxe para a sala. Desenhe a planta e escreva o nome de cada parte que você encontrar.",
          note: "Só toque na planta com a ajuda do professor e lave as mãos depois de mexer nela.",
        },
      ],
    },
    {
      theme: "Quanto de água cabe aqui?",
      exercises: [
        {
          kind: "options",
          instruction: "Você despeja a mesma quantidade de água em um copo alto e fino e depois em uma tigela larga e baixa. O que acontece com a quantidade de água?",
          options: [
            "A quantidade de água muda",
            "A quantidade de água continua a mesma, só muda o formato",
            "A água desaparece",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os recipientes que servem para guardar água:",
          items: [
            "COPO",
            "PENEIRA",
            "GARRAFA",
            "TIGELA",
            "PRATO FURADO",
            "BALDE",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Quando a água muda de recipiente, a quantidade de água ___ (muda ou não muda).",
            "O formato do recipiente pode fazer a água parecer maior ou ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a mesma quantidade de água dentro de um copo alto e fino e dentro de uma tigela larga e baixa.",
          note: "Lembre-se: a quantidade de água é a mesma nos dois, só o formato muda!",
        },
      ],
    },
    {
      theme: "Gelo em diferentes lugares da sala",
      exercises: [
        {
          kind: "options",
          instruction: "Um cubo de gelo foi colocado perto da janela, no sol. Outro foi colocado dentro do armário, na sombra. Qual gelo derrete mais rápido?",
          options: [
            "O gelo que ficou no sol",
            "O gelo que ficou na sombra",
            "Os dois derretem no mesmo tempo",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares que costumam ser mais QUENTES na escola:",
          items: [
            "JANELA COM SOL",
            "DENTRO DA GELADEIRA",
            "PÁTIO NO RECREIO",
            "CAIXA DE ISOPOR COM GELO",
            "PERTO DA LÂMPADA ACESA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "O gelo derrete mais rápido quando fica em um lugar mais ___.",
            "Em um lugar mais frio, o gelo demora mais para ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva um lugar da sala de aula onde o gelo derreteria rápido, e outro onde ele demoraria mais para derreter.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Tampar, gelar ou secar: como conservamos alimentos",
      exercises: [
        {
          kind: "options",
          instruction: "Qual desses jeitos ajuda o leite a durar mais tempo sem estragar?",
          options: [
            "Deixar o pote aberto em cima da mesa",
            "Guardar na geladeira",
            "Deixar no sol",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Colocamos alguns alimentos na geladeira para eles ficarem ___.",
            "Fechamos o pote com uma tampa para não entrar ___ nem bicho.",
            "Frutas secas e carne de sol duram mais tempo porque perderam ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os alimentos que costumamos guardar na geladeira:",
          items: [
            "LEITE",
            "AÇÚCAR",
            "QUEIJO",
            "ARROZ CRU",
            "IOGURTE",
            "FEIJÃO CRU",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em um alimento que tem na sua casa. Escreva o nome dele e diga se ele fica guardado tampado, gelado ou seco.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Calendário lunar da turma",
      exercises: [
        {
          kind: "options",
          instruction: "Durante um mês, a turma observou a Lua todas as noites e anotou no calendário. O que a turma percebeu?",
          options: [
            "A Lua tem sempre o mesmo formato",
            "A Lua muda de formato aos poucos",
            "A Lua desaparece e nunca mais volta",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os nomes das fases da Lua:",
          items: [
            "LUA CHEIA",
            "LUA QUADRADA",
            "LUA NOVA",
            "LUA TRIANGULAR",
            "QUARTO CRESCENTE",
            "QUARTO MINGUANTE",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Quando a Lua está totalmente redonda e iluminada, chamamos de Lua ___.",
            "Quando quase não conseguimos ver a Lua no céu, chamamos de Lua ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe como está a Lua hoje à noite, ou na última vez em que você observou o céu.",
          note: "Se não lembrar, desenhe a fase da Lua que a turma anotou no calendário e escreva o nome dela do lado.",
        },
      ],
    },
    {
      theme: "Cesta de alimentos: o que vem da terra, do animal ou da fábrica?",
      exercises: [
        {
          kind: "options",
          instruction: "De onde vem o ovo que comemos?",
          options: [
            "Da terra (plantação)",
            "Do animal (galinha)",
            "Da fábrica",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os alimentos que vêm de ANIMAIS:",
          items: [
            "OVO",
            "CENOURA",
            "LEITE",
            "ARROZ",
            "MEL",
            "QUEIJO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "O feijão e a alface vêm da ___.",
            "O leite e o mel vêm dos ___.",
            "O biscoito e o macarrão são feitos na ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em três alimentos que você comeu hoje. Escreva se cada um vem da terra, do animal ou da fábrica.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Quem murcha primeiro: a planta sem água",
      exercises: [
        {
          kind: "options",
          instruction: "Duas plantinhas iguais foram plantadas. Uma foi regada todos os dias e a outra nunca recebeu água. O que deve acontecer com a planta sem água?",
          options: [
            "Ela vai crescer mais forte",
            "Ela vai murchar e secar",
            "Ela não vai mudar nada",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "A planta que recebe água todos os dias fica firme e ___.",
            "A planta que fica sem água murcha e as folhas ficam ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os sinais de que uma planta está precisando de água:",
          items: [
            "FOLHAS MURCHAS",
            "FOLHAS VERDES E FIRMES",
            "FOLHAS SECAS",
            "TERRA BEM MOLHADA",
            "TERRA RACHADA E SECA",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe as duas plantinhas do experimento: uma regada todos os dias e outra sem receber água.",
          note: "Use cores diferentes para mostrar bem a diferença entre as duas.",
        },
      ],
    },
    {
      theme: "Ficha de pesagem da turma",
      exercises: [
        {
          kind: "lines",
          instruction: "Você e sua dupla escolheram dois objetos da sala para pesar com as mãos. Escreva o nome dos dois objetos e qual deles é mais pesado.",
          lines: 3,
        },
        {
          kind: "options",
          instruction: "Na ficha de pesagem, qual objeto tem mais massa?",
          options: [
            "Uma borracha",
            "Uma mochila cheia de livros",
            "Os dois pesam igual",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os objetos que parecem ser mais pesados (têm mais massa):",
          items: [
            "LIVRO GROSSO",
            "BORRACHA",
            "MOCHILA CHEIA",
            "CLIPE",
            "GARRAFA DE ÁGUA CHEIA",
            "APONTADOR",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete a ficha de pesagem:",
          items: [
            "Quando um objeto é mais pesado que o outro, dizemos que ele tem mais ___.",
            "Quando as duas coisas pesam a mesma coisa, dizemos que elas pesam ___.",
          ],
        },
      ],
    },
    {
      theme: "Caça ao material: separando na hora do lanche",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais que podem sobrar do lanche e ir para a reciclagem:",
          items: [
            "CAIXINHA DE SUCO",
            "CASCA DE BANANA",
            "EMBALAGEM DE BISCOITO",
            "GUARDANAPO SUJO",
            "GARRAFA PET",
            "SAQUINHO PLÁSTICO",
          ],
        },
        {
          kind: "options",
          instruction: "A casca de fruta que sobra do seu lanche deve ir para o lixo:",
          options: [
            "Reciclável (materiais secos)",
            "Orgânico (restos de comida)",
            "Qualquer lixeira, tanto faz",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o tipo de lixo:",
          items: [
            "A casca da fruta é lixo ___.",
            "A caixinha de suco vazia e a embalagem de biscoito são lixo ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma lixeira e, do lado dela, um alimento ou embalagem que combina com esse tipo de lixo.",
          note: "Capriche nas cores!",
        },
      ],
    },
    {
      theme: "O que aconteceu com o alimento esquecido fora da geladeira?",
      exercises: [
        {
          kind: "lines",
          instruction: "Conte uma vez em que você viu (ou até provou sem querer) um alimento estragado por ter ficado fora da geladeira. O que aconteceu com ele?",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Por que guardamos leite, carnes e frutas na geladeira?",
          options: [
            "Só para ficar bonito na prateleira",
            "Para durar mais tempo e não estragar",
            "Não tem motivo nenhum",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os sinais de que um alimento estragou:",
          items: [
            "CHEIRO RUIM",
            "COR NORMAL",
            "MOFO",
            "TEXTURA MOLE E ESTRANHA",
            "EMBALAGEM FECHADINHA",
            "GOSTO AZEDO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Alimentos que ficam muito tempo fora da geladeira podem ___.",
            "Guardar a comida no lugar certo ajuda ela a durar ___.",
          ],
        },
      ],
    },
    {
      theme: "Modelando as fases da Lua com massinha",
      exercises: [
        {
          kind: "lines",
          instruction: "Depois de modelar as quatro fases da Lua com massinha, escreva o nome de cada fase que você fez.",
          lines: 4,
        },
        {
          kind: "fill-blank",
          instruction: "Complete o nome de cada fase da Lua:",
          items: [
            "Quando a Lua não aparece no céu, é a fase da Lua ___.",
            "Quando a Lua parece só um risquinho de luz, é a Lua ___.",
            "Quando a Lua está metade clara e metade escura, é a Lua ___.",
            "Quando a Lua está toda redonda e brilhante, é a Lua ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Depois da Lua Cheia, o que acontece com a Lua no céu?",
          options: [
            "Ela fica do mesmo jeito para sempre",
            "Ela vai diminuindo até virar Lua Nova de novo",
            "Ela desaparece do céu para sempre",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe como está a Lua no céu hoje à noite (ou como você imagina que ela está).",
          note: "Não esqueça de colocar estrelas ao redor!",
        },
      ],
    },
    {
      theme: "Alimentos que dão força para os músculos",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os alimentos que ajudam a deixar os músculos mais fortes:",
          items: [
            "OVO",
            "PIRULITO",
            "FEIJÃO",
            "REFRIGERANTE",
            "CARNE",
            "BALINHA",
            "LEITE",
            "PIPOCA DOCE",
          ],
        },
        {
          kind: "options",
          instruction: "Qual desses pratos tem mais alimentos que fortalecem os músculos?",
          options: [
            "Feijão com arroz e carne",
            "Só pirulito e balinha",
            "Suco de caixinha e biscoito recheado",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete:",
          items: [
            "Comer alimentos como ovo, feijão e carne ajuda a deixar os ___ mais fortes.",
            "Esses alimentos são ricos em ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um prato de comida com pelo menos um alimento que dá força para os músculos.",
          note: "Capriche nos detalhes do prato!",
        },
      ],
    },
    {
      theme: "Maquete das partes da planta",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete o nome de cada parte da planta:",
          items: [
            "A parte que fica embaixo da terra e prende a planta no chão é a ___.",
            "A parte que sobe e sustenta a planta é o ___.",
            "As partes verdes e finas, que a planta usa para respirar, são as ___.",
            "A parte colorida e cheirosa da planta é a ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as partes da planta que você usou para montar sua maquete:",
          items: [
            "RAIZ",
            "CAULE",
            "FOLHA",
            "FLOR",
            "FRUTO",
            "PEDRA",
          ],
        },
        {
          kind: "options",
          instruction: "Qual parte da planta fica escondida embaixo da terra?",
          options: [
            "Folha",
            "Raiz",
            "Flor",
          ],
        },
        {
          kind: "lines",
          instruction: "Depois de montar sua maquete, escreva para que serve a raiz da planta.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Comparando volume com grãos",
      exercises: [
        {
          kind: "options",
          instruction: "Se você encher um copinho e uma panela com grãos de milho, qual vai precisar de mais grãos?",
          options: [
            "O copinho",
            "A panela",
            "Os dois precisam da mesma quantidade",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os recipientes que você imagina que precisam de MAIS grãos para ficar cheios:",
          items: [
            "COPINHO DE CAFÉ",
            "PANELA GRANDE",
            "TAMPINHA DE GARRAFA",
            "BALDE",
            "COLHER",
            "VASILHA DE SALADA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Para saber qual recipiente é maior por dentro, podemos contar quantos ___ cabem nele.",
            "O recipiente que precisa de mais grãos para encher tem mais ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um recipiente pequeno e um recipiente grande que existem na sua casa.",
          note: "Depois, converse com a turma: qual dos dois precisaria de mais grãos de feijão para ficar cheio?",
        },
      ],
    },
    {
      theme: "O que fazer com a pilha usada?",
      exercises: [
        {
          kind: "options",
          instruction: "Você achou uma pilha velha, sem uso, dentro de casa. O que é certo fazer com ela?",
          options: [
            "Jogar no lixo comum da cozinha",
            "Levar até um ponto de coleta de pilhas",
            "Deixar largada no quintal",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares onde é ERRADO jogar uma pilha usada:",
          items: [
            "LIXO COMUM",
            "RIO",
            "QUINTAL",
            "PONTO DE COLETA",
            "VASO SANITÁRIO",
            "TERRENO BALDIO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Pilhas e baterias usadas não podem ir no lixo ___.",
            "O lugar certo para descartar pilhas é um ponto de ___.",
          ],
        },
        {
          kind: "lines",
          instruction: "Por que você acha que a pilha usada não pode ir para qualquer lugar? Escreva o que você sabe.",
          lines: 3,
          note: "Pense: ela pode fazer mal para a terra, a água ou os animais.",
        },
      ],
    },
    {
      theme: "Sombra do poste ao longo do dia",
      exercises: [
        {
          kind: "draw",
          instruction: "Escolha um poste ou uma árvore perto de casa ou da escola. Desenhe a sombra dele em dois horários diferentes do mesmo dia.",
          note: "Anote o horário de cada desenho.",
        },
        {
          kind: "options",
          instruction: "Ao meio-dia, quando o Sol está bem alto no céu, como costuma ficar a sombra dos objetos?",
          options: [
            "Bem comprida",
            "Bem curtinha",
            "A sombra desaparece completamente",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "De manhã cedo, quando o Sol está baixo, a sombra do poste é ___.",
            "No fim da tarde, a sombra do poste fica ___ de novo.",
          ],
        },
        {
          kind: "lines",
          instruction: "Observe a sombra de um poste pela manhã e à tarde. Ela mudou de tamanho ou de direção? Escreva o que você percebeu.",
          lines: 4,
        },
      ],
    },
    {
      theme: "O que a família viu no céu ontem à noite?",
      exercises: [
        {
          kind: "draw",
          instruction: "Peça para alguém da sua família olhar o céu à noite com você. Desenhe como estava a Lua.",
          note: "Anote a data da observação.",
        },
        {
          kind: "options",
          instruction: "Quando a Lua aparece bem redonda e clarinha, inteira no céu, como se chama essa fase?",
          options: [
            "Lua Nova",
            "Lua Cheia",
            "Lua Minguante",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que têm a ver com o céu à noite:",
          items: [
            "ESTRELA",
            "LUA CHEIA",
            "GELADEIRA",
            "ESCURO",
            "LUA NOVA",
            "TÊNIS",
          ],
        },
        {
          kind: "lines",
          instruction: "Converse com sua família: a Lua de ontem estava igual à de outros dias que você já viu? O que mudou?",
          lines: 3,
        },
      ],
    },
    {
      theme: "Alimentos que dão energia para brincar",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os alimentos que dão bastante energia para você correr e brincar:",
          items: [
            "ARROZ",
            "ALFACE",
            "BANANA",
            "TOMATE",
            "PÃO",
            "BATATA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Alimentos como arroz, pão e batata dão ___ para o corpo.",
            "Antes de brincar bastante, é bom comer algo que dê ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Depois de comer uma fruta ou um prato de arroz com feijão, como você costuma se sentir para brincar?",
          options: [
            "Com mais disposição e energia",
            "Com mais sono e fraqueza",
            "Sem nenhuma diferença",
          ],
        },
        {
          kind: "lines",
          instruction: "Qual alimento te deu energia para brincar hoje ou ontem? Escreva o nome dele e o que você fez de brincadeira depois.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Caça aos perigos escondidos na sala de aula",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as coisas que podem ser perigosas se usadas sem cuidado na sala de aula:",
          items: [
            "TESOURA",
            "LÁPIS DE COR",
            "TOMADA ELÉTRICA",
            "BORRACHA",
            "ESTILETE",
            "CADERNO",
          ],
        },
        {
          kind: "options",
          instruction: "Você percebe uma tomada elétrica com fios soltos perto da sua carteira. O que você deve fazer?",
          options: [
            "Mexer nos fios para ver o que é",
            "Avisar a professora imediatamente",
            "Não falar nada com ninguém",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com cuidado:",
          items: [
            "A tesoura deve ser usada com a ponta virada para ___.",
            "Se eu ver o chão molhado na sala, devo avisar o(a) ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Observe sua sala de aula e desenhe um objeto ou lugar que pode ser perigoso se usado sem cuidado.",
          note: "Depois, conte para a turma como usar esse objeto ou lugar com segurança.",
        },
      ],
    },
    {
      theme: "Sacola pesada, sacola leve",
      exercises: [
        {
          kind: "options",
          instruction: "Você vai carregar duas sacolas do mesmo tamanho: uma cheia de melancias e outra cheia de bolinhas de gude. Qual sacola deve ser mais pesada?",
          options: [
            "A sacola das melancias",
            "A sacola das bolinhas de gude",
            "As duas pesam igual",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as embalagens que costumam ficar pesadas quando estão cheias:",
          items: [
            "PACOTE DE ARROZ",
            "SAQUINHO DE PIPOCA VAZIO",
            "GARRAFÃO DE ÁGUA",
            "CAIXA DE OVOS CHEIA",
            "PENA DE TRAVESSEIRO",
            "PACOTE DE ALGODÃO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Uma sacola difícil de levantar é uma sacola ___.",
            "Uma sacola fácil de levantar é uma sacola ___.",
            "Quanto mais coisas dentro da sacola, mais ___ ela fica.",
          ],
        },
        {
          kind: "lines",
          instruction: "Peça a um adulto duas embalagens vazias de casa (uma caixa e uma garrafa, por exemplo). Pegue uma em cada mão e escreva qual pesa mais.",
          lines: 3,
          note: "Se as duas parecerem iguais, tudo bem! Escreva isso também.",
        },
      ],
    },
    {
      theme: "Jogo da separação: para qual lixeira vai?",
      exercises: [
        {
          kind: "options",
          instruction: "Uma garrafa de plástico vazia deve ir para a lixeira de qual cor, na coleta seletiva?",
          options: [
            "Vermelha (plástico)",
            "Verde (vidro)",
            "Marrom (orgânico)",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os materiais que podem ser reciclados:",
          items: [
            "JORNAL VELHO",
            "CASCA DE BANANA",
            "LATA DE REFRIGERANTE",
            "GUARDANAPO SUJO",
            "CAIXA DE PAPELÃO",
            "RESTO DE COMIDA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o tipo de lixo (papel, vidro, metal ou orgânico):",
          items: [
            "A casca de laranja é lixo ___.",
            "Uma garrafa de vidro quebrada é lixo ___.",
            "Uma lata de milho vazia é lixo ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma lixeira de coleta seletiva e coloque dentro dela três coisas que você poderia separar para reciclar hoje em casa.",
          note: "Não esqueça de pintar a lixeira com a cor certa!",
        },
      ],
    },
    {
      theme: "Relógio de sol da escola",
      exercises: [
        {
          kind: "lines",
          instruction: "De manhã, olhe sua sombra no chão do pátio. Na hora do recreio da tarde, olhe de novo, no mesmo lugar. O que mudou?",
          lines: 4,
        },
        {
          kind: "options",
          instruction: "Um relógio de sol marca as horas usando o movimento de qual coisa?",
          options: [
            "A sombra de um bastão",
            "O barulho do vento",
            "A cor das nuvens",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "De manhã bem cedo, a sombra costuma ser ___ (comprida ou curta).",
            "No meio do dia, a sombra costuma ser ___ (comprida ou curta).",
            "A sombra muda de posição porque o ___ muda de posição no céu.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os momentos do dia em que dá para ver a sombra de uma pessoa no chão iluminado pelo sol:",
          items: [
            "DE MANHÃ",
            "NO MEIO DO DIA",
            "NO FINAL DA TARDE",
            "DENTRO DE UMA CAIXA FECHADA",
            "À NOITE, NO ESCURO TOTAL",
          ],
        },
      ],
    },
    {
      theme: "Lua cheia ou Lua escondida: brincando com luz e sombra",
      exercises: [
        {
          kind: "options",
          instruction: "Numa noite de Lua Cheia, quanto da Lua conseguimos ver iluminada?",
          options: [
            "Ela toda, redondinha",
            "Só a metade",
            "Nada, ela fica escondida",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre a brincadeira da bolinha e a lanterna:",
          items: [
            "Quando a luz da lanterna bate direto na bolinha, ela fica toda ___.",
            "Quando a luz bate de lado, só uma parte da bolinha fica ___ e o resto fica na sombra.",
            "A Lua não tem luz própria: ela fica iluminada pela luz do ___.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as palavras que têm a ver com a brincadeira de luz e sombra que fizemos com a bolinha:",
          items: [
            "LANTERNA",
            "SOMBRA",
            "BOLINHA ILUMINADA",
            "GELADEIRA",
            "ÂNGULO DA LUZ",
            "SAPATO",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe a bolinha (representando a Lua) sendo iluminada pela lanterna de um jeito que só metade dela fique clara, como na Lua Meia.",
          note: "Use lápis escuro para marcar a parte que fica na sombra.",
        },
      ],
    },
    {
      theme: "Vitaminas escondidas nas frutas e verduras",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os alimentos que são boas fontes de vitaminas:",
          items: [
            "LARANJA",
            "BATATA FRITA",
            "CENOURA",
            "REFRIGERANTE",
            "MANGA",
            "BALA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases:",
          items: [
            "Comer frutas e verduras ajuda o corpo a ficar mais forte contra as ___.",
            "A ___ é uma fruta amarela por fora e por dentro, rica em vitaminas.",
            "Verduras como a couve e o brócolis também têm muitas ___.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual desses pratos tem mais vitaminas escondidas nele?",
          options: [
            "Salada colorida com cenoura, tomate e alface",
            "Um saquinho de salgadinho",
            "Um copo de refrigerante",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense no que você comeu hoje. Escreva o nome de uma fruta ou verdura que você comeu (ou poderia comer) e diga por que ela é boa para o seu corpo.",
          lines: 3,
        },
      ],
    },
    {
      theme: "Regras de segurança com a tesoura e a cola",
      exercises: [
        {
          kind: "options",
          instruction: "Ao usar a tesoura, como você deve segurá-la para andar com ela na sala?",
          options: [
            "Com a ponta virada para baixo, perto do corpo",
            "Correndo, com a ponta para frente",
            "Balançando no ar para os amigos verem",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as atitudes seguras ao usar tesoura e cola:",
          items: [
            "PEDIR AJUDA AO PROFESSOR",
            "CORTAR SENTADO NA CADEIRA",
            "CORRER COM A TESOURA",
            "GUARDAR A TESOURA DEPOIS DE USAR",
            "COLOCAR COLA NA BOCA",
            "APONTAR A TESOURA PARA O COLEGA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma regra de segurança:",
          items: [
            "Antes de usar a tesoura sozinho, é importante pedir ___ ao professor.",
            "Depois de usar a cola, é preciso fechar bem a ___.",
            "Nunca devemos apontar a tesoura para um ___.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você usando a tesoura do jeito certo: sentado, com calma, e com a ponta virada para baixo.",
          note: "Pense em como manter as mãos e os dedos protegidos.",
        },
      ],
    },
    {
      theme: "De que são feitos os objetos da sala de aula?",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais que você conhece na sala de aula:",
          items: [
            "PLÁSTICO",
            "MADEIRA",
            "METAL",
            "TECIDO",
            "PAPEL",
            "VIDRO",
          ],
        },
        {
          kind: "options",
          instruction: "A cadeira onde você senta é feita principalmente de:",
          options: [
            "Madeira ou plástico",
            "Tecido macio",
            "Vidro",
            "Papel",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra:",
          items: [
            "O caderno é feito de ____.",
            "A régua pode ser feita de ____ ou de plástico.",
          ],
        },
        {
          kind: "draw",
          instruction: "Escolha um objeto da sala de aula e desenhe-o.",
          note: "Depois, converse com a professora sobre do que ele é feito.",
        },
      ],
    },
    {
      theme: "Comparando materiais de diferentes lugares da escola",
      exercises: [
        {
          kind: "draw",
          instruction: "Escolha dois lugares da escola, como o pátio e a sala de aula. Desenhe um objeto de cada lugar.",
        },
        {
          kind: "word-select",
          instruction: "Circule os materiais que você pode encontrar no PÁTIO da escola:",
          items: [
            "TERRA",
            "GRAMA",
            "CIMENTO",
            "AREIA",
            "MADEIRA",
          ],
        },
        {
          kind: "options",
          instruction: "Em qual lugar da escola encontramos mais objetos de metal?",
          options: [
            "No parquinho (grades, brinquedos)",
            "Na biblioteca",
            "Na sala de aula",
            "No banheiro",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense em um material que você viu em dois lugares diferentes da escola. Onde você o encontrou?",
          lines: 2,
        },
      ],
    },
    {
      theme: "O fogo: uma fonte de luz e de calor",
      exercises: [
        {
          kind: "options",
          instruction: "Para que usamos o fogo em casa?",
          options: [
            "Para cozinhar os alimentos",
            "Para lavar roupa",
            "Para escovar os dentes",
            "Para ler um livro",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os lugares onde podemos encontrar fogo, sempre com a ajuda de um adulto:",
          items: [
            "FOGÃO",
            "VELA",
            "CHURRASQUEIRA",
            "GELADEIRA",
            "TORNEIRA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra:",
          items: [
            "O fogo dá luz e ____.",
            "Perto do fogo, precisa sempre ter um ____ por perto.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um momento em que sua família usa o fogo com cuidado, como acender o fogão para cozinhar.",
        },
      ],
    },
    {
      theme: "Esquentou ou esfriou? Investigando os materiais",
      exercises: [
        {
          kind: "options",
          instruction: "O que acontece com o gelo quando ele fica um tempo fora do congelador?",
          options: [
            "Ele esquenta, derrete e vira água",
            "Ele fica mais duro",
            "Ele desaparece para sempre",
            "Ele vira gelo colorido",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule as coisas que derretem quando esquentam:",
          items: [
            "GELO",
            "CHOCOLATE",
            "MANTEIGA",
            "PEDRA",
            "SORVETE",
            "VIDRO",
          ],
        },
        {
          kind: "lines",
          instruction: "Conte uma vez em que você viu algo esquentar ou esfriar, como um sorvete derretendo.",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe um picolé ou sorvete: de um lado, bem gelado; do outro lado, derretendo.",
        },
      ],
    },
    {
      theme: "Onde encontramos água ao nosso redor?",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os lugares onde podemos encontrar água:",
          items: [
            "TORNEIRA",
            "CHUVA",
            "RIO",
            "POÇA",
            "NUVEM",
            "GAVETA",
          ],
        },
        {
          kind: "options",
          instruction: "De onde vem a água que cai quando está chovendo?",
          options: [
            "Das nuvens",
            "Da torneira",
            "Do rio",
            "Da geladeira",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra:",
          items: [
            "Depois da chuva, a água pode formar uma ____ no chão.",
            "Para beber água em casa, eu abro a ____.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe três lugares onde você já viu água. Pode ser em casa, na rua ou na escola.",
        },
      ],
    },
    {
      theme: "Materiais que podem ser reutilizados",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais que podem ser reutilizados em casa:",
          items: [
            "CAIXA DE PAPELÃO",
            "POTE DE VIDRO",
            "GARRAFA PET",
            "CASCA DE BANANA",
            "LATA",
          ],
        },
        {
          kind: "options",
          instruction: "O que podemos fazer com um pote de vidro vazio, em vez de jogar fora?",
          options: [
            "Usar para guardar lápis ou outras coisas",
            "Quebrar",
            "Deixar no chão",
            "Enterrar no jardim",
          ],
        },
        {
          kind: "lines",
          instruction: "Conte um objeto que sua família reutiliza em casa em vez de jogar fora.",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Escolha uma caixa, um pote ou uma garrafa vazia e desenhe uma nova forma de usá-la.",
        },
      ],
    },
    {
      theme: "Materiais e recursos naturais no nosso dia a dia",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os materiais que vêm diretamente da natureza:",
          items: [
            "MADEIRA",
            "ALGODÃO",
            "PLÁSTICO",
            "ÁGUA",
            "ARGILA",
          ],
        },
        {
          kind: "options",
          instruction: "De onde vem a madeira usada para fazer uma mesa?",
          options: [
            "Das árvores",
            "Das pedras",
            "Da água do mar",
            "Do ar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra:",
          items: [
            "A roupa de algodão vem de uma ____ (planta).",
            "O pão que comemos é feito com farinha de ____.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um objeto da sua casa e a natureza de onde veio o material dele, por exemplo, uma mesa de madeira e uma árvore.",
        },
      ],
    },
    {
      theme: "Observando o céu: Lua, Sol e estrelas",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule o que podemos ver no céu:",
          items: [
            "SOL",
            "LUA",
            "ESTRELAS",
            "NUVENS",
            "PEIXE",
          ],
        },
        {
          kind: "options",
          instruction: "Quando vemos a Lua e as estrelas com mais facilidade?",
          options: [
            "À noite",
            "De manhã bem cedo",
            "No meio do dia",
            "Nunca podemos ver",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra:",
          items: [
            "De dia, o astro que vemos brilhando forte é o ____.",
            "À noite, além das estrelas, também vemos a ____.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o céu de noite, com a Lua e as estrelas.",
        },
      ],
    },
    {
      theme: "O Sol: fonte de luz e calor para a vida",
      exercises: [
        {
          kind: "options",
          instruction: "Por que as plantas precisam do Sol?",
          options: [
            "Para crescer e produzir seu alimento",
            "Para ficarem molhadas",
            "Para mudar de cor à noite",
            "Elas não precisam do Sol",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule o que o Sol nos dá:",
          items: [
            "LUZ",
            "CALOR",
            "CHUVA",
            "ESCURIDÃO",
            "FRIO",
          ],
        },
        {
          kind: "lines",
          instruction: "O que você gosta de fazer em um dia de sol?",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe o Sol brilhando e algo que ele ajuda a acontecer, como uma planta crescendo ou uma roupa secando no varal.",
        },
      ],
    },
    {
      theme: "Brincando com sombras",
      exercises: [
        {
          kind: "options",
          instruction: "Quando aparece a sombra de um objeto?",
          options: [
            "Quando a luz bate nele e ele bloqueia a passagem da luz",
            "Quando está escuro total",
            "Quando chove",
            "Quando o objeto é transparente",
          ],
        },
        {
          kind: "word-select",
          instruction: "Circule os momentos em que é mais fácil ver a sua sombra:",
          items: [
            "DIA DE SOL",
            "NOITE FECHADA",
            "DIA NUBLADO",
            "ARMÁRIO ESCURO",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra:",
          items: [
            "A sombra aparece porque o corpo não deixa a ____ passar.",
            "No escuro total, não existe ____.",
          ],
        },
        {
          kind: "draw",
          instruction: "Vá para um lugar com sol, observe sua sombra e desenhe você com sua sombra ao lado.",
          note: "Atividade de observação: se possível, faça isso no pátio antes de desenhar.",
        },
      ],
    },
    {
      theme: "Manhã, tarde e noite: os períodos do dia",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule o que combina com a MANHÃ:",
          items: [
            "ACORDAR",
            "TOMAR CAFÉ DA MANHÃ",
            "DORMIR À NOITE",
            "LUA CHEIA",
          ],
        },
        {
          kind: "options",
          instruction: "O que geralmente fazemos à noite?",
          options: [
            "Jantar e dormir",
            "Tomar café da manhã",
            "Ir para a escola",
            "Almoçar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra:",
          items: [
            "Hoje é ____-feira (ou o nome do dia de hoje).",
            "____ é o dia que já passou.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe três coisas que você faz em um dia: uma de manhã, uma de tarde e uma de noite.",
        },
      ],
    },
    {
      theme: "O que fazemos de dia e o que fazemos à noite?",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as atividades que fazemos DE DIA:",
          items: [
            "IR PARA A ESCOLA",
            "BRINCAR NO PARQUE",
            "DORMIR A NOITE TODA",
            "TOMAR BANHO PARA DORMIR",
          ],
        },
        {
          kind: "options",
          instruction: "Qual dessas atividades costuma acontecer à noite?",
          options: [
            "Escovar os dentes antes de dormir",
            "Ir para a escola",
            "Tomar café da manhã",
            "Brincar no parque ao sol",
          ],
        },
        {
          kind: "lines",
          instruction: "Conte uma coisa que você faz de dia e uma coisa que você faz à noite.",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe duas cenas: você fazendo algo de dia e você fazendo algo à noite.",
        },
      ],
    },
    {
      theme: "Conhecendo as partes do corpo humano",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule as partes do corpo humano:",
          items: [
            "CABEÇA",
            "BRAÇO",
            "PERNA",
            "MESA",
            "PÉ",
            "CADEIRA",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma parte do corpo:",
          items: [
            "Eu penso com a minha ____.",
            "Eu caminho com as minhas ____.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual parte do corpo usamos para bater palmas?",
          options: [
            "As mãos",
            "Os pés",
            "As orelhas",
            "O nariz",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o seu corpo inteiro, da cabeça aos pés.",
        },
      ],
    },
    {
      theme: "Os cinco sentidos e para que servem",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os órgãos dos sentidos:",
          items: [
            "OLHOS",
            "OUVIDOS",
            "NARIZ",
            "LÍNGUA",
            "PELE",
            "JOELHO",
          ],
        },
        {
          kind: "options",
          instruction: "Qual parte do corpo usamos para sentir o cheiro de uma flor?",
          options: [
            "O nariz",
            "Os olhos",
            "A língua",
            "Os ouvidos",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma parte do corpo:",
          items: [
            "Eu vejo com os meus ____.",
            "Eu escuto com os meus ____.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe seu rosto e mostre com uma seta os olhos, o nariz, a boca e as orelhas.",
        },
      ],
    },
    {
      theme: "Recursos naturais que usamos todos os dias",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os recursos naturais que usamos todos os dias:",
          items: [
            "ÁGUA",
            "AR",
            "SOL",
            "LUZ ELÉTRICA",
            "CONTROLE REMOTO",
          ],
        },
        {
          kind: "options",
          instruction: "Para que usamos a água todos os dias?",
          options: [
            "Para beber, tomar banho e cozinhar",
            "Só para regar plantas",
            "Só para nadar",
            "Não usamos água todos os dias",
          ],
        },
        {
          kind: "lines",
          instruction: "Conte uma forma de usar a água com cuidado, sem desperdiçar.",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe três momentos do seu dia em que você usa água.",
        },
      ],
    },
    {
      theme: "Água, solo, luz e ar: importantes para a vida",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule o que uma planta precisa para viver:",
          items: [
            "ÁGUA",
            "SOLO (TERRA)",
            "LUZ DO SOL",
            "AR",
            "TELEVISÃO",
          ],
        },
        {
          kind: "options",
          instruction: "Por que respiramos ar o tempo todo?",
          options: [
            "Porque nosso corpo precisa dele para viver",
            "Só quando estamos correndo",
            "Só de noite",
            "Não precisamos de ar",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra:",
          items: [
            "As plantas crescem na ____ (terra).",
            "Nós respiramos o ____ que está à nossa volta.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma planta e os quatro elementos que ela precisa para viver: água, solo, luz e ar.",
        },
      ],
    },
    {
      theme: "Procurando seres vivos na escola",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os seres vivos que podemos encontrar na escola:",
          items: [
            "FORMIGA",
            "ÁRVORE",
            "PEDRA",
            "PASSARINHO",
            "MESA",
            "GRAMA",
          ],
        },
        {
          kind: "options",
          instruction: "Qual dessas coisas NÃO é um ser vivo?",
          options: [
            "Uma pedra",
            "Uma formiga",
            "Uma árvore",
            "Um passarinho",
          ],
        },
        {
          kind: "lines",
          instruction: "Vá até o pátio ou o jardim da escola e conte um ser vivo que você encontrou.",
          lines: 2,
          note: "Atividade de observação: se possível, faça uma volta pelo pátio antes de responder.",
        },
        {
          kind: "draw",
          instruction: "Desenhe dois seres vivos que você já viu na escola.",
        },
      ],
    },
    {
      theme: "Somos parecidos e diferentes",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule características que podem ser diferentes entre as pessoas:",
          items: [
            "COR DA PELE",
            "TIPO DE CABELO",
            "ALTURA",
            "COR DOS OLHOS",
          ],
        },
        {
          kind: "options",
          instruction: "Se um colega é diferente de você, o que devemos fazer?",
          options: [
            "Respeitar e conviver bem com ele",
            "Rir dele",
            "Não brincar com ele",
            "Ignorá-lo sempre",
          ],
        },
        {
          kind: "lines",
          instruction: "Conte uma coisa parecida e uma coisa diferente entre você e um colega.",
          lines: 2,
        },
        {
          kind: "draw",
          instruction: "Desenhe você e um colega de turma lado a lado, mostrando uma diferença entre vocês, como altura ou cor do cabelo.",
        },
      ],
    },
    {
      theme: "Cuidando da higiene todos os dias",
      exercises: [
        {
          kind: "word-select",
          instruction: "Circule os hábitos de higiene que você faz no seu dia a dia:",
          items: [
            "LAVAR AS MÃOS",
            "ESCOVAR OS DENTES",
            "TOMAR BANHO",
            "PULAR CORDA",
            "CORTAR AS UNHAS",
          ],
        },
        {
          kind: "options",
          instruction: "Quando é mais importante lavar as mãos?",
          options: [
            "Antes de comer e depois de usar o banheiro",
            "Só de manhã",
            "Só uma vez por semana",
            "Não é importante lavar as mãos",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com uma palavra:",
          items: [
            "Para os dentes ficarem limpos, eu uso a ____ de dentes.",
            "Depois de brincar, antes de comer, eu lavo as ____.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe você escovando os dentes ou lavando as mãos.",
        },
      ],
    },
    {
      theme: "Separando misturas: peneira, ímã e filtro",
      exercises: [
        {
          kind: "options",
          instruction: "Uma mistura tem areia grossa e limalha de ferro. Qual é o jeito mais rápido de separar o ferro do resto?",
          options: [
            "Usar um ímã",
            "Usar uma peneira de furos grandes",
            "Usar um filtro de papel",
            "Colocar tudo na água",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o nome do método de separação usado em cada situação:",
          items: [
            "Para separar a água suja (com terra) e deixá-la mais limpa, usamos um __________ de papel.",
            "Para separar arroz de pedrinhas pequenas do mesmo tamanho, o jeito mais confiável é a separação __________ (catando à mão).",
            "Para separar grãos de milho de farinha bem fina, usamos uma __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque somente as misturas que podem ser separadas com uma peneira:",
          items: [
            "arroz e feijão",
            "sal dissolvido em água",
            "cascalho e areia fina",
            "água e óleo",
            "farinha e grãos de milho",
            "limalha de ferro e serragem",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o experimento de filtragem: um copo com água suja sendo despejada em um filtro de papel dentro de um funil, caindo limpa em outro copo. Escreva onde fica a sujeira retida.",
          note: "Se possível, peça para a turma descrever oralmente antes de desenhar.",
        },
      ],
    },
    {
      theme: "Renovável ou não? Classificando os recursos naturais",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque apenas os recursos naturais renováveis (que se repõem na natureza em pouco tempo):",
          items: [
            "luz do sol",
            "petróleo",
            "vento",
            "carvão mineral",
            "água da chuva",
            "gás natural",
          ],
        },
        {
          kind: "options",
          instruction: "Por que o petróleo é considerado um recurso natural não renovável?",
          options: [
            "Porque leva milhões de anos para se formar na natureza",
            "Porque não pode ser usado para nada",
            "Porque é encontrado só no Brasil",
            "Porque é um recurso que nunca acaba",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com renovável ou não renovável:",
          items: [
            "A energia solar é um recurso __________, pois o Sol continua brilhando todos os dias.",
            "O carvão mineral é um recurso __________, pois demora milhões de anos para se formar.",
            "A água doce dos rios é um recurso __________, mas pode se tornar escassa se for desperdiçada.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um recurso não renovável (como o petróleo) e explique por que é importante usá-lo com cuidado, sem desperdício.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Volta ou não volta? Mudanças reversíveis e irreversíveis",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque as mudanças que são IRREVERSÍVEIS (não é possível voltar ao estado original):",
          items: [
            "gelo derretendo",
            "assar um bolo",
            "queimar um papel",
            "água virando vapor",
            "fritar um ovo",
            "congelar suco",
          ],
        },
        {
          kind: "options",
          instruction: "A água que congela no congelador e depois derrete é um exemplo de mudança:",
          options: [
            "Reversível, porque a água volta ao estado líquido",
            "Irreversível, porque a água muda de cor",
            "Reversível, porque vira outra substância",
            "Irreversível, porque não pode ser reaproveitada",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete indicando se a mudança é reversível ou irreversível:",
          items: [
            "Amassar uma folha de papel e depois desamassá-la é uma mudança __________.",
            "Queimar uma folha de papel até virar cinza é uma mudança __________.",
            "Derreter manteiga e depois colocá-la na geladeira para endurecer de novo é uma mudança __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Pense no preparo de um bolo: a massa crua vira bolo assado no forno. Explique por que essa mudança é irreversível, mesmo que o bolo esfrie depois.",
          lines: 4,
        },
      ],
    },
    {
      theme: "De onde vem a energia? Transformações no dia a dia",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com o tipo de energia para a qual a energia elétrica é transformada em cada aparelho:",
          items: [
            "No chuveiro elétrico, a energia elétrica se transforma em energia __________.",
            "Na lâmpada acesa, a energia elétrica se transforma em energia __________.",
            "Na caixa de som ligada, a energia elétrica se transforma em energia __________.",
            "No ventilador ligado, a energia elétrica se transforma em energia de __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Em um liquidificador ligado na tomada, a energia elétrica é transformada principalmente em:",
          options: [
            "Energia de movimento (o motor gira as lâminas)",
            "Energia luminosa",
            "Energia sonora apenas",
            "Energia química",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os aparelhos que transformam energia elétrica em energia luminosa (luz):",
          items: [
            "lâmpada",
            "ferro de passar",
            "abajur",
            "liquidificador",
            "lanterna a pilha",
            "ventilador",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um aparelho elétrico da sua casa e explique em quais tipos de energia a energia elétrica dele se transforma.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Comida é combustível: alimentação e energia",
      exercises: [
        {
          kind: "options",
          instruction: "Por que precisamos comer todos os dias, mesmo quando não estamos com muita fome?",
          options: [
            "Porque o corpo precisa de energia dos alimentos para funcionar e se manter aquecido",
            "Porque comer é só um hábito sem função para o corpo",
            "Porque o corpo produz energia sozinho, sem precisar de alimento",
            "Porque comer serve apenas para crescer, não para dar energia",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre alimentação e energia:",
          items: [
            "Quando corremos ou praticamos esportes, o corpo gasta mais __________ do que quando estamos parados.",
            "Alimentos como arroz, pão e massas são ricos em carboidratos, que dão __________ rápida para o corpo.",
            "Se comermos pouco, o corpo pode ficar sem __________ suficiente para as atividades do dia.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma criança brincando de pique-pega e, ao lado, um prato de comida. Faça uma seta ligando o prato à criança, mostrando de onde vem a energia para ela correr.",
          note: "Peça que expliquem o desenho em voz alta antes de guardar.",
        },
        {
          kind: "lines",
          instruction: "Imagine um experimento em que dois grupos de alunos fazem a mesma atividade física: um grupo tomou café da manhã e o outro não. Explique como vocês poderiam investigar se isso muda o cansaço de cada grupo.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Detetives da poluição: problemas e soluções para o ambiente",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque as ações humanas que poluem o ambiente:",
          items: [
            "jogar lixo no rio",
            "reciclar embalagens",
            "queimar lixo a céu aberto",
            "plantar árvores",
            "despejar esgoto sem tratamento",
            "usar transporte a pé",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é a principal consequência de jogar óleo de cozinha usado diretamente na pia?",
          options: [
            "Ele contamina a água e prejudica plantas e animais aquáticos",
            "Ele ajuda a limpar a tubulação",
            "Ele evapora sem causar nenhum problema",
            "Ele se transforma em água potável",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com um agente poluidor e uma solução para o problema:",
          items: [
            "A fumaça de fábricas e carros polui o ar; uma solução é __________.",
            "O lixo jogado em terrenos baldios atrai ratos e baratas; uma solução é __________.",
            "O esgoto despejado em rios sem tratamento mata peixes; uma solução é __________.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um problema de poluição que você já observou no seu bairro ou na sua cidade e proponha uma solução possível para amenizá-lo.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Conhecendo a Terra por mapas, globos e fotos",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a principal vantagem do globo terrestre em relação a um mapa plano?",
          options: [
            "O globo mostra a forma real e arredondada da Terra",
            "O globo é mais fácil de dobrar e guardar",
            "O globo mostra apenas o Brasil em detalhes",
            "O globo não precisa de legenda",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre formas de representar a Terra:",
          items: [
            "As fotografias tiradas por satélites mostram a Terra vista de __________.",
            "No mapa, as cores azuis geralmente representam __________.",
            "No globo terrestre, as cores verdes e marrons geralmente representam __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos que costumam aparecer em um mapa para ajudar a entendê-lo:",
          items: [
            "legenda",
            "escala",
            "rosa dos ventos",
            "receita de bolo",
            "título do mapa",
            "lista de brincadeiras",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um mapa simples do caminho de casa até a escola, incluindo uma legenda com pelo menos três símbolos (por exemplo: árvore, semáforo, praça).",
          note: "Incentive o uso de cores e símbolos próprios, sem se preocupar com escala exata.",
        },
      ],
    },
    {
      theme: "As camadas da Terra: geosfera, hidrosfera e atmosfera",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com o nome da camada da Terra correspondente:",
          items: [
            "A camada formada pelas rochas, o solo e o interior sólido da Terra é a __________.",
            "A camada formada pela água em estado líquido, sólido e gasoso (rios, mares, geleiras) é a __________.",
            "A camada de ar e gases que envolve o planeta e permite respirarmos é a __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Em qual dessas camadas da Terra o ser humano NÃO consegue viver sem equipamentos especiais?",
          options: [
            "No fundo do oceano, parte da hidrosfera",
            "Na superfície da geosfera",
            "Na camada de ar próxima ao chão, parte da atmosfera",
            "Em nenhuma delas, pois o ser humano vive em todas sem ajuda",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos que fazem parte da hidrosfera:",
          items: [
            "oceanos",
            "geleiras",
            "vulcões",
            "rios",
            "nuvens de chuva",
            "montanhas rochosas",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um corte simples da Terra mostrando as três camadas: geosfera (rochas), hidrosfera (água) e atmosfera (ar), com uma legenda identificando cada uma.",
          note: "Pode ser um desenho esquemático, sem preocupação com proporções reais.",
        },
      ],
    },
    {
      theme: "Viagem pelo Sistema Solar: pesquisando os planetas",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é o planeta mais próximo do Sol no Sistema Solar?",
          options: [
            "Mercúrio",
            "Terra",
            "Marte",
            "Vênus",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Pesquise e complete com o nome do planeta correspondente:",
          items: [
            "É conhecido como o \"planeta vermelho\" por causa da cor de seu solo: __________.",
            "É o maior planeta do Sistema Solar: __________.",
            "É famoso por seus grandes anéis formados por gelo e rochas: __________.",
            "É o único planeta do Sistema Solar onde já se comprovou a existência de vida: __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os planetas do Sistema Solar (cuidado com os nomes que não são planetas):",
          items: [
            "Netuno",
            "Lua",
            "Urano",
            "Sol",
            "Saturno",
            "Cometa Halley",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha um planeta do Sistema Solar (que não seja a Terra) e escreva três informações que você descobriu sobre ele em uma pesquisa.",
          lines: 4,
        },
      ],
    },
    {
      theme: "As fases da Lua: por que o céu muda todo mês?",
      exercises: [
        {
          kind: "options",
          instruction: "Por que a Lua parece mudar de forma ao longo do mês, tendo fases como nova, crescente, cheia e minguante?",
          options: [
            "Porque vemos partes diferentes da Lua iluminadas pelo Sol, conforme ela gira ao redor da Terra",
            "Porque a Lua muda de tamanho de verdade a cada semana",
            "Porque nuvens cobrem partes diferentes da Lua todo mês",
            "Porque a Lua troca de lugar com outros planetas",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o nome da fase da Lua correspondente à descrição:",
          items: [
            "Quando a Lua está totalmente iluminada e visível como um círculo completo, é a fase __________.",
            "Quando a Lua não é visível no céu porque está entre a Terra e o Sol, é a fase __________.",
            "Quando aparece só metade da Lua iluminada, aumentando dia a dia, é a fase __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as afirmações corretas sobre as fases da Lua:",
          items: [
            "As fases se repetem em um ciclo de cerca de um mês",
            "A Lua produz luz própria",
            "A Lua reflete a luz do Sol",
            "As fases da Lua acontecem porque ela gira ao redor da Terra",
            "A Lua muda de tamanho de verdade",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe as quatro principais fases da Lua (nova, crescente, cheia e minguante) na ordem em que elas acontecem, com o nome de cada uma.",
          note: "Pode ser feito como uma sequência circular, representando o ciclo lunar.",
        },
      ],
    },
    {
      theme: "Diário do céu: observando estrelas e planetas",
      exercises: [
        {
          kind: "lines",
          instruction: "Observe o céu à noite durante alguns dias (com a ajuda de um adulto) e registre o que você viu: havia estrelas, Lua, planetas? Alguma coisa mudou de posição de um dia para o outro?",
          lines: 5,
          note: "Se não for possível observar o céu real, pode-se usar um aplicativo de astronomia ou imagens do professor.",
        },
        {
          kind: "options",
          instruction: "Qual é a principal diferença entre uma estrela e um planeta observados no céu noturno?",
          options: [
            "A estrela produz luz própria; o planeta reflete a luz do Sol",
            "O planeta é sempre maior e mais brilhante que a estrela",
            "A estrela muda de posição rapidamente; o planeta não se move",
            "Não existe diferença, são o mesmo tipo de corpo celeste",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete o registro de observação do céu:",
          items: [
            "O melhor horário para observar estrelas é durante a __________, longe de luzes fortes.",
            "Ao observar o céu por vários dias seguidos, é possível perceber que a posição da Lua __________ em relação às estrelas.",
            "Para registrar as observações do céu, podemos usar __________ e anotações escritas.",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o céu noturno que você observou (ou imaginou, com base em pesquisas), indicando a posição da Lua e de pelo menos duas estrelas ou constelações.",
          note: "Pode-se usar a Constelação do Cruzeiro do Sul como referência, comum no céu brasileiro.",
        },
      ],
    },
    {
      theme: "Prato saudável: os efeitos da alimentação no corpo",
      exercises: [
        {
          kind: "options",
          instruction: "Por que o consumo frequente e em excesso de alimentos ultraprocessados (como salgadinhos e refrigerantes) pode prejudicar a saúde?",
          options: [
            "Porque têm muito açúcar, sal e gordura, e poucos nutrientes essenciais",
            "Porque dão energia demais para o corpo usar",
            "Porque têm excesso de vitaminas naturais",
            "Porque são sempre mais baratos que alimentos naturais",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os alimentos que fazem parte de uma alimentação saudável e equilibrada:",
          items: [
            "frutas variadas",
            "refrigerante",
            "verduras e legumes",
            "salgadinhos industrializados",
            "feijão com arroz",
            "balas e doces em excesso",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre os efeitos da alimentação no corpo:",
          items: [
            "Comer poucas frutas e verduras pode deixar o corpo com falta de __________.",
            "O excesso de açúcar na alimentação pode contribuir para o desenvolvimento de __________.",
            "Uma alimentação variada e equilibrada ajuda o corpo a crescer __________ e com mais disposição.",
          ],
        },
        {
          kind: "lines",
          instruction: "Compare o café da manhã de duas crianças: uma comeu apenas biscoito recheado e refrigerante; a outra comeu fruta, pão integral e leite. Explique como cada uma pode se sentir durante a manhã na escola.",
          lines: 5,
        },
      ],
    },
    {
      theme: "O caminho do alimento: nutrientes e eliminação de resíduos",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete com o nome do órgão do sistema digestório correspondente:",
          items: [
            "O alimento é triturado pelos dentes e misturado à saliva na __________.",
            "O alimento desce até o estômago pelo __________.",
            "No __________, o alimento é misturado a sucos digestivos e começa a virar uma massa mais líquida.",
            "No __________, os nutrientes são absorvidos e passam para o sangue.",
          ],
        },
        {
          kind: "options",
          instruction: "Depois que os nutrientes são absorvidos pelo intestino delgado, o que acontece com os resíduos que o corpo não aproveita?",
          options: [
            "Seguem para o intestino grosso e são eliminados como fezes",
            "Voltam para o estômago para serem digeridos de novo",
            "São absorvidos totalmente pelo sangue",
            "Desaparecem sem deixar resíduos",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os nutrientes que podemos obter dos alimentos:",
          items: [
            "proteínas",
            "vitaminas",
            "carboidratos",
            "plástico",
            "minerais",
            "areia",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o caminho do alimento pelo corpo humano, desde a boca até a eliminação dos resíduos, indicando com setas a ordem: boca, esôfago, estômago, intestino delgado, intestino grosso.",
          note: "Vale usar uma silhueta simples do corpo humano para localizar os órgãos.",
        },
      ],
    },
    {
      theme: "Meu corpo em movimento: batimentos e respiração",
      exercises: [
        {
          kind: "lines",
          instruction: "Conte seus batimentos cardíacos (ou peça ajuda para medir) em repouso e depois de pular corda por um minuto. Registre os dois números e explique o que aconteceu.",
          lines: 4,
          note: "Pode-se contar as batidas colocando a mão no pulso ou no peito durante 15 segundos e multiplicar por 4.",
        },
        {
          kind: "options",
          instruction: "Por que a frequência cardíaca e a respiração aumentam depois de correr ou pular?",
          options: [
            "Porque o corpo precisa levar mais oxigênio aos músculos que estão trabalhando",
            "Porque o coração fica cansado e bate mais devagar",
            "Porque a respiração para de funcionar por alguns minutos",
            "Porque o corpo perde a necessidade de oxigênio durante o exercício",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre os sistemas respiratório e cardiovascular:",
          items: [
            "O sistema __________ é responsável por levar o ar (oxigênio) para dentro do corpo.",
            "O sistema __________ é responsável por bombear o sangue com oxigênio para todo o corpo.",
            "Depois de atividade física intensa, é comum sentir a respiração e o coração __________ até o corpo voltar ao normal.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os sinais que costumam aumentar logo depois de uma atividade física intensa:",
          items: [
            "frequência cardíaca",
            "frequência respiratória",
            "sono profundo",
            "suor",
            "cansaço muscular",
            "altura do corpo",
          ],
        },
      ],
    },
    {
      theme: "A menor parte da vida: conhecendo as células",
      exercises: [
        {
          kind: "options",
          instruction: "Por que a célula é considerada a menor unidade dos seres vivos?",
          options: [
            "Porque é a menor estrutura capaz de realizar as funções básicas da vida",
            "Porque não pode ser observada nem com microscópio",
            "Porque só existe em animais grandes",
            "Porque é maior que qualquer órgão do corpo",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre as células:",
          items: [
            "As células só podem ser vistas com o auxílio de um __________.",
            "O corpo humano é formado por bilhões de __________ diferentes, como células da pele e do sangue.",
            "Seres vivos muito pequenos, como algumas bactérias, podem ser formados por uma única __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os seres vivos que são formados por células (todos os seres vivos!):",
          items: [
            "uma formiga",
            "uma árvore",
            "uma pedra",
            "um ser humano",
            "uma nuvem",
            "uma bactéria",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma célula bem grande, como se estivesse vista no microscópio, e identifique pelo menos duas partes dela (por exemplo: núcleo e membrana).",
          note: "Pode-se usar como referência imagens de células vistas em livros didáticos ou pesquisas.",
        },
      ],
    },
    {
      theme: "Quem come quem? Montando cadeias alimentares",
      exercises: [
        {
          kind: "fill-blank",
          instruction: "Complete a cadeia alimentar com os termos produtor, consumidor ou decompositor:",
          items: [
            "A planta que produz seu próprio alimento por meio da fotossíntese é chamada de __________.",
            "O gafanhoto que come a planta é um __________.",
            "A cobra que come o sapo, que comeu o gafanhoto, é um __________.",
            "O fungo que decompõe os restos de um animal morto é um __________.",
          ],
        },
        {
          kind: "options",
          instruction: "Em uma cadeia alimentar (capim → gafanhoto → sapo → cobra), o que acontece se todos os sapos daquele ambiente desaparecerem?",
          options: [
            "Os gafanhotos podem aumentar muito e as cobras podem ter menos alimento",
            "Nada muda, pois os seres vivos não dependem uns dos outros",
            "O capim para de crescer imediatamente",
            "As cobras passam a comer apenas capim",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os seres vivos que podem ser considerados produtores em uma cadeia alimentar:",
          items: [
            "capim",
            "árvore frutífera",
            "leão",
            "alga",
            "gato",
            "milho",
          ],
        },
        {
          kind: "lines",
          instruction: "Monte uma cadeia alimentar com quatro elos (produtor, consumidor, consumidor, decompositor) e explique, em poucas linhas, qual é o papel do ser humano nessa cadeia.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Quem vive com quem? Investigando relações entre seres vivos",
      exercises: [
        {
          kind: "options",
          instruction: "Quando a abelha visita uma flor para coletar néctar e, ao mesmo tempo, ajuda a espalhar o pólen dela, essa relação é:",
          options: [
            "Benéfica para os dois seres vivos envolvidos",
            "Prejudicial apenas para a abelha",
            "Prejudicial apenas para a flor",
            "Uma relação em que nenhum dos dois é afetado",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases com exemplos de relações entre seres vivos:",
          items: [
            "O carrapato que se alimenta do sangue de um cachorro, prejudicando-o, é um exemplo de __________.",
            "O pássaro que constrói ninho em uma árvore, sem prejudicar nem ajudar a árvore, é um exemplo de relação de __________.",
            "As formigas que protegem certas plantas e recebem alimento delas em troca vivem em __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as situações em que há uma relação entre dois ou mais seres vivos diferentes:",
          items: [
            "abelha polinizando flor",
            "pulga se alimentando de um gato",
            "pedra rolando morro abaixo",
            "peixe-limpador comendo parasitas de outro peixe",
            "vento soprando folhas secas",
            "pássaro fazendo ninho em árvore",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma relação entre dois seres vivos que você conhece (pode ser de um animal de estimação, de um jardim ou de um documentário) e explique se ela é boa para os dois, ruim para um deles, ou neutra.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Os pequenos recicladores: fungos e bactérias decompositores",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a principal função dos fungos e bactérias decompositores no ambiente?",
          options: [
            "Transformar restos de seres vivos mortos em nutrientes que voltam para o solo",
            "Produzir seu próprio alimento por fotossíntese, como as plantas",
            "Caçar e comer animais vivos",
            "Poluir o solo e a água",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre os decompositores:",
          items: [
            "Fungos e bactérias decompositores são seres vivos tão pequenos que só podem ser vistos com auxílio de __________.",
            "Sem os decompositores, os restos de plantas e animais mortos __________ na natureza.",
            "O bolor que aparece em um pão esquecido é um exemplo de __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os exemplos que mostram a ação de fungos ou bactérias decompositores:",
          items: [
            "bolor em um pão velho",
            "folhas secas se transformando em adubo",
            "uma fruta apodrecendo",
            "uma pedra sendo erodida pelo vento",
            "compostagem de restos de comida",
            "água evaporando ao sol",
          ],
        },
        {
          kind: "lines",
          instruction: "Imagine uma floresta sem nenhum fungo ou bactéria decompositor. Explique o que aconteceria com as folhas e os animais mortos ao longo do tempo.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Prevenindo doenças: hábitos que protegem contra os microrganismos",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque os hábitos que ajudam a prevenir doenças causadas por microrganismos:",
          items: [
            "lavar as mãos antes de comer",
            "beber água tratada ou filtrada",
            "compartilhar escova de dente",
            "manter a vacinação em dia",
            "cozinhar bem os alimentos",
            "andar descalço em terrenos sujos",
          ],
        },
        {
          kind: "options",
          instruction: "Por que lavar bem as mãos antes das refeições é uma forma eficaz de prevenir doenças?",
          options: [
            "Porque remove microrganismos que poderiam entrar no corpo junto com o alimento",
            "Porque deixa as mãos com cheiro agradável",
            "Porque impede que o alimento esfrie",
            "Porque substitui a necessidade de vacinação",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre prevenção de doenças:",
          items: [
            "As __________ ajudam o corpo a criar defesas contra microrganismos causadores de doenças antes mesmo de entrarmos em contato com eles.",
            "Beber água não tratada pode transmitir __________ causadores de doenças como a diarreia.",
            "Cobrir a boca com o braço ao tossir ajuda a evitar a transmissão de __________ pelo ar.",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva uma lista de três hábitos de higiene que você pratica no seu dia a dia e explique como cada um ajuda a proteger sua saúde contra microrganismos.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Como os materiais reagem a estímulos físicos?",
      exercises: [
        {
          kind: "options",
          instruction: "Um ímã foi aproximado de diferentes objetos em uma experiência de sala de aula. Qual desses objetos provavelmente será atraído pelo ímã?",
          options: [
            "Um clipe de metal (ferro)",
            "Uma borracha",
            "Um pedaço de papel",
            "Uma tampinha de plástico",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre como os materiais reagem a estímulos físicos:",
          items: [
            "Quando aquecemos uma barra de metal, ela se __________ (expande/encolhe).",
            "Um material __________ é aquele que se deixa dobrar ou moldar com facilidade, como o arame.",
            "Materiais como o ferro e o níquel são atraídos por __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os materiais que são atraídos por um ímã:",
          items: [
            "prego de ferro",
            "colher de alumínio",
            "clipe de aço",
            "borracha",
            "moeda de níquel",
            "pedaço de isopor",
          ],
        },
        {
          kind: "lines",
          instruction: "Descreva um experimento que você poderia fazer para testar se um material é resistente ao calor. O que você observaria?",
          lines: 4,
        },
      ],
    },
    {
      theme: "Como a matéria circula entre seres vivos e o ambiente?",
      exercises: [
        {
          kind: "options",
          instruction: "O que os decompositores (fungos e bactérias) fazem com os restos de seres vivos mortos?",
          options: [
            "Transformam a matéria em nutrientes que voltam ao solo",
            "Fazem a matéria desaparecer para sempre",
            "Transformam os restos em pedra",
            "Não têm nenhuma função no ambiente",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete o ciclo da matéria na natureza:",
          items: [
            "As plantas retiram água e nutrientes do __________ para crescer.",
            "Os animais se alimentam de plantas ou de outros animais, obtendo __________.",
            "Quando um ser vivo morre, os __________ transformam seus restos em matéria que volta ao solo.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os elementos que participam da circulação da matéria entre seres vivos e ambiente:",
          items: [
            "fungos decompositores",
            "solo",
            "minhocas",
            "controle remoto",
            "raízes das plantas",
            "computador",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe um ciclo mostrando como a matéria passa de uma planta para um animal, e depois para o solo através dos decompositores. Use setas para indicar o caminho.",
        },
      ],
    },
    {
      theme: "De onde vem a energia elétrica que usamos?",
      exercises: [
        {
          kind: "word-select",
          instruction: "Marque as formas de produção de energia elétrica:",
          items: [
            "usina hidrelétrica",
            "usina eólica",
            "painel solar",
            "usina termelétrica",
            "forno de padaria",
            "geladeira",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com o tipo de usina correspondente:",
          items: [
            "A energia __________ usa a força da água dos rios para girar turbinas.",
            "A energia __________ usa a força do vento.",
            "A energia __________ usa a luz do sol captada por painéis.",
          ],
        },
        {
          kind: "options",
          instruction: "Qual é um possível impacto ambiental da construção de uma usina hidrelétrica?",
          options: [
            "Alagamento de grandes áreas e alteração do curso dos rios",
            "Aumento do brilho das estrelas",
            "Redução da força da gravidade",
            "Nenhum impacto, pois usa apenas água",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha duas formas de produção de energia elétrica e escreva uma vantagem e uma desvantagem ambiental de cada uma.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Combustíveis e o consumo de recursos naturais",
      exercises: [
        {
          kind: "options",
          instruction: "De onde vem a maior parte dos combustíveis como a gasolina e o diesel?",
          options: [
            "Do petróleo, um recurso natural não renovável",
            "Da água do mar",
            "Do ar atmosférico",
            "Da luz do sol",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre combustíveis e recursos naturais:",
          items: [
            "O petróleo é extraído do subsolo e é um recurso __________ (renovável/não renovável).",
            "A extração de combustíveis pode causar __________ no solo, na água e no ar.",
            "O etanol é um combustível produzido a partir da __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os possíveis danos ambientais ligados à extração e uso de combustíveis fósseis:",
          items: [
            "poluição do ar",
            "vazamento de óleo no mar",
            "aumento de gases que agravam o efeito estufa",
            "purificação da água",
            "aumento da biodiversidade",
            "contaminação do solo",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que é importante economizar combustíveis fósseis no nosso dia a dia. Dê um exemplo de atitude que ajuda nessa economia.",
          lines: 4,
        },
      ],
    },
    {
      theme: "O que os fósseis contam sobre a história da Terra?",
      exercises: [
        {
          kind: "options",
          instruction: "O que é um fóssil?",
          options: [
            "Um registro preservado de um ser vivo que existiu há muito tempo",
            "Uma pedra qualquer encontrada no chão",
            "Um animal que ainda está vivo",
            "Um tipo de mineral usado em joias",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete as frases sobre fósseis:",
          items: [
            "Os fósseis podem ser ossos, __________ ou marcas de pegadas preservadas em rochas.",
            "Estudar fósseis ajuda os cientistas a entender como era a __________ há milhões de anos.",
            "Os cientistas que estudam fósseis são chamados de __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque o que pode se transformar em fóssil ou deixar um registro fóssil:",
          items: [
            "ossos de dinossauro",
            "pegada de animal na lama endurecida",
            "concha de um molusco antigo",
            "uma notícia de jornal de hoje",
            "folha de planta antiga",
            "uma foto digital",
          ],
        },
        {
          kind: "draw",
          instruction: "Imagine que você encontrou um fóssil durante uma escavação. Desenhe como ele poderia ser e escreva embaixo que tipo de ser vivo você imagina que ele representa.",
        },
      ],
    },
    {
      theme: "Por que as estrelas parecem ter brilhos diferentes?",
      exercises: [
        {
          kind: "options",
          instruction: "Por que o Sol parece muito mais brilhante do que as outras estrelas no céu?",
          options: [
            "Porque o Sol está muito mais perto da Terra do que as outras estrelas",
            "Porque o Sol é a única estrela que existe",
            "Porque as outras estrelas não têm luz própria",
            "Porque o Sol é feito de um material diferente",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre o brilho das estrelas:",
          items: [
            "Quanto mais __________ uma estrela está da Terra, mais fraco costuma parecer seu brilho.",
            "Uma estrela pode parecer fraca no céu mesmo sendo muito grande, se estiver muito __________.",
            "O Sol é uma __________ como as outras que vemos no céu à noite.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as afirmações corretas sobre o brilho das estrelas:",
          items: [
            "a distância influencia o brilho que enxergamos",
            "todas as estrelas têm exatamente o mesmo brilho",
            "estrelas mais próximas tendem a parecer mais brilhantes",
            "o tamanho da estrela também pode influenciar o brilho percebido",
            "o brilho das estrelas nunca muda por nenhum motivo",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique com suas palavras por que duas estrelas do mesmo tamanho podem parecer ter brilhos diferentes quando observadas da Terra.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Como a Terra sólida, os seres vivos e o ar se relacionam?",
      exercises: [
        {
          kind: "options",
          instruction: "O que é a biosfera?",
          options: [
            "O conjunto de todos os seres vivos do planeta e os ambientes onde vivem",
            "Apenas o ar que respiramos",
            "Somente as rochas da superfície da Terra",
            "Um tipo de nuvem",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com os nomes das camadas da Terra:",
          items: [
            "A __________ é a parte sólida da Terra, formada por rochas e solo.",
            "A __________ é a camada de gases que envolve o planeta.",
            "A __________ é o conjunto de todos os seres vivos.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque exemplos de interação entre a geosfera, a biosfera e a atmosfera:",
          items: [
            "raízes das árvores que fixam o solo",
            "plantas que liberam oxigênio no ar",
            "chuva que ajuda a formar o relevo",
            "um carro elétrico estacionado",
            "animais que respiram o ar da atmosfera",
            "vulcões que alteram a paisagem e o ar",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe uma paisagem que mostre a geosfera (solo e rochas), a biosfera (plantas e animais) e a atmosfera (ar e nuvens) interagindo.",
        },
      ],
    },
    {
      theme: "Por que ocorrem os eclipses?",
      exercises: [
        {
          kind: "options",
          instruction: "O que causa um eclipse solar?",
          options: [
            "A Lua fica entre o Sol e a Terra, bloqueando parte da luz solar",
            "A Terra fica entre o Sol e a Lua",
            "O Sol se apaga por alguns minutos",
            "As nuvens cobrem totalmente o céu",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre os tipos de eclipse:",
          items: [
            "No eclipse __________, a Lua fica entre o Sol e a Terra.",
            "No eclipse __________, a Terra fica entre o Sol e a Lua.",
            "Os eclipses acontecem quando o Sol, a Terra e a Lua ficam __________.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os astros envolvidos na formação dos eclipses solar e lunar:",
          items: [
            "Sol",
            "Terra",
            "Lua",
            "Marte",
            "Vênus",
            "cometas",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique a diferença entre um eclipse solar e um eclipse lunar, indicando a posição da Terra, do Sol e da Lua em cada caso.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Por que um ano é diferente em cada planeta?",
      exercises: [
        {
          kind: "options",
          instruction: "O que define a duração de um ano em um planeta?",
          options: [
            "O tempo que o planeta leva para dar uma volta completa ao redor do Sol",
            "O tempo que o planeta leva para girar em torno de si mesmo",
            "A quantidade de luas que o planeta tem",
            "A cor do planeta",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre o movimento de translação:",
          items: [
            "Planetas mais __________ do Sol geralmente levam mais tempo para completar sua órbita.",
            "Mercúrio, por estar muito perto do Sol, tem o ano mais __________ do Sistema Solar.",
            "Netuno, por estar muito distante, tem o ano mais __________ do Sistema Solar.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os planetas do Sistema Solar:",
          items: [
            "Mercúrio",
            "Júpiter",
            "Netuno",
            "Lua",
            "Saturno",
            "Sol",
          ],
        },
        {
          kind: "lines",
          instruction: "Se um planeta está mais distante do Sol do que a Terra, o que você espera que aconteça com a duração de um ano nele? Justifique sua resposta.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Como os órgãos internos trabalham juntos?",
      exercises: [
        {
          kind: "options",
          instruction: "Qual órgão é responsável por bombear o sangue para todo o corpo?",
          options: [
            "Coração",
            "Estômago",
            "Pulmão",
            "Fígado",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete relacionando os órgãos e suas funções:",
          items: [
            "Os __________ são responsáveis por realizar as trocas gasosas durante a respiração.",
            "O __________ é responsável por bombear o sangue pelo corpo.",
            "O __________ realiza parte da digestão dos alimentos.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque os órgãos internos do corpo humano:",
          items: [
            "coração",
            "pulmões",
            "estômago",
            "unha",
            "rim",
            "cabelo",
          ],
        },
        {
          kind: "draw",
          instruction: "Desenhe o contorno de um corpo humano e localize dentro dele o coração, os pulmões e o estômago, indicando com uma seta a função de cada um.",
        },
      ],
    },
    {
      theme: "Como o sistema nervoso comanda o corpo?",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a principal função do sistema nervoso?",
          options: [
            "Coordenar as ações do corpo e processar as informações captadas pelos sentidos",
            "Digerir os alimentos",
            "Bombear o sangue",
            "Produzir hormônios do crescimento",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre o sistema nervoso:",
          items: [
            "O __________ é o órgão que comanda todas as ações do corpo.",
            "A __________ é responsável por levar as informações do cérebro para o resto do corpo.",
            "Quando tocamos algo quente, os __________ enviam rapidamente essa informação ao cérebro.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as situações em que o sistema nervoso está agindo de forma mais evidente:",
          items: [
            "tirar a mão rapidamente de algo quente",
            "sentir o cheiro de comida",
            "decidir qual caminho seguir",
            "reconhecer um som familiar",
            "crescimento das unhas",
            "digestão lenta de um alimento durante o sono",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique com suas palavras como o sistema nervoso permite que você reaja rapidamente quando pisa em algo pontiagudo.",
          lines: 4,
        },
      ],
    },
    {
      theme: "O que muda no corpo durante a puberdade?",
      exercises: [
        {
          kind: "options",
          instruction: "A puberdade é uma fase do desenvolvimento em que:",
          options: [
            "O corpo passa por mudanças naturais que preparam o organismo para a vida adulta",
            "Apenas os meninos passam por transformações",
            "Apenas as meninas passam por transformações",
            "O corpo para de crescer completamente",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com as informações corretas sobre a puberdade:",
          items: [
            "Durante a puberdade, o corpo produz mais __________, substâncias que provocam as transformações.",
            "É comum que meninos e meninas cresçam mais __________ durante essa fase.",
            "Cada pessoa vive as mudanças da puberdade em um __________ diferente, e isso é normal.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as transformações que podem ocorrer no corpo durante a puberdade (tanto em meninos quanto em meninas):",
          items: [
            "crescimento mais rápido do corpo",
            "mudanças na voz",
            "crescimento de pelos em novas regiões do corpo",
            "aumento da altura da mesa da sala",
            "amadurecimento do sistema reprodutor",
            "mudanças de humor mais frequentes",
          ],
        },
        {
          kind: "lines",
          instruction: "Escreva por que é importante tratar as mudanças da puberdade com naturalidade e respeito, tanto as suas quanto as dos colegas.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Como as ações humanas transformam o ambiente?",
      exercises: [
        {
          kind: "options",
          instruction: "Qual das ações a seguir é um exemplo de impacto humano negativo sobre o ambiente?",
          options: [
            "Desmatamento de uma área de mata nativa para construção",
            "Reciclagem de materiais",
            "Criação de uma área de preservação",
            "Plantio de árvores em uma praça",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre ações humanas e o ambiente:",
          items: [
            "O __________ de florestas reduz o habitat de muitas espécies de animais.",
            "A poluição da água pode prejudicar os seres vivos que dependem dela, como os __________.",
            "O descarte incorreto do __________ pode contaminar o solo e os rios.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as ações humanas que costumam causar alterações negativas no ambiente:",
          items: [
            "desmatamento",
            "queima de lixo a céu aberto",
            "poluição de rios com esgoto",
            "criação de áreas verdes na cidade",
            "extração descontrolada de recursos naturais",
            "coleta seletiva de lixo",
          ],
        },
        {
          kind: "lines",
          instruction: "Escolha uma ação humana que transforma o ambiente e explique, com um argumento, se ela deveria continuar acontecendo ou ser mudada.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Como podemos cuidar do nosso entorno?",
      exercises: [
        {
          kind: "options",
          instruction: "Qual atitude coletiva ajuda a conservar o entorno da escola ou da comunidade?",
          options: [
            "Organizar mutirões de limpeza e plantio de árvores",
            "Jogar lixo nos terrenos vazios",
            "Ignorar problemas ambientais do bairro",
            "Usar mais água do que o necessário",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete com propostas de cuidado com o ambiente:",
          items: [
            "Separar o lixo para a __________ ajuda a reduzir o desperdício de materiais.",
            "Plantar __________ na escola ou no bairro melhora a qualidade do ar.",
            "Economizar __________ e energia elétrica evita o desperdício de recursos naturais.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as atitudes que ajudam a cuidar do entorno da escola ou da comunidade:",
          items: [
            "separar o lixo reciclável",
            "plantar árvores e cuidar de jardins",
            "denunciar descarte irregular de lixo",
            "desperdiçar água nas torneiras",
            "participar de mutirões de limpeza",
            "jogar papel no chão",
          ],
        },
        {
          kind: "lines",
          instruction: "Em grupo, vocês vão propor uma ação para cuidar do entorno da escola. Descreva a proposta e explique como ela ajudaria o ambiente.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Qual é o papel das vacinas na prevenção de doenças?",
      exercises: [
        {
          kind: "options",
          instruction: "Qual é a principal função das vacinas?",
          options: [
            "Preparar o corpo para se defender de doenças antes que elas apareçam",
            "Curar uma doença depois que ela já se instalou gravemente",
            "Substituir uma alimentação saudável",
            "Aumentar a altura das crianças",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre a importância das vacinas:",
          items: [
            "As vacinas ajudam o corpo a produzir __________, que protegem contra doenças específicas.",
            "Quando muitas pessoas de uma comunidade são vacinadas, é mais difícil uma doença se __________.",
            "Algumas doenças que já causaram muitas mortes foram __________ graças à vacinação em massa.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque as afirmações corretas sobre as vacinas:",
          items: [
            "ajudam a prevenir doenças",
            "protegem não só quem toma, mas também a comunidade",
            "algumas doenças graves foram praticamente eliminadas por causa delas",
            "servem para curar uma doença já instalada há anos",
            "fazem parte do calendário de saúde pública",
            "são importantes desde a infância",
          ],
        },
        {
          kind: "lines",
          instruction: "Explique por que é importante que todas as pessoas de uma comunidade tomem as vacinas recomendadas, e não só algumas.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Como a tecnologia influencia o consumo de recursos naturais?",
      exercises: [
        {
          kind: "options",
          instruction: "Como a tecnologia pode ajudar a reduzir o consumo de recursos naturais?",
          options: [
            "Por meio de equipamentos mais eficientes, que gastam menos energia e água",
            "Aumentando sempre o desperdício de matérias-primas",
            "Eliminando totalmente a necessidade de recursos naturais",
            "Não tem nenhuma relação com o consumo de recursos",
          ],
        },
        {
          kind: "fill-blank",
          instruction: "Complete sobre tecnologia e recursos naturais:",
          items: [
            "A fabricação de aparelhos eletrônicos consome __________ naturais como metais e petróleo.",
            "Painéis solares são uma tecnologia que aproveita a energia do __________ de forma mais limpa.",
            "Descartar aparelhos eletrônicos de forma incorreta pode __________ o solo e a água.",
          ],
        },
        {
          kind: "word-select",
          instruction: "Marque exemplos de tecnologias que podem ajudar a economizar recursos naturais:",
          items: [
            "lâmpadas de LED, que gastam menos energia",
            "painéis de energia solar",
            "torneiras com sensor que evitam desperdício de água",
            "aparelhos que ficam ligados sem necessidade",
            "eletrodomésticos com selo de eficiência energética",
            "descarte de pilhas no lixo comum",
          ],
        },
        {
          kind: "lines",
          instruction: "Cite um exemplo de tecnologia usada no seu dia a dia e explique se o uso dela consome muitos ou poucos recursos naturais.",
          lines: 4,
        },
      ],
    },
  ],
};
