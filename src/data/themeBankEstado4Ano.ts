// Banco de temas do 4º ano — rede ESTADUAL (Currículo Paulista, SEDUC-SP/EFAPE), no mesmo formato
// de src/data/themeBank.ts (que cobre a rede municipal) e de src/data/themeBankEstado2Ano.ts.
// Códigos de habilidade (curriculumCode) pesquisados diretamente nos documentos oficiais de
// "Habilidades Essenciais — Anos Iniciais" do Currículo Paulista, publicados pela SEDUC-SP/EFAPE
// em efape.educacao.sp.gov.br/curriculopaulista (documentos "Habilidades essenciais_Anos
// Iniciais_Língua Portuguesa", "..._Matemática" (Matemática-Anos-Iniciais.pdf), "..._Ciências",
// "..._Geografia" e "..._Historia") — não são estimados nem convertidos de outro currículo.
// Como no banco do 2º ano, alguns códigos aparecem desdobrados em duas ou três partes
// (ex.: "EF04LP01B", "EF04MA01A/EF04MA01B") quando o próprio documento oficial os apresenta
// como habilidades essenciais separadas, e alguns trazem "*" quando aparecem assim no documento
// fonte. A seleção de habilidades essenciais é um recorte dos documentos oficiais (não cobre
// 100% dos códigos EF04 da BNCC) — cobre todas as habilidades que os documentos da SEDUC-SP
// marcam como essenciais para o 4º ano nas 5 disciplinas.

import { BankEntry, OwnSubject } from "@/types/plano";

export const ESTADO_4_ANO_THEME_BANK: Record<OwnSubject, BankEntry[]> = {
  "lingua-portuguesa": [
    {
      "theme": "Pontuando textos: ponto final, exclamação, interrogação e reticências",
      "curriculumCode": "EF04LP01B",
      "description": "Pontuar corretamente textos, usando ponto final, ponto de exclamação, ponto de interrogação e reticências, segundo as características próprias dos diferentes gêneros.",
      "materials": ["Texto curto sem nenhuma pontuação", "Lousa"],
      "steps": [
        "Apresentar um texto curto sem nenhuma pontuação e pedir que a turma tente lê-lo em voz alta.",
        "Perguntar o que dificulta a leitura e a compreensão sem os sinais de pontuação.",
        "Relembrar coletivamente a função de cada sinal: ponto final, exclamação, interrogação e reticências.",
        "Em duplas, os alunos pontuam o texto de acordo com o sentido de cada frase.",
        "Corrigir coletivamente na lousa, comparando as escolhas feitas por diferentes duplas.",
        "Fechar pedindo que cada aluno escreva três frases próprias usando sinais de pontuação diferentes."
      ]
    },
    {
      "theme": "Palavras com -oso, -eza, -al e -ice: regularidades da escrita",
      "curriculumCode": "EF04LP02",
      "description": "Grafar corretamente palavras com regularidades morfológico-gramaticais: -esa/-oso (adjetivos), -eza (substantivos derivados de adjetivos), -al/-il (coletivos) e -ice (substantivos).",
      "materials": ["Lista de palavras com os sufixos -oso, -eza, -al e -ice", "Lousa"],
      "steps": [
        "Escrever na lousa palavras com os sufixos estudados (gostoso, beleza, animal, chatice).",
        "Destacar em cada palavra o sufixo e conversar sobre o sentido que ele acrescenta.",
        "Pedir que os alunos, em duplas, criem novas palavras usando os mesmos sufixos a partir de palavras conhecidas.",
        "Compartilhar as palavras criadas com a turma, verificando juntos a grafia correta.",
        "Propor uma lista para casa com mais exemplos de cada sufixo encontrados em livros ou embalagens."
      ]
    },
    {
      "theme": "Acentuando monossílabos tônicos: pé, dá, nó",
      "curriculumCode": "EF04LP04A",
      "description": "Compreender a regra de acentuação de monossílabos tônicos terminados em A, E, O.",
      "materials": ["Cartaz com pares de monossílabos (de/dé, ma/má, no/nó)", "Lousa"],
      "steps": [
        "Escrever na lousa pares de monossílabos, um átono e um tônico (de/dé, ma/má).",
        "Ler os pares em voz alta, destacando a diferença de força na pronúncia de cada um.",
        "Explicar a regra: monossílabos tônicos terminados em A, E ou O recebem acento gráfico.",
        "Propor uma lista de palavras para os alunos classificarem como átonas ou tônicas e acentuarem quando necessário.",
        "Corrigir coletivamente, revisando os erros mais comuns encontrados."
      ]
    },
    {
      "theme": "O que muda quando pontuamos diferente",
      "curriculumCode": "EF04LP05A",
      "description": "Compreender os efeitos de sentido decorrentes do uso de diferentes sinais de pontuação (ponto final, de interrogação, de exclamação, dois-pontos em diálogos).",
      "materials": ["Frase escrita de duas formas com pontuação diferente", "Lousa"],
      "steps": [
        "Escrever a mesma frase duas vezes na lousa, pontuada de formas diferentes, mudando o sentido.",
        "Perguntar à turma o que muda no sentido de cada versão da frase.",
        "Apresentar um pequeno diálogo mostrando o uso dos dois-pontos antes da fala de um personagem.",
        "Em duplas, os alunos reescrevem frases trocando a pontuação para produzir um novo sentido.",
        "Compartilhar os exemplos criados, discutindo o efeito de cada escolha de pontuação."
      ]
    },
    {
      "theme": "Palavras terminadas em -izar/-isar e -ência/-ância/-ança",
      "curriculumCode": "EF04LP08A",
      "description": "Grafar, corretamente, palavras com regularidades morfológico-gramaticais terminadas em -izar/-isar e -ência/-ância/-ança.",
      "materials": ["Lista de palavras com essas terminações", "Lousa"],
      "steps": [
        "Apresentar palavras terminadas em -izar/-isar (organizar, avisar) e em -ência/-ância/-ança (paciência, dança).",
        "Ler as palavras em voz alta e observar juntos a grafia de cada terminação.",
        "Propor um exercício de completar palavras com lacunas nas terminações estudadas.",
        "Corrigir coletivamente, explicando os casos que geram mais dúvida.",
        "Fechar com um ditado curto de frases contendo palavras dos dois grupos."
      ]
    },
    {
      "theme": "J ou G? C, Ç, SS, SC, CH ou X? Resolvendo dúvidas de ortografia",
      "curriculumCode": "EF04LP08B",
      "description": "Grafar, corretamente, palavras de uso frequente com J/G, C, Ç, SS, SC, CH, X.",
      "materials": ["Fichas com palavras incompletas (lacunas)", "Lousa"],
      "steps": [
        "Apresentar palavras de uso frequente com lacunas nas letras estudadas (via_em, pi_cina, cere_a).",
        "Em duplas, os alunos tentam completar as palavras com a letra correta.",
        "Corrigir coletivamente na lousa, explicando por que cada letra foi escolhida.",
        "Propor um jogo rápido de ditado com palavras que usam essas letras.",
        "Registrar no caderno uma lista das palavras que geraram mais dúvida para revisar depois."
      ]
    },
    {
      "theme": "Por que, por quê, porque, porquê: os quatro porquês",
      "curriculumCode": "EF04LP08C",
      "description": "Grafar, corretamente, os diferentes porquês (por que, por quê, porque, porquê).",
      "materials": ["Cartaz com os quatro porquês e exemplos de uso", "Frases com lacunas"],
      "steps": [
        "Apresentar os quatro porquês em um cartaz, com um exemplo de frase para cada um.",
        "Explicar rapidamente quando usar cada forma (pergunta, resposta, no meio da frase, substantivo).",
        "Distribuir frases com lacunas para os alunos completarem com o porquê correto.",
        "Corrigir coletivamente, comentando os casos mais confusos.",
        "Propor que cada aluno escreva duas frases próprias usando porquês diferentes."
      ]
    },
    {
      "theme": "Pesquisando em verbetes de dicionário e enciclopédia",
      "curriculumCode": "EF04LP09",
      "description": "Ler e compreender verbetes de enciclopédia ou de dicionário (digitais ou impressos), considerando a situação comunicativa, o tema/assunto, a estrutura composicional e o estilo do gênero.",
      "materials": ["Dicionário ou enciclopédia infantil", "Lista de palavras para pesquisar"],
      "steps": [
        "Mostrar um dicionário e uma enciclopédia, explicando como cada um está organizado.",
        "Escolher uma palavra ou tema e localizar o verbete correspondente em conjunto com a turma.",
        "Ler o verbete e identificar suas partes (palavra, classe gramatical, definição, exemplos).",
        "Em duplas, os alunos pesquisam outro verbete e anotam a informação mais importante encontrada.",
        "Compartilhar as descobertas com a turma, comparando os verbetes pesquisados."
      ]
    },
    {
      "theme": "Lendo cartas de reclamação",
      "curriculumCode": "EF04LP10",
      "description": "Ler e compreender, com autonomia, cartas de reclamação, entre outros textos do campo da vida pública, considerando a situação comunicativa, o tema/assunto, a estrutura composicional e o estilo do gênero.",
      "materials": ["Exemplo de carta de reclamação"],
      "steps": [
        "Apresentar uma carta de reclamação real ou simulada sobre um problema do dia a dia.",
        "Ler em voz alta, identificando qual é o problema relatado.",
        "Perguntar quem escreve, para quem e o que a pessoa espera como solução.",
        "Em duplas, os alunos identificam as partes da carta (problema, argumento, pedido).",
        "Fechar comparando a carta de reclamação com outros textos já conhecidos, como o bilhete."
      ]
    },
    {
      "theme": "Escrevendo nossa carta de reclamação",
      "curriculumCode": "EF04LP11A",
      "description": "Planejar e produzir, com autonomia, cartas de reclamação, entre outros textos do campo da vida pública, considerando seus elementos constituintes: problema, opiniões e argumentos, de acordo com a situação comunicativa, o tema/assunto, a estrutura composicional e o estilo do gênero.",
      "materials": ["Papel para escrita", "Modelo de carta de reclamação"],
      "steps": [
        "Escolher com a turma um problema real da escola ou do bairro para reclamar por escrito.",
        "Planejar coletivamente o que precisa ter na carta: o problema, a opinião e os argumentos.",
        "Cada aluno ou dupla escreve sua carta de reclamação seguindo o planejamento.",
        "Circular pela sala apoiando quem tiver dificuldade em organizar os argumentos.",
        "Ler algumas cartas em voz alta, comentando os argumentos usados."
      ]
    },
    {
      "theme": "Revisando e caprichando na carta de reclamação",
      "curriculumCode": "EF04LP11B",
      "description": "Revisar e editar cartas de reclamação, entre outros textos produzidos, cuidando da apresentação final do texto.",
      "materials": ["Cartas de reclamação produzidas pela turma", "Lápis para revisão"],
      "steps": [
        "Relembrar os elementos que uma boa carta de reclamação precisa ter.",
        "Trocar as cartas entre os colegas para uma primeira leitura e sugestões.",
        "Cada aluno anota o que pode melhorar na carta do colega (clareza, argumentos, pontuação).",
        "Devolver as cartas e pedir que cada autor revise e reescreva sua versão final.",
        "Reunir as cartas revisadas em um mural ou pasta da turma."
      ]
    },
    {
      "theme": "Lendo regras de jogos e brincadeiras",
      "curriculumCode": "EF04LP13",
      "description": "Identificar e manter em instruções de montagem de jogos e brincadeiras (digitais ou impressos), o tema/assunto, a estrutura composicional (lista, apresentação de materiais e instruções, etapas do jogo), o estilo (verbos no imperativo) e a situação comunicativa.",
      "materials": ["Instruções de um jogo ou brincadeira conhecida"],
      "steps": [
        "Apresentar as instruções escritas de um jogo ou brincadeira para a turma.",
        "Ler em voz alta, identificando a lista de materiais e as etapas do jogo.",
        "Destacar os verbos usados nas instruções (embaralhe, distribua, jogue) e por que aparecem no imperativo.",
        "Em duplas, os alunos seguem as instruções lidas para jogar de fato.",
        "Conversar sobre o que aconteceria se alguma etapa das instruções estivesse fora de ordem."
      ]
    },
    {
      "theme": "O quê, quem, onde e quando: identificando fatos em notícias",
      "curriculumCode": "EF04LP14",
      "description": "Identificar em notícias, cartas de leitor, comentários, posts entre outros textos do campo da vida pública, fatos, participantes, local e momento/tempo da ocorrência do fato/assunto comentado.",
      "materials": ["Notícia curta impressa"],
      "steps": [
        "Ler uma notícia curta em voz alta para a turma.",
        "Perguntar: o que aconteceu, quem participou, onde e quando foi?",
        "Anotar as respostas na lousa, separadas por categoria (fato, participantes, local, momento).",
        "Em duplas, os alunos repetem a atividade com uma segunda notícia.",
        "Compartilhar as respostas encontradas, comparando as duas notícias lidas."
      ]
    },
    {
      "theme": "Lendo notícias, cartas de leitor e comentários",
      "curriculumCode": "EF04LP15A",
      "description": "Ler e compreender notícias, cartas de leitor, comentários, posts, entre outros textos do campo da vida pública.",
      "materials": ["Notícia, carta de leitor e comentário impressos"],
      "steps": [
        "Apresentar os três tipos de texto: notícia, carta de leitor e comentário.",
        "Ler cada um em voz alta, perguntando qual é a finalidade de cada texto.",
        "Comparar as diferenças entre contar um fato (notícia) e opinar sobre ele (carta de leitor, comentário).",
        "Em duplas, os alunos identificam de qual tipo é um novo texto apresentado.",
        "Fechar com uma conversa sobre onde encontramos esses textos no dia a dia (jornal, sites, redes sociais)."
      ]
    },
    {
      "theme": "Fato ou opinião? Separando as duas coisas na notícia",
      "curriculumCode": "EF04LP15B",
      "description": "Distinguir fatos de opiniões/sugestões na leitura de diferentes textos do campo da vida pública (notícias, cartas de leitor, comentários, posts...).",
      "materials": ["Notícia com frases de fato e de opinião misturadas"],
      "steps": [
        "Explicar a diferença entre fato (o que aconteceu) e opinião (o que alguém pensa sobre isso).",
        "Ler um texto com frases de fato e de opinião misturadas.",
        "Pedir que os alunos, em duplas, classifiquem cada frase como fato ou opinião.",
        "Corrigir coletivamente, discutindo os casos mais difíceis de classificar.",
        "Propor que cada aluno escreva um fato e uma opinião sobre um mesmo assunto da turma."
      ]
    },
    {
      "theme": "Escrevendo uma notícia sobre a nossa escola",
      "curriculumCode": "EF04LP16A",
      "description": "Planejar e produzir notícias sobre assuntos de interesse do universo escolar (digitais ou impressas), considerando a situação comunicativa, o tema/assunto, a estrutura composicional e o estilo do gênero.",
      "materials": ["Papel para produção", "Roteiro de notícia (o quê, quem, quando, onde)"],
      "steps": [
        "Escolher com a turma um fato recente e interessante da escola para virar notícia.",
        "Planejar coletivamente as informações que não podem faltar: o quê, quem, onde e quando.",
        "Em duplas, os alunos escrevem a notícia seguindo o roteiro planejado.",
        "Circular pela sala apoiando a organização das informações no texto.",
        "Ler algumas notícias produzidas em voz alta para a turma."
      ]
    },
    {
      "theme": "Revisando nossa notícia antes de publicar",
      "curriculumCode": "EF04LP16B",
      "description": "Revisar e editar notícias produzidas, considerando a situação comunicativa, o tema/assunto, a estrutura composicional e o estilo do gênero, cuidando da apresentação final do texto.",
      "materials": ["Notícias produzidas pela turma"],
      "steps": [
        "Relembrar o que uma notícia precisa ter: título, fato, participantes, local e momento.",
        "Trocar as notícias entre duplas para uma leitura e sugestões de melhoria.",
        "Cada dupla revisa sua notícia considerando os comentários recebidos.",
        "Produzir a versão final, cuidando do título e da apresentação do texto.",
        "Montar um mural ou jornal da turma com as notícias finalizadas."
      ]
    },
    {
      "theme": "Lendo textos de divulgação científica e curiosidades",
      "curriculumCode": "EF04LP19",
      "description": "Ler e compreender textos expositivos de divulgação científica, resumos, mapas conceituais, \"você sabia?\", entre outros textos do campo das práticas de estudo e pesquisa.",
      "materials": ["Texto de divulgação científica curto", "Revista ou site infantil de curiosidades"],
      "steps": [
        "Apresentar um texto curto de divulgação científica ou uma seção de curiosidades \"você sabia?\".",
        "Ler em voz alta, destacando as informações mais importantes.",
        "Perguntar o que os alunos aprenderam de novo com a leitura.",
        "Em duplas, os alunos leem outro texto semelhante e anotam uma curiosidade encontrada.",
        "Compartilhar as curiosidades descobertas com toda a turma."
      ]
    },
    {
      "theme": "Para que servem os gráficos e tabelas em um texto?",
      "curriculumCode": "EF04LP20",
      "description": "Reconhecer a função de gráficos, diagramas e tabelas em diferentes textos que requerem a apresentação de dados e informações, no campo das práticas de estudo e pesquisa.",
      "materials": ["Texto de pesquisa com gráfico ou tabela"],
      "steps": [
        "Apresentar um texto de pesquisa que traga um gráfico ou uma tabela.",
        "Perguntar o que o gráfico ou a tabela mostra que o texto sozinho não mostraria tão rápido.",
        "Comparar a mesma informação escrita em texto e representada em gráfico.",
        "Em duplas, os alunos respondem perguntas de interpretação usando o gráfico ou a tabela.",
        "Fechar discutindo por que pesquisas costumam usar gráficos e tabelas."
      ]
    },
    {
      "theme": "Planejando e escrevendo nosso texto de pesquisa",
      "curriculumCode": "EF04LP21A",
      "description": "Planejar e produzir textos expositivos de divulgação científica, resumos, mapas conceituais, \"você sabia?\", entre outros textos do campo das práticas de estudo e pesquisa, a partir de temas de interesse dos estudantes, com base em observações e pesquisas, incluindo, quando pertinente, imagens, gráficos ou tabelas.",
      "materials": ["Fontes de pesquisa (livros, sites)", "Papel para produção"],
      "steps": [
        "Escolher com a turma um tema de interesse para pesquisar (um animal, um planeta, uma invenção).",
        "Organizar em grupos e definir o que cada grupo vai pesquisar sobre o tema.",
        "Pesquisar em livros ou sites indicados, anotando as informações principais.",
        "Planejar e escrever o texto expositivo, incluindo uma imagem, gráfico ou tabela se fizer sentido.",
        "Apresentar o texto produzido para a turma, contando o que descobriram."
      ]
    },
    {
      "theme": "Revisando nosso texto de pesquisa",
      "curriculumCode": "EF04LP21B",
      "description": "Revisar e editar textos expositivos de divulgação científica, resumos, mapas conceituais, \"você sabia?\", entre outros textos produzidos, cuidando da apresentação final do texto.",
      "materials": ["Textos de pesquisa produzidos pela turma"],
      "steps": [
        "Relembrar o que um bom texto de pesquisa precisa ter (informações claras, organização, título).",
        "Trocar os textos entre os grupos para uma leitura e sugestões de melhoria.",
        "Cada grupo revisa seu texto considerando os comentários recebidos.",
        "Produzir a versão final cuidando da apresentação e da ortografia.",
        "Expor os textos finalizados em um mural de pesquisas da turma."
      ]
    },
    {
      "theme": "Escrevendo nosso próprio verbete de enciclopédia",
      "curriculumCode": "EF04LP22A",
      "description": "Planejar e produzir, com certa autonomia, verbetes de enciclopédia ou de dicionário (digitais ou impressos), considerando a situação comunicativa, o tema/assunto, a estrutura composicional e o estilo do gênero.",
      "materials": ["Modelo de verbete de enciclopédia", "Papel para produção"],
      "steps": [
        "Relembrar as partes de um verbete: palavra, definição e características.",
        "Cada aluno escolhe um tema simples e pesquisa informações básicas sobre ele.",
        "Planejar o verbete, decidindo o que é essencial explicar sobre o tema escolhido.",
        "Escrever o verbete seguindo a estrutura observada.",
        "Compartilhar os verbetes produzidos, comparando temas diferentes escolhidos pela turma."
      ]
    },
    {
      "theme": "Revisando os verbetes da nossa enciclopédia da turma",
      "curriculumCode": "EF04LP22B",
      "description": "Revisar e editar verbetes de enciclopédia ou de dicionário produzidos, digitais ou impressos, cuidando da apresentação final do texto.",
      "materials": ["Verbetes produzidos pela turma"],
      "steps": [
        "Relembrar o que não pode faltar em um verbete: definição clara e características do tema.",
        "Trocar os verbetes entre colegas para sugestões de melhoria.",
        "Cada aluno revisa seu verbete considerando os comentários recebidos.",
        "Produzir a versão final, cuidando da apresentação.",
        "Organizar todos os verbetes em ordem alfabética, montando a 'enciclopédia da turma'."
      ]
    },
    {
      "theme": "Relatando um experimento: como escrever um relato de pesquisa",
      "curriculumCode": "EF04LP23",
      "description": "Identificar e reproduzir, em relatos de experimentação científica, a formatação e a estrutura desse tipo de texto (etapas, ordem cronológica, encadeamento das ideias), considerando a situação comunicativa e o tema do texto.",
      "materials": ["Um pequeno experimento simples para realizar em sala", "Papel para registro"],
      "steps": [
        "Realizar com a turma um experimento simples (ex.: observar o que flutua ou afunda na água).",
        "Anotar coletivamente cada etapa realizada, na ordem em que aconteceu.",
        "Apresentar um modelo de relato de experimento, destacando a sequência de passos.",
        "Cada aluno escreve o relato do experimento realizado, seguindo a estrutura observada.",
        "Compartilhar os relatos, comparando como cada um organizou as etapas."
      ]
    },
    {
      "theme": "Criando nosso poema concreto (visual)",
      "curriculumCode": "EF04LP25A",
      "description": "Planejar e produzir poemas concretos (visuais), digitais ou impressos, atentando para a estrutura composicional do texto (distribuição/desenho do texto na página), rimas, ritmo e melodia, considerando a situação comunicativa, o tema/assunto, a estrutura e o estilo do gênero.",
      "materials": ["Papel", "Lápis de cor"],
      "steps": [
        "Relembrar o que é um poema concreto: o formato do texto ajuda a mostrar o tema.",
        "Escolher um tema simples (chuva, coração, árvore) para criar o poema.",
        "Planejar como as palavras vão se distribuir na página para formar o desenho do tema.",
        "Cada aluno cria seu poema concreto, cuidando das palavras, do ritmo e do desenho formado.",
        "Compartilhar os poemas criados, explicando a relação entre a forma e o sentido."
      ]
    },
    {
      "theme": "Revisando o desenho e o texto do poema concreto",
      "curriculumCode": "EF04LP25B",
      "description": "Revisar e editar poemas concretos (visuais) produzidos, digitais ou impressos, cuidando da apresentação final do texto.",
      "materials": ["Poemas concretos produzidos pela turma"],
      "steps": [
        "Relembrar o que faz um poema concreto funcionar bem (forma + palavras + sentido).",
        "Trocar os poemas entre colegas para sugestões de melhoria na forma ou nas palavras.",
        "Cada aluno revisa seu poema, ajustando o que for necessário.",
        "Produzir a versão final, capricando no desenho e na apresentação.",
        "Expor os poemas concretos finalizados em um mural da turma."
      ]
    },
    {
      "theme": "Lendo poemas concretos: quando a forma faz parte do sentido",
      "curriculumCode": "EF04LP26",
      "description": "Ler e compreender poemas concretos (visuais), digitais ou impressos, observando a estrutura composicional do texto (distribuição/desenho do texto na página), rimas, ritmo e melodia e seus efeitos de sentido.",
      "materials": ["Exemplos de poemas concretos impressos ou projetados"],
      "steps": [
        "Mostrar um poema concreto para a turma, no qual o formato do texto desenha o tema.",
        "Perguntar o que os alunos notam de diferente em relação a um poema comum.",
        "Ler o poema em voz alta, observando o ritmo e as rimas presentes.",
        "Em duplas, os alunos leem outro poema concreto e descrevem o que o formato representa.",
        "Fechar comparando os diferentes poemas concretos lidos pela turma."
      ]
    },
    {
      "theme": "Lendo um texto teatral: falas e rubricas de cena",
      "curriculumCode": "EF04LP27A",
      "description": "Ler e compreender diferentes textos dramáticos, identificando marcadores de falas das personagens e de cena.",
      "materials": ["Texto dramático curto (peça infantil)"],
      "steps": [
        "Apresentar um texto teatral curto, mostrando a diferença entre fala e rubrica de cena.",
        "Ler em voz alta, com alunos diferentes representando cada personagem.",
        "Perguntar como sabemos quem está falando e o que a rubrica indica sobre a cena.",
        "Em duplas, os alunos identificam as falas e as rubricas em outro trecho do texto.",
        "Fechar comparando o texto teatral com um conto já lido pela turma."
      ]
    },
    {
      "theme": "Encenando um trecho de teatro",
      "curriculumCode": "EF04LP27B",
      "description": "Representar cenas de textos dramáticos lidos, reproduzindo falas das personagens de acordo com as rubricas de interpretação e movimento indicadas pelo autor.",
      "materials": ["Texto dramático ensaiado", "Espaço livre na sala"],
      "steps": [
        "Dividir a turma em grupos e distribuir um pequeno trecho de texto dramático para cada um.",
        "Cada grupo lê o trecho, identificando falas e rubricas de movimento.",
        "Ensaiar a cena algumas vezes, seguindo as indicações do texto.",
        "Cada grupo apresenta sua cena para a turma.",
        "Conversar após as apresentações sobre como as rubricas ajudaram na encenação."
      ]
    }
  ],
  matematica: [
    {
      "theme": "Lendo, escrevendo e ordenando números com três ordens",
      "curriculumCode": "EF04MA01A",
      "description": "Ler, escrever e ordenar números naturais, com pelo menos três ordens, observando as regularidades do sistema de numeração decimal.",
      "materials": ["Material dourado", "Cartões com números de três algarismos"],
      "steps": [
        "Distribuir cartões com números de três algarismos para os alunos, em duplas.",
        "Pedir que montem cada número usando material dourado, observando centena, dezena e unidade.",
        "Organizar os números da turma em ordem crescente na lousa.",
        "Discutir coletivamente as regularidades observadas no sistema de numeração decimal.",
        "Registrar no caderno três números escritos por extenso a partir dos algarismos."
      ]
    },
    {
      "theme": "Números com cinco ordens ou mais no dia a dia",
      "curriculumCode": "EF04MA01B",
      "description": "Reconhecer números naturais de 5 ordens ou mais, e utilizar as regras do sistema de numeração decimal, para leitura, escrita, comparação e ordenação no contexto diário.",
      "materials": ["Notícias ou embalagens com números grandes (população, preços, distâncias)"],
      "steps": [
        "Apresentar números com cinco ou mais ordens encontrados em notícias ou embalagens do dia a dia.",
        "Ler os números em voz alta com a turma, identificando cada ordem (unidade de milhar, dezena de milhar...).",
        "Comparar dois números grandes, decidindo qual é maior e por quê.",
        "Em duplas, os alunos organizam um conjunto de números grandes em ordem crescente.",
        "Registrar no caderno a leitura por extenso de dois números trabalhados."
      ]
    },
    {
      "theme": "Compondo números com adições e multiplicações por 10",
      "curriculumCode": "EF04MA02",
      "description": "Mostrar, por decomposição e composição, que todo número natural pode ser escrito por meio de adições e multiplicações por múltiplos de dez, para compreender o sistema de numeração decimal.",
      "materials": ["Material dourado", "Cartões de valor posicional"],
      "steps": [
        "Apresentar um número de três ou quatro algarismos para a turma decompor.",
        "Pedir que escrevam a decomposição como soma de múltiplos de dez (ex.: 4213 = 4000 + 200 + 10 + 3).",
        "Mostrar como essa soma também pode ser escrita usando multiplicações por 10, 100 e 1000.",
        "Propor que, em duplas, os alunos decomponham novos números da mesma forma.",
        "Fechar com um desafio: dada a decomposição, descobrir o número original."
      ]
    },
    {
      "theme": "Resolvendo problemas de adição e subtração com diferentes estratégias",
      "curriculumCode": "EF04MA03",
      "description": "Resolver e elaborar situações-problema com números naturais envolvendo adição e subtração, utilizando estratégias diversas, como cálculo mental e algoritmos, além de estimativas e arredondamento do resultado.",
      "materials": ["Problemas impressos ou escritos na lousa"],
      "steps": [
        "Ler um problema com a turma e identificar se envolve adição, subtração ou as duas.",
        "Pedir que estimem o resultado antes de calcular, arredondando os números envolvidos.",
        "Resolver o problema usando cálculo mental ou algoritmo, comparando com a estimativa feita.",
        "Corrigir coletivamente, mostrando diferentes formas de chegar ao resultado.",
        "Propor que cada dupla elabore um novo problema parecido para outra dupla resolver."
      ]
    },
    {
      "theme": "Calculando adições, subtrações, multiplicações e divisões",
      "curriculumCode": "EF04MA04A",
      "description": "Calcular o resultado de adições e subtrações, bem como de multiplicações e divisões de números naturais, para ampliar e desenvolver as estratégias de cálculo.",
      "materials": ["Fichas com contas de adição, subtração, multiplicação e divisão"],
      "steps": [
        "Apresentar quatro contas na lousa, uma de cada operação.",
        "Resolver a primeira coletivamente, explicando o passo a passo do algoritmo.",
        "Pedir que os alunos resolvam as demais em duplas.",
        "Corrigir coletivamente, discutindo diferentes estratégias usadas.",
        "Fechar com uma rodada rápida de contas orais para praticar agilidade."
      ]
    },
    {
      "theme": "Relacionando adição com subtração e multiplicação com divisão",
      "curriculumCode": "EF04MA04B",
      "description": "Utilizar as relações entre adição e subtração, bem como entre multiplicação e divisão, para ampliar e desenvolver as estratégias de cálculo.",
      "materials": ["Fichas com famílias de operações (ex.: 6x4=24, 24÷4=6)"],
      "steps": [
        "Apresentar uma multiplicação e perguntar qual divisão está relacionada a ela.",
        "Repetir com uma adição e a subtração relacionada.",
        "Propor que os alunos completem 'famílias de operações' em duplas.",
        "Discutir como usar essa relação para conferir se uma conta está certa.",
        "Fechar com um desafio: dado o resultado de uma divisão, descobrir a multiplicação relacionada."
      ]
    },
    {
      "theme": "Usando as propriedades das operações para calcular mais rápido",
      "curriculumCode": "EF04MA05",
      "description": "Utilizar as propriedades das operações para desenvolver estratégias de cálculo.",
      "materials": ["Fichas com contas que podem ser reorganizadas (ex.: 25+18+5)"],
      "steps": [
        "Apresentar uma soma com vários números e perguntar se há uma ordem mais fácil de somar.",
        "Mostrar como reorganizar os números (propriedade comutativa) facilita o cálculo mental.",
        "Repetir com uma multiplicação, explorando decompor um dos fatores.",
        "Propor que os alunos resolvam novas contas escolhendo a estratégia mais rápida.",
        "Compartilhar as estratégias usadas por diferentes alunos para a mesma conta."
      ]
    },
    {
      "theme": "Multiplicação como parcelas iguais e organização retangular",
      "curriculumCode": "EF04MA06A",
      "description": "Resolver e elaborar situações-problema envolvendo diferentes significados da multiplicação e da divisão: adição de parcelas iguais e organização retangular, utilizando estratégias diversas.",
      "materials": ["Objetos para organizar em fileiras (tampinhas, botões)", "Papel quadriculado"],
      "steps": [
        "Propor uma situação de parcelas iguais: 'temos 5 sacolas com 4 maçãs cada'.",
        "Resolver com material manipulável e registrar como multiplicação.",
        "Propor uma segunda situação de organização retangular: 'uma horta com 4 fileiras de 6 pés de alface'.",
        "Representar a organização retangular no papel quadriculado.",
        "Fechar comparando os dois tipos de problema e como ambos usam multiplicação."
      ]
    },
    {
      "theme": "Multiplicação com combinação e proporcionalidade",
      "curriculumCode": "EF04MA06B",
      "description": "Resolver e elaborar situações-problema envolvendo diferentes significados da multiplicação e da divisão: combinatória e proporcionalidade, utilizando estratégias diversas.",
      "materials": ["Cartões com opções de roupas ou lanches para combinar"],
      "steps": [
        "Propor uma situação de combinação: 'com 3 camisetas e 2 shorts, quantos conjuntos dá para formar?'.",
        "Resolver junto com a turma, listando todas as combinações possíveis.",
        "Propor uma situação de proporcionalidade: 'se 1 pacote tem 5 balas, quantas balas têm 4 pacotes?'.",
        "Deixar os alunos resolverem em duplas, comparando as duas situações.",
        "Fechar discutindo o que é parecido e o que é diferente entre os dois tipos de problema."
      ]
    },
    {
      "theme": "Dividindo com repartição equitativa e ideia de medida",
      "curriculumCode": "EF04MA07",
      "description": "Resolver e elaborar situações-problema de divisão cujo divisor tenha no máximo dois algarismos, envolvendo os significados de repartição equitativa e de medida, utilizando estratégias diversas.",
      "materials": ["Objetos para repartir (balas, palitos)", "Folha de registro"],
      "steps": [
        "Propor uma divisão de repartição equitativa: 'repartir 48 balas igualmente entre 6 amigos'.",
        "Resolver com material manipulável, registrando o resultado como divisão.",
        "Propor uma divisão de medida: 'quantos grupos de 6 balas dá para formar com 48 balas?'.",
        "Comparar os dois tipos de divisão, discutindo a diferença entre eles.",
        "Fechar com um problema novo para os alunos resolverem sozinhos, escolhendo a estratégia."
      ]
    },
    {
      "theme": "Contando combinações possíveis",
      "curriculumCode": "EF04MA08",
      "description": "Resolver, com o suporte de imagem e/ou material manipulável, problemas simples de contagem, como a determinação do número de agrupamentos possíveis ao se combinar cada elemento de uma coleção com todos os elementos de outra.",
      "materials": ["Cartões de duas coleções diferentes (ex.: cores e formas)"],
      "steps": [
        "Apresentar duas coleções pequenas, como 3 cores e 2 formas de bandeirinha.",
        "Perguntar quantas bandeirinhas diferentes é possível formar combinando cor e forma.",
        "Deixar os alunos montarem as combinações com material manipulável.",
        "Registrar todas as combinações encontradas em uma lista ou desenho.",
        "Propor um novo desafio de contagem com outras duas coleções para resolver em duplas."
      ]
    },
    {
      "theme": "Frações unitárias no dia a dia: 1/2, 1/3, 1/4, 1/5, 1/10, 1/100",
      "curriculumCode": "EF04MA09A",
      "description": "Reconhecer as frações unitárias mais usuais (1/2, 1/3, 1/4, 1/5, 1/10 e 1/100) como unidades de medida menores do que uma unidade, utilizando a reta numérica como recurso.",
      "materials": ["Reta numérica desenhada na lousa", "Tiras de papel para dobrar"],
      "steps": [
        "Dobrar uma tira de papel ao meio e perguntar que fração cada parte representa.",
        "Repetir a dobradura em terços, quartos e quintos, nomeando cada fração unitária.",
        "Marcar as frações trabalhadas em uma reta numérica desenhada na lousa.",
        "Em duplas, os alunos localizam novas frações unitárias na reta numérica.",
        "Fechar relacionando as frações a situações do cotidiano (metade de uma pizza, um décimo de um real)."
      ]
    },
    {
      "theme": "Lendo números racionais em fração e em decimal",
      "curriculumCode": "EF04MA09B",
      "description": "Ler números racionais de uso frequente, na representação fracionária e decimal.",
      "materials": ["Cartões com números racionais em fração e em decimal"],
      "steps": [
        "Apresentar um número em fração (1/2) e o mesmo número em decimal (0,5), lendo os dois em voz alta.",
        "Repetir com outros números racionais de uso frequente (1/4 e 0,25; 1/10 e 0,1).",
        "Propor um jogo de associar cartões de fração com seus decimais correspondentes.",
        "Em duplas, os alunos praticam a leitura de novos números racionais.",
        "Registrar no caderno três exemplos lidos, em fração e em decimal."
      ]
    },
    {
      "theme": "Décimos e centésimos no sistema monetário brasileiro",
      "curriculumCode": "EF04MA10A",
      "description": "Reconhecer que as regras do sistema de numeração decimal podem ser estendidas para a representação decimal de um número racional, relacionando décimos e centésimos com a representação do sistema monetário brasileiro.",
      "materials": ["Réplicas de moedas e cédulas brasileiras"],
      "steps": [
        "Apresentar moedas de 1 real, 10 e 1 centavo, relacionando-as a inteiros, décimos e centésimos.",
        "Escrever um valor como R$ 3,45 e explicar a relação entre a vírgula e as casas decimais.",
        "Propor situações de compra simuladas em que os alunos formam valores com as moedas.",
        "Registrar os valores formados tanto em decimal quanto em fração (ex.: 0,45 = 45/100).",
        "Fechar com uma rodada de desafios de formar um valor exato usando moedas diferentes."
      ]
    },
    {
      "theme": "Comparando frações e decimais no dinheiro",
      "curriculumCode": "EF04MA10B",
      "description": "Reconhecer, comparar que as regras do sistema de numeração decimal podem ser estendidas para a representação decimal de um número racional e relacionar décimos e centésimos com a representação do sistema monetário brasileiro.",
      "materials": ["Réplicas de moedas e cédulas", "Cartaz com preços fictícios"],
      "steps": [
        "Apresentar dois valores em dinheiro, como R$ 2,50 e R$ 2,05, perguntando qual é maior.",
        "Comparar os mesmos valores usando a representação fracionária (2 e 50/100 x 2 e 5/100).",
        "Organizar um mercadinho simulado com preços em reais para os alunos comparar e comprar.",
        "Discutir em grupo como a posição da vírgula muda o valor do número.",
        "Registrar no caderno duas comparações de valores feitas com os sinais > e <."
      ]
    },
    {
      "theme": "Sequências numéricas com múltiplos de um número",
      "curriculumCode": "EF04MA11",
      "description": "Identificar regularidades em sequências numéricas compostas por múltiplos de um número natural, completando sequências numéricas pela observação de uma dada regra de formação.",
      "materials": ["Cartões numerados", "Lousa"],
      "steps": [
        "Escrever na lousa uma sequência de múltiplos de um número (3, 6, 9, 12...) com espaços vazios.",
        "Perguntar aos alunos qual é a regra que forma essa sequência.",
        "Pedir que completem os espaços vazios seguindo a regra encontrada.",
        "Propor que duplas criem suas próprias sequências de múltiplos para outra dupla completar.",
        "Socializar algumas sequências criadas, verificando a regularidade."
      ]
    },
    {
      "theme": "Investigando os restos de uma divisão",
      "curriculumCode": "EF04MA12",
      "description": "Reconhecer, por meio de investigações, que há grupos de números naturais para os quais as divisões por um mesmo número resultam em restos iguais, identificando regularidades.",
      "materials": ["Fichas numeradas", "Lousa"],
      "steps": [
        "Escolher um número divisor (ex.: 3) e pedir que os alunos dividam vários números naturais por ele.",
        "Registrar em uma tabela o resto de cada divisão realizada.",
        "Observar coletivamente quais números formam grupos com o mesmo resto.",
        "Propor que os alunos, em duplas, testem outro divisor e busquem a mesma regularidade.",
        "Fechar registrando a conclusão encontrada pela turma sobre os restos."
      ]
    },
    {
      "theme": "As operações inversas: multiplicação e divisão, adição e subtração",
      "curriculumCode": "EF04MA13",
      "description": "Reconhecer, por meio de investigações, utilizando a calculadora quando necessário, as relações inversas entre as operações de adição e de subtração e de multiplicação e de divisão, para aplicá-las na resolução de problemas.",
      "materials": ["Calculadora simples (uma por dupla, se possível)"],
      "steps": [
        "Apresentar uma conta de multiplicação e pedir que os alunos conferam o resultado usando a divisão inversa.",
        "Repetir com uma adição conferida pela subtração inversa.",
        "Usar a calculadora, quando disponível, para verificar os resultados encontrados.",
        "Propor problemas em que os alunos usam a operação inversa para conferir a resposta.",
        "Fechar discutindo por que conferir com a operação inversa ajuda a evitar erros."
      ]
    },
    {
      "theme": "A igualdade continua igual? Testando com exemplos",
      "curriculumCode": "EF04MA14",
      "description": "Reconhecer e mostrar, por meio de exemplos, que a relação de igualdade existente entre dois termos permanece quando se adiciona ou se subtrai um mesmo número a cada um desses termos.",
      "materials": ["Balança de dois pratos (real ou desenhada)", "Fichas numeradas"],
      "steps": [
        "Apresentar uma igualdade simples, como 6 = 6, usando uma balança equilibrada como exemplo.",
        "Adicionar o mesmo número aos dois lados e perguntar se a balança continua equilibrada.",
        "Repetir subtraindo o mesmo número dos dois lados.",
        "Propor que os alunos testem essa ideia com novas igualdades em duplas.",
        "Fechar registrando a conclusão: somar ou subtrair o mesmo número dos dois lados mantém a igualdade."
      ]
    },
    {
      "theme": "Descobrindo o número desconhecido na igualdade",
      "curriculumCode": "EF04MA15",
      "description": "Determinar o número desconhecido que torna verdadeira uma igualdade que envolve as operações fundamentais com números naturais.",
      "materials": ["Fichas com igualdades incompletas (ex.: 15 + ? = 22)"],
      "steps": [
        "Apresentar uma igualdade com um número desconhecido representado por um símbolo.",
        "Perguntar à turma como podem descobrir o valor que falta.",
        "Resolver coletivamente, usando a operação inversa como estratégia.",
        "Propor uma lista de igualdades incompletas para os alunos resolverem em duplas.",
        "Corrigir coletivamente, comparando as estratégias usadas para encontrar cada valor."
      ]
    },
    {
      "theme": "Descrevendo deslocamentos em malhas quadriculadas",
      "curriculumCode": "EF04MA16A",
      "description": "Descrever deslocamentos e localização de pessoas e de objetos no espaço, por meio de malhas quadriculadas e representações como desenhos, mapas, planta baixa e croquis, empregando termos como direita e esquerda, mudanças de direção e sentido.",
      "materials": ["Papel quadriculado", "Objeto pequeno para representar um personagem"],
      "steps": [
        "Desenhar uma malha quadriculada simples na lousa, com um ponto de partida marcado.",
        "Pedir que um aluno descreva um trajeto até outro ponto, usando direita, esquerda e mudanças de direção.",
        "Registrar o trajeto descrito na malha, seguindo exatamente as instruções dadas.",
        "Em duplas, os alunos criam um trajeto em papel quadriculado e descrevem para o colega desenhar.",
        "Comparar o desenho final com o trajeto original, verificando se bateu."
      ]
    },
    {
      "theme": "Retas paralelas e perpendiculares em mapas e croquis",
      "curriculumCode": "EF04MA16B",
      "description": "Descrever, interpretar e representar a posição ou a movimentação de pessoas e de objetos no espaço, por meio de malhas quadriculadas e representações como desenhos, mapas, planta baixa e croquis, incluindo paralelismo e perpendicularismo.",
      "materials": ["Mapa ou croqui simples do bairro ou da escola", "Régua"],
      "steps": [
        "Apresentar um mapa ou croqui simples, identificando ruas que se cruzam e ruas que seguem lado a lado.",
        "Explicar os conceitos de retas paralelas (não se cruzam) e perpendiculares (se cruzam formando ângulo reto).",
        "Pedir que os alunos localizem exemplos de paralelismo e perpendicularismo no mapa.",
        "Em duplas, os alunos desenham um pequeno croqui usando ruas paralelas e perpendiculares.",
        "Compartilhar os croquis criados, identificando as retas paralelas e perpendiculares desenhadas."
      ]
    },
    {
      "theme": "Prismas e pirâmides: das planificações às figuras espaciais",
      "curriculumCode": "EF04MA17A",
      "description": "Associar prismas e pirâmides a suas planificações e analisar, nomear e comparar seus atributos, estabelecendo relações entre as representações planas e espaciais.",
      "materials": ["Sólidos geométricos (prismas e pirâmides)", "Planificações de papel"],
      "steps": [
        "Apresentar um prisma e uma pirâmide de madeira ou plástico, observando faces, vértices e arestas.",
        "Mostrar a planificação de cada sólido e pedir que os alunos identifiquem qual planificação forma qual sólido.",
        "Deixar os alunos montarem uma planificação de papel, dobrando até formar o sólido.",
        "Comparar os atributos dos prismas e das pirâmides montados.",
        "Registrar em uma tabela o nome de cada sólido e o número de faces observadas."
      ]
    },
    {
      "theme": "Contando faces, vértices e arestas de prismas e pirâmides",
      "curriculumCode": "EF04MA17B",
      "description": "Identificar as regularidades nas contagens de faces, vértices e arestas no caso dos prismas e das pirâmides.",
      "materials": ["Sólidos geométricos variados (prismas e pirâmides)"],
      "steps": [
        "Distribuir diferentes prismas e pirâmides para os grupos contarem faces, vértices e arestas.",
        "Registrar os resultados em uma tabela coletiva na lousa.",
        "Perguntar se os alunos percebem alguma regularidade entre o número de lados da base e essas contagens.",
        "Testar a regularidade encontrada com um novo sólido não contado ainda.",
        "Fechar registrando a conclusão da turma sobre a regularidade observada."
      ]
    },
    {
      "theme": "Ângulos retos e não retos com dobradura e esquadro",
      "curriculumCode": "EF04MA18",
      "description": "Reconhecer ângulos retos e não retos em figuras poligonais com o uso de dobraduras, esquadros e/ou softwares.",
      "materials": ["Folha de papel para dobradura", "Esquadro"],
      "steps": [
        "Dobrar uma folha de papel ao meio duas vezes para formar um ângulo reto de referência.",
        "Usar essa dobra para verificar quais cantos de figuras da sala são retos.",
        "Apresentar um esquadro e mostrar como ele também serve para verificar ângulos retos.",
        "Em duplas, os alunos verificam ângulos em diferentes figuras poligonais desenhadas.",
        "Registrar no caderno quais figuras têm ângulos retos e quais não têm."
      ]
    },
    {
      "theme": "Simetria de reflexão: construindo figuras espelhadas",
      "curriculumCode": "EF04MA19",
      "description": "Reconhecer simetria de reflexão em figuras e em pares de figuras geométricas planas e utilizá-la na construção de figuras congruentes, com o uso de malhas quadriculadas e/ou de softwares de geometria.",
      "materials": ["Papel quadriculado", "Espelho pequeno (opcional)"],
      "steps": [
        "Mostrar uma figura simples e seu reflexo espelhado, perguntando o que os alunos observam.",
        "Usar um espelho, se disponível, para verificar a simetria de objetos e desenhos.",
        "Desenhar metade de uma figura em papel quadriculado e pedir que os alunos completem o outro lado espelhado.",
        "Comparar os desenhos completados, verificando se a simetria foi respeitada.",
        "Fechar procurando exemplos de simetria em objetos da sala de aula."
      ]
    },
    {
      "theme": "Medindo comprimentos, massas e capacidades com instrumentos",
      "curriculumCode": "EF04MA20",
      "description": "Medir e estimar comprimentos (incluindo perímetros), massas e capacidades, utilizando unidades de medida padronizadas mais usuais, e recorrendo a instrumentos de medida.",
      "materials": ["Fita métrica ou régua", "Balança e recipiente medidor, se disponíveis"],
      "steps": [
        "Pedir que os alunos estimem o comprimento do perímetro da sala antes de medir.",
        "Medir o perímetro real com fita métrica, comparando com a estimativa.",
        "Repetir a atividade estimando e depois medindo a massa e a capacidade de objetos disponíveis.",
        "Registrar em uma tabela as estimativas e as medidas reais encontradas.",
        "Discutir coletivamente o quanto as estimativas se aproximaram das medidas reais."
      ]
    },
    {
      "theme": "Calculando a área contando quadradinhos",
      "curriculumCode": "EF04MA21",
      "description": "Medir, comparar e estimar área de figuras planas desenhadas em malha quadriculada, pela contagem dos quadradinhos ou de metades de quadradinho, reconhecendo que figuras diferentes podem ter a mesma área.",
      "materials": ["Papel quadriculado", "Lápis de cor"],
      "steps": [
        "Desenhar duas figuras diferentes em malha quadriculada com a mesma área.",
        "Pedir que os alunos contem os quadradinhos de cada figura para descobrir a área.",
        "Discutir por que figuras com formatos diferentes podem ter a mesma área.",
        "Propor que cada aluno desenhe sua própria figura em malha quadriculada e calcule a área.",
        "Trocar os desenhos entre colegas para conferir o cálculo da área feito pelo outro."
      ]
    },
    {
      "theme": "Lendo horas, minutos e segundos no relógio",
      "curriculumCode": "EF04MA22",
      "description": "Ler, reconhecer e registrar medidas e intervalos de tempo em horas, minutos e segundos em relógios digitais e analógicos, resolvendo problemas sobre duração de eventos.",
      "materials": ["Relógio analógico e relógio digital (ou aplicativo)"],
      "steps": [
        "Mostrar um relógio analógico e um digital, comparando como cada um marca a mesma hora.",
        "Praticar a leitura de horários em voz alta nos dois tipos de relógio.",
        "Propor um problema envolvendo o cálculo de duração (ex.: início às 8h10, término às 9h35).",
        "Resolver o problema coletivamente, calculando o intervalo de tempo decorrido.",
        "Fechar com novos problemas de duração para os alunos resolverem em duplas."
      ]
    },
    {
      "theme": "Grau Celsius: lendo e comparando temperaturas",
      "curriculumCode": "EF04MA23A",
      "description": "Ler informações e reconhecer temperatura como grandeza e o grau Celsius como unidade de medida a ela associada e utilizá-lo em comparações de temperaturas de um dia, uma semana ou um mês.",
      "materials": ["Tabela de previsão do tempo com temperaturas", "Termômetro, se disponível"],
      "steps": [
        "Apresentar uma tabela de previsão do tempo com as temperaturas de vários dias.",
        "Ler as temperaturas em voz alta, identificando o dia mais quente e o mais frio da semana.",
        "Mostrar um termômetro, se disponível, explicando como ele mede a temperatura em graus Celsius.",
        "Em duplas, os alunos comparam as temperaturas de dois dias diferentes da tabela.",
        "Registrar no caderno a maior e a menor temperatura observadas na semana."
      ]
    },
    {
      "theme": "Comparando temperaturas de diferentes lugares do Brasil",
      "curriculumCode": "EF04MA23B",
      "description": "Ler informações e reconhecer temperatura como grandeza e o grau Celsius como unidade de medida a ela associada e utilizá-lo em comparações de temperaturas em diferentes regiões do Brasil ou no exterior.",
      "materials": ["Tabela com temperaturas de diferentes cidades do Brasil", "Mapa do Brasil (opcional)"],
      "steps": [
        "Apresentar uma tabela com as temperaturas de diferentes cidades brasileiras em um mesmo dia.",
        "Localizar as cidades em um mapa do Brasil, se disponível.",
        "Comparar as temperaturas, discutindo por que algumas regiões são mais quentes que outras.",
        "Relacionar a atividade ao tema do aquecimento global, de forma simples.",
        "Registrar no caderno a comparação entre a cidade mais quente e a mais fria da tabela."
      ]
    },
    {
      "theme": "Construindo gráficos com as temperaturas do dia a dia",
      "curriculumCode": "EF04MA24",
      "description": "Registrar as temperaturas máxima e mínima diárias, em locais do cotidiano e de outros contextos, e elaborar gráficos de colunas com as variações diárias da temperatura.",
      "materials": ["Folha de registro diário", "Papel quadriculado para o gráfico"],
      "steps": [
        "Combinar com a turma registrar a temperatura máxima e mínima do dia por uma semana.",
        "Anotar diariamente os dados em uma tabela coletiva.",
        "Ao final da semana, organizar os dados em um gráfico de colunas no papel quadriculado.",
        "Analisar o gráfico, identificando o dia mais quente e o mais frio da semana.",
        "Apresentar o gráfico finalizado para a turma, comentando as variações observadas."
      ]
    },
    {
      "theme": "Comprando e vendendo: troco e desconto",
      "curriculumCode": "EF04MA25",
      "description": "Resolver e elaborar situações-problema que envolvam compra e venda e formas de pagamento, utilizando termos como troco e desconto, enfatizando o consumo ético, consciente e responsável.",
      "materials": ["Réplicas de moedas e cédulas", "Cartaz com preços de produtos fictícios"],
      "steps": [
        "Organizar um mercadinho simulado em sala, com produtos e preços fictícios.",
        "Propor situações de compra em que os alunos calculam o troco a receber.",
        "Repetir com uma situação de desconto, calculando o novo preço do produto.",
        "Deixar os alunos, em duplas, criarem e resolverem novas situações de compra e venda.",
        "Fechar conversando sobre consumo consciente: comparar preços e pensar antes de comprar."
      ]
    },
    {
      "theme": "Qual evento tem mais chance de acontecer?",
      "curriculumCode": "EF04MA26",
      "description": "Identificar, entre eventos aleatórios cotidianos, aqueles que têm maior chance de ocorrência, reconhecendo características de resultados mais prováveis, sem utilizar frações, explorando a ideia de probabilidade.",
      "materials": ["Dado", "Cartões com afirmações sobre eventos do cotidiano"],
      "steps": [
        "Apresentar situações do cotidiano e perguntar qual evento tem mais chance de acontecer.",
        "Realizar um jogo com dado, perguntando a chance de sair um número par ou ímpar.",
        "Registrar os resultados de várias jogadas em uma tabela coletiva.",
        "Discutir coletivamente por que alguns resultados apareceram mais vezes que outros.",
        "Fechar com exemplos de eventos muito prováveis e pouco prováveis do dia a dia da turma."
      ]
    },
    {
      "theme": "Analisando dados em tabelas e gráficos de colunas",
      "curriculumCode": "EF04MA27",
      "description": "Ler, interpretar e analisar dados apresentados em tabelas simples ou de dupla entrada e em gráficos de colunas ou pictóricos, com base em informações de diferentes áreas do conhecimento, produzindo um texto de síntese.",
      "materials": ["Tabela ou gráfico pronto com dados de interesse da turma"],
      "steps": [
        "Apresentar uma tabela ou gráfico com dados coletados anteriormente pela turma.",
        "Perguntar qual categoria teve mais respostas e qual teve menos.",
        "Propor perguntas de interpretação sobre o total e as diferenças entre categorias.",
        "Pedir que cada aluno escreva um pequeno texto resumindo o que o gráfico mostra.",
        "Compartilhar alguns textos produzidos, comparando as conclusões da turma."
      ]
    },
    {
      "theme": "Fazendo uma pesquisa com variáveis categóricas e numéricas",
      "curriculumCode": "EF04MA28",
      "description": "Realizar pesquisa envolvendo variáveis categóricas e numéricas e organizar dados coletados por meio de tabelas e gráficos de colunas simples ou agrupadas.",
      "materials": ["Folha para anotação da pesquisa", "Papel quadriculado para o gráfico"],
      "steps": [
        "Escolher com a turma um tema de pesquisa com uma variável categórica (esporte preferido) e uma numérica (idade, número de irmãos).",
        "Circular pela sala coletando as respostas de cada colega e anotando em uma lista.",
        "Organizar os dados coletados em tabelas separadas para cada variável.",
        "Transformar as tabelas em gráficos de colunas no papel quadriculado.",
        "Apresentar os gráficos finais para a turma, comentando os resultados encontrados."
      ]
    }
  ],
  ciencias: [
    {
      "theme": "Montando cadeias alimentares e o papel do Sol",
      "curriculumCode": "EF04CI04",
      "description": "Analisar e construir cadeias alimentares simples, reconhecendo a posição ocupada pelos seres vivos nessas cadeias e o papel do Sol como fonte primária de energia na produção de alimentos.",
      "materials": ["Cartões com imagens de seres vivos (planta, inseto, ave, etc.)", "Barbante ou fio para ligar os cartões"],
      "steps": [
        "Apresentar cartões com diferentes seres vivos de um mesmo ambiente.",
        "Perguntar quem come quem entre os seres apresentados.",
        "Montar coletivamente uma cadeia alimentar usando barbante para ligar os cartões na ordem certa.",
        "Discutir por que o Sol aparece como ponto de partida da cadeia, alimentando as plantas.",
        "Em duplas, os alunos montam uma nova cadeia alimentar com outros seres vivos.",
        "Registrar no caderno a cadeia alimentar criada, indicando a posição de cada ser vivo."
      ]
    },
    {
      "theme": "O ciclo da matéria e da energia no ecossistema",
      "curriculumCode": "EF04CI05",
      "description": "Descrever e associar o ciclo da matéria e o fluxo de energia que se estabelecem entre os componentes vivos e não vivos de um ecossistema.",
      "materials": ["Imagens de um ecossistema (floresta, lago) com seres vivos e elementos não vivos"],
      "steps": [
        "Apresentar a imagem de um ecossistema, identificando seres vivos e elementos não vivos (água, solo, ar).",
        "Discutir como a energia do Sol passa das plantas para os animais que se alimentam delas.",
        "Explicar como a matéria dos seres vivos retorna ao ambiente quando eles morrem e se decompõem.",
        "Em grupos, os alunos desenham um esquema simples mostrando esse ciclo.",
        "Compartilhar os esquemas produzidos, comparando as diferentes representações."
      ]
    },
    {
      "theme": "Fungos e bactérias: os decompositores da natureza",
      "curriculumCode": "EF04CI06",
      "description": "Reconhecer a participação de fungos e bactérias no processo de decomposição, bem como a importância ambiental desse processo.",
      "materials": ["Imagens de alimentos ou folhas em decomposição", "Lupa, se disponível"],
      "steps": [
        "Mostrar imagens de frutas ou folhas em diferentes estágios de decomposição.",
        "Perguntar o que os alunos acham que está causando essas mudanças.",
        "Explicar de forma simples o papel dos fungos e das bactérias nesse processo.",
        "Discutir por que a decomposição é importante para devolver nutrientes ao solo.",
        "Registrar no caderno o que aconteceria se nada se decompusesse na natureza."
      ]
    },
    {
      "theme": "Microrganismos que ajudam: alimentos, remédios e combustíveis",
      "curriculumCode": "EF04CI07",
      "description": "Explicar a participação de microrganismos na produção de alimentos, combustíveis, medicamentos, entre outros.",
      "materials": ["Embalagens de iogurte, pão ou outro alimento fermentado"],
      "steps": [
        "Mostrar embalagens de alimentos que usam microrganismos em sua produção (iogurte, pão, queijo).",
        "Explicar de forma simples como fungos e bactérias participam da fabricação desses produtos.",
        "Conversar sobre outros usos de microrganismos, como na produção de remédios e combustíveis.",
        "Em duplas, os alunos pesquisam ou listam outros produtos que usam microrganismos.",
        "Fechar com uma roda de conversa sobre a importância desses seres tão pequenos."
      ]
    },
    {
      "theme": "Como se prevenir de doenças causadas por microrganismos",
      "curriculumCode": "EF04CI08",
      "description": "Propor, a partir do conhecimento das formas de transmissão de alguns microrganismos (vírus, bactérias e protozoários), atitudes e medidas adequadas para prevenção de doenças a eles associadas.",
      "materials": ["Cartaz com formas de transmissão de doenças comuns (gripe, verminose)"],
      "steps": [
        "Apresentar exemplos de doenças causadas por vírus, bactérias e protozoários.",
        "Discutir como cada uma se transmite (ar, água contaminada, contato).",
        "Levantar coletivamente atitudes de prevenção para cada forma de transmissão.",
        "Em grupos, os alunos criam um cartaz de prevenção para uma doença escolhida.",
        "Expor os cartazes produzidos no mural da sala ou da escola."
      ]
    },
    {
      "theme": "Observando as sombras ao longo do dia e dos meses",
      "curriculumCode": "EF04CI09",
      "description": "Analisar e acompanhar as projeções de sombras de prédios, torres, árvores, tendo como referência os pontos cardeais e descrever as mudanças de projeções nas sombras ao longo do dia e meses.",
      "materials": ["Um objeto fixo no pátio (poste, cone)", "Giz para contornar a sombra", "Folha de registro"],
      "steps": [
        "Escolher um objeto fixo no pátio e contornar sua sombra em diferentes horários do mesmo dia.",
        "Registrar em desenho como a sombra mudou de tamanho e posição ao longo do dia.",
        "Relacionar as mudanças observadas aos pontos cardeais (nascente e poente do Sol).",
        "Combinar com a turma repetir a observação do mesmo objeto em outro mês.",
        "Comparar os registros dos dois momentos, discutindo o que mudou."
      ]
    },
    {
      "theme": "Gnômon e bússola: dois jeitos de descobrir os pontos cardeais",
      "curriculumCode": "EF04CI10",
      "description": "Comparar as indicações dos pontos cardeais resultantes da observação das sombras de uma vara (gnômon) com aquelas obtidas por meio de uma bússola.",
      "materials": ["Uma vara ou palito fixado no chão (gnômon)", "Bússola", "Giz"],
      "steps": [
        "Fixar uma vara no chão do pátio, marcando a ponta de sua sombra com giz em um horário da manhã.",
        "Repetir a marcação em outro horário, ligando os pontos para indicar a direção leste-oeste.",
        "Usar uma bússola para verificar os pontos cardeais no mesmo local.",
        "Comparar os resultados obtidos pelos dois métodos.",
        "Registrar no caderno se as duas formas indicaram a mesma direção."
      ]
    },
    {
      "theme": "Sol, Terra e Lua: os movimentos que marcam o tempo",
      "curriculumCode": "EF04CI11A",
      "description": "Explicar a relação entre os movimentos observáveis do Sol, da Terra e da Lua e associá-los a períodos regulares de marcação do tempo na vida humana.",
      "materials": ["Bolas de tamanhos diferentes para representar Sol, Terra e Lua", "Lanterna"],
      "steps": [
        "Usar bolas de tamanhos diferentes para representar o Sol, a Terra e a Lua.",
        "Simular com uma lanterna os movimentos de rotação e translação da Terra e o movimento da Lua.",
        "Relacionar o movimento de rotação da Terra ao dia e à noite.",
        "Relacionar o movimento da Lua ao redor da Terra à contagem dos meses.",
        "Fechar registrando no caderno como esses movimentos ajudam a marcar o tempo (dia, mês, ano)."
      ]
    },
    {
      "theme": "Calendários de diferentes culturas ao redor do mundo",
      "curriculumCode": "EF04CI11B",
      "description": "Reconhecer a referência do movimento do Sol, da Terra e da Lua na construção de diferentes calendários em diversas culturas.",
      "materials": ["Imagens ou exemplos de diferentes calendários (lunar, solar)"],
      "steps": [
        "Apresentar o calendário usado no dia a dia da turma, relacionando-o ao movimento da Terra ao redor do Sol.",
        "Mostrar exemplos de outros calendários, como o lunar, usados por diferentes culturas.",
        "Discutir por que diferentes povos podem contar o tempo de formas diferentes.",
        "Em duplas, os alunos pesquisam ou comentam sobre um calendário de outra cultura.",
        "Fechar com uma roda de conversa sobre a diversidade de formas de marcar o tempo."
      ]
    },
    {
      "theme": "Prevenindo doenças comuns no Estado de São Paulo",
      "curriculumCode": "EF04CI12*",
      "description": "Identificar as atitudes de prevenção relacionadas a algumas patologias infectocontagiosas com maior incidência no Estado de São Paulo e comunicar informações sobre elas em sua comunidade como uma ação de saúde pública.",
      "materials": ["Cartaz com informações sobre uma doença comum na região (ex.: dengue)", "Material para produção de cartazes"],
      "steps": [
        "Apresentar uma doença infectocontagiosa comum na região, como a dengue.",
        "Discutir com a turma como ela se transmite e quais são os sintomas.",
        "Levantar coletivamente atitudes de prevenção que podem ser adotadas em casa e na escola.",
        "Em grupos, os alunos criam um cartaz de prevenção para divulgar na comunidade escolar.",
        "Expor os cartazes em locais de circulação da escola, como uma ação de saúde pública."
      ]
    }
  ],
  geografia: [
    {
      "theme": "As diferentes culturas que formam a nossa comunidade",
      "curriculumCode": "EF04GE01",
      "description": "Identificar e selecionar, em seus lugares de vivência e em suas histórias familiares e/ou da comunidade, elementos de distintas culturas (indígenas, afro-brasileiras, de outras regiões do país, latino-americanas, europeias, asiáticas entre outros), valorizando sua contribuição.",
      "materials": ["Nenhum material obrigatório; opcionalmente objetos ou fotos de família"],
      "steps": [
        "Perguntar aos alunos sobre a origem cultural de suas famílias (região, país, povo).",
        "Listar coletivamente na lousa as diferentes culturas presentes na turma.",
        "Conversar sobre elementos que cada cultura trouxe para a comunidade (comidas, festas, músicas, palavras).",
        "Pedir que os alunos pesquisem em casa mais um elemento cultural da própria família.",
        "Compartilhar as descobertas na aula seguinte, valorizando a diversidade encontrada."
      ]
    },
    {
      "theme": "De onde vieram? Processos migratórios que formaram o Brasil",
      "curriculumCode": "EF04GE02",
      "description": "Descrever processos migratórios internos e externos (europeus, asiáticos, africanos, latino-americanos, entre outros) e suas contribuições para a formação da sociedade brasileira.",
      "materials": ["Mapa-múndi ou mapa do Brasil", "Imagens de diferentes grupos de migrantes"],
      "steps": [
        "Apresentar um mapa e localizar de onde vieram diferentes grupos que migraram para o Brasil.",
        "Explicar brevemente motivos que levaram essas pessoas a migrar (trabalho, guerra, busca por uma vida melhor).",
        "Discutir contribuições desses grupos para a cultura brasileira (comida, idioma, costumes).",
        "Em duplas, os alunos escolhem um grupo migrante e listam uma contribuição dele para o Brasil.",
        "Compartilhar as descobertas, localizando novamente as origens no mapa."
      ]
    },
    {
      "theme": "Campo e cidade: quem depende de quem?",
      "curriculumCode": "EF04GE04",
      "description": "Reconhecer especificidades e analisar a interdependência do campo e da cidade, considerando fluxos econômicos, de informações, de ideias e de pessoas.",
      "materials": ["Imagens de paisagens rurais e urbanas", "Cartaz para organizar as ideias"],
      "steps": [
        "Apresentar imagens de uma paisagem rural e de uma paisagem urbana.",
        "Perguntar o que vem do campo para a cidade e o que vai da cidade para o campo.",
        "Organizar coletivamente um cartaz com os fluxos identificados (alimentos, produtos, informações, pessoas).",
        "Em duplas, os alunos pensam em um exemplo concreto dessa troca (ex.: leite do campo, remédio da cidade).",
        "Fechar discutindo por que campo e cidade precisam um do outro."
      ]
    },
    {
      "theme": "Da matéria-prima ao produto: de onde vêm as coisas que usamos",
      "curriculumCode": "EF04GE08",
      "description": "Descrever o processo de produção, circulação e consumo de diferentes produtos, reconhecendo as etapas da transformação da matéria-prima em produção de bens e alimentos e comparando a produção de resíduos.",
      "materials": ["Um produto do cotidiano (ex.: caderno, pão)", "Imagens das etapas de produção"],
      "steps": [
        "Escolher um produto do cotidiano e perguntar de onde ele vem antes de chegar às mãos dos alunos.",
        "Apresentar as etapas de produção desse produto, da matéria-prima até o consumo.",
        "Discutir que resíduos são gerados em cada etapa da produção.",
        "Em duplas, os alunos escolhem outro produto e listam suas etapas de produção.",
        "Compartilhar os exemplos, comparando a quantidade de resíduos gerados em cada um."
      ]
    },
    {
      "theme": "Norte, sul, leste e oeste: usando as direções cardeais",
      "curriculumCode": "EF04GE09",
      "description": "Utilizar as direções cardeais na localização de componentes físicos e humanos nas paisagens rurais e urbanas.",
      "materials": ["Bússola ou rosa dos ventos desenhada", "Mapa simples da região"],
      "steps": [
        "Apresentar a rosa dos ventos, relembrando as quatro direções cardeais.",
        "Usar uma bússola ou pontos de referência para identificar o norte na sala de aula.",
        "Localizar, em um mapa simples da região, elementos usando as direções cardeais (a norte fica..., a sul fica...).",
        "Em duplas, os alunos descrevem a localização de um elemento do mapa usando direções cardeais.",
        "Fechar com um jogo de adivinhação usando as direções para localizar pontos no mapa."
      ]
    },
    {
      "theme": "Diferentes tipos de mapas: para que servem",
      "curriculumCode": "EF04GE10",
      "description": "Reconhecer e comparar tipos variados de mapas, identificando suas características, elaboradores, finalidades, diferenças e semelhanças entre outros elementos.",
      "materials": ["Exemplos de diferentes tipos de mapas (político, físico, de trânsito, turístico)"],
      "steps": [
        "Apresentar exemplos de diferentes tipos de mapas para a turma observar.",
        "Perguntar para que serve cada tipo de mapa apresentado.",
        "Comparar as diferenças entre eles (cores, símbolos, informações destacadas).",
        "Em duplas, os alunos escolhem um mapa e explicam sua finalidade para a turma.",
        "Fechar discutindo qual mapa os alunos usariam para cada situação (viajar, estudar o relevo, andar de ônibus)."
      ]
    },
    {
      "theme": "Paisagens naturais e paisagens transformadas pelo ser humano",
      "curriculumCode": "EF04GE11",
      "description": "Identificar as características das paisagens naturais e antrópicas (relevo, cobertura vegetal, hidrografia entre outros) no ambiente em que vive, bem como a ação humana na conservação ou degradação dessas áreas, discutindo propostas para preservação.",
      "materials": ["Imagens de paisagens naturais e paisagens transformadas da região"],
      "steps": [
        "Apresentar imagens de uma paisagem natural e de uma paisagem bastante transformada pela ação humana.",
        "Identificar elementos como relevo, vegetação e rios em cada paisagem.",
        "Discutir de que forma a ação humana conservou ou degradou cada área observada.",
        "Em grupos, os alunos propõem uma ação de preservação para uma paisagem da própria região.",
        "Compartilhar as propostas, registrando as ideias em um mural coletivo."
      ]
    },
    {
      "theme": "Quem migrou para o nosso lugar de vivência?",
      "curriculumCode": "EF04GE12*",
      "description": "Identificar as características do processo migratório no lugar de vivência e no Estado de São Paulo e discutir as implicações decorrentes.",
      "materials": ["Mapa do Estado de São Paulo", "Relatos ou entrevistas de familiares (tarefa de casa)"],
      "steps": [
        "Perguntar se os alunos conhecem famílias que migraram para o bairro ou para o Estado de São Paulo.",
        "Localizar no mapa do Estado de onde vieram essas famílias, se souberem.",
        "Discutir coletivamente as implicações da migração para o lugar de vivência (crescimento, novas culturas, moradia).",
        "Pedir que os alunos perguntem em casa sobre a história migratória da própria família.",
        "Compartilhar as histórias coletadas na aula seguinte."
      ]
    },
    {
      "theme": "O que os migrantes trouxeram para São Paulo",
      "curriculumCode": "EF04GE13*",
      "description": "Discutir e valorizar as contribuições dos migrantes no lugar de vivência e no Estado de São Paulo, em aspectos como idioma, literatura, religiosidade, hábitos alimentares, ritmos musicais, festas tradicionais entre outros.",
      "materials": ["Imagens de festas, comidas ou músicas trazidas por migrantes ao Estado de SP"],
      "steps": [
        "Apresentar exemplos de comidas, festas e músicas do Estado de São Paulo que vieram com migrantes.",
        "Discutir com a turma de onde vieram esses elementos culturais.",
        "Perguntar quais desses elementos os alunos já conhecem ou já experimentaram.",
        "Em grupos, os alunos escolhem um elemento cultural e criam um pequeno cartaz sobre ele.",
        "Expor os cartazes em um mural celebrando a diversidade cultural do estado."
      ]
    },
    {
      "theme": "A industrialização e seus impactos em São Paulo",
      "curriculumCode": "EF04GE16*",
      "description": "Reconhecer e analisar as características do processo de industrialização, discutindo os impactos econômicos, sociais, culturais e ambientais dos processos produtivos (laranja, cana-de-açúcar, soja entre outros) no Estado de São Paulo e em diferentes regiões do Brasil.",
      "materials": ["Imagens de plantações e indústrias do Estado de São Paulo (laranja, cana-de-açúcar)"],
      "steps": [
        "Apresentar imagens de plantações e indústrias importantes do Estado de São Paulo.",
        "Explicar de forma simples o que é industrialização e como ela transforma a matéria-prima em produto.",
        "Discutir os impactos desse processo: geração de empregos, mas também poluição e outros efeitos ambientais.",
        "Em duplas, os alunos listam um impacto positivo e um impacto negativo da industrialização estudada.",
        "Fechar com uma roda de conversa sobre como equilibrar produção e cuidado com o ambiente."
      ]
    },
    {
      "theme": "Pontos cardeais, colaterais e subcolaterais",
      "curriculumCode": "EF04GE17*",
      "description": "Identificar os pontos cardeais, colaterais e subcolaterais como referenciais de orientação espacial, a partir dos lugares de vivência.",
      "materials": ["Rosa dos ventos completa (cardeais, colaterais e subcolaterais)", "Bússola"],
      "steps": [
        "Apresentar a rosa dos ventos completa, com pontos cardeais, colaterais e subcolaterais.",
        "Explicar como os pontos colaterais (nordeste, sudeste, sudoeste, noroeste) ficam entre os cardeais.",
        "Usar uma bússola para localizar esses pontos no espaço da sala ou do pátio.",
        "Em duplas, os alunos indicam a direção de um objeto da sala usando um ponto colateral ou subcolateral.",
        "Fechar com um jogo de orientação usando os diferentes pontos da rosa dos ventos."
      ]
    },
    {
      "theme": "Imagens de satélite, fotos aéreas e plantas: diferentes formas de ver um lugar",
      "curriculumCode": "EF04GE18*",
      "description": "Identificar e comparar diferentes formas de representação, como as imagens de satélite, fotografias aéreas, planta pictórica, plantas, croquis entre outros.",
      "materials": ["Exemplos impressos de imagem de satélite, foto aérea, planta e croqui de um mesmo lugar"],
      "steps": [
        "Mostrar diferentes representações de um mesmo lugar: imagem de satélite, foto aérea, planta e croqui.",
        "Perguntar quais diferenças os alunos percebem entre essas representações.",
        "Discutir para que serve cada tipo de representação e quando cada uma é mais usada.",
        "Em duplas, os alunos escolhem uma forma de representação e desenham a escola usando esse estilo.",
        "Comparar os desenhos produzidos pela turma, identificando o tipo de representação escolhido por cada dupla."
      ]
    }
  ],
  historia: [
    {
      "theme": "A história é feita por nós: mudanças e permanências",
      "curriculumCode": "EF04HI01",
      "description": "Reconhecer a história como resultado da ação do ser humano no tempo e no espaço, com base na identificação de mudanças e permanências ao longo do tempo.",
      "materials": ["Fotos antigas e atuais de um mesmo lugar (opcional)"],
      "steps": [
        "Perguntar aos alunos o que eles entendem por 'história' e quem a constrói.",
        "Apresentar exemplos de mudanças e permanências observadas no bairro ou na escola.",
        "Discutir coletivamente como as ações das pessoas ao longo do tempo transformam os lugares.",
        "Em duplas, os alunos listam uma mudança e uma permanência que conhecem no seu bairro.",
        "Fechar com uma roda de conversa sobre como cada geração deixa sua marca na história."
      ]
    },
    {
      "theme": "Do nomadismo à agricultura: marcos da história humana",
      "curriculumCode": "EF04HI02",
      "description": "Identificar mudanças e permanências ao longo do tempo, discutindo os sentidos dos grandes marcos da história ocidental (nomadismo, desenvolvimento da agricultura e do pastoreio, criação da indústria etc.).",
      "materials": ["Imagens representando nomadismo, agricultura e indústria"],
      "steps": [
        "Apresentar imagens de diferentes momentos da história humana: nômades, agricultores, indústria.",
        "Explicar brevemente cada marco e por que ele foi importante para a humanidade.",
        "Organizar as imagens em ordem cronológica com a ajuda da turma.",
        "Discutir o que mudou na vida das pessoas em cada um desses marcos.",
        "Registrar no caderno uma linha do tempo simples com os marcos estudados."
      ]
    },
    {
      "theme": "Como a nossa cidade mudou ao longo do tempo",
      "curriculumCode": "EF04HI03",
      "description": "Identificar as transformações ocorridas na cidade ao longo do tempo e discutir suas interferências nos modos de vida de seus habitantes, tomando como ponto de partida o presente.",
      "materials": ["Fotos antigas e atuais da cidade ou do bairro"],
      "steps": [
        "Mostrar fotos antigas e atuais de um mesmo lugar da cidade.",
        "Perguntar o que os alunos reconhecem e o que mudou entre as duas fotos.",
        "Discutir como essas mudanças afetaram o modo de vida das pessoas que moram ali.",
        "Em duplas, os alunos pesquisam com familiares uma mudança que a cidade sofreu ao longo do tempo.",
        "Compartilhar as descobertas na aula seguinte, comparando as mudanças relatadas."
      ]
    },
    {
      "theme": "O ser humano e a natureza: do nomadismo às primeiras comunidades",
      "curriculumCode": "EF04HI04",
      "description": "Identificar as relações entre os indivíduos e a natureza e discutir o significado do nomadismo e da fixação das primeiras comunidades humanas.",
      "materials": ["Imagens de povos nômades e de primeiras comunidades fixas"],
      "steps": [
        "Apresentar imagens de povos nômades, que se deslocavam em busca de alimento.",
        "Explicar o que levou algumas comunidades a se fixarem em um só lugar.",
        "Discutir como essa mudança alterou a relação entre as pessoas e a natureza.",
        "Em grupos, os alunos comparam vantagens e desvantagens de viver nômade ou fixo.",
        "Fechar com um registro coletivo das conclusões da turma."
      ]
    },
    {
      "theme": "Ocupar o campo, transformar a natureza",
      "curriculumCode": "EF04HI05",
      "description": "Relacionar os processos de ocupação do campo a intervenções na natureza, avaliando os resultados dessas intervenções.",
      "materials": ["Imagens de áreas rurais antes e depois da ocupação humana"],
      "steps": [
        "Apresentar imagens de uma área natural e da mesma área após ser ocupada para agricultura ou pecuária.",
        "Discutir quais intervenções na natureza foram necessárias para essa ocupação (desmatamento, irrigação).",
        "Avaliar coletivamente os resultados positivos e negativos dessas intervenções.",
        "Em duplas, os alunos pesquisam um exemplo de ocupação do campo na própria região.",
        "Compartilhar os exemplos encontrados, discutindo seus impactos."
      ]
    },
    {
      "theme": "Pessoas e mercadorias em movimento pela história",
      "curriculumCode": "EF04HI06",
      "description": "Identificar as transformações ocorridas nos processos de deslocamento das pessoas e mercadorias, analisando as formas de adaptação ou marginalização.",
      "materials": ["Imagens de diferentes meios de transporte ao longo da história"],
      "steps": [
        "Apresentar imagens de transportes antigos e atuais usados para deslocar pessoas e mercadorias.",
        "Discutir como esses deslocamentos mudaram ao longo do tempo.",
        "Conversar sobre quem teve mais facilidade de se adaptar a essas mudanças e quem ficou de fora.",
        "Em duplas, os alunos comparam um transporte antigo e um atual, listando diferenças.",
        "Fechar com uma roda de conversa sobre como esses transportes influenciam a vida das pessoas hoje."
      ]
    },
    {
      "theme": "Caminhos terrestres, fluviais e marítimos do comércio",
      "curriculumCode": "EF04HI07",
      "description": "Identificar e descrever a importância dos caminhos terrestres, fluviais e marítimos para a dinâmica da vida comercial.",
      "materials": ["Mapa com rotas terrestres, fluviais e marítimas históricas"],
      "steps": [
        "Apresentar um mapa mostrando rotas terrestres, fluviais e marítimas usadas para o comércio.",
        "Explicar como cada tipo de caminho foi importante para levar produtos de um lugar a outro.",
        "Discutir a importância desses caminhos para a formação de cidades ao longo da história.",
        "Em duplas, os alunos localizam no mapa um exemplo de cada tipo de rota.",
        "Fechar relacionando essas rotas antigas com os transportes de mercadorias usados hoje."
      ]
    },
    {
      "theme": "Como os meios de comunicação mudaram a vida das pessoas",
      "curriculumCode": "EF04HI08",
      "description": "Identificar as transformações ocorridas nos meios de comunicação (cultura oral, imprensa, rádio, televisão, cinema, internet e demais tecnologias digitais de informação e comunicação) e discutir seus significados para os diferentes grupos da sociedade.",
      "materials": ["Imagens representando diferentes meios de comunicação ao longo da história"],
      "steps": [
        "Apresentar imagens de diferentes meios de comunicação: tradição oral, jornal, rádio, TV, internet.",
        "Organizar coletivamente esses meios em ordem cronológica de surgimento.",
        "Discutir como cada novo meio de comunicação mudou a forma de as pessoas se informarem.",
        "Conversar sobre quem tem mais e quem tem menos acesso a esses meios hoje em dia.",
        "Registrar no caderno qual meio de comunicação a família de cada aluno mais usa."
      ]
    },
    {
      "theme": "Por que as pessoas migram? Motivações ao longo da história",
      "curriculumCode": "EF04HI09",
      "description": "Identificar as motivações dos processos migratórios em diferentes tempos e espaços e avaliar o papel desempenhado pela migração nas regiões de destino.",
      "materials": ["Relatos ou imagens de diferentes processos migratórios"],
      "steps": [
        "Apresentar exemplos de processos migratórios de diferentes épocas.",
        "Discutir os motivos que levaram essas pessoas a migrar (trabalho, guerra, fome, busca por oportunidades).",
        "Conversar sobre como as regiões de destino foram transformadas pela chegada dos migrantes.",
        "Em duplas, os alunos escolhem um exemplo e explicam a motivação da migração.",
        "Fechar relacionando os exemplos estudados com histórias de migração da própria comunidade."
      ]
    },
    {
      "theme": "Fluxos populacionais que formaram o povo brasileiro",
      "curriculumCode": "EF04HI10",
      "description": "Analisar diferentes fluxos populacionais e suas contribuições para a formação da sociedade brasileira.",
      "materials": ["Mapa do Brasil", "Imagens de diferentes grupos que formaram a população brasileira"],
      "steps": [
        "Apresentar um mapa do Brasil e localizar diferentes fluxos populacionais que formaram o país (povos indígenas, portugueses, africanos, outros migrantes).",
        "Discutir a contribuição de cada grupo para a formação da sociedade brasileira.",
        "Conversar sobre como essas diferentes origens ainda estão presentes na cultura atual.",
        "Em grupos, os alunos escolhem um grupo populacional e apresentam uma contribuição dele.",
        "Fechar com um mural coletivo reunindo as contribuições apresentadas pelos grupos."
      ]
    },
    {
      "theme": "A migração ainda transforma a nossa sociedade?",
      "curriculumCode": "EF04HI11",
      "description": "Analisar, na sociedade em que vive, a existência ou não de mudanças associadas à migração (interna e internacional).",
      "materials": ["Nenhum material obrigatório; opcionalmente notícias sobre migração atual"],
      "steps": [
        "Perguntar aos alunos se conhecem pessoas que migraram para a cidade recentemente, de outro estado ou país.",
        "Discutir coletivamente como essas migrações podem mudar a comunidade (novos costumes, comidas, comércio).",
        "Comparar essas migrações atuais com os processos migratórios estudados anteriormente na história do Brasil.",
        "Em duplas, os alunos conversam sobre uma mudança que perceberam relacionada à migração em seu bairro.",
        "Fechar com uma roda de conversa valorizando a contribuição dos migrantes para a comunidade."
      ]
    }
  ]
};
