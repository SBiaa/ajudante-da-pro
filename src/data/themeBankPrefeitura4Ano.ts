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
      ]
    }
  ]
};
