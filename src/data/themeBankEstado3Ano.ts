// Banco de temas do 3º ano — rede ESTADUAL (Currículo Paulista, SEDUC-SP/EFAPE), no mesmo formato
// de src/data/themeBank.ts (que cobre a rede municipal) e de themeBankEstado2Ano.ts (2º ano
// estadual). Códigos de habilidade (curriculumCode) pesquisados diretamente nas matrizes oficiais
// de "Habilidades Essenciais — Anos Iniciais" do Currículo Paulista (SEDUC-SP/EFAPE,
// efape.educacao.sp.gov.br/curriculopaulista), na versão específica do 3º ano para Matemática,
// Geografia e História, e na matriz de Ciências (Anos Iniciais) já filtrada para a seção do 3º
// ano — não são estimados nem convertidos de outro currículo. Para Língua Portuguesa, a matriz
// oficial do 3º ano combina habilidades próprias do ano (EF03LP##) com habilidades de
// consolidação de anos anteriores e habilidades multisseriadas (EF12LP##, EF15LP##, EF35LP##,
// trabalhadas em vários anos ao mesmo tempo); para manter o mesmo padrão do banco do 2º ano (que
// usa só códigos do próprio ano), este banco usa apenas as habilidades identificadas com o
// prefixo EF03LP na matriz oficial do 3º ano. Alguns códigos aparecem desdobrados em A/B/C quando
// o documento oficial os apresenta assim (ex.: "EF03HI09A", "EF03HI09B").

import { BankEntry, OwnSubject } from "@/types/plano";

export const ESTADO_3_ANO_THEME_BANK: Record<OwnSubject, BankEntry[]> = {
  "lingua-portuguesa": [
    {
      "theme": "Escrevendo palavras com r/rr, c/qu, g/gu sem errar",
      "curriculumCode": "EF03LP01",
      "description": "Grafia correta de palavras com correspondências regulares contextuais entre grafemas e fonemas — r/rr, m antes de p/b, c/qu, g/gu — e com o uso de o (e não u) e e (e não i) em sílaba átona no final de palavras oxítonas.",
      "materials": ["Lousa", "Lista de palavras com essas trocas de letras", "Caderno"],
      "steps": [
        "Escrever na lousa pares de palavras que mudam de som conforme a letra usada (carro/caro, queijo/keijo).",
        "Explicar quando usar cada correspondência (c/qu antes de e/i, g/gu antes de e/i, r/rr entre vogais).",
        "Ler em voz alta uma lista de palavras com lacunas para os alunos completarem com a letra certa.",
        "Corrigir coletivamente na lousa, explicando a regra usada em cada palavra.",
        "Propor um ditado curto com cinco palavras que usam essas correspondências.",
        "Revisar o ditado em duplas, trocando os cadernos para conferir."
      ]
    },
    {
      "theme": "Verbos que terminam em -u, -l, -am ou -ão",
      "curriculumCode": "EF03LP02A",
      "description": "Grafia correta de palavras com correspondências regulares morfológico-gramaticais, como u e l no final de verbos e am e ão na terceira pessoa do plural.",
      "materials": ["Cartaz com exemplos de verbos", "Lousa"],
      "steps": [
        "Escrever na lousa frases com verbos terminados em -u e -l (correu, jogou, andar, comer).",
        "Comparar os sons e destacar que o -u geralmente marca uma ação já feita.",
        "Mostrar frases com verbos no plural terminados em -am e -ão (cantam, cantarão).",
        "Pedir que os alunos completem frases escolhendo a terminação correta do verbo.",
        "Corrigir coletivamente, explicando por que cada terminação foi usada."
      ]
    },
    {
      "theme": "Sons nasais e os dígrafos lh, nh, ch",
      "curriculumCode": "EF03LP03A",
      "description": "Grafia correta de marcas de nasalização (til, m, n) e dos dígrafos lh, nh e ch.",
      "materials": ["Lista de palavras com nasalização e dígrafos", "Cadernos"],
      "steps": [
        "Ler em voz alta palavras com sons nasais (mão, também, quinze) e com dígrafos (colher, ninho, chuva).",
        "Separar na lousa em dois grupos: sons nasais e dígrafos lh/nh/ch.",
        "Pedir que os alunos, em duplas, classifiquem novas palavras nos dois grupos.",
        "Propor um ditado misturando os dois tipos de palavra.",
        "Corrigir coletivamente, revisando os erros mais comuns."
      ]
    },
    {
      "theme": "Escrevendo certo o que a gente fala reduzido",
      "curriculumCode": "EF03LP03B",
      "description": "Eliminação de erros ortográficos por interferência da fala, como a redução de ditongos e gerúndios e a omissão do r no final dos verbos.",
      "materials": ["Lista de palavras faladas de forma reduzida (falano, corre)", "Lousa"],
      "steps": [
        "Escrever na lousa como algumas palavras são ditas no dia a dia (falano, brincano, fazê).",
        "Perguntar como essas palavras devem ser escritas corretamente (falando, brincando, fazer).",
        "Comparar a fala e a escrita correta de cada palavra, destacando a diferença.",
        "Propor um exercício de reescrita de frases corrigindo essas reduções.",
        "Corrigir coletivamente, reforçando por que escrevemos diferente de como falamos."
      ]
    },
    {
      "theme": "Palavras esdrúxulas sempre têm acento",
      "curriculumCode": "EF03LP04A",
      "description": "Acentuação correta de palavras de uso frequente, incluindo as palavras proparoxítonas.",
      "materials": ["Cartaz com palavras proparoxítonas (médico, público, número)", "Lousa"],
      "steps": [
        "Apresentar uma lista de palavras proparoxítonas comuns, lendo em voz alta.",
        "Explicar que toda palavra proparoxítona é acentuada, sem exceção.",
        "Pedir que os alunos identifiquem a sílaba tônica de cada palavra antes de acentuar.",
        "Propor um exercício de completar frases com as palavras acentuadas corretamente.",
        "Fechar com um jogo de caça-palavras esdrúxulas escondidas em um texto curto."
      ]
    },
    {
      "theme": "O que muda quando trocamos a pontuação",
      "curriculumCode": "EF03LP07A",
      "description": "Análise dos efeitos de sentido provocados pelo uso da pontuação (ponto final, ponto de interrogação, ponto de exclamação, dois-pontos e travessão) na leitura de textos.",
      "materials": ["Frase igual escrita com pontuações diferentes", "Lousa"],
      "steps": [
        "Escrever a mesma frase na lousa com pontuação diferente (Ele chegou. / Ele chegou? / Ele chegou!).",
        "Ler cada versão em voz alta, variando a entonação conforme a pontuação.",
        "Perguntar o que muda no sentido da frase em cada caso.",
        "Em duplas, os alunos criam frases usando dois-pontos e travessão.",
        "Compartilhar as frases criadas, discutindo o efeito de cada pontuação."
      ]
    },
    {
      "theme": "Pontuando nosso próprio texto",
      "curriculumCode": "EF03LP07B",
      "description": "Pontuação correta de textos produzidos, usando ponto final, ponto de exclamação, ponto de interrogação e reticências, conforme as características do gênero.",
      "materials": ["Texto curto sem pontuação", "Lousa"],
      "steps": [
        "Apresentar um texto curto sem nenhuma pontuação.",
        "Ler em voz alta e pedir sugestões de onde inserir os sinais.",
        "Reescrever coletivamente o texto com a pontuação decidida pela turma.",
        "Propor que cada aluno escreva um parágrafo próprio usando pelo menos três sinais diferentes.",
        "Trocar os textos em duplas para revisar a pontuação usada pelo colega."
      ]
    },
    {
      "theme": "Substantivo, adjetivo e verbo: para que servem",
      "curriculumCode": "EF03LP08",
      "description": "Compreensão da função de elementos gramaticais como substantivos, adjetivos e verbos na articulação das ideias do texto.",
      "materials": ["Frase modelo na lousa", "Cartões coloridos, um para cada classe gramatical"],
      "steps": [
        "Escrever uma frase simples na lousa e identificar juntos o substantivo, o verbo e o adjetivo.",
        "Explicar a função de cada classe de palavra na frase.",
        "Distribuir cartões coloridos e pedir que os alunos classifiquem palavras de uma lista.",
        "Propor que cada dupla monte uma frase nova trocando o adjetivo, observando como o sentido muda.",
        "Compartilhar as frases criadas com a turma."
      ]
    },
    {
      "theme": "Descobrindo a poesia de cordel",
      "curriculumCode": "EF03LP09A",
      "description": "Leitura e compreensão de cordéis, repentes, entre outros textos do campo artístico-literário, considerando a situação comunicativa, o tema, a estrutura composicional e o estilo do gênero.",
      "materials": ["Um cordel impresso ou em cartaz"],
      "steps": [
        "Apresentar o que é um cordel e de onde vem essa tradição (nordeste brasileiro).",
        "Ler o cordel em voz alta, destacando o ritmo e a rima.",
        "Pedir que os alunos leiam trechos em voz alta, em duplas, imitando a entonação.",
        "Perguntar sobre o tema e o que rima no texto.",
        "Fechar comentando o que mais chamou atenção na leitura."
      ]
    },
    {
      "theme": "Como os adjetivos descrevem personagens",
      "curriculumCode": "EF03LP09B",
      "description": "Compreensão da função de adjetivos e locuções adjetivas na caracterização de personagens e ambientes, na leitura de diferentes textos como contos e cordéis.",
      "materials": ["Trecho de conto ou cordel com personagens bem descritos"],
      "steps": [
        "Ler um trecho que descreva um personagem ou lugar com adjetivos marcantes.",
        "Perguntar quais palavras ajudam a imaginar como é o personagem ou ambiente.",
        "Anotar na lousa os adjetivos e locuções adjetivas encontrados.",
        "Propor que os alunos reescrevam a descrição trocando os adjetivos por outros.",
        "Compartilhar as novas descrições, comparando o efeito de sentido."
      ]
    },
    {
      "theme": "Lendo regras de jogos e brincadeiras sozinho",
      "curriculumCode": "EF03LP11",
      "description": "Leitura e compreensão, com autonomia, de instruções de montagem, regras de jogo, regras de brincadeiras, entre outros textos do campo da vida cotidiana.",
      "materials": ["Regras de um jogo ou brincadeira impressas"],
      "steps": [
        "Distribuir as regras de um jogo simples para os alunos lerem sozinhos.",
        "Pedir que expliquem com as próprias palavras o que entenderam.",
        "Organizar a turma para jogar seguindo exatamente as regras lidas.",
        "Discutir se alguma regra ficou confusa e como poderia ser escrita de forma mais clara.",
        "Propor que os alunos escrevam as regras de uma brincadeira que conhecem de cor."
      ]
    },
    {
      "theme": "Lendo cartas que contam sentimentos",
      "curriculumCode": "EF03LP12",
      "description": "Leitura e compreensão, com autonomia, de cartas pessoais, entre outros textos do campo da vida cotidiana, que expressam sentimentos e opiniões.",
      "materials": ["Modelo de carta pessoal"],
      "steps": [
        "Apresentar uma carta pessoal e ler em voz alta para a turma.",
        "Perguntar o que a pessoa que escreveu estava sentindo.",
        "Identificar coletivamente as partes da carta (data, saudação, mensagem, despedida).",
        "Em duplas, os alunos leem outra carta e localizam o sentimento principal expresso.",
        "Compartilhar o que descobriram com a turma."
      ]
    },
    {
      "theme": "Escrevendo uma carta para contar como me sinto",
      "curriculumCode": "EF03LP13",
      "description": "Planejamento e produção de cartas pessoais, entre outros textos do campo da vida cotidiana, que expressam sentimentos e opiniões, considerando a situação comunicativa, o tema e o estilo do gênero.",
      "materials": ["Papel para carta", "Envelope (opcional)"],
      "steps": [
        "Retomar as partes de uma carta pessoal vistas anteriormente.",
        "Perguntar para quem cada aluno gostaria de escrever contando um sentimento ou opinião.",
        "Planejar juntos o que vai entrar na carta.",
        "Cada aluno escreve sua carta pessoal.",
        "Trocar as cartas entre colegas ou entregar às pessoas escolhidas."
      ]
    },
    {
      "theme": "As partes fixas de uma carta pessoal",
      "curriculumCode": "EF03LP17",
      "description": "Identificação e manutenção, na leitura de cartas pessoais, da estrutura composicional (predomínio de data, saudação, despedida, assinatura) e do estilo próprio dos gêneros epistolares.",
      "materials": ["Duas ou três cartas pessoais modelo"],
      "steps": [
        "Apresentar diferentes cartas pessoais e observar o que elas têm em comum.",
        "Marcar coletivamente onde fica a data, a saudação, o corpo do texto, a despedida e a assinatura.",
        "Em duplas, os alunos recebem uma carta com as partes fora de ordem e organizam corretamente.",
        "Corrigir coletivamente, comparando as respostas.",
        "Registrar no caderno as partes fixas de uma carta pessoal."
      ]
    },
    {
      "theme": "Cartas de leitor: quando alguém escreve pro jornal",
      "curriculumCode": "EF03LP18",
      "description": "Leitura e compreensão, com autonomia, de cartas dirigidas a veículos da mídia impressa ou digital (cartas de leitor e de reclamação, entre outros textos do campo da vida pública).",
      "materials": ["Exemplo de carta do leitor ou de reclamação"],
      "steps": [
        "Explicar o que é uma carta do leitor e para que serve.",
        "Ler o exemplo em voz alta, identificando a opinião do autor.",
        "Perguntar por que a pessoa decidiu escrever aquela carta.",
        "Em duplas, os alunos identificam o assunto e a opinião de uma nova carta.",
        "Fechar comparando essa carta com uma carta pessoal, destacando as diferenças."
      ]
    },
    {
      "theme": "Lendo campanhas que querem nos convencer de algo bom",
      "curriculumCode": "EF03LP19A",
      "description": "Leitura e compreensão de anúncios e campanhas publicitárias de conscientização, entre outros textos do campo da vida pública.",
      "materials": ["Exemplos de campanhas de conscientização (economia de água, reciclagem)"],
      "steps": [
        "Apresentar um anúncio ou campanha de conscientização.",
        "Perguntar qual é a mensagem principal e para quem ela é dirigida.",
        "Identificar palavras e imagens usadas para convencer o leitor.",
        "Em duplas, os alunos analisam outra campanha e explicam sua mensagem.",
        "Compartilhar com a turma o que descobriram."
      ]
    },
    {
      "theme": "Como cores e letras grandes convencem a gente",
      "curriculumCode": "EF03LP19B",
      "description": "Compreensão dos efeitos de sentido de recursos de persuasão como cores, imagens, escolha de palavras e tamanho de letras em anúncios e campanhas publicitárias de conscientização.",
      "materials": ["Duas campanhas de conscientização com visuais diferentes"],
      "steps": [
        "Comparar duas campanhas com cores e tamanhos de letra diferentes.",
        "Perguntar qual delas chama mais atenção e por quê.",
        "Discutir como cores fortes ou letras grandes destacam a mensagem.",
        "Propor que os alunos, em duplas, sublinhem elementos persuasivos de uma campanha.",
        "Fechar com uma roda de conversa sobre os recursos encontrados."
      ]
    },
    {
      "theme": "Escrevendo nossa própria carta de reclamação",
      "curriculumCode": "EF03LP20A",
      "description": "Planejamento e produção de cartas dirigidas a veículos da mídia impressa ou digital (cartas de leitor, de reclamação), com opiniões e críticas, de acordo com a situação comunicativa.",
      "materials": ["Papel para carta", "Situação-problema real ou fictícia da escola ou do bairro"],
      "steps": [
        "Escolher com a turma uma situação que mereça uma reclamação ou opinião (lixo na praça, falta de brinquedos no parquinho).",
        "Planejar coletivamente o que a carta precisa ter: o problema, o motivo e o que se espera de mudança.",
        "Cada aluno ou dupla escreve sua carta dirigida a um veículo de mídia ou órgão responsável.",
        "Trocar as cartas entre colegas para sugestões de melhoria.",
        "Reunir as cartas em um mural da turma."
      ]
    },
    {
      "theme": "Revisando nossa carta antes de enviar",
      "curriculumCode": "EF03LP20B",
      "description": "Revisão e edição de cartas dirigidas a veículos da mídia impressa ou digital produzidas, cuidando da apresentação final do texto.",
      "materials": ["Cartas produzidas na aula anterior", "Lápis colorido para marcar correções"],
      "steps": [
        "Retomar as cartas escritas na aula anterior.",
        "Apresentar uma lista simples de revisão (pontuação, clareza, se o problema está bem explicado).",
        "Em duplas, os alunos revisam a carta do colega usando essa lista.",
        "Cada aluno reescreve sua carta incorporando as sugestões recebidas.",
        "Fechar com a leitura de algumas cartas revisadas para a turma."
      ]
    },
    {
      "theme": "Criando nossa campanha de conscientização",
      "curriculumCode": "EF03LP21A",
      "description": "Planejamento e produção de anúncios e campanhas publicitárias de conscientização que possam ser oralizados em áudio ou vídeo, observando os recursos de persuasão utilizados.",
      "materials": ["Cartolina ou papel para cartaz", "Celular ou gravador (opcional)"],
      "steps": [
        "Escolher com a turma um tema de conscientização (economizar água, não jogar lixo no chão).",
        "Planejar a mensagem principal e os recursos persuasivos que serão usados (cores, frase de efeito, imagem).",
        "Cada grupo cria seu anúncio em cartaz ou roteiro para gravação.",
        "Ensaiar a apresentação oral da campanha.",
        "Apresentar ou gravar as campanhas para a turma."
      ]
    },
    {
      "theme": "Criando nosso próprio cordel",
      "curriculumCode": "EF03LP22A",
      "description": "Planejamento e produção de cordéis, repentes, entre outros textos do campo artístico-literário que contenham rimas, ritmo e melodia.",
      "materials": ["Papel para escrita", "Cordel modelo para consulta"],
      "steps": [
        "Relembrar as características do cordel: rima, ritmo e estrofes.",
        "Escolher coletivamente um tema simples para os cordéis (a escola, um animal, uma brincadeira).",
        "Cada aluno ou dupla planeja e escreve seu próprio cordel.",
        "Ler os cordéis em voz alta, testando o ritmo.",
        "Ajustar o texto conforme necessário e expor os cordéis em um mural."
      ]
    },
    {
      "theme": "Lendo curiosidades e relatos de pesquisa",
      "curriculumCode": "EF03LP24",
      "description": "Leitura e escuta, com autonomia, de relatos de observação e de pesquisas, relatórios, artigos científicos, curiosidades, resumos, entre outros textos do campo das práticas de estudo e pesquisa.",
      "materials": ["Texto curto de curiosidade científica (seção 'você sabia?')"],
      "steps": [
        "Apresentar um texto curto de curiosidade científica.",
        "Ler em voz alta, destacando a informação principal.",
        "Perguntar o que a turma aprendeu de novo com a leitura.",
        "Em duplas, os alunos leem outro texto de curiosidade e resumem oralmente o que entenderam.",
        "Fechar com uma lista coletiva de curiosidades lidas na aula."
      ]
    },
    {
      "theme": "Escrevendo o relatório da nossa pesquisa",
      "curriculumCode": "EF03LP25A",
      "description": "Planejamento e produção de relatórios, artigos científicos, curiosidades, resumos, entre outros textos, com a finalidade de apresentar resultados de observações e pesquisas realizadas.",
      "materials": ["Resultado de uma pequena pesquisa ou observação feita pela turma", "Papel para produção"],
      "steps": [
        "Retomar uma observação ou pesquisa feita anteriormente pela turma (ex.: crescimento de uma planta).",
        "Planejar coletivamente o que o relatório precisa ter: o que foi observado, como e o que se descobriu.",
        "Cada aluno ou dupla escreve seu relatório com essas informações.",
        "Trocar os relatórios entre colegas para leitura.",
        "Compartilhar as descobertas registradas com a turma."
      ]
    },
    {
      "theme": "Deixando nosso relatório completo com imagens e tabelas",
      "curriculumCode": "EF03LP25B",
      "description": "Revisão e edição de relatórios, artigos científicos, curiosidades, resumos produzidos, cuidando da apresentação final do texto e incluindo imagens, diagramas, gráficos ou tabelas quando pertinente.",
      "materials": ["Relatórios produzidos na aula anterior", "Lápis de cor para ilustrações"],
      "steps": [
        "Retomar os relatórios escritos anteriormente.",
        "Discutir como uma imagem, tabela ou gráfico pode ajudar a explicar melhor o resultado.",
        "Cada aluno acrescenta um desenho, tabela ou gráfico simples ao seu relatório.",
        "Revisar o texto em duplas, ajustando informações confusas.",
        "Expor os relatórios finalizados em um mural de pesquisas da turma."
      ]
    },
    {
      "theme": "As partes de um relato de pesquisa",
      "curriculumCode": "EF03LP26",
      "description": "Identificação e manutenção da estrutura composicional de relatos de observação e de pesquisas (etapas, listas de itens, tabelas, ilustrações, gráficos, resumo de resultados).",
      "materials": ["Exemplo de relato de pesquisa com etapas bem marcadas"],
      "steps": [
        "Apresentar um relato de pesquisa e identificar suas partes (o que foi pesquisado, como, resultados).",
        "Perguntar por que essas partes aparecem sempre nessa ordem.",
        "Em grupos, os alunos organizam cartões com partes soltas de um relato na ordem correta.",
        "Cada grupo apresenta a ordem montada, explicando o raciocínio.",
        "Registrar no caderno as partes fixas de um relato de pesquisa."
      ]
    }
  ],
  matematica: [
    {
      "theme": "Lendo e comparando números até o milhar",
      "curriculumCode": "EF03MA01",
      "description": "Leitura, escrita e comparação de números naturais de até a ordem de unidade de milhar, estabelecendo relações entre os registros numéricos e a língua materna.",
      "materials": ["Material dourado ou cartões de valor posicional", "Cartões com números de até 4 algarismos"],
      "steps": [
        "Distribuir cartões com números de até quatro algarismos para os alunos, em duplas.",
        "Pedir que leiam o número em voz alta e escrevam por extenso.",
        "Montar o número com material dourado, observando unidade, dezena, centena e milhar.",
        "Comparar dois números de duplas diferentes, decidindo qual é maior.",
        "Organizar os cartões da turma em ordem crescente na lousa.",
        "Registrar no caderno três comparações usando os sinais > e <."
      ]
    },
    {
      "theme": "Decompondo números até a milhar",
      "curriculumCode": "EF03MA02",
      "description": "Identificação de características do sistema de numeração decimal, utilizando a composição e a decomposição de número natural de até quatro ordens.",
      "materials": ["Material dourado", "Cartões de valor posicional (UM, C, D, U)"],
      "steps": [
        "Apresentar um número de quatro algarismos e pedir que os alunos montem com material dourado.",
        "Decompor o número em milhares, centenas, dezenas e unidades usando os cartões.",
        "Escrever a decomposição como soma (ex.: 2354 = 2000 + 300 + 50 + 4).",
        "Inverter a atividade: dar a soma decomposta e pedir que descubram o número.",
        "Realizar uma rodada de desafios em duplas, trocando números para decompor."
      ]
    },
    {
      "theme": "Fatos básicos de cabeça: somar, subtrair e multiplicar",
      "curriculumCode": "EF03MA03",
      "description": "Construção e utilização de fatos básicos da adição, da subtração e da multiplicação para o cálculo mental ou escrito.",
      "materials": ["Fichas com fatos básicos (7+5, 12-4, 3x4)", "Cronômetro ou relógio da sala"],
      "steps": [
        "Apresentar fichas com pequenas contas para a turma resolver oralmente.",
        "Cronometrar rodadas rápidas em que os alunos respondem de memória.",
        "Registrar no caderno os fatos que ainda geram dúvida.",
        "Propor um jogo em duplas com cartas de fatos básicos, marcando ponto para quem responder primeiro.",
        "Fechar com uma lista coletiva dos fatos que a turma já domina."
      ]
    },
    {
      "theme": "Andando pela reta numérica: somar é ir pra frente",
      "curriculumCode": "EF03MA04",
      "description": "Estabelecimento da relação entre números naturais e pontos da reta numérica para utilizá-la na ordenação dos números e na construção de fatos da adição e da subtração, relacionando-os a deslocamentos para a direita ou para a esquerda.",
      "materials": ["Reta numérica desenhada no chão ou na lousa", "Fichas numeradas"],
      "steps": [
        "Desenhar uma reta numérica grande no chão ou na lousa.",
        "Pedir que um aluno se posicione em um número e caminhe para a direita para somar, para a esquerda para subtrair.",
        "Repetir com diferentes contas, registrando o deslocamento.",
        "Propor que os alunos resolvam contas simples desenhando o salto na reta numérica do caderno.",
        "Fechar comparando os resultados obtidos por diferentes duplas."
      ]
    },
    {
      "theme": "Diferentes jeitos de calcular a mesma conta",
      "curriculumCode": "EF03MA05",
      "description": "Utilização de diferentes procedimentos de cálculo mental e escrito para resolver problemas significativos envolvendo adição, subtração e multiplicação com números naturais.",
      "materials": ["Problemas escritos na lousa", "Cadernos"],
      "steps": [
        "Apresentar um problema e resolver coletivamente de duas formas diferentes (cálculo mental e cálculo escrito armado).",
        "Discutir as vantagens de cada estratégia.",
        "Propor que os alunos resolvam outro problema, escolhendo a estratégia que preferirem.",
        "Comparar as diferentes formas de resolução usadas na turma.",
        "Registrar no caderno a estratégia que cada aluno achou mais fácil."
      ]
    },
    {
      "theme": "Problemas de juntar, separar, comparar e completar",
      "curriculumCode": "EF03MA06",
      "description": "Resolução e elaboração de problemas de adição e subtração com os significados de juntar, acrescentar, separar, retirar, comparar e completar quantidades, utilizando diferentes estratégias de cálculo exato ou aproximado.",
      "materials": ["Problemas impressos ou na lousa", "Material manipulável de apoio"],
      "steps": [
        "Ler um problema em voz alta e identificar que ideia ele envolve (juntar, separar, comparar ou completar).",
        "Resolver coletivamente na lousa, mostrando o raciocínio.",
        "Deixar os alunos resolverem sozinhos outros problemas com ideias diferentes.",
        "Corrigir coletivamente, comparando as estratégias usadas.",
        "Propor que cada dupla elabore um problema novo para trocar com outra dupla."
      ]
    },
    {
      "theme": "Multiplicando em fileiras: a disposição retangular",
      "curriculumCode": "EF03MA07",
      "description": "Resolução e elaboração de problemas de multiplicação (por 2, 3, 4, 5 e 10) com os significados de adição de parcelas iguais e elementos apresentados em disposição retangular.",
      "materials": ["Fichas ou tampinhas para organizar em fileiras", "Folha quadriculada"],
      "steps": [
        "Propor uma situação: 'temos 4 fileiras com 5 cadeiras cada, quantas cadeiras ao todo?'.",
        "Deixar os alunos organizarem objetos em fileiras (disposição retangular) para resolver.",
        "Registrar a multiplicação correspondente à disposição montada.",
        "Propor mais problemas de multiplicação por 2, 3, 4, 5 e 10.",
        "Fechar com um desafio em duplas de criar um problema de multiplicação para o colega resolver."
      ]
    },
    {
      "theme": "Dividindo com e sem sobra",
      "curriculumCode": "EF03MA08",
      "description": "Resolução e elaboração de problemas de divisão de um número natural por outro (até 10), com resto zero e com resto diferente de zero, com os significados de repartição equitativa e de medida.",
      "materials": ["Objetos para repartir (tampinhas, palitos, balas de brincadeira)", "Folha de registro"],
      "steps": [
        "Propor uma situação de divisão simples: repartir 18 balas entre 4 amigos.",
        "Deixar os alunos repartirem com material manipulável, observando se sobra alguma.",
        "Registrar o resultado da divisão e o resto, se houver.",
        "Repetir com uma divisão que dê resto zero para comparar.",
        "Propor mais problemas de divisão em duplas, alternando situações com e sem resto."
      ]
    },
    {
      "theme": "Metade, terça parte, quarta parte: dividindo em partes iguais",
      "curriculumCode": "EF03MA09",
      "description": "Associação do quociente de uma divisão com resto zero de um número natural por 2, 3, 4, 5 e 10 às ideias de metade, terça, quarta, quinta e décima partes.",
      "materials": ["Fichas ou barras de papel para dividir", "Lousa"],
      "steps": [
        "Apresentar uma quantidade de objetos e pedir que a turma descubra a metade, dividindo em 2 partes iguais.",
        "Repetir a atividade pedindo a terça, quarta e quinta parte, dividindo em 3, 4 e 5 partes.",
        "Relacionar cada divisão ao quociente obtido (dividir por 2 dá a metade, por 4 dá a quarta parte).",
        "Registrar no caderno os resultados com desenhos de apoio.",
        "Fechar com um jogo de perguntas rápidas sobre metade e outras partes."
      ]
    },
    {
      "theme": "Descobrindo a regra da sequência numérica",
      "curriculumCode": "EF03MA10",
      "description": "Identificação de regularidades em sequências ordenadas de números naturais, resultantes da realização de adições ou subtrações sucessivas por um mesmo número, descrevendo a regra de formação e determinando elementos faltantes.",
      "materials": ["Cartões numerados", "Lousa"],
      "steps": [
        "Escrever na lousa uma sequência numérica com uma regra (somar 3 a cada passo) e um espaço em branco.",
        "Pedir que os alunos descubram a regra e completem o espaço.",
        "Repetir com sequências decrescentes (subtração sucessiva).",
        "Propor que duplas criem suas próprias sequências e troquem com outra dupla para descobrir a regra.",
        "Socializar algumas sequências criadas pela turma."
      ]
    },
    {
      "theme": "Contas diferentes, mesmo resultado: a igualdade",
      "curriculumCode": "EF03MA11",
      "description": "Compreensão da ideia de igualdade para escrever diferentes sentenças de adição ou de subtração de dois números naturais que resultem na mesma soma ou diferença.",
      "materials": ["Balança de dois pratos (real ou desenhada)", "Fichas numeradas"],
      "steps": [
        "Mostrar uma balança equilibrada (real ou desenhada) com números dos dois lados, como 5+3 = 8.",
        "Perguntar que outras contas dariam o mesmo resultado 8.",
        "Registrar coletivamente diferentes sentenças de adição e subtração que resultam em 8.",
        "Propor que os alunos, em duplas, criem sentenças equivalentes para outros números.",
        "Corrigir coletivamente, verificando se as igualdades estão corretas."
      ]
    },
    {
      "theme": "Desenhando o trajeto de um passeio",
      "curriculumCode": "EF03MA12",
      "description": "Descrição e representação, por meio de esboços de trajetos ou utilizando croquis e maquetes, da movimentação de pessoas ou de objetos no espaço, incluindo mudanças de direção e sentido.",
      "materials": ["Folha de papel", "Lápis de cor"],
      "steps": [
        "Propor que os alunos pensem no trajeto de casa até a escola.",
        "Pedir que desenhem um croqui simples desse trajeto, marcando pontos de referência.",
        "Indicar no desenho as mudanças de direção (virar à direita, seguir em frente).",
        "Trocar os desenhos em duplas e tentar explicar o trajeto do colega em voz alta.",
        "Comparar os croquis feitos por diferentes alunos."
      ]
    },
    {
      "theme": "Sólidos geométricos no nosso dia a dia",
      "curriculumCode": "EF03MA13",
      "description": "Associação de figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera) a objetos do mundo físico, nomeando essas figuras.",
      "materials": ["Sólidos geométricos de madeira ou plástico", "Objetos do cotidiano (caixa, lata, bola, chapéu de festa)"],
      "steps": [
        "Apresentar os sólidos geométricos e pedir que os alunos os manipulem.",
        "Associar cada sólido a um objeto conhecido (cone e chapéu de festa, esfera e bola).",
        "Organizar uma caça aos sólidos pela sala, procurando objetos parecidos com cada forma.",
        "Registrar em uma tabela o nome do sólido e o objeto correspondente encontrado.",
        "Socializar as descobertas com a turma."
      ]
    },
    {
      "theme": "Desmontando sólidos: a planificação",
      "curriculumCode": "EF03MA14",
      "description": "Descrição de características de algumas figuras geométricas espaciais (prismas retos, pirâmides, cilindros, cones), relacionando-as com suas planificações.",
      "materials": ["Sólidos geométricos de papel (moldes planificados)", "Tesoura sem ponta"],
      "steps": [
        "Mostrar um sólido geométrico e sua planificação (a forma aberta em plano).",
        "Pedir que os alunos montem o sólido a partir da planificação de papel.",
        "Comparar quantas faces, arestas e vértices cada sólido tem.",
        "Propor que desenhem a planificação de outro sólido simples.",
        "Fechar comparando os moldes criados pela turma."
      ]
    },
    {
      "theme": "Comparando lados e vértices das figuras planas",
      "curriculumCode": "EF03MA15",
      "description": "Classificação e comparação de figuras planas (triângulo, quadrado, retângulo, trapézio e paralelogramo) em relação a seus lados (quantidade, posições relativas e comprimento) e vértices.",
      "materials": ["Figuras planas de papel ou EVA (triângulo, quadrado, retângulo, trapézio, paralelogramo)"],
      "steps": [
        "Distribuir as figuras planas para os alunos manipularem.",
        "Pedir que contem o número de lados e vértices de cada uma.",
        "Organizar as figuras em grupos conforme o número de lados.",
        "Comparar o comprimento dos lados de cada figura (iguais ou diferentes).",
        "Registrar em uma tabela as características observadas de cada figura."
      ]
    },
    {
      "theme": "Figuras congruentes: quando são exatamente iguais",
      "curriculumCode": "EF03MA16",
      "description": "Reconhecimento de figuras congruentes, usando sobreposição e desenhos em malhas quadriculadas ou triangulares, incluindo o uso de tecnologias digitais.",
      "materials": ["Figuras de papel recortadas em pares (algumas iguais, outras diferentes)", "Folha quadriculada"],
      "steps": [
        "Distribuir pares de figuras e pedir que os alunos sobreponham para verificar se são iguais.",
        "Explicar que figuras exatamente iguais em forma e tamanho são chamadas de congruentes.",
        "Propor que desenhem uma figura na malha quadriculada e depois outra igual em outro local da malha.",
        "Trocar os desenhos em duplas para conferir a congruência.",
        "Fechar discutindo quais pares eram realmente congruentes."
      ]
    },
    {
      "theme": "A mesma mesa, medidas diferentes",
      "curriculumCode": "EF03MA17",
      "description": "Reconhecimento de que o resultado de uma medida depende da unidade de medida utilizada.",
      "materials": ["Fita métrica", "Barbante ou passos como unidade não padronizada"],
      "steps": [
        "Medir o comprimento de uma mesa usando passos e depois usando fita métrica.",
        "Comparar os dois resultados obtidos.",
        "Discutir por que os números são diferentes, mesmo medindo a mesma mesa.",
        "Repetir a atividade medindo outro objeto com duas unidades diferentes.",
        "Concluir coletivamente que o resultado da medida depende da unidade usada."
      ]
    },
    {
      "theme": "Qual instrumento usar para medir cada coisa",
      "curriculumCode": "EF03MA18",
      "description": "Escolha da unidade de medida e do instrumento mais apropriado para medições de comprimento, tempo e capacidade.",
      "materials": ["Régua, fita métrica, relógio e recipiente graduado", "Lista de situações para medir"],
      "steps": [
        "Apresentar diferentes instrumentos de medida (régua, fita métrica, relógio, recipiente graduado).",
        "Propor situações do dia a dia (medir a altura de um colega, o tempo do recreio, a água de uma garrafa).",
        "Pedir que os alunos escolham o instrumento mais adequado para cada situação.",
        "Realizar uma medição real usando o instrumento escolhido.",
        "Registrar em uma tabela a situação, o instrumento usado e o resultado."
      ]
    },
    {
      "theme": "Estimando e conferindo comprimentos com a régua",
      "curriculumCode": "EF03MA19",
      "description": "Estimativa, medição e comparação de comprimentos, utilizando unidades de medida não padronizadas e padronizadas mais usuais (metro, centímetro e milímetro) e diversos instrumentos de medida.",
      "materials": ["Régua ou fita métrica", "Objetos da sala para medir"],
      "steps": [
        "Pedir que os alunos estimem o comprimento de um objeto antes de medir.",
        "Medir o mesmo objeto com régua ou fita métrica, registrando o resultado real.",
        "Comparar a estimativa com a medida real.",
        "Repetir a atividade com outros dois objetos da sala.",
        "Registrar em uma tabela as estimativas e as medidas reais encontradas."
      ]
    },
    {
      "theme": "Pesando e medindo capacidade com rótulos",
      "curriculumCode": "EF03MA20",
      "description": "Estimativa e medição de capacidade e massa, utilizando unidades de medida não padronizadas e padronizadas mais usuais (litro, mililitro, quilograma, grama e miligrama), reconhecendo-as em rótulos e embalagens.",
      "materials": ["Embalagens com rótulos de capacidade e massa", "Balança simples, se disponível"],
      "steps": [
        "Trazer embalagens variadas e ler os rótulos, identificando litro, mililitro, quilograma ou grama.",
        "Pedir que os alunos estimem qual embalagem é mais pesada ou tem mais capacidade.",
        "Conferir usando uma balança simples, se disponível, ou comparando os rótulos.",
        "Organizar as embalagens em ordem crescente de capacidade ou massa.",
        "Registrar em tabela os resultados encontrados."
      ]
    },
    {
      "theme": "Qual figura tem mais área? Comparando por sobreposição",
      "curriculumCode": "EF03MA21",
      "description": "Comparação, visual ou por superposição, de áreas de faces de objetos, de figuras planas ou de desenhos.",
      "materials": ["Figuras planas recortadas de tamanhos parecidos", "Folha quadriculada"],
      "steps": [
        "Distribuir pares de figuras planas de tamanhos parecidos.",
        "Pedir que os alunos sobreponham as figuras para descobrir qual tem maior área.",
        "Repetir com outros pares, incluindo faces de objetos da sala.",
        "Propor que desenhem duas figuras na malha quadriculada e comparem contando os quadradinhos.",
        "Fechar comparando os resultados encontrados pela turma."
      ]
    },
    {
      "theme": "Cronometrando nossas atividades com o relógio",
      "curriculumCode": "EF03MA22",
      "description": "Leitura e registro de medidas e de intervalos de tempo, utilizando relógios (analógico e digital), para informar os horários de início e término de realização de uma atividade e sua duração.",
      "materials": ["Relógio analógico e digital (ou aplicativo)", "Folha de registro"],
      "steps": [
        "Escolher uma atividade da rotina para cronometrar, como o recreio.",
        "Registrar o horário de início observando o relógio analógico e o digital.",
        "Registrar o horário de término ao final da atividade.",
        "Calcular juntos quanto tempo durou a atividade.",
        "Repetir com outra atividade do dia, alternando entre os dois tipos de relógio."
      ]
    },
    {
      "theme": "Lendo as horas no relógio digital e no de ponteiros",
      "curriculumCode": "EF03MA23",
      "description": "Leitura de horas em relógios digitais e em relógios analógicos e reconhecimento da relação entre hora e minutos e entre minuto e segundos.",
      "materials": ["Relógio analógico (ou modelo de papel)", "Relógio digital ou aplicativo"],
      "steps": [
        "Apresentar um relógio analógico e um digital mostrando o mesmo horário.",
        "Explicar como cada ponteiro indica hora, minuto e segundo no relógio analógico.",
        "Propor exercícios de leitura de horários em ambos os relógios.",
        "Perguntar quantos minutos há em uma hora e quantos segundos em um minuto.",
        "Fechar com um jogo de adivinhar o horário marcado em relógios de papel."
      ]
    },
    {
      "theme": "Comprando e trocando: equivalência de valores",
      "curriculumCode": "EF03MA24",
      "description": "Resolução e elaboração de problemas que envolvam a comparação e a equivalência de valores monetários do sistema brasileiro em situações de compra, venda e troca.",
      "materials": ["Réplicas de moedas e cédulas brasileiras", "Cartazes com preços de produtos fictícios"],
      "steps": [
        "Apresentar réplicas de moedas e cédulas e revisar seus valores.",
        "Organizar um mercadinho simulado em sala, com produtos e preços fictícios.",
        "Pedir que os alunos, em duplas, façam compras usando as réplicas e calculem o troco.",
        "Propor situações de troca, como quantas moedas de 50 centavos equivalem a uma nota de 5 reais.",
        "Socializar as trocas realizadas, discutindo diferentes formas de compor o mesmo valor."
      ]
    },
    {
      "theme": "Quais são as chances? Explorando o acaso",
      "curriculumCode": "EF03MA25",
      "description": "Identificação, em eventos familiares aleatórios, de todos os resultados possíveis, estimando os que têm maiores ou menores chances de ocorrência.",
      "materials": ["Dado", "Caixa com bolinhas coloridas em quantidades diferentes"],
      "steps": [
        "Apresentar um dado e perguntar quais números podem sair ao jogá-lo.",
        "Realizar algumas jogadas, registrando os resultados obtidos.",
        "Mostrar uma caixa com bolinhas de cores diferentes em quantidades desiguais e perguntar qual cor tem mais chance de ser sorteada.",
        "Realizar sorteios para conferir as previsões da turma.",
        "Registrar no caderno os resultados possíveis e qual tinha mais ou menos chance."
      ]
    },
    {
      "theme": "Resolvendo problemas com tabelas e gráficos",
      "curriculumCode": "EF03MA26",
      "description": "Resolução de situações-problema cujos dados estão apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas.",
      "materials": ["Tabela de dupla entrada ou gráfico pronto com dados da turma"],
      "steps": [
        "Apresentar uma tabela de dupla entrada ou um gráfico com dados coletados anteriormente.",
        "Propor perguntas que exigam ler e comparar informações do gráfico ou tabela.",
        "Deixar os alunos resolverem as questões individualmente ou em duplas.",
        "Corrigir coletivamente, explicando como localizar a informação certa.",
        "Propor que os alunos criem uma pergunta nova sobre os mesmos dados para um colega responder."
      ]
    },
    {
      "theme": "Maior e menor frequência: interpretando gráficos",
      "curriculumCode": "EF03MA27",
      "description": "Leitura, interpretação e comparação de dados apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas, utilizando termos como maior e menor frequência.",
      "materials": ["Gráfico de barras ou colunas com dados da turma (ex.: esporte preferido)"],
      "steps": [
        "Apresentar um gráfico de barras com dados coletados da turma.",
        "Perguntar qual categoria tem maior e qual tem menor frequência.",
        "Pedir que comparem duas categorias e digam a diferença entre elas.",
        "Propor perguntas de interpretação mais complexas, somando categorias.",
        "Registrar no caderno as conclusões tiradas da leitura do gráfico."
      ]
    },
    {
      "theme": "Fazendo nossa própria pesquisa de sala",
      "curriculumCode": "EF03MA28",
      "description": "Realização de pesquisa envolvendo variáveis categóricas em um universo de até 50 elementos, organizando os dados coletados em listas, tabelas simples e gráficos de colunas simples.",
      "materials": ["Folha para anotação da pesquisa", "Papel quadriculado para o gráfico"],
      "steps": [
        "Escolher com a turma um tema de pesquisa, como matéria preferida.",
        "Definir as opções de resposta possíveis.",
        "Circular pela sala coletando a resposta de cada colega e anotando em uma lista.",
        "Organizar os dados coletados em uma tabela simples.",
        "Transformar a tabela em um gráfico de colunas no papel quadriculado.",
        "Apresentar o gráfico final para a turma, comentando o resultado da pesquisa."
      ]
    },
    {
      "theme": "Nossas estratégias pessoais para calcular",
      "curriculumCode": "EF03MA29*",
      "description": "Construção, utilização e desenvolvimento de estratégias diversas para o cálculo das quatro operações.",
      "materials": ["Problemas variados envolvendo as quatro operações", "Material manipulável de apoio"],
      "steps": [
        "Propor um problema que possa ser resolvido com mais de uma operação.",
        "Deixar os alunos resolverem do jeito que preferirem (desenho, material manipulável, conta armada).",
        "Compartilhar diferentes estratégias usadas por colegas diferentes para o mesmo problema.",
        "Discutir qual estratégia foi mais rápida ou mais fácil de entender.",
        "Propor um novo problema para os alunos aplicarem a estratégia que mais gostaram.",
        "Fechar com um registro no caderno da estratégia preferida de cada aluno."
      ]
    }
  ],
  ciencias: [
    {
      "theme": "Sons que vêm da vibração",
      "curriculumCode": "EF03CI01",
      "description": "Produção de diferentes sons a partir da vibração de objetos e identificação de variáveis (material de que são feitos, tamanho, forma) que influem nesse fenômeno.",
      "materials": ["Elásticos esticados em uma caixa", "Copos com diferentes quantidades de água", "Réguas"],
      "steps": [
        "Pedir que os alunos toquem um elástico esticado e observem o que sentem e ouvem.",
        "Repetir com elásticos de tamanhos ou tensões diferentes, comparando os sons.",
        "Bater de leve em copos com quantidades diferentes de água, comparando os sons produzidos.",
        "Discutir o que faz o som mudar (tamanho, material, tensão).",
        "Registrar no caderno uma conclusão sobre a relação entre vibração e som."
      ]
    },
    {
      "theme": "Cuidando dos ouvidos e dos olhos",
      "curriculumCode": "EF03CI03A",
      "description": "Identificação e discussão de hábitos individuais necessários para a manutenção da saúde auditiva e visual em termos de som e luz.",
      "materials": ["Imagens de situações de risco para audição e visão (som muito alto, tela muito perto)"],
      "steps": [
        "Mostrar imagens de situações que podem prejudicar a audição ou a visão.",
        "Perguntar quais hábitos ajudam a proteger os ouvidos e os olhos.",
        "Discutir em grupo outros cuidados do dia a dia.",
        "Construir coletivamente uma lista de hábitos saudáveis para os ouvidos e os olhos.",
        "Pedir que cada aluno escolha um hábito para praticar e contar em casa."
      ]
    },
    {
      "theme": "Ambientes que fazem mal para ver e ouvir",
      "curriculumCode": "EF03CI03B",
      "description": "Reconhecimento de condições ambientais prejudiciais à saúde auditiva e visual.",
      "materials": ["Imagens de ambientes barulhentos ou mal iluminados"],
      "steps": [
        "Apresentar imagens de ambientes muito barulhentos e de ambientes com pouca ou muita luz.",
        "Perguntar o que pode acontecer com quem fica exposto a esses ambientes por muito tempo.",
        "Discutir exemplos do cotidiano da turma (show muito alto, sala escura para ler).",
        "Propor que os alunos identifiquem, na escola, algum ambiente que poderia melhorar em som ou luz.",
        "Registrar as conclusões em um cartaz coletivo."
      ]
    },
    {
      "theme": "Como vivem os animais daqui e de outros lugares",
      "curriculumCode": "EF03CI04",
      "description": "Identificação de características sobre o modo de vida (hábitos alimentares, reprodução, locomoção, entre outros) dos animais do cotidiano, comparando-os aos de outros ambientes.",
      "materials": ["Imagens de animais do cotidiano e de outros ambientes (floresta, mar, deserto)"],
      "steps": [
        "Apresentar um animal comum na região dos alunos e discutir seus hábitos (o que come, como se locomove).",
        "Apresentar um animal de outro ambiente (ex.: peixe do mar, animal do deserto) e comparar seus hábitos.",
        "Organizar as informações em uma tabela comparativa.",
        "Em duplas, os alunos escolhem outro par de animais para comparar.",
        "Compartilhar as comparações feitas com a turma."
      ]
    },
    {
      "theme": "Como os animais mudam ao longo da vida",
      "curriculumCode": "EF03CI05",
      "description": "Identificação, comparação e comunicação das alterações de características que ocorrem desde o nascimento e em diferentes fases da vida dos animais, inclusive os seres humanos.",
      "materials": ["Imagens de um animal em diferentes fases da vida (filhote, jovem, adulto)"],
      "steps": [
        "Apresentar imagens de um animal em diferentes fases da vida.",
        "Perguntar o que muda de uma fase para outra (tamanho, aparência, comportamento).",
        "Comparar com as fases da vida humana (bebê, criança, adulto).",
        "Propor que os alunos tragam ou desenhem uma foto sua em bebê para comparar com o momento atual.",
        "Fechar com uma roda de conversa sobre as mudanças observadas."
      ]
    },
    {
      "theme": "Agrupando os animais pelas características do corpo",
      "curriculumCode": "EF03CI06",
      "description": "Comparação de alguns animais e organização de grupos com base em características observáveis (presença de penas, pelos, escamas, bico, garras, antenas, patas, etc.).",
      "materials": ["Imagens variadas de animais", "Cartolina para organizar os grupos"],
      "steps": [
        "Espalhar imagens de animais variados sobre a mesa.",
        "Pedir que os alunos observem características do corpo de cada um (penas, pelos, escamas, bico, garras).",
        "Organizar os animais em grupos conforme essas características.",
        "Discutir coletivamente os critérios usados por diferentes grupos.",
        "Registrar em um cartaz os grupos formados e suas características."
      ]
    },
    {
      "theme": "Como é a Terra: água, solo e seu formato",
      "curriculumCode": "EF03CI07",
      "description": "Identificação de características da Terra (formato geoide, presença de água, solo, etc.), com base na observação, manipulação e comparação de diferentes formas de representação do planeta, incluindo aspectos culturais de diferentes povos.",
      "materials": ["Globo terrestre", "Mapa-múndi", "Fotografia da Terra vista do espaço"],
      "steps": [
        "Apresentar um globo terrestre e perguntar o que os alunos observam sobre sua forma.",
        "Comparar o globo com um mapa e com uma fotografia da Terra vista do espaço.",
        "Identificar no globo as áreas de água e de solo.",
        "Conversar sobre como diferentes povos, ao longo da história, representaram a Terra.",
        "Registrar no caderno três características da Terra observadas."
      ]
    },
    {
      "theme": "O que vemos no céu de dia e de noite",
      "curriculumCode": "EF03CI08A",
      "description": "Observação e registro dos períodos diários (dia e/ou noite) em que o Sol, demais estrelas, Lua e planetas estão visíveis no céu.",
      "materials": ["Folha de registro com duas colunas (dia/noite)", "Lápis de cor"],
      "steps": [
        "Perguntar aos alunos o que costuma ser visto no céu de dia e o que é visto de noite.",
        "Organizar um cartaz dividido em duas colunas: céu de dia e céu de noite.",
        "Pedir que os alunos observem o céu em casa, com um adulto, e registrem o que viram.",
        "Compartilhar os registros na aula seguinte.",
        "Concluir coletivamente quais astros aparecem em cada período."
      ]
    },
    {
      "theme": "O céu contado por diferentes culturas",
      "curriculumCode": "EF03CI08B",
      "description": "Identificação e descrição de como os ciclos diários e os corpos celestes são representados em diferentes culturas, valorizando a construção do conhecimento científico ao longo da história humana.",
      "materials": ["Imagens ou relatos simples de histórias sobre o Sol, a Lua ou as estrelas de diferentes culturas"],
      "steps": [
        "Apresentar um relato simples de como um povo explicava o dia e a noite ou os astros no céu.",
        "Comparar com o que a ciência explica hoje sobre o mesmo fenômeno.",
        "Discutir que diferentes culturas, ao longo do tempo, observaram e explicaram o céu de formas diferentes.",
        "Propor que os alunos perguntem em casa se conhecem alguma história sobre o Sol, a Lua ou as estrelas.",
        "Compartilhar as histórias trazidas na aula seguinte."
      ]
    },
    {
      "theme": "Telescópios e lunetas: enxergando mais longe",
      "curriculumCode": "EF03CI08C",
      "description": "Reconhecimento de como os avanços tecnológicos (lunetas, telescópios, mapas, entre outros) possibilitam a compreensão científica sobre o céu.",
      "materials": ["Imagens de telescópios e lunetas", "Imagens do céu vistas a olho nu e por telescópio, para comparação"],
      "steps": [
        "Perguntar aos alunos como seria possível ver mais detalhes de algo muito distante, como a Lua.",
        "Apresentar imagens de lunetas e telescópios, explicando para que servem.",
        "Comparar uma imagem do céu vista a olho nu com uma vista por telescópio.",
        "Discutir como esses instrumentos ajudaram os cientistas a entender melhor o espaço.",
        "Registrar no caderno uma descoberta que só foi possível graças a esses instrumentos."
      ]
    }
  ],
  geografia: [
    {
      "theme": "Povos e comunidades tradicionais do Brasil",
      "curriculumCode": "EF03GE01",
      "description": "Identificação e comparação de aspectos culturais dos grupos sociais (povos indígenas, quilombolas, ribeirinhos, extrativistas, ciganos, entre outros) de seus lugares de vivência, seja na cidade, seja no campo.",
      "materials": ["Imagens de comunidades indígenas, quilombolas, ribeirinhas e ciganas"],
      "steps": [
        "Apresentar imagens de diferentes comunidades tradicionais brasileiras.",
        "Conversar sobre onde cada grupo costuma viver e como se relaciona com o lugar.",
        "Comparar aspectos culturais desses grupos com o modo de vida dos alunos.",
        "Registrar no caderno uma característica de cada grupo estudado.",
        "Reforçar o respeito à diversidade de modos de vida no Brasil."
      ]
    },
    {
      "theme": "Marcas de diferentes povos no nosso bairro",
      "curriculumCode": "EF03GE02",
      "description": "Identificação, em seus lugares de vivência, de marcas de contribuições culturais e econômicas de grupos sociais de diferentes origens.",
      "materials": ["Nenhum material obrigatório; opcionalmente fotos do bairro"],
      "steps": [
        "Perguntar se os alunos conhecem comidas, festas ou construções do bairro que vieram de outros povos ou lugares.",
        "Listar coletivamente essas marcas culturais e econômicas encontradas.",
        "Conversar sobre como diferentes grupos contribuíram para o bairro ou a cidade.",
        "Pedir que os alunos perguntem em casa sobre outras marcas culturais da família.",
        "Compartilhar as descobertas na aula seguinte."
      ]
    },
    {
      "theme": "Moradia, comida e roupa: modos de vida diferentes",
      "curriculumCode": "EF03GE03",
      "description": "Reconhecimento dos diferentes modos de vida de povos e comunidades tradicionais em distintos lugares, a partir de aspectos culturais (moradia, alimentação, vestuário, tradições, costumes, entre outros).",
      "materials": ["Imagens de moradias, alimentos e vestimentas de diferentes comunidades tradicionais"],
      "steps": [
        "Apresentar imagens de moradias, comidas e roupas de diferentes comunidades tradicionais.",
        "Comparar essas imagens com a moradia, comida e roupa do dia a dia dos alunos.",
        "Discutir por que essas diferenças existem (clima, região, tradição).",
        "Em duplas, os alunos escolhem uma comunidade e desenham um aspecto de seu modo de vida.",
        "Compartilhar os desenhos, explicando o que representam."
      ]
    },
    {
      "theme": "O que muda a paisagem: natureza ou seres humanos?",
      "curriculumCode": "EF03GE04",
      "description": "Reconhecimento do que são processos naturais e históricos, explicando como eles atuam na produção e na mudança das paisagens naturais e antrópicas nos lugares de vivência, comparando-os a outros lugares.",
      "materials": ["Imagens de paisagens transformadas por processos naturais (erosão, chuva) e humanos (construções)"],
      "steps": [
        "Apresentar uma imagem de paisagem alterada por um processo natural (chuva forte, erosão) e outra por ação humana (construção, desmatamento).",
        "Perguntar o que causou a mudança em cada imagem.",
        "Discutir a diferença entre processos naturais e processos causados por pessoas.",
        "Comparar com uma paisagem conhecida da turma que também mudou ao longo do tempo.",
        "Registrar no caderno um exemplo de mudança natural e um de mudança humana."
      ]
    },
    {
      "theme": "De onde vêm os alimentos e minerais que usamos",
      "curriculumCode": "EF03GE05",
      "description": "Identificação de alimentos, minerais e outros produtos cultivados e extraídos da natureza, comparando as atividades de trabalho (formais e informais e produção artística) em diferentes lugares.",
      "materials": ["Imagens de plantações, minas e produtos extraídos da natureza"],
      "steps": [
        "Apresentar imagens de alimentos e minerais sendo cultivados ou extraídos.",
        "Perguntar de onde vêm produtos do dia a dia, como o arroz, o sal e o ferro.",
        "Comparar diferentes formas de trabalho envolvidas (agricultura, mineração, artesanato).",
        "Em duplas, os alunos escolhem um produto e descobrem de onde ele vem.",
        "Compartilhar as descobertas com a turma."
      ]
    },
    {
      "theme": "Mapas planos e maquetes: duas formas de representar",
      "curriculumCode": "EF03GE06",
      "description": "Identificação e interpretação de imagens bidimensionais e tridimensionais em diferentes tipos de representação cartográfica.",
      "materials": ["Um mapa (2D) e uma maquete ou globo (3D) do mesmo lugar, se possível"],
      "steps": [
        "Apresentar um mapa (representação bidimensional) e uma maquete ou globo (representação tridimensional).",
        "Perguntar quais diferenças os alunos notam entre as duas formas de representar.",
        "Localizar um mesmo elemento (rua, praça) no mapa e na maquete.",
        "Propor que os alunos desenhem um mesmo lugar de forma plana e depois pensem como seria em 3D.",
        "Fechar comparando as duas representações feitas."
      ]
    },
    {
      "theme": "Criando a legenda do nosso mapa",
      "curriculumCode": "EF03GE07",
      "description": "Reconhecimento e elaboração de legendas com símbolos de diversos tipos de representações em diferentes escalas cartográficas.",
      "materials": ["Folha de papel", "Lápis de cor", "Modelo de legenda simples"],
      "steps": [
        "Explicar o que é uma legenda e por que os mapas usam símbolos.",
        "Combinar coletivamente símbolos para elementos comuns (escola, praça, rio).",
        "Pedir que os alunos desenhem um mapa simples do bairro ou trajeto até a escola.",
        "Orientar a criação de uma legenda com os símbolos usados no mapa.",
        "Trocar os mapas entre colegas para tentar 'ler' o mapa do outro usando a legenda."
      ]
    },
    {
      "theme": "Consumir gera lixo: pensando no que jogamos fora",
      "curriculumCode": "EF03GE08A",
      "description": "Associação entre consumo e produção de resíduos, reconhecendo que o consumo excessivo e o descarte inadequado acarretam problemas socioambientais em diferentes lugares.",
      "materials": ["Embalagens variadas (vazias e limpas)", "Cartaz para classificação"],
      "steps": [
        "Mostrar embalagens variadas e perguntar para onde vai o lixo depois do consumo.",
        "Discutir o que acontece quando consumimos e descartamos demais.",
        "Organizar um cartaz relacionando produtos consumidos ao lixo que geram.",
        "Conversar sobre problemas causados pelo descarte inadequado (poluição, entupimento de bueiros).",
        "Registrar no caderno uma atitude para reduzir o consumo excessivo."
      ]
    },
    {
      "theme": "Reduzir, reutilizar e reciclar: nosso plano de ação",
      "curriculumCode": "EF03GE08B",
      "description": "Proposição de ações para o consumo consciente e responsável, considerando a ampliação de hábitos, atitudes e comportamentos de redução, reuso e reciclagem de materiais consumidos em casa, na escola e na comunidade.",
      "materials": ["Cartolina", "Canetinhas ou lápis de cor"],
      "steps": [
        "Retomar os problemas do consumo excessivo discutidos na aula anterior.",
        "Apresentar as ideias de reduzir, reutilizar e reciclar.",
        "Formar grupos e propor que cada um pense em uma ação de consumo consciente para casa ou escola.",
        "Cada grupo desenha ou escreve sua proposta em uma cartolina.",
        "Combinar com a turma a aplicação de uma das ideias durante a semana."
      ]
    },
    {
      "theme": "Para que usamos a água todos os dias",
      "curriculumCode": "EF03GE09",
      "description": "Investigação dos usos dos recursos naturais, com destaque para os usos da água em atividades cotidianas (alimentação, higiene, cultivo de plantas, entre outros), discutindo os problemas socioambientais provocados por esses usos.",
      "materials": ["Imagens de diferentes usos da água (beber, higiene, cultivo de plantas)"],
      "steps": [
        "Perguntar aos alunos para que usam água ao longo do dia.",
        "Listar coletivamente os diferentes usos da água no cotidiano.",
        "Discutir o que pode acontecer se a água for usada sem cuidado.",
        "Propor que os alunos pensem em uma forma de economizar água em cada uso listado.",
        "Registrar no caderno os usos da água e uma ideia de economia para cada um."
      ]
    },
    {
      "theme": "A água na agricultura, na cidade e na energia",
      "curriculumCode": "EF03GE10A",
      "description": "Reconhecimento da importância da água para múltiplos usos, em especial para a agricultura, a pecuária, o abastecimento urbano e a geração de energia, discutindo os impactos socioambientais dessa utilização.",
      "materials": ["Imagens de plantações irrigadas, represas e torneiras de abastecimento urbano"],
      "steps": [
        "Apresentar imagens de diferentes usos da água em larga escala (irrigação, geração de energia, abastecimento das cidades).",
        "Discutir por que a água é importante para cada uma dessas atividades.",
        "Conversar sobre o que acontece quando falta água para essas atividades.",
        "Comparar o uso da água na cidade e no campo.",
        "Registrar no caderno uma conclusão sobre a importância da água nessas atividades."
      ]
    },
    {
      "theme": "Quem cuida dos nossos rios e nascentes?",
      "curriculumCode": "EF03GE10B",
      "description": "Identificação de grupos e/ou associações que atuam na preservação e conservação de nascentes, riachos, córregos, rios e matas ciliares, propondo ações de intervenção que garantam acesso à água potável e de qualidade.",
      "materials": ["Imagens de um rio ou nascente preservada e outra poluída"],
      "steps": [
        "Comparar imagens de um rio preservado e de um rio poluído.",
        "Perguntar o que pode ter acontecido para que um deles ficasse poluído.",
        "Conversar sobre grupos ou associações que cuidam de rios e nascentes na região.",
        "Propor coletivamente uma ação simples que a turma poderia fazer para ajudar a preservar a água.",
        "Registrar a ação combinada em um cartaz da sala."
      ]
    },
    {
      "theme": "Erosão e deslizamento: impactos das atividades humanas",
      "curriculumCode": "EF03GE11",
      "description": "Identificação e comparação dos diferentes impactos socioambientais (erosão, deslizamento, escoamento superficial, entre outros) que podem ocorrer em áreas urbanas e rurais, a partir do desenvolvimento de algumas atividades econômicas.",
      "materials": ["Imagens de erosão, deslizamento e escoamento superficial em áreas urbanas e rurais"],
      "steps": [
        "Apresentar imagens de erosão em uma área rural e de deslizamento em uma área urbana.",
        "Perguntar o que pode ter causado cada um desses problemas.",
        "Relacionar os impactos a atividades econômicas, como desmatamento ou construções sem planejamento.",
        "Comparar os impactos observados em áreas urbanas e rurais.",
        "Registrar no caderno um impacto socioambiental observado no bairro dos alunos."
      ]
    },
    {
      "theme": "Quem ajuda a cuidar do consumo na nossa cidade?",
      "curriculumCode": "EF03GE12*",
      "description": "Identificação de grupos sociais e instituições locais e/ou no entorno que apoiam o desenvolvimento de ações e/ou projetos com foco no consumo consciente e responsável.",
      "materials": ["Nenhum material obrigatório; opcionalmente panfletos de campanhas locais"],
      "steps": [
        "Perguntar se os alunos conhecem alguma campanha ou instituição que incentiva o consumo consciente (coleta seletiva, hortas comunitárias).",
        "Apresentar exemplos de grupos que atuam nessa área, se conhecidos na região.",
        "Discutir como essas instituições ajudam a comunidade.",
        "Propor que os alunos pesquisem em casa se existe alguma ação desse tipo perto de onde moram.",
        "Compartilhar as descobertas na aula seguinte."
      ]
    }
  ],
  historia: [
    {
      "theme": "Quem forma a nossa cidade",
      "curriculumCode": "EF03HI01A",
      "description": "Identificação e respeito aos grupos populacionais que formam a cidade, o município e a região, as relações estabelecidas entre eles e os eventos que marcam a formação da cidade, como fenômenos migratórios, desmatamentos e o estabelecimento de grandes empresas.",
      "materials": ["Nenhum material obrigatório; opcionalmente fotos ou mapa da cidade"],
      "steps": [
        "Perguntar aos alunos quais grupos de pessoas eles conhecem que vivem na cidade.",
        "Conversar sobre eventos que marcaram a formação da cidade (chegada de migrantes, construção de fábricas).",
        "Discutir a importância de respeitar os diferentes grupos que formam a cidade.",
        "Pedir que os alunos perguntem em casa sobre a história de formação do bairro.",
        "Compartilhar as descobertas na aula seguinte."
      ]
    },
    {
      "theme": "Por que as pessoas migram?",
      "curriculumCode": "EF03HI01B",
      "description": "Identificação das causas dos fenômenos migratórios e de seu impacto na vida das pessoas e nas cidades.",
      "materials": ["Nenhum material obrigatório; opcionalmente relatos de familiares migrantes"],
      "steps": [
        "Perguntar se os alunos conhecem alguém que se mudou de cidade ou de país.",
        "Discutir possíveis motivos para migrar (trabalho, estudo, fugir de problemas).",
        "Conversar sobre como a migração pode mudar a vida das pessoas e das cidades.",
        "Propor que os alunos perguntem em casa se algum familiar migrou e por quê.",
        "Compartilhar as histórias trazidas pela turma."
      ]
    },
    {
      "theme": "Pesquisando a história da nossa cidade",
      "curriculumCode": "EF03HI02",
      "description": "Pesquisa, seleção, por meio da consulta a fontes de diferentes naturezas, e registro dos acontecimentos ocorridos ao longo do tempo na cidade ou região em que vive.",
      "materials": ["Fontes simples de pesquisa (livros, fotos antigas, relatos de familiares)"],
      "steps": [
        "Explicar que a história de uma cidade pode ser conhecida por meio de fotos, livros e relatos de pessoas mais velhas.",
        "Propor que os alunos pesquisem, em casa ou na biblioteca da escola, um acontecimento importante da cidade.",
        "Organizar os achados da turma em ordem cronológica na lousa.",
        "Discutir como diferentes fontes contam a história de formas diferentes.",
        "Registrar no caderno o acontecimento pesquisado por cada aluno."
      ]
    },
    {
      "theme": "Mulheres que fizeram história na nossa região",
      "curriculumCode": "EF03HI13*",
      "description": "Reconhecimento de histórias de mulheres protagonistas do município, das regiões e dos demais lugares de vivência, analisando o papel desempenhado por elas.",
      "materials": ["Relato ou biografia curta de uma mulher importante da região"],
      "steps": [
        "Apresentar a história de uma mulher que teve papel importante no município ou na região.",
        "Perguntar o que essa mulher fez e por que é lembrada.",
        "Discutir a importância de conhecer histórias de mulheres protagonistas.",
        "Propor que os alunos perguntem em casa sobre uma mulher importante para a família ou comunidade.",
        "Compartilhar as histórias trazidas na aula seguinte."
      ]
    },
    {
      "theme": "Um mesmo fato, pontos de vista diferentes",
      "curriculumCode": "EF03HI03",
      "description": "Identificação e comparação de pontos de vista em relação a eventos significativos do local em que vive, considerando aspectos relacionados a condições sociais e à presença de diferentes grupos sociais e culturais, com destaque para as culturas africanas, a de povos originários e de migrantes.",
      "materials": ["Relato de um evento local contado por perspectivas diferentes"],
      "steps": [
        "Apresentar um evento importante da cidade contado de duas formas ou por dois grupos diferentes.",
        "Perguntar o que muda de um relato para o outro.",
        "Discutir a importância de ouvir diferentes pontos de vista, incluindo os de povos originários, culturas africanas e migrantes.",
        "Em duplas, os alunos imaginam como duas pessoas diferentes veriam um mesmo evento da escola.",
        "Compartilhar os pontos de vista criados com a turma."
      ]
    },
    {
      "theme": "Os patrimônios da nossa cidade",
      "curriculumCode": "EF03HI04A",
      "description": "Pesquisa e identificação dos patrimônios históricos e culturais de sua cidade ou região, discutindo as razões culturais, sociais e políticas para que assim sejam considerados.",
      "materials": ["Imagens de patrimônios históricos ou culturais da cidade ou região"],
      "steps": [
        "Apresentar imagens de construções ou locais considerados patrimônio histórico da cidade.",
        "Perguntar por que esses lugares são importantes de serem preservados.",
        "Discutir razões culturais, sociais e políticas para a preservação de cada um.",
        "Propor que os alunos pesquisem outro patrimônio da cidade que conheçam.",
        "Compartilhar as pesquisas com a turma."
      ]
    },
    {
      "theme": "Por que preservar o que é antigo",
      "curriculumCode": "EF03HI04B",
      "description": "Reconhecimento da importância da preservação dos patrimônios históricos para a conservação da identidade histórica do município.",
      "materials": ["Imagens de um patrimônio bem preservado e outro abandonado"],
      "steps": [
        "Comparar imagens de um patrimônio histórico bem cuidado e outro em más condições.",
        "Perguntar o que pode acontecer se os patrimônios não forem preservados.",
        "Discutir como os patrimônios ajudam a lembrar a história e a identidade do município.",
        "Propor que a turma pense em uma atitude para ajudar a preservar um espaço da escola ou do bairro.",
        "Registrar a atitude combinada em um cartaz."
      ]
    },
    {
      "theme": "Os marcos históricos do nosso lugar",
      "curriculumCode": "EF03HI05",
      "description": "Identificação dos marcos históricos do lugar em que vive e compreensão de seus significados.",
      "materials": ["Imagens de monumentos, praças ou prédios históricos da cidade"],
      "steps": [
        "Apresentar imagens de marcos históricos conhecidos da cidade (monumentos, praças, prédios antigos).",
        "Perguntar se os alunos já visitaram ou passaram por algum desses lugares.",
        "Explicar o significado histórico de cada marco apresentado.",
        "Propor que os alunos desenhem um marco histórico que conhecem.",
        "Compartilhar os desenhos, explicando o significado de cada marco escolhido."
      ]
    },
    {
      "theme": "Por que as ruas têm esses nomes?",
      "curriculumCode": "EF03HI06",
      "description": "Identificação dos registros de memória na cidade (nomes de ruas, monumentos, edifícios etc.), discutindo os critérios que, ao longo do tempo, explicam a escolha e/ou alteração desses nomes.",
      "materials": ["Lista de nomes de ruas ou praças conhecidas pela turma"],
      "steps": [
        "Listar na lousa nomes de ruas ou praças conhecidas pelos alunos.",
        "Perguntar se sabem por que essas ruas têm esses nomes.",
        "Explicar que muitos nomes homenageiam pessoas ou fatos importantes da história local.",
        "Propor que os alunos pesquisem em casa a origem do nome de uma rua do bairro.",
        "Compartilhar as descobertas na aula seguinte."
      ]
    },
    {
      "theme": "Diferentes comunidades da nossa cidade",
      "curriculumCode": "EF03HI07",
      "description": "Identificação de semelhanças e diferenças existentes entre comunidades de sua cidade ou região, descrevendo o papel dos diferentes grupos sociais que as formam, respeitando e valorizando a diversidade.",
      "materials": ["Imagens de diferentes bairros ou comunidades da cidade ou região"],
      "steps": [
        "Apresentar imagens de diferentes comunidades ou bairros da cidade.",
        "Perguntar o que os alunos notam de parecido e de diferente entre eles.",
        "Discutir o papel de diferentes grupos sociais na formação dessas comunidades.",
        "Propor que os alunos comparem seu bairro com outro conhecido pela turma.",
        "Reforçar a importância do respeito à diversidade entre as comunidades."
      ]
    },
    {
      "theme": "Como era e como é viver aqui",
      "curriculumCode": "EF03HI08",
      "description": "Identificação e registro dos modos de vida na cidade e no campo no presente, comparando-os com os do passado da sua localidade.",
      "materials": ["Fotos antigas e atuais da cidade ou região, se disponíveis"],
      "steps": [
        "Mostrar fotos antigas e atuais de um mesmo lugar da cidade ou região.",
        "Perguntar o que mudou e o que permaneceu no modo de vida das pessoas.",
        "Comparar como era viver na cidade e no campo antigamente e como é hoje.",
        "Pedir que os alunos perguntem em casa como era a vida de seus avós na região.",
        "Compartilhar as descobertas em roda de conversa."
      ]
    },
    {
      "theme": "Os serviços públicos da nossa cidade",
      "curriculumCode": "EF03HI09A",
      "description": "Identificação dos espaços públicos e serviços essenciais na cidade (tais quais escolas, hospitais, câmara dos vereadores, prefeitura, estações de tratamento e distribuição de água e esgoto), bem como suas respectivas funções.",
      "materials": ["Imagens de escola, hospital, prefeitura e estação de tratamento de água"],
      "steps": [
        "Apresentar imagens de diferentes espaços públicos da cidade.",
        "Perguntar para que serve cada um desses espaços.",
        "Discutir por que esses serviços são chamados de essenciais.",
        "Propor que os alunos identifiquem outros espaços públicos que conhecem no bairro.",
        "Registrar em uma lista coletiva os espaços públicos e suas funções."
      ]
    },
    {
      "theme": "O que acontece quando falta um serviço público",
      "curriculumCode": "EF03HI09B",
      "description": "Análise dos problemas decorrentes da falta de acesso ou da completa ausência dos serviços públicos na cidade.",
      "materials": ["Situações-problema sobre falta de serviços públicos (falta de água, hospital distante)"],
      "steps": [
        "Apresentar uma situação em que falta algum serviço público essencial.",
        "Perguntar o que pode acontecer com as pessoas nessa situação.",
        "Discutir em grupo outros problemas que a falta de serviços públicos pode causar.",
        "Propor que os alunos pensem em uma solução para um desses problemas.",
        "Compartilhar as soluções propostas com a turma."
      ]
    },
    {
      "theme": "Espaço de casa, espaço público e área de proteção",
      "curriculumCode": "EF03HI10",
      "description": "Identificação das diferenças entre o espaço doméstico, os espaços públicos e as áreas de conservação ambiental, compreendendo a importância dessa distinção.",
      "materials": ["Imagens de uma casa, uma praça e uma área de conservação ambiental"],
      "steps": [
        "Apresentar imagens de uma casa, uma praça pública e uma área de conservação ambiental.",
        "Perguntar quem pode usar cada um desses espaços e como.",
        "Discutir por que existem regras diferentes para cada tipo de espaço.",
        "Propor que os alunos classifiquem outros lugares conhecidos nessas três categorias.",
        "Registrar no caderno um exemplo de cada tipo de espaço."
      ]
    },
    {
      "theme": "Trabalho na cidade e no campo: o papel da tecnologia",
      "curriculumCode": "EF03HI11",
      "description": "Identificação de diferenças entre formas de trabalho realizadas na cidade e no campo, considerando também o uso da tecnologia nesses diferentes contextos.",
      "materials": ["Imagens de trabalhos na cidade e no campo, com e sem uso de tecnologia"],
      "steps": [
        "Apresentar imagens de trabalhos realizados na cidade e no campo.",
        "Perguntar quais ferramentas ou tecnologias aparecem em cada tipo de trabalho.",
        "Comparar como a tecnologia mudou algumas formas de trabalho ao longo do tempo.",
        "Em duplas, os alunos escolhem um trabalho e descrevem como era feito antes e como é feito hoje.",
        "Compartilhar as comparações com a turma."
      ]
    },
    {
      "theme": "Trabalho e lazer: o que mudou, o que ficou igual",
      "curriculumCode": "EF03HI12",
      "description": "Comparação das relações de trabalho e lazer do presente com as de outros tempos e espaços, analisando mudanças e permanências.",
      "materials": ["Relatos ou fotos de trabalho e lazer de gerações passadas"],
      "steps": [
        "Perguntar aos alunos como seus avós ou pessoas mais velhas trabalhavam e se divertiam antigamente.",
        "Comparar com o trabalho e o lazer das famílias hoje.",
        "Discutir o que mudou e o que permaneceu igual ao longo do tempo.",
        "Propor que os alunos registrem uma mudança e uma permanência percebidas.",
        "Compartilhar os registros em roda de conversa."
      ]
    }
  ]
};
