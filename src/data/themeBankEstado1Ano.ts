// Banco de temas do 1º ano — rede ESTADUAL (Currículo Paulista, SEDUC-SP/EFAPE), no mesmo formato
// de src/data/themeBank.ts (que cobre a rede municipal) e de src/data/themeBankEstado2Ano.ts.
// Códigos de habilidade (curriculumCode) pesquisados diretamente nos documentos oficiais do
// Currículo Paulista para Anos Iniciais (efape.educacao.sp.gov.br/curriculopaulista, "Habilidades
// Essenciais — Anos Iniciais", matriz por bimestre de Língua Portuguesa, Matemática, Ciências,
// Geografia e História) — não são estimados nem convertidos de outro currículo. Alguns códigos
// aparecem combinados (ex.: "EF01LP10A/EF01LP10B") quando o documento oficial apresenta uma
// habilidade essencial desdobrada em duas ou três partes que formam uma mesma atividade de aula
// (tipicamente planejar/produzir + revisar/editar de um mesmo texto); partes com foco de conteúdo
// claramente diferente (ex. EF01LP26A x EF01LP26B) foram mantidas como entradas separadas.
// Ciências do 1º ano tem menos habilidades essenciais que as demais disciplinas porque é assim
// no documento oficial (apenas 6 códigos-base, alguns desdobrados em A/B) — não foi omitido nada.

import { BankEntry, OwnSubject } from "@/types/plano";

export const ESTADO_1_ANO_THEME_BANK: Record<OwnSubject, BankEntry[]> = {
  "lingua-portuguesa": [
    {
      theme: "Como lemos: da esquerda para a direita, de cima para baixo",
      curriculumCode: "EF01LP01",
      description:
        "Reconhecimento de que textos de diferentes gêneros são lidos e escritos da esquerda para a direita e de cima para baixo na página.",
      materials: ["Cartaz com um texto curto e letra grande", "Livro infantil"],
      steps: [
        "Mostrar um cartaz com um texto curto e pedir que a turma observe por onde o professor começa a ler.",
        "Ler em voz alta passando o dedo sobre as palavras, da esquerda para a direita e de cima para baixo.",
        "Perguntar aos alunos para onde o dedo se move quando termina uma linha.",
        "Entregar um livro infantil para cada dupla e pedir que apontem, na primeira página, por onde a leitura começa.",
        "Propor que cada aluno 'leia com o dedinho' um texto curto escolhido pelo professor, acompanhando a direção correta.",
      ],
    },
    {
      theme: "Escrevendo do meu jeito: primeiras tentativas de escrita",
      curriculumCode: "EF01LP02B",
      description:
        "Escrita de textos de próprio punho ou ditados por um colega ou pelo professor, utilizando a escrita alfabética, ainda que com hipóteses não convencionais.",
      materials: ["Caderno", "Lápis"],
      steps: [
        "Escolher uma palavra ou frase curta conhecida da turma (nome de um colega, título de uma história).",
        "Ditar a palavra ou frase devagar, destacando os sons.",
        "Pedir que cada aluno escreva do seu jeito, usando as letras que já conhece.",
        "Circular pela sala observando as tentativas de escrita sem corrigir imediatamente.",
        "Escrever a palavra certa na lousa e comparar com as tentativas dos alunos, valorizando os acertos.",
        "Repetir a atividade com uma segunda palavra, incentivando os alunos a usar o que aprenderam.",
      ],
    },
    {
      theme: "Comparando o jeito que eu escrevo com a escrita certa",
      curriculumCode: "EF01LP03",
      description:
        "Comparação de escritas convencionais e não convencionais das palavras, observando semelhanças e diferenças.",
      materials: ["Cartões com palavras escritas pelos alunos", "Cartões com a grafia correta das mesmas palavras"],
      steps: [
        "Pedir que os alunos escrevam, do jeito deles, uma palavra ditada pelo professor.",
        "Mostrar a grafia correta da mesma palavra em um cartão.",
        "Comparar as duas escritas, perguntando o que é parecido e o que é diferente.",
        "Repetir com outras 2 ou 3 palavras.",
        "Fechar perguntando o que os alunos aprenderam sobre a escrita das palavras.",
      ],
    },
    {
      theme: "Letras ou desenhos? Reconhecendo o alfabeto",
      curriculumCode: "EF01LP04",
      description: "Distinção das letras do alfabeto de outros sinais gráficos, como números e símbolos.",
      materials: ["Cartaz com letras, números e símbolos misturados"],
      steps: [
        "Mostrar um cartaz com letras, números e símbolos (como o sol, uma estrela) misturados.",
        "Perguntar quais desses sinais são letras.",
        "Pedir que os alunos circulem apenas as letras no cartaz.",
        "Corrigir coletivamente, explicando por que números e símbolos não são letras.",
        "Propor que cada aluno procure e circule letras em uma página de jornal ou revista.",
      ],
    },
    {
      theme: "Descobrindo como funciona a escrita alfabética",
      curriculumCode: "EF01LP05",
      description: "Compreensão de que a escrita alfabética representa os sons da fala por meio de letras.",
      materials: ["Cartões com sílabas", "Lousa"],
      steps: [
        "Falar uma palavra bem devagar, separando os sons (ex.: b-o-l-a).",
        "Perguntar quantos 'pedacinhos de som' os alunos ouvem.",
        "Mostrar como cada som pode ser representado por uma letra na lousa.",
        "Repetir com outras palavras, formando a palavra com cartões de letras.",
        "Propor que, em duplas, os alunos montem uma palavra simples com cartões de letras.",
      ],
    },
    {
      theme: "Separando as palavras em pedacinhos de som",
      curriculumCode: "EF01LP06",
      description: "Segmentação oral das palavras em sílabas.",
      materials: ["Lista de palavras simples"],
      steps: [
        "Falar uma palavra batendo palmas em cada sílaba (ex.: ba-na-na).",
        "Pedir que os alunos repitam batendo palmas junto.",
        "Propor que cada aluno fale seu nome batendo palmas nas sílabas.",
        "Repetir a atividade com nomes de objetos da sala.",
        "Fechar contando, com a turma, quantas sílabas tem cada palavra trabalhada.",
      ],
    },
    {
      theme: "Sons que viram letras: entendendo a escrita alfabética",
      curriculumCode: "EF01LP07",
      description:
        "Compreensão das notações do sistema de escrita alfabética, relacionando segmentos sonoros e letras.",
      materials: ["Cartões com letras", "Lousa"],
      steps: [
        "Escolher uma palavra curta e falar devagar, destacando cada som.",
        "Escrever a palavra na lousa enquanto fala, mostrando a letra de cada som.",
        "Pedir que os alunos apontem qual letra corresponde a cada som ouvido.",
        "Propor uma nova palavra para os alunos tentarem escrever sozinhos, usando cartões de letras.",
        "Corrigir coletivamente, comparando os sons com as letras escolhidas.",
      ],
    },
    {
      theme: "Do som para o papel: escrevendo o que ouço",
      curriculumCode: "EF01LP08",
      description: "Relação entre os elementos sonoros das palavras e sua representação escrita.",
      materials: ["Imagens de fácil nomeação", "Caderno"],
      steps: [
        "Mostrar uma imagem (ex.: gato) e pedir que os alunos falem o nome em voz alta, devagar.",
        "Perguntar qual letra representa o primeiro som ouvido.",
        "Escrever a palavra na lousa, letra por letra, junto com a turma.",
        "Repetir a atividade com outras 2 imagens.",
        "Propor que os alunos desenhem e escrevam, do seu jeito, o nome de um objeto escolhido.",
      ],
    },
    {
      theme: "Palavras que rimam e palavras parecidas",
      curriculumCode: "EF01LP09",
      description:
        "Comparação de palavras identificando semelhanças e diferenças entre seus sons e suas partes (aliterações, rimas, entre outras).",
      materials: ["Cartões com pares de palavras que rimam", "Lousa"],
      steps: [
        "Ler em voz alta pares de palavras que rimam (ex.: gato/rato).",
        "Perguntar o que os alunos notam de parecido no som das palavras.",
        "Propor um jogo: o professor fala uma palavra e os alunos tentam pensar em outra que rime.",
        "Trabalhar também palavras que começam com o mesmo som (aliteração), como 'sapo, sopa, sino'.",
        "Fechar com os alunos criando, em duplas, um novo par de palavras que rimam.",
      ],
    },
    {
      theme: "Conhecendo e recitando o alfabeto",
      curriculumCode: "EF01LP10A/EF01LP10B",
      description: "Nomeação das letras do alfabeto e recitação das letras do alfabeto sequencialmente.",
      materials: ["Cartaz do alfabeto", "Música do alfabeto (opcional)"],
      steps: [
        "Apresentar o cartaz do alfabeto completo, apontando cada letra.",
        "Pedir que os alunos nomeiem algumas letras apontadas aleatoriamente.",
        "Cantar ou recitar o alfabeto em ordem, todos juntos.",
        "Repetir a recitação em duplas, ajudando quem tiver mais dificuldade.",
        "Propor um jogo: o professor mostra uma letra e a turma diz seu nome rapidamente.",
      ],
    },
    {
      theme: "Letra de forma e letra cursiva: conhecendo os tipos de letra",
      curriculumCode: "EF01LP11",
      description: "Conhecimento de diferentes tipos de letras: forma maiúscula e minúscula e letra cursiva.",
      materials: ["Cartaz com a mesma palavra escrita em forma maiúscula, minúscula e cursiva"],
      steps: [
        "Mostrar a mesma palavra escrita nos três tipos de letra: forma maiúscula, forma minúscula e cursiva.",
        "Perguntar o que os alunos observam de diferente entre elas.",
        "Pedir que apontem onde cada tipo de letra aparece em livros e cartazes da sala.",
        "Propor que cada aluno escreva seu nome em letra de forma maiúscula.",
        "Mostrar como seria o mesmo nome em letra cursiva, sem cobrar que escrevam ainda.",
      ],
    },
    {
      theme: "Separando as palavras na escrita",
      curriculumCode: "EF01LP12A/EF01LP12B",
      description:
        "Reconhecimento da separação das palavras por espaços em branco e segmentação de palavras, ainda que não convencionalmente, na produção escrita.",
      materials: ["Frase escrita sem espaços entre as palavras", "Lousa"],
      steps: [
        "Mostrar uma frase curta escrita sem espaços entre as palavras.",
        "Perguntar aos alunos se é fácil entender o que está escrito.",
        "Reescrever a frase coletivamente, separando as palavras com espaços.",
        "Propor que os alunos, em duplas, tentem separar uma nova frase sem espaços.",
        "Fechar com um ditado curto em que os alunos precisam lembrar de deixar espaço entre as palavras.",
      ],
    },
    {
      theme: "Começo, meio e fim: comparando pedaços das palavras",
      curriculumCode: "EF01LP13",
      description: "Comparação do som e da grafia de diferentes partes da palavra (começo, meio e fim).",
      materials: ["Cartões com palavras", "Lousa"],
      steps: [
        "Escolher palavras que começam com o mesmo som (ex.: sapo, saco) e escrevê-las na lousa.",
        "Perguntar o que é igual no começo das palavras.",
        "Repetir a atividade observando palavras que terminam parecido.",
        "Propor que os alunos, em duplas, encontrem outra palavra que comece ou termine igual a uma dada.",
        "Registrar no caderno um exemplo de cada tipo encontrado pela turma.",
      ],
    },
    {
      theme: "Ponto, interrogação e exclamação: conhecendo a pontuação",
      curriculumCode: "EF01LP14A/EF01LP14B",
      description:
        "Identificação de sinais de pontuação (ponto final, interrogação, exclamação) e sinais gráficos, e percepção da entonação que eles indicam na leitura.",
      materials: ["Cartaz com frases usando diferentes sinais de pontuação"],
      steps: [
        "Mostrar frases com ponto final, de interrogação e de exclamação.",
        "Ler cada frase em voz alta, mudando a entonação conforme o sinal.",
        "Pedir que os alunos identifiquem qual sinal aparece em cada frase.",
        "Propor que a turma repita a leitura das frases, imitando a entonação do professor.",
        "Fechar com os alunos escolhendo o sinal certo para completar frases simples na lousa.",
      ],
    },
    {
      theme: "Palavras parecidas e palavras opostas",
      curriculumCode: "EF01LP15",
      description:
        "Identificação em textos de palavras que apresentam sentido próximo (sinonímia) e/ou contrário (antonímia).",
      materials: ["Cartões com pares de palavras sinônimas e antônimas"],
      steps: [
        "Apresentar um par de palavras parecidas (feliz/contente) e perguntar o que têm em comum.",
        "Apresentar um par de palavras opostas (grande/pequeno) e perguntar a diferença.",
        "Propor que os alunos, em duplas, separem cartões em dois grupos: parecidas e opostas.",
        "Corrigir coletivamente, discutindo os casos de dúvida.",
        "Fechar com uma frase simples em que os alunos trocam uma palavra por seu sinônimo ou antônimo.",
      ],
    },
    {
      theme: "Lendo quadrinhas, parlendas e cantigas com a turma",
      curriculumCode: "EF01LP16",
      description:
        "Leitura e compreensão, em colaboração com os colegas e com a ajuda do professor, de quadrinhas, parlendas, trava-línguas, cantigas, entre outros textos do campo da vida cotidiana.",
      materials: ["Quadrinha ou parlenda em cartaz"],
      steps: [
        "Apresentar a quadrinha ou parlenda escrita em cartaz.",
        "Ler em voz alta, batendo palmas no ritmo.",
        "Pedir que os alunos leiam junto com o professor, em coro.",
        "Perguntar sobre o tema do texto e o que rima nele.",
        "Propor que os alunos, em duplas, apontem as rimas encontradas no texto.",
      ],
    },
    {
      theme: "Fazendo listas, avisos e convites da nossa sala",
      curriculumCode: "EF01LP17",
      description:
        "Produção, em colaboração com colegas e com ajuda do professor, de listas, avisos, convites, receitas, instruções de montagem, legendas para álbuns, fotos ou ilustrações, entre outros textos do campo da vida cotidiana.",
      materials: ["Papel", "Lápis ou canetinha"],
      steps: [
        "Escolher com a turma um texto para produzir (uma lista de materiais, um convite para um evento da escola).",
        "Conversar sobre o que não pode faltar nesse tipo de texto.",
        "Escrever coletivamente um modelo na lousa, com a ajuda de todos.",
        "Cada aluno ou dupla produz sua própria versão, copiando e adaptando o modelo.",
        "Expor os textos produzidos no mural da sala.",
      ],
    },
    {
      theme: "Criando nossas próprias cantigas e parlendas",
      curriculumCode: "EF01LP18",
      description:
        "Produção, em colaboração com colegas e com ajuda do professor, de cantigas, quadrinhas, parlendas, trava-línguas, entre outros textos do campo da vida cotidiana.",
      materials: ["Cantiga ou parlenda conhecida como modelo", "Papel"],
      steps: [
        "Relembrar uma cantiga ou parlenda conhecida pela turma.",
        "Identificar coletivamente as partes que rimam.",
        "Propor que a turma troque uma palavra da cantiga por outra que rime, criando uma versão nova.",
        "Registrar a nova versão na lousa com a ajuda do professor.",
        "Cantar ou recitar juntos a versão criada pela turma.",
      ],
    },
    {
      theme: "Recitando parlendas e trava-línguas com entonação",
      curriculumCode: "EF01LP19",
      description:
        "Recitação de parlendas, quadrinhas, trava-línguas, entre outros textos, observando a entonação e as rimas.",
      materials: ["Parlenda ou trava-língua impressa em cartaz"],
      steps: [
        "Apresentar uma parlenda ou trava-língua nova para a turma.",
        "Ler em voz alta devagar, destacando o ritmo e as rimas.",
        "Pedir que os alunos repitam junto, aumentando aos poucos a velocidade.",
        "Dividir a turma em pequenos grupos para praticar a recitação.",
        "Convidar alguns grupos a recitar para os colegas, com entonação.",
      ],
    },
    {
      theme: "Reconhecendo a estrutura de listas, avisos e receitas",
      curriculumCode: "EF01LP20",
      description:
        "Identificação e manutenção da estrutura composicional específica de gêneros como listas, avisos, convites, receitas, instruções de montagem, legendas, entre outros textos do campo da vida cotidiana.",
      materials: ["Exemplos de lista, aviso e receita"],
      steps: [
        "Apresentar um exemplo de lista, um de aviso e um de receita, um de cada vez.",
        "Perguntar o que cada texto tem e para que serve.",
        "Comparar as partes fixas de cada tipo de texto (ex.: receita tem ingredientes e modo de fazer).",
        "Em duplas, os alunos identificam a qual tipo pertence um novo texto apresentado.",
        "Fechar registrando no caderno, com desenho, uma característica de cada gênero estudado.",
      ],
    },
    {
      theme: "Criando as regras da nossa turma",
      curriculumCode: "EF01LP21A/EF01LP21B",
      description:
        "Planejamento, produção, revisão e edição, em colaboração com os colegas e com ajuda do professor, de listas de regras e regulamentos que organizam a vida na comunidade escolar.",
      materials: ["Cartolina", "Canetinhas"],
      steps: [
        "Conversar com a turma sobre regras importantes para a convivência na sala de aula.",
        "Listar coletivamente as regras sugeridas pelos alunos.",
        "Escrever as regras escolhidas em uma cartolina, com a ajuda do professor.",
        "Reler o cartaz com a turma, revisando se está claro e completo.",
        "Combinar de todos assinarem o cartaz e expô-lo na sala.",
      ],
    },
    {
      theme: "Lendo curiosidades e entrevistas simples",
      curriculumCode: "EF01LP22",
      description:
        "Leitura e compreensão, em colaboração com os colegas e com ajuda do professor, de entrevistas, curiosidades, entre outros textos do campo das práticas de estudo e pesquisa.",
      materials: ["Texto curto de curiosidade sobre um animal ou objeto"],
      steps: [
        "Apresentar um texto curto de curiosidade (ex.: 'Você sabia que...') sobre um tema do interesse da turma.",
        "Ler em voz alta, destacando a informação principal.",
        "Perguntar o que os alunos descobriram de novo com a leitura.",
        "Em duplas, os alunos procuram outra curiosidade em um texto semelhante.",
        "Compartilhar oralmente o que cada dupla descobriu.",
      ],
    },
    {
      theme: "Fazendo uma entrevista para gravar",
      curriculumCode: "EF01LP23A/EF01LP23B",
      description:
        "Planejamento, produção, revisão e edição, em colaboração com os colegas e com ajuda do professor, de entrevistas e curiosidades para serem oralizadas por meio de ferramentas digitais, em áudio ou vídeo.",
      materials: ["Celular ou gravador (opcional)", "Lista de perguntas simples"],
      steps: [
        "Escolher com a turma alguém para entrevistar (um colega, um funcionário da escola).",
        "Elaborar coletivamente 3 perguntas simples para a entrevista.",
        "Praticar a leitura das perguntas em voz alta, em duplas.",
        "Realizar a entrevista, gravando ou simulando ao vivo diante da turma.",
        "Ouvir a gravação (ou reapresentação) e comentar o que ficou bom e o que poderia melhorar.",
      ],
    },
    {
      theme: "Reconhecendo a estrutura de entrevistas e curiosidades",
      curriculumCode: "EF01LP24",
      description:
        "Manutenção da estrutura composicional própria de textos como entrevistas e curiosidades, entre outros textos do campo das práticas de estudo e pesquisa, na escrita ou produção oral.",
      materials: ["Modelo impresso de entrevista curta"],
      steps: [
        "Mostrar um modelo simples de entrevista, com perguntas e respostas.",
        "Perguntar quais partes aparecem sempre (pergunta, resposta, nome de quem responde).",
        "Em duplas, os alunos organizam cartões soltos de uma entrevista na ordem correta.",
        "Corrigir coletivamente, explicando a estrutura encontrada.",
        "Fechar com a turma criando uma nova pergunta seguindo o mesmo modelo.",
      ],
    },
    {
      theme: "Escrevendo um conto com a ajuda do professor",
      curriculumCode: "EF01LP25A/EF01LP25B/EF01LP25C",
      description:
        "Planejamento e produção de contos lidos pelo professor, tendo o professor como escriba, com revisão e edição do texto produzido, cuidando da apresentação final.",
      materials: ["Conto conhecido pela turma", "Papel para o registro"],
      steps: [
        "Relembrar com a turma um conto lido recentemente, conversando sobre personagens e o que aconteceu.",
        "Planejar coletivamente uma nova versão simples do conto, com começo, meio e fim.",
        "O professor escreve na lousa o texto ditado pelos alunos, servindo de escriba.",
        "Reler o texto com a turma, perguntando se falta ou sobra alguma coisa.",
        "Corrigir juntos o texto e produzir a versão final para ilustrar.",
      ],
    },
    {
      theme: "Ouvindo e lendo contos, fábulas e lendas",
      curriculumCode: "EF01LP26A",
      description:
        "Leitura e compreensão de diferentes textos do campo artístico-literário: contos, fábulas, lendas, entre outros.",
      materials: ["Livro de conto, fábula ou lenda"],
      steps: [
        "Apresentar o livro escolhido, mostrando a capa e as ilustrações.",
        "Ler a história em voz alta para a turma, com entonação.",
        "Parar em momentos-chave para perguntar o que os alunos acham que vai acontecer.",
        "Ao final, conversar em roda sobre o que entenderam da história.",
        "Propor um desenho da parte que mais gostaram.",
      ],
    },
    {
      theme: "Quem são os personagens da história?",
      curriculumCode: "EF01LP26B",
      description:
        "Identificação, na leitura de diferentes textos do campo artístico-literário, dos elementos constituintes da narrativa: personagens, narrador, conflito, enredo, tempo e espaço.",
      materials: ["Conto ou fábula já conhecido pela turma"],
      steps: [
        "Relembrar uma história já lida pela turma.",
        "Perguntar quem são os personagens principais da história.",
        "Perguntar onde e quando a história acontece.",
        "Perguntar qual foi o problema (conflito) que apareceu na história.",
        "Propor que cada aluno desenhe um personagem e escreva ou dite seu nome.",
      ],
    },
    {
      theme: "Lendo as regras da nossa escola",
      curriculumCode: "EF01LP27",
      description:
        "Leitura e compreensão, em colaboração com os colegas e com ajuda do professor, de listas de regras e regulamentos que organizam a vida na comunidade escolar.",
      materials: ["Regras da escola em cartaz"],
      steps: [
        "Apresentar um cartaz com as regras da escola ou da sala de aula.",
        "Ler cada regra em voz alta com a turma.",
        "Perguntar o que significa cada regra e por que ela existe.",
        "Em duplas, os alunos escolhem uma regra e desenham uma cena mostrando ela sendo seguida.",
        "Expor os desenhos ao lado do cartaz de regras.",
      ],
    },
  ],
  matematica: [
    {
      theme: "Contando com jeitinho: de dois em dois, de agrupamentos",
      curriculumCode: "EF01MA02",
      description:
        "Contagem de maneira exata ou aproximada, utilizando diferentes estratégias como o pareamento e outros agrupamentos.",
      materials: ["Tampinhas ou palitos", "Potinhos para agrupar"],
      steps: [
        "Espalhar um grupo de objetos (tampinhas) sobre a mesa.",
        "Pedir que os alunos tentem contar de um em um.",
        "Mostrar uma estratégia de agrupar de 2 em 2 ou de 5 em 5 para facilitar a contagem.",
        "Propor que os alunos contem uma nova coleção usando a estratégia de agrupamento.",
        "Comparar os resultados encontrados pelos diferentes grupos.",
      ],
    },
    {
      theme: "Tem mais ou tem menos? Comparando duas coleções",
      curriculumCode: "EF01MA03",
      description:
        "Estimativa e comparação de quantidades de objetos de dois conjuntos (no mínimo 20 elementos), por estimativa e/ou correspondência, para indicar 'tem mais', 'tem menos' ou 'tem a mesma quantidade'.",
      materials: ["Dois potes com objetos diferentes (mínimo 20 cada)"],
      steps: [
        "Mostrar dois potes com quantidades diferentes de objetos, sem deixar contar.",
        "Pedir que os alunos estimem qual pote tem mais.",
        "Organizar os objetos dos dois potes em fileiras, um ao lado do outro, fazendo correspondência.",
        "Verificar juntos qual conjunto tem mais, tem menos, ou se são iguais.",
        "Registrar no caderno a comparação feita com um desenho simples.",
      ],
    },
    {
      theme: "Contando nossas coleções e registrando o resultado",
      curriculumCode: "EF01MA04",
      description:
        "Contagem da quantidade de objetos de coleções de no mínimo 20 unidades e apresentação do resultado por registros verbais e simbólicos, em situações de interesse dos alunos.",
      materials: ["Coleção de objetos da sala (lápis, brinquedos, tampinhas)"],
      steps: [
        "Escolher uma coleção de objetos da sala com mais de 20 itens.",
        "Pedir que os alunos, em duplas, contem os objetos juntos.",
        "Registrar o resultado da contagem oralmente para o professor.",
        "Escrever o número encontrado na lousa, com a ajuda da turma.",
        "Repetir a atividade com outra coleção, comparando os resultados.",
      ],
    },
    {
      theme: "Qual número é maior? Comparando números até 100",
      curriculumCode: "EF01MA05",
      description:
        "Comparação de números naturais de até duas ordens em situações cotidianas, com e sem suporte da reta numérica.",
      materials: ["Reta numérica até 100 em cartaz", "Cartões com números"],
      steps: [
        "Apresentar a reta numérica em cartaz, mostrando como os números crescem da esquerda para a direita.",
        "Distribuir dois cartões com números para cada dupla.",
        "Pedir que localizem os dois números na reta numérica.",
        "Perguntar qual número é maior e qual é menor, observando a posição na reta.",
        "Repetir a atividade com novos pares de números, sem o apoio da reta.",
      ],
    },
    {
      theme: "Somando e tirando de cabeça: fatos básicos",
      curriculumCode: "EF01MA06",
      description:
        "Construção de fatos básicos da adição e da subtração e utilização em procedimentos de cálculos mentais, escritos e para a resolução de problemas.",
      materials: ["Fichas com pequenas contas de somar e subtrair"],
      steps: [
        "Apresentar contas simples de adição e subtração (ex.: 3+2, 5-1) para a turma resolver oralmente.",
        "Usar os dedos ou objetos para ajudar na primeira resolução.",
        "Repetir os mesmos fatos várias vezes para que os alunos memorizem.",
        "Propor um jogo em duplas com fichas de fatos básicos.",
        "Registrar no caderno os fatos que a turma já sabe de cabeça.",
      ],
    },
    {
      theme: "Resolvendo problemas de juntar e tirar",
      curriculumCode: "EF01MA08",
      description:
        "Resolução e elaboração de situações-problema de adição e subtração, com significados de juntar, acrescentar, separar e retirar, com o suporte de imagens e/ou material manipulável.",
      materials: ["Material manipulável (tampinhas, palitos)", "Problemas simples ilustrados"],
      steps: [
        "Ler um problema simples em voz alta (ex.: 'Tenho 3 balas e ganho mais 2, quantas tenho agora?').",
        "Perguntar se a situação é de juntar, ganhar, separar ou tirar.",
        "Deixar os alunos resolverem usando material manipulável.",
        "Corrigir coletivamente, mostrando a resolução na lousa.",
        "Propor que a turma, com ajuda do professor, invente um novo problema parecido.",
      ],
    },
    {
      theme: "Organizando objetos por cor, forma e tamanho",
      curriculumCode: "EF01MA09",
      description:
        "Organização e ordenação de objetos do cotidiano ou representações por figuras, por meio de atributos, tais como cor, forma e medida.",
      materials: ["Objetos ou figuras variadas (cores e formas diferentes)"],
      steps: [
        "Espalhar objetos variados sobre a mesa (cores, formas e tamanhos diferentes).",
        "Pedir que os alunos organizem os objetos por cor.",
        "Repetir a organização agora por forma, e depois por tamanho.",
        "Perguntar qual foi a regra usada em cada organização.",
        "Propor que, em duplas, os alunos criem sua própria forma de organizar um novo grupo de objetos.",
      ],
    },
    {
      theme: "Descobrindo o que falta na sequência",
      curriculumCode: "EF01MA10",
      description:
        "Descrição, após o reconhecimento e a explicitação de um padrão, dos elementos ausentes em sequências recursivas de números naturais, objetos ou figuras.",
      materials: ["Cartões com sequências e espaços em branco"],
      steps: [
        "Mostrar uma sequência simples com um espaço vazio (ex.: círculo, quadrado, círculo, ___).",
        "Perguntar o que deveria vir no espaço vazio.",
        "Explicar a regra da sequência com a turma.",
        "Propor novas sequências com elementos faltando para os alunos completarem.",
        "Fechar com os alunos criando uma sequência própria com um espaço para o colega completar.",
      ],
    },
    {
      theme: "Direita, esquerda, na frente, atrás: localizando objetos",
      curriculumCode: "EF01MA11",
      description:
        "Descrição da localização de pessoas e de objetos no espaço em relação à própria posição, utilizando termos como à direita, à esquerda, em frente, atrás.",
      materials: ["Objetos da sala de aula"],
      steps: [
        "Pedir que um aluno se posicione no centro da sala.",
        "Colocar objetos em diferentes posições em relação a ele (na frente, atrás, à direita, à esquerda).",
        "Perguntar aos alunos onde está cada objeto, usando os termos corretos.",
        "Repetir a atividade trocando o aluno de referência.",
        "Propor que, em duplas, os alunos descrevam a posição de um objeto para o colega adivinhar.",
      ],
    },
    {
      theme: "Localizando objetos a partir de um ponto de referência",
      curriculumCode: "EF01MA12",
      description:
        "Descrição da localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que é preciso explicitar o referencial usado.",
      materials: ["Objetos da sala de aula"],
      steps: [
        "Escolher um objeto fixo da sala como ponto de referência (ex.: a porta).",
        "Pedir que os alunos descrevam a posição de outros objetos em relação a esse ponto.",
        "Trocar o ponto de referência (ex.: a mesa do professor) e repetir a descrição.",
        "Discutir por que a posição de um objeto muda dependendo do referencial escolhido.",
        "Propor que os alunos desenhem a sala indicando um objeto e seu ponto de referência.",
      ],
    },
    {
      theme: "Sólidos geométricos no nosso dia a dia",
      curriculumCode: "EF01MA13",
      description:
        "Relação de figuras geométricas espaciais (cones, cilindros, esferas e blocos retangulares) a objetos cotidianos do mundo físico.",
      materials: ["Sólidos geométricos de madeira ou plástico", "Objetos do cotidiano (bola, lata, caixa)"],
      steps: [
        "Apresentar os sólidos geométricos e deixar que os alunos manipulem.",
        "Mostrar objetos do cotidiano parecidos com cada sólido (bola/esfera, lata/cilindro, caixa/bloco retangular).",
        "Pedir que os alunos associem cada objeto ao sólido correspondente.",
        "Propor uma caça a objetos parecidos com sólidos geométricos pela sala.",
        "Registrar em desenho um objeto encontrado e o sólido a que ele se parece.",
      ],
    },
    {
      theme: "Círculo, quadrado, retângulo e triângulo: conhecendo as figuras planas",
      curriculumCode: "EF01MA14",
      description:
        "Identificação e nomeação de figuras planas (círculo, quadrado, retângulo e triângulo) em desenhos apresentados em diferentes disposições ou em contornos de faces de sólidos geométricos.",
      materials: ["Sólidos geométricos", "Papel e lápis"],
      steps: [
        "Apresentar as figuras planas círculo, quadrado, retângulo e triângulo em cartazes.",
        "Pedir que os alunos contornem a face de um sólido geométrico no papel.",
        "Perguntar qual figura plana apareceu no contorno.",
        "Propor uma busca por essas figuras em objetos e desenhos da sala.",
        "Fechar com os alunos classificando figuras recortadas em quatro grupos.",
      ],
    },
    {
      theme: "Mais alto, mais comprido, mais pesado: comparando objetos",
      curriculumCode: "EF01MA15",
      description:
        "Comparação de comprimentos, capacidades ou massas, utilizando termos como mais alto, mais baixo, mais comprido, mais curto, mais pesado, mais leve, entre outros, para ordenar objetos de uso cotidiano.",
      materials: ["Objetos de tamanhos e pesos diferentes"],
      steps: [
        "Apresentar dois objetos de tamanhos diferentes e perguntar qual é mais alto ou mais comprido.",
        "Repetir a comparação com objetos de pesos diferentes, pedindo que os alunos segurem e comparem.",
        "Propor que a turma ordene três objetos do mais leve para o mais pesado.",
        "Repetir com recipientes de água, comparando qual 'cabe mais' e qual 'cabe menos'.",
        "Registrar no caderno uma comparação feita, usando os termos aprendidos.",
      ],
    },
    {
      theme: "Manhã, tarde e noite: conhecendo o calendário",
      curriculumCode: "EF01MA17",
      description:
        "Reconhecimento e relação entre períodos do dia, dias da semana e meses do ano, utilizando calendário, quando necessário.",
      materials: ["Calendário do mês em cartaz"],
      steps: [
        "Perguntar aos alunos o que costumam fazer de manhã, à tarde e à noite.",
        "Mostrar o calendário do mês, apontando os dias da semana.",
        "Pedir que localizem o dia de hoje no calendário.",
        "Perguntar quantos dias faltam para um evento importante da turma.",
        "Registrar no caderno o dia da semana e o mês atual.",
      ],
    },
    {
      theme: "Escrevendo a data certinha",
      curriculumCode: "EF01MA18",
      description:
        "Produção da escrita de uma data, apresentando o dia, o mês e o ano, e indicação do dia da semana de uma data, consultando calendários.",
      materials: ["Calendário do mês"],
      steps: [
        "Mostrar como está escrita a data de hoje no calendário.",
        "Explicar as partes da data: dia, mês e ano.",
        "Pedir que os alunos escrevam a data de hoje no caderno, copiando do calendário.",
        "Propor que localizem outra data no calendário e digam qual é o dia da semana correspondente.",
        "Repetir o registro da data todos os dias como rotina da turma.",
      ],
    },
    {
      theme: "Conhecendo moedas e cédulas do dinheiro brasileiro",
      curriculumCode: "EF01MA19",
      description:
        "Reconhecimento e relação de valores de moedas e cédulas do sistema monetário brasileiro para resolver situações simples do cotidiano do estudante.",
      materials: ["Réplicas de moedas e cédulas brasileiras"],
      steps: [
        "Apresentar réplicas de moedas e cédulas, mostrando seus valores.",
        "Pedir que os alunos identifiquem qual moeda ou cédula vale mais.",
        "Propor uma situação simples de compra (ex.: um doce custa 1 real, quais moedas posso usar?).",
        "Organizar um pequeno mercadinho simulado com produtos de preço baixo.",
        "Deixar que os alunos, em duplas, 'comprem' produtos usando as réplicas.",
      ],
    },
    {
      theme: "Vai acontecer, talvez ou é impossível?",
      curriculumCode: "EF01MA20",
      description:
        "Classificação de eventos envolvendo o acaso, tais como 'acontecerá com certeza', 'talvez aconteça' e 'é impossível acontecer', em situações do cotidiano.",
      materials: ["Cartões com afirmações do cotidiano"],
      steps: [
        "Apresentar afirmações do dia a dia (ex.: 'o sol vai nascer amanhã', 'vai nevar aqui hoje').",
        "Pedir que os alunos classifiquem cada uma como certeza, talvez ou impossível.",
        "Discutir coletivamente as respostas dadas.",
        "Propor que cada aluno crie uma afirmação e a turma classifique.",
        "Registrar no caderno um exemplo de cada categoria.",
      ],
    },
    {
      theme: "Lendo tabelas e gráficos simples",
      curriculumCode: "EF01MA21",
      description: "Leitura de dados expressos em tabelas e em gráficos de colunas simples.",
      materials: ["Tabela ou gráfico simples pronto com dados da turma"],
      steps: [
        "Apresentar uma tabela simples com dados da turma (ex.: fruta preferida).",
        "Perguntar qual categoria aparece mais vezes na tabela.",
        "Mostrar o mesmo dado representado em um gráfico de colunas.",
        "Perguntar qual coluna é mais alta e o que isso significa.",
        "Propor perguntas simples de leitura para os alunos responderem observando o gráfico.",
      ],
    },
    {
      theme: "Fazendo uma pesquisa com a turma",
      curriculumCode: "EF01MA22",
      description:
        "Realização de pesquisa, envolvendo até duas variáveis categóricas de interesse, e organização de dados por meio de representações pessoais.",
      materials: ["Folha para anotação da pesquisa"],
      steps: [
        "Escolher com a turma um tema simples de pesquisa (ex.: brincadeira preferida).",
        "Definir duas ou três opções de resposta possíveis.",
        "Circular pela sala perguntando a cada colega sua resposta e anotando.",
        "Organizar os dados coletados em um desenho ou lista simples.",
        "Apresentar o resultado da pesquisa para a turma.",
      ],
    },
    {
      theme: "Repartindo e juntando em grupos: primeiras ideias de multiplicação e divisão",
      curriculumCode: "EF01MA23*",
      description: "Exploração das ideias da multiplicação e da divisão de modo intuitivo.",
      materials: ["Objetos pequenos para agrupar (tampinhas, palitos)"],
      steps: [
        "Propor uma situação: 'temos 3 potinhos, e em cada um vou colocar 2 tampinhas, quantas tampinhas ao todo?'.",
        "Deixar os alunos montarem os grupos com material manipulável para descobrir o total.",
        "Propor a situação inversa: repartir uma quantidade de objetos igualmente entre alguns amigos.",
        "Discutir coletivamente as estratégias usadas pelos alunos para resolver as duas situações.",
        "Registrar com desenho uma das situações resolvidas.",
      ],
    },
  ],
  ciencias: [
    {
      theme: "De que é feito? Observando os objetos da sala",
      curriculumCode: "EF01CI01A",
      description:
        "Reconhecimento e comparação das características dos objetos de uso cotidiano e identificação dos materiais de que são feitos.",
      materials: ["Objetos variados de metal, madeira, plástico e tecido"],
      steps: [
        "Espalhar sobre a mesa objetos feitos de materiais diferentes.",
        "Pedir que os alunos toquem cada objeto e digam do que acham que é feito.",
        "Organizar os objetos em grupos conforme o material (metal, madeira, plástico, tecido).",
        "Discutir coletivamente características de cada material (duro, mole, liso, áspero).",
        "Registrar em uma tabela simples: objeto e material.",
      ],
    },
    {
      theme: "Para onde vai o lixo? Cuidando do que descartamos",
      curriculumCode: "EF01CI01B",
      description:
        "Identificação dos modos de descarte/destinação dos objetos de uso cotidiano e discussão sobre como podem ser usados e reaproveitados de forma consciente e sustentável.",
      materials: ["Objetos ou embalagens recicláveis"],
      steps: [
        "Mostrar objetos ou embalagens que normalmente são descartados (garrafa, caixa, papel).",
        "Perguntar aos alunos para onde eles acham que vai o lixo de casa.",
        "Conversar sobre a diferença entre jogar fora e reaproveitar/reciclar.",
        "Propor que a turma pense em uma nova forma de usar um objeto antes de descartá-lo.",
        "Fechar com um desenho mostrando um objeto sendo reaproveitado.",
      ],
    },
    {
      theme: "Conhecendo as partes do meu corpo",
      curriculumCode: "EF01CI02",
      description:
        "Localização, nomeação e representação das partes do corpo humano, por meio de desenhos, e explicação das funções de cada parte.",
      materials: ["Espelho (opcional)", "Papel para desenho"],
      steps: [
        "Pedir que os alunos apontem e nomeiem partes do próprio corpo (cabeça, braços, pernas, mãos).",
        "Perguntar para que serve cada parte apontada.",
        "Propor uma brincadeira de comandos (ex.: 'toquem no joelho', 'levantem o braço').",
        "Pedir que cada aluno desenhe o próprio corpo, nomeando as partes que conhece.",
        "Compartilhar os desenhos em roda, comentando as funções de cada parte.",
      ],
    },
    {
      theme: "Lavando as mãos: hábitos de higiene do corpo",
      curriculumCode: "EF01CI03A",
      description:
        "Identificação de hábitos de higiene do corpo e discussão das razões pelas quais lavar as mãos, escovar os dentes e limpar olhos, nariz e orelhas são medidas de prevenção necessárias à saúde.",
      materials: ["Sabonete (para demonstração)", "Imagens de hábitos de higiene"],
      steps: [
        "Perguntar aos alunos quais cuidados de higiene eles fazem todos os dias.",
        "Mostrar imagens de crianças lavando as mãos, escovando os dentes e tomando banho.",
        "Demonstrar o jeito certo de lavar as mãos, com os alunos imitando os gestos.",
        "Discutir por que cada hábito de higiene é importante para a saúde.",
        "Combinar com a turma um lembrete diário de lavar as mãos antes do lanche.",
      ],
    },
    {
      theme: "Higiene de todos: cuidando da saúde da turma",
      curriculumCode: "EF01CI03B",
      description:
        "Associação da saúde coletiva aos hábitos de higiene, como ação preventiva ou de manutenção da qualidade de vida dos indivíduos.",
      materials: ["Cartaz de combinados de higiene da sala"],
      steps: [
        "Retomar os hábitos de higiene trabalhados anteriormente.",
        "Perguntar o que pode acontecer se um colega da turma não seguir esses hábitos.",
        "Discutir como o cuidado de cada um ajuda a manter todos saudáveis.",
        "Construir coletivamente um cartaz de combinados de higiene da sala.",
        "Combinar de revisar o cartaz semanalmente com a turma.",
      ],
    },
    {
      theme: "Somos parecidos e diferentes: comparando características físicas",
      curriculumCode: "EF01CI04",
      description:
        "Comparação das características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização, do acolhimento e do respeito às diferenças.",
      materials: ["Nenhum material obrigatório"],
      steps: [
        "Propor uma roda de conversa em que os alunos observam semelhanças e diferenças entre si (altura, cor dos olhos, cor da pele, cabelo).",
        "Perguntar o que é igual e o que é diferente entre os colegas.",
        "Conversar sobre como as diferenças tornam cada pessoa especial.",
        "Reforçar a importância de respeitar e acolher as diferenças dos colegas.",
        "Propor que cada aluno desenhe a si mesmo, destacando uma característica que gosta.",
      ],
    },
    {
      theme: "Manhã, tarde, noite: as escalas de tempo",
      curriculumCode: "EF01CI05",
      description:
        "Identificação e nomeação de diferentes escalas de tempo: os períodos diários (manhã, tarde, noite) e a sucessão de dias, semanas, meses e anos.",
      materials: ["Calendário em cartaz", "Imagens de atividades de manhã, tarde e noite"],
      steps: [
        "Perguntar aos alunos o que costumam fazer de manhã, de tarde e de noite.",
        "Organizar imagens de atividades cotidianas nos três períodos do dia.",
        "Mostrar o calendário e explicar a sucessão de dias, semanas e meses.",
        "Localizar no calendário o dia de hoje e contar quantos dias faltam para o fim da semana.",
        "Registrar no caderno uma atividade que o aluno faz em cada período do dia.",
      ],
    },
    {
      theme: "O que fazemos de dia e o que fazemos de noite",
      curriculumCode: "EF01CI06",
      description:
        "Seleção de exemplos de como a sucessão de dias e noites orienta o ritmo de atividades diárias de seres humanos e de outros seres vivos.",
      materials: ["Imagens de animais diurnos e noturnos"],
      steps: [
        "Perguntar o que muda no dia a dia da turma entre o dia e a noite (escola, dormir).",
        "Mostrar imagens de um animal que dorme de dia e vive à noite (ex.: coruja, morcego).",
        "Comparar com um animal que age de dia (ex.: galo, borboleta).",
        "Discutir por que os seres vivos têm rotinas diferentes de dia e de noite.",
        "Propor que os alunos desenhem uma atividade que fazem de dia e outra que fazem à noite.",
      ],
    },
  ],
  geografia: [
    {
      theme: "Conhecendo os lugares onde vivemos",
      curriculumCode: "EF01GE01",
      description:
        "Observação e descrição de características dos lugares de vivência (moradia, escola, bairro, rua, entre outros) e identificação de semelhanças e diferenças entre esses lugares.",
      materials: ["Imagens ou fotos da escola, da casa e do bairro dos alunos (opcional)"],
      steps: [
        "Perguntar aos alunos como é a rua ou o bairro onde moram.",
        "Pedir que descrevam a escola e comparem com a própria casa.",
        "Conversar sobre o que é parecido e o que é diferente entre os lugares citados pelos colegas.",
        "Propor que cada aluno desenhe um lugar de vivência (casa, escola ou bairro).",
        "Compartilhar os desenhos, comentando as semelhanças e diferenças encontradas.",
      ],
    },
    {
      theme: "Brincadeiras de agora e de antigamente",
      curriculumCode: "EF01GE02",
      description:
        "Comparação de jogos e brincadeiras (individuais e coletivos) de diferentes épocas e lugares, promovendo o respeito à pluralidade cultural.",
      materials: ["Nenhum material obrigatório"],
      steps: [
        "Perguntar aos alunos quais brincadeiras eles mais gostam de fazer hoje.",
        "Perguntar em casa (tarefa) quais brincadeiras os pais ou avós faziam quando crianças.",
        "Compartilhar em roda as brincadeiras trazidas de casa.",
        "Comparar as brincadeiras de hoje com as de antigamente, o que mudou e o que continua igual.",
        "Propor que a turma experimente uma brincadeira antiga trazida por um colega.",
      ],
    },
    {
      theme: "Praças, parques e escola: para que servem os espaços públicos",
      curriculumCode: "EF01GE03A/EF01GE03B",
      description:
        "Reconhecimento das funções do espaço público de uso coletivo, como praças, parques e a escola, e identificação de seus diferentes usos para lazer e outras atividades.",
      materials: ["Imagens de praça, parque e escola"],
      steps: [
        "Mostrar imagens de uma praça, um parque e a própria escola.",
        "Perguntar para que servem esses lugares e quem pode usá-los.",
        "Discutir as diferentes atividades que acontecem em cada espaço (brincar, estudar, passear).",
        "Perguntar quais espaços públicos os alunos costumam frequentar.",
        "Propor um desenho de um espaço público que o aluno gosta de visitar.",
      ],
    },
    {
      theme: "Combinando as regras de convivência da nossa turma",
      curriculumCode: "EF01GE04",
      description:
        "Discussão e elaboração coletiva de acordos, regras e normas de convívio em diferentes espaços (casa, bairro, sala de aula, escola, áreas de lazer), considerando o cuidado com os espaços públicos.",
      materials: ["Cartolina", "Canetinhas"],
      steps: [
        "Conversar com a turma sobre o que é preciso para todos conviverem bem na sala.",
        "Listar coletivamente sugestões de regras de convívio.",
        "Discutir por que algumas regras já existem, como não sujar os espaços públicos.",
        "Escrever as regras escolhidas em um cartaz, com a ajuda do professor.",
        "Combinar de revisar o cartaz quando alguma regra não for seguida.",
      ],
    },
    {
      theme: "Diferentes casas, diferentes objetos",
      curriculumCode: "EF01GE06",
      description:
        "Identificação, descrição e comparação de diferentes tipos de moradia nos lugares de vivência e de objetos de uso cotidiano, considerando técnicas e materiais utilizados em sua produção.",
      materials: ["Imagens de diferentes tipos de moradia"],
      steps: [
        "Mostrar imagens de tipos diferentes de moradia (casa, apartamento, sítio).",
        "Perguntar como é a casa de cada aluno.",
        "Comparar os diferentes tipos de moradia observados, discutindo semelhanças e diferenças.",
        "Mostrar objetos do cotidiano (brinquedo, roupa) e perguntar de que material são feitos.",
        "Propor que os alunos desenhem sua própria moradia.",
      ],
    },
    {
      theme: "Desenhando o caminho de uma história",
      curriculumCode: "EF01GE08",
      description:
        "Identificação de itinerários percorridos ou descritos em contos literários, histórias inventadas e/ou brincadeiras, representando-os por meio de mapas mentais e desenhos.",
      materials: ["Conto curto com um percurso (ex.: Chapeuzinho Vermelho)"],
      steps: [
        "Ler ou relembrar uma história em que o personagem percorre um caminho.",
        "Perguntar por onde o personagem passou até chegar ao destino.",
        "Propor que os alunos desenhem o caminho percorrido pelo personagem.",
        "Comparar os desenhos feitos por diferentes alunos.",
        "Repetir a atividade com o caminho de casa até a escola, se possível.",
      ],
    },
    {
      theme: "Meu primeiro mapinha: localizando objetos no espaço",
      curriculumCode: "EF01GE09",
      description:
        "Utilização e elaboração de mapas simples para localizar elementos do local de vivência, considerando referenciais espaciais (frente e atrás, perto e longe, esquerda e direita, em cima e embaixo) e o próprio corpo como referência.",
      materials: ["Papel", "Lápis de cor"],
      steps: [
        "Observar junto com a turma os móveis e objetos da sala de aula.",
        "Explicar os referenciais espaciais (frente, atrás, perto, longe, em cima, embaixo) usando o próprio corpo.",
        "Pedir que os alunos desenhem um mapa simples da sala, posicionando a porta, a mesa do professor e as carteiras.",
        "Comparar os mapas feitos por diferentes alunos.",
        "Propor que um aluno explique seu mapa para um colega usando os referenciais aprendidos.",
      ],
    },
    {
      theme: "Quem mora perto de nós: conhecendo pessoas diferentes",
      curriculumCode: "EF01GE12*",
      description:
        "Reconhecimento, nos lugares de vivência, da diversidade de indivíduos e de grupos sociais, como indígenas, quilombolas, caiçaras, entre outros.",
      materials: ["Imagens de diferentes grupos sociais e culturais brasileiros"],
      steps: [
        "Mostrar imagens de diferentes grupos que compõem a população brasileira (indígenas, quilombolas, caiçaras).",
        "Conversar sobre onde esses grupos costumam viver e como é seu modo de vida.",
        "Perguntar se os alunos conhecem pessoas de diferentes origens em sua comunidade.",
        "Discutir a importância de respeitar a diversidade de pessoas e grupos.",
        "Propor um desenho representando uma pessoa ou grupo apresentado na aula.",
      ],
    },
    {
      theme: "Andando pela escola e pelo bairro: pensando nas dificuldades de locomoção",
      curriculumCode: "EF01GE13*",
      description:
        "Observação de trajetos realizados no entorno da escola e/ou residência e formulação de hipóteses sobre as dificuldades das pessoas para se locomover/transitar em diferentes lugares.",
      materials: ["Nenhum material obrigatório"],
      steps: [
        "Perguntar aos alunos como eles vêm para a escola todos os dias.",
        "Conversar sobre o que pode dificultar esse caminho (buracos, falta de calçada, trânsito).",
        "Discutir se pessoas com dificuldade de locomoção (cadeirantes, idosos) teriam mais dificuldade nesse trajeto.",
        "Propor que os alunos pensem em uma solução para facilitar o trajeto até a escola.",
        "Registrar com desenho uma dificuldade observada no caminho.",
      ],
    },
    {
      theme: "Lugares parecidos, lugares diferentes: comparando realidades em canções e imagens",
      curriculumCode: "EF01GE14*",
      description:
        "Reconhecimento de semelhanças e diferenças entre os lugares de vivência e os de outras realidades, descritas em imagens, canções e/ou poesias.",
      materials: ["Canção ou poesia que descreva outro lugar (praia, campo, cidade grande)"],
      steps: [
        "Apresentar uma canção ou poesia que descreva um lugar diferente do bairro dos alunos.",
        "Ler ou cantar o texto com a turma, destacando as características do lugar descrito.",
        "Comparar esse lugar com o bairro onde os alunos vivem.",
        "Perguntar o que é parecido e o que é diferente entre os dois lugares.",
        "Propor um desenho comparando os dois lugares estudados.",
      ],
    },
  ],
  historia: [
    {
      theme: "O que mudou em mim: lembranças da minha vida",
      curriculumCode: "EF01HI01",
      description:
        "Reconhecimento de transformações pessoais a partir do registro das lembranças particulares, da família ou da comunidade.",
      materials: ["Foto de bebê do aluno (se possível trazer de casa)"],
      steps: [
        "Perguntar aos alunos como eles eram quando bebês, o que já sabiam fazer.",
        "Conversar sobre o que eles sabem fazer hoje que não sabiam antes.",
        "Se possível, mostrar fotos trazidas de casa comparando bebê e agora.",
        "Discutir em roda o que mudou em cada um ao longo do tempo.",
        "Propor um desenho de 'eu quando era bebê' e 'eu agora'.",
      ],
    },
    {
      theme: "Minha história e a história da minha família",
      curriculumCode: "EF01HI02",
      description:
        "Identificação da relação entre as histórias pessoais e as histórias de sua família e de sua comunidade.",
      materials: ["Nenhum material obrigatório"],
      steps: [
        "Perguntar aos alunos quem faz parte da família deles.",
        "Conversar sobre uma história ou lembrança contada por um familiar.",
        "Discutir como as histórias da família estão ligadas à história de cada aluno.",
        "Propor que cada aluno conte uma pequena história de sua família para a turma.",
        "Fechar com um desenho da família do aluno.",
      ],
    },
    {
      theme: "Meus papéis na família, na escola e na comunidade",
      curriculumCode: "EF01HI03",
      description:
        "Identificação, descrição e distinção dos papéis e responsabilidades relacionados à família, à escola e à comunidade.",
      materials: ["Nenhum material obrigatório"],
      steps: [
        "Perguntar aos alunos quais tarefas eles têm em casa (arrumar a mochila, ajudar a guardar brinquedos).",
        "Perguntar quais são suas responsabilidades na escola (guardar o material, cuidar da sala).",
        "Discutir se essas responsabilidades mudam dependendo do lugar.",
        "Propor que cada aluno desenhe uma tarefa que faz em casa e uma que faz na escola.",
        "Compartilhar os desenhos em roda.",
      ],
    },
    {
      theme: "Em casa, na escola e na rua: lugares com regras diferentes",
      curriculumCode: "EF01HI04",
      description:
        "Identificação das diferenças entre os variados ambientes em que o aluno vive (doméstico, escolar e da comunidade), reconhecendo as especificidades dos hábitos e das regras que os regem.",
      materials: ["Nenhum material obrigatório"],
      steps: [
        "Perguntar aos alunos quais regras existem em casa.",
        "Perguntar quais regras existem na escola.",
        "Comparar as regras de casa com as regras da escola, discutindo semelhanças e diferenças.",
        "Conversar sobre por que cada ambiente tem suas próprias regras.",
        "Propor que os alunos desenhem uma regra de casa e uma regra da escola.",
      ],
    },
    {
      theme: "Brincadeiras de hoje e de outros tempos e lugares",
      curriculumCode: "EF01HI05",
      description:
        "Identificação de semelhanças e diferenças entre brinquedos, jogos e brincadeiras atuais e de outras épocas e lugares.",
      materials: ["Imagens de brinquedos antigos (opcional)"],
      steps: [
        "Perguntar aos alunos quais são seus brinquedos e jogos favoritos hoje.",
        "Mostrar imagens de brinquedos e brincadeiras de outras épocas (pião, peteca, boneca de pano).",
        "Comparar os brinquedos de hoje com os de antigamente.",
        "Perguntar em casa (tarefa) quais brinquedos os avós usavam.",
        "Compartilhar as descobertas na aula seguinte, comparando os relatos da turma.",
      ],
    },
    {
      theme: "Histórias da minha família e da minha escola",
      curriculumCode: "EF01HI06A",
      description:
        "Conhecimento de histórias da família e da escola e identificação do papel desempenhado por diferentes sujeitos em diferentes espaços.",
      materials: ["Nenhum material obrigatório"],
      steps: [
        "Perguntar aos alunos se conhecem alguma história antiga da própria família.",
        "Perguntar se sabem alguma história sobre a criação da escola.",
        "Conversar sobre quem são as pessoas importantes nessas histórias.",
        "Propor que os alunos perguntem em casa uma história da família para compartilhar depois.",
        "Compartilhar as histórias coletadas em uma roda de conversa.",
      ],
    },
    {
      theme: "O papel das mulheres na família e na escola",
      curriculumCode: "EF01HI06B",
      description:
        "Identificação dos diferentes papéis das mulheres na família e na escola, reconhecendo mudanças ao longo do tempo.",
      materials: ["Nenhum material obrigatório"],
      steps: [
        "Perguntar aos alunos quem são as mulheres importantes em sua família e na escola.",
        "Conversar sobre as funções que essas mulheres exercem (cuidar, trabalhar, ensinar).",
        "Discutir se essas funções sempre foram as mesmas ao longo do tempo, com exemplos simples.",
        "Propor que cada aluno desenhe uma mulher importante para ele e conte o que ela faz.",
        "Compartilhar os desenhos e histórias em roda.",
      ],
    },
    {
      theme: "Famílias diferentes, todas importantes",
      curriculumCode: "EF01HI07",
      description: "Identificação de mudanças e permanências nas formas de organização familiar.",
      materials: ["Nenhum material obrigatório"],
      steps: [
        "Perguntar aos alunos com quem eles moram e quem faz parte de sua família.",
        "Conversar sobre como as famílias podem ser diferentes umas das outras.",
        "Discutir que não existe um único jeito certo de família, e que todas merecem respeito.",
        "Propor que cada aluno desenhe sua família, do jeito que ela é.",
        "Compartilhar os desenhos em roda, valorizando a diversidade encontrada.",
      ],
    },
    {
      theme: "Festas da escola e festas de casa: o que comemoramos",
      curriculumCode: "EF01HI08",
      description:
        "Reconhecimento do significado das comemorações e festas escolares, diferenciando-as das datas festivas comemoradas no âmbito familiar ou da comunidade.",
      materials: ["Calendário de eventos da escola (opcional)"],
      steps: [
        "Perguntar aos alunos quais festas a escola costuma comemorar.",
        "Perguntar quais festas eles comemoram em casa ou com a família.",
        "Comparar as festas da escola com as festas de casa, discutindo o significado de cada uma.",
        "Conversar sobre por que algumas datas são comemoradas só na escola e outras só em casa.",
        "Propor um desenho de uma festa que o aluno gosta de comemorar.",
      ],
    },
    {
      theme: "Cada um do seu jeito: respeitando as diferenças",
      curriculumCode: "EF01HI09*",
      description: "Identificação, respeito e valorização das diferenças entre as pessoas de sua convivência.",
      materials: ["Nenhum material obrigatório"],
      steps: [
        "Propor uma roda de conversa em que os alunos observam diferenças entre os colegas (altura, jeito de falar, gostos).",
        "Perguntar o que cada aluno tem de diferente e de parecido com os colegas.",
        "Discutir por que é importante respeitar as diferenças entre as pessoas.",
        "Propor uma dinâmica em que cada aluno conta algo que gosta e que é diferente dos colegas.",
        "Fechar com um combinado coletivo de respeito às diferenças na turma.",
      ],
    },
  ],
};
