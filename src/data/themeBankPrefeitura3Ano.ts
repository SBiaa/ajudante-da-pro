// Banco de temas do 3º ano — rede MUNICIPAL (Currículo da Cidade, SME-SP), no mesmo formato de
// src/data/themeBank.ts (2º ano) e src/data/themeBankPrefeitura1Ano.ts (1º ano). Códigos de
// habilidade (curriculumCode) pesquisados diretamente no texto oficial dos documentos "Currículo
// da Cidade" (SME-SP, 2ª edição), seção "3º ANO DO ENSINO FUNDAMENTAL", publicados em
// acervodigital.sme.prefeitura.sp.gov.br — não são estimados. Ciclo de Alfabetização (1º-3º ano):
// Ciências usa "EF03C.." (sem "I"), Geografia usa "EF03G.." (sem "E"), História usa "EF03H.." (sem
// "I") e Matemática usa "EF03M.." (sem "A") — confirmado batendo com os códigos já usados nos
// bancos do 1º e 2º ano. Língua Portuguesa usa o formato padrão "EF03LP..". História do 3º ano
// segue o mesmo padrão de tema único do 1º/2º ano (aqui: espaços lúdicos da cidade).

import { BankEntry, OwnSubject } from "@/types/plano";

export const PREFEITURA_3_ANO_THEME_BANK: Record<OwnSubject, BankEntry[]> = {
  "lingua-portuguesa": [
    {
      "theme": "Roda de escuta de contos, mitos e lendas de diferentes culturas",
      "curriculumCode": "EF03LP01",
      "description": "Escuta de textos literários variados — contos de fadas, acumulativos, de assombração, populares e modernos, mitos, lendas, poemas (haicai, cordel, quadrinha) e fábulas — valorizando a diversidade cultural africana, boliviana, indígena, síria, entre outras.",
      "materials": ["Livro ou coletânea de contos/mitos/lendas de diferentes culturas", "Almofadas ou tapete para roda de leitura"],
      "steps": [
        "Organizar a turma em roda e apresentar o livro escolhido, contando de onde vem a história.",
        "Ler o texto em voz alta, com entonação, mostrando as ilustrações quando houver.",
        "Parar em pontos-chave para perguntar o que as crianças imaginam que vai acontecer.",
        "Ao final, conversar sobre a cultura de origem da história e o que ela tem de diferente e de parecido com outras já conhecidas.",
        "Registrar em um mural coletivo o nome da história e a cultura de onde ela veio."
      ]
    },
    {
      "theme": "Leitura autônoma de contos e fábulas de diversas culturas",
      "curriculumCode": "EF03LP02",
      "description": "Leitura de textos literários diversos — contos de fadas, acumulativos, de assombração, populares, modernos, fábulas, mitos e lendas de diferentes culturas — identificando recursos usados pelo autor e os efeitos de sentido do tratamento dado ao tema.",
      "materials": ["Cesto de contos e fábulas variadas", "Ficha de leitura simples"],
      "steps": [
        "Disponibilizar um cesto com diferentes contos e fábulas de várias culturas.",
        "Cada estudante escolhe um texto para ler sozinho ou em dupla.",
        "Durante a leitura, observar como o autor descreve personagens e cenários.",
        "Preencher uma ficha simples: qual cultura o texto retrata e o que chamou atenção.",
        "Compartilhar com um colega o que descobriu sobre os recursos usados pelo autor."
      ]
    },
    {
      "theme": "Leitura compartilhada de um livro em capítulos",
      "curriculumCode": "EF03LP03",
      "description": "Acompanhamento da leitura de obras mais extensas, como livros em capítulos ou mitos africanos e indígenas, apreciando a linguagem e os efeitos de sentido criados pelos recursos do autor.",
      "materials": ["Um livro em capítulos ou coletânea de mitos africanos/indígenas", "Cartaz para marcar o progresso da leitura"],
      "steps": [
        "Escolher com a turma um livro em capítulos para ser lido ao longo de várias semanas.",
        "Ler um capítulo por dia, retomando o que aconteceu no anterior.",
        "Destacar palavras ou frases que os estudantes acharam bonitas ou marcantes.",
        "Marcar em um cartaz visual o avanço da leitura, capítulo a capítulo.",
        "Ao final da obra, conversar sobre como a linguagem do autor ajudou a contar a história."
      ]
    },
    {
      "theme": "Investigando a linguagem dos contos: repetição, comparação e adjetivos",
      "curriculumCode": "EF03LP04",
      "description": "Análise dos registros linguísticos típicos de textos literários, preferencialmente contos, reconhecendo recursos próprios do texto literário como repetição, comparação, adjetivação e substituição.",
      "materials": ["Cópia de um conto conhecido", "Canetas coloridas para grifar"],
      "steps": [
        "Distribuir cópias de um conto e ler juntos em voz alta.",
        "Pedir que grifem, em cores diferentes, repetições, comparações e adjetivos encontrados.",
        "Listar no quadro os exemplos encontrados por grupo.",
        "Discutir por que o autor usou esses recursos e que efeito eles causam no leitor.",
        "Propor que os estudantes criem uma frase usando um dos recursos identificados."
      ]
    },
    {
      "theme": "Rodas de notícias e reportagens sobre diferentes grupos sociais",
      "curriculumCode": "EF03LP05",
      "description": "Escuta de reportagens, notícias e contos modernos que abordam diferentes representações sociais, refletindo sobre a diversidade cultural e social e aprendendo a respeitá-la.",
      "materials": ["Reportagem ou notícia impressa/adaptada para crianças", "Conto moderno sobre diversidade"],
      "steps": [
        "Selecionar previamente uma notícia ou conto que aborde diferentes grupos sociais.",
        "Ler o texto em voz alta para a turma.",
        "Perguntar o que os estudantes entenderam sobre as pessoas retratadas no texto.",
        "Conversar sobre respeito à diversidade, com exemplos do cotidiano da escola.",
        "Fechar com um combinado coletivo sobre respeito às diferenças."
      ]
    },
    {
      "theme": "Conhecendo outras culturas por relatos históricos e verbetes",
      "curriculumCode": "EF03LP06",
      "description": "Escuta de relatos históricos, verbetes e artigos de enciclopédia, além de reportagens, entrevistas, vídeos e documentários, para conhecer e valorizar diferentes culturas, inclusive de outros países.",
      "materials": ["Verbete de enciclopédia infantil ou trecho de documentário", "Recurso audiovisual, se disponível"],
      "steps": [
        "Escolher uma cultura ou povo para apresentar à turma (por exemplo, um povo indígena ou uma comunidade de outro país).",
        "Ler em voz alta um verbete ou relato histórico sobre esse povo.",
        "Se possível, exibir um trecho curto de vídeo ou documentário relacionado.",
        "Conversar sobre costumes, comidas ou festas dessa cultura.",
        "Registrar no caderno três coisas novas que aprenderam."
      ]
    },
    {
      "theme": "Pesquisa em diferentes fontes sobre um tema de estudo",
      "curriculumCode": "EF03LP07",
      "description": "Leitura de textos em diferentes fontes — livros, enciclopédias, sites, revistas e jornais — e observação de documentários e reportagens para estudar temas das áreas do conhecimento, avaliando se a informação é pertinente ao tema.",
      "materials": ["Livros, revistas e enciclopédias sobre o tema escolhido", "Computador ou tablet com acesso a site de pesquisa, se disponível"],
      "steps": [
        "Definir com a turma um tema de estudo (por exemplo, um animal ou um período histórico).",
        "Organizar diferentes fontes de pesquisa sobre o tema em mesas ou cantos da sala.",
        "Em grupos, explorar cada fonte e anotar informações relevantes.",
        "Discutir em grupo se a informação encontrada realmente ajuda a entender o tema.",
        "Compartilhar com a turma as informações mais úteis encontradas em cada fonte."
      ]
    },
    {
      "theme": "Selecionando textos para pesquisa usando sumários e títulos",
      "curriculumCode": "EF03LP08",
      "description": "Participação na seleção de textos, previamente escolhidos pelo professor, para pesquisar um tema específico, usando sumários, títulos, subtítulos e chamadas de links como pistas de conteúdo.",
      "materials": ["Conjunto de livros e páginas impressas com sumário sobre um tema", "Lista do tema a pesquisar"],
      "steps": [
        "Apresentar vários textos pré-selecionados sobre o mesmo tema geral.",
        "Explicar como usar sumário, título e subtítulo para prever o conteúdo.",
        "Em duplas, os estudantes examinam os textos e escolhem os que parecem mais úteis.",
        "Cada dupla justifica para a turma por que escolheu aquele texto.",
        "Organizar os textos escolhidos para uso na pesquisa da turma."
      ]
    },
    {
      "theme": "Grifando informações importantes para a pesquisa",
      "curriculumCode": "EF03LP09",
      "description": "Marcação de trechos e páginas que contêm informações relevantes para uma pesquisa em andamento sobre um tema de estudo.",
      "materials": ["Texto informativo sobre o tema pesquisado", "Marca-texto ou lápis de cor", "Post-its"],
      "steps": [
        "Retomar o tema de pesquisa da turma.",
        "Distribuir um texto informativo relacionado ao tema.",
        "Orientar os estudantes a grifar trechos com informações importantes.",
        "Usar post-its para marcar páginas de um livro que tragam dados relevantes.",
        "Reunir em grupo os trechos grifados e organizar as informações encontradas."
      ]
    },
    {
      "theme": "Preparando um texto teatral para leitura dramática",
      "curriculumCode": "EF03LP10",
      "description": "Estudo, em situação de tutoria entre pares, de textos teatrais, ajustando a entonação da fala à compreensão do texto de modo a representar traços característicos das personagens.",
      "materials": ["Texto teatral curto e simples", "Espaço livre para ensaio"],
      "steps": [
        "Distribuir um pequeno texto teatral em duplas, com um estudante mais experiente apoiando o colega.",
        "Ler o texto juntos, identificando quem fala cada fala.",
        "Conversar sobre como cada personagem se sente naquele momento da história.",
        "Ensaiar a leitura em voz alta, ajustando o tom de voz a cada personagem.",
        "Apresentar a leitura dramática para outro par ou para a turma."
      ]
    },
    {
      "theme": "Recontando histórias conhecidas com marcas do registro literário",
      "curriculumCode": "EF03LP11",
      "description": "Reconto de histórias conhecidas, respeitando as características do gênero e empregando, progressivamente, marcas próprias da linguagem escrita literária.",
      "materials": ["Livro de uma história já trabalhada em sala", "Fantoches ou fichas de personagens (opcional)"],
      "steps": [
        "Reler ou relembrar com a turma uma história já conhecida.",
        "Destacar expressões típicas do gênero (por exemplo, 'Era uma vez...', 'E foram felizes para sempre').",
        "Pedir que cada estudante reconte a história oralmente para um colega, usando essas expressões.",
        "Convidar alguns estudantes a recontar para a turma toda.",
        "Comentar juntos quais recontos usaram bem as marcas do registro literário."
      ]
    },
    {
      "theme": "Reescrita coletiva de um conto conhecido",
      "curriculumCode": "EF03LP12",
      "description": "Reescrita de um conto conhecido, ditando ao professor ou a colegas, respeitando a progressão temática, os conteúdos do texto-fonte e características da linguagem escrita e do registro literário.",
      "materials": ["Livro do conto escolhido", "Papel pardo ou lousa para escrita coletiva"],
      "steps": [
        "Reler o conto escolhido com toda a turma.",
        "Organizar os estudantes para ditar a reescrita, um trecho por vez.",
        "Escrever no papel pardo o que os estudantes ditam, ajustando junto com eles a linguagem escrita.",
        "Reler o texto reescrito e verificar se segue a mesma ordem e conteúdo do original.",
        "Expor a versão reescrita na sala para consulta futura."
      ]
    },
    {
      "theme": "Criando novos finais para contos de diferentes culturas",
      "curriculumCode": "EF03LP13",
      "description": "Produção de finais alternativos para contos representativos de diferentes culturas, previamente conhecidos pela turma, respeitando o registro literário, o tema e a progressão do texto-fonte.",
      "materials": ["Conto de outra cultura com final apresentado apenas até certo ponto", "Folha para escrita"],
      "steps": [
        "Ler um conto de outra cultura parando antes do desfecho.",
        "Conversar sobre o que já aconteceu na história e o que poderia acontecer a seguir.",
        "Cada estudante escreve seu próprio final, mantendo o tema e o estilo do conto.",
        "Revisar o texto observando se ele combina com o restante da história.",
        "Compartilhar os diferentes finais criados pela turma e comparar com o final original."
      ]
    },
    {
      "theme": "Escrevendo indicações literárias e verbetes de curiosidades",
      "curriculumCode": "EF03LP14",
      "description": "Escrita, ditando ao professor, de indicações literárias de livros, legendas e verbetes de curiosidades sobre temas estudados, respeitando as características da situação comunicativa.",
      "materials": ["Livro lido recentemente pela turma", "Cartolina para mural de indicações"],
      "steps": [
        "Escolher um livro que a turma gostou de ler.",
        "Conversar sobre o que faz alguém querer indicar um livro a outra pessoa.",
        "Ditar ao professor uma pequena indicação literária, com autor, tema e motivo da recomendação.",
        "Escrever o texto no formato de ficha e ilustrar a capa do livro.",
        "Montar um mural de indicações literárias para outras turmas consultarem."
      ]
    },
    {
      "theme": "Diário da turma: relatando experiências vividas",
      "curriculumCode": "EF03LP15",
      "description": "Escrita de relatos de experiência vivida ou diários, pessoal e da classe, situando as ações no tempo de modo coerente.",
      "materials": ["Caderno ou caixa para o diário da turma", "Calendário de sala"],
      "steps": [
        "Escolher um evento marcante vivido pela turma (um passeio, uma atividade especial).",
        "Conversar sobre a ordem em que as coisas aconteceram, usando o calendário como apoio.",
        "Cada estudante escreve um pequeno relato da experiência, indicando quando aconteceu.",
        "Revisar em dupla se a ordem dos fatos no texto está clara.",
        "Reunir os relatos no diário da turma para releitura futura."
      ]
    },
    {
      "theme": "Escrevendo regras de brincadeiras e receitas",
      "curriculumCode": "EF03LP16",
      "description": "Escrita de regras de brincadeiras e de jogos, além de receitas em geral, respeitando as características próprias dessa situação comunicativa, como a ordem das instruções.",
      "materials": ["Ingredientes ou objetos de uma brincadeira conhecida", "Ficha modelo de receita ou regra de jogo"],
      "steps": [
        "Escolher com a turma uma brincadeira de pátio ou uma receita simples e conhecida.",
        "Relembrar juntos, passo a passo, como ela é feita ou jogada.",
        "Organizar oralmente a ordem correta das instruções antes de escrever.",
        "Escrever o texto instrucional, com lista de materiais/ingredientes e passos numerados.",
        "Testar a receita ou brincadeira seguindo exatamente o texto escrito, ajustando o que faltar."
      ]
    },
    {
      "theme": "Contação de histórias de diferentes culturas",
      "curriculumCode": "EF03LP17",
      "description": "Participação em contação de histórias de diferentes culturas, inclusive de outros países, organizando a situação comunicativa (qual história, quem conta, para quem) e ouvindo com atenção os colegas.",
      "materials": ["Histórias de diferentes culturas escolhidas pela turma", "Objeto ou fantasia simples de apoio à contação (opcional)"],
      "steps": [
        "Organizar duplas ou trios para escolher uma história de outra cultura para contar.",
        "Combinar quem conta cada parte e como será a apresentação.",
        "Ensaiar a contação, pensando em voz, gestos e ritmo.",
        "Apresentar a história para a turma, que escuta com atenção.",
        "Conversar depois sobre o que aprenderam com as histórias dos colegas."
      ]
    },
    {
      "theme": "Apresentação oral sobre temas estudados",
      "curriculumCode": "EF03LP18",
      "description": "Exposição oral de aspectos de temas estudados nas diversas áreas do conhecimento, formulando perguntas e comentando a partir de notas previamente preparadas.",
      "materials": ["Fichas com anotações sobre o tema estudado", "Cartaz ou desenho de apoio"],
      "steps": [
        "Retomar um tema estudado recentemente pela turma.",
        "Ajudar os estudantes a organizar pequenas notas com os pontos principais a falar.",
        "Cada estudante ou grupo apresenta o tema em poucos minutos, usando as notas de apoio.",
        "A turma que assiste pode fazer perguntas ao final de cada apresentação.",
        "Comentar em conjunto o que mais chamou atenção nas apresentações."
      ]
    },
    {
      "theme": "Relatando experiências vividas para a turma",
      "curriculumCode": "EF03LP19",
      "description": "Produção de relatos, por meio de textos, de experiências vividas, organizando-os de acordo com a situação comunicativa.",
      "materials": ["Roda de conversa", "Papel para registro do relato"],
      "steps": [
        "Propor que cada estudante pense em uma experiência recente para compartilhar.",
        "Organizar uma roda para que relatem oralmente essa experiência.",
        "Orientar sobre organizar o relato com começo, meio e fim.",
        "Cada estudante escreve seu relato, cuidando da ordem dos fatos.",
        "Compartilhar os relatos escritos em pequenos grupos."
      ]
    },
    {
      "theme": "Roda de conversa sobre convivência e respeito",
      "curriculumCode": "EF03LP20",
      "description": "Discussão de problemas do cotidiano relacionados à convivência, como questões de gênero e étnico-raciais, para emitir opinião, ouvir os colegas, participar com respeito e construir sínteses coletivas.",
      "materials": ["Situação-problema de convivência para disparar a conversa (real ou fictícia)", "Cartaz para registrar a síntese coletiva"],
      "steps": [
        "Apresentar uma situação de convivência que gere reflexão (um conflito, uma injustiça observada na escola).",
        "Organizar a turma em roda e explicar as regras de fala respeitosa.",
        "Convidar os estudantes a expressar sua opinião sobre a situação, ouvindo os colegas sem interromper.",
        "Ajudar a turma a construir juntos uma síntese do que foi discutido.",
        "Registrar a síntese coletiva em um cartaz para retomar depois."
      ]
    },
    {
      "theme": "Comparando a estrutura de diferentes gêneros textuais",
      "curriculumCode": "EF03LP21",
      "description": "Comparação dos elementos da organização interna de textos a serem produzidos, para extrair as características do gênero em estudo.",
      "materials": ["Dois textos do mesmo gênero (por exemplo, duas receitas ou dois relatos)", "Quadro para anotar semelhanças e diferenças"],
      "steps": [
        "Apresentar dois exemplos do mesmo gênero textual que a turma vai produzir.",
        "Ler os dois textos e observar como cada parte está organizada.",
        "Anotar no quadro o que os dois textos têm em comum.",
        "Listar as características típicas desse gênero a partir da comparação.",
        "Usar a lista como apoio para a próxima produção de texto da turma."
      ]
    },
    {
      "theme": "Caça aos pronomes: eliminando repetições no texto",
      "curriculumCode": "EF03LP22",
      "description": "Revisão de textos produzidos eliminando repetições desnecessárias, substituindo o termo repetido por outra palavra — nome, pronome, apelido, classe relacionada — ou usando elipse.",
      "materials": ["Texto produzido pela turma com repetições de palavras", "Lápis colorido para grifar"],
      "steps": [
        "Escolher um texto produzido pela turma que repita muito a mesma palavra.",
        "Ler o texto em voz alta e perceber juntos o efeito da repetição.",
        "Grifar as palavras repetidas.",
        "Em duplas, propor substituições por pronomes, apelidos ou outras palavras relacionadas.",
        "Reescrever o trecho corrigido e comparar com a versão original."
      ]
    },
    {
      "theme": "Revisando organizadores textuais no texto produzido",
      "curriculumCode": "EF03LP23",
      "description": "Revisão de textos produzidos eliminando organizadores textuais que não combinam com o registro linguístico esperado para aquele tipo de texto.",
      "materials": ["Texto produzido pela turma com organizadores textuais inadequados", "Lista de conectivos apropriados ao gênero"],
      "steps": [
        "Reler um texto produzido pela turma observando as palavras que ligam as ideias.",
        "Identificar organizadores que soam estranhos ou informais demais para o texto.",
        "Discutir em grupo quais conectivos seriam mais adequados.",
        "Reescrever o trecho substituindo os organizadores inadequados.",
        "Comparar a nova versão com a original, percebendo a diferença no efeito."
      ]
    },
    {
      "theme": "Dando coerência ao final de uma história",
      "curriculumCode": "EF03LP24",
      "description": "Articulação coerente das partes do texto durante atividades de reescrita ou de produção de final de texto, evitando problemas de compreensão.",
      "materials": ["Rascunho de um texto com final produzido pelo estudante", "Ficha de revisão de coerência"],
      "steps": [
        "Retomar um texto que a turma produziu com início, meio e final.",
        "Ler em voz alta verificando se as partes se conectam bem.",
        "Marcar trechos que causam confusão ou quebram a sequência da história.",
        "Reescrever esses trechos, ajustando para que façam sentido com o restante do texto.",
        "Trocar o texto revisado com um colega para uma segunda leitura de checagem."
      ]
    },
    {
      "theme": "Quem conta a história? Narrador em 1ª e 3ª pessoa",
      "curriculumCode": "EF03LP25",
      "description": "Emprego, em situação de reescrita, do mesmo tipo de narrador — em 1ª ou 3ª pessoa — presente no texto-fonte.",
      "materials": ["Trecho de texto narrado em 1ª pessoa e outro em 3ª pessoa", "Folha para reescrita"],
      "steps": [
        "Apresentar dois trechos curtos, um narrado em 1ª pessoa e outro em 3ª pessoa.",
        "Ajudar a turma a identificar quem está contando cada história.",
        "Propor a reescrita de um trecho, mantendo o mesmo narrador do texto original.",
        "Verificar em dupla se o narrador ficou igual ao do texto-fonte durante toda a reescrita.",
        "Comentar coletivamente os erros mais comuns de troca de narrador."
      ]
    },
    {
      "theme": "Observando a pontuação do diálogo nos textos",
      "curriculumCode": "EF03LP26",
      "description": "Releitura de trechos de textos conhecidos para identificar e comparar o uso da pontuação de diálogo, reconhecendo os efeitos de sentido provocados por ela.",
      "materials": ["Trecho de história com diálogo entre personagens", "Lápis para grifar sinais de pontuação"],
      "steps": [
        "Selecionar um trecho de história com diálogo entre personagens.",
        "Ler em voz alta, destacando a mudança de quem fala.",
        "Grifar os sinais usados para marcar a fala (travessão, aspas, dois-pontos).",
        "Conversar sobre como esses sinais ajudam o leitor a entender quem está falando.",
        "Propor que os estudantes escrevam um pequeno diálogo usando os mesmos sinais."
      ]
    },
    {
      "theme": "Pontuando o texto: segmentando frases",
      "curriculumCode": "EF03LP27",
      "description": "Segmentação progressiva do texto em frases, com uso adequado de sinais de pontuação.",
      "materials": ["Texto sem pontuação para os estudantes corrigirem", "Lápis"],
      "steps": [
        "Entregar um texto curto escrito sem nenhuma pontuação.",
        "Ler o texto em voz alta, mostrando como fica confuso sem pausas.",
        "Em duplas, os estudantes marcam onde devem entrar pontos e outros sinais.",
        "Comparar as versões pontuadas por diferentes duplas.",
        "Ler o texto corrigido em voz alta, respeitando as pausas marcadas."
      ]
    },
    {
      "theme": "Descobrindo comparações escondidas: a metáfora",
      "curriculumCode": "EF03LP28",
      "description": "Identificação, em textos lidos, da comparação implícita entre dois termos (metáfora), reconhecendo os efeitos de sentido provocados pelo uso desse recurso.",
      "materials": ["Poemas ou trechos de textos com metáforas simples", "Cartaz para registrar exemplos"],
      "steps": [
        "Ler um poema ou trecho de texto que contenha metáforas simples.",
        "Perguntar aos estudantes o que determinada expressão poderia significar.",
        "Explicar que ali há uma comparação escondida entre duas coisas.",
        "Registrar em um cartaz os exemplos de metáfora encontrados e o que eles sugerem.",
        "Convidar os estudantes a criar sua própria comparação escondida sobre algo da sala."
      ]
    },
    {
      "theme": "Usando acentos em palavras conhecidas",
      "curriculumCode": "EF03LP29",
      "description": "Uso da acentuação gráfica em palavras de uso frequente presentes em textos já conhecidos pela turma.",
      "materials": ["Lista de palavras frequentes com e sem acento", "Texto conhecido pela turma"],
      "steps": [
        "Retomar um texto já lido pela turma e localizar palavras acentuadas.",
        "Copiar essas palavras no quadro, destacando o acento.",
        "Em grupos, os estudantes procuram outras palavras acentuadas no texto.",
        "Praticar a escrita dessas palavras em uma lista, cuidando do acento.",
        "Fazer um ditado simples com algumas dessas palavras para checar a escrita."
      ]
    },
    {
      "theme": "Caçando a sílaba tônica nas palavras do texto",
      "curriculumCode": "EF03LP30",
      "description": "Identificação da sílaba tônica de palavras encontradas em textos lidos pela turma.",
      "materials": ["Texto conhecido pela turma", "Cartões com palavras separadas em sílabas"],
      "steps": [
        "Escolher algumas palavras de um texto já lido.",
        "Bater palmas ao pronunciar cada sílaba, percebendo qual soa mais forte.",
        "Marcar nos cartões qual sílaba é a tônica de cada palavra.",
        "Organizar as palavras em grupos conforme a posição da sílaba tônica.",
        "Praticar com novas palavras do texto, identificando a sílaba tônica em duplas."
      ]
    },
    {
      "theme": "Relacionando acento gráfico e sílaba tônica",
      "curriculumCode": "EF03LP31",
      "description": "Relação entre a presença do acento gráfico e a sílaba tônica da palavra, percebendo que o acento marca a sílaba pronunciada com mais força.",
      "materials": ["Lista de palavras acentuadas e não acentuadas", "Cartolina para tabela comparativa"],
      "steps": [
        "Selecionar palavras acentuadas e outras sem acento de um texto conhecido.",
        "Pronunciar cada palavra em voz alta, marcando a sílaba mais forte com uma palma.",
        "Verificar se a sílaba tônica coincide com o lugar do acento gráfico, quando existir.",
        "Organizar as palavras em uma tabela: com acento / sem acento, indicando a sílaba tônica.",
        "Concluir juntos por que algumas palavras precisam de acento gráfico e outras não."
      ]
    },
    {
      "theme": "Revisando a grafia de M/N, R/RR e O/U final",
      "curriculumCode": "EF03LP32",
      "description": "Uso do procedimento de revisão para identificar os contextos de uso de letras em palavras de uso frequente — M/N, R/RR, O/U final —, escrevendo-as de forma ortograficamente correta.",
      "materials": ["Texto com palavras contendo M/N, R/RR, O/U final", "Lista de regras contextuais em cartaz"],
      "steps": [
        "Apresentar um texto com várias palavras que usam M/N, R/RR ou O/U final.",
        "Destacar exemplos e observar em que posição da palavra cada letra aparece.",
        "Construir junto com a turma um cartaz com as regras observadas.",
        "Propor uma atividade de revisão de um pequeno texto com erros desse tipo.",
        "Corrigir coletivamente, explicando o porquê de cada correção."
      ]
    },
    {
      "theme": "Comparando flexões verbais terminadas em -O e -AM",
      "curriculumCode": "EF03LP33",
      "description": "Análise de trechos de textos para identificar palavras cuja grafia é orientada por regras morfológico-gramaticais, comparando flexões verbais em que ocorre a terminação -O/-AM.",
      "materials": ["Frases com verbos no singular (-ou) e no plural (-aram/-am)", "Quadro para comparação"],
      "steps": [
        "Apresentar pares de frases com o mesmo verbo no singular e no plural (ex: 'ele brincou' / 'eles brincaram').",
        "Observar juntos a diferença na terminação da palavra.",
        "Relacionar a terminação com quem pratica a ação (uma pessoa ou várias).",
        "Propor que os estudantes completem frases escolhendo a terminação correta.",
        "Corrigir coletivamente, retomando a relação entre sentido e grafia."
      ]
    },
    {
      "theme": "Memorizando a grafia de palavras irregulares",
      "curriculumCode": "EF03LP34",
      "description": "Escrita convencional de palavras de uso frequente que não são regidas por regras — como H inicial, L/LH, C/S iniciais —, compreendendo que nem sempre há correspondência exata entre letra e som.",
      "materials": ["Lista de palavras irregulares de uso frequente", "Jogo de memória ou bingo ortográfico"],
      "steps": [
        "Apresentar uma lista de palavras irregulares frequentes (por exemplo, 'homem', 'cinco', 'saci').",
        "Explicar que essas palavras não seguem uma regra fixa e precisam ser memorizadas.",
        "Jogar um bingo ou jogo da memória com essas palavras.",
        "Praticar a escrita de algumas delas em frases.",
        "Fazer um ditado final para verificar a memorização."
      ]
    },
    {
      "theme": "Dividindo palavras no final da linha",
      "curriculumCode": "EF03LP35",
      "description": "Análise da divisão silábica de palavras no final da linha, observando os pontos de segmentação por meio da pronúncia de cada sílaba.",
      "materials": ["Texto impresso com palavras divididas ao final de algumas linhas", "Lápis para marcar sílabas"],
      "steps": [
        "Mostrar um texto impresso em que algumas palavras foram divididas no fim da linha.",
        "Bater palmas para separar as sílabas dessas palavras.",
        "Comparar a divisão feita no texto com a divisão silábica falada.",
        "Praticar a separação silábica de novas palavras em voz alta.",
        "Marcar com um traço o ponto correto de separação em uma lista de palavras."
      ]
    },
    {
      "theme": "Regras para não deixar uma letra sozinha na linha",
      "curriculumCode": "EF03LP36",
      "description": "Escrita orientada pela regra geral de divisão silábica e pelo princípio de não deixar uma letra sozinha no início ou no final da linha ao dividir uma palavra.",
      "materials": ["Folha pautada estreita para forçar divisão de palavras", "Lista de palavras longas"],
      "steps": [
        "Explicar a regra de não deixar uma única letra isolada ao dividir uma palavra na linha.",
        "Mostrar exemplos certos e errados dessa divisão.",
        "Propor a cópia de um texto em folha estreita, para que algumas palavras precisem ser divididas.",
        "Verificar em dupla se as divisões feitas respeitam a regra.",
        "Corrigir juntos os casos em que uma letra ficou sozinha na linha."
      ]
    }
  ],
  matematica: [
    {
      "theme": "Lendo, escrevendo e comparando números naturais",
      "curriculumCode": "EF03M01",
      "description": "Leitura, escrita, comparação e ordenação de números naturais, observando regularidades do sistema de numeração decimal.",
      "materials": ["Cartelas numeradas", "Quadro numérico até 1000", "Lousa e giz/caneta"],
      "steps": [
        "Escrever alguns números na lousa e pedir que os alunos os leiam em voz alta.",
        "Mostrar cartelas com números e pedir que a turma os ordene do menor para o maior.",
        "Discutir em grupo o que muda quando um algarismo troca de posição no número.",
        "Propor uma atividade de comparar pares de números usando os sinais > e <.",
        "Fechar com uma roda de conversa sobre as regularidades percebidas no quadro numérico."
      ]
    },
    {
      "theme": "Compondo e decompondo números",
      "curriculumCode": "EF03M02",
      "description": "Composição e decomposição de números naturais em unidades, dezenas e centenas.",
      "materials": ["Material dourado ou canudinhos", "Fichas de valor posicional", "Folha de registro"],
      "steps": [
        "Apresentar um número e perguntar como ele pode ser separado em centenas, dezenas e unidades.",
        "Usar material dourado para montar o número concretamente.",
        "Pedir que os alunos decomponham outros números em duplas.",
        "Propor o caminho inverso: dada a decomposição, descobrir o número composto.",
        "Registrar os exemplos no caderno com desenhos ou números."
      ]
    },
    {
      "theme": "Contagem oral em ordem crescente e decrescente",
      "curriculumCode": "EF03M03",
      "description": "Recitação oral de números em escala ascendente e descendente, a partir de qualquer número dado.",
      "materials": ["Bola ou objeto para passar entre os alunos", "Cronômetro (opcional)"],
      "steps": [
        "Formar uma roda com a turma.",
        "Escolher um número de partida e pedir que continuem contando em voz alta, um aluno de cada vez.",
        "Repetir o jogo contando de trás para frente a partir de outro número.",
        "Variar a atividade contando de 2 em 2 ou de 5 em 5.",
        "Encerrar perguntando qual contagem foi mais difícil e por quê."
      ]
    },
    {
      "theme": "Comparando números: maior, menor, dobro e metade",
      "curriculumCode": "EF03M04",
      "description": "Exploração de relações entre números, como maior que, menor que, estar entre, dobro, metade, triplo e terça parte.",
      "materials": ["Cartas com números", "Lousa"],
      "steps": [
        "Apresentar pares de números e perguntar qual é maior e qual é menor.",
        "Explicar com exemplos concretos a ideia de dobro e metade usando objetos da sala.",
        "Propor desafios: 'que número está entre 20 e 30?'.",
        "Em duplas, os alunos criam suas próprias comparações para os colegas resolverem.",
        "Corrigir coletivamente, registrando as relações encontradas na lousa."
      ]
    },
    {
      "theme": "Números na reta numérica",
      "curriculumCode": "EF03M05",
      "description": "Relação entre os números naturais e pontos da reta numérica para ordenação e localização de números.",
      "materials": ["Reta numérica desenhada no chão ou na lousa", "Fichas numeradas"],
      "steps": [
        "Desenhar uma reta numérica grande na lousa ou no chão da sala.",
        "Pedir que alunos posicionem fichas com números na reta.",
        "Perguntar qual número fica entre dois pontos marcados.",
        "Propor pequenos saltos na reta para somar ou subtrair, andando fisicamente sobre ela.",
        "Registrar no caderno uma reta numérica com os números trabalhados."
      ]
    },
    {
      "theme": "Calculando adições e subtrações com estratégias próprias",
      "curriculumCode": "EF03M06",
      "description": "Cálculo do resultado de adições e subtrações de números naturais por meio de estratégias pessoais, decomposição, cálculo mental e estimativas.",
      "materials": ["Material dourado", "Folha de registro", "Calculadora (para conferência)"],
      "steps": [
        "Propor uma conta simples e perguntar como cada aluno pensaria para resolvê-la.",
        "Compartilhar diferentes estratégias encontradas pela turma na lousa.",
        "Deixar os alunos resolverem novas contas usando a estratégia que preferirem.",
        "Conferir alguns resultados com a calculadora, comparando com o cálculo mental.",
        "Discutir qual estratégia foi mais rápida para cada tipo de conta."
      ]
    },
    {
      "theme": "Resolvendo problemas de juntar, separar e comparar",
      "curriculumCode": "EF03M07",
      "description": "Análise, interpretação e resolução de problemas envolvendo os significados do campo aditivo (composição, transformação e comparação).",
      "materials": ["Problemas escritos na lousa ou impressos", "Folha de resolução"],
      "steps": [
        "Ler o problema em voz alta com a turma.",
        "Perguntar o que o problema está pedindo para descobrir.",
        "Deixar os alunos resolverem sozinhos, usando desenhos ou contas.",
        "Circular pela sala ajudando quem tiver dificuldade.",
        "Corrigir juntos na lousa, mostrando diferentes formas de resolver."
      ]
    },
    {
      "theme": "Adição e subtração com reserva e recurso (conta armada)",
      "curriculumCode": "EF03M08",
      "description": "Cálculo do resultado de adições e subtrações de números naturais, com recurso ou reserva à ordem superior, usando técnica convencional.",
      "materials": ["Lousa", "Material dourado", "Folha quadriculada"],
      "steps": [
        "Relembrar como armar uma conta de adição e subtração, alinhando as ordens.",
        "Demonstrar um exemplo com reserva/recurso usando material dourado.",
        "Resolver coletivamente um exemplo na lousa, passo a passo.",
        "Propor exercícios individuais em folha quadriculada.",
        "Corrigir em duplas, trocando as folhas para conferir os cálculos."
      ]
    },
    {
      "theme": "Fatos básicos da multiplicação por 2, 3, 4 e 5",
      "curriculumCode": "EF03M09",
      "description": "Exploração de fatos básicos da multiplicação de números de 0 a 10 por 2, 3, 4 e 5, e da divisão, para compor um repertório de cálculo.",
      "materials": ["Tabuada ilustrada", "Objetos para agrupar (tampinhas, palitos)"],
      "steps": [
        "Formar grupos iguais de objetos e contar o total, associando à multiplicação.",
        "Construir junto com a turma a tabuada do 2, do 3, do 4 e do 5.",
        "Propor jogos rápidos de perguntas e respostas sobre os fatos básicos.",
        "Explorar a relação inversa com a divisão, repartindo os objetos em grupos iguais.",
        "Registrar as tabuadas construídas no caderno."
      ]
    },
    {
      "theme": "Problemas de multiplicação: proporcionalidade e arranjo retangular",
      "curriculumCode": "EF03M10",
      "description": "Análise, interpretação e resolução de problemas envolvendo significados do campo multiplicativo, como proporcionalidade e configuração retangular.",
      "materials": ["Problemas impressos", "Papel quadriculado"],
      "steps": [
        "Apresentar um problema de proporcionalidade (ex: cada caixa tem 3 bolinhas, quantas em 4 caixas?).",
        "Pedir que representem a situação com desenhos ou material concreto.",
        "Explorar um problema de arranjo retangular (fileiras e colunas) no papel quadriculado.",
        "Deixar os alunos resolverem outros problemas em duplas.",
        "Socializar as estratégias usadas para chegar ao resultado."
      ]
    },
    {
      "theme": "Usando os sinais das operações matemáticas",
      "curriculumCode": "EF03M11",
      "description": "Uso de sinais convencionais (+, –, x, : e =) na escrita das operações matemáticas.",
      "materials": ["Cartazes com os sinais", "Lousa"],
      "steps": [
        "Apresentar cada sinal e perguntar se alguém já o conhece.",
        "Relacionar cada sinal a uma ação (juntar, tirar, repetir, repartir).",
        "Escrever operações na lousa e pedir que identifiquem os sinais usados.",
        "Propor que os alunos escrevam suas próprias operações usando os sinais corretamente.",
        "Corrigir coletivamente, reforçando o significado de cada símbolo."
      ]
    },
    {
      "theme": "Regularidades em sequências numéricas",
      "curriculumCode": "EF03M12",
      "description": "Investigação de regularidades em sequências ordenadas de números naturais, resultantes de adições ou subtrações sucessivas de um mesmo número.",
      "materials": ["Sequências numéricas impressas", "Lousa"],
      "steps": [
        "Apresentar uma sequência numérica na lousa (ex: 2, 4, 6, 8...).",
        "Perguntar o que está acontecendo de um número para o outro.",
        "Pedir que continuem a sequência sozinhos ou em duplas.",
        "Criar novas sequências com outros padrões de soma ou subtração.",
        "Compartilhar e verificar as sequências criadas pelos colegas."
      ]
    },
    {
      "theme": "Descobrindo padrões em sequências",
      "curriculumCode": "EF03M13",
      "description": "Descrição de um padrão (ou regularidade) de uma sequência numérica ou figural recursiva e determinação de elementos faltantes ou seguintes.",
      "materials": ["Sequências de números e de figuras impressas", "Lápis de cor"],
      "steps": [
        "Mostrar uma sequência com um elemento faltando e perguntar qual seria.",
        "Discutir em grupo qual é a regra da sequência.",
        "Apresentar sequências de figuras (formas, cores) para identificar o padrão.",
        "Propor que os alunos completem sequências numéricas e figurais impressas.",
        "Socializar as respostas, explicando o raciocínio usado."
      ]
    },
    {
      "theme": "A ideia de igualdade em sentenças matemáticas",
      "curriculumCode": "EF03M14",
      "description": "Compreensão da ideia de igualdade para escrever diferentes sentenças de adição ou subtração de dois números naturais que resultem na mesma soma ou diferença.",
      "materials": ["Balança de dois pratos (real ou desenhada)", "Cartelas com números"],
      "steps": [
        "Usar uma balança para mostrar a ideia de equilíbrio entre dois lados.",
        "Escrever uma sentença como 5 + 3 = 8 e perguntar outras formas de chegar a 8.",
        "Pedir que os alunos criem diferentes sentenças com o mesmo resultado.",
        "Verificar juntos se as sentenças criadas realmente são iguais.",
        "Registrar no caderno pelo menos três sentenças equivalentes."
      ]
    },
    {
      "theme": "Localizando objetos no espaço com maquetes e croquis",
      "curriculumCode": "EF03M15",
      "description": "Interpretação e representação da localização de objetos ou pessoas no espaço pela análise de maquetes, esboços e croquis, com base em pontos de referência.",
      "materials": ["Maquete simples da sala ou da escola", "Papel para croqui", "Lápis"],
      "steps": [
        "Mostrar uma maquete ou planta simples de um espaço conhecido.",
        "Pedir que localizem um objeto ou pessoa usando pontos de referência (perto de, ao lado de).",
        "Propor que desenhem um croqui simples da sala de aula.",
        "Trocar os croquis entre colegas para tentar identificar o local representado.",
        "Discutir coletivamente as diferentes formas de indicar localização."
      ]
    },
    {
      "theme": "Descrevendo a movimentação de objetos no espaço",
      "curriculumCode": "EF03M16",
      "description": "Interpretação e representação da movimentação de um objeto ou pessoa no espaço pela análise de maquetes, esboços e croquis, com indicações de direção e sentido.",
      "materials": ["Croqui da escola ou da sala", "Setas de papel"],
      "steps": [
        "Apresentar um croqui e pedir que indiquem um caminho entre dois pontos.",
        "Usar palavras como para frente, para trás, à direita e à esquerda para descrever o trajeto.",
        "Propor uma brincadeira de dar comandos para um colega se movimentar na sala.",
        "Registrar o trajeto percorrido usando setas no croqui.",
        "Conversar sobre as diferentes formas de descrever o mesmo caminho."
      ]
    },
    {
      "theme": "Elementos das figuras geométricas planas e espaciais",
      "curriculumCode": "EF03M17",
      "description": "Exploração de elementos de figuras geométricas espaciais e de figuras geométricas planas.",
      "materials": ["Sólidos geométricos (embalagens)", "Formas planas de papel"],
      "steps": [
        "Distribuir sólidos geométricos e pedir que observem faces, vértices e arestas.",
        "Comparar com figuras planas de papel, identificando lados e vértices.",
        "Registrar em uma tabela os elementos encontrados em cada figura.",
        "Propor que classifiquem os objetos trazidos de casa entre planos e espaciais.",
        "Fechar com uma roda de conversa sobre as diferenças observadas."
      ]
    },
    {
      "theme": "Comparando figuras planas e espaciais",
      "curriculumCode": "EF03M18",
      "description": "Exploração de similaridades e diferenças entre figuras geométricas espaciais e planas, comparando cubos e quadrados, blocos retangulares e retângulos, pirâmides e triângulos, esferas e círculos.",
      "materials": ["Sólidos geométricos", "Cartões com figuras planas"],
      "steps": [
        "Apresentar pares de figuras (cubo/quadrado, esfera/círculo) e perguntar as diferenças.",
        "Pedir que associem cada sólido à figura plana correspondente.",
        "Propor um jogo de encontrar o par certo entre sólidos e figuras planas.",
        "Desenhar no caderno a figura plana relacionada a cada sólido apresentado.",
        "Discutir coletivamente por que algumas figuras se parecem."
      ]
    },
    {
      "theme": "Planificações de figuras espaciais",
      "curriculumCode": "EF03M19",
      "description": "Reconhecimento de planificações (moldes) de figuras espaciais como cubo, bloco retangular, pirâmide, cone e cilindro.",
      "materials": ["Moldes de planificação impressos", "Tesoura sem ponta", "Cola"],
      "steps": [
        "Mostrar um sólido geométrico e sua planificação correspondente.",
        "Pedir que os alunos tentem adivinhar qual sólido cada planificação forma.",
        "Distribuir moldes para recortar e montar os sólidos.",
        "Comparar o sólido montado com o objeto original apresentado.",
        "Expor os sólidos montados em um mural da sala."
      ]
    },
    {
      "theme": "Explorando pirâmides, cubos, cones, cilindros e esferas",
      "curriculumCode": "EF03M20",
      "description": "Exploração de similaridades e diferenças entre pirâmides, cubos, blocos retangulares, cones, cilindros e esferas, descrevendo-os, representando-os e identificando seus elementos.",
      "materials": ["Conjunto de sólidos geométricos", "Folha de registro"],
      "steps": [
        "Organizar uma exposição de sólidos geométricos na sala.",
        "Pedir que os alunos os classifiquem em grupos por semelhança.",
        "Descrever oralmente as características de cada sólido (rola, empilha, tem ponta).",
        "Registrar em uma tabela o nome e as características de cada sólido.",
        "Propor um desenho representando os sólidos observados."
      ]
    },
    {
      "theme": "O que é mais provável? Explorando o acaso",
      "curriculumCode": "EF03M21",
      "description": "Exploração, em eventos aleatórios cotidianos, de todos os resultados possíveis, determinando os que têm maiores ou menores chances de ocorrência.",
      "materials": ["Dado", "Moedas", "Saquinho com bolinhas coloridas"],
      "steps": [
        "Apresentar um dado e perguntar quais números podem sair ao lançá-lo.",
        "Realizar lançamentos e registrar os resultados obtidos.",
        "Propor a atividade com um saquinho de bolinhas coloridas em quantidades diferentes.",
        "Perguntar qual cor tem mais chance de ser sorteada e por quê.",
        "Discutir coletivamente os resultados encontrados e comparar com as previsões."
      ]
    },
    {
      "theme": "Lendo tabelas e gráficos de barras",
      "curriculumCode": "EF03M22",
      "description": "Leitura, interpretação, comparação e resolução de problemas com dados apresentados em tabelas e gráficos de barras ou colunas simples, identificando título e fonte.",
      "materials": ["Tabelas e gráficos impressos", "Lousa"],
      "steps": [
        "Apresentar um gráfico de barras simples e perguntar o que ele está mostrando.",
        "Identificar juntos o título e a fonte dos dados.",
        "Propor perguntas de comparação: qual barra é maior, qual é menor.",
        "Resolver pequenos problemas usando os dados do gráfico.",
        "Pedir que expliquem com suas palavras o que aprenderam com o gráfico."
      ]
    },
    {
      "theme": "Fazendo pesquisa e organizando dados em tabelas",
      "curriculumCode": "EF03M23",
      "description": "Realização de pesquisa, classificação e organização de dados coletados, utilizando listas e tabelas simples ou de dupla entrada, representando-os em gráficos quando possível.",
      "materials": ["Folha para pesquisa", "Papel quadriculado para gráfico"],
      "steps": [
        "Escolher com a turma um tema simples para pesquisar (fruta preferida, por exemplo).",
        "Coletar os dados perguntando a cada colega da sala.",
        "Organizar as respostas em uma tabela simples.",
        "Transformar a tabela em um gráfico de colunas ou barras.",
        "Apresentar o resultado da pesquisa para a turma."
      ]
    },
    {
      "theme": "Interpretando e descrevendo dados de tabelas e gráficos",
      "curriculumCode": "EF03M24",
      "description": "Exploração de dados apresentados por meio de tabelas de dupla entrada e gráficos de colunas ou barras simples, descrevendo-os e expressando uma conclusão.",
      "materials": ["Tabela de dupla entrada impressa", "Gráfico de colunas impresso"],
      "steps": [
        "Apresentar uma tabela de dupla entrada e explicar como lê-la.",
        "Fazer perguntas guiadas sobre os dados apresentados.",
        "Comparar a tabela com um gráfico que representa os mesmos dados.",
        "Pedir que escrevam uma frase concluindo o que os dados mostram.",
        "Compartilhar as conclusões escritas com a turma."
      ]
    },
    {
      "theme": "Resolvendo problemas com dinheiro",
      "curriculumCode": "EF03M25",
      "description": "Resolução de problemas que envolvam a comparação e a equivalência de valores do sistema monetário brasileiro em situações de compra, venda e troca.",
      "materials": ["Cédulas e moedas de brinquedo", "Etiquetas de preço"],
      "steps": [
        "Apresentar cédulas e moedas de brinquedo e relembrar seus valores.",
        "Montar uma mini-lojinha na sala com produtos e preços.",
        "Propor situações de compra, pedindo o troco correto.",
        "Resolver problemas escritos envolvendo comparação de valores.",
        "Discutir coletivamente diferentes formas de formar um mesmo valor com cédulas e moedas."
      ]
    },
    {
      "theme": "Relações entre dia, semana, mês e ano no calendário",
      "curriculumCode": "EF03M26",
      "description": "Estabelecimento de relação entre unidades de tempo (dia, semana, mês, bimestre, semestre e ano), consultando calendários.",
      "materials": ["Calendário do ano", "Cartaz com os meses do ano"],
      "steps": [
        "Apresentar um calendário e explorar seus elementos (dias, semanas, meses).",
        "Perguntar quantos dias tem uma semana e quantas semanas tem um mês.",
        "Localizar datas importantes no calendário, como aniversários da turma.",
        "Propor perguntas sobre bimestre, semestre e ano usando o calendário.",
        "Registrar no caderno as relações descobertas entre essas unidades de tempo."
      ]
    },
    {
      "theme": "Lendo horas e minutos no relógio",
      "curriculumCode": "EF03M27",
      "description": "Leitura e registro de medidas de intervalos de tempo (horas e minutos) em relógios analógicos e digitais para informar início e término de uma atividade.",
      "materials": ["Relógio analógico (real ou de papel)", "Relógio digital ou desenho representando um"],
      "steps": [
        "Apresentar um relógio analógico e explicar os ponteiros das horas e minutos.",
        "Mostrar exemplos de horários e pedir que leiam em voz alta.",
        "Comparar a leitura no relógio analógico com a do relógio digital.",
        "Propor que registrem o horário de início e término de uma atividade da rotina.",
        "Praticar com um relógio de papel, movendo os ponteiros para horários pedidos."
      ]
    },
    {
      "theme": "Escolhendo o instrumento certo para medir",
      "curriculumCode": "EF03M28",
      "description": "Identificação da unidade de medida e do instrumento mais apropriado para medições de comprimento, tempo e capacidade.",
      "materials": ["Régua, fita métrica, relógio, copo medidor"],
      "steps": [
        "Apresentar diferentes instrumentos de medida e perguntar para que servem.",
        "Propor situações e pedir que escolham o instrumento adequado para cada uma.",
        "Realizar uma medição real de comprimento, tempo e capacidade na sala.",
        "Discutir por que cada instrumento foi escolhido para cada situação.",
        "Registrar no caderno qual instrumento usar em cada tipo de medida."
      ]
    },
    {
      "theme": "Medindo comprimentos com metro, centímetro e milímetro",
      "curriculumCode": "EF03M29",
      "description": "Estimativa, medição e comparação de comprimentos, utilizando estratégias pessoais e unidades padronizadas mais usuais (metro, centímetro e milímetro).",
      "materials": ["Réguas", "Fita métrica", "Folha de registro"],
      "steps": [
        "Apresentar a régua e a fita métrica, explicando as unidades metro, centímetro e milímetro.",
        "Pedir que estimem o comprimento de objetos da sala antes de medir.",
        "Medir os objetos com a régua ou fita métrica e comparar com a estimativa.",
        "Registrar as medidas encontradas em uma tabela.",
        "Comparar em grupo quais objetos são mais compridos ou mais curtos."
      ]
    },
    {
      "theme": "Medindo capacidades com litro e mililitro",
      "curriculumCode": "EF03M30",
      "description": "Estimativa, medição e comparação de capacidades, utilizando estratégias pessoais e unidades padronizadas mais usuais (litro e mililitro).",
      "materials": ["Recipientes de diferentes tamanhos", "Copo medidor", "Água"],
      "steps": [
        "Apresentar recipientes de diferentes tamanhos e perguntar qual cabe mais água.",
        "Estimar a capacidade de cada recipiente antes de medir.",
        "Usar um copo medidor para verificar a capacidade real de cada recipiente.",
        "Comparar os resultados com as estimativas feitas.",
        "Registrar em uma tabela as capacidades encontradas em litros ou mililitros."
      ]
    },
    {
      "theme": "Medindo massa com quilograma e grama",
      "curriculumCode": "EF03M31",
      "description": "Estimativa, medição e comparação de massa, utilizando estratégias pessoais e unidades padronizadas mais usuais (quilograma e grama).",
      "materials": ["Balança simples", "Objetos variados para pesar"],
      "steps": [
        "Apresentar uma balança e explicar as unidades quilograma e grama.",
        "Pedir que estimem qual objeto é mais pesado antes de pesar.",
        "Pesar os objetos na balança e comparar com as estimativas.",
        "Registrar os resultados em uma tabela.",
        "Discutir em grupo quais objetos são mais leves ou mais pesados."
      ]
    },
    {
      "theme": "Criando e mudando regras de um jogo",
      "curriculumCode": "EF03M32",
      "description": "Descrição das regras de um jogo e proposição de mudanças nas regras, sem perder o objetivo desafiador do jogo.",
      "materials": ["Jogo de tabuleiro simples ou jogo de regras conhecido pela turma"],
      "steps": [
        "Jogar um jogo de regras conhecido com a turma.",
        "Pedir que descrevam oralmente as regras do jogo para um colega que não conhece.",
        "Propor que sugiram uma mudança nas regras, mantendo o desafio do jogo.",
        "Testar a nova regra jogando novamente.",
        "Conversar sobre se a mudança tornou o jogo mais fácil, mais difícil ou mais divertido."
      ]
    },
    {
      "theme": "Estratégias para vencer um jogo",
      "curriculumCode": "EF03M33",
      "description": "Utilização de diferentes estratégias para atingir os objetivos de um jogo e descrição dessas estratégias, argumentando sobre a escolha.",
      "materials": ["Jogo de regras (trilha, dominó ou similar)"],
      "steps": [
        "Jogar em duplas ou pequenos grupos um jogo de regras simples.",
        "Perguntar quais decisões tomaram durante o jogo para tentar vencer.",
        "Pedir que expliquem por que escolheram determinada jogada.",
        "Jogar novamente, tentando aplicar uma nova estratégia.",
        "Compartilhar com a turma quais estratégias funcionaram melhor."
      ]
    },
    {
      "theme": "Projeto: água potável e saúde",
      "curriculumCode": "EF03M34",
      "description": "Desenvolvimento de um projeto explorando os benefícios da água potável para a saúde, relacionando-o com a Matemática.",
      "materials": ["Cartazes", "Dados sobre consumo de água (pesquisa simples)"],
      "steps": [
        "Conversar com a turma sobre a importância da água potável para a saúde.",
        "Propor uma pesquisa simples sobre quantos copos de água cada aluno bebe por dia.",
        "Organizar os dados coletados em uma tabela ou gráfico.",
        "Calcular, com a turma, médias ou totais simples a partir dos dados.",
        "Produzir um cartaz relacionando os resultados matemáticos ao tema da saúde."
      ]
    },
    {
      "theme": "Projeto: saneamento básico e saúde",
      "curriculumCode": "EF03M35",
      "description": "Desenvolvimento de um projeto explorando os benefícios do saneamento básico para a saúde, relacionando-o com a Matemática.",
      "materials": ["Imagens sobre saneamento básico", "Folha para registro de dados"],
      "steps": [
        "Apresentar de forma simples o que é saneamento básico e sua importância para a saúde.",
        "Propor uma pesquisa entre os alunos sobre hábitos relacionados (lavar as mãos, por exemplo).",
        "Organizar os dados coletados em uma tabela simples.",
        "Explorar os números encontrados, comparando quantidades.",
        "Produzir um cartaz relacionando os dados matemáticos ao tema do saneamento."
      ]
    },
    {
      "theme": "Criando problemas a partir de uma sentença matemática",
      "curriculumCode": "EF03M36",
      "description": "Formulação coletiva do enunciado de um problema a partir de uma sentença matemática e resolução, analisando a plausibilidade dos resultados.",
      "materials": ["Lousa", "Folha de registro"],
      "steps": [
        "Escrever uma sentença matemática na lousa, como 12 + 5 = 17.",
        "Pedir que a turma imagine uma situação do dia a dia que combine com essa conta.",
        "Escrever coletivamente o enunciado do problema criado.",
        "Resolver o problema e verificar se o resultado faz sentido.",
        "Propor que, em duplas, criem seus próprios problemas a partir de outras sentenças."
      ]
    },
    {
      "theme": "Investigando a propriedade comutativa da adição",
      "curriculumCode": "EF03M37",
      "description": "Investigação da validade da propriedade comutativa da adição a partir de regularidades.",
      "materials": ["Material dourado ou objetos para contar", "Lousa"],
      "steps": [
        "Propor uma soma, como 4 + 7, e depois a mesma soma invertida, 7 + 4.",
        "Pedir que verifiquem com material concreto se os resultados são iguais.",
        "Testar essa ideia com outros pares de números.",
        "Discutir coletivamente por que a ordem das parcelas não muda o resultado.",
        "Registrar no caderno a conclusão encontrada com exemplos."
      ]
    }
  ],
  ciencias: [
    {
      "theme": "Vai dissolver ou não? Investigando misturas",
      "curriculumCode": "EF03C01",
      "description": "Investigação da solubilidade em misturas, comparando e classificando semelhanças e diferenças entre materiais que se dissolvem e materiais que não se dissolvem na água.",
      "materials": ["Copos transparentes", "Água", "Sal, açúcar, areia e óleo", "Colheres", "Folha de registro com tabela"],
      "steps": [
        "Perguntar à turma o que acontece quando misturamos coisas diferentes na água.",
        "Organizar grupos e distribuir um copo de água para cada um.",
        "Misturar, um de cada vez, sal, açúcar, areia e óleo, mexendo bem após cada adição.",
        "Observar e anotar na tabela o que se dissolveu e o que não se dissolveu.",
        "Comparar os resultados dos grupos e discutir por que alguns materiais somem na água e outros não.",
        "Registrar uma conclusão coletiva sobre semelhanças e diferenças entre as misturas."
      ]
    },
    {
      "theme": "De onde vem o som? Energia em transformação",
      "curriculumCode": "EF03C02",
      "description": "Identificação de transformações de energia e das variáveis envolvidas nesse fenômeno, como a transformação de energia mecânica em energia sonora ao bater ou tocar objetos.",
      "materials": ["Réguas", "Elásticos", "Latas vazias", "Potes de plástico", "Colheres de pau"],
      "steps": [
        "Perguntar às crianças de onde vem o som que ouvimos ao bater objetos.",
        "Distribuir objetos variados (latas, réguas, elásticos) para os grupos explorarem.",
        "Pedir que batam, dedilhem ou balancem os objetos e sintam a vibração com a mão.",
        "Conversar sobre como o movimento (energia mecânica) vira som (energia sonora).",
        "Propor que criem uma pequena sequência sonora usando os objetos.",
        "Fechar com um registro em desenho de como o movimento gerou o som."
      ]
    },
    {
      "theme": "Luz e reflexo: quais superfícies brilham mais?",
      "curriculumCode": "EF03C03",
      "description": "Investigação da interação da luz com objetos de diferentes superfícies, reconhecendo que superfícies mais lisas e brilhantes têm maior capacidade de refletir a luz do que superfícies foscas ou ásperas.",
      "materials": ["Lanterna", "Papel alumínio", "Espelho pequeno", "Papel fosco/cartolina", "Tecido", "Sala que possa ser escurecida"],
      "steps": [
        "Escurecer parcialmente a sala e perguntar o que acontece quando a luz bate em objetos diferentes.",
        "Apresentar os materiais (alumínio, espelho, papel fosco, tecido) para os grupos.",
        "Direcionar a lanterna para cada superfície e observar o quanto de luz é refletida.",
        "Registrar em uma tabela quais superfícies refletiram mais e quais refletiram menos luz.",
        "Discutir por que superfícies lisas e brilhantes refletem mais que superfícies foscas.",
        "Relacionar a descoberta com objetos do dia a dia, como espelhos e roupas claras."
      ]
    },
    {
      "theme": "O ciclo da água e os dias secos e úmidos",
      "curriculumCode": "EF03C04",
      "description": "Pesquisa em fontes variadas sobre o ciclo da água, analisando sua influência nas sensações térmicas vivenciadas, como a diferença entre dias secos e dias úmidos.",
      "materials": ["Livros ou revistas com o ciclo da água", "Cartolina", "Lápis de cor", "Recipiente com água e tampa (opcional, para observação)"],
      "steps": [
        "Perguntar à turma se todo dia parece igualmente seco ou úmido e por quê.",
        "Apresentar imagens ou um pequeno texto sobre evaporação, condensação e chuva.",
        "Organizar uma pesquisa em duplas usando livros ou revistas disponíveis em sala.",
        "Pedir que desenhem o ciclo da água em um cartaz, indicando as etapas.",
        "Conversar sobre como a umidade do ar muda a sensação de calor em dias diferentes.",
        "Apresentar os cartazes para a turma e fechar com uma roda de conversa."
      ]
    },
    {
      "theme": "Água tratada: de onde vem e para onde vai",
      "curriculumCode": "EF03C05",
      "description": "Conhecimento das ações realizadas para o tratamento da água que chega às casas e do esgoto que é descartado, compreendendo por que esses processos são necessários.",
      "materials": ["Imagens ou vídeo curto sobre estação de tratamento de água", "Garrafa pet cortada", "Algodão, areia e pedrinhas (para filtro demonstrativo)", "Água suja com terra"],
      "steps": [
        "Perguntar de onde vem a água da torneira e para onde vai a água usada.",
        "Mostrar imagens simples das etapas de tratamento de água e de esgoto.",
        "Montar com a turma um filtro caseiro usando garrafa pet, algodão, areia e pedrinhas.",
        "Passar a água suja pelo filtro e observar a diferença antes e depois.",
        "Explicar que o filtro caseiro é só uma demonstração, não deixa a água própria para beber.",
        "Fechar discutindo por que tratar a água e o esgoto é importante para a saúde."
      ]
    },
    {
      "theme": "Quem polui e como podemos combater a poluição",
      "curriculumCode": "EF03C06",
      "description": "Pesquisa em fontes variadas sobre agentes causadores de poluição e discussão sobre modos de combatê-la, ampliando a percepção sobre impactos no ambiente.",
      "materials": ["Revistas ou imagens impressas sobre poluição", "Cartolina", "Cola e tesoura sem ponta", "Canetinhas"],
      "steps": [
        "Perguntar à turma o que eles entendem por poluição e onde já viram exemplos.",
        "Organizar grupos para pesquisar em revistas ou imagens diferentes tipos de poluição (ar, água, solo, sonora).",
        "Recortar e colar as imagens encontradas em um cartaz coletivo, separadas por tipo.",
        "Discutir em roda quais atitudes ajudam a combater cada tipo de poluição.",
        "Cada grupo propõe uma ação concreta para reduzir a poluição na escola.",
        "Apresentar os cartazes e combinar uma ação para colocar em prática na turma."
      ]
    },
    {
      "theme": "Como a Terra se move no espaço?",
      "curriculumCode": "EF03C07",
      "description": "Identificação e caracterização dos movimentos da Terra em relação a si mesma e ao Sol, introduzindo as noções de rotação e translação.",
      "materials": ["Globo terrestre ou bola grande", "Lanterna", "Giz ou fita para marcar um ponto na bola"],
      "steps": [
        "Perguntar se a Terra fica parada ou se movimenta, e como podemos perceber isso.",
        "Apresentar o globo (ou bola) e a lanterna representando o Sol.",
        "Marcar um ponto na bola representando a nossa cidade.",
        "Girar a bola em torno de si mesma e depois em volta da lanterna, nomeando cada movimento.",
        "Explicar que um movimento é a rotação e o outro é a translação.",
        "Registrar em desenho os dois movimentos observados na demonstração."
      ]
    },
    {
      "theme": "Por que existe dia e noite?",
      "curriculumCode": "EF03C08",
      "description": "Explicação do dia e da noite com referência ao movimento de rotação da Terra em torno do próprio eixo, relacionando a parte iluminada e a parte escura do planeta.",
      "materials": ["Globo terrestre ou bola", "Lanterna", "Sala que possa ser escurecida", "Adesivo pequeno para marcar a posição da cidade"],
      "steps": [
        "Escurecer a sala e apontar a lanterna para o globo, representando o Sol iluminando a Terra.",
        "Marcar no globo o ponto onde fica a nossa cidade.",
        "Girar lentamente o globo sobre seu próprio eixo e observar quando o ponto fica iluminado e quando fica escuro.",
        "Relacionar o lado iluminado com o dia e o lado escuro com a noite.",
        "Perguntar por que não é dia ou noite ao mesmo tempo em todos os lugares do mundo.",
        "Fechar com um registro escrito ou desenhado da explicação construída."
      ]
    },
    {
      "theme": "A Terra viaja ao redor do Sol: as estações do ano",
      "curriculumCode": "EF03C09",
      "description": "Relação entre o movimento de translação da Terra, sua inclinação em relação a um eixo imaginário e a ocorrência das estações do ano.",
      "materials": ["Globo terrestre inclinado (ou bola com um palito representando o eixo)", "Lanterna", "Cartazes com imagens das quatro estações"],
      "steps": [
        "Relembrar com a turma o movimento de translação estudado anteriormente.",
        "Mostrar que o globo fica sempre um pouco inclinado enquanto se move ao redor do Sol (lanterna).",
        "Movimentar o globo inclinado ao redor da lanterna, observando diferentes partes mais ou menos iluminadas.",
        "Apresentar imagens das quatro estações do ano e relacioná-las ao movimento observado.",
        "Perguntar quais estações a turma já vivenciou e como percebem as mudanças.",
        "Registrar em um cartaz coletivo a relação entre translação, inclinação e estações."
      ]
    },
    {
      "theme": "A Lua também se move",
      "curriculumCode": "EF03C10",
      "description": "Compreensão de que a Lua se movimenta no espaço, relacionando esse movimento com os movimentos de translação (ao redor da Terra) e de rotação da própria Lua.",
      "materials": ["Bolinha de isopor representando a Lua", "Globo terrestre ou bola representando a Terra", "Lanterna representando o Sol", "Barbante ou palito para simular a órbita"],
      "steps": [
        "Perguntar à turma se a Lua fica sempre parada no céu ou se movimenta.",
        "Apresentar as três bolinhas/objetos representando Sol, Terra e Lua.",
        "Movimentar a Lua ao redor da Terra, mostrando a órbita com o barbante como guia.",
        "Girar também a Lua sobre si mesma enquanto orbita a Terra.",
        "Explicar que a Lua se movimenta tanto ao redor da Terra quanto em torno de si mesma.",
        "Fechar com perguntas orais checando a compreensão dos dois movimentos."
      ]
    },
    {
      "theme": "Sinais do corpo: o que a febre e outros sinais nos dizem",
      "curriculumCode": "EF03C11",
      "description": "Identificação de alterações em alguns sinais vitais do próprio corpo, como febre e desidratação, relacionando-as a sintomas comuns de diferentes doenças.",
      "materials": ["Cartazes com imagens de sintomas (febre, sede excessiva, mal-estar)", "Termômetro demonstrativo (não precisa ser usado nas crianças)", "Copo de água"],
      "steps": [
        "Perguntar se alguém já teve febre ou já ficou com muita sede e como se sentiu.",
        "Apresentar cartazes com sinais do corpo: febre, desidratação, mal-estar.",
        "Explicar de forma simples o que é cada sinal e por que o corpo reage assim.",
        "Relacionar cada sinal a situações comuns, como pegar um resfriado ou ficar muito tempo no sol sem beber água.",
        "Conversar sobre a importância de avisar um adulto quando perceber esses sinais.",
        "Fechar com um desenho de uma atitude de cuidado diante de um desses sinais."
      ]
    },
    {
      "theme": "Hábitos de higiene para uma vida saudável",
      "curriculumCode": "EF03C12",
      "description": "Discussão sobre cuidados de higiene e hábitos cotidianos, relacionando-os à manutenção e promoção da saúde individual e coletiva.",
      "materials": ["Cartazes com hábitos de higiene (lavar as mãos, escovar os dentes, tomar banho)", "Sabonete (para demonstração)", "Papel e lápis"],
      "steps": [
        "Perguntar quais hábitos de higiene a turma já faz todos os dias.",
        "Apresentar cartazes com diferentes hábitos e discutir por que cada um é importante.",
        "Fazer uma dramatização simples de lavar as mãos corretamente.",
        "Discutir como o cuidado individual (como lavar as mãos) também protege as outras pessoas.",
        "Pedir que cada criança liste três hábitos de higiene que pratica em casa.",
        "Fechar combinando um lembrete coletivo de higiene para a sala de aula."
      ]
    },
    {
      "theme": "Do nascimento à vida adulta: as fases da vida dos seres vivos",
      "curriculumCode": "EF03C13",
      "description": "Descrição das mudanças que ocorrem nas fases da vida de diferentes seres vivos, relacionando essas mudanças ao ambiente em que vivem.",
      "materials": ["Imagens de ciclos de vida (borboleta, sapo, planta, ser humano)", "Cartolina", "Cola e tesoura sem ponta"],
      "steps": [
        "Perguntar como éramos quando bebês e como estamos mudando ao crescer.",
        "Apresentar imagens embaralhadas das fases de vida de um ser vivo (por exemplo, a borboleta).",
        "Pedir que os grupos organizem as imagens na ordem correta das fases.",
        "Colar a sequência em um cartaz, nomeando cada fase.",
        "Comparar as fases de vida de diferentes seres vivos estudados pela turma.",
        "Fechar relacionando como o ambiente pode influenciar essas mudanças."
      ]
    },
    {
      "theme": "O prato de cada um: hábitos alimentares e diversidade cultural",
      "curriculumCode": "EF03C14",
      "description": "Levantamento dos diferentes hábitos alimentares presentes na alimentação dos estudantes, identificando e valorizando a diversidade cultural presente na turma.",
      "materials": ["Papel e lápis para entrevista simples", "Imagens de pratos típicos variados", "Cartolina para mural coletivo"],
      "steps": [
        "Perguntar à turma qual é o prato favorito de cada um e de onde ele vem.",
        "Propor uma pequena entrevista em casa sobre um prato tradicional da família.",
        "Reunir as respostas trazidas pelas crianças em uma roda de conversa.",
        "Montar um mural coletivo com desenhos ou descrições dos pratos citados.",
        "Discutir as semelhanças e diferenças entre os hábitos alimentares da turma.",
        "Fechar valorizando a diversidade cultural presente nos hábitos alimentares da sala."
      ]
    },
    {
      "theme": "Saneamento básico: por que ele é importante para a saúde?",
      "curriculumCode": "EF03C15",
      "description": "Pesquisa sobre algumas doenças que podem estar associadas à falta de saneamento básico, propondo possíveis ações para minimizar esse problema.",
      "materials": ["Imagens sobre saneamento básico (esgoto, coleta de lixo, água tratada)", "Cartolina", "Canetinhas"],
      "steps": [
        "Perguntar à turma o que é saneamento básico e por que ele é importante.",
        "Apresentar imagens simples relacionando falta de saneamento a doenças comuns.",
        "Organizar uma pesquisa em grupo sobre uma doença ligada à falta de saneamento.",
        "Anotar em cartaz o que causa a doença e como o saneamento ajuda a evitá-la.",
        "Discutir coletivamente possíveis ações que a comunidade pode tomar para melhorar o saneamento.",
        "Apresentar os cartazes para a turma, fechando com um combinado de atitudes de cuidado."
      ]
    }
  ],
  geografia: [
    {
      "theme": "Cidade e campo: jeitos diferentes de viver",
      "curriculumCode": "EF03G01",
      "description": "Identificação e comparação de aspectos culturais dos grupos sociais em seus lugares de vivência, seja na cidade ou no campo.",
      "materials": ["Fotos ou imagens comparando cenas de cidade e de campo", "Cartolina e revistas para recorte"],
      "steps": [
        "Perguntar aos alunos se já visitaram uma fazenda, sítio ou área rural.",
        "Mostrar imagens comparando cenas urbanas e rurais.",
        "Organizar duplas para listar diferenças entre cidade e campo (casas, transporte, trabalho, lazer).",
        "Compartilhar as listas em roda de conversa.",
        "Registrar no caderno um desenho comparando cidade e campo."
      ]
    },
    {
      "theme": "Meios de comunicação: conectando pessoas e lugares",
      "curriculumCode": "EF03G02",
      "description": "Comparação entre diferentes meios de comunicação, discutindo seu papel na conexão entre pessoas e lugares, além dos riscos e cuidados no seu uso.",
      "materials": ["Cartazes com imagens de carta, telefone, rádio, TV e internet"],
      "steps": [
        "Perguntar quais meios de comunicação a família usa em casa.",
        "Apresentar cartazes com diferentes meios de comunicação.",
        "Conversar sobre como cada um ajuda a conectar pessoas distantes.",
        "Discutir cuidados ao usar internet e celular, como não falar com estranhos e pedir ajuda de um adulto.",
        "Registrar no caderno o meio de comunicação preferido e o motivo."
      ]
    },
    {
      "theme": "Espaços públicos da cidade e do campo",
      "curriculumCode": "EF03G03",
      "description": "Reconhecimento das características e dos usos de espaços públicos urbanos e rurais, como praças, parques, áreas protegidas e locais de manifestações populares.",
      "materials": ["Fotos de praças, parques e feiras do bairro"],
      "steps": [
        "Perguntar quais espaços públicos os alunos frequentam no bairro.",
        "Mostrar fotos de praças, parques e áreas protegidas.",
        "Conversar sobre as atividades que acontecem nesses lugares, como feiras e eventos.",
        "Pedir que desenhem um espaço público que gostam de frequentar.",
        "Compartilhar os desenhos com a turma."
      ]
    },
    {
      "theme": "Serviços públicos no bairro: água, lixo e comércio",
      "curriculumCode": "EF03G04",
      "description": "Reconhecimento de dinâmicas do espaço vivido, como o comércio, o abastecimento de água, a coleta de lixo e o saneamento básico, relacionando-as a serviços públicos.",
      "materials": ["Imagens de caminhão de lixo, caixa d'água e mercado"],
      "steps": [
        "Perguntar de onde vem a água usada em casa.",
        "Mostrar imagens do abastecimento de água e da coleta de lixo.",
        "Conversar sobre o papel do comércio no bairro, como mercado, padaria e feira.",
        "Relacionar esses serviços ao trabalho de pessoas da comunidade.",
        "Registrar no caderno um serviço público importante para o bairro."
      ]
    },
    {
      "theme": "Chuvas e enchentes: relevo e ocupação",
      "curriculumCode": "EF03G05",
      "description": "Identificação dos períodos chuvosos e relação das áreas de enchente com o relevo, a ocupação humana das várzeas e a perda de cobertura vegetal.",
      "materials": ["Imagens de enchentes", "Desenho simples de relevo com áreas altas e baixas"],
      "steps": [
        "Perguntar se já viram ou passaram por uma enchente.",
        "Mostrar imagens de áreas baixas alagadas após chuva forte.",
        "Explicar de forma simples por que áreas baixas (várzeas) alagam mais.",
        "Conversar sobre como construções e a falta de vegetação pioram as enchentes.",
        "Desenhar uma cena de chuva mostrando uma atitude que ajuda a evitar enchentes."
      ]
    },
    {
      "theme": "Maquete do meu bairro",
      "curriculumCode": "EF03G06",
      "description": "Localização de informações como endereços, nomes de ruas e pontos de referência em desenhos de trajetos, com elaboração de maquete representando os lugares de vivência.",
      "materials": ["Caixas de papelão e sucata", "Cola, tesoura sem ponta e tinta"],
      "steps": [
        "Pedir que descrevam o trajeto de casa até a escola.",
        "Listar pontos de referência do trajeto, como padaria, praça e semáforo.",
        "Organizar grupos para montar uma maquete com sucata.",
        "Posicionar os pontos de referência na maquete.",
        "Apresentar a maquete para a turma explicando o trajeto representado."
      ]
    },
    {
      "theme": "Mapas e maquetes: vendo de cima e de lado",
      "curriculumCode": "EF03G07",
      "description": "Identificação de imagens bidimensionais e tridimensionais em diferentes representações cartográficas, em diferentes suportes e tecnologias digitais.",
      "materials": ["Foto aérea de um lugar conhecido", "Maquete ou objeto tridimensional"],
      "steps": [
        "Mostrar uma foto de vista aérea de um lugar conhecido.",
        "Comparar com uma foto tirada de dentro do lugar, em vista lateral.",
        "Explicar a diferença entre imagem bidimensional (mapa) e tridimensional (maquete).",
        "Se possível, mostrar um mapa digital simples em computador ou tablet.",
        "Pedir que classifiquem imagens trazidas como 2D ou 3D."
      ]
    },
    {
      "theme": "Legendas nos mapas: descobrindo os símbolos",
      "curriculumCode": "EF03G08",
      "description": "Reconhecimento e elaboração de legendas com símbolos de diferentes tipos de representações, considerando diferentes escalas cartográficas.",
      "materials": ["Mapa simples com legenda de símbolos", "Papel e lápis de cor"],
      "steps": [
        "Mostrar um mapa simples com legenda de símbolos.",
        "Explicar o que cada símbolo da legenda representa.",
        "Pedir que criem símbolos próprios para elementos do bairro, como escola e mercado.",
        "Elaborar uma pequena legenda com os símbolos criados.",
        "Trocar as legendas entre colegas para tentar identificar os símbolos uns dos outros."
      ]
    },
    {
      "theme": "Construindo juntos o mapa do bairro",
      "curriculumCode": "EF03G09",
      "description": "Elaboração coletiva do mapa do bairro ou da cidade com pontos de referência, organizando uma legenda compartilhada com os estudantes, em diferentes suportes e tecnologias.",
      "materials": ["Papel pardo grande", "Canetinhas e réguas"],
      "steps": [
        "Relembrar os pontos de referência já estudados do bairro.",
        "Organizar a turma para desenhar juntos um mapa grande em papel pardo.",
        "Decidir coletivamente os símbolos que formarão a legenda.",
        "Posicionar os pontos de referência no mapa coletivo.",
        "Expor o mapa na sala e revisar com a turma."
      ]
    },
    {
      "theme": "Lendo mapas: clima e paisagens de São Paulo e do Brasil",
      "curriculumCode": "EF03G10",
      "description": "Leitura de mapas simples usando legendas como fonte de informação sobre temas geográficos, como clima e ambientes em diferentes regiões da Cidade de São Paulo e do Brasil, comparando mapas e fotografias.",
      "materials": ["Mapa simples de São Paulo e do Brasil", "Fotos de paisagens de diferentes regiões"],
      "steps": [
        "Apresentar um mapa simples de São Paulo e um do Brasil.",
        "Mostrar fotos de paisagens de diferentes regiões, como praia, serra e cidade.",
        "Relacionar cada foto com sua localização aproximada no mapa.",
        "Conversar sobre diferenças de clima entre as regiões mostradas.",
        "Pedir que apontem no mapa onde fica a escola."
      ]
    },
    {
      "theme": "Atitudes sustentáveis no dia a dia",
      "curriculumCode": "EF03G11",
      "description": "Conhecimento de algumas atitudes favoráveis à sustentabilidade ambiental no cotidiano.",
      "materials": ["Cartazes com exemplos de atitudes sustentáveis"],
      "steps": [
        "Perguntar o que os alunos entendem por cuidar do planeta.",
        "Apresentar exemplos de atitudes sustentáveis do dia a dia, como economizar água.",
        "Discutir em grupo quais dessas atitudes já praticam em casa.",
        "Criar um cartaz coletivo com compromissos sustentáveis da turma.",
        "Combinar de praticar uma atitude durante a semana e relatar depois."
      ]
    },
    {
      "theme": "Para onde vai o lixo da escola?",
      "curriculumCode": "EF03G12",
      "description": "Identificação da relação entre a produção de resíduos domésticos e da escola e os problemas causados no ambiente, incluindo alterações socioambientais.",
      "materials": ["Sacos de lixo vazios para demonstração", "Imagens de aterro sanitário"],
      "steps": [
        "Observar quanto lixo a turma produz em um dia de aula.",
        "Conversar sobre para onde vai esse lixo depois de descartado.",
        "Mostrar imagens do que acontece quando o lixo é jogado de forma incorreta.",
        "Discutir problemas causados pelo excesso de lixo no ambiente.",
        "Propor uma ação simples para reduzir o lixo na sala de aula."
      ]
    },
    {
      "theme": "Coleta seletiva na cidade de São Paulo",
      "curriculumCode": "EF03G13",
      "description": "Conhecimento do sistema de coleta seletiva de resíduos sólidos da Cidade de São Paulo.",
      "materials": ["Potes ou caixas coloridas (azul, verde, amarelo, vermelho)", "Embalagens recicláveis limpas"],
      "steps": [
        "Perguntar se em casa costumam separar o lixo para reciclagem.",
        "Explicar as cores da coleta seletiva e o que cada uma representa.",
        "Mostrar embalagens variadas e classificá-las junto com a turma.",
        "Simular a separação de materiais recicláveis em potes coloridos.",
        "Registrar no caderno as cores e os materiais da coleta seletiva."
      ]
    },
    {
      "theme": "Consumindo com consciência: cidade e campo",
      "curriculumCode": "EF03G14",
      "description": "Identificação do consumo excessivo de recursos naturais e de alguns problemas socioambientais das atividades econômicas urbanas e rurais.",
      "materials": ["Imagens de plantações, fábricas e rios"],
      "steps": [
        "Conversar sobre de onde vêm os recursos naturais que usamos, como água e madeira.",
        "Mostrar imagens de atividades econômicas na cidade e no campo.",
        "Discutir o que acontece quando esses recursos são usados em excesso.",
        "Relacionar exemplos com problemas ambientais, como desmatamento e poluição da água.",
        "Propor uma atitude de consumo consciente para praticar em casa."
      ]
    },
    {
      "theme": "Reutilizar para ajudar: latinhas e cadeiras de rodas",
      "curriculumCode": "EF03G15",
      "description": "Conhecimento do uso de materiais reutilizáveis em benefício de comunidades vulneráveis, como campanhas de arrecadação de latas de alumínio para doação de cadeiras de rodas.",
      "materials": ["Latinhas de alumínio limpas", "Imagens de campanhas de arrecadação"],
      "steps": [
        "Perguntar o que os alunos fazem com latinhas usadas em casa.",
        "Contar a história de campanhas que trocam latinhas por cadeiras de rodas.",
        "Mostrar imagens do processo de arrecadação e doação.",
        "Conversar sobre como pequenas atitudes ajudam outras pessoas.",
        "Organizar uma coleta simbólica de latinhas na sala."
      ]
    },
    {
      "theme": "Como povos tradicionais cuidam do lixo",
      "curriculumCode": "EF03G16",
      "description": "Conhecimento de como diferentes povos, como comunidades indígenas, quilombolas, ribeirinhas e caiçaras, resolvem seus problemas de resíduos sólidos.",
      "materials": ["Imagens de comunidades indígenas, quilombolas e ribeirinhas"],
      "steps": [
        "Apresentar imagens de diferentes povos e comunidades tradicionais do Brasil.",
        "Conversar sobre o modo de vida dessas comunidades.",
        "Explicar como alguns desses povos lidam com o lixo de forma natural.",
        "Comparar com o que a turma faz com o lixo na cidade.",
        "Registrar no caderno uma diferença observada."
      ]
    },
    {
      "theme": "Da natureza para a nossa mesa",
      "curriculumCode": "EF03G17",
      "description": "Identificação de alimentos, minerais e outros produtos cultivados ou extraídos da natureza, comparando atividades de trabalho em diferentes lugares.",
      "materials": ["Embalagens de alimentos (arroz, feijão, frutas)", "Imagem de mina ou pedreira"],
      "steps": [
        "Trazer exemplos de alimentos e perguntar de onde eles vêm.",
        "Mostrar imagens de plantações e de extração de minerais.",
        "Classificar os produtos trazidos entre cultivados e extraídos.",
        "Conversar sobre o trabalho das pessoas envolvidas nessas atividades.",
        "Desenhar um alimento e seu local de origem."
      ]
    },
    {
      "theme": "Da matéria-prima ao produto industrializado",
      "curriculumCode": "EF03G18",
      "description": "Identificação do processo de transformação da matéria-prima em produto industrializado, tanto no campo quanto na cidade.",
      "materials": ["Exemplos ou imagens de matéria-prima e produto final (algodão/camiseta, leite/iogurte, cana/açúcar)"],
      "steps": [
        "Apresentar um par de exemplo, como algodão e camiseta.",
        "Perguntar como o algodão se transforma em roupa.",
        "Mostrar outros pares de matéria-prima e produto, como leite e iogurte.",
        "Organizar grupos para associar matérias-primas aos produtos corretos.",
        "Registrar no caderno um exemplo de transformação estudado."
      ]
    }
  ],
  historia: [
    {
      "theme": "Passeio pelos espaços de brincar da escola e do bairro",
      "curriculumCode": "EF03H01",
      "description": "Reconhecimento e apreciação dos espaços e momentos dedicados ao brincar presentes na escola, no bairro e na cidade.",
      "materials": ["Caderno de anotações", "Lápis", "Prancheta de papelão com clipe"],
      "steps": [
        "Conversar em roda sobre onde as crianças costumam brincar na escola.",
        "Fazer um passeio guiado pelos espaços de brincar da escola (pátio, quadra, parquinho).",
        "Registrar por desenho ou anotação cada espaço visitado.",
        "Ampliar a conversa para espaços de brincar do bairro que os alunos conhecem.",
        "Montar um mural coletivo com os espaços lúdicos descobertos."
      ]
    },
    {
      "theme": "Espaço é de todo mundo ou só meu? Praças x quintais",
      "curriculumCode": "EF03H02",
      "description": "Distinção entre espaços lúdicos privados (como o quintal de casa) e públicos (como praças e parques), reconhecendo suas diferentes formas de uso.",
      "materials": ["Imagens impressas de espaços variados (praça, quintal, parquinho de condomínio, parque público)", "Cartolina", "Cola"],
      "steps": [
        "Mostrar imagens de diferentes espaços de brincar.",
        "Perguntar quem pode usar cada espaço mostrado.",
        "Classificar as imagens em dois grupos: espaço público e espaço privado.",
        "Colar as imagens classificadas em um cartaz dividido em duas colunas.",
        "Discutir por que existem regras diferentes para cada tipo de espaço."
      ]
    },
    {
      "theme": "Histórias dos parques da nossa cidade",
      "curriculumCode": "EF03H03",
      "description": "Localização e conhecimento de diferentes histórias e espaços lúdicos da Cidade de São Paulo por meio de visitas, vídeos, imagens e relatos orais.",
      "materials": ["Vídeo curto sobre um parque histórico de São Paulo", "Imagens impressas", "Folha de registro"],
      "steps": [
        "Apresentar um vídeo curto sobre um parque histórico paulistano.",
        "Conversar sobre quando o espaço foi criado e como era usado antigamente.",
        "Comparar o parque estudado com um espaço de lazer conhecido pelos alunos hoje.",
        "Registrar em folha o nome, a localização e uma curiosidade do espaço estudado.",
        "Compartilhar as descobertas com a turma."
      ]
    },
    {
      "theme": "Inventando critérios para organizar os espaços de brincar",
      "curriculumCode": "EF03H04",
      "description": "Elaboração de critérios próprios de classificação dos espaços lúdicos da Cidade de São Paulo.",
      "materials": ["Fichas com nomes e imagens de espaços lúdicos", "Cartolina", "Canetinha"],
      "steps": [
        "Relembrar coletivamente os espaços lúdicos já conhecidos pela turma.",
        "Em pequenos grupos, pensar em um critério para separar esses espaços (coberto/aberto, com ou sem brinquedos).",
        "Cada grupo organiza as fichas conforme o critério escolhido.",
        "Apresentar o critério escolhido para a turma.",
        "Registrar coletivamente os diferentes critérios encontrados pelos grupos."
      ]
    },
    {
      "theme": "Quem pode brincar aqui? Mapeando o bairro",
      "curriculumCode": "EF03H05",
      "description": "Identificação dos espaços lúdicos dos bairros e da Cidade de São Paulo por meio de visitas, imagens e relatos orais, reconhecendo se qualquer pessoa pode utilizar esses espaços.",
      "materials": ["Mapa simples do bairro (desenhado ou impresso)", "Adesivos ou figurinhas", "Lápis de cor"],
      "steps": [
        "Conversar sobre os espaços de brincar existentes perto da escola ou de casa.",
        "Marcar no mapa do bairro os espaços lembrados pelos alunos.",
        "Perguntar se qualquer pessoa pode usar cada espaço marcado.",
        "Anotar ao lado de cada marcação se o espaço é aberto a todos ou restrito.",
        "Conversar sobre o resultado do mapeamento coletivo."
      ]
    },
    {
      "theme": "Brincadeiras e espaços dos povos indígenas na cidade",
      "curriculumCode": "EF03H06",
      "description": "Reconhecimento dos espaços e tempos lúdicos das populações indígenas que vivem na Cidade de São Paulo, a partir de bens materiais e imateriais do seu patrimônio histórico.",
      "materials": ["Imagens ou vídeo curto sobre uma aldeia indígena presente na cidade de São Paulo", "Texto simples adaptado", "Papel para desenho"],
      "steps": [
        "Apresentar imagens ou um vídeo curto sobre uma aldeia indígena presente na cidade de São Paulo.",
        "Conversar sobre os espaços e momentos de brincar mostrados.",
        "Ler um texto simples sobre um objeto ou brincadeira indígena ligada a esse espaço.",
        "Pedir que os alunos desenhem o espaço lúdico indígena apresentado.",
        "Conversar sobre a importância de conhecer e respeitar essa cultura."
      ]
    },
    {
      "theme": "Espaços de cultura afro-brasileira na cidade",
      "curriculumCode": "EF03H07",
      "description": "Conhecimento de espaços e tempos lúdicos relacionados às culturas afro-brasileiras presentes na cidade, considerando bens materiais e imateriais do patrimônio histórico.",
      "materials": ["Imagens de manifestações culturais afro-brasileiras ligadas a espaços públicos (ex.: roda de capoeira em praça)", "Texto simples", "Giz de cera"],
      "steps": [
        "Apresentar imagens de uma manifestação cultural afro-brasileira que acontece em espaço público.",
        "Explicar de forma simples a origem e o significado da manifestação.",
        "Conversar sobre em que espaço da cidade essa manifestação costuma acontecer.",
        "Propor um desenho representando a cena observada.",
        "Expor os desenhos em um varal na sala."
      ]
    },
    {
      "theme": "Brincadeiras que vieram de longe: espaços dos imigrantes",
      "curriculumCode": "EF03H08",
      "description": "Conhecimento dos espaços e tempos lúdicos das populações imigrantes que vivem na Cidade de São Paulo, considerando bens materiais e imateriais do seu patrimônio histórico.",
      "materials": ["Imagens de bairros com forte presença de imigrantes (ex.: Bixiga, Liberdade, Bom Retiro)", "Fotos de festas de bairro", "Folha de registro"],
      "steps": [
        "Apresentar imagens de um bairro paulistano marcado pela presença de imigrantes.",
        "Contar brevemente a história de chegada desse grupo à cidade.",
        "Mostrar um espaço lúdico ou uma festa ligada a essa comunidade.",
        "Perguntar se os alunos conhecem espaços parecidos perto de casa.",
        "Registrar em desenho um espaço ou festa apresentada."
      ]
    },
    {
      "theme": "Passeio pelos espaços de lazer do bairro",
      "curriculumCode": "EF03H09",
      "description": "Identificação dos espaços de lazer dos bairros da Cidade de São Paulo, reconhecendo se qualquer pessoa pode utilizá-los.",
      "materials": ["Fotos de espaços de lazer do bairro da escola", "Cartaz ou mapa do bairro", "Canetinha"],
      "steps": [
        "Mostrar fotos de espaços de lazer do bairro da escola.",
        "Pedir que os alunos identifiquem os espaços que já visitaram.",
        "Discutir se algum desses espaços tem restrição de uso.",
        "Marcar os espaços conhecidos em um cartaz coletivo do bairro.",
        "Comentar sobre a importância de existirem espaços de lazer para todos."
      ]
    },
    {
      "theme": "Todo mundo consegue brincar aqui? Investigando a acessibilidade",
      "curriculumCode": "EF03H10",
      "description": "Identificação da acessibilidade ou não acessibilidade dos espaços lúdicos e de lazer da cidade.",
      "materials": ["Imagens de parques com e sem adaptações de acessibilidade", "Folha de observação", "Lápis"],
      "steps": [
        "Mostrar imagens de dois parques: um acessível e outro não.",
        "Perguntar o que uma pessoa com dificuldade de locomoção conseguiria ou não fazer em cada um.",
        "Listar elementos que tornam um espaço acessível (rampa, piso tátil, brinquedos adaptados).",
        "Em grupos, observar um espaço de lazer da escola ou do bairro e anotar o que falta para ser acessível.",
        "Compartilhar as observações e propor melhorias."
      ]
    },
    {
      "theme": "Combinados para conviver bem nos espaços de brincar",
      "curriculumCode": "EF03H11",
      "description": "Reflexão sobre o respeito aos diferentes espaços de convivência utilizados pela comunidade escolar e pela cidade.",
      "materials": ["Cartolina", "Canetinha", "Cenas ilustradas de conflitos em espaços coletivos (parquinho, quadra)"],
      "steps": [
        "Apresentar cenas ilustradas de conflitos em espaços de brincar compartilhados.",
        "Conversar sobre o que causou o conflito em cada cena.",
        "Levantar coletivamente atitudes de respeito para esses espaços.",
        "Criar um cartaz de combinados para os espaços de convivência da escola.",
        "Fixar o cartaz em local visível da sala ou do pátio."
      ]
    },
    {
      "theme": "Cuidando dos espaços que são de todos",
      "curriculumCode": "EF03H12",
      "description": "Identificação e preservação dos diferentes espaços sociais presentes no cotidiano.",
      "materials": ["Imagens de espaços públicos bem cuidados e mal cuidados", "Folha de registro", "Lápis de cor"],
      "steps": [
        "Mostrar imagens de espaços públicos conservados e de espaços deteriorados.",
        "Conversar sobre as diferenças entre as imagens e suas possíveis causas.",
        "Listar atitudes que ajudam a preservar um espaço público.",
        "Desenhar um espaço social do cotidiano dos alunos sendo bem cuidado.",
        "Combinar coletivamente um compromisso de cuidado com os espaços da escola."
      ]
    },
    {
      "theme": "Espaços de encontro: qualidade, segurança e beleza",
      "curriculumCode": "EF03H13",
      "description": "Valorização dos convívios humanos em diferentes tempos e espaços, observando e analisando os espaços de encontro, cultura e lazer quanto à qualidade, segurança e beleza.",
      "materials": ["Fichas com os critérios qualidade, segurança e beleza", "Imagens de diferentes espaços de encontro da cidade", "Folha de avaliação simples"],
      "steps": [
        "Apresentar três critérios simples para avaliar um espaço: qualidade, segurança e beleza.",
        "Mostrar imagens de diferentes espaços de encontro e lazer da cidade.",
        "Em duplas, avaliar cada imagem usando os três critérios.",
        "Socializar as avaliações e comparar as opiniões da turma.",
        "Concluir com uma conversa sobre o que poderia melhorar nos espaços avaliados."
      ]
    }
  ]
};
