// Banco de temas do 5º ano — rede ESTADUAL (Currículo Paulista, SEDUC-SP/EFAPE), no mesmo formato
// de src/data/themeBank.ts (que cobre a rede municipal) e de src/data/themeBankEstado2Ano.ts.
// Fonte dos códigos de habilidade (curriculumCode): não foi encontrado um documento único e completo
// de "Habilidades Essenciais" do 5º ano publicado pela EFAPE/SEDUC-SP equivalente ao usado no banco
// do 2º ano (o portal efape.educacao.sp.gov.br/curriculopaulista disponibiliza cadernos e sequências
// didáticas em PDF, não uma lista consolidada por habilidade). Foi localizado, em vez disso, um
// documento de rede municipal paulista (Prefeitura de Pinhalzinho-SP) que aplica o Currículo Paulista
// e organiza "Habilidades Essenciais" do 5º ano por bimestre — mas ele mistura, ao lado dos códigos
// EF05XX, códigos de faixas combinadas (EF35XX, EF15XX, EF04XX) retomados como revisão, o que não
// corresponde ao padrão "um código específico do 5º ano por entrada" usado no restante deste banco.
// Por isso, seguindo a orientação de fallback, este arquivo usa a lista padrão e estável da BNCC para
// o 5º ano (códigos EF05LP##, EF05MA##, EF05CI##, EF05GE## e EF05HI##), com um código por entrada,
// cobrindo a totalidade das habilidades de cada disciplina — a mesma base que sustenta o Currículo
// Paulista dos Anos Iniciais. Os códigos foram conferidos em fontes públicas (BNCC/MEC, tudosaladeaula.com,
// novaescola.org.br, profez.com.br) antes de escrever cada entrada; nenhum código foi inventado.

import { BankEntry, OwnSubject } from "@/types/plano";

export const ESTADO_5_ANO_THEME_BANK: Record<OwnSubject, BankEntry[]> = {
  "lingua-portuguesa": [
    {
      "theme": "Por que essa palavra se escreve assim? Regras e exceções",
      "curriculumCode": "EF05LP01",
      "description": "Grafar palavras utilizando regras de correspondência fonema-grafema regulares, contextuais e morfológicas, e palavras de uso frequente com correspondências irregulares.",
      "materials": ["Lista de palavras com grafias regulares e irregulares", "Lousa"],
      "steps": [
        "Escrever na lousa um grupo de palavras que seguem uma regra clara de grafia (ex.: terminadas em - agem) e outro grupo de palavras irregulares (ex.: 'xícara', 'lagartixa').",
        "Perguntar à turma qual grupo tem uma 'regra' que explica a escrita e qual precisa ser decorado.",
        "Em duplas, os alunos classificam uma nova lista de palavras nos dois grupos.",
        "Corrigir coletivamente, explicando a regra de cada caso regular.",
        "Fechar com um ditado misto de palavras regulares e irregulares, corrigido em conjunto."
      ]
    },
    {
      "theme": "Uma palavra, vários sentidos: explorando a polissemia",
      "curriculumCode": "EF05LP02",
      "description": "Identificar o caráter polissêmico das palavras, comparando o significado de termos usados em áreas científicas com o mesmo termo usado na linguagem do dia a dia.",
      "materials": ["Cartaz com frases usando a mesma palavra em sentidos diferentes", "Dicionário"],
      "steps": [
        "Escrever na lousa frases em que a mesma palavra aparece com sentidos diferentes (ex.: 'banco' de sentar e 'banco' financeiro).",
        "Perguntar à turma o que muda no sentido da palavra em cada frase.",
        "Apresentar um termo usado em Ciências (ex.: 'célula') e comparar com seu uso cotidiano (célula de cadeia, celular).",
        "Em duplas, os alunos pesquisam no dicionário outra palavra polissêmica e criam duas frases com sentidos diferentes.",
        "Compartilhar as frases criadas, adivinhando o sentido pretendido em cada uma."
      ]
    },
    {
      "theme": "Oxítona, paroxítona ou proparoxítona? Acentuando com lógica",
      "curriculumCode": "EF05LP03",
      "description": "Acentuar corretamente palavras oxítonas, paroxítonas e proparoxítonas, reconhecendo a sílaba tônica de cada uma.",
      "materials": ["Cartaz com exemplos de cada classificação", "Lista de palavras para classificar"],
      "steps": [
        "Explicar com exemplos o que é sílaba tônica e mostrar uma palavra de cada tipo (oxítona, paroxítona, proparoxítona).",
        "Praticar coletivamente batendo palmas na sílaba forte de várias palavras ditas em voz alta.",
        "Organizar a turma em trios para classificar uma lista de palavras nos três grupos.",
        "Corrigir coletivamente, revisando as regras básicas de acentuação de cada grupo.",
        "Fechar com um jogo rápido: o professor fala uma palavra e os alunos levantam um cartão com o tipo correto."
      ]
    },
    {
      "theme": "Vírgula, dois-pontos, reticências: o que cada sinal muda no texto",
      "curriculumCode": "EF05LP04",
      "description": "Diferenciar vírgula, ponto e vírgula, dois-pontos, reticências, aspas e parênteses, reconhecendo os efeitos de sentido que cada um produz na leitura de um texto.",
      "materials": ["Texto curto com diferentes sinais de pontuação em destaque", "Lousa"],
      "steps": [
        "Ler um texto curto destacando cada sinal de pontuação usado (dois-pontos, reticências, aspas, parênteses).",
        "Discutir coletivamente para que serve cada sinal e o que ele sugere ao leitor (pausa, explicação, suspense, fala de alguém).",
        "Reescrever coletivamente uma frase trocando um sinal por outro e comparar a diferença de sentido.",
        "Em duplas, os alunos criam frases próprias usando pelo menos três sinais diferentes.",
        "Compartilhar as frases em voz alta, respeitando a entonação de cada sinal."
      ]
    },
    {
      "theme": "Presente, passado ou futuro? Os tempos verbais nas notícias",
      "curriculumCode": "EF05LP05",
      "description": "Identificar a expressão de presente, passado e futuro em tempos verbais do modo indicativo, em diferentes textos.",
      "materials": ["Notícia curta ou texto narrativo impresso", "Lousa"],
      "steps": [
        "Ler um texto curto com verbos em tempos variados e pedir que os alunos circulem os verbos.",
        "Classificar coletivamente cada verbo circulado como presente, passado ou futuro.",
        "Reescrever uma mesma frase nos três tempos verbais, comparando as mudanças.",
        "Em duplas, os alunos escrevem três frases sobre o próprio dia: uma no presente, uma no passado e uma no futuro.",
        "Compartilhar as frases, identificando coletivamente o tempo verbal usado em cada uma."
      ]
    },
    {
      "theme": "Eu vou, tu vais, nós vamos: concordância verbal na prática",
      "curriculumCode": "EF05LP06",
      "description": "Flexionar adequadamente, na escrita e na oralidade, os verbos em concordância com os pronomes pessoais ou os nomes que são sujeitos da oração.",
      "materials": ["Cartaz com pronomes pessoais", "Fichas com frases incompletas"],
      "steps": [
        "Revisar coletivamente os pronomes pessoais (eu, tu, ele, nós, vós, eles) usando um cartaz de apoio.",
        "Apresentar frases com o verbo errado em relação ao sujeito e pedir que a turma identifique o erro.",
        "Praticar oralmente a flexão de um mesmo verbo com pronomes diferentes.",
        "Em duplas, os alunos completam fichas de frases escolhendo a forma verbal correta.",
        "Corrigir coletivamente, destacando os erros de concordância mais comuns."
      ]
    },
    {
      "theme": "Mas, porque, apesar disso: o que as conjunções fazem no texto",
      "curriculumCode": "EF05LP07",
      "description": "Identificar, em textos, o uso de conjunções e a relação que estabelecem entre as partes do texto: adição, oposição, tempo, causa, condição, finalidade.",
      "materials": ["Texto curto com conjunções destacadas", "Cartaz com lista de conjunções e seus sentidos"],
      "steps": [
        "Ler um texto destacando as conjunções usadas (mas, porque, quando, para que, se).",
        "Perguntar o que cada conjunção liga e que relação ela estabelece entre as ideias.",
        "Montar coletivamente um cartaz separando conjunções por tipo de relação (oposição, causa, tempo, finalidade).",
        "Em duplas, os alunos unem pares de frases soltas usando a conjunção adequada.",
        "Compartilhar as frases unidas, explicando a relação de sentido criada."
      ]
    },
    {
      "theme": "Palavra simples, derivada ou composta? Formando novas palavras",
      "curriculumCode": "EF05LP08",
      "description": "Diferenciar palavras primitivas, derivadas e compostas, reconhecendo palavras formadas por adição de prefixo e de sufixo.",
      "materials": ["Cartões com palavras e seus radicais", "Lousa"],
      "steps": [
        "Apresentar uma palavra primitiva (ex.: 'flor') e mostrar palavras derivadas dela (florista, floreira, desflorar).",
        "Explicar a diferença entre prefixo e sufixo com exemplos no quadro.",
        "Apresentar exemplos de palavras compostas (guarda-chuva, passatempo) e comparar com as derivadas.",
        "Em duplas, os alunos recebem cartões com radicais e prefixos/sufixos para formar novas palavras.",
        "Compartilhar as palavras formadas, classificando-as em primitiva, derivada ou composta."
      ]
    },
    {
      "theme": "Lendo regras de jogos com autonomia",
      "curriculumCode": "EF05LP09",
      "description": "Ler e compreender, com autonomia, textos instrucionais de regras de jogo, entre outros gêneros, identificando a estrutura própria desse tipo de texto.",
      "materials": ["Regras de um jogo conhecido, impressas", "Material do jogo (opcional)"],
      "steps": [
        "Distribuir em duplas as regras escritas de um jogo que a turma não conhece.",
        "Pedir que cada dupla leia silenciosamente e depois explique com suas palavras o que entendeu.",
        "Reunir a turma para tirar dúvidas sobre partes do texto que ficaram confusas.",
        "Jogar o jogo seguindo apenas o que foi lido, sem explicação extra do professor.",
        "Conversar ao final sobre o que ajudou (ou atrapalhou) a entender as regras pela leitura."
      ]
    },
    {
      "theme": "Rindo com autonomia: lendo anedotas, piadas e cartuns",
      "curriculumCode": "EF05LP10",
      "description": "Ler e compreender, com autonomia, anedotas, piadas, cartuns, poemas e minicontos, entre outros textos do campo artístico-literário.",
      "materials": ["Coletânea de anedotas, piadas e cartuns impressos"],
      "steps": [
        "Distribuir diferentes textos curtos e humorísticos entre as duplas.",
        "Pedir que cada dupla leia em silêncio e identifique o que torna o texto engraçado.",
        "Reunir a turma para cada dupla compartilhar o texto lido em voz alta, com entonação.",
        "Conversar sobre as diferenças entre piada, anedota e cartum.",
        "Fechar com uma votação da turma sobre o texto mais engraçado lido no dia."
      ]
    },
    {
      "theme": "Criando nossas próprias piadas e cartuns",
      "curriculumCode": "EF05LP11",
      "description": "Planejar e produzir, com autonomia, anedotas, piadas, cartuns e contos, entre outros textos do campo artístico-literário, considerando a situação comunicativa e o estilo do gênero.",
      "materials": ["Papel para escrita e desenho", "Exemplos de cartuns e piadas"],
      "steps": [
        "Relembrar as características de piadas e cartuns observadas em aula anterior.",
        "Cada aluno ou dupla escolhe o gênero (piada, anedota ou cartum) que quer produzir.",
        "Planejar o texto: qual é a situação, qual é a 'virada' engraçada no final.",
        "Produzir a primeira versão, trocando com um colega para testar se a piada funciona.",
        "Revisar e montar um mural de humor da turma com os textos finalizados."
      ]
    },
    {
      "theme": "Resumindo o que pesquisamos: mapas conceituais e relatórios",
      "curriculumCode": "EF05LP12",
      "description": "Planejar e produzir, com autonomia, resumos, mapas conceituais e relatórios, entre outros textos do campo das práticas de estudo e pesquisa.",
      "materials": ["Texto informativo sobre um tema de pesquisa", "Papel para mapa conceitual"],
      "steps": [
        "Ler coletivamente um texto informativo curto sobre um tema de interesse da turma.",
        "Identificar juntos as informações mais importantes do texto.",
        "Explicar o que é um mapa conceitual, mostrando um exemplo simples.",
        "Em duplas, os alunos organizam as informações do texto em um mapa conceitual ou resumo curto.",
        "Compartilhar os resumos/mapas produzidos, comparando as escolhas de cada dupla."
      ]
    },
    {
      "theme": "Assistindo e comentando vlogs infantis",
      "curriculumCode": "EF05LP13",
      "description": "Assistir a vlogs infantis e produzir, em áudio ou vídeo, resenhas comentando o conteúdo assistido.",
      "materials": ["Celular ou computador para exibir um vlog infantil (se disponível)", "Roteiro simples de resenha"],
      "steps": [
        "Apresentar (ou descrever, se não houver acesso a vídeo) um vlog infantil curto sobre um tema conhecido pela turma.",
        "Perguntar o que o vlogueiro estava fazendo e como ele falava com o público.",
        "Planejar em duplas o que dizer em uma resenha curta sobre o vlog: gostaram, não gostaram, por quê.",
        "Cada dupla grava (ou apresenta ao vivo) sua resenha em poucas frases.",
        "Assistir/ouvir algumas resenhas produzidas e comentar em roda."
      ]
    },
    {
      "theme": "Como é feita uma resenha crítica de brinquedo ou livro",
      "curriculumCode": "EF05LP14",
      "description": "Identificar e manter, na leitura e produção de resenhas críticas, a estrutura composicional própria do gênero: apresentação e avaliação do produto.",
      "materials": ["Exemplo de resenha crítica de livro ou brinquedo"],
      "steps": [
        "Ler uma resenha crítica de um livro ou brinquedo conhecido pela turma.",
        "Identificar coletivamente as duas partes da resenha: a apresentação do produto e a avaliação/opinião sobre ele.",
        "Cada aluno escolhe um livro ou brinquedo que conhece bem para resenhar.",
        "Planejar a resenha seguindo as duas partes identificadas.",
        "Escrever a resenha e trocar com um colega para conferir se as duas partes estão presentes."
      ]
    },
    {
      "theme": "Lendo notícias e reportagens com autonomia",
      "curriculumCode": "EF05LP15",
      "description": "Ler e compreender, com autonomia, notícias e reportagens, entre outros textos do campo da vida pública.",
      "materials": ["Notícias e reportagens curtas impressas"],
      "steps": [
        "Distribuir diferentes notícias e reportagens curtas entre as duplas.",
        "Pedir que cada dupla identifique sozinha o assunto, quando e onde aconteceu o fato.",
        "Reunir a turma para cada dupla apresentar, com suas palavras, a notícia lida.",
        "Comparar as diferenças entre uma notícia (fato) e uma reportagem (fato aprofundado).",
        "Fechar com uma roda de conversa sobre qual notícia foi mais interessante e por quê."
      ]
    },
    {
      "theme": "A mesma notícia, contada de jeitos diferentes",
      "curriculumCode": "EF05LP16",
      "description": "Comparar informações sobre um mesmo fato veiculadas em diferentes mídias, para concluir qual informação é mais confiável e explicar por quê.",
      "materials": ["Duas versões de uma mesma notícia, de fontes diferentes"],
      "steps": [
        "Apresentar à turma duas notícias diferentes sobre o mesmo fato.",
        "Pedir que os alunos, em duplas, listem semelhanças e diferenças entre as duas versões.",
        "Discutir coletivamente quais informações aparecem em uma versão e não na outra.",
        "Conversar sobre o que torna uma fonte de notícia mais confiável (autoria, data, veículo conhecido).",
        "Registrar no caderno uma conclusão sobre qual versão parece mais completa e confiável."
      ]
    },
    {
      "theme": "Planejando o roteiro da nossa reportagem",
      "curriculumCode": "EF05LP17",
      "description": "Planejar e produzir roteiro para a produção de uma reportagem digital sobre tema de interesse da turma.",
      "materials": ["Folha de roteiro (perguntas: o quê, quem, quando, onde, por quê)"],
      "steps": [
        "Escolher com a turma um tema de interesse para investigar (um espaço da escola, um problema do bairro).",
        "Explicar a estrutura de um roteiro de reportagem: apresentação, perguntas, encerramento.",
        "Em grupos, os alunos definem quem vão entrevistar e quais perguntas vão fazer.",
        "Escrever o roteiro completo do grupo, revisando a ordem das perguntas.",
        "Trocar roteiros entre grupos para sugestões de melhoria antes da gravação."
      ]
    },
    {
      "theme": "Gravando nossa reportagem digital",
      "curriculumCode": "EF05LP18",
      "description": "Produzir uma reportagem digital a partir de um roteiro planejado previamente, buscando informações e organizando a apresentação do conteúdo.",
      "materials": ["Roteiro de reportagem já planejado", "Celular ou gravador (opcional)"],
      "steps": [
        "Retomar o roteiro de reportagem planejado na aula anterior.",
        "Organizar os grupos para ensaiar a fala de cada parte da reportagem.",
        "Gravar (ou apresentar ao vivo, se não houver recurso digital) a reportagem de cada grupo.",
        "Assistir/ouvir as reportagens produzidas em roda.",
        "Comentar coletivamente pontos fortes e o que poderia melhorar em cada uma."
      ]
    },
    {
      "theme": "Defendendo uma opinião com argumentos",
      "curriculumCode": "EF05LP19",
      "description": "Argumentar oralmente sobre acontecimentos de interesse social, com base em fatos divulgados em diferentes mídias, respeitando pontos de vista diferentes.",
      "materials": ["Notícia ou tema polêmico simples do interesse da turma"],
      "steps": [
        "Apresentar um tema de interesse social simples e atual para a turma (ex.: uso de celular na escola).",
        "Dividir a turma em dois grupos com posições opostas sobre o tema.",
        "Dar um tempo para cada grupo levantar argumentos que defendam sua posição.",
        "Realizar uma roda de debate simples, com cada grupo apresentando seus argumentos.",
        "Fechar destacando a importância de ouvir e respeitar o ponto de vista contrário."
      ]
    },
    {
      "theme": "Esse argumento convence? Analisando debates",
      "curriculumCode": "EF05LP20",
      "description": "Analisar, em debates regrados, a validade e a força de diferentes tipos de argumento (comparação, exemplo, autoridade, evidência).",
      "materials": ["Trecho de debate ou discussão gravado/transcrito (pode ser simulado)"],
      "steps": [
        "Apresentar um pequeno debate (encenado pelo professor ou lido) com diferentes tipos de argumento.",
        "Explicar os tipos de argumento: por exemplo, por comparação, por autoridade (especialista), por evidência (dado/fato).",
        "Pedir que a turma identifique qual tipo de argumento foi usado em cada fala do debate.",
        "Discutir coletivamente quais argumentos pareceram mais convincentes e por quê.",
        "Propor que cada aluno crie um argumento forte para defender uma opinião simples, identificando o tipo usado."
      ]
    },
    {
      "theme": "Como fala um repórter? Observando a entonação e a expressão",
      "curriculumCode": "EF05LP21",
      "description": "Analisar a entonação, a expressão facial e corporal e a variação linguística de vloggers, repórteres, entrevistadores e entrevistados em textos orais.",
      "materials": ["Trecho de reportagem ou vlog assistido (ou descrito oralmente)"],
      "steps": [
        "Assistir (ou simular ao vivo) um pequeno trecho de reportagem ou vlog.",
        "Perguntar como estava a voz, a expressão do rosto e os gestos de quem falava.",
        "Discutir se a forma de falar mudava dependendo se a pessoa era repórter, entrevistador ou entrevistado.",
        "Em duplas, os alunos praticam contar uma mesma notícia com dois estilos diferentes de entonação.",
        "Compartilhar as apresentações, comentando o que a entonação e a expressão comunicaram."
      ]
    },
    {
      "theme": "Pesquisando em resumos e textos de divulgação científica",
      "curriculumCode": "EF05LP22",
      "description": "Ler e compreender textos do campo das práticas de estudo e pesquisa, como resumos e textos de divulgação científica, sobre temas de interesse dos estudantes.",
      "materials": ["Texto de divulgação científica curto sobre tema de interesse da turma"],
      "steps": [
        "Escolher com a turma um tema científico de interesse (espaço, animais, corpo humano).",
        "Distribuir um texto de divulgação científica curto sobre o tema.",
        "Pedir que os alunos leiam em duplas e sublinhem as informações mais importantes.",
        "Reunir a turma para listar coletivamente o que aprenderam com a leitura.",
        "Registrar no caderno um resumo curto com as principais informações do texto."
      ]
    },
    {
      "theme": "O que os gráficos e tabelas da pesquisa mostram",
      "curriculumCode": "EF05LP23",
      "description": "Comparar informações apresentadas em gráficos ou tabelas presentes em textos do campo das práticas de estudo e pesquisa, como relatórios e textos didáticos.",
      "materials": ["Gráfico ou tabela de um texto de pesquisa/relatório"],
      "steps": [
        "Apresentar um gráfico ou tabela retirado de um texto de pesquisa ou relatório.",
        "Perguntar o que cada coluna ou barra do gráfico representa.",
        "Pedir que os alunos, em duplas, comparem duas informações do gráfico e digam qual é maior ou menor.",
        "Propor perguntas de interpretação sobre o gráfico para a turma responder.",
        "Fechar registrando no caderno uma conclusão tirada da leitura do gráfico ou tabela."
      ]
    },
    {
      "theme": "Organizando nossa pesquisa em texto, com imagens e gráficos",
      "curriculumCode": "EF05LP24",
      "description": "Planejar e produzir textos do campo das práticas de estudo e pesquisa para organizar resultados de pesquisa sobre tema de interesse, incluindo imagens, gráficos ou tabelas.",
      "materials": ["Fontes de pesquisa (livros, sites impressos)", "Papel para produção do texto final"],
      "steps": [
        "Escolher em grupos um tema de pesquisa de interesse da turma.",
        "Pesquisar informações sobre o tema em fontes disponíveis (livros, textos impressos).",
        "Planejar como organizar o texto final, decidindo se vão incluir imagem, gráfico ou tabela.",
        "Produzir o texto de pesquisa em grupo, revisando as informações reunidas.",
        "Apresentar os textos de pesquisa para a turma, em formato de mural ou exposição oral."
      ]
    },
    {
      "theme": "Escrevendo verbetes de dicionário da turma",
      "curriculumCode": "EF05LP25",
      "description": "Planejar e produzir, com certa autonomia, verbetes de dicionário, considerando a estrutura própria do gênero.",
      "materials": ["Página de dicionário para consulta", "Papel para produção dos verbetes"],
      "steps": [
        "Mostrar uma página de dicionário e identificar coletivamente as partes de um verbete (palavra, classe gramatical, definição, exemplo).",
        "Cada aluno escolhe uma palavra do vocabulário da turma para criar um verbete.",
        "Planejar o verbete seguindo a estrutura observada (definição clara e exemplo de uso).",
        "Escrever o verbete e trocar com um colega para verificar se está compreensível.",
        "Reunir os verbetes da turma em um 'dicionário da sala' organizado por ordem alfabética."
      ]
    },
    {
      "theme": "Revisando nossos textos com olhar de gramático",
      "curriculumCode": "EF05LP26",
      "description": "Utilizar, na produção de textos, conhecimentos linguísticos e gramaticais, como concordância nominal e verbal e pontuação, revisando o texto produzido.",
      "materials": ["Texto produzido anteriormente pelo próprio aluno", "Lista de itens para revisão"],
      "steps": [
        "Retomar um texto já produzido pelos alunos em aula anterior.",
        "Apresentar uma lista de itens para revisar: concordância, pontuação, ortografia.",
        "Em duplas, os alunos revisam o próprio texto usando a lista como guia.",
        "Trocar o texto com um colega para uma segunda revisão.",
        "Reescrever a versão final corrigida do texto."
      ]
    },
    {
      "theme": "Evitando repetição: pronomes e conectivos no texto",
      "curriculumCode": "EF05LP27",
      "description": "Utilizar, na produção de textos, recursos de coesão pronominal e articuladores de relações de sentido (tempo, causa, oposição, conclusão, comparação).",
      "materials": ["Texto com repetição excessiva de uma palavra", "Lousa"],
      "steps": [
        "Mostrar um texto curto com uma palavra repetida várias vezes seguidas.",
        "Perguntar à turma como o texto poderia ficar menos repetitivo.",
        "Apresentar pronomes e sinônimos como recursos para substituir a palavra repetida.",
        "Reescrever coletivamente o texto usando os recursos apresentados.",
        "Propor que os alunos revisem um texto próprio, trocando repetições por pronomes ou conectivos."
      ]
    },
    {
      "theme": "Poemas e minicontos na tela: observando recursos digitais",
      "curriculumCode": "EF05LP28",
      "description": "Observar, em textos digitais como ciberpoemas e minicontos em mídia digital, os recursos multissemióticos utilizados (imagem, som, movimento).",
      "materials": ["Exemplo de ciberpoema ou miniconto digital (impresso ou projetado)"],
      "steps": [
        "Apresentar um exemplo de ciberpoema ou miniconto digital, mostrando imagens, cores ou animações usadas.",
        "Perguntar à turma o que esses recursos acrescentam ao texto além das palavras.",
        "Comparar com um poema ou conto apenas em texto, sem recursos visuais.",
        "Em duplas, os alunos planejam que recursos (desenho, cor, som) usariam para ilustrar um miniconto próprio.",
        "Compartilhar as ideias, discutindo como cada recurso ajudaria a contar a história."
      ]
    }
  ],
  matematica: [
    {
      "theme": "Lendo e ordenando números até a centena de milhar",
      "curriculumCode": "EF05MA01",
      "description": "Ler, escrever e ordenar números naturais até a ordem das centenas de milhar, compreendendo as principais características do sistema de numeração decimal.",
      "materials": ["Cartões com números grandes (6 algarismos)", "Lousa"],
      "steps": [
        "Distribuir cartões com números de até seis algarismos para os alunos, em duplas.",
        "Pedir que cada dupla leia o número em voz alta, identificando a ordem de cada algarismo.",
        "Organizar os cartões da turma em ordem crescente na lousa.",
        "Propor desafios: 'qual número é maior, 245.310 ou 245.130? Por quê?'.",
        "Registrar no caderno três comparações usando os sinais > e <."
      ]
    },
    {
      "theme": "Números com vírgula: lendo e ordenando decimais",
      "curriculumCode": "EF05MA02",
      "description": "Ler, escrever e ordenar números racionais na forma decimal, compreendendo as principais características do sistema de numeração decimal.",
      "materials": ["Cartões com preços de produtos (com centavos)", "Lousa"],
      "steps": [
        "Apresentar preços de produtos com centavos (ex.: R$ 12,45) e pedir que os alunos leiam em voz alta.",
        "Explicar o valor de cada casa depois da vírgula (décimos e centésimos).",
        "Comparar dois preços decimais, decidindo qual é maior.",
        "Em duplas, os alunos ordenam uma lista de preços do menor para o maior.",
        "Fechar com um desafio: somar mentalmente dois preços decimais simples."
      ]
    },
    {
      "theme": "Frações maiores e menores que o inteiro",
      "curriculumCode": "EF05MA03",
      "description": "Identificar e representar frações (menores e maiores que a unidade), associando-as ao resultado de uma divisão ou à ideia de parte de um todo.",
      "materials": ["Tiras de papel para dobrar", "Reta numérica desenhada na lousa"],
      "steps": [
        "Dobrar uma tira de papel em partes iguais e pintar algumas partes, representando uma fração menor que 1.",
        "Repetir a atividade juntando partes de mais de uma tira para representar uma fração maior que 1.",
        "Marcar as frações representadas em uma reta numérica na lousa.",
        "Em duplas, os alunos representam frações diadas pelo professor usando as tiras.",
        "Registrar no caderno as frações trabalhadas, indicando se são maiores ou menores que o inteiro."
      ]
    },
    {
      "theme": "Frações que valem o mesmo: descobrindo equivalências",
      "curriculumCode": "EF05MA04",
      "description": "Identificar frações equivalentes, reconhecendo que diferentes frações podem representar a mesma quantidade.",
      "materials": ["Tiras de papel de tamanhos iguais para dobrar em partes diferentes"],
      "steps": [
        "Dobrar duas tiras iguais em quantidades diferentes de partes (uma em 2, outra em 4) e pintar metade de cada.",
        "Comparar as partes pintadas, mostrando que 1/2 e 2/4 ocupam o mesmo espaço.",
        "Repetir a atividade com outras frações equivalentes.",
        "Em duplas, os alunos procuram outras frações equivalentes usando as tiras.",
        "Registrar no caderno pelo menos três pares de frações equivalentes encontrados."
      ]
    },
    {
      "theme": "Comparando frações e decimais na reta numérica",
      "curriculumCode": "EF05MA05",
      "description": "Comparar e ordenar números racionais positivos (representações fracionária e decimal), relacionando-os a pontos na reta numérica.",
      "materials": ["Reta numérica grande desenhada no chão ou na lousa", "Cartões com frações e decimais"],
      "steps": [
        "Desenhar uma reta numérica de 0 a 2 na lousa ou no chão da sala.",
        "Distribuir cartões com frações e números decimais para os alunos posicionarem na reta.",
        "Discutir coletivamente a posição de cada cartão, corrigindo quando necessário.",
        "Comparar pares de números (uma fração e um decimal) para decidir qual é maior.",
        "Registrar no caderno a ordem final de todos os números posicionados na reta."
      ]
    },
    {
      "theme": "10%, 25%, 50%: entendendo porcentagens do dia a dia",
      "curriculumCode": "EF05MA06",
      "description": "Associar as representações 10%, 25%, 50%, 75% e 100% à décima parte, quarta parte, metade, três quartos e um inteiro, para resolver problemas.",
      "materials": ["Cartazes de promoção fictícia com desconto (10%, 25%, 50%)", "Objetos ou fichas para representar quantidades"],
      "steps": [
        "Apresentar um cartaz de promoção com desconto de 50% e perguntar o que isso significa.",
        "Relacionar 50% com a metade, usando objetos divididos ao meio para mostrar.",
        "Repetir a atividade associando 25% a um quarto e 10% a uma décima parte.",
        "Propor problemas simples: 'se um brinquedo custa 20 reais e tem 25% de desconto, quanto custa?'.",
        "Resolver os problemas em duplas e corrigir coletivamente."
      ]
    },
    {
      "theme": "Resolvendo problemas de somar e subtrair com decimais",
      "curriculumCode": "EF05MA07",
      "description": "Resolver e elaborar problemas de adição e subtração com números naturais e com números racionais cuja representação decimal seja finita.",
      "materials": ["Problemas envolvendo dinheiro ou medidas com decimais", "Calculadora (opcional, para conferência)"],
      "steps": [
        "Apresentar um problema envolvendo soma de valores em dinheiro com centavos.",
        "Resolver coletivamente na lousa, destacando o alinhamento da vírgula.",
        "Propor um problema de subtração com decimais para os alunos resolverem em duplas.",
        "Corrigir coletivamente, discutindo os erros mais comuns no alinhamento das casas decimais.",
        "Propor que cada dupla elabore um problema parecido para outra dupla resolver."
      ]
    },
    {
      "theme": "Multiplicando e dividindo com números naturais e decimais",
      "curriculumCode": "EF05MA08",
      "description": "Resolver e elaborar problemas de multiplicação e divisão com números naturais e com números racionais cuja representação decimal é finita.",
      "materials": ["Problemas envolvendo compras em quantidade", "Lousa"],
      "steps": [
        "Apresentar um problema de multiplicação com decimal (ex.: preço de vários itens iguais).",
        "Resolver coletivamente, revisando o algoritmo da multiplicação com vírgula.",
        "Propor um problema de divisão simples envolvendo números naturais.",
        "Resolver em duplas, comparando estratégias diferentes usadas pela turma.",
        "Fechar com a correção coletiva e discussão das estratégias mais eficientes."
      ]
    },
    {
      "theme": "De quantos jeitos posso combinar? Contagem com árvore de possibilidades",
      "curriculumCode": "EF05MA09",
      "description": "Resolver e elaborar problemas simples de contagem envolvendo o princípio multiplicativo, utilizando esquemas ou diagramas de árvore.",
      "materials": ["Cartões de roupas ou combinações fictícias (camisetas e shorts de cores diferentes)"],
      "steps": [
        "Apresentar uma situação: '3 camisetas e 2 shorts de cores diferentes, quantas combinações são possíveis?'.",
        "Construir coletivamente um diagrama de árvore na lousa para contar as combinações.",
        "Propor uma nova situação parecida para os alunos resolverem em duplas.",
        "Comparar os diagramas feitos por diferentes duplas.",
        "Registrar no caderno o total de combinações encontradas e o diagrama usado."
      ]
    },
    {
      "theme": "O que acontece com a igualdade quando eu mudo os dois lados?",
      "curriculumCode": "EF05MA10",
      "description": "Concluir, por meio de investigações, que a relação de igualdade entre dois membros permanece ao adicionar, subtrair, multiplicar ou dividir ambos por um mesmo número.",
      "materials": ["Balança de dois pratos (real ou desenhada)", "Fichas numeradas"],
      "steps": [
        "Apresentar uma igualdade simples na lousa (ex.: 4 + 3 = 7) representada como uma balança equilibrada.",
        "Perguntar o que acontece se somarmos o mesmo número aos dois lados.",
        "Testar coletivamente somando, subtraindo e multiplicando os dois lados por um mesmo número.",
        "Propor que os alunos, em duplas, testem a mesma ideia com outras igualdades.",
        "Concluir coletivamente a regra descoberta e registrar no caderno com um exemplo."
      ]
    },
    {
      "theme": "Descobrindo o número escondido na igualdade",
      "curriculumCode": "EF05MA11",
      "description": "Resolver e elaborar problemas cuja conversão em sentença matemática seja uma igualdade com uma operação em que um dos termos é desconhecido.",
      "materials": ["Fichas com sentenças matemáticas incompletas", "Lousa"],
      "steps": [
        "Apresentar uma sentença com um número desconhecido (ex.: 15 + ? = 22).",
        "Discutir coletivamente estratégias para descobrir o número escondido.",
        "Propor um problema do cotidiano que se converta em uma sentença parecida (ex.: valor de uma compra parcelada).",
        "Resolver em duplas outras sentenças com número desconhecido.",
        "Corrigir coletivamente, comparando as estratégias usadas pela turma."
      ]
    },
    {
      "theme": "Se um custa tanto, quanto custam três? Proporcionalidade em receitas e compras",
      "curriculumCode": "EF05MA12",
      "description": "Resolver problemas que envolvam variação de proporcionalidade direta entre duas grandezas, como o valor a pagar por um produto ou os ingredientes de uma receita.",
      "materials": ["Receita simples impressa", "Lista de preços fictícios"],
      "steps": [
        "Apresentar uma receita simples para 4 pessoas e perguntar como ficaria para 8 pessoas.",
        "Resolver coletivamente, dobrando cada ingrediente da receita.",
        "Propor um problema de preço: 'se 1 caderno custa 5 reais, quanto custam 4 cadernos?'.",
        "Resolver problemas parecidos em duplas, com quantidades diferentes.",
        "Corrigir coletivamente, destacando a relação de proporcionalidade usada."
      ]
    },
    {
      "theme": "Repartindo em partes desiguais: o dobro de um pedaço",
      "curriculumCode": "EF05MA13",
      "description": "Resolver problemas envolvendo a partilha de uma quantidade em duas partes desiguais, como dividir de modo que uma parte seja o dobro da outra.",
      "materials": ["Objetos para repartir (fichas, tampinhas)", "Lousa"],
      "steps": [
        "Apresentar uma situação: 'repartir 30 figurinhas entre dois irmãos, de forma que um receba o dobro do outro'.",
        "Discutir coletivamente como descobrir quanto cada um deve receber.",
        "Resolver o problema com material manipulável, conferindo o resultado.",
        "Propor um novo problema parecido para os alunos resolverem em duplas.",
        "Corrigir coletivamente, comparando as estratégias de resolução usadas."
      ]
    },
    {
      "theme": "Coordenadas geográficas e mapas: localizando com dois números",
      "curriculumCode": "EF05MA14",
      "description": "Utilizar e compreender diferentes representações para a localização de objetos no plano, como mapas, células em planilhas eletrônicas e coordenadas geográficas.",
      "materials": ["Mapa simples com linhas e colunas numeradas/letradas", "Planilha impressa com células (opcional)"],
      "steps": [
        "Apresentar um mapa com linhas numeradas e colunas com letras (como um jogo de batalha naval).",
        "Explicar como localizar um ponto usando a combinação letra + número.",
        "Propor desafios: 'o que está na posição B3?'.",
        "Em duplas, os alunos criam e trocam desafios de localização usando o mapa.",
        "Relacionar a atividade com o uso de coordenadas em uma planilha eletrônica, se possível mostrar um exemplo."
      ]
    },
    {
      "theme": "Movendo-se no plano cartesiano",
      "curriculumCode": "EF05MA15",
      "description": "Interpretar, descrever e representar a localização ou movimentação de objetos no plano cartesiano (1º quadrante), utilizando coordenadas cartesianas.",
      "materials": ["Malha quadriculada com eixos desenhados", "Fichas numeradas para marcar pontos"],
      "steps": [
        "Desenhar um plano cartesiano simples (1º quadrante) na lousa, explicando os eixos x e y.",
        "Marcar coletivamente um ponto dado pelas coordenadas (ex.: (3,2)).",
        "Propor que os alunos, em duplas, marquem outros pontos indicados pelo professor.",
        "Descrever um pequeno trajeto entre pontos usando direção e sentido (direita, cima).",
        "Fechar com um desafio: cada dupla cria um trajeto simples para outra dupla seguir no plano."
      ]
    },
    {
      "theme": "De figura espacial para planificação: prismas, pirâmides, cilindros e cones",
      "curriculumCode": "EF05MA16",
      "description": "Associar figuras espaciais a suas planificações (prismas, pirâmides, cilindros e cones) e analisar, nomear e comparar seus atributos.",
      "materials": ["Sólidos geométricos de papel ou plástico", "Planificações impressas dos mesmos sólidos"],
      "steps": [
        "Apresentar um sólido geométrico e sua planificação correspondente, comparando as duas formas.",
        "Pedir que os alunos, em duplas, tentem montar um sólido a partir de uma planificação recortada.",
        "Discutir coletivamente quantas faces, vértices e arestas cada sólido tem.",
        "Associar cada sólido e sua planificação a um objeto do cotidiano.",
        "Registrar em uma tabela o nome do sólido, número de faces e um objeto correspondente."
      ]
    },
    {
      "theme": "Reconhecendo e desenhando polígonos com precisão",
      "curriculumCode": "EF05MA17",
      "description": "Reconhecer, nomear e comparar polígonos, considerando lados, vértices e ângulos, e desenhá-los utilizando material de desenho.",
      "materials": ["Régua e esquadro", "Malha quadriculada"],
      "steps": [
        "Apresentar diferentes polígonos e contar juntos o número de lados, vértices e ângulos de cada um.",
        "Nomear os polígonos de acordo com o número de lados (triângulo, quadrilátero, pentágono, hexágono).",
        "Propor que os alunos desenhem alguns polígonos usando régua na malha quadriculada.",
        "Comparar os polígonos desenhados, discutindo semelhanças e diferenças.",
        "Fechar com um desafio: desenhar um polígono com um número específico de lados pedido pelo professor."
      ]
    },
    {
      "theme": "Ampliando e reduzindo figuras sem perder a forma",
      "curriculumCode": "EF05MA18",
      "description": "Reconhecer a congruência dos ângulos e a proporcionalidade entre os lados correspondentes de figuras poligonais em situações de ampliação e redução.",
      "materials": ["Malha quadriculada", "Figura poligonal simples para copiar em tamanho maior/menor"],
      "steps": [
        "Apresentar uma figura poligonal desenhada em malha quadriculada.",
        "Pedir que os alunos copiem a figura em uma malha com quadrados maiores, ampliando-a proporcionalmente.",
        "Comparar a figura original e a ampliada, observando que os ângulos não mudam.",
        "Repetir a atividade fazendo uma redução da figura original.",
        "Discutir coletivamente o que muda (tamanho) e o que não muda (forma, ângulos) nessas transformações."
      ]
    },
    {
      "theme": "Medindo comprimento, área, massa, tempo e capacidade em situações reais",
      "curriculumCode": "EF05MA19",
      "description": "Resolver e elaborar problemas envolvendo medidas de comprimento, área, massa, tempo, temperatura e capacidade, com transformações entre unidades usuais.",
      "materials": ["Fita métrica, balança e recipientes graduados (o que estiver disponível)", "Tabela de unidades de medida"],
      "steps": [
        "Revisar coletivamente as unidades de medida mais usadas (metro, quilograma, litro, minuto).",
        "Propor um problema que exija transformar uma unidade em outra (ex.: quantos centímetros tem 2 metros e meio).",
        "Resolver em duplas problemas variados envolvendo diferentes grandezas.",
        "Corrigir coletivamente, revisando as transformações usadas.",
        "Fechar com um problema desafio combinando duas grandezas diferentes (ex.: tempo e distância)."
      ]
    },
    {
      "theme": "Mesmo perímetro, áreas diferentes: um mistério para investigar",
      "curriculumCode": "EF05MA20",
      "description": "Concluir, por meio de investigações, que figuras de perímetros iguais podem ter áreas diferentes e que figuras de mesma área podem ter perímetros diferentes.",
      "materials": ["Malha quadriculada", "Barbante de comprimento fixo"],
      "steps": [
        "Distribuir um pedaço de barbante do mesmo tamanho para cada dupla.",
        "Pedir que formem diferentes retângulos com o barbante, contando os quadrados de área em cada um na malha.",
        "Registrar os diferentes formatos e suas áreas correspondentes.",
        "Discutir coletivamente: o perímetro (tamanho do barbante) era sempre igual, mas a área mudou?",
        "Concluir junto com a turma a relação entre perímetro e área, registrando um exemplo no caderno."
      ]
    },
    {
      "theme": "Empilhando cubos para descobrir o volume",
      "curriculumCode": "EF05MA21",
      "description": "Reconhecer volume como grandeza associada a sólidos geométricos e medir volumes por meio de empilhamento de cubos.",
      "materials": ["Cubos de encaixe ou blocos pequenos", "Caixas de tamanhos diferentes"],
      "steps": [
        "Apresentar uma caixa pequena e perguntar quantos cubinhos cabem dentro dela.",
        "Empilhar cubos dentro da caixa para descobrir o volume, contando junto com a turma.",
        "Repetir a atividade com uma caixa maior, comparando os volumes encontrados.",
        "Em duplas, os alunos estimam e depois conferem o volume de outra caixa disponível.",
        "Registrar no caderno os volumes encontrados nas diferentes caixas testadas."
      ]
    },
    {
      "theme": "Todos os resultados possíveis: explorando o acaso",
      "curriculumCode": "EF05MA22",
      "description": "Apresentar todos os possíveis resultados de um experimento aleatório, estimando se esses resultados são igualmente prováveis ou não.",
      "materials": ["Dado", "Moeda"],
      "steps": [
        "Perguntar à turma quais são todos os resultados possíveis ao lançar um dado.",
        "Listar coletivamente os seis resultados possíveis na lousa.",
        "Repetir a pergunta para o lançamento de uma moeda (dois resultados possíveis).",
        "Discutir se todos os resultados têm a mesma chance de ocorrer em cada caso.",
        "Propor que os alunos, em duplas, listem os resultados possíveis de outro experimento simples (ex.: sortear uma cor entre três fichas)."
      ]
    },
    {
      "theme": "Qual é a chance? Calculando probabilidades simples",
      "curriculumCode": "EF05MA23",
      "description": "Determinar a probabilidade de ocorrência de um resultado em eventos aleatórios, quando todos os resultados possíveis têm a mesma chance de ocorrer.",
      "materials": ["Dado", "Saco com fichas coloridas em quantidades diferentes"],
      "steps": [
        "Perguntar qual a chance de tirar um número específico no lançamento do dado.",
        "Explicar coletivamente como calcular essa chance (1 em 6 possibilidades).",
        "Repetir a atividade com o saco de fichas coloridas, calculando a chance de tirar uma cor específica.",
        "Propor que os alunos, em duplas, calculem a probabilidade de outro evento simples proposto.",
        "Testar na prática (sorteando algumas vezes) se o resultado se aproxima do calculado."
      ]
    },
    {
      "theme": "Interpretando gráficos e tabelas de outras áreas",
      "curriculumCode": "EF05MA24",
      "description": "Interpretar dados estatísticos apresentados em textos, tabelas e gráficos (colunas ou linhas), referentes a outras áreas do conhecimento, como saúde e trânsito.",
      "materials": ["Gráfico ou tabela de um tema de saúde ou trânsito (impresso)"],
      "steps": [
        "Apresentar um gráfico ou tabela de um tema como saúde, trânsito ou meio ambiente.",
        "Perguntar o que cada parte do gráfico representa e qual é a fonte da informação.",
        "Propor perguntas de interpretação para os alunos responderem em duplas.",
        "Discutir coletivamente as respostas, comparando diferentes interpretações.",
        "Registrar no caderno uma conclusão tirada da leitura do gráfico ou tabela."
      ]
    },
    {
      "theme": "Realizando nossa própria pesquisa estatística",
      "curriculumCode": "EF05MA25",
      "description": "Realizar pesquisa envolvendo variáveis categóricas e numéricas, organizando os dados coletados em tabelas, gráficos de colunas ou barras e gráficos de linhas.",
      "materials": ["Folha para anotação da pesquisa", "Papel quadriculado para os gráficos"],
      "steps": [
        "Escolher com a turma um tema de pesquisa que combine uma variável categórica (ex.: esporte favorito) e uma numérica (ex.: quantas vezes pratica por semana).",
        "Circular pela sala coletando as respostas de cada colega.",
        "Organizar os dados coletados em uma tabela.",
        "Transformar os dados em um gráfico de colunas e, se possível, também em um gráfico de linhas.",
        "Apresentar os gráficos finais para a turma, comentando as conclusões da pesquisa."
      ]
    }
  ],
  ciencias: [
    {
      "theme": "Densidade, condução e solubilidade: propriedades dos materiais",
      "curriculumCode": "EF05CI01",
      "description": "Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais, como densidade, condutibilidade térmica e elétrica, resposta a forças magnéticas e solubilidade.",
      "materials": ["Objetos de metal e de plástico", "Copo com água e óleo", "Ímã"],
      "steps": [
        "Testar com a turma se um ímã atrai diferentes objetos disponíveis na sala.",
        "Colocar óleo e água no mesmo copo, observando que não se misturam e qual fica por cima.",
        "Comparar ao toque um objeto de metal e um de plástico deixados no mesmo ambiente, discutindo a condução de calor.",
        "Registrar em uma tabela as propriedades observadas em cada material testado.",
        "Concluir coletivamente por que certos materiais são escolhidos para certos usos, com base nas propriedades observadas."
      ]
    },
    {
      "theme": "O ciclo da água e seus efeitos na agricultura e no clima",
      "curriculumCode": "EF05CI02",
      "description": "Aplicar conhecimentos sobre as mudanças de estado físico da água para explicar o ciclo hidrológico e analisar suas implicações na agricultura, no clima e no abastecimento de água potável.",
      "materials": ["Esquema do ciclo da água (desenhado ou impresso)", "Copo com água e gelo (opcional)"],
      "steps": [
        "Retomar coletivamente os estados físicos da água e as mudanças entre eles (evaporação, condensação, precipitação).",
        "Desenhar ou apresentar um esquema do ciclo da água na lousa, explicando cada etapa.",
        "Discutir como o ciclo da água afeta a chuva nas plantações e o abastecimento das cidades.",
        "Em duplas, os alunos criam uma pequena história em quadrinhos representando o ciclo da água.",
        "Compartilhar as histórias em quadrinhos, revisando coletivamente as etapas do ciclo."
      ]
    },
    {
      "theme": "Por que as plantas protegem a água e o solo?",
      "curriculumCode": "EF05CI03",
      "description": "Selecionar argumentos que justifiquem a importância da cobertura vegetal para a manutenção do ciclo da água, a conservação dos solos e a qualidade do ar.",
      "materials": ["Imagens de área desmatada e área com vegetação preservada"],
      "steps": [
        "Mostrar imagens comparando um terreno com vegetação e outro desmatado.",
        "Perguntar o que pode acontecer com o solo e a água em cada uma das duas situações.",
        "Explicar como as raízes das plantas ajudam a segurar o solo e reter água.",
        "Em grupos, os alunos levantam argumentos sobre a importância da vegetação para o ambiente.",
        "Fechar com uma roda de conversa apresentando os argumentos levantados por cada grupo."
      ]
    },
    {
      "theme": "Como usamos a água e outros materiais no dia a dia",
      "curriculumCode": "EF05CI04",
      "description": "Identificar os principais usos da água e de outros materiais nas atividades cotidianas, discutindo formas sustentáveis de utilização desses recursos.",
      "materials": ["Ficha de registro de uso diário de água/materiais"],
      "steps": [
        "Pedir que os alunos listem, em duplas, os usos de água que fazem em um dia comum.",
        "Fazer o mesmo levantamento para outros materiais (papel, plástico).",
        "Discutir coletivamente quais desses usos poderiam ser reduzidos ou feitos de forma mais consciente.",
        "Propor uma pequena meta pessoal de uso mais sustentável de água ou material.",
        "Registrar no caderno a meta escolhida por cada aluno."
      ]
    },
    {
      "theme": "Consumo consciente: o que fazer com o que descartamos",
      "curriculumCode": "EF05CI05",
      "description": "Construir propostas coletivas para um consumo mais consciente e criar soluções tecnológicas para o descarte adequado, reutilização ou reciclagem de materiais.",
      "materials": ["Materiais recicláveis diversos (embalagens, papel, tampinhas)"],
      "steps": [
        "Separar coletivamente materiais recicláveis trazidos ou disponíveis na sala por tipo (papel, plástico, metal).",
        "Discutir o que costuma acontecer com cada tipo de material depois de descartado.",
        "Em grupos, os alunos propõem uma ideia de reutilização para um dos materiais separados.",
        "Cada grupo apresenta sua proposta de reutilização ou de consumo mais consciente.",
        "Combinar com a turma uma ação coletiva de consumo consciente para aplicar na sala."
      ]
    },
    {
      "theme": "Digestão e respiração trabalhando juntas na nutrição",
      "curriculumCode": "EF05CI06",
      "description": "Selecionar argumentos que justifiquem por que os sistemas digestório e respiratório são considerados corresponsáveis pelo processo de nutrição do organismo.",
      "materials": ["Esquema do corpo humano com os sistemas digestório e respiratório"],
      "steps": [
        "Apresentar um esquema simples dos sistemas digestório e respiratório do corpo humano.",
        "Explicar a função básica de cada sistema (digerir alimentos e captar oxigênio).",
        "Discutir coletivamente por que os dois sistemas juntos são responsáveis pela nutrição do corpo.",
        "Em duplas, os alunos elaboram um argumento explicando essa relação com suas próprias palavras.",
        "Compartilhar os argumentos elaborados, comparando as diferentes formas de explicar."
      ]
    },
    {
      "theme": "O caminho dos nutrientes: sistema circulatório em ação",
      "curriculumCode": "EF05CI07",
      "description": "Justificar a relação entre o funcionamento do sistema circulatório, a distribuição dos nutrientes pelo organismo e a eliminação dos resíduos produzidos.",
      "materials": ["Esquema do sistema circulatório", "Bolinha de papel para representar um nutriente (dramatização)"],
      "steps": [
        "Apresentar um esquema simples do sistema circulatório, destacando coração, veias e artérias.",
        "Explicar de forma simples como o sangue leva nutrientes para o corpo e recolhe resíduos.",
        "Propor uma dramatização em que alunos representam o 'transporte' de nutrientes pelo corpo (em fila, passando bolinhas de papel).",
        "Discutir coletivamente por que esse transporte é importante para a saúde do organismo.",
        "Registrar no caderno um pequeno esquema explicando o caminho dos nutrientes."
      ]
    },
    {
      "theme": "Montando um cardápio equilibrado",
      "curriculumCode": "EF05CI08",
      "description": "Organizar um cardápio equilibrado com base nas características dos grupos alimentares e nas necessidades individuais para a manutenção da saúde do organismo.",
      "materials": ["Imagens ou embalagens de diferentes grupos alimentares", "Folha para montar cardápio"],
      "steps": [
        "Apresentar os grupos alimentares (carboidratos, proteínas, frutas e verduras, entre outros) com exemplos.",
        "Discutir coletivamente por que é importante variar os grupos alimentares nas refeições.",
        "Em duplas, os alunos montam um cardápio equilibrado para um dia, incluindo café da manhã, almoço e jantar.",
        "Trocar os cardápios entre duplas para avaliar se estão equilibrados.",
        "Fechar com uma roda de conversa sobre as escolhas feitas em cada cardápio."
      ]
    },
    {
      "theme": "Hábitos alimentares e distúrbios nutricionais",
      "curriculumCode": "EF05CI09",
      "description": "Discutir a ocorrência de distúrbios nutricionais entre crianças e jovens a partir da análise dos hábitos alimentares e da prática de atividade física.",
      "materials": ["Ficha simples de hábitos alimentares (para autoavaliação, sem julgamento)"],
      "steps": [
        "Conversar coletivamente sobre o que são hábitos alimentares saudáveis e menos saudáveis.",
        "Apresentar de forma cuidadosa o que são distúrbios nutricionais (obesidade, subnutrição), sem apontar ou julgar colegas.",
        "Discutir a importância da atividade física junto com a alimentação equilibrada.",
        "Em grupos, os alunos criam uma dica de hábito saudável para compartilhar com a turma.",
        "Reunir as dicas em um mural coletivo sobre hábitos saudáveis."
      ]
    },
    {
      "theme": "Observando as constelações no céu noturno",
      "curriculumCode": "EF05CI10",
      "description": "Identificar algumas constelações no céu, com apoio de recursos como mapas celestes, e os períodos do ano em que elas são visíveis no início da noite.",
      "materials": ["Mapa celeste simples ou imagem de constelações conhecidas (Cruzeiro do Sul, Ursa Maior)"],
      "steps": [
        "Apresentar imagens de constelações conhecidas, explicando o que é uma constelação.",
        "Mostrar em um mapa celeste simples em que época do ano cada constelação costuma ser vista.",
        "Propor que os alunos desenhem uma constelação escolhida, ligando os pontos das estrelas.",
        "Combinar com a turma (e as famílias) observar o céu à noite em casa, se possível.",
        "Compartilhar na aula seguinte o que foi observado no céu noturno."
      ]
    },
    {
      "theme": "Por que o Sol parece se mover no céu?",
      "curriculumCode": "EF05CI11",
      "description": "Associar o movimento diário do Sol e das demais estrelas no céu ao movimento de rotação da Terra.",
      "materials": ["Globo terrestre e lanterna (para simular o Sol)"],
      "steps": [
        "Retomar com a turma a observação da posição do Sol em diferentes horários do dia.",
        "Usar um globo e uma lanterna para simular a rotação da Terra e o efeito do 'nascer' e 'pôr' do Sol.",
        "Girar o globo lentamente enquanto a turma observa a lanterna iluminando diferentes partes.",
        "Discutir coletivamente que não é o Sol que se move, mas a Terra que gira.",
        "Registrar no caderno um pequeno esquema explicando a rotação da Terra."
      ]
    },
    {
      "theme": "As fases da Lua ao longo dos dias",
      "curriculumCode": "EF05CI12",
      "description": "Concluir sobre a periodicidade das fases da Lua, com base na observação e no registro das formas aparentes da Lua no céu ao longo de pelo menos dois meses.",
      "materials": ["Calendário para registro das fases da Lua", "Imagens das quatro fases principais"],
      "steps": [
        "Apresentar as quatro fases principais da Lua com imagens (nova, crescente, cheia, minguante).",
        "Combinar com a turma observar e registrar a fase da Lua em um calendário ao longo de algumas semanas.",
        "Reunir periodicamente os registros feitos, comparando com o esperado.",
        "Discutir coletivamente o padrão observado ao longo do tempo de registro.",
        "Concluir junto com a turma quanto tempo dura, aproximadamente, um ciclo completo das fases da Lua."
      ]
    },
    {
      "theme": "Construindo aparelhos para observar o que os olhos não alcançam",
      "curriculumCode": "EF05CI13",
      "description": "Projetar e construir dispositivos simples para observação à distância, observação ampliada de objetos ou registro de imagens e som.",
      "materials": ["Tubos de papelão, espelhos ou lentes simples (o que estiver disponível)", "Fita adesiva e tesoura sem ponta"],
      "steps": [
        "Apresentar exemplos de aparelhos de observação (luneta, periscópio, lupa) e explicar para que servem.",
        "Propor que os grupos construam um periscópio simples usando tubo de papelão e pequenos espelhos.",
        "Testar os periscópios construídos, observando objetos fora da linha de visão direta.",
        "Discutir coletivamente como a luz se comporta dentro do aparelho construído.",
        "Compartilhar os aparelhos construídos, comentando o que funcionou bem e o que poderia melhorar."
      ]
    }
  ],
  geografia: [
    {
      "theme": "Quem se muda e para onde? Migrações no nosso estado",
      "curriculumCode": "EF05GE01",
      "description": "Descrever e analisar dinâmicas populacionais no estado onde vive, estabelecendo relações entre migrações e condições de infraestrutura.",
      "materials": ["Mapa do estado de São Paulo", "Dados simples de migração (impressos ou relatados)"],
      "steps": [
        "Apresentar um mapa do estado, localizando a cidade onde a turma vive.",
        "Conversar sobre pessoas que a turma conhece que vieram de outras cidades ou regiões do estado.",
        "Discutir possíveis motivos para essas migrações (trabalho, estudo, infraestrutura).",
        "Em duplas, os alunos localizam no mapa a cidade de origem de alguém que migrou, se souberem.",
        "Registrar no caderno uma conclusão sobre a relação entre migração e condições de vida."
      ]
    },
    {
      "theme": "Diferenças que existem entre grupos e territórios",
      "curriculumCode": "EF05GE02",
      "description": "Identificar diferenças étnico-raciais e étnico-culturais e desigualdades sociais entre grupos em diferentes territórios.",
      "materials": ["Imagens de diferentes territórios e grupos sociais do Brasil"],
      "steps": [
        "Apresentar imagens de diferentes regiões e grupos sociais do Brasil, com contrastes visíveis de infraestrutura.",
        "Perguntar à turma o que percebem de diferente entre as imagens.",
        "Discutir coletivamente possíveis causas dessas desigualdades entre territórios.",
        "Conversar sobre a diversidade étnico-racial e étnico-cultural presente na própria turma ou comunidade.",
        "Fechar reforçando a importância do respeito às diferenças e da luta contra a desigualdade."
      ]
    },
    {
      "theme": "Como as cidades crescem e o que isso muda",
      "curriculumCode": "EF05GE03",
      "description": "Identificar as formas e funções das cidades e analisar mudanças sociais, econômicas e ambientais provocadas pelo seu crescimento.",
      "materials": ["Fotos antigas e atuais de uma cidade em crescimento"],
      "steps": [
        "Mostrar fotos comparando uma cidade (ou bairro) em diferentes épocas.",
        "Perguntar o que mudou na paisagem com o crescimento da cidade.",
        "Discutir mudanças sociais (mais moradias), econômicas (mais comércio) e ambientais (menos áreas verdes) causadas pelo crescimento.",
        "Em duplas, os alunos listam uma vantagem e uma desvantagem do crescimento de uma cidade.",
        "Compartilhar as listas produzidas em roda de conversa."
      ]
    },
    {
      "theme": "Cidade e campo: quem depende de quem",
      "curriculumCode": "EF05GE04",
      "description": "Reconhecer as características da cidade e analisar as interações entre a cidade e o campo e entre cidades na rede urbana.",
      "materials": ["Imagens de paisagem urbana e rural"],
      "steps": [
        "Apresentar imagens comparando uma paisagem urbana e uma rural.",
        "Listar coletivamente características de cada uma (prédios, plantações, tipos de trabalho).",
        "Discutir o que a cidade recebe do campo (alimentos) e o que o campo recebe da cidade (produtos industrializados, serviços).",
        "Conversar sobre como diferentes cidades também trocam produtos e serviços entre si.",
        "Registrar no caderno um exemplo de troca entre cidade e campo."
      ]
    },
    {
      "theme": "O trabalho mudou: tecnologia na lavoura, na fábrica e no comércio",
      "curriculumCode": "EF05GE05",
      "description": "Identificar e comparar mudanças nos tipos de trabalho e o desenvolvimento tecnológico na agropecuária, na indústria, no comércio e nos serviços.",
      "materials": ["Imagens de trabalho agrícola/industrial antigo e atual"],
      "steps": [
        "Mostrar imagens comparando o trabalho no campo ou na indústria antigamente e hoje.",
        "Perguntar quais tecnologias mudaram a forma de trabalhar em cada imagem.",
        "Discutir coletivamente como o comércio também mudou com a tecnologia (compras online, por exemplo).",
        "Em duplas, os alunos escolhem um tipo de trabalho e descrevem uma mudança tecnológica que o afetou.",
        "Compartilhar as descobertas com a turma."
      ]
    },
    {
      "theme": "Como nos deslocamos e nos comunicamos hoje e no passado",
      "curriculumCode": "EF05GE06",
      "description": "Identificar e comparar transformações dos meios de transporte e de comunicação ao longo do tempo.",
      "materials": ["Imagens de meios de transporte e comunicação antigos e atuais"],
      "steps": [
        "Apresentar imagens de meios de transporte antigos (carroça, trem a vapor) e atuais.",
        "Repetir a atividade com meios de comunicação (carta, telégrafo, celular).",
        "Discutir coletivamente como essas mudanças afetaram a vida das pessoas.",
        "Em duplas, os alunos comparam um meio de transporte ou comunicação antigo com o equivalente atual.",
        "Registrar no caderno uma vantagem trazida pela tecnologia atual."
      ]
    },
    {
      "theme": "De onde vem a energia que usamos",
      "curriculumCode": "EF05GE07",
      "description": "Identificar diferentes tipos de energia utilizados na produção industrial, agrícola e extrativista e no cotidiano das populações.",
      "materials": ["Imagens de diferentes fontes de energia (hidrelétrica, solar, eólica, combustíveis)"],
      "steps": [
        "Apresentar imagens de diferentes fontes de energia usadas no Brasil.",
        "Discutir onde cada tipo de energia costuma ser usado (indústria, casa, transporte).",
        "Conversar sobre quais fontes de energia são renováveis e quais não são.",
        "Em duplas, os alunos listam as fontes de energia usadas na própria casa ou escola.",
        "Compartilhar as listas, comparando os diferentes usos de energia identificados."
      ]
    },
    {
      "theme": "A cidade muda: comparando fotos aéreas de diferentes épocas",
      "curriculumCode": "EF05GE08",
      "description": "Analisar transformações de paisagens nas cidades, comparando sequências de fotografias, fotografias aéreas e imagens de satélite de épocas diferentes.",
      "materials": ["Fotografias aéreas ou de satélite de um mesmo lugar em épocas diferentes (impressas)"],
      "steps": [
        "Apresentar duas ou mais imagens aéreas do mesmo lugar em épocas diferentes.",
        "Pedir que os alunos, em duplas, listem o que mudou e o que permaneceu na paisagem.",
        "Discutir coletivamente possíveis causas das mudanças observadas (construções, desmatamento, novas ruas).",
        "Comparar com fotos de outro lugar, se disponíveis, para ver se o padrão de mudança se repete.",
        "Registrar no caderno uma conclusão sobre como a paisagem urbana se transforma ao longo do tempo."
      ]
    },
    {
      "theme": "Cidades conectadas: hierarquia e ligações entre elas",
      "curriculumCode": "EF05GE09",
      "description": "Estabelecer conexões e hierarquias entre diferentes cidades, utilizando mapas temáticos e representações gráficas.",
      "materials": ["Mapa do estado ou região com cidades de tamanhos diferentes destacadas"],
      "steps": [
        "Apresentar um mapa mostrando cidades de tamanhos e importância diferentes na região.",
        "Discutir o que torna uma cidade maior ou mais importante em serviços (hospitais, comércio, transporte).",
        "Explicar a ideia de rede urbana, em que cidades pequenas dependem de cidades maiores para certos serviços.",
        "Em duplas, os alunos indicam no mapa qual cidade da região oferece serviços para outras menores.",
        "Fechar com uma conversa sobre a cidade onde vivem e suas conexões com outras cidades."
      ]
    },
    {
      "theme": "Água limpa, água suja: qualidade ambiental e poluição",
      "curriculumCode": "EF05GE10",
      "description": "Reconhecer e comparar atributos da qualidade ambiental e algumas formas de poluição de cursos de água e dos oceanos.",
      "materials": ["Imagens de rios/mares limpos e poluídos"],
      "steps": [
        "Mostrar imagens comparando um curso de água limpo e outro poluído.",
        "Perguntar quais elementos indicam que a água está poluída (lixo, cor, cheiro).",
        "Discutir coletivamente as causas mais comuns de poluição da água (esgoto, lixo, indústrias).",
        "Conversar sobre os efeitos da poluição da água para as pessoas e para os animais.",
        "Registrar no caderno uma atitude que ajuda a evitar a poluição de rios e mares."
      ]
    },
    {
      "theme": "Problemas ambientais perto de nós: identificando e propondo soluções",
      "curriculumCode": "EF05GE11",
      "description": "Identificar e descrever problemas ambientais que ocorrem no entorno da escola e da residência, propondo soluções, inclusive tecnológicas, para esses problemas.",
      "materials": ["Nenhum material obrigatório; papel para registro das observações"],
      "steps": [
        "Perguntar aos alunos que problemas ambientais eles observam perto da escola ou de casa (lixo, poluição, falta de árvores).",
        "Listar coletivamente os problemas citados na lousa.",
        "Em grupos, os alunos escolhem um problema e discutem possíveis soluções, inclusive usando tecnologia.",
        "Cada grupo apresenta sua proposta de solução para a turma.",
        "Combinar uma pequena ação prática que a turma possa realizar relacionada a um dos problemas discutidos."
      ]
    },
    {
      "theme": "Quem cuida disso? Poder público e participação social",
      "curriculumCode": "EF05GE12",
      "description": "Identificar órgãos do poder público e canais de participação social responsáveis por buscar soluções para a melhoria da qualidade de vida, discutindo propostas que afetam a comunidade.",
      "materials": ["Exemplos de órgãos públicos locais (prefeitura, secretaria de meio ambiente)"],
      "steps": [
        "Perguntar aos alunos quem é responsável por resolver problemas como buracos na rua ou coleta de lixo.",
        "Apresentar de forma simples alguns órgãos do poder público responsáveis por esses temas.",
        "Discutir formas de participação social conhecidas pela turma (reclamação, abaixo-assinado, ouvidoria).",
        "Em duplas, os alunos imaginam como reportariam um problema ambiental do bairro ao poder público.",
        "Fechar com uma roda de conversa sobre a importância da participação da comunidade nessas decisões."
      ]
    }
  ],
  historia: [
    {
      "theme": "Como surgiram os povos: cultura e território",
      "curriculumCode": "EF05HI01",
      "description": "Identificar os processos de formação das culturas e dos povos, relacionando-os com o espaço geográfico que ocupam.",
      "materials": ["Mapa-múndi ou mapa do Brasil", "Imagens de diferentes povos e culturas"],
      "steps": [
        "Apresentar imagens de diferentes povos e culturas do mundo ou do Brasil.",
        "Discutir como o lugar onde um povo vive pode influenciar seus costumes (alimentação, moradia, vestimenta).",
        "Localizar no mapa a origem de alguns dos povos apresentados.",
        "Em duplas, os alunos relacionam uma característica cultural a uma característica do território onde o povo vive.",
        "Compartilhar as relações encontradas com a turma."
      ]
    },
    {
      "theme": "Quem manda aqui? Organização do poder político",
      "curriculumCode": "EF05HI02",
      "description": "Identificar os mecanismos de organização do poder político, com vistas à compreensão da ideia de Estado e de outras formas de ordenação social.",
      "materials": ["Exemplos simples de diferentes formas de organização social (tribo, reino, Estado)"],
      "steps": [
        "Perguntar aos alunos quem toma as decisões importantes em diferentes grupos (família, escola, cidade, país).",
        "Apresentar exemplos históricos simples de diferentes formas de organização do poder (líder de tribo, rei, presidente).",
        "Discutir coletivamente semelhanças e diferenças entre essas formas de organização.",
        "Em duplas, os alunos imaginam e descrevem uma regra que um grupo precisaria ter para se organizar.",
        "Compartilhar as regras criadas, comparando com formas reais de organização social."
      ]
    },
    {
      "theme": "Culturas e religiões que formaram os povos antigos",
      "curriculumCode": "EF05HI03",
      "description": "Analisar o papel das culturas e das religiões na composição identitária dos povos antigos.",
      "materials": ["Imagens ou textos curtos sobre um povo antigo (egípcios, gregos, povos indígenas)"],
      "steps": [
        "Apresentar informações simples sobre um povo antigo, incluindo aspectos culturais e religiosos.",
        "Discutir como as crenças e tradições desse povo influenciavam seu modo de vida.",
        "Comparar com outro povo antigo, observando semelhanças e diferenças culturais e religiosas.",
        "Em duplas, os alunos registram uma característica cultural e uma religiosa de cada povo estudado.",
        "Fechar com uma roda de conversa sobre como cultura e religião ajudam a formar a identidade de um povo."
      ]
    },
    {
      "theme": "Cidadania é respeitar as diferenças",
      "curriculumCode": "EF05HI04",
      "description": "Associar a noção de cidadania aos princípios de respeito à diversidade, à pluralidade e aos direitos humanos.",
      "materials": ["Situações-problema sobre respeito à diversidade"],
      "steps": [
        "Ler situações do cotidiano em que a diversidade (de cor, religião, origem) está presente na escola ou comunidade.",
        "Discutir coletivamente o que significa respeitar a diversidade em cada situação.",
        "Apresentar de forma simples a ideia de direitos humanos como direitos de todas as pessoas.",
        "Em grupos, os alunos criam um combinado de respeito à diversidade para a turma.",
        "Fechar reunindo os combinados criados em um cartaz coletivo da sala."
      ]
    },
    {
      "theme": "Direitos conquistados: cidadania na história",
      "curriculumCode": "EF05HI05",
      "description": "Associar o conceito de cidadania à conquista de direitos dos povos e das sociedades, compreendendo-o como uma conquista histórica.",
      "materials": ["Linha do tempo simples com conquistas de direitos (voto, educação, entre outras)"],
      "steps": [
        "Apresentar exemplos de direitos que nem sempre existiram (como o direito ao voto para todos).",
        "Discutir como esses direitos foram conquistados ao longo da história, por meio de luta e organização.",
        "Construir coletivamente uma linha do tempo simples com algumas dessas conquistas.",
        "Em duplas, os alunos escolhem um direito e imaginam por que ele foi importante conquistar.",
        "Compartilhar as reflexões com a turma."
      ]
    },
    {
      "theme": "Como as formas de comunicação mudaram a sociedade",
      "curriculumCode": "EF05HI06",
      "description": "Comparar o uso de diferentes linguagens e tecnologias no processo de comunicação e avaliar os significados sociais, políticos e culturais atribuídos a elas.",
      "materials": ["Imagens de diferentes tecnologias de comunicação ao longo do tempo (carta, rádio, telefone, internet)"],
      "steps": [
        "Apresentar imagens de diferentes tecnologias de comunicação usadas ao longo da história.",
        "Discutir como cada uma mudou a forma como as pessoas se comunicavam e se informavam.",
        "Conversar sobre os efeitos sociais e culturais de tecnologias mais recentes, como a internet.",
        "Em duplas, os alunos comparam como uma notícia chegaria até eles hoje e há cem anos.",
        "Compartilhar as comparações feitas, discutindo vantagens e desafios de cada época."
      ]
    },
    {
      "theme": "De quem são os monumentos e memórias que vemos por aí?",
      "curriculumCode": "EF05HI07",
      "description": "Identificar os processos de produção, hierarquização e difusão dos marcos de memória, discutindo a presença ou ausência de diferentes grupos na nomeação desses marcos.",
      "materials": ["Fotos de monumentos, praças ou ruas com nomes de pessoas históricas"],
      "steps": [
        "Apresentar fotos de monumentos ou nomes de ruas/praças conhecidos pela turma.",
        "Perguntar quem são as pessoas homenageadas e por que foram escolhidas.",
        "Discutir coletivamente se diferentes grupos da sociedade (mulheres, povos indígenas, negros) estão representados nesses marcos de memória.",
        "Em duplas, os alunos pesquisam ou imaginam quem poderia ser homenageado e ainda não é.",
        "Compartilhar as ideias, refletindo sobre a diversidade nas homenagens públicas."
      ]
    },
    {
      "theme": "Como diferentes povos marcam a passagem do tempo",
      "curriculumCode": "EF05HI08",
      "description": "Identificar formas de marcação da passagem do tempo em distintas sociedades, incluindo os povos indígenas originários e os povos africanos.",
      "materials": ["Imagens ou textos curtos sobre calendários e formas de marcar o tempo em diferentes culturas"],
      "steps": [
        "Apresentar diferentes formas de marcar o tempo usadas por povos indígenas e africanos (ciclos da natureza, calendários próprios).",
        "Comparar essas formas com o calendário usado hoje.",
        "Discutir coletivamente por que diferentes povos podem ter formas diferentes de organizar o tempo.",
        "Em duplas, os alunos registram uma forma de marcar o tempo estudada e compará-la com a própria rotina.",
        "Fechar com uma roda de conversa valorizando a diversidade de formas de contar o tempo."
      ]
    },
    {
      "theme": "Pontos de vista diferentes sobre um mesmo assunto de hoje",
      "curriculumCode": "EF05HI09",
      "description": "Comparar pontos de vista sobre temas que impactam a vida cotidiana no tempo presente, por meio do acesso a diferentes fontes, incluindo orais.",
      "materials": ["Duas fontes diferentes (textos, relatos) sobre um mesmo tema atual"],
      "steps": [
        "Apresentar um tema atual de interesse da turma (uso de tecnologia, meio ambiente, entre outros).",
        "Mostrar duas fontes com pontos de vista diferentes sobre o mesmo tema.",
        "Discutir coletivamente as diferenças entre as duas opiniões apresentadas.",
        "Propor que os alunos entrevistem uma pessoa da família sobre o tema, coletando uma fonte oral.",
        "Compartilhar os relatos coletados, comparando os diferentes pontos de vista encontrados."
      ]
    },
    {
      "theme": "O que guardamos para sempre: patrimônios materiais e imateriais",
      "curriculumCode": "EF05HI10",
      "description": "Inventariar os patrimônios materiais e imateriais da humanidade, analisando mudanças e permanências desses patrimônios ao longo do tempo.",
      "materials": ["Imagens de patrimônios materiais (prédios, monumentos) e imateriais (festas, danças, saberes)"],
      "steps": [
        "Explicar a diferença entre patrimônio material (algo que se toca) e imaterial (uma tradição, uma festa, um saber).",
        "Apresentar exemplos conhecidos de cada tipo de patrimônio, do Brasil ou do mundo.",
        "Discutir coletivamente um patrimônio material e um imaterial presentes na própria comunidade.",
        "Em duplas, os alunos registram por que esse patrimônio é importante de ser preservado.",
        "Reunir os registros em um pequeno inventário coletivo dos patrimônios da comunidade da turma."
      ]
    }
  ]
};
