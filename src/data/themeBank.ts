// Banco de temas offline: cada matéria tem uma lista de aulas prontas (tema + código do
// Currículo da Cidade SME-SP + descrição curta + materiais + passo a passo da aula), para
// sortear sem depender de nenhuma API paga.
//
// Os códigos de matérias próprias (curriculumCode) foram extraídos diretamente do texto oficial
// dos documentos "Currículo da Cidade" (SME-SP, 2ª edição), seção "2º ANO DO ENSINO FUNDAMENTAL",
// publicados em acervodigital.sme.prefeitura.sp.gov.br — não são estimados. História tem só 12
// habilidades oficiais para o 2º ano (o documento não define mais que isso).
//
// A lista de Leitura Diária traz o texto completo pronto pra ler em voz alta: histórias originais
// escritas para este app, ou releituras de fábulas/contos/lendas de domínio público (Esopo, La
// Fontaine, Irmãos Grimm, Andersen, Perrault, folclore brasileiro sem autoria individual). Não
// reproduz nenhum livro infantil brasileiro contemporâneo com direitos autorais vigentes.

import { BankEntry, OwnSubject, ReadingBankEntry } from "@/types/plano";

export const THEME_BANK: Record<OwnSubject, BankEntry[]> = {
  "lingua-portuguesa": [
    {
      "theme": "Lista de nomes da turma e dos livros da sala",
      "curriculumCode": "EF02LP01",
      "description": "Localização de nomes próprios, títulos de livros e palavras da rotina em listas do mesmo campo semântico (agenda do dia, brincadeiras).",
      "materials": [
        "Lista com os nomes dos alunos da turma (cartaz ou caderno)",
        "Alguns livros da sala com o título visível"
      ],
      "steps": [
        "Escrever a lista de nomes da turma na lousa.",
        "Pedir que os alunos leiam em voz alta os nomes que reconhecem.",
        "Mostrar os livros da sala e ler os títulos junto com a turma.",
        "Pedir que circulem, na lista, os nomes que começam com a mesma letra do seu.",
        "Fechar perguntando quem achou um nome parecido com o seu."
      ]
    },
    {
      "theme": "Organizando o cotidiano com listas",
      "curriculumCode": "EF02LP02",
      "description": "Localização de nomes em listas para copiar e organizar tarefas da sala, como ficha de empréstimo de livros e divisão de grupos.",
      "materials": [
        "Ficha de empréstimo de livros (modelo simples)",
        "Lista de nomes da turma"
      ],
      "steps": [
        "Mostrar a ficha de empréstimo de livros para a turma.",
        "Ler em voz alta os nomes já anotados na ficha.",
        "Pedir que os alunos encontrem seu próprio nome na lista da turma.",
        "Copiar o nome na ficha de empréstimo do livro escolhido.",
        "Organizar juntos a divisão dos grupos usando a lista de nomes."
      ]
    },
    {
      "theme": "Leitura de parlendas e trava-línguas",
      "curriculumCode": "EF02LP03",
      "description": "Leitura autônoma de textos já conhecidos de cor (parlendas, adivinhas, poemas, trava-línguas), ajustando o falado ao escrito.",
      "materials": [
        "Cartaz ou folha com a parlenda ou trava-língua escrita"
      ],
      "steps": [
        "Recitar de cor a parlenda ou trava-língua com a turma.",
        "Mostrar o texto escrito no cartaz ou na lousa.",
        "Pedir que os alunos apontem com o dedo cada palavra enquanto recitam.",
        "Ler novamente ajustando a fala ao que está escrito.",
        "Convidar alguns alunos para ler sozinhos apontando as palavras."
      ]
    },
    {
      "theme": "Lendo placas, rótulos e histórias em quadrinhos",
      "curriculumCode": "EF02LP04",
      "description": "Leitura autônoma de textos diversos do cotidiano (placas, listas, manchetes, HQs, tiras, rótulos), usando pistas para antecipar e validar o que está escrito.",
      "materials": [
        "Rótulos de embalagens, placas ou uma história em quadrinhos"
      ],
      "steps": [
        "Mostrar rótulos, placas e uma tira de quadrinhos para a turma.",
        "Perguntar o que os alunos acham que está escrito em cada um.",
        "Ler em voz alta e comparar com o que foi imaginado.",
        "Destacar as pistas (imagem, formato, letras) que ajudaram a adivinhar.",
        "Pedir que os alunos tentem ler um rótulo novo sozinhos."
      ]
    },
    {
      "theme": "Roda de contos de fadas e fábulas de diferentes culturas",
      "curriculumCode": "EF02LP05",
      "description": "Escuta de textos literários diversos (contos de fadas, mitos, lendas, fábulas, poemas) valorizando a diversidade cultural.",
      "materials": [
        "Livro de conto de fadas ou fábula de outra cultura"
      ],
      "steps": [
        "Organizar a turma em roda no chão ou nas cadeiras.",
        "Apresentar o livro e o lugar de onde vem a história.",
        "Ler a história em voz alta, mostrando as ilustrações.",
        "Perguntar o que é parecido e diferente de outras histórias conhecidas.",
        "Fechar conversando sobre a cultura de onde veio o conto."
      ]
    },
    {
      "theme": "Cantigas e parlendas da tradição oral",
      "curriculumCode": "EF02LP06",
      "description": "Leitura e canto de cantigas, parlendas e textos da tradição oral em roda.",
      "materials": [],
      "steps": [
        "Organizar a turma em roda.",
        "Ensinar a letra da cantiga ou parlenda aos poucos.",
        "Cantar ou recitar todos juntos, repetindo algumas vezes.",
        "Acompanhar com palmas ou gestos combinados.",
        "Perguntar se alguém já conhecia a cantiga de casa ou da família."
      ]
    },
    {
      "theme": "Relatos históricos e verbetes de enciclopédia",
      "curriculumCode": "EF02LP08",
      "description": "Escuta da leitura de relatos históricos, verbetes e artigos de enciclopédia para conhecer diferentes culturas da comunidade escolar.",
      "materials": [
        "Verbete de enciclopédia ou texto curto sobre um tema histórico ou cultural"
      ],
      "steps": [
        "Apresentar o texto e explicar que é um verbete de enciclopédia.",
        "Ler o texto em voz alta para a turma.",
        "Explicar as palavras difíceis que aparecerem.",
        "Perguntar o que os alunos aprenderam sobre aquela cultura.",
        "Registrar na lousa três informações que a turma lembrou."
      ]
    },
    {
      "theme": "Escrevendo listas de palavras",
      "curriculumCode": "EF02LP09",
      "description": "Escrita de listas de palavras e títulos de livros, consultando referenciais estáveis como a lista de nomes da turma.",
      "materials": [
        "Lista de nomes da turma fixada na sala",
        "Títulos de livros já trabalhados"
      ],
      "steps": [
        "Relembrar com a turma a lista de nomes fixada na sala.",
        "Propor um tema para a nova lista (livros lidos, brinquedos, animais).",
        "Pedir que os alunos escrevam a lista no caderno, palavra por palavra.",
        "Orientar a consultar a lista de nomes para copiar letras difíceis.",
        "Ler algumas listas em voz alta para conferir."
      ]
    },
    {
      "theme": "Escrevendo parlendas e quadrinhas de cor",
      "curriculumCode": "EF02LP11",
      "description": "Escrita alfabética de textos que os alunos sabem de cor (parlendas, adivinhas, quadrinhas, trava-línguas).",
      "materials": [],
      "steps": [
        "Recitar a parlenda ou quadrinha de cor com a turma.",
        "Pedir que os alunos falem devagar, separando cada palavra.",
        "Escrever a parlenda no caderno do jeito que conseguem.",
        "Comparar a escrita com o texto original na lousa.",
        "Corrigir juntos as partes que ficaram diferentes."
      ]
    },
    {
      "theme": "Recontando histórias conhecidas",
      "curriculumCode": "EF02LP12",
      "description": "Reconto oral de histórias conhecidas, respeitando as características do gênero e usando marcas do registro literário.",
      "materials": [
        "Livro de uma história já conhecida pela turma"
      ],
      "steps": [
        "Relembrar com a turma uma história já conhecida.",
        "Perguntar quem eram os personagens e onde a história acontecia.",
        "Pedir que um aluno comece a recontar a história em voz alta.",
        "Deixar outros alunos continuarem o reconto por partes.",
        "Fechar comparando o reconto com a história original."
      ]
    },
    {
      "theme": "Reescrevendo contos conhecidos",
      "curriculumCode": "EF02LP13",
      "description": "Reescrita de um conto conhecido, ditando ao professor ou de próprio punho, respeitando a sequência da história.",
      "materials": [
        "Livro do conto escolhido"
      ],
      "steps": [
        "Reler o conto conhecido para a turma.",
        "Conversar sobre a ordem dos acontecimentos da história.",
        "Escrever coletivamente o começo do conto na lousa, com a turma ditando.",
        "Pedir que os alunos continuem a reescrita no caderno.",
        "Ler algumas reescritas para conferir se seguiram a sequência da história."
      ]
    },
    {
      "theme": "Relato escrito de um passeio da turma",
      "curriculumCode": "EF02LP15",
      "description": "Escrita coletiva de relato de experiência vivida pela classe, situando as ações no tempo.",
      "materials": [],
      "steps": [
        "Relembrar com a turma um passeio ou atividade que todos viveram.",
        "Perguntar o que aconteceu primeiro, depois e por último.",
        "Escrever na lousa o relato coletivo, com a turma ditando as frases.",
        "Marcar juntos as palavras que indicam tempo (primeiro, depois, no final).",
        "Pedir que os alunos copiem o relato no caderno."
      ]
    },
    {
      "theme": "Escrevendo bilhetes e cartões",
      "curriculumCode": "EF02LP16",
      "description": "Produção de bilhetes, convites, cartas ou cartão postal, respeitando a situação comunicativa.",
      "materials": [
        "Folha de papel ou cartolina para o bilhete ou cartão"
      ],
      "steps": [
        "Mostrar um exemplo de bilhete ou cartão já pronto.",
        "Conversar sobre para quem e por que se escreve um bilhete.",
        "Combinar juntos o que não pode faltar (para quem, mensagem, assinatura).",
        "Pedir que cada aluno escreva seu próprio bilhete ou cartão.",
        "Convidar alguns alunos para ler o que escreveram."
      ]
    },
    {
      "theme": "Escrevendo regras de brincadeiras e receitas",
      "curriculumCode": "EF02LP17",
      "description": "Escrita de regras de um jogo ou brincadeira e de receitas, respeitando a estrutura do texto instrucional.",
      "materials": [],
      "steps": [
        "Escolher com a turma uma brincadeira ou receita simples e conhecida.",
        "Relembrar juntos o passo a passo, na ordem certa.",
        "Escrever na lousa as regras ou o modo de fazer, numerando os passos.",
        "Pedir que os alunos copiem o texto no caderno.",
        "Testar a brincadeira ou conferir a receita seguindo os passos escritos."
      ]
    },
    {
      "theme": "Contação de histórias de diferentes culturas",
      "curriculumCode": "EF02LP18",
      "description": "Participação em roda de contação de histórias, organizando quem conta, para quem e como, além de ouvir com atenção.",
      "materials": [
        "Livro de história de uma cultura diferente da turma"
      ],
      "steps": [
        "Organizar a roda e combinar quem vai contar a história.",
        "Explicar de qual cultura ou lugar vem a história.",
        "Contar a história para a turma, com pausas para observar as reações.",
        "Perguntar o que os alunos que ouviram entenderam ou gostaram.",
        "Combinar quem vai contar a próxima história na próxima roda."
      ]
    },
    {
      "theme": "Explicando o que aprendemos",
      "curriculumCode": "EF02LP19",
      "description": "Explicação oral de temas estudados nas diferentes áreas, formulando perguntas e opinando sobre o assunto.",
      "materials": [],
      "steps": [
        "Escolher um tema estudado recentemente em outra área.",
        "Pedir que os alunos, em duplas, pensem no que aprenderam.",
        "Convidar algumas duplas para explicar o tema para a turma.",
        "Incentivar os colegas a fazerem perguntas sobre a explicação.",
        "Fechar registrando na lousa as principais ideias explicadas."
      ]
    },
    {
      "theme": "Roda de conversa sobre temas do dia",
      "curriculumCode": "EF02LP20",
      "description": "Apresentação oral de ideias sobre temas diversos em roda de conversa, respeitando a vez de falar.",
      "materials": [],
      "steps": [
        "Organizar a turma em roda.",
        "Apresentar o tema do dia para a conversa.",
        "Combinar a ordem de fala, um aluno por vez.",
        "Ouvir as ideias de cada aluno sem interromper.",
        "Fechar resumindo os pontos principais que apareceram."
      ]
    },
    {
      "theme": "Relatando experiências do fim de semana",
      "curriculumCode": "EF02LP21",
      "description": "Relato oral de experiências vividas, organizando a fala de acordo com a situação comunicativa.",
      "materials": [],
      "steps": [
        "Perguntar quem quer contar o que fez no fim de semana.",
        "Combinar que cada aluno tem um tempo curto para falar.",
        "Ouvir os relatos, incentivando contar em ordem (o que fez primeiro, depois).",
        "Fazer perguntas simples para ajudar quem tiver dificuldade de continuar.",
        "Fechar perguntando se alguém viveu algo parecido com o colega."
      ]
    },
    {
      "theme": "Discussão em roda: ouvir e opinar",
      "curriculumCode": "EF02LP22",
      "description": "Participação em discussão oral, ouvindo com atenção os colegas e emitindo opinião sobre o tema.",
      "materials": [],
      "steps": [
        "Organizar a turma em roda e apresentar o tema da discussão.",
        "Combinar a regra de levantar a mão para falar.",
        "Ouvir as opiniões dos alunos, um de cada vez.",
        "Perguntar se alguém pensa diferente e por quê.",
        "Fechar retomando as diferentes opiniões que surgiram."
      ]
    },
    {
      "theme": "Personagens dos contos",
      "curriculumCode": "EF02LP23",
      "description": "Identificação das características das personagens em contos lidos pelo professor, de acordo com o gênero.",
      "materials": [
        "Livro de um conto já lido pela turma"
      ],
      "steps": [
        "Reler ou relembrar um conto já conhecido pela turma.",
        "Listar na lousa os personagens da história.",
        "Perguntar como é cada personagem (bom, mau, corajoso, medroso).",
        "Pedir que os alunos apontem uma característica de seu personagem favorito.",
        "Registrar as características ao lado de cada nome na lousa."
      ]
    },
    {
      "theme": "Revisando textos coletivos: evitando repetições",
      "curriculumCode": "EF02LP24",
      "description": "Revisão de texto coletivo eliminando repetições desnecessárias, substituindo palavras por sinônimos, pronomes ou apelidos.",
      "materials": [
        "Texto coletivo já escrito anteriormente pela turma"
      ],
      "steps": [
        "Reler em voz alta o texto coletivo escrito pela turma.",
        "Pedir que os alunos levantem a mão quando ouvirem uma palavra repetida.",
        "Circular na lousa as palavras que se repetem demais.",
        "Pensar juntos em palavras, apelidos ou pronomes para substituir as repetições.",
        "Reescrever o trecho corrigido na lousa."
      ]
    },
    {
      "theme": "Reescrita de texto com coerência",
      "curriculumCode": "EF02LP26",
      "description": "Atividade de reescrita de texto articulando as partes que o compõem, de forma coerente.",
      "materials": [
        "Texto para reescrever (produção anterior da turma)"
      ],
      "steps": [
        "Reler o texto que será reescrito com a turma.",
        "Perguntar se as partes do texto fazem sentido juntas.",
        "Apontar trechos que ficaram soltos ou confusos.",
        "Reescrever coletivamente na lousa, ligando as partes com mais sentido.",
        "Pedir que os alunos copiem a versão reescrita no caderno."
      ]
    },
    {
      "theme": "Separando as palavras do texto",
      "curriculumCode": "EF02LP28",
      "description": "Segmentação de um texto em palavras, identificando os espaços entre elas.",
      "materials": [
        "Frase ou texto curto escrito sem espaços entre as palavras"
      ],
      "steps": [
        "Mostrar na lousa uma frase escrita sem espaços entre as palavras.",
        "Pedir que os alunos tentem ler e descobrir onde começa e termina cada palavra.",
        "Marcar juntos os espaços entre as palavras na lousa.",
        "Pedir que os alunos copiem a frase no caderno já separada corretamente.",
        "Conferir juntos comparando as respostas."
      ]
    },
    {
      "theme": "Palavras acentuadas",
      "curriculumCode": "EF02LP31",
      "description": "Reconhecimento da acentuação (acento agudo e circunflexo) em palavras de uso frequente de textos conhecidos.",
      "materials": [
        "Lista de palavras acentuadas de um texto já conhecido"
      ],
      "steps": [
        "Escrever na lousa algumas palavras acentuadas de um texto conhecido.",
        "Ler as palavras destacando o som mais forte de cada uma.",
        "Mostrar o acento (agudo ou circunflexo) sobre a letra.",
        "Pedir que os alunos circulem o acento em cada palavra.",
        "Escrever novas palavras acentuadas ditadas pela professora no caderno."
      ]
    },
    {
      "theme": "Palavras difíceis: H, L, LH, C e S",
      "curriculumCode": "EF02LP33",
      "description": "Escrita convencional de palavras de uso frequente que não seguem regras ortográficas regulares (H inicial, L/LH, C/S iniciais).",
      "materials": [
        "Lista de palavras com H, L, LH, C ou S de uso frequente"
      ],
      "steps": [
        "Escrever na lousa algumas palavras com H, L, LH, C ou S.",
        "Ler as palavras em voz alta com a turma.",
        "Conversar sobre por que essas palavras precisam ser decoradas.",
        "Pedir que os alunos copiem as palavras no caderno.",
        "Fazer um ditado curto com algumas dessas palavras para conferir."
      ]
    },
    {
      "theme": "Roda de notícias e reportagens da turma",
      "curriculumCode": "EF02LP07",
      "description": "Escuta de textos (reportagens, notícias, contos modernos) que abordem a temática de diferentes representações sociais.",
      "materials": [
        "Uma notícia ou reportagem curta, impressa ou lida em voz alta"
      ],
      "steps": [
        "Selecionar uma notícia ou reportagem curta e apropriada para a idade.",
        "Ler o texto em voz alta para a turma.",
        "Perguntar quem são as pessoas retratadas na notícia e como elas são representadas.",
        "Roda de conversa sobre diferentes realidades sociais mostradas no texto."
      ]
    },
    {
      "theme": "Escrevendo listas com letras móveis",
      "curriculumCode": "EF02LP10",
      "description": "Escrita de listas de palavras, títulos de livros, parlendas, quadrinhas e trava-línguas com letras móveis, justificando as decisões sobre as letras utilizadas.",
      "materials": [
        "Kit de letras móveis (alfabeto móvel) ou letras recortadas"
      ],
      "steps": [
        "Distribuir letras móveis para os alunos ou duplas.",
        "Propor que montem uma lista de palavras conhecidas (títulos de livros, parlendas).",
        "Pedir que expliquem por que escolheram cada letra.",
        "Comparar a escrita montada com a escrita convencional."
      ]
    },
    {
      "theme": "Escrevendo indicações literárias e verbetes de curiosidades",
      "curriculumCode": "EF02LP14",
      "description": "Escrita de indicações literárias de livros, legendas e verbetes de curiosidades sobre temas estudados, ditando ao professor.",
      "materials": [
        "Um livro já lido pela turma"
      ],
      "steps": [
        "Escolher, com a turma, um livro que já leram e gostaram.",
        "Ditar ao professor os motivos pelos quais recomendam o livro.",
        "Registrar a indicação literária em um cartaz ou mural da sala.",
        "Repetir o processo com um verbete de curiosidade sobre um tema estudado."
      ]
    },
    {
      "theme": "Revisando textos: cortando o que não combina",
      "curriculumCode": "EF02LP25",
      "description": "Eliminação de organizadores textuais não adequados ao registro linguístico do texto, em revisão coletiva.",
      "materials": [],
      "steps": [
        "Escrever coletivamente um pequeno texto na lousa, incluindo organizadores informais (tipo 'aí', 'daí', 'e tal').",
        "Ler o texto em voz alta e identificar essas palavras junto com a turma.",
        "Substituir cada organizador por uma opção mais adequada ao registro do texto.",
        "Reler o texto revisado e comparar com a versão original."
      ]
    },
    {
      "theme": "Reescrevendo com o mesmo narrador",
      "curriculumCode": "EF02LP27",
      "description": "Emprego, em situação de reescrita, do mesmo tipo de narrador (1ª ou 3ª pessoa) do texto de referência.",
      "materials": [
        "Um conto curto conhecido pela turma"
      ],
      "steps": [
        "Ler um conto curto e identificar se é contado em 1ª ou 3ª pessoa.",
        "Explicar a diferença entre narrador que participa da história (eu) e o que só observa (ele/ela).",
        "Propor a reescrita (ditando ao professor) de um trecho, mantendo o mesmo tipo de narrador do texto original.",
        "Comparar o texto reescrito com o original."
      ]
    },
    {
      "theme": "Comparando coisas nas histórias",
      "curriculumCode": "EF02LP29",
      "description": "Identificação, em textos lidos, da comparação entre dois termos, reconhecendo os efeitos de sentido provocados pelo uso dessa figura de linguagem.",
      "materials": [
        "Um texto com comparações, ex.: 'os olhos brilhavam como estrelas'"
      ],
      "steps": [
        "Ler um trecho de texto que contenha uma comparação (ex.: 'rápido como um raio').",
        "Perguntar o que está sendo comparado e por quê.",
        "Pedir que a turma pense em outras comparações parecidas.",
        "Registrar coletivamente as comparações encontradas ou inventadas."
      ]
    },
    {
      "theme": "O que as imagens do livro nos contam",
      "curriculumCode": "EF02LP30",
      "description": "Análise de aspectos gráficos que compõem o material lido, reconhecendo os efeitos de sentido provocados pelo uso de cores, imagens e outros recursos.",
      "materials": [
        "Um livro ilustrado ou álbum"
      ],
      "steps": [
        "Mostrar as ilustrações de um livro antes de ler o texto.",
        "Perguntar o que as cores e imagens sugerem sobre a história.",
        "Ler o texto e comparar com o que foi imaginado a partir das imagens.",
        "Conversar sobre como as ilustrações ajudam a contar a história."
      ]
    },
    {
      "theme": "Palavras que soam parecido: M, N, NH e til",
      "curriculumCode": "EF02LP32",
      "description": "Análise de palavras classificadas como regulares contextuais para compreender que o contexto determina diferenças no modo de grafar a nasalidade (M, N, NH, til) e o uso do G/Gu, C/Qu.",
      "materials": [
        "Lista de palavras com nasalização (campo, cantiga, manhã, mãe)"
      ],
      "steps": [
        "Escrever na lousa palavras com sons nasais escritos de formas diferentes (M, N, NH, til).",
        "Pedir que a turma perceba em que posição da palavra aparece cada forma.",
        "Separar as palavras em grupos conforme a regra usada.",
        "Praticar escrevendo novas palavras seguindo a mesma regra."
      ]
    },
    {
      "theme": "Para quem e para quê vou escrever?",
      "curriculumCode": "EFCALFLP13",
      "description": "Reconhecimento das características do contexto de produção de um texto (finalidade, interlocutor, gênero), utilizadas para tomar decisões durante a produção e a revisão do texto.",
      "materials": [],
      "steps": [
        "Antes de escrever, perguntar à turma: para quem é esse texto? Qual é o objetivo dele?",
        "Anotar coletivamente as respostas (destinatário, finalidade, gênero do texto).",
        "Relembrar essas decisões enquanto o texto é produzido.",
        "Ao final, conferir se o texto atendeu à finalidade combinada."
      ]
    },
    {
      "theme": "De onde vem o assunto do texto",
      "curriculumCode": "EFCALFLP14",
      "description": "Recuperação, criação ou pesquisa do conteúdo temático de um texto que será escrito na produção de texto, seja em reescrita ou em criação.",
      "materials": [
        "Fonte de pesquisa: livro, verbete ou conversa com a turma"
      ],
      "steps": [
        "Escolher o tema do texto que será produzido.",
        "Pesquisar ou relembrar, com a turma, o que já sabem sobre o assunto.",
        "Anotar as ideias principais que poderão entrar no texto.",
        "Organizar essas ideias antes de começar a escrever."
      ]
    },
    {
      "theme": "Fazendo o plano do texto",
      "curriculumCode": "EFCALFLP15",
      "description": "Elaboração do plano do texto a ser produzido na produção textual, considerando o contexto de produção definido e o conteúdo temático já planejado.",
      "materials": [],
      "steps": [
        "Relembrar o tema e a finalidade do texto definidos em atividade anterior.",
        "Organizar coletivamente as partes que o texto vai ter (começo, meio e fim, por exemplo).",
        "Registrar esse plano na lousa como roteiro para a escrita.",
        "Escrever o texto seguindo o plano combinado."
      ]
    },
    {
      "theme": "Revisando o texto: a primeira versão não é a última",
      "curriculumCode": "EFCALFLP17",
      "description": "Revisão do texto durante e depois de produzido, considerando o contexto de produção de texto e realizando ajustes para garantir legibilidade e efeitos de sentido.",
      "materials": [
        "Texto produzido anteriormente pela turma"
      ],
      "steps": [
        "Reler em voz alta o texto produzido pela turma.",
        "Perguntar se ficou claro para quem for ler, e se falta alguma informação.",
        "Marcar coletivamente trechos que precisam de ajuste.",
        "Reescrever esses trechos e comparar com a versão anterior."
      ]
    },
    {
      "theme": "Combinando como vai ser o texto antes de escrever",
      "curriculumCode": "EFCALFLP18",
      "description": "Participação nas atividades de definição da situação comunicativa dos textos a serem produzidos na produção textual, considerando as diferentes opiniões da turma.",
      "materials": [],
      "steps": [
        "Propor à turma que decida coletivamente qual texto será produzido e para qual ocasião.",
        "Ouvir diferentes opiniões sobre como o texto deveria ser (tamanho, tom, formato).",
        "Registrar as decisões combinadas pela turma.",
        "Usar essas decisões como guia durante a produção do texto."
      ]
    },
    {
      "theme": "Compartilhando o texto para melhorar",
      "curriculumCode": "EFCALFLP19",
      "description": "Submissão dos textos produzidos à apreciação de outras pessoas, realizando os ajustes necessários a partir do retorno recebido sobre a produção de texto.",
      "materials": [],
      "steps": [
        "Trocar os textos produzidos entre duplas ou grupos da turma.",
        "Pedir que leiam o texto do colega e digam o que entenderam e o que gostaram.",
        "Anotar as sugestões recebidas.",
        "Fazer os ajustes no texto a partir do retorno dos colegas."
      ]
    },
    {
      "theme": "O dado das histórias",
      "curriculumCode": "EFCALFLP24",
      "description": "Produção de textos orais considerando a situação comunicativa, criando uma história coletiva a partir de imagens sorteadas em um dado ou em cartas.",
      "materials": [
        "Um dado com uma imagem desenhada em cada face (ou cartas com desenhos)"
      ],
      "steps": [
        "Fazer (ou usar) um dado com uma imagem diferente em cada face: um personagem, um lugar, um objeto.",
        "Jogar o dado e pedir que um aluno comece uma história usando o que apareceu.",
        "Jogar novamente e pedir que outro aluno continue a história com o novo elemento sorteado.",
        "Repetir até formar uma história coletiva completa, com começo, meio e fim."
      ]
    }
  ],
  "matematica": [
    {
      "theme": "Números no dia a dia",
      "curriculumCode": "EF02M01",
      "description": "Exploração de números como indicadores de quantidade, ordem, medida e código nas situações do cotidiano, com leitura e escrita de números.",
      "materials": [],
      "steps": [
        "Perguntar onde vemos números no dia a dia (ônibus, telefone, régua, placa de casa).",
        "Anotar na lousa os exemplos que os alunos lembrarem.",
        "Pedir que cada aluno desenhe no caderno um número que viu em casa e explique o que ele indica.",
        "Compartilhar os desenhos em roda, identificando se o número indica quantidade, ordem, medida ou código."
      ]
    },
    {
      "theme": "Comparando números",
      "curriculumCode": "EF02M02",
      "description": "Comparação de números naturais compreendendo as características do sistema de numeração decimal.",
      "materials": [
        "tampinhas ou palitos"
      ],
      "steps": [
        "Escrever dois números na lousa e perguntar qual é maior.",
        "Distribuir tampinhas para grupos formarem quantidades diferentes.",
        "Pedir que comparem as quantidades usando os sinais maior, menor ou igual.",
        "Registrar no caderno três comparações feitas com os colegas."
      ]
    },
    {
      "theme": "Compondo e decompondo números",
      "curriculumCode": "EF02M03",
      "description": "Composição e decomposição de números naturais de diferentes maneiras (unidades e dezenas).",
      "materials": [
        "palitos ou tampinhas"
      ],
      "steps": [
        "Mostrar um número de dois dígitos e perguntar quantas dezenas e unidades ele tem.",
        "Distribuir palitos para os alunos agruparem de 10 em 10, formando o número.",
        "Pedir que decomponham o mesmo número de mais de uma forma (ex: 23 = 20+3 ou 10+10+3).",
        "Registrar no caderno as decomposições encontradas."
      ]
    },
    {
      "theme": "Contando coleções de objetos",
      "curriculumCode": "EF02M04",
      "description": "Estimativa e contagem da quantidade de objetos de coleções, comparando quantidades e usando números para expressá-las.",
      "materials": [
        "tampinhas ou palitos"
      ],
      "steps": [
        "Espalhar um pote de tampinhas na mesa e pedir que estimem a quantidade antes de contar.",
        "Distribuir tampinhas para grupos de 4 alunos contarem devagar.",
        "Pedir que registrem a quantidade contada no caderno.",
        "Comparar em roda quem tem mais e quem tem menos, e ver quem chegou perto da estimativa."
      ]
    },
    {
      "theme": "Contagem de 2 em 2, de 5 em 5, de 10 em 10",
      "curriculumCode": "EF02M06",
      "description": "Recitação oral de contagens ascendentes e descendentes de dois em dois, cinco em cinco e dez em dez.",
      "materials": [],
      "steps": [
        "Combinar com a turma uma contagem de 2 em 2 em voz alta, todos juntos.",
        "Repetir contando de 5 em 5 e depois de 10 em 10.",
        "Fazer a contagem ao contrário (decrescente) com o mesmo padrão.",
        "Escrever no caderno a sequência até um número combinado."
      ]
    },
    {
      "theme": "Continhas de mais e de menos",
      "curriculumCode": "EF02M08",
      "description": "Cálculo do resultado de adições e subtrações de números naturais por técnicas operatórias convencionais, validando os resultados.",
      "materials": [
        "palitos ou tampinhas"
      ],
      "steps": [
        "Escrever uma continha de mais na lousa e resolver junto com a turma.",
        "Repetir com uma continha de menos, usando palitos para apoiar a conta.",
        "Propor 3 a 4 continhas no caderno para os alunos resolverem sozinhos.",
        "Corrigir juntos na lousa, pedindo que expliquem como chegaram ao resultado."
      ]
    },
    {
      "theme": "Maior, menor ou igual?",
      "curriculumCode": "EF02M09",
      "description": "Exploração de relações de comparação entre coleções: ser maior que, ser menor que, estar entre, ter mais um ou mais dois.",
      "materials": [
        "tampinhas ou palitos"
      ],
      "steps": [
        "Formar dois grupinhos de objetos com quantidades diferentes na mesa.",
        "Perguntar qual grupo tem mais, qual tem menos ou se são iguais.",
        "Pedir que os alunos, em duplas, montem grupos e comparem usando 'tem mais um' ou 'tem mais dois'.",
        "Registrar no caderno as comparações feitas."
      ]
    },
    {
      "theme": "Resolvendo problemas de juntar e separar",
      "curriculumCode": "EF02M10",
      "description": "Análise e resolução de problemas envolvendo composição e transformação (campo aditivo).",
      "materials": [
        "palitos ou tampinhas"
      ],
      "steps": [
        "Contar um problema simples de juntar (ex: 3 balas mais 2 balas) e resolver junto na lousa.",
        "Contar um problema de separar (ex: tinha 5 balas, comeu 2) e resolver junto.",
        "Distribuir palitos para os alunos representarem novos problemas ditados pela professora.",
        "Pedir que registrem a resposta e a conta no caderno."
      ]
    },
    {
      "theme": "Problemas de multiplicar e de dividir",
      "curriculumCode": "EF02M11",
      "description": "Análise e resolução de problemas de multiplicação ou de divisão envolvendo proporcionalidade (campo multiplicativo), com os significados de formação de grupos iguais, dobro, metade, triplo ou terça parte.",
      "materials": [
        "tampinhas ou palitos"
      ],
      "steps": [
        "Contar um problema de multiplicar (ex: 3 grupos com 2 lápis cada, quantos ao todo).",
        "Contar também um problema de dividir (ex: 6 lápis repartidos em 3 grupos iguais, quantos em cada grupo).",
        "Usar tampinhas para representar os grupos e contar o total ou repartir igualmente.",
        "Propor outro problema parecido para os alunos resolverem em duplas com material manipulável.",
        "Registrar a solução no caderno com desenho e número."
      ]
    },
    {
      "theme": "Usando os sinais +, – e =",
      "curriculumCode": "EF02M12",
      "description": "Utilização dos sinais convencionais de adição, subtração e igualdade na escrita de operações.",
      "materials": [],
      "steps": [
        "Apresentar os sinais +, - e = na lousa, explicando o que cada um significa.",
        "Escrever situações simples e pedir que os alunos indiquem qual sinal usar.",
        "Propor exercícios no caderno para completar continhas com os sinais corretos.",
        "Corrigir em conjunto, pedindo que leiam a conta em voz alta usando os nomes dos sinais."
      ]
    },
    {
      "theme": "Sequências numéricas crescentes e decrescentes",
      "curriculumCode": "EF02M13",
      "description": "Construção de sequências de números naturais em ordem crescente ou decrescente, a partir de uma regularidade.",
      "materials": [],
      "steps": [
        "Escrever uma sequência numérica na lousa com um número faltando.",
        "Perguntar à turma qual número completa a sequência crescente.",
        "Repetir o exercício com uma sequência decrescente.",
        "Propor 2 a 3 sequências no caderno para os alunos completarem sozinhos."
      ]
    },
    {
      "theme": "Descobrindo o padrão da sequência",
      "curriculumCode": "EF02M14",
      "description": "Descrição oral de um padrão ou regularidade de sequências numéricas ou de figuras.",
      "materials": [],
      "steps": [
        "Mostrar uma sequência de números ou figuras na lousa e perguntar o que se repete.",
        "Pedir que os alunos expliquem em voz alta qual é o padrão.",
        "Propor que criem, em duplas, uma sequência com um padrão próprio no caderno.",
        "Trocar os cadernos entre duplas para tentar descobrir o padrão do colega."
      ]
    },
    {
      "theme": "Onde estou na escola?",
      "curriculumCode": "EF02M16",
      "description": "Identificação e representação da localização de pessoas e objetos no espaço escolar a partir de pontos de referência.",
      "materials": [],
      "steps": [
        "Sair com a turma para observar um espaço da escola (pátio, secretaria, cantina).",
        "Pedir que descrevam a posição de um objeto usando referências como perto, longe, ao lado, na frente.",
        "Voltar à sala e desenhar no caderno um lugar da escola marcando onde estavam.",
        "Compartilhar os desenhos em roda, explicando a localização escolhida."
      ]
    },
    {
      "theme": "Desenhando croquis",
      "curriculumCode": "EF02M18",
      "description": "Leitura e esboço de croquis que indicam a posição ou movimentação de um objeto ou pessoa a partir de pontos de referência.",
      "materials": [],
      "steps": [
        "Mostrar um croqui simples (desenho de cima) da sala de aula na lousa.",
        "Pedir que identifiquem onde ficam a porta, a mesa da professora e as carteiras no desenho.",
        "Propor que cada aluno desenhe um croqui simples do caminho de casa até a escola.",
        "Compartilhar os croquis em duplas, explicando o caminho desenhado."
      ]
    },
    {
      "theme": "Formas geométricas espaciais no dia a dia",
      "curriculumCode": "EF02M19",
      "description": "Identificação de objetos do cotidiano que se parecem com figuras geométricas espaciais (cubos, esferas, cones, cilindros, pirâmides).",
      "materials": [
        "objetos da sala (caixa, bola, lata, cone de papel, se houver)"
      ],
      "steps": [
        "Mostrar objetos da sala e perguntar que formato eles têm.",
        "Apresentar os nomes cubo, esfera, cone e cilindro relacionando aos objetos mostrados.",
        "Pedir que os alunos procurem na sala outros objetos parecidos com essas formas.",
        "Registrar no caderno um desenho de cada forma encontrada com seu nome."
      ]
    },
    {
      "theme": "Formas geométricas planas",
      "curriculumCode": "EF02M21",
      "description": "Exploração oral de semelhanças e diferenças entre figuras geométricas planas (triângulos, quadrados, retângulos e círculos).",
      "materials": [
        "giz de cera"
      ],
      "steps": [
        "Desenhar na lousa um triângulo, um quadrado, um retângulo e um círculo.",
        "Perguntar quantos lados e pontas cada figura tem.",
        "Pedir que os alunos desenhem as figuras no caderno usando giz de cera.",
        "Conversar em roda sobre as semelhanças e diferenças entre as figuras."
      ]
    },
    {
      "theme": "Provável, improvável ou impossível?",
      "curriculumCode": "EF02M22",
      "description": "Classificação de resultados de eventos cotidianos aleatórios como pouco prováveis, muito prováveis, improváveis ou impossíveis.",
      "materials": [],
      "steps": [
        "Propor situações do dia a dia (ex: vai chover amanhã, o sol vai nascer) e perguntar se são prováveis, improváveis ou impossíveis.",
        "Discutir em roda cada situação, pedindo que os alunos justifiquem a resposta.",
        "Propor que criem, em duplas, um exemplo de cada categoria.",
        "Registrar os exemplos no caderno."
      ]
    },
    {
      "theme": "Lendo tabelas e gráficos de barras",
      "curriculumCode": "EF02M23",
      "description": "Leitura, interpretação e comparação de informações apresentadas em tabelas simples e gráficos de colunas ou barras.",
      "materials": [],
      "steps": [
        "Mostrar uma tabela ou gráfico de barras simples na lousa.",
        "Perguntar o que cada coluna ou linha representa.",
        "Fazer perguntas de leitura, como qual item aparece mais e qual aparece menos.",
        "Propor no caderno 2 a 3 perguntas sobre o gráfico para os alunos responderem."
      ]
    },
    {
      "theme": "Pesquisa da turma em gráficos",
      "curriculumCode": "EF02M24",
      "description": "Realização de pesquisa sobre assunto de interesse da turma, organizando os dados em listas, tabelas e gráficos de colunas.",
      "materials": [
        "papel para tabela/gráfico"
      ],
      "steps": [
        "Combinar com a turma um tema de pesquisa (ex: fruta preferida, brincadeira preferida).",
        "Perguntar a cada aluno sua resposta e anotar na lousa.",
        "Organizar os dados em uma tabela simples no caderno ou em papel.",
        "Ajudar a turma a montar um gráfico de colunas com os resultados e conversar sobre o que descobriram."
      ]
    },
    {
      "theme": "Medindo comprimento, capacidade e massa",
      "curriculumCode": "EF02M26",
      "description": "Estimativa, medição e comparação de comprimentos, capacidades e massas com instrumentos de medida padronizados (fita métrica, balança).",
      "materials": [
        "fita métrica ou régua",
        "balança (se houver)"
      ],
      "steps": [
        "Perguntar como podemos medir comprimento, quanto um objeto pesa ou quanto cabe em um recipiente.",
        "Medir com a fita métrica o comprimento de objetos da sala (mesa, caderno, porta).",
        "Registrar no caderno as medidas encontradas.",
        "Comparar os resultados em roda, vendo qual objeto é maior ou menor."
      ]
    },
    {
      "theme": "Moedas e cédulas do Brasil",
      "curriculumCode": "EF02M28",
      "description": "Estabelecimento da equivalência de valores entre moedas e cédulas do sistema monetário brasileiro.",
      "materials": [
        "moedas e cédulas de brinquedo (ou desenhadas)"
      ],
      "steps": [
        "Mostrar moedas e cédulas de brinquedo e perguntar se os alunos reconhecem os valores.",
        "Propor trocas simples (ex: quantas moedas de 1 real formam 5 reais).",
        "Simular uma compra de mercadinho com preços simples para os alunos pagarem com as moedas.",
        "Registrar no caderno uma troca de valores feita durante a atividade."
      ]
    },
    {
      "theme": "Lendo horas no relógio digital",
      "curriculumCode": "EF02M29",
      "description": "Leitura de horas em relógio digital.",
      "materials": [
        "desenho de relógio digital (lousa ou papel)"
      ],
      "steps": [
        "Desenhar um relógio digital na lousa e explicar como se lê as horas.",
        "Mostrar exemplos de horários e pedir que a turma leia em voz alta.",
        "Propor exercícios no caderno associando horários a atividades do dia (acordar, almoçar, dormir).",
        "Corrigir juntos, pedindo que alguns alunos leiam suas respostas."
      ]
    },
    {
      "theme": "Usando o calendário da sala",
      "curriculumCode": "EF02M30",
      "description": "Antecipação e descrição oral de sequências de acontecimentos referentes a um dia ou uma semana, utilizando o calendário.",
      "materials": [
        "calendário da sala"
      ],
      "steps": [
        "Observar o calendário da sala e identificar o dia, mês e dia da semana atual.",
        "Perguntar o que aconteceu ontem e o que vai acontecer amanhã ou na próxima semana.",
        "Marcar no calendário um evento importante combinado com a turma.",
        "Pedir que os alunos descrevam oralmente a sequência de dias até esse evento."
      ]
    },
    {
      "theme": "Jogo de quebra-cabeça",
      "curriculumCode": "EF02M32",
      "description": "Realização de jogo de quebra-cabeça, utilizando estratégias e analisando possibilidades de encaixe das peças.",
      "materials": [
        "quebra-cabeça simples"
      ],
      "steps": [
        "Dividir a turma em grupos e entregar um quebra-cabeça para cada grupo.",
        "Pedir que observem as peças antes de começar a montar.",
        "Deixar os grupos montarem o quebra-cabeça, incentivando tentativas diferentes.",
        "Conversar em roda sobre as estratégias usadas para encaixar as peças."
      ]
    },
    {
      "theme": "Torre de Hanói simplificada",
      "curriculumCode": "EF02M32",
      "description": "Realização do jogo Torre de Hanói (versão simplificada, com 3 discos), desenvolvendo raciocínio lógico, planejamento e testagem de estratégias.",
      "materials": [
        "3 discos ou tampas de tamanhos diferentes e 3 espaços marcados (pratinhos ou desenhos no papel)"
      ],
      "steps": [
        "Empilhar os 3 discos em ordem do maior (embaixo) para o menor (em cima) no primeiro espaço.",
        "Explicar o desafio: mover a pilha inteira para o terceiro espaço, um disco de cada vez, sem nunca colocar um disco maior sobre um menor.",
        "Deixar a turma tentar em duplas, testando diferentes ordens de movimento.",
        "Conversar sobre quantos movimentos cada dupla usou e quais estratégias funcionaram melhor."
      ]
    },
    {
      "theme": "Para onde nos movemos na escola",
      "curriculumCode": "EF02M17",
      "description": "Identificação e representação da movimentação de pessoas ou objetos no espaço escolar, com base em pontos de referência e indicações de direção e sentido.",
      "materials": [],
      "steps": [
        "Escolher um ponto de referência conhecido da escola (a porta da sala, por exemplo).",
        "Pedir que um aluno se movimente até outro ponto, descrevendo em voz alta a direção (para frente, para a direita, para trás etc.).",
        "Registrar coletivamente o caminho percorrido com desenhos ou setas.",
        "Repetir com outros alunos e outros trajetos.",
        "Perguntar como poderiam explicar o caminho para alguém que nunca esteve na escola."
      ]
    },
    {
      "theme": "Figuras geométricas espaciais: parecidas ou diferentes?",
      "curriculumCode": "EF02M20",
      "description": "Exploração oral de semelhanças e diferenças entre figuras geométricas espaciais (blocos retangulares, cubos, pirâmides, prismas, esferas, cones e cilindros), reconhecendo características como número de dimensões e partes arredondadas.",
      "materials": [
        "Embalagens ou blocos com formatos variados (caixa, bola, cone, lata etc.)"
      ],
      "steps": [
        "Espalhar os objetos de formatos variados sobre uma mesa.",
        "Pedir que a turma separe os que têm 'partes arredondadas' dos que não têm.",
        "Comparar dois objetos parecidos (como um cubo e um bloco retangular) e listar diferenças.",
        "Nomear cada figura geométrica espacial encontrada."
      ]
    },
    {
      "theme": "O que os gráficos estão nos contando?",
      "curriculumCode": "EF02M25",
      "description": "Análise de situações apresentadas por meio de tabelas simples e gráficos de colunas ou barras, com descrição oral de uma conclusão e registro coletivo.",
      "materials": [
        "Um gráfico de colunas simples (desenhado na lousa ou impresso)"
      ],
      "steps": [
        "Apresentar um gráfico de colunas simples com um tema do interesse da turma (ex.: brincadeira favorita).",
        "Perguntar qual coluna é a maior e qual é a menor.",
        "Pedir que a turma descreva oralmente uma conclusão sobre o gráfico.",
        "Registrar coletivamente a conclusão na lousa."
      ]
    },
    {
      "theme": "Resolvendo problemas com comprimento, capacidade e massa",
      "curriculumCode": "EF02M27",
      "description": "Resolução de problemas envolvendo as grandezas de comprimento, capacidade e massa, utilizando estratégias pessoais de representação.",
      "materials": [
        "Fita métrica, balança ou recipiente graduado (opcional)"
      ],
      "steps": [
        "Apresentar um problema simples envolvendo medida (ex.: 'Uma fita tem 2 metros e cortamos 50 centímetros, quanto sobra?').",
        "Deixar que os alunos resolvam com estratégias próprias (desenho, contagem, material concreto).",
        "Pedir que expliquem como chegaram à resposta.",
        "Repetir com um problema de capacidade e outro de massa."
      ]
    },
    {
      "theme": "Quantos dias faltam?",
      "curriculumCode": "EF02M31",
      "description": "Indicação da duração de intervalos de tempo entre duas datas (dias e semanas), utilizando o calendário.",
      "materials": [
        "Calendário do mês (cartaz ou caderno)"
      ],
      "steps": [
        "Escolher duas datas no calendário (ex.: hoje e o próximo feriado).",
        "Contar juntos quantos dias faltam entre uma data e outra.",
        "Converter a contagem em semanas, quando possível.",
        "Repetir o exercício com outras datas importantes para a turma (aniversários, passeios)."
      ]
    },
    {
      "theme": "Explicando como resolvi o problema",
      "curriculumCode": "EF02M36",
      "description": "Expressão oral e organizada do processo desenvolvido na resolução de um problema, justificando o resultado com vocabulário pessoal.",
      "materials": [],
      "steps": [
        "Propor um problema matemático simples para a turma resolver individualmente.",
        "Pedir que um aluno explique, em voz alta, passo a passo, como pensou para chegar à resposta.",
        "Perguntar à turma se todos entenderam a explicação e se alguém resolveu de outro jeito.",
        "Valorizar diferentes estratégias de resolução, não só a resposta final."
      ]
    },
    {
      "theme": "Inventando perguntas para um problema",
      "curriculumCode": "EF02M37",
      "description": "Elaboração de perguntas para um problema matemático e resolução, verificando a validade da solução encontrada.",
      "materials": [],
      "steps": [
        "Apresentar uma situação sem pergunta (ex.: 'Na caixa tinham 8 lápis e a professora trouxe mais 5.').",
        "Pedir que a turma invente uma pergunta matemática para essa situação.",
        "Resolver juntos a pergunta criada.",
        "Verificar se a resposta faz sentido com a situação apresentada."
      ]
    },
    {
      "theme": "Quantificando coleções de jeitos diferentes",
      "curriculumCode": "EF02M05",
      "description": "Exploração de diferentes estratégias para quantificar elementos de uma coleção: contagem um a um, formação de pares, agrupamentos e estimativas.",
      "materials": [
        "Uma coleção de objetos pequenos (tampinhas, botões, feijões)"
      ],
      "steps": [
        "Espalhar uma coleção de objetos sobre a mesa.",
        "Pedir que a turma estime quantos objetos existem, sem contar.",
        "Contar em conjunto, testando diferentes estratégias (um a um, em pares, em grupos de 10).",
        "Comparar qual estratégia foi mais rápida e por quê."
      ]
    },
    {
      "theme": "Continuando o padrão da sequência",
      "curriculumCode": "EF02M15",
      "description": "Descrição de elementos ausentes em sequências numéricas ou figurais, repetitivas ou recursivas, e continuação da sequência a partir de um padrão.",
      "materials": [
        "Sequência de figuras ou números com lacunas (cartaz ou lousa)"
      ],
      "steps": [
        "Apresentar uma sequência com um padrão claro e uma lacuna (ex.: círculo, quadrado, círculo, ___).",
        "Pedir que a turma descreva o padrão em voz alta.",
        "Completar juntos o elemento que falta.",
        "Propor que a turma continue a sequência por mais alguns elementos."
      ]
    },
    {
      "theme": "Decompondo números para calcular",
      "curriculumCode": "EF02M07",
      "description": "Exploração da decomposição de escritas numéricas para a realização de cálculos (mentais ou escritos) que envolvam adição e subtração.",
      "materials": [
        "Material dourado ou palitos agrupados de 10 em 10 (opcional)"
      ],
      "steps": [
        "Escrever um número na lousa (ex.: 45) e perguntar como pode ser decomposto (40 + 5).",
        "Praticar decompor outros números em dezenas e unidades.",
        "Usar a decomposição para resolver uma conta de adição ou subtração (ex.: 45 + 23 = 40+20 + 5+3).",
        "Comparar o resultado com o cálculo feito da forma tradicional."
      ]
    },
    {
      "theme": "Investigando a poluição perto de nós",
      "curriculumCode": "EF02M35",
      "description": "Desenvolvimento de um projeto envolvendo contaminação do solo, da água ou do ar, relacionando-o com a Matemática.",
      "materials": [
        "Fotos ou reportagens sobre poluição local (opcional)"
      ],
      "steps": [
        "Conversar com a turma sobre o que é poluição do ar, da água ou do solo.",
        "Escolher, com a turma, um tipo de poluição para investigar no bairro.",
        "Fazer uma pesquisa simples (contagem de lixo encontrado, entrevistas) e registrar os dados em números.",
        "Organizar os dados coletados em uma lista ou gráfico simples e apresentar as conclusões."
      ]
    },
    {
      "theme": "Batalha de cartas: quem tem o maior número?",
      "curriculumCode": "EF02M02",
      "description": "Comparação de números naturais pela posição na sequência escrita ou pela quantidade de algarismos, em um jogo de cartas.",
      "materials": [
        "Baralho comum ou cartas numeradas feitas pela turma"
      ],
      "steps": [
        "Dividir a turma em duplas, cada uma com um baralho de cartas numeradas.",
        "Cada jogador vira uma carta ao mesmo tempo; quem tiver o maior número leva as duas cartas.",
        "Perguntar como sabem qual número é maior, sem contar um a um.",
        "Ao final, contar quem ficou com mais cartas."
      ]
    },
    {
      "theme": "Quantas figurinhas eu tenho a mais?",
      "curriculumCode": "EF02M09",
      "description": "Exploração de relações de comparação entre coleções (ser maior que, ser menor que, ser igual a), utilizando a diferença entre as quantidades.",
      "materials": [
        "Duas coleções de objetos pequenos (tampinhas, figurinhas, botões)"
      ],
      "steps": [
        "Formar duplas e dar a cada aluno uma quantidade diferente de objetos.",
        "Pedir que comparem: quem tem mais? Quantos a mais?",
        "Registrar a comparação usando os sinais >, < ou =.",
        "Trocar objetos e repetir a comparação."
      ]
    },
    {
      "theme": "Quanto pesa cada bicho de estimação?",
      "curriculumCode": "EF02M26",
      "description": "Estimativa, medição e comparação de massas de objetos, usando uma balança e unidades de medida padronizadas.",
      "materials": [
        "Balança simples (de cozinha ou brinquedo), objetos variados"
      ],
      "steps": [
        "Mostrar fotos ou brinquedos representando animais de estimação de tamanhos diferentes.",
        "Pesar objetos que representem esses animais (ou os próprios materiais da sala) na balança.",
        "Comparar os pesos: qual é mais pesado, qual é mais leve.",
        "Registrar os pesos encontrados em uma tabela simples."
      ]
    },
    {
      "theme": "Fazendo compras na feirinha da sala",
      "curriculumCode": "EF02M28",
      "description": "Estabelecimento da equivalência de valores entre moedas e cédulas do sistema monetário brasileiro, em uma situação de compra e venda simulada.",
      "materials": [
        "Cédulas e moedas de brinquedo, objetos ou desenhos com preços"
      ],
      "steps": [
        "Montar uma barraquinha com objetos etiquetados com preços simples.",
        "Dar a cada aluno um valor em dinheiro de brinquedo para 'fazer compras'.",
        "Pedir que decidam quais notas e moedas usar para pagar cada item.",
        "Verificar juntos se o pagamento e o troco (quando houver) estão corretos."
      ]
    },
    {
      "theme": "Qual é a mais provável de acontecer?",
      "curriculumCode": "EF02M22",
      "description": "Classificação de resultados de eventos cotidianos aleatórios como pouco prováveis, muito prováveis, improváveis ou impossíveis, em um jogo de sorteio.",
      "materials": [
        "Saquinho com bolinhas ou papéis coloridos em quantidades desiguais"
      ],
      "steps": [
        "Colocar numa sacola muitas bolinhas de uma cor e poucas de outra.",
        "Perguntar à turma qual cor é mais provável de ser sorteada, e por quê.",
        "Fazer alguns sorteios e registrar os resultados.",
        "Comparar o que a turma previu com o que realmente aconteceu."
      ]
    },
    {
      "theme": "Pesquisa: qual é o animal de estimação preferido da turma?",
      "curriculumCode": "EF02M24",
      "description": "Realização de pesquisa sobre assuntos de interesse das crianças, organizando os dados coletados em listas, tabelas ou gráficos de colunas, comunicando-os oralmente.",
      "materials": [
        "Cartolina ou lousa para montar o gráfico"
      ],
      "steps": [
        "Perguntar a cada aluno qual é seu animal de estimação preferido (ou o que gostaria de ter).",
        "Anotar as respostas em uma lista na lousa.",
        "Organizar os dados em um gráfico de colunas simples, com a turma.",
        "Analisar juntos qual foi o animal mais votado."
      ]
    },
    {
      "theme": "Seguindo o padrão das profissões",
      "curriculumCode": "EF02M14",
      "description": "Descrição oral de um padrão (ou regularidade) de sequências figurais, repetitivas ou recursivas, usando figuras relacionadas a profissões ou objetos do cotidiano.",
      "materials": [
        "Figuras ou desenhos de profissões/objetos repetidos em sequência"
      ],
      "steps": [
        "Apresentar uma sequência de figuras (ex.: estetoscópio, seringa, estetoscópio, seringa...).",
        "Pedir que a turma descreva em voz alta o padrão que se repete.",
        "Perguntar qual seria a próxima figura da sequência.",
        "Propor que a turma crie sua própria sequência com objetos ou desenhos."
      ]
    },
    {
      "theme": "Números que são código: a etiqueta da vacina",
      "curriculumCode": "EF02M01",
      "description": "Exploração de números no contexto diário como indicadores de código (não de quantidade), como em numeração de itens organizados em um armário ou prateleira.",
      "materials": [
        "Objetos numerados ou etiquetas com números (caixas, potes)"
      ],
      "steps": [
        "Mostrar objetos com números que servem como código, não como contagem (ex.: número em uma caixa organizadora, em uma ficha).",
        "Perguntar à turma o que esse número está indicando ali (não é 'quantidade', é identificação).",
        "Comparar com outro número que representa quantidade (ex.: 'tem 5 lápis').",
        "Propor que a turma numere e organize objetos da sala usando números como código."
      ]
    }
  ],
  "ciencias": [
    {
      "theme": "Massa e volume dos materiais",
      "curriculumCode": "EF02C01",
      "description": "Reconhecimento e comparação das propriedades de massa e volume em diferentes materiais de uso cotidiano.",
      "materials": [
        "pedra pequena",
        "bolinha de papel amassado",
        "chumaço de algodão",
        "lápis"
      ],
      "steps": [
        "Levar objetos variados (pedra, bolinha de papel, algodão, lápis) e pedir que segurem um em cada mão pra comparar o peso.",
        "Perguntar quem acha que é mais pesado antes de comparar de verdade.",
        "Comparar o tamanho dos mesmos objetos, notando que peso e tamanho nem sempre combinam.",
        "Pedir que desenhem os objetos em ordem do mais leve pro mais pesado.",
        "Fechar com roda de conversa sobre objetos grandes que são leves e pequenos que são pesados."
      ]
    },
    {
      "theme": "Materiais que mudam: reversível ou não?",
      "curriculumCode": "EF02C02",
      "description": "Observação planejada de transformações que os materiais podem sofrer, distinguindo mudanças reversíveis e irreversíveis.",
      "materials": [
        "folha de papel",
        "giz de cera",
        "copo com água",
        "gelo (se possível)"
      ],
      "steps": [
        "Mostrar transformações simples: amassar papel, quebrar um giz, derreter um pedaço de gelo.",
        "Perguntar se dá pra voltar como era antes em cada caso.",
        "Fazer no quadro uma lista dividida em \"dá pra voltar\" e \"não dá pra voltar\".",
        "Pedir que copiem a lista e desenhem um exemplo de cada tipo.",
        "Fechar comentando exemplos do dia a dia, como cozinhar um ovo."
      ]
    },
    {
      "theme": "Materiais e temperatura",
      "curriculumCode": "EF02C03",
      "description": "Comparação das mudanças sofridas por materiais quando submetidos a diferentes temperaturas.",
      "materials": [
        "pedaço de gelo",
        "copo com água",
        "giz de cera"
      ],
      "steps": [
        "Levar um pedaço de gelo pra sala e observar ele derretendo ao longo da aula.",
        "Deixar um giz de cera no sol ou perto de uma fonte de calor pra ver se ele amolece.",
        "Perguntar o que acontece com outros materiais quando esquentam ou esfriam.",
        "Registrar no caderno o que mudou em cada material observado.",
        "Fechar com roda de conversa sobre exemplos do dia a dia, como sorvete derretendo."
      ]
    },
    {
      "theme": "Para onde vai o lixo?",
      "curriculumCode": "EF02C04",
      "description": "Proposição de ações para o descarte adequado de diferentes materiais do cotidiano.",
      "materials": [
        "embalagens recicláveis limpas trazidas de casa",
        "caixas ou cartazes coloridos"
      ],
      "steps": [
        "Pedir com antecedência que tragam embalagens limpas de casa (garrafa, caixa, papel).",
        "Separar as embalagens em grupos por tipo de material (papel, plástico, vidro, metal).",
        "Conversar sobre pra onde cada tipo de lixo pode ir (reciclagem, orgânico, comum).",
        "Montar um cartaz coletivo simples com os grupos e as cores da coleta seletiva.",
        "Fechar propondo um combinado de separar o lixo da sala de aula."
      ]
    },
    {
      "theme": "Materiais perecíveis e não perecíveis",
      "curriculumCode": "EF02C05",
      "description": "Pesquisa em fontes variadas sobre decomposição de materiais, classificando-os em perecíveis e não perecíveis.",
      "materials": [
        "embalagens ou imagens de alimentos e objetos variados"
      ],
      "steps": [
        "Mostrar imagens ou embalagens de diferentes materiais e alimentos.",
        "Perguntar quais eles acham que estragam com o tempo e quais não.",
        "Pesquisar em livros da sala ou perguntar exemplos que conhecem de casa.",
        "Classificar os itens no quadro em dois grupos: perecíveis e não perecíveis.",
        "Pedir que registrem a classificação no caderno com desenhos."
      ]
    },
    {
      "theme": "Minhocário da sala: observando a decomposição",
      "curriculumCode": "EF02C05",
      "description": "Observação direta do processo de decomposição de materiais orgânicos (como cascas de frutas) em um minhocário simples, identificando a importância dos decompositores.",
      "materials": [
        "Um pote transparente com terra, restos de fruta ou verdura e, se possível, minhocas"
      ],
      "steps": [
        "Montar um minhocário simples com terra e restos de fruta em um pote transparente.",
        "Observar e registrar, ao longo de alguns dias, o que acontece com os restos de comida.",
        "Conversar sobre o papel das minhocas e outros seres pequenos na decomposição.",
        "Relacionar a decomposição observada com o destino do lixo orgânico em casa."
      ]
    },
    {
      "theme": "Conservando os alimentos",
      "curriculumCode": "EF02C06",
      "description": "Conhecimento de ações para a conservação de materiais perecíveis.",
      "materials": [
        "embalagens de alimentos (lata, pote, saquinho)",
        "imagens de geladeira ou despensa"
      ],
      "steps": [
        "Perguntar como a família guarda os alimentos em casa (geladeira, armário, freezer).",
        "Mostrar embalagens diferentes e conversar sobre como cada uma ajuda a conservar o alimento.",
        "Listar no quadro formas de conservar alimentos (refrigerar, embalar, secar, salgar).",
        "Pedir que desenhem um alimento e como ele deve ser guardado.",
        "Fechar com roda de conversa sobre por que é importante conservar bem os alimentos."
      ]
    },
    {
      "theme": "Observando o Sol no céu",
      "curriculumCode": "EF02C07",
      "description": "Observação e registro da posição do Sol no céu em um mesmo horário ao longo de vários dias.",
      "materials": [],
      "steps": [
        "Levar a turma pro pátio, sempre no mesmo horário, pra observar onde o Sol está no céu (sem olhar direto pra ele).",
        "Pedir que apontem a direção do Sol usando referências como prédios ou árvores.",
        "Registrar no caderno um desenho da posição do Sol naquele dia e horário.",
        "Combinar de repetir a observação em outros dias da semana.",
        "Fechar comparando os desenhos de dias diferentes e conversando sobre o que mudou."
      ]
    },
    {
      "theme": "Luz e sombra",
      "curriculumCode": "EF02C08",
      "description": "Relação entre os diferentes períodos do dia e a luz/sombra, investigando a posição do objeto e da fonte de luz.",
      "materials": [
        "giz para marcar no chão",
        "objeto pequeno (boneco ou garrafa)"
      ],
      "steps": [
        "Levar a turma pro pátio de manhã e marcar com giz a sombra de um objeto ou colega no chão.",
        "Repetir a marcação da sombra do mesmo objeto em outro horário do dia.",
        "Comparar as marcações e perguntar por que a sombra mudou de tamanho e posição.",
        "Pedir que desenhem no caderno o que observaram nos dois horários.",
        "Fechar relacionando a posição do Sol com o tamanho e a direção da sombra."
      ]
    },
    {
      "theme": "As fases da Lua",
      "curriculumCode": "EF02C09",
      "description": "Percepção e registro das diferentes fases da Lua durante um período de tempo observado.",
      "materials": [
        "desenho das fases da Lua no quadro"
      ],
      "steps": [
        "Perguntar se alguém já observou a Lua em casa e como ela estava.",
        "Mostrar no quadro as quatro fases principais da Lua com desenhos simples.",
        "Combinar com a turma de observar a Lua à noite, com ajuda da família, durante uma semana.",
        "Pedir que registrem em uma tabela simples no caderno o formato da Lua em cada dia.",
        "Fechar comparando os registros da turma e conversando sobre a mudança das fases."
      ]
    },
    {
      "theme": "Batimentos, respiração e temperatura do corpo",
      "curriculumCode": "EF02C10",
      "description": "Reconhecimento e comunicação oral de sinais vitais no próprio corpo, como batimentos cardíacos, respiração e temperatura.",
      "materials": [],
      "steps": [
        "Pedir que coloquem a mão no peito ou pulso e sintam o coração batendo, parados.",
        "Pedir que pulem no lugar por 30 segundos e sintam o coração de novo, comparando.",
        "Contar juntos a respiração parados e depois do movimento.",
        "Perguntar quem já mediu febre e conversar sobre a temperatura do corpo.",
        "Fechar com roda de conversa sobre como o corpo dá sinais quando fazemos esforço."
      ]
    },
    {
      "theme": "Por que precisamos comer?",
      "curriculumCode": "EF02C11",
      "description": "Reconhecimento da importância da alimentação para os seres vivos, identificando-a como necessidade vital.",
      "materials": [
        "imagens de alimentos, animais e plantas"
      ],
      "steps": [
        "Perguntar o que acontece quando ficamos muito tempo sem comer.",
        "Conversar sobre por que pessoas, animais e plantas precisam se alimentar.",
        "Mostrar imagens de diferentes seres vivos se alimentando.",
        "Pedir que desenhem no caderno o que comeram no café da manhã ou almoço.",
        "Fechar relacionando alimentação com energia pra brincar, estudar e crescer."
      ]
    },
    {
      "theme": "Alimentos que ajudam o corpo a crescer",
      "curriculumCode": "EF02C12",
      "description": "Conhecimento de alguns tipos de alimentos necessários ao desenvolvimento do corpo.",
      "materials": [
        "encartes de mercado ou imagens de alimentos"
      ],
      "steps": [
        "Conversar sobre quais alimentos os alunos comem no dia a dia.",
        "Mostrar imagens ou encartes de alimentos e separar em grupos (frutas, verduras, proteínas).",
        "Explicar de forma simples que tipos de alimentos ajudam o corpo a crescer forte.",
        "Pedir que recortem ou desenhem um prato de comida saudável.",
        "Fechar com roda de conversa sobre a importância de variar os alimentos."
      ]
    },
    {
      "theme": "Como vivem os animais que conhecemos",
      "curriculumCode": "EF02C13",
      "description": "Identificação dos modos de vida de animais do convívio próximo e proposta coletiva de classificação.",
      "materials": [
        "imagens de animais variados"
      ],
      "steps": [
        "Perguntar quais animais os alunos conhecem, de casa, da rua ou do bairro.",
        "Conversar sobre onde cada animal vive e o que come.",
        "Propor coletivamente formas de agrupar os animais (que voam, que nadam, que têm pelo).",
        "Registrar no quadro os grupos criados pela turma.",
        "Pedir que desenhem um animal e escrevam onde ele vive."
      ]
    },
    {
      "theme": "As partes de uma planta",
      "curriculumCode": "EF02C14",
      "description": "Nomeação das principais partes de uma planta e investigação da importância da luz e da água para ela.",
      "materials": [
        "uma planta real do pátio ou trazida de casa",
        "lápis de cor"
      ],
      "steps": [
        "Levar a turma pra observar uma planta do pátio ou trazer uma planta pra sala.",
        "Apontar e nomear junto com a turma as partes da planta (raiz, caule, folha, flor, fruto).",
        "Perguntar o que a planta precisa pra viver e por quê.",
        "Pedir que desenhem a planta observada e nomeiem as partes.",
        "Fechar com roda de conversa sobre cuidados com as plantas da escola."
      ]
    },
    {
      "theme": "Prevenindo acidentes em casa e na escola",
      "curriculumCode": "EF02C15",
      "description": "Reconhecimento e registro de modos de prevenir acidentes domésticos e escolares, com atitudes de segurança no uso de materiais.",
      "materials": [
        "imagens de situações de risco",
        "cartolina para cartaz"
      ],
      "steps": [
        "Conversar sobre acidentes que podem acontecer em casa e na escola.",
        "Mostrar imagens de situações de risco e perguntar como evitar cada uma.",
        "Listar no quadro atitudes de segurança no uso de materiais como tesoura e escada.",
        "Pedir que desenhem uma atitude segura.",
        "Fechar montando um cartaz coletivo com dicas de prevenção pra sala."
      ]
    },
    {
      "theme": "Cuidando do corpo",
      "curriculumCode": "EF02C16",
      "description": "Valorização de cuidados com o corpo, relacionando hábitos saudáveis ao desenvolvimento.",
      "materials": [
        "imagens de hábitos de higiene"
      ],
      "steps": [
        "Perguntar quais cuidados eles têm com o corpo no dia a dia.",
        "Conversar sobre hábitos saudáveis como lavar as mãos, escovar os dentes e dormir bem.",
        "Mostrar imagens de diferentes hábitos e classificar como saudáveis ou não.",
        "Pedir que desenhem um hábito de cuidado que praticam.",
        "Fechar com roda de conversa sobre como esses hábitos ajudam o corpo a se desenvolver."
      ]
    },
    {
      "theme": "De onde vêm as verduras e frutas que comemos",
      "curriculumCode": "EF02C14",
      "description": "Investigação de quais partes de diferentes plantas nós comemos (raiz, caule, folha, flor, fruto ou semente), relacionando alimentos do dia a dia às plantas de origem.",
      "materials": [
        "Alimentos de origem vegetal variados ou imagens: cenoura, alface, batata, maçã, feijão"
      ],
      "steps": [
        "Levar (ou mostrar imagens de) alimentos de origem vegetal variados.",
        "Perguntar qual parte da planta cada alimento representa (raiz, folha, fruto, semente).",
        "Classificar os alimentos coletivamente em um cartaz, por parte da planta.",
        "Conversar sobre por que é importante comer partes variadas de plantas diferentes."
      ]
    },
    {
      "theme": "Montando um prato colorido e saudável",
      "curriculumCode": "EF02C12",
      "description": "Reconhecimento da importância da alimentação variada para o corpo, identificando alimentos que ajudam no crescimento e desenvolvimento.",
      "materials": [
        "Encartes de mercado, revistas ou imagens de alimentos para recortar"
      ],
      "steps": [
        "Conversar sobre o que a turma comeu no café da manhã.",
        "Recortar (ou desenhar) alimentos variados e montar um 'prato saudável' coletivo em cartaz.",
        "Identificar quais alimentos ajudam o corpo a crescer forte.",
        "Comparar o prato montado com o que costumam comer em casa."
      ]
    }
  ],
  "geografia": [
    {
      "theme": "Nossos lugares de vivência: escola, bairro, rua",
      "curriculumCode": "EF02G01",
      "description": "Reconhecimento dos vínculos afetivos construídos nos espaços de vivência (escola, bairro, rua), comparando semelhanças e diferenças.",
      "materials": [],
      "steps": [
        "Conversar em roda sobre os lugares onde os alunos vivem, como rua e bairro.",
        "Pedir que cada um conte algo que gosta na escola, no bairro ou na rua.",
        "Comparar semelhanças e diferenças entre os lugares contados pela turma.",
        "Pedir que desenhem um lugar especial pra eles.",
        "Fechar valorizando os vínculos afetivos com esses lugares."
      ]
    },
    {
      "theme": "A história das migrações no bairro",
      "curriculumCode": "EF02G02",
      "description": "Conhecimento da história das migrações no bairro ou comunidade, registrando em desenhos, tabelas e gráficos simples.",
      "materials": [
        "cartolina para tabela ou gráfico simples"
      ],
      "steps": [
        "Perguntar quem na turma ou na família veio de outro lugar (cidade, estado, país).",
        "Conversar sobre por que as pessoas se mudam pra outro lugar.",
        "Fazer uma lista ou gráfico simples no quadro com os lugares de origem das famílias.",
        "Pedir que desenhem ou registrem a história de migração da própria família.",
        "Fechar com roda de conversa sobre a diversidade de origens na turma."
      ]
    },
    {
      "theme": "Costumes e tradições de diferentes populações",
      "curriculumCode": "EF02G03",
      "description": "Comparação de costumes e tradições de diferentes populações do bairro, valorizando o respeito às diferenças étnico-raciais, religiosas e culturais.",
      "materials": [],
      "steps": [
        "Perguntar sobre costumes e tradições que a família de cada aluno tem, como comida, festas e música.",
        "Conversar sobre como essas tradições podem ser diferentes entre as famílias do bairro.",
        "Compartilhar em roda um costume ou tradição de cada um.",
        "Reforçar o respeito às diferenças étnico-raciais, religiosas e culturais durante a conversa.",
        "Pedir que desenhem uma tradição da própria família."
      ]
    },
    {
      "theme": "Conhecendo outros bairros de São Paulo",
      "curriculumCode": "EF02G04",
      "description": "Conhecimento de outros bairros da Cidade de São Paulo por meio de mapas e ilustrações.",
      "materials": [
        "mapa simples de São Paulo (impresso ou desenhado no quadro)",
        "imagens de diferentes bairros"
      ],
      "steps": [
        "Mostrar um mapa simples de São Paulo e localizar o bairro da escola.",
        "Apontar outros bairros conhecidos e perguntar se alguém já foi ou tem familiares lá.",
        "Mostrar imagens de paisagens de bairros diferentes da cidade.",
        "Pedir que desenhem ou apontem no mapa um bairro que gostariam de conhecer.",
        "Fechar com roda de conversa sobre a diversidade de bairros da cidade."
      ]
    },
    {
      "theme": "Sinais de trânsito e transporte público",
      "curriculumCode": "EF02G05",
      "description": "Identificação e compreensão de sinais de trânsito e do transporte público (cores, símbolos, placas, faixas de pedestres, assentos preferenciais).",
      "materials": [
        "imagens de placas de trânsito e de ônibus/metrô"
      ],
      "steps": [
        "Mostrar imagens de sinais de trânsito comuns, como semáforo, faixa de pedestre e placas.",
        "Conversar sobre o significado das cores e símbolos de cada sinal.",
        "Mostrar imagens de ônibus, trem e metrô, apontando os assentos preferenciais.",
        "Pedir que desenhem um sinal de trânsito ou meio de transporte com as cores certas.",
        "Fechar com roda de conversa sobre a importância de respeitar esses sinais."
      ]
    },
    {
      "theme": "Como chegar de ônibus, trem ou metrô",
      "curriculumCode": "EF02G06",
      "description": "Produção coletiva de texto informativo contendo roteiros de transporte público e o tempo de deslocamento.",
      "materials": [],
      "steps": [
        "Perguntar como cada aluno vai da casa até a escola (a pé, ônibus, carro).",
        "Conversar sobre trajetos que usam transporte público e quanto tempo demoram.",
        "Produzir coletivamente no quadro um texto simples descrevendo um roteiro de ônibus, trem ou metrô.",
        "Pedir que copiem o texto produzido no caderno.",
        "Fechar comentando a importância do transporte público na cidade."
      ]
    },
    {
      "theme": "As paisagens que vemos no caminho",
      "curriculumCode": "EF02G07",
      "description": "Identificação de diferenças e semelhanças nas paisagens dos lugares de vivência, representando por meio de desenhos.",
      "materials": [
        "lápis de cor"
      ],
      "steps": [
        "Perguntar o que os alunos veem no caminho de casa até a escola.",
        "Conversar sobre semelhanças e diferenças entre os caminhos de cada um.",
        "Pedir que descrevam oralmente uma paisagem marcante do trajeto.",
        "Pedir que desenhem essa paisagem no caderno.",
        "Fechar comparando os desenhos e destacando elementos comuns e diferentes."
      ]
    },
    {
      "theme": "Desenhando croquis do bairro",
      "curriculumCode": "EF02G08",
      "description": "Representação de locais de vivência por meio de croquis, observando objetos em diferentes posições.",
      "materials": [
        "papel",
        "lápis"
      ],
      "steps": [
        "Explicar de forma simples o que é um croqui, um desenho visto de cima, como um mapa simples.",
        "Levar a turma pro pátio ou usar a sala de exemplo pra observar objetos em diferentes posições.",
        "Pedir que desenhem um croqui simples de um lugar conhecido, como a rua de casa ou a escola.",
        "Circular pela sala ajudando a posicionar os elementos corretamente no desenho.",
        "Fechar mostrando alguns croquis pra turma e comentando os detalhes observados."
      ]
    },
    {
      "theme": "Onde fica? Frente, atrás, direita, esquerda",
      "curriculumCode": "EF02G09",
      "description": "Aplicação lúdica de princípios de localização e posição de objetos (frente e atrás, esquerda e direita, em cima e embaixo).",
      "materials": [],
      "steps": [
        "Brincar de dar comandos de posição com o corpo, como um passo à frente, à direita, atrás.",
        "Fazer um jogo em duplas em que um aluno guia o outro usando frente, atrás, direita e esquerda.",
        "Usar objetos da sala pra perguntar onde estão em relação a outro (em cima, embaixo, do lado).",
        "Pedir que desenhem um objeto na frente e outro atrás de algo no caderno.",
        "Fechar reforçando os termos de posição aprendidos na brincadeira."
      ]
    },
    {
      "theme": "Desenhando com proporção e legenda",
      "curriculumCode": "EF02G10",
      "description": "Representação de objetos do cotidiano quanto a tamanho, forma, textura e cor, iniciando a noção de proporção e legenda.",
      "materials": [
        "lápis de cor ou giz de cera"
      ],
      "steps": [
        "Mostrar um objeto do cotidiano e observar seu tamanho, forma, textura e cor com a turma.",
        "Explicar de forma simples a ideia de desenhar do tamanho certo, comparando dois objetos.",
        "Pedir que desenhem dois objetos diferentes respeitando qual é maior e qual é menor.",
        "Ensinar a fazer uma legenda simples explicando o que cada desenho representa.",
        "Fechar mostrando alguns desenhos e comentando as proporções e legendas."
      ]
    },
    {
      "theme": "O caminho de casa até a escola",
      "curriculumCode": "EF02G11",
      "description": "Identificação e registro dos percursos diários por meio de percepções sensoriais (cheiros, texturas, formas, temperatura).",
      "materials": [],
      "steps": [
        "Pedir que fechem os olhos e lembrem dos cheiros, sons e coisas que veem no caminho de casa até a escola.",
        "Conversar em roda sobre essas percepções sensoriais do trajeto.",
        "Perguntar sobre a temperatura e as texturas percebidas no caminho, como calçada, grama ou muro.",
        "Pedir que registrem no caderno, com desenho ou palavras, essas percepções.",
        "Fechar comparando os registros da turma sobre os diferentes caminhos."
      ]
    },
    {
      "theme": "Cuidando das paisagens naturais",
      "curriculumCode": "EF02G12",
      "description": "Reconhecimento das características das paisagens do ambiente em que vive, identificando a ação humana na preservação e degradação.",
      "materials": [],
      "steps": [
        "Levar a turma pra observar uma área verde da escola ou dos arredores, como praça, jardim ou árvore.",
        "Conversar sobre o que veem de natureza e o que veem de construído pelo ser humano.",
        "Perguntar sobre atitudes que ajudam a cuidar ou que atrapalham essas paisagens.",
        "Pedir que desenhem a paisagem observada, mostrando o que é natural e o que é humano.",
        "Fechar com roda de conversa sobre atitudes de preservação que a turma pode ter."
      ]
    },
    {
      "theme": "As plantas mudam com as estações do ano",
      "curriculumCode": "EF02G13",
      "description": "Identificação das mudanças que ocorrem em plantas, árvores e jardins conforme as estações do ano.",
      "materials": [
        "imagens de árvores em estações diferentes"
      ],
      "steps": [
        "Observar uma árvore ou planta do pátio da escola e descrever como ela está agora.",
        "Mostrar imagens da mesma espécie de árvore em estações diferentes do ano.",
        "Conversar sobre as mudanças que ocorrem nas plantas ao longo do ano, como folhas caindo e flores.",
        "Pedir que desenhem uma árvore em duas estações diferentes.",
        "Fechar relacionando as mudanças das plantas com as estações do ano."
      ]
    },
    {
      "theme": "Pesquisando com entrevistas e fotografias",
      "curriculumCode": "EF02G14",
      "description": "Organização de informações obtidas em diferentes fontes (entrevistas, trabalho de campo, fotografias, mapas, tabelas).",
      "materials": [
        "foto trazida de casa (se possível)"
      ],
      "steps": [
        "Explicar de forma simples o que é uma entrevista e como fazer perguntas.",
        "Pedir que entrevistem um familiar em casa sobre um tema combinado, como o bairro antigamente.",
        "Pedir que tragam uma foto ou façam um desenho relacionado à entrevista.",
        "Organizar as informações trazidas em um mural ou lista no quadro.",
        "Fechar com roda de apresentação das descobertas de cada aluno."
      ]
    },
    {
      "theme": "O que fazemos de dia e de noite",
      "curriculumCode": "EF02G15",
      "description": "Relação entre o dia e a noite e diferentes tipos de atividades sociais (horário escolar, sono, brincar).",
      "materials": [
        "imagens de atividades do dia e da noite"
      ],
      "steps": [
        "Perguntar o que cada um costuma fazer de dia e o que faz de noite.",
        "Mostrar imagens de atividades e classificar juntos como dia ou noite.",
        "Conversar sobre horários da rotina, como hora de dormir e hora de estudar.",
        "Pedir que desenhem uma atividade que fazem de dia e outra de noite.",
        "Fechar com roda de conversa sobre a importância de cada momento da rotina."
      ]
    },
    {
      "theme": "De onde vêm os materiais das construções",
      "curriculumCode": "EF02G16",
      "description": "Identificação dos recursos da natureza (madeira, areia, argila, brita) usados na construção de moradias, ruas e edifícios.",
      "materials": [
        "amostras ou imagens de pedra, areia, madeira e argila"
      ],
      "steps": [
        "Perguntar do que são feitas as casas, ruas e prédios que conhecem.",
        "Mostrar exemplos ou imagens de materiais como madeira, areia, argila e brita.",
        "Conversar sobre de onde vêm esses materiais, da natureza, antes de virarem construção.",
        "Pedir que desenhem uma construção e apontem os materiais usados nela.",
        "Fechar com roda de conversa sobre como a natureza fornece materiais para construir."
      ]
    },
    {
      "theme": "Desenhando de cima: o primeiro passo para ler mapas",
      "curriculumCode": "EF02G07",
      "description": "Exploração de diferentes perspectivas de observação (de cima, de lado) por meio de desenhos, como preparação para compreender mapas.",
      "materials": [
        "Papel e lápis para desenhar"
      ],
      "steps": [
        "Organizar a turma em duplas no pátio: um aluno se deita e o outro desenha seu contorno visto de cima.",
        "Escolher um objeto da sala e desenhá-lo visto de cima e visto de lado, comparando as duas formas.",
        "Perguntar por que um mapa é sempre desenhado como se estivéssemos vendo de cima.",
        "Fazer o desenho, visto de cima, de um objeto simples da sala (a mesa do professor, por exemplo)."
      ]
    }
  ],
  "historia": [
    {
      "theme": "Brincadeiras de ontem e de hoje",
      "curriculumCode": "EF02H01",
      "description": "Compreensão de jogos e brincadeiras em suas variações de significado no tempo e no espaço.",
      "materials": [
        "giz",
        "lousa",
        "papel",
        "lápis de cor"
      ],
      "steps": [
        "Professora pergunta quais brincadeiras os alunos conhecem hoje e anota na lousa.",
        "Professora pergunta quais brincadeiras os pais e avós contam que brincavam quando eram crianças.",
        "Em roda, a turma compara as brincadeiras de antes e de agora, apontando o que mudou e o que continua igual.",
        "Professora pede que cada aluno desenhe uma brincadeira de hoje e uma que os avós brincavam.",
        "Professora recolhe os desenhos e fecha a conversa retomando as principais diferenças encontradas."
      ]
    },
    {
      "theme": "Nosso repertório de brincadeiras",
      "curriculumCode": "EF02H02",
      "description": "Apresentação e apreciação de jogos e brincadeiras do repertório dos alunos e dos colegas, valorizando suas vivências.",
      "materials": [
        "giz",
        "lousa"
      ],
      "steps": [
        "Professora pede que cada aluno pense em uma brincadeira que gosta de brincar em casa ou na rua.",
        "Em roda, cada criança apresenta sua brincadeira e explica rapidamente como se joga.",
        "Turma escolhe, com ajuda da professora, duas ou três brincadeiras apresentadas para experimentar.",
        "Professora leva a turma ao pátio para brincar das brincadeiras escolhidas.",
        "De volta à sala, professora pergunta o que acharam e anota na lousa o repertório de brincadeiras da turma."
      ]
    },
    {
      "theme": "Brincadeiras de outras épocas e lugares",
      "curriculumCode": "EF02H03",
      "description": "Identificação de semelhanças e diferenças entre jogos e brincadeiras vivenciados em diferentes épocas e lugares.",
      "materials": [
        "giz",
        "lousa",
        "papel",
        "lápis de cor"
      ],
      "steps": [
        "Professora apresenta oralmente duas ou três brincadeiras de outras épocas ou lugares, como amarelinha, pião e cinco marias.",
        "Turma compara essas brincadeiras com as que já conhece, listando parecenças e diferenças na lousa.",
        "Professora leva a turma ao pátio para experimentar uma dessas brincadeiras.",
        "De volta à sala, alunos desenham a brincadeira de que mais gostaram.",
        "Professora fecha com roda de conversa sobre o que aprenderam sobre essas brincadeiras."
      ]
    },
    {
      "theme": "Brincadeira é para todo mundo",
      "curriculumCode": "EF02H04",
      "description": "Criação de critérios para classificar jogos e brincadeiras, desconstruindo a ideia de brincadeira 'de menino' ou 'de menina'.",
      "materials": [
        "giz",
        "lousa"
      ],
      "steps": [
        "Professora pergunta se existe brincadeira 'só de menino' ou 'só de menina' e ouve as respostas da turma.",
        "Turma lista na lousa as brincadeiras citadas pelos alunos.",
        "Em roda, professora propõe pensar juntos quem pode brincar de cada uma dessas brincadeiras.",
        "Turma cria com a professora um novo jeito de organizar as brincadeiras, como 'de correr' ou 'com bola', no lugar de separar por menino e menina.",
        "Professora propõe que todos brinquem juntos de uma das brincadeiras no pátio."
      ]
    },
    {
      "theme": "Jogos e brincadeiras dos povos indígenas",
      "curriculumCode": "EF02H05",
      "description": "Conhecimento de jogos e brincadeiras praticados por diferentes povos indígenas.",
      "materials": [
        "giz",
        "lousa",
        "papel",
        "lápis de cor",
        "corda"
      ],
      "steps": [
        "Professora conta para a turma sobre um jogo ou brincadeira de um povo indígena, como cabo de guerra ou corrida com tora.",
        "Turma conversa sobre como essa brincadeira é jogada e o que ela pode ensinar.",
        "Professora leva a turma ao pátio para experimentar uma versão adaptada da brincadeira.",
        "De volta à sala, alunos desenham ou contam o que mais gostaram na brincadeira.",
        "Professora fecha reforçando que essa brincadeira faz parte da cultura de povos indígenas."
      ]
    },
    {
      "theme": "Jogos e brincadeiras de matriz africana",
      "curriculumCode": "EF02H06",
      "description": "Conhecimento de jogos e brincadeiras praticados por povos de diferentes matrizes africanas e afro-brasileiras.",
      "materials": [
        "giz",
        "lousa",
        "pedrinhas ou tampinhas"
      ],
      "steps": [
        "Professora apresenta uma brincadeira de matriz africana ou afro-brasileira, como uma roda cantada ou jogo de tabuleiro simples com pedrinhas.",
        "Turma escuta a explicação e repete os movimentos ou a música junto com a professora.",
        "Professora organiza a turma em roda para brincar ou cantar a brincadeira apresentada.",
        "Turma conversa sobre a origem da brincadeira e como se sentiram brincando.",
        "Professora encerra registrando na lousa o nome da brincadeira aprendida."
      ]
    },
    {
      "theme": "Jogo Mancala: um jogo de origem africana",
      "curriculumCode": "EF02H06",
      "description": "Vivência de um jogo de estratégia de origem africana milenar (Mancala), reconhecendo sua importância entre os jogos de matriz africana.",
      "materials": [
        "Tabuleiro de Mancala (ou caixa de ovos e sementes/tampinhas, como alternativa)"
      ],
      "steps": [
        "Explicar que o Mancala é uma família de jogos muito antiga, de origem africana, jogada há milhares de anos.",
        "Se não houver tabuleiro, montar um com uma caixa de ovos e usar sementes, feijões ou tampinhas.",
        "Ensinar a regra básica: cada jogador distribui as sementes pelos buracos, tentando juntar mais sementes que o adversário.",
        "Jogar em duplas e depois conversar sobre a estratégia usada."
      ]
    },
    {
      "theme": "Jogos e brincadeiras de imigrantes",
      "curriculumCode": "EF02H07",
      "description": "Conhecimento de jogos e brincadeiras praticados por diferentes grupos de imigrantes.",
      "materials": [
        "giz",
        "lousa",
        "bolinhas ou objetos redondos"
      ],
      "steps": [
        "Professora apresenta uma brincadeira trazida por imigrantes, contando de que país ou povo ela veio.",
        "Turma conversa sobre esse lugar, ajudando a localizar de onde veio a brincadeira.",
        "Professora leva a turma ao pátio para experimentar a brincadeira apresentada.",
        "Em roda, alunos comentam o que acharam parecido ou diferente das brincadeiras que já conhecem.",
        "Professora fecha registrando na lousa o nome da brincadeira e de onde ela veio."
      ]
    },
    {
      "theme": "Para que servem as regras dos jogos",
      "curriculumCode": "EF02H08",
      "description": "Identificação da função das regras em determinados jogos e brincadeiras.",
      "materials": [
        "giz",
        "lousa",
        "bola"
      ],
      "steps": [
        "Professora propõe um jogo simples sem explicar nenhuma regra e deixa a turma tentar brincar.",
        "Turma percebe a confusão que aparece e professora pergunta o que está atrapalhando o jogo.",
        "Juntos, turma e professora combinam as regras do jogo e experimentam brincar novamente.",
        "Professora pergunta o que mudou depois de combinar as regras.",
        "Em roda, turma conversa sobre para que servem as regras nos jogos."
      ]
    },
    {
      "theme": "Combinando e respeitando as regras",
      "curriculumCode": "EF02H09",
      "description": "Reconhecimento da importância de combinar e respeitar as regras de jogos e brincadeiras na escola e onde vivem.",
      "materials": [
        "giz",
        "lousa",
        "bola ou corda"
      ],
      "steps": [
        "Professora relembra com a turma uma brincadeira já conhecida e pergunta quais são suas regras.",
        "Turma combina junto as regras para brincar naquele dia, enquanto a professora anota na lousa.",
        "Professora leva a turma ao pátio para brincar seguindo as regras combinadas.",
        "Durante a brincadeira, professora observa e chama atenção quando alguma regra não é respeitada.",
        "De volta à sala, turma conversa sobre por que é importante respeitar as regras combinadas."
      ]
    },
    {
      "theme": "Pesquisando brincadeiras da família",
      "curriculumCode": "EF02H10",
      "description": "Pesquisa e apreciação de jogos e brincadeiras, podendo envolver entrevistas com familiares.",
      "materials": [
        "papel",
        "lápis"
      ],
      "steps": [
        "Professora explica que a turma vai pesquisar uma brincadeira que os familiares brincavam quando eram crianças.",
        "Professora ajuda a turma a pensar em perguntas simples para fazer em casa, como qual é a brincadeira e como se joga.",
        "Professora entrega um bilhete simples de registro para os alunos levarem para casa e perguntarem aos familiares.",
        "Na aula seguinte, cada aluno conta para a turma o que descobriu com a família.",
        "Professora anota na lousa as brincadeiras pesquisadas pela turma."
      ]
    },
    {
      "theme": "Quem pode brincar dessa brincadeira?",
      "curriculumCode": "EF02H11",
      "description": "Reconhecimento se determinado jogo ou brincadeira pode ser vivenciado por qualquer criança.",
      "materials": [
        "giz",
        "lousa"
      ],
      "steps": [
        "Professora apresenta uma brincadeira e pergunta se todas as crianças da turma poderiam brincar dela.",
        "Turma conversa sobre o que seria preciso mudar para que todos pudessem participar.",
        "Juntos, turma e professora adaptam a brincadeira para incluir todo mundo.",
        "Professora leva a turma ao pátio para experimentar a brincadeira já adaptada.",
        "Em roda, turma conversa sobre como se sentiram brincando todos juntos."
      ]
    },
    {
      "theme": "Valorizando as diferenças",
      "curriculumCode": "EF02H12",
      "description": "Valorização das diferenças em uma sociedade plural, a partir da diversidade de jogos e brincadeiras conhecidos.",
      "materials": [
        "giz",
        "lousa"
      ],
      "steps": [
        "Professora relembra com a turma as diferentes brincadeiras conhecidas ao longo do tema, como as indígenas, africanas e de imigrantes.",
        "Turma lista na lousa as brincadeiras de diferentes origens que já conheceram.",
        "Professora propõe que cada aluno escolha uma brincadeira diferente da sua para brincar naquele dia.",
        "Turma vai ao pátio brincar em pequenos grupos das brincadeiras escolhidas.",
        "Professora fecha com roda de conversa sobre a importância de valorizar brincadeiras diferentes das nossas."
      ]
    },
    {
      "theme": "Investigando um brinquedo como objeto de cultura",
      "curriculumCode": "EF02H03",
      "description": "Investigação de um brinquedo como objeto de cultura material, levantando informações sobre seus materiais, construção, uso, decoração e valor, para descobrir sua história.",
      "materials": [
        "Um brinquedo artesanal (atual ou antigo) trazido pela turma ou pelo professor"
      ],
      "steps": [
        "Levar um brinquedo artesanal (de qualquer época ou cultura) para a roda.",
        "Fazer perguntas de investigação: do que é feito? Como foi construído? Para que serve? É decorado? Tem algum valor especial?",
        "Registrar as respostas em um quadro simples com essas colunas.",
        "Comparar o brinquedo investigado com os brinquedos industrializados que a turma costuma usar hoje."
      ]
    },
    {
      "theme": "Dominó em Libras: aprendendo sinais brincando",
      "curriculumCode": "EF02H12",
      "description": "Vivência de um jogo de dominó com sinais de Libras (Língua Brasileira de Sinais), valorizando a diversidade linguística e incluindo estudantes surdos ou falantes de Libras.",
      "materials": [
        "Jogo de dominó com imagens e sinais de Libras (ou cartas feitas pela turma com desenhos de animais/frutas e o sinal correspondente)"
      ],
      "steps": [
        "Apresentar à turma que Libras é uma língua, com sinais para cada palavra, usada por pessoas surdas no Brasil.",
        "Jogar o dominó juntando as peças que têm a mesma figura ou o mesmo sinal correspondente.",
        "Ensinar alguns sinais simples (como os de animais) para toda a turma praticar.",
        "Conversar sobre a importância de incluir todo mundo, inclusive quem se comunica em Libras."
      ]
    }
  ]
};

export const READING_BANK: ReadingBankEntry[] = [
  {
    "theme": "A Lebre e a Tartaruga (Fábula de Esopo - releitura)",
    "genre": "fábula",
    "description": "Leitura em voz alta da fábula 'A Lebre e a Tartaruga' seguida de roda de conversa sobre perseverança e não subestimar os outros.",
    "text": "Era uma vez uma lebre muito rápida que vivia se gabando da sua velocidade. Um dia, encontrou uma tartaruga andando devagarinho pelo caminho e começou a rir dela.\n— Você é tão lenta! Aposto que eu chego lá na árvore grande antes de você nem sair do lugar! — disse a lebre, toda convencida.\nA tartaruga, com calma, respondeu:\n— Pode ser que eu seja devagar, mas vamos ver quem chega primeiro. Topo a aposta!\nTodos os bichos da floresta vieram assistir à corrida. Quando o sinal foi dado, a lebre saiu correndo tão depressa que logo sumiu de vista. A tartaruga começou a andar, um passo de cada vez, sem parar.\nLá na frente, a lebre olhou para trás e não viu ninguém. \"Tenho tempo de sobra\", pensou ela, e decidiu deitar embaixo de uma árvore para descansar um pouquinho. O sol estava quentinho, e sem perceber, a lebre pegou no sono.\nEnquanto isso, a tartaruga continuava andando, devagar, mas sem desistir nem por um segundo. Ela passou bem pertinho da lebre dormindo e seguiu seu caminho até a árvore grande.\nQuando a lebre acordou, assustada, correu o mais rápido que pôde, mas já era tarde: a tartaruga tinha acabado de cruzar a linha de chegada, e todos os bichos aplaudiam!\nA lebre ficou sem graça, mas aprendeu a lição: não adianta ser o mais rápido se a gente não se esforça até o fim.",
    "steps": [
      "Perguntar à turma quem elas acham que vence uma corrida entre um bicho rápido e um bicho devagar, e por quê.",
      "Ler a fábula em voz alta, com entonação diferente para cada personagem.",
      "Fazer uma roda de conversa sobre o que significa não desistir, pedindo exemplos da vida dos alunos."
    ]
  },
  {
    "theme": "O Leão e o Ratinho (Fábula de Esopo - releitura)",
    "genre": "fábula",
    "description": "Leitura em voz alta da fábula 'O Leão e o Ratinho' seguida de roda de conversa sobre gentileza e ajuda mútua.",
    "text": "Um dia, um ratinho pequenininho estava passeando pela savana quando, sem querer, pisou bem em cima da pata de um leão que estava cochilando embaixo de uma árvore. O leão acordou de um pulo, furioso, e prendeu o ratinho com sua pata enorme.\n— Como você ousa me acordar? Vou te comer agora mesmo! — rugiu o leão.\nO ratinho, tremendo de medo, implorou:\n— Por favor, me deixe ir! Um dia eu posso te ajudar, prometo!\nO leão achou aquilo tão engraçado — um ratinho tão pequeno ajudar o rei da savana! — que resolveu soltá-lo, rindo.\nPassaram-se algumas semanas. Um caçador armou uma rede escondida entre as árvores, e o leão, sem perceber, ficou preso nela. Quanto mais se debatia, mais a rede apertava. Ele rugiu bem alto, chamando por socorro.\nFoi então que o ratinho, que estava por perto, reconheceu o rugido e correu até lá. Com seus dentinhos afiados, começou a roer as cordas da rede, uma por uma, até que o leão conseguiu se soltar.\n— Você tinha razão — disse o leão, admirado. — Mesmo pequeno, você foi capaz de me ajudar.\nOs dois ficaram amigos a partir daquele dia, e o leão aprendeu que ninguém é pequeno demais para fazer a diferença.",
    "steps": [
      "Mostrar uma imagem de um leão e perguntar se um ratinho poderia ajudar um animal tão grande.",
      "Ler a fábula em voz alta, destacando a voz forte do leão e a vozinha do rato.",
      "Conversar sobre como gestos pequenos de gentileza podem fazer uma grande diferença."
    ]
  },
  {
    "theme": "A Cigarra e a Formiga (Fábula de La Fontaine - releitura)",
    "genre": "fábula",
    "description": "Leitura em voz alta da fábula 'A Cigarra e a Formiga' seguida de roda de conversa sobre organização e cooperação.",
    "text": "Durante todo o verão, a cigarra cantava e dançava de galho em galho, aproveitando o sol e a música. Enquanto isso, a formiga trabalhava sem parar, carregando grãozinhos de comida para dentro do seu formigueiro, guardando tudo para mais tarde.\n— Vem cantar comigo! — chamava a cigarra. — Por que trabalhar tanto num dia tão bonito?\n— Estou guardando comida para o inverno — respondia a formiga. — Você devia fazer o mesmo.\nMas a cigarra só ria e continuava cantando, achando que o verão duraria para sempre.\nQuando o inverno chegou, trazendo vento frio e chuva, a cigarra percebeu que não tinha nada para comer. Sua barriga roncava, e ela não sabia mais onde encontrar comida, porque as plantas tinham murchado.\nCom muita vergonha, foi bater na porta do formigueiro.\n— Formiga, será que você poderia me emprestar um pouquinho de comida? Estou com muita fome.\nA formiga, que não era do tipo de deixar ninguém passar necessidade, abriu a porta e disse:\n— Pode entrar e se aquecer. Vamos dividir o que eu guardei, mas da próxima vez, que tal cantarmos juntas enquanto trabalhamos?\nA cigarra aceitou, agradecida, e entendeu que era possível se divertir e também se preparar para os dias difíceis.",
    "steps": [
      "Perguntar o que a turma prefere: brincar o dia todo ou se organizar para depois.",
      "Ler a fábula em voz alta, em roda.",
      "Discutir como cigarra e formiga aprenderam a dividir tarefas e se ajudar."
    ]
  },
  {
    "theme": "O Vento Norte e o Sol (Fábula de Esopo - releitura)",
    "genre": "fábula",
    "description": "Leitura em voz alta da fábula 'O Vento Norte e o Sol' seguida de roda de conversa sobre gentileza como forma de resolver conflitos.",
    "text": "O Vento Norte e o Sol viviam discutindo sobre quem era mais forte. Um dia, avistaram um viajante caminhando pela estrada, usando um casaco quentinho, e resolveram fazer um desafio:\n— Vamos ver quem consegue fazer aquele viajante tirar o casaco primeiro — disse o Sol. — Esse será o mais forte dos dois.\nO Vento Norte começou primeiro. Soprou com toda a sua força, fazendo as árvores balançarem e a poeira voar pelo ar. Mas quanto mais forte ele soprava, mais o viajante apertava o casaco contra o corpo, com medo de sentir frio.\n— Não está funcionando — resmungou o Vento Norte, cansado de tanto soprar.\nFoi a vez do Sol. Ele começou a brilhar, devagarzinho, espalhando um calor suave sobre o caminho. Aos poucos, o viajante foi sentindo mais e mais calor, até que, sorrindo, tirou o casaco e o carregou debaixo do braço.\n— Viu só? — disse o Sol, gentilmente. — Às vezes a gentileza consegue o que a força não consegue.\nO Vento Norte ficou pensando bastante sobre aquilo, e desde esse dia, os dois aprenderam a admirar as diferentes formas de resolver as coisas.",
    "steps": [
      "Perguntar à turma se é mais fácil convencer alguém com força ou com gentileza.",
      "Ler o texto em voz alta, fazendo a turma imitar o som do vento e o brilho do sol com gestos.",
      "Fazer uma roda de conversa sobre formas gentis de resolver desentendimentos."
    ]
  },
  {
    "theme": "O Corvo e a Raposa (Fábula de La Fontaine - releitura)",
    "genre": "fábula",
    "description": "Leitura em voz alta da fábula 'O Corvo e a Raposa' seguida de roda de conversa sobre elogios sinceros e bajulação.",
    "text": "Um corvo encontrou um pedaço de queijo bem grande e voou até o alto de uma árvore para comê-lo com calma, segurando-o com o bico.\nUma raposa esperta, que passava por ali com muita fome, viu aquilo e teve uma ideia. Parou embaixo da árvore e disse, com a voz mais doce que conseguiu:\n— Que corvo lindo! Suas penas brilham como a noite estrelada. Aposto que sua voz deve ser tão bonita quanto suas penas. Você poderia cantar um pouquinho para mim?\nO corvo, todo orgulhoso com os elogios, quis mostrar que também sabia cantar. Abriu bem o bico para soltar um grande \"Croaa!\" — e o queijo caiu direto no chão, bem na frente da raposa.\nA raposa pegou o queijo rapidinho e, antes de sair correndo, disse:\n— Muito obrigada pelo lanche! Só um conselho: cuidado com quem só elogia para conseguir alguma coisa.\nO corvo ficou ali, sem o queijo, mas pensando bastante sobre o que tinha acontecido. Da próxima vez, prometeu a si mesmo, ia pensar duas vezes antes de acreditar em elogios exagerados demais.",
    "steps": [
      "Perguntar o que a turma faria se alguém só a elogiasse para conseguir algo.",
      "Ler a fábula em voz alta.",
      "Conversar sobre a diferença entre elogio sincero e bajulação."
    ]
  },
  {
    "theme": "Os Três Porquinhos (Conto popular - releitura)",
    "genre": "conto",
    "description": "Leitura em voz alta do conto 'Os Três Porquinhos' seguida de roda de conversa sobre capricho e responsabilidade.",
    "text": "Três irmãos porquinhos resolveram construir suas próprias casas para morar sozinhos. O primeiro porquinho, com preguiça de trabalhar muito, construiu sua casa de palha, bem rapidinho. O segundo porquinho fez a sua de madeira, um pouco mais forte, mas também depressa. Já o terceiro porquinho trabalhou dias e dias, tijolo por tijolo, até construir uma casa de tijolos, bem firme e resistente.\nUm dia, um lobo esfomeado apareceu na floresta e foi até a casa de palha.\n— Porquinho, porquinho, deixe-me entrar! — pediu o lobo.\n— De jeito nenhum! — respondeu o porquinho, escondido.\nEntão o lobo soprou com toda a força, e a casa de palha voou pelos ares! O porquinho saiu correndo para a casa do irmão, feita de madeira. O lobo foi atrás e soprou de novo, e a casa de madeira também caiu.\nOs dois porquinhos correram, apavorados, até a casa de tijolos do irmão mais caprichoso. O lobo soprou, soprou, soprou com toda a força que tinha, mas a casa de tijolos nem tremeu!\nFurioso, o lobo tentou entrar pela chaminé, mas lá dentro havia uma fogueira acesa. Sentindo o calor, o lobo deu um pulo, saiu correndo pela floresta e nunca mais voltou para incomodar os três porquinhos.\nOs irmãos aprenderam que capricho e trabalho duro valem a pena, e desde então moraram todos juntos na casa de tijolos, bem seguros e felizes.",
    "steps": [
      "Perguntar à turma qual material elas achariam mais forte para construir uma casa.",
      "Ler a história em voz alta, fazendo a voz do lobo soprando forte.",
      "Roda de conversa sobre a importância de fazer as coisas com capricho, mesmo que dê mais trabalho."
    ]
  },
  {
    "theme": "O Patinho Feio (Conto de Hans Christian Andersen - releitura)",
    "genre": "conto",
    "description": "Leitura em voz alta do conto 'O Patinho Feio' seguida de roda de conversa sobre respeito às diferenças e autoaceitação.",
    "text": "Numa fazenda tranquila, uma pata chocou seus ovos até que, um por um, os patinhos foram nascendo, fofinhos e amarelinhos. Mas o último ovo era diferente: quando enfim rachou, saiu de dentro dele um patinho cinzento, grandalhão e desajeitado, muito diferente dos seus irmãos.\nOs outros patos do quintal riam dele e o chamavam de feio. Até seus próprios irmãos às vezes o deixavam de lado nas brincadeiras. Triste e sozinho, o patinho decidiu partir dali, em busca de um lugar onde pudesse ser aceito do jeito que era.\nAndou por campos, atravessou lagos gelados no inverno frio, e enfrentou muitas dificuldades sozinho. Mas nunca desistiu de procurar um lugar para chamar de lar.\nQuando a primavera chegou, trazendo flores e sol quentinho, o patinho avistou um lago onde nadavam aves lindas, de penas brancas e pescoço longo: eram cisnes. Com o coração batendo forte, ele se aproximou, esperando ser afastado como sempre.\nSó que, ao se olhar refletido na água, teve a maior surpresa: ele também tinha se tornado um cisne! Durante toda aquela jornada, ele havia crescido e se transformado, e finalmente encontrou outros como ele.\nOs cisnes o receberam de asas abertas, e o patinho — agora um lindo cisne — entendeu que às vezes só precisamos de tempo para descobrir o nosso verdadeiro lugar no mundo.",
    "steps": [
      "Perguntar se já se sentiram diferentes de todo mundo em algum momento.",
      "Ler a história em voz alta.",
      "Conversa em roda sobre respeito às diferenças e sobre como cada um tem seu próprio tempo de crescer."
    ]
  },
  {
    "theme": "Cachinhos Dourados e os Três Ursos (Conto popular inglês - releitura)",
    "genre": "conto",
    "description": "Leitura em voz alta do conto 'Cachinhos Dourados e os Três Ursos' seguida de roda de conversa sobre respeito ao espaço alheio.",
    "text": "Uma menina chamada Cachinhos Dourados, por causa dos seus cabelos cacheados e loiros, estava passeando pela floresta quando avistou uma casinha bem aconchegante. Como a porta estava aberta, e ninguém respondeu quando ela chamou, resolveu entrar para dar uma espiadinha.\nNa mesa da cozinha havia três tigelas de mingau: uma grande, uma média e uma pequena. Cachinhos Dourados provou a primeira — estava quente demais. Provou a segunda — estava fria demais. Mas a terceira estava no ponto certinho, e ela comeu tudo!\nDepois, foi até a sala, onde havia três cadeiras. A grande era dura demais, a média era mole demais, mas quando sentou na pequena, a cadeira quebrou!\nCansada de tanto passear, subiu as escadas e encontrou três camas. Deitou na grande, mas era dura demais. Deitou na média, mas era mole demais. Na pequena, se sentiu tão confortável que pegou no sono na mesma hora.\nFoi quando a família de ursos que morava ali voltou para casa: o Papai Urso, a Mamãe Ursa e o Ursinho Bebê. Perceberam que alguém tinha mexido em tudo, e quando chegaram ao quarto, encontraram Cachinhos Dourados dormindo na caminha do ursinho!\nAssustada com o barulho dos ursos, ela acordou de um pulo, pulou pela janela e correu para casa o mais rápido que pôde, prometendo a si mesma que, da próxima vez, ia pedir licença antes de entrar na casa dos outros.",
    "steps": [
      "Perguntar à turma o que elas fariam se entrassem na casa de alguém sem querer.",
      "Ler a história em voz alta, com vozes diferentes para os três ursos.",
      "Conversar sobre respeito ao espaço e às coisas dos outros."
    ]
  },
  {
    "theme": "A Gata Borralheira (Conto de Charles Perrault - releitura)",
    "genre": "conto",
    "description": "Leitura em voz alta do conto 'A Gata Borralheira' seguida de roda de conversa sobre bondade e gentileza.",
    "text": "Era uma vez uma menina gentil que morava com a madrasta e as duas irmãs de criação. Como ela sempre ficava perto do fogão, cuidando das cinzas para esquentar a casa, a chamavam de Gata Borralheira. Enquanto as irmãs usavam vestidos bonitos, ela fazia toda a faxina da casa, sem nunca reclamar.\nUm dia, chegou um convite: o rei ia dar um grande baile no castelo, e todas as moças da cidade estavam convidadas. As irmãs se aprontaram, cheias de vaidade, mas disseram que Gata Borralheira não podia ir, porque não tinha um vestido digno de festa.\nTriste, sentada no quintal, ela viu uma luz brilhante aparecer: era sua fada madrinha!\n— Não se preocupe — disse a fada, com um sorriso. — Você também vai ao baile.\nCom um toque de varinha mágica, transformou uma abóbora em carruagem e o vestido simples da menina em um lindo vestido azul, com direito a sapatinhos de cristal.\n— Mas lembre-se: precisa voltar antes da meia-noite! — avisou a fada.\nNo baile, o príncipe ficou encantado com a moça misteriosa e dançou com ela a noite toda. Só que, quando o relógio bateu meia-noite, Gata Borralheira saiu correndo, e no caminho, perdeu um dos sapatinhos de cristal.\nO príncipe procurou por todo o reino a dona daquele sapatinho, até chegar à casa dela. O sapato coube perfeitinho em seu pé, e assim ele soube que tinha encontrado a moça gentil do baile. Os dois viveram muitas aventuras felizes juntos a partir daquele dia.",
    "steps": [
      "Perguntar o que a turma sabe sobre a história de Cinderela.",
      "Ler o texto em voz alta.",
      "Roda de conversa sobre bondade e gentileza, mesmo diante de situações difíceis."
    ]
  },
  {
    "theme": "Lenda do Saci-Pererê (Lenda do folclore brasileiro)",
    "genre": "lenda",
    "description": "Leitura em voz alta da lenda do Saci-Pererê seguida de roda de conversa sobre o folclore brasileiro.",
    "text": "Dizem que, no meio do mato, mora um menino travesso chamado Saci-Pererê. Ele tem uma perna só, fuma um cachimbo que nunca apaga e usa sempre um gorrinho vermelho na cabeça — um gorro mágico que lhe dá poderes especiais.\nO Saci adora pregar peças em quem passa pela floresta ou pelo sítio: esconde ferramentas, tranca portas, faz o leite azedar e embaralha os cabelos das pessoas enquanto dormem. Mas ele não é malvado — só gosta de brincadeira e de bagunçar um pouquinho a vida dos outros, sempre rindo daquele seu jeito zombeteiro.\nEle aparece do nada, geralmente em dias de vento forte, rodando dentro de pequenos redemoinhos de poeira. Se alguém conseguir pegar o gorrinho vermelho dele, o Saci fica preso e precisa fazer um pedido para poder ficar livre de novo — geralmente pede para voltar para o mato, onde se sente em casa.\nMuita gente do interior do Brasil conta histórias sobre encontros com o Saci: quem já viu, diz que ele pula em uma perna só de um jeito tão rápido que quase não dá tempo de enxergar direito.\nApesar das travessuras, o Saci-Pererê é um dos personagens mais queridos do nosso folclore, e nos lembra que a floresta brasileira está cheia de mistérios, histórias e personagens curiosos esperando para serem descobertos.",
    "steps": [
      "Perguntar se alguém já ouviu falar do Saci-Pererê.",
      "Ler a lenda em voz alta, mostrando ilustrações se houver.",
      "Conversar sobre outras lendas do folclore brasileiro que a turma conhece."
    ]
  },
  {
    "theme": "Lenda do Curupira (Lenda do folclore brasileiro)",
    "genre": "lenda",
    "description": "Leitura em voz alta da lenda do Curupira seguida de roda de conversa sobre cuidado com a natureza.",
    "text": "No meio da floresta mais densa, vive um protetor muito especial: o Curupira. Ele é pequeno, tem cabelos de fogo, vermelhos como brasa, e uma característica que confunde qualquer um — seus pés são virados para trás!\nPor causa disso, quando o Curupira caminha, suas pegadas parecem apontar para a direção contrária de onde ele realmente foi. Assim, quem tenta segui-lo pelas pegadas acaba se perdendo na mata, andando para o lado errado.\nO Curupira é o guardião de todos os animais e árvores da floresta. Quando percebe que um caçador está caçando mais bichos do que precisa, ou que alguém está cortando árvores sem necessidade, ele aparece para assustar a pessoa e afugentá-la dali, protegendo assim a natureza.\nConta-se que ele também sabe imitar sons de animais e vozes de pessoas para confundir quem quer fazer mal à floresta. Alguns dizem que, se a pessoa pedir desculpas de coração e prometer cuidar melhor da natureza, o Curupira perdoa e deixa o caminho livre outra vez.\nEssa lenda, contada há gerações pelos povos que vivem perto da floresta, nos ensina algo muito importante: a natureza precisa ser respeitada e cuidada, porque ela também tem seus próprios guardiões, prontos para defendê-la.",
    "steps": [
      "Perguntar à turma o que significa cuidar da natureza.",
      "Ler a lenda em voz alta.",
      "Roda de conversa sobre por que é importante proteger as florestas e os animais."
    ]
  },
  {
    "theme": "Lenda da Vitória-Régia (Lenda do folclore brasileiro)",
    "genre": "lenda",
    "description": "Leitura em voz alta da lenda da Vitória-Régia seguida de roda de conversa sobre lendas indígenas brasileiras.",
    "text": "Contam os povos indígenas da Amazônia que, há muito tempo, existia uma jovem chamada Naiá, que adorava observar o céu à noite. Ela ficava horas admirando a Lua, encantada com seu brilho prateado refletido no rio.\nSegundo as lendas de sua tribo, quem a Lua escolhesse levaria para viver com ela no céu, transformando a pessoa em uma estrela. Naiá sonhava em ser escolhida e passava as noites tentando alcançar o reflexo da Lua na água, mas nunca conseguia se aproximar o suficiente.\nUma noite, vendo o reflexo brilhante bem na superfície do rio, Naiá, na esperança de finalmente tocar a Lua, entrou nas águas escuras seguindo aquele brilho. As águas do rio a acolheram gentilmente.\nA Lua, tocada pelo desejo tão grande daquela jovem, decidiu transformá-la — não em uma estrela do céu, mas em uma estrela das águas: uma flor branca e perfumada, com pétalas macias, que só desabrocha à noite, quando a Lua aparece no céu, e se fecha ao amanhecer.\nEssa flor é a vitória-régia, uma das maiores flores aquáticas do mundo, com folhas redondas e enormes que flutuam nos rios da Amazônia. Até hoje, ela abre suas pétalas branquinhas todas as noites, como se ainda estivesse admirando a Lua que tanto amava.",
    "steps": [
      "Mostrar uma imagem da flor vitória-régia antes da leitura, se possível.",
      "Ler a lenda em voz alta.",
      "Conversar sobre lendas indígenas brasileiras e sua importância cultural."
    ]
  },
  {
    "theme": "Lenda do Boto Cor-de-Rosa (Lenda do folclore brasileiro)",
    "genre": "lenda",
    "description": "Leitura em voz alta da lenda do Boto Cor-de-Rosa seguida de roda de conversa sobre o folclore amazônico.",
    "text": "Nos rios da Amazônia, vivem golfinhos de água doce com uma cor bem diferente: rosa! Segundo uma lenda muito contada por lá, o boto cor-de-rosa tem um poder mágico especial.\nDiz a história que, durante as festas nas beiras dos rios, quando a lua está bem cheia e a música toca alta, o boto sai da água e se transforma em um rapaz elegante, sempre usando um chapéu branco para esconder o buraquinho que tem na cabeça — o único sinal de que, na verdade, ele é um boto encantado.\nNas festas, o rapaz misterioso dança a noite toda, encanta a todos com sua simpatia e, quando o sol está quase nascendo, desaparece sem deixar pistas, voltando correndo para o rio, onde mergulha e se transforma de volta em boto.\nNinguém nunca descobre quem ele realmente é, porque ao amanhecer, já não há mais rastro do rapaz — só os círculos na água do rio, por onde ele desapareceu.\nEssa lenda é contada pelos ribeirinhos há muitas gerações, e por isso, até hoje, quando um convidado misterioso aparece numa festa perto do rio e ninguém o conhece, alguns dizem, sorrindo, que talvez seja o boto que veio dançar mais uma vez.",
    "steps": [
      "Perguntar se a turma conhece algum animal que vive nos rios da Amazônia.",
      "Ler a lenda em voz alta.",
      "Roda de conversa sobre as lendas e mistérios da Amazônia."
    ]
  },
  {
    "theme": "Lenda da Iara (Lenda do folclore brasileiro)",
    "genre": "lenda",
    "description": "Leitura em voz alta da lenda da Iara seguida de roda de conversa sobre a importância de cuidar dos rios.",
    "text": "Nas águas calmas dos rios brasileiros, mora a Iara, uma figura encantada com cabelos longos e verdes como as plantas aquáticas, e uma voz tão doce que encanta qualquer um que a escute.\nContam os mais velhos que a Iara vive cantando entre as pedras e as folhagens do rio, e que sua canção é tão bonita que consegue atrair pescadores e viajantes curiosos até a beira da água.\nDiferente do que muitos pensam, a Iara não quer fazer mal a ninguém — ela apenas se sente sozinha e adora companhia para conversar e cantar. Diz a lenda que ela gosta muito de contar histórias sobre os peixes, as plantas e os segredos escondidos no fundo do rio.\nAlguns moradores das beiras dos rios dizem já ter ouvido sua canção ao entardecer, um som suave misturado com o barulho da água correndo. Quem tem respeito pela natureza e pelos rios, dizem eles, pode até receber a visita amigável da Iara, que aparece só por um instante, sorri, e depois mergulha de volta nas profundezas, deixando apenas círculos na água.\nEssa lenda nos lembra da importância de cuidar dos rios e das águas do Brasil, para que continuem limpos, cheios de vida e cheios de histórias para contar.",
    "steps": [
      "Perguntar à turma o que elas imaginam existir no fundo dos rios.",
      "Ler a lenda em voz alta.",
      "Conversar sobre a importância de cuidar dos rios e das águas."
    ]
  },
  {
    "theme": "O Passarinho que Tinha Medo de Voar",
    "genre": "história original",
    "description": "Leitura em voz alta de história original seguida de roda de conversa sobre coragem e superação do medo.",
    "text": "Num galho bem alto de uma árvore, vivia um passarinho chamado Bento, que tinha acabado de ganhar suas penas novas. Todos os seus irmãos já estavam voando de galho em galho, mas Bento ficava paradinho no ninho, com muito medo de cair.\n— Vai, Bento, é fácil! — chamavam os irmãos, voando ao redor dele.\nMas Bento olhava para baixo, via a distância até o chão, e seu coraçãozinho disparava de medo. \"E se eu cair? E se eu não souber voar direito?\", pensava ele, se encolhendo cada vez mais no ninho.\nUm dia, sua mãe pousou ao lado dele e disse, com carinho:\n— Sabe, Bento, todo passarinho tem medo na primeira vez. Eu também tive. Mas você não precisa voar longe logo de cara. Que tal só abrir as asas e sentir o vento primeiro?\nBento respirou fundo e abriu suas asinhas, sentindo o vento passar por entre as penas. Aquilo já não parecia tão assustador. Aos poucos, foi se animando, até que deu um pequeno pulo e, sem perceber, estava voando — só um pouquinho, de um galho para o outro, bem pertinho.\n— Eu consegui! — gritou, todo empolgado.\nDali em diante, Bento foi voando cada vez mais longe, sempre lembrando que não tinha problema começar devagar. Afinal, coragem não é não sentir medo — é tentar mesmo com um friozinho na barriga.",
    "steps": [
      "Perguntar se a turma já teve medo de tentar algo novo.",
      "Ler a história em voz alta.",
      "Roda de conversa sobre coragem, destacando que sentir medo é normal."
    ]
  },
  {
    "theme": "A Nuvem Desajeitada",
    "genre": "história original",
    "description": "Leitura em voz alta de história original seguida de roda de conversa sobre respeito às diferenças.",
    "text": "No céu azul, todas as nuvens tinham formatos redondinhos e fofos, boas de admirar. Todas, menos uma: a Nuvem Cotó, que tinha um formato tortinho, meio esquisito, diferente de todas as outras.\nAs outras nuvens riam dela:\n— Olha que formato estranho! Você não parece nada com a gente!\nA Nuvem Cotó ficava tristinha, tentando se espremer e se esticar para ficar redondinha como as demais, mas por mais que tentasse, seu formato tortinho não mudava.\nUm dia, uma seca muito grande estava acontecendo lá embaixo, na terra. Os rios estavam secando, as plantas murchando, e os animais com muita sede. As outras nuvens, redondinhas, tentaram deixar cair chuva, mas o vento as espalhava para longe antes que conseguissem.\nFoi então que a Nuvem Cotó percebeu algo: seu formato tortinho, cheio de pontas e reentrâncias, conseguia segurar mais gotinhas de água do que o formato redondo das outras! Com todo cuidado, ela se posicionou bem em cima da terra seca e, finalmente, deixou cair uma bela chuva, molhando os rios, as plantas e matando a sede dos animais.\nAs outras nuvens, vendo aquilo, ficaram admiradas:\n— Seu formato diferente foi exatamente o que salvou o dia!\nDesde então, a Nuvem Cotó nunca mais quis ser igual às outras. Aprendeu que ser diferente não é um defeito — às vezes, é exatamente o que faz a gente ser especial.",
    "steps": [
      "Perguntar à turma o que elas acham que faz cada pessoa ser especial.",
      "Ler a história em voz alta.",
      "Conversar sobre respeito às diferenças, físicas ou de jeito de ser."
    ]
  },
  {
    "theme": "O Segredo do Jardim Seco",
    "genre": "história original",
    "description": "Leitura em voz alta de história original seguida de roda de conversa sobre cuidado com o meio ambiente.",
    "text": "No meio da cidade, havia um jardim abandonado, cheio de terra seca e nenhuma flor. As crianças passavam por ali todos os dias, a caminho da escola, sem nem perceber aquele cantinho triste.\nUma menina chamada Lia, porém, sempre olhava para o jardim com curiosidade. Um dia, decidiu perguntar para sua avó por que aquele lugar estava tão sem vida.\n— Jardim nenhum cresce sozinho, Lia — respondeu a avó. — Ele precisa de cuidado: água, um pouquinho de sol e muita paciência.\nNo dia seguinte, Lia levou uma garrafinha de água e regou um pedacinho da terra seca. No outro dia, levou algumas sementes que ganhou da avó e as plantou com cuidado. Ela contou para os colegas da escola, e logo mais crianças começaram a ajudar: uma trazia água, outra tirava os galhos secos, outra espalhava sementes novas.\nPassaram-se semanas, e um dia, um brotinho verde apareceu no meio da terra. Depois outro, e outro. Aos poucos, o jardim foi ganhando vida: flores coloridas, borboletas voando por ali, até um passarinho que fez ninho numa das plantas mais altas.\nO que antes era um cantinho esquecido da cidade virou o lugar favorito de todo mundo para brincar na hora do recreio.\nLia aprendeu que cuidar da natureza não precisa ser algo grande — às vezes, começa com uma garrafinha de água e a vontade de fazer diferente.",
    "steps": [
      "Perguntar se a turma conhece algum lugar da escola ou do bairro que precisa de cuidado.",
      "Ler a história em voz alta.",
      "Roda de conversa sobre pequenas atitudes que ajudam o meio ambiente."
    ]
  },
  {
    "theme": "Dois Amigos e Uma Bola Só",
    "genre": "história original",
    "description": "Leitura em voz alta de história original seguida de roda de conversa sobre cooperação e amizade.",
    "text": "Tomás e Duda eram os melhores amigos da turma, mas tinham um problema: só existia uma bola no pátio da escola, e os dois queriam jogar ao mesmo tempo — Tomás queria jogar futebol, e Duda queria jogar queimada.\n— A bola é minha vez! — dizia Tomás, puxando a bola para um lado.\n— Não, agora é a minha! — respondia Duda, puxando para o outro lado.\nTanto puxa daqui, puxa dali, que a bola escapou das mãos dos dois e rolou para dentro de uma poça de lama! Os dois ficaram parados, olhando para a bola suja, sem saber o que fazer.\n— Agora ninguém vai poder jogar — disse Duda, triste.\nFoi então que a professora, que estava observando de longe, se aproximou e perguntou:\n— E se, ao invés de brigar pela bola, vocês pensassem em um jogo que os dois pudessem jogar juntos, ao mesmo tempo?\nTomás e Duda se entreolharam e começaram a pensar. Depois de limpar a bola numa torneira, resolveram inventar um jogo novo, misturando um pouquinho de futebol com um pouquinho de queimada, com regras que os dois ajudaram a criar.\nO jogo novo ficou tão divertido que logo outras crianças da turma quiseram participar também. Tomás e Duda perceberam que, quando dividiam em vez de disputar, tudo ficava bem mais divertido — para eles e para todo mundo.",
    "steps": [
      "Perguntar à turma o que fazer quando duas pessoas querem a mesma coisa ao mesmo tempo.",
      "Ler a história em voz alta.",
      "Conversar sobre cooperação, pedindo exemplos de quando dividiram algo com um colega."
    ]
  },
  {
    "theme": "A Verdade do Vaso Quebrado",
    "genre": "história original",
    "description": "Leitura em voz alta de história original seguida de roda de conversa sobre honestidade.",
    "text": "Na sala de aula, havia um vaso de planta bem bonito, que a professora cuidava com muito carinho, regando todos os dias antes da primeira aula. Um dia, durante o recreio, uma bola quicou sem querer bem em cima do vaso, e ele caiu no chão, se espatifando em pedacinhos.\nNinguém tinha visto quem jogou a bola, mas Marcos sabia: tinha sido ele. Ficou com medo de contar, imaginando que a professora fosse ficar muito brava.\nQuando a turma voltou para a sala e viu o vaso quebrado, todos ficaram quietos, sem saber o que dizer. A professora perguntou, calma:\n— Alguém sabe o que aconteceu aqui?\nO coração de Marcos batia forte. Ele podia ficar quieto e ninguém saberia de nada. Mas, respirando fundo, levantou a mão.\n— Fui eu, professora. Eu estava jogando bola perto da janela e o vaso caiu sem querer. Desculpa.\nA professora sorriu, um pouco surpresa, e disse:\n— Obrigada por contar a verdade, Marcos. Isso foi muito corajoso da sua parte. Todo mundo erra às vezes, o importante é assumir e consertar o que der para consertar.\nJuntos, a turma ajudou a plantar uma mudinha nova num vaso reposto, e Marcos aprendeu que contar a verdade, mesmo com medo, deixa a gente mais leve por dentro — bem melhor do que guardar um segredo pesado.",
    "steps": [
      "Perguntar à turma como se sentem quando escondem algo que fizeram de errado.",
      "Ler a história em voz alta.",
      "Roda de conversa sobre a importância de contar a verdade, mesmo com medo."
    ]
  },
  {
    "theme": "O Robozinho que Queria Ser Igual",
    "genre": "história original",
    "description": "Leitura em voz alta de história original seguida de roda de conversa sobre respeito às diferenças e valorização da individualidade.",
    "text": "Numa fábrica de brinquedos, nasceu um robozinho diferente de todos os outros: enquanto os outros robôs eram quadrados e cinzentos, ele tinha saído redondo e azul, por um probleminha na fabricação.\nOs outros robôs, todos iguaizinhos entre si, olhavam para ele estranhando:\n— Por que você é tão diferente da gente?\nO robozinho, cujo nome era Zip, ficou tristinho e tentou de tudo para ficar quadrado como os outros: se apertava contra as paredes, tentava andar tortinho igual eles. Mas nada funcionava — ele continuava sendo redondo e azul, do seu próprio jeito.\nUm dia, a fábrica recebeu um pedido urgente: precisavam de um robô que coubesse dentro de um tubo bem estreito e curvo para consertar uma máquina quebrada, mas nenhum dos robôs quadrados conseguia entrar ali.\nFoi então que Zip, com seu corpo redondo, se ofereceu para tentar. Ele rolou suavinho por dentro do tubo curvo, chegou até a máquina e conseguiu consertá-la rapidinho, sem nenhum problema!\nTodos os outros robôs, impressionados, vieram parabenizá-lo:\n— Foi exatamente o seu formato diferente que resolveu o problema! Nenhum de nós conseguiria fazer isso.\nA partir daquele dia, Zip parou de tentar ser igual aos outros e passou a se orgulhar de ser do jeitinho que era. E os outros robôs aprenderam que ter alguém diferente no grupo pode ser exatamente o que falta para resolver os problemas mais complicados.",
    "steps": [
      "Perguntar à turma o que elas têm de diferente e gostam em si mesmas.",
      "Ler a história em voz alta.",
      "Conversar sobre como as diferenças de cada um podem ajudar o grupo todo."
    ]
  },
  {
    "theme": "Poema do Recreio",
    "genre": "poema",
    "description": "Leitura em voz alta de poema original sobre o recreio, seguida de roda de conversa sobre os momentos favoritos do dia na escola.",
    "text": "Bate o sino, toca o sinal,\nA turma sai que nem vento,\nCorrendo pro pátio da escola,\nPra aproveitar cada momento.\n\nTem quem corre atrás da bola,\nTem quem pula corda no chão,\nTem quem brinca de amarelinha,\nTem quem lancha de pé, com as mãos.\n\nTem risada de todo lado,\nTem segredo contado baixinho,\nTem amigo dividindo o lanche,\nTem grupo cantando um cantorzinho.\n\nDe repente o sino toca,\nE já é hora de voltar,\nMas o gostinho do recreio\nFica até a próxima tocar.",
    "steps": [
      "Perguntar à turma qual é a brincadeira favorita do recreio.",
      "Ler o poema em voz alta, marcando o ritmo e a rima com palmas.",
      "Pedir que cada aluno desenhe seu momento preferido do recreio."
    ]
  },
  {
    "theme": "Poema da Chuva Que Chegou",
    "genre": "poema",
    "description": "Leitura em voz alta de poema original sobre um dia de chuva, seguida de roda de conversa sobre os sons e sensações da chuva.",
    "text": "Pingo aqui, pingo ali,\nA chuva começa a cair,\nBate no telhado de zinco,\nFaz barulho de tremer.\n\nAs poças enchem na calçada,\nO cachorro corre pro abrigo,\nA vovó fecha a janela,\nE eu fico olhando, comigo.\n\nDepois que a chuva vai embora,\nO sol aparece de novo,\nE lá no céu, bem coloridinho,\nAparece um arco todo novo.",
    "steps": [
      "Perguntar à turma que sons a chuva faz e o que costumam fazer em dias chuvosos.",
      "Ler o poema em voz alta, imitando com a voz o barulho da chuva.",
      "Roda de conversa sobre o que aparece no céu depois da chuva (o arco-íris)."
    ]
  },
  {
    "theme": "Três Haicais da Natureza",
    "genre": "haicai",
    "description": "Leitura em voz alta de três haicais originais, seguida de roda de conversa sobre a brevidade e as imagens desse tipo de poema.",
    "text": "Folha caindo —\no vento leva embora\no verão que vai.\n\nGota na flor,\no beija-flor bebe rápido\ne já partiu.\n\nLua redonda,\nno silêncio da noite,\nbrilha sozinha.",
    "steps": [
      "Explicar que o haicai é um poema bem curto, de origem japonesa, que fala de um instante da natureza.",
      "Ler os três haicais em voz alta, fazendo uma pausa entre cada um.",
      "Pedir que a turma feche os olhos e imagine a cena de um dos haicais."
    ]
  },
  {
    "theme": "Parlendas da Tradição Oral",
    "genre": "parlenda",
    "description": "Leitura e recitação de parlendas tradicionais (domínio público, sem autoria individual), seguida de roda de conversa sobre a tradição oral.",
    "text": "Um, dois, feijão com arroz,\nTrês, quatro, feijão no prato,\nCinco, seis, chinelo inglês,\nSete, oito, comer biscoito,\nNove, dez, comer pastéis.\n\nBatatinha quando nasce,\nEspalha rama pelo chão,\nMenininha quando dorme,\nPõe a mão no coração.\n\nHoje é domingo,\nPede cachimbo,\nO cachimbo é de barro,\nBate no jarro,\nO jarro é de ouro,\nBate no touro,\nO touro é valente,\nBate na gente.",
    "steps": [
      "Perguntar se a turma já conhece alguma dessas parlendas de casa ou de anos anteriores.",
      "Recitar as três parlendas em voz alta, batendo palmas no ritmo.",
      "Convidar a turma a recitar junto, cada vez um pouco mais rápido."
    ]
  },
  {
    "theme": "Quadrinhas Populares",
    "genre": "quadrinha",
    "description": "Leitura em voz alta de quadrinhas populares tradicionais (domínio público, sem autoria individual), seguida de roda de conversa sobre rima.",
    "text": "Fui à feira comprar pão,\nO pão não tinha fermento,\nVoltei pra casa cantando,\nQue essa quadrinha é um contentamento.\n\nCravo brigou com a rosa\nDebaixo de uma sacada,\nO cravo saiu ferido\nE a rosa despedaçada.\n\nLá em cima daquele morro\nPlantei um pé de café,\nO vento levou as flores,\nSaudade que ficou de quê?",
    "steps": [
      "Perguntar à turma o que rima significa, com um exemplo simples.",
      "Ler as quadrinhas em voz alta, destacando as palavras que rimam no fim de cada verso.",
      "Pedir que a turma tente encontrar, junto, outras palavras que rimam com elas."
    ]
  },
  {
    "theme": "Trava-Línguas para Enrolar a Língua",
    "genre": "trava-língua",
    "description": "Leitura e repetição de trava-línguas tradicionais (domínio público, sem autoria individual), seguida de roda de conversa sobre os sons das palavras.",
    "text": "O rato roeu a roupa do rei de Roma.\n\nUm prato de trigo para três tigres tristes.\n\nA aranha arranha a rã, a rã arranha a aranha.\n\nTrês pratos de trigo, três tigres tristes comeram trigo.",
    "steps": [
      "Ler cada trava-língua bem devagar, uma vez, para a turma entender as palavras.",
      "Repetir cada um mais rápido, convidando a turma a tentar junto.",
      "Ver quem consegue falar um trava-língua inteiro sem embolar a língua."
    ]
  },
  {
    "theme": "Adivinhas para Adivinhar",
    "genre": "adivinha",
    "description": "Leitura em voz alta de adivinhas tradicionais (domínio público, sem autoria individual), seguida de roda de conversa e tentativas de resposta.",
    "text": "O que é, o que é: tem coroa e não é rei, tem espinho e não é rosa? (Resposta: o abacaxi)\n\nO que é, o que é: quanto mais se tira, mais aumenta? (Resposta: o buraco)\n\nO que é, o que é: anda o dia inteiro e nunca sai do lugar? (Resposta: o relógio)\n\nO que é, o que é: tem dentes e não morde? (Resposta: o pente)",
    "steps": [
      "Ler uma adivinha de cada vez, sem revelar a resposta.",
      "Deixar a turma arriscar palpites antes de ler a resposta.",
      "Perguntar se alguém conhece outras adivinhas para compartilhar com a turma."
    ]
  },
  {
    "theme": "Ciranda, Cirandinha",
    "genre": "cantiga",
    "description": "Leitura e canto de cantiga de roda tradicional (domínio público, sem autoria individual), seguida de roda cantada com a turma.",
    "text": "Ciranda, cirandinha,\nVamos todos cirandar,\nVamos dar a meia-volta,\nVolta e meia vamos dar.\n\nO anel que tu me deste\nEra vidro e se quebrou,\nO amor que tu me tinhas\nEra pouco e se acabou.\n\nPor isso, dona (nome de um colega),\nEntre dentro dessa roda,\nDiga um verso bem bonito,\nDiga adeus e vá-se embora.",
    "steps": [
      "Organizar a turma em roda, de mãos dadas.",
      "Ensinar a letra aos poucos, cantando uma parte de cada vez.",
      "Cantar girando a roda, trocando o nome do colega a cada rodada."
    ]
  },
  {
    "theme": "Jornal da Escola: Horta da Turma Dá os Primeiros Frutos",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma horta, seguida de roda de conversa sobre plantio e cuidado com plantas.",
    "text": "JORNAL DA ESCOLA — Edição de hoje\n\nHorta da turma do 2º ano dá os primeiros frutos\n\nDepois de dois meses de cuidado, a horta plantada pela turma do 2º ano finalmente deu seus primeiros resultados: pés de alface, cenoura e cheiro-verde já estão prontos para a colheita.\n\nO projeto começou em uma aula de Ciências, quando os alunos aprenderam sobre o crescimento das plantas. Desde então, a turma se revezou para regar a horta todos os dias, mesmo durante as férias.\n\n\"No começo eu achei que ia demorar demais, mas todo dia a gente via uma coisa diferente crescendo\", contou uma das alunas responsáveis pelo cuidado das folhas.\n\nA colheita será usada na próxima merenda especial da escola, e a turma já está planejando plantar novas sementes para o próximo semestre.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre quem gostaria de ter uma horta na escola ou em casa."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Vence Torneio de Queimada do Recreio",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um torneio esportivo, seguida de roda de conversa sobre trabalho em equipe.",
    "text": "JORNAL DA ESCOLA — Edição especial de esportes\n\nTurma do 2º B vence torneio de queimada do recreio\n\nNa manhã desta sexta-feira, o pátio da escola ficou cheio de gritos de torcida: a turma do 2º B venceu o torneio de queimada organizado pelos professores de Educação Física, disputado durante os recreios da semana.\n\nA final foi contra a turma do 3º A, e o jogo terminou empatado até os últimos minutos, quando um lançamento certeiro decidiu a partida.\n\n\"A gente treinou todo dia no recreio, por isso deu certo\", disse um dos jogadores da equipe vencedora, ainda ofegante depois da partida.\n\nOs professores já anunciaram que o próximo torneio será de corrida com saco, no mês que vem. As inscrições abrem na próxima segunda-feira.\n\nFim da edição especial. Até a próxima notícia!",
    "steps": [
      "Perguntar à turma se já assistiram ou participaram de algum torneio.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre trabalho em equipe e treino."
    ]
  },
  {
    "theme": "Receita de Salada de Frutas da Turma",
    "genre": "receita",
    "description": "Leitura em voz alta de receita culinária simples, seguida de roda de conversa sobre alimentação saudável e a ordem das instruções.",
    "text": "Salada de Frutas da Turma\n\nIngredientes:\n— 1 maçã\n— 1 banana\n— 1 laranja\n— 10 uvas\n— Suco de laranja para regar (opcional)\n\nModo de preparo:\n1. Lave bem todas as frutas antes de começar.\n2. Peça a ajuda de um adulto para descascar a banana e a laranja.\n3. Corte a maçã, a banana e a laranja em pedaços pequenos.\n4. Corte as uvas ao meio.\n5. Misture todas as frutas picadas em uma tigela grande.\n6. Regue com um pouco de suco de laranja, se quiser.\n7. Misture tudo com cuidado e sirva em potinhos individuais.\n\nRende cerca de 6 porções pequenas. Bom apetite!",
    "steps": [
      "Perguntar à turma quais frutas elas mais gostam.",
      "Ler a receita em voz alta, destacando ingredientes e a ordem dos passos.",
      "Conversar sobre por que é importante seguir a ordem certa numa receita."
    ]
  },
  {
    "theme": "Receita de Suco de Laranja com Hortelã",
    "genre": "receita",
    "description": "Leitura em voz alta de receita culinária simples, seguida de roda de conversa sobre a estrutura de uma receita (ingredientes e modo de preparo).",
    "text": "Suco de Laranja com Hortelã\n\nIngredientes:\n— 4 laranjas\n— 6 folhinhas de hortelã\n— 1 copo de água gelada\n— Açúcar a gosto (opcional)\n\nModo de preparo:\n1. Peça a um adulto para cortar as laranjas ao meio.\n2. Esprema o suco das laranjas em uma jarra.\n3. Lave bem as folhas de hortelã.\n4. Amasse levemente as folhas de hortelã com as mãos, para soltar o cheiro.\n5. Junte a hortelã e a água gelada ao suco.\n6. Misture bem e experimente antes de adoçar.\n7. Sirva bem gelado, com uma folhinha de hortelã por cima.\n\nRende cerca de 4 copos. Saúde!",
    "steps": [
      "Mostrar (ou desenhar na lousa) as duas partes de uma receita: ingredientes e modo de preparo.",
      "Ler a receita em voz alta, apontando cada parte.",
      "Perguntar se a turma já ajudou a fazer alguma receita em casa."
    ]
  },
  {
    "theme": "Carta para um Amigo de Outra Escola",
    "genre": "carta",
    "description": "Leitura em voz alta de carta pessoal original, seguida de roda de conversa sobre a estrutura de uma carta (data, saudação, despedida).",
    "text": "São Paulo, 12 de março.\n\nOi, Rafa!\n\nTudo bem com você? Faz tempo que a gente não se vê desde que você mudou de escola! Aqui na sala mudou bastante coisa: agora a gente senta em grupos de quatro, e tem uma horta nova no pátio que a turma toda cuida.\n\nSemana passada teve um passeio ao museu e eu lembrei muito de você, porque sei que você adora dinossauro — tinha até um esqueleto gigante lá!\n\nMe conta como está sua escola nova, se você já fez amigos e se ainda gosta de desenhar aqueles monstrinhos engraçados. Também queria saber se dá pra você vir na minha festa de aniversário, mês que vem.\n\nEspero sua resposta! Um abraço apertado,\n\nDu.",
    "steps": [
      "Perguntar se alguém já escreveu ou recebeu uma carta.",
      "Ler a carta em voz alta, apontando onde fica a data, a saudação e a despedida.",
      "Propor que a turma escreva uma cartinha para um amigo da própria sala."
    ]
  },
  {
    "theme": "Bilhetes do Dia a Dia",
    "genre": "bilhete",
    "description": "Leitura em voz alta de dois bilhetes curtos originais, seguida de roda de conversa sobre situações em que usamos bilhetes.",
    "text": "Bilhete 1 — Para a professora\n\nProfessora,\n\nHoje não vou poder trazer o material de Artes porque esqueci em casa. Amanhã eu trago, prometo!\n\nObrigada,\nLuiza\n\nBilhete 2 — Para a mãe\n\nMãe,\n\nFui brincar na casa do Enzo depois da aula. Volto antes do jantar. Não esqueci da lição de casa, já fiz!\n\nBeijo,\nBento",
    "steps": [
      "Perguntar em quais situações a gente escreve um bilhete (avisos rápidos).",
      "Ler os dois bilhetes em voz alta.",
      "Comparar bilhete com carta: o que muda no tamanho e no jeito de escrever."
    ]
  },
  {
    "theme": "Convite para a Festa Junina da Escola",
    "genre": "convite",
    "description": "Leitura em voz alta de convite original, seguida de roda de conversa sobre as informações que não podem faltar em um convite.",
    "text": "Convite\n\nVenha para a Festa Junina da nossa escola!\n\nData: sábado, dia 24\nHorário: das 15h às 19h\nLocal: pátio central da escola\n\nVai ter quadrilha, comidas típicas, barraca de pescaria e fogueira (com a supervisão dos professores).\n\nTraga a família toda! Quem quiser vir caracterizado de caipira ganha um docinho especial na entrada.\n\nContamos com a sua presença!\n\nA Direção da Escola",
    "steps": [
      "Perguntar quais festas a turma já foi convidada.",
      "Ler o convite em voz alta, destacando data, horário e local.",
      "Perguntar o que não pode faltar em um convite para ele funcionar direito."
    ]
  },
  {
    "theme": "Cartão-Postal de Férias na Praia",
    "genre": "cartão-postal",
    "description": "Leitura em voz alta de cartão-postal original, seguida de roda de conversa sobre lugares que a turma já visitou ou gostaria de visitar.",
    "text": "Frente do cartão: foto de uma praia com coqueiros e o mar azul.\n\nOi, vovó!\n\nAs férias na praia estão sendo demais! Hoje eu fiz um castelo de areia gigante e vi um caranguejo de verdade andando pela beira do mar. A água estava geladinha, mas super gostosa.\n\nAmanhã a gente vai passear de barco. Mal posso esperar para te contar tudo direitinho quando voltar!\n\nSaudades e um beijo grande,\nMaite",
    "steps": [
      "Mostrar (ou desenhar na lousa) como é a frente e o verso de um cartão-postal.",
      "Ler o texto em voz alta.",
      "Perguntar se a turma já enviou ou recebeu um cartão-postal, e de onde gostariam de mandar um."
    ]
  },
  {
    "theme": "Verbete de Curiosidade: Tamanduá-Bandeira",
    "genre": "verbete de curiosidade",
    "description": "Leitura em voz alta de verbete de curiosidade original sobre o tamanduá-bandeira, seguida de roda de conversa sobre animais brasileiros.",
    "text": "Tamanduá-bandeira\n\nO tamanduá-bandeira é um animal que vive em campos e florestas da América do Sul, inclusive no Brasil. Ele recebe esse nome porque seu rabo peludo e grande lembra uma bandeira tremulando ao vento.\n\nEsse animal não tem dentes. Para se alimentar, ele usa sua língua comprida e pegajosa — que pode chegar a 60 centímetros! — para capturar formigas e cupins de dentro dos formigueiros e cupinzeiros, que ele abre com suas garras fortes.\n\nO tamanduá-bandeira anda devagar e enxerga mal, mas tem um olfato muito apurado, que usa para encontrar comida. Durante o dia, ele costuma descansar escondido, coberto pelo próprio rabo peludo, como se fosse um cobertor.\n\nHoje em dia, esse animal está ameaçado de extinção, principalmente por causa das queimadas e da perda de seu habitat natural.",
    "steps": [
      "Perguntar se alguém já viu um tamanduá, de verdade ou em foto.",
      "Ler o verbete em voz alta.",
      "Conversar sobre a importância de proteger os animais brasileiros e seus habitats."
    ]
  },
  {
    "theme": "Verbete de Curiosidade: Beija-Flor",
    "genre": "verbete de curiosidade",
    "description": "Leitura em voz alta de verbete de curiosidade original sobre o beija-flor, seguida de roda de conversa sobre aves brasileiras.",
    "text": "Beija-flor\n\nO beija-flor é uma das menores aves do mundo, e o Brasil é um dos países com mais espécies diferentes desse pássaro. Ele recebe esse nome porque parece \"beijar\" as flores enquanto se alimenta do néctar, um líquido doce que fica dentro delas.\n\nPara conseguir se manter parado no ar, na frente da flor, o beija-flor bate as asas muitas vezes por segundo — tantas vezes que o movimento fica quase invisível a olho nu, e por isso ele consegue até voar de costas!\n\nEsse pássaro precisa comer com bastante frequência, porque seu corpo gasta muita energia batendo as asas o tempo todo. Além do néctar das flores, ele também come pequenos insetos.\n\nOs beija-flores são importantes para a natureza porque ajudam a polinizar as flores, carregando pólen de uma planta para outra enquanto se alimentam.",
    "steps": [
      "Perguntar se a turma já viu um beija-flor de perto.",
      "Ler o verbete em voz alta.",
      "Conversar sobre por que os beija-flores são importantes para as plantas."
    ]
  },
  {
    "theme": "Regras da Amarelinha",
    "genre": "regra de brincadeira",
    "description": "Leitura em voz alta das regras de uma brincadeira tradicional, seguida de roda de conversa e, se possível, uma rodada real da brincadeira.",
    "text": "Como brincar de amarelinha\n\nMateriais: giz e uma pedrinha (ou tampinha) para cada jogador.\n\nComo jogar:\n1. Desenhe no chão, com giz, os quadrados numerados de 1 a 10, no formato tradicional da amarelinha.\n2. O primeiro jogador joga sua pedrinha no quadrado número 1.\n3. Pulando em um pé só nos quadrados simples e com os dois pés nos quadrados duplos, o jogador percorre a amarelinha inteira, sem pisar no quadrado onde está a pedrinha.\n4. Ao voltar, o jogador pega a pedrinha (ainda pulando) e sai da amarelinha.\n5. Se completar sem errar, joga a pedrinha no quadrado 2 na rodada seguinte, e assim por diante.\n6. Se pisar na linha, perder o equilíbrio ou errar o quadrado da pedrinha, passa a vez para o próximo jogador.\n7. Vence quem completar todos os quadrados primeiro.",
    "steps": [
      "Perguntar quem já brincou de amarelinha antes.",
      "Ler as regras em voz alta, passo a passo.",
      "Se houver espaço e giz disponível, desenhar uma amarelinha e brincar com a turma."
    ]
  },
  {
    "theme": "Regras do Passa-Anel",
    "genre": "regra de brincadeira",
    "description": "Leitura em voz alta das regras de uma brincadeira tradicional, seguida de roda de conversa e, se possível, uma rodada real da brincadeira.",
    "text": "Como brincar de passa-anel\n\nMateriais: um anel pequeno (ou botão, moeda) que caiba escondido entre as mãos.\n\nComo jogar:\n1. Os jogadores sentam em roda, com as duas mãos em concha, uma sobre a outra, na frente do corpo.\n2. Um jogador é escolhido para ser o \"carteiro\" e fica com o anel escondido entre as mãos.\n3. O carteiro passa as mãos por dentro das mãos de cada jogador da roda, fingindo entregar o anel para todos, mas só deixando ele cair na mão de um jogador escolhido, sem que os outros percebam.\n4. Depois de passar por todos, o carteiro pergunta: \"Com quem está o anel?\"\n5. Os outros jogadores tentam adivinhar quem está com o anel escondido.\n6. Quem acertar vira o próximo carteiro. Se ninguém acertar, o jogador que estava com o anel se revela e começa uma nova rodada.",
    "steps": [
      "Explicar as regras em voz alta, passo a passo.",
      "Se possível, brincar uma rodada real com a turma.",
      "Perguntar se a turma conhece outras brincadeiras de roda parecidas."
    ]
  },
  {
    "theme": "Perséfone e as Estações do Ano (Mito grego - releitura simplificada)",
    "genre": "mito",
    "description": "Leitura em voz alta de mito grego em versão simplificada, seguida de roda de conversa sobre as estações do ano.",
    "text": "Há muito, muito tempo, contavam os gregos antigos que existia uma deusa chamada Deméter, responsável por cuidar de todas as plantas e colheitas da Terra. Ela tinha uma filha muito querida, chamada Perséfone, que adorava colher flores nos campos.\n\nUm dia, enquanto colhia flores, Perséfone foi levada para viver no mundo debaixo da terra, e Deméter ficou tão triste procurando a filha que esqueceu de cuidar das plantações. As flores murcharam, as árvores perderam as folhas, e tudo ficou frio e sem vida.\n\nDepois de muito procurar, foi feito um acordo: Perséfone passaria parte do ano junto de sua mãe, na superfície, e outra parte no mundo debaixo da terra.\n\nQuando Perséfone está com sua mãe, Deméter fica tão feliz que faz as flores desabrocharem e as plantas crescerem — são a primavera e o verão. Quando Perséfone precisa partir, Deméter fica triste, e as folhas caem, e o frio chega — são o outono e o inverno.\n\nAssim, os gregos antigos explicavam por que as estações do ano se repetem, ano após ano, em um ciclo que nunca para.",
    "steps": [
      "Perguntar à turma quantas estações do ano existem e como é o clima em cada uma.",
      "Ler o mito em voz alta.",
      "Conversar sobre como diferentes povos, antigamente, explicavam os fenômenos da natureza através de histórias."
    ]
  },
  {
    "theme": "Ícaro e as Asas de Cera (Mito grego - releitura simplificada)",
    "genre": "mito",
    "description": "Leitura em voz alta de mito grego em versão simplificada, seguida de roda de conversa sobre a importância de ouvir avisos de segurança.",
    "text": "Na Grécia antiga, contam que viviam um inventor chamado Dédalo e seu filho, Ícaro, presos em uma ilha cercada de mar por todos os lados, sem nenhum barco para fugir.\n\nDédalo, que era muito engenhoso, teve uma ideia: construiu duas grandes asas feitas de penas de pássaros, presas com cera derretida, uma para ele e outra para o filho.\n\nAntes de partirem voando, Dédalo avisou, sério:\n— Ícaro, não voe muito baixo, porque a umidade do mar pode molhar as penas. Mas também não voe muito alto, porque o calor do sol pode derreter a cera. Fique sempre no meio do caminho, perto de mim.\n\nOs dois alçaram voo e, no começo, tudo corria bem. Mas Ícaro, maravilhado com a sensação de voar entre as nuvens, foi subindo cada vez mais alto, esquecendo o aviso do pai.\n\nQuanto mais perto do sol ele chegava, mais a cera das asas ia derretendo, até que as penas começaram a se soltar, uma a uma. Ícaro tentou bater as asas com mais força, mas já não havia mais penas suficientes, e ele caiu no mar.\n\nDédalo, olhando para trás e não encontrando o filho no céu, entendeu o que tinha acontecido e ficou muito triste. Desde então, essa história é contada para lembrar que é importante ouvir os avisos de quem quer nos manter seguros.",
    "steps": [
      "Perguntar à turma se elas já receberam um aviso de segurança de um adulto e por que é importante seguir.",
      "Ler o mito em voz alta.",
      "Conversar sobre a importância de ouvir avisos e conselhos de quem cuida da gente."
    ]
  },
  {
    "theme": "Karú-Sakaibê e a Origem do Povo (Mito do povo Munduruku - releitura simplificada)",
    "genre": "mito",
    "description": "Leitura em voz alta de mito de origem do povo indígena Munduruku, em versão simplificada, seguida de roda de conversa sobre a diversidade dos povos indígenas do Brasil.",
    "text": "Os avós do povo Munduruku contam que, há muito tempo, as pessoas não viviam no mundo de cima — elas moravam bem no fundo, no centro da terra.\n\nUm menino chamado Rairu, que era amigo do grande criador Karú-Sakaibê, gostava de brincar fazendo desenhos com folhas, gravetos e cipós. Um dia, ele fez o desenho de um tatu tão bonito que quis grudá-lo com cera de mel de abelha, para que nunca mais desaparecesse. Para a cera secar, Rairu enterrou o tatu na terra, deixando só o rabinho pra fora — e ficou ali, segurando.\n\nSó que, quando tentou soltar a mão, não conseguiu: ela tinha grudado no rabo do tatu! Como Rairu era um menino poderoso, o desenho ganhou vida. Só que, em vez de sair do buraco, o tatu foi cavando cada vez mais fundo, puxando Rairu junto, até chegar bem no centro da terra.\n\nLá embaixo, Rairu encontrou um monte de gente vivendo: gente alegre, gente preguiçosa, gente de todo jeito! Maravilhado, ele saiu correndo para contar a novidade para Karú-Sakaibê.\n\nQuando ouviu a história, Karú-Sakaibê decidiu trazer todo aquele povo para o mundo de cima. Ele fez uma bolinha de algodão, transformou em corda bem comprida, amarrou na cintura de Rairu e mandou o menino voltar ao centro da terra para buscar as pessoas.\n\nUm por um, o povo foi subindo pela corda. Mas, quando os últimos estavam quase chegando ao topo, a corda arrebentou! Por isso, contam os mais velhos, uma parte do povo ficou para sempre morando no centro da terra.\n\nKarú-Sakaibê deu um nome diferente para cada grupo que conseguiu subir, e para cada um deu uma cor — verde, vermelho, amarelo, preto. Depois, semeou um campo e mandou a chuva cair, e da terra molhada nasceram a mandioca, o milho, a batata-doce e muitas outras plantas para alimentar aquele povo novo.\n\nAté hoje, os Munduruku contam essa história de avô para neto, para que ninguém esqueça de onde vieram.",
    "steps": [
      "Perguntar à turma se conhecem alguma história sobre como o mundo ou um povo surgiu.",
      "Ler o mito em voz alta.",
      "Conversar sobre a diversidade de povos indígenas no Brasil — o Munduruku é um deles, entre muitos outros, cada um com suas próprias histórias e línguas."
    ]
  },
  {
    "theme": "Tirinha: O Dia em que o Guarda-Chuva Sumiu",
    "genre": "tirinha/HQ",
    "description": "Leitura dramatizada de tirinha original em formato de diálogo, seguida de roda de conversa sobre humor e histórias em quadrinhos.",
    "text": "Tirinha em 4 quadrinhos — leia como um diálogo entre os personagens.\n\nQuadrinho 1:\nBIA: Ai, começou a chover! Cadê meu guarda-chuva?\n\nQuadrinho 2:\nBIA: Não está na mochila... nem embaixo da cama...\nCACHORRO (pensando): Au au? (Ele está deitado em cima do guarda-chuva, todo enrolado.)\n\nQuadrinho 3:\nBIA: Ah, esquece o guarda-chuva, vou pegar um saco plástico!\nCACHORRO (pensando): Ufa, quase que ela descobre meu esconderijo quentinho!\n\nQuadrinho 4:\nBIA: (voltando molhada) Nossa, ventou o saco plástico todo!\nCACHORRO: Au au! (Ainda dormindo em cima do guarda-chuva, bem satisfeito.)",
    "steps": [
      "Explicar que uma tirinha conta uma história curta em poucos quadrinhos, geralmente com humor.",
      "Ler o diálogo em voz alta, com um aluno fazendo cada personagem.",
      "Perguntar o que a turma imagina que aconteceria em um quinto quadrinho."
    ]
  },
  {
    "theme": "Relato: Meu Primeiro Dia de Aula",
    "genre": "relato de experiência",
    "description": "Leitura em voz alta de relato de experiência pessoal original, seguida de roda de conversa sobre as primeiras impressões de coisas novas.",
    "text": "No meu primeiro dia de aula, eu acordei bem cedo, antes até do despertador tocar. Fiquei tão ansiosa que nem consegui tomar café da manhã direito — só bebi um golinho de suco e já queria sair de casa.\n\nQuando cheguei perto do portão da escola, meu coração estava disparado. Tinha muita gente que eu não conhecia, e todo mundo parecia já ter amigos, menos eu.\n\nNa sala, sentei bem na frente, sozinha, sem coragem de falar com ninguém. Mas a professora fez um jogo para a turma se apresentar, e foi aí que conheci um menino que também tinha acabado de mudar de escola, igual eu.\n\nNo fim do dia, quando minha mãe veio me buscar, eu já tinha até combinado de sentar perto desse novo amigo no dia seguinte. Cheguei em casa contando cada detalhe, animada, sem parar de falar.\n\nHoje, quando lembro daquele primeiro dia cheio de medo, eu percebo que às vezes as coisas que mais assustam no começo acabam virando as melhores lembranças.",
    "steps": [
      "Perguntar se alguém se lembra do primeiro dia naquela escola, ou de uma vez em que estava com medo de algo novo.",
      "Ler o relato em voz alta.",
      "Roda de conversa sobre como lidar com o medo de situações novas."
    ]
  },
  {
    "theme": "Cordel do Menino que Não Queria Estudar",
    "genre": "poema de cordel",
    "description": "Leitura em voz alta de poema de cordel original, seguida de roda de conversa sobre a importância de saber ler e contar no dia a dia.",
    "text": "Vou contar uma história\nDe um menino chamado Zeca,\nQue não gostava da escola\nE vivia numa esparrela,\nQuerendo só brincadeira\nE fugindo da cartilha bela.\n\nTodo dia de manhã\nEle escondia o material,\nDizia que estava doente,\nContava história irreal,\nSó pra não ir pra escola\nNaquele dia normal.\n\nUm dia foi ao mercado\nComprar pão para o café,\nMas não sabia ler os preços\nNem contar troco no pé,\nFicou todo atrapalhado,\nSem saber o que fazer.\n\nFoi quando entendeu, enfim,\nQue estudar tem seu valor:\nPra ler as placas da rua,\nPra contar sem ter temor,\nPra escrever um bilhetinho\nPra quem sente muito amor.\n\nDesde então o nosso Zeca\nVirou outro estudante,\nCorre cedo pra escola,\nMuito esperto e vigilante,\nE aprendeu, nessa história,\nQue saber é o bastante.",
    "steps": [
      "Explicar que o cordel é uma poesia popular, geralmente ilustrada com xilogravura, muito contada no Nordeste do Brasil.",
      "Ler o cordel em voz alta, marcando bem o ritmo e a rima de cada estrofe.",
      "Conversar sobre o que o Zeca aprendeu e por que saber ler e contar é importante no dia a dia."
    ]
  },
  {
    "theme": "Três Limeriques Divertidos",
    "genre": "limerique",
    "description": "Leitura em voz alta de três limeriques originais (poemas curtos e engraçados de cinco versos), seguida de roda de conversa sobre humor na poesia.",
    "text": "Um menino lá de Salvador\nAdorava brincar de pintor,\nPintou o gato de cor-de-rosa,\nCom uma listra bem vistosa,\nE a casa ficou uma flor!\n\nUma menina de Belém\nAdorava comer bem,\nComeu bolo, comeu pão,\nGuardou doce na mão,\nE ainda quis mais também!\n\nUm senhor que morava no mato\nTinha um papagaio sem tato,\nFalava o dia inteiro,\nFazia a casa virar um salseiro,\nAté virar um relato!",
    "steps": [
      "Explicar que o limerique é um poema curto e engraçado, de cinco versos, com final surpreendente.",
      "Ler os três limeriques em voz alta, caprichando na entonação engraçada do último verso.",
      "Perguntar se a turma consegue imaginar um final engraçado para um limerique novo, inventado na hora."
    ]
  },
  {
    "theme": "O Bolinho Fujão (Conto acumulativo - releitura)",
    "genre": "conto acumulativo",
    "description": "Leitura em voz alta de conto acumulativo (releitura de conto popular de domínio público), seguida de roda de conversa sobre confiar em desconhecidos.",
    "text": "Uma velhinha resolveu fazer um bolinho bem redondo e dourado. Assim que tirou do forno, para sua surpresa, o bolinho pulou da bandeja e saiu correndo pela cozinha, gritando:\n— Corram, corram, não me alcançam, eu sou o Bolinho Fujão!\n\nA velhinha correu atrás dele, mas não conseguiu alcançar. O bolinho saiu pela porta e encontrou um cachorro.\n— Espere, bolinho, eu quero te comer! — latiu o cachorro.\n— Não me alcança, não me alcança, eu escapei da velhinha e vou escapar de você também, porque eu sou o Bolinho Fujão! — respondeu o bolinho, correndo ainda mais rápido.\n\nO cachorro correu atrás, mas não conseguiu alcançar. Logo o bolinho encontrou uma galinha.\n— Espere, bolinho, eu quero te comer! — cacarejou a galinha.\n— Não me alcança, não me alcança, eu escapei da velhinha, escapei do cachorro e vou escapar de você também, porque eu sou o Bolinho Fujão! — respondeu o bolinho, rindo.\n\nA galinha correu atrás, mas não conseguiu alcançar. Mais à frente, o bolinho encontrou uma raposa esperta, sentada à beira do rio.\n— Não vou te perseguir, bolinho, não adianta correr atrás de você — disse a raposa, com um sorriso manso. — Mas se quiser atravessar o rio comigo, posso te ajudar, sem nenhum problema.\n\nO bolinho, cansado de tanto correr e confiando na raposa, subiu no focinho dela para atravessar o rio. Só que, bem no meio da travessia, a raposa abriu a boca e — nhoc! — engoliu o bolinho num instante.\n\nE assim, o Bolinho Fujão, que tinha escapado de todo mundo, aprendeu tarde demais que nem sempre quem parece mais gentil é o mais seguro para confiar.",
    "steps": [
      "Perguntar à turma o que elas acham que vai acontecer cada vez que o bolinho encontra um novo personagem.",
      "Ler o conto em voz alta, repetindo a fala do bolinho com a turma a cada encontro.",
      "Conversar sobre a importância de ter cuidado mesmo com quem parece gentil."
    ]
  },
  {
    "theme": "A Lenda da Mula Sem-Cabeça (Lenda do folclore brasileiro)",
    "genre": "conto de assombração",
    "description": "Leitura em voz alta de conto de assombração do folclore brasileiro, seguida de roda de conversa sobre lenda e realidade.",
    "text": "Contam os mais velhos, no interior do Brasil, que existe uma assombração que aparece nas noites de quinta para sexta-feira: a Mula Sem-Cabeça. Segundo a lenda, ela galopa pelos caminhos soltando fumaça e fagulhas pelo pescoço, onde deveria estar a cabeça, fazendo um barulho de correntes se arrastando.\n\nDiz a história que a Mula Sem-Cabeça, na verdade, é o feitiço de uma pessoa que precisa se transformar todas as semanas, até quebrar a maldição. Durante o dia, ela é uma pessoa comum, igual a qualquer vizinho; mas, quando a noite chega, o feitiço age, e ela se transforma na mula assombrada, correndo pelos campos e assustando quem estiver por perto.\n\nMuita gente do interior conta que já ouviu, à noite, o som de cascos batendo forte na terra e um relincho diferente, arrepiante, vindo da estrada. Alguns dizem que, se a pessoa tiver coragem de tirar um pedacinho do cabresto da mula, o feitiço se quebra e ela volta a ser gente para sempre.\n\nApesar do susto, a lenda da Mula Sem-Cabeça é contada há gerações nas rodas de história do interior do Brasil, sempre terminando com a mesma pergunta: será que, numa noite de quinta para sexta, alguém vai ter coragem de esperar por ela no caminho?",
    "steps": [
      "Perguntar se a turma já ouviu alguma história de assombração contada por alguém da família.",
      "Ler a lenda em voz alta, com uma voz mais baixa e misteriosa nas partes de suspense.",
      "Conversar sobre a diferença entre lenda (uma história que se conta, sem provas) e fato real."
    ]
  },
  {
    "theme": "Reportagem: Um Dia na Vida de Quem Cuida dos Animais do Zoológico",
    "genre": "reportagem",
    "description": "Leitura em voz alta de reportagem fictícia original, seguida de roda de conversa sobre profissões que cuidam de animais.",
    "text": "REPORTAGEM ESPECIAL\n\nUm dia na vida de quem cuida dos animais do zoológico\n\nVocê já imaginou como é o trabalho de quem cuida de leões, girafas e macacos todos os dias? Fomos conversar com uma tratadora de animais para descobrir como é essa rotina.\n\nO dia dela começa bem cedo, antes mesmo de o zoológico abrir para os visitantes. \"A primeira coisa que fazemos é verificar se todos os animais passaram bem a noite, olhando a saúde e o comportamento de cada um\", conta ela.\n\nDepois vem a hora da alimentação, que muda de acordo com cada espécie: frutas para os macacos, feno para as girafas, carne para os leões. \"Cada animal tem uma dieta pensada especialmente para ele, como se fosse um cardápio só seu\", explica a tratadora.\n\nAlém de alimentar, o trabalho inclui limpar os recintos, observar se algum animal precisa de atenção veterinária e, muitas vezes, criar brincadeiras e desafios para que os animais fiquem estimulados, o que os especialistas chamam de \"enriquecimento ambiental\".\n\n\"O que mais gosto é ver que, com cuidado e paciência, os animais confiam na gente\", diz ela, sorrindo, antes de voltar para mais uma ronda pelos recintos.\n\nUm trabalho que exige responsabilidade, carinho e muita disposição — do amanhecer até o fim da tarde.",
    "steps": [
      "Perguntar à turma se alguém já visitou um zoológico e o que mais gostou de ver.",
      "Ler a reportagem em voz alta.",
      "Conversar sobre o que muda entre reportagem e notícia (a reportagem investiga mais a fundo um assunto, sem depender de um fato do dia)."
    ]
  },
  {
    "theme": "Indicação Literária: Por Que Ler \"A Lebre e a Tartaruga\"",
    "genre": "indicação literária",
    "description": "Leitura em voz alta de indicação literária original, seguida de proposta de escrita de uma indicação literária pela turma.",
    "text": "Indicação literária\n\nTítulo: A Lebre e a Tartaruga\nGênero: Fábula\n\nEu recomendo essa fábula porque ela é curta, engraçada e ensina uma lição sem precisar de muitas palavras. A história conta a corrida entre um bicho muito rápido, mas convencido, e um bicho lento, mas persistente — e o final é uma surpresa boa para quem nunca ouviu.\n\nO que eu mais gostei foi imaginar a cara da lebre quando ela perde a corrida. Também gostei porque dá para ler em voz alta com vozes diferentes para cada personagem, o que deixa tudo mais divertido.\n\nEu indico essa fábula para quem gosta de histórias com animais e para quem, às vezes, se distrai e esquece de terminar o que começou — porque essa história mostra que terminar devagar é melhor do que nem terminar.\n\nVale muito a pena ler!",
    "steps": [
      "Explicar que uma indicação literária é um texto curto para recomendar um livro para outra pessoa.",
      "Ler o exemplo em voz alta, destacando as partes (título, o que gostou, para quem indica).",
      "Propor que a turma escreva, ditando ao professor, uma indicação literária de um livro que já leram."
    ]
  },
  {
    "theme": "Jornal da Escola: Vulcão em Erupção Agita a Feira de Ciências",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a Feira de Ciências da escola, seguida de roda de conversa sobre experimentos científicos.",
    "text": "JORNAL DA ESCOLA — Edição Especial de Ciências\n\nVulcão em Erupção Rouba a Cena na Feira de Ciências\n\nA Feira de Ciências da escola aconteceu na quadra coberta nesta terça-feira, e um dos experimentos mais concorridos foi o vulcão em erupção, feito pela turma do Professor André.\n\nCom garrafa pet, massa de modelar e muita imaginação, os alunos montaram uma montanha colorida bem no meio da mesa. Na hora da apresentação, eles misturaram bicarbonato de sódio com vinagre tingido de vermelho, e a “lava” subiu borbulhando para fora do vulcão, arrancando aplausos da plateia.\n\nAlém do vulcão, outras turmas mostraram experimentos com ímãs, plantas e bolhas de sabão gigantes. Mas foi a erupção que fez a fila mais comprida do dia.\n\n\"Eu nunca imaginei que bicarbonato e vinagre pudessem fazer tanta espuma!\", contou um aluno do 4º ano, ainda impressionado com o resultado.\n\nA Feira de Ciências acontece todo ano na escola e é sempre um dos momentos mais esperados pelos alunos.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre quais experimentos de ciências os alunos gostariam de fazer."
    ]
  },
  {
    "theme": "Jornal da Escola: Biblioteca Ganha Caixa de Livros Novos",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a chegada de livros novos na biblioteca, seguida de roda de conversa sobre livros preferidos.",
    "text": "JORNAL DA ESCOLA — Edição de hoje\n\nBiblioteca da Escola Recebe Caixa Cheia de Livros Novos\n\nChegou uma novidade animadora para quem gosta de ler: a biblioteca da escola recebeu, nesta semana, uma caixa cheia de livros novos, doados por uma editora parceira.\n\nForam mais de trinta livros diferentes, entre histórias em quadrinhos, contos de aventura e livros de curiosidades sobre animais. A bibliotecária Dona Rosa já organizou tudo nas estantes para que os alunos possam escolher suas próximas leituras.\n\n\"Ficamos muito felizes com essa doação. Agora vai ter novidade para todo mundo\", disse Dona Rosa, sorrindo enquanto carimbava os livros.\n\nAs turmas do 2º e do 3º ano já foram visitar a biblioteca para conhecer os títulos novos, e muitos alunos já fizeram empréstimo para levar um livro para casa.\n\nA escola pretende organizar uma roda de leitura especial nas próximas semanas para comentar as novidades.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre qual tipo de livro a turma mais gostaria de ganhar."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Organiza Brechó de Brinquedos",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um brechó de brinquedos organizado pela turma, seguida de roda de conversa sobre doar e trocar brinquedos.",
    "text": "JORNAL DA ESCOLA — Edição do Bazar\n\nTurma Organiza Brechó de Brinquedos para Arrecadar Fundos\n\nNo pátio da escola, a turma da Professora Juliana organizou, neste sábado, um brechó de brinquedos usados para arrecadar dinheiro para o passeio de fim de ano.\n\nOs alunos trouxeram bonecos, carrinhos, quebra-cabeças e jogos que não usavam mais, todos em bom estado. Cada família colaborou com o que tinha em casa, e as famílias da escola foram convidadas a visitar as mesinhas montadas para a venda.\n\nO dinheiro arrecadado foi guardado em um cofrinho da turma, e todos ajudaram a organizar os preços, sempre bem baratinhos.\n\n\"Foi muito legal ver todo mundo participando e ainda dar uma segunda vida para os brinquedos\", contou uma aluna da turma, orgulhosa da ideia.\n\nCom o sucesso do brechó, a turma já pensa em repetir a ação no próximo semestre.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre brinquedos que os alunos poderiam doar ou trocar."
    ]
  },
  {
    "theme": "Jornal da Escola: Dia da Leitura Tem Troca de Livros Favoritos",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o Dia da Leitura, seguida de roda de conversa sobre os livros favoritos de cada aluno.",
    "text": "JORNAL DA ESCOLA — Edição da Leitura\n\nDia da Leitura: Alunos Trocam Seus Livros Favoritos\n\nA escola realizou nesta quinta-feira o Dia da Leitura, um evento especial em que os alunos trouxeram de casa o livro favorito para trocar com os colegas.\n\nCada aluno escreveu um bilhetinho contando por que gostava daquele livro e colou na capa, antes de colocá-lo em uma mesa grande no pátio. Depois, todos puderam escolher um livro diferente para levar para casa e ler.\n\nA atividade foi organizada pela Professora Fernanda, que também preparou uma roda de conversa sobre os livros favoritos de cada turma.\n\n\"Foi muito legal descobrir livros que eu nunca tinha visto antes\", contou um aluno do 3º ano, mostrando o livro que escolheu.\n\nO Dia da Leitura foi um sucesso e a escola já pensa em repetir a troca de livros no próximo semestre.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre qual livro cada aluno traria para trocar com um colega."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Realiza Simulado de Evacuação",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um treino de evacuação por segurança, seguida de roda de conversa sobre regras de segurança.",
    "text": "JORNAL DA ESCOLA — Edição de Segurança\n\nEscola Realiza Simulado de Evacuação com Toda a Turma\n\nNesta manhã, a escola realizou um simulado de evacuação, treino importante para que todos saibam o que fazer em caso de emergência.\n\nQuando o sinal especial tocou, os alunos pararam o que estavam fazendo e seguiram, em fila e com calma, até o ponto de encontro no pátio, guiados pelos professores. O zelador seu Antônio ajudou a organizar a saída de cada turma pelos corredores.\n\nDepois do treino, a diretora explicou que o simulado serve para deixar todo mundo preparado, sem susto, caso algo assim aconteça de verdade.\n\n\"No começo fiquei um pouco nervosa, mas segui as instruções e ficou tudo bem\", contou uma aluna do 2º ano.\n\nO simulado terminou em poucos minutos e todos os alunos foram parabenizados pela organização.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre a importância de seguir as regras de segurança com calma."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma do 3º Ano Vence Olimpíada de Matemática",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma olimpíada de matemática na escola, seguida de roda de conversa sobre desafios de matemática.",
    "text": "JORNAL DA ESCOLA — Edição Especial de Matemática\n\nTurma do 3º Ano Vence Olimpíada de Matemática da Escola\n\nA escola realizou nesta semana a Olimpíada de Matemática, com desafios e problemas para todas as turmas do Ensino Fundamental. Depois de muitas contas e raciocínio, a turma do 3º ano B foi a grande campeã.\n\nOs alunos resolveram problemas de soma, subtração e até desafios com formas geométricas, em provas organizadas pelo Professor Marcelo. A disputa foi acirrada até o último minuto, com times de todas as turmas torcendo bastante.\n\nNa premiação, a turma vencedora recebeu um certificado e um aplauso geral no pátio.\n\n\"A gente treinou bastante em sala e ficou muito feliz com o resultado\", contou uma aluna da turma campeã, segurando o certificado.\n\nA Olimpíada de Matemática deve virar tradição na escola, com uma nova edição prevista para o ano que vem.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre desafios de matemática que a turma gostaria de tentar resolver."
    ]
  },
  {
    "theme": "Jornal da Escola: Coral Encanta Famílias na Reunião de Pais",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a apresentação do coral na reunião de pais, seguida de roda de conversa sobre música e canto.",
    "text": "JORNAL DA ESCOLA — Edição da Reunião de Pais\n\nCoral da Escola Encanta Famílias na Reunião de Pais\n\nNa reunião de pais desta semana, o coral da escola fez uma apresentação especial e emocionou as famílias presentes no auditório.\n\nOs alunos ensaiaram durante várias semanas com a Professora Patrícia e cantaram três músicas, incluindo uma canção sobre amizade escrita pela própria turma. Os pais aplaudiram de pé ao final da apresentação.\n\nAlém do coral, a reunião também trouxe informações importantes sobre o calendário escolar e os próximos eventos.\n\n\"Fiquei toda arrepiada vendo meu filho cantando com tanta alegria\", contou uma mãe presente na plateia.\n\nO coral já está ensaiando novas músicas para se apresentar na festa junina da escola.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre músicas que a turma gostaria de cantar em um coral."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Inaugura Mural Feito pelos Alunos",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a inauguração de um mural pintado pelos alunos, seguida de roda de conversa sobre arte na escola.",
    "text": "JORNAL DA ESCOLA — Edição da Arte\n\nEscola Inaugura Mural Colorido Feito pelos Alunos\n\nA parede do corredor principal da escola ganhou uma cara nova: um mural colorido, pintado pelos próprios alunos, foi inaugurado nesta sexta-feira.\n\nO desenho mostra árvores, animais e crianças de mãos dadas, representando a amizade entre as turmas. O projeto foi coordenado pela Professora Fernanda durante as aulas de arte, e cada turma pintou uma parte do desenho.\n\nNa inauguração, todos os alunos se reuniram no corredor para admirar o resultado e tirar fotos ao lado do mural.\n\n\"Foi muito bom pintar junto com os colegas e ver a arte da nossa turma na parede da escola\", contou um aluno participante do projeto.\n\nO mural já é o novo ponto favorito para fotos na escola.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre o que a turma gostaria de desenhar em um mural da escola."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Planta Árvore no Dia da Árvore",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o plantio de uma árvore no pátio da escola, seguida de roda de conversa sobre cuidar das plantas.",
    "text": "JORNAL DA ESCOLA — Edição Verde\n\nTurma Planta Árvore no Pátio para Comemorar o Dia da Árvore\n\nPara comemorar o Dia da Árvore, a turma do 2º ano plantou uma muda de árvore no pátio da escola nesta quarta-feira.\n\nCom a ajuda do zelador seu Antônio, os alunos cavaram um buraquinho, colocaram a muda com cuidado e regaram bastante água. Cada aluno pôde colocar um punhado de terra para ajudar a árvore a crescer forte.\n\nDepois do plantio, a Professora Juliana explicou a importância das árvores para o ar que respiramos e para os animais que vivem nelas.\n\n\"Vou voltar aqui todo ano para ver como a árvore está crescendo\", disse um aluno, todo animado com a novidade.\n\nA turma combinou de cuidar da muda juntos, regando sempre que for preciso.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como cada aluno poderia cuidar de uma planta em casa."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Criam Jornal Mural sobre Reciclagem",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um mural com dicas de reciclagem, seguida de roda de conversa sobre separar o lixo.",
    "text": "JORNAL DA ESCOLA — Edição da Reciclagem\n\nAlunos Criam Jornal Mural com Dicas de Reciclagem\n\nA turma do 3º ano A criou um jornal mural cheio de dicas sobre reciclagem, que agora está exposto no corredor da escola.\n\nCom cartolina, revistas recortadas e muita criatividade, os alunos explicaram como separar o lixo em papel, plástico, vidro e metal, além de dar dicas de como reaproveitar materiais em casa. O projeto foi feito durante as aulas de ciências com o Professor André.\n\nO mural já chamou a atenção de outras turmas, que pararam para ler as dicas durante o recreio.\n\n\"A gente pesquisou bastante para ter certeza de que as informações estavam certas\", contou uma aluna que ajudou a montar o mural.\n\nA escola pretende colocar lixeiras coloridas de reciclagem em todos os corredores em breve.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como separar o lixo em casa e na escola."
    ]
  },
  {
    "theme": "Jornal da Escola: Bombeiros Visitam a Escola para Palestra",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma visita de bombeiros à escola, seguida de roda de conversa sobre segurança contra incêndio.",
    "text": "JORNAL DA ESCOLA — Edição Especial dos Bombeiros\n\nBombeiros Visitam a Escola para Palestra sobre Segurança\n\nNesta terça-feira, a escola recebeu a visita de uma equipe de bombeiros, que veio conversar com os alunos sobre segurança e prevenção de incêndios.\n\nOs bombeiros mostraram os equipamentos que usam no trabalho, como capacete, mangueira e extintor, e explicaram, de um jeito bem simples, o que fazer em caso de fogo ou fumaça. Os alunos puderam fazer perguntas e até experimentar segurar a mangueira, sem água, é claro.\n\nA palestra aconteceu no pátio e todas as turmas do Ensino Fundamental participaram, encantadas com a apresentação.\n\n\"Achei incrível o tamanho do caminhão de bombeiro que eles trouxeram!\", contou um aluno, ainda empolgado.\n\nA escola agradeceu a visita e já pensa em convidar outros profissionais para futuras palestras.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre o que fazer em caso de fogo ou fumaça em casa."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Organiza Campanha de Agasalhos",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma campanha de arrecadação de agasalhos, seguida de roda de conversa sobre ajudar o próximo.",
    "text": "JORNAL DA ESCOLA — Edição do Agasalho\n\nTurma Organiza Campanha de Arrecadação de Agasalhos\n\nCom a chegada do frio, a turma do 2º ano B organizou uma campanha para arrecadar agasalhos e ajudar famílias que precisam de roupas quentinhas.\n\nDurante duas semanas, os alunos trouxeram casacos, cobertores e blusas de lã que não usavam mais, deixando tudo em uma caixa decorada na entrada da escola. A Professora Patrícia ajudou a organizar a triagem das doações.\n\nNo final da campanha, os agasalhos foram entregues para uma instituição do bairro que cuida de famílias em situação de necessidade.\n\n\"Fiquei feliz sabendo que meu casaco velho vai esquentar outra criança\", contou uma aluna que participou da campanha.\n\nA escola arrecadou mais de cem peças de roupa e já pensa em repetir a campanha no próximo inverno.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre formas de ajudar outras pessoas no frio."
    ]
  },
  {
    "theme": "Jornal da Escola: Feira do Livro Chega à Escola",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a Feira do Livro na escola, seguida de roda de conversa sobre os livros que os alunos gostariam de ganhar.",
    "text": "JORNAL DA ESCOLA — Edição da Feira do Livro\n\nFeira do Livro Chega à Escola Nesta Semana\n\nA tão esperada Feira do Livro chegou à escola e vai ficar montada no pátio coberto durante toda esta semana.\n\nAs bancas estão cheias de livros de aventura, poesia, quadrinhos e histórias em quadrinhos para todas as idades. Os alunos puderam visitar a feira durante o recreio, folhear os livros e escolher aqueles que mais chamaram atenção para pedir de presente aos pais.\n\nA bibliotecária Dona Rosa organizou também uma sessão de autógrafos com um escritor convidado, que leu um trecho de seu livro para as turmas.\n\n\"Eu já escolhi três livros que eu quero ganhar de aniversário\", contou um aluno animado, mostrando sua listinha.\n\nA Feira do Livro é um dos eventos mais esperados do ano na escola.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre qual livro cada aluno gostaria de escolher em uma feira."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Apresentam Peça de Teatro sobre Amizade",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma peça de teatro apresentada pelos alunos, seguida de roda de conversa sobre amizade.",
    "text": "JORNAL DA ESCOLA — Edição do Teatro\n\nAlunos Apresentam Peça de Teatro sobre Amizade\n\nA turma do 3º ano C apresentou, nesta sexta-feira, uma peça de teatro sobre amizade para toda a escola, no auditório.\n\nA história contava sobre dois amigos que brigam por causa de um brinquedo, mas aprendem a se desculpar e voltam a brincar juntos. Os alunos usaram fantasias coloridas e cenário feito à mão, com a ajuda da Professora Fernanda.\n\nA plateia acompanhou tudo com atenção e aplaudiu bastante no final, quando os dois personagens se abraçaram no palco.\n\n\"Decorar as falas foi difícil, mas valeu muito a pena ver todo mundo aplaudindo\", contou um aluno que fez o papel principal.\n\nA escola já planeja uma nova peça de teatro para o próximo bimestre.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como resolver brigas com amigos com um pedido de desculpas."
    ]
  },
  {
    "theme": "Jornal da Escola: Gincana Anima as Turmas da Escola",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma gincana entre as turmas, seguida de roda de conversa sobre brincadeiras em equipe.",
    "text": "JORNAL DA ESCOLA — Edição da Gincana\n\nEscola Promove Gincana Animada entre as Turmas\n\nA escola realizou nesta sexta-feira uma gincana cheia de brincadeiras entre as turmas do Ensino Fundamental, movimentando todo o pátio.\n\nForam provas de corrida com colher e ovo, cabo de guerra e caça ao tesouro com pistas escondidas pelo pátio. Cada turma escolheu uma cor para se identificar e torcer bastante durante as disputas.\n\nNo final, todas as turmas se reuniram para a contagem de pontos, e a gincana terminou com uma grande festa, mesmo sem um único vencedor, já que o clima foi de muita diversão para todos.\n\n\"A brincadeira que eu mais gostei foi a caça ao tesouro\", contou uma aluna, ainda ofegante da corrida.\n\nA gincana deve se tornar uma tradição anual na escola.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre qual brincadeira de gincana a turma mais gostaria de fazer."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Descobre Minhocário na Horta",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a descoberta de um minhocário na horta escolar, seguida de roda de conversa sobre a horta.",
    "text": "JORNAL DA ESCOLA — Edição da Horta\n\nTurma Descobre Minhocário na Horta da Escola\n\nDurante uma visita à horta escolar, a turma do 2º ano fez uma descoberta interessante: um minhocário, uma caixinha cheia de minhocas que ajudam a transformar restos de comida em adubo.\n\nO Professor André explicou que as minhocas comem cascas de frutas e verduras e produzem um adubo natural, ótimo para deixar as plantas da horta fortes e saudáveis. Os alunos puderam observar as minhocas de perto, com luvas, sem medo.\n\nA turma decidiu ajudar a alimentar o minhocário toda semana com restos da merenda, como cascas de banana e maçã.\n\n\"No começo tive nojinho, mas depois achei muito legal ver como elas ajudam as plantas\", contou uma aluna da turma.\n\nA horta da escola deve colher os primeiros vegetais nas próximas semanas.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como as minhocas ajudam as plantas a crescer."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Participam de Oficina de Robótica",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma oficina de robótica na escola, seguida de roda de conversa sobre tecnologia e invenções.",
    "text": "JORNAL DA ESCOLA — Edição da Robótica\n\nAlunos Participam de Oficina de Robótica na Escola\n\nA escola promoveu, nesta quinta-feira, uma oficina de robótica para os alunos do 3º ano, usando peças de montar e sensores simples.\n\nEm grupos, os alunos montaram pequenos robôs que se moviam ao apertar um botão, e aprenderam noções básicas de como programar comandos simples no computador. A atividade foi conduzida pelo Professor Marcelo, que incentivou todos a testar diferentes ideias.\n\nNo final da oficina, cada grupo apresentou seu robô para os colegas, explicando como ele funcionava.\n\n\"Foi a primeira vez que eu programei alguma coisa, e o robô realmente andou!\", contou um aluno, muito animado com o resultado.\n\nA escola pretende oferecer novas oficinas de robótica ao longo do ano.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre que tipo de robô a turma gostaria de inventar."
    ]
  },
  {
    "theme": "Jornal da Escola: Campanha de Brinquedos no Dia das Crianças",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma campanha de arrecadação de brinquedos no Dia das Crianças, seguida de roda de conversa sobre generosidade.",
    "text": "JORNAL DA ESCOLA — Edição do Dia das Crianças\n\nEscola Realiza Campanha de Arrecadação de Brinquedos\n\nPensando no Dia das Crianças, a escola organizou uma campanha de arrecadação de brinquedos para distribuir entre famílias da comunidade.\n\nDurante duas semanas, os alunos trouxeram brinquedos em bom estado, que não usavam mais, e depositaram em uma caixa decorada montada na entrada da escola. A Professora Juliana ajudou a organizar tudo por idade e tipo de brinquedo.\n\nNa última sexta-feira, os brinquedos arrecadados foram entregues a uma instituição parceira, que cuida de crianças da região.\n\n\"Foi muito bom saber que meu brinquedo vai deixar outra criança feliz no Dia das Crianças\", contou um aluno que participou da campanha.\n\nA escola agradeceu a generosidade de todas as turmas e já pensa em repetir a ação no ano que vem.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre a alegria de doar brinquedos para outras crianças."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Cria o Novo Mascote da Escola",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a votação do mascote da escola, seguida de roda de conversa sobre a criação de personagens.",
    "text": "JORNAL DA ESCOLA — Edição da Votação\n\nTurma Cria e Escolhe o Novo Mascote da Escola\n\nDepois de semanas de desenhos e ideias, a escola finalmente escolheu seu novo mascote em uma votação animada realizada nesta quarta-feira.\n\nCada turma criou um personagem diferente, entre eles um passarinho estudioso, um gatinho de óculos e uma coruja com mochila. Os desenhos ficaram expostos no pátio para que todos pudessem conhecer as opções antes de votar em uma urna feita de caixa de sapato.\n\nApós a contagem dos votos, a coruja com mochila, criada pela turma do 3º ano, foi a grande vencedora e agora vai representar a escola em eventos e cartazes.\n\n\"Fizemos vários rascunhos até chegar no desenho perfeito\", contou uma aluna da turma criadora do mascote.\n\nO novo mascote já ganhou até um nome escolhido pelos alunos.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre que mascote a turma criaria para representar a escola."
    ]
  },
  {
    "theme": "Jornal da Escola: Aula de Educação Física Vira Campeonato",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um campeonato de pular corda na aula de Educação Física, seguida de roda de conversa sobre esportes.",
    "text": "JORNAL DA ESCOLA — Edição Esportiva\n\nAula de Educação Física Vira Campeonato de Pular Corda\n\nA aula de Educação Física desta semana ganhou um clima de competição: os alunos participaram de um campeonato de pular corda organizado no pátio da escola.\n\nCada turma formou uma fila e, um a um, os alunos tentaram pular corda pelo maior tempo possível, sem errar. Teve gente pulando sozinho e também duplas pulando juntas, o que arrancou muitas risadas e aplausos dos colegas.\n\nO campeonato foi organizado pelo Professor Ricardo, que cronometrou cada tentativa com um relógio na mão.\n\n\"Treinei em casa a semana toda para conseguir pular mais tempo\", contou uma aluna, orgulhosa de seu resultado.\n\nNo final, todos os participantes receberam um aplauso especial pela dedicação durante o campeonato.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre outros jogos e esportes que a turma gosta de praticar."
    ]
  },
  {
    "theme": "Jornal da Escola: Gatinho Aparece no Pátio e Vira Mascote do Dia",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre um gatinho que aparece no pátio da escola e vira o mascote do dia, seguida de roda de conversa sobre como agir com calma ao encontrar um animal desconhecido.",
    "text": "JORNAL DA ESCOLA — Edição especial de animais\n\nGatinho surpreende alunos e vira mascote do dia na Escola Girassol\n\nNa manhã desta terça-feira, um gatinho de pelo cor de café apareceu caminhando tranquilo pelo pátio da Escola Municipal Girassol, bem na hora do intervalo. As crianças ficaram encantadas e logo formaram uma roda para observar o visitante peludo.\n\nA professora Cláudia percebeu que o gatinho estava calmo e sem coleira, então avisou a diretoria e pediu que os alunos não se aproximassem demais, para não assustá-lo. Aos poucos, o bichano se aproximou sozinho e aceitou um pouco de água.\n\n\"Ele parecia já conhecer a escola, andava tão à vontade!\", contou a professora Cláudia, sorrindo.\n\nA turma decidiu chamá-lo de Café, por causa da cor do pelo, e ele passou o dia sendo o mascote especial da escola, recebendo carinho e muita atenção. No fim da tarde, a coordenação combinou de procurar um tutor responsável para cuidar dele com carinho.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como agir com calma e cuidado ao encontrar um animal desconhecido."
    ]
  },
  {
    "theme": "Jornal do Bairro: Gato Resgatado da Árvore Vira Alívio da Vizinhança",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre o resgate de um gato que subiu em uma árvore muito alta, seguida de roda de conversa sobre a importância de pedir ajuda de adultos em situações de risco.",
    "text": "JORNAL DO BAIRRO — Edição de hoje\n\nGato do bairro é resgatado depois de subir em árvore muito alta\n\nMoradores da Rua das Acácias viveram um momento de susto e depois muito alívio nesta quarta-feira. O gato Fubá, conhecido de todos na vizinhança, subiu em uma árvore alta e não conseguia descer sozinho.\n\nO miado do gatinho chamou a atenção de quem passava, e logo um grupo de vizinhos se reuniu para ajudar. Como a árvore era muito alta, eles chamaram uma equipe de resgate especializada em animais.\n\nCom escada e muito cuidado, o resgatista conseguiu chegar até Fubá e trazê-lo para baixo, são e salvo, em poucos minutos.\n\n\"Foi um alívio enorme ver o gatinho a salvo\", contou a dona Iolanda, tutora de Fubá, abraçando o bichano.\n\nDepois do susto, Fubá recebeu muitos afagos e um potinho de petisco. Os vizinhos combinaram de ficar de olho sempre que ele sair para passear.\n\nPor hoje é só, pessoal! Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre a importância de pedir ajuda de um adulto em situações de risco com animais."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Encontra Gatinho Perdido e Ajuda a Reencontrar a Dona",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre uma turma que encontra um gatinho perdido perto da escola e ajuda a devolvê-lo para a dona, seguida de roda de conversa sobre ajudar animais perdidos com responsabilidade.",
    "text": "JORNAL DA ESCOLA — Edição de sexta-feira\n\nTurma do 2º ano encontra gatinha perdida e ajuda a reencontrar a dona\n\nNa manhã desta sexta-feira, os alunos do 2º ano da Escola Municipal Arco-Íris encontraram uma gatinha cor de amora, sem coleira, miando perto do portão da escola. Com medo de que ela estivesse perdida, avisaram logo a professora.\n\nA professora Beatriz ajudou as crianças a fazerem cartazes coloridos com a foto da gatinha, escritos com a ajuda da turma toda. Os cartazes foram colados em postes da rua, com um número de telefone para contato.\n\nNo fim da tarde, dona Rosa, moradora do bairro, reconheceu a gatinha Amora nos cartazes e foi correndo até a escola, muito aliviada.\n\n\"Eu procurei a Amora a manhã inteira, vocês são uns heróis!\", agradeceu dona Rosa, abraçando a gatinha.\n\nA turma ficou muito feliz em ajudar a reunir as duas de novo, e todos combinaram de sempre avisar um adulto quando encontrarem um bichinho perdido.\n\nEssa foi a notícia de hoje. Até mais!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como ajudar animais perdidos e a importância de avisar um adulto."
    ]
  },
  {
    "theme": "Jornal da Escola: Concurso de Desenho Tem Gatinhos Como Tema",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre um concurso de desenho na escola com gatinhos como tema, seguida de roda de conversa sobre criatividade e imaginação na hora de desenhar.",
    "text": "JORNAL DA ESCOLA — Edição especial de arte\n\nConcurso de desenho com tema gatinhos encanta toda a Escola Passarinho\n\nEsta semana, a Escola Estadual Passarinho promoveu um concurso de desenho para os alunos do Ensino Fundamental, e o tema escolhido foi \"Gatinhos\". Os corredores da escola ficaram coloridos com dezenas de desenhos de bichanos de todos os jeitos.\n\nCada turma pôde participar com desenhos feitos em sala, usando lápis de cor, giz de cera e até colagem. Teve gato listrado, gato preto, gato de óculos e até gato astronauta, criado pela imaginação dos alunos.\n\nUma comissão de professores escolheu os desenhos mais criativos, mas todos os trabalhos foram expostos no mural da entrada, para que as famílias pudessem admirar.\n\n\"Fiquei muito orgulhosa da criatividade da turma, cada desenho contava uma historinha diferente\", disse a professora Lívia, uma das organizadoras do concurso.\n\nO aluno Pedro, do 3º ano, venceu na categoria mais votada pelos colegas, com um desenho de um gatinho listrado tomando sol na janela. A escola já planeja um novo concurso para o próximo bimestre.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre criatividade e imaginação na hora de desenhar."
    ]
  },
  {
    "theme": "Jornal da Escola: Gata Tem Filhotes Pertinho da Escola",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre uma gata que tem filhotes perto da escola e é acompanhada pela turma, seguida de roda de conversa sobre os cuidados com filhotes recém-nascidos.",
    "text": "JORNAL DA ESCOLA — Edição especial de animais\n\nGata Luna tem filhotes perto da escola e turma acompanha o crescimento\n\nHá duas semanas, a gata Luna, que já vivia na vizinhança da Escola Municipal Girassol, teve quatro filhotinhos em uma caixa de papelão protegida, montada por um zelador da escola embaixo de uma árvore no pátio.\n\nDesde então, os alunos do 3º ano pediram para observar os filhotes de longe, sem mexer neles, para não assustar a mamãe gata. A professora aproveitou para explicar como os gatinhos recém-nascidos precisam de cuidado e calma.\n\nToda semana, a turma registra em um caderno como os filhotes estão crescendo: primeiro de olhinhos fechados, depois já andando meio bambos, e agora brincando uns com os outros.\n\n\"É emocionante ver os alunos tão cuidadosos e curiosos ao mesmo tempo\", contou o zelador seu Antônio, responsável por cuidar da caixinha.\n\nQuando os filhotes crescerem um pouco mais, a escola vai ajudar a encontrar famílias amorosas para cada um deles, com a Luna sempre por perto.\n\nPor hoje é só, pessoal! Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre os cuidados necessários com filhotes de animais recém-nascidos."
    ]
  },
  {
    "theme": "Jornal da Escola: Gatinho Invade Sala de Aula Durante a Prova",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre um gatinho que entra escondido na sala de aula durante uma prova, seguida de roda de conversa sobre como manter a calma diante de situações inesperadas.",
    "text": "JORNAL DA ESCOLA — Edição extra\n\nGatinho entra escondido na sala e vira a atração do dia durante a prova\n\nNa manhã desta quinta-feira, os alunos do 3º ano da Escola Municipal Girassol se preparavam para fazer uma prova de matemática quando um gatinho branco e cinza entrou escondido pela porta, que estava entreaberta.\n\nO bichano, que mais tarde descobriram se chamar Bolinha e pertencer a um morador da rua ao lado, andou tranquilo entre as carteiras, cheirando mochilas e provocando risadinhas baixinhas na turma.\n\nA professora Cláudia, com calma, pegou Bolinha no colo para que a prova pudesse continuar, e o gatinho ficou fazendo companhia, quietinho, em uma caixa forrada perto da mesa dela.\n\n\"Ele deixou a prova bem menos assustadora, até os mais nervosos relaxaram\", contou a professora, rindo.\n\nNo final da aula, o tutor de Bolinha veio buscá-lo, agradecendo a gentileza da turma. Todos combinaram que, da próxima vez, vão deixar um potinho de água na porta para ele.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como manter a calma diante de situações inesperadas."
    ]
  },
  {
    "theme": "Jornal do Bairro: Bombeiros Resgatam Gatinho Preso Embaixo de um Carro",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre o resgate de um gatinho preso embaixo de um carro, seguida de roda de conversa sobre o trabalho dos bombeiros e a importância de pedir ajuda profissional.",
    "text": "JORNAL DO BAIRRO — Edição de hoje\n\nBombeiros resgatam gatinho que ficou preso embaixo de um carro\n\nNa tarde desta segunda-feira, moradores da Rua das Acácias ouviram um miado insistente vindo de baixo de um carro estacionado. Ao se aproximarem, descobriram um gatinho cinza, ainda bem pequeno, preso entre as peças do veículo.\n\nComo ninguém conseguia tirá-lo sozinho, os vizinhos chamaram os bombeiros, que chegaram rapidamente com equipamentos apropriados para fazer o resgate com segurança, sem machucar o animal.\n\nApós alguns minutos de trabalho cuidadoso, o gatinho, batizado ali mesmo de Pingo pelos moradores, foi retirado sem nenhum arranhão e recebido com aplausos por quem estava acompanhando.\n\n\"Ficamos com o coração apertado, mas os bombeiros foram rápidos e gentis com ele\", contou o morador seu Carlos, que ajudou a chamar a equipe.\n\nPingo foi levado a um veterinário para uma revisão e, depois, uma família da vizinhança se ofereceu para adotá-lo e cuidar dele com muito carinho.\n\nPor hoje é só, pessoal! Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre o trabalho dos bombeiros e a importância de pedir ajuda profissional."
    ]
  },
  {
    "theme": "Jornal do Bairro: Vizinhos Organizam Campanha de Adoção de Gatinhos",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre vizinhos que organizam uma campanha para adotar gatinhos de rua, seguida de roda de conversa sobre a importância da adoção responsável de animais.",
    "text": "JORNAL DO BAIRRO — Edição especial\n\nMoradores organizam campanha de adoção para ajudar gatinhos de rua\n\nUm grupo de moradores do bairro Vila Nova decidiu se unir para ajudar os gatinhos que vivem soltos pelas ruas da região. A ideia surgiu depois que perceberam vários filhotes precisando de cuidado e alimentação.\n\nA campanha, batizada de \"Um Lar para Cada Gatinho\", reuniu vizinhos que ajudaram a levar os bichanos ao veterinário para checar a saúde de cada um antes de procurar novas famílias.\n\nCartazes coloridos foram espalhados pela vizinhança, com fotos dos gatinhos e um número de telefone para quem quisesse adotar com responsabilidade.\n\n\"Em poucos dias, quase todos os gatinhos já tinham uma família esperando por eles\", contou dona Helena, uma das organizadoras da campanha.\n\nA ação foi um sucesso, e os moradores já planejam repetir a campanha sempre que novos gatinhos precisarem de ajuda, mostrando que trabalho em equipe faz toda a diferença.\n\nEssa foi a notícia de hoje. Até mais!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre a importância da adoção responsável de animais de estimação."
    ]
  },
  {
    "theme": "Gazeta do Bairro: Gato de Estimação Aprende Truque Novo e Faz Sucesso",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre um gato de estimação que aprende um truque novo e vira sensação no bairro, seguida de roda de conversa sobre paciência e carinho no treinamento de animais.",
    "text": "GAZETA DO BAIRRO — Edição de hoje\n\nGato aprende a dar \"high five\" e vira sensação entre os vizinhos\n\nO gato Mel, de pelo alaranjado, sempre foi conhecido por ser esperto, mas ninguém esperava que ele aprenderia um truque tão engraçado. Depois de semanas de treino com petiscos, ele aprendeu a levantar a patinha para cumprimentar as pessoas.\n\nSeu tutor, o aluno Théo, do bairro Jardim das Flores, começou a treinar Mel por brincadeira, sem imaginar que o gato aprenderia tão rápido. Agora, sempre que alguém estende a mão, Mel responde com sua patinha.\n\nA novidade se espalhou entre os vizinhos, que passaram a visitar a casa só para ver o truque ao vivo.\n\n\"No começo eu achei que ele não ia aprender, mas o Mel me surpreendeu\", contou Théo, orgulhoso do gato.\n\nAgora Théo pensa em ensinar mais truques para Mel, sempre com paciência e muito carinho, sem forçar o gatinho a fazer nada que ele não queira.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre paciência e carinho no treinamento de animais de estimação."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Visita Abrigo de Gatos em Passeio Especial",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre uma turma que visita um abrigo de gatos em um passeio escolar, seguida de roda de conversa sobre os cuidados que um abrigo oferece aos animais.",
    "text": "JORNAL DA ESCOLA — Edição de passeio\n\nAlunos do 3º ano visitam abrigo de gatos e aprendem sobre cuidado animal\n\nNesta quarta-feira, a turma do 3º ano da Escola Estadual Passarinho fez um passeio especial até um abrigo de gatos da cidade, que cuida de bichanos à espera de uma nova família.\n\nNo local, os alunos conheceram vários gatinhos de cores e tamanhos diferentes e aprenderam, com a ajuda dos cuidadores, como alimentar, escovar e brincar com os animais de forma segura e gentil.\n\nA turma também ficou sabendo que muitos gatos chegam ao abrigo perdidos ou abandonados, e que a adoção responsável é uma forma importante de ajudar.\n\n\"Foi muito bonito ver o cuidado que cada gatinho recebe aqui todos os dias\", disse a professora Lívia, que organizou o passeio.\n\nAo final da visita, os alunos decidiram organizar uma arrecadação de ração e cobertores para doar ao abrigo, ajudando ainda mais os gatinhos que esperam por um lar.\n\nPor hoje é só, pessoal! Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre os cuidados que um abrigo de animais oferece aos bichanos."
    ]
  },
  {
    "theme": "Jornal da Escola: Gatinho Se Esconde na Mochila e Vai Parar na Escola",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre um gatinho que se esconde na mochila de um aluno e vai parar na escola, seguida de roda de conversa sobre como agir com cuidado diante de um imprevisto com animais.",
    "text": "JORNAL DA ESCOLA — Edição extra\n\nGatinho se esconde na mochila e faz viagem surpresa até a escola\n\nO aluno Rafael teve uma surpresa e tanto na manhã desta terça-feira. Ao abrir a mochila na sala de aula para pegar o caderno, encontrou um gatinho preto e branco escondido entre os materiais escolares.\n\nO gatinho, que provavelmente entrou na mochila enquanto ela estava aberta em casa, parecia calmo, apenas espiando tudo com curiosidade. Rafael avisou a professora na mesma hora, sem se assustar.\n\nA turma toda ficou animada com a visita inesperada, e a professora ajudou a acomodar o gatinho, batizado de Sardinha pela turma, em uma caixinha confortável até o fim das aulas.\n\n\"Eu nem percebi quando ele entrou, mas fiquei feliz que ele estava bem\", contou Rafael, sorrindo.\n\nNo final do dia, a família de Rafael veio buscá-lo junto com Sardinha, que passou a fazer parte da casa como novo integrante, agora sim, de propósito.\n\nEssa foi a notícia de hoje. Até mais!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como agir com calma diante de um imprevisto envolvendo um animal."
    ]
  },
  {
    "theme": "Jornal do Bairro: Feira de Adoção de Gatinhos Reúne Famílias na Praça",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre uma feira de adoção de gatinhos que acontece na praça do bairro, seguida de roda de conversa sobre a importância de adotar animais com responsabilidade.",
    "text": "JORNAL DO BAIRRO — Edição de fim de semana\n\nFeira de adoção de gatinhos reúne famílias na Praça da Alegria\n\nNeste sábado, a Praça da Alegria recebeu uma feira de adoção especial, organizada por voluntários da região para ajudar gatinhos que precisavam de um novo lar. Barraquinhas coloridas montaram um espaço confortável para os bichanos.\n\nCada gatinho tinha uma plaquinha com seu nome e um pouco de sua história, e os voluntários conversavam com cada família interessada para garantir que a adoção seria feita com responsabilidade e carinho.\n\nCrianças e adultos passaram a manhã brincando com os gatinhos, e muitos deles encontraram uma família disposta a cuidar bem para sempre.\n\n\"Ver cada gatinho saindo daqui com uma família feliz é a melhor recompensa\", contou dona Célia, uma das voluntárias organizadoras.\n\nAté o fim da tarde, quase todos os gatinhos já tinham encontrado um novo lar, e os organizadores já pensam em fazer outra feira em breve.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre a importância de adotar animais com responsabilidade."
    ]
  },
  {
    "theme": "Jornal da Escola: Gato da Vizinhança Vira Xerife Simpático da Horta",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre um gato da vizinhança que passa a 'vigiar' a horta da escola, seguida de roda de conversa sobre a relação entre animais e o cuidado com plantas e hortas.",
    "text": "JORNAL DA ESCOLA — Edição especial de animais\n\nGato da vizinhança adota a horta da escola e vira xerife simpático do lugar\n\nHá algumas semanas, o gato Canela, bem conhecido na vizinhança da Escola Municipal Girassol, descobriu a hortinha cuidada pelos alunos e passou a aparecer todos os dias para dar uma \"olhada\".\n\nDeitado entre os pés de alface e tomate, Canela parece vigiar o espaço, e os alunos adoram brincar que ele é o guarda oficial da horta, sempre de olho em passarinhos e insetos curiosos.\n\nA professora responsável pela horta percebeu que, desde que Canela passou a frequentar o lugar, as plantinhas não sofreram mais com bichinhos indesejados.\n\n\"Ele parece levar o trabalho muito a sério, fica ali paradinho, vigiando tudo\", contou a professora Beatriz, entre risos.\n\nOs alunos decidiram deixar sempre uma tigela de água por perto para agradecer a companhia de Canela, que virou parte da rotina divertida da horta escolar.\n\nPor hoje é só, pessoal! Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre a relação entre animais e o cuidado com plantas e hortas."
    ]
  },
  {
    "theme": "Gazeta do Bairro: Concurso Gato Mais Fofo do Bairro Tem Final Emocionante",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre o concurso 'Gato Mais Fofo do Bairro' e seu final emocionante, seguida de roda de conversa sobre respeito e carinho com os animais de estimação de todos.",
    "text": "GAZETA DO BAIRRO — Edição especial\n\nConcurso \"Gato Mais Fofo do Bairro\" tem final emocionante na praça\n\nNeste domingo, o bairro Jardim das Flores realizou a grande final do concurso \"Gato Mais Fofo do Bairro\", que reuniu dezenas de tutores e seus gatinhos na Praça da Alegria, todos muito bem cuidados e enfeitados.\n\nCada gatinho desfilou em um tapete improvisado, e o público aplaudia com carinho a cada um deles, sem nenhuma disputa de verdade, apenas muita festa e alegria entre os vizinhos.\n\nNo final, depois de muita votação animada, o gatinho Pipoca, de pelo branco e uma manchinha preta no olho, foi escolhido o mais fofo pelo público presente.\n\n\"A gente participa mais pela diversão do que para ganhar, foi um dia lindo\", contou seu Nelson, tutor de Pipoca, sorrindo bastante.\n\nTodos os gatinhos participantes ganharam um certificado de \"fofura\" e um potinho de petisco, e o bairro já está combinando a próxima edição do concurso.\n\nEssa foi a notícia de hoje. Até mais!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre respeito e carinho com os animais de estimação de todos."
    ]
  },
  {
    "theme": "Jornal da Escola: Gatinho Órfão Vira Mascote Querido da Turma",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre um gatinho órfão que é adotado por toda a turma como mascote da sala, seguida de roda de conversa sobre responsabilidade e trabalho em equipe no cuidado de um animal.",
    "text": "JORNAL DA ESCOLA — Edição especial\n\nGatinho órfão encontrado perto da escola vira mascote querido da turma\n\nNo início do mês, um gatinho muito pequeno e sozinho foi encontrado perto do portão da Escola Estadual Passarinho, sem nenhum sinal da mãe por perto. A professora Cláudia decidiu levá-lo para casa até que ele estivesse mais fortalecido.\n\nDurante esse tempo, a turma acompanhou de perto, com fotos e notícias trazidas pela professora, o crescimento do gatinho, batizado de Mingau por causa do pelinho clarinho.\n\nQuando ficou grandinho o suficiente, a turma decidiu, em conjunto, adotar Mingau como mascote da sala, com revezamento de cuidados combinado entre as famílias, sempre com a orientação de um adulto responsável.\n\n\"Foi lindo ver os alunos se organizando para cuidar dele com tanto carinho\", contou a professora Cláudia, emocionada.\n\nHoje, Mingau é o queridinho da turma, e as crianças aprenderam, na prática, o quanto cuidar de um animal exige responsabilidade e trabalho em equipe.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre responsabilidade e trabalho em equipe no cuidado de um animal."
    ]
  },
  {
    "theme": "Jornal do Bairro: Gata Resgatada da Chuva Vira Queridinha da Rua",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre uma gata resgatada da chuva que vira queridinha da rua, seguida de roda de conversa sobre como ajudar animais em dias de chuva ou frio.",
    "text": "JORNAL DO BAIRRO — Edição de hoje\n\nGata encontrada encharcada na chuva vira queridinha de toda a rua\n\nDurante uma forte chuva na última sexta-feira, moradores da Rua das Acácias avistaram uma gatinha cinza, completamente encharcada, abrigada debaixo de um carro, tremendo de frio.\n\nA vizinha dona Marta não pensou duas vezes: pegou uma toalha e, com cuidado, enrolou a gatinha para levá-la para dentro de casa, onde ofereceu um cantinho quentinho e um pouco de comida.\n\nApós se aquecer e descansar, a gatinha, batizada de Neve por causa do pelo claro, mostrou-se muito dócil e carinhosa com todos que se aproximavam.\n\n\"Ela parecia tão assustada, mas bastou um pouco de carinho para ela se acalmar\", contou dona Marta, com a gata enrolada no colo.\n\nCom o tempo, Neve se tornou conhecida por toda a rua, sendo visitada e mimada pelos vizinhos, que agora sempre ficam de olho nela nos dias de chuva.\n\nPor hoje é só, pessoal! Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como ajudar animais em dias de chuva ou frio."
    ]
  },
  {
    "theme": "Jornal da Escola: Gatinho Brincalhão Derruba Vaso e Faz a Turma Rir",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre um gatinho brincalhão que derruba um vaso de planta e faz a turma rir, seguida de roda de conversa sobre como lidar com imprevistos engraçados com bom humor.",
    "text": "JORNAL DA ESCOLA — Edição bem-humorada\n\nGatinho brincalhão derruba vaso de planta e vira a estrela do recreio\n\nNa tarde desta quinta-feira, o gatinho Biscoito, que vive na escola e já é conhecido de todos, decidiu perseguir uma borboleta durante o recreio da Escola Municipal Girassol e acabou esbarrando em um vaso de planta no corredor.\n\nO vaso caiu com um barulho engraçado, espalhando um pouco de terra pelo chão, e Biscoito saiu correndo, com o rabo todo arrepiado, arrancando gargalhadas de toda a turma que estava por perto.\n\nO zelador seu Antônio veio ajudar a limpar tudo rapidinho, sem nenhum estrago maior, enquanto os alunos ainda riam contando a cena uns para os outros.\n\n\"Ele é o bagunceiro mais fofo que já tivemos por aqui\", brincou seu Antônio, replantando a mudinha com cuidado.\n\nDepois da confusão, Biscoito recebeu carinho de todo mundo e a turma prometeu ajudar a cuidar melhor dos vasos, para as próximas perseguições de borboleta serem mais tranquilas.\n\nEssa foi a notícia de hoje. Até mais!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como lidar com imprevistos do dia a dia com bom humor."
    ]
  },
  {
    "theme": "Jornal do Bairro: Dupla de Gatinhos Gêmeos Nasce na Casa de Aluno",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre uma dupla de gatinhos gêmeos que nasce na casa de um aluno, seguida de roda de conversa sobre os cuidados com filhotes recém-nascidos.",
    "text": "JORNAL DO BAIRRO — Edição de hoje\n\nDupla de gatinhos gêmeos nasce na casa de aluno e encanta a vizinhança\n\nA família do aluno Miguel teve uma alegria dobrada na semana passada: a gata da casa, chamada Estrela, deu à luz dois filhotinhos muito parecidos, quase idênticos, que logo ganharam o apelido de gêmeos do bairro.\n\nOs gatinhos, batizados de Sol e Lua por causa das pelagens clara e escura, nasceram saudáveis e já estão abrindo os olhinhos, sempre grudados um no outro para dormir.\n\nMiguel contou com orgulho a novidade para os colegas de turma, que ficaram curiosos para acompanhar o crescimento da dupla nas próximas semanas.\n\n\"A gente nunca tinha visto dois gatinhos tão parecidos, é uma fofura só\", contou Miguel, todo animado.\n\nA família já está providenciando tudo o que os filhotes precisam, com muito carinho e paciência, e Miguel promete trazer fotos para mostrar aos amigos como Sol e Lua estão crescendo.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre os cuidados necessários com filhotes recém-nascidos."
    ]
  },
  {
    "theme": "Jornal do Bairro: Gato Desaparecido É Encontrado Dentro do Armário",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre um gato que desaparece por um dia e é encontrado dentro do armário da cozinha, seguida de roda de conversa sobre como procurar com calma um animal perdido em casa.",
    "text": "JORNAL DO BAIRRO — Edição de hoje\n\nGato desaparecido é encontrado dormindo dentro do armário da cozinha\n\nA família de dona Iolanda viveu um dia de preocupação depois que o gato Pandora sumiu de repente na manhã de terça-feira. Todos procuraram por baixo das camas, no quintal e até na rua, sem encontrar nenhum sinal do bichano.\n\nDepois de muitas horas de busca e bastante aflição, foi o filho mais novo da família quem teve a ideia de abrir o armário da cozinha, onde guardam potes e panelas, e lá estava Pandora, dormindo tranquilamente entre as toalhas.\n\nO gatinho havia entrado escondido no armário sem que ninguém percebesse e simplesmente cochilou o dia inteiro, sem imaginar toda a preocupação que causou.\n\n\"Foi um alívio enorme ver o gatinho a salvo, ainda mais dormindo tão tranquilo\", contou dona Iolanda, rindo do susto.\n\nDepois do episódio, a família combinou de sempre checar os armários antes de fechá-los, e Pandora ganhou até um cantinho especial só para os cochilos dele.\n\nPor hoje é só, pessoal! Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre como procurar com calma um animal de estimação perdido em casa."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Cria Casinha de Papelão Para Gatinho de Rua",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal, sobre uma turma que cria uma casinha de papelão para um gatinho de rua, seguida de roda de conversa sobre solidariedade e cuidado com animais de rua.",
    "text": "JORNAL DA ESCOLA — Edição especial de solidariedade\n\nTurma constrói casinha de papelão para proteger gatinho de rua do frio\n\nDepois de perceber que um gatinho de rua, chamado carinhosamente de Fumaça pelos alunos, costumava se abrigar perto do muro da Escola Estadual Passarinho, a turma do 2º ano teve uma ideia solidária: construir uma casinha só para ele.\n\nCom a ajuda da professora Beatriz, os alunos usaram caixas de papelão, tinta e um pouco de criatividade para montar um abrigo confortável, forrado com um cobertor velho, protegido da chuva e do vento.\n\nA casinha foi colocada em um cantinho seguro perto da escola, e desde então Fumaça passou a dormir ali, sempre visitado pelos alunos, que deixam água e comida todos os dias.\n\n\"Foi muito bonito ver a turma inteira se unindo para ajudar o gatinho\", contou a professora Beatriz, orgulhosa dos alunos.\n\nCom o abrigo pronto, Fumaça agora tem um cantinho quentinho para chamar de seu, e a turma aprendeu como pequenas atitudes podem fazer muita diferença na vida de um animal.\n\nEssa foi a notícia de hoje. Até mais!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Roda de conversa sobre solidariedade e cuidado com animais que vivem na rua."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Deixa a Escola Pronta para o Arraial",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a decoração da Festa Junina feita pela turma, seguida de roda de conversa sobre as tradições da festa junina.",
    "text": "JORNAL DA ESCOLA — Edição especial de Festa Junina\n\nEscola vira arraial colorido para a festa de junho\n\nNesta semana, os corredores da Escola Municipal Alegria ganharam bandeirinhas, balões e um sol de cartolina enorme na entrada. Os alunos do 3º ano B decidiram deixar tudo pronto para a Festa Junina que acontece na sexta-feira.\n\nA ideia surgiu numa roda de conversa: cada turma ficou responsável por decorar um espaço diferente. A turma da professora Fernanda cuidou do pátio, enchendo os varais com bandeirinhas coloridas feitas de papel crepom.\n\n\"Cortamos, colamos e ainda aprendemos sobre as cores, porque cada bandeirinha ficou de uma cor diferente\", contou a aluna Beatriz, 8 anos, mostrando o varal.\n\nAlém da decoração, os alunos ensaiam a quadrilha e combinam as roupas: chapéu de palha, chita e tranças. O zelador seu Joaquim ajudou a pendurar as luzes no palco improvisado do pátio.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre as tradições da Festa Junina: comidas, roupas, danças e por que ela é comemorada em junho."
    ]
  },
  {
    "theme": "Jornal da Escola: 2º Ano A Sorteia Amigo Secreto de Natal",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a organização do amigo secreto de Natal da turma, seguida de roda de conversa sobre a importância de presentear com carinho.",
    "text": "JORNAL DA ESCOLA — Edição de hoje\n\nTurma do 2º A sorteia amigo secreto de fim de ano\n\nNuma manhã cheia de risadas, os alunos do 2º ano A organizaram o tradicional amigo secreto de Natal. Cada criança escreveu seu nome num papelzinho e colocou dentro de uma caixa decorada com estrelas.\n\nA brincadeira foi ideia do próprio grupo, depois de uma conversa sobre presentear sem gastar muito dinheiro. Ficou combinado que os presentes seriam desenhos, bilhetes carinhosos ou pequenos objetos feitos à mão.\n\n\"Vou fazer um desenho do amigo que eu tirei, porque ele adora dinossauros\", contou o aluno Miguel, todo animado com o sorteio.\n\nA professora Laura lembrou a turma da importância de guardar segredo até o dia da troca, marcada para a última semana de aula antes das férias.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre a importância de presentear com carinho, mesmo com coisas simples e feitas à mão."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Recebe as Mães com Café da Manhã Especial",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o café da manhã especial em homenagem às mães, seguida de roda de conversa sobre a importância das mães e cuidadoras.",
    "text": "JORNAL DA ESCOLA — Edição especial do Dia das Mães\n\nEscola recebe as mães com café da manhã especial\n\nNa manhã de quarta-feira, o pátio da Escola Municipal Girassol se encheu de mesas enfeitadas com toalhas coloridas para o café da manhã em homenagem às mães dos alunos.\n\nA turma do 3º ano C ajudou a preparar tudo: dobraram guardanapos, escreveram cartões e organizaram uma mesa cheia de frutas, bolos e sucos trazidos pelas famílias.\n\n\"Fiz um cartão com um coração enorme escrito 'obrigada por tudo'\", disse a aluna Alice, entregando o presente para a mãe assim que ela chegou.\n\nDurante o encontro, os alunos cantaram uma música especial e a diretora dona Rosa agradeceu a presença de todas as famílias que puderam comparecer.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre a importância das mães e de quem cuida da gente todos os dias."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Preparam Surpresa para o Dia dos Pais",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a homenagem preparada pelos alunos para o Dia dos Pais, seguida de roda de conversa sobre a importância dos pais e cuidadores.",
    "text": "JORNAL DA ESCOLA — Edição de hoje\n\nAlunos preparam surpresa para o Dia dos Pais\n\nOs alunos do 2º ano B passaram a semana preparando uma homenagem especial para os pais, que serão recebidos na escola nesta sexta-feira com um mural de fotos e mensagens.\n\nCada criança escreveu um bilhete contando por que admira seu pai ou responsável, e os textos foram colados num painel enorme montado na entrada da escola.\n\n\"Escrevi que meu pai me ensina a andar de bicicleta todo domingo de manhã\", contou o aluno Enzo, sorrindo enquanto colava o bilhete.\n\nO professor Caio organizou também uma apresentação de música, em que a turma vai cantar para os convidados especiais logo na chegada.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre a importância dos pais e responsáveis na vida de cada criança."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Organiza Desfile Cívico de 7 de Setembro",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o desfile cívico de 7 de Setembro, seguida de roda de conversa sobre a Independência do Brasil.",
    "text": "JORNAL DA ESCOLA — Edição especial de 7 de Setembro\n\nEscola organiza desfile cívico para comemorar a Independência\n\nA Escola Municipal Horizonte Azul prepara um desfile cívico para o dia 7 de setembro, com participação de todas as turmas do Ensino Fundamental 1.\n\nOs alunos ensaiam o hino nacional e caminham pelo pátio carregando bandeiras do Brasil feitas em sala de aula com tinta guache verde e amarela.\n\n\"É a primeira vez que vou desfilar, estou super animada com o ensaio\", contou a aluna Manuela, do 3º ano A, ajustando sua faixa antes da fila.\n\nA professora Sofia explicou à turma o significado da data e por que é importante lembrar a história do país com respeito e alegria.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre o que é a Independência do Brasil e por que comemoramos o 7 de Setembro."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Celebra a Consciência Negra com Roda de Capoeira",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a roda de capoeira do Dia da Consciência Negra, seguida de roda de conversa sobre a valorização da cultura afro-brasileira.",
    "text": "JORNAL DA ESCOLA — Edição especial da Consciência Negra\n\nTurma celebra 20 de novembro com roda de capoeira no pátio\n\nNesta quinta-feira, o pátio da escola se transformou em roda de capoeira para celebrar o Dia da Consciência Negra, data que valoriza a cultura e a história do povo negro no Brasil.\n\nUm mestre de capoeira foi convidado para ensinar os movimentos básicos e tocar o berimbau, enquanto os alunos formavam a roda cantando junto, batendo palmas no ritmo certo.\n\n\"Aprendi que a capoeira é dança, luta e música ao mesmo tempo, é muito legal!\", contou o aluno Rafael, do 3º ano B, ainda ofegante da roda.\n\nDepois da atividade, a turma conversou sobre personalidades negras importantes da história e da cultura brasileira, valorizando suas conquistas e contribuições.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre a valorização da cultura afro-brasileira e a importância do 20 de novembro."
    ]
  },
  {
    "theme": "Jornal da Escola: Pátio Vira Cenário de Caça aos Ovos de Páscoa",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a caça aos ovos de Páscoa no pátio da escola, seguida de roda de conversa sobre celebrar em família.",
    "text": "JORNAL DA ESCOLA — Edição de Páscoa\n\nPátio da escola vira cenário de caça aos ovos de Páscoa\n\nNa manhã desta sexta-feira, os alunos do 2º ano C participaram de uma animada caça aos ovos de chocolate espalhados pelo pátio da escola.\n\nAntes da brincadeira, a professora Isadora explicou que a Páscoa é um momento de celebrar a família, a amizade e a renovação, cada um do seu jeito.\n\nEscondidos atrás de vasos de plantas e embaixo dos bancos, os ovos coloridos deixaram a turma eufórica. \"Achei três ovos, foi o melhor dia do ano!\", contou o aluno Davi, correndo pelo pátio.\n\nAo final, todos dividiram os doces encontrados e fizeram um desenho sobre o que mais gostaram na brincadeira da manhã.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre momentos de celebrar em família e com os amigos."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Criam Personagens Inventados para o Carnaval",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre os personagens inventados pelos alunos para o Carnaval, seguida de roda de conversa sobre criatividade e fantasia.",
    "text": "JORNAL DA ESCOLA — Edição especial de Carnaval\n\nAlunos criam personagens inventados para o Carnaval da escola\n\nA festa de Carnaval da Escola Municipal Arco-Íris teve um toque especial este ano: em vez de fantasias prontas, os alunos do 3º ano A inventaram seus próprios personagens.\n\nDurante duas semanas, a turma desenhou, deu nome e criou histórias para os personagens, que depois viraram fantasias feitas com material reciclável.\n\n\"Meu personagem se chama Capitão Papelão e ele salva o planeta reciclando lixo\", contou o aluno Théo, orgulhoso da fantasia que fez em casa.\n\nNo dia da festa, todos desfilaram pelo pátio ao som de marchinhas, apresentando suas criações para as outras turmas da escola.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre criatividade e sobre inventar personagens e fantasias próprias."
    ]
  },
  {
    "theme": "Jornal da Escola: Mural de Desejos Recebe o Ano Novo",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o mural de desejos feito para receber o Ano Novo, seguida de roda de conversa sobre sonhos e metas para o novo ano.",
    "text": "JORNAL DA ESCOLA — Edição de Ano Novo\n\nEscola recebe o Ano Novo com mural de desejos da turma\n\nPara comemorar a chegada do Ano Novo, os alunos do 2º ano A montaram um grande mural na entrada da escola, cheio de desejos escritos à mão.\n\nCada criança escreveu num papel colorido o que gostaria de aprender ou conquistar no ano que está começando, e colou a mensagem no painel decorado com estrelas.\n\n\"Meu desejo é aprender a nadar e ler livros mais grossos\", contou a aluna Helena, mostrando seu bilhete pendurado no mural.\n\nA professora Ana Clara aproveitou o momento para conversar sobre metas e sonhos, incentivando a turma a acreditar em suas próprias conquistas.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre sonhos e metas de cada aluno para o ano que está começando."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Viajam pelo Brasil das Lendas no Dia do Folclore",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre as lendas brasileiras apresentadas no Dia do Folclore, seguida de roda de conversa sobre a cultura popular brasileira.",
    "text": "JORNAL DA ESCOLA — Edição do Dia do Folclore\n\nAlunos viajam pelo Brasil das lendas no Dia do Folclore\n\nPara celebrar o Dia do Folclore, a escola organizou uma manhã especial contando lendas brasileiras como o Saci-Pererê, a Iara e o Curupira.\n\nOs alunos do 3º ano C se vestiram de personagens usando fantasias simples, feitas com meias e retalhos de tecido, e encenaram pequenas histórias para as outras turmas.\n\n\"Eu fiz o gorro vermelho do Saci com minha avó, foi muito divertido\", contou o aluno Gabriel, cheio de orgulho da fantasia.\n\nDepois das apresentações, a turma conversou sobre como as lendas mostram a diversidade cultural do país e nascem de histórias contadas de geração em geração.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre lendas e a cultura popular brasileira contada de geração em geração."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Organiza Festa Surpresa para o Aniversário da Escola",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a festa surpresa organizada para o aniversário da escola, seguida de roda de conversa sobre a história e o carinho pela escola.",
    "text": "JORNAL DA ESCOLA — Edição de hoje\n\nTurma organiza festa surpresa para o aniversário da escola\n\nEm segredo absoluto, os alunos do 3º ano B planejaram uma festa surpresa para comemorar o aniversário da Escola Municipal Alegria, que completa 30 anos nesta semana.\n\nA turma fez cartazes, balões e um bolo de mentirinha em cartolina para decorar o pátio, tudo escondido da direção até a hora certa da surpresa.\n\n\"Foi difícil guardar segredo, mas valeu muito a pena ver a cara da diretora\", contou a aluna Sofia, rindo do susto que deram.\n\nA diretora dona Rosa se emocionou ao entrar no pátio decorado e agradeceu o carinho de toda a turma pela lembrança especial.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre a história da escola e o carinho que a turma sente por ela."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Resgata Brincadeiras Antigas no Dia da Criança",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o resgate de brincadeiras antigas no Dia da Criança, seguida de roda de conversa sobre brincadeiras de diferentes épocas.",
    "text": "JORNAL DA ESCOLA — Edição especial do Dia da Criança\n\nEscola resgata brincadeiras antigas para o Dia da Criança\n\nPara comemorar o Dia da Criança, a escola organizou uma manhã inteira de brincadeiras antigas, como amarelinha, pião, corda e passa-anel, espalhadas pelo pátio.\n\nOs avós de alguns alunos foram convidados para ensinar as regras dos jogos que eles brincavam quando eram crianças, muitas décadas atrás.\n\n\"Nunca tinha jogado bolinha de gude, agora é minha brincadeira favorita\", contou o aluno Bernardo, todo empolgado com a novidade.\n\nAo final do dia, a turma conversou sobre como as brincadeiras mudam com o tempo, mas a diversão continua sendo sempre a mesma.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa comparando as brincadeiras de antigamente com as brincadeiras de hoje."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Monta Árvore de Natal com Garrafas Recicladas",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a árvore de Natal reciclada feita com garrafas pet, seguida de roda de conversa sobre reciclagem e sustentabilidade.",
    "text": "JORNAL DA ESCOLA — Edição verde de Natal\n\nTurma monta árvore de Natal com garrafas pet recicladas\n\nOs alunos do 2º ano B passaram semanas juntando garrafas pet para montar uma árvore de Natal sustentável na entrada da escola.\n\nCom ajuda da professora Valentina, as garrafas foram lavadas, pintadas de verde e encaixadas em formato de árvore, decoradas com enfeites feitos de tampinhas coloridas.\n\n\"É uma árvore ecológica, porque em vez de jogar as garrafas fora, a gente transformou elas em decoração\", explicou o aluno Lucas, ajustando o último enfeite.\n\nA atividade também serviu para conversar sobre reciclagem e a importância de cuidar do planeta em qualquer época do ano.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre reciclagem e formas de cuidar do planeta no dia a dia."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Celebra os Povos Indígenas com Contação de Histórias",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a contação de histórias do Dia dos Povos Indígenas, seguida de roda de conversa sobre a diversidade dos povos indígenas do Brasil.",
    "text": "JORNAL DA ESCOLA — Edição especial dos Povos Indígenas\n\nEscola celebra o Dia dos Povos Indígenas com contação de histórias\n\nPara valorizar a cultura dos povos indígenas brasileiros, a escola recebeu um contador de histórias que apresentou lendas e costumes de diferentes etnias do país.\n\nSentados em roda no pátio, os alunos do 3º ano A ouviram histórias sobre a relação dos povos indígenas com a natureza e aprenderam palavras em línguas indígenas.\n\n\"Eu não sabia que existem tantos povos indígenas diferentes no Brasil, cada um com sua língua\", contou a aluna Maria Eduarda, encantada com as histórias.\n\nDepois da roda de histórias, a turma fez desenhos inspirados na natureza para expor no mural da escola.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre a diversidade e a importância dos povos indígenas na cultura brasileira."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Participam da Quermesse de Fim de Ano",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a quermesse de fim de ano da escola, seguida de roda de conversa sobre trabalho em equipe e encerramento do ano letivo.",
    "text": "JORNAL DA ESCOLA — Edição de fim de ano\n\nAlunos participam da quermesse de encerramento do ano letivo\n\nA Escola Municipal Horizonte Azul recebeu famílias e alunos para a tradicional quermesse de fim de ano, com barracas de jogos, comidas e brincadeiras espalhadas pelo pátio.\n\nCada turma organizou uma barraca: a do 3º ano B era de pescaria, com peixinhos de papel e prêmios pequenos para quem pescasse certo.\n\n\"Ajudei a fazer os peixinhos e a organizar a fila, foi muito trabalho, mas valeu a pena\", contou a aluna Vitória, orgulhosa da barraca.\n\nA festa terminou com uma apresentação de dança preparada pelos alunos, encerrando o ano letivo com muita alegria e aplausos.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre trabalho em equipe e sobre o que a turma mais gostou no ano letivo."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Organiza Chá da Manhã para o Dia das Mães",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o chá da manhã organizado para o Dia das Mães, seguida de roda de conversa sobre gestos de carinho com a família.",
    "text": "JORNAL DA ESCOLA — Edição especial do Dia das Mães\n\nTurma organiza chá da manhã surpresa para as mães\n\nDiferente do café tradicional, a turma do 2º ano C decidiu organizar um chá da manhã elegante para homenagear as mães, com toalhas de mesa e flores de papel.\n\nOs alunos prepararam convites escritos à mão e escolheram músicas suaves para tocar durante o encontro, que aconteceu no refeitório da escola.\n\n\"Eu escolhi a música favorita da minha mãe para colocar na hora que ela chegasse\", contou o aluno Pedro, sorrindo perto da mesa decorada.\n\nAo final do chá, cada mãe recebeu uma flor de papel feita pelo próprio filho, como lembrança do dia especial.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre gestos de carinho que podemos ter com as mães e com a família."
    ]
  },
  {
    "theme": "Jornal da Escola: Festival Junino Reúne Quadrilhas de Todas as Turmas",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o festival junino com a quadrilha das turmas, seguida de roda de conversa sobre as tradições da festa junina.",
    "text": "JORNAL DA ESCOLA — Edição especial de Festa Junina\n\nFestival junino reúne quadrilhas de todas as turmas\n\nNo sábado, a escola realizou seu tradicional festival junino, com apresentações de quadrilha de todas as turmas do Ensino Fundamental 1.\n\nAs roupas coloridas, os laços e os chapéus de palha tomaram conta do palco, enquanto os pais assistiam animados às coreografias ensaiadas nas últimas semanas.\n\n\"Errei um passo, mas continuei sorrindo até o final\", contou o aluno Miguel, do 2º ano A, contando como foi sua apresentação.\n\nAlém da quadrilha, o festival teve barracas de comidas típicas e brincadeiras, fechando a noite com uma linda apresentação de luzes no palco.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre as tradições da festa junina e a origem da quadrilha."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Comemora Conquista com Festa na Sala",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a comemoração de uma conquista da escola, seguida de roda de conversa sobre a importância de comemorar conquistas em grupo.",
    "text": "JORNAL DA ESCOLA — Edição comemorativa\n\nTurma comemora conquista da escola com festa na sala\n\nA Escola Municipal Alegria venceu um concurso municipal de leitura, e a notícia foi recebida com muita festa pela turma do 3º ano B.\n\nAssim que souberam do resultado, os alunos decoraram a sala com balões e cartazes escritos \"Somos campeões de leitura!\", em comemoração ao prêmio conquistado.\n\n\"A gente leu tantos livros esse ano que nem contamos direito, mas valeu cada página\", contou a aluna Laura, sorrindo para os colegas.\n\nA diretora dona Rosa parabenizou a turma e prometeu uma tarde de cinema como recompensa pelo esforço de todos os alunos.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre a importância de comemorar conquistas em grupo e valorizar o esforço coletivo."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Celebra o Dia Mundial da Água",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre as brincadeiras educativas do Dia Mundial da Água, seguida de roda de conversa sobre economia de água no dia a dia.",
    "text": "JORNAL DA ESCOLA — Edição do Dia Mundial da Água\n\nEscola celebra o Dia Mundial da Água com brincadeiras educativas\n\nPara marcar o Dia Mundial da Água, a escola organizou uma manhã de brincadeiras e experiências sobre a importância de cuidar desse recurso tão precioso.\n\nOs alunos do 2º ano B participaram de um jogo de perguntas e respostas sobre economia de água e também plantaram mudas usando água reaproveitada da chuva.\n\n\"Aprendi que não posso deixar a torneira aberta enquanto escovo os dentes\", contou o aluno Gabriel, decidido a mudar o hábito em casa.\n\nA atividade terminou com um cartaz coletivo cheio de dicas para economizar água em casa e na escola.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre formas simples de economizar água no dia a dia."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Decoram a Escola para Receber o Papai Noel",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a decoração da escola para receber o Papai Noel, seguida de roda de conversa sobre a magia e o clima de fim de ano.",
    "text": "JORNAL DA ESCOLA — Edição de Natal\n\nAlunos decoram a escola para receber o Papai Noel\n\nNesta semana, os corredores da escola ganharam luzes, laços vermelhos e flocos de neve de papel, preparando tudo para a visita especial do Papai Noel.\n\nA turma do 3º ano C organizou a decoração da entrada, pendurando enfeites feitos em sala de aula com materiais recicláveis e muita criatividade.\n\n\"Fizemos flocos de neve de papel dobrado, mesmo sem neve de verdade aqui\", contou a aluna Alice, mostrando os enfeites brancos pendurados na janela.\n\nA visita está marcada para a última semana de aula, quando o Papai Noel vai entregar pequenas lembranças para toda a turma.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa sobre a magia e o clima de fim de ano nas famílias e na escola."
    ]
  },
  {
    "theme": "Jornal da Escola: Inverno Chega com Casacos e Cachecóis no Pátio",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a chegada do inverno e as roupas quentes no pátio, seguida de roda de conversa sobre as roupas de frio que os alunos gostam de usar.",
    "text": "JORNAL DA ESCOLA — Edição de hoje\n\nInverno chega e pátio vira desfile de casacos coloridos\n\nNesta semana, o inverno chegou de vez à escola, e o pátio ficou diferente logo cedo. Os alunos apareceram com casacos, gorros, cachecóis e luvas de todas as cores para brincar no recreio.\n\nA professora Célia, do 2º ano, contou que resolveu fazer uma roda de conversa sobre o frio antes da aula começar. \"É gostoso ver a turma toda agasalhada, cada um com uma peça diferente\", disse ela.\n\nO aluno Rafael, do 3º ano, apareceu com um gorro de lã laranja que ganhou da avó. \"Esquentei até a ponta do nariz!\", contou ele, rindo com os amigos.\n\nNa hora do recreio, a diretora pediu que todos tomassem cuidado para não esquecer o casaco pendurado na cadeira. Os alunos ajudaram os colegas menores a fechar o zíper e amarrar o cachecol.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre quais roupas quentes eles gostam de usar quando chega o frio."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Observa a Mudança das Folhas no Outono",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a mudança das folhas na chegada do outono, seguida de roda de conversa sobre as cores e mudanças que essa estação traz.",
    "text": "JORNAL DA ESCOLA — Edição especial de outono\n\nÁrvore do pátio muda de cor e vira aula ao ar livre\n\nO outono chegou trazendo uma surpresa para os alunos do 3º ano: a grande árvore do pátio da escola começou a soltar folhas amarelas e alaranjadas, cobrindo o chão como um tapete colorido.\n\nA professora Denise aproveitou a novidade para tirar a turma da sala e fazer uma aula diferente, sentada em roda perto da árvore. Os alunos observaram, tocaram e até desenharam as folhas que caíam.\n\n\"Por que as folhas mudam de cor, professora?\", perguntou a aluna Isadora, curiosa, segurando uma folha alaranjada na mão. A turma toda ficou esperando a resposta com atenção.\n\nO aluno Enzo resolveu juntar as folhas mais bonitas para fazer um mural na sala. \"Vou colar todas numa cartolina e escrever o nome do outono bem grande\", disse ele, animado.\n\nNo fim da aula, todos guardaram uma folhinha na mochila para mostrar em casa. Fim da edição de hoje. Até a próxima notícia!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre as cores e mudanças que aparecem na natureza durante o outono."
    ]
  },
  {
    "theme": "Jornal da Escola: Calor do Verão Anima Brincadeiras com Água",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre brincadeiras com água no recreio por causa do calor, seguida de roda de conversa sobre como as crianças se refrescam no verão.",
    "text": "JORNAL DA ESCOLA — Edição de verão\n\nRecreio molhado alegra tarde quente na escola\n\nCom o calor forte do verão, a escola decidiu liberar uma brincadeira especial no recreio desta sexta-feira: baldes de água e esponjas para refrescar a turma toda.\n\nOs alunos do 2º e do 3º ano se organizaram em fila para brincar com cuidado, sob o olhar atento do professor Bruno, que ajudou a molhar as esponjas sem exagerar na bagunça.\n\n\"Hoje o recreio ficou ainda mais gostoso, porque o sol estava de dar sede só de olhar\", contou a aluna Valentina, toda molhada e sorrindo de orelha a orelha.\n\nDepois da brincadeira, a merendeira dona Zilda preparou um suco bem geladinho para todo mundo. \"Depois de tanta correria, nada melhor que uma bebida fresquinha\", disse ela, servindo os copinhos.\n\nA diretora avisou que, nos dias mais quentes, a brincadeira com água pode se repetir, sempre com a autorização dos professores. Fim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre como cada um gosta de se refrescar nos dias muito quentes de verão."
    ]
  },
  {
    "theme": "Jornal da Escola: Primavera Enche o Jardim de Flores Novas",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o florescimento do jardim na primavera, seguida de roda de conversa sobre o cuidado com plantas e flores.",
    "text": "JORNAL DA ESCOLA — Edição especial de primavera\n\nJardim da escola fica colorido com a chegada da primavera\n\nA primavera chegou e trouxe uma novidade linda para o jardim da escola: as roseiras e os pés de margarida que a turma plantou no mês passado finalmente floresceram.\n\nFoi a professora Rita quem percebeu primeiro, logo cedo, ao abrir o portão da escola. Ela chamou os alunos do 2º ano para dar uma volta pelo jardim antes da primeira aula.\n\n\"Olha quantas cores apareceram! Rosa, amarelo, branco... parece um arco-íris no chão\", disse a aluna Marina, encantada, agachada perto das flores para sentir o cheiro.\n\nO aluno Davi, que ajudou a regar as plantinhas todos os dias, ficou orgulhoso do resultado. \"Eu sabia que ia dar certo, só precisava de sol e água\", contou ele, sorrindo bastante.\n\nA escola decidiu colocar uma placa perto do jardim pedindo para todos cuidarem das flores novas. Fim da edição especial de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre a importância de cuidar das plantas e flores que nascem na primavera."
    ]
  },
  {
    "theme": "Jornal da Escola: Chuva Forte Cancela Recreio ao Ar Livre",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma chuva forte que mudou os planos do recreio, seguida de roda de conversa sobre brincadeiras possíveis em dias de chuva.",
    "text": "JORNAL DA ESCOLA — Edição extra\n\nTemporal muda os planos do recreio desta quarta-feira\n\nUma chuva forte surpreendeu a escola bem na hora do recreio desta quarta-feira, e o sinal precisou tocar mais cedo para chamar todo mundo para dentro da sala.\n\nO professor Tiago avisou a turma pelo alto-falante que, por segurança, ninguém poderia ficar no pátio molhado. Os alunos correram para os corredores cobertos, ouvindo o barulho da chuva no telhado.\n\n\"Que pena, eu ia jogar bola hoje\", disse o aluno Miguel, olhando pela janela enquanto a água escorria pelo vidro. Mas logo a turma encontrou um jeito de se divertir mesmo assim.\n\nA inspetora Helena organizou um recreio diferente dentro da sala, com jogos de tabuleiro e desenhos. \"Chuva não estraga a diversão, só muda o lugar dela\", disse ela, distribuindo os jogos.\n\nAo final do dia, o sol voltou a aparecer e todos torceram por um recreio ao ar livre no dia seguinte. Fim da edição extra de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre brincadeiras divertidas que dá para fazer dentro da sala em dias de chuva."
    ]
  },
  {
    "theme": "Jornal da Escola: Volta às Aulas Anima os Corredores",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a volta às aulas depois das férias, seguida de roda de conversa sobre os sentimentos de reencontrar os amigos.",
    "text": "JORNAL DA ESCOLA — Edição de volta às aulas\n\nCorredores ficam cheios de abraços na volta às aulas\n\nDepois de um período de férias, a escola voltou a ficar cheia de vida nesta segunda-feira. Os corredores se encheram de risadas, abraços e histórias para contar.\n\nA professora Iracema recebeu a turma do 3º ano na porta da sala com um cartaz escrito \"Bem-vindos de volta!\". Muitos alunos chegaram com mochilas novas e cadernos ainda sem nenhuma folha usada.\n\n\"Eu estava com saudade dos meus amigos e até da professora\", contou a aluna Alice, dando um abraço apertado na colega Clara logo na entrada da sala.\n\nO aluno Pedro trouxe uma foto da viagem que fez com a família e mostrou para todo mundo antes da aula começar. \"Foi a melhor parte das minhas férias\", disse ele, sorrindo.\n\nA diretora aproveitou para desejar um ótimo ano a todos os alunos e professores. Fim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre como foi o reencontro com os amigos depois das férias."
    ]
  },
  {
    "theme": "Jornal da Escola: Férias de Julho Terminam com Muitas Novidades",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o fim das férias de julho e as novidades trazidas pela turma, seguida de roda de conversa sobre o que cada um fez nas férias.",
    "text": "JORNAL DA ESCOLA — Edição de julho\n\nFim das férias de julho traz muitas histórias para contar\n\nAs férias de julho terminaram e a turma do 2º ano voltou às aulas cheia de novidades para dividir com os colegas nesta manhã de retorno.\n\nO professor Nelson organizou uma roda de conversa logo na primeira aula para que cada aluno pudesse contar um pouco do que fez durante o descanso. A sala ficou animada com tantas histórias diferentes.\n\n\"Eu fui para a casa da minha avó e aprendi a fazer pipoca doce\", contou o aluno Gustavo, muito animado, enquanto os colegas escutavam com atenção.\n\nJá a aluna Sofia contou que passou as férias brincando no quintal com o irmão mais novo. \"A gente construiu uma casinha de caixa de papelão gigante\", disse ela, orgulhosa.\n\nNo fim da roda de conversa, todos concordaram que, apesar de terem gostado das férias, também estavam felizes de reencontrar os amigos na escola. Fim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Fazer uma roda de conversa em que cada aluno conta uma novidade das últimas férias."
    ]
  },
  {
    "theme": "Jornal da Escola: Dias Mais Curtos do Inverno Mudam a Rotina",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre os dias mais curtos do inverno, seguida de roda de conversa sobre como o sol nasce e se põe em horários diferentes ao longo do ano.",
    "text": "JORNAL DA ESCOLA — Edição de inverno\n\nSol se põe mais cedo e escola se adapta ao inverno\n\nCom a chegada do inverno, os dias ficaram mais curtos, e os alunos que saem da escola no fim da tarde perceberam que o céu já escurece bem mais cedo.\n\nA professora Célia comentou com a turma que, no inverno, o sol nasce mais tarde e se põe mais cedo, por isso a claridade dura menos tempo durante o dia.\n\n\"Hoje quando eu saí da escola, o céu já estava quase escuro, parecia noite!\", contou o aluno Bernardo, surpreso com a mudança que percebeu na saída.\n\nPara deixar a tarde mais aconchegante, a escola resolveu acender as luzes dos corredores um pouco mais cedo e pediu que os alunos usassem casacos na hora de ir embora.\n\nA aluna Larissa achou a novidade interessante e prometeu observar, todos os dias, a que horas o céu começa a escurecer. Fim da edição de inverno. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre como eles percebem que os dias ficam mais curtos no inverno."
    ]
  },
  {
    "theme": "Jornal da Escola: Semana do Frio Termina com Sopa Coletiva",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a semana do frio e a sopa coletiva feita pela turma, seguida de roda de conversa sobre comidas gostosas nos dias frios.",
    "text": "JORNAL DA ESCOLA — Edição especial\n\nSemana do frio termina com sopa feita por todos os alunos\n\nPara comemorar a chegada dos dias mais frios, a escola organizou a \"Semana do Frio\", com atividades sobre o inverno durante toda a semana, e o encerramento foi uma sopa coletiva preparada com a ajuda da turma.\n\nCada aluno trouxe um ingrediente de casa: cenoura, batata, mandioquinha e até um punhado de macarrão. A merendeira dona Zilda cozinhou tudo com muito cuidado na cozinha da escola.\n\n\"Adorei ver os alunos participando, cada um trouxe um pedacinho da sopa de casa\", contou dona Zilda, mexendo a panela grande enquanto o cheirinho tomava conta do refeitório.\n\nO aluno João, que trouxe a cenoura, ficou orgulhoso quando provou a sopa. \"Eu ajudei a fazer isso, ficou muito gostosa!\", disse ele, tomando mais uma colherada.\n\nA turma toda se sentou junto para comer e se aquecer nesse dia mais frio. Fim da edição especial de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre comidas quentinhas que eles gostam de comer nos dias frios."
    ]
  },
  {
    "theme": "Jornal da Escola: Ventania Derruba Brinquedos e Turma Ajuda a Arrumar",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma ventania que bagunçou o pátio, seguida de roda de conversa sobre trabalho em equipe e cuidado com os espaços comuns.",
    "text": "JORNAL DA ESCOLA — Edição do dia\n\nVento forte bagunça o pátio e alunos ajudam a organizar tudo\n\nUm vento forte passou pela escola na noite passada e, quando os alunos chegaram nesta manhã, encontraram alguns brinquedos do pátio espalhados e até uma cadeira virada de ponta-cabeça.\n\nO professor Márcio explicou para a turma que ventanias assim podem acontecer em certas épocas do ano e que não havia motivo para se assustar. \"Vamos arrumar tudo juntos, com calma\", disse ele.\n\nOs alunos formaram uma corrente para recolher os brinquedos e guardá-los no lugar certo. \"Parecia um quebra-cabeça gigante para montar de novo\", brincou a aluna Beatriz, carregando um pneu de brincar.\n\nO inspetor seu Antônio agradeceu a ajuda da turma. \"Com vocês, ficou tudo arrumado rapidinho\", disse ele, sorrindo, enquanto varria as últimas folhas espalhadas pelo chão.\n\nNo fim da manhã, o pátio já estava do jeitinho de sempre, pronto para o recreio. Fim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre a importância de ajudar a cuidar e arrumar os espaços da escola juntos."
    ]
  },
  {
    "theme": "Jornal da Escola: Verão Traz Sorvete de Brinde na Cantina",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um sorvete de brinde oferecido na cantina por causa do calor, seguida de roda de conversa sobre sabores de sorvete preferidos.",
    "text": "JORNAL DA ESCOLA — Edição de verão\n\nCantina surpreende alunos com sorvete de brinde no calor\n\nPara comemorar os dias quentes de verão, a cantina da escola preparou uma surpresa nesta quinta-feira: todo aluno que fosse ao recreio ganhou um sorvetinho de brinde.\n\nA funcionária da cantina, dona Marlene, contou que a ideia surgiu justamente por causa do calorão que estava fazendo. \"Pensei: nada melhor que um sorvete gelado num dia assim\", disse ela, distribuindo os potinhos.\n\nO aluno Lucas escolheu o sabor morango e comeu rapidinho antes que derretesse todo. \"Foi o melhor recreio do verão até agora!\", contou ele, com a boca ainda gelada.\n\nA aluna Helena preferiu o sabor chocolate e dividiu uma colherada com a amiga do lado. \"Sorvete sempre fica melhor quando a gente divide\", disse ela, rindo.\n\nA diretora avisou que, se o calor continuar forte, a surpresa pode se repetir em outros dias de verão. Fim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre os sabores de sorvete favoritos de cada um."
    ]
  },
  {
    "theme": "Jornal da Escola: Primeira Geada do Ano Surpreende os Alunos",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a primeira geada do ano numa manhã fria, seguida de roda de conversa sobre fenômenos do frio observados pelos alunos.",
    "text": "JORNAL DA ESCOLA — Edição fria de hoje\n\nGeada cobre o gramado da escola numa manhã gelada\n\nNesta manhã, os alunos que chegaram mais cedo tiveram uma surpresa gelada: o gramado perto da entrada da escola estava coberto por uma fina camada branca de geada, a primeira do ano.\n\nA professora Denise aproveitou o momento para levar a turma até perto da grade, com casacos bem fechados, para observar de longe o fenômeno raro naquela região. \"É a água virando gelo por causa do frio intenso\", explicou ela.\n\n\"Parece açúcar espalhado na grama!\", disse a aluna Isadora, admirada, apontando para o chão brilhante sob o sol fraco da manhã.\n\nO aluno Enzo quis tocar de leve na grama gelada e sentiu a mão gelar na hora. \"Está bem geladinho mesmo, professora!\", contou ele, esfregando as mãos uma na outra.\n\nCom o passar da manhã, o sol foi derretendo a geada aos poucos. Fim da edição fria de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre já terem visto geada, gelo ou muito frio em algum momento."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Planta Sementes de Primavera na Horta",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o plantio de sementes na horta da escola em comemoração à primavera, seguida de roda de conversa sobre o cuidado com hortas e plantas.",
    "text": "JORNAL DA ESCOLA — Edição da horta\n\nAlunos plantam sementes novas na horta para celebrar a primavera\n\nPara celebrar a chegada da primavera, a turma do 3º ano foi até a horta da escola nesta manhã para plantar sementes novas de flores e de alguns temperinhos.\n\nO professor Bruno separou as sementinhas em potes pequenos e explicou como cavar buraquinhos rasos na terra antes de colocar cada semente. \"Depois é só regar todos os dias e esperar\", disse ele.\n\nA aluna Valentina escolheu plantar sementes de girassol. \"Quero ver ele crescer bem alto, mais alto que eu!\", contou ela, sorrindo enquanto cobria a semente com terra.\n\nJá o aluno Rafael preferiu plantar cheiro-verde, pensando na merenda da escola. \"Assim a gente ajuda a temperar a comida da cantina\", disse ele, orgulhoso da ideia.\n\nA turma prometeu visitar a horta todas as semanas para acompanhar o crescimento das plantinhas. Fim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre o que é preciso para uma planta crescer bem na primavera."
    ]
  },
  {
    "theme": "Jornal da Escola: Recreio de Inverno Ganha Campeonato de Dominó",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um campeonato de dominó criado por causa do frio do inverno, seguida de roda de conversa sobre brincadeiras de mesa preferidas.",
    "text": "JORNAL DA ESCOLA — Edição do recreio\n\nFrio do inverno faz nascer campeonato de dominó na sala\n\nComo o inverno andava deixando o pátio frio demais para brincar muito tempo lá fora, a professora Rita teve uma ideia: organizar um campeonato de dominó dentro da sala durante o recreio.\n\nOs alunos se dividiram em duplas e formaram uma fila para jogar, enquanto esperavam a vez sentados em roda, bem agasalhados, tomando um chazinho quentinho que a escola preparou.\n\n\"Eu nunca tinha jogado dominó antes, mas já estou craque!\", contou o aluno Miguel, animado, batendo a última peça na mesa.\n\nA aluna Marina, que ganhou a primeira rodada, recebeu um aplauso de todos os colegas. \"Foi mais divertido que eu imaginava, quero jogar de novo amanhã\", disse ela, sorrindo.\n\nO campeonato de dominó fez tanto sucesso que a professora prometeu repetir a brincadeira em outros dias frios. Fim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre jogos de mesa que eles gostam de jogar em dias frios dentro de casa."
    ]
  },
  {
    "theme": "Jornal da Escola: Outono Enche o Pátio de Folhas Secas",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre as folhas secas do outono que viraram brincadeira no pátio, seguida de roda de conversa sobre brincadeiras ao ar livre nessa estação.",
    "text": "JORNAL DA ESCOLA — Edição de outono\n\nMonte de folhas secas vira brincadeira favorita do outono\n\nO outono espalhou tantas folhas secas pelo pátio da escola que os alunos resolveram transformar a limpeza em brincadeira nesta sexta-feira, antes mesmo do recreio começar.\n\nO inspetor seu Ivo separou um cantinho do pátio e ajuntou as folhas num montinho enorme, com a ajuda de vários alunos que carregavam as folhas em baldinhos coloridos.\n\n\"Posso pular no montinho, seu Ivo?\", perguntou o aluno Davi, todo animado, olhando para a pilha de folhas crocantes.\n\nCom a autorização do inspetor, alguns alunos pularam de leve por cima das folhas, rindo muito com o barulhinho que elas faziam. \"Parece um tapete que faz música quando pisa\", disse a aluna Alice.\n\nDepois da brincadeira, todos ajudaram a juntar as folhas de novo para o jardineiro levar embora. Fim da edição de outono. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre brincadeiras divertidas que dá para fazer com folhas secas no outono."
    ]
  },
  {
    "theme": "Jornal da Escola: Chuva de Verão Vira Brincadeira no Intervalo",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma chuva rápida de verão que animou o intervalo, seguida de roda de conversa sobre o som e o cheiro da chuva de verão.",
    "text": "JORNAL DA ESCOLA — Edição chuvosa\n\nChuva rápida de verão anima o intervalo de um jeito diferente\n\nUma chuva rápida de verão caiu bem na hora do intervalo desta terça-feira, mas em vez de estragar a diversão, ela deu início a uma brincadeira nova debaixo do telhado do pátio coberto.\n\nO professor Tiago propôs que a turma ficasse observando as gotas caindo e ouvindo o barulho da chuva no telhado, enquanto cantavam uma música sobre o verão.\n\n\"Adoro esse barulhinho da chuva, parece uma música de verdade\", disse a aluna Clara, batendo palmas no ritmo das gotas caindo.\n\nO aluno Pedro aproveitou uma poça pequena que se formou perto da entrada para observar o reflexo do céu na água, com cuidado para não se molhar demais.\n\nAssim que a chuva parou, o sol voltou a aparecer e o recreio continuou animado como sempre. Fim da edição chuvosa de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre o que eles sentem quando ouvem o barulho da chuva de verão."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola se Prepara para a Semana Mais Fria do Ano",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre dicas de agasalho para a semana mais fria do ano, seguida de roda de conversa sobre formas de se proteger do frio intenso.",
    "text": "JORNAL DA ESCOLA — Edição de última hora\n\nEscola avisa: semana mais fria do ano está chegando\n\nA direção da escola avisou nesta quarta-feira que a próxima semana deve ser a mais fria do ano, e pediu que todos os alunos vinham preparados com casacos bem quentinhos.\n\nA professora Iracema aproveitou o aviso para dar algumas dicas simples de como se agasalhar direito: usar mais de uma camada de roupa, não esquecer meias grossas e sempre trazer um cachecol na mochila.\n\n\"Quem se agasalha direito consegue aproveitar o recreio sem sentir tanto frio\", explicou ela para a turma, enquanto mostrava um desenho de um menino bem vestido para o inverno.\n\nO aluno João prometeu já separar o casaco mais quente que tinha em casa. \"Vou pedir para minha mãe separar o gorro também\", disse ele, animado com o aviso.\n\nA escola pediu ainda que as famílias mandassem uma garrafinha de água morna nos dias mais gelados. Fim da edição de última hora. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre outras dicas de como se proteger bem nos dias mais frios do ano."
    ]
  },
  {
    "theme": "Jornal da Escola: Sol Forte do Verão Pede Boné e Protetor Solar",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre o reforço do uso de boné e protetor solar por causa do sol forte do verão, seguida de roda de conversa sobre cuidados com o sol.",
    "text": "JORNAL DA ESCOLA — Edição do sol\n\nEscola pede boné e protetor solar por causa do sol forte\n\nCom o sol bem forte destes dias de verão, a escola decidiu reforçar um aviso importante para toda a turma: usar boné e passar protetor solar antes das atividades ao ar livre.\n\nO professor Nelson explicou, numa roda de conversa, que o sol do verão pode machucar a pele se a gente ficar exposto por muito tempo sem proteção. \"Por isso o boné e o protetor solar são tão importantes\", disse ele.\n\nA aluna Sofia contou que sua mãe já separa o protetor solar toda manhã antes de vir para a escola. \"Ela passa em mim antes de eu sair de casa\", disse ela, mostrando o bonezinho amarelo que usava.\n\nO aluno Gustavo, que esqueceu o boné em casa, prometeu não esquecer mais. \"Amanhã eu já deixo separado perto da mochila\", disse ele, um pouco encabulado.\n\nA escola combinou de deixar um aviso na entrada, lembrando todo mundo da proteção contra o sol. Fim da edição do sol. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre outros cuidados importantes para os dias de sol forte no verão."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma do 2º Ano Vence Campeonato de Futebol de Botão",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um campeonato de futebol de botão vencido pela turma do 2º ano, seguida de roda de conversa sobre trabalho em equipe nos esportes.",
    "text": "JORNAL DA ESCOLA — Edição de hoje\n\nTurma do 2º Ano é a grande campeã do Campeonato de Futebol de Botão!\n\nNa manhã desta quinta-feira, a escola viveu momentos de muita emoção. Aconteceu a final do Campeonato de Futebol de Botão, disputada no pátio coberto, entre a turma do 2º ano A e a turma do 3º ano B.\n\nO jogo foi disputadíssimo, com três gols de cada lado, até que, no último minuto, o aluno Pedro Henrique fez o gol da vitória com um botão amarelo bem treinado. A torcida gritou de alegria!\n\n\"Treinamos toda semana no recreio para chegar preparados\", contou a aluna Luiza, capitã do time campeão.\n\nA professora Marta, responsável pela atividade, entregou uma medalha de papel colorido para cada jogador. \"O mais importante foi ver o respeito entre as equipes\", disse ela, sorrindo.\n\nO campeonato faz parte do projeto de esportes de mesa da escola e deve ganhar uma nova edição no próximo semestre.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre a importância do trabalho em equipe e do respeito nos esportes."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Participam de Oficina de Reciclagem com Garrafas PET",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma oficina de reciclagem com garrafas pet realizada na escola, seguida de roda de conversa sobre reciclagem e cuidado com o meio ambiente.",
    "text": "JORNAL DA ESCOLA — Edição especial de meio ambiente\n\nEscola realiza oficina de reciclagem com garrafas pet!\n\nNesta terça-feira, os alunos do Ensino Fundamental participaram de uma oficina especial de reciclagem, organizada pelo grêmio estudantil. Cada criança trouxe de casa uma garrafa pet vazia e limpa para transformar em um objeto novo.\n\nCom tesoura sem ponta, tinta e muita criatividade, as garrafas viraram potinhos para lápis, vasinhos de planta e até brinquedos de arremesso. A atividade aconteceu no pátio da escola, sob o sol da manhã.\n\n\"Eu não sabia que dava para fazer tanta coisa com uma garrafa que eu ia jogar fora\", disse o aluno Gabriel, todo orgulhoso do seu potinho azul.\n\nA professora Cristina, que ajudou a organizar a oficina, explicou que o objetivo é mostrar que o lixo pode virar material útil. \"Reciclar é cuidar do nosso planeta\", ensinou ela para a turma.\n\nOs objetos criados ficarão expostos no mural da escola durante toda a semana.\n\nEssa foi a notícia de hoje. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre a importância de reciclar e de reaproveitar materiais em casa."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Cria Horta Suspensa com Garrafas Recicladas",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a criação de uma horta suspensa com garrafas recicladas, seguida de roda de conversa sobre reaproveitamento de materiais e cultivo de plantas.",
    "text": "JORNAL DA ESCOLA — Edição de notícias verdes\n\nAlunos criam horta suspensa usando garrafas recicladas!\n\nNa manhã de quarta-feira, a turma do 3º ano surpreendeu a escola toda com uma novidade: uma horta suspensa feita com garrafas pet penduradas na parede do corredor.\n\nCom a ajuda do professor Ricardo, os alunos cortaram as garrafas ao meio, fizeram furos para a água escorrer e plantaram mudas de alface, cebolinha e salsinha. Depois, penduraram tudo em um varal de corda.\n\n\"Ficou parecendo um jardim pendurado, bem diferente!\", contou a aluna Sofia, animada.\n\nO professor Ricardo explicou que a horta suspensa economiza espaço e ainda reaproveita garrafas que seriam jogadas fora. \"Daqui a algumas semanas, vamos colher e usar tudo na nossa salada\", contou ele à reportagem do jornal.\n\nA turma ficou responsável por regar as plantinhas todos os dias, na hora do recreio.\n\nPor hoje é só, pessoal. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre outras formas de reaproveitar materiais para cultivar plantas."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Aprende a Fazer Pipoca Doce em Aula de Culinária",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma aula de culinária em que a turma aprendeu a fazer pipoca doce, seguida de roda de conversa sobre alimentos que gostamos de preparar em casa.",
    "text": "JORNAL DA ESCOLA — Edição de hoje\n\nCheiro de pipoca doce toma conta da escola!\n\nNesta sexta-feira, a turma do 2º ano teve uma aula bem gostosa: culinária! Com a ajuda da merendeira Dona Célia, os alunos aprenderam a fazer pipoca doce, direto na cozinha da escola.\n\nCada criança pôde ajudar em uma etapa: uma mexia o milho, outra colocava o açúcar e outra experimentava o resultado, é claro, depois de esfriar. O cheirinho doce espalhou-se por todos os corredores.\n\n\"Eu nunca tinha visto a pipoca ficar cor-de-rosa desse jeito!\", disse o aluno Théo, morrendo de rir com a pipoca colorida.\n\nDona Célia contou que a receita é simples e pode ser feita em casa com a ajuda de um adulto. \"O importante é ter cuidado perto do fogo\", avisou ela às crianças.\n\nNo final, todos se sentaram no pátio para saborear juntos a pipoquinha quentinha.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre receitas que já ajudaram a preparar em casa."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Recebe Doação de Instrumentos Musicais",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a doação de instrumentos musicais recebida pela escola, seguida de roda de conversa sobre música e instrumentos favoritos.",
    "text": "JORNAL DA ESCOLA — Edição especial de música\n\nEscola ganha instrumentos musicais novinhos!\n\nUma notícia animou toda a escola nesta segunda-feira: a escola recebeu uma doação de instrumentos musicais de uma família da comunidade. Chegaram violões, teclados, pandeiros e até um pequeno xilofone.\n\nOs instrumentos foram entregues pela manhã, no pátio, e logo os alunos se reuniram ao redor, curiosos para experimentar cada som.\n\n\"Eu sempre quis tocar teclado e agora vou poder aprender aqui na escola!\", contou a aluna Helena, com os olhos brilhando.\n\nO professor de música, Fernando, agradeceu a doação e explicou que os instrumentos serão usados nas aulas semanais e também em apresentações especiais. \"Agora nossas aulas de música vão ficar ainda mais completas\", comemorou ele.\n\nA diretora da escola disse que pretende organizar um pequeno show no final do ano, para toda a turma mostrar o que aprendeu.\n\nEssa foi a notícia de hoje. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre instrumentos musicais que conhecem ou gostariam de aprender a tocar."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Participam de Campanha de Plantio de Árvores no Bairro",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma campanha de plantio de árvores no bairro, seguida de roda de conversa sobre a importância das árvores para o meio ambiente.",
    "text": "JORNAL DA ESCOLA — Edição especial de meio ambiente\n\nAlunos plantam árvores nas ruas do bairro!\n\nNo sábado de manhã, um grupo de alunos da escola, acompanhado dos pais e de alguns professores, participou de uma campanha de plantio de árvores organizada pela prefeitura do bairro. Ao todo, foram plantadas quinze mudas de árvores nativas.\n\nCada criança recebeu uma muda, uma pá pequena e luvas para colocar a mão na terra. Depois de plantar, todos regaram as mudinhas com muito cuidado.\n\n\"Vou voltar aqui daqui a um ano para ver minha árvore crescendo\", disse o aluno Bernardo, orgulhoso da sua muda de ipê.\n\nA professora Joana, que organizou a saída da escola, explicou que as árvores ajudam a refrescar as ruas e dão casa para os passarinhos. \"Cada árvore plantada é um presente para o futuro\", disse ela ao grupo.\n\nA prefeitura prometeu voltar ao bairro em alguns meses para cuidar das mudinhas junto com as crianças.\n\nPor hoje é só. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre por que as árvores são importantes para as cidades."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Cria Banda Escolar com Instrumentos Reciclados",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a criação de uma banda escolar com instrumentos reciclados, seguida de roda de conversa sobre música feita com materiais reaproveitados.",
    "text": "JORNAL DA ESCOLA — Edição especial de música\n\nSurge a primeira banda da escola feita com instrumentos reciclados!\n\nNesta quinta-feira, a turma do 3º ano apresentou um projeto muito especial: uma banda montada inteiramente com instrumentos reciclados. Os alunos usaram latas, potes, canos de PVC e elásticos para criar tambores, chocalhos e violões improvisados.\n\nA apresentação aconteceu no pátio, durante o recreio, e reuniu alunos de várias turmas para assistir e bater palma no ritmo da música.\n\n\"Meu tambor é feito de lata de leite em pó, mas o som fica ótimo!\", contou o aluno Danilo, batucando animado.\n\nA professora Renata, que ajudou no projeto, explicou que a ideia surgiu durante as aulas sobre reaproveitamento de materiais. \"Eles perceberam que música pode nascer de qualquer coisa\", contou ela, orgulhosa da turma.\n\nA banda já tem até nome: Bandinha do Reaproveita. A próxima apresentação está marcada para a festa junina da escola.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre outros materiais que poderiam virar instrumentos musicais."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Promove Torneio de Xadrez entre as Turmas",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um torneio de xadrez entre as turmas da escola, seguida de roda de conversa sobre paciência e concentração nos jogos.",
    "text": "JORNAL DA ESCOLA — Edição de hoje\n\nTorneio de xadrez agita a escola nesta semana!\n\nComeçou nesta segunda-feira o Torneio de Xadrez entre as turmas do Ensino Fundamental. As partidas acontecem na biblioteca, durante o horário do recreio, e já reúnem dezenas de alunos curiosos assistindo em silêncio.\n\nCada turma escolheu dois representantes para jogar. As peças se movem com calma pelo tabuleiro, enquanto os colegas torcem baixinho para não atrapalhar a concentração dos jogadores.\n\n\"Xadrez ensina a gente a pensar antes de agir\", contou o aluno Otávio, um dos representantes do 3º ano, depois de vencer sua primeira partida.\n\nO professor Cláudio, organizador do torneio, explicou que o objetivo não é só competir, mas aprender com calma e paciência. \"Aqui, o mais importante é pensar bem antes de mover a peça\", disse ele aos participantes.\n\nA grande final está marcada para sexta-feira, no pátio, com direito a medalhas para os dois finalistas.\n\nEssa foi a notícia de hoje. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre jogos que exigem paciência e concentração."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Visitam Zoológico e Conhecem Animais de Perto",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma visita da turma a um zoológico, seguida de roda de conversa sobre animais e a preservação da natureza.",
    "text": "JORNAL DA ESCOLA — Edição especial de passeio\n\nTurma do 2º ano visita o zoológico da cidade!\n\nNa quarta-feira, os alunos do 2º ano saíram da escola bem cedo para um passeio muito esperado: uma visita ao zoológico da cidade. O ônibus saiu cheio de crianças animadas e cheias de perguntas.\n\nDurante o passeio, os alunos conheceram araras coloridas, macacos brincalhões e até um tucano bem de perto. Um guia explicou como cada animal vive e do que se alimenta.\n\n\"Eu adorei ver a onça-pintada, ela é enorme!\", contou a aluna Manuela, ainda impressionada com o passeio.\n\nA professora Vanessa, que acompanhou a turma, aproveitou para explicar sobre a importância de preservar os animais e seus habitats. \"Cada bicho tem um papel importante na natureza\", ensinou ela durante o caminho de volta.\n\nDe volta à escola, os alunos desenharam os animais favoritos que viram durante o passeio.\n\nPor hoje é só, pessoal. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre animais que gostariam de conhecer de perto e por que devemos preservá-los."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Organiza Campeonato de Pipa no Fim de Semana",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um campeonato de pipa organizado pela turma no fim de semana, seguida de roda de conversa sobre segurança nas brincadeiras ao ar livre.",
    "text": "JORNAL DA ESCOLA — Edição de fim de semana\n\nCéu se enche de pipas coloridas no campeonato da turma!\n\nNo sábado à tarde, alunos do 3º ano se reuniram na praça perto da escola para um animado campeonato de pipa. Cada criança levou sua própria pipa, feita em casa com a ajuda da família.\n\nCom o vento forte da tarde, as pipas subiram rápido, e logo o céu ficou cheio de cores. Houve prêmio para a pipa mais alta, a mais colorida e a mais criativa.\n\n\"Minha pipa é toda decorada com estrelas, eu mesma pintei!\", contou a aluna Isadora, orgulhosa da sua criação.\n\nO professor Wagner, que ajudou a organizar o evento, lembrou as crianças sobre a importância de soltar pipa em local seguro, longe de fios elétricos. \"Segurança em primeiro lugar, depois a diversão\", avisou ele antes do início.\n\nNo fim da tarde, todos se despediram combinando um novo campeonato para o próximo mês.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre cuidados de segurança ao soltar pipa ou brincar ao ar livre."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Inaugura Sala de Tecnologia com Computadores Novos",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a inauguração de uma sala de tecnologia na escola, seguida de roda de conversa sobre o uso dos computadores para aprender.",
    "text": "JORNAL DA ESCOLA — Edição especial de tecnologia\n\nEscola inaugura sala de tecnologia com computadores novos!\n\nNesta terça-feira, a escola abriu oficialmente sua nova sala de tecnologia. O espaço, que antes era um depósito, agora tem dez computadores novos, todos com internet e programas educativos.\n\nA diretora cortou uma fitinha na porta da sala, e os alunos entraram em fila, curiosos para conhecer a novidade. Cada turma terá uma aula por semana no novo espaço.\n\n\"Eu nunca tinha usado um computador sozinho, vai ser demais aprender aqui\", contou o aluno Ian, todo empolgado.\n\nA professora Patrícia, responsável pelas aulas de tecnologia, explicou que os alunos vão aprender desde o básico, como ligar e desligar o computador, até pequenos jogos educativos. \"A tecnologia é uma ferramenta para aprender ainda mais\", disse ela à turma.\n\nA primeira aula na sala nova já está marcada para a próxima semana.\n\nEssa foi a notícia de hoje. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre como os computadores podem ajudar a aprender coisas novas."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Criam Joguinho Simples em Aula de Informática",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a criação de um joguinho simples em aula de informática, seguida de roda de conversa sobre jogos e criatividade.",
    "text": "JORNAL DA ESCOLA — Edição especial de tecnologia\n\nAlunos criam seu primeiro joguinho de computador!\n\nNa aula de informática desta quinta-feira, os alunos do 3º ano tiveram uma missão especial: criar um joguinho simples usando blocos coloridos de programação, sem precisar escrever nenhum código difícil.\n\nCada dupla montou uma pequena história, com um personagem que precisava desviar de obstáculos até chegar ao final da tela. Os cliques e as cores se transformaram em verdadeiros jogos.\n\n\"Meu joguinho tem um gatinho que pula por cima de pedras, foi eu que pensei tudo!\", contou a aluna Cecília, toda orgulhosa da criação.\n\nO professor Diego, responsável pela aula, explicou que programar ensina a pensar em passos, um de cada vez. \"Eles estão aprendendo a resolver problemas brincando\", disse ele, observando a turma concentrada.\n\nNo final da aula, cada dupla apresentou seu joguinho para os colegas, que testaram e deram opiniões.\n\nPor hoje é só. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre ideias de joguinhos que gostariam de inventar."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Participa de Mutirão de Limpeza da Praça do Bairro",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um mutirão de limpeza realizado pela turma na praça do bairro, seguida de roda de conversa sobre o cuidado com espaços públicos.",
    "text": "JORNAL DA ESCOLA — Edição especial de meio ambiente\n\nAlunos ajudam a deixar a praça do bairro mais limpa!\n\nNa manhã de sábado, alunos do 2º e do 3º ano, junto com professores e familiares, participaram de um mutirão de limpeza na praça perto da escola. Todos usaram luvas e sacos de lixo para recolher papéis, garrafas e outros materiais espalhados pelo chão.\n\nEm pouco mais de uma hora, a praça já estava bem diferente, com os canteiros limpos e os bancos livres de lixo.\n\n\"Eu não sabia que tinha tanto lixo escondido perto dos brinquedos\", contou o aluno Matheus, surpreso com o que encontrou.\n\nA professora Simone, que organizou o mutirão, aproveitou para conversar com as crianças sobre a importância de jogar o lixo no lugar certo. \"Cuidar da praça é cuidar do nosso próprio bairro\", explicou ela ao grupo.\n\nNo final, todos se sentaram nos bancos limpinhos para descansar e comer um lanche coletivo.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre como cuidar de praças e espaços públicos do bairro."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Promove Semana da Alimentação Saudável",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a Semana da Alimentação Saudável promovida pela escola, seguida de roda de conversa sobre alimentos saudáveis.",
    "text": "JORNAL DA ESCOLA — Edição especial de saúde\n\nComeça a Semana da Alimentação Saudável na escola!\n\nNesta segunda-feira, teve início a Semana da Alimentação Saudável, com atividades especiais em todas as turmas. O cardápio da merenda ganhou frutas coloridas, saladas variadas e sucos naturais.\n\nDurante os intervalos, os alunos participaram de uma roda de degustação, provando alimentos que talvez nunca tivessem experimentado antes, como jabuticaba e chuchu.\n\n\"Eu experimentei quiabo pela primeira vez e até que gostei!\", contou a aluna Yasmin, fazendo uma careta engraçada.\n\nA nutricionista da escola, convidada especialmente para a semana, conversou com as turmas sobre a importância de comer verduras e frutas todos os dias. \"Comer bem deixa o corpo e a mente mais fortes para aprender\", explicou ela aos alunos.\n\nAo longo da semana, cada turma vai montar um cartaz com os alimentos mais saudáveis para expor no corredor da escola.\n\nEssa foi a notícia de hoje. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre frutas e verduras que já experimentaram ou gostariam de experimentar."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Apresentam Experiência de Vulcão de Bicarbonato na Feira de Ciências",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a apresentação de um vulcão de bicarbonato na feira de ciências da escola, seguida de roda de conversa sobre experiências científicas simples.",
    "text": "JORNAL DA ESCOLA — Edição especial de ciências\n\nVulcão de mentirinha \"entra em erupção\" na feira de ciências!\n\nA Feira de Ciências da escola, realizada nesta sexta-feira no pátio, teve um dos experimentos mais esperados pelos alunos: o vulcão de bicarbonato. A turma do 3º ano construiu um vulcão de massinha e, na hora certa, misturou bicarbonato de sódio com vinagre.\n\nUma espuma alaranjada saiu borbulhando pela boca do vulcão, arrancando gritinhos de surpresa da plateia reunida ao redor da mesa.\n\n\"Parece lava de verdade, mas é só espuma!\", explicou o aluno Guilherme, um dos responsáveis pela experiência, todo orgulhoso.\n\nO professor Marcelo, que ajudou a montar o experimento, contou que a reação acontece por causa da mistura de um ácido com uma base. \"O importante é que a ciência pode ser muito divertida\", disse ele, sorrindo para a plateia.\n\nA feira segue até o fim da tarde, com outros experimentos espalhados pelos corredores da escola.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre outras experiências científicas simples que gostariam de ver ou fazer."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Cria Horta de Temperos Dentro da Sala de Aula",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a criação de uma horta de temperos dentro da sala de aula, seguida de roda de conversa sobre o cuidado com plantas no dia a dia.",
    "text": "JORNAL DA ESCOLA — Edição de notícias verdes\n\nSala de aula ganha cheirinho de horta de temperos!\n\nNesta quarta-feira, a turma do 2º ano transformou um cantinho da sala de aula em uma pequena horta de temperos. Em potinhos reaproveitados, os alunos plantaram mudas de manjericão, hortelã e alecrim.\n\nCada aluno ficou responsável por cuidar de um potinho, regando com cuidado e observando o crescimento das plantinhas dia após dia.\n\n\"Toda vez que passo perto, sinto o cheiro de hortelã, é bem gostoso\", contou a aluna Alice, cheirando as folhinhas.\n\nA professora Bianca, que teve a ideia da horta, explicou que os temperos serão usados em uma receita especial no fim do mês. \"Vamos aprender sobre plantas e também sobre culinária\", contou ela à turma.\n\nA horta de temperos já virou o cantinho preferido da sala, e os alunos combinaram uma escala para regar as plantinhas todos os dias.\n\nPor hoje é só, pessoal. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre como cuidar de uma planta em casa ou na escola."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Recebe Visita de um Escritor para Bate-Papo com os Alunos",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre a visita de um escritor à escola para conversar com os alunos, seguida de roda de conversa sobre livros e histórias favoritas.",
    "text": "JORNAL DA ESCOLA — Edição especial de literatura\n\nEscritor visita a escola e conversa com os alunos!\n\nNesta quinta-feira, a escola recebeu a visita de um escritor de livros infantis, que veio conversar com as turmas sobre seus livros e sobre como nascem as histórias. O encontro aconteceu no pátio coberto, decorado com desenhos feitos pelos próprios alunos.\n\nO escritor contou como surgiu a ideia do seu livro mais famoso e respondeu a várias perguntas curiosas da plateia.\n\n\"Eu quis saber se ele já ficou sem ideia para escrever, e ele disse que sim, às vezes acontece!\", contou o aluno Rafael, rindo da resposta sincera.\n\nA professora Adriana, responsável por organizar o encontro, disse que o objetivo era aproximar os alunos do mundo da leitura. \"Conhecer quem escreve os livros deixa a leitura ainda mais especial\", explicou ela.\n\nNo final, o escritor autografou alguns livros da biblioteca da escola, para alegria da turma.\n\nEssa foi a notícia de hoje. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre livros e histórias que são os favoritos de cada um."
    ]
  },
  {
    "theme": "Jornal da Escola: Alunos Criam Campanha Contra o Desperdício de Água na Escola",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma campanha criada pelos alunos contra o desperdício de água na escola, seguida de roda de conversa sobre economia de água no dia a dia.",
    "text": "JORNAL DA ESCOLA — Edição especial de meio ambiente\n\nAlunos lançam campanha para economizar água na escola!\n\nNesta terça-feira, os alunos do 3º ano lançaram uma campanha para lembrar todo mundo da escola sobre a importância de não desperdiçar água. Cartazes coloridos, feitos pela própria turma, foram colados perto das torneiras e dos banheiros.\n\nOs cartazes trazem frases simples, como \"Feche a torneira enquanto escova os dentes\", e desenhos de gotinhas sorridentes pedindo cuidado.\n\n\"A gente percebeu que muita gente deixava a torneira aberta sem perceber\", contou o aluno Vitor, um dos criadores da campanha.\n\nA professora Camila, que apoiou o projeto, explicou que pequenas atitudes fazem grande diferença para o planeta. \"Cuidar da água é cuidar do futuro de todos nós\", disse ela aos alunos, orgulhosa da iniciativa.\n\nA campanha vai continuar pelas próximas semanas, com novos cartazes sendo criados por outras turmas da escola.\n\nFim da edição de hoje. Até a próxima!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre atitudes simples para economizar água em casa e na escola."
    ]
  },
  {
    "theme": "Jornal da Escola: Turma Organiza Sarau de Poesia na Biblioteca da Escola",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre um sarau de poesia organizado na biblioteca da escola, seguida de roda de conversa sobre poemas e sentimentos.",
    "text": "JORNAL DA ESCOLA — Edição especial de literatura\n\nBiblioteca da escola recebe sarau de poesia!\n\nNesta sexta-feira à tarde, a biblioteca da escola ficou tomada de versos e rimas. A turma do 3º ano organizou um sarau de poesia, onde cada aluno pôde ler, em voz alta, um poema escolhido ou até criado por eles mesmos.\n\nO espaço foi decorado com almofadas no chão e luzinhas coloridas, deixando o ambiente ainda mais aconchegante para a apresentação.\n\n\"Eu escrevi um poema sobre a lua, minhas mãos tremiam um pouco na hora de ler\", contou a aluna Beatriz, sorrindo depois de terminar.\n\nO professor Anderson, responsável pela biblioteca, explicou que o sarau nasceu para incentivar o gosto pela leitura e pela escrita. \"A poesia ajuda a gente a expressar o que sente\", disse ele à plateia de alunos.\n\nNo final, todos bateram palmas para os colegas e já pediram para repetir o sarau no próximo bimestre.\n\nPor hoje é só. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre sentimentos que poderiam virar um poema."
    ]
  },
  {
    "theme": "Jornal da Escola: Escola Promove Oficina de Pintura com Tinta Natural Feita de Plantas",
    "genre": "notícia",
    "description": "Leitura em voz alta de notícia fictícia, no estilo de jornal escolar, sobre uma oficina de pintura com tintas naturais feitas de plantas, seguida de roda de conversa sobre arte e materiais da natureza.",
    "text": "JORNAL DA ESCOLA — Edição especial de arte\n\nAlunos pintam com tintas feitas de plantas!\n\nNesta quarta-feira, a escola promoveu uma oficina bem diferente: pintura com tintas naturais, feitas a partir de plantas e alimentos, como beterraba, urucum e folhas verdes. As cores surgiram sem nenhuma tinta comprada em loja.\n\nCom pincéis e papel, os alunos criaram desenhos coloridos usando apenas essas tintas naturais, descobrindo tons de rosa, amarelo e verde bem diferentes do usual.\n\n\"Eu não sabia que dava para pintar com beterraba, o rosa ficou lindo!\", contou a aluna Valentina, mostrando seu desenho para os colegas.\n\nA professora Letícia, que preparou as tintas com antecedência, explicou que a natureza pode ser uma grande aliada da arte. \"Tudo isso vem de plantas que a gente encontra até no jardim da escola\", contou ela à turma.\n\nOs desenhos feitos na oficina serão expostos no corredor principal, para toda a escola admirar.\n\nEssa foi a notícia de hoje. Até a próxima edição!",
    "steps": [
      "Explicar que essa notícia é fictícia, mas escrita no estilo real de um jornal.",
      "Ler a notícia em voz alta e, com a turma, responder juntos: quem? o quê? quando? onde? (procurando as respostas no texto).",
      "Conversar com a turma sobre outros materiais da natureza que poderiam ser usados na arte."
    ]
  }
];
