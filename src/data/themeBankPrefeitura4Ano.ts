// Banco de temas do 4º ano — rede MUNICIPAL (Currículo da Cidade, SME-SP), no mesmo formato de
// src/data/themeBank.ts (2º ano) e dos demais anos dessa rede. Códigos de habilidade
// (curriculumCode) pesquisados diretamente no texto oficial dos documentos "Currículo da Cidade"
// (SME-SP, 2ª edição), seção "4º ANO DO ENSINO FUNDAMENTAL" (Ciclo Interdisciplinar), publicados
// em acervodigital.sme.prefeitura.sp.gov.br — não são estimados. A partir do 4º ano (Ciclo
// Interdisciplinar) Ciências, Geografia e Matemática seguem o formato curto já usado no 1º-3º ano
// ("EF04C..", "EF04G..", "EF04M.."), enquanto Língua Portuguesa usa o formato padrão "EF04LP..";
// História também usa o formato curto "EF04H..".

import { BankEntry, OwnSubject } from "@/types/plano";

export const PREFEITURA_4_ANO_THEME_BANK: Record<OwnSubject, BankEntry[]> = {
  "lingua-portuguesa": [
    {
      "theme": "Roda de contos, mitos, lendas e fábulas de diferentes culturas",
      "curriculumCode": "EF04LP01",
      "description": "Escuta e leitura de textos literários variados de distintas culturas — contos de aventura, assombração, mistério, modernos e populares, além de fábulas, mitos, lendas, crônicas e poemas.",
      "materials": ["Coletânea de contos, fábulas, mitos e lendas de diferentes culturas", "Cartolina para mural de registros", "Marcadores coloridos"],
      "steps": [
        "Apresentar aos alunos uma seleção de textos literários de diferentes culturas e gêneros.",
        "Ler um texto por dia em voz alta durante a semana, variando o gênero (conto, fábula, mito, lenda, crônica, poema).",
        "Após cada leitura, conversar sobre a cultura de origem do texto e suas características.",
        "Pedir que os alunos registrem em fichas o título, o gênero e uma curiosidade sobre a cultura de origem.",
        "Montar um mural coletivo organizando os textos lidos por gênero e por cultura de origem."
      ],
      "classScript": [
        "Organize os alunos em roda (cadeiras ou no chão, se houver tapete) e mostre a coletânea de textos, folheando a capa e comentando de onde vem cada um: 'Esse mito é indígena, essa fábula é africana, essa lenda é do Japão'.",
        "Antes de ler o primeiro texto, pergunte: 'Alguém já ouviu falar de um mito ou lenda contado na sua casa?' Deixe dois ou três alunos contarem rapidamente.",
        "Leia o texto do dia em voz alta, com entonação, parando em pontos de suspense para perguntar 'o que vocês acham que vai acontecer?'.",
        "Depois da leitura, escreva na lousa três perguntas fixas que vão se repetir todo dia: 'De onde vem essa história? Quem são os personagens? O que ela quer nos ensinar ou explicar?' e conduza a conversa coletiva a partir delas.",
        "Distribua uma ficha simples (título, gênero, cultura de origem, uma curiosidade) e circule pela sala ajudando quem tiver dificuldade para identificar o gênero do texto.",
        "Repita esse mesmo roteiro de leitura nos dias seguintes, sempre variando o gênero, e vá colando as fichas preenchidas em um mural que cresce ao longo da semana.",
        "No fechamento da semana, reúna a turma diante do mural e peça que agrupem as fichas por gênero (contos, fábulas, mitos, lendas) e depois por cultura de origem, discutindo em voz alta os critérios usados.",
        "Registro final: cada aluno mantém sua ficha preenchida no caderno (título, gênero, cultura, curiosidade) e o mural coletivo organizado por gênero e cultura fica exposto na sala como produção da turma."
      ]
    },
    {
      "theme": "Discussão sobre organização interna de textos literários",
      "curriculumCode": "EF04LP02",
      "description": "Participação em leitura de textos literários diversos, discutindo tempo, personagens, possíveis finalidades do gênero, marcas linguísticas e de estilo, e a relação entre linguagem verbal e ilustração.",
      "materials": ["Livro ilustrado ou conto impresso", "Roteiro de perguntas para discussão", "Quadro branco"],
      "steps": [
        "Ler coletivamente um texto literário ilustrado, mostrando as imagens conforme a leitura avança.",
        "Parar em momentos-chave para discutir quando e onde a história se passa e quem são os personagens.",
        "Perguntar qual pode ser a finalidade daquele gênero de texto (divertir, ensinar, emocionar).",
        "Analisar em conjunto como a ilustração dialoga com o que está escrito.",
        "Registrar no quadro as marcas de linguagem e estilo que mais chamaram atenção da turma."
      ],
      "classScript": [
        "Sente a turma em semicírculo de frente para você, de forma que todos vejam bem as ilustrações do livro conforme a leitura acontece.",
        "Mostre a capa antes de abrir o livro e pergunte: 'Só olhando a capa, o que vocês imaginam que vai acontecer nessa história?' Anote duas ou três hipóteses no quadro sem confirmar ainda.",
        "Leia em voz alta, mostrando cada ilustração à turma antes de virar a página, e pare logo na primeira página para perguntar: 'Quando e onde essa história está acontecendo? Como vocês descobriram isso — foi pelo texto ou pelo desenho?'",
        "No meio da leitura, pare novamente e pergunte 'quem são os personagens até agora, e o que já sabemos sobre cada um?', escrevendo os nomes no quadro conforme surgem.",
        "Ao final da leitura, pergunte à turma: 'Para que serve essa história — ela quer nos fazer rir, nos ensinar algo, nos emocionar, nos dar medo?' Deixe que defendam opiniões diferentes com exemplos do texto.",
        "Volte a três ilustrações específicas do livro e pergunte, para cada uma: 'O que essa imagem mostra que o texto não contou?' e 'O que o texto contou que a imagem não mostrou?', registrando as respostas no quadro em duas colunas.",
        "Peça que a turma aponte palavras ou frases do texto que soaram diferentes, engraçadas ou bonitas, e escreva essas marcas de linguagem e estilo no quadro, discutindo por que o autor as escolheu.",
        "Registro final: cada aluno copia no caderno um pequeno quadro com quatro colunas — tempo e lugar, personagens, finalidade do texto, marca de linguagem que mais gostou — preenchido com base na discussão coletiva."
      ]
    },
    {
      "theme": "Comparando registros literário, jornalístico e publicitário",
      "curriculumCode": "EF04LP03",
      "description": "Comparação de registros linguísticos presentes em textos de esferas diferentes (literária, jornalística, publicitária), reconhecendo a especificidade do registro literário — comparações, adjetivações e substituições — e os efeitos de sentido produzidos.",
      "materials": ["Trecho de texto literário", "Notícia de jornal", "Anúncio publicitário", "Tabela comparativa impressa"],
      "steps": [
        "Distribuir três textos curtos sobre um tema semelhante: um literário, um jornalístico e um publicitário.",
        "Ler os três textos em voz alta, um de cada vez.",
        "Em duplas, os alunos preenchem uma tabela comparando o vocabulário e o tom de cada texto.",
        "Destacar juntos as comparações e adjetivos usados no texto literário e o efeito que causam.",
        "Socializar as observações e concluir coletivamente o que torna cada registro único."
      ],
      "classScript": [
        "Escolha um tema comum aos três textos (por exemplo, chuva, ou um animal) e escreva na lousa: 'Hoje vamos ler três textos sobre a mesma coisa, escritos de jeitos bem diferentes'.",
        "Distribua os três textos numerados 1, 2 e 3, sem dizer ainda qual é qual, e leia cada um em voz alta pausadamente.",
        "Pergunte à turma: 'Qual desses parece uma notícia de jornal? Qual parece um anúncio querendo vender algo? Qual conta uma história?' e deixe que justifiquem oralmente antes de confirmar.",
        "Desenhe na lousa uma tabela com três colunas (literário, jornalístico, publicitário) e duas linhas (vocabulário usado, tom/intenção do texto) e preencha coletivamente o primeiro exemplo junto com a turma para modelar.",
        "Organize duplas e distribua uma cópia da tabela para completarem sozinhos, revisitando os três textos.",
        "Circule pela sala perguntando 'por que vocês colocaram essa palavra nessa coluna?' para forçar justificativa, principalmente na coluna do texto literário.",
        "Reúna a turma e, olhando só para o texto literário, pergunte: 'Que comparações ou adjetivos ele usa que os outros dois não usam? Que efeito isso causa em quem lê?' — registre as respostas na lousa.",
        "Registro final: cada aluno cola a tabela preenchida no caderno e escreve, em uma frase, o que torna o registro literário diferente dos outros dois — essa frase é a síntese individual da aula."
      ]
    },
    {
      "theme": "Explorando poemas: haicai, cordel e quadrinha",
      "curriculumCode": "EF04LP04",
      "description": "Leitura de poemas de diversos tipos (haicais, limeriques, cordel, quadrinhas, entre outros), identificando estratégias e recursos discursivos empregados e os efeitos de sentido que produzem.",
      "materials": ["Coletânea de poemas variados (haicai, cordel, quadrinha)", "Cartolina", "Canetinhas"],
      "steps": [
        "Apresentar exemplos de haicai, cordel e quadrinha, explicando brevemente as características de cada forma.",
        "Ler cada poema em voz alta, destacando ritmo, rima e sonoridade.",
        "Discutir em roda quais recursos (repetição, comparação, rima) produzem efeitos de sentido em cada poema.",
        "Cada aluno escolhe um poema favorito e ilustra o sentido que ele transmite.",
        "Expor os poemas ilustrados em varal de poesia na sala."
      ],
      "classScript": [
        "Escreva na lousa os três nomes — haicai, cordel, quadrinha — e pergunte se alguém já ouviu falar de algum, deixando a turma arriscar palpites antes de explicar.",
        "Leia um haicai em voz alta, bem devagar, e pergunte: 'O que vocês notaram de diferente nesse poema? É curto ou longo? Fala de quê?' Explique que ele tem três versos e geralmente fala da natureza.",
        "Leia um cordel batendo palmas no ritmo dos versos para que a turma sinta a musicalidade, e pergunte: 'Onde vocês acham que esse tipo de poema é contado — em livro, em feira, cantado?'",
        "Leia uma quadrinha e peça que a turma bata palmas nas rimas do final de cada verso, perguntando 'quais palavras rimam aqui?'.",
        "Reúna a turma em roda e pergunte, para cada poema já lido: 'Esse poema repete alguma palavra ou som de propósito? Ele compara uma coisa com outra? Isso muda como a gente sente o poema?' — registre as respostas na lousa por poema.",
        "Espalhe a coletânea de poemas no centro da roda e peça que cada aluno escolha um que goste, lendo baixinho para si mesmo antes de decidir.",
        "Distribua cartolina e canetinhas e oriente: cada aluno copia o poema escolhido e desenha ao lado uma ilustração que mostre o sentido dele, não apenas o que está escrito literalmente.",
        "Registro final: monte o varal de poesia pendurando os poemas ilustrados, e peça que cada aluno, ao pendurar o seu, diga em uma frase por que escolheu aquele poema."
      ]
    },
    {
      "theme": "Letra e melodia: lendo e ouvindo canções",
      "curriculumCode": "EF04LP05",
      "description": "Leitura de letras de canções antes e depois de escutá-las, identificando a multimodalidade entre letra e melodia e a relação entre essas duas linguagens na construção de sentidos.",
      "materials": ["Letra de canção impressa", "Aparelho de som ou celular com caixa de som", "Folha para anotações"],
      "steps": [
        "Distribuir a letra impressa de uma canção sem que os alunos a ouçam ainda.",
        "Ler a letra em voz alta como se fosse um poema, discutindo seu possível sentido.",
        "Tocar a canção completa e pedir que acompanhem a letra impressa.",
        "Conversar sobre como a melodia mudou ou reforçou o sentido que haviam imaginado antes.",
        "Registrar em uma frase o que a música ganhou ao ser cantada, comparado a apenas lida."
      ],
      "classScript": [
        "Distribua a letra impressa da canção sem revelar o título nem dizer que é uma música — apresente apenas como 'um texto para lermos hoje'.",
        "Leia a letra em voz alta, pausadamente, como se fosse um poema, sem cantarolar a melodia.",
        "Pergunte à turma: 'Do que vocês acham que esse texto está falando? Que sentimento ele passa?' Anote as hipóteses na lousa.",
        "Avise que agora vão ouvir a versão cantada e peça que acompanhem com o dedo na letra impressa enquanto a música toca.",
        "Após ouvir, pergunte: 'A música mudou o que vocês imaginaram? Ficou mais triste, mais alegre, mais rápida do que pensavam ao ler?' Compare com as hipóteses anotadas antes.",
        "Toque um trecho específico de novo e pergunte: 'Nesse pedaço, a melodia sobe ou desce? Fica mais lenta ou mais rápida? Por que vocês acham que o compositor escolheu isso justamente aqui?'",
        "Em duplas, os alunos conversam sobre um verso que ganhou sentido diferente ao ser cantado, comparado a quando só liam.",
        "Registro final: cada aluno escreve na folha de anotações uma frase respondendo 'o que essa música ganhou ao ser cantada, que o texto escrito sozinho não tinha?' — essa frase é entregue como registro individual da aula."
      ]
    },
    {
      "theme": "Textos dramáticos e situações de encenação",
      "curriculumCode": "EF04LP06",
      "description": "Identificação, em textos dramáticos como esquetes, comédias e autos, das características e finalidades das situações em que costumam ser apresentados, como espetáculo teatral, leitura dramática ou com fantoches.",
      "materials": ["Texto dramático curto (esquete ou pequena peça)", "Fantoches simples ou fantoches de dedo", "Espaço livre na sala"],
      "steps": [
        "Apresentar um pequeno texto dramático e explicar sua estrutura (rubricas, falas, personagens).",
        "Ler o texto em voz alta distribuindo os papéis entre os alunos.",
        "Discutir em quais situações esse tipo de texto costuma ser apresentado (teatro, fantoches, leitura dramática).",
        "Organizar os alunos em grupos para ensaiar uma cena curta usando fantoches ou leitura dramatizada.",
        "Apresentar as cenas para a turma e conversar sobre as diferenças entre ler e encenar o texto."
      ],
      "classScript": [
        "Projete ou escreva na lousa um trecho do texto dramático destacando três elementos com cores diferentes: nome do personagem, rubrica (entre parênteses ou em itálico) e fala.",
        "Pergunte à turma: 'Isso parece com um texto de história normal? O que é diferente?' Deixe que percebam que não há narrador contando, só nomes e falas.",
        "Explique rapidamente o que é rubrica, apontando um exemplo: 'Aqui, entre parênteses, o texto diz como o personagem deve se mover ou falar — isso é uma instrução para quem vai encenar'.",
        "Distribua os papéis entre os alunos (incluindo alguém para ler as rubricas em voz alta) e façam uma primeira leitura em voz alta, sentados, sem se levantar ainda.",
        "Pergunte: 'Onde vocês imaginam que esse texto seria apresentado — num palco de teatro, com fantoches, ou só sendo lido em voz alta para um público?' Liste as três possibilidades na lousa com as diferenças entre elas.",
        "Divida a turma em grupos pequenos e distribua fantoches (ou combine que o grupo fará leitura dramatizada em pé) para ensaiar uma cena curta do texto ou de um trecho escolhido pelo grupo.",
        "Circule pelos grupos durante o ensaio perguntando 'como a voz desse personagem deveria soar — mais grave, mais fina, mais nervosa?' para ajudá-los a decidir a interpretação.",
        "Depois das apresentações, pergunte à turma: 'O que muda quando a gente só lê o texto e quando a gente encena ele?' e registre as diferenças na lousa.",
        "Registro final: cada aluno escreve no caderno duas frases — uma dizendo em que situação aquele texto costuma ser apresentado, outra listando uma diferença entre ler e encenar um texto dramático."
      ]
    },
    {
      "theme": "Contexto de produção de textos reivindicatórios e relatos históricos",
      "curriculumCode": "EF04LP07",
      "description": "Identificação do contexto de produção de textos reivindicatórios ligados a diferentes representações sociais, artigos expositivos e relatos históricos, antecipando e inferindo sentidos e reconhecendo os valores neles veiculados.",
      "materials": ["Cópia de um relato histórico curto", "Cópia de um texto reivindicatório (carta ou manifesto simples)", "Cartaz com perguntas norteadoras"],
      "steps": [
        "Apresentar um relato histórico e um texto reivindicatório sobre um mesmo tema.",
        "Perguntar quem escreveu, para quem e por quê, antes de ler o texto completo.",
        "Ler os textos e verificar se as hipóteses levantadas se confirmaram.",
        "Discutir quais valores e reivindicações aparecem em cada texto.",
        "Registrar em grupo o contexto de produção identificado para cada texto."
      ],
      "classScript": [
        "Fixe na lousa o cartaz com as perguntas norteadoras: 'Quem escreveu? Para quem? Por quê? O que essa pessoa queria conseguir?' e explique que essas perguntas vão guiar a aula inteira.",
        "Mostre apenas o título e a fonte do relato histórico (sem ler o conteúdo ainda) e pergunte: 'Só por esse título, quem vocês acham que escreveu isso, e para quem?'",
        "Repita o mesmo com o texto reivindicatório, mostrando só o começo (por exemplo 'Nós, moradores do bairro...') e perguntando o que aquela pessoa ou grupo pode estar querendo pedir.",
        "Leia o relato histórico completo em voz alta e volte às perguntas do cartaz, confirmando ou corrigindo as hipóteses da turma junto com eles.",
        "Leia o texto reivindicatório completo e faça o mesmo, perguntando: 'O que essa pessoa está reivindicando? Ela conseguiu convencer vocês? Por quê?'",
        "Organize a turma em grupos pequenos e peça que discutam: 'Que valores aparecem em cada texto — por exemplo, justiça, respeito, memória, direito?' — circule ouvindo as discussões e provocando com 'me dá um exemplo do texto que mostra esse valor'.",
        "Reúna a turma e monte coletivamente no quadro uma ficha de contexto de produção para cada texto (quem escreveu, para quem, por quê, que valores aparecem).",
        "Registro final: cada grupo copia a ficha de contexto de produção dos dois textos no caderno, com pelo menos um valor identificado e justificado para cada um."
      ]
    },
    {
      "theme": "Conhecendo culturas por relatos históricos e divulgação científica",
      "curriculumCode": "EF04LP08",
      "description": "Leitura de relatos históricos, artigos de divulgação científica e textos jornalísticos, além de reportagens, entrevistas e vídeos, para conhecer e valorizar diferentes culturas.",
      "materials": ["Artigo de divulgação científica sobre uma cultura", "Trecho de reportagem em vídeo", "Notebook ou televisão para exibição"],
      "steps": [
        "Selecionar um tema cultural (por exemplo, povos indígenas ou comunidades quilombolas) para investigar.",
        "Ler em conjunto um relato histórico e um artigo de divulgação científica sobre o tema.",
        "Assistir a um trecho de reportagem ou entrevista relacionada ao mesmo tema.",
        "Comparar as informações trazidas por cada tipo de texto.",
        "Produzir um pequeno cartaz coletivo valorizando aspectos da cultura estudada."
      ],
      "classScript": [
        "Anuncie o tema cultural escolhido (por exemplo, povos indígenas do território de São Paulo) e pergunte: 'O que vocês já sabem sobre isso? De onde vem o que vocês sabem?' Anote na lousa, sem corrigir ainda.",
        "Leia em voz alta o artigo de divulgação científica, parando para explicar palavras difíceis e perguntando 'que informação nova esse texto trouxe que a gente não tinha na lousa?'.",
        "Leia o relato histórico e pergunte: 'Esse texto conta a mesma coisa de um jeito diferente do artigo científico, ou traz informações novas?' — compare os dois em voz alta.",
        "Organize a turma de frente para a tela ou notebook e avise antes de exibir: 'Prestem atenção em quem está falando na reportagem e o que essa pessoa está nos contando'.",
        "Exiba o trecho de reportagem ou entrevista e, ao final, pergunte: 'O que vimos e ouvimos aqui que os textos escritos não mostraram?'",
        "Em grupos, peça que listem em uma folha três informações — uma vinda do relato histórico, uma do artigo científico, uma da reportagem — e o que cada uma acrescentou ao entendimento da turma.",
        "Reúna a turma e pergunte: 'O que aprendemos hoje que merece ser valorizado e respeitado sobre essa cultura?' — liste as respostas na lousa.",
        "Registro final: monte com a turma um cartaz coletivo, cada grupo escrevendo e ilustrando uma frase de valorização da cultura estudada, baseada nas informações reunidas nas três fontes."
      ]
    },
    {
      "theme": "Organização hierárquica de textos de divulgação científica",
      "curriculumCode": "EF04LP09",
      "description": "Identificação, em textos de divulgação científica, da organização hierárquica das informações e dos critérios de paragrafação, reconhecendo as relações entre as informações e a organização geral do texto.",
      "materials": ["Artigo de divulgação científica impresso", "Marca-texto", "Folha para esquema"],
      "steps": [
        "Distribuir um artigo de divulgação científica curto e adequado à faixa etária.",
        "Ler o texto identificando o título, a introdução e os parágrafos que desenvolvem o tema.",
        "Marcar com cores diferentes a ideia principal de cada parágrafo.",
        "Em duplas, montar um esquema mostrando como as informações se organizam do geral para o específico.",
        "Socializar os esquemas e discutir por que o texto foi organizado daquela forma."
      ],
      "classScript": [
        "Distribua o artigo e peça que, antes de ler, os alunos só observem o título e contem quantos parágrafos o texto tem, numerando-os na margem.",
        "Leia o título e o primeiro parágrafo em voz alta e pergunte: 'Esse primeiro parágrafo fala de tudo em geral ou já entra em detalhes específicos?' — normalmente é a introdução geral do tema.",
        "Continue a leitura parágrafo por parágrafo, parando ao final de cada um para perguntar 'qual é a ideia principal desse parágrafo, em uma frase só?'.",
        "Distribua marca-texto e peça que cada aluno grife, com uma cor, a frase que resume a ideia principal de cada parágrafo já lido.",
        "Desenhe na lousa um esquema em forma de funil (do mais geral no topo até o mais específico embaixo) e pergunte: 'Olhando as ideias grifadas, qual parágrafo é o mais geral e qual é o mais detalhado?'",
        "Organize duplas para montarem, na folha de esquema, essa mesma estrutura de funil com as ideias principais de cada parágrafo do artigo, na ordem do texto.",
        "Circule pelas duplas perguntando 'por que vocês colocaram essa ideia mais em cima e essa outra mais embaixo?' para checar se entenderam a lógica do geral para o específico.",
        "Reúna a turma, peça que duas ou três duplas mostrem seus esquemas, e discuta coletivamente: 'Por que o autor organizou o texto começando pelo geral? Isso ajuda o leitor?'",
        "Registro final: cada aluno cola o esquema em funil no caderno, com a ideia principal de cada parágrafo do artigo devidamente localizada do geral ao específico."
      ]
    },
    {
      "theme": "Efeitos de sentido em quadrinhos, charges e tiras",
      "curriculumCode": "EF04LP10",
      "description": "Identificação dos recursos utilizados para provocar efeitos de sentido em quadrinhos, charges, tiras e HQs de culturas locais, regionais e globais, impressos ou digitais.",
      "materials": ["Coleção de tiras e charges impressas", "Gibis ou HQs diversas", "Papel para produção de quadrinho"],
      "steps": [
        "Apresentar exemplos de tiras, charges e HQs de diferentes origens.",
        "Analisar em grupo os recursos usados (balões, onomatopeias, exagero de traços, cores) e o efeito que provocam.",
        "Discutir o humor ou a crítica presente em cada exemplo.",
        "Cada aluno cria uma pequena tira de três quadrinhos usando ao menos um recurso estudado.",
        "Expor as produções em um varal de quadrinhos da turma."
      ],
      "classScript": [
        "Projete ou distribua uma tira em quadrinhos sem os balões preenchidos e pergunte: 'Só pelos desenhos, o que vocês acham que está acontecendo?' — deixe imaginar antes de mostrar o texto completo.",
        "Mostre a tira completa com os balões preenchidos e pergunte: 'O que mudou de entendimento agora que vocês leram as falas?'",
        "Escreva na lousa uma lista de recursos: balão de fala, balão de pensamento, onomatopeia, exagero no traço, cores fortes — e para cada um, mostre um exemplo em uma tira ou charge diferente.",
        "Em grupos pequenos, distribua tiras, charges e gibis variados e peça que encontrem, em cada material, pelo menos dois recursos da lista, marcando com post-it ou anotando em folha.",
        "Reúna a turma e pergunte, para uma charge específica: 'O que essa charge está criticando ou fazendo graça? Como o desenho exagerado ajuda a passar essa crítica?'",
        "Pergunte também: 'Essas tiras e HQs são todas brasileiras, ou vocês notaram alguma de outro lugar do mundo? O humor muda de cultura para cultura?'",
        "Distribua o papel de produção de quadrinho (três quadros) e oriente cada aluno a criar sua própria mini-tira usando pelo menos um dos recursos estudados (balão, onomatopeia, exagero de traço).",
        "Circule perguntando 'que efeito você quer causar no leitor — rir, se surpreender, pensar?' para ajudar quem estiver travado na criação.",
        "Registro final: monte o varal de quadrinhos pendurando as tiras produzidas, e peça que cada aluno aponte, na hora de pendurar, qual recurso usou na própria produção."
      ]
    },
    {
      "theme": "Multimodalidade em textos de projetos interdisciplinares",
      "curriculumCode": "EF04LP11",
      "description": "Identificação da multimodalidade em textos de diferentes áreas do conhecimento relacionados ao desenvolvimento de projetos interdisciplinares, reconhecendo como imagem, gráfico e texto verbal se combinam.",
      "materials": ["Texto multimodal de Ciências ou Geografia (com gráfico, mapa ou infográfico)", "Lupa (opcional)", "Folha de registro"],
      "steps": [
        "Selecionar um texto de outra área do currículo que combine texto verbal com imagem, gráfico ou infográfico.",
        "Observar separadamente o que o texto verbal informa e o que a imagem ou gráfico acrescenta.",
        "Discutir por que o autor optou por usar mais de uma linguagem no mesmo texto.",
        "Em duplas, listar as informações que só aparecem na imagem ou só no texto escrito.",
        "Compartilhar as descobertas com a turma."
      ],
      "classScript": [
        "Cubra o gráfico, mapa ou infográfico do texto com uma folha e distribua só a parte escrita, pedindo que leiam em silêncio.",
        "Pergunte: 'Só com esse texto escrito, vocês entenderam tudo sobre o assunto? Ficou faltando alguma coisa?'",
        "Revele a imagem, gráfico ou infográfico e pergunte: 'Agora que vocês viram isso, o que ficou mais claro?'",
        "Escreva na lousa duas colunas — 'o que o texto escrito diz' e 'o que a imagem/gráfico mostra' — e preencha coletivamente com dois ou três exemplos do próprio material.",
        "Distribua a lupa (se houver) e incentive os alunos a observarem detalhes pequenos do gráfico ou mapa que passariam despercebidos, perguntando 'o que mais dá pra descobrir olhando de perto?'.",
        "Pergunte à turma: 'Por que vocês acham que quem escreveu esse texto decidiu usar imagem e gráfico junto com as palavras, em vez de só escrever tudo?'",
        "Organize duplas e distribua a folha de registro para listarem, separadamente, informações que só aparecem na imagem e informações que só aparecem no texto escrito.",
        "Circule perguntando 'tem certeza que essa informação não está escrita em nenhum lugar do texto, só na imagem?' para checar a atenção aos detalhes.",
        "Registro final: cada dupla compartilha com a turma uma informação encontrada só na imagem e uma só no texto, e todos colam a folha de registro preenchida no caderno."
      ]
    },
    {
      "theme": "Lendo trechos de textos jurídicos do cotidiano",
      "curriculumCode": "EF04LP12",
      "description": "Leitura de trechos de textos que circulam na esfera jurídica, como o Estatuto da Criança e do Adolescente, para discutir ou responder a problemas específicos relacionados às necessidades do momento.",
      "materials": ["Trecho selecionado do Estatuto da Criança e do Adolescente (ECA)", "Cartaz com direitos e deveres", "Folha para debate"],
      "steps": [
        "Explicar de forma simples o que é um texto jurídico e apresentar o ECA como exemplo.",
        "Ler em voz alta um trecho curto sobre direitos das crianças.",
        "Discutir uma situação do cotidiano escolar relacionada àquele trecho.",
        "Em grupos, os alunos escrevem uma situação-problema e indicam qual direito se aplica a ela.",
        "Compartilhar as situações e construir coletivamente um cartaz de direitos das crianças."
      ],
      "classScript": [
        "Pergunte à turma: 'Vocês sabem o que é uma lei? Alguém sabe o nome de alguma lei que protege as crianças?' Anote as respostas sem corrigir.",
        "Explique de forma simples que um texto jurídico é escrito com uma linguagem própria, mais formal, para dizer o que é direito e o que é dever, e apresente o ECA (Estatuto da Criança e do Adolescente) como exemplo desse tipo de texto.",
        "Leia em voz alta um trecho curto do ECA sobre direito das crianças (por exemplo, direito à educação, ao lazer, ao respeito), parando para 'traduzir' com palavras mais simples cada frase lida.",
        "Pergunte: 'Isso acontece de verdade na nossa escola? Vocês conseguem pensar numa situação do dia a dia que tem a ver com esse direito?'",
        "Traga uma situação real do cotidiano escolar (um exemplo de bullying, de exclusão numa brincadeira, ou de acesso à merenda) e pergunte qual direito lido está relacionado a ela.",
        "Organize grupos e peça que cada um escreva, na folha de debate, uma situação-problema do cotidiano (pode ser inventada) e identifique qual direito do ECA se aplica a ela.",
        "Circule pelos grupos perguntando 'que direito vocês acham que essa criança da história de vocês teve desrespeitado, ou precisa ter garantido?'.",
        "Reúna a turma e peça que cada grupo leia sua situação-problema em voz alta, e a turma toda tenta identificar o direito envolvido antes do grupo revelar.",
        "Registro final: construam juntos o cartaz de direitos das crianças, cada grupo escrevendo e ilustrando um direito discutido na aula, que fica exposto na sala."
      ]
    },
    {
      "theme": "Antecipando o conteúdo de propagandas e anúncios",
      "curriculumCode": "EF04LP13",
      "description": "Recuperação do contexto de produção de cartazes de propaganda, anúncios e folhetos, antecipando características do conteúdo, dos valores veiculados e das posições que o texto pode assumir.",
      "materials": ["Cartazes de propaganda e folhetos diversos", "Folha para hipóteses", "Lápis"],
      "steps": [
        "Mostrar apenas o suporte de um anúncio (folheto, cartaz) sem revelar o conteúdo completo.",
        "Pedir que os alunos antecipem, com base no formato e nas imagens, do que se trata o texto.",
        "Ler o anúncio completo e verificar as hipóteses levantadas.",
        "Discutir quais valores e intenções estão presentes no texto (convencer, vender, alertar).",
        "Registrar em duplas se concordam ou não com a mensagem do anúncio e por quê."
      ],
      "classScript": [
        "Dobre ou cubra parte de um cartaz de propaganda, deixando visível só o formato geral, as cores e uma imagem, sem o texto escrito.",
        "Pergunte: 'Só olhando esse formato e essas cores, o que vocês acham que esse texto está anunciando ou pedindo?'",
        "Distribua a folha de hipóteses e peça que cada aluno escreva o que imagina que o anúncio diz, com base só no que já foi mostrado.",
        "Revele o anúncio completo, leia em voz alta, e pergunte: 'Quem acertou a hipótese? O que era diferente do que vocês imaginaram?'",
        "Escreva na lousa três palavras: convencer, vender, alertar — e pergunte qual delas melhor descreve a intenção daquele anúncio específico.",
        "Repita rapidamente o mesmo processo (esconder, hipotetizar, revelar) com um segundo anúncio de intenção diferente do primeiro, para que a turma compare as duas intenções.",
        "Pergunte à turma: 'Que truques o anúncio usa para convencer a gente — cores chamativas, palavras exageradas como \\'o melhor\\' ou \\'imperdível\\', uma pessoa sorrindo?' e anote na lousa.",
        "Organize duplas e peça que, para um dos anúncios trabalhados, escrevam se concordam ou não com a mensagem passada e por quê.",
        "Registro final: cada dupla lê sua conclusão em voz alta para a turma e entrega a folha com a hipótese inicial e a opinião final registrada por escrito."
      ]
    },
    {
      "theme": "Relendo e marcando trechos importantes do texto",
      "curriculumCode": "EF04LP14",
      "description": "Releitura de trechos do texto, marcando, grifando e anotando partes que geram dúvidas, discordância, importância para o tema ou que merecem comentário ou consulta ao dicionário.",
      "materials": ["Texto informativo fotocopiado", "Marca-texto de cores diferentes", "Post-its"],
      "steps": [
        "Distribuir um texto informativo impresso para cada aluno.",
        "Explicar o significado de cada cor de marca-texto (dúvida, discordância, importante, palavra desconhecida).",
        "Ler o texto individualmente, marcando os trechos conforme o combinado.",
        "Em duplas, comparar o que cada um marcou e discutir as diferenças.",
        "Usar o dicionário para esclarecer as palavras desconhecidas marcadas."
      ],
      "classScript": [
        "Escreva na lousa uma legenda de cores fixa para a aula: amarelo para dúvida, verde para trecho importante, laranja para discordância, rosa para palavra desconhecida — e explique cada uma com um exemplo curto.",
        "Distribua o texto informativo e os marca-textos, um por aluno, e explique: 'Vamos ler devagar e marcar, cada um no seu texto, sempre que sentir uma dessas quatro coisas'.",
        "Leia o primeiro parágrafo em voz alta junto com a turma, parando para modelar: 'Aqui eu não entendi essa palavra, vou marcar de rosa' — pensando em voz alta para mostrar como fazer.",
        "Peça que a turma continue a leitura sozinha, em silêncio, marcando o restante do texto com as cores combinadas.",
        "Circule pela sala observando as marcações e perguntando individualmente 'por que você marcou esse trecho de verde?' para checar se entenderam o critério.",
        "Organize duplas para compararem o que cada um marcou, perguntando: 'Vocês marcaram os mesmos trechos como importantes? Onde vocês discordam?'",
        "Reúna a turma e liste na lousa as palavras desconhecidas marcadas de rosa por todos, sem repetir.",
        "Consulte o dicionário coletivamente para as palavras da lista, ou distribua dicionários para as duplas pesquisarem, registrando o significado ao lado da palavra.",
        "Registro final: cada aluno cola no caderno o texto marcado e uma lista com as palavras desconhecidas encontradas e seus significados pesquisados no dicionário."
      ]
    },
    {
      "theme": "Pesquisando em múltiplas fontes sobre um tema de estudo",
      "curriculumCode": "EF04LP15",
      "description": "Leitura de textos diversos para estudar temas das diferentes áreas do conhecimento, articulando conhecimentos prévios e fontes variadas — livros, enciclopédias, sites, revistas e jornais — além de assistir a documentários e reportagens de forma crítica.",
      "materials": ["Livros e enciclopédias sobre o tema escolhido", "Acesso a sites de pesquisa (se disponível)", "Folha de roteiro de pesquisa"],
      "steps": [
        "Escolher, junto com a turma, um tema de estudo ligado a outra área do conhecimento.",
        "Levantar o que os alunos já sabem sobre o tema antes de pesquisar.",
        "Organizar em grupos a consulta a diferentes fontes (livro, enciclopédia, site, revista).",
        "Assistir a um trecho de documentário ou reportagem relacionado ao tema, discutindo criticamente as informações.",
        "Cada grupo organiza um pequeno resumo com as informações reunidas das diferentes fontes."
      ],
      "classScript": [
        "Escreva na lousa o tema escolhido (ligado a Ciências, História ou Geografia) e pergunte: 'O que vocês já sabem sobre isso?' — anote tudo, mesmo palpites incertos, numa coluna 'o que já sabemos'.",
        "Pergunte também: 'O que vocês gostariam de descobrir sobre esse tema?' e anote numa segunda coluna 'o que queremos descobrir' — essas perguntas guiarão a pesquisa.",
        "Distribua a folha de roteiro de pesquisa, explicando que cada grupo vai preencher com informações de fontes diferentes, sempre anotando de onde tirou cada informação.",
        "Organize grupos e distribua ou indique fontes diferentes para cada um (um livro, uma enciclopédia, um site, uma revista), garantindo que nenhum grupo fique sem material.",
        "Circule pelos grupos perguntando 'essa informação responde a uma das perguntas que anotamos na lousa?' para manter o foco da pesquisa.",
        "Reúna a turma de frente para a tela e avise antes de exibir o documentário ou reportagem: 'Fiquem atentos se as informações batem com o que já pesquisamos'.",
        "Após a exibição, pergunte: 'O vídeo confirmou o que os grupos encontraram nos livros e sites, ou trouxe alguma informação diferente ou contraditória?' — discuta com espírito crítico, sem aceitar tudo como verdade absoluta.",
        "Volte aos grupos para que organizem, na folha de roteiro, um pequeno resumo reunindo as informações das diferentes fontes consultadas.",
        "Registro final: cada grupo apresenta oralmente seu resumo à turma e entrega a folha de roteiro de pesquisa preenchida, com as fontes consultadas indicadas."
      ]
    },
    {
      "theme": "Tutoria de leitura oral: preparando a leitura em voz alta",
      "curriculumCode": "EF04LP16",
      "description": "Estudo, em processo de tutoria, de textos destinados à leitura oral independente em práticas sociais diversas, como notícia, texto teatral ou texto para videoclipe, definindo a prosódia a partir da compreensão do texto.",
      "materials": ["Texto para leitura em voz alta (notícia ou texto teatral)", "Gravador de áudio ou celular", "Folha de acompanhamento"],
      "steps": [
        "Escolher um texto que será lido em voz alta para outra turma ou gravado.",
        "Ler o texto silenciosamente para compreender seu sentido geral.",
        "Em duplas, um aluno lê em voz alta enquanto o outro dá sugestões de entonação e ritmo (tutoria).",
        "Praticar a leitura algumas vezes, ajustando pausas e entonação conforme o sentido do texto.",
        "Gravar ou apresentar a leitura final para a turma."
      ],
      "classScript": [
        "Anuncie o propósito real da leitura: 'Vamos preparar essa notícia para lermos para outra turma (ou gravarmos)', explicando que isso muda a forma de ler.",
        "Distribua o texto e peça leitura silenciosa individual, avisando: 'Primeiro entendam bem do que se trata, antes de pensar em como ler em voz alta'.",
        "Pergunte à turma: 'Do que fala esse texto? Ele é alegre, sério, urgente? Isso deveria aparecer na nossa voz quando lermos?'",
        "Modele você mesmo um trecho, lendo de dois jeitos diferentes (um sem expressão, outro com entonação adequada) e pergunte 'qual dos dois vocês entenderam e sentiram melhor?'",
        "Explique o papel de tutor: 'Quem for tutor vai ouvir o colega ler e dar uma dica de cada vez — de pausa, de velocidade ou de entonação — sem corrigir tudo de uma vez'.",
        "Forme duplas e defina quem lê primeiro e quem tuora primeiro, distribuindo a folha de acompanhamento para o tutor anotar as dicas dadas.",
        "Circule pelas duplas ouvindo trechos de leitura e sugerindo, quando necessário, 'tenta fazer uma pausa maior aqui, depois da vírgula' ou 'essa parte é uma pergunta, sua voz pode subir no final'.",
        "Peça que troquem os papéis (quem leu vira tutor) e repitam o processo com outro trecho do texto.",
        "Registro final: grave (ou peça que apresentem ao vivo) a leitura final de cada aluno, e cada um preenche a folha de acompanhamento com pelo menos uma dica recebida do tutor e como ajustou a leitura por causa dela."
      ]
    },
    {
      "theme": "Reescrevendo textos mantendo o tema e o conteúdo",
      "curriculumCode": "EF04LP17",
      "description": "Reescrita de textos no gênero em estudo, respeitando a progressão temática e os conteúdos do texto-fonte, realizando as diferentes operações de produção textual.",
      "materials": ["Texto-fonte para reescrita", "Folha de rascunho", "Caneta"],
      "steps": [
        "Ler coletivamente um texto-fonte curto do gênero em estudo.",
        "Identificar juntos as ideias principais na ordem em que aparecem.",
        "Cada aluno reescreve o texto com suas próprias palavras, mantendo a mesma progressão de ideias.",
        "Em duplas, trocar os textos e verificar se todas as ideias do original foram mantidas.",
        "Revisar o próprio texto ajustando o que for necessário."
      ],
      "classScript": [
        "Leia o texto-fonte em voz alta duas vezes: a primeira só para a turma ouvir, a segunda parando em cada parte para conversar sobre o que está sendo dito.",
        "Pergunte: 'Se vocês tivessem que contar essa história ou explicar esse assunto para alguém que não leu, por onde vocês começariam?'",
        "Escreva na lousa, numerados em ordem, os pontos principais do texto (por exemplo: 1. onde começa, 2. o que acontece depois, 3. como termina) construindo essa lista junto com a turma.",
        "Explique a regra da atividade: 'Vocês vão contar essa mesma história ou explicar esse mesmo assunto, na mesma ordem, mas com as palavras de vocês — não pode copiar as frases do texto original'.",
        "Peça que cada aluno escreva o rascunho individualmente, consultando a lista numerada da lousa sempre que sentir que perdeu o fio da meada.",
        "Circule observando se algum aluno pulou uma ideia da lista ou inverteu a ordem, perguntando 'e essa parte do meio, você lembrou de colocar?'.",
        "Organize duplas para trocarem os rascunhos e, com a lista da lousa em mãos, conferirem se o colega manteve todas as ideias principais na ordem certa.",
        "Peça que cada dupla aponte ao colega, oralmente, uma ideia que faltou ou ficou fora de ordem, se houver.",
        "Registro final: cada aluno revisa e passa a limpo o próprio texto reescrito, entregando a versão final que preserva o tema e a progressão de ideias do texto-fonte."
      ]
    },
    {
      "theme": "Produzindo contos de diferentes culturas",
      "curriculumCode": "EF04LP18",
      "description": "Produção de contos, preferencialmente representativos de diferentes culturas, garantindo coerência entre os fatos, coesão verbal e nominal, e respeitando as especificidades do gênero e o registro literário.",
      "materials": ["Exemplos de contos de diferentes culturas", "Folha de planejamento de conto", "Folha de produção final"],
      "steps": [
        "Relembrar as características de um conto e apresentar exemplos de diferentes culturas.",
        "Planejar em uma folha o cenário, os personagens e os principais fatos da história.",
        "Escrever o rascunho do conto seguindo o planejamento.",
        "Revisar o texto verificando a coerência entre os fatos e a concordância verbal e nominal.",
        "Passar o conto a limpo e compartilhar em uma roda de leitura."
      ],
      "classScript": [
        "Relembre coletivamente, com a lista na lousa, as partes de um conto: começo (apresenta cenário e personagens), meio (surge um problema ou conflito), fim (o problema se resolve).",
        "Leia rapidamente trechos de dois ou três contos de culturas diferentes já trabalhados, perguntando 'o que muda de uma cultura para outra — os personagens, os lugares, os costumes descritos?'",
        "Distribua a folha de planejamento e explique que antes de escrever, cada aluno vai decidir: onde e quando a história acontece, quem são os personagens, e qual é o problema que vai surgir.",
        "Circule pela sala perguntando a cada aluno 'qual cultura vai inspirar o seu conto? O que você sabe sobre os costumes ou o cenário dessa cultura?' para ajudar a enriquecer o planejamento.",
        "Depois do planejamento pronto, oriente o início da escrita do rascunho, lembrando: 'sigam o que vocês planejaram, mas podem mudar se surgir uma ideia melhor no meio do caminho'.",
        "Quando a maioria terminar o rascunho, faça uma pausa coletiva e escreva na lousa dois lembretes de revisão: 'os fatos da história fazem sentido em sequência?' e 'os verbos e as palavras concordam entre si (ele foi, eles foram; a menina feliz, os meninos felizes)?'",
        "Peça que cada aluno releia o próprio rascunho aplicando esses dois lembretes, marcando com lápis onde encontrar algo para ajustar.",
        "Circule ajudando individualmente quem tiver dificuldade para identificar erros de concordância verbal ou nominal no próprio texto.",
        "Registro final: cada aluno passa o conto a limpo na folha de produção final e participa de uma roda de leitura, lendo (ou tendo lido por você) seu conto para os colegas."
      ]
    },
    {
      "theme": "Produzindo entrevistas e verbetes de enciclopédia",
      "curriculumCode": "EF04LP19",
      "description": "Produção de entrevistas ou verbetes de enciclopédia sobre temas integradores de interesse da comunidade, respeitando as características do gênero e realizando as operações de produção textual.",
      "materials": ["Modelo de entrevista publicada", "Modelo de verbete de enciclopédia", "Folha de roteiro de perguntas"],
      "steps": [
        "Escolher um tema de interesse da comunidade escolar para investigar.",
        "Decidir em grupo se o produto final será uma entrevista ou um verbete de enciclopédia.",
        "Para entrevista: elaborar as perguntas e realizá-la com uma pessoa da comunidade; para verbete: pesquisar informações sobre o tema.",
        "Organizar as informações coletadas seguindo a estrutura do gênero escolhido.",
        "Revisar e compartilhar o texto final com a turma."
      ],
      "classScript": [
        "Mostre o modelo de entrevista publicada e pergunte: 'Como esse texto está organizado — vocês veem pergunta e resposta, ou é um texto corrido?' Depois mostre o verbete de enciclopédia e pergunte a mesma coisa, comparando os dois formatos.",
        "Pergunte à turma: 'O que vocês gostariam de saber melhor sobre a nossa escola ou o nosso bairro — a história dele, uma pessoa importante, um costume?' e liste temas de interesse da comunidade na lousa.",
        "Organize a turma em grupos e peça que cada grupo escolha um tema da lista e decida: vamos entrevistar alguém sobre isso, ou vamos pesquisar e escrever um verbete explicando o assunto?",
        "Para os grupos que escolherem entrevista: ajude a elaborar de quatro a seis perguntas, perguntando 'essa pergunta vai dar uma resposta só de sim ou não, ou vai fazer a pessoa contar mais?' para melhorar as perguntas.",
        "Para os grupos que escolherem verbete: oriente a buscar informações em livros, enciclopédias ou com a coordenação da escola, perguntando 'que informações um verbete precisa ter para explicar bem esse assunto para quem não sabe nada sobre ele?'",
        "Combine com os grupos de entrevista um horário para realizarem a entrevista de fato (com um funcionário, professor ou familiar da comunidade escolar), e oriente que anotem as respostas com atenção.",
        "Circule entre os grupos de verbete enquanto organizam as informações pesquisadas, perguntando 'isso que você escreveu explica o assunto de forma clara para quem nunca ouviu falar?'",
        "Reúna a turma para uma revisão coletiva: peça que um grupo leia seu texto em voz alta e a turma aponte se a estrutura do gênero escolhido (pergunta-resposta na entrevista, ou explicação organizada no verbete) foi respeitada.",
        "Registro final: cada grupo revisa e passa a limpo seu texto final (entrevista ou verbete) e apresenta para a turma, que pode ser reunido depois em um pequeno caderno ou mural da comunidade escolar."
      ]
    },
    {
      "theme": "Escrevendo cartas de solicitação e reivindicação",
      "curriculumCode": "EF04LP20",
      "description": "Produção de cartas de solicitação ou reivindicação, considerando as características do gênero e a situação comunicativa envolvida.",
      "materials": ["Modelo de carta de solicitação", "Envelope (opcional)", "Folha pautada"],
      "steps": [
        "Identificar junto à turma uma necessidade real da escola que possa gerar uma carta de solicitação ou reivindicação.",
        "Apresentar um modelo de carta, destacando saudação, pedido e despedida.",
        "Planejar coletivamente o que será solicitado e a quem se destina a carta.",
        "Cada aluno ou grupo escreve sua versão da carta.",
        "Revisar as cartas e, se possível, enviá-las de fato ao destinatário."
      ],
      "classScript": [
        "Pergunte à turma: 'Tem alguma coisa na nossa escola que vocês gostariam de mudar ou pedir — mais brinquedos no parque, uma quadra melhor, mais livros na biblioteca?' e anote as ideias na lousa.",
        "Vote com a turma qual necessidade real será o tema da carta que vão escrever de verdade.",
        "Mostre o modelo de carta de solicitação e vá apontando cada parte enquanto lê: 'aqui é a saudação, quem escreve cumprimenta quem recebe; aqui é o pedido, explicado com clareza; aqui é a despedida'.",
        "Pergunte: 'A quem devemos endereçar essa carta — o diretor, a coordenação, a prefeitura?' e decida coletivamente o destinatário.",
        "Planeje coletivamente na lousa, com a ajuda da turma, os argumentos que vão convencer o destinatário (por que esse pedido é importante, o que vai melhorar).",
        "Oriente que cada aluno (ou grupo pequeno) escreva sua própria versão da carta na folha pautada, seguindo a estrutura vista no modelo, usando os argumentos combinados.",
        "Circule pela sala perguntando 'sua carta tem saudação, pedido claro e despedida? O tom está educado e respeitoso, já que estamos pedindo algo?'",
        "Reúna a turma para uma leitura compartilhada de duas ou três cartas, verificando coletivamente se a estrutura e o argumento estão claros.",
        "Registro final: cada aluno revisa e passa a limpo sua carta; se possível, combine com a turma qual carta (ou uma versão coletiva) será realmente entregue ao destinatário, e guarde as demais no caderno como produção da turma."
      ]
    },
    {
      "theme": "Escrevendo comentários digitais sobre textos lidos",
      "curriculumCode": "EF04LP21",
      "description": "Escrita de comentários digitais para textos lidos, estabelecendo relação clara entre o texto original e o comentário produzido.",
      "materials": ["Texto curto para leitura coletiva", "Folha simulando um espaço de comentário digital", "Lápis"],
      "steps": [
        "Ler coletivamente um texto curto (notícia, poema ou postagem).",
        "Explicar o que é um comentário digital e como ele se relaciona ao texto original.",
        "Cada aluno escreve um comentário em uma folha que simula um espaço de comentários online.",
        "Trocar os comentários entre colegas e verificar se fica claro a que trecho do texto cada comentário se refere.",
        "Discutir em roda a importância de comentar com respeito e clareza."
      ],
      "classScript": [
        "Pergunte à turma: 'Vocês já viram alguém comentar uma notícia, um vídeo ou uma postagem na internet? O que costuma aparecer nesses comentários?' — deixe a conversa fluir livremente.",
        "Leia o texto curto escolhido em voz alta para toda a turma, parando para checar a compreensão geral.",
        "Explique: 'Um comentário digital é uma opinião ou reação curta que a gente escreve depois de ler algo, e quem ler o comentário precisa entender a que parte do texto ele se refere, mesmo sem ver o texto do lado'.",
        "Modele um exemplo na lousa: escreva uma frase do texto lido e, ao lado, um comentário que deixa claro a que parte ela se refere (por exemplo, 'sobre a parte em que o texto fala de X, eu acho que...').",
        "Distribua a folha que simula um espaço de comentário digital e peça que cada aluno escreva seu comentário sobre o texto lido, seguindo o modelo.",
        "Circule perguntando 'quem ler seu comentário sem ter o texto do lado vai entender a que parte você está se referindo?' para reforçar a clareza da relação texto-comentário.",
        "Organize a troca de comentários entre colegas: cada aluno lê o comentário do outro e tenta adivinhar a que trecho do texto ele se refere, conferindo depois com quem escreveu.",
        "Reúna a turma em roda e pergunte: 'Por que é importante comentar com respeito na internet? O que pode acontecer quando alguém comenta de forma grosseira ou confusa?'",
        "Registro final: cada aluno guarda no caderno seu comentário escrito e uma frase de combinado sobre como comentar com respeito e clareza no ambiente digital."
      ]
    },
    {
      "theme": "Apresentando sínteses orais sobre temas estudados",
      "curriculumCode": "EF04LP22",
      "description": "Exposição oral de aspectos relacionados a temas estudados nas diferentes áreas, formulando perguntas, comentando e apresentando sínteses a partir de esquemas e notas elaborados previamente.",
      "materials": ["Esquema ou notas de um tema estudado", "Cartaz ou cartolina para apoio visual", "Cronômetro"],
      "steps": [
        "Escolher um tema já estudado em outra área do currículo para ser apresentado oralmente.",
        "Organizar um esquema com as principais informações a serem expostas.",
        "Ensaiar a apresentação em duplas antes de apresentar para a turma.",
        "Cada aluno ou grupo apresenta a síntese oral usando o esquema como apoio.",
        "Após cada apresentação, os colegas formulam perguntas sobre o tema exposto."
      ],
      "classScript": [
        "Relembre com a turma um tema já estudado em Ciências, História ou Geografia e pergunte: 'O que vocês lembram sobre esse assunto? Vamos organizar isso para apresentar em voz alta'.",
        "Explique que uma síntese oral não é ler um texto decorado, e sim contar o essencial usando um esquema como apoio, olhando para a turma.",
        "Modele na lousa como montar um esquema simples: um círculo central com o tema e três ou quatro ramos saindo dele com as ideias principais, sem frases longas.",
        "Distribua o material e peça que cada aluno (ou grupo pequeno) monte seu próprio esquema sobre um aspecto do tema estudado, usando poucas palavras-chave.",
        "Circule perguntando 'se eu tirasse esse papel da sua mão agora, você conseguiria continuar falando só com o que está na memória?' para incentivar que não decorem um texto inteiro.",
        "Organize duplas para ensaiarem a apresentação um para o outro, cronometrando o tempo e dando uma dica de melhoria ao colega (falar mais alto, olhar mais para quem ouve, não ler tudo).",
        "Chame os alunos ou grupos, um de cada vez, para apresentar a síntese oral à turma toda, usando o esquema e o cartaz de apoio, com o cronômetro marcando o tempo combinado.",
        "Depois de cada apresentação, peça que pelo menos dois colegas formulem uma pergunta sobre o tema exposto, e o apresentador responde com base no que sabe.",
        "Registro final: cada aluno guarda o esquema usado na apresentação no caderno, junto com uma pergunta que recebeu e a resposta que deu."
      ]
    },
    {
      "theme": "Debatendo temas atuais com respeito à fala do outro",
      "curriculumCode": "EF04LP23",
      "description": "Discussão de aspectos controversos relacionados a temas da atualidade e do cotidiano, alimentada por pesquisas próprias, considerando e ouvindo respeitosamente a fala do outro, emitindo e justificando opiniões.",
      "materials": ["Notícias ou textos sobre um tema controverso adequado à idade", "Cartaz com regras de debate", "Cronômetro"],
      "steps": [
        "Escolher um tema controverso adequado à faixa etária (por exemplo, uso de telas ou cuidado com animais).",
        "Pedir que os alunos façam uma pequena pesquisa prévia em casa ou na biblioteca sobre o tema.",
        "Combinar regras de convivência para o debate (levantar a mão, ouvir sem interromper).",
        "Organizar uma roda de debate onde cada aluno expõe e justifica sua opinião.",
        "Encerrar retomando os diferentes pontos de vista apresentados, sem impor uma conclusão única."
      ],
      "classScript": [
        "Anuncie o tema controverso do dia (por exemplo, 'é certo ter animais presos em zoológicos?') e pergunte: 'Só de ouvir isso, qual é a primeira coisa que vem na cabeça de vocês?'",
        "No dia anterior, ou no início da aula, peça que os alunos tragam uma informação pesquisada em casa, na biblioteca ou com a família sobre o tema, para embasar a opinião.",
        "Fixe o cartaz com as regras de debate e leia cada uma em voz alta: levantar a mão para falar, não interromper o colega, ouvir até o fim antes de discordar, falar com respeito mesmo discordando.",
        "Peça que cada aluno decida, antes do debate começar, de que lado da questão está, e organize fisicamente a sala (ou peça que anotem num papel) para visualizar os diferentes posicionamentos.",
        "Abra a roda de debate perguntando a um aluno de cada posição: 'por que você pensa assim? Que informação você trouxe que sustenta sua opinião?' — use o cronômetro para dar um tempo igual de fala a cada um.",
        "Quando um aluno discordar de outro, intervenha perguntando: 'você consegue responder ao que ele disse, sem repetir só a sua opinião de novo?' para estimular o diálogo real entre os lados.",
        "Se a conversa esquentar, retome o cartaz de regras em voz alta e reforce: 'podemos discordar da ideia sem faltar com respeito à pessoa que fala'.",
        "No fechamento, retome oralmente os diferentes pontos de vista que apareceram, sem dizer qual é o certo, e pergunte: 'alguém mudou de opinião ouvindo os colegas hoje? Por quê?'",
        "Registro final: cada aluno escreve no caderno sua opinião sobre o tema e pelo menos um argumento ouvido de um colega que pensava diferente dele."
      ]
    },
    {
      "theme": "Registrando informações durante uma escuta oral",
      "curriculumCode": "EF04LP24",
      "description": "Realização de registros como notas, esquemas, fotos e vídeos durante situações de intercâmbio oral em que o aluno participa como ouvinte, de acordo com o interesse e a relevância do tema.",
      "materials": ["Palestra, vídeo ou apresentação de convidado", "Caderno de registros", "Celular ou câmera (opcional, para fotos)"],
      "steps": [
        "Preparar a turma para assistir a uma apresentação, palestra ou vídeo informativo.",
        "Orientar os alunos a anotar palavras-chave e informações relevantes enquanto ouvem.",
        "Após a escuta, organizar as anotações em um pequeno esquema.",
        "Comparar em duplas o que cada um considerou mais importante registrar.",
        "Compartilhar com a turma os principais pontos registrados."
      ],
      "classScript": [
        "Antes de começar a escuta, explique: 'Vocês não precisam escrever tudo que ouvirem, só as palavras e ideias mais importantes — igual quando a gente faz um bilhete rápido para lembrar depois'.",
        "Distribua o caderno de registros e mostre um exemplo na lousa de como anotar em palavras-chave, não em frases completas (por exemplo, em vez de escrever a frase toda, anotar só 'rio poluído — esgoto').",
        "Avise que quem quiser pode registrar também com desenho rápido, e que celular ou câmera (se disponível) pode ser usado para fotografar um slide ou cartaz importante, sempre com combinado prévio de uso.",
        "Inicie a palestra, vídeo ou apresentação do convidado, e circule discretamente pela sala observando quem está registrando e quem parece disperso, fazendo um sinal silencioso de incentivo quando necessário.",
        "Ao final da escuta, dê um tempo silencioso para que cada aluno complete suas anotações com o que lembra, mesmo sem ter escrito na hora.",
        "Peça que cada aluno organize as anotações soltas em um pequeno esquema (pode ser uma lista numerada ou um desenho com setas) das informações mais importantes.",
        "Organize duplas para compararem os esquemas, perguntando: 'o que você achou mais importante registrar? E o seu colega, achou a mesma coisa ou outra?'",
        "Reúna a turma em roda e peça que, um de cada vez, compartilhem um ponto que registraram, sem repetir o que já foi dito por outro colega.",
        "Registro final: cada aluno guarda no caderno de registros o esquema final das anotações feitas durante a escuta, servindo como fonte para consultas futuras sobre o tema."
      ]
    },
    {
      "theme": "Comparando textos de gêneros diferentes e do mesmo gênero",
      "curriculumCode": "EF04LP25",
      "description": "Comparação de textos organizados em diferentes gêneros, para identificar as características específicas de cada um, e de textos do mesmo gênero, para confirmar a caracterização já realizada.",
      "materials": ["Dois textos de gêneros diferentes sobre um tema comum", "Dois textos do mesmo gênero", "Tabela comparativa"],
      "steps": [
        "Apresentar dois textos de gêneros diferentes (por exemplo, notícia e poema) sobre um mesmo assunto.",
        "Preencher uma tabela comparando estrutura, linguagem e finalidade de cada um.",
        "Em seguida, apresentar dois textos do mesmo gênero e verificar se compartilham as mesmas características.",
        "Discutir coletivamente o que define cada gênero estudado.",
        "Registrar em cartaz coletivo as características de cada gênero analisado."
      ],
      "classScript": [
        "Distribua a notícia e o poema sobre o mesmo assunto sem dizer os nomes dos gêneros, e pergunte: 'Esses dois textos falam da mesma coisa, mas parecem muito diferentes — o que vocês notam de diferente entre eles?'",
        "Leia a notícia em voz alta e pergunte: 'Como esse texto está organizado — tem título, data, informações objetivas?'",
        "Leia o poema em voz alta e pergunte: 'E esse — tem rima, verso, uma linguagem mais criativa?'",
        "Desenhe na lousa uma tabela com três linhas (estrutura, linguagem, finalidade) e duas colunas (um para cada texto) e preencha coletivamente com a turma.",
        "Apresente agora dois textos novos do mesmo gênero de um dos anteriores (por exemplo, duas notícias diferentes) e pergunte: 'Esses dois compartilham as mesmas características que já vimos na tabela, ou aparece algo novo?'",
        "Peça que a turma, em voz alta, tente listar o que é 'obrigatório' ter num texto daquele gênero, com base na comparação dos dois exemplos.",
        "Repita rapidamente a checagem para o outro gênero (se sobrar tempo, ou em outro momento), sempre confirmando se as duas amostras do mesmo gênero se parecem.",
        "Discuta coletivamente: 'Então, o que define esse gênero de texto — que características ele sempre tem, não importa o assunto?'",
        "Registro final: monte um cartaz coletivo dividido por gênero, cada grupo escrevendo as características levantadas (estrutura, linguagem, finalidade) do gênero que analisou, para consulta futura da turma."
      ]
    },
    {
      "theme": "Eliminando repetições no texto com sinônimos e pronomes",
      "curriculumCode": "EF04LP26",
      "description": "Eliminação de repetições indesejadas nos textos produzidos, substituindo o referente por outra palavra — sinônimo, hiperônimo, pronome, numeral — ou por elipse do referente.",
      "materials": ["Texto com repetições propositais de palavras", "Lista de sinônimos e pronomes", "Lápis"],
      "steps": [
        "Apresentar um texto curto com repetições excessivas de uma mesma palavra.",
        "Ler o texto em voz alta e perceber junto com a turma o efeito desagradável da repetição.",
        "Em duplas, os alunos substituem as repetições por sinônimos, pronomes ou omitem o termo quando possível.",
        "Comparar a versão original com a versão reescrita.",
        "Aplicar a mesma estratégia de revisão em um texto próprio já produzido."
      ],
      "classScript": [
        "Leia o texto com repetições propositais em voz alta, marcando bem a palavra repetida cada vez que aparece, exagerando um pouco na entonação para causar estranhamento.",
        "Pergunte: 'O que vocês acharam de ouvir essa palavra tantas vezes? Ficou bom de ouvir ou incomodou?'",
        "Peça que a turma conte, em voz alta, quantas vezes a palavra se repete no texto, sublinhando cada ocorrência coletivamente na lousa.",
        "Escreva na lousa três estratégias para não repetir: usar um sinônimo (uma palavra parecida), usar um pronome (ele, ela, isso), ou simplesmente tirar a palavra quando dá para entender sem ela (elipse) — dê um exemplo de cada, usando frases do próprio texto.",
        "Organize duplas e distribua a lista de sinônimos e pronomes de apoio, pedindo que reescrevam o texto substituindo as repetições usando as três estratégias vistas.",
        "Circule perguntando 'essa troca que vocês fizeram continua fazendo sentido na frase? Dá pra entender quem ou o que está sendo mencionado?'",
        "Reúna a turma e leia a versão original ao lado de uma versão reescrita por uma dupla, perguntando: 'qual ficou melhor de ler? Por quê?'",
        "Peça que cada aluno pegue um texto próprio já produzido anteriormente e procure, nele, alguma palavra repetida em excesso para aplicar a mesma estratégia de revisão.",
        "Registro final: cada aluno registra no caderno, ao lado do texto reescrito, pelo menos duas substituições feitas (uma com sinônimo e outra com pronome ou elipse)."
      ]
    },
    {
      "theme": "Usando organizadores textuais no texto",
      "curriculumCode": "EF04LP27",
      "description": "Utilização de organizadores textuais adequados ao gênero e ao registro linguístico do texto, como marcadores de tempo, sequência ou conclusão.",
      "materials": ["Texto sem organizadores textuais", "Lista de organizadores textuais (primeiro, depois, por fim etc.)", "Lápis"],
      "steps": [
        "Apresentar uma lista de organizadores textuais comuns em diferentes gêneros.",
        "Ler um texto que carece de conectores entre as partes.",
        "Em grupo, decidir quais organizadores poderiam ser inseridos para melhorar a compreensão.",
        "Reescrever o texto incluindo os organizadores escolhidos.",
        "Aplicar os organizadores em uma produção de texto própria em andamento."
      ],
      "classScript": [
        "Escreva na lousa uma lista de organizadores textuais separados por função: de tempo/sequência (primeiro, depois, em seguida, por fim), de conclusão (portanto, assim, para concluir), de adição (além disso, também).",
        "Leia o texto sem conectores em voz alta, marcando uma pausa estranha entre cada frase, e pergunte: 'Vocês sentiram que uma ideia não se conecta bem com a outra? O que está faltando?'",
        "Peça que a turma releia a primeira e a segunda frase do texto e pergunte: 'que palavra da nossa lista poderíamos colocar entre elas para ligar melhor as ideias?'",
        "Organize grupos pequenos e distribua o texto impresso, orientando que decidam juntos, frase por frase, quais organizadores da lista poderiam ser inseridos.",
        "Circule pelos grupos perguntando 'por que vocês escolheram esse organizador e não outro da lista? Ele indica tempo, conclusão ou adição?'",
        "Reúna a turma e peça que um grupo leia sua versão reescrita em voz alta, comparando com o texto original sem conectores.",
        "Pergunte: 'Ficou mais fácil de entender com os organizadores? Por quê?'",
        "Oriente que cada aluno pegue uma produção de texto própria que já está em andamento (de outra aula) e procure ao menos dois pontos onde um organizador textual da lista ajudaria a conectar melhor as ideias.",
        "Registro final: cada aluno registra no caderno o texto coletivo reescrito com os organizadores e aponta, na própria produção em andamento, os organizadores que decidiu inserir."
      ]
    },
    {
      "theme": "Mantendo os tempos verbais coerentes no texto",
      "curriculumCode": "EF04LP28",
      "description": "Análise do papel da manutenção do tempo verbal predominante e da articulação entre os tempos verbais do texto no estabelecimento da coesão textual.",
      "materials": ["Texto narrativo com mistura proposital de tempos verbais", "Lápis colorido", "Folha de reescrita"],
      "steps": [
        "Apresentar um texto narrativo com verbos em tempos verbais misturados de forma inadequada.",
        "Pedir que os alunos identifiquem, com cores diferentes, os tempos verbais usados.",
        "Discutir coletivamente qual tempo verbal deveria predominar na narrativa.",
        "Reescrever o texto corrigindo a articulação entre os tempos verbais.",
        "Revisar um texto próprio verificando a coerência dos tempos verbais utilizados."
      ],
      "classScript": [
        "Leia o texto narrativo com os tempos verbais misturados em voz alta, sem avisar o problema, e pergunte: 'Vocês sentiram alguma coisa estranha na forma como essa história foi contada?'",
        "Se ninguém perceber de imediato, releia uma frase específica onde a mistura fica clara (por exemplo, 'ele estava andando quando de repente ele vai embora') e pergunte: 'Isso está acontecendo agora ou já aconteceu? Por que fica confuso?'",
        "Distribua lápis coloridos e peça que a turma sublinhe de uma cor os verbos no passado e de outra cor os verbos no presente encontrados no texto.",
        "Peça que contem quantos verbos ficaram de cada cor e pergunte: 'Esse texto conta uma história que já aconteceu — então qual tempo verbal deveria predominar, o passado ou o presente?'",
        "Reescrevam coletivamente na lousa as duas ou três primeiras frases do texto, ajustando os verbos para manter o mesmo tempo verbal predominante.",
        "Distribua a folha de reescrita e peça que cada aluno continue a correção do texto sozinho, ajustando os verbos que estão fora do tempo predominante.",
        "Circule perguntando 'esse verbo que você mudou continua fazendo sentido com o resto da frase?' para checar se a correção manteve a coerência.",
        "Oriente que cada aluno pegue um texto narrativo próprio já produzido e releia verificando se manteve o mesmo tempo verbal ao longo da história, corrigindo o que encontrar fora do padrão.",
        "Registro final: cada aluno entrega a folha de reescrita do texto corrigido e registra no caderno qual tempo verbal escolheu como predominante e por quê."
      ]
    },
    {
      "theme": "Articulando as partes do texto e mantendo o narrador",
      "curriculumCode": "EF04LP29",
      "description": "Articulação coerente das partes do texto durante a produção, empregando o mesmo tipo de narrador do texto-fonte (1ª ou 3ª pessoa) em situações de produção de final de conto ou reescrita.",
      "materials": ["Conto com final incompleto", "Folha de produção de texto", "Lápis"],
      "steps": [
        "Ler coletivamente um conto até um ponto antes do desfecho, identificando o narrador (1ª ou 3ª pessoa).",
        "Discutir o que aconteceu até ali e levantar possibilidades para o final.",
        "Cada aluno escreve seu próprio final para o conto, mantendo o mesmo narrador do texto original.",
        "Revisar o texto verificando se as partes se conectam sem quebrar a compreensão.",
        "Compartilhar os diferentes finais produzidos pela turma."
      ],
      "classScript": [
        "Leia o conto em voz alta até o ponto combinado, parando exatamente antes do desfecho, criando suspense proposital.",
        "Pergunte: 'Quem está contando essa história — é um personagem dentro dela, usando \\'eu\\', ou é alguém de fora contando sobre \\'ele\\' ou \\'ela\\'?' e confirme se é narrador em 1ª ou 3ª pessoa, com exemplo de uma frase do texto.",
        "Escreva na lousa: 'Narrador desse conto: 1ª pessoa (eu) ou 3ª pessoa (ele/ela)' — conforme identificado — como lembrete fixo para a produção.",
        "Pergunte à turma: 'O que já sabemos até aqui — quem são os personagens, qual é o problema, o que pode acontecer?' e liste esses pontos na lousa.",
        "Peça que a turma, em voz alta, levante duas ou três possibilidades diferentes de final, sem ainda escolher qual é a certa.",
        "Distribua a folha de produção de texto e oriente: 'Escrevam o final que quiserem, mas o narrador tem que continuar sendo o mesmo do começo — se era \\'eu\\', continua \\'eu\\'; se era \\'ele\\', continua \\'ele\\'.'",
        "Circule pela sala perguntando a cada aluno 'seu final começa encaixando com o que a história já tinha contado, ou parece um pedaço solto?' para reforçar a articulação das partes.",
        "Peça que cada aluno releia o próprio final, verificando se o narrador não mudou de pessoa no meio do texto (um erro comum é começar em 3ª pessoa e escorregar para 1ª pessoa).",
        "Registro final: promova uma roda de compartilhamento onde alguns alunos leem seus finais em voz alta, e a turma identifica oralmente qual narrador cada um manteve; todos entregam a folha de produção com o final escrito."
      ]
    },
    {
      "theme": "Usando a pontuação medial e final com intenção",
      "curriculumCode": "EF04LP30",
      "description": "Utilização da pontuação medial e final como parte integrante do texto, considerando a intenção do autor, para favorecer a progressão temática e a coesão.",
      "materials": ["Texto sem pontuação", "Lápis", "Folha de reescrita pontuada"],
      "steps": [
        "Apresentar um texto curto sem nenhuma pontuação.",
        "Ler o texto em voz alta e perceber a dificuldade de compreensão sem pausas.",
        "Em duplas, os alunos inserem vírgulas, pontos e outros sinais onde julgarem necessário.",
        "Comparar as diferentes versões pontuadas pela turma e discutir os efeitos de sentido de cada escolha.",
        "Revisar a pontuação de um texto próprio já produzido."
      ],
      "classScript": [
        "Cole ou projete o texto sem nenhuma pontuação e peça um voluntário para tentar ler em voz alta, sem corrigir ainda — deixe a leitura truncada acontecer.",
        "Pergunte à turma: 'Foi fácil entender? O que atrapalhou a leitura?' Anote no quadro as respostas, tipo 'não sei onde para a frase' ou 'parece tudo junto'.",
        "Relembre com exemplos rápidos na lousa a função de cada sinal: ponto final fecha a ideia, exclamação marca emoção ou surpresa, interrogação faz pergunta, reticências indicam interrupção ou suspense, e a vírgula separa partes dentro da frase (pontuação medial).",
        "Organize a turma em duplas e distribua uma cópia do texto sem pontuação para cada dupla.",
        "Circule pela sala enquanto as duplas discutem onde cada sinal deveria entrar, perguntando 'por que vocês escolheram esse sinal aqui?' para forçar a justificativa oral.",
        "Reúna a turma e corrija coletivamente na lousa, escrevendo o texto pontuado enquanto pede que diferentes duplas leiam suas escolhas em voz alta, comparando divergências.",
        "Escolha uma frase onde duas duplas pontuaram de formas diferentes e pergunte: 'as duas pontuações fazem sentido, ou uma muda o significado da frase?' — mostre como a escolha da pontuação altera a intenção do autor.",
        "Peça que cada aluno pegue um texto próprio já produzido e revise a pontuação, verificando se as pausas e sinais usados ajudam o leitor a entender a intenção pretendida.",
        "Registro final: cada aluno escreve individualmente, no caderno, três frases próprias usando pelo menos três sinais de pontuação diferentes — essa produção individual é o que fica registrado da aula."
      ]
    },
    {
      "theme": "Analisando as escolhas de palavras no próprio texto",
      "curriculumCode": "EF04LP31",
      "description": "Análise das escolhas lexicais feitas nos textos produzidos, identificando sua adequação ou não às intenções de significação pretendidas pelo autor.",
      "materials": ["Texto próprio já produzido pelo aluno", "Dicionário", "Lápis"],
      "steps": [
        "Retomar um texto que os alunos já produziram anteriormente.",
        "Destacar três ou quatro palavras usadas no texto e discutir se são as mais adequadas ao sentido pretendido.",
        "Consultar o dicionário para buscar palavras alternativas quando necessário.",
        "Reescrever os trechos destacados substituindo palavras pouco adequadas.",
        "Comparar a versão final com a original e discutir as melhorias."
      ],
      "classScript": [
        "Peça que cada aluno pegue um texto próprio já produzido em aula anterior e o releia em silêncio, como se fosse a primeira vez que o vê.",
        "Escolha, com um exemplo real de um texto de aluno (com permissão, sem expor de forma constrangedora), uma palavra que poderia ser mais precisa, e escreva-a na lousa perguntando: 'Essa palavra transmite exatamente o que o autor quis dizer, ou existe uma palavra melhor?'",
        "Modele a busca no dicionário para essa palavra, mostrando sinônimos e significados próximos, e pergunte 'qual dessas opções encaixa melhor no sentido que o texto quer passar?'",
        "Oriente cada aluno a escolher, no próprio texto, três ou quatro palavras que sinta que poderiam ser melhoradas (muito genéricas, repetidas, ou que não expressam bem a ideia).",
        "Distribua os dicionários (um por aluno ou por dupla) e peça que pesquisem alternativas para as palavras escolhidas.",
        "Circule perguntando 'essa nova palavra que você encontrou continua com o mesmo sentido que você queria, ou mudou o que você estava tentando dizer?' para garantir que a troca seja consciente, não aleatória.",
        "Peça que reescrevam os trechos destacados no próprio texto, substituindo as palavras pouco adequadas pelas escolhidas.",
        "Organize duplas para lerem a versão original e a versão revisada uma para a outra, perguntando 'o que ficou mais claro ou mais bonito na nova versão?'",
        "Registro final: cada aluno entrega o texto com as substituições marcadas e escreve, ao final, uma frase explicando por que uma das trocas melhorou o sentido pretendido."
      ]
    },
    {
      "theme": "Identificando metáforas, comparações e personificações",
      "curriculumCode": "EF04LP32",
      "description": "Identificação, em textos lidos, dos usos de metáfora, comparação, referências intertextuais e prosopopeia (personificação).",
      "materials": ["Poemas ou trechos literários com metáforas e personificações", "Cartaz explicativo dos recursos", "Lápis"],
      "steps": [
        "Apresentar exemplos curtos de metáfora, comparação e personificação em trechos literários.",
        "Explicar cada recurso com exemplos simples do cotidiano.",
        "Em grupos, os alunos leem um novo texto e sublinham os trechos que usam esses recursos.",
        "Socializar as descobertas, explicando o efeito de sentido de cada recurso identificado.",
        "Cada aluno cria uma frase própria usando metáfora ou personificação."
      ],
      "classScript": [
        "Diga em voz alta uma frase do cotidiano com comparação, como 'ele é rápido como um foguete', e pergunte: 'ele virou um foguete de verdade, ou é um jeito de dizer que ele é muito rápido?'",
        "Explique a comparação apontando a palavra 'como' como pista, depois diga a mesma ideia sem o 'como' — 'ele é um foguete' — e pergunte 'e agora, isso é uma metáfora ou comparação? O que mudou?'",
        "Diga uma frase com personificação, como 'o vento sussurrava segredos', e pergunte: 'o vento pode sussurrar de verdade, como uma pessoa? Por que o texto fala assim mesmo assim?'",
        "Fixe o cartaz explicativo dos três recursos (metáfora, comparação, personificação) com um exemplo de cada, para consulta durante a atividade.",
        "Leia em voz alta um ou dois trechos literários com esses recursos, parando para perguntar 'esse trecho está usando qual dos três recursos do cartaz?'",
        "Organize grupos e distribua um novo texto (poema ou trecho literário) para lerem e sublinharem, com cores diferentes, os trechos que reconhecem como metáfora, comparação ou personificação.",
        "Circule pelos grupos perguntando 'por que vocês acham que é personificação e não metáfora nesse trecho?' para checar se distinguem os recursos.",
        "Reúna a turma para socializar as descobertas: cada grupo lê um trecho sublinhado e explica que efeito de sentido aquele recurso provoca (surpresa, beleza, humor, emoção).",
        "Registro final: cada aluno cria e escreve no caderno uma frase própria usando metáfora ou personificação, indicando qual dos dois recursos escolheu."
      ]
    },
    {
      "theme": "Explorando campo semântico e hiperonímia com o dicionário",
      "curriculumCode": "EF04LP33",
      "description": "Análise dos sentidos decorrentes do uso de palavras que se aproximam de um mesmo campo semântico (hiperonímia), utilizando o dicionário como recurso para a construção de repertório.",
      "materials": ["Dicionário (um para cada dupla, se possível)", "Lista de palavras de um campo semântico", "Folha de registro"],
      "steps": [
        "Apresentar um grupo de palavras de um mesmo campo semântico (por exemplo, animais, frutas, sentimentos).",
        "Pedir que os alunos identifiquem uma palavra mais geral (hiperônimo) que englobe as demais.",
        "Consultar o dicionário para confirmar os significados e relações entre as palavras.",
        "Em duplas, criar uma nova lista de palavras de outro campo semântico com seu hiperônimo.",
        "Compartilhar as listas criadas com a turma."
      ],
      "classScript": [
        "Escreva na lousa uma lista de palavras de um mesmo campo (por exemplo: cachorro, gato, papagaio, peixe) e pergunte: 'O que essas palavras têm em comum? Existe uma palavra só que consegue nomear todas elas juntas?'",
        "Quando a turma chegar em 'animais', escreva essa palavra acima da lista, ligada por setas às demais, e explique: 'essa palavra mais geral que engloba as outras chama-se hiperônimo'.",
        "Repita rapidamente o exercício com outro grupo de palavras (frutas: maçã, banana, uva) para reforçar o conceito antes de seguir.",
        "Distribua os dicionários (um por dupla, se possível) e peça que consultem duas ou três palavras da lista, conferindo se o significado bate com o campo semântico esperado.",
        "Pergunte: 'O dicionário ajuda a confirmar que essas palavras realmente pertencem à mesma família de sentido?'",
        "Organize duplas e distribua a folha de registro, pedindo que criem sua própria lista de quatro ou cinco palavras de outro campo semântico (sentimentos, meios de transporte, profissões) e descubram o hiperônimo que as engloba.",
        "Circule perguntando 'será que existe uma palavra ainda mais específica para consultar no dicionário e confirmar o sentido de cada uma dessas palavras?'",
        "Reúna a turma para que cada dupla compartilhe sua lista e o hiperônimo escolhido, e a turma verifica se concorda que todas as palavras cabem ali.",
        "Registro final: cada dupla entrega a folha de registro com a lista de palavras do campo semântico escolhido e o hiperônimo identificado, com os significados consultados no dicionário anotados ao lado."
      ]
    },
    {
      "theme": "Descobrindo palavras polissêmicas",
      "curriculumCode": "EF04LP34",
      "description": "Identificação do caráter polissêmico de palavras, reconhecendo que uma mesma palavra pode ter sentidos diferentes de acordo com o contexto de uso.",
      "materials": ["Lista de palavras polissêmicas (manga, banco, copo etc.)", "Folha para produção de frases", "Lápis"],
      "steps": [
        "Apresentar uma palavra com mais de um significado, como 'manga' ou 'banco'.",
        "Pedir que os alunos digam frases diferentes usando a palavra com sentidos distintos.",
        "Em duplas, escolher outras palavras polissêmicas e escrever duas frases para cada uma.",
        "Trocar as frases com outra dupla e adivinhar qual sentido está sendo usado em cada frase.",
        "Socializar as descobertas em roda de conversa."
      ],
      "classScript": [
        "Escreva a palavra 'manga' na lousa e pergunte: 'Quando eu falo essa palavra, em que vocês pensam primeiro?' — deixe surgir 'a fruta' e, se ninguém disser, pergunte 'e a manga da camisa, tem a ver?'",
        "Diga duas frases usando 'manga' em sentidos diferentes ('comi uma manga no lanche' e 'a manga da minha blusa rasgou') e pergunte: 'é a mesma palavra, mas o sentido é o mesmo nas duas frases?'",
        "Repita o mesmo com 'banco' (banco de sentar e banco de guardar dinheiro), pedindo que a turma invente as frases dessa vez.",
        "Explique: 'essas palavras que têm mais de um significado, dependendo de como são usadas na frase, se chamam palavras polissêmicas'.",
        "Distribua a lista de palavras polissêmicas e, em duplas, peça que escolham duas palavras da lista (diferentes de manga e banco) e escrevam duas frases para cada uma, mostrando sentidos diferentes.",
        "Circule perguntando 'nessas suas duas frases, dá pra perceber claramente que o sentido da palavra mudou?' para garantir que os dois sentidos fiquem bem diferenciados.",
        "Organize a troca de frases entre duplas diferentes: cada dupla lê as frases da outra e tenta adivinhar qual sentido da palavra está sendo usado em cada uma, sem ver a resposta antes.",
        "Confira coletivamente os palpites, com a dupla autora confirmando ou corrigindo.",
        "Registro final: em roda de conversa, cada dupla compartilha uma de suas palavras polissêmicas e os dois sentidos descobertos, e todos registram a folha de frases produzida no caderno."
      ]
    },
    {
      "theme": "Explorando recursos gráfico-textuais do material lido",
      "curriculumCode": "EF04LP35",
      "description": "Identificação e uso de recursos gráfico-textuais como alinhamento, espaçamento, tipo e tamanho de letra, negrito, itálico, sublinhado, cores e capitulação, reconhecendo os efeitos de sentido que provocam.",
      "materials": ["Textos impressos com diferentes formatações (negrito, itálico, cores)", "Editor de texto no computador (se disponível)", "Folha de observação"],
      "steps": [
        "Apresentar um texto que utilize vários recursos gráficos, como negrito, itálico e cores.",
        "Discutir com a turma qual efeito cada recurso gráfico provoca na leitura.",
        "Em duplas, os alunos identificam esses recursos em outros materiais impressos disponíveis na sala.",
        "Cada aluno reformata um pequeno trecho de texto próprio usando ao menos dois recursos gráficos estudados.",
        "Compartilhar as produções e discutir os efeitos alcançados."
      ],
      "classScript": [
        "Mostre o texto com vários recursos gráficos e pergunte: 'Antes mesmo de ler as palavras, o que essas letras diferentes (grossas, tortas, coloridas) já anunciam sobre o que é mais importante?'",
        "Aponte uma palavra em negrito e pergunte: 'Por que vocês acham que essa palavra está mais grossa que as outras? O que isso quer destacar?'",
        "Aponte uma palavra em itálico e pergunte: 'E essa, tombada para o lado — o que ela pode estar indicando, uma palavra estrangeira, um pensamento, uma ênfase diferente?'",
        "Repita a pergunta para sublinhado e para trechos em cor diferente, sempre relacionando o recurso ao efeito de sentido que ele provoca na leitura.",
        "Organize duplas e distribua outros materiais impressos disponíveis na sala (livros, cartazes, folhetos) para que encontrem e listem, na folha de observação, exemplos de cada recurso gráfico estudado.",
        "Circule perguntando 'nesse exemplo que vocês encontraram, por que o autor usou esse recurso ali e não em outro lugar do texto?'",
        "Reúna a turma e peça que compartilhem um exemplo encontrado, explicando o efeito que aquele recurso provoca.",
        "Se houver editor de texto disponível, mostre como aplicar negrito, itálico e cor no computador; se não houver, oriente que cada aluno reformate à mão um pequeno trecho de texto próprio, usando lápis de cor e diferentes traços para simular pelo menos dois recursos gráficos estudados.",
        "Registro final: cada aluno compartilha com a turma o trecho reformatado, explicando por que escolheu destacar aquelas palavras específicas, e entrega a produção com a folha de observação preenchida."
      ]
    },
    {
      "theme": "Reconhecendo variedades da língua portuguesa",
      "curriculumCode": "EF04LP36",
      "description": "Identificação da existência de variedades da língua portuguesa determinadas por classe social, gênero, idade, escolaridade, profissão, localização geográfica e influências interculturais de povos indígenas, africanos, europeus e outros.",
      "materials": ["Trechos de textos ou falas com diferentes variedades linguísticas", "Mapa do Brasil (opcional)", "Folha de registro"],
      "steps": [
        "Apresentar exemplos de fala ou texto com diferentes variedades linguísticas regionais e sociais.",
        "Discutir com a turma de onde podem vir essas diferenças (região, idade, profissão).",
        "Relacionar algumas expressões a influências indígenas, africanas ou europeias na língua portuguesa.",
        "Em grupos, os alunos pesquisam ou relembram expressões usadas por suas famílias.",
        "Compartilhar as expressões coletadas, valorizando a diversidade linguística da turma."
      ],
      "classScript": [
        "Leia ou reproduza dois trechos de fala com sotaques ou expressões regionais diferentes (por exemplo, uma fala nordestina e uma fala gaúcha) e pergunte: 'Vocês notam diferença na forma de falar? O que muda?'",
        "Pergunte à turma: 'Por que vocês acham que existem essas diferenças — será que tem a ver com o lugar onde a pessoa mora, a idade dela, o trabalho que faz?' Anote as hipóteses na lousa.",
        "Se houver mapa do Brasil, aponte as regiões de onde vêm os exemplos de fala apresentados, mostrando que o Brasil é grande e cada lugar tem seu jeito de falar.",
        "Apresente duas ou três palavras do português que vêm de línguas indígenas (como 'mandioca', 'jacaré') e de línguas africanas (como 'moleque', 'cochilo'), explicando de onde vieram essas influências na formação da língua.",
        "Pergunte: 'Vocês conhecem outras palavras ou expressões que a família de vocês usa e talvez os colegas não conheçam?' — deixe alguns exemplos surgirem espontaneamente.",
        "Organize grupos e distribua a folha de registro, pedindo que cada aluno pense em expressões ou palavras usadas por sua família (pode ser de outra região, de avós, de uma profissão específica) e compartilhe com o grupo.",
        "Circule pelos grupos perguntando 'de onde vem essa expressão que você trouxe? Sua família tem origem em algum lugar específico?' para enriquecer a coleta.",
        "Reúna a turma em roda para que cada grupo compartilhe uma ou duas expressões coletadas, explicando de onde vêm.",
        "Registro final: cada aluno registra na folha pelo menos uma expressão da própria família, com uma frase explicando por que ela é especial ou diferente, valorizando a diversidade linguística presente na turma."
      ]
    },
    {
      "theme": "Combatendo o preconceito linguístico",
      "curriculumCode": "EF04LP37",
      "description": "Reconhecimento das situações comunicativas mais apropriadas ao uso de diferentes variedades linguísticas, sem sobrepor uma à outra, valorizando-as e repudiando discriminações contra pessoas por seu modo de falar.",
      "materials": ["Situações comunicativas escritas em cartões (formal e informal)", "Cartaz sobre respeito à diversidade linguística", "Lápis"],
      "steps": [
        "Apresentar cartões com diferentes situações de comunicação (uma entrevista formal, uma conversa entre amigos).",
        "Discutir qual forma de falar seria mais adequada a cada situação, sem julgar nenhuma como errada.",
        "Conversar sobre situações em que alguém pode ter sido discriminado por seu jeito de falar.",
        "Construir coletivamente um cartaz com combinados de respeito à diversidade linguística da turma.",
        "Encerrar com um compromisso coletivo de não fazer piada do jeito de falar dos colegas."
      ],
      "classScript": [
        "Mostre um cartão de situação formal (uma entrevista de emprego) e pergunte: 'Como a pessoa provavelmente vai falar aqui — mais soltinha ou mais cuidadosa com as palavras?'",
        "Mostre um cartão de situação informal (uma conversa entre amigos no recreio) e pergunte: 'E aqui, dá pra falar do mesmo jeito que na entrevista? Por que muda?'",
        "Reforce a ideia central com clareza: 'Nenhum desses jeitos de falar é errado — cada um é certo dependendo da situação. O problema não é falar diferente, é rir ou zoar de quem fala diferente'.",
        "Distribua outros cartões de situações comunicativas variadas para os alunos, em duplas, discutirem qual forma de falar (mais formal ou mais informal) combina com cada uma.",
        "Reúna a turma e pergunte com cuidado: 'Vocês já viram ou ouviram alguém ser motivo de piada por causa do jeito de falar — um sotaque, uma forma de pronunciar palavra?' Conduza a conversa com respeito, sem expor ninguém da turma.",
        "Pergunte: 'Como vocês acham que a pessoa se sente quando é motivo de piada por causa do jeito de falar dela?'",
        "Construa coletivamente, na lousa e depois no cartaz, uma lista de combinados de respeito à diversidade linguística da turma (por exemplo, 'não rir do jeito que o colega fala', 'perguntar com respeito quando não entender uma palavra diferente').",
        "Peça que cada aluno copie os combinados no cartaz ou ajude a decorá-lo, deixando-o visível na sala como lembrete permanente.",
        "Registro final: encerre pedindo que cada aluno assine (ou coloque a digital/desenho) o cartaz como compromisso pessoal de não fazer piada do jeito de falar dos colegas, e registre no caderno uma frase sobre o que aprendeu na aula."
      ]
    },
    {
      "theme": "Analisando substantivos e concordância nominal",
      "curriculumCode": "EF04LP38",
      "description": "Análise dos substantivos como palavras que designam os seres em geral, considerando suas possibilidades de flexão e a necessidade de concordância nominal nos enunciados.",
      "materials": ["Lista de substantivos variados", "Folha de exercício de concordância", "Lápis"],
      "steps": [
        "Relembrar o que são substantivos e pedir exemplos aos alunos.",
        "Apresentar frases com erros de concordância nominal para os alunos identificarem.",
        "Em duplas, corrigir as frases ajustando gênero e número dos substantivos e adjetivos.",
        "Praticar a flexão de substantivos (singular/plural, masculino/feminino) em uma lista de palavras.",
        "Revisar um texto próprio verificando a concordância nominal."
      ],
      "classScript": [
        "Pergunte à turma: 'O que é um substantivo? Alguém consegue dar um exemplo?' e escreva na lousa os exemplos que forem surgindo, separando em pessoas, animais, objetos e lugares.",
        "Escreva na lousa uma frase com erro de concordância nominal (por exemplo, 'as menina bonita chegou') e pergunte: 'tem algo estranho no jeito que essa frase está escrita? O que soa errado?'",
        "Peça que a turma tente corrigir a frase em voz alta, explicando por que o substantivo e o adjetivo precisam 'combinar' em gênero e número.",
        "Apresente mais duas ou três frases com erros semelhantes e peça que voluntários venham à lousa corrigir, explicando a correção para a turma.",
        "Organize duplas e distribua a folha de exercício de concordância para corrigirem outras frases, ajustando gênero e número.",
        "Circule perguntando 'por que você trocou essa palavra? O substantivo está no singular ou no plural, feminino ou masculino?' para verificar se entenderam o critério, não só decoraram a resposta.",
        "Escreva na lousa uma lista de substantivos no singular e peça que a turma pratique oralmente a flexão para plural e para o gênero oposto (por exemplo, 'menino' vira 'menina', 'meninos', 'meninas').",
        "Peça que cada aluno pegue um texto próprio já produzido e releia procurando por erros de concordância nominal, marcando com lápis onde encontrar.",
        "Registro final: cada aluno registra no caderno a correção da própria produção, com pelo menos um exemplo de ajuste de concordância nominal encontrado e corrigido."
      ]
    },
    {
      "theme": "Analisando verbos e concordância verbal",
      "curriculumCode": "EF04LP39",
      "description": "Análise dos usos e funções dos verbos como índice de ação, estado e fenômenos da natureza, considerando as possibilidades de flexão em número e pessoa e a necessidade de concordância verbal.",
      "materials": ["Lista de verbos de ação, estado e fenômenos naturais", "Folha de exercício de concordância verbal", "Lápis"],
      "steps": [
        "Apresentar exemplos de verbos que indicam ação, estado e fenômenos da natureza (correr, estar, chover).",
        "Discutir como os verbos mudam de forma conforme a pessoa e o número do sujeito.",
        "Em duplas, corrigir frases com erros de concordância verbal.",
        "Escrever frases próprias usando verbos de cada categoria estudada, com concordância correta.",
        "Revisar um texto próprio verificando a concordância verbal."
      ],
      "classScript": [
        "Peça que alguns alunos façam a ação de 'correr' no lugar, e pergunte: 'que palavra descreve o que ele está fazendo?' — chegando em 'correr' como exemplo de verbo de ação.",
        "Escreva na lousa 'ele está cansado' e pergunte: 'esse verbo mostra uma ação acontecendo, ou um estado de como ele está?' — introduzindo verbo de estado.",
        "Pergunte: 'e quando eu digo \\'está chovendo\\', quem está fazendo essa ação? Tem alguém fazendo, ou é um fenômeno da natureza acontecendo sozinho?' — introduzindo verbo de fenômeno da natureza.",
        "Escreva na lousa uma frase com erro de concordância verbal (por exemplo, 'os meninos correu no parque') e pergunte: 'o que soa estranho aqui? O verbo combina com quem está fazendo a ação?'",
        "Peça que a turma corrija oralmente, explicando que o verbo muda de forma dependendo de quantas pessoas fazem a ação e de quem é essa pessoa (eu, você, nós, eles).",
        "Organize duplas e distribua a folha de exercício de concordância verbal para corrigirem outras frases.",
        "Circule perguntando 'quantas pessoas estão fazendo essa ação na frase — uma ou várias? O verbo que vocês escolheram combina com isso?'",
        "Peça que cada aluno escreva três frases próprias, uma usando um verbo de ação, uma de estado e uma de fenômeno da natureza, cuidando da concordância verbal.",
        "Registro final: cada aluno revisa um texto próprio já produzido, procurando e corrigindo possíveis erros de concordância verbal, e registra no caderno as três frases produzidas com os verbos das três categorias estudadas."
      ]
    },
    {
      "theme": "Acentuando palavras de uso frequente",
      "curriculumCode": "EF04LP40",
      "description": "Utilização da acentuação gráfica em palavras de uso frequente presentes em textos já conhecidos pela turma.",
      "materials": ["Lista de palavras acentuadas de uso comum", "Ficha de estudo de palavras", "Lápis"],
      "steps": [
        "Selecionar, em um texto já lido pela turma, palavras acentuadas de uso frequente.",
        "Observar juntos onde está o acento em cada palavra selecionada.",
        "Praticar a escrita dessas palavras em um ditado curto.",
        "Corrigir o ditado coletivamente, destacando os acentos.",
        "Criar um banco de palavras acentuadas para consulta na sala."
      ],
      "classScript": [
        "Pegue um texto já lido pela turma e peça que localizem, em duplas, três ou quatro palavras acentuadas conhecidas (como 'água', 'história', 'até'), circulando-as no texto.",
        "Escreva essas palavras na lousa e pergunte: 'onde está o acento em cada uma? Em cima de qual letra?'",
        "Peça que a turma bata palmas na sílaba mais forte de cada palavra ao pronunciá-la, relacionando a força da pronúncia com o lugar do acento.",
        "Distribua a ficha de estudo de palavras com a lista de palavras acentuadas de uso comum, e leia cada uma em voz alta pedindo que a turma repita, prestando atenção na sílaba acentuada.",
        "Avise que vai fazer um ditado curto com essas palavras e peça que se preparem, olhando a ficha por um instante antes de guardá-la.",
        "Ditado: leia pausadamente cada palavra, repetindo uma vez se necessário, enquanto os alunos escrevem no caderno.",
        "Corrija o ditado coletivamente, escrevendo cada palavra correta na lousa e destacando com giz ou caneta de cor diferente onde fica o acento.",
        "Pergunte a cada palavra corrigida: 'quem escreveu certo? Alguém esqueceu o acento? Onde ele deveria estar?'",
        "Registro final: monte com a turma um banco de palavras acentuadas em cartaz ou em uma folha fixada na sala, para consulta em produções futuras, e cada aluno registra no caderno o ditado corrigido."
      ]
    },
    {
      "theme": "Identificando a sílaba tônica das palavras",
      "curriculumCode": "EF04LP41",
      "description": "Identificação da sílaba tônica de palavras presentes em textos, reconhecendo qual sílaba é pronunciada com mais força.",
      "materials": ["Lista de palavras de um texto trabalhado", "Folha para separação silábica", "Lápis"],
      "steps": [
        "Escolher palavras de um texto já lido pela turma.",
        "Bater palmas junto com a pronúncia de cada palavra para perceber a sílaba mais forte.",
        "Separar as palavras em sílabas e marcar qual delas é a tônica.",
        "Em duplas, classificar as palavras conforme a posição da sílaba tônica.",
        "Praticar com novas palavras sugeridas pelos próprios alunos."
      ],
      "classScript": [
        "Escolha uma palavra do texto já lido (por exemplo, 'boneca') e peça que a turma toda bata uma palma para cada sílaba enquanto pronuncia devagar: bo-ne-ca.",
        "Pergunte: 'Qual dessas palmas veio mais forte, com mais força na voz?' — ajude a perceber que é na sílaba 'ne'.",
        "Explique: 'essa sílaba pronunciada com mais força se chama sílaba tônica' e escreva a palavra na lousa com a sílaba tônica destacada em letra maior ou em negrito.",
        "Repita o processo com mais duas ou três palavras do texto trabalhado, sempre batendo palmas e perguntando qual sílaba veio mais forte.",
        "Distribua a folha para separação silábica e a lista de palavras do texto, pedindo que cada aluno separe as palavras em sílabas, sozinho, batendo palmas baixinho se precisar de ajuda.",
        "Circule perguntando 'você já sabe qual dessas sílabas é a mais forte? Bate palma de novo para conferir'.",
        "Peça que marquem com um círculo ou grifo a sílaba tônica de cada palavra separada.",
        "Organize duplas para trocarem as folhas e classificarem juntas as palavras conforme a posição da sílaba tônica (primeira, do meio, última sílaba), comparando os resultados.",
        "Registro final: peça que a turma sugira novas palavras do vocabulário do dia a dia, pratique a separação e a marcação da tônica coletivamente na lousa, e cada aluno registra na folha a lista final de palavras separadas com a sílaba tônica indicada."
      ]
    },
    {
      "theme": "Relacionando acento gráfico e sílaba tônica",
      "curriculumCode": "EF04LP42",
      "description": "Relação entre a presença do acento gráfico e a sílaba tônica da palavra, compreendendo por que certas palavras recebem acento.",
      "materials": ["Lista de palavras acentuadas e não acentuadas", "Folha de classificação", "Lápis"],
      "steps": [
        "Apresentar pares de palavras, uma acentuada e outra não, e pedir que identifiquem a sílaba tônica de cada uma.",
        "Discutir por que uma recebeu acento gráfico e a outra não.",
        "Em duplas, classificar uma lista de palavras entre acentuadas e não acentuadas, indicando a sílaba tônica.",
        "Verificar as classificações em conjunto, corrigindo eventuais dúvidas.",
        "Escrever frases usando corretamente algumas das palavras acentuadas estudadas."
      ],
      "classScript": [
        "Escreva na lousa um par de palavras, uma com acento e outra sem (por exemplo, 'sábia' e 'sabia') e peça que a turma pronuncie as duas em voz alta, percebendo a diferença de som.",
        "Pergunte: 'A sílaba mais forte fica no mesmo lugar nas duas palavras, ou muda?' — leve a turma a perceber que o acento gráfico aparece justamente para marcar onde a força cai quando isso foge do padrão mais comum.",
        "Apresente outro par (por exemplo, 'fábrica' e uma palavra comum sem acento como 'menina') e repita a pergunta, reforçando a relação entre o acento gráfico e a sílaba tônica.",
        "Explique de forma simples: 'o acento gráfico é como uma pista escrita que avisa: preste atenção, a força dessa palavra está aqui'.",
        "Distribua a lista de palavras acentuadas e não acentuadas e a folha de classificação, pedindo que, em duplas, classifiquem cada palavra em dois grupos (com acento / sem acento) e marquem a sílaba tônica de cada uma.",
        "Circule perguntando 'nessa palavra sem acento, você ainda consegue dizer qual é a sílaba mais forte, só de pronunciar?' — reforçando que toda palavra tem tônica, mas nem toda tônica precisa de acento escrito.",
        "Reúna a turma para verificar as classificações em conjunto, corrigindo na lousa os casos que gerarem dúvida.",
        "Peça que cada aluno escreva duas frases usando corretamente palavras acentuadas estudadas na aula, prestando atenção em não esquecer o acento.",
        "Registro final: cada aluno entrega a folha de classificação preenchida e as duas frases escritas com as palavras acentuadas."
      ]
    },
    {
      "theme": "Escrevendo palavras regulares contextuais (M/N, R/RR, O/U)",
      "curriculumCode": "EF04LP43",
      "description": "Escrita convencional e autônoma de palavras classificadas como regulares contextuais, como aquelas que envolvem as alternâncias M/N, R/RR e O/U.",
      "materials": ["Lista de palavras regulares contextuais", "Ficha de ditado", "Lápis"],
      "steps": [
        "Apresentar exemplos de palavras com M antes de P/B, R/RR entre vogais, e O/U em final de palavra.",
        "Explicar coletivamente a regra que rege cada caso.",
        "Realizar um ditado curto com palavras desses tipos.",
        "Corrigir o ditado em conjunto, retomando a regra sempre que houver erro.",
        "Propor que os alunos criem frases usando algumas das palavras estudadas."
      ],
      "classScript": [
        "Escreva na lousa duas colunas: 'campo' e 'canpo' e pergunte 'qual dessas está escrita do jeito certo? Por que antes de P sempre usamos M e nunca N?' — apresentando a regra do M antes de P/B.",
        "Escreva um novo exemplo, como 'bambu', e peça que a turma tente explicar a regra com as próprias palavras antes de você confirmar.",
        "Escreva na lousa 'carro' e 'caro' lado a lado e pergunte: 'essas palavras têm o mesmo som? O que muda no significado quando dobramos o R entre vogais?' — mostrando que R/RR entre vogais muda o som e o sentido.",
        "Escreva na lousa 'menino' e pergunte se poderia terminar em U ('meninu'), levando a turma a perceber que, mesmo o som às vezes parecer com U no final, escrevemos O — apresentando a regra do O/U em final de palavra.",
        "Peça que a turma dê mais um exemplo oral de cada uma das três regras (M/N, R/RR, O/U) antes de seguir para a prática escrita.",
        "Distribua a ficha de ditado e avise que vai ditar palavras dos três tipos estudados, pedindo atenção em qual regra se aplica a cada uma.",
        "Realize o ditado, lendo pausadamente e repetindo cada palavra uma vez se necessário.",
        "Corrija o ditado coletivamente na lousa, escrevendo a palavra certa e perguntando, a cada erro encontrado, 'qual das três regras que vimos hoje se aplica a essa palavra?'",
        "Registro final: cada aluno cria e escreve no caderno duas frases usando palavras estudadas na aula, aplicando corretamente pelo menos uma das regras trabalhadas."
      ]
    },
    {
      "theme": "Investigando palavras regulares morfológico-gramaticais",
      "curriculumCode": "EF04LP44",
      "description": "Análise de inventários de palavras ligadas a categorias gramaticais, reconhecendo que o princípio gerativo da língua ajuda a entender a grafia — como substantivos terminados em ICE, verbos em ISSE, adjetivos em OSO/OSA ou ES/ESA, e substantivos derivados com sufixo EZA.",
      "materials": ["Lista de palavras organizadas por terminação (ICE, ISSE, OSO/OSA, EZA)", "Folha de classificação", "Lápis"],
      "steps": [
        "Apresentar grupos de palavras com terminações semelhantes (por exemplo, palavras terminadas em OSO/OSA).",
        "Observar juntos o que essas palavras têm em comum na categoria gramatical (adjetivos, substantivos).",
        "Em duplas, classificar uma nova lista de palavras conforme a terminação e a categoria gramatical.",
        "Discutir como reconhecer o padrão ajuda a escrever novas palavras semelhantes.",
        "Criar frases usando palavras de diferentes grupos estudados."
      ],
      "classScript": [
        "Escreva na lousa um grupo de palavras terminadas em OSO/OSA (gostoso, cheiroso, gostosa, cheirosa) e pergunte: 'O que essas palavras têm em comum na forma como terminam? E no que elas fazem na frase — descrevem alguma coisa?'",
        "Explique que são adjetivos, e que sempre que uma palavra terminar assim, vai ser escrita com S, não com Z — reforçando que aprender o padrão ajuda a escrever palavras novas que nunca viram escritas antes.",
        "Repita rapidamente o mesmo processo para outro grupo, por exemplo palavras terminadas em EZA (limpeza, beleza, pobreza), perguntando 'o que essas palavras têm em comum? São nomes de quê — ações, qualidades, coisas?'",
        "Se houver tempo, apresente também rapidamente exemplos de ICE (por exemplo, 'aprendiz' e derivados) ou ISSE (formas verbais como 'quisesse', 'fizesse'), sempre perguntando o que os exemplos têm em comum antes de dar a regra.",
        "Distribua a lista de palavras organizadas por terminação e a folha de classificação, pedindo que em duplas classifiquem as palavras conforme a terminação e digam se são substantivos, adjetivos ou verbos.",
        "Circule perguntando 'essa palavra que vocês classificaram, o que ela está fazendo na frase — descrevendo algo, nomeando algo, indicando uma ação?' para reforçar a ligação entre terminação e categoria gramatical.",
        "Reúna a turma e pergunte: 'se vocês encontrassem uma palavra nova, nunca vista, terminada assim, vocês já saberiam de que jeito escrever ela? Por quê?' — discutindo o valor de reconhecer o padrão.",
        "Peça que cada aluno crie uma frase usando uma palavra de cada grupo estudado (pelo menos dois grupos diferentes).",
        "Registro final: cada aluno entrega a folha de classificação preenchida e as frases criadas, evidenciando o uso correto das terminações estudadas."
      ]
    },
    {
      "theme": "Escrevendo palavras com flexões em ÃO/AM e coletivos",
      "curriculumCode": "EF04LP45",
      "description": "Escrita de palavras com flexões verbais em que ocorrem as terminações ÃO e AM, além de substantivos coletivos.",
      "materials": ["Lista de verbos flexionados com ÃO e AM", "Lista de substantivos coletivos", "Lápis"],
      "steps": [
        "Apresentar exemplos de verbos no futuro ou terceira pessoa do plural terminados em ÃO e AM.",
        "Discutir a diferença de uso entre essas terminações com exemplos de frases.",
        "Apresentar substantivos coletivos (cardume, enxame, matilha) e seus significados.",
        "Em duplas, escrever frases usando corretamente verbos com ÃO/AM e substantivos coletivos.",
        "Corrigir coletivamente as frases produzidas."
      ],
      "classScript": [
        "Escreva na lousa duas frases: 'ela cantará amanhã' e 'eles cantaram ontem' e pergunte: 'qual dessas frases fala de algo que ainda vai acontecer, e qual fala de algo que já aconteceu?'",
        "Aponte as terminações ÃO e AM nas duas palavras e pergunte: 'o que muda entre elas — é só uma letra, mas o sentido do tempo muda completamente. Percebem isso?'",
        "Peça que a turma invente oralmente mais um par de frases, uma no futuro terminada em ÃO e outra no passado terminada em AM, com outro verbo.",
        "Escreva na lousa a palavra 'cardume' e pergunte: 'alguém sabe o que essa palavra significa? De quais animais estamos falando?' — leve a turma a perceber que é um grupo de peixes.",
        "Apresente mais dois substantivos coletivos (enxame, matilha) da mesma forma, perguntando o significado antes de confirmar, e relacionando com imagens ou situações conhecidas (enxame de abelhas, matilha de lobos ou cães).",
        "Organize duplas e distribua a lista de verbos com ÃO/AM e a lista de substantivos coletivos, pedindo que escrevam, juntos, quatro frases: duas usando corretamente verbos com ÃO ou AM, e duas usando substantivos coletivos.",
        "Circule perguntando 'nessa frase, o verbo está indicando algo que já aconteceu ou que ainda vai acontecer? A terminação que vocês escolheram combina com isso?'",
        "Reúna a turma e peça que algumas duplas leiam suas frases em voz alta, com os colegas conferindo se a escrita está correta.",
        "Registro final: corrija coletivamente as frases produzidas na lousa, e cada dupla registra no caderno a versão final corrigida das quatro frases."
      ]
    },
    {
      "theme": "Escrevendo palavras irregulares com a letra X",
      "curriculumCode": "EF04LP46",
      "description": "Análise e escrita convencional de palavras irregulares em que a letra X apresenta sons diferentes, registrando descobertas para consulta futura em momentos de produção de texto.",
      "materials": ["Lista de palavras com X de sons diferentes", "Caderno de descobertas ortográficas", "Lápis"],
      "steps": [
        "Apresentar palavras com X representando sons diferentes (xarope, exame, táxi, sintaxe).",
        "Ler as palavras em voz alta e perceber junto com a turma os diferentes sons do X.",
        "Classificar as palavras em grupos conforme o som do X.",
        "Registrar essas descobertas em um caderno de consulta que poderá ser usado em produções futuras.",
        "Praticar a escrita das palavras estudadas em um ditado."
      ],
      "classScript": [
        "Escreva na lousa as palavras 'xarope', 'exame', 'táxi' e 'sintaxe' e peça que a turma leia cada uma em voz alta, prestando atenção no som que o X faz em cada uma.",
        "Pergunte: 'O X soa igual nessas quatro palavras, ou é diferente em cada uma?' — deixe que percebam que soa como 'ch' em xarope, como 'z' em exame, como 'cs' em táxi e como 's' em sintaxe.",
        "Explique: 'essa é uma letra bem irregular — não tem uma regra fixa que sempre funciona, por isso precisamos ir descobrindo e guardando essas palavras conforme aprendemos'.",
        "Distribua a lista de palavras com X de sons diferentes e peça que, em duplas, leiam cada palavra em voz alta e decidam em qual dos quatro grupos de som ela se encaixa.",
        "Circule ouvindo as duplas pronunciarem as palavras, ajudando quando houver dúvida sobre qual som o X está fazendo.",
        "Reúna a turma e monte coletivamente na lousa quatro colunas (som de CH, som de Z, som de CS, som de S) preenchidas com as palavras classificadas pelas duplas.",
        "Explique que essas descobertas vão para o caderno de descobertas ortográficas, um registro que a turma pode consultar sempre que tiver dúvida ao escrever uma palavra com X numa produção de texto futura.",
        "Realize um ditado curto com algumas das palavras estudadas, lendo pausadamente cada uma.",
        "Registro final: corrija o ditado coletivamente e cada aluno copia as quatro colunas de palavras classificadas por som do X no caderno de descobertas ortográficas, para consulta futura."
      ]
    },
    {
      "theme": "Dividindo sílabas corretamente no final da linha",
      "curriculumCode": "EF04LP47",
      "description": "Análise da divisão silábica de palavras no final da linha (translineação), observando a regra geral de divisão, a duplicidade de consoantes e o princípio de não deixar uma letra sozinha no início ou fim da linha.",
      "materials": ["Texto impresso com palavras divididas no final da linha", "Folha pautada estreita para praticar translineação", "Lápis"],
      "steps": [
        "Mostrar exemplos de palavras divididas corretamente e incorretamente no final da linha de um texto.",
        "Explicar a regra de não deixar uma única letra isolada no início ou fim da linha.",
        "Em duplas, os alunos praticam dividir uma lista de palavras em sílabas, indicando onde poderiam ser cortadas na linha.",
        "Copiar um pequeno texto em uma folha estreita, praticando a translineação correta das palavras.",
        "Corrigir coletivamente os casos de dúvida, retomando a regra sempre que necessário."
      ],
      "classScript": [
        "Mostre um texto impresso com uma palavra dividida corretamente no final da linha (com hífen entre sílabas) e pergunte: 'Por que vocês acham que essa palavra foi cortada bem aqui, e não em outro lugar?'",
        "Mostre um exemplo incorreto (uma letra sozinha ficando isolada no início ou fim da linha, como 'a-brigo' cortando de um jeito estranho) e pergunte: 'esse corte ficou estranho — o que está errado aqui?'",
        "Explique a regra: sempre dividimos no limite entre sílabas, e nunca podemos deixar uma única letra sozinha, isolada, no início ou no final da linha.",
        "Escreva na lousa três ou quatro palavras (por exemplo, 'amigo', 'igreja', 'já') e peça que a turma tente dividi-las em sílabas corretamente, discutindo onde a divisão poderia ou não acontecer no final de uma linha.",
        "Distribua a lista de palavras e organize duplas para praticarem a divisão silábica, indicando com um traço onde cada palavra poderia ser cortada se estivesse no final de uma linha.",
        "Circule perguntando 'esse corte que vocês fizeram deixa alguma letra sozinha? Se deixar, precisamos ajustar'.",
        "Distribua a folha pautada estreita e peça que cada aluno copie um pequeno texto nela, praticando de verdade a translineação sempre que uma palavra não couber inteira na linha.",
        "Circule observando os casos reais de corte que foram aparecendo na cópia, ajudando individualmente quando alguém cortar errado.",
        "Registro final: reúna a turma para corrigir coletivamente os casos de dúvida encontrados durante a cópia, retomando a regra sempre que necessário, e cada aluno entrega a folha pautada com o texto copiado e corretamente translineado."
      ]
    }
  ],
  matematica: [
    {
      "theme": "Lendo, escrevendo e comparando números naturais na reta numerada",
      "curriculumCode": "EF04M01",
      "description": "Leitura, escrita, comparação e ordenação de números naturais, observando regularidades do sistema de numeração decimal e localizando-os na reta numerada.",
      "materials": ["Reta numerada em cartaz", "Cartões com números", "Lousa e giz/caneta"],
      "steps": [
        "Apresentar uma reta numerada grande na sala e discutir como os números estão organizados nela.",
        "Distribuir cartões com números naturais para os alunos posicionarem na reta.",
        "Propor comparações entre pares de números usando os sinais > e <.",
        "Discutir em grupo quais regularidades aparecem ao passar de uma dezena ou centena para outra.",
        "Registrar no caderno uma lista de números ordenados do menor para o maior."
      ],
      "classScript": [
        "Prenda ou desenhe uma reta numerada grande na parede, com marcações visíveis de dezena em dezena.",
        "Pergunte: 'Por que os números estão nessa ordem? O que acontece quando passamos de 99 para 100?' Deixe a turma levantar hipóteses antes de confirmar.",
        "Distribua cartões com números naturais variados (alguns próximos, outros bem distantes) e chame alunos, um de cada vez, para posicionar seu cartão na reta, justificando o lugar escolhido.",
        "Escreva na lousa pares de números (ex.: 347 e 374) e peça que a turma decida coletivamente qual sinal (> ou <) entra entre eles, levantando a mão para votar.",
        "Circule pela sala perguntando a duplas específicas 'o que muda entre uma dezena e a próxima?' para puxar a percepção das regularidades do sistema decimal.",
        "Reúna a turma e registre coletivamente na lousa as regularidades percebidas (ex.: 'a casa da dezena aumenta 1 a cada 10 números').",
        "Feche pedindo que cada aluno escreva no caderno uma lista própria de 8 números embaralhados, ordenados do menor para o maior — essa lista é o registro individual da aula."
      ]
    },
    {
      "theme": "Compondo e decompondo números naturais",
      "curriculumCode": "EF04M02",
      "description": "Composição e decomposição de números naturais em unidades, dezenas, centenas e milhares.",
      "materials": ["Material dourado ou fichas de valor posicional", "Quadro de valor de lugar", "Lousa"],
      "steps": [
        "Relembrar com a turma o que são unidades, dezenas, centenas e milhares.",
        "Usar material dourado para representar um número dado pelo professor.",
        "Pedir que os alunos decomponham números em uma tabela de valor posicional.",
        "Propor o desafio de recompor um número a partir de suas partes decompostas.",
        "Fechar com um jogo em duplas de decompor um número para o colega adivinhar."
      ],
      "classScript": [
        "Relembre com a turma as colunas de unidade, dezena, centena e milhar, desenhando um quadro de valor posicional na lousa.",
        "Escreva o número 2.845 na lousa e pergunte: 'quantos milhares, centenas, dezenas e unidades ele tem?'",
        "Distribua material dourado (ou fichas) em duplas e peça que representem fisicamente o número 2.845 usando as peças.",
        "Circule pela sala conferindo se cada dupla separou corretamente 2 milhares, 8 centenas, 4 dezenas e 5 unidades.",
        "Proponha outros números (ex.: 1.360 e 4.007) para as duplas decomporem, chamando atenção para o zero nas centenas de 4.007.",
        "Organize um desafio: um aluno decompõe um número em voz alta (ex.: '3 centenas, 5 dezenas e 2 unidades') e o colega deve descobrir e escrever o número composto.",
        "Feche registrando na lousa, junto com a turma, dois ou três exemplos de decomposição completa.",
        "Peça que cada aluno escreva no caderno a decomposição de três números diferentes escolhidos por você, encerrando com o registro individual."
      ]
    },
    {
      "theme": "Recitação oral de sequências numéricas",
      "curriculumCode": "EF04M03",
      "description": "Recitação oral de sequências numéricas em escala ascendente e descendente, a partir de qualquer número natural.",
      "materials": ["Bola ou objeto para passar entre os alunos", "Cronômetro", "Lousa"],
      "steps": [
        "Formar uma roda e explicar a dinâmica de contar em voz alta a partir de um número escolhido.",
        "Praticar a contagem ascendente, cada aluno dizendo o próximo número.",
        "Repetir a atividade com contagem descendente.",
        "Variar o ponto de partida e o intervalo da contagem (de 2 em 2, de 5 em 5).",
        "Encerrar registrando no caderno as sequências trabalhadas."
      ],
      "classScript": [
        "Organize a turma em um círculo e explique a dinâmica: ao receber a bolinha, o aluno diz o próximo número da contagem e passa adiante.",
        "Comece a contagem ascendente a partir de um número escolhido pela turma, por exemplo 47, passando a bola de aluno em aluno.",
        "Cronometre uma rodada e desafie a turma a completar a sequência sem erros antes do tempo combinado acabar.",
        "Repita a atividade com contagem descendente, partindo de um número como 60 até chegar perto de zero.",
        "Varie o desafio propondo contagens de 2 em 2 (a partir de um número par ou ímpar) e depois de 5 em 5, perguntando 'qual será o próximo número?' antes de cada aluno responder.",
        "Pare a atividade em alguns momentos e pergunte: 'por que pulamos esses números? existe um padrão?' para levar a turma a perceber a regularidade.",
        "Encerre pedindo que cada aluno escreva no caderno duas sequências trabalhadas na roda (uma ascendente e uma descendente), indicando o intervalo usado em cada uma."
      ]
    },
    {
      "theme": "Estimativas e arredondamentos na resolução de problemas",
      "curriculumCode": "EF04M04",
      "description": "Resolução de problemas em que é necessário fazer estimativas ou arredondamentos de números naturais.",
      "materials": ["Folha de problemas impressos", "Calculadora (opcional)", "Lousa"],
      "steps": [
        "Apresentar uma situação-problema do cotidiano que envolva quantidades grandes.",
        "Discutir com a turma quando é útil estimar em vez de calcular o valor exato.",
        "Ensinar a técnica de arredondar números para a dezena ou centena mais próxima.",
        "Propor exercícios em duplas para estimar resultados antes de calcular.",
        "Comparar as estimativas com os resultados exatos e discutir as diferenças."
      ],
      "classScript": [
        "Apresente uma situação-problema real, como 'a escola comprou 289 lápis para distribuir entre as salas', e pergunte quantos lápis a turma acha que é 'mais ou menos'.",
        "Discuta com a turma quando faz sentido estimar em vez de calcular exatamente (ex.: ao fazer compras rápidas de mercado).",
        "Ensine na lousa a regra de arredondamento: observar o algarismo seguinte para decidir se arredonda para cima ou para baixo, usando 289 como exemplo (arredonda para 290).",
        "Proponha mais exemplos de arredondamento para a dezena mais próxima (ex.: 452, 738) e depois para a centena mais próxima (ex.: 452 para 500).",
        "Divida a turma em duplas e distribua uma folha com 6 problemas do cotidiano; peça que primeiro estimem o resultado arredondando os números antes de calcular o valor exato.",
        "Circule pela sala perguntando 'sua estimativa ficou próxima do resultado exato? por quê?' para cada dupla.",
        "Corrija coletivamente comparando estimativas e resultados exatos na lousa, destacando os casos em que a estimativa ajudou a perceber um erro de cálculo.",
        "Feche pedindo que cada aluno registre no caderno, para dois problemas, a estimativa arredondada e o cálculo exato lado a lado."
      ]
    },
    {
      "theme": "Cálculo das quatro operações com estratégias pessoais",
      "curriculumCode": "EF04M05",
      "description": "Cálculo do resultado de adição, subtração, multiplicação e divisão de números naturais por meio de estratégias pessoais, cálculo mental, estimativas e tecnologias digitais.",
      "materials": ["Lousa", "Calculadora", "Folha de exercícios"],
      "steps": [
        "Propor uma operação e pedir que os alunos expliquem como a resolveriam de cabeça.",
        "Compartilhar diferentes estratégias pessoais usadas pela turma.",
        "Resolver problemas usando cálculo mental e depois conferir com a calculadora.",
        "Discutir qual estratégia foi mais rápida ou mais confiável.",
        "Registrar no caderno a estratégia preferida de cada aluno."
      ],
      "classScript": [
        "Escreva na lousa uma operação como 47 + 38 e peça que cada aluno resolva de cabeça, sem armar a conta, anotando em um rascunho como pensou.",
        "Chame três ou quatro alunos para explicarem oralmente sua estratégia (ex.: 'somei 40 mais 30 e depois 7 mais 8'), registrando cada raciocínio na lousa.",
        "Repita o processo com uma subtração (ex.: 82 - 25), uma multiplicação (ex.: 6 x 14) e uma divisão simples (ex.: 96 ÷ 4), sempre coletando estratégias diferentes da turma.",
        "Proponha que os alunos resolvam um novo problema mentalmente e depois confiram o resultado na calculadora, discutindo se bateu.",
        "Pergunte à turma: 'qual dessas estratégias foi mais rápida para vocês? qual foi mais fácil de explicar para o colega?'",
        "Organize duplas para trocarem entre si qual estratégia preferem usar em cada tipo de operação.",
        "Feche pedindo que cada aluno registre no caderno uma operação de cada tipo (adição, subtração, multiplicação e divisão) junto com a estratégia pessoal usada para resolvê-la."
      ]
    },
    {
      "theme": "Multiplicando e dividindo por 10, 100 e 1000",
      "curriculumCode": "EF04M06",
      "description": "Investigação de regularidades para multiplicar ou dividir um número natural por 10, por 100 e por 1.000, utilizando-as em cálculos.",
      "materials": ["Lousa", "Tabela de valores", "Calculadora"],
      "steps": [
        "Multiplicar números por 10 na lousa e observar o padrão nos resultados.",
        "Repetir a observação multiplicando por 100 e por 1.000.",
        "Investigar o padrão inverso ao dividir por 10, 100 e 1.000.",
        "Propor uma lista de cálculos para os alunos aplicarem a regularidade descoberta.",
        "Fechar com uma roda de conversa sobre a regra encontrada."
      ],
      "classScript": [
        "Escreva na lousa uma sequência de multiplicações por 10: 3 x 10, 12 x 10, 45 x 10, e peça que a turma calcule cada uma.",
        "Pergunte: 'o que vocês notam de igual em todos os resultados?' até a turma perceber que se acrescenta um zero.",
        "Repita o processo com multiplicações por 100 (ex.: 3 x 100, 12 x 100) e por 1.000, sempre registrando os resultados em coluna para facilitar a comparação visual.",
        "Investigue com a turma o padrão inverso, propondo divisões como 300 ÷ 10, 1.200 ÷ 100 e 5.000 ÷ 1.000, perguntando o que acontece com os zeros.",
        "Escreva a regra descoberta pela turma na lousa, com as próprias palavras dos alunos (ex.: 'para multiplicar por 100, aumento dois zeros').",
        "Distribua uma lista de cálculos variados envolvendo multiplicação e divisão por 10, 100 e 1.000 para os alunos aplicarem a regularidade sem fazer conta armada.",
        "Circule pela sala perguntando a alunos específicos para justificar como chegaram ao resultado sem calcular passo a passo.",
        "Encerre pedindo que cada aluno copie no caderno a regra descoberta e resolva mais três cálculos aplicando-a, como registro final."
      ]
    },
    {
      "theme": "Fatos básicos da multiplicação por 6, 7, 8 e 9",
      "curriculumCode": "EF04M07",
      "description": "Exploração dos fatos básicos da multiplicação de 0 a 10 por 6, 7, 8 e 9 e da divisão correspondente, para uso na solução de problemas e no cálculo mental ou escrito.",
      "materials": ["Tabuada ilustrada", "Fichas de multiplicação", "Jogo de cartas numeradas"],
      "steps": [
        "Revisar com a turma as tabuadas já conhecidas (até 5).",
        "Apresentar estratégias para memorizar as tabuadas de 6, 7, 8 e 9.",
        "Praticar com jogo de cartas em duplas, sorteando fatos de multiplicação.",
        "Relacionar cada multiplicação à divisão correspondente.",
        "Propor uma lista de problemas para aplicar os fatos básicos aprendidos."
      ],
      "classScript": [
        "Pergunte à turma quais tabuadas (até o 5) já dominam bem, fazendo uma rodada rápida de perguntas orais para revisar.",
        "Apresente estratégias para as tabuadas de 6, 7, 8 e 9, como usar a tabuada do 5 mais os grupos restantes (ex.: 6 x 7 = 5 x 7 + 1 x 7) e escreva o raciocínio na lousa.",
        "Organize duplas e distribua um jogo de cartas numeradas de 0 a 10; cada aluno sorteia duas cartas e multiplica os números, comparando com o resultado do colega.",
        "Circule pela sala observando quais fatos (ex.: 7 x 8, 6 x 9) geram mais dúvidas e retome esses casos coletivamente na lousa.",
        "Para cada multiplicação praticada, pergunte também a divisão correspondente (ex.: 'se 7 x 8 = 56, quanto é 56 ÷ 8?') para reforçar a relação entre as operações.",
        "Proponha uma lista de problemas curtos que usem esses fatos básicos, como 'uma caixa tem 8 lápis, quantos lápis há em 7 caixas?'",
        "Corrija coletivamente, destacando os fatos que a turma ainda precisa treinar mais.",
        "Feche com cada aluno escrevendo no caderno as tabuadas do 6, 7, 8 e 9 completas, como registro para estudo posterior."
      ]
    },
    {
      "theme": "Multiplicação e divisão por decomposição",
      "curriculumCode": "EF04M08",
      "description": "Cálculo de multiplicação e divisão usando decomposição de escritas numéricas e a propriedade distributiva em relação à adição/subtração.",
      "materials": ["Lousa", "Material dourado", "Folha de exercícios"],
      "steps": [
        "Mostrar como decompor um número em dezenas e unidades.",
        "Demonstrar na lousa a multiplicação por partes usando a propriedade distributiva.",
        "Praticar em duplas decompondo números para multiplicar.",
        "Aplicar a mesma ideia para resolver divisões.",
        "Resolver problemas usando a estratégia de decomposição."
      ],
      "classScript": [
        "Escreva na lousa o número 24 e mostre como decompô-lo em 20 + 4.",
        "Demonstre a multiplicação 24 x 3 decompondo: (20 x 3) + (4 x 3) = 60 + 12 = 72, registrando cada etapa visualmente na lousa.",
        "Peça que a turma resolva coletivamente outro exemplo, como 36 x 4, decompondo 36 em 30 + 6 antes de multiplicar.",
        "Organize duplas com material dourado ou fichas para representarem fisicamente a decomposição antes de multiplicar em pelo menos dois exercícios propostos.",
        "Aplique a mesma lógica a uma divisão, como 96 ÷ 4, decompondo 96 em 80 + 16 (ambos divisíveis por 4 de forma mais simples) e somando os resultados parciais.",
        "Circule pela sala perguntando a cada dupla 'por que vocês decompuseram o número dessa forma?' para verificar a compreensão da propriedade distributiva.",
        "Proponha uma lista final de problemas para os alunos resolverem individualmente usando a estratégia de decomposição.",
        "Feche pedindo que cada aluno registre no caderno, passo a passo, a resolução de uma multiplicação e uma divisão usando decomposição."
      ]
    },
    {
      "theme": "Técnicas convencionais das quatro operações",
      "curriculumCode": "EF04M09",
      "description": "Cálculo das quatro operações com números naturais utilizando uma técnica convencional, validando os resultados por estimativa, arredondamento ou tecnologias digitais.",
      "materials": ["Lousa", "Folha de exercícios", "Calculadora"],
      "steps": [
        "Ensinar o algoritmo convencional de uma das operações passo a passo.",
        "Resolver exemplos coletivamente na lousa.",
        "Propor exercícios individuais usando a técnica convencional.",
        "Pedir que os alunos validem seus resultados com estimativa ou calculadora.",
        "Corrigir coletivamente destacando erros comuns."
      ],
      "classScript": [
        "Escolha uma operação (ex.: subtração com reagrupamento, como 452 - 178) e ensine o algoritmo convencional passo a passo na lousa, explicando cada 'empréstimo'.",
        "Resolva coletivamente mais dois exemplos na lousa, pedindo que os alunos ditem o próximo passo antes de você escrever.",
        "Distribua uma folha de exercícios com a mesma operação armada, para os alunos praticarem individualmente a técnica convencional.",
        "Enquanto os alunos resolvem, circule pela sala observando erros recorrentes (ex.: esquecer de reagrupar) para retomar depois.",
        "Peça que, após resolver cada conta, os alunos validem o resultado por estimativa (arredondando os números) ou conferindo na calculadora.",
        "Corrija coletivamente na lousa, escolhendo um exercício que teve mais erros e refazendo passo a passo com a turma.",
        "Destaque os erros comuns encontrados, escrevendo-os na lousa como 'atenção redobrada' para a turma revisar.",
        "Encerre pedindo que cada aluno registre no caderno duas contas resolvidas pela técnica convencional, com a validação (estimativa ou calculadora) anotada ao lado."
      ]
    },
    {
      "theme": "Problemas dos campos aditivo e multiplicativo",
      "curriculumCode": "EF04M10",
      "description": "Análise, interpretação e resolução de problemas com números naturais envolvendo os significados do campo aditivo (composição, transformação, comparação) e do multiplicativo (proporcionalidade, configuração retangular e combinatória).",
      "materials": ["Folha de problemas variados", "Lousa", "Fichas manipuláveis"],
      "steps": [
        "Apresentar um problema de composição e outro de comparação, discutindo as diferenças.",
        "Propor um problema de proporcionalidade, como preço por unidade.",
        "Trabalhar um problema de configuração retangular (fileiras e colunas).",
        "Explorar um problema simples de combinatória (combinações possíveis).",
        "Fechar comparando as estratégias usadas em cada tipo de problema."
      ],
      "classScript": [
        "Apresente um problema de composição (ex.: 'Maria tem 35 figurinhas e ganhou mais 18, com quantas ficou?') e outro de comparação (ex.: 'João tem 12 bolinhas a mais que Pedro, que tem 20; quantas Pedro tem ao todo?'), discutindo com a turma a diferença entre os dois tipos.",
        "Escreva na lousa as palavras-chave que ajudam a identificar cada tipo de problema (ganhou, a mais que, ficou com).",
        "Proponha um problema de proporcionalidade, como 'um lápis custa 2 reais, quanto custam 5 lápis?', pedindo que a turma explique o raciocínio.",
        "Trabalhe um problema de configuração retangular, como 'uma horta tem 4 fileiras com 6 pés de alface cada, quantos pés há ao todo?', desenhando a malha na lousa para visualizar.",
        "Explore um problema simples de combinatória, como 'quantas combinações de camiseta e short dá para formar com 3 camisetas e 2 shorts?', listando as possibilidades com a turma.",
        "Organize a turma em grupos, cada um recebendo um problema de tipo diferente para resolver e depois explicar aos colegas qual estratégia usou.",
        "Feche comparando na lousa as estratégias usadas em cada tipo de problema, destacando as diferenças entre pensar em adição e em multiplicação.",
        "Peça que cada aluno registre no caderno um problema de cada tipo (aditivo e multiplicativo) com a resolução completa."
      ]
    },
    {
      "theme": "Números racionais no cotidiano",
      "curriculumCode": "EF04M11",
      "description": "Reconhecimento da utilização de números racionais, nas formas fracionária e decimal, em situações do contexto diário.",
      "materials": ["Embalagens de produtos", "Recortes de jornal ou revista", "Lousa"],
      "steps": [
        "Trazer exemplos do cotidiano com números decimais e fracionários, como preços e medidas.",
        "Discutir onde esses números aparecem no dia a dia dos alunos.",
        "Classificar os exemplos trazidos em fração ou decimal.",
        "Propor a busca de outros exemplos em embalagens trazidas de casa.",
        "Registrar uma lista coletiva de usos dos números racionais."
      ],
      "classScript": [
        "Peça que os alunos tragam de casa embalagens de produtos ou recortes com preços e medidas (ex.: 'R$ 3,50', '1/2 litro').",
        "Espalhe os materiais trazidos em uma mesa e organize a turma em roda para observá-los.",
        "Pergunte: 'onde vocês já viram números como esses no dia a dia, além dessas embalagens?' para levantar exemplos (troco, receitas, resultados esportivos).",
        "Escreva na lousa duas colunas, 'fração' e 'decimal', e peça que a turma classifique os exemplos trazidos em cada coluna.",
        "Discuta casos que geram dúvida, como '1/2' versus '0,5', explicando que representam a mesma quantidade de formas diferentes.",
        "Organize duplas para procurarem, nos materiais disponíveis, pelo menos três novos exemplos de números racionais e classificá-los.",
        "Monte coletivamente na lousa uma lista final com os exemplos encontrados pela turma, separados por fração e decimal.",
        "Feche pedindo que cada aluno copie essa lista no caderno e acrescente mais dois exemplos próprios do seu dia a dia."
      ]
    },
    {
      "theme": "Leitura e escrita de números racionais",
      "curriculumCode": "EF04M12",
      "description": "Leitura e escrita de números racionais de uso frequente no cotidiano, representados na forma decimal ou fracionária.",
      "materials": ["Cartelas com números racionais", "Lousa", "Caderno"],
      "steps": [
        "Apresentar números decimais e fracionários simples na lousa.",
        "Praticar a leitura em voz alta desses números.",
        "Propor um ditado de números racionais para os alunos escreverem.",
        "Trabalhar em duplas com cartelas de leitura e escrita.",
        "Corrigir coletivamente destacando erros comuns de escrita."
      ],
      "classScript": [
        "Escreva na lousa números decimais simples (ex.: 2,5 / 0,75) e fracionários (ex.: 3/4 / 1/2) e pratique a leitura em voz alta com a turma.",
        "Pergunte como se lê cada número (ex.: '0,75' se lê 'setenta e cinco centésimos') e registre a forma correta na lousa.",
        "Faça um ditado: fale em voz alta números racionais (ex.: 'quatro inteiros e dois décimos') e peça que os alunos escrevam na forma decimal ou fracionária correspondente.",
        "Corrija o ditado coletivamente, destacando erros comuns de escrita (como confundir décimos com centésimos).",
        "Distribua cartelas com números racionais para duplas praticarem: um aluno lê o número da cartela e o colega escreve no caderno, depois trocam os papéis.",
        "Circule pela sala conferindo se as duplas estão lendo e escrevendo corretamente, retomando casos de dúvida.",
        "Feche com uma rodada em que alguns alunos leem seus números para a turma toda conferir.",
        "Peça que cada aluno registre no caderno cinco números racionais (misturando forma decimal e fracionária) junto com a leitura por extenso de cada um."
      ]
    },
    {
      "theme": "Comparando e ordenando números racionais",
      "curriculumCode": "EF04M13",
      "description": "Comparação e ordenação de números racionais de uso frequente na representação decimal.",
      "materials": ["Cartelas numeradas", "Reta numerada decimal", "Lousa"],
      "steps": [
        "Apresentar pares de números decimais para os alunos compararem.",
        "Ensinar a usar os sinais > e < com números decimais.",
        "Propor a ordenação de um conjunto de números decimais.",
        "Localizar números decimais em uma reta numerada.",
        "Fechar com um jogo de ordenar cartelas em duplas."
      ],
      "classScript": [
        "Escreva na lousa dois números decimais, como 3,4 e 3,25, e pergunte qual é maior, deixando a turma discutir antes de confirmar.",
        "Ensine a estratégia de comparar casa por casa (inteiros, depois décimos, depois centésimos) usando o exemplo da lousa.",
        "Pratique com mais pares de números decimais (ex.: 5,08 e 5,8), destacando casos em que o número com menos algarismos pode ser maior.",
        "Introduza os sinais > e < aplicados a esses números, registrando as comparações praticadas na lousa.",
        "Distribua um conjunto de cartelas com números decimais para cada dupla e peça que os ordenem do menor para o maior sobre a mesa.",
        "Desenhe uma reta numerada decimal na lousa (ex.: de 0 a 5, com marcações de décimo em décimo) e chame alunos para posicionar alguns dos números trabalhados.",
        "Organize um jogo rápido em duplas: cada aluno sorteia cartelas e monta a sequência ordenada mais rápido que o colega.",
        "Feche pedindo que cada aluno registre no caderno uma lista de 6 números decimais ordenados do menor para o maior, escolhidos por ele mesmo."
      ]
    },
    {
      "theme": "Sistema decimal na representação de números racionais",
      "curriculumCode": "EF04M14",
      "description": "Compreensão das regras do sistema de numeração decimal para leitura e representação dos números racionais na forma decimal.",
      "materials": ["Quadro de valor posicional decimal", "Lousa", "Material dourado adaptado"],
      "steps": [
        "Revisar o sistema de valor posicional com números naturais.",
        "Estender a discussão para as casas decimais (décimos, centésimos).",
        "Representar números decimais no quadro de valor posicional.",
        "Propor exercícios de leitura e escrita usando o quadro.",
        "Fechar relacionando os decimais ao sistema monetário (reais e centavos)."
      ],
      "classScript": [
        "Revise rapidamente com a turma o quadro de valor posicional para números naturais (unidade, dezena, centena).",
        "Estenda o quadro na lousa acrescentando as colunas de décimos e centésimos à direita da vírgula.",
        "Escreva um número decimal, como 4,27, e peça que a turma identifique quantos inteiros, décimos e centésimos ele tem.",
        "Use material dourado adaptado (ou desenhos) para representar visualmente um número decimal, mostrando que o décimo é uma parte menor que a unidade.",
        "Proponha exercícios em que os alunos preenchem o quadro de valor posicional decimal com números dados por você.",
        "Relacione os decimais ao sistema monetário, perguntando 'quantos reais e quantos centavos são R$ 4,27?' para ancorar o conceito em algo familiar.",
        "Circule pela sala conferindo o preenchimento dos quadros e retomando coletivamente os casos de dúvida.",
        "Encerre pedindo que cada aluno registre no caderno o quadro de valor posicional preenchido para dois números decimais diferentes."
      ]
    },
    {
      "theme": "Sequências numéricas recursivas com múltiplos",
      "curriculumCode": "EF04M15",
      "description": "Exploração de regularidades em sequências numéricas recursivas, compostas por múltiplos de um número natural.",
      "materials": ["Lousa", "Fichas numeradas", "Calculadora"],
      "steps": [
        "Apresentar uma sequência de múltiplos de um número, como 3, 6, 9...",
        "Pedir que os alunos identifiquem o padrão da sequência.",
        "Propor que continuem a sequência e criem outras semelhantes.",
        "Trabalhar em duplas criando sequências para os colegas descobrirem.",
        "Registrar as regularidades encontradas no caderno."
      ],
      "classScript": [
        "Escreva na lousa uma sequência de múltiplos de 3: 3, 6, 9, 12... e pergunte 'qual é o próximo número? como vocês descobriram?'",
        "Peça que a turma complete a sequência oralmente até um número combinado (ex.: até 30).",
        "Escreva outra sequência, agora de múltiplos de 4 ou 7, e peça que identifiquem o padrão sozinhos antes de compartilhar.",
        "Pergunte: 'o que essas sequências têm em comum? o que muda de um número para o outro?' para nomear a ideia de regularidade.",
        "Organize duplas: cada aluno cria uma sequência de múltiplos de um número à sua escolha e escreve os 5 primeiros termos em uma tirinha de papel.",
        "As duplas trocam as tirinhas entre si e tentam descobrir qual número gerou a sequência do colega, continuando-a por mais 3 termos.",
        "Socialize alguns casos na lousa, conferindo coletivamente se a sequência e a continuação estão corretas.",
        "Feche pedindo que cada aluno registre no caderno duas sequências de múltiplos diferentes (com pelo menos 6 termos cada) e explique o padrão encontrado."
      ]
    },
    {
      "theme": "Descobrindo o número desconhecido em uma igualdade",
      "curriculumCode": "EF04M16",
      "description": "Investigação do número desconhecido que torna verdadeira uma igualdade que envolve as operações fundamentais com números naturais.",
      "materials": ["Lousa", "Fichas com símbolo de incógnita", "Folha de exercícios"],
      "steps": [
        "Apresentar uma igualdade com um número desconhecido representado por um símbolo.",
        "Discutir estratégias para descobrir o valor desconhecido.",
        "Resolver exemplos coletivamente na lousa.",
        "Propor exercícios individuais com igualdades variadas.",
        "Corrigir em grupo, comparando as estratégias usadas."
      ],
      "classScript": [
        "Escreva na lousa uma igualdade com um número desconhecido representado por um símbolo, como 15 + ▢ = 23.",
        "Pergunte à turma: 'o que precisa entrar nesse quadrado para a conta ficar certa? como vocês pensaram?'",
        "Registre diferentes estratégias sugeridas pelos alunos, como contar para frente a partir de 15 ou fazer a operação inversa (23 - 15).",
        "Repita o processo com um exemplo de multiplicação, como ▢ x 4 = 32, e um de divisão, como 45 ÷ ▢ = 9, discutindo a operação inversa em cada caso.",
        "Distribua uma folha com igualdades variadas envolvendo as quatro operações para os alunos resolverem individualmente.",
        "Circule pela sala perguntando a alunos específicos qual operação inversa usaram para descobrir o valor desconhecido.",
        "Corrija coletivamente na lousa, pedindo que diferentes alunos expliquem como chegaram à resposta em cada item.",
        "Feche pedindo que cada aluno crie no caderno duas igualdades com número desconhecido e as resolva, registrando a estratégia usada."
      ]
    },
    {
      "theme": "Localização de pessoas e objetos em malhas quadriculadas",
      "curriculumCode": "EF04M17",
      "description": "Identificação, descrição e representação em malhas quadriculadas da posição de uma pessoa ou objeto.",
      "materials": ["Papel quadriculado", "Lápis de cor", "Objetos pequenos"],
      "steps": [
        "Desenhar uma malha quadriculada grande no chão ou na lousa.",
        "Posicionar objetos em pontos da malha e pedir que descrevam a localização.",
        "Propor que os alunos representem posições em papel quadriculado.",
        "Trabalhar em duplas dando instruções de localização um para o outro.",
        "Fechar com um desafio de encontrar um objeto escondido a partir das coordenadas."
      ],
      "classScript": [
        "Desenhe (ou marque com fita) uma malha quadriculada grande no chão da sala, numerando linhas e colunas.",
        "Posicione um objeto (ex.: um estojo) em um ponto da malha e pergunte: 'como vocês descreveriam onde ele está para alguém que não está vendo?'",
        "Registre na lousa as formas de descrição sugeridas pela turma, ajudando a padronizar (ex.: 'linha 3, coluna 5').",
        "Distribua papel quadriculado e peça que os alunos representem, em duplas, a posição de três objetos combinados por você.",
        "Organize um jogo em duplas: um aluno posiciona um objeto na malha do chão e dá instruções verbais de localização para o colega encontrá-lo.",
        "Circule pela sala observando se as descrições estão claras e retomando coletivamente casos de confusão.",
        "Proponha um desafio final: esconda um objeto em um ponto da malha e dê as coordenadas para a turma descobrir onde está.",
        "Feche pedindo que cada aluno registre no papel quadriculado a posição de dois objetos da sala, escrevendo por escrito como chegou até lá."
      ]
    },
    {
      "theme": "Movimentação e ângulos como mudança de direção",
      "curriculumCode": "EF04M18",
      "description": "Identificação, descrição e representação em malhas quadriculadas da movimentação de uma pessoa ou objeto, incluindo a ideia de ângulo como mudança de direção.",
      "materials": ["Papel quadriculado", "Giz de chão", "Objetos para deslocar"],
      "steps": [
        "Traçar um percurso em uma malha quadriculada desenhada no chão.",
        "Pedir que os alunos sigam comandos de movimento (frente, direita, esquerda).",
        "Introduzir a ideia de ângulo como a mudança de direção no percurso.",
        "Propor que registrem o percurso realizado em papel quadriculado.",
        "Trabalhar em duplas criando comandos de movimentação para o colega seguir."
      ],
      "classScript": [
        "Trace com giz de chão (ou fita) um percurso simples sobre uma malha quadriculada desenhada no chão da sala.",
        "Escolha um aluno para seguir comandos ditados pela turma: 'ande 3 casas para frente', 'vire à direita', 'ande mais 2 casas'.",
        "Pare o percurso no momento da virada e pergunte: 'o que aconteceu com a direção dele? isso é o que chamamos de ângulo — uma mudança de direção'.",
        "Repita a atividade com outros alunos, variando o percurso e incluindo viradas à esquerda e à direita.",
        "Organize duplas: um aluno cria uma sequência de comandos de movimento e ângulos, e o colega deve segui-los sobre uma malha desenhada no papel quadriculado.",
        "Peça que cada dupla registre no papel quadriculado o percurso realizado, marcando com uma seta onde ocorreram as mudanças de direção.",
        "Socialize alguns percursos criados, pedindo que a dupla explique para a turma toda onde e por que houve mudança de direção.",
        "Feche pedindo que cada aluno registre por escrito, no caderno, a sequência de comandos de um percurso e destaque quantas mudanças de direção (ângulos) ele teve."
      ]
    },
    {
      "theme": "Classificando e comparando polígonos",
      "curriculumCode": "EF04M19",
      "description": "Classificação e comparação de polígonos (triângulo, quadrado, retângulo, trapézio e paralelogramo) em relação aos lados e vértices.",
      "materials": ["Figuras geométricas de papel ou EVA", "Régua", "Lousa"],
      "steps": [
        "Apresentar modelos dos polígonos estudados.",
        "Contar e comparar o número de lados e vértices de cada figura.",
        "Medir o comprimento dos lados com a régua.",
        "Classificar as figuras em grupos segundo características comuns.",
        "Registrar em uma tabela as características de cada polígono."
      ],
      "classScript": [
        "Apresente modelos de triângulo, quadrado, retângulo, trapézio e paralelogramo recortados em papel ou EVA, espalhando-os sobre uma mesa central.",
        "Peça que a turma, em roda, observe e conte em voz alta quantos lados e quantos vértices cada figura tem.",
        "Escreva na lousa uma tabela com as colunas 'figura', 'número de lados' e 'número de vértices' e preencha coletivamente com os exemplos observados.",
        "Distribua réguas e peça que, em duplas, meçam o comprimento dos lados de duas figuras à escolha, comparando se os lados são iguais ou diferentes.",
        "Pergunte: 'o que faz um quadrado ser diferente de um retângulo, se os dois têm 4 lados e 4 vértices?' para aprofundar a comparação.",
        "Organize as figuras em grupos na mesa segundo um critério definido pela turma (ex.: 'lados todos iguais' ou 'tem lados paralelos'), discutindo os critérios escolhidos.",
        "Circule pela sala conferindo se as duplas completaram corretamente as medições e a tabela.",
        "Feche pedindo que cada aluno copie a tabela no caderno, preenchendo com os dados de pelo menos quatro polígonos diferentes."
      ]
    },
    {
      "theme": "Similaridades e diferenças entre figuras espaciais",
      "curriculumCode": "EF04M20",
      "description": "Exploração de similaridades e diferenças entre esferas, cilindros, cones, cubos, blocos retangulares, prismas e pirâmides de base triangular.",
      "materials": ["Embalagens e objetos com formas geométricas espaciais", "Sólidos geométricos de madeira ou plástico"],
      "steps": [
        "Trazer objetos do cotidiano com formatos geométricos espaciais.",
        "Manusear os sólidos geométricos, observando faces, arestas e vértices.",
        "Comparar em grupo as semelhanças e diferenças entre os sólidos.",
        "Classificar os objetos trazidos de acordo com o sólido correspondente.",
        "Registrar em desenho as características observadas de cada sólido."
      ],
      "classScript": [
        "Peça com antecedência que os alunos tragam embalagens do cotidiano (caixa de sabonete, lata, bola, embalagem de creme dental) e reúna também sólidos geométricos de madeira ou plástico.",
        "Espalhe os objetos sobre as mesas e organize a turma em pequenos grupos para manuseá-los livremente por alguns instantes.",
        "Peça que cada grupo observe e conte, em pelo menos dois sólidos, quantas faces, arestas e vértices consegue identificar.",
        "Pergunte: 'quais desses sólidos rolam? quais empilham fácil? por quê?' para levar a turma a perceber diferenças entre esferas, cilindros, cones, cubos, blocos retangulares, prismas e pirâmides.",
        "Escreva na lousa duas colunas, 'têm faces planas' e 'têm superfície curva', e peça que os grupos classifiquem os objetos trazidos em cada uma.",
        "Circule entre os grupos perguntando por que cada objeto foi colocado em determinada coluna, retomando casos de dúvida com a turma toda.",
        "Reúna a turma e monte coletivamente na lousa uma lista comparando semelhanças e diferenças entre pelo menos três pares de sólidos.",
        "Feche pedindo que cada aluno desenhe no caderno dois dos sólidos manuseados, escrevendo ao lado as características observadas (faces, arestas, se rola ou não)."
      ]
    },
    {
      "theme": "Planificação de figuras geométricas espaciais",
      "curriculumCode": "EF04M21",
      "description": "Associação de uma planificação à figura geométrica espacial correspondente (cubo, bloco retangular, pirâmide, cone e cilindro).",
      "materials": ["Moldes de planificação impressos", "Tesoura", "Cola", "Sólidos geométricos"],
      "steps": [
        "Mostrar um sólido geométrico e sua planificação correspondente.",
        "Distribuir moldes de planificação para os alunos recortarem.",
        "Montar os sólidos a partir das planificações recortadas.",
        "Comparar o sólido montado com o objeto original.",
        "Discutir em grupo como cada planificação se transforma no sólido."
      ],
      "classScript": [
        "Mostre um sólido geométrico (ex.: um cubo) fechado e, em seguida, sua planificação já montada, comparando os dois lado a lado.",
        "Pergunte: 'como essas partes planas se transformam nesse sólido? quantas faces vocês contam na planificação?'",
        "Distribua moldes impressos de planificações (cubo, bloco retangular, pirâmide, cone, cilindro) para os alunos, um tipo por dupla.",
        "Peça que cada dupla recorte cuidadosamente o molde pelas linhas indicadas, com a tesoura.",
        "Oriente a dobra e colagem das partes para montar o sólido correspondente, circulando pela sala para ajudar nas dobras mais difíceis.",
        "Depois de montado, peça que cada dupla compare seu sólido com o modelo original, verificando se as faces coincidem corretamente.",
        "Organize uma roda de apresentação em que cada dupla mostra o sólido montado e explica qual planificação usou.",
        "Feche pedindo que cada aluno registre no caderno, com um desenho, a planificação e o sólido correspondente que sua dupla montou."
      ]
    },
    {
      "theme": "Figuras planas nas faces de poliedros",
      "curriculumCode": "EF04M22",
      "description": "Identificação de triângulos, quadrados, retângulos e pentágonos nas faces de um poliedro.",
      "materials": ["Poliedros de madeira ou plástico", "Lousa", "Papel para registro"],
      "steps": [
        "Apresentar diferentes poliedros para observação da turma.",
        "Pedir que identifiquem as figuras planas presentes em cada face.",
        "Contar quantas faces de cada tipo o poliedro possui.",
        "Registrar em uma tabela as figuras encontradas em cada poliedro.",
        "Fechar com um jogo de adivinhação em que se descrevem as faces e o colega adivinha o poliedro."
      ],
      "classScript": [
        "Apresente diferentes poliedros de madeira ou plástico (cubo, pirâmide, prisma) para a turma observar de perto, passando-os entre os grupos.",
        "Pergunte: 'que formas planas vocês conseguem ver em cada face desse poliedro? são todas iguais?'",
        "Peça que os alunos identifiquem, em voz alta, triângulos, quadrados, retângulos e pentágonos presentes nas faces dos sólidos observados.",
        "Distribua papel para registro e peça que cada grupo escolha dois poliedros e conte quantas faces de cada tipo de figura plana eles têm.",
        "Circule pela sala conferindo as contagens, perguntando 'como vocês têm certeza de que essa face é um triângulo e não outra figura?'",
        "Monte coletivamente na lousa uma tabela com os poliedros observados e as figuras planas encontradas em cada um, com as respectivas quantidades.",
        "Feche com um jogo de adivinhação: um aluno descreve as faces de um poliedro (sem dizer o nome) e a turma tenta adivinhar qual sólido é.",
        "Peça que cada aluno registre no papel a tabela preenchida com pelo menos três poliedros analisados."
      ]
    },
    {
      "theme": "Ângulos retos e não retos em figuras poligonais",
      "curriculumCode": "EF04M23",
      "description": "Exploração de ângulos retos e não retos em figuras poligonais, utilizando diferentes procedimentos, com ou sem tecnologias digitais.",
      "materials": ["Molde de ângulo reto (esquadro ou canto de folha)", "Figuras poligonais impressas", "Lousa"],
      "steps": [
        "Apresentar o conceito de ângulo reto usando o canto de uma folha como referência.",
        "Verificar com o molde quais ângulos das figuras são retos.",
        "Classificar os ângulos das figuras poligonais em retos e não retos.",
        "Propor que os alunos desenhem figuras com ângulos retos e não retos.",
        "Fechar comparando os registros em grupo."
      ],
      "classScript": [
        "Mostre como usar o canto de uma folha de papel (ou um esquadro) como molde para verificar se um ângulo é reto.",
        "Peça que os alunos testem o molde em cantos da sala (quina da porta, da mesa) para se familiarizarem com o ângulo reto.",
        "Distribua figuras poligonais impressas com ângulos variados e peça que, em duplas, verifiquem cada ângulo com o molde, marcando com um X os retos e com uma bolinha os não retos.",
        "Circule pela sala perguntando a algumas duplas como decidiram se um ângulo era reto ou não.",
        "Peça que os alunos classifiquem as figuras completas em uma tabela: 'só ângulos retos', 'tem ângulos retos e não retos', 'nenhum ângulo reto'.",
        "Proponha que cada aluno desenhe, em uma folha, uma figura com pelo menos dois ângulos retos e outra com ângulos não retos.",
        "Reúna a turma e compare alguns desenhos, conferindo coletivamente com o molde se os ângulos indicados realmente são retos.",
        "Feche pedindo que cada aluno cole ou registre no caderno as duas figuras desenhadas, identificando por escrito quais ângulos são retos e quais não são."
      ]
    },
    {
      "theme": "Chances de ocorrência em eventos aleatórios",
      "curriculumCode": "EF04M24",
      "description": "Identificação, entre eventos aleatórios cotidianos, dos que têm maior chance de ocorrência, reconhecendo características de resultados mais prováveis.",
      "materials": ["Dado", "Moedas", "Saco com bolinhas coloridas"],
      "steps": [
        "Propor um sorteio simples com moeda ou dado e discutir os resultados possíveis.",
        "Perguntar quais resultados são mais ou menos prováveis antes de sortear.",
        "Realizar o experimento várias vezes e registrar os resultados.",
        "Comparar as previsões da turma com os resultados obtidos.",
        "Discutir em grupo o que significa mais provável e menos provável."
      ],
      "classScript": [
        "Mostre um dado e uma moeda e pergunte: 'se eu jogar essa moeda, o que pode acontecer? e o dado?' listando os resultados possíveis na lousa.",
        "Antes de sortear, pergunte à turma qual resultado eles acham mais provável de sair e registre as apostas na lousa.",
        "Realize o sorteio (moeda ou dado) 10 vezes seguidas, pedindo que um aluno registre os resultados em uma tabela na lousa.",
        "Repita com o saco de bolinhas coloridas, perguntando antes 'se tem mais bolinhas azuis que vermelhas, qual cor tem mais chance de sair?'",
        "Realize várias retiradas do saco, anotando os resultados e comparando com a previsão da turma.",
        "Compare os resultados obtidos com as apostas iniciais, perguntando: 'o que aconteceu com mais frequência? isso confirma o que vocês esperavam?'",
        "Discuta coletivamente o significado de 'mais provável' e 'menos provável', anotando as conclusões na lousa com exemplos dos próprios experimentos.",
        "Feche pedindo que cada aluno registre no caderno os resultados de um dos experimentos e escreva, com suas palavras, qual resultado era mais provável e por quê."
      ]
    },
    {
      "theme": "Interpretando tabelas e gráficos",
      "curriculumCode": "EF04M25",
      "description": "Interpretação, análise e resolução de problemas com dados apresentados em tabelas simples ou de dupla entrada, e em gráficos de colunas, barras, linhas e pictóricos.",
      "materials": ["Gráficos e tabelas impressos", "Lousa", "Folha de exercícios"],
      "steps": [
        "Apresentar uma tabela e um gráfico com o mesmo conjunto de dados.",
        "Discutir os elementos do gráfico, como título, legenda, eixos e fonte.",
        "Propor perguntas de interpretação sobre os dados apresentados.",
        "Resolver problemas que exigem comparar informações do gráfico.",
        "Fechar com uma roda de conversa sobre as conclusões tiradas dos dados."
      ],
      "classScript": [
        "Apresente uma tabela e um gráfico de colunas com o mesmo conjunto de dados (ex.: quantidade de alunos que preferem cada esporte).",
        "Aponte e nomeie os elementos do gráfico: título, eixos, legenda e fonte, perguntando 'para que serve cada uma dessas partes?'",
        "Faça perguntas de leitura direta, como 'qual esporte teve mais votos? quantos alunos escolheram natação?', conferindo as respostas na tabela e no gráfico.",
        "Avance para perguntas de comparação, como 'quantos alunos a mais preferem futebol do que vôlei?', que exigem calcular a partir dos dados.",
        "Distribua uma folha de exercícios com outro gráfico (de barras, linhas ou pictórico) para os alunos resolverem problemas de interpretação em duplas.",
        "Circule pela sala ajudando as duplas que têm dificuldade em localizar os valores exatos nos eixos do gráfico.",
        "Corrija coletivamente na lousa, pedindo que diferentes alunos expliquem como leram cada informação.",
        "Feche com uma roda de conversa sobre o que os dados revelam, e peça que cada aluno escreva no caderno duas conclusões tiradas do gráfico trabalhado."
      ]
    },
    {
      "theme": "Pesquisa, coleta e organização de dados",
      "curriculumCode": "EF04M26",
      "description": "Realização de pesquisa, coleta, classificação e organização de dados, comunicando os resultados por meio de gráficos de colunas ou barras.",
      "materials": ["Folha de registro de pesquisa", "Lousa", "Papel quadriculado para o gráfico"],
      "steps": [
        "Definir com a turma um tema simples de pesquisa, como a fruta preferida.",
        "Coletar os dados perguntando aos colegas da sala.",
        "Organizar os dados coletados em uma tabela.",
        "Construir um gráfico de colunas ou barras com os dados organizados.",
        "Apresentar os resultados da pesquisa para a turma."
      ],
      "classScript": [
        "Combine com a turma um tema simples de pesquisa, como a fruta preferida ou o esporte favorito, escrevendo as opções na lousa.",
        "Explique que cada aluno vai perguntar a fruta preferida de um número combinado de colegas (ex.: 8 colegas cada um).",
        "Distribua uma folha de registro simples para os alunos anotarem as respostas coletadas durante a circulação pela sala.",
        "Reúna a turma e organize coletivamente os dados coletados em uma tabela de frequência na lousa, contando quantos votos cada opção recebeu.",
        "Distribua papel quadriculado e ensine como transformar cada linha da tabela em uma coluna do gráfico, definindo juntos a escala (cada quadradinho vale 1 voto, por exemplo).",
        "Peça que cada aluno (ou dupla) construa seu próprio gráfico de colunas ou barras com os dados da turma.",
        "Circule pela sala conferindo se as alturas das colunas correspondem corretamente aos valores da tabela.",
        "Organize uma roda final em que alguns alunos apresentam seus gráficos para a turma, explicando o que os dados mostram, e todos registram a tabela e o gráfico completos no caderno."
      ]
    },
    {
      "theme": "Produzindo textos a partir de dados de pesquisa",
      "curriculumCode": "EF04M27",
      "description": "Produção de textos a partir da análise de dados apresentados por meio de tabelas e gráficos de colunas, barras e pictóricos.",
      "materials": ["Gráficos e tabelas da pesquisa realizada", "Folha para produção de texto"],
      "steps": [
        "Retomar os dados organizados em uma pesquisa anterior da turma.",
        "Discutir coletivamente o que os dados revelam.",
        "Orientar a escrita de um pequeno texto descrevendo as conclusões.",
        "Propor troca de textos entre duplas para leitura e sugestões.",
        "Socializar alguns textos produzidos com a turma."
      ],
      "classScript": [
        "Retome com a turma a tabela e o gráfico construídos na pesquisa anterior, desenhando novamente na lousa.",
        "Pergunte: 'o que esses dados nos contam sobre a turma? qual foi o resultado que mais chamou atenção?' registrando as ideias levantadas.",
        "Modele coletivamente, na lousa, o início de um texto que descreve os dados (ex.: 'Nossa turma pesquisou... o resultado mostrou que...').",
        "Explique que o texto deve citar pelo menos um número exato retirado da tabela ou do gráfico, não só opiniões gerais.",
        "Distribua folha para produção de texto e peça que cada aluno escreva individualmente um pequeno texto (5 a 8 linhas) descrevendo as conclusões da pesquisa.",
        "Organize duplas para trocarem os textos, lendo o do colega e sugerindo um número ou dado que poderia ser acrescentado para deixá-lo mais completo.",
        "Circule pela sala incentivando os ajustes sugeridos pelas duplas.",
        "Feche socializando dois ou três textos produzidos com a turma toda, e recolha os textos finais escritos por cada aluno como registro da produção."
      ]
    },
    {
      "theme": "Estimativa e medição de comprimento, massa e capacidade",
      "curriculumCode": "EF04M28",
      "description": "Estimativa e medição de grandezas utilizando a unidade de medida mais conveniente (centímetro, metro, quilômetro, grama, quilograma, litro e mililitro).",
      "materials": ["Fita métrica", "Balança", "Recipientes graduados"],
      "steps": [
        "Apresentar objetos para os alunos estimarem comprimento, massa ou capacidade.",
        "Medir os objetos usando os instrumentos adequados.",
        "Comparar as estimativas com as medidas reais.",
        "Discutir qual unidade de medida é mais conveniente para cada situação.",
        "Registrar os resultados em uma tabela de medidas."
      ],
      "classScript": [
        "Separe objetos variados pela sala (livro, mochila, garrafa de água, borracha) e peça que os alunos, em duplas, estimem o comprimento, a massa ou a capacidade de cada um antes de medir.",
        "Registre as estimativas da turma na lousa, em uma tabela com os nomes dos objetos.",
        "Distribua fita métrica, balança e recipientes graduados para as duplas medirem de fato os objetos estimados.",
        "Peça que cada dupla anote a medida real ao lado da estimativa, na mesma tabela.",
        "Compare coletivamente na lousa: quais estimativas ficaram próximas e quais ficaram bem diferentes da medida real?",
        "Pergunte: 'por que usamos centímetros para a borracha e metros para o comprimento da sala? por que gramas para a borracha e quilogramas para a mochila?' para discutir a unidade mais conveniente.",
        "Proponha mais um objeto desafio para medir com a unidade escolhida pela própria dupla, justificando a escolha.",
        "Feche pedindo que cada aluno registre no caderno a tabela com pelo menos quatro objetos, suas estimativas, medidas reais e a unidade usada em cada caso."
      ]
    },
    {
      "theme": "Relação entre grandeza e unidade de medida",
      "curriculumCode": "EF04M29",
      "description": "Exploração de situações que envolvam a relação de uma grandeza (comprimento, massa e capacidade) com uma unidade de medida.",
      "materials": ["Objetos variados", "Instrumentos de medida", "Lousa"],
      "steps": [
        "Apresentar uma situação-problema envolvendo a medição de uma grandeza.",
        "Discutir qual unidade de medida é adequada para a situação.",
        "Resolver o problema medindo ou calculando com a unidade escolhida.",
        "Propor variações do problema com outras grandezas.",
        "Fechar com uma síntese das unidades de medida trabalhadas."
      ],
      "classScript": [
        "Apresente uma situação-problema, como 'uma receita pede 250 ml de leite, mas só temos um copo que mede em litros; como faço?'",
        "Discuta com a turma qual grandeza está envolvida (capacidade) e qual unidade seria mais adequada para medir aquela quantidade.",
        "Resolva o problema coletivamente na lousa, relacionando a unidade escolhida com a grandeza medida.",
        "Proponha uma segunda situação envolvendo massa (ex.: 'uma bolsa de arroz de 5 kg, quantos pacotes de 1 kg cabem nela?') e uma terceira envolvendo comprimento (ex.: 'a distância da escola até a praça é medida em metros ou quilômetros?').",
        "Para cada situação, pergunte à turma: 'essa grandeza é comprimento, massa ou capacidade? qual unidade faz mais sentido usar aqui?'",
        "Organize duplas para resolverem mais dois problemas semelhantes, identificando a grandeza e a unidade antes de calcular.",
        "Corrija coletivamente, retomando os casos em que a unidade escolhida gerou confusão.",
        "Feche com uma síntese na lousa relacionando cada grandeza (comprimento, massa, capacidade) às suas unidades, e peça que os alunos copiem essa síntese no caderno."
      ]
    },
    {
      "theme": "Duração de intervalos de tempo",
      "curriculumCode": "EF04M30",
      "description": "Estimativa e cálculo da duração de um intervalo de tempo em horas e minutos, informando horário de início e de término.",
      "materials": ["Relógio analógico e digital", "Lousa", "Folha de exercícios"],
      "steps": [
        "Revisar a leitura de horas em relógios analógico e digital.",
        "Apresentar uma situação com horário de início e término de uma atividade.",
        "Calcular coletivamente a duração do intervalo de tempo.",
        "Propor exercícios individuais com diferentes intervalos.",
        "Corrigir em grupo, destacando as estratégias de cálculo usadas."
      ],
      "classScript": [
        "Mostre um relógio analógico e um digital e peça que a turma leia em voz alta o horário atual em ambos.",
        "Apresente uma situação, como 'a aula de educação física começou às 9h20 e terminou às 10h05, quanto tempo durou?'",
        "Demonstre na lousa uma estratégia para calcular a duração, contando primeiro até a hora cheia (de 9h20 até 10h00) e depois somando os minutos restantes.",
        "Repita o processo com outro exemplo em que o intervalo passa por mais de uma hora, como de 14h40 às 16h10.",
        "Distribua uma folha de exercícios com diferentes situações de horário de início e término para os alunos calcularem a duração individualmente.",
        "Circule pela sala ajudando alunos que têm dificuldade em passar da hora cheia, retomando a estratégia com o relógio se necessário.",
        "Corrija coletivamente na lousa, pedindo que diferentes alunos expliquem qual estratégia usaram para calcular cada duração.",
        "Feche pedindo que cada aluno registre no caderno duas situações do seu próprio dia (ex.: horário que acorda e que chega na escola) calculando a duração entre elas."
      ]
    },
    {
      "theme": "Conversões entre unidades de medida de tempo",
      "curriculumCode": "EF04M31",
      "description": "Exploração de conversões simples entre unidades de medida de tempo (dias e semanas, horas e dias, semanas e meses).",
      "materials": ["Calendário", "Lousa", "Folha de exercícios"],
      "steps": [
        "Observar um calendário e discutir a relação entre dias, semanas e meses.",
        "Praticar conversões simples entre essas unidades coletivamente.",
        "Propor problemas que envolvam conversão de horas para dias.",
        "Resolver em duplas exercícios de conversão de tempo.",
        "Fechar com uma roda de conversa sobre situações do cotidiano que usam essas conversões."
      ],
      "classScript": [
        "Mostre um calendário do mês atual e peça que a turma observe quantos dias tem uma semana e quantas semanas tem o mês.",
        "Pergunte: 'se um evento dura 2 semanas, quantos dias são?' e resolva coletivamente na lousa, multiplicando 7 por 2.",
        "Pratique mais conversões entre dias e semanas, e depois entre semanas e meses, sempre perguntando à turma antes de confirmar o cálculo.",
        "Proponha uma situação envolvendo horas e dias, como 'quantas horas tem um dia inteiro? e dois dias?', escrevendo o raciocínio na lousa.",
        "Organize duplas para resolverem uma lista de problemas de conversão (ex.: 'quantos dias há em 3 semanas?', 'quantas horas há em meio dia?').",
        "Circule pela sala conferindo as respostas e retomando coletivamente os casos de erro mais comuns.",
        "Feche com uma roda de conversa sobre situações do cotidiano da turma que usam essas conversões, como prazos de tarefas ou contagem para as férias.",
        "Peça que cada aluno registre no caderno três conversões de tempo resolvidas, escolhendo pelo menos uma situação do seu próprio cotidiano."
      ]
    },
    {
      "theme": "Valores decimais no sistema monetário brasileiro",
      "curriculumCode": "EF04M32",
      "description": "Resolução e elaboração de problemas envolvendo a representação decimal de valores no sistema monetário brasileiro.",
      "materials": ["Cédulas e moedas de brinquedo", "Lousa", "Folha de exercícios"],
      "steps": [
        "Apresentar cédulas e moedas, relacionando reais e centavos à notação decimal.",
        "Propor situações de compra e troco para calcular com valores decimais.",
        "Resolver problemas coletivamente na lousa.",
        "Pedir que os alunos elaborem seus próprios problemas com valores monetários.",
        "Trocar os problemas elaborados entre duplas para resolução."
      ],
      "classScript": [
        "Distribua cédulas e moedas de brinquedo entre os grupos e peça que identifiquem os valores de cada uma.",
        "Escreva na lousa a relação entre reais e centavos, mostrando como R$ 2,35 representa 2 reais e 35 centavos na notação decimal.",
        "Proponha uma situação de compra, como 'um lanche custa R$ 4,50 e você pagou com uma nota de R$ 10,00, quanto é o troco?', resolvendo coletivamente na lousa.",
        "Organize uma 'lojinha' simples na sala com produtos de brinquedo ou cartões de preços, para as duplas simularem compras e calcularem trocos usando o dinheiro de brinquedo.",
        "Circule pela sala conferindo os cálculos de troco de cada dupla, retomando coletivamente casos de erro comum.",
        "Peça que cada aluno elabore um problema próprio envolvendo compra e troco, com valores em reais e centavos.",
        "Organize a troca dos problemas elaborados entre duplas para que resolvam o problema criado pelo colega.",
        "Feche pedindo que cada aluno registre no caderno o problema que criou e a resolução do problema recebido do colega."
      ]
    },
    {
      "theme": "Perímetro como medida do contorno de figuras",
      "curriculumCode": "EF04M33",
      "description": "Compreensão do perímetro como a medida do contorno de uma figura plana.",
      "materials": ["Figuras planas de papel", "Régua", "Barbante"],
      "steps": [
        "Apresentar uma figura plana e perguntar como medir a volta dela.",
        "Usar barbante para contornar a figura e depois medir seu comprimento.",
        "Medir os lados da figura com régua e somar os valores.",
        "Comparar o resultado obtido com o barbante e com a régua.",
        "Registrar a definição de perímetro construída coletivamente."
      ],
      "classScript": [
        "Mostre uma figura plana de papel (ex.: um retângulo) e pergunte: 'como eu poderia medir a volta toda dessa figura, por fora?'",
        "Peça que um aluno contorne a figura com um pedaço de barbante, marcando onde o barbante se encontra.",
        "Estique o barbante e meça seu comprimento com a régua, registrando o valor na lousa como a medida do contorno.",
        "Em seguida, meça cada lado da figura separadamente com a régua e some os valores, comparando o resultado com a medida do barbante.",
        "Pergunte: 'os dois resultados bateram? por que medir os lados e somar dá o mesmo resultado que contornar com o barbante?'",
        "Repita a atividade com outra figura (um triângulo, por exemplo), agora com os alunos em duplas medindo e somando os lados sozinhos.",
        "Construa coletivamente na lousa, com as palavras da turma, a definição de perímetro como a soma das medidas de todos os lados de uma figura.",
        "Feche pedindo que cada aluno registre no caderno a definição construída e o cálculo do perímetro de duas figuras planas medidas na aula."
      ]
    },
    {
      "theme": "Calculando o perímetro em malhas quadriculadas",
      "curriculumCode": "EF04M34",
      "description": "Resolução e elaboração de problemas envolvendo o cálculo do perímetro de figuras desenhadas em malhas quadriculadas.",
      "materials": ["Papel quadriculado", "Lápis", "Régua"],
      "steps": [
        "Desenhar uma figura em malha quadriculada e contar os lados dos quadradinhos.",
        "Calcular o perímetro somando os lados contados.",
        "Propor que os alunos desenhem suas próprias figuras na malha.",
        "Trocar os desenhos em duplas para calcular o perímetro do colega.",
        "Corrigir coletivamente conferindo os cálculos."
      ],
      "classScript": [
        "Desenhe na lousa uma figura simples sobre uma malha quadriculada (ex.: um retângulo de 4 por 2 quadradinhos).",
        "Peça que a turma conte, em voz alta, quantos lados de quadradinho há em cada lado da figura.",
        "Some coletivamente os lados contados para calcular o perímetro total, registrando o cálculo passo a passo na lousa.",
        "Desenhe uma segunda figura mais irregular (em formato de L, por exemplo) e peça que os alunos, em duplas, contem e somem os lados sozinhos em papel quadriculado.",
        "Circule pela sala conferindo se as duplas estão contando corretamente os lados nos 'cantos' da figura, onde é mais fácil errar.",
        "Peça que cada aluno desenhe sua própria figura em papel quadriculado, com pelo menos 6 lados.",
        "Organize a troca dos desenhos entre duplas para que cada aluno calcule o perímetro da figura criada pelo colega.",
        "Feche pedindo que cada aluno registre no caderno sua figura desenhada, com o cálculo do perímetro conferido pelo colega ao lado."
      ]
    },
    {
      "theme": "Certo, provável e impossível em jogos",
      "curriculumCode": "EF04M35",
      "description": "Análise do que é certo, provável, pouco provável ou impossível de acontecer em um jogo.",
      "materials": ["Dado", "Cartas", "Roleta simples"],
      "steps": [
        "Propor um jogo simples de sorteio, como dado ou cartas.",
        "Antes de cada rodada, perguntar quais resultados são certos, prováveis ou impossíveis.",
        "Jogar e registrar os resultados obtidos.",
        "Comparar as previsões da turma com os resultados reais.",
        "Fechar discutindo os termos certo, provável e impossível com exemplos do jogo."
      ],
      "classScript": [
        "Proponha um jogo simples com dado (ex.: 'se sair número par, você ganha um ponto') e pergunte antes de começar: 'esse resultado é certo, provável, pouco provável ou impossível?'",
        "Registre na lousa as previsões da turma antes de cada rodada do jogo.",
        "Jogue algumas rodadas, anotando os resultados obtidos ao lado das previsões feitas.",
        "Proponha uma nova regra, agora impossível de ocorrer com o dado (ex.: 'sair o número 7'), e pergunte por que isso nunca vai acontecer.",
        "Repita o jogo usando cartas ou uma roleta simples, sempre perguntando antes: 'qual resultado é certo? qual é impossível? qual é só provável?'",
        "Compare, na lousa, as previsões da turma com os resultados reais obtidos em cada rodada do jogo.",
        "Discuta coletivamente a diferença entre os quatro termos (certo, provável, pouco provável, impossível), usando exemplos concretos do próprio jogo jogado em sala.",
        "Feche pedindo que cada aluno registre no caderno quatro situações do jogo, uma para cada termo trabalhado, explicando por que se encaixam ali."
      ]
    },
    {
      "theme": "Antecipando ocorrências para ganhar um jogo",
      "curriculumCode": "EF04M36",
      "description": "Antecipação das ocorrências que favorecem ganhar um jogo, justificando a escolha feita.",
      "materials": ["Jogo de tabuleiro simples ou dado", "Lápis para registro"],
      "steps": [
        "Apresentar um jogo com regras simples de sorteio.",
        "Pedir que os alunos discutam em duplas qual escolha aumenta a chance de ganhar.",
        "Jogar e observar se a estratégia escolhida funcionou.",
        "Registrar as justificativas dadas pelos alunos para suas escolhas.",
        "Socializar as estratégias mais eficazes encontradas pela turma."
      ],
      "classScript": [
        "Apresente um jogo com regras simples de sorteio (ex.: um jogo de tabuleiro em que se avança de acordo com o número do dado).",
        "Explique as regras completas e pergunte: 'existe alguma escolha que vocês podem fazer antes de jogar que aumente a chance de ganhar?'",
        "Organize a turma em duplas e dê um tempo para discutirem e decidirem, juntos, qual estratégia vão usar antes de começar a jogar.",
        "Circule pelas duplas perguntando 'por que vocês escolheram essa estratégia? o que vocês esperam que aconteça?' e anote brevemente as respostas.",
        "Jogue algumas rodadas, observando se as estratégias escolhidas realmente ajudaram ou não a vencer.",
        "Reúna a turma e peça que cada dupla conte se a estratégia funcionou como esperado, registrando os relatos na lousa.",
        "Discuta coletivamente quais estratégias pareceram mais eficazes e por quê, com base no que aconteceu de fato durante o jogo.",
        "Feche pedindo que cada aluno registre no caderno a estratégia que sua dupla escolheu e uma justificativa por escrito, considerando se ela funcionou ou não."
      ]
    },
    {
      "theme": "Matemática e cultura indígena",
      "curriculumCode": "EF04M37",
      "description": "Desenvolvimento de um projeto que explora conceitos e relações matemáticas, analisando sua presença na cultura indígena.",
      "materials": ["Imagens e textos sobre povos indígenas", "Materiais para artesanato (miçangas, fios)", "Lousa"],
      "steps": [
        "Apresentar imagens de grafismos, cestarias ou colares indígenas com padrões geométricos.",
        "Identificar coletivamente formas, simetrias e regularidades matemáticas presentes.",
        "Propor que os alunos criem um padrão próprio inspirado nessas referências.",
        "Relacionar o padrão criado com conceitos matemáticos trabalhados, como sequências e polígonos.",
        "Apresentar os trabalhos produzidos para a turma, valorizando a cultura indígena."
      ],
      "classScript": [
        "Apresente imagens de grafismos corporais, cestarias ou colares de diferentes povos indígenas, projetando ou distribuindo cópias impressas.",
        "Pergunte: 'que formas geométricas vocês conseguem identificar nesses padrões? eles se repetem de algum jeito?'",
        "Registre na lousa, com a turma, os elementos matemáticos encontrados: simetrias, sequências de cores ou formas que se repetem, polígonos presentes.",
        "Distribua miçangas, fios ou papel quadriculado e materiais de artesanato para os alunos criarem, em duplas, um padrão próprio inspirado nas referências indígenas observadas.",
        "Circule pela sala perguntando a cada dupla qual regularidade matemática elas estão usando na criação (ex.: repetição de cores a cada 3 contas, simetria).",
        "Peça que cada dupla escreva uma legenda curta explicando o padrão matemático usado em sua criação.",
        "Organize uma exposição na sala com os trabalhos produzidos, para que a turma circule observando os padrões dos colegas.",
        "Feche pedindo que cada aluno registre no caderno o padrão que criou (por desenho) e a explicação escrita da regularidade matemática usada, valorizando a referência cultural indígena."
      ]
    },
    {
      "theme": "Matemática, biodiversidade e Fome Zero",
      "curriculumCode": "EF04M38",
      "description": "Desenvolvimento de um projeto que explora a biodiversidade de sementes, plantas e animais, particularmente espécies selvagens, relacionando-a com a Matemática.",
      "materials": ["Imagens de sementes e plantas nativas", "Folha de registro", "Lousa"],
      "steps": [
        "Apresentar dados simples sobre variedades de sementes ou plantas cultivadas na região.",
        "Organizar esses dados em uma tabela ou gráfico simples.",
        "Discutir a relação entre biodiversidade, produção de alimentos e o combate à fome.",
        "Propor cálculos simples envolvendo quantidades de produção ou consumo.",
        "Produzir um cartaz coletivo relacionando os dados matemáticos ao tema da sustentabilidade."
      ],
      "classScript": [
        "Apresente dados simples sobre variedades de sementes, plantas ou alimentos cultivados na região (ex.: 'nossa horta tem 5 tipos de hortaliças plantadas').",
        "Organize esses dados coletivamente em uma tabela na lousa, com o nome de cada planta e a quantidade cultivada ou consumida.",
        "Ajude a turma a transformar a tabela em um gráfico simples de colunas, desenhado na lousa ou em papel quadriculado.",
        "Discuta com a turma a relação entre ter muitas variedades de plantas (biodiversidade) e ter mais alimento disponível para todos, ligando ao tema Fome Zero.",
        "Proponha cálculos simples usando os dados apresentados, como 'se cada canteiro produz 8 unidades e temos 4 canteiros, quantas unidades ao todo?'",
        "Organize grupos para pesquisarem (com a ajuda do professor) mais um exemplo de planta ou semente nativa e sua importância para a alimentação.",
        "Produza coletivamente um cartaz relacionando os dados matemáticos organizados com o tema da sustentabilidade e do combate à fome.",
        "Feche pedindo que cada aluno registre no caderno a tabela ou gráfico construído e uma frase explicando a relação entre biodiversidade e alimentação."
      ]
    },
    {
      "theme": "Propriedade associativa da adição e da multiplicação",
      "curriculumCode": "EF04M39",
      "description": "Investigação da validade da propriedade associativa da adição e da multiplicação, a partir de regularidades observadas.",
      "materials": ["Lousa", "Fichas numeradas", "Calculadora"],
      "steps": [
        "Apresentar uma soma com três parcelas e testar diferentes agrupamentos.",
        "Verificar se o resultado muda ao agrupar os números de formas diferentes.",
        "Repetir a investigação com uma multiplicação de três fatores.",
        "Registrar coletivamente a conclusão sobre a propriedade associativa.",
        "Propor exercícios para aplicar a propriedade na resolução de cálculos."
      ],
      "classScript": [
        "Escreva na lousa uma soma com três parcelas, como 2 + 5 + 8, e pergunte: 'em que ordem vocês agrupariam esses números para somar mais fácil?'",
        "Calcule coletivamente agrupando primeiro (2 + 5) + 8 e depois 2 + (5 + 8), comparando os resultados na lousa.",
        "Pergunte: 'o resultado mudou quando agrupamos de formas diferentes?' para levar a turma a perceber que não muda.",
        "Repita a investigação com outra soma de três parcelas escolhida pelos próprios alunos, testando dois agrupamentos diferentes.",
        "Faça o mesmo processo com uma multiplicação de três fatores, como 2 x 3 x 5, testando (2 x 3) x 5 e 2 x (3 x 5).",
        "Organize duplas para testarem mais um exemplo de adição e um de multiplicação, registrando os dois agrupamentos e conferindo se o resultado se mantém.",
        "Registre coletivamente na lousa a conclusão da turma sobre a propriedade associativa, com palavras próprias dos alunos.",
        "Feche propondo uma lista de cálculos em que os alunos podem escolher livremente como agrupar os números, e peça que registrem no caderno dois exemplos com a propriedade aplicada."
      ]
    },
    {
      "theme": "Regularidades em multiplicações por 0 e por 1",
      "curriculumCode": "EF04M40",
      "description": "Investigação de regularidades em multiplicações por 0 e por 1, com produção de texto comunicando as conclusões obtidas.",
      "materials": ["Lousa", "Calculadora", "Folha para registro"],
      "steps": [
        "Propor uma série de multiplicações por 1 e observar os resultados.",
        "Propor uma série de multiplicações por 0 e observar os resultados.",
        "Discutir em grupo por que esses padrões acontecem.",
        "Pedir que os alunos escrevam um pequeno texto explicando a regularidade encontrada.",
        "Socializar os textos produzidos com a turma."
      ],
      "classScript": [
        "Escreva na lousa uma série de multiplicações por 1, como 4 x 1, 9 x 1, 15 x 1, e peça que os alunos calculem cada uma.",
        "Pergunte: 'o que vocês notam em todos esses resultados? por que será que isso acontece?'",
        "Escreva agora uma série de multiplicações por 0, como 4 x 0, 9 x 0, 15 x 0, e peça que calculem também.",
        "Pergunte novamente: 'e agora, o que aconteceu com os resultados? por que multiplicar por zero dá sempre zero?'",
        "Discuta em grupo as duas regularidades, relacionando a multiplicação por 1 à ideia de 'uma vez o número' e a multiplicação por 0 à ideia de 'nenhuma vez o número'.",
        "Proponha alguns cálculos surpresa misturando multiplicações por 0 e por 1 com outros números, para verificar se a turma aplica a regularidade rapidamente.",
        "Peça que cada aluno escreva um pequeno texto (3 a 5 linhas) explicando, com suas palavras, por que multiplicar por 1 mantém o número e por que multiplicar por 0 sempre dá zero.",
        "Organize a socialização de alguns textos produzidos, e feche pedindo que cada aluno registre no caderno seu texto final como conclusão da investigação."
      ]
    }
  ],
  ciencias: [
    {
      "theme": "Separando misturas: peneira, ímã e filtro",
      "curriculumCode": "EF04C01",
      "description": "Proposição de procedimentos para separar diferentes tipos de misturas, testando métodos como peneiração, uso de ímã, filtração e decantação.",
      "materials": ["Água", "Areia", "Clipes ou pregos de metal", "Óleo", "Peneira", "Ímã", "Filtro de papel ou coador de pano", "Funil", "Copos transparentes", "Colheres"],
      "steps": [
        "Apresentar diferentes misturas já prontas (água com areia, água com óleo, areia com clipes de metal).",
        "Perguntar à turma como cada mistura poderia ser separada em suas partes.",
        "Organizar grupos, cada um testando um método diferente: peneiração, uso de ímã, filtração ou decantação.",
        "Registrar em uma tabela qual método funcionou para cada mistura testada.",
        "Discutir por que cada método funciona, relacionando ao tamanho das partículas, à atração magnética ou à densidade.",
        "Construir coletivamente uma lista de procedimentos de separação e quando usar cada um."
      ],
      "classScript": [
        "Leve pronta pra sala as três misturas em copos transparentes (água com areia, água com óleo, areia com clipes de metal) e mostre uma de cada vez, perguntando 'dá pra separar isso de novo? Como?'",
        "Anote na lousa as hipóteses da turma antes de qualquer teste — não corrija ainda, só registre as ideias.",
        "Divida a turma em 4 grupos e entregue a cada grupo o material de um método diferente: peneira, ímã, filtro de papel/funil e um copo pra decantação.",
        "Circule pelos grupos perguntando 'por que você acha que esse método vai funcionar (ou não) nessa mistura?' antes de deixarem testar.",
        "Depois do teste, peça que cada grupo desenhe ou escreva numa tabela simples (mistura / método usado / funcionou?) o resultado que encontrou.",
        "Reúna a turma e, grupo por grupo, peça que expliquem por que o método funcionou — puxe a relação com tamanho das partículas (peneira), atração magnética (ímã) ou densidade (decantação), completando o que faltar.",
        "Feche construindo coletivamente na lousa uma lista 'quando usar cada método' que os alunos copiam no caderno — esse registro individual fecha a aula."
      ]
    },
    {
      "theme": "Renovável ou não? Classificando os recursos naturais",
      "curriculumCode": "EF04C02",
      "description": "Identificação e classificação de recursos naturais em renováveis (que se repõem na natureza) e não renováveis (que se esgotam ou levam muito tempo para se formar).",
      "materials": ["Cartões ou imagens de recursos naturais (sol, vento, água, madeira, petróleo, carvão, minérios)", "Cartolina dividida em duas colunas", "Cola", "Caixa ou cesta de classificação"],
      "steps": [
        "Perguntar aos alunos quais recursos da natureza eles usam no dia a dia.",
        "Apresentar cartões com diversos recursos naturais.",
        "Explicar a diferença entre recurso renovável e não renovável com exemplos simples.",
        "Em grupos, classificar os cartões colando-os na coluna correta da cartolina.",
        "Corrigir coletivamente, discutindo casos que geram dúvida, como a madeira.",
        "Montar um mural final com a classificação e sugestões de uso consciente de cada recurso."
      ],
      "classScript": [
        "Comece perguntando: 'Vocês usam água, luz, gás... de onde vem tudo isso?' e anote na lousa uma lista rápida do que a turma citar.",
        "Explique a diferença entre recurso renovável (se repõe na natureza, como sol, vento e água) e não renovável (se esgota ou demora muito pra se formar, como petróleo, carvão e minérios), usando exemplos da casa deles.",
        "Desenhe na lousa duas colunas, 'Renovável' e 'Não renovável', e mostre um cartão de exemplo (o sol), perguntando em qual coluna ele entra e por quê.",
        "Divida a turma em grupos e entregue um envelope com cartões de recursos variados pra cada grupo classificar, colando na cartolina dividida em duas colunas.",
        "Circule pelos grupos perguntando 'por que vocês colocaram esse aqui?', principalmente nos casos que geram dúvida, como a madeira e a água.",
        "Reúna a turma e corrija coletivamente, pedindo que cada grupo defenda sua escolha nos casos duvidosos antes de fechar a resposta certa.",
        "Feche perguntando o que a turma pode fazer no dia a dia pra usar com mais cuidado os recursos não renováveis, registrando as ideias na lousa para o mural.",
        "Cada aluno registra no caderno, numa tabela de duas colunas, pelo menos três recursos renováveis e três não renováveis, com uma frase de uso consciente — esse registro individual fecha a aula."
      ]
    },
    {
      "theme": "Volta ou não volta? Mudanças reversíveis e irreversíveis",
      "curriculumCode": "EF04C03",
      "description": "Investigação de variáveis que determinam mudanças reversíveis e irreversíveis em situações do cotidiano, como a mudança de estados físicos da água e o preparo de alimentos.",
      "materials": ["Cubos de gelo", "Copos", "Água quente (fornecida pelo professor)", "Imagens ou vídeo curto do cozimento de um ovo", "Folha de registro"],
      "steps": [
        "Perguntar se é possível desfazer certas transformações que acontecem em casa.",
        "Observar o gelo derretendo e discutir a possibilidade de a água voltar a congelar.",
        "Apresentar imagens ou um vídeo curto do cozimento de um ovo e discutir se é possível ele voltar a ser cru.",
        "Levantar outras situações sugeridas pelos alunos e classificá-las como reversíveis ou irreversíveis.",
        "Registrar na tabela quais mudanças puderam voltar ao estado original e quais não.",
        "Concluir coletivamente quais fatores, como temperatura e tempo, influenciam essas mudanças."
      ],
      "classScript": [
        "Abra perguntando: 'Tem coisa que a gente estraga e dá pra consertar, e tem coisa que não tem mais volta. Vocês conseguem pensar num exemplo?' Deixe alguns alunos responderem livremente.",
        "Distribua um cubo de gelo num copo para cada dupla e peça que observem ele derretendo enquanto a aula segue, sem dizer ainda o que vai acontecer.",
        "Pergunte à turma 'será que essa água pode voltar a ser gelo?' e registre as respostas na lousa como hipóteses, sem confirmar ainda.",
        "Mostre imagens (ou um vídeo curto, se houver projetor) do cozimento de um ovo e pergunte: 'e esse ovo cozido, dá pra ele voltar a ser cru de novo?'",
        "Escreva na lousa duas colunas, 'Volta' e 'Não volta', e classifique coletivamente o gelo derretido e o ovo cozido, pedindo que expliquem o porquê antes de você confirmar.",
        "Peça que a turma sugira outras situações de casa (roupa molhada secando, papel rasgado, massa de bolo assando, vidro quebrado) e classifique cada uma junto com eles.",
        "Puxe a generalização perguntando 'o que muda quando a gente esquenta ou espera muito tempo?' para relacionar temperatura e tempo às mudanças observadas.",
        "Cada aluno preenche individualmente a folha de registro com pelo menos quatro situações classificadas como reversíveis ou irreversíveis, explicando em uma frase o porquê de uma delas — esse registro fecha a aula."
      ]
    },
    {
      "theme": "De onde vem a energia? Transformações no dia a dia",
      "curriculumCode": "EF04C04",
      "description": "Exemplificação de transformações de energia observadas em aparelhos do cotidiano, identificando como a energia elétrica se converte em outros tipos de energia.",
      "materials": ["Cartões ou imagens de aparelhos elétricos (liquidificador, chuveiro, lâmpada, rádio, ventilador)", "Cartaz com espaço para desenhar setas", "Lápis de cor"],
      "steps": [
        "Perguntar quais aparelhos elétricos os alunos usam em casa.",
        "Explicar que a energia elétrica pode se transformar em outros tipos, como mecânica, sonora, luminosa e térmica.",
        "Em grupos, distribuir cartões de aparelhos e pedir que identifiquem em que tipo(s) de energia a energia elétrica se transforma em cada um.",
        "Desenhar um esquema com setas mostrando a transformação de energia de cada aparelho.",
        "Apresentar os esquemas para a turma.",
        "Montar um cartaz coletivo reunindo todas as transformações identificadas."
      ],
      "classScript": [
        "Pergunte 'que aparelhos elétricos vocês usam em casa todos os dias?' e liste na lousa (chuveiro, liquidificador, lâmpada, rádio, ventilador).",
        "Explique que a energia elétrica que chega nesses aparelhos se transforma em outros tipos: mecânica (movimento), luminosa (luz), sonora (som) e térmica (calor).",
        "Escolha um exemplo junto com a turma, como o chuveiro, e desenhe na lousa uma seta 'energia elétrica → energia térmica', perguntando por que é essa a transformação.",
        "Divida a turma em grupos e entregue a cada grupo dois ou três cartões de aparelhos diferentes para identificarem em que tipo(s) de energia a energia elétrica se transforma em cada um.",
        "Circule perguntando 'esse aparelho faz mais de uma transformação? Ele esquenta E faz barulho, por exemplo?' para aprofundar quando fizer sentido, como no liquidificador (mecânica + sonora).",
        "Peça que cada grupo desenhe no cartaz um esquema com setas mostrando a transformação de energia de cada aparelho do seu envelope.",
        "Convide cada grupo a apresentar seu esquema para a turma, explicando em voz alta a transformação representada.",
        "Monte na lousa um cartaz coletivo reunindo os esquemas de todos os grupos, organizados por tipo de energia final.",
        "Cada aluno registra no caderno pelo menos três aparelhos e suas transformações de energia, copiando do cartaz coletivo — esse registro fecha a aula."
      ]
    },
    {
      "theme": "Comida é combustível: alimentação e energia",
      "curriculumCode": "EF04C05",
      "description": "Proposição de modos de investigar a relação entre a alimentação e a obtenção de energia pelo corpo.",
      "materials": ["Rótulos ou imagens de alimentos", "Cronômetro", "Espaço livre para atividade física simples", "Cartolina"],
      "steps": [
        "Perguntar por que sentimos fome e cansaço ao longo do dia.",
        "Explicar que os alimentos fornecem a energia necessária para o corpo funcionar e se movimentar.",
        "Propor uma atividade física curta, como correr no lugar ou pular, e observar como o corpo utiliza energia.",
        "Em grupos, investigar, a partir de rótulos e imagens trazidos, quais alimentos fornecem mais ou menos energia.",
        "Montar um cartaz relacionando tipos de alimentos à energia que oferecem ao corpo.",
        "Discutir por que é importante se alimentar bem antes de atividades que exigem energia."
      ],
      "classScript": [
        "Pergunte à turma: 'por que a gente sente fome? Por que fica cansado depois de correr muito?' e deixe alguns responderem antes de explicar.",
        "Explique que os alimentos são como o 'combustível' do corpo: fornecem a energia que usamos para nos mover, pensar e até para o coração bater.",
        "Proponha uma atividade física curta e segura (correr no lugar ou pular por um tempo curto) e, logo depois, pergunte: 'como está o corpo de vocês agora? Cansado? Com fome?'",
        "Relacione a sensação de cansaço/fome ao gasto de energia que acabou de acontecer, escrevendo na lousa 'atividade física gasta energia → corpo pede mais energia (comida)'.",
        "Divida a turma em grupos e entregue rótulos e imagens de alimentos variados para investigarem quais parecem fornecer mais ou menos energia, comparando por exemplo um doce processado com uma fruta.",
        "Circule perguntando 'por que vocês acham que esse alimento dá mais energia?' para os grupos justificarem antes de você complementar com informações.",
        "Peça que cada grupo monte um cartaz relacionando os alimentos investigados à quantidade de energia que oferecem ao corpo.",
        "Feche discutindo coletivamente por que é importante comer bem antes de atividades que exigem energia, como educação física ou um dia de passeio.",
        "Cada aluno registra no caderno uma lista de pelo menos três alimentos e a energia que oferecem, terminando com uma frase sobre quando é importante comer bem — esse registro fecha a aula."
      ]
    },
    {
      "theme": "Detetives da poluição: problemas e soluções para o ambiente",
      "curriculumCode": "EF04C06",
      "description": "Reconhecimento de agentes poluidores do ambiente e proposição de soluções para amenizar os impactos ambientais causados por eles.",
      "materials": ["Fotos de ambientes poluídos (rio, rua, ar)", "Cartolina", "Canetinhas", "Folha de registro com colunas problema/solução"],
      "steps": [
        "Apresentar fotos de ambientes poluídos, como rios com lixo, ruas sujas e fumaça no ar.",
        "Perguntar aos alunos que tipos de poluição eles já observaram no próprio bairro.",
        "Em grupos, identificar os agentes poluidores em cada imagem (lixo, fumaça, esgoto).",
        "Discutir os impactos desses agentes sobre a água, o ar e o solo.",
        "Propor coletivamente soluções possíveis para cada problema identificado.",
        "Criar cartazes de conscientização com as soluções propostas para expor na escola."
      ],
      "classScript": [
        "Mostre fotos de ambientes poluídos (rio com lixo, rua suja, céu com fumaça) e pergunte: 'o que vocês veem de errado nessas imagens?'",
        "Pergunte se algum aluno já viu poluição parecida no próprio bairro e anote na lousa os exemplos que a turma trouxer.",
        "Em grupos, entregue uma das fotos para cada grupo e peça que identifiquem os agentes poluidores presentes nela (lixo, fumaça, esgoto, óleo).",
        "Circule pelos grupos perguntando 'esse tipo de poluição afeta a água, o ar ou o solo? Como?' para relacionarem o agente ao meio afetado.",
        "Reúna a turma e, grupo por grupo, peça que apresentem o que identificaram, completando na lousa uma tabela 'agente poluidor / meio afetado / consequência'.",
        "Proponha coletivamente: 'o que poderia ser feito para resolver ou diminuir cada um desses problemas?' e registre as ideias da turma ao lado de cada problema na lousa.",
        "Peça que cada grupo produza um cartaz de conscientização com o problema identificado na sua foto e a solução proposta, para expor na escola.",
        "Cada aluno registra na folha problema/solução pelo menos duas situações de poluição discutidas e a solução correspondente — esse registro fecha a aula."
      ]
    },
    {
      "theme": "Conhecendo a Terra por mapas, globos e fotos",
      "curriculumCode": "EF04C07",
      "description": "Identificação de características da Terra a partir da observação, manipulação e comparação de diferentes formas de representação do planeta.",
      "materials": ["Globo terrestre", "Mapa-múndi ou planisfério", "Foto de satélite da Terra impressa"],
      "steps": [
        "Apresentar diferentes representações da Terra: globo, mapa e foto de satélite.",
        "Perguntar o que cada representação mostra e em que elas se parecem ou diferem.",
        "Em grupos, manipular o globo e o mapa, localizando continentes, oceanos e o Brasil.",
        "Comparar a forma da Terra em cada representação.",
        "Registrar características observadas, como a proporção entre água e terra.",
        "Compartilhar as descobertas com a turma em uma roda de conversa."
      ],
      "classScript": [
        "Leve para a sala o globo terrestre, um mapa-múndi e a foto de satélite impressa, e mostre os três lado a lado sem explicar ainda.",
        "Pergunte: 'o que essas três coisas têm em comum? O que muda entre elas?' e deixe a turma observar e comentar livremente.",
        "Explique brevemente o que cada representação mostra: o globo tem a forma real e esférica, o mapa é uma versão achatada, a foto mostra a Terra vista do espaço.",
        "Divida a turma em grupos pequenos e organize estações com o globo e o mapa circulando entre elas, pedindo que localizem juntos os continentes, os oceanos e o Brasil.",
        "Peça que cada grupo compare: 'no mapa e no globo, o Brasil parece do mesmo tamanho e formato?' para perceberem a distorção entre as representações.",
        "Pergunte à turma 'tem mais água ou mais terra no planeta?' e peça que observem o globo e o mapa para responder com uma estimativa.",
        "Peça que os grupos registrem no caderno as observações: o que cada representação mostra bem e alguma diferença notada entre elas.",
        "Feche em roda de conversa, com cada grupo compartilhando uma descoberta — o registro no caderno de cada aluno fecha a aula."
      ]
    },
    {
      "theme": "As camadas da Terra: geosfera, hidrosfera e atmosfera",
      "curriculumCode": "EF04C08",
      "description": "Identificação e nomeação dos elementos que compõem o sistema terrestre, descrevendo características gerais da geosfera, hidrosfera e atmosfera.",
      "materials": ["Massinha de modelar de cores diferentes", "Imagens de rochas/solo, água e ar", "Etiquetas de papel", "Palitos de dente"],
      "steps": [
        "Perguntar aos alunos do que é feita a Terra.",
        "Apresentar os três elementos do sistema terrestre: geosfera, hidrosfera e atmosfera.",
        "Em grupos, construir com massinha um modelo simplificado das camadas da Terra.",
        "Etiquetar cada camada do modelo com o nome correspondente.",
        "Discutir exemplos do cotidiano de cada elemento, como montanhas, rios e vento.",
        "Apresentar os modelos para a turma, explicando cada camada representada."
      ],
      "classScript": [
        "Pergunte: 'se a gente pudesse cortar a Terra ao meio como uma fruta, o que será que a gente ia encontrar lá dentro e por fora?'",
        "Apresente os três elementos do sistema terrestre — geosfera (parte sólida/rochosa), hidrosfera (água) e atmosfera (ar) — escrevendo os três nomes na lousa com um exemplo de cada.",
        "Divida a turma em grupos e distribua massinha de cores diferentes, uma cor para cada camada, para construírem um modelo simplificado da Terra.",
        "Circule pelos grupos perguntando 'qual cor vocês escolheram pra água? E o ar, como vocês vão mostrar isso na massinha, já que é um gás?' ajudando a pensar em soluções, como uma camada externa fina.",
        "Peça que etiquetem cada camada do modelo com o nome correspondente, usando os palitos e as etiquetas de papel.",
        "Peça exemplos concretos do cotidiano de cada elemento: geosfera (montanhas, solo do parquinho), hidrosfera (rio, mar, chuva) e atmosfera (vento, ar que respiramos).",
        "Reúna a turma para os grupos apresentarem seus modelos, explicando cada camada representada e dando um exemplo do dia a dia para ela.",
        "Cada aluno desenha no caderno um esquema simples da Terra com as três camadas nomeadas e um exemplo de cada — esse registro fecha a aula."
      ]
    },
    {
      "theme": "Viagem pelo Sistema Solar: pesquisando os planetas",
      "curriculumCode": "EF04C09",
      "description": "Pesquisa em fontes variadas sobre os demais planetas do sistema solar, identificando informações sobre suas características.",
      "materials": ["Livros e revistas sobre astronomia", "Acesso à internet ou biblioteca", "Cartolina", "Imagens dos planetas", "Régua"],
      "steps": [
        "Apresentar o Sistema Solar e perguntar quantos planetas existem além da Terra.",
        "Dividir a turma em grupos, cada um pesquisando um planeta em fontes variadas.",
        "Orientar o registro de características como tamanho, cor, distância do Sol e presença de anéis ou luas.",
        "Cada grupo prepara um cartaz com as informações do planeta pesquisado.",
        "Organizar os cartazes em ordem de distância do Sol, formando um mural do Sistema Solar.",
        "Apresentar oralmente as descobertas de cada grupo para a turma."
      ],
      "classScript": [
        "Pergunte: 'quantos planetas vocês acham que existem no Sistema Solar, além da Terra?' e anote os palpites na lousa antes de revelar o número certo (oito, ao todo).",
        "Escreva na lousa a lista dos oito planetas na ordem a partir do Sol, para servir de referência aos grupos.",
        "Divida a turma em grupos, cada um responsável por pesquisar um planeta usando os livros, revistas ou dispositivos disponíveis em sala.",
        "Oriente cada grupo a registrar informações específicas: tamanho comparado à Terra, cor predominante, distância aproximada do Sol e se tem anéis ou luas.",
        "Circule pelos grupos perguntando 'o que mais chamou atenção de vocês nesse planeta?' para garantir que estão entendendo o que pesquisaram, e não só copiando texto.",
        "Peça que cada grupo prepare um cartaz com o nome do planeta, um desenho e as informações levantadas.",
        "Organize com a turma os cartazes na lousa ou num varal, em ordem de distância do Sol, formando um mural coletivo do Sistema Solar.",
        "Cada grupo apresenta oralmente para a turma as descobertas sobre seu planeta, enquanto os colegas anotam no caderno o nome e uma curiosidade de cada planeta apresentado — esse registro fecha a aula."
      ]
    },
    {
      "theme": "As fases da Lua: por que o céu muda todo mês?",
      "curriculumCode": "EF04C10",
      "description": "Explicação da regularidade das fases da Lua como fenômeno decorrente do seu movimento ao redor da Terra.",
      "materials": ["Bola de isopor pequena", "Lanterna", "Palito para segurar a bola", "Sala que possa ser escurecida", "Imagens do calendário lunar"],
      "steps": [
        "Perguntar se os alunos já notaram que a Lua muda de formato no céu ao longo do mês.",
        "Apresentar as quatro fases principais: nova, crescente, cheia e minguante.",
        "Realizar uma demonstração com lanterna (representando o Sol) e bola de isopor (representando a Lua).",
        "Alunos se revezam observando as diferentes fases enquanto giram a bola ao redor de si mesmos.",
        "Relacionar a demonstração ao movimento real da Lua ao redor da Terra.",
        "Registrar em um desenho as quatro fases na ordem correta."
      ],
      "classScript": [
        "Pergunte: 'alguém já reparou que a Lua não é sempre igual no céu? Às vezes é redonda, às vezes é só um pedacinho — por que será?'",
        "Apresente as quatro fases principais — nova, crescente, cheia e minguante — desenhando cada formato na lousa com o nome embaixo.",
        "Escureça a sala o quanto der (feche cortinas, apague a luz) e monte a demonstração: uma lanterna representando o Sol, parada, e uma bola de isopor no palito representando a Lua.",
        "Explique que a Lua não tem luz própria, ela reflete a luz do Sol, e que a turma vai ver essa 'luz refletida' mudando de formato conforme a bola gira.",
        "Peça que os alunos, em pequenos grupos, se revezem segurando a bola de isopor e girando lentamente ao redor de si mesmos (representando a Terra no centro), observando como a parte iluminada muda de formato vista de onde eles estão.",
        "A cada rodada, pergunte 'essa posição lembra qual fase da Lua: nova, crescente, cheia ou minguante?' para relacionarem a demonstração às fases reais.",
        "Relacione a demonstração ao movimento real, explicando que é a Lua girando ao redor da Terra, ao longo de cerca de um mês, que causa essa mudança que vemos no céu.",
        "Cada aluno desenha no caderno as quatro fases na ordem correta, com o nome de cada uma — esse registro fecha a aula."
      ]
    },
    {
      "theme": "Diário do céu: observando estrelas e planetas",
      "curriculumCode": "EF04C11",
      "description": "Observação do céu durante vários dias e noites, registrando por meio de desenhos os movimentos das estrelas e planetas em relação à Terra.",
      "materials": ["Caderno de campo ou folhas de registro", "Lápis", "Modelo de ficha de observação com espaço para desenho e data"],
      "steps": [
        "Explicar a proposta de observar o céu em casa, com ajuda de um adulto, por vários dias e noites.",
        "Orientar sobre o que registrar: posição da Lua, estrelas visíveis e presença de nuvens.",
        "Fornecer um modelo de folha de registro com espaço para desenho e data.",
        "Ao longo da semana, os alunos completam os registros em casa.",
        "Em sala, socializar os desenhos e comparar as observações entre colegas.",
        "Discutir coletivamente o que mudou de um dia para o outro no céu observado."
      ],
      "classScript": [
        "Explique a proposta: durante a semana, cada aluno vai observar o céu à noite, em casa, com ajuda de um adulto por segurança.",
        "Combine com a turma o que observar: se dá pra ver a Lua (e em que fase), quantas estrelas aparecem, se há nuvens cobrindo o céu.",
        "Entregue o modelo de folha de registro e mostre como preencher: espaço para desenhar o céu observado e um campo para anotar a data.",
        "Simule com a turma, na lousa, um registro de exemplo, desenhando uma 'amostra' de céu com Lua e algumas estrelas, com a data ao lado.",
        "Reforce a orientação de segurança: observar sempre acompanhado de um adulto, de uma janela ou varanda segura, sem sair sozinho à noite.",
        "Ao longo da semana, os alunos completam os registros em casa, um por noite observada.",
        "Na aula seguinte, organize uma roda para socializar os desenhos, perguntando 'o que mudou de um dia para o outro no céu que você observou?'",
        "Discuta coletivamente os padrões percebidos pela turma, como a Lua mudando de posição ou formato, ou dias com mais ou menos estrelas visíveis por causa de nuvens.",
        "Os registros feitos ao longo da semana, com desenho e data de cada observação, são entregues ou colados no caderno — esse conjunto de registros fecha a atividade."
      ]
    },
    {
      "theme": "Prato saudável: os efeitos da alimentação no corpo",
      "curriculumCode": "EF04C12",
      "description": "Compreensão de que uma alimentação inadequada compromete a saúde do corpo.",
      "materials": ["Imagens de alimentos variados (saudáveis e ultraprocessados)", "Pratos de papel", "Tesoura sem ponta", "Cola"],
      "steps": [
        "Perguntar aos alunos o que comeram no café da manhã ou no almoço.",
        "Apresentar exemplos de alimentação equilibrada e de alimentação inadequada.",
        "Em grupos, montar em um prato de papel um 'prato saudável', recortando e colando imagens de alimentos.",
        "Discutir o que pode acontecer com o corpo quando a alimentação é inadequada por muito tempo.",
        "Comparar os pratos montados pelos grupos, trocando sugestões de melhoria.",
        "Elaborar coletivamente uma lista de hábitos alimentares saudáveis para levar para casa."
      ],
      "classScript": [
        "Pergunte: 'o que vocês comeram hoje de manhã ou no almoço?' e deixe alguns alunos compartilharem rapidamente.",
        "Apresente exemplos de alimentação equilibrada (frutas, verduras, arroz e feijão, proteínas) e de alimentação inadequada (muito ultraprocessado, muito açúcar, muito frito), sem julgar as respostas dadas antes.",
        "Em grupos, entregue um prato de papel e imagens variadas de alimentos para recortarem sem ponta e montarem um 'prato saudável', combinando os grupos alimentares.",
        "Circule pelos grupos perguntando 'por que vocês escolheram colocar isso no prato? Falta algum grupo de alimento?' para justificarem as escolhas.",
        "Pergunte à turma 'o que pode acontecer com o corpo se a gente comer mal por muito tempo?' e registre na lousa as respostas, como cansaço, doenças, dificuldade de crescer ou aprender.",
        "Organize uma roda para os grupos compararem os pratos montados, trocando sugestões de melhoria uns com os outros.",
        "Elabore coletivamente na lousa uma lista de hábitos alimentares saudáveis que a turma pode levar para casa.",
        "Cada aluno copia no caderno a lista de hábitos saudáveis e escreve ou desenha o que vai tentar mudar no seu próprio prato — esse registro fecha a aula."
      ]
    },
    {
      "theme": "O caminho do alimento: nutrientes e eliminação de resíduos",
      "curriculumCode": "EF04C13",
      "description": "Identificação dos principais nutrientes e compreensão da relação entre nutrição, distribuição dos nutrientes pelo organismo e eliminação de resíduos produzidos.",
      "materials": ["Cartaz do corpo humano com o sistema digestório", "Imagens de alimentos com seus nutrientes", "Fichas com nomes de nutrientes (carboidratos, proteínas, vitaminas)"],
      "steps": [
        "Perguntar o que acontece com a comida depois que a engolimos.",
        "Apresentar os principais nutrientes presentes nos alimentos e sua função no corpo.",
        "Usando o cartaz do corpo humano, explicar o caminho do alimento pelo sistema digestório.",
        "Em grupos, associar fichas de alimentos aos nutrientes que eles fornecem.",
        "Explicar como o corpo distribui os nutrientes e elimina os resíduos produzidos.",
        "Montar um esquema coletivo mostrando entrada do alimento, distribuição de nutrientes e eliminação de resíduos."
      ],
      "classScript": [
        "Pergunte: 'depois que a gente engole a comida, para onde ela vai? O que o corpo faz com ela?'",
        "Usando o cartaz do corpo humano, mostre o caminho do sistema digestório — boca, esôfago, estômago, intestinos — explicando de forma simples o que acontece em cada parte.",
        "Apresente os principais nutrientes (carboidratos, proteínas, vitaminas) e explique rapidamente a função de cada um no corpo: energia, construção, defesa.",
        "Em grupos, entregue fichas de alimentos e fichas de nutrientes para os alunos associarem qual alimento fornece qual nutriente.",
        "Circule perguntando 'por que vocês acham que esse alimento tem esse nutriente?' para justificarem a associação antes de você confirmar.",
        "Explique como o corpo distribui os nutrientes para as diferentes partes do corpo e como elimina os resíduos que não são aproveitados.",
        "Monte com a turma, na lousa ou num cartaz coletivo, um esquema com setas mostrando: entrada do alimento → digestão → distribuição de nutrientes → eliminação de resíduos.",
        "Cada aluno copia o esquema no caderno, completando com pelo menos dois exemplos de alimentos e os nutrientes que eles fornecem — esse registro fecha a aula."
      ]
    },
    {
      "theme": "Meu corpo em movimento: batimentos e respiração",
      "curriculumCode": "EF04C14",
      "description": "Comparação das alterações de sinais vitais, como frequência cardíaca e respiratória, antes e após atividade física, relacionando-as à integração entre os sistemas respiratório e cardiovascular.",
      "materials": ["Cronômetro", "Folha de registro", "Espaço para atividade física (correr no lugar, polichinelos)"],
      "steps": [
        "Explicar como medir a própria frequência cardíaca (no pulso ou no peito) e a respiração (contando inspirações).",
        "Em duplas, medir e registrar os batimentos e a respiração em repouso.",
        "Realizar uma atividade física de um a dois minutos, como correr no lugar ou polichinelos.",
        "Medir novamente os batimentos e a respiração logo após o exercício e registrar.",
        "Comparar os números antes e depois, discutindo por que eles aumentam.",
        "Relacionar as mudanças observadas à integração entre os sistemas respiratório e cardiovascular."
      ],
      "classScript": [
        "Explique como medir a própria frequência cardíaca (sentindo o pulso no pescoço ou no punho) e a respiração (contando quantas vezes inspira em um tempo determinado com o cronômetro).",
        "Organize a turma em duplas e peça que, em repouso e sentados, um meça os batimentos e a respiração do colega enquanto o outro faz o mesmo depois.",
        "Peça que registrem esses números de repouso na folha de registro antes de continuar.",
        "Proponha uma atividade física curta, como correr no lugar ou fazer polichinelos por cerca de um a dois minutos.",
        "Cuidado de segurança: avise para pararem imediatamente se sentirem tontura, falta de ar forte ou dor, e adapte a intensidade para quem tiver alguma limitação.",
        "Logo após o exercício, peça que as duplas meçam novamente os batimentos e a respiração uma da outra e registrem na folha.",
        "Pergunte à turma 'o que aconteceu com os números depois do exercício? Por que vocês acham que isso aconteceu?' e discuta as respostas.",
        "Relacione o aumento observado à integração entre os sistemas respiratório e cardiovascular: o corpo precisa de mais oxigênio durante o esforço, então o coração bate mais rápido e a respiração acelera.",
        "Cada aluno preenche a folha de registro com os números antes e depois do exercício e uma frase explicando por que eles mudaram — esse registro fecha a aula."
      ]
    },
    {
      "theme": "A menor parte da vida: conhecendo as células",
      "curriculumCode": "EF04C15",
      "description": "Reconhecimento da célula como unidade básica, estrutural e funcional dos seres vivos, utilizando diferentes representações.",
      "materials": ["Imagens ampliadas de células vegetais e animais", "Massinha de modelar", "Materiais recicláveis para maquete", "Etiquetas de papel"],
      "steps": [
        "Perguntar aos alunos do que somos feitos por dentro, além dos órgãos.",
        "Apresentar a ideia de que todos os seres vivos são formados por células, unidades muito pequenas.",
        "Mostrar imagens ampliadas de células vegetais e animais.",
        "Em grupos, construir um modelo simples de célula com massinha ou materiais recicláveis.",
        "Identificar as partes principais do modelo, como membrana, núcleo e citoplasma, com etiquetas.",
        "Apresentar os modelos e discutir por que a célula é chamada de 'unidade básica' da vida."
      ],
      "classScript": [
        "Pergunte: 'vocês sabem do que somos feitos por dentro, além dos órgãos que a gente já conhece, como coração e pulmão?'",
        "Explique que todos os seres vivos são formados por células, unidades muito pequenas que não conseguimos ver a olho nu.",
        "Mostre imagens ampliadas de células vegetais e animais e pergunte: 'o que vocês notam de parecido e de diferente entre elas?'",
        "Em grupos, distribua massinha de modelar (ou materiais recicláveis) para construírem um modelo simples de célula.",
        "Circule perguntando 'onde fica o núcleo no modelo de vocês? E a membrana, o que ela faz?' para pensarem na função de cada parte enquanto constroem.",
        "Peça que identifiquem e etiquetem as partes principais do modelo — membrana, núcleo e citoplasma — usando as etiquetas de papel.",
        "Reúna a turma para os grupos apresentarem seus modelos, explicando o que representa cada parte.",
        "Discuta coletivamente por que a célula é chamada de 'unidade básica' da vida, relacionando ao fato de que ela está presente em todos os seres vivos.",
        "Cada aluno desenha no caderno um modelo de célula com as partes nomeadas (membrana, núcleo, citoplasma) — esse registro fecha a aula."
      ]
    },
    {
      "theme": "Quem come quem? Montando cadeias alimentares",
      "curriculumCode": "EF04C16",
      "description": "Análise e construção de cadeias alimentares por meio de diferentes registros, verificando a posição do ser humano e a importância do ambiente para o equilíbrio das cadeias.",
      "materials": ["Cartões com imagens de seres vivos (plantas, insetos, aves, mamíferos, decompositores)", "Setas de papel ou barbante", "Cartolina"],
      "steps": [
        "Perguntar o que cada animal ou planta come na natureza.",
        "Apresentar o conceito de cadeia alimentar e a direção das setas entre os seres vivos.",
        "Em grupos, organizar os cartões de seres vivos formando uma cadeia alimentar com setas de papel.",
        "Incluir o ser humano em uma das cadeias, discutindo sua posição nela.",
        "Apresentar as cadeias montadas para a turma, explicando cada elo.",
        "Discutir o que aconteceria com o equilíbrio ambiental se um elo da cadeia desaparecesse."
      ],
      "classScript": [
        "Pergunte: 'o que uma borboleta come? E um passarinho, o que ele come?' — puxe alguns exemplos da turma para introduzir o tema.",
        "Apresente o conceito de cadeia alimentar, explicando que a seta sempre aponta do ser que é comido para o ser que come, por exemplo planta → inseto → ave.",
        "Em grupos, entregue um conjunto de cartões com seres vivos variados (plantas, insetos, aves, mamíferos, decompositores) para organizarem em uma cadeia alimentar usando setas de papel ou barbante.",
        "Circule perguntando 'por que essa seta vai desse jeito e não ao contrário?' para reforçar a direção correta antes de corrigir.",
        "Peça que cada grupo inclua o ser humano em uma das cadeias montadas e discuta em que posição ele entra.",
        "Reúna a turma para cada grupo apresentar sua cadeia alimentar montada, explicando cada elo em voz alta.",
        "Pergunte à turma 'o que aconteceria com essa cadeia se um dos elos, tipo os insetos, desaparecesse de repente?' e discuta o efeito em cadeia sobre o equilíbrio ambiental.",
        "Cada aluno desenha no caderno uma cadeia alimentar com pelo menos três elos e as setas na direção correta — esse registro fecha a aula."
      ]
    },
    {
      "theme": "Quem vive com quem? Investigando relações entre seres vivos",
      "curriculumCode": "EF04C17",
      "description": "Formulação de hipóteses e explicações sobre as relações entre os seres vivos em diferentes ambientes.",
      "materials": ["Imagens ou vídeo curto de diferentes ambientes (recife, floresta, lagoa)", "Folha de registro de hipóteses", "Lápis"],
      "steps": [
        "Apresentar imagens ou um vídeo curto de diferentes ambientes com vários seres vivos interagindo.",
        "Perguntar aos alunos por que será que esses seres vivem juntos naquele ambiente.",
        "Em grupos, formular hipóteses sobre as relações observadas, como competição, proteção ou parceria.",
        "Registrar as hipóteses na folha de registro.",
        "Apresentar informações complementares para confirmar ou revisar as hipóteses formuladas.",
        "Socializar as conclusões com a turma, comparando as hipóteses iniciais com o que foi descoberto."
      ],
      "classScript": [
        "Mostre imagens ou um vídeo curto de um ambiente (recife, floresta ou lagoa) com vários seres vivos interagindo e pergunte: 'o que vocês estão vendo esses animais e plantas fazendo uns com os outros?'",
        "Pergunte 'por que será que esses seres vivem juntos nesse mesmo lugar?' e deixe a turma arriscar palpites livremente, sem corrigir ainda.",
        "Em grupos, peça que formulem hipóteses sobre as relações observadas na imagem ou vídeo: pode ser competição (disputam o mesmo alimento), proteção (um se esconde perto do outro) ou parceria (um ajuda o outro).",
        "Oriente que registrem as hipóteses formuladas na folha de registro, escrevendo o porquê de cada uma.",
        "Circule pelos grupos perguntando 'o que vocês viram na imagem que te fez pensar nisso?' para fundamentarem a hipótese na observação.",
        "Apresente informações complementares, um texto curto ou explicação oral, sobre as relações reais entre os seres vivos daquele ambiente, para os grupos confirmarem ou revisarem suas hipóteses.",
        "Reúna a turma em roda para socializar: cada grupo conta a hipótese que tinha e se ela se confirmou ou mudou depois da informação nova.",
        "Cada aluno registra na folha a hipótese inicial do seu grupo e o que foi confirmado ou revisado depois — esse registro fecha a aula."
      ]
    },
    {
      "theme": "Os pequenos recicladores: fungos e bactérias decompositores",
      "curriculumCode": "EF04C18",
      "description": "Reconhecimento de fungos e bactérias como seres microscópicos e de sua importância no contexto ambiental como decompositores.",
      "materials": ["Recipiente fechado com alimento em decomposição preparado com antecedência", "Lupa", "Imagens ampliadas de fungos e bactérias", "Luvas descartáveis"],
      "steps": [
        "Perguntar o que acontece com a comida ou as folhas caídas depois de um tempo no chão.",
        "Observar com segurança, em recipiente fechado, um exemplo de alimento em decomposição, usando lupa.",
        "Explicar que fungos e bactérias são seres vivos microscópicos responsáveis por essa decomposição.",
        "Mostrar imagens ampliadas de fungos e bactérias para os alunos conhecerem sua aparência.",
        "Discutir a importância dos decompositores para reciclar a matéria na natureza.",
        "Registrar em um desenho o 'antes e depois' da decomposição observada, indicando os responsáveis."
      ],
      "classScript": [
        "Pergunte: 'o que acontece com uma fruta ou com as folhas que caem no chão depois de um tempo?'",
        "Mostre o recipiente fechado com alimento em decomposição preparado com antecedência, sem abrir, e peça que observem com a lupa através do recipiente fechado, por segurança e higiene.",
        "Reforce a regra de segurança: ninguém abre o recipiente, ninguém toca ou cheira o conteúdo, a observação é só visual, com a lupa, do lado de fora — quem for manusear o recipiente para reposicionar usa luvas descartáveis.",
        "Pergunte 'o que vocês acham que está fazendo essa comida mudar assim?' antes de explicar.",
        "Explique que fungos e bactérias são seres vivos microscópicos, que não dá pra ver a olho nu, responsáveis por essa decomposição.",
        "Mostre imagens ampliadas de fungos e bactérias para a turma conhecer a aparência deles, já que não dá para observá-los diretamente.",
        "Discuta com a turma por que os decompositores são importantes: eles reciclam a matéria na natureza, transformando restos de plantas e animais em nutrientes para o solo.",
        "Cada aluno desenha no caderno um 'antes e depois' da decomposição observada, indicando fungos e/ou bactérias como responsáveis pela transformação — esse registro fecha a aula."
      ]
    },
    {
      "theme": "Prevenindo doenças: hábitos que protegem contra os microrganismos",
      "curriculumCode": "EF04C19",
      "description": "Compreensão e debate sobre a importância da prevenção de doenças causadas por microrganismos, visando à melhoria ou manutenção da saúde.",
      "materials": ["Cartazes sobre lavagem das mãos", "Imagens de situações do dia a dia (antes de comer, após usar o banheiro)", "Sabonete e água para demonstração", "Cartolina"],
      "steps": [
        "Perguntar aos alunos o que eles sabem sobre germes, bactérias e vírus que causam doenças.",
        "Explicar que alguns microrganismos podem causar doenças e discutir formas de prevenção.",
        "Demonstrar a lavagem correta das mãos, explicando por que esse hábito evita a transmissão de microrganismos.",
        "Em grupos, listar outros hábitos de prevenção, como vacinação, alimentos bem lavados e água tratada.",
        "Criar cartazes de conscientização sobre prevenção de doenças para expor na escola.",
        "Debater coletivamente por que esses cuidados são importantes para a saúde individual e coletiva."
      ],
      "classScript": [
        "Pergunte: 'vocês já ouviram falar de germes, bactérias ou vírus que causam doenças? O que vocês sabem sobre eles?'",
        "Explique de forma simples que alguns microrganismos podem causar doenças, mas que existem hábitos que ajudam a se proteger deles.",
        "Faça uma demonstração da lavagem correta das mãos com sabonete e água, mostrando o passo a passo — palma, dorso, entre os dedos, unhas, pulsos — e explicando por que cada parte importa.",
        "Pergunte 'em quais momentos do dia é mais importante lavar as mãos?' e relacione com as imagens de situações do cotidiano, como antes de comer e depois de usar o banheiro.",
        "Em grupos, peça que listem outros hábitos de prevenção além de lavar as mãos, como vacinação em dia, lavar bem os alimentos e beber água tratada.",
        "Circule perguntando 'por que vocês acham que esse hábito ajuda a evitar doenças?' para justificarem cada item da lista.",
        "Peça que cada grupo crie um cartaz de conscientização com um dos hábitos de prevenção discutidos, para expor pela escola.",
        "Debata coletivamente por que esses cuidados são importantes tanto para a saúde de cada um quanto para a saúde de todos ao redor (saúde coletiva).",
        "Cada aluno registra no caderno uma lista de pelo menos quatro hábitos de prevenção contra microrganismos — esse registro fecha a aula."
      ]
    }
  ],
  geografia: [
    {
      "theme": "Raízes e histórias: a diversidade cultural no meu lugar de vivência",
      "curriculumCode": "EF04G01",
      "description": "Investigação, junto às famílias, de elementos culturais (vestimentas, fotos, receitas, objetos, brinquedos) de origem afro-brasileira, indígena, migrante e imigrante presentes no lugar de vivência dos alunos, com relato das descobertas e das transformações associadas à diversidade local.",
      "materials": ["Fotos, objetos ou receitas trazidos de casa pelos alunos", "Cartolina e cola", "Giz de cera ou lápis de cor"],
      "steps": [
        "Pedir aos alunos que tragam de casa uma foto, objeto ou receita que represente a origem cultural da família.",
        "Fazer uma roda de conversa para investigar histórias familiares e origens (afro-brasileira, indígena, migrante, imigrante).",
        "Organizar pequenos grupos para comparar os itens trazidos e identificar semelhanças e diferenças.",
        "Cada grupo apresenta suas descobertas para a turma, destacando mudanças percebidas no bairro.",
        "Montar um mural coletivo 'Mosaico Cultural da Turma' com fotos ou desenhos dos itens.",
        "Registrar no caderno uma síntese sobre a diversidade cultural observada."
      ],
      "classScript": [
        "Com uma semana de antecedência, peça que cada aluno traga de casa uma foto, objeto ou receita que conte algo sobre a origem da família (quem não tiver nada físico pode desenhar ou descrever de memória).",
        "Abra com uma roda de conversa perguntando: 'De onde vieram seus avós ou bisavós? Vocês sabem alguma história de como sua família chegou aqui?'",
        "Anote na lousa, em colunas, as origens que forem aparecendo (afro-brasileira, indígena, migrante de outro estado, imigrante de outro país).",
        "Organize grupos de 4 alunos para que comparem os itens trazidos, perguntando uns aos outros o que há de parecido e de diferente entre as histórias.",
        "Peça que cada grupo escolha uma descoberta pra apresentar à turma toda, destacando alguma mudança que percebem no bairro por causa dessa diversidade (uma comida, uma festa, um jeito de falar).",
        "Monte com a turma, na hora, um mural coletivo 'Mosaico Cultural da Turma', colando fotos, desenhos ou objetos com uma etiqueta de origem embaixo de cada um.",
        "Feche pedindo que cada aluno escreva no caderno uma síntese de 3 a 5 linhas sobre o que aprendeu sobre a diversidade cultural da turma — esse texto é o registro individual da aula."
      ]
    },
    {
      "theme": "De onde vieram? Migrações que formaram São Paulo",
      "curriculumCode": "EF04G02",
      "description": "Uso de mapas, imagens, fotografias, vídeos ou documentários para descrever como os processos migratórios e imigratórios contribuíram para a formação da Cidade e do Estado de São Paulo, relacionando migração e condições de infraestrutura.",
      "materials": ["Mapa-múndi e mapa do Brasil", "Imagens ou vídeo curto sobre imigração em São Paulo", "Cartolina"],
      "steps": [
        "Exibir um vídeo curto ou imagens sobre a chegada de migrantes e imigrantes em São Paulo.",
        "Localizar no mapa-múndi e no mapa do Brasil as regiões de origem citadas.",
        "Discutir em roda como esses grupos ajudaram a formar bairros, comércios e costumes da cidade.",
        "Propor pesquisa, com apoio da família, sobre a origem de cada aluno ou de pessoas próximas.",
        "Construir um gráfico ou mural coletivo com as origens levantadas pela turma.",
        "Relacionar, em discussão coletiva, migração e necessidades de infraestrutura (moradia, transporte, saúde)."
      ],
      "classScript": [
        "Abra perguntando: 'Vocês sabem de onde vieram as pessoas que moram na sua rua ou no seu prédio? Todo mundo em São Paulo é 'de São Paulo'?'",
        "Exiba o vídeo ou as imagens sobre migração e imigração na cidade, pedindo que prestem atenção em de onde as pessoas vieram e por quê.",
        "No mapa-múndi, cole adesivos ou marque com giz de cera os países citados (Itália, Japão, Portugal, países da América Latina); no mapa do Brasil, marque estados de onde vieram migrantes (Bahia, Pernambuco, Minas Gerais, Paraná).",
        "Em roda, pergunte: 'Que bairros de São Paulo vocês conhecem que têm nome ou comida ligada a um desses povos?' e cite exemplos se a turma não lembrar (Bixiga com os italianos, Liberdade com os japoneses, Bom Retiro com judeus e coreanos).",
        "Envie para casa uma pesquisa simples: perguntar a um familiar ou vizinho de onde a família dele veio antes de morar em São Paulo.",
        "Na aula seguinte (ou no fim desta, se der tempo), monte na lousa um gráfico de barras coletivo contando quantos alunos têm origem em cada lugar levantado, e reproduza em cartolina.",
        "Feche com uma discussão: 'Se muita gente de outros lugares veio morar aqui, do que a cidade precisou construir a mais? Escola, hospital, casa, transporte?' — anote as respostas na lousa.",
        "Peça que cada aluno registre no caderno duas frases: de onde veio sua família (ou a de um colega) e uma necessidade de infraestrutura que esse crescimento populacional trouxe para a cidade."
      ]
    },
    {
      "theme": "Como se escolhe quem cuida da cidade: o processo eleitoral municipal",
      "curriculumCode": "EF04G03",
      "description": "Conhecimento de como se dá o processo eleitoral dentro do município, identificando funções e papéis dos órgãos do poder público municipal.",
      "materials": ["Imagens da prefeitura e da câmara municipal", "Caixa decorada como urna", "Cédulas de papel"],
      "steps": [
        "Apresentar imagens da prefeitura e da câmara de vereadores da cidade, explicando suas funções.",
        "Explicar de forma simples o que é eleição e para que servem prefeito e vereadores.",
        "Simular uma 'eleição de turma' para escolher um representante, com votação em urna improvisada.",
        "Apurar os votos coletivamente e discutir o resultado.",
        "Fazer uma roda de conversa relacionando a simulação ao processo eleitoral real do município.",
        "Registrar no caderno as funções do prefeito e dos vereadores."
      ],
      "classScript": [
        "Comece perguntando: 'Quem vocês acham que manda na nossa cidade? Quem decide se vai construir uma praça ou consertar uma rua?'",
        "Mostre as imagens do prédio da prefeitura e da câmara municipal e explique, com palavras simples, que o prefeito administra a cidade no dia a dia e os vereadores criam e votam as leis do município.",
        "Explique o que é uma eleição, o que é um candidato e o que é votar, reforçando que o voto é secreto — ninguém precisa contar em quem votou.",
        "Anuncie a 'eleição de turma': peça 2 ou 3 voluntários que queiram ser 'candidatos a representante da turma' e dê um minuto para cada um dizer à turma o que faria se fosse escolhido.",
        "Distribua as cédulas de papel, peça que cada aluno escreva ou marque seu voto em segredo e deposite na urna improvisada.",
        "Apure os votos na frente da turma, um a um, anotando o total na lousa, e anuncie o resultado.",
        "Puxe uma roda de conversa relacionando a brincadeira com a eleição de verdade: 'Isso que fizemos agora é parecido com o que acontece quando a cidade escolhe prefeito e vereadores — só que lá vota a cidade inteira.'",
        "Peça que cada aluno registre no caderno, em poucas linhas, a diferença entre a função do prefeito e a função dos vereadores."
      ]
    },
    {
      "theme": "Paisagens produtivas do Estado de São Paulo",
      "curriculumCode": "EF04G04",
      "description": "Identificação e reconhecimento dos diferentes arranjos produtivos e ambientais existentes no Estado de São Paulo.",
      "materials": ["Mapa do Estado de São Paulo", "Imagens de diferentes regiões do estado (litoral, interior, capital)", "Cartolina"],
      "steps": [
        "Apresentar o mapa do Estado de São Paulo e localizar a cidade onde os alunos vivem.",
        "Mostrar imagens de diferentes regiões do estado e identificar atividades econômicas presentes.",
        "Organizar grupos para associar as imagens a tipos de produção (indústria, agropecuária, turismo).",
        "Discutir como o ambiente (relevo, clima, vegetação) influencia essas atividades.",
        "Montar um cartaz coletivo classificando regiões do estado por tipo de arranjo produtivo.",
        "Socializar os cartazes em roda de conversa."
      ],
      "classScript": [
        "Pendure ou projete o mapa do Estado de São Paulo e peça que um aluno venha até a lousa apontar onde fica a cidade de São Paulo (ou o município onde a escola está).",
        "Pergunte: 'Vocês acham que em todo lugar do estado as pessoas trabalham do mesmo jeito?' e anote as respostas sem corrigir ainda.",
        "Mostre as imagens das diferentes regiões (praias do litoral, plantações do interior, prédios e fábricas da capital), pedindo que a turma descreva o que vê em cada uma.",
        "Organize grupos de 4 alunos e entregue um conjunto de imagens para cada grupo associar a um tipo de atividade: indústria, agropecuária ou turismo.",
        "Circule pelos grupos perguntando o porquê das escolhas: 'Por que vocês acham que essa imagem é agropecuária e não turismo?'",
        "Puxe uma discussão coletiva sobre como relevo, clima e vegetação influenciam essas atividades — por exemplo, por que o litoral vive de turismo e pesca, e o interior tem tanta plantação.",
        "Monte com a turma um cartaz coletivo dividido em três colunas (litoral, interior, capital), colando as imagens na coluna certa com o tipo de produção escrito embaixo.",
        "Encerre com uma roda de conversa em que cada grupo explica uma escolha do cartaz, e peça que todos copiem no caderno as três regiões do estado com um exemplo de atividade econômica de cada uma."
      ]
    },
    {
      "theme": "Como o Brasil se organiza: distrito, município, estado e região",
      "curriculumCode": "EF04G05",
      "description": "Conhecimento das unidades político-administrativas oficiais do Brasil — distrito, município, unidade da Federação e grande região — e dos processos de regionalização do país.",
      "materials": ["Mapa político do Brasil", "Mapa de divisão regional do Brasil", "Cartolina"],
      "steps": [
        "Apresentar o mapa político do Brasil, destacando estados e regiões.",
        "Explicar, com exemplos, os conceitos de distrito, município, unidade da Federação e grande região.",
        "Localizar no mapa o distrito, o município e a região onde a escola está situada.",
        "Propor um jogo de identificação: mostrar nomes de lugares e pedir que classifiquem como distrito, município, estado ou região.",
        "Construir um esquema coletivo mostrando a hierarquia dessas unidades.",
        "Registrar no caderno a organização territorial do Brasil."
      ],
      "classScript": [
        "Abra mostrando o mapa político do Brasil e pergunte: 'Esse país inteiro tem um nome só, mas ele é dividido em pedaços — quem sabe me dizer algum desses pedaços?'",
        "Vá apontando e nomeando os estados, destacando o Estado de São Paulo, e depois mostre o mapa de regiões, explicando que o Brasil também é dividido em 5 grandes regiões (Sudeste, Sul, Nordeste, Norte, Centro-Oeste).",
        "Explique com um exemplo bem próximo: 'São Paulo é uma unidade da Federação, um estado. Dentro dele existem vários municípios, e a cidade de São Paulo é um deles. E o município de São Paulo é dividido em distritos, como Pinheiros, Vila Mariana ou o distrito onde fica a nossa escola.'",
        "Escreva na lousa a sequência do maior para o menor: região > estado > município > distrito, e localize no mapa onde a escola está em cada um desses níveis.",
        "Proponha o jogo: leia em voz alta nomes de lugares (o distrito da escola, o Estado de São Paulo, a região Sudeste, o município de Santos) e peça que os alunos levantem cartõezinhos ou digam em voz alta se é distrito, município, estado ou região.",
        "Construa junto com a turma, na lousa ou em cartolina, um esquema de caixas encaixadas mostrando essa hierarquia, preenchido com os nomes reais que localizam a escola (região, estado, município e distrito específicos).",
        "Peça que cada aluno copie esse esquema no caderno preenchido com o próprio endereço territorial, como registro final da aula."
      ]
    },
    {
      "theme": "Aldeias indígenas e comunidades quilombolas no Estado de São Paulo",
      "curriculumCode": "EF04G06",
      "description": "Identificação e investigação de territórios étnico-culturais existentes no Estado de São Paulo, como aldeias indígenas e comunidades quilombolas.",
      "materials": ["Mapa do Estado de São Paulo com localização de aldeias e quilombos", "Imagens ou vídeo curto", "Textos informativos simples"],
      "steps": [
        "Apresentar imagens e um vídeo curto sobre aldeias indígenas e comunidades quilombolas do Estado de São Paulo.",
        "Localizar no mapa do estado onde ficam esses territórios.",
        "Fazer uma roda de conversa sobre modos de vida, cultura e importância desses territórios.",
        "Organizar grupos para pesquisar uma aldeia ou quilombo específico, com textos fornecidos pelo professor.",
        "Cada grupo apresenta suas descobertas para a turma.",
        "Produzir um registro (desenho ou texto) sobre o que aprenderam."
      ],
      "classScript": [
        "Pergunte à turma: 'Vocês sabiam que ainda existem aldeias indígenas dentro da cidade de São Paulo?' e deixe alguns palpites antes de responder.",
        "Mostre as imagens e o vídeo curto, citando exemplos reais e próximos, como a aldeia guarani do Pico do Jaraguá, na zona norte da capital, e um quilombo do Vale do Ribeira, como Ivaporunduva.",
        "No mapa do estado, marque com um adesivo ou caneta esses territórios, mostrando que eles não ficam só 'longe, no mato', mas também dentro da própria cidade.",
        "Abra uma roda de conversa perguntando: 'O que vocês acham que essas comunidades fazem para manter viva sua cultura, sua língua, suas festas?'",
        "Divida a turma em grupos e entregue um texto informativo simples sobre uma aldeia ou quilombo específico para cada grupo pesquisar (modo de vida, localização, tradições).",
        "Circule pelos grupos ajudando a destacar as informações principais do texto e sugerindo perguntas-guia: onde fica, quem vive lá, o que é importante preservar.",
        "Peça que cada grupo apresente suas descobertas para a turma em poucas frases, e anote na lousa um resumo coletivo dos territórios estudados.",
        "Feche pedindo que cada aluno produza um registro individual — um desenho do território pesquisado com uma legenda escrita, ou um pequeno texto — sobre o que aprendeu."
      ]
    },
    {
      "theme": "Pontos cardeais: se orientando pelo Sol",
      "curriculumCode": "EF04G07",
      "description": "Reconhecimento dos pontos cardeais a partir da observação do Sol e utilização desses pontos na localização de elementos físicos e humanos em paisagens rurais e urbanas.",
      "materials": ["Bússola simples (opcional)", "Imagens de paisagens rurais e urbanas", "Espaço externo (pátio da escola)"],
      "steps": [
        "Levar os alunos ao pátio pela manhã para observar de que lado o Sol nasce.",
        "Explicar que esse lado é o Leste e o lado oposto é o Oeste, localizando também Norte e Sul.",
        "Praticar a orientação com pontos cardeais no pátio, indicando objetos em cada direção.",
        "Em sala, usar imagens de paisagens rurais e urbanas para localizar elementos com os pontos cardeais.",
        "Propor um pequeno jogo de 'caça ao tesouro' com instruções baseadas em pontos cardeais.",
        "Registrar no caderno um desenho da rosa dos ventos."
      ],
      "classScript": [
        "Combine com antecedência um horário da manhã em que o sol ainda esteja baixo no céu e leve a turma ao pátio, pedindo que fiquem de frente para onde o sol aparece.",
        "Pergunte: 'Esse lado onde o sol nasce tem um nome — vocês já ouviram falar em Leste ou Nascente?' e explique que o lado oposto, onde o sol se põe, é o Oeste (ou Poente).",
        "Peça que estiquem o braço direito apontando para o Leste: explique que assim, à frente fica o Norte e atrás fica o Sul (ou ajuste conforme a posição do grupo), fixando os quatro pontos cardeais no espaço real do pátio.",
        "Pratique perguntando, um a um: 'O que tem para o Norte daqui? E para o Sul?' apontando para objetos reais do pátio ou da escola (o portão, a quadra, o bebedouro).",
        "De volta à sala, mostre imagens de uma paisagem rural e uma urbana e peça que a turma localize elementos usando os pontos cardeais, como 'a estrada fica a leste da fazenda'.",
        "Organize a 'caça ao tesouro': esconda um bilhete ou objeto na sala ou no pátio e dê pistas usando só os pontos cardeais ('ande dois passos para o norte, depois um para o leste'), com duplas se revezando para encontrar.",
        "Depois da brincadeira, pergunte o que ajudou a acertar o caminho e reforce que os pontos cardeais servem para não se perder.",
        "Encerre pedindo que cada aluno desenhe no caderno uma rosa dos ventos simples, com os quatro pontos cardeais nomeados corretamente."
      ]
    },
    {
      "theme": "Tipos de mapas do Estado de São Paulo",
      "curriculumCode": "EF04G08",
      "description": "Conhecimento e comparação de tipos variados de mapas do Estado de São Paulo, como mapas políticos, de bacias hidrográficas, de relevo e de vegetação.",
      "materials": ["Cópias de diferentes tipos de mapas do Estado de São Paulo", "Lápis de cor", "Lupa (opcional)"],
      "steps": [
        "Apresentar diferentes tipos de mapas do Estado de São Paulo (político, hidrográfico, de relevo, de vegetação).",
        "Explicar o que cada tipo de mapa representa e como ler a legenda.",
        "Organizar grupos, cada um analisando um tipo de mapa diferente.",
        "Cada grupo apresenta o que descobriu sobre seu mapa (o que mostra, cores, símbolos).",
        "Comparar coletivamente as informações de todos os mapas sobre uma mesma região.",
        "Produzir um mapa simples da sala ou da escola com legenda própria."
      ],
      "classScript": [
        "Espalhe na mesa ou projete os quatro tipos de mapa (político, hidrográfico, de relevo, de vegetação) e pergunte: 'Todos esses mapas são do mesmo lugar, o Estado de São Paulo — por que eles são tão diferentes?'",
        "Explique cada tipo com uma pergunta que ele responde: o político mostra 'onde termina uma cidade e começa outra', o hidrográfico mostra 'por onde passa a água', o de relevo mostra 'onde é mais alto ou mais baixo', o de vegetação mostra 'onde tem mais mata ou mais área ocupada'.",
        "Mostre como ler a legenda de um dos mapas junto com a turma, relacionando cor e símbolo ao que representam.",
        "Divida a turma em quatro grupos e entregue um tipo de mapa diferente para cada grupo analisar com lupa (se houver), anotando o que percebem sobre cores, símbolos e legenda.",
        "Peça que cada grupo apresente para a turma o que descobriu sobre seu mapa, respondendo: o que ele mostra e como sei disso pela legenda?",
        "Escolha uma mesma região do estado (por exemplo, a região onde fica a escola) e compare coletivamente o que cada um dos quatro mapas mostra sobre esse mesmo lugar.",
        "Proponha que a turma produza, em duplas, um mapa simples da sala de aula ou da escola, criando símbolos próprios e uma legenda explicando o que cada símbolo significa.",
        "Recolha os mapas produzidos como registro da aula, verificando se cada um tem uma legenda que explica seus próprios símbolos."
      ]
    },
    {
      "theme": "São Paulo e suas bacias hidrográficas: como a cidade se formou",
      "curriculumCode": "EF04G09",
      "description": "Reconhecimento do processo de formação da Cidade de São Paulo a partir das bacias hidrográficas, incluindo a identificação da bacia, das cidades ribeirinhas e das consequências ambientais da ocupação humana.",
      "materials": ["Mapa das bacias hidrográficas de São Paulo", "Imagens de rios da cidade", "Texto informativo simples"],
      "steps": [
        "Apresentar o mapa das bacias hidrográficas do Estado ou da Cidade de São Paulo.",
        "Explicar o conceito de bacia hidrográfica com um desenho esquemático simples.",
        "Mostrar imagens de rios da cidade e discutir sua importância histórica.",
        "Fazer uma roda de conversa sobre como a ocupação humana ao redor dos rios afetou o ambiente.",
        "Organizar grupos para listar consequências da ocupação desordenada perto dos rios.",
        "Registrar em texto coletivo a relação entre a formação da cidade e as bacias hidrográficas."
      ],
      "classScript": [
        "Pergunte à turma: 'Vocês sabem o nome de algum rio de São Paulo?' e liste na lousa o que surgir (Tietê, Pinheiros, Tamanduateí costumam aparecer).",
        "Apresente o mapa das bacias hidrográficas e mostre onde ficam esses rios, explicando que uma bacia hidrográfica é como uma 'família de rios' que deságuam em um rio principal.",
        "Desenhe na lousa um esquema simples de bacia hidrográfica (linhas menores que se juntam a uma linha maior, como galhos chegando a um tronco), pedindo que copiem no caderno.",
        "Mostre imagens do rio Tietê ou de outro rio da cidade em diferentes épocas, contando que a cidade de São Paulo nasceu bem perto desses rios, que eram fonte de água e transporte.",
        "Abra uma roda de conversa: 'O que vocês acham que aconteceu com os rios quando a cidade cresceu muito ao redor deles?' — conduza para poluição, retificação, enchentes.",
        "Organize grupos para listar consequências da ocupação desordenada perto dos rios (lixo, esgoto, construções em área de risco, enchentes), anotando as ideias em uma folha.",
        "Reúna as ideias dos grupos na lousa e construa, com a turma ditando e você escrevendo, um texto coletivo curto relacionando a formação da cidade às suas bacias hidrográficas.",
        "Peça que cada aluno copie esse texto coletivo no caderno como registro final da aula."
      ]
    },
    {
      "theme": "Natureza no meu bairro: preservação e transformação",
      "curriculumCode": "EF04G10",
      "description": "Reconhecimento, no lugar em que vive, das diferentes manifestações da natureza e percepção das transformações causadas pela ação humana.",
      "materials": ["Câmera ou celular para fotos (ou material para desenho)", "Caderno de campo", "Lápis"],
      "steps": [
        "Propor uma caminhada observacional pelo entorno da escola, ou usar fotos trazidas de casa.",
        "Pedir que os alunos registrem, por foto ou desenho, elementos da natureza presentes no bairro.",
        "Fazer uma roda de conversa sobre mudanças percebidas: áreas verdes que diminuíram, construções, poluição.",
        "Organizar grupos para montar um comparativo entre 'natureza preservada' e 'natureza alterada'.",
        "Montar um painel coletivo com os registros classificados.",
        "Discutir coletivamente ações simples para preservar a natureza local."
      ],
      "classScript": [
        "Antes de sair, combine com a turma o que observar durante a caminhada: árvores, praças, terrenos vazios, córregos, lixo, construções — e distribua o caderno de campo para anotações rápidas.",
        "Faça uma caminhada breve e segura pelo entorno da escola (ou, se não for possível, use fotos que os alunos tragam de casa do próprio bairro).",
        "Durante o percurso, pare em pontos-chave e pergunte: 'Isso aqui é natureza ou foi construído pelas pessoas? Como será que era esse lugar antes?', pedindo que registrem por foto ou desenho rápido.",
        "De volta à sala, puxe uma roda de conversa: 'O que vocês notaram que mudou no bairro por causa das construções? Onde tinha mais verde antes?'",
        "Organize grupos de 4 alunos para separar os registros trazidos em duas categorias: 'natureza preservada' (praças, árvores cuidadas, quintais) e 'natureza alterada' (terrenos com lixo, córrego poluído, área desmatada).",
        "Ajude os grupos a montar um painel coletivo colando as fotos ou desenhos nas duas colunas, com uma frase curta explicando cada classificação.",
        "Feche com uma discussão coletiva: 'O que a gente, como turma ou como moradores do bairro, poderia fazer para cuidar melhor dessas áreas?' — anote as ideias na lousa.",
        "Peça que cada aluno escreva no caderno de campo uma ação concreta que poderia adotar para ajudar a preservar a natureza do bairro."
      ]
    },
    {
      "theme": "Rios e córregos da cidade: mudanças e vulnerabilidade social",
      "curriculumCode": "EF04G11",
      "description": "Identificação e compreensão das mudanças ocorridas nos rios da cidade e nos córregos do entorno da escola em decorrência de ações antrópicas, relacionando-as à vulnerabilidade social.",
      "materials": ["Imagens de rios ou córregos em diferentes épocas", "Mapa do entorno da escola"],
      "steps": [
        "Apresentar imagens comparativas de um rio ou córrego da cidade em diferentes épocas.",
        "Identificar no mapa do entorno da escola se há córregos ou rios próximos.",
        "Discutir em roda quais ações humanas alteraram esses cursos d'água (construções, lixo, esgoto).",
        "Relacionar as mudanças observadas a situações de risco, como enchentes, em áreas vulneráveis.",
        "Organizar grupos para propor soluções simples de cuidado com os córregos.",
        "Registrar as propostas em cartaz para exposição na escola."
      ],
      "classScript": [
        "Mostre lado a lado uma imagem antiga e uma atual do mesmo rio ou córrego da cidade e pergunte: 'O que mudou nesse rio de um tempo para o outro?'",
        "Deixe a turma descrever livremente as diferenças (mais cimento, menos mata nas margens, água mais suja, canalização) antes de você completar.",
        "Traga o mapa do entorno da escola e pergunte se alguém sabe de algum córrego ou rio perto de casa ou da escola, mesmo que hoje esteja 'escondido' embaixo de uma rua.",
        "Puxe uma roda de conversa sobre quais ações humanas alteraram esses cursos d'água: construções nas margens, lixo jogado, esgoto despejado direto no córrego.",
        "Relacione essas mudanças a situações de risco, explicando que córregos estreitados ou cheios de lixo transbordam mais fácil, causando enchentes que atingem mais forte quem mora em áreas mais vulneráveis, perto das margens.",
        "Pergunte: 'Por que vocês acham que geralmente quem sofre mais com enchente é quem mora mais perto do córrego, em casas mais simples?' e deixe a turma refletir.",
        "Organize grupos para propor, em poucas frases, uma solução simples de cuidado com os córregos (não jogar lixo, plantar árvores na margem, denunciar esgoto irregular).",
        "Peça que cada grupo registre sua proposta em um cartaz, para expor no corredor da escola como campanha de conscientização."
      ]
    },
    {
      "theme": "Solo e água: recursos essenciais para a vida",
      "curriculumCode": "EF04G12",
      "description": "Reconhecimento da importância do solo e da água para a vida, identificando seus diferentes usos, como plantação e extração de materiais, entre outras possibilidades, incluindo áreas de risco à ocupação.",
      "materials": ["Amostras de diferentes tipos de solo (terra, areia)", "Copos transparentes", "Água"],
      "steps": [
        "Realizar um experimento simples comparando como a água se comporta em diferentes tipos de solo.",
        "Discutir os diferentes usos do solo: plantação, construção, extração de materiais.",
        "Discutir os diferentes usos da água no cotidiano e na produção.",
        "Apresentar imagens de áreas de risco por ocupação inadequada do solo, como encostas e margens de rios.",
        "Organizar grupos para listar usos adequados e inadequados do solo e da água.",
        "Produzir um cartaz 'Cuidando do solo e da água' com as conclusões da turma."
      ],
      "classScript": [
        "Separe amostras de terra e areia em copos transparentes e pergunte: 'Se eu jogar água nesses dois potes, ela vai se comportar do mesmo jeito?'",
        "Faça o experimento com a turma observando: despeje água devagar em cada copo e peça que registrem o que acontece (a água escorre mais rápido na areia, é absorvida diferente na terra).",
        "Pergunte: 'Por que isso importa? Onde seria melhor construir uma casa, num solo que absorve bem a água ou num que não absorve?'",
        "Puxe uma discussão sobre os diferentes usos do solo no dia a dia: plantação de alimentos, construção de casas e prédios, extração de areia e pedra.",
        "Discuta também os usos da água: beber, higiene, irrigação de plantações, fabricação de produtos — pergunte de onde vem a água que usam em casa.",
        "Mostre imagens de áreas de risco, como encostas de morro ocupadas por casas ou construções bem na margem de rios, e explique por que esses locais são perigosos para se morar.",
        "Organize grupos para listar, em uma folha dividida ao meio, usos adequados e usos inadequados do solo e da água que já discutiram.",
        "Reúna as ideias de todos os grupos e produza com a turma um cartaz coletivo 'Cuidando do solo e da água', com as principais conclusões escritas para exposição na sala."
      ]
    },
    {
      "theme": "Impactos do uso do solo e da água no dia a dia",
      "curriculumCode": "EF04G13",
      "description": "Descrição dos impactos do uso do solo e da água no cotidiano da cidade e do campo, reconhecendo a importância de atitudes responsáveis de cuidado com o ambiente em que se vive.",
      "materials": ["Imagens de impactos ambientais (poluição, desmatamento, enchentes)", "Cartolina", "Canetinha"],
      "steps": [
        "Apresentar imagens de impactos do uso inadequado do solo e da água.",
        "Fazer uma roda de conversa sobre como esses impactos afetam a vida das pessoas na cidade e no campo.",
        "Organizar grupos para discutir causas e consequências de um impacto escolhido.",
        "Cada grupo cria um cartaz com uma atitude responsável para reduzir esse impacto.",
        "Apresentar os cartazes para a turma.",
        "Combinar coletivamente um 'compromisso da turma' com o cuidado ambiental na escola."
      ],
      "classScript": [
        "Mostre, uma a uma, imagens de poluição de rio, desmatamento e enchente, perguntando a cada uma: 'O que vocês acham que causou isso?'",
        "Puxe uma roda de conversa sobre como esses impactos afetam a vida das pessoas, tanto na cidade (enchente que invade casa, rua alagada, ar poluído) quanto no campo (terra que não produz mais, rio sem peixe).",
        "Divida a turma em grupos e atribua um impacto ambiental diferente para cada grupo (poluição da água, desmatamento, lixo nas ruas, enchentes).",
        "Peça que cada grupo discuta e anote em uma folha: o que causa esse impacto e quais são suas consequências para as pessoas do bairro ou da região.",
        "Oriente cada grupo a criar um cartaz com uma atitude responsável e prática para reduzir o impacto escolhido, com frase curta e desenho.",
        "Organize uma apresentação rápida em que cada grupo mostra seu cartaz e lê a atitude proposta para o restante da turma.",
        "Depois de todas as apresentações, conduza a turma a escolher, entre as atitudes propostas, de 3 a 5 que sejam possíveis de praticar na própria escola.",
        "Escreva na lousa e depois registre em cartolina um 'compromisso da turma', que os alunos copiam no caderno como combinado coletivo de cuidado ambiental."
      ]
    },
    {
      "theme": "Trabalho no campo e na cidade: comparando realidades",
      "curriculumCode": "EF04G14",
      "description": "Comparação das características do trabalho no campo e na cidade, identificando os tipos de trabalho existentes no bairro, na cidade e no Estado.",
      "materials": ["Imagens de trabalhadores rurais e urbanos", "Cartolina dividida em duas colunas"],
      "steps": [
        "Apresentar imagens de diferentes trabalhos realizados no campo e na cidade.",
        "Organizar duplas para classificar as imagens em 'trabalho rural' e 'trabalho urbano'.",
        "Fazer uma roda de conversa sobre semelhanças e diferenças entre esses trabalhos.",
        "Propor uma pesquisa, com apoio da família, sobre o trabalho de pessoas próximas ao aluno.",
        "Montar um quadro coletivo com os tipos de trabalho identificados no bairro, na cidade e no estado.",
        "Socializar o quadro em roda de conversa."
      ],
      "classScript": [
        "Espalhe pela mesa ou projete imagens variadas de trabalhadores (agricultor, motorista de ônibus, pescador, vendedor de loja, criador de gado, entregador) e pergunte quem consegue identificar cada profissão.",
        "Organize duplas e entregue um conjunto de imagens para que classifiquem em duas pilhas: 'trabalho rural' e 'trabalho urbano', explicando que 'rural' é ligado ao campo e 'urbano' à cidade.",
        "Corrija coletivamente, pedindo que algumas duplas expliquem por que classificaram determinada imagem daquele jeito.",
        "Puxe uma roda de conversa: 'Que semelhanças existem entre um trabalho no campo e um na cidade? E que diferenças?' — explore ritmo, ferramentas, produto final.",
        "Peça que cada aluno pergunte em casa, a um familiar ou vizinho, qual é o trabalho dessa pessoa e onde ele é feito (campo ou cidade), trazendo a resposta na próxima aula.",
        "Na roda seguinte, recolha as respostas da pesquisa e monte na lousa um quadro coletivo organizando os trabalhos encontrados por bairro, cidade e estado.",
        "Socialize o quadro perguntando se algum trabalho apareceu mais de uma vez e o que isso pode revelar sobre o bairro onde moram.",
        "Peça que cada aluno copie o quadro coletivo no caderno, junto com o trabalho da pessoa que pesquisou em casa."
      ]
    },
    {
      "theme": "Da matéria-prima ao consumo: o caminho dos produtos",
      "curriculumCode": "EF04G15",
      "description": "Identificação do processo de produção, com transformação de matérias-primas, além da circulação e do consumo de diferentes produtos no Estado de São Paulo.",
      "materials": ["Embalagens de produtos variados", "Imagens do processo produtivo (plantação, fábrica, loja)", "Cartolina"],
      "steps": [
        "Apresentar um produto do cotidiano, como suco de laranja ou pão, e perguntar de onde ele vem.",
        "Mostrar imagens das etapas: matéria-prima, transformação, circulação e consumo.",
        "Organizar grupos para montar a sequência correta das etapas usando imagens embaralhadas.",
        "Discutir coletivamente outros produtos do Estado de São Paulo e seu processo de produção.",
        "Cada grupo escolhe um produto e desenha seu 'caminho' da produção ao consumo.",
        "Expor os desenhos em um varal da sala, formando um mural do processo produtivo."
      ],
      "classScript": [
        "Mostre uma embalagem de suco de laranja (ou pão, ou outro produto simples) e pergunte: 'Antes de chegar nesse pacote no mercado, de onde será que isso veio?'",
        "Deixe a turma arriscar palpites e vá conduzindo até a ideia de que existe um caminho: a matéria-prima (a laranja no pé), a transformação (a fábrica que faz o suco), a circulação (o caminhão que leva) e o consumo (a pessoa comprando e bebendo).",
        "Mostre as imagens de cada etapa desse processo, nomeando cada uma na lousa em sequência.",
        "Embaralhe as imagens e organize grupos para que reconstruam a ordem correta das etapas, colando em uma tira de papel.",
        "Corrija coletivamente pedindo que um grupo explique sua sequência, e discuta se houve alguma etapa esquecida.",
        "Amplie a conversa para outros produtos do Estado de São Paulo, como o café, a cana-de-açúcar (para o açúcar) ou o leite, perguntando qual seria a matéria-prima e onde cada etapa aconteceria.",
        "Peça que cada grupo escolha um produto do cotidiano e desenhe, em sequência, seu 'caminho' da produção até o consumo, com uma legenda curta em cada desenho.",
        "Organize um varal na sala para pendurar os desenhos dos grupos, formando um mural coletivo do processo produtivo — esse mural é o registro final da turma sobre o tema."
      ]
    }
  ],
  historia: [
    {
      "theme": "De onde vem a água que usamos em São Paulo?",
      "curriculumCode": "EF04H01",
      "description": "Investigação sobre como os moradores de uma cidade como São Paulo têm acesso à água no seu dia a dia.",
      "materials": ["Cartolina", "Canetinhas", "Imagens do sistema de abastecimento de água", "Caderno de anotações"],
      "steps": [
        "Fazer uma roda de conversa sobre os usos da água no dia a dia dos alunos.",
        "Propor que perguntem em casa de onde vem a água que chega pela torneira.",
        "Apresentar imagens simples do caminho da água até as residências.",
        "Registrar em desenho o trajeto da água, da represa até a torneira.",
        "Socializar os desenhos em um mural coletivo da sala."
      ],
      "classScript": [
        "Abra perguntando: 'Quantos de vocês já pararam pra pensar de onde vem a água que sai da torneira lá de casa?' Deixe vários alunos responderem livremente.",
        "Anote na lousa as hipóteses da turma sem corrigir ainda, só listando o que foi dito.",
        "Explique que hoje a turma vai investigar juntos o caminho da água até São Paulo.",
        "Mostre as imagens do sistema de abastecimento (represa, estação de tratamento, encanamento, caixa d'água, torneira) uma de cada vez, explicando cada etapa com uma frase curta.",
        "Combine que, em casa ou na saída, cada um vai perguntar a um adulto de onde vem a água — retome as respostas no início da próxima aula.",
        "Organize duplas para desenhar o trajeto da água, da represa até a torneira, numerando as etapas do desenho.",
        "Circule pela sala conferindo se cada dupla incluiu pelo menos represa, tratamento e torneira no desenho.",
        "Feche montando um mural coletivo 'De onde vem nossa água', colando os desenhos das duplas em sequência na parede da sala."
      ]
    },
    {
      "theme": "Os rios na vida das pessoas: transporte, trabalho e lazer",
      "curriculumCode": "EF04H02",
      "description": "Identificação das diferentes relações que os grupos humanos estabelecem com os rios, como deslocamento, atividades econômicas e lazer, em diferentes tempos e espaços.",
      "materials": ["Imagens impressas de rios com diferentes usos", "Cartaz", "Cola", "Tesoura sem ponta"],
      "steps": [
        "Apresentar imagens de rios usados para transporte, pesca, trabalho e lazer.",
        "Organizar os alunos em grupos para classificar as imagens por tipo de uso.",
        "Comparar como esses usos aconteciam no passado e como acontecem hoje.",
        "Discutir em grupo por que os rios são importantes para diferentes atividades humanas.",
        "Montar um cartaz coletivo reunindo as classificações de cada grupo."
      ],
      "classScript": [
        "Abra perguntando: 'Pra que servem os rios na vida das pessoas, além de dar água pra beber?' Anote as respostas na lousa em uma lista aberta.",
        "Apresente as imagens impressas de rios usados para transporte (barcos), trabalho (pesca) e lazer (banho, passeio).",
        "Organize grupos de quatro e distribua um conjunto de imagens embaralhadas para cada grupo classificar em três colunas: transporte, trabalho, lazer.",
        "Circule perguntando a cada grupo por que classificaram uma determinada imagem daquele jeito.",
        "Puxe uma discussão coletiva: 'Será que os rios eram usados assim há 100 anos?' comparando o uso passado (barcos a remo, lavadeiras) com o uso de hoje (barcos a motor, lazer em represas).",
        "Pergunte se algum aluno já usou ou viu alguém usando um rio para alguma dessas finalidades, puxando exemplos da própria vida da turma.",
        "Peça que cada grupo cole as imagens já classificadas em um cartaz com as três colunas escritas a canetinha.",
        "Feche com cada grupo apresentando rapidamente seu cartaz, que fica exposto na sala como registro coletivo da aula."
      ]
    },
    {
      "theme": "Seguindo o caminho da água até a cidade",
      "curriculumCode": "EF04H03",
      "description": "Localização de onde chegam as águas que abastecem a cidade, identificando mananciais e represas.",
      "materials": ["Mapa simplificado da Grande São Paulo", "Lápis de cor", "Cartolina", "Fita adesiva"],
      "steps": [
        "Apresentar um mapa simples com os principais mananciais e represas de São Paulo.",
        "Identificar em conjunto as represas mais próximas da região da escola.",
        "Traçar no mapa o caminho que a água percorre até chegar às casas.",
        "Construir um esquema ou maquete simples representando esse trajeto.",
        "Conversar sobre a importância de preservar os mananciais."
      ],
      "classScript": [
        "Inicie mostrando o mapa simplificado da Grande São Paulo e perguntando: 'Alguém sabe o nome de alguma represa ou reservatório que abastece nossa região?'",
        "Liste na lousa os nomes que surgirem (Guarapiranga, Billings, Cantareira) completando com os que a turma não citar.",
        "Localize coletivamente no mapa, com todos olhando, onde ficam essas represas em relação à escola.",
        "Organize duplas para traçar no mapa, com lápis de cor, uma linha do manancial até a região indicada.",
        "Circule ajudando as duplas que tiverem dificuldade de localizar pontos no mapa.",
        "Proponha, em grupos de quatro, a construção de um esquema simples em cartolina: represa, tubulação, estação de tratamento, torneira.",
        "Feche com uma roda de conversa: 'O que aconteceria se a gente não cuidasse dessas represas?' — registre as respostas na lousa.",
        "Peça que cada aluno copie no caderno o esquema construído pelo seu grupo, como registro final da aula."
      ]
    },
    {
      "theme": "Rios escondidos: por que não vemos mais alguns rios de São Paulo?",
      "curriculumCode": "EF04H04",
      "description": "Compreensão de como alguns rios da Cidade de São Paulo tiveram seus cursos alterados ou tornaram-se invisíveis no processo de construção e ocupação da cidade.",
      "materials": ["Fotografias antigas e atuais de rios da cidade", "Projetor ou impressões", "Papel para registro"],
      "steps": [
        "Mostrar fotografias antigas e atuais de um rio que foi canalizado, como o Tamanduateí.",
        "Explicar de forma simples o que significa canalizar ou retificar um rio.",
        "Localizar no mapa atual da cidade onde esses rios ficam hoje, muitas vezes sob avenidas.",
        "Debater em roda os impactos dessas mudanças para a cidade e o meio ambiente.",
        "Registrar coletivamente as descobertas em um texto curto elaborado com a turma."
      ],
      "classScript": [
        "Mostre lado a lado uma fotografia antiga e uma atual do Rio Tamanduateí, perguntando: 'Vocês acham que isso é o mesmo lugar?'",
        "Explique de forma simples o que é canalizar ou retificar um rio, desenhando na lousa um rio livre ao lado de um rio dentro de um canal de concreto.",
        "Pergunte: 'Vocês sabiam que embaixo de várias avenidas de São Paulo existe um rio escondido?' e mostre no mapa atual onde ficam essas avenidas.",
        "Organize uma roda de debate: 'Por que será que canalizaram os rios da cidade?' e depois 'Isso trouxe só vantagens ou também problemas?' — anote os argumentos na lousa em duas colunas.",
        "Puxe exemplos de enchentes que a turma já ouviu falar ou viveu na cidade, relacionando com o tema estudado.",
        "Construa coletivamente, com a turma ditando e você escrevendo na lousa, um texto curto de quatro a cinco frases sobre o que descobriram.",
        "Peça que cada aluno copie esse texto coletivo no caderno, podendo acrescentar um desenho do 'antes e depois' do rio estudado."
      ]
    },
    {
      "theme": "Como São Paulo usou a água de seus rios ao longo do tempo",
      "curriculumCode": "EF04H05",
      "description": "Conhecimento da história do uso da água na Cidade de São Paulo a partir dos seus rios.",
      "materials": ["Imagens de diferentes períodos históricos de São Paulo", "Barbante", "Fichas de papel", "Prendedores de roupa"],
      "steps": [
        "Apresentar imagens de diferentes épocas mostrando o uso da água na cidade.",
        "Ler em voz alta um texto informativo curto e adaptado sobre o tema.",
        "Discutir com a turma o que mudou na forma de usar a água ao longo do tempo.",
        "Organizar as imagens em uma linha do tempo usando barbante e fichas.",
        "Apresentar a linha do tempo construída para outra turma ou para os familiares."
      ],
      "classScript": [
        "Abra mostrando imagens de diferentes épocas (moradores se banhando no rio, lavadeiras, bondes ao lado do rio, a cidade atual), perguntando o que muda entre elas.",
        "Leia em voz alta um texto informativo curto e adaptado sobre a história do uso da água em São Paulo, parando a cada trecho para perguntar o que entenderam.",
        "Pergunte: 'Na época dos avós de vocês, será que a água era usada do mesmo jeito que hoje?' — valorize quem quiser puxar alguma história de família.",
        "Escreva na lousa, junto com a turma, uma lista das mudanças identificadas (ex: antes se banhava no rio, hoje não dá mais por causa da poluição).",
        "Distribua fichas de papel e peça que, em duplas, escrevam uma frase-legenda para cada imagem apresentada.",
        "Estique o barbante de um lado a outro da sala e organize com a turma as fichas em ordem cronológica, prendendo com os prendedores de roupa.",
        "Peça que cada aluno copie no caderno a linha do tempo construída, com pelo menos três marcos e suas legendas.",
        "Combine que a linha do tempo ficará exposta para outra turma ou para os familiares visitarem."
      ]
    },
    {
      "theme": "Grandes rios do Brasil e suas histórias",
      "curriculumCode": "EF04H06",
      "description": "Conhecimento da história de importantes rios nacionais.",
      "materials": ["Mapa do Brasil", "Textos informativos simples sobre rios brasileiros", "Cartolina", "Canetinhas"],
      "steps": [
        "Apresentar um mapa do Brasil destacando seus principais rios.",
        "Dividir a turma em grupos, cada um pesquisando um rio brasileiro diferente.",
        "Orientar o preenchimento de uma ficha informativa sobre o rio pesquisado.",
        "Solicitar que cada grupo apresente suas descobertas para a turma.",
        "Montar um painel coletivo reunindo os rios brasileiros estudados."
      ],
      "classScript": [
        "Abra com o mapa do Brasil na lousa e pergunte: 'Que rios brasileiros vocês já ouviram falar?' — anote os nomes citados.",
        "Complete a lista destacando rios importantes que não foram citados, como Amazonas, São Francisco, Tietê e Paraná.",
        "Divida a turma em grupos, cada um recebendo um texto informativo simples sobre um rio diferente.",
        "Oriente o preenchimento de uma ficha com: nome do rio, estados por onde passa e importância (economia, transporte, etc.).",
        "Circule pelos grupos ajudando a localizar o rio pesquisado no mapa do Brasil.",
        "Peça que cada grupo apresente suas descobertas em até um minuto para o resto da turma.",
        "Monte com a turma um painel coletivo, colando cada ficha ao lado do respectivo rio marcado no mapa.",
        "Feche perguntando: 'Qual desses rios vocês gostariam de conhecer pessoalmente, e por quê?' e peça que cada aluno registre a resposta em uma frase no caderno."
      ]
    },
    {
      "theme": "Tietê, São Francisco e Amazonas: ontem e hoje",
      "curriculumCode": "EF04H07",
      "description": "Seleção de características de importantes rios nacionais, como o Tietê, o São Francisco e o Amazonas, comparando o presente e o passado.",
      "materials": ["Imagens antigas e atuais dos três rios", "Quadro comparativo impresso", "Lápis"],
      "steps": [
        "Dividir a turma em três grupos, cada um responsável por um dos rios.",
        "Distribuir imagens antigas e atuais do rio para cada grupo analisar.",
        "Preencher um quadro comparativo com características de cada época.",
        "Apresentar as comparações para a turma toda.",
        "Construir um mural comparativo reunindo os três rios estudados."
      ],
      "classScript": [
        "Divida a turma em três grupos grandes, cada um responsável por um dos rios: Tietê, São Francisco e Amazonas.",
        "Distribua para cada grupo um conjunto de imagens antigas e atuais do rio correspondente.",
        "Peça que analisem as imagens e conversem: 'O que mudou? O que continua igual?'",
        "Circule perguntando a cada grupo o que já identificaram, ajudando a nomear as mudanças (poluição, construções, represas).",
        "Oriente o preenchimento do quadro comparativo impresso, com colunas 'antes' e 'hoje' para uso, aparência e problemas do rio.",
        "Reúna a turma e peça que cada grupo apresente seu rio usando o quadro preenchido.",
        "Construa coletivamente na lousa um mural comparativo, com uma coluna para cada rio, copiando os pontos principais trazidos por cada grupo.",
        "Peça que cada aluno registre no caderno pelo menos uma semelhança e uma diferença entre os três rios estudados."
      ]
    },
    {
      "theme": "Um rio famoso do mundo",
      "curriculumCode": "EF04H08",
      "description": "Conhecimento da história de um importante rio de outra localidade do mundo.",
      "materials": ["Mapa-múndi", "Imagens ou vídeo curto sobre um rio estrangeiro", "Ficha de registro"],
      "steps": [
        "Apresentar um mapa-múndi destacando rios importantes de outros países.",
        "Contar de forma breve a história de um rio, como o Nilo, no Egito.",
        "Assistir a um vídeo curto ou ouvir uma leitura sobre esse rio.",
        "Registrar em uma ficha as principais informações aprendidas.",
        "Comparar esse rio com rios brasileiros já conhecidos pela turma."
      ],
      "classScript": [
        "Mostre o mapa-múndi e pergunte: 'Vocês conhecem algum rio de fora do Brasil?' — deixe a turma arriscar nomes.",
        "Localize no mapa o rio Nilo, no Egito, e pergunte o que já sabem sobre o Egito (pirâmides, deserto).",
        "Conte de forma breve a história do rio Nilo: como as cheias regavam as plantações e permitiam a vida no meio do deserto.",
        "Exiba um vídeo curto ou faça uma leitura em voz alta sobre o rio, parando para explicar palavras difíceis.",
        "Distribua a ficha de registro e peça que anotem: nome do rio, país e uma curiosidade aprendida.",
        "Puxe uma comparação coletiva: 'Em que esse rio se parece ou se diferencia dos rios brasileiros que já estudamos?' — registre na lousa.",
        "Feche pedindo que cada aluno complete a ficha com essa comparação por escrito, entregando como registro da aula."
      ]
    },
    {
      "theme": "Rios que cruzam continentes: Tejo, Nilo e Níger",
      "curriculumCode": "EF04H09",
      "description": "Seleção de características de um importante rio de outro continente do mundo, como o Tejo em Portugal, o Nilo no Egito ou o Níger no Mali.",
      "materials": ["Mapa-múndi", "Textos curtos sobre os três rios", "Cartaz", "Canetinhas"],
      "steps": [
        "Localizar no mapa-múndi os rios Tejo, Nilo e Níger e seus países.",
        "Formar grupos, cada um pesquisando um dos três rios.",
        "Preencher uma ficha com localização, povos e importância do rio pesquisado.",
        "Apresentar os resultados por meio de um cartaz produzido pelo grupo.",
        "Realizar uma roda de comparação entre os três rios estudados."
      ],
      "classScript": [
        "Peça que localizem no mapa-múndi os três rios — Tejo em Portugal, Nilo no Egito, Níger no Mali — circulando os países com o dedo.",
        "Divida a turma em três grupos, cada um recebendo um texto curto sobre um dos rios.",
        "Oriente o preenchimento de uma ficha com localização, povos que vivem às margens e a importância econômica ou cultural do rio.",
        "Circule pelos grupos conferindo se estão localizando corretamente o país no mapa antes de escrever.",
        "Peça que cada grupo produza um cartaz simples com o nome do rio, um desenho do mapa e as informações da ficha.",
        "Reúna a turma em roda e peça que cada grupo apresente seu cartaz em poucas frases.",
        "Promova uma comparação final: 'O que esses três rios têm em comum, apesar de ficarem em continentes diferentes?' — anote as respostas na lousa.",
        "Peça que cada aluno copie no caderno uma frase de comparação entre os três rios, encerrando o registro da aula."
      ]
    },
    {
      "theme": "Visita a um rio ou córrego da cidade",
      "curriculumCode": "EF04H10",
      "description": "Observação e conhecimento das vivências sociais, culturais e ambientais de córregos, nascentes, represas ou de um rio da cidade.",
      "materials": ["Ficha de observação", "Câmera ou celular para fotos (se possível)", "Prancheta", "Lápis"],
      "steps": [
        "Identificar um córrego, represa ou rio próximo à escola ou ao bairro dos alunos.",
        "Organizar uma visita de campo ou um passeio virtual com fotos e vídeos do local.",
        "Observar e registrar em ficha as características sociais, culturais e ambientais do local.",
        "Conversar, se possível, com um morador ou frequentador do local sobre suas vivências.",
        "Produzir um relato ilustrado sobre a experiência observada."
      ],
      "classScript": [
        "Antes da aula, identifique com a turma qual córrego, represa ou rio é o mais próximo da escola ou do bairro onde moram.",
        "Explique como vai funcionar a atividade: visita de campo real, se possível, ou passeio virtual com fotos e vídeos do local, caso a saída não seja viável.",
        "Entregue a ficha de observação e explique cada item que deve ser observado: aspecto da água, presença de lixo, uso do local pelas pessoas, vegetação ao redor.",
        "Durante a visita, real ou virtual, pare em pontos-chave para que registrem por escrito ou façam fotos, sempre relacionando ao que está na ficha.",
        "Se houver oportunidade, converse com um morador ou frequentador do local, preparando com a turma, antes, duas ou três perguntas para fazer.",
        "De volta à sala, promova uma roda de conversa sobre o que mais chamou atenção na observação.",
        "Peça que cada aluno produza um relato ilustrado, com texto curto e desenho, contando o que observou no local visitado.",
        "Combine que os relatos serão expostos em um varal ou mural da sala como registro coletivo da experiência."
      ]
    },
    {
      "theme": "Quem vive à beira dos rios? Conhecendo populações ribeirinhas",
      "curriculumCode": "EF04H11",
      "description": "Conhecimento da história das populações ribeirinhas de um rio de São Paulo, do Brasil ou do mundo, identificando seus costumes.",
      "materials": ["Imagens ou vídeo sobre comunidades ribeirinhas", "Texto informativo adaptado", "Papel para desenho"],
      "steps": [
        "Apresentar imagens e um vídeo curto sobre comunidades ribeirinhas.",
        "Ler um texto simples sobre o modo de vida dessas populações.",
        "Identificar em grupo costumes como moradia, alimentação e transporte.",
        "Promover uma roda de conversa comparando esses costumes com a vida dos alunos.",
        "Registrar em desenho um aspecto do modo de vida ribeirinho estudado."
      ],
      "classScript": [
        "Apresente imagens e um vídeo curto mostrando o cotidiano de uma comunidade ribeirinha (casas de palafita, canoa como transporte, pesca).",
        "Pergunte antes de explicar: 'Como vocês acham que é viver bem perto de um rio, todos os dias?' — deixe hipóteses livres.",
        "Leia um texto simples sobre o modo de vida ribeirinho, parando para esclarecer palavras como 'palafita' e 'maré'.",
        "Organize grupos para listar, a partir do texto e das imagens, costumes em três categorias: moradia, alimentação e transporte.",
        "Circule pelos grupos perguntando por que classificaram cada costume daquela forma.",
        "Promova uma roda de conversa comparando: 'O que é parecido com a vida de vocês? O que é bem diferente?'",
        "Peça que cada aluno escolha um aspecto do modo de vida ribeirinho — a casa, a canoa, a pesca — e o registre em um desenho com legenda.",
        "Feche recolhendo os desenhos ou expondo-os na sala como registro do que foi aprendido."
      ]
    },
    {
      "theme": "Festas e crenças ligadas à água: heranças indígenas, africanas e europeias",
      "curriculumCode": "EF04H12",
      "description": "Conhecimento das expressões culturais e religiosas nas relações das sociedades com as águas e os rios, identificando referências europeias, indígenas e africanas.",
      "materials": ["Imagens de manifestações culturais ligadas à água", "Cartolina", "Canetinhas coloridas"],
      "steps": [
        "Apresentar exemplos de manifestações culturais ligadas à água, como festas e lendas.",
        "Discutir com a turma a origem indígena, africana ou europeia de cada manifestação.",
        "Organizar grupos para pesquisar uma manifestação cultural específica.",
        "Produzir um cartaz com as principais informações pesquisadas.",
        "Realizar uma roda de apresentação valorizando a diversidade cultural encontrada."
      ],
      "classScript": [
        "Apresente exemplos de manifestações culturais ligadas à água, como a Festa de Iemanjá, lendas indígenas sobre rios e procissões fluviais de tradição europeia.",
        "Pergunte: 'Alguém já ouviu falar ou participou de alguma festa relacionada à água ou a um rio?' — valorize relatos pessoais e familiares.",
        "Explique brevemente a origem de cada manifestação apresentada: indígena, africana ou europeia.",
        "Organize grupos e distribua para cada um uma manifestação cultural específica, com texto ou imagens de apoio para a pesquisa.",
        "Circule ajudando os grupos a identificar as principais informações: quem celebra, quando acontece, como é a celebração.",
        "Oriente a produção de um cartaz com o nome da manifestação, sua origem cultural e um desenho representativo.",
        "Realize uma roda de apresentação dos cartazes, destacando a diversidade cultural encontrada nas pesquisas.",
        "Feche pedindo que cada aluno escreva no caderno uma frase sobre qual manifestação mais gostou de conhecer e por quê."
      ]
    },
    {
      "theme": "Rios poluídos, vidas afetadas: os problemas das águas de São Paulo",
      "curriculumCode": "EF04H13",
      "description": "Identificação de problemas que afetam a qualidade ambiental das águas e dos rios em São Paulo e que impactam os modos de vida de determinados grupos sociais.",
      "materials": ["Imagens de rios poluídos e enchentes", "Cartolina", "Canetinhas", "Cola"],
      "steps": [
        "Apresentar imagens de rios urbanos poluídos e situações de enchente.",
        "Discutir em roda as causas desses problemas, como esgoto e descarte de lixo.",
        "Identificar quais grupos sociais são mais afetados por essas situações.",
        "Produzir cartazes de conscientização sobre o cuidado com os rios.",
        "Propor coletivamente pequenas ações de cuidado com a água no dia a dia."
      ],
      "classScript": [
        "Abra mostrando imagens de rios urbanos poluídos e de situações de enchente em São Paulo, perguntando: 'O que vocês veem de errado nessas imagens?'",
        "Registre na lousa as causas apontadas pelos alunos, como lixo jogado no rio, esgoto e ocupação das margens.",
        "Complete a lista se necessário, explicando de forma simples como o esgoto sem tratamento e o lixo chegam aos rios.",
        "Pergunte: 'Quem vocês acham que sofre mais quando um rio fica poluído ou quando acontece uma enchente?' — discuta em roda quais grupos sociais são mais afetados, como moradores de áreas ribeirinhas e comunidades de baixa renda.",
        "Organize grupos para produzir um cartaz de conscientização, com uma frase de alerta e um desenho sobre o cuidado com os rios.",
        "Circule pelos grupos incentivando frases diretas e desenhos claros, relacionados ao que foi discutido.",
        "Reúna a turma para socializar os cartazes, um grupo apresentando de cada vez.",
        "Feche propondo coletivamente, com a turma ditando, uma lista de pequenas ações de cuidado com a água no dia a dia, registrada na lousa e copiada por todos no caderno."
      ]
    },
    {
      "theme": "Conviver com as diferenças: uma cidade de muitos povos",
      "curriculumCode": "EF04H14",
      "description": "Exercício do respeito à diferença em uma sociedade plural, a partir das culturas estudadas em relação às águas e aos rios.",
      "materials": ["Registros das aulas anteriores sobre culturas diversas", "Cartolina", "Canetinhas"],
      "steps": [
        "Retomar com a turma as diferentes culturas estudadas ao longo do tema dos rios.",
        "Promover uma roda de conversa sobre o que significa respeitar as diferenças.",
        "Realizar uma dinâmica de troca de experiências entre os colegas da turma.",
        "Elaborar coletivamente um combinado de respeito às diferenças na sala.",
        "Produzir um mural intitulado 'Somos diferentes, somos São Paulo'."
      ],
      "classScript": [
        "Retome brevemente com a turma as culturas estudadas nas aulas anteriores sobre os rios: indígena, africana, europeia e ribeirinha.",
        "Pergunte: 'O que vocês aprenderam sobre como pessoas diferentes se relacionam com a água?' — deixe alguns alunos recordarem em voz alta.",
        "Promova uma roda de conversa perguntando: 'O que significa respeitar alguém que tem costumes diferentes dos nossos?'",
        "Realize uma dinâmica simples de troca: cada aluno conta a um colega algo sobre sua própria família ou cultura (comida, festa, costume) e depois trocam de dupla.",
        "Puxe alguns relatos para a roda toda, destacando a diversidade presente na própria sala.",
        "Elabore coletivamente, com a turma ditando e você escrevendo na lousa, um 'combinado de respeito às diferenças' com três a quatro regras.",
        "Organize a produção do mural 'Somos diferentes, somos São Paulo', com cada aluno contribuindo com um desenho ou frase sobre sua própria identidade cultural.",
        "Feche pedindo que cada aluno copie o combinado da lousa no caderno, como registro do compromisso da turma."
      ]
    },
    {
      "theme": "O mesmo evento, sentidos diferentes: tempo e espaço na nossa relação com a água",
      "curriculumCode": "EF04H15",
      "description": "Reflexão sobre eventos cotidianos e suas variações de significado no tempo e no espaço, tomando como referência a relação das pessoas com a água.",
      "materials": ["Imagens de situações cotidianas ligadas à água em diferentes épocas e lugares", "Cartaz"],
      "steps": [
        "Apresentar uma situação cotidiana, como buscar água, em diferentes épocas e lugares.",
        "Comparar em grupo os significados e as dificuldades de cada situação apresentada.",
        "Discutir por que o mesmo evento pode ter sentidos diferentes conforme o tempo e o lugar.",
        "Registrar as reflexões do grupo em um cartaz.",
        "Compartilhar as conclusões de cada grupo com a turma toda."
      ],
      "classScript": [
        "Apresente uma situação cotidiana ligada à água, como 'buscar água', em diferentes épocas e lugares: uma pessoa carregando lata d'água no campo antigamente, uma pessoa abrindo a torneira em casa hoje.",
        "Pergunte: 'Essa mesma ação, buscar água, significa a mesma coisa nessas duas situações?'",
        "Organize grupos e distribua outras imagens de situações semelhantes em contextos diferentes, como tomar banho de rio x tomar banho de chuveiro, lavar roupa no tanque x na máquina.",
        "Peça que cada grupo compare as imagens recebidas e discuta: 'O que muda? O que é mais difícil ou mais fácil em cada situação?'",
        "Circule pelos grupos perguntando por que acham que essas diferenças existem — tempo, lugar, tecnologia disponível.",
        "Promova uma roda de discussão coletiva sobre por que o mesmo evento pode ter sentidos diferentes dependendo do tempo e do lugar em que acontece.",
        "Oriente cada grupo a registrar suas reflexões em um cartaz, com as imagens comparadas e uma frase de conclusão.",
        "Feche com cada grupo compartilhando suas conclusões para a turma toda, encerrando com os cartazes expostos na sala."
      ]
    },
    {
      "theme": "Toda fonte conta uma história: quem fez, onde e quando",
      "curriculumCode": "EF04H16",
      "description": "Reconhecimento de que textos, imagens, objetos e demais produções humanas estabelecem relações com seus autores, locais de produção e tempo histórico.",
      "materials": ["Fontes históricas variadas sobre rios (foto, mapa, canção, objeto)", "Ficha de análise de fonte"],
      "steps": [
        "Apresentar diferentes fontes históricas relacionadas aos rios estudados.",
        "Identificar em cada fonte quem a produziu, onde e em que época.",
        "Discutir em grupo o que cada fonte revela sobre seu contexto de criação.",
        "Preencher uma 'ficha de fonte histórica' para uma das fontes analisadas.",
        "Expor as fichas produzidas em um mural da sala."
      ],
      "classScript": [
        "Apresente diferentes tipos de fontes históricas relacionadas aos rios estudados nas aulas anteriores: uma fotografia, um mapa antigo, a letra de uma canção sobre um rio, um objeto ou réplica.",
        "Pergunte, para cada fonte: 'Quem vocês acham que fez isso? Quando? Pra quê?' — deixe a turma arriscar antes de confirmar.",
        "Explique que toda fonte histórica tem um autor, um lugar e um momento em que foi criada, e que isso ajuda a entender melhor a informação que ela traz.",
        "Organize grupos, cada um recebendo uma fonte diferente para analisar.",
        "Oriente o preenchimento da 'ficha de análise de fonte', com campos para autor (ou origem), local, época e o que a fonte revela.",
        "Circule pelos grupos ajudando a identificar pistas na própria fonte, como uma data em uma foto, o estilo de um mapa ou o tema de uma canção.",
        "Promova uma roda para que cada grupo compartilhe o que descobriu sobre sua fonte.",
        "Feche expondo as fichas preenchidas em um mural da sala, como registro coletivo do que cada fonte revelou."
      ]
    },
    {
      "theme": "Um rio, muitos olhares: percepções diferentes sobre um mesmo lugar",
      "curriculumCode": "EF04H17",
      "description": "Reconhecimento de que diferentes sujeitos possuem percepções diferentes da realidade.",
      "materials": ["Depoimentos ou imagens de diferentes pessoas sobre um mesmo rio", "Papel para registro"],
      "steps": [
        "Apresentar depoimentos ou fotos de diferentes pessoas falando sobre o mesmo rio, como um pescador, um morador e um turista.",
        "Comparar em grupo as diferentes visões apresentadas sobre o mesmo lugar.",
        "Discutir por que cada pessoa pode ver a mesma realidade de um jeito diferente.",
        "Produzir um relato em primeira pessoa a partir de um dos olhares escolhidos.",
        "Compartilhar os relatos e comparar as diferentes percepções com a turma."
      ],
      "classScript": [
        "Apresente depoimentos ou fotos de diferentes pessoas falando sobre o mesmo rio: um pescador, um morador da beira do rio, um turista de passagem.",
        "Pergunte: 'Será que essas três pessoas veem o mesmo rio da mesma forma?'",
        "Organize grupos e peça que comparem os três depoimentos, listando o que cada pessoa destaca ou valoriza no rio.",
        "Circule perguntando: 'Por que vocês acham que o pescador falou disso, e o turista falou de outra coisa?'",
        "Promova uma roda de discussão sobre por que pessoas diferentes podem ver a mesma realidade de jeitos diferentes, dependendo de sua relação com o lugar.",
        "Peça que cada aluno escolha um dos três olhares — pescador, morador ou turista — e escreva um pequeno relato em primeira pessoa, como se fosse essa pessoa falando sobre o rio.",
        "Circule ajudando quem tiver dificuldade de começar o relato, sugerindo aberturas como 'Eu, que moro perto do rio há anos, vejo...'",
        "Feche com alguns alunos compartilhando seus relatos em voz alta, comparando as diferentes percepções construídas pela turma."
      ]
    }
  ]
};
