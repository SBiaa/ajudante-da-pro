// Banco de temas do 1º ano — rede MUNICIPAL (Currículo da Cidade, SME-SP), no mesmo formato de
// src/data/themeBank.ts (que cobre o 2º ano da mesma rede). Códigos de habilidade (curriculumCode)
// pesquisados diretamente no texto oficial dos documentos "Currículo da Cidade" (SME-SP, 2ª
// edição), seção "1º ANO DO ENSINO FUNDAMENTAL", publicados em acervodigital.sme.prefeitura.sp.gov.br
// — não são estimados. Atenção: para o Ciclo de Alfabetização (1º ao 3º ano) o próprio documento
// oficial usa siglas curtas por componente — "EF01M" (Matemática, sem "A"), "EF01C" (Ciências, sem
// "I"), "EF01G" (Geografia, sem "E") e "EF01H" (História, sem "I") — confirmado batendo com os
// códigos já usados no banco do 2º ano (EF02M, EF02C, EF02G, EF02H). Língua Portuguesa usa o
// formato "EF01LP" normalmente.

import { BankEntry, OwnSubject } from "@/types/plano";

export const PREFEITURA_1_ANO_THEME_BANK: Record<OwnSubject, BankEntry[]> = {
  "lingua-portuguesa": [
    {
      "theme": "Lista de nomes da turma e da agenda do dia",
      "curriculumCode": "EF01LP01",
      "description": "Localização de nomes em listas de campos semânticos diversos, como nomes próprios, títulos de livros, brincadeiras e a agenda do dia.",
      "materials": ["Cartaz com a lista de nomes dos alunos", "Agenda do dia escrita na lousa", "Lista das brincadeiras preferidas da turma"],
      "steps": [
        "Apresentar a lista de nomes da turma escrita em cartaz.",
        "Ler em voz alta cada nome, apontando para a palavra correspondente.",
        "Pedir que cada aluno localize seu próprio nome na lista.",
        "Mostrar a agenda do dia e pedir que localizem uma atividade específica, como 'hora do parque'.",
        "Repetir com a lista de brincadeiras, pedindo que apontem a preferida.",
        "Fechar perguntando como fizeram para encontrar as palavras."
      ]
    },
    {
      "theme": "Ficha de empréstimo de livros da sala",
      "curriculumCode": "EF01LP02",
      "description": "Localização de nomes em listas usadas para copiar informações ou organizar o cotidiano, como fichas de empréstimo de livros ou identificação de pertences.",
      "materials": ["Ficha de empréstimo com nomes e títulos", "Livros da caixa de leitura da sala", "Etiquetas com os nomes dos alunos"],
      "steps": [
        "Apresentar a ficha de empréstimo de livros usada na sala.",
        "Explicar como cada aluno localiza seu nome para registrar o empréstimo.",
        "Pedir que cada aluno localize seu nome na ficha e copie ao lado o título do livro escolhido.",
        "Organizar etiquetas de nomes para identificar pertences, como estojo e mochila.",
        "Fechar conversando sobre a importância de localizar e copiar nomes com atenção."
      ]
    },
    {
      "theme": "Leitura de parlenda conhecida de cor",
      "curriculumCode": "EF01LP03",
      "description": "Leitura, por si mesmo, de textos conhecidos de memória (parlendas, adivinhas, poemas, canções, trava-línguas), ajustando o que é falado ao que está escrito.",
      "materials": ["Cartaz com a parlenda escrita", "Cópia individual da parlenda"],
      "steps": [
        "Recitar a parlenda de cor com a turma algumas vezes.",
        "Mostrar o texto escrito no cartaz.",
        "Pedir que apontem com o dedo cada palavra enquanto recitam, ajustando o falado ao escrito.",
        "Circular, individualmente, algumas palavras conhecidas no texto.",
        "Repetir a atividade com a cópia individual de cada aluno."
      ]
    },
    {
      "theme": "Roda de leitura de rótulos e embalagens",
      "curriculumCode": "EF01LP04",
      "description": "Leitura, por si mesmo, de textos diversos do cotidiano (placas, listas, manchetes, legendas, histórias em quadrinhos, rótulos), usando pistas linguísticas e do contexto para antecipar e validar o que está escrito.",
      "materials": ["Rótulos e embalagens variadas", "Tiras de história em quadrinhos simples", "Placas de identificação da sala"],
      "steps": [
        "Apresentar rótulos de embalagens conhecidas, como macarrão, suco ou biscoito.",
        "Perguntar o que os alunos acham que está escrito, usando pistas como cor, formato e imagem.",
        "Validar coletivamente a leitura, comparando com o texto do rótulo.",
        "Repetir com placas de identificação da sala, como banheiro e biblioteca.",
        "Fechar com uma tira de história em quadrinhos, pedindo que antecipem o que os personagens dizem."
      ]
    },
    {
      "theme": "Roda de contação de contos de fadas e acumulativos",
      "curriculumCode": "EF01LP05",
      "description": "Escuta da leitura de textos literários diversos (contos de fadas, acumulativos, modernos e populares de diferentes culturas), reconhecendo a organização interna da história.",
      "materials": ["Livro de conto de fadas ou acumulativo (ex.: 'A Casa Sonolenta')", "Fantoches ou imagens de apoio"],
      "steps": [
        "Organizar a turma em roda de leitura.",
        "Ler o conto em voz alta, com entonação.",
        "Parar em pontos-chave para os alunos anteciparem o que vem a seguir.",
        "Conversar sobre o início, o meio e o fim da história.",
        "Comparar com outro conto conhecido, destacando semelhanças na organização."
      ]
    },
    {
      "theme": "Cantigas de roda e seus efeitos de sentido",
      "curriculumCode": "EF01LP06",
      "description": "Leitura de cantigas, parlendas e textos da tradição oral, refletindo sobre os efeitos de sentido que provocam.",
      "materials": ["Cartaz com a letra de uma cantiga de roda", "Instrumento de percussão simples (opcional)"],
      "steps": [
        "Cantar a cantiga de roda com a turma.",
        "Mostrar a letra escrita no cartaz.",
        "Conversar sobre o que a cantiga quer dizer e a sensação que ela transmite.",
        "Perguntar por que certas palavras rimam ou se repetem.",
        "Repetir a cantiga variando o ritmo e observando o efeito produzido."
      ]
    },
    {
      "theme": "Notícias e contos sobre diferentes famílias e culturas",
      "curriculumCode": "EF01LP07",
      "description": "Escuta da leitura de reportagens, notícias e contos modernos que abordem diferentes representações sociais, refletindo sobre e respeitando a diversidade cultural.",
      "materials": ["Notícia ou conto adaptado sobre diversidade cultural ou familiar", "Imagens complementares"],
      "steps": [
        "Apresentar o texto e o tema, como diferentes tipos de família ou comunidade.",
        "Ler o texto em voz alta para a turma.",
        "Conversar sobre o que aprenderam sobre a realidade retratada.",
        "Comparar com a realidade dos próprios alunos, valorizando as diferenças.",
        "Fechar com um desenho representando o que mais chamou atenção."
      ]
    },
    {
      "theme": "Conhecendo a história do bairro pela leitura",
      "curriculumCode": "EF01LP08",
      "description": "Escuta da leitura de relatos históricos, verbetes e textos jornalísticos, incluindo reportagens e documentários, para conhecer e valorizar as culturas da comunidade escolar.",
      "materials": ["Verbete ou texto curto sobre a história do bairro ou comunidade", "Imagens ou trecho de vídeo relacionado"],
      "steps": [
        "Apresentar o texto informativo sobre a história do bairro ou da comunidade escolar.",
        "Ler em voz alta, explicando as palavras novas.",
        "Exibir imagens ou um trecho de vídeo relacionado ao tema.",
        "Conversar sobre o que descobriram de novo.",
        "Registrar coletivamente, em cartaz, uma curiosidade aprendida."
      ]
    },
    {
      "theme": "Comparando os nomes da turma",
      "curriculumCode": "EF01LP09",
      "description": "Análise de semelhanças e diferenças entre os nomes dos colegas, observando extensão, quantidade de letras, letras iniciais e finais.",
      "materials": ["Lista de nomes dos alunos", "Crachás com os nomes"],
      "steps": [
        "Distribuir os crachás com os nomes dos alunos.",
        "Pedir que comparem seu nome com o de um colega: qual é maior, qual é menor.",
        "Procurar, em duplas, nomes que começam com a mesma letra.",
        "Procurar nomes que terminam com a mesma letra.",
        "Contar quantas letras tem cada nome e registrar coletivamente na lousa."
      ]
    },
    {
      "theme": "Meu nome é assim",
      "curriculumCode": "EF01LP10",
      "description": "Escrita do próprio nome com autonomia, sem necessidade de cópia de um modelo.",
      "materials": ["Crachá modelo com o nome de cada aluno", "Folha para escrita livre", "Lápis"],
      "steps": [
        "Mostrar o crachá com o nome de cada aluno.",
        "Pedir que observem as letras do próprio nome.",
        "Solicitar que escrevam o nome de memória, sem copiar.",
        "Comparar com o modelo e ajustar se necessário.",
        "Decorar o crachá com o nome escrito."
      ]
    },
    {
      "theme": "Lista de livros preferidos da turma",
      "curriculumCode": "EF01LP11",
      "description": "Escrita de listas de palavras ou títulos de livros, parlendas e quadrinhas, consultando referenciais estáveis como a lista de nomes da turma e justificando a forma de escrever.",
      "materials": ["Lista de nomes da turma como referencial estável", "Títulos de livros da sala", "Folha para a lista"],
      "steps": [
        "Escolher com a turma alguns livros preferidos.",
        "Pedir que escrevam a lista dos títulos, consultando a lista de nomes da turma como apoio.",
        "Perguntar a cada aluno por que escreveu as letras daquela forma.",
        "Comparar as listas produzidas pelos alunos.",
        "Expor a lista final na sala."
      ]
    },
    {
      "theme": "Montando listas com letras móveis",
      "curriculumCode": "EF01LP12",
      "description": "Escrita de listas de palavras ou títulos com letras móveis, justificando as decisões tomadas em relação às letras utilizadas.",
      "materials": ["Alfabeto móvel", "Lista de palavras-alvo (títulos, parlendas)"],
      "steps": [
        "Distribuir o alfabeto móvel para duplas.",
        "Ditar uma palavra da lista, como um título de livro ou parlenda.",
        "Pedir que montem a palavra com as letras móveis.",
        "Perguntar por que escolheram cada letra.",
        "Repetir com outras palavras da lista, comparando as escolhas entre as duplas."
      ]
    },
    {
      "theme": "Escrevendo de cor a parlenda favorita",
      "curriculumCode": "EF01LP13",
      "description": "Escrita alfabética de textos que se sabe de cor (parlendas, adivinhas, quadrinhas, cantigas) e listas em geral, mesmo com falhas no valor sonoro convencional.",
      "materials": ["Folha pautada", "Lápis", "Parlenda já memorizada pela turma"],
      "steps": [
        "Recitar a parlenda memorizada com a turma.",
        "Pedir que cada aluno escreva a parlenda sozinho, do jeito que sabe.",
        "Circular pela sala apoiando com perguntas sobre os sons das palavras.",
        "Comparar a escrita produzida com o texto original.",
        "Elogiar as tentativas, destacando avanços na escrita alfabética."
      ]
    },
    {
      "theme": "Recontando a história com nossas palavras",
      "curriculumCode": "EF01LP14",
      "description": "Reconto de histórias conhecidas, respeitando as características do gênero e utilizando progressivamente marcas do registro literário escrito.",
      "materials": ["Livro de história já lida para a turma", "Fantoches ou imagens de apoio"],
      "steps": [
        "Reler a história para a turma.",
        "Conversar sobre as partes principais: início, meio e fim.",
        "Pedir que um aluno reconte a história em voz alta, com apoio dos colegas.",
        "Incentivar o uso de expressões típicas de conto, como 'Era uma vez...'.",
        "Repetir o reconto com outro aluno, comparando as versões."
      ]
    },
    {
      "theme": "Reescrevendo um conto conhecido",
      "curriculumCode": "EF01LP15",
      "description": "Reescrita, ditando ao professor ou por punho próprio, de contos conhecidos, respeitando a progressão temática, as ideias principais e características da linguagem literária escrita.",
      "materials": ["Conto já trabalhado em sala", "Cartaz ou caderno para escrita coletiva"],
      "steps": [
        "Relembrar coletivamente o conto já lido.",
        "Organizar oralmente as partes principais na ordem certa.",
        "Ditar a reescrita para o professor registrar no cartaz.",
        "Reler o texto produzido, ajustando trechos que faltam sentido.",
        "Ilustrar a reescrita em pequenos grupos."
      ]
    },
    {
      "theme": "Indicando um livro para os colegas",
      "curriculumCode": "EF01LP16",
      "description": "Escrita de indicações literárias de livros, legendas para imagens e verbetes de curiosidades, ditando ao professor ou por punho próprio, respeitando a situação comunicativa.",
      "materials": ["Livro escolhido pelo aluno", "Ficha de indicação literária", "Imagens para legendar"],
      "steps": [
        "Escolher um livro já lido na sala para indicar aos colegas.",
        "Conversar sobre o que gostou no livro.",
        "Ditar ao professor, ou escrever, uma pequena indicação explicando por que recomenda.",
        "Legendar uma imagem relacionada ao livro.",
        "Expor as indicações no mural de leitura da sala."
      ]
    },
    {
      "theme": "Relato do passeio da turma",
      "curriculumCode": "EF01LP17",
      "description": "Escrita de relatos de experiências vividas pela classe, situando as ações no tempo de modo coerente.",
      "materials": ["Fotos ou desenhos do passeio ou evento vivido", "Cartaz para escrita coletiva"],
      "steps": [
        "Relembrar coletivamente o passeio ou evento vivido pela turma.",
        "Organizar oralmente os fatos na ordem em que aconteceram.",
        "Ditar o relato para o professor registrar no cartaz.",
        "Reler o relato conferindo se a ordem dos fatos está correta.",
        "Ilustrar o relato com desenhos."
      ]
    },
    {
      "theme": "Convite para a festa da turma",
      "curriculumCode": "EF01LP18",
      "description": "Escrita de bilhetes, convites, cartas e cartões postais, respeitando as características da situação comunicativa.",
      "materials": ["Modelo de convite já pronto", "Papel decorado", "Lápis de cor"],
      "steps": [
        "Apresentar um modelo de convite já pronto.",
        "Conversar sobre as informações que não podem faltar, como data, local e horário.",
        "Produzir coletivamente um convite para um evento da turma.",
        "Pedir que cada aluno escreva ou decore seu próprio convite.",
        "Entregar os convites aos destinatários combinados."
      ]
    },
    {
      "theme": "Roda de explicação sobre um tema estudado",
      "curriculumCode": "EF01LP19",
      "description": "Explicação oral de aspectos de temas estudados em diferentes áreas do conhecimento, formulando perguntas, comentando e opinando sobre o tema.",
      "materials": ["Cartaz ou objeto relacionado ao tema estudado, como o ciclo da água"],
      "steps": [
        "Retomar um tema estudado recentemente em outra área, como ciências.",
        "Pedir que um aluno explique o que aprendeu para a turma.",
        "Incentivar os colegas a formularem perguntas sobre a explicação.",
        "Comentar e dar opiniões sobre o tema.",
        "Fechar com um resumo coletivo do que foi discutido."
      ]
    },
    {
      "theme": "Roda de jornal: o que aconteceu essa semana",
      "curriculumCode": "EF01LP20",
      "description": "Apresentação oral de ideias sobre temas diversos, reconhecendo características da situação comunicativa em rodas de conversa, de jornal ou de leitores.",
      "materials": ["Nenhum material obrigatório", "Opcionalmente, uma notícia trazida de casa"],
      "steps": [
        "Organizar a turma em roda de conversa.",
        "Explicar a diferença entre roda de jornal, de leitores e de conversa livre.",
        "Pedir que cada aluno apresente uma ideia ou notícia sobre a semana.",
        "Orientar sobre esperar a vez e falar de forma que todos ouçam.",
        "Fechar destacando os temas mais interessantes levantados."
      ]
    },
    {
      "theme": "Contando o que fiz no fim de semana",
      "curriculumCode": "EF01LP21",
      "description": "Relato oral de experiências vividas, organizando-as de acordo com a situação comunicativa.",
      "materials": ["Nenhum material obrigatório"],
      "steps": [
        "Explicar que cada aluno vai contar algo que viveu no fim de semana.",
        "Modelar um relato curto como exemplo.",
        "Pedir que cada aluno organize mentalmente o que aconteceu primeiro, depois e por último.",
        "Chamar os alunos, um a um, para relatar oralmente.",
        "Fazer perguntas para ajudar quem tiver dificuldade de organizar o relato."
      ]
    },
    {
      "theme": "Discussão sobre as regras da sala",
      "curriculumCode": "EF01LP22",
      "description": "Participação em discussões, ouvindo com atenção e emitindo opinião sobre o tema tratado.",
      "materials": ["Cartaz com as regras combinadas da turma"],
      "steps": [
        "Apresentar um tema simples para discussão, como uma regra da sala.",
        "Explicar as combinações para participar: ouvir, levantar a mão, esperar a vez.",
        "Conduzir a discussão, incentivando que cada aluno dê sua opinião.",
        "Registrar as opiniões no cartaz.",
        "Fechar com uma decisão coletiva sobre o tema discutido."
      ]
    },
    {
      "theme": "Quem são os personagens do conto",
      "curriculumCode": "EF01LP23",
      "description": "Identificação, em contos lidos pelo professor, das características das personagens.",
      "materials": ["Conto lido em sala", "Imagens dos personagens"],
      "steps": [
        "Reler um conto já conhecido pela turma.",
        "Conversar sobre quem são os personagens da história.",
        "Pedir que descrevam como é cada personagem: bom, mau, engraçado, corajoso.",
        "Comparar personagens de duas histórias diferentes.",
        "Desenhar o personagem preferido, justificando a escolha."
      ]
    },
    {
      "theme": "Tirando as repetições do nosso texto",
      "curriculumCode": "EF01LP24",
      "description": "Eliminação de repetições indesejadas em textos coletivos, substituindo o referente por outra palavra (nome, pronome, apelido) ou usando elipse.",
      "materials": ["Texto coletivo produzido anteriormente pela turma", "Lousa"],
      "steps": [
        "Reler um texto coletivo já produzido pela turma.",
        "Identificar palavras que se repetem muitas vezes, como o nome de um personagem.",
        "Discutir outras formas de se referir à mesma coisa, como 'ele' ou 'o menino'.",
        "Reescrever coletivamente o trecho, substituindo as repetições.",
        "Comparar o texto antes e depois da mudança."
      ]
    },
    {
      "theme": "Ajustando as palavras de ligação do texto",
      "curriculumCode": "EF01LP25",
      "description": "Eliminação de organizadores textuais não adequados ao registro linguístico do texto, como o uso repetitivo de conectivos.",
      "materials": ["Texto coletivo com uso repetitivo de conectivo, como 'aí'", "Lousa"],
      "steps": [
        "Reler um texto coletivo produzido pela turma.",
        "Identificar o uso repetido de uma palavra de ligação, como 'aí... aí... aí'.",
        "Conversar sobre outras formas de ligar as ideias no texto escrito.",
        "Reescrever coletivamente o trecho, substituindo os conectivos repetidos.",
        "Ler o texto final, comparando com a versão original."
      ]
    },
    {
      "theme": "Organizando as partes da nossa história",
      "curriculumCode": "EF01LP26",
      "description": "Articulação, em atividade de reescrita, das partes que compõem o texto de forma coerente, sem provocar problemas de compreensão.",
      "materials": ["Tiras com trechos de uma história embaralhada", "Cartaz"],
      "steps": [
        "Distribuir tiras com partes de uma história embaralhada.",
        "Pedir que a turma organize as tiras na ordem que faz sentido.",
        "Ler a história montada em voz alta.",
        "Discutir se a ordem escolhida ficou compreensível.",
        "Colar as tiras na ordem final no cartaz."
      ]
    },
    {
      "theme": "Quem está contando a história?",
      "curriculumCode": "EF01LP27",
      "description": "Emprego, em atividade de reescrita, do mesmo tipo de narrador (1ª ou 3ª pessoa) presente no texto de referência.",
      "materials": ["Trecho de conto narrado em 3ª pessoa", "Trecho de relato narrado em 1ª pessoa"],
      "steps": [
        "Ler dois textos curtos: um contado por 'eu' e outro contado por 'ele' ou 'ela'.",
        "Conversar sobre quem está falando em cada um.",
        "Escolher um dos textos para reescrever coletivamente, mantendo o mesmo narrador.",
        "Conferir se, durante a reescrita, o narrador mudou sem querer.",
        "Corrigir juntos os trechos em que o narrador mudou."
      ]
    },
    {
      "theme": "Comparando coisas nos textos que lemos",
      "curriculumCode": "EF01LP28",
      "description": "Identificação, em textos lidos, de comparações entre dois termos.",
      "materials": ["Texto ou poema com comparações simples, como 'os olhos brilhavam como estrelas'"],
      "steps": [
        "Ler um texto ou poema com comparações simples.",
        "Destacar a frase em que duas coisas são comparadas.",
        "Perguntar o que está sendo comparado e por quê.",
        "Propor que os alunos criem oralmente novas comparações, como 'rápido como um...'.",
        "Registrar coletivamente as comparações criadas pela turma."
      ]
    },
    {
      "theme": "Observando as cores e imagens do livro",
      "curriculumCode": "EF01LP29",
      "description": "Análise de aspectos gráficos do material lido pelo professor, reconhecendo efeitos de sentido provocados por recursos como cores, imagens e efeito tridimensional.",
      "materials": ["Livro ilustrado com recursos gráficos variados, como cores fortes ou dobras"],
      "steps": [
        "Apresentar um livro com recursos gráficos interessantes, como cores fortes, imagens grandes ou dobras.",
        "Ler a história observando esses recursos junto com a turma.",
        "Perguntar o que as cores ou imagens fazem sentir, como medo, alegria ou surpresa.",
        "Comparar com outro livro de estilo gráfico diferente.",
        "Fechar comentando qual recurso gráfico mais gostaram."
      ]
    }
  ],
  matematica: [
    {
      "theme": "Os números no nosso dia a dia",
      "curriculumCode": "EF01M01",
      "description": "Reconhecimento de que os números aparecem no cotidiano indicando quantidade, ordem, medida ou código (como em placas, embalagens e números de casa).",
      "materials": ["Embalagens vazias com números", "Fotos ou recortes de números do dia a dia (relógio, calendário, placa de carro, régua)", "Cartolina"],
      "steps": [
        "Perguntar às crianças onde elas já viram números fora da escola.",
        "Mostrar imagens de números em diferentes contextos: relógio, telefone, ônibus, régua, camisa de time.",
        "Conversar sobre o que cada número está indicando ali (quantidade, ordem, medida ou código).",
        "Pedir que cada criança traga ou desenhe um número que viu em casa.",
        "Montar um painel coletivo classificando os números encontrados por tipo de uso."
      ]
    },
    {
      "theme": "Descobrindo como se escrevem os números",
      "curriculumCode": "EF01M02",
      "description": "Formulação de hipóteses sobre a leitura e a escrita dos números, explorando numerais familiares e frequentes no cotidiano da criança.",
      "materials": ["Cartões com numerais", "Lousa ou cartolina", "Giz de cera ou lápis"],
      "steps": [
        "Escrever alguns números familiares na lousa (idade, número da sala, data).",
        "Perguntar como as crianças acham que se lê cada número, sem corrigir de imediato.",
        "Registrar as hipóteses levantadas pela turma.",
        "Comparar as hipóteses e ajudar o grupo a chegar à leitura correta.",
        "Propor que cada criança escreva, do seu jeito, um número que considera importante."
      ]
    },
    {
      "theme": "Contando e registrando coleções",
      "curriculumCode": "EF01M03",
      "description": "Contagem da quantidade de objetos de coleções fixas ou móveis, com registro do resultado por meio de fala, desenho, símbolos ou números.",
      "materials": ["Coleção de objetos pequenos (tampinhas, botões, feijões)", "Folha de registro", "Lápis"],
      "steps": [
        "Distribuir pequenas coleções de objetos para grupos de alunos.",
        "Pedir que contem os objetos em voz alta, apontando um a um.",
        "Perguntar quantos objetos há ao final da contagem.",
        "Orientar o registro do resultado por desenho, marcas ou número.",
        "Comparar os registros de diferentes grupos, discutindo as formas escolhidas."
      ]
    },
    {
      "theme": "Contagem para frente e para trás",
      "curriculumCode": "EF01M04",
      "description": "Realização de recitações orais de números, contando de um em um ou de dois em dois, em ordem crescente e decrescente.",
      "materials": ["Nenhum material obrigatório", "Bola (opcional, para passar entre os alunos)"],
      "steps": [
        "Combinar com a turma uma contagem em roda, cada criança dizendo o próximo número.",
        "Praticar a contagem crescente de um em um, começando de números diferentes.",
        "Repetir contando de dois em dois.",
        "Praticar a contagem decrescente, do maior para o menor, como se fosse uma contagem regressiva de foguete.",
        "Encerrar com um jogo rápido em que a criança que erra a sequência recomeça a rodada."
      ]
    },
    {
      "theme": "Qual número é maior?",
      "curriculumCode": "EF01M05",
      "description": "Comparação entre números naturais, identificando qual é maior, menor ou se são iguais.",
      "materials": ["Cartões numerados", "Lousa"],
      "steps": [
        "Distribuir dois cartões numerados para cada dupla de alunos.",
        "Pedir que decidam juntos qual número é maior.",
        "Circular pela sala perguntando como cada dupla decidiu.",
        "Propor uma rodada coletiva na lousa, comparando números sorteados.",
        "Fechar reforçando os termos maior, menor e igual."
      ]
    },
    {
      "theme": "Formando pares e grupos",
      "curriculumCode": "EF01M06",
      "description": "Formação de pares e agrupamentos de objetos como estratégia para facilitar a contagem e a comparação entre duas coleções.",
      "materials": ["Objetos variados (lápis, blocos, tampinhas)", "Duas caixas ou bandejas"],
      "steps": [
        "Separar os objetos em duas coleções diferentes.",
        "Pedir que os alunos formem pares, ligando um objeto de cada coleção.",
        "Observar juntos se sobraram objetos em alguma das coleções.",
        "Discutir qual coleção tem mais, tem menos ou se são iguais, com base nos pares formados.",
        "Repetir a atividade agrupando de outras formas, como em grupos de três."
      ]
    },
    {
      "theme": "Mais, menos ou igual?",
      "curriculumCode": "EF01M07",
      "description": "Comparação de quantidades de objetos de duas coleções por estimativa ou correspondência, identificando qual tem mais, qual tem menos ou se têm a mesma quantidade.",
      "materials": ["Duas coleções de objetos com quantidades diferentes", "Barbante ou giz para ligar os itens"],
      "steps": [
        "Apresentar duas coleções de objetos sem contá-las inicialmente.",
        "Pedir que a turma estime, só olhando, qual tem mais objetos.",
        "Verificar a estimativa fazendo a correspondência um a um entre as coleções.",
        "Registrar o resultado usando as palavras mais, menos ou igual.",
        "Repetir com novas coleções, variando as quantidades."
      ]
    },
    {
      "theme": "Quebrando e juntando números",
      "curriculumCode": "EF01M08",
      "description": "Composição e decomposição de um número natural de diversas maneiras diferentes, usando materiais manipuláveis.",
      "materials": ["Material dourado ou blocos de encaixe", "Cartões numerados"],
      "steps": [
        "Escolher um número para trabalhar, por exemplo o 8.",
        "Pedir que os alunos montem esse número usando blocos, de mais de uma forma (6+2, 5+3, etc.).",
        "Registrar no caderno ou na lousa as diferentes composições encontradas.",
        "Comparar as diferentes formas que os grupos encontraram para o mesmo número.",
        "Repetir a atividade com outros números."
      ]
    },
    {
      "theme": "Contas de cabeça: fatos da soma e da subtração",
      "curriculumCode": "EF01M09",
      "description": "Exploração de fatos fundamentais da adição e da subtração, construindo um repertório de cálculo mental ou escrito para uso na resolução de problemas.",
      "materials": ["Objetos manipuláveis (tampinhas, palitos)", "Lousa"],
      "steps": [
        "Propor pequenas contas orais, como 'quanto é 3 mais 2?', usando objetos como apoio.",
        "Deixar que as crianças resolvam usando os dedos, desenhos ou objetos.",
        "Registrar as respostas coletivamente na lousa.",
        "Repetir com pequenas subtrações, como 'de 5, tirando 2'.",
        "Encerrar com um jogo rápido de perguntas e respostas em roda."
      ]
    },
    {
      "theme": "O que acontece quando eu acrescento ou tiro?",
      "curriculumCode": "EF01M10",
      "description": "Indicação do número que será obtido quando objetos são acrescidos ou retirados de uma coleção dada.",
      "materials": ["Coleção de objetos pequenos", "Caixa ou bandeja"],
      "steps": [
        "Colocar uma quantidade de objetos na caixa e contar juntos.",
        "Acrescentar mais objetos e perguntar quantos há agora, antes de contar de novo.",
        "Conferir a resposta contando a coleção final.",
        "Repetir retirando objetos da caixa e perguntando quantos sobraram.",
        "Registrar os resultados com desenhos ou números no caderno."
      ]
    },
    {
      "theme": "Dobro e triplo com objetos",
      "curriculumCode": "EF01M11",
      "description": "Composição de uma coleção com duas ou três vezes mais objetos do que outra coleção dada.",
      "materials": ["Objetos pequenos em quantidade", "Duas bandejas"],
      "steps": [
        "Montar uma coleção pequena de objetos em uma bandeja.",
        "Pedir que os alunos montem, na outra bandeja, uma coleção com o dobro de objetos.",
        "Conferir juntos contando as duas coleções.",
        "Repetir propondo agora o triplo da quantidade inicial.",
        "Conversar sobre como fizeram para descobrir a quantidade certa."
      ]
    },
    {
      "theme": "Organizando em grupos iguais",
      "curriculumCode": "EF01M12",
      "description": "Organização dos objetos de uma coleção em grupos de igual quantidade, sempre que possível.",
      "materials": ["Coleção de objetos pequenos", "Pratinhos ou potes pequenos"],
      "steps": [
        "Entregar uma coleção de objetos para cada grupo de alunos.",
        "Pedir que organizem os objetos em grupos com a mesma quantidade cada um.",
        "Perguntar quantos grupos conseguiram formar e se sobrou algum objeto.",
        "Comparar as diferentes formas de agrupar entre os grupos da turma.",
        "Registrar no caderno com desenhos os grupos formados."
      ]
    },
    {
      "theme": "Resolvendo problemas de juntar",
      "curriculumCode": "EF01M13",
      "description": "Resolução de problemas do campo aditivo associados à ideia de composição, usando diferentes estratégias pessoais de representação.",
      "materials": ["Problema oral ou desenhado na lousa", "Objetos manipuláveis para apoio"],
      "steps": [
        "Contar um pequeno problema envolvendo juntar quantidades, como brinquedos ou frutas.",
        "Perguntar o que o problema quer que a turma descubra.",
        "Deixar que cada criança resolva do seu jeito, com desenhos, dedos ou objetos.",
        "Circular pela sala observando as estratégias usadas.",
        "Compartilhar oralmente algumas formas diferentes de chegar à resposta."
      ]
    },
    {
      "theme": "Organizando por cor, forma e tamanho",
      "curriculumCode": "EF01M14",
      "description": "Organização e ordenação de objetos familiares ou representações figurais por meio de atributos como cor, formato e medida.",
      "materials": ["Botões, blocos ou objetos variados em cores e formatos diferentes"],
      "steps": [
        "Espalhar objetos variados sobre a mesa.",
        "Pedir que a turma separe os objetos por cor.",
        "Repetir a separação agora por formato e depois por tamanho.",
        "Conversar sobre outros critérios que poderiam ser usados para organizar.",
        "Propor que cada aluno organize uma pequena coleção à sua escolha e explique o critério usado."
      ]
    },
    {
      "theme": "Descobrindo o que vem depois no padrão",
      "curriculumCode": "EF01M15",
      "description": "Investigação e descrição oral de um padrão ou regularidade, identificando elementos ausentes em sequências recursivas numéricas ou figurais.",
      "materials": ["Objetos ou figuras coloridas para montar sequências", "Cartões com sequências incompletas"],
      "steps": [
        "Montar uma sequência simples com objetos, como vermelho, azul, vermelho, azul.",
        "Pedir que a turma descubra e continue o padrão.",
        "Apresentar uma sequência com uma peça faltando e perguntar qual deveria estar ali.",
        "Deixar que os alunos criem suas próprias sequências em duplas.",
        "Compartilhar as sequências criadas, com a turma tentando descobrir o padrão dos colegas."
      ]
    },
    {
      "theme": "Onde eu estou na sala?",
      "curriculumCode": "EF01M16",
      "description": "Identificação oral de pontos de referência para indicar a própria localização na sala de aula, usando terminologia própria.",
      "materials": ["Nenhum material obrigatório", "Objetos de referência já existentes na sala"],
      "steps": [
        "Pedir que cada criança observe onde está sentada em relação a algum ponto da sala.",
        "Perguntar, um a um, 'onde você está?' incentivando respostas com pontos de referência (perto da janela, perto da porta).",
        "Explorar oralmente os termos direita, esquerda, frente e atrás.",
        "Propor um jogo em que uma criança descreve sua localização e os colegas tentam adivinhar quem é.",
        "Encerrar comentando as diferentes formas de descrever a mesma localização."
      ]
    },
    {
      "theme": "Minha posição na sala",
      "curriculumCode": "EF01M17",
      "description": "Indicação oral da posição em que a criança se encontra na sala de aula, usando termos como direita, esquerda, à frente e atrás, representando-a também por meio de desenhos.",
      "materials": ["Papel", "Lápis de cor"],
      "steps": [
        "Pedir que cada criança diga oralmente onde está sentada usando os termos direita, esquerda, à frente e atrás.",
        "Explorar coletivamente exemplos: quem está à frente de quem, quem está ao lado de quem.",
        "Propor que cada aluno desenhe a sala de aula, marcando sua própria posição.",
        "Circular ajudando quem tiver dificuldade em representar a posição.",
        "Compartilhar os desenhos, comparando as diferentes representações da mesma sala."
      ]
    },
    {
      "theme": "O caminho até lá",
      "curriculumCode": "EF01M18",
      "description": "Indicação oral do caminho para se movimentar no espaço da sala e chegar a um determinado local, com representação por meio de desenhos.",
      "materials": ["Espaço livre na sala", "Papel e lápis"],
      "steps": [
        "Escolher um local da sala como destino, por exemplo a porta.",
        "Pedir que uma criança explique oralmente, passo a passo, o caminho até lá.",
        "Testar se outra criança consegue seguir as instruções dadas.",
        "Propor que os alunos desenhem o caminho percorrido.",
        "Repetir a atividade com destinos diferentes."
      ]
    },
    {
      "theme": "Lendo mapinhas da sala",
      "curriculumCode": "EF01M19",
      "description": "Leitura de croquis simples que indicam a posição ou a movimentação de um objeto ou de uma pessoa.",
      "materials": ["Croqui simples desenhado da sala de aula", "Marcador ou objeto para representar uma pessoa"],
      "steps": [
        "Apresentar um croqui simples da sala, com poucos elementos.",
        "Perguntar o que cada desenho no croqui representa.",
        "Pedir que os alunos localizem, no croqui, onde estão sentados.",
        "Mostrar um caminho desenhado no croqui e pedir que descrevam o que ele indica.",
        "Propor que a turma desenhe um croqui simples de outro espaço conhecido, como o pátio."
      ]
    },
    {
      "theme": "Formas geométricas no dia a dia",
      "curriculumCode": "EF01M20",
      "description": "Identificação, entre objetos do cotidiano, dos que se parecem com figuras geométricas espaciais como blocos retangulares, cubos, esferas, cones e cilindros.",
      "materials": ["Objetos do cotidiano (caixas, bolas, latas, cones de trânsito de brinquedo)"],
      "steps": [
        "Espalhar diversos objetos do cotidiano sobre a mesa.",
        "Pedir que a turma observe e agrupe os objetos parecidos entre si.",
        "Apresentar os nomes das figuras geométricas espaciais associadas (bloco retangular, cubo, esfera, cone, cilindro).",
        "Propor uma caça a objetos na sala que se pareçam com essas figuras.",
        "Registrar em uma tabela os objetos encontrados por tipo de figura."
      ]
    },
    {
      "theme": "As faces da caixa",
      "curriculumCode": "EF01M21",
      "description": "Investigação das similaridades e diferenças entre as faces que compõem caixas em formato de bloco retangular.",
      "materials": ["Caixas em formato de bloco retangular (caixa de sapato, caixa de pasta de dente)"],
      "steps": [
        "Distribuir caixas em formato de bloco retangular para os grupos.",
        "Pedir que observem e contem quantas faces cada caixa tem.",
        "Perguntar se todas as faces são iguais entre si.",
        "Comparar faces opostas, discutindo semelhanças e diferenças.",
        "Registrar as observações com desenhos das faces observadas."
      ]
    },
    {
      "theme": "Rola ou não rola?",
      "curriculumCode": "EF01M22",
      "description": "Identificação, entre objetos parecidos com figuras geométricas espaciais, dos que apresentam superfícies planas e dos que apresentam superfícies arredondadas.",
      "materials": ["Objetos variados (bolas, latas, caixas, cones)", "Rampa improvisada ou mesa inclinada"],
      "steps": [
        "Separar objetos que se parecem com figuras geométricas espaciais diferentes.",
        "Perguntar quais objetos a turma acha que vão rolar e quais não vão.",
        "Testar cada objeto em uma rampa ou empurrando sobre a mesa.",
        "Discutir por que alguns rolam e outros não, relacionando com as superfícies planas e arredondadas.",
        "Classificar os objetos em dois grupos: os que rolam e os que não rolam."
      ]
    },
    {
      "theme": "Desenhando formas geométricas",
      "curriculumCode": "EF01M23",
      "description": "Representação, por meio de desenhos, de objetos do cotidiano parecidos com algumas figuras geométricas espaciais.",
      "materials": ["Objetos do cotidiano com formas geométricas variadas", "Papel e lápis"],
      "steps": [
        "Mostrar novamente objetos do cotidiano com diferentes formas geométricas espaciais.",
        "Escolher um objeto e observar seu formato com atenção antes de desenhar.",
        "Pedir que cada aluno desenhe o objeto escolhido, tentando representar seu formato.",
        "Circular ajudando quem tiver dificuldade em representar a forma.",
        "Expor os desenhos e conversar sobre quais figuras geométricas aparecem em cada um."
      ]
    },
    {
      "theme": "Vai acontecer ou não?",
      "curriculumCode": "EF01M24",
      "description": "Classificação de eventos aleatórios em situações do cotidiano, usando expressões como 'acontecerá com certeza', 'talvez aconteça' e 'é impossível acontecer'.",
      "materials": ["Cartões com frases de situações do cotidiano"],
      "steps": [
        "Apresentar frases simples do cotidiano, como 'vai chover amanhã' ou 'o sol vai nascer amanhã'.",
        "Perguntar à turma se cada situação é certa, possível ou impossível de acontecer.",
        "Registrar as respostas em três colunas na lousa: certeza, talvez, impossível.",
        "Pedir que os alunos criem, em duplas, novas frases para cada categoria.",
        "Compartilhar as frases criadas e classificá-las juntos."
      ]
    },
    {
      "theme": "Pesquisando as preferências da turma",
      "curriculumCode": "EF01M25",
      "description": "Realização de pesquisas sobre preferências das crianças em relação a brinquedos, frutas, merendas etc., criando registros pessoais para organizar e comunicar os resultados.",
      "materials": ["Papel", "Lápis de cor", "Cartões com opções (frutas, brinquedos)"],
      "steps": [
        "Escolher um tema simples de preferência, como fruta favorita.",
        "Perguntar a cada criança qual é a sua preferida.",
        "Pedir que cada aluno registre a resposta com desenho ou marca no papel.",
        "Reunir os registros individuais em um painel coletivo.",
        "Conversar sobre qual opção foi mais escolhida pela turma."
      ]
    },
    {
      "theme": "Lendo tabelas e gráficos simples",
      "curriculumCode": "EF01M26",
      "description": "Leitura e comparação de dados expressos em tabelas simples ou em gráficos de colunas simples.",
      "materials": ["Tabela ou gráfico de colunas simples já pronto, com dados da turma"],
      "steps": [
        "Apresentar uma tabela ou gráfico simples com dados já coletados da turma.",
        "Perguntar o que cada linha ou coluna representa.",
        "Pedir que identifiquem qual item aparece mais vezes e qual aparece menos.",
        "Fazer perguntas de comparação, como 'quantos a mais um item tem que o outro'.",
        "Registrar oralmente as conclusões da turma sobre os dados apresentados."
      ]
    },
    {
      "theme": "Coletando e organizando dados",
      "curriculumCode": "EF01M27",
      "description": "Coleta de dados de um acontecimento, organizando-os e representando-os em tabelas simples.",
      "materials": ["Papel", "Lápis", "Objeto ou situação para observar (por exemplo, cor das mochilas da turma)"],
      "steps": [
        "Escolher um acontecimento simples para observar, como a cor da mochila de cada colega.",
        "Pedir que a turma ajude a coletar essa informação, um aluno de cada vez.",
        "Organizar os dados coletados em uma tabela simples na lousa.",
        "Contar juntos quantos itens há em cada categoria da tabela.",
        "Conversar sobre o que a tabela final mostra sobre a turma."
      ]
    },
    {
      "theme": "Contando o que o gráfico mostra",
      "curriculumCode": "EF01M28",
      "description": "Descrição oral de situações apresentadas por meio de gráficos de colunas simples.",
      "materials": ["Gráfico de colunas simples com dados da turma"],
      "steps": [
        "Apresentar um gráfico de colunas construído anteriormente pela turma.",
        "Pedir que um aluno descreva, com suas palavras, o que o gráfico está mostrando.",
        "Fazer perguntas para ajudar na descrição, como 'qual coluna é maior?'.",
        "Convidar outros alunos a complementar a descrição.",
        "Encerrar resumindo coletivamente a informação principal do gráfico."
      ]
    },
    {
      "theme": "Medindo com o corpo e objetos",
      "curriculumCode": "EF01M29",
      "description": "Medição de comprimentos, massas e capacidades por meio de estratégias pessoais, usando unidades de medida não padronizadas.",
      "materials": ["Barbante", "Copos pequenos", "Objetos para servir de unidade de medida (palmos, pés, clipes)"],
      "steps": [
        "Escolher um objeto da sala para medir, como a mesa.",
        "Pedir que os alunos meçam o comprimento usando palmos ou pés como unidade.",
        "Repetir a atividade medindo a capacidade de um pote com copinhos de água.",
        "Comparar os resultados encontrados por diferentes duplas.",
        "Conversar sobre por que os resultados podem ter sido diferentes entre os grupos."
      ]
    },
    {
      "theme": "Quem é mais comprido, mais pesado, cabe mais?",
      "curriculumCode": "EF01M30",
      "description": "Comparação e estimativa de medidas de comprimento, massa e capacidade, usando unidades de medida não padronizadas.",
      "materials": ["Objetos de tamanhos e pesos variados", "Balança de pratos improvisada"],
      "steps": [
        "Apresentar dois objetos e pedir que a turma estime qual é mais comprido.",
        "Conferir a estimativa comparando os objetos lado a lado.",
        "Repetir a atividade comparando pesos, usando uma balança de pratos simples.",
        "Comparar capacidades de dois recipientes, enchendo um com o conteúdo do outro.",
        "Registrar as comparações feitas usando desenhos ou palavras como mais e menos."
      ]
    },
    {
      "theme": "Os dias da semana e o calendário",
      "curriculumCode": "EF01M31",
      "description": "Exploração da sequência dos dias da semana, usando a nomenclatura ontem, hoje e amanhã, identificando essas relações no calendário.",
      "materials": ["Calendário de parede ou de mesa"],
      "steps": [
        "Apresentar o calendário do mês e localizar o dia de hoje.",
        "Perguntar qual foi o dia de ontem e qual será o dia de amanhã.",
        "Recitar em conjunto a sequência dos dias da semana.",
        "Marcar no calendário eventos importantes que virão nos próximos dias.",
        "Repetir a rotina de identificação do dia no calendário em outras aulas da semana."
      ]
    },
    {
      "theme": "Escrevendo a data de hoje",
      "curriculumCode": "EF01M32",
      "description": "Produção da escrita de uma data completa, incluindo dia, mês e ano.",
      "materials": ["Calendário", "Caderno", "Lápis"],
      "steps": [
        "Observar juntos a data de hoje no calendário.",
        "Identificar separadamente o dia, o mês e o ano.",
        "Escrever a data completa na lousa, explicando a ordem das informações.",
        "Pedir que cada aluno copie a data no caderno.",
        "Repetir essa rotina diariamente para fixar a escrita da data."
      ]
    },
    {
      "theme": "Conhecendo o dinheiro brasileiro",
      "curriculumCode": "EF01M33",
      "description": "Exploração de moedas e cédulas do sistema monetário brasileiro para solucionar problemas simples do cotidiano.",
      "materials": ["Moedas e cédulas de brinquedo (ou imagens impressas)"],
      "steps": [
        "Apresentar moedas e cédulas de brinquedo, observando suas cores e desenhos.",
        "Conversar sobre onde as crianças já viram dinheiro sendo usado.",
        "Propor uma pequena simulação de compra em uma 'lojinha' montada na sala.",
        "Ajudar os alunos a somar moedas para pagar um item simples.",
        "Encerrar conversando sobre a importância de saber usar dinheiro no dia a dia."
      ]
    },
    {
      "theme": "Brincando e calculando",
      "curriculumCode": "EF01M34",
      "description": "Participação em jogos e brincadeiras tradicionais infantis da cultura popular que exploram contagens, cálculos rápidos, movimentos e levantamento de hipóteses.",
      "materials": ["Espaço livre", "Materiais de brincadeiras tradicionais (bola, corda, giz para amarelinha)"],
      "steps": [
        "Escolher uma brincadeira tradicional que envolva contagem, como amarelinha ou 'esconde-esconde' contando até dez.",
        "Explicar as regras da brincadeira para a turma.",
        "Brincar em grupos, incentivando as crianças a contar em voz alta durante o jogo.",
        "Propor pequenos desafios de cálculo rápido durante a brincadeira, como somar pontos.",
        "Conversar ao final sobre os números e contagens usados durante a atividade."
      ]
    },
    {
      "theme": "Registrando as regras do jogo",
      "curriculumCode": "EF01M35",
      "description": "Exploração de diferentes formas de registro de jogos e brincadeiras, como a elaboração coletiva de um texto com as regras e registros por meio de tabelas e gráficos.",
      "materials": ["Papel", "Lápis", "Cartolina para o registro coletivo"],
      "steps": [
        "Retomar uma brincadeira já realizada pela turma.",
        "Conversar sobre quais são as regras principais dessa brincadeira.",
        "Ajudar a turma a ditar um texto coletivo com as regras, que o professor registra na lousa.",
        "Propor o registro de quantas vezes cada equipe venceu, usando uma tabela simples.",
        "Transformar a tabela em um pequeno gráfico de colunas com a turma."
      ]
    },
    {
      "theme": "Matemática e conservação dos oceanos",
      "curriculumCode": "EF01M36",
      "description": "Desenvolvimento de um projeto explorando a conservação dos oceanos, mares e recursos marítimos para o desenvolvimento sustentável, relacionando o tema com a Matemática.",
      "materials": ["Imagens de oceanos e animais marinhos", "Papel e lápis de cor"],
      "steps": [
        "Apresentar imagens do oceano e conversar sobre sua importância.",
        "Discutir com a turma formas simples de cuidar dos mares, como não jogar lixo na água.",
        "Propor uma contagem de objetos recicláveis coletados na sala como parte do projeto.",
        "Registrar em uma tabela simples a quantidade de materiais coletados por dia.",
        "Fechar o projeto com um desenho coletivo sobre o cuidado com os oceanos."
      ]
    },
    {
      "theme": "Matemática no oceano profundo",
      "curriculumCode": "EF01M37",
      "description": "Desenvolvimento de um projeto explorando o oceano profundo e os animais que vivem nesse ambiente, relacionando o tema com a Matemática.",
      "materials": ["Imagens de animais do oceano profundo", "Papel e lápis"],
      "steps": [
        "Apresentar imagens de animais que vivem no fundo do mar.",
        "Conversar sobre características desses animais, como tamanho e quantidade de patas ou tentáculos.",
        "Propor que a turma conte e compare características numéricas entre os animais apresentados.",
        "Pedir que cada aluno desenhe um animal do oceano profundo e registre uma informação numérica sobre ele.",
        "Compartilhar os desenhos e as informações levantadas com a turma."
      ]
    },
    {
      "theme": "Explicando como eu pensei",
      "curriculumCode": "EF01M38",
      "description": "Explicação oral das estratégias e dos processos de raciocínio utilizados na resolução de um problema.",
      "materials": ["Problema simples já resolvido pela turma em aula anterior"],
      "steps": [
        "Retomar um problema que a turma resolveu recentemente.",
        "Pedir que um aluno explique, em voz alta, como pensou para resolver.",
        "Perguntar se outros colegas pensaram de forma diferente.",
        "Registrar na lousa as diferentes estratégias explicadas pela turma.",
        "Conversar sobre como caminhos diferentes podem levar à mesma resposta correta."
      ]
    },
    {
      "theme": "Contando como resolvi o problema",
      "curriculumCode": "EF01M39",
      "description": "Explicação oral dos registros feitos e dos resultados obtidos na resolução de um problema.",
      "materials": ["Caderno com registros de um problema resolvido"],
      "steps": [
        "Pedir que cada aluno observe o registro que fez ao resolver um problema.",
        "Solicitar que expliquem oralmente o que desenharam ou escreveram.",
        "Perguntar qual foi o resultado encontrado e como sabem que está correto.",
        "Convidar colegas a fazer perguntas sobre a explicação apresentada.",
        "Encerrar destacando a importância de saber explicar o próprio raciocínio."
      ]
    }
  ],
  ciencias: [
    {
      "theme": "De que são feitos os objetos da sala de aula?",
      "curriculumCode": "EF01C01",
      "description": "Reconhecimento de características do ambiente e dos materiais (plástico, madeira, metal, tecido, papel etc.) que compõem objetos de uso cotidiano.",
      "materials": ["Objetos variados da sala de aula (lápis, régua, caderno, cadeira, garrafa)", "Sacola ou caixa para guardar os objetos"],
      "steps": [
        "Reunir a turma em roda e apresentar uma sacola com objetos variados.",
        "Retirar um objeto de cada vez e perguntar do que ele é feito.",
        "Deixar que as crianças toquem e descrevam a textura, o peso e a cor.",
        "Registrar na lousa o nome do objeto e o material correspondente.",
        "Agrupar os objetos por tipo de material (plástico, madeira, metal, tecido).",
        "Encerrar perguntando qual material eles mais encontram em casa."
      ]
    },
    {
      "theme": "Comparando materiais de diferentes lugares da escola",
      "curriculumCode": "EF01C02",
      "description": "Comparação entre diferentes materiais e diferentes localidades do ambiente escolar, reconhecendo suas características e propriedades.",
      "materials": ["Pranchetas ou papel para registro", "Lápis de cor", "Amostras coletadas em passeio pela escola (folha, pedra, pedaço de madeira, tampinha)"],
      "steps": [
        "Combinar com a turma um pequeno passeio por diferentes espaços da escola (pátio, jardim, sala).",
        "Pedir que observem e coletem (com cuidado) pequenos materiais permitidos em cada local.",
        "Voltar à sala e espalhar os materiais coletados sobre a mesa.",
        "Comparar em grupo: quais são duros, macios, lisos ou ásperos.",
        "Registrar com desenhos onde cada material foi encontrado.",
        "Conversar sobre por que certos materiais aparecem mais em certos lugares."
      ]
    },
    {
      "theme": "O fogo: uma fonte de luz e de calor",
      "curriculumCode": "EF01C03",
      "description": "Reconhecimento do fogo como fonte de luz e de calor, discutindo seus usos e os cuidados necessários no dia a dia.",
      "materials": ["Imagens de fogueira, vela acesa (apenas para demonstração do professor), fogão, lareira", "Cartolina para registro coletivo"],
      "steps": [
        "Mostrar imagens de situações em que o fogo aparece (fogão, vela, fogueira).",
        "Perguntar às crianças onde já viram fogo e para que ele serve.",
        "Explicar, com uma demonstração segura à distância, que o fogo dá luz e calor.",
        "Conversar sobre os cuidados necessários ao lidar com fogo (nunca mexer sozinho).",
        "Registrar em cartaz coletivo situações em que o fogo é útil e os cuidados de cada uma."
      ]
    },
    {
      "theme": "Esquentou ou esfriou? Investigando os materiais",
      "curriculumCode": "EF01C04",
      "description": "Investigação da influência da variação de temperatura sobre as transformações que ocorrem em diferentes materiais no cotidiano (como gelo derretendo ou chocolate amolecendo).",
      "materials": ["Cubos de gelo", "Pedaço de chocolate ou manteiga", "Pratinhos", "Local ao sol e local à sombra"],
      "steps": [
        "Distribuir um cubo de gelo em um pratinho para cada grupo.",
        "Colocar um prato ao sol e outro na sombra, pedindo previsões das crianças.",
        "Observar em intervalos o que acontece com o gelo em cada lugar.",
        "Repetir a observação com um pedaço de chocolate, comparando com o gelo.",
        "Registrar com desenhos o antes e o depois de cada material.",
        "Concluir juntos que o calor transforma alguns materiais."
      ]
    },
    {
      "theme": "Onde encontramos água ao nosso redor?",
      "curriculumCode": "EF01C05",
      "description": "Reconhecimento de que a água pode ser encontrada em diferentes lugares do ambiente (torneira, chuva, rio, poças, nuvens).",
      "materials": ["Imagens de diferentes locais com água (rio, mar, torneira, chuva, poça)", "Cartaz com o desafio 'Onde tem água?'"],
      "steps": [
        "Perguntar à turma onde eles encontram água no dia a dia.",
        "Mostrar imagens variadas de lugares com água e nomear cada uma.",
        "Separar as imagens em um cartaz coletivo com o título 'Onde tem água?'.",
        "Pedir que cada criança desenhe um lugar com água que conhece.",
        "Compartilhar os desenhos e comparar os diferentes lugares citados."
      ]
    },
    {
      "theme": "Materiais que podem ser reutilizados",
      "curriculumCode": "EF01C06",
      "description": "Identificação de materiais reutilizáveis do cotidiano, relacionando-os ao consumo consciente de recursos naturais e evitando o uso desnecessário.",
      "materials": ["Materiais recicláveis limpos (potes, caixas, tampinhas, rolos de papel)", "Duas caixas grandes para separação"],
      "steps": [
        "Espalhar sobre a mesa diversos materiais recicláveis trazidos de casa.",
        "Explicar que alguns materiais podem ser usados de novo antes de virar lixo.",
        "Pedir que a turma separe em duas caixas: 'pode reutilizar' e 'já não dá'.",
        "Sugerir um novo uso para algum material (pote vira porta-lápis, por exemplo).",
        "Montar coletivamente um objeto simples reaproveitando um dos materiais.",
        "Conversar sobre por que reutilizar ajuda a cuidar da natureza."
      ]
    },
    {
      "theme": "Materiais e recursos naturais no nosso dia a dia",
      "curriculumCode": "EF01C07",
      "description": "Reconhecimento do uso de materiais e recursos naturais em diferentes atividades do cotidiano, identificando as diferenças entre eles.",
      "materials": ["Objetos ou imagens de itens feitos de madeira, algodão, couro, papel", "Cartaz dividido em colunas por tipo de recurso"],
      "steps": [
        "Apresentar objetos do cotidiano feitos com diferentes recursos naturais.",
        "Perguntar de onde vem cada material (árvore, planta, animal, terra).",
        "Organizar um cartaz agrupando os objetos por origem do material.",
        "Conversar sobre atividades do dia a dia que usam cada tipo de recurso.",
        "Encerrar destacando a diferença entre os recursos usados em casa e na escola."
      ]
    },
    {
      "theme": "Observando o céu: Lua, Sol e estrelas",
      "curriculumCode": "EF01C08",
      "description": "Observação e nomeação dos astros visíveis no espaço, em especial a Lua, o Sol e as estrelas.",
      "materials": ["Imagens ou desenhos do céu de dia e à noite", "Cartolina preta e giz branco/amarelo para representar o céu noturno"],
      "steps": [
        "Perguntar à turma o que eles conseguem ver no céu durante o dia e à noite.",
        "Mostrar imagens do céu diurno (Sol) e noturno (Lua e estrelas).",
        "Nomear cada astro observado e conversar sobre suas diferenças.",
        "Propor que desenhem, em cartolina preta com giz, o céu de uma noite estrelada.",
        "Compartilhar os desenhos e nomear os astros representados por cada criança."
      ]
    },
    {
      "theme": "O Sol: fonte de luz e calor para a vida",
      "curriculumCode": "EF01C09",
      "description": "Reconhecimento do Sol como fonte natural de luz e calor, relacionando essas características com sua importância para os seres vivos.",
      "materials": ["Imagens do Sol e de plantas/animais recebendo luz solar", "Cartaz coletivo"],
      "steps": [
        "Perguntar o que aconteceria se o Sol não existisse mais.",
        "Mostrar imagens de plantas crescendo com luz do Sol e de pessoas se aquecendo.",
        "Explicar que o Sol dá luz e calor e que os seres vivos precisam disso.",
        "Registrar em um cartaz coletivo: 'O Sol ajuda quem?' com desenhos das crianças.",
        "Concluir a roda conversando sobre a importância do Sol para todos os seres vivos."
      ]
    },
    {
      "theme": "Brincando com sombras",
      "curriculumCode": "EF01C10",
      "description": "Investigação da sombra, relacionando sua existência à ausência de luz em determinado ponto.",
      "materials": ["Lanterna", "Objetos pequenos (bonecos, blocos)", "Sala que possa ser escurecida ou espaço com sol"],
      "steps": [
        "Escurecer parcialmente a sala e acender uma lanterna apontada para a parede.",
        "Colocar um objeto entre a lanterna e a parede e observar a sombra formada.",
        "Perguntar o que acontece com a sombra quando a luz é bloqueada.",
        "Deixar as crianças experimentarem em duplas com objetos diferentes.",
        "Levar a turma para observar sombras no pátio, sob o sol, se possível.",
        "Concluir juntos que a sombra aparece onde a luz não passa."
      ]
    },
    {
      "theme": "Manhã, tarde e noite: os períodos do dia",
      "curriculumCode": "EF01C11",
      "description": "Diferenciação entre os períodos do dia (manhã, tarde, noite) e noção de escala de tempo próximo (hoje, ontem, amanhã).",
      "materials": ["Imagens representando manhã, tarde e noite", "Cartaz com uma linha do tempo simples"],
      "steps": [
        "Mostrar imagens de cenas típicas de manhã, tarde e noite.",
        "Pedir que a turma identifique em qual período cada cena acontece.",
        "Perguntar o que cada criança fez hoje de manhã e o que fará à noite.",
        "Montar coletivamente um cartaz com a sequência manhã, tarde e noite.",
        "Conversar sobre as palavras 'hoje', 'ontem' e 'amanhã' com exemplos do dia a dia."
      ]
    },
    {
      "theme": "O que fazemos de dia e o que fazemos à noite?",
      "curriculumCode": "EF01C12",
      "description": "Distinção entre atividades diárias comumente realizadas durante o dia e durante a noite.",
      "materials": ["Cartões com desenhos de atividades (dormir, escovar os dentes, ir à escola, jantar)", "Dois cartazes: 'Dia' e 'Noite'"],
      "steps": [
        "Apresentar cartões com diferentes atividades do cotidiano.",
        "Perguntar em qual período do dia cada atividade costuma acontecer.",
        "Colar cada cartão no cartaz correspondente: 'Dia' ou 'Noite'.",
        "Discutir atividades que podem acontecer nos dois períodos.",
        "Encerrar pedindo que cada criança conte uma atividade que faz à noite em casa."
      ]
    },
    {
      "theme": "Conhecendo as partes do corpo humano",
      "curriculumCode": "EF01C13",
      "description": "Localização e nomeação das partes do corpo humano, representando-as em diferentes linguagens (desenho, música, movimento).",
      "materials": ["Papel pardo grande", "Lápis de cor ou giz de cera", "Música infantil sobre partes do corpo (opcional)"],
      "steps": [
        "Cantar uma música que nomeia partes do corpo, fazendo os gestos correspondentes.",
        "Desenhar o contorno do corpo de uma criança voluntária em papel pardo.",
        "Pedir que a turma ajude a nomear e escrever as partes do corpo no desenho.",
        "Comparar o desenho com o próprio corpo, tocando cada parte nomeada.",
        "Expor o desenho na sala como registro coletivo da atividade."
      ]
    },
    {
      "theme": "Os cinco sentidos e para que servem",
      "curriculumCode": "EF01C14",
      "description": "Reconhecimento dos órgãos sensoriais (olhos, ouvidos, nariz, língua, pele) e de suas respectivas funções.",
      "materials": ["Objetos para estimular os sentidos (frutas, sininho, tecido, perfume suave)", "Venda para os olhos (opcional)"],
      "steps": [
        "Perguntar à turma como eles enxergam, ouvem e sentem cheiros.",
        "Apresentar cada órgão sensorial e relacioná-lo à sua função.",
        "Propor um jogo simples: identificar um objeto pelo cheiro ou pelo som, sem olhar.",
        "Registrar em uma tabela qual sentido foi usado em cada experiência.",
        "Concluir conversando sobre a importância de cuidar de cada sentido."
      ]
    },
    {
      "theme": "Recursos naturais que usamos todos os dias",
      "curriculumCode": "EF01C15",
      "description": "Caracterização do uso de materiais e recursos naturais em diferentes atividades do cotidiano, reconhecendo sua importância para os seres vivos.",
      "materials": ["Imagens de água, madeira, solo e ar em uso cotidiano", "Cartaz coletivo dividido por recurso"],
      "steps": [
        "Retomar com a turma quais recursos naturais eles já conhecem.",
        "Mostrar imagens de situações em que a água, a madeira, o solo e o ar são usados.",
        "Organizar um cartaz relacionando cada recurso a uma atividade do dia a dia.",
        "Perguntar o que aconteceria se faltasse algum desses recursos.",
        "Encerrar destacando a importância de usar os recursos com cuidado."
      ]
    },
    {
      "theme": "Água, solo, luz e ar: importantes para a vida",
      "curriculumCode": "EF01C16",
      "description": "Compreensão da importância dos elementos naturais água, solo, luz e ar para os seres vivos.",
      "materials": ["Vasinho com uma muda de planta", "Água, terra e um local com luz para plantio"],
      "steps": [
        "Apresentar uma muda de planta e perguntar do que ela precisa para viver.",
        "Plantar juntos a muda em um vasinho com terra, regando com água.",
        "Colocar o vaso em um local com luz e explicar por que isso é importante.",
        "Conversar sobre como o ar também é necessário para as plantas e para nós.",
        "Combinar de observar e regar a planta nos dias seguintes, registrando seu crescimento."
      ]
    },
    {
      "theme": "Procurando seres vivos na escola",
      "curriculumCode": "EF01C17",
      "description": "Identificação da presença de seres vivos na escola e em outros espaços, distinguindo seres vivos de elementos naturais não vivos.",
      "materials": ["Pranchetas para registro", "Lápis", "Espaço externo da escola (jardim, pátio)"],
      "steps": [
        "Explicar brevemente o que diferencia um ser vivo (nasce, cresce, se alimenta) de algo não vivo.",
        "Levar a turma para uma caminhada de observação pelo pátio ou jardim da escola.",
        "Pedir que registrem, com desenhos, os seres vivos encontrados (formigas, plantas, pássaros).",
        "Anotar também elementos naturais não vivos observados, como pedras e areia.",
        "Voltar à sala e organizar os registros em duas colunas: 'seres vivos' e 'não vivos'.",
        "Conversar sobre os seres vivos mais encontrados na escola."
      ]
    },
    {
      "theme": "Somos parecidos e diferentes",
      "curriculumCode": "EF01C18",
      "description": "Identificação de diferenças e semelhanças físicas entre as pessoas, reconhecendo a importância da valorização, do acolhimento e do respeito à diversidade.",
      "materials": ["Espelho pequeno (opcional)", "Papel e lápis de cor para autorretrato"],
      "steps": [
        "Propor uma roda de conversa sobre características físicas (altura, cor da pele, cor dos olhos, cabelo).",
        "Pedir que observem um colega e apontem uma semelhança e uma diferença entre eles.",
        "Cada criança desenha um autorretrato destacando suas próprias características.",
        "Montar um mural coletivo com todos os autorretratos da turma.",
        "Conversar sobre como as diferenças tornam a turma especial e sobre a importância do respeito."
      ]
    },
    {
      "theme": "Cuidando da higiene todos os dias",
      "curriculumCode": "EF01C19",
      "description": "Relação entre os cuidados de higiene diária (lavar as mãos, escovar os dentes, tomar banho) e a promoção do bem-estar e da saúde.",
      "materials": ["Imagens de hábitos de higiene", "Sabonete e escova de dente (para demonstração, se possível)"],
      "steps": [
        "Perguntar à turma quais cuidados de higiene eles fazem ao longo do dia.",
        "Mostrar imagens de hábitos como lavar as mãos, escovar os dentes e tomar banho.",
        "Demonstrar a forma correta de lavar as mãos, praticando junto com a turma.",
        "Discutir por que esses cuidados ajudam a evitar doenças e promovem bem-estar.",
        "Montar um combinado coletivo de higiene para lembrar durante a semana na escola."
      ]
    }
  ],
  geografia: [
    {
      "theme": "Meus lugares de vivência: casa e escola",
      "curriculumCode": "EF01G01",
      "description": "Reconhecimento das características da casa e da escola como lugares de vivência da criança, comparando semelhanças e diferenças entre eles e observando se são acessíveis a todas as pessoas.",
      "materials": ["Fotos ou desenhos da casa e da escola de cada aluno", "Cartolina ou folha de papel pardo", "Lápis de cor ou giz de cera"],
      "steps": [
        "Perguntar aos alunos como é a casa e como é a escola de cada um.",
        "Pedir que desenhem sua casa e a escola em uma folha dividida ao meio.",
        "Conversar em roda sobre o que é parecido e o que é diferente entre os desenhos.",
        "Levantar, com ajuda do professor, se todos conseguem entrar e circular com facilidade nesses lugares (rampas, degraus, portas largas).",
        "Montar um painel coletivo com os desenhos de 'minha casa' e 'minha escola'."
      ]
    },
    {
      "theme": "Combinados de convivência na escola",
      "curriculumCode": "EF01G02",
      "description": "Construção coletiva de regras de convívio para os diferentes espaços do cotidiano do estudante (sala de aula, pátio, praça, casa), valorizando o respeito à diversidade.",
      "materials": ["Cartaz em branco", "Canetinhas coloridas", "Figuras de crianças brincando em diferentes espaços"],
      "steps": [
        "Mostrar imagens de crianças brincando na escola, na praça e em casa.",
        "Perguntar o que pode e o que não pode ser feito em cada um desses lugares.",
        "Registrar, com a fala dos alunos, uma lista de combinados para a sala e o pátio.",
        "Discutir por que é importante respeitar colegas diferentes de nós nesses espaços.",
        "Colar o cartaz de combinados em local visível da sala."
      ]
    },
    {
      "theme": "As construções ao redor da escola",
      "curriculumCode": "EF01G03",
      "description": "Observação das construções no entorno da escola, comparando diferenças e semelhanças entre elas e identificando os tipos de moradia presentes na comunidade.",
      "materials": ["Pranchetas ou apoio para desenho", "Lápis", "Máquina fotográfica ou celular do professor (opcional)"],
      "steps": [
        "Fazer uma caminhada de observação pelo entorno da escola (ou mostrar fotos do bairro).",
        "Pedir que os alunos apontem as construções que veem: casas, prédios, comércios.",
        "Perguntar quais construções se parecem e quais são diferentes entre si.",
        "Registrar em desenho uma construção observada no entorno da escola.",
        "Conversar em roda sobre os tipos de moradia identificados na comunidade."
      ]
    },
    {
      "theme": "Tipos de moradia: iguais e diferentes",
      "curriculumCode": "EF01G04",
      "description": "Conhecimento de diferentes tipos de moradia existentes na própria comunidade e em outros lugares, como comunidades ribeirinhas, indígenas e outros bairros da cidade.",
      "materials": ["Imagens de diferentes tipos de moradia (casa, apartamento, palafita, oca)", "Folha de atividade", "Lápis de cor"],
      "steps": [
        "Apresentar imagens de moradias variadas: casas de bairro, prédios, palafitas de comunidades ribeirinhas, ocas indígenas.",
        "Perguntar qual moradia é parecida com a de cada aluno.",
        "Explicar de forma simples por que as pessoas moram de jeitos diferentes conforme o lugar onde vivem.",
        "Pedir que desenhem a própria moradia e uma moradia diferente da sua.",
        "Compartilhar os desenhos com a turma, comentando as diferenças observadas."
      ]
    },
    {
      "theme": "Como eu chego até a escola",
      "curriculumCode": "EF01G05",
      "description": "Levantamento oral e organização em tabela dos meios de locomoção usados pelos estudantes para chegar à escola (a pé, bicicleta, carro, transporte escolar etc.).",
      "materials": ["Cartolina com tabela desenhada", "Figuras ou desenhos de meios de transporte", "Fita adesiva"],
      "steps": [
        "Perguntar a cada aluno como ele vem para a escola.",
        "Listar oralmente os diferentes meios de locomoção citados pela turma.",
        "Montar juntos uma tabela na cartolina com uma coluna para cada meio de transporte.",
        "Colar uma marca (bolinha ou nome) na coluna correspondente ao transporte de cada aluno.",
        "Observar coletivamente qual meio de locomoção foi mais usado pela turma."
      ]
    },
    {
      "theme": "Desenhando o caminho de casa até a escola",
      "curriculumCode": "EF01G06",
      "description": "Produção de representações gráficas simples (croquis) dos elementos das paisagens do cotidiano, utilizando diferentes recursos e materiais.",
      "materials": ["Folha de papel", "Massinha de modelar ou giz de cera", "Texturas variadas (lixa, papel crepom, algodão) — opcional"],
      "steps": [
        "Explicar que croqui é um desenho simples de um caminho ou lugar, feito de memória.",
        "Pedir que cada aluno pense no caminho que faz de casa até a escola.",
        "Auxiliar os alunos a desenharem esse caminho, marcando pontos como a casa, uma esquina e a escola.",
        "Permitir que usem massinha ou texturas para representar elementos do caminho (árvore, rua, praça).",
        "Exibir os croquis produzidos em um varal da sala."
      ]
    },
    {
      "theme": "Meu endereço e os caminhos que conheço",
      "curriculumCode": "EF01G07",
      "description": "Identificação de marcadores espaciais como o endereço de casa e locais conhecidos, reconhecendo os deslocamentos cotidianos entre escola e casa.",
      "materials": ["Ficha de identificação com espaço para nome da rua", "Lápis", "Mapa simples ou desenho do bairro (opcional)"],
      "steps": [
        "Conversar sobre o que é um endereço e para que ele serve.",
        "Ajudar os alunos a lembrarem o nome da rua ou de um ponto conhecido perto de casa.",
        "Preencher, com apoio do professor, uma ficha simples com esses dados.",
        "Pedir que contem oralmente como é o caminho de casa até a escola.",
        "Registrar em roda os lugares que os alunos passam nesse trajeto."
      ]
    },
    {
      "theme": "Onde estou? Posição do corpo no espaço",
      "curriculumCode": "EF01G08",
      "description": "Reconhecimento da posição do próprio corpo e de outros objetos no espaço, utilizando os ambientes da escola e representando locais de vivência por meio de croquis.",
      "materials": ["Espaço livre na sala ou no pátio", "Objetos da sala (cadeira, mesa, mochila)", "Folha para desenho"],
      "steps": [
        "Propor um jogo em que os alunos se posicionem 'em frente', 'atrás', 'ao lado' de objetos da sala.",
        "Pedir que descrevam onde estão em relação a um colega ou objeto.",
        "Levar os alunos a um espaço da escola (pátio, biblioteca) e observar sua posição nesse ambiente.",
        "Voltar à sala e pedir que desenhem, em forma de croqui, o espaço visitado.",
        "Comparar os croquis, identificando os elementos que cada aluno representou."
      ]
    },
    {
      "theme": "Desenhando histórias e caminhos",
      "curriculumCode": "EF01G09",
      "description": "Elaboração de desenhos a partir de itinerários, contos literários, histórias inventadas e brincadeiras, tomando como base os lugares de vivência da criança.",
      "materials": ["Livro de história infantil com um percurso (ex.: Chapeuzinho Vermelho)", "Folha de papel", "Lápis de cor"],
      "steps": [
        "Contar uma história curta em que o personagem percorre um caminho (de casa até outro lugar).",
        "Conversar sobre os lugares por onde o personagem passou.",
        "Pedir que os alunos desenhem o itinerário do personagem ou um itinerário próprio, inventado.",
        "Relacionar o desenho com lugares que os próprios alunos conhecem.",
        "Compartilhar os desenhos, contando a 'história do caminho' para a turma."
      ]
    },
    {
      "theme": "Pontos de referência do bairro",
      "curriculumCode": "EF01G10",
      "description": "Expressão oral de pontos de referência (praça, padaria, parque, escola, casa etc.) presentes em caminhos costumeiros, comparando as distâncias entre eles.",
      "materials": ["Imagens de pontos de referência comuns (praça, padaria, parque)", "Cartolina", "Canetinha"],
      "steps": [
        "Perguntar quais lugares os alunos reconhecem no caminho que fazem todo dia.",
        "Listar oralmente esses pontos de referência (padaria, praça, mercado etc.).",
        "Perguntar qual ponto fica mais perto e qual fica mais longe da casa de cada um.",
        "Registrar na cartolina o nome de dois pontos de referência citados pela turma.",
        "Conversar sobre como esses pontos ajudam a não se perder no caminho."
      ]
    },
    {
      "theme": "Natureza e construções na paisagem",
      "curriculumCode": "EF01G11",
      "description": "Leitura de imagens para identificar a presença da natureza e das ações humanas no cotidiano, reconhecendo aspectos naturais do local de moradia, como áreas verdes e noções de relevo.",
      "materials": ["Imagens de paisagens variadas (mais construídas e mais verdes)", "Folha de atividade", "Lápis de cor"],
      "steps": [
        "Mostrar duas imagens de paisagens: uma com mais construções e outra com mais área verde.",
        "Perguntar o que os alunos observam de natural (árvores, terra, rio) e de construído (casas, ruas) em cada imagem.",
        "Relacionar as imagens com a paisagem do bairro onde os alunos moram.",
        "Pedir que desenhem um elemento natural que existe perto de casa.",
        "Conversar em roda sobre a diferença entre o que a natureza fez e o que as pessoas construíram."
      ]
    },
    {
      "theme": "Dia e noite: os ritmos da natureza",
      "curriculumCode": "EF01G12",
      "description": "Percepção, por meio dos sentidos, dos ritmos da natureza como o dia, a noite e as variações climáticas, a partir dos lugares de vivência da criança.",
      "materials": ["Imagens de céu diurno e noturno", "Folha dividida ao meio", "Lápis de cor"],
      "steps": [
        "Perguntar o que os alunos costumam ver, ouvir e sentir de dia e o que percebem de noite.",
        "Mostrar imagens do céu de dia e de noite, comparando as diferenças.",
        "Pedir que desenhem, de um lado da folha, uma atividade do dia e, do outro, uma da noite.",
        "Conversar sobre mudanças de temperatura ou clima que percebem ao longo do dia.",
        "Compartilhar os desenhos, comentando o que cada um fez de dia e de noite."
      ]
    },
    {
      "theme": "As quatro estações do ano",
      "curriculumCode": "EF01G13",
      "description": "Percepção, por meio dos sentidos, das estações do ano, das mudanças de vestuário e hábitos alimentares e da paisagem relacionada à variação de temperatura ao longo do calendário.",
      "materials": ["Imagens das quatro estações do ano", "Roupas ou figuras de roupas de frio e de calor", "Calendário ilustrado"],
      "steps": [
        "Apresentar imagens representando verão, outono, inverno e primavera.",
        "Perguntar que roupas usamos e que comidas gostamos mais em cada estação.",
        "Relacionar cada estação a uma mudança na paisagem (árvores, temperatura, chuva).",
        "Pedir que os alunos apontem em qual estação estamos no momento da aula.",
        "Registrar em um mural coletivo uma característica de cada estação do ano."
      ]
    },
    {
      "theme": "Legendas para a paisagem do meu bairro",
      "curriculumCode": "EF01G14",
      "description": "Descrição oral de imagens da paisagem do local de vivência, com elaboração de legendas simples para representar os fenômenos naturais observados.",
      "materials": ["Foto ou desenho da paisagem do bairro", "Tiras de papel para legendas", "Lápis"],
      "steps": [
        "Mostrar uma imagem da paisagem do bairro ou do entorno da escola.",
        "Pedir que os alunos descrevam oralmente o que veem na imagem.",
        "Destacar elementos naturais presentes, como céu, árvores, chuva ou sol.",
        "Ajudar os alunos a criarem uma legenda curta (uma palavra ou frase simples) para um desses elementos.",
        "Colar as legendas ao lado da imagem, montando um painel coletivo."
      ]
    },
    {
      "theme": "Quem trabalha na minha escola",
      "curriculumCode": "EF01G15",
      "description": "Reconhecimento dos tipos de trabalho realizados na escola, com descrição oral das características de cada função observada.",
      "materials": ["Fotos ou desenhos de profissionais da escola (professor, merendeira, porteiro, diretor)", "Cartolina"],
      "steps": [
        "Perguntar quais pessoas trabalham na escola e o que cada uma faz.",
        "Mostrar imagens ou apresentar rapidamente alguns profissionais da escola.",
        "Pedir que os alunos descrevam oralmente uma tarefa de cada profissional citado.",
        "Registrar em um cartaz os nomes das funções lembradas pela turma.",
        "Conversar sobre a importância de cada trabalho para o funcionamento da escola."
      ]
    },
    {
      "theme": "Trabalhos no entorno da escola",
      "curriculumCode": "EF01G16",
      "description": "Identificação e descrição dos diferentes tipos de trabalho encontrados no entorno da escola, ampliando o olhar do trabalho escolar para o bairro.",
      "materials": ["Imagens de comércios e serviços do entorno (padaria, mercado, banca de jornal)", "Folha de atividade"],
      "steps": [
        "Perguntar quais trabalhos os alunos conhecem nas proximidades da escola.",
        "Mostrar imagens de comércios e serviços comuns no bairro.",
        "Pedir que relacionem cada imagem a um tipo de trabalho (padeiro, vendedor, motorista).",
        "Desenhar um trabalho observado no entorno da escola.",
        "Compartilhar os desenhos, comentando o que cada trabalhador faz no bairro."
      ]
    }
  ],
  historia: [
    {
      "theme": "Brincar ontem e hoje: o brinquedo muda com o tempo?",
      "curriculumCode": "EF01H01",
      "description": "Compreensão de que o brinquedo e o ato de brincar mudam de sentido conforme o tempo e o lugar, comparando formas de brincar de hoje com as de outras épocas.",
      "materials": ["Imagens de crianças brincando em décadas diferentes", "Folha e lápis de cor"],
      "steps": [
        "Perguntar aos alunos quais brinquedos e brincadeiras eles conhecem hoje.",
        "Mostrar imagens de crianças brincando há muitos anos.",
        "Conversar sobre o que mudou e o que continua parecido entre as épocas.",
        "Pedir que desenhem um brinquedo que usam atualmente.",
        "Comparar os desenhos da turma com as imagens antigas, apontando semelhanças."
      ]
    },
    {
      "theme": "Meu brinquedo, o brinquedo do colega",
      "curriculumCode": "EF01H02",
      "description": "Reconhecimento e valorização do próprio brinquedo e dos brinquedos trazidos pelos colegas, por meio da apresentação oral em roda de conversa.",
      "materials": ["Um brinquedo trazido de casa (combinado com antecedência)"],
      "steps": [
        "Combinar previamente que cada criança traga um brinquedo de casa.",
        "Organizar uma roda para cada aluno apresentar seu brinquedo à turma.",
        "Perguntar por que aquele brinquedo é especial para ela.",
        "Estimular os colegas a fazerem perguntas sobre os brinquedos apresentados.",
        "Registrar em um cartaz coletivo o nome de cada brinquedo apresentado."
      ]
    },
    {
      "theme": "Observando as características dos brinquedos",
      "curriculumCode": "EF01H03",
      "description": "Reconhecimento das características dos brinquedos, observando cor, tamanho, formato e textura.",
      "materials": ["Diversos brinquedos da sala (bola, boneca, carrinho, pião)", "Folha para desenho"],
      "steps": [
        "Espalhar diferentes brinquedos sobre uma mesa ou tapete.",
        "Pedir que os alunos observem cor, tamanho, formato e textura de cada um.",
        "Registrar oralmente, em roda, as características observadas.",
        "Desenhar um dos brinquedos observados destacando seus detalhes.",
        "Compartilhar os desenhos com a turma, nomeando as características."
      ]
    },
    {
      "theme": "De que é feito o meu brinquedo?",
      "curriculumCode": "EF01H04",
      "description": "Identificação dos materiais que compõem os brinquedos comuns na sociedade atual e de como costumam ser fabricados.",
      "materials": ["Brinquedos de plástico, madeira, pano e metal", "Imagens de fábricas e de artesãos fazendo brinquedos"],
      "steps": [
        "Separar brinquedos feitos de materiais diferentes (madeira, plástico, tecido, metal).",
        "Perguntar de que material é feito cada brinquedo apresentado.",
        "Mostrar imagens de como brinquedos são feitos, em fábrica e por artesãos.",
        "Classificar os brinquedos da sala pelo material predominante.",
        "Registrar em uma tabela simples no quadro os materiais encontrados."
      ]
    },
    {
      "theme": "Brinquedo é de menino, de menina ou de todo mundo?",
      "curriculumCode": "EF01H05",
      "description": "Criação de critérios próprios de classificação de brinquedos, questionando ideias fixas sobre o que seria 'brinquedo de menina' ou 'de menino'.",
      "materials": ["Imagens variadas de brinquedos", "Cartolina para cartaz coletivo"],
      "steps": [
        "Mostrar imagens de vários brinquedos (bola, boneca, carrinho, panelinha).",
        "Perguntar quem, na opinião da turma, pode brincar com cada um.",
        "Discutir coletivamente por que alguns acham que certo brinquedo é 'só de menino' ou 'só de menina'.",
        "Criar junto com a turma novos critérios de classificação, como barulhento/silencioso ou de encaixar/de correr.",
        "Reorganizar os brinquedos da sala usando os novos critérios criados pela turma."
      ]
    },
    {
      "theme": "Os brinquedos da minha família",
      "curriculumCode": "EF01H06",
      "description": "Identificação de características de brinquedos no contexto familiar e em outros contextos, valorizando a diversidade entre as famílias.",
      "materials": ["Relato trazido de casa sobre brinquedos da família", "Fotos, se houver"],
      "steps": [
        "Pedir que perguntem em casa qual brinquedo os pais, avós ou responsáveis usavam quando crianças.",
        "Compartilhar em sala o que descobriram com a família.",
        "Comparar os brinquedos das diferentes famílias da turma.",
        "Identificar semelhanças e diferenças entre eles.",
        "Montar um mural coletivo com desenhos dos brinquedos de família."
      ]
    },
    {
      "theme": "Brinquedos de outros tempos",
      "curriculumCode": "EF01H07",
      "description": "Identificação de características de brinquedos pertencentes a uma época histórica diferente da atual.",
      "materials": ["Imagens ou fotos de brinquedos antigos (pião, ioiô, boneca de pano)", "Caderno de registro"],
      "steps": [
        "Apresentar imagens de brinquedos usados há muitos anos.",
        "Perguntar se algum aluno já viu ou brincou com algum deles.",
        "Comparar esses brinquedos com os que a turma usa atualmente.",
        "Conversar sobre por que alguns brinquedos mudaram ao longo do tempo.",
        "Registrar no caderno o desenho de um brinquedo antigo e de um atual."
      ]
    },
    {
      "theme": "Brinquedos de outros lugares",
      "curriculumCode": "EF01H08",
      "description": "Pesquisa e exploração de brinquedos característicos de diferentes localidades.",
      "materials": ["Imagens ou vídeos de brinquedos de diferentes regiões (peteca, bilboquê, pipa)"],
      "steps": [
        "Apresentar brinquedos típicos de diferentes regiões do Brasil.",
        "Perguntar se algum aluno conhece ou já brincou com eles.",
        "Explorar oralmente como cada brinquedo é usado.",
        "Se possível, experimentar uma brincadeira com um desses brinquedos no pátio.",
        "Registrar por meio de desenho o brinquedo pesquisado."
      ]
    },
    {
      "theme": "Brinquedos dos povos indígenas",
      "curriculumCode": "EF01H09",
      "description": "Conhecimento e valorização de brinquedos criados por povos indígenas, reconhecendo a diversidade entre essas populações.",
      "materials": ["Imagens de brinquedos indígenas (bonecas de cerâmica, bolinhas de fibra)", "Texto informativo simples lido pela professora"],
      "steps": [
        "Apresentar imagens de brinquedos criados por diferentes povos indígenas.",
        "Contar brevemente como e com quais materiais costumam ser feitos.",
        "Comparar com os brinquedos que a turma já conhece.",
        "Conversar sobre a diversidade dos povos indígenas e seus brinquedos.",
        "Propor um desenho ou pintura inspirado em um dos brinquedos apresentados."
      ]
    },
    {
      "theme": "A boneca abayomi e outros brinquedos de origem africana",
      "curriculumCode": "EF01H10",
      "description": "Conhecimento e valorização de brinquedos de origem africana, reconhecendo a diversidade dos povos do continente africano.",
      "materials": ["Retalhos de tecido", "Imagens de brinquedos e jogos afro-brasileiros"],
      "steps": [
        "Apresentar a boneca abayomi, explicando sua origem e sua história.",
        "Mostrar outras imagens de brinquedos e jogos de matriz africana.",
        "Conversar sobre a diversidade dos povos do continente africano.",
        "Propor a confecção de uma boneca abayomi simples com retalhos de tecido.",
        "Compartilhar as bonecas produzidas em roda de conversa."
      ]
    },
    {
      "theme": "Brinquedos de quem veio de longe",
      "curriculumCode": "EF01H11",
      "description": "Pesquisa e exploração de brinquedos trazidos por famílias imigrantes que fazem parte da comunidade escolar.",
      "materials": ["Questionário simples para levar para casa", "Cartolina para painel"],
      "steps": [
        "Perguntar se há colegas ou familiares que vieram de outros países ou de outros estados.",
        "Elaborar com a turma um pequeno questionário sobre brinquedos de origem para levar para casa.",
        "Compartilhar em sala as respostas trazidas pelas famílias.",
        "Comparar os brinquedos encontrados com os já conhecidos pela turma.",
        "Montar um painel coletivo com os resultados da pesquisa."
      ]
    },
    {
      "theme": "Esse brinquedo é para todo mundo?",
      "curriculumCode": "EF01H12",
      "description": "Reflexão sobre se um determinado brinquedo pode ser usado por qualquer criança, incluindo crianças com deficiência.",
      "materials": ["Diversos brinquedos da sala", "Brinquedo adaptado, se disponível"],
      "steps": [
        "Apresentar um brinquedo por vez para a turma.",
        "Perguntar se qualquer criança poderia brincar com aquele brinquedo.",
        "Discutir o que poderia ser adaptado para incluir mais crianças na brincadeira.",
        "Propor que os alunos pensem em uma adaptação simples para um brinquedo.",
        "Registrar as ideias em um desenho ou cartaz coletivo."
      ]
    },
    {
      "theme": "Eu sou eu, você é você",
      "curriculumCode": "EF01H13",
      "description": "Reconhecimento de si e do outro como pessoas diferentes, desenvolvendo o respeito às diferenças entre os colegas.",
      "materials": ["Espelho", "Folha e lápis de cor"],
      "steps": [
        "Propor que cada criança se observe no espelho e depois observe um colega.",
        "Conversar sobre as diferenças físicas e de gostos entre os colegas da turma.",
        "Desenhar a si mesma e um colega, destacando características diferentes.",
        "Conversar sobre a importância de respeitar essas diferenças.",
        "Compartilhar os desenhos, comentando algo positivo sobre cada colega retratado."
      ]
    },
    {
      "theme": "Cada um vê do seu jeito",
      "curriculumCode": "EF01H14",
      "description": "Reconhecimento de que diferentes crianças podem ter percepções diferentes sobre uma mesma realidade.",
      "materials": ["Uma imagem com mais de uma interpretação possível", "Folha para registro"],
      "steps": [
        "Mostrar à turma uma imagem que pode ser interpretada de mais de uma forma.",
        "Perguntar a diferentes alunos o que cada um está vendo na imagem.",
        "Conversar sobre como pessoas diferentes podem perceber a mesma coisa de jeitos diferentes.",
        "Relacionar com as brincadeiras: será que todo mundo brinca do mesmo jeito com o mesmo brinquedo?",
        "Registrar por meio de desenho a própria percepção sobre a imagem mostrada."
      ]
    }
  ]
};
