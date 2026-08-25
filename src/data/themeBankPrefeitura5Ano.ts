// Banco de temas do 5º ano — rede MUNICIPAL (Currículo da Cidade, SME-SP), no mesmo formato de
// src/data/themeBank.ts (2º ano) e dos demais anos dessa rede. Códigos de habilidade
// (curriculumCode) pesquisados diretamente no texto oficial dos documentos "Currículo da Cidade"
// (SME-SP, 2ª edição), seção "5º ANO DO ENSINO FUNDAMENTAL" (Ciclo Interdisciplinar), publicados
// em acervodigital.sme.prefeitura.sp.gov.br — não são estimados. Ciências, Geografia, Matemática e
// História seguem o formato curto já usado do 1º ao 4º ano ("EF05C..", "EF05G..", "EF05M..",
// "EF05H.."), enquanto Língua Portuguesa usa o formato padrão "EF05LP..".

import { BankEntry, OwnSubject } from "@/types/plano";

export const PREFEITURA_5_ANO_THEME_BANK: Record<OwnSubject, BankEntry[]> = {
  "lingua-portuguesa": [
    {
      "theme": "Rodas de leitura de contos, mitos, lendas e fábulas de diferentes culturas",
      "curriculumCode": "EF05LP01",
      "description": "Ouvir e ler textos literários de distintas culturas — contos de aventura, de assombração, de mistério, modernos e populares, além de mitos, lendas, crônicas, poemas e fábulas.",
      "materials": ["Coletânea de contos, mitos, lendas, crônicas, poemas e fábulas de culturas variadas", "Ficha de registro de leitura"],
      "steps": [
        "Apresentar à turma uma seleção de textos literários de diferentes culturas e gêneros.",
        "Ler em voz alta um dos textos, parando para comentar impressões e expectativas.",
        "Organizar rodas de leitura em pequenos grupos, cada uma com um texto diferente.",
        "Cada grupo registra na ficha o gênero, a cultura de origem e o que mais chamou atenção.",
        "Promover uma roda geral em que cada grupo apresenta seu texto para a turma."
      ]
    },
    {
      "theme": "Discutindo organização, estilo e ilustração em textos literários",
      "curriculumCode": "EF05LP02",
      "description": "Participar da leitura de textos literários diversos, discutindo aspectos da organização interna, marcas linguísticas e de estilo (como a conversa explícita com o leitor) e a relação entre linguagem verbal e ilustração.",
      "materials": ["Livros ilustrados ou histórias em quadrinhos", "Quadro para anotações coletivas"],
      "steps": [
        "Ler coletivamente um texto literário ilustrado, observando texto e imagem juntos.",
        "Perguntar à turma se o narrador parece 'conversar' com o leitor e onde isso aparece.",
        "Em duplas, listar marcas de estilo do autor (repetições, comparações, ritmo).",
        "Comparar como a ilustração reforça ou contradiz o que o texto diz.",
        "Compartilhar as observações em roda, registrando as mais relevantes no quadro."
      ]
    },
    {
      "theme": "Comparando registros literário, publicitário e jornalístico",
      "curriculumCode": "EF05LP03",
      "description": "Comparar registros linguísticos presentes em textos de diferentes esferas — literária, publicitária e jornalística —, reconhecendo a especificidade do registro literário e os efeitos de sentido provocados.",
      "materials": ["Um conto ou poema, um anúncio publicitário e uma notícia sobre o mesmo assunto", "Cartolina dividida em três colunas"],
      "steps": [
        "Apresentar três textos curtos sobre um tema comum, um de cada esfera.",
        "Ler os três textos em voz alta, destacando o vocabulário e o tom de cada um.",
        "Em grupos, preencher a cartolina comparando linguagem, intenção e público de cada texto.",
        "Discutir por que o texto literário usa uma linguagem diferente dos outros dois.",
        "Socializar as conclusões dos grupos com a turma toda."
      ]
    },
    {
      "theme": "Leitura programada de uma obra literária mais extensa",
      "curriculumCode": "EF05LP04",
      "description": "Ler obras mais extensas, de modo programado e sob orientação do professor, identificando características do texto e do gênero para reconhecer efeitos de sentido e posicionar-se criticamente diante do texto.",
      "materials": ["Um livro de literatura infantojuvenil adequado à turma", "Calendário de leitura em capítulos", "Diário de leitura"],
      "steps": [
        "Apresentar a obra escolhida e combinar com a turma um cronograma de leitura por capítulos.",
        "Ao final de cada trecho combinado, conduzir uma conversa sobre o que foi lido.",
        "Pedir que registrem no diário de leitura opiniões e previsões sobre a história.",
        "Ao concluir a obra, promover um debate sobre o desfecho e as escolhas do autor.",
        "Encerrar com uma avaliação crítica coletiva: o que gostaram e o que mudariam na história."
      ]
    },
    {
      "theme": "Letras de canções e sua relação com o poema",
      "curriculumCode": "EF05LP05",
      "description": "Ler letras de canções de modo a identificar sua multimodalidade, reconhecendo que uma letra de canção pode não ser um poema, mas que poemas — depois de escritos — podem se tornar letra de canção.",
      "materials": ["Letras de duas ou três canções impressas", "Um poema conhecido musicado", "Caixa de som ou dispositivo de áudio, se disponível"],
      "steps": [
        "Distribuir letras de canções impressas e ler junto com a turma, sem o áudio.",
        "Ouvir as canções e observar como melodia e ritmo mudam a percepção do texto.",
        "Apresentar um poema que foi musicado e comparar a versão falada com a cantada.",
        "Discutir em grupo o que diferencia uma letra de canção de um poema.",
        "Registrar coletivamente as conclusões em um cartaz para a sala."
      ]
    },
    {
      "theme": "Textos reivindicatórios e representações sociais em artigos e relatos históricos",
      "curriculumCode": "EF05LP06",
      "description": "Identificar o contexto de produção de textos reivindicatórios de diferentes representações sociais em artigos expositivos e relatos históricos, antecipando, localizando e inferindo prováveis sentidos para compreender melhor o texto e reconhecer os valores nele veiculados.",
      "materials": ["Artigo expositivo ou relato histórico sobre luta por direitos", "Roteiro de perguntas norteadoras"],
      "steps": [
        "Antes de ler, levantar hipóteses sobre o tema a partir do título e das imagens do texto.",
        "Ler o texto em voz alta, parando para localizar informações-chave.",
        "Em duplas, responder ao roteiro identificando quem fala, para quem e com que objetivo.",
        "Discutir coletivamente quais valores e reivindicações aparecem no texto.",
        "Registrar em uma síntese coletiva os sentidos inferidos pela turma."
      ]
    },
    {
      "theme": "Relatos históricos e divulgação científica sobre diferentes culturas",
      "curriculumCode": "EF05LP07",
      "description": "Ler relatos históricos, artigos de divulgação científica e outros textos jornalísticos, além de assistir a reportagens, entrevistas, vídeos, documentários e clipes, para conhecer e valorizar diferentes culturas, considerando a multimodalidade.",
      "materials": ["Trechos de relatos históricos ou artigos de divulgação científica", "Trecho de documentário ou reportagem em vídeo"],
      "steps": [
        "Apresentar um relato histórico ou artigo sobre uma cultura específica.",
        "Assistir a um trecho de documentário ou reportagem relacionado ao mesmo tema.",
        "Em grupos, comparar as informações do texto escrito com as do vídeo.",
        "Discutir o que cada formato acrescenta à compreensão da cultura estudada.",
        "Produzir um pequeno cartaz coletivo valorizando aspectos da cultura conhecida."
      ]
    },
    {
      "theme": "Efeitos de sentido em quadrinhos, charges e tiras de diferentes culturas",
      "curriculumCode": "EF05LP08",
      "description": "Identificar recursos utilizados para provocar efeitos de sentido em quadrinhos, como charges, tiras, HQs e outros textos correlatos de culturas locais, regionais e globais, impressos ou digitais.",
      "materials": ["Coletânea de charges, tiras e HQs de diferentes origens", "Lupa de observação (opcional, para detalhes visuais)"],
      "steps": [
        "Apresentar exemplos de charges, tiras e HQs de culturas diferentes.",
        "Observar em grupo os recursos usados: expressões, balões, onomatopeias, cores.",
        "Discutir qual efeito de humor, crítica ou surpresa cada recurso provoca.",
        "Cada grupo escolhe uma tira e explica para a turma o recurso mais marcante.",
        "Fechar com uma lista coletiva dos recursos identificados nas apresentações."
      ]
    },
    {
      "theme": "Multimodalidade em textos de projetos interdisciplinares",
      "curriculumCode": "EF05LP09",
      "description": "Identificar a multimodalidade em textos das diferentes áreas do conhecimento, relacionados ao desenvolvimento de projetos interdisciplinares, e o papel que essa multimodalidade tem na constituição dos sentidos.",
      "materials": ["Texto de área diversa (ciências, história, geografia) com gráficos, mapas ou imagens", "Ficha de análise multimodal"],
      "steps": [
        "Selecionar um texto de outra área do conhecimento que combine texto e imagem/gráfico.",
        "Ler o texto verbal separadamente e depois observar o elemento não verbal.",
        "Em duplas, preencher a ficha explicando o que cada elemento visual acrescenta ao texto.",
        "Discutir coletivamente se o texto seria compreendido sem o elemento visual.",
        "Registrar uma conclusão da turma sobre a importância da multimodalidade."
      ]
    },
    {
      "theme": "Conhecendo trechos de textos da esfera jurídica",
      "curriculumCode": "EF05LP10",
      "description": "Identificar trechos de textos que circulam na esfera jurídica, para discutir e/ou responder a problemas específicos de acordo com as necessidades do momento, sem aprofundar o estudo formal desses textos.",
      "materials": ["Trecho de uma lei relacionada ao cotidiano escolar (ex.: Estatuto da Criança e do Adolescente)", "Situações-problema relacionadas ao trecho"],
      "steps": [
        "Apresentar um trecho curto e adaptado de um texto legal ligado à vida dos estudantes.",
        "Explicar coletivamente o vocabulário mais difícil do trecho.",
        "Propor uma situação-problema do cotidiano relacionada ao trecho lido.",
        "Em grupos, discutir como o trecho ajuda a resolver ou entender a situação.",
        "Compartilhar as respostas dos grupos e sistematizar a conclusão da turma."
      ]
    },
    {
      "theme": "Comparando textos publicitários sobre o mesmo produto",
      "curriculumCode": "EF05LP11",
      "description": "Comparar textos publicitários relativos ao consumo do mesmo produto e/ou serviço, para identificar diferenças e semelhanças entre os recursos de convencimento, a partir das marcas linguísticas e da multimodalidade típica do gênero.",
      "materials": ["Dois anúncios publicitários diferentes do mesmo tipo de produto", "Tabela comparativa"],
      "steps": [
        "Apresentar dois anúncios diferentes que vendem o mesmo tipo de produto.",
        "Observar juntos as imagens, cores, frases e chamadas de cada anúncio.",
        "Em duplas, preencher a tabela comparando os recursos de convencimento usados.",
        "Discutir qual anúncio é mais convincente e por quê.",
        "Compartilhar as conclusões em roda, destacando os recursos mais citados."
      ]
    },
    {
      "theme": "Estratégias de releitura: grifar, anotar e consultar dicionário",
      "curriculumCode": "EF05LP12",
      "description": "Reler trechos do texto, marcando-os, grifando-os, circulando-os e realizando anotações porque representam dúvidas, geram discordância, parecem significativos para o tema, merecem comentário ou exigem consulta a um dicionário.",
      "materials": ["Texto informativo impresso para cada estudante", "Lápis coloridos ou marca-textos", "Dicionário"],
      "steps": [
        "Distribuir um texto informativo e explicar os diferentes usos de grifos e anotações.",
        "Ler o texto individualmente, marcando trechos de acordo com a orientação combinada.",
        "Usar o dicionário para esclarecer palavras desconhecidas encontradas na leitura.",
        "Em duplas, comparar o que cada um grifou e por quê.",
        "Socializar com a turma os trechos mais marcados e as dúvidas resolvidas."
      ]
    },
    {
      "theme": "Pesquisando em várias fontes para estudar temas das áreas de conhecimento",
      "curriculumCode": "EF05LP13",
      "description": "Ler textos diversos para estudar temas tratados nas diferentes áreas do conhecimento, articulando-os com conhecimentos prévios — livros, enciclopédias impressas e eletrônicas, sites de pesquisa, revistas e jornais — e assistir a documentários e reportagens, analisando-os.",
      "materials": ["Livros, enciclopédias e revistas sobre o tema escolhido", "Computador ou tablet com acesso a site de pesquisa, se disponível", "Ficha de registro de pesquisa"],
      "steps": [
        "Definir com a turma um tema de estudo de outra área do conhecimento.",
        "Organizar diferentes fontes (livros, sites, vídeos) disponíveis sobre o tema.",
        "Em grupos, explorar cada fonte e registrar na ficha as informações mais relevantes.",
        "Assistir a um trecho de documentário ou reportagem relacionado ao tema.",
        "Comparar as informações das diferentes fontes e produzir uma síntese em grupo."
      ]
    },
    {
      "theme": "Reescrevendo textos narrativos respeitando o texto-fonte",
      "curriculumCode": "EF05LP14",
      "description": "Reescrever textos no gênero em estudo, respeitando a progressão temática e os conteúdos do texto-fonte, e realizando as diferentes operações de produção de texto (planejamento, escrita, revisão).",
      "materials": ["Um conto ou narrativa curta para reescrita", "Folha para rascunho e versão final"],
      "steps": [
        "Ler coletivamente o texto-fonte que será reescrito.",
        "Identificar em grupo os fatos principais e a ordem em que aparecem.",
        "Cada estudante planeja sua reescrita mantendo a progressão temática do original.",
        "Escrever o rascunho e trocar com um colega para revisão de conteúdo e coesão.",
        "Produzir a versão final incorporando as sugestões recebidas."
      ]
    },
    {
      "theme": "Produzindo contos com coerência e coesão",
      "curriculumCode": "EF05LP15",
      "description": "Produzir contos, considerando as características do gênero, garantindo tanto a coerência entre os fatos apresentados quanto a coesão, respeitando a situação comunicativa e realizando todas as operações de produção de texto.",
      "materials": ["Lista de características do gênero conto", "Folha para planejamento (personagens, cenário, conflito, desfecho)"],
      "steps": [
        "Relembrar coletivamente as características do conto: personagens, conflito, desfecho.",
        "Cada estudante planeja seu conto preenchendo a folha de planejamento.",
        "Escrever o primeiro rascunho do conto, seguindo o planejamento feito.",
        "Trocar o texto com um colega para verificar se os fatos fazem sentido entre si.",
        "Revisar e produzir a versão final do conto, cuidando da coesão entre os parágrafos."
      ]
    },
    {
      "theme": "Criando quadrinhas e novas estrofes para poemas conhecidos",
      "curriculumCode": "EF05LP16",
      "description": "Produzir quadrinhas e novas estrofes para poemas conhecidos, respeitando as características do texto-referência e da situação comunicativa, além de realizar as diferentes operações de produção de textos.",
      "materials": ["Poemas e quadrinhas populares conhecidos pela turma", "Folha para composição de versos"],
      "steps": [
        "Ler e apreciar coletivamente algumas quadrinhas e poemas populares.",
        "Observar em grupo o ritmo, a rima e a estrutura de estrofes do texto-referência.",
        "Cada estudante escreve uma nova estrofe ou quadrinha seguindo o modelo observado.",
        "Ler o rascunho em voz alta para verificar se o ritmo e a rima funcionam.",
        "Revisar e reunir as produções em um varal de poesia da turma."
      ]
    },
    {
      "theme": "Escrevendo verbetes de curiosidade sobre temas estudados",
      "curriculumCode": "EF05LP17",
      "description": "Escrever verbetes de curiosidade sobre temas estudados, respeitando as características da situação comunicativa e realizando as diferentes operações de produção de texto.",
      "materials": ["Exemplos de verbetes de enciclopédia ou revista de curiosidades", "Fichas para redigir os verbetes"],
      "steps": [
        "Apresentar exemplos de verbetes de curiosidade sobre diferentes temas.",
        "Identificar coletivamente a estrutura: informação objetiva e dado curioso.",
        "Cada estudante escolhe um tema estudado e planeja seu verbete.",
        "Escrever o rascunho do verbete seguindo a estrutura observada.",
        "Revisar em dupla e organizar os verbetes em um mural de curiosidades da turma."
      ]
    },
    {
      "theme": "Produzindo um artigo de divulgação científica sobre tema de interesse da comunidade",
      "curriculumCode": "EF05LP18",
      "description": "Produzir artigo de divulgação científica com temas integradores de interesse da comunidade, respeitando as características do gênero, além de realizar as diferentes operações de produção de texto.",
      "materials": ["Exemplos de artigos de divulgação científica", "Fontes de pesquisa sobre o tema escolhido"],
      "steps": [
        "Escolher com a turma um tema científico de interesse da comunidade escolar.",
        "Pesquisar informações sobre o tema em fontes confiáveis.",
        "Planejar coletivamente a estrutura do artigo: introdução, explicação, conclusão.",
        "Cada grupo escreve seu artigo com base na pesquisa realizada.",
        "Revisar os textos verificando clareza da linguagem e correção das informações."
      ]
    },
    {
      "theme": "Escrevendo comentários opinativos sobre temas atuais",
      "curriculumCode": "EF05LP19",
      "description": "Escrever comentários opinativos, impressos e/ou digitais, sobre temas atuais em matérias lidas, para compor murais de classe e sites, respeitando as características da situação comunicativa e as operações de produção de texto.",
      "materials": ["Matérias jornalísticas atuais impressas ou digitais", "Espaço de mural ou ferramenta digital de publicação"],
      "steps": [
        "Selecionar uma matéria jornalística atual adequada à faixa etária.",
        "Ler e discutir coletivamente os diferentes pontos de vista sobre o assunto.",
        "Cada estudante planeja seu comentário, definindo sua opinião e os argumentos.",
        "Escrever o comentário opinativo e revisar clareza e coerência com um colega.",
        "Publicar os comentários no mural da turma ou em espaço digital combinado."
      ]
    },
    {
      "theme": "Produzindo cartas argumentativas de leitor",
      "curriculumCode": "EF05LP20",
      "description": "Produzir cartas argumentativas de leitor, a partir de matérias lidas, considerando as características do gênero e da situação comunicativa, posicionando-se criticamente diante do que foi lido.",
      "materials": ["Matéria jornalística que gere posicionamentos diferentes", "Modelo de carta argumentativa de leitor"],
      "steps": [
        "Ler uma matéria jornalística que suscite opiniões divergentes na turma.",
        "Apresentar a estrutura de uma carta argumentativa de leitor.",
        "Cada estudante define sua posição e lista argumentos que a sustentem.",
        "Escrever a carta seguindo a estrutura apresentada.",
        "Trocar as cartas entre colegas para leitura e comentário sobre os argumentos usados."
      ]
    },
    {
      "theme": "Entrevistando especialistas a partir de roteiro pré-elaborado",
      "curriculumCode": "EF05LP21",
      "description": "Realizar, por meio de textos orais, entrevistas com especialistas a partir de roteiros pré-elaborados, considerando as especificidades da situação comunicativa: ouvir com atenção, formular perguntas e comentar sobre o assunto tratado.",
      "materials": ["Roteiro de perguntas elaborado pela turma", "Gravador ou celular para registro, se disponível"],
      "steps": [
        "Escolher um especialista da comunidade escolar para ser entrevistado sobre um tema.",
        "Em grupos, elaborar coletivamente um roteiro de perguntas para a entrevista.",
        "Ensaiar a postura de entrevistador: ouvir com atenção e fazer comentários pertinentes.",
        "Realizar a entrevista, registrando as respostas em áudio ou por escrito.",
        "Compartilhar com a turma os principais pontos ouvidos durante a entrevista."
      ]
    },
    {
      "theme": "Apresentando ideias em diferentes situações comunicativas orais",
      "curriculumCode": "EF05LP22",
      "description": "Apresentar ideias sobre temas diversos, reconhecendo as características da situação comunicativa: roda de conversa, roda de jornal, roda de leitores, entre outras.",
      "materials": ["Temas variados para apresentação oral", "Espaço organizado em roda"],
      "steps": [
        "Explicar as diferenças entre uma roda de conversa, uma roda de jornal e uma roda de leitores.",
        "Distribuir temas diferentes para pequenos grupos prepararem uma fala.",
        "Cada grupo planeja como vai apresentar de acordo com o tipo de roda sorteado.",
        "Realizar as apresentações respeitando a vez de falar e o formato combinado.",
        "Avaliar coletivamente se cada grupo respeitou as características da situação comunicativa."
      ]
    },
    {
      "theme": "Expondo temas estudados com apoio de esquemas e notas",
      "curriculumCode": "EF05LP23",
      "description": "Expor aspectos relacionados a temas estudados nas diferentes áreas do conhecimento, articulando os diferentes materiais utilizados, formulando perguntas, comentando e apresentando sínteses a partir de esquemas e notas.",
      "materials": ["Material de pesquisa sobre um tema estudado", "Cartolina ou folha para esquema de apoio"],
      "steps": [
        "Retomar um tema já estudado em outra área do conhecimento.",
        "Organizar, em grupo, um esquema com os principais pontos a apresentar.",
        "Ensaiar a exposição oral usando o esquema como apoio, sem ler tudo pronto.",
        "Apresentar o tema à turma, respondendo perguntas dos colegas ao final.",
        "Fazer uma autoavaliação sobre o uso do esquema durante a apresentação."
      ]
    },
    {
      "theme": "Relatando oralmente experiências vividas",
      "curriculumCode": "EF05LP24",
      "description": "Relatar, por meio de textos orais, experiências vividas, organizando-as de acordo com a situação comunicativa.",
      "materials": ["Nenhum material específico — apenas espaço para fala em roda"],
      "steps": [
        "Propor que cada estudante pense em uma experiência pessoal marcante para relatar.",
        "Organizar mentalmente o relato: início, desenvolvimento e conclusão do episódio.",
        "Formar roda e relatar a experiência para um pequeno grupo de colegas.",
        "Os colegas ouvintes fazem perguntas para esclarecer pontos do relato.",
        "Selecionar voluntários para relatar suas experiências para a turma toda."
      ]
    },
    {
      "theme": "Debatendo temas atuais controversos com base em pesquisa",
      "curriculumCode": "EF05LP25",
      "description": "Debater aspectos controversos relacionados a temas da atualidade, alimentados por pesquisas em jornais e revistas impressos e digitais e outras fontes, para emitir e acolher opinião e justificar respostas considerando o ponto de vista do outro.",
      "materials": ["Notícias de jornais/revistas sobre um tema controverso e atual", "Cartazes indicando posições 'a favor' e 'contra'"],
      "steps": [
        "Apresentar um tema atual que gere posições divergentes, com apoio de notícias.",
        "Pesquisar em pequenos grupos argumentos a favor e contra o tema.",
        "Organizar a sala em dois lados, cada um defendendo uma posição no debate.",
        "Conduzir o debate, garantindo que cada lado ouça e responda ao argumento do outro.",
        "Encerrar com uma reflexão coletiva sobre os diferentes pontos de vista ouvidos."
      ]
    },
    {
      "theme": "Registrando informações durante situações de escuta oral",
      "curriculumCode": "EF05LP26",
      "description": "Realizar registros como notas, esquemas, fotos e vídeos em situação de intercâmbio oral em que o estudante participa como ouvinte, de acordo com o interesse e/ou relevância do tema.",
      "materials": ["Caderno para anotações", "Celular ou câmera para foto/vídeo, se disponível"],
      "steps": [
        "Explicar diferentes formas de registrar uma fala ouvida: notas, esquema, foto, vídeo.",
        "Assistir a uma apresentação oral de um colega, grupo ou convidado.",
        "Cada estudante escolhe uma forma de registro e a utiliza durante a escuta.",
        "Comparar em dupla os diferentes registros feitos sobre a mesma fala.",
        "Discutir qual forma de registro captou melhor as informações mais relevantes."
      ]
    },
    {
      "theme": "Comparando gêneros textuais e suas características específicas",
      "curriculumCode": "EF05LP27",
      "description": "Comparar textos organizados em diferentes gêneros, para identificar as características específicas de cada um, e no mesmo gênero, para ratificar a caracterização realizada, compreendendo sua multimodalidade.",
      "materials": ["Textos de dois ou três gêneros diferentes", "Dois textos do mesmo gênero"],
      "steps": [
        "Apresentar textos de gêneros diferentes (ex.: notícia, poema, receita).",
        "Em grupo, listar as características específicas observadas em cada gênero.",
        "Comparar dois textos do mesmo gênero para confirmar as características listadas.",
        "Discutir como a multimodalidade (imagens, formatação) varia entre os gêneros.",
        "Sistematizar em um quadro coletivo as características de cada gênero estudado."
      ]
    },
    {
      "theme": "Evitando repetições desnecessárias no texto",
      "curriculumCode": "EF05LP28",
      "description": "Eliminar repetições indesejadas nos textos produzidos, substituindo o referente por outra palavra (sinônimo, hiperônimo, pronome, numeral, entre outros) e/ou fazendo elipse do referente.",
      "materials": ["Texto com repetições propositais de uma mesma palavra", "Lista de sinônimos e pronomes de apoio"],
      "steps": [
        "Apresentar um texto com repetições excessivas de uma mesma palavra.",
        "Identificar coletivamente cada ocorrência da palavra repetida.",
        "Em duplas, substituir as repetições por sinônimos, pronomes ou elipse.",
        "Reler o texto reescrito e comparar a fluidez com a versão original.",
        "Aplicar a mesma estratégia de revisão em um texto próprio produzido anteriormente."
      ]
    },
    {
      "theme": "Utilizando organizadores textuais no gênero produzido",
      "curriculumCode": "EF05LP29",
      "description": "Utilizar organizadores textuais adequados ao gênero e ao registro linguístico do texto (por exemplo, marcadores de tempo, sequência ou explicação).",
      "materials": ["Texto sem organizadores textuais para revisão", "Lista de organizadores comuns (primeiro, depois, por fim, além disso)"],
      "steps": [
        "Apresentar uma lista de organizadores textuais comuns e seus usos.",
        "Ler um texto que carece de organizadores e discutir a dificuldade de compreensão.",
        "Em grupo, reescrever o texto inserindo organizadores adequados ao gênero.",
        "Comparar a versão reescrita com a original, avaliando a clareza obtida.",
        "Revisar um texto próprio verificando se há organizadores adequados ao gênero escolhido."
      ]
    },
    {
      "theme": "Mantendo o tempo verbal para garantir a coesão do texto",
      "curriculumCode": "EF05LP30",
      "description": "Analisar o papel da manutenção do tempo verbal predominante e da articulação entre os tempos verbais do texto no estabelecimento da coesão.",
      "materials": ["Texto narrativo com mistura inadequada de tempos verbais", "Lápis coloridos para marcação de verbos"],
      "steps": [
        "Apresentar um texto com uso inconsistente dos tempos verbais.",
        "Marcar coletivamente todos os verbos e seus respectivos tempos.",
        "Discutir em grupo quais trocas de tempo verbal prejudicam a compreensão do texto.",
        "Reescrever o texto corrigindo a articulação entre os tempos verbais.",
        "Revisar um texto próprio verificando a manutenção do tempo verbal predominante."
      ]
    },
    {
      "theme": "Articulando as partes do texto de forma coerente",
      "curriculumCode": "EF05LP31",
      "description": "Articular as partes do texto coerentemente, sem provocar problemas de compreensão, durante o processo de produção de texto.",
      "materials": ["Texto com parágrafos fora de ordem, recortado em tiras", "Cola e folha para reorganização"],
      "steps": [
        "Distribuir um texto recortado em tiras de parágrafos fora de ordem.",
        "Em duplas, reorganizar as tiras para que o texto fique coerente.",
        "Colar a ordem escolhida e justificar as escolhas feitas para a turma.",
        "Comparar as diferentes ordenações encontradas pelos grupos e debater qual é mais coerente.",
        "Aplicar a atenção à articulação das partes na revisão de um texto próprio."
      ]
    },
    {
      "theme": "Usando a pontuação medial e final para dar sentido ao texto",
      "curriculumCode": "EF05LP32",
      "description": "Utilizar a pontuação medial e final como parte integrante do texto, considerando a intenção do autor, para favorecer a progressão temática e a coesão textual.",
      "materials": ["Texto sem pontuação para leitura e correção", "Cartaz com sinais de pontuação e suas funções"],
      "steps": [
        "Apresentar um texto sem nenhuma pontuação e pedir que a turma tente lê-lo.",
        "Discutir as dificuldades de compreensão causadas pela ausência de pontuação.",
        "Em grupo, pontuar o texto de acordo com o sentido pretendido.",
        "Comparar as diferentes pontuações feitas pelos grupos e seus efeitos de sentido.",
        "Revisar a pontuação de um texto próprio, verificando a progressão temática."
      ]
    },
    {
      "theme": "Analisando as escolhas de palavras nos textos produzidos",
      "curriculumCode": "EF05LP33",
      "description": "Analisar as escolhas lexicais feitas nos textos produzidos, identificando a sua adequação (ou não) às intenções de significação.",
      "materials": ["Texto próprio já produzido pela turma", "Dicionário de sinônimos"],
      "steps": [
        "Retomar um texto produzido anteriormente pela turma ou por um estudante.",
        "Destacar palavras que podem não expressar com precisão a intenção do autor.",
        "Consultar o dicionário de sinônimos para buscar palavras mais adequadas.",
        "Reescrever os trechos destacados com as novas escolhas lexicais.",
        "Comparar em dupla o efeito das mudanças feitas no sentido do texto."
      ]
    },
    {
      "theme": "Identificando efeitos de sentido de metáfora e comparação",
      "curriculumCode": "EF05LP34",
      "description": "Identificar os efeitos de sentido provocados pelo uso da metáfora e da comparação.",
      "materials": ["Poemas ou trechos literários com metáforas e comparações", "Cartaz com exemplos e definições"],
      "steps": [
        "Apresentar exemplos de frases com metáfora e frases com comparação.",
        "Explicar coletivamente a diferença entre os dois recursos.",
        "Em grupo, localizar metáforas e comparações em um poema ou texto literário.",
        "Discutir o efeito de sentido que cada recurso provoca no texto.",
        "Criar, em duplas, frases próprias usando metáfora ou comparação."
      ]
    },
    {
      "theme": "Explorando palavras de um mesmo campo semântico com o dicionário",
      "curriculumCode": "EF05LP35",
      "description": "Analisar os sentidos decorrentes dos usos de palavras que se aproximam de um mesmo campo semântico (hiperonímia), utilizando o dicionário como recurso importante para a construção do repertório.",
      "materials": ["Dicionário", "Lista de palavras de um mesmo campo semântico (ex.: animais, sentimentos)"],
      "steps": [
        "Apresentar um grupo de palavras que pertencem a um mesmo campo semântico.",
        "Consultar o dicionário para entender o sentido específico de cada palavra.",
        "Em grupo, organizar as palavras da mais geral para a mais específica.",
        "Discutir como a escolha de uma palavra mais específica muda o sentido de uma frase.",
        "Aplicar duas ou três dessas palavras em frases próprias."
      ]
    },
    {
      "theme": "Identificando palavras polissêmicas em diferentes contextos",
      "curriculumCode": "EF05LP36",
      "description": "Identificar o caráter polissêmico de palavras, de acordo com o contexto de uso, comparando o significado de termos utilizados nas áreas científicas com os mesmos termos utilizados na linguagem cotidiana.",
      "materials": ["Lista de palavras polissêmicas usadas em ciências e no cotidiano (ex.: célula, corrente, meio)", "Dicionário"],
      "steps": [
        "Apresentar uma palavra com significados diferentes em contextos distintos.",
        "Ler frases com essa palavra em contexto científico e em contexto cotidiano.",
        "Consultar o dicionário para confirmar os diferentes significados encontrados.",
        "Em grupos, buscar outras palavras polissêmicas usadas nas áreas de estudo.",
        "Compartilhar com a turma os exemplos encontrados e seus diferentes sentidos."
      ]
    },
    {
      "theme": "Explorando recursos gráfico-textuais em materiais lidos",
      "curriculumCode": "EF05LP37",
      "description": "Identificar e empregar recursos gráfico-textuais que compõem o material lido, observando alinhamento, espaçamento, tipo e tamanho de letra, estilo (negrito, itálico, sublinhado), cores e capitulação, reconhecendo os efeitos de sentido provocados pelo uso.",
      "materials": ["Textos impressos com diferentes formatações (negrito, itálico, cores)", "Computador ou tablet com editor de texto, se disponível"],
      "steps": [
        "Observar em um texto impresso os diferentes recursos gráficos usados (negrito, cores, alinhamento).",
        "Discutir coletivamente por que o autor escolheu destacar certas partes do texto.",
        "Em duplas, reformatar um trecho de texto simples usando recursos gráficos com intenção.",
        "Trocar os textos reformatados entre os grupos e identificar o efeito pretendido.",
        "Sistematizar em um cartaz os recursos gráficos estudados e seus efeitos."
      ]
    },
    {
      "theme": "Conhecendo as variedades linguísticas da língua portuguesa",
      "curriculumCode": "EF05LP38",
      "description": "Identificar a existência de variedades da língua portuguesa determinadas por classe social, gênero, idade, escolaridade, profissão, localização geográfica e atividades humanas, assim como por influências interculturais de povos indígenas, africanos, europeus e outros.",
      "materials": ["Trechos de textos ou falas que representem diferentes variedades linguísticas", "Mapa do Brasil para localizar regiões"],
      "steps": [
        "Apresentar trechos de fala ou texto com diferentes variedades linguísticas do português.",
        "Discutir coletivamente o que pode explicar essas diferenças (região, idade, profissão).",
        "Em grupos, pesquisar palavras ou expressões típicas de diferentes regiões do Brasil.",
        "Localizar no mapa a origem das expressões pesquisadas.",
        "Compartilhar os achados destacando a riqueza das influências indígenas, africanas e europeias."
      ]
    },
    {
      "theme": "Valorizando as variedades linguísticas e combatendo o preconceito linguístico",
      "curriculumCode": "EF05LP39",
      "description": "Reconhecer situações comunicativas mais apropriadas ao uso de diferentes variedades — sem sobrepor uma à outra —, valorizando-as e repudiando discriminações realizadas contra pessoas pelo uso da variedade considerada não-padrão.",
      "materials": ["Casos ou situações fictícias envolvendo variedades linguísticas diferentes", "Cartaz para registro coletivo"],
      "steps": [
        "Apresentar situações comunicativas diferentes (entrevista formal, conversa entre amigos).",
        "Discutir qual variedade linguística seria mais adequada em cada situação.",
        "Ler ou ouvir um relato fictício de preconceito linguístico e debater seus efeitos.",
        "Em grupo, listar formas de valorizar diferentes variedades sem hierarquizá-las.",
        "Produzir coletivamente um cartaz com compromissos da turma contra o preconceito linguístico."
      ]
    },
    {
      "theme": "Analisando o papel dos artigos e adjetivos na caracterização dos nomes",
      "curriculumCode": "EF05LP40",
      "description": "Analisar os usos e as funções dos determinantes (artigos) e modificadores (adjetivos), considerando sua importância para determinar e caracterizar os substantivos, identificando a adequação e os efeitos de sentido para o texto.",
      "materials": ["Texto curto com artigos e adjetivos destacados", "Lista de substantivos para caracterizar"],
      "steps": [
        "Ler um texto e identificar coletivamente os artigos e adjetivos presentes.",
        "Discutir o que cada artigo e adjetivo acrescenta de informação ao substantivo.",
        "Em duplas, reescrever frases retirando os adjetivos e comparar o efeito.",
        "Adicionar novos adjetivos às mesmas frases e observar a mudança de sentido.",
        "Aplicar a análise em um trecho de produção própria da turma."
      ]
    },
    {
      "theme": "Concordância nominal entre artigos, adjetivos e substantivos",
      "curriculumCode": "EF05LP41",
      "description": "Analisar as possibilidades de flexão dos artigos e adjetivos, reconhecendo a necessidade de realizar a concordância nominal na produção de textos orais e escritos.",
      "materials": ["Frases com erros propositais de concordância nominal", "Cartaz com regras de concordância"],
      "steps": [
        "Apresentar frases com erros de concordância entre artigo, adjetivo e substantivo.",
        "Em grupo, identificar e corrigir os erros encontrados nas frases.",
        "Discutir coletivamente a regra de concordância nominal observada nos exemplos.",
        "Praticar oralmente a concordância em frases criadas pela turma.",
        "Revisar um texto próprio verificando a concordância nominal."
      ]
    },
    {
      "theme": "Efeitos de sentido dos modos, tempos e formas nominais dos verbos",
      "curriculumCode": "EF05LP42",
      "description": "Analisar os efeitos de sentido decorrentes dos usos dos modos, tempos e formas nominais dos verbos.",
      "materials": ["Texto com verbos em diferentes modos e tempos destacados", "Cartaz com exemplos de modos verbais"],
      "steps": [
        "Apresentar frases com o mesmo verbo em modos e tempos diferentes (indicativo, imperativo).",
        "Discutir em grupo como o sentido da frase muda conforme o modo/tempo usado.",
        "Identificar em um texto os verbos e classificar seus modos e tempos.",
        "Reescrever uma frase alterando o modo verbal e comparar o efeito produzido.",
        "Aplicar a observação na revisão de um texto de produção própria."
      ]
    },
    {
      "theme": "Identificando a sílaba tônica das palavras em textos conhecidos",
      "curriculumCode": "EF05LP43",
      "description": "Identificar a sílaba tônica de palavras em textos conhecidos.",
      "materials": ["Lista de palavras retiradas de um texto conhecido pela turma", "Cartaz para classificação por tonicidade"],
      "steps": [
        "Selecionar palavras de um texto já lido pela turma.",
        "Pronunciar cada palavra em voz alta, batendo palmas na sílaba mais forte.",
        "Em duplas, marcar a sílaba tônica de cada palavra da lista.",
        "Conferir coletivamente as marcações, corrigindo os casos de dúvida.",
        "Classificar as palavras em oxítonas, paroxítonas e proparoxítonas."
      ]
    },
    {
      "theme": "Relacionando acentos gráficos à tonicidade e à pronúncia",
      "curriculumCode": "EF05LP44",
      "description": "Relacionar a presença dos diferentes acentos gráficos à tonicidade da palavra e à pronúncia — aberta ou fechada.",
      "materials": ["Lista de palavras acentuadas com diferentes acentos (agudo e circunflexo)", "Espelho ou gravador para observar a pronúncia, se disponível"],
      "steps": [
        "Apresentar pares de palavras com acento agudo e circunflexo (ex.: avó/avô).",
        "Pronunciar as palavras observando a abertura da boca em cada som.",
        "Em grupo, relacionar o tipo de acento à pronúncia aberta ou fechada.",
        "Praticar a leitura de uma lista de palavras variando os dois tipos de acento.",
        "Registrar coletivamente a regra observada entre acento e pronúncia."
      ]
    },
    {
      "theme": "Praticando a acentuação de palavras proparoxítonas",
      "curriculumCode": "EF05LP45",
      "description": "Empregar corretamente a acentuação em proparoxítonas de uso recorrente, de modo autônomo.",
      "materials": ["Lista de palavras proparoxítonas de uso comum (ex.: médico, público, último)", "Ficha de exercício de acentuação"],
      "steps": [
        "Apresentar a regra de que toda proparoxítona é acentuada.",
        "Ler em voz alta uma lista de palavras proparoxítonas comuns.",
        "Em duplas, completar a ficha de exercício acentuando corretamente as palavras.",
        "Corrigir coletivamente, destacando os erros mais frequentes.",
        "Escrever frases próprias utilizando ao menos duas palavras proparoxítonas."
      ]
    },
    {
      "theme": "Escrevendo palavras regulares contextuais (nasalidade, R/RR, O/U)",
      "curriculumCode": "EF05LP46",
      "description": "Analisar e escrever convencionalmente palavras classificadas como regulares contextuais, compreendendo que o contexto determina diferenças no modo de grafar a nasalidade (M, N e outras), R/RR, O/U, entre outras.",
      "materials": ["Lista de palavras com nasalidade, R/RR ou O/U", "Ficha de ditado interativo"],
      "steps": [
        "Apresentar exemplos de palavras que mudam de grafia conforme o contexto (M/N, R/RR).",
        "Discutir coletivamente a regra que determina cada grafia.",
        "Realizar um ditado interativo em duplas com palavras dessas categorias.",
        "Corrigir o ditado coletivamente, retomando as regras em caso de erro.",
        "Produzir frases próprias empregando corretamente as palavras trabalhadas."
      ]
    },
    {
      "theme": "Comparando palavras derivadas ligadas a categorias gramaticais",
      "curriculumCode": "EF05LP47",
      "description": "Comparar inventário de palavras ligadas às categorias gramaticais, reconhecendo que o conhecimento do princípio gerativo traz informação sobre a grafia — substantivos derivados de verbos terminados em ÊNCIA, ANÇA, ÊNCIA e ISAR, entre outros.",
      "materials": ["Lista de verbos e seus substantivos derivados (ex.: crescer/crescença, existir/existência)", "Cartaz para organização das famílias de palavras"],
      "steps": [
        "Apresentar pares de verbos e seus substantivos derivados.",
        "Em grupo, observar o padrão de terminação que se repete nos substantivos.",
        "Buscar outros exemplos de palavras que sigam o mesmo padrão.",
        "Organizar as famílias de palavras encontradas em um cartaz coletivo.",
        "Escrever frases usando corretamente alguns dos substantivos estudados."
      ]
    },
    {
      "theme": "Escrevendo substantivos e adjetivos com terminações regulares",
      "curriculumCode": "EF05LP48",
      "description": "Escrever substantivos terminados em ICE, verbos finalizados com ISSE, adjetivos terminados pelos sufixos OSO e OSA, adjetivos que indicam lugar de origem e se escrevem com ES/ESA, e substantivos derivados de adjetivos terminados com o sufixo EZA.",
      "materials": ["Lista de palavras com as terminações ICE, ISSE, OSO/OSA, ES/ESA, EZA", "Ficha de exercício de completar palavras"],
      "steps": [
        "Apresentar exemplos de palavras com cada uma das terminações estudadas.",
        "Discutir coletivamente o padrão de grafia observado em cada terminação.",
        "Completar em duplas a ficha de exercício com as palavras corretas.",
        "Corrigir coletivamente, retomando os padrões em caso de dificuldade.",
        "Escrever um pequeno texto usando ao menos três palavras trabalhadas."
      ]
    },
    {
      "theme": "Escrevendo palavras irregulares com X e SC",
      "curriculumCode": "EF05LP49",
      "description": "Analisar e escrever palavras irregulares em que o X apresenta diferentes sons e em que há ocorrência de SC, registrando as descobertas para consultar nos momentos de produção de texto.",
      "materials": ["Lista de palavras irregulares com X e SC", "Caderno de descobertas ortográficas da turma"],
      "steps": [
        "Apresentar palavras com X em diferentes sons (chiado, ks, z, s) e palavras com SC.",
        "Em grupo, pronunciar as palavras e observar a irregularidade da grafia.",
        "Registrar as descobertas no caderno de descobertas ortográficas da turma.",
        "Realizar um exercício de escrita dessas palavras a partir de ditado.",
        "Consultar o caderno de descobertas durante a produção de um texto próprio."
      ]
    },
    {
      "theme": "Dividindo silabicamente palavras compostas no final da linha",
      "curriculumCode": "EF05LP50",
      "description": "Analisar a divisão silábica de palavras compostas no final da linha, orientando-se pela regra geral de divisão silábica e observando que, se a partição coincide com um dos elementos da palavra, deve-se repetir o hífen no início da linha seguinte.",
      "materials": ["Lista de palavras compostas com hífen (ex.: guarda-chuva, curto-circuito)", "Folha pautada para prática de translineação"],
      "steps": [
        "Apresentar exemplos de palavras compostas com hífen que precisam ser divididas no fim da linha.",
        "Explicar coletivamente a regra de repetir o hífen na linha seguinte.",
        "Em duplas, praticar a translineação de uma lista de palavras compostas na folha pautada.",
        "Corrigir coletivamente os casos praticados, destacando dúvidas comuns.",
        "Aplicar a regra revisando um texto próprio que contenha palavras compostas."
      ]
    }
  ],
  matematica: [
    {
      "theme": "Leitura, escrita e comparação de números naturais de várias ordens",
      "curriculumCode": "EF05M01",
      "description": "Leitura, escrita, comparação, arredondamento, ordenação, composição e decomposição de números naturais de qualquer ordem de grandeza, com base na compreensão do sistema de numeração decimal e uso da reta numerada.",
      "materials": ["Cartazes com o quadro de ordens e classes", "Calculadora", "Cartões numéricos"],
      "steps": [
        "Apresentar números grandes retirados de notícias (população, distâncias) e pedir que os alunos tentem lê-los em voz alta.",
        "Construir coletivamente o quadro de ordens e classes no quadro, decompondo os números apresentados.",
        "Propor atividades de comparação entre pares de números usando os símbolos de maior, menor e igual.",
        "Trabalhar arredondamento para a dezena, centena e milhar mais próxima com exemplos do cotidiano.",
        "Propor jogo de ordenação de cartões numéricos em fileira, do menor para o maior.",
        "Registrar em cartaz a composição e decomposição dos números trabalhados."
      ]
    },
    {
      "theme": "Leitura e representação de números racionais na reta numerada",
      "curriculumCode": "EF05M02",
      "description": "Reconhecimento e leitura de números racionais de uso frequente, nas representações fracionária e decimal, com representação desses números na reta numerada.",
      "materials": ["Reta numerada impressa", "Fichas com frações e decimais", "Régua"],
      "steps": [
        "Retomar situações do cotidiano em que aparecem frações e decimais (receitas, preços, medidas).",
        "Apresentar diferentes representações de um mesmo número racional e discutir seus significados.",
        "Construir uma reta numerada coletiva no quadro, marcando pontos de referência.",
        "Distribuir fichas com números racionais para os alunos posicionarem na reta.",
        "Discutir em grupo os critérios usados para posicionar cada número.",
        "Registrar no caderno a reta construída com os números organizados."
      ]
    },
    {
      "theme": "Significados dos números racionais: parte-todo e quociente",
      "curriculumCode": "EF05M03",
      "description": "Reconhecimento dos significados de parte-todo e de quociente para os números racionais, utilizando-os em diferentes contextos.",
      "materials": ["Folhas de papel para dobradura", "Fichas de problemas", "Fichas de contagem"],
      "steps": [
        "Propor a divisão de uma folha de papel em partes iguais, relacionando com a ideia de parte-todo.",
        "Apresentar situações-problema de divisão sem resultado exato, associando ao significado de quociente.",
        "Comparar as duas ideias usando exemplos concretos, como pizza dividida e balas repartidas.",
        "Propor problemas em duplas para identificar qual significado está envolvido em cada situação.",
        "Socializar as resoluções e formalizar coletivamente as diferenças entre os dois significados."
      ]
    },
    {
      "theme": "Comparação e ordenação de frações e números decimais",
      "curriculumCode": "EF05M04",
      "description": "Comparação e ordenação de números racionais de uso frequente, nas representações fracionária e decimal.",
      "materials": ["Cartões com frações e decimais", "Reta numerada", "Fichas coloridas"],
      "steps": [
        "Retomar representações fracionárias e decimais já conhecidas pelos alunos.",
        "Propor a comparação de pares de frações com mesmo denominador e depois com denominadores diferentes.",
        "Trabalhar a comparação de números decimais observando a posição das casas decimais.",
        "Organizar um jogo de ordenação em que os alunos ordenam cartões do menor para o maior.",
        "Discutir estratégias usadas para comparar e ordenar, valorizando diferentes caminhos de resolução."
      ]
    },
    {
      "theme": "Investigação da equivalência de frações",
      "curriculumCode": "EF05M05",
      "description": "Investigação da condição de equivalência entre duas ou mais frações, por meio de representações gráficas e da observação de regularidades nas escritas numéricas.",
      "materials": ["Tiras de papel para dobradura", "Malha quadriculada", "Cartolina"],
      "steps": [
        "Distribuir tiras de papel iguais para os alunos dobrarem em diferentes quantidades de partes.",
        "Pintar partes equivalentes em tiras diferentes e comparar os resultados.",
        "Registrar as frações equivalentes encontradas em uma tabela coletiva.",
        "Propor a representação de frações equivalentes em malha quadriculada.",
        "Formular, em duplas, uma explicação sobre por que essas frações são equivalentes.",
        "Compartilhar as conclusões com a turma e sistematizar no caderno."
      ]
    },
    {
      "theme": "Estratégias de cálculo com as quatro operações",
      "curriculumCode": "EF05M06",
      "description": "Cálculo do resultado das quatro operações com números naturais, por meio de estratégias pessoais, cálculo mental, arredondamentos, estimativas e técnicas convencionais, analisando a razoabilidade dos resultados.",
      "materials": ["Calculadora", "Fichas com expressões numéricas", "Quadro para registro de estratégias"],
      "steps": [
        "Propor uma operação e pedir que os alunos resolvam por cálculo mental, comparando estratégias.",
        "Explorar arredondamentos e estimativas antes de calcular o resultado exato.",
        "Apresentar a técnica operatória convencional para cada operação, quando necessário.",
        "Usar a calculadora para conferir os resultados e discutir a razoabilidade das respostas.",
        "Propor uma lista de operações variadas para resolução individual, escolhendo a estratégia mais adequada.",
        "Socializar diferentes formas de resolver a mesma operação."
      ]
    },
    {
      "theme": "Resolução de problemas dos campos aditivo e multiplicativo",
      "curriculumCode": "EF05M07",
      "description": "Análise, interpretação, formulação e resolução de problemas com números naturais envolvendo os significados dos campos aditivo e multiplicativo, validando os resultados por estimativa.",
      "materials": ["Fichas de problemas contextualizados", "Material manipulável (tampinhas, palitos)", "Cartaz com os tipos de problema"],
      "steps": [
        "Apresentar problemas de composição, transformação e comparação, identificando coletivamente as diferenças.",
        "Explorar problemas multiplicativos de proporcionalidade, configuração retangular e combinatória.",
        "Organizar duplas para resolver problemas variados, registrando a estratégia usada.",
        "Discutir a razoabilidade das respostas encontradas, usando estimativas.",
        "Propor que os próprios alunos criem um problema de cada tipo estudado.",
        "Trocar os problemas criados entre as duplas para resolução."
      ]
    },
    {
      "theme": "Cálculo de adição e subtração com números decimais",
      "curriculumCode": "EF05M08",
      "description": "Cálculo do resultado de adições e subtrações com números racionais na forma decimal, usando diferentes estratégias e analisando a razoabilidade dos resultados.",
      "materials": ["Fichas com valores em reais", "Material dourado", "Calculadora"],
      "steps": [
        "Retomar situações do cotidiano envolvendo dinheiro, com valores em reais e centavos.",
        "Explorar o alinhamento das casas decimais na técnica operatória de adição e subtração.",
        "Propor cálculo mental e estimativas antes da resolução exata.",
        "Resolver problemas envolvendo compras simuladas, somando e subtraindo valores decimais.",
        "Conferir os resultados com a calculadora e discutir a razoabilidade.",
        "Registrar as estratégias utilizadas no caderno."
      ]
    },
    {
      "theme": "Cálculo de porcentagens simples e sua relação com frações",
      "curriculumCode": "EF05M09",
      "description": "Resolução de problemas envolvendo o cálculo de 10%, 25%, 50%, 75% e 100%, associando essas porcentagens às respectivas representações fracionárias e decimais.",
      "materials": ["Malha quadriculada 10x10", "Cartazes com porcentagens", "Fichas de problemas"],
      "steps": [
        "Apresentar a malha quadriculada de 100 quadrinhos e pintar partes para representar porcentagens.",
        "Relacionar 50% com metade, 25% com um quarto, 75% com três quartos e 100% com o inteiro.",
        "Propor situações-problema envolvendo descontos e promoções com essas porcentagens.",
        "Resolver os problemas em duplas, registrando as estratégias.",
        "Sistematizar coletivamente a relação entre porcentagem, fração e decimal."
      ]
    },
    {
      "theme": "Problemas do campo aditivo com números racionais em forma decimal",
      "curriculumCode": "EF05M10",
      "description": "Análise, interpretação, formulação e resolução de problemas com números racionais na forma decimal, envolvendo significados do campo aditivo, com validação dos resultados.",
      "materials": ["Fichas de problemas contextualizados", "Calculadora", "Cartaz com os significados do campo aditivo"],
      "steps": [
        "Retomar os significados do campo aditivo já estudados com números naturais.",
        "Apresentar problemas semelhantes, agora envolvendo valores decimais.",
        "Resolver coletivamente um problema de cada tipo, identificando o significado envolvido.",
        "Propor lista de problemas para resolução individual ou em duplas.",
        "Validar os resultados usando estimativas e a calculadora.",
        "Socializar as estratégias de resolução utilizadas pela turma."
      ]
    },
    {
      "theme": "Investigação das propriedades da igualdade",
      "curriculumCode": "EF05M11",
      "description": "Investigação de que uma igualdade se mantém quando os mesmos valores são somados, subtraídos, multiplicados ou divididos em ambos os lados.",
      "materials": ["Balança de dois pratos (ou desenho representando)", "Fichas numéricas", "Quadro para registro"],
      "steps": [
        "Apresentar uma balança equilibrada com números iguais em cada prato, representando uma igualdade.",
        "Adicionar o mesmo valor aos dois lados e observar que o equilíbrio se mantém.",
        "Repetir a investigação subtraindo, multiplicando e dividindo os dois lados pelo mesmo número.",
        "Registrar as descobertas em forma de igualdades matemáticas no caderno.",
        "Propor situações em que os alunos descobrem um valor desconhecido usando essa propriedade.",
        "Socializar as estratégias e formalizar a propriedade coletivamente."
      ]
    },
    {
      "theme": "Problemas envolvendo ampliação e redução proporcional de quantidades",
      "curriculumCode": "EF05M12",
      "description": "Resolução de problemas envolvendo ampliação ou redução proporcional de quantidades.",
      "materials": ["Receitas culinárias simples", "Fichas de problemas", "Calculadora"],
      "steps": [
        "Apresentar uma receita culinária simples e propor que seja dobrada ou reduzida à metade.",
        "Discutir coletivamente como cada ingrediente deve variar de forma proporcional.",
        "Propor outros problemas de ampliação e redução de quantidades em contextos diferentes.",
        "Resolver os problemas em duplas, registrando o raciocínio utilizado.",
        "Socializar as estratégias, destacando a ideia de proporcionalidade."
      ]
    },
    {
      "theme": "Problemas de partilha de uma quantidade em partes desiguais",
      "curriculumCode": "EF05M13",
      "description": "Resolução de problemas de partilha de uma quantidade em duas partes desiguais, com base em uma relação dada entre as partes.",
      "materials": ["Fichas de contagem (tampinhas, botões)", "Fichas de problemas", "Cartaz para registro de estratégias"],
      "steps": [
        "Apresentar uma situação de partilha em que uma parte deve ser o dobro da outra, usando material concreto.",
        "Explorar coletivamente como descobrir cada parte a partir do total.",
        "Propor outros problemas de partilha desigual com diferentes relações entre as partes.",
        "Resolver os problemas em duplas, testando diferentes estratégias.",
        "Socializar as resoluções e comparar os caminhos utilizados pela turma."
      ]
    },
    {
      "theme": "Localização e movimentação de pontos no plano cartesiano",
      "curriculumCode": "EF05M14",
      "description": "Descrição, interpretação e representação da localização e movimentação de pontos no primeiro quadrante do plano cartesiano.",
      "materials": ["Malha quadriculada com eixos", "Fichas com coordenadas", "Régua"],
      "steps": [
        "Apresentar o plano cartesiano e explicar a função dos eixos horizontal e vertical.",
        "Demonstrar como localizar um ponto a partir de um par de coordenadas.",
        "Propor que os alunos marquem pontos dados em uma malha, formando desenhos ou figuras.",
        "Solicitar que descrevam a movimentação de um ponto para outro, usando direções.",
        "Propor um desafio em duplas: um aluno descreve coordenadas e o outro marca os pontos.",
        "Socializar os desenhos formados e conferir a precisão das marcações."
      ]
    },
    {
      "theme": "Características e classificação de poliedros",
      "curriculumCode": "EF05M15",
      "description": "Análise de características, similaridades e diferenças entre poliedros como prismas e pirâmides, com nomeação e classificação.",
      "materials": ["Sólidos geométricos (prismas e pirâmides)", "Embalagens variadas", "Cartaz com nomes dos poliedros"],
      "steps": [
        "Explorar coletivamente sólidos geométricos disponíveis na sala, observando faces, vértices e arestas.",
        "Classificar os sólidos em prismas e pirâmides, discutindo suas características.",
        "Comparar semelhanças e diferenças entre diferentes poliedros.",
        "Propor a identificação de poliedros em embalagens e objetos do cotidiano.",
        "Registrar em uma tabela o nome e as características de cada poliedro explorado."
      ]
    },
    {
      "theme": "Planificação de sólidos geométricos",
      "curriculumCode": "EF05M16",
      "description": "Planificação de prismas, pirâmides, cones e cilindros.",
      "materials": ["Moldes planificados de sólidos geométricos", "Tesoura", "Cola", "Embalagens recicláveis"],
      "steps": [
        "Apresentar embalagens em formato de prisma, pirâmide, cone e cilindro para observação.",
        "Desmontar cuidadosamente uma embalagem para observar sua planificação.",
        "Distribuir moldes planificados para os alunos recortarem e montarem os sólidos.",
        "Comparar as planificações de diferentes sólidos, identificando semelhanças e diferenças.",
        "Registrar no caderno os desenhos das planificações trabalhadas."
      ]
    },
    {
      "theme": "Relações entre faces, vértices e arestas de poliedros",
      "curriculumCode": "EF05M17",
      "description": "Investigação das relações entre o número de faces, vértices e arestas de um poliedro.",
      "materials": ["Sólidos geométricos", "Tabela para registro", "Palitos e massinha para construção de esqueletos de poliedros"],
      "steps": [
        "Retomar os sólidos geométricos já conhecidos e contar suas faces, vértices e arestas.",
        "Organizar os dados em uma tabela coletiva no quadro.",
        "Propor a construção de esqueletos de poliedros com palitos e massinha.",
        "Investigar em grupos se existe uma relação entre os números de faces, vértices e arestas.",
        "Socializar as descobertas e registrar as conclusões da turma."
      ]
    },
    {
      "theme": "Classificação de polígonos pelo número de lados e ângulos",
      "curriculumCode": "EF05M18",
      "description": "Análise de similaridades e diferenças entre polígonos considerando número de lados e ângulos, com nomeação e representação.",
      "materials": ["Figuras de polígonos variados", "Régua e transferidor", "Cartaz com nomes dos polígonos"],
      "steps": [
        "Apresentar diversas figuras planas e separar em polígonos e não polígonos.",
        "Contar o número de lados e ângulos de cada polígono apresentado.",
        "Nomear os polígonos de acordo com o número de lados.",
        "Propor que os alunos desenhem e nomeiem polígonos a partir de critérios dados.",
        "Comparar semelhanças e diferenças entre os polígonos explorados."
      ]
    },
    {
      "theme": "Circunferência e seus elementos",
      "curriculumCode": "EF05M19",
      "description": "Identificação de uma circunferência e de seus elementos (diâmetro, raio e centro), com representação.",
      "materials": ["Compasso", "Barbante e giz", "Objetos circulares"],
      "steps": [
        "Explorar objetos circulares do cotidiano, identificando sua forma.",
        "Demonstrar o uso do compasso (ou barbante preso a um giz) para traçar uma circunferência.",
        "Apresentar os elementos da circunferência: centro, raio e diâmetro.",
        "Propor que os alunos tracem circunferências variando a medida do raio.",
        "Medir e registrar a relação entre raio e diâmetro nas circunferências traçadas."
      ]
    },
    {
      "theme": "Composição e decomposição de polígonos com figuras triangulares",
      "curriculumCode": "EF05M20",
      "description": "Composição e decomposição de polígonos, reconhecendo que qualquer polígono pode ser formado a partir de figuras triangulares.",
      "materials": ["Peças de Tangram", "Malha triangular ou quadriculada", "Tesoura e cola"],
      "steps": [
        "Apresentar peças triangulares e propor a montagem de diferentes polígonos com elas.",
        "Explorar como um mesmo polígono pode ser composto por diferentes combinações de triângulos.",
        "Propor que os alunos decomponham polígonos desenhados em triângulos menores.",
        "Registrar, por meio de desenhos, as composições e decomposições realizadas.",
        "Socializar as descobertas destacando que todo polígono pode ser formado a partir de triângulos."
      ]
    },
    {
      "theme": "Ampliação e redução de polígonos em malha quadriculada",
      "curriculumCode": "EF05M21",
      "description": "Ampliação e redução de polígonos com uso de malhas quadriculadas.",
      "materials": ["Malha quadriculada", "Régua", "Lápis de cor"],
      "steps": [
        "Apresentar um polígono desenhado em malha quadriculada e contar seus quadradinhos.",
        "Propor a ampliação do polígono, dobrando as medidas de cada lado.",
        "Propor a redução do polígono, reduzindo as medidas à metade.",
        "Comparar o polígono original com as versões ampliada e reduzida.",
        "Discutir o que se mantém e o que se altera nas figuras ampliadas e reduzidas."
      ]
    },
    {
      "theme": "Simetria de reflexão em figuras planas",
      "curriculumCode": "EF05M22",
      "description": "Reconhecimento de simetria de reflexão em figuras ou pares de figuras planas, com identificação do eixo de simetria.",
      "materials": ["Espelho", "Malha quadriculada", "Figuras simétricas para recorte", "Tinta e papel para dobradura"],
      "steps": [
        "Explorar figuras do cotidiano que apresentam simetria (borboletas, rostos, objetos).",
        "Utilizar um espelho para observar a simetria de reflexão em diferentes figuras.",
        "Propor a atividade de pintura com dobradura, formando figuras simétricas.",
        "Identificar o eixo de simetria nas figuras produzidas.",
        "Propor desafios em malha quadriculada para completar a outra metade de uma figura simétrica."
      ]
    },
    {
      "theme": "Identificação de ângulos retos, agudos e obtusos",
      "curriculumCode": "EF05M23",
      "description": "Exploração de ângulos retos, agudos e obtusos em polígonos, com ou sem uso de tecnologias digitais.",
      "materials": ["Transferidor", "Esquadro", "Figuras de polígonos variados"],
      "steps": [
        "Apresentar o ângulo reto usando o canto de uma folha ou esquadro como referência.",
        "Comparar ângulos maiores e menores que o ângulo reto, nomeando-os como obtusos e agudos.",
        "Explorar polígonos variados, classificando seus ângulos internos.",
        "Propor o uso do transferidor para medir ângulos com maior precisão.",
        "Registrar em tabela os tipos de ângulos encontrados em cada polígono estudado."
      ]
    },
    {
      "theme": "Resultados possíveis de experimentos aleatórios",
      "curriculumCode": "EF05M24",
      "description": "Determinação de todos os resultados possíveis de um experimento aleatório, investigando se são igualmente prováveis.",
      "materials": ["Dados", "Moedas", "Fichas numeradas", "Tabela de registro"],
      "steps": [
        "Propor o lançamento de um dado e perguntar quais resultados são possíveis.",
        "Registrar coletivamente todos os resultados possíveis do experimento.",
        "Repetir a investigação com outros experimentos, como lançar uma moeda ou sortear uma ficha.",
        "Discutir se todos os resultados possíveis têm a mesma chance de ocorrer.",
        "Sistematizar as conclusões em um cartaz coletivo."
      ]
    },
    {
      "theme": "Cálculo da probabilidade de eventos equiprováveis",
      "curriculumCode": "EF05M25",
      "description": "Determinação da probabilidade de ocorrência de um resultado em eventos aleatórios equiprováveis.",
      "materials": ["Dados", "Moedas", "Urna com fichas coloridas", "Tabela de registro"],
      "steps": [
        "Retomar os resultados possíveis de um experimento aleatório já explorado.",
        "Realizar repetidas vezes um sorteio (moeda ou ficha) e registrar os resultados obtidos.",
        "Discutir a chance de cada resultado ocorrer, relacionando com a ideia de partes iguais.",
        "Calcular a probabilidade de eventos simples, expressando-a como fração.",
        "Comparar os resultados experimentais com a probabilidade calculada."
      ]
    },
    {
      "theme": "Associação de tabelas a gráficos de colunas, barras e linhas",
      "curriculumCode": "EF05M26",
      "description": "Associação entre tabelas e gráficos de colunas, barras e linhas, identificando elementos constitutivos como título, legenda, fonte e data.",
      "materials": ["Tabelas de dados", "Papel quadriculado", "Régua e lápis de cor"],
      "steps": [
        "Apresentar uma tabela de dados simples, como preferências da turma.",
        "Demonstrar como transformar os dados da tabela em um gráfico de colunas.",
        "Repetir o processo com gráficos de barras e de linhas, discutindo quando usar cada tipo.",
        "Identificar elementos do gráfico, como título, legenda e fonte.",
        "Propor que os alunos associem gráficos prontos às tabelas correspondentes."
      ]
    },
    {
      "theme": "Pesquisa e organização de dados em tabelas e gráficos",
      "curriculumCode": "EF05M27",
      "description": "Realização de pesquisa envolvendo variáveis categóricas e numéricas, com organização dos dados em tabelas e gráficos.",
      "materials": ["Fichas de pesquisa", "Papel quadriculado", "Computador ou tablet (se disponível)"],
      "steps": [
        "Definir coletivamente um tema de pesquisa de interesse da turma.",
        "Elaborar perguntas envolvendo variáveis categóricas (cor preferida) e numéricas (idade, altura).",
        "Coletar os dados entrevistando os colegas da turma.",
        "Organizar os dados coletados em tabelas.",
        "Representar os dados organizados em gráficos de colunas, barras ou pictóricos.",
        "Apresentar os resultados da pesquisa para a turma."
      ]
    },
    {
      "theme": "Produção de texto a partir da leitura de tabelas e gráficos",
      "curriculumCode": "EF05M28",
      "description": "Produção de texto a partir da leitura de dados apresentados em tabelas e gráficos de colunas, barras e pictóricos.",
      "materials": ["Tabelas e gráficos impressos", "Folha para produção de texto"],
      "steps": [
        "Apresentar um gráfico ou tabela com dados sobre um tema do interesse dos alunos.",
        "Realizar a leitura coletiva dos dados apresentados, identificando informações relevantes.",
        "Discutir oralmente as conclusões que podem ser tiradas dos dados.",
        "Propor a produção de um pequeno texto individual explicando o que o gráfico ou tabela mostra.",
        "Socializar os textos produzidos com a turma."
      ]
    },
    {
      "theme": "Resolução de problemas a partir de dados organizados em tabelas e gráficos",
      "curriculumCode": "EF05M29",
      "description": "Resolução de problemas com dados apresentados de forma organizada em tabelas e gráficos.",
      "materials": ["Tabelas e gráficos impressos", "Fichas de problemas"],
      "steps": [
        "Apresentar um gráfico ou tabela com dados de uma situação real, como resultado de uma pesquisa.",
        "Formular perguntas que exijam a leitura e interpretação dos dados apresentados.",
        "Resolver coletivamente um problema, demonstrando como buscar a informação na tabela ou gráfico.",
        "Propor uma lista de problemas para resolução em duplas.",
        "Socializar as respostas encontradas, comparando as estratégias de leitura dos dados."
      ]
    },
    {
      "theme": "Problemas envolvendo medidas de comprimento, massa, tempo, temperatura e capacidade",
      "curriculumCode": "EF05M30",
      "description": "Resolução e elaboração de problemas envolvendo medidas de comprimento, massa, tempo, temperatura e capacidade, com transformação entre unidades usuais.",
      "materials": ["Fita métrica", "Balança", "Termômetro", "Recipientes graduados", "Fichas de problemas"],
      "steps": [
        "Explorar instrumentos de medida (fita métrica, balança, termômetro, recipientes) e suas unidades.",
        "Discutir situações cotidianas que envolvem transformação entre unidades (metros e centímetros, quilos e gramas).",
        "Propor problemas contextualizados envolvendo essas grandezas.",
        "Resolver os problemas em duplas, usando cálculo mental quando possível.",
        "Socializar as estratégias de resolução e as transformações de unidades realizadas."
      ]
    },
    {
      "theme": "Cálculo do perímetro de polígonos",
      "curriculumCode": "EF05M31",
      "description": "Resolução e elaboração de problemas envolvendo o perímetro de polígonos desenhados em malhas quadriculadas ou não.",
      "materials": ["Malha quadriculada", "Régua", "Barbante"],
      "steps": [
        "Apresentar a ideia de perímetro como a medida do contorno de uma figura.",
        "Medir o perímetro de polígonos desenhados em malha quadriculada, contando os lados.",
        "Utilizar régua para medir o perímetro de polígonos desenhados livremente.",
        "Propor problemas envolvendo o cálculo e a elaboração de situações com perímetro.",
        "Socializar as resoluções, comparando diferentes estratégias de cálculo."
      ]
    },
    {
      "theme": "Compreensão da área como medida de superfície",
      "curriculumCode": "EF05M32",
      "description": "Compreensão da área como medida de superfície de figuras geométricas planas.",
      "materials": ["Malha quadriculada", "Peças de material dourado ou tampinhas", "Cartolina"],
      "steps": [
        "Apresentar a ideia de área como o espaço ocupado por uma superfície.",
        "Cobrir figuras desenhadas em malha quadriculada com peças menores, contando quantas cabem.",
        "Comparar áreas de diferentes figuras a partir da contagem de quadradinhos.",
        "Discutir coletivamente a diferença entre área e perímetro.",
        "Registrar as conclusões no caderno com exemplos ilustrados."
      ]
    },
    {
      "theme": "Cálculo de áreas de retângulos e quadrados em malha quadriculada",
      "curriculumCode": "EF05M33",
      "description": "Resolução e elaboração de problemas envolvendo medidas de área de retângulos e quadrados desenhados em malha quadriculada.",
      "materials": ["Malha quadriculada", "Régua", "Fichas de problemas"],
      "steps": [
        "Retomar a ideia de área como contagem de quadradinhos em uma malha.",
        "Desenhar retângulos e quadrados na malha e contar suas áreas por contagem direta.",
        "Investigar coletivamente uma forma mais rápida de calcular a área, relacionando lados e quantidade de quadradinhos.",
        "Propor problemas envolvendo o cálculo de áreas de figuras desenhadas em malha.",
        "Elaborar, em duplas, um problema envolvendo área para ser resolvido pelos colegas."
      ]
    },
    {
      "theme": "Problemas com o sistema monetário brasileiro",
      "curriculumCode": "EF05M34",
      "description": "Resolução de problemas com mais de uma operação envolvendo a escrita decimal de valores do sistema monetário brasileiro.",
      "materials": ["Cédulas e moedas de brinquedo", "Encartes de mercado ou preços simulados", "Calculadora"],
      "steps": [
        "Explorar cédulas e moedas do sistema monetário brasileiro, relacionando com a escrita decimal.",
        "Simular uma situação de compra com produtos de preços variados.",
        "Propor problemas que envolvam mais de uma operação com valores em reais.",
        "Resolver os problemas em duplas, registrando os cálculos realizados.",
        "Conferir os resultados com a calculadora e discutir a razoabilidade das respostas."
      ]
    },
    {
      "theme": "Noção de volume por meio do empilhamento de cubos",
      "curriculumCode": "EF05M35",
      "description": "Reconhecimento do volume como grandeza associada a sólidos geométricos, com determinação de volumes por empilhamento de cubos.",
      "materials": ["Cubos de encaixe ou blocos", "Caixas pequenas", "Ficha de registro"],
      "steps": [
        "Explorar objetos do cotidiano que ocupam espaço, discutindo a ideia de volume.",
        "Propor a construção de empilhamentos de cubos, formando diferentes sólidos.",
        "Contar o número de cubos utilizados em cada construção, associando à ideia de volume.",
        "Comparar o volume de diferentes construções feitas com a mesma quantidade de cubos.",
        "Registrar, por meio de desenhos, as construções realizadas e suas respectivas quantidades de cubos."
      ]
    },
    {
      "theme": "Jogos de tabuleiro: estratégias e antecipação de jogadas",
      "curriculumCode": "EF05M36",
      "description": "Realização de jogos de tabuleiro de estratégia e conhecimento, com justificativa das estratégias usadas e antecipação de jogadas.",
      "materials": ["Jogos de tabuleiro (damas, trilha, xadrez simplificado)", "Folha para registro de estratégias"],
      "steps": [
        "Organizar a turma em duplas ou trios para jogar um jogo de tabuleiro de estratégia.",
        "Observar e discutir as jogadas realizadas, incentivando a antecipação de possíveis resultados.",
        "Propor uma pausa no jogo para que os alunos registrem por escrito a estratégia que estão usando.",
        "Retomar o jogo aplicando os ajustes pensados.",
        "Socializar com a turma as estratégias vencedoras e o porquê de sua eficácia."
      ]
    },
    {
      "theme": "Composição de figuras com peças do Tangram",
      "curriculumCode": "EF05M37",
      "description": "Formação de triângulos, quadrados e retângulos com número limitado de peças do Tangram (ou outro quebra-cabeça), justificando as escolhas.",
      "materials": ["Peças de Tangram", "Cartolina", "Tesoura"],
      "steps": [
        "Apresentar o Tangram e explorar livremente as possibilidades de composição de figuras.",
        "Propor o desafio de formar um triângulo maior usando um número limitado de peças.",
        "Repetir o desafio para formar quadrados e retângulos com diferentes combinações de peças.",
        "Registrar, por meio de desenho, as combinações de peças utilizadas em cada figura.",
        "Justificar oralmente por que as peças escolhidas formam a figura solicitada."
      ]
    },
    {
      "theme": "Projeto sobre produção e consumo consciente de alimentos",
      "curriculumCode": "EF05M38",
      "description": "Desenvolvimento de projeto sobre produção e consumo consciente de alimentos, analisando dados relativos ao tema e relacionando-os à Matemática.",
      "materials": ["Cartazes", "Dados de pesquisa sobre desperdício de alimentos", "Material para registro do projeto"],
      "steps": [
        "Apresentar dados sobre produção e consumo de alimentos, discutindo a questão do desperdício.",
        "Organizar os alunos em grupos para pesquisar hábitos de consumo na própria comunidade escolar.",
        "Coletar e organizar os dados da pesquisa em tabelas e gráficos.",
        "Analisar os dados coletados, relacionando-os aos conceitos matemáticos estudados.",
        "Elaborar um cartaz ou apresentação com propostas de consumo consciente.",
        "Compartilhar o projeto com a comunidade escolar."
      ]
    },
    {
      "theme": "Projeto sobre impactos sociais e ambientais da produção e consumo",
      "curriculumCode": "EF05M39",
      "description": "Desenvolvimento de projeto sobre impactos sociais e ambientais da produção e do consumo, relacionando os dados analisados à Matemática.",
      "materials": ["Textos e reportagens sobre impactos ambientais", "Cartazes", "Material para registro de dados"],
      "steps": [
        "Discutir com a turma exemplos de impactos sociais e ambientais causados pela produção e consumo.",
        "Escolher coletivamente um tema para investigação, como uso de água, energia ou geração de lixo.",
        "Coletar dados relacionados ao tema, organizando-os em tabelas e gráficos.",
        "Analisar os dados obtidos, relacionando-os a conceitos matemáticos como porcentagem e proporção.",
        "Elaborar propostas de ação com base nos dados analisados.",
        "Apresentar o projeto para a turma ou comunidade escolar."
      ]
    },
    {
      "theme": "Justificativa da linguagem matemática e das estratégias de resolução",
      "curriculumCode": "EF05M40",
      "description": "Justificativa da linguagem matemática e das estratégias utilizadas na resolução de um problema.",
      "materials": ["Fichas de problemas", "Cartaz para registro coletivo de estratégias"],
      "steps": [
        "Propor um problema desafiador para ser resolvido individualmente.",
        "Solicitar que cada aluno registre por escrito a estratégia utilizada para resolver o problema.",
        "Organizar uma roda de conversa para que os alunos expliquem oralmente seu raciocínio.",
        "Comparar diferentes estratégias usadas pela turma para o mesmo problema.",
        "Discutir qual linguagem matemática (desenhos, números, palavras) foi mais clara para comunicar o raciocínio.",
        "Registrar coletivamente as conclusões sobre a importância de justificar as estratégias usadas."
      ]
    },
    {
      "theme": "Investigação da propriedade distributiva da multiplicação e da divisão",
      "curriculumCode": "EF05M41",
      "description": "Investigação da validade da propriedade distributiva da multiplicação e da divisão em relação à adição ou subtração, a partir da observação de regularidades.",
      "materials": ["Material dourado", "Fichas numéricas", "Cartaz para registro de regularidades"],
      "steps": [
        "Propor o cálculo de uma multiplicação decompondo um dos fatores em uma soma.",
        "Comparar o resultado obtido com o cálculo direto da multiplicação, verificando que são iguais.",
        "Repetir a investigação com outras multiplicações, registrando as regularidades observadas.",
        "Investigar a mesma ideia aplicada à divisão em relação à adição ou subtração.",
        "Formular coletivamente uma conclusão sobre a propriedade distributiva.",
        "Propor exercícios de aplicação da propriedade para o cálculo mental."
      ]
    }
  ],
  ciencias: [
    {
      "theme": "Como os materiais reagem a estímulos físicos?",
      "curriculumCode": "EF05C01",
      "description": "Exploração experimental de como diferentes materiais respondem a estímulos físicos, como a atração magnética sobre objetos metálicos, a resistência ao manuseio e as mudanças causadas pelo aquecimento.",
      "materials": ["Ímãs variados", "Objetos metálicos e não metálicos pequenos", "Elásticos e molas", "Fonte de calor segura (ex: água morna em recipiente)", "Cubos de gelo", "Ficha de registro para cada estação"],
      "steps": [
        "Organizar a sala em estações de experimentação: magnetismo, resistência e aquecimento.",
        "Na estação de magnetismo, os alunos testam quais objetos são atraídos pelo ímã e quais não são.",
        "Na estação de resistência, testam puxar elásticos e molas, observando a força necessária e o retorno ao formato original.",
        "Na estação de aquecimento, observam o gelo derretendo em água morna e registram a mudança de estado.",
        "Em cada estação, os alunos anotam o que observaram em uma ficha simples.",
        "Fazer uma roda de conversa final relacionando os estímulos físicos às respostas dos materiais."
      ]
    },
    {
      "theme": "Como a matéria circula entre seres vivos e o ambiente?",
      "curriculumCode": "EF05C02",
      "description": "Explicação de como plantas, animais, decompositores e o ambiente se relacionam no transporte e na transformação da matéria, formando um ciclo contínuo na natureza.",
      "materials": ["Pote de vidro transparente", "Restos de frutas e folhas", "Terra", "Imagens de decompositores (minhocas, fungos, bactérias)", "Cartolina e canetinhas"],
      "steps": [
        "Perguntar aos alunos para onde vão as folhas e frutas que caem no chão.",
        "Montar, em um pote de vidro, camadas de terra e restos orgânicos para simular uma composteira simples.",
        "Apresentar imagens de decompositores e explicar seu papel na transformação da matéria.",
        "Em grupos, desenhar um esquema mostrando planta, animal, decompositor e ambiente conectados por setas.",
        "Comparar os esquemas dos grupos, destacando que a matéria se transforma mas não desaparece.",
        "Combinar de observar o pote-composteira ao longo das próximas semanas."
      ]
    },
    {
      "theme": "De onde vem a energia elétrica que usamos?",
      "curriculumCode": "EF05C03",
      "description": "Investigação sobre diferentes formas de produção de energia elétrica (hidrelétrica, termelétrica, eólica, solar) e debate sobre os possíveis impactos ambientais de cada uma.",
      "materials": ["Imagens ou vídeos curtos de usinas hidrelétrica, termelétrica, eólica e solar", "Mapa do Brasil", "Cartolina", "Canetinhas"],
      "steps": [
        "Perguntar aos alunos o que acontece quando ligam um interruptor de luz e de onde vem essa energia.",
        "Apresentar imagens das diferentes formas de produção de energia elétrica.",
        "Dividir a turma em grupos, cada um pesquisando uma fonte de energia.",
        "Cada grupo lista vantagens e possíveis impactos ambientais da fonte estudada.",
        "Realizar um pequeno debate em que os grupos apresentam seus achados uns aos outros.",
        "Fechar com uma lista coletiva de cuidados ambientais relacionados à produção de energia."
      ]
    },
    {
      "theme": "Combustíveis e o consumo de recursos naturais",
      "curriculumCode": "EF05C04",
      "description": "Associação entre a produção de combustíveis e o consumo de recursos naturais, reconhecendo os possíveis danos ambientais decorrentes de sua extração e uso.",
      "materials": ["Imagens de fontes de combustíveis (petróleo, cana-de-açúcar, carvão)", "Rótulos ou embalagens de combustíveis (etanol, gasolina)", "Cartolina", "Revistas para recorte"],
      "steps": [
        "Perguntar quais combustíveis os alunos conhecem e de onde eles vêm.",
        "Apresentar imagens mostrando a origem de diferentes combustíveis (fóssil e renovável).",
        "Em grupos, relacionar cada combustível ao recurso natural do qual ele é extraído.",
        "Discutir coletivamente quais impactos podem ocorrer no ambiente durante a extração e o uso.",
        "Construir um cartaz comparando combustíveis fósseis e renováveis.",
        "Registrar uma conclusão coletiva sobre consumo consciente de combustíveis."
      ]
    },
    {
      "theme": "O que os fósseis contam sobre a história da Terra?",
      "curriculumCode": "EF05C05",
      "description": "Reconhecimento da importância dos fósseis como registros que ajudam a compreender a história geológica do planeta Terra e a vida em tempos muito antigos.",
      "materials": ["Imagens ou réplicas de fósseis", "Massinha de modelar", "Conchas ou folhas para fazer moldes", "Gesso (opcional)", "Livros ou vídeos sobre fósseis"],
      "steps": [
        "Mostrar imagens de fósseis e perguntar o que os alunos imaginam que sejam.",
        "Explicar de forma simples como um fóssil se forma ao longo de muito tempo.",
        "Cada aluno pressiona uma concha ou folha na massinha para criar um molde, simulando um fóssil.",
        "Comparar os moldes com fósseis reais em imagens, identificando semelhanças.",
        "Discutir por que os fósseis ajudam cientistas a entender como era a Terra no passado.",
        "Registrar em desenho a diferença entre um fóssil e um ser vivo atual."
      ]
    },
    {
      "theme": "Por que as estrelas parecem ter brilhos diferentes?",
      "curriculumCode": "EF05C06",
      "description": "Exploração das possíveis relações entre a intensidade do brilho do Sol e de outras estrelas com a distância em que elas se encontram da Terra.",
      "materials": ["Duas ou três lanternas iguais", "Sala que possa ser escurecida", "Fita métrica", "Imagens do céu noturno com estrelas de brilhos diferentes"],
      "steps": [
        "Perguntar por que algumas estrelas parecem mais brilhantes que outras no céu.",
        "Escurecer a sala e posicionar lanternas iguais a diferentes distâncias de uma parede.",
        "Observar como o brilho projetado muda conforme a distância da lanterna aumenta.",
        "Relacionar a experiência com o fato de que estrelas mais distantes parecem menos brilhantes.",
        "Mostrar imagens do céu noturno e discutir que o Sol parece o mais brilhante por estar mais perto.",
        "Registrar a conclusão em um pequeno texto ou desenho."
      ]
    },
    {
      "theme": "Como a Terra sólida, os seres vivos e o ar se relacionam?",
      "curriculumCode": "EF05C07",
      "description": "Compreensão das interações existentes entre a geosfera, a biosfera e a atmosfera, reconhecendo que essas camadas da Terra funcionam de forma interligada.",
      "materials": ["Garrafa pet transparente cortada", "Terra", "Pequenas mudas ou sementes", "Água", "Filme plástico"],
      "steps": [
        "Apresentar os termos geosfera, biosfera e atmosfera com exemplos simples do cotidiano.",
        "Montar em grupos um mini terrário com terra, mudas e água dentro da garrafa pet.",
        "Fechar parcialmente o terrário com filme plástico e posicionar em local com luz.",
        "Observar ao longo dos dias como a terra, as plantas e o ar dentro do recipiente interagem.",
        "Relacionar as observações do terrário com as interações entre as camadas da Terra.",
        "Registrar em um esquema as trocas observadas entre solo, seres vivos e ar."
      ]
    },
    {
      "theme": "Por que ocorrem os eclipses?",
      "curriculumCode": "EF05C08",
      "description": "Relação entre os eclipses solar e lunar e os movimentos da Terra, da Lua e do Sol, entendendo como o alinhamento entre esses astros provoca o fenômeno.",
      "materials": ["Bola grande (representando o Sol)", "Bola média (representando a Terra)", "Bola pequena (representando a Lua)", "Lanterna", "Sala que possa ser escurecida"],
      "steps": [
        "Perguntar se os alunos já viram ou ouviram falar de um eclipse.",
        "Usar a lanterna como Sol e as bolas como Terra e Lua para montar o sistema no espaço da sala.",
        "Posicionar a Lua entre o Sol e a Terra e observar a sombra projetada, representando o eclipse solar.",
        "Posicionar a Terra entre o Sol e a Lua e observar a sombra sobre a Lua, representando o eclipse lunar.",
        "Explicar que os eclipses só ocorrem quando os três astros se alinham de forma específica.",
        "Registrar em desenho os dois tipos de eclipse observados na demonstração."
      ]
    },
    {
      "theme": "Por que um ano é diferente em cada planeta?",
      "curriculumCode": "EF05C09",
      "description": "Comparação do movimento de translação dos planetas do Sistema Solar, identificando como a duração de um ano varia entre os diferentes planetas.",
      "materials": ["Cartazes com dados simplificados do período de translação dos planetas", "Barbante ou giz para marcar círculos no chão", "Cronômetro ou contador"],
      "steps": [
        "Apresentar que translação é o movimento do planeta ao redor do Sol e que sua duração define um \"ano\".",
        "Mostrar um cartaz com a duração aproximada do ano em diferentes planetas.",
        "No pátio, marcar círculos de tamanhos diferentes representando as órbitas dos planetas.",
        "Alunos representando planetas percorrem seus círculos, dando mais ou menos voltas conforme a duração do ano do planeta.",
        "Comparar quantas voltas cada \"planeta\" deu no mesmo intervalo de tempo.",
        "Concluir coletivamente por que planetas mais distantes do Sol têm anos mais longos."
      ]
    },
    {
      "theme": "Como os órgãos internos trabalham juntos?",
      "curriculumCode": "EF05C10",
      "description": "Identificação dos principais órgãos internos do corpo humano, reconhecendo as relações entre eles no funcionamento dos sistemas biológicos.",
      "materials": ["Silhueta grande do corpo humano em papel kraft", "Recortes de órgãos em EVA ou papel (coração, pulmões, estômago, intestino, rins)", "Fita adesiva", "Livros ou imagens de apoio"],
      "steps": [
        "Desenhar ou usar uma silhueta grande do corpo humano no chão ou na parede.",
        "Distribuir os recortes de órgãos entre os grupos, que pesquisam brevemente sua função.",
        "Cada grupo cola seu órgão no local correto da silhueta, explicando sua função para a turma.",
        "Discutir coletivamente como alguns órgãos trabalham em conjunto (ex: pulmões e coração).",
        "Montar um mapa de setas ligando órgãos que se relacionam entre si.",
        "Registrar individualmente três órgãos internos e suas funções no caderno."
      ]
    },
    {
      "theme": "Como o sistema nervoso comanda o corpo?",
      "curriculumCode": "EF05C11",
      "description": "Investigação das funções do sistema nervoso, reconhecendo sua importância na coordenação das ações e respostas do organismo.",
      "materials": ["Imagens do sistema nervoso (cérebro, medula, nervos)", "Bolinha macia", "Cronômetro", "Venda para os olhos (opcional)"],
      "steps": [
        "Perguntar como o corpo sabe que deve tirar a mão de algo quente rapidamente.",
        "Apresentar imagens simples do sistema nervoso, explicando cérebro, medula e nervos.",
        "Fazer um jogo de reflexo: em duplas, um aluno solta a bolinha e o outro tenta pegá-la o mais rápido possível.",
        "Repetir o jogo cronometrando o tempo de reação de alguns alunos.",
        "Relacionar o jogo à forma como o sistema nervoso comanda os movimentos rápidos do corpo.",
        "Registrar em uma frase por que o sistema nervoso é importante para reagirmos ao ambiente."
      ]
    },
    {
      "theme": "O que muda no corpo durante a puberdade?",
      "curriculumCode": "EF05C12",
      "description": "Identificação, de forma científica e respeitosa, das transformações que ocorrem nos sistemas reprodutores feminino e masculino durante a puberdade, como parte do desenvolvimento natural do corpo humano.",
      "materials": ["Material didático apropriado para a faixa etária sobre desenvolvimento humano", "Esquemas simples do corpo humano (sem conteúdo explícito)", "Cartolina para registro de dúvidas anônimas (caixinha de perguntas)"],
      "steps": [
        "Combinar com a turma regras de respeito e escuta para tratar do tema com maturidade.",
        "Explicar, de forma científica, que a puberdade é uma fase natural de crescimento e mudanças no corpo.",
        "Apresentar, com linguagem adequada à idade, as principais transformações físicas que ocorrem nessa fase.",
        "Disponibilizar uma caixinha de perguntas anônimas para que os alunos escrevam dúvidas.",
        "Responder às dúvidas de forma acolhedora, reforçando que cada corpo se desenvolve em seu próprio tempo.",
        "Encerrar destacando a importância do autocuidado, da higiene e do respeito ao próprio corpo e ao dos colegas."
      ]
    },
    {
      "theme": "Como as ações humanas transformam o ambiente?",
      "curriculumCode": "EF05C13",
      "description": "Relação entre ações humanas e alterações ambientais, desenvolvendo a capacidade de argumentar e se posicionar sobre os impactos observados.",
      "materials": ["Notícias ou reportagens curtas sobre alterações ambientais", "Imagens de \"antes e depois\" de áreas impactadas", "Cartolina para registro dos argumentos"],
      "steps": [
        "Apresentar imagens de \"antes e depois\" de um mesmo local afetado por ação humana.",
        "Ler em grupos pequenas notícias sobre alterações ambientais causadas por atividades humanas.",
        "Cada grupo lista as causas e consequências identificadas na notícia lida.",
        "Organizar uma roda de conversa em que os grupos apresentam seus argumentos sobre o caso estudado.",
        "Registrar coletivamente um mural com exemplos de ações humanas e seus impactos.",
        "Concluir com os alunos se posicionando sobre o que poderia ser feito diferente em cada caso."
      ]
    },
    {
      "theme": "Como podemos cuidar do nosso entorno?",
      "curriculumCode": "EF05C14",
      "description": "Construção coletiva de propostas voltadas à conservação do entorno da escola ou da comunidade, de forma sustentável.",
      "materials": ["Mapa simples da escola ou do bairro", "Cartolina", "Canetinhas", "Materiais recicláveis para exemplos"],
      "steps": [
        "Fazer uma caminhada observacional pelo entorno da escola, identificando problemas ambientais.",
        "Registrar em grupo os problemas encontrados (lixo, falta de árvores, desperdício de água etc.).",
        "Cada grupo escolhe um problema e propõe uma ação viável para melhorá-lo.",
        "Desenhar o mapa do entorno destacando onde cada proposta poderia ser aplicada.",
        "Apresentar as propostas para a turma, reunindo-as em um plano de ação coletivo.",
        "Combinar uma pequena ação prática da turma para colocar parte do plano em prática."
      ]
    },
    {
      "theme": "Qual é o papel das vacinas na prevenção de doenças?",
      "curriculumCode": "EF05C15",
      "description": "Investigação sobre o papel das vacinas na prevenção e na erradicação de doenças, reconhecendo sua importância para a saúde individual e coletiva.",
      "materials": ["Modelo ou imagem de caderneta de vacinação", "Imagens ou dados sobre doenças reduzidas por vacinação (ex: poliomielite)", "Cartolina para linha do tempo"],
      "steps": [
        "Perguntar aos alunos se eles já tomaram vacinas e para que elas servem.",
        "Apresentar um modelo de caderneta de vacinação e explicar seu propósito.",
        "Mostrar dados simples sobre uma doença que foi bastante reduzida graças à vacinação.",
        "Em grupos, montar uma linha do tempo com marcos da vacinação contra essa doença.",
        "Discutir coletivamente por que é importante manter a vacinação em dia.",
        "Registrar uma conclusão sobre a importância das vacinas para a saúde de todos."
      ]
    },
    {
      "theme": "Como a tecnologia influencia o consumo de recursos naturais?",
      "curriculumCode": "EF05C16",
      "description": "Compreensão de como a tecnologia está relacionada à produção e ao consumo de recursos naturais, e de como esse processo pode afetar o meio ambiente.",
      "materials": ["Objetos tecnológicos do cotidiano (celular, garrafa pet, lâmpada)", "Imagens de fábricas e processos de produção", "Cartolina para o ciclo de vida do produto"],
      "steps": [
        "Escolher um objeto tecnológico comum e perguntar de onde vêm os materiais para fazê-lo.",
        "Apresentar imagens simples do processo de produção desse objeto, da matéria-prima ao produto final.",
        "Em grupos, montar um esquema do \"ciclo de vida\" do produto: extração, produção, uso e descarte.",
        "Discutir quais recursos naturais são consumidos em cada etapa do ciclo.",
        "Relacionar o descarte inadequado do produto a possíveis impactos ambientais.",
        "Concluir com sugestões de consumo mais consciente de produtos tecnológicos."
      ]
    }
  ],
  geografia: [
    {
      "theme": "Marcas culturais no meu bairro",
      "curriculumCode": "EF05G01",
      "description": "Identificação, nos lugares de vivência dos estudantes e no território brasileiro, de marcas de contribuição cultural e econômica deixadas por grupos de diferentes origens.",
      "materials": ["Fotos ou desenhos de comércios, festas e construções do bairro", "Cartolina e canetinhas", "Mapa simples do bairro ou da cidade"],
      "steps": [
        "Perguntar aos alunos que nomes de ruas, comidas, festas ou comércios do bairro eles conhecem que vieram de outros povos ou regiões.",
        "Apresentar exemplos de contribuições de diferentes grupos (imigrantes, povos indígenas, população afro-brasileira) presentes na cidade.",
        "Dividir a turma em grupos para pesquisar uma marca cultural ou econômica do próprio bairro (um restaurante, uma festa, um nome de rua).",
        "Cada grupo registra em cartolina de onde vem essa marca e o que ela representa hoje.",
        "Montar um painel coletivo reunindo todas as marcas encontradas pela turma.",
        "Roda de conversa final sobre como essas contribuições tornam o bairro mais diverso."
      ]
    },
    {
      "theme": "Quem somos: pesquisa sobre grupos sociais",
      "curriculumCode": "EF05G02",
      "description": "Pesquisa, no lugar de vivência e no território brasileiro, sobre interações e contribuições entre distintos grupos sociais, como povos indígenas, população afro-brasileira e pessoas com deficiência.",
      "materials": ["Roteiro de pesquisa impresso", "Acesso a livros, reportagens ou entrevistas com familiares", "Folhas para registro"],
      "steps": [
        "Explicar que a sociedade brasileira é formada por diferentes grupos que convivem e contribuem entre si.",
        "Organizar a turma em grupos, cada um responsável por pesquisar um grupo social diferente (indígenas, afro-brasileiros, pessoas com deficiência, entre outros).",
        "Orientar a pesquisa com perguntas guia: como esse grupo vive hoje, quais contribuições trouxe, que desafios enfrenta.",
        "Cada grupo organiza os achados em um cartaz simples com texto e desenhos.",
        "Realizar uma apresentação oral dos cartazes para a turma.",
        "Fechar com discussão coletiva sobre respeito e convivência entre grupos diferentes."
      ]
    },
    {
      "theme": "Como a cidade é governada",
      "curriculumCode": "EF05G03",
      "description": "Conhecimento dos canais que garantem a participação social na gestão do município, incluindo a Câmara de Vereadores e os Conselhos Municipais.",
      "materials": ["Imagens ou vídeo curto sobre a Câmara Municipal", "Cartazes com organograma simples da prefeitura", "Papel para simulação de votação"],
      "steps": [
        "Perguntar aos alunos se eles sabem quem decide as regras e obras da cidade onde moram.",
        "Explicar de forma simples o papel da Câmara de Vereadores e dos Conselhos Municipais na participação da população.",
        "Mostrar exemplos de como um cidadão pode participar (audiências públicas, conselhos, ouvidorias).",
        "Simular em sala uma pequena 'sessão' onde os alunos propõem e votam uma melhoria para a escola ou bairro.",
        "Registrar coletivamente as propostas mais votadas em um mural.",
        "Conversar sobre a importância de participar das decisões da cidade."
      ]
    },
    {
      "theme": "São Paulo cresceu: e agora?",
      "curriculumCode": "EF05G04",
      "description": "Identificação das formas e funções da Cidade de São Paulo e análise das mudanças sociais, econômicas e ambientais provocadas pelo seu crescimento.",
      "materials": ["Fotografias antigas e atuais de São Paulo", "Mapa da cidade", "Linha do tempo impressa ou desenhada na lousa"],
      "steps": [
        "Apresentar fotografias de São Paulo em diferentes épocas para os alunos observarem as mudanças.",
        "Explicar as principais funções da cidade (moradia, trabalho, comércio, serviços) e como elas mudaram com o crescimento.",
        "Construir coletivamente uma linha do tempo com marcos do crescimento da cidade.",
        "Em grupos, listar uma mudança positiva e uma mudança negativa trazida pelo crescimento urbano.",
        "Compartilhar as listas com a turma e discutir os pontos em comum.",
        "Registrar em um pequeno texto coletivo as conclusões sobre o crescimento da cidade."
      ]
    },
    {
      "theme": "O que faz São Paulo ser São Paulo",
      "curriculumCode": "EF05G05",
      "description": "Reconhecimento das características fundamentais e exclusivas da Cidade de São Paulo, que a diferenciam de outras cidades.",
      "materials": ["Imagens de pontos característicos da cidade (prédios, parques, transporte)", "Cartolina", "Revistas para recorte"],
      "steps": [
        "Perguntar aos alunos o que, na opinião deles, torna São Paulo diferente de outras cidades.",
        "Apresentar características marcantes da cidade: tamanho, diversidade cultural, arranha-céus, rede de transporte, entre outras.",
        "Organizar grupos para montar um cartaz 'Isso é São Paulo', com recortes e desenhos representando essas características.",
        "Cada grupo apresenta seu cartaz explicando as escolhas feitas.",
        "Montar um mural coletivo reunindo todos os cartazes.",
        "Fechar com uma roda de conversa sobre orgulho e pertencimento ao lugar onde se vive."
      ]
    },
    {
      "theme": "Ontem e hoje: paisagens paulistanas em fotos",
      "curriculumCode": "EF05G06",
      "description": "Comparação das transformações das paisagens na Cidade de São Paulo por meio de fotografias, fotografias aéreas, tabelas e gráficos de diferentes tempos.",
      "materials": ["Fotografias antigas e recentes do mesmo local da cidade", "Fotografias aéreas simples", "Folha dividida em 'antes' e 'depois'"],
      "steps": [
        "Mostrar pares de fotos do mesmo lugar da cidade em épocas diferentes.",
        "Pedir que os alunos observem e listem o que mudou e o que permaneceu na paisagem.",
        "Apresentar uma fotografia aérea simples e ajudar os alunos a identificar ruas, construções e áreas verdes.",
        "Em duplas, os alunos preenchem uma folha comparando 'antes' e 'depois' de uma paisagem escolhida.",
        "Socializar as comparações com a turma.",
        "Discutir coletivamente as causas das transformações observadas."
      ]
    },
    {
      "theme": "Vendo cidades do espaço",
      "curriculumCode": "EF05G07",
      "description": "Utilização de imagens de satélite para comparar a mancha urbana (área urbana) de algumas cidades do Estado de São Paulo.",
      "materials": ["Impressões de imagens de satélite de diferentes cidades paulistas", "Lupa (opcional)", "Folha de registro comparativo"],
      "steps": [
        "Explicar o que é uma imagem de satélite e como ela mostra a cidade vista de cima.",
        "Apresentar imagens de satélite de duas ou três cidades do Estado de São Paulo com tamanhos diferentes.",
        "Ajudar os alunos a identificar a mancha urbana (área ocupada por construções) em cada imagem.",
        "Em grupos, comparar o tamanho das manchas urbanas e levantar hipóteses sobre os motivos das diferenças.",
        "Registrar as comparações em uma tabela simples.",
        "Compartilhar as conclusões com a turma."
      ]
    },
    {
      "theme": "Minha legenda, meu mapa",
      "curriculumCode": "EF05G08",
      "description": "Elaboração de legenda para representar a Cidade de São Paulo e manchas urbanas em diferentes municípios.",
      "materials": ["Mapa ou imagem de satélite simplificada da cidade", "Papel, lápis de cor e canetinhas", "Régua"],
      "steps": [
        "Retomar o conceito de mancha urbana trabalhado anteriormente.",
        "Apresentar um mapa simples de São Paulo e de outros municípios do estado sem legenda.",
        "Explicar o que é uma legenda e como ela ajuda a entender um mapa.",
        "Pedir que os alunos criem símbolos e cores para representar área urbana, área verde e cursos d'água.",
        "Cada aluno ou dupla desenha seu próprio mapa com legenda a partir do modelo apresentado.",
        "Expor os mapas produzidos e comparar as diferentes legendas criadas pela turma."
      ]
    },
    {
      "theme": "Crescer bem: cidade e qualidade de vida",
      "curriculumCode": "EF05G09",
      "description": "Identificação e análise das características e mudanças sociais, econômicas, ambientais e culturais provocadas pelo crescimento das cidades em relação à qualidade de vida de todas as pessoas.",
      "materials": ["Imagens contrastando áreas com boa e má infraestrutura urbana", "Cartolina", "Post-its"],
      "steps": [
        "Apresentar imagens de diferentes regiões da cidade, algumas com boa infraestrutura e outras com carências.",
        "Discutir com a turma o que é 'qualidade de vida' em uma cidade (moradia, saneamento, lazer, transporte).",
        "Em grupos, listar em post-its o que o crescimento da cidade trouxe de bom e de ruim para a qualidade de vida das pessoas.",
        "Organizar os post-its em um cartaz dividido em 'ganhos' e 'desafios'.",
        "Apresentar o cartaz para a turma.",
        "Fechar com uma reflexão sobre por que a qualidade de vida não é igual para todos na cidade."
      ]
    },
    {
      "theme": "Quem cuida da nossa qualidade de vida",
      "curriculumCode": "EF05G10",
      "description": "Identificação de órgãos do poder público e canais de participação social responsáveis por buscar soluções para a melhoria da qualidade de vida, em áreas como meio ambiente, mobilidade e moradia, e discussão de propostas de órgãos de proteção ambiental.",
      "materials": ["Cartazes ou impressos com nomes e funções de órgãos públicos", "Papel para produção de cartas", "Canetinhas"],
      "steps": [
        "Levantar com a turma problemas de qualidade de vida observados no bairro (lixo, buracos, falta de área verde).",
        "Apresentar órgãos públicos e canais de participação responsáveis por cada tipo de problema (limpeza urbana, mobilidade, meio ambiente).",
        "Associar, em grupos, cada problema levantado ao órgão ou canal que poderia resolvê-lo.",
        "Cada grupo escreve uma carta ou bilhete simples relatando um problema e sugerindo uma solução.",
        "Ler as cartas em voz alta para a turma.",
        "Conversar sobre a importância de cobrar e participar das decisões públicas."
      ]
    },
    {
      "theme": "Água limpa, água poluída",
      "curriculumCode": "EF05G11",
      "description": "Reconhecimento e comparação de atributos da qualidade ambiental e de formas de poluição dos cursos de água e dos oceanos, como esgotos, efluentes industriais e lixões.",
      "materials": ["Imagens de rios e mares limpos e poluídos", "Garrafas com água limpa e água suja (simulação)", "Folha de registro"],
      "steps": [
        "Mostrar imagens comparando um curso de água limpo e outro poluído.",
        "Explicar as principais causas de poluição da água: esgoto sem tratamento, lixo, resíduos industriais.",
        "Realizar uma demonstração simples com duas garrafas de água (uma limpa, outra com 'sujeira' simulada) para discutir os efeitos da poluição.",
        "Em duplas, os alunos listam consequências da poluição da água para as pessoas e para os animais.",
        "Compartilhar as listas com a turma.",
        "Propor coletivamente atitudes simples para reduzir a poluição da água no dia a dia."
      ]
    },
    {
      "theme": "Trabalho de ontem e de hoje",
      "curriculumCode": "EF05G12",
      "description": "Reconhecimento das mudanças nos tipos de trabalho e no desenvolvimento tecnológico na agropecuária, na indústria, no comércio e nos serviços prestados na Cidade e no Estado de São Paulo.",
      "materials": ["Imagens de trabalhos antigos e atuais (agricultura, indústria, comércio)", "Cartolina dividida em colunas", "Revistas para recorte"],
      "steps": [
        "Perguntar aos alunos que tipos de trabalho eles conhecem na cidade e se sabem como eram feitos há mais tempo.",
        "Apresentar pares de imagens mostrando um mesmo tipo de trabalho antes e depois da tecnologia (plantio manual x máquinas, loja x compra on-line).",
        "Em grupos, os alunos classificam exemplos de trabalho em agropecuária, indústria, comércio ou serviços.",
        "Cada grupo monta um cartaz comparando 'antes' e 'depois' de um tipo de trabalho escolhido.",
        "Apresentar os cartazes para a turma.",
        "Discutir coletivamente como a tecnologia mudou a forma de trabalhar."
      ]
    },
    {
      "theme": "Como nos movemos e nos comunicamos",
      "curriculumCode": "EF05G13",
      "description": "Identificação e comparação das transformações dos meios de transporte e comunicação na Cidade de São Paulo ao longo do tempo.",
      "materials": ["Imagens de meios de transporte e comunicação antigos e atuais", "Linha do tempo em papel pardo", "Canetinhas"],
      "steps": [
        "Perguntar aos alunos como as pessoas se deslocavam e se comunicavam na cidade antigamente.",
        "Apresentar imagens de bondes, carroças, telefones fixos e cartas ao lado de metrô, ônibus, celulares e internet.",
        "Construir coletivamente uma linha do tempo com os meios de transporte e comunicação ao longo da história da cidade.",
        "Em duplas, os alunos escolhem um meio de transporte e um de comunicação e desenham como eram e como são hoje.",
        "Compartilhar os desenhos com a turma.",
        "Conversar sobre como essas mudanças afetaram a vida das pessoas na cidade."
      ]
    },
    {
      "theme": "De onde vem a energia que usamos",
      "curriculumCode": "EF05G14",
      "description": "Conhecimento sobre a principal fonte de energia utilizada na produção industrial e no cotidiano da população paulistana.",
      "materials": ["Imagens de usinas hidrelétricas e de aparelhos elétricos do cotidiano", "Cartaz com o trajeto da energia elétrica", "Folha de registro"],
      "steps": [
        "Perguntar aos alunos de onde eles acham que vem a energia elétrica usada em casa e na escola.",
        "Apresentar de forma simples a energia hidrelétrica como principal fonte usada na indústria e no cotidiano da população.",
        "Mostrar um esquema simples do caminho da energia: da usina até a tomada de casa.",
        "Em grupos, os alunos listam aparelhos que usam energia elétrica na escola e em casa.",
        "Discutir formas de economizar energia no dia a dia.",
        "Registrar coletivamente um combinado de economia de energia para a sala de aula."
      ]
    },
    {
      "theme": "Apresentando nossas descobertas",
      "curriculumCode": "EF05G15",
      "description": "Utilização de diferentes formas de expressão para a comunicação compartilhada dos estudos realizados, como expressão corporal, oral e outras linguagens.",
      "materials": ["Cartazes e materiais produzidos ao longo do bimestre", "Espaço livre para apresentações", "Câmera ou celular para registro (opcional)"],
      "steps": [
        "Retomar com a turma os temas de Geografia estudados no período (cidade, trabalho, transporte, meio ambiente, entre outros).",
        "Organizar grupos para escolher um tema estudado e planejar uma forma de apresentá-lo além da fala simples (teatro, jogral, gestos, cartazes falados).",
        "Dar um tempo para os grupos ensaiarem sua apresentação.",
        "Realizar uma mostra em sala onde cada grupo compartilha o que aprendeu usando a linguagem escolhida.",
        "Registrar as apresentações com fotos ou vídeo, se possível.",
        "Fechar com uma roda de conversa avaliando o que foi mais interessante aprender no período."
      ]
    }
  ],
  historia: [
    {
      "theme": "Como vivemos em São Paulo hoje",
      "curriculumCode": "EF05H01",
      "description": "Identificação e análise do modo de vida urbano na Cidade de São Paulo no século XXI, observando rotinas, espaços e serviços da metrópole atual.",
      "materials": ["Fotos recentes de diferentes bairros de São Paulo", "Mapa simples da cidade", "Folha de registro com perguntas norteadoras"],
      "steps": [
        "Perguntar aos alunos como é um dia comum de vida na cidade: onde estudam, como se locomovem, o que fazem no tempo livre.",
        "Exibir fotos de diferentes bairros de São Paulo (centro, periferia, zona sul, zona leste) e comparar paisagens.",
        "Listar coletivamente elementos do modo de vida urbano atual: transporte, moradia, trabalho, lazer, tecnologia.",
        "Dividir a turma em grupos, cada um registrando um aspecto do modo de vida urbano observado nas imagens.",
        "Montar um painel coletivo com as descobertas de cada grupo.",
        "Encerrar com uma roda de conversa sobre o que é viver em uma cidade grande como São Paulo hoje."
      ]
    },
    {
      "theme": "São Paulo ontem e hoje",
      "curriculumCode": "EF05H02",
      "description": "Comparação dos modos de vida na Cidade de São Paulo em diferentes épocas, confrontando realidades e avaliando as transformações urbanas ao longo do tempo.",
      "materials": ["Fotografias antigas e atuais de um mesmo local de São Paulo", "Linha do tempo impressa", "Lápis de cor"],
      "steps": [
        "Apresentar pares de fotografias do mesmo lugar de São Paulo em épocas diferentes (ex.: Vale do Anhangabaú, Avenida Paulista).",
        "Pedir que os alunos apontem o que mudou e o que permaneceu em cada par de imagens.",
        "Organizar uma linha do tempo simples com marcos das transformações observadas.",
        "Discutir em grupo por que a cidade mudou (crescimento populacional, novas construções, novos meios de transporte).",
        "Registrar em uma tabela comparativa 'antes' e 'agora' os principais achados.",
        "Compartilhar as tabelas com a turma e comentar as diferenças encontradas por cada grupo."
      ]
    },
    {
      "theme": "Fontes que contam a história da cidade",
      "curriculumCode": "EF05H03",
      "description": "Compreensão de aspectos e significados da vida urbana a partir da história de São Paulo, com análise de diferentes fontes documentais, como textos, plantas, mapas e memórias.",
      "materials": ["Cópias de mapas antigos de São Paulo", "Trechos curtos de relatos ou memórias sobre a cidade", "Planta simplificada de um bairro"],
      "steps": [
        "Explicar o que são fontes históricas e mostrar exemplos: mapas, plantas, fotografias, relatos escritos.",
        "Distribuir diferentes fontes (um mapa antigo, um trecho de memória, uma planta) para grupos distintos.",
        "Cada grupo observa sua fonte e anota que informações sobre a vida urbana ela revela.",
        "Promover uma roda de apresentação em que cada grupo conta o que descobriu com sua fonte.",
        "Discutir coletivamente como diferentes fontes ajudam a entender a cidade de formas complementares.",
        "Registrar em um cartaz coletivo uma síntese do que cada tipo de fonte ensinou sobre São Paulo."
      ]
    },
    {
      "theme": "Cidades que já foram capital do Brasil",
      "curriculumCode": "EF05H04",
      "description": "Localização das cidades que já foram capitais do Brasil, identificando bens culturais do patrimônio histórico material e imaterial relacionados a elas.",
      "materials": ["Mapa do Brasil", "Imagens de monumentos e bens culturais de Salvador, Rio de Janeiro e Brasília", "Fichas de identificação"],
      "steps": [
        "Apresentar no mapa do Brasil as três cidades que já foram capital: Salvador, Rio de Janeiro e Brasília.",
        "Explicar brevemente em que período cada uma foi capital do país.",
        "Mostrar imagens de bens culturais (prédios históricos, praças, festas, saberes) ligados a cada cidade.",
        "Separar os alunos em trios, cada um pesquisando/preenchendo uma ficha sobre uma das capitais.",
        "Socializar as fichas, destacando o patrimônio material (construções) e imaterial (tradições, festas) de cada cidade.",
        "Fixar as fichas no mapa da sala, ao lado da cidade correspondente."
      ]
    },
    {
      "theme": "Uma capital do Brasil e São Paulo",
      "curriculumCode": "EF05H05",
      "description": "Conhecimento da história de uma cidade que foi capital do Brasil, comparando-a com a história da Cidade de São Paulo.",
      "materials": ["Texto informativo curto sobre uma capital histórica (ex.: Salvador)", "Imagens da cidade escolhida", "Quadro comparativo impresso"],
      "steps": [
        "Escolher uma cidade que já foi capital do Brasil para estudo aprofundado (ex.: Salvador).",
        "Ler um texto curto sobre a fundação e a história dessa cidade.",
        "Levantar com a turma o que já sabem sobre a história de São Paulo.",
        "Preencher um quadro comparativo com semelhanças e diferenças entre a cidade estudada e São Paulo.",
        "Discutir em grupo por que cada cidade se tornou importante em seu momento histórico.",
        "Registrar uma conclusão coletiva sobre o que aprenderam com a comparação."
      ]
    },
    {
      "theme": "Uma cidade da América Latina",
      "curriculumCode": "EF05H06",
      "description": "Identificação e localização de cidades importantes da América Latina, com estudo da história de uma delas comparando-a com a história da Cidade de São Paulo.",
      "materials": ["Mapa da América Latina", "Imagens e informações sobre a Cidade do México ou Cuzco", "Ficha de comparação"],
      "steps": [
        "Localizar no mapa da América Latina algumas cidades importantes, incluindo a escolhida para estudo (Cidade do México ou Cuzco).",
        "Apresentar imagens e curiosidades históricas dessa cidade aos alunos.",
        "Conversar sobre os povos que originaram essa cidade (por exemplo, astecas ou incas).",
        "Comparar em ficha simples aspectos da cidade latino-americana com aspectos de São Paulo.",
        "Discutir em roda o que há de semelhante entre cidades de países diferentes da América Latina.",
        "Produzir um pequeno texto coletivo resumindo a comparação feita."
      ]
    },
    {
      "theme": "Uma cidade da África",
      "curriculumCode": "EF05H07",
      "description": "Conhecimento de uma cidade importante do continente africano e de sua história, comparando-a com a história da Cidade de São Paulo.",
      "materials": ["Mapa da África", "Imagens e texto sobre Timbuktu (Tombuctu)", "Ficha de comparação"],
      "steps": [
        "Localizar o continente africano e a cidade de Timbuktu no mapa-múndi.",
        "Apresentar imagens e um breve relato sobre a importância histórica dessa cidade (comércio, saber, manuscritos antigos).",
        "Discutir com a turma estereótipos comuns sobre a África e desconstruir ideias equivocadas.",
        "Comparar em ficha aspectos da cidade africana estudada com aspectos de São Paulo.",
        "Compartilhar as comparações em roda de conversa.",
        "Registrar em cartaz coletivo uma curiosidade aprendida sobre a cidade africana estudada."
      ]
    },
    {
      "theme": "O que as cidades têm em comum",
      "curriculumCode": "EF05H08",
      "description": "Reflexão sobre algumas características da vida urbana a partir das histórias das diferentes cidades estudadas ao longo do ano.",
      "materials": ["Registros e fichas produzidos nas aulas anteriores sobre as cidades estudadas", "Cartolina", "Canetinhas"],
      "steps": [
        "Retomar coletivamente as cidades já estudadas: São Paulo, uma capital brasileira, uma cidade latino-americana e uma cidade africana.",
        "Organizar os alunos em grupos, cada um revisando os registros de uma das cidades.",
        "Pedir que cada grupo liste três características de vida urbana encontradas na cidade estudada.",
        "Reunir as listas em uma cartolina única, agrupando características semelhantes entre as cidades.",
        "Conduzir uma discussão sobre o que é comum a toda vida urbana e o que é específico de cada lugar.",
        "Concluir com um registro individual sobre o que os alunos entendem por 'vida urbana'."
      ]
    },
    {
      "theme": "Povos indígenas do Xingu",
      "curriculumCode": "EF05H09",
      "description": "Localização e conhecimento da história dos povos indígenas do Parque do Xingu e de outras localidades do Brasil.",
      "materials": ["Mapa do Brasil com destaque para o Parque Indígena do Xingu", "Vídeo curto ou imagens sobre povos do Xingu", "Folha de registro"],
      "steps": [
        "Localizar no mapa do Brasil a região do Parque Indígena do Xingu.",
        "Apresentar um vídeo curto ou conjunto de imagens sobre os povos que vivem nessa região.",
        "Explicar que existem vários povos indígenas diferentes no Xingu, cada um com língua e costumes próprios.",
        "Conversar sobre outras localidades indígenas conhecidas pelos alunos, se houver.",
        "Registrar em folha o nome de ao menos dois povos do Xingu e uma característica de cada um.",
        "Compartilhar os registros com a turma em roda de conversa."
      ]
    },
    {
      "theme": "Modo de vida no Xingu",
      "curriculumCode": "EF05H10",
      "description": "Conhecimento e reflexão sobre o modo de vida de alguns povos indígenas que habitam o Parque Nacional do Xingu.",
      "materials": ["Imagens de aldeias, alimentação e rituais de povos do Xingu", "Texto informativo adaptado para o 5º ano", "Folha de anotações"],
      "steps": [
        "Apresentar imagens do cotidiano de povos indígenas do Xingu: moradia, alimentação, festas e trabalho.",
        "Ler um texto curto e adaptado sobre o modo de vida desses povos.",
        "Discutir em grupo como a relação com a natureza aparece no modo de vida observado.",
        "Pedir que os alunos anotem três aspectos do modo de vida que consideraram interessantes.",
        "Promover uma roda de conversa para compartilhar as anotações e tirar dúvidas.",
        "Reforçar a importância do respeito à cultura e aos saberes desses povos."
      ]
    },
    {
      "theme": "Vida urbana e vida indígena: semelhanças e diferenças",
      "curriculumCode": "EF05H11",
      "description": "Identificação de semelhanças e diferenças entre os modos de vida urbanos e os modos de vida de povos indígenas do Xingu ou de um quilombo estudado.",
      "materials": ["Registros das aulas anteriores sobre vida urbana e sobre o Xingu/quilombo", "Quadro de duas colunas impresso", "Lápis"],
      "steps": [
        "Retomar o que a turma já registrou sobre a vida urbana em São Paulo e sobre o modo de vida no Xingu ou em um quilombo.",
        "Organizar um quadro de duas colunas: 'vida urbana' e 'vida no Xingu/quilombo'.",
        "Em duplas, os alunos preenchem o quadro com pelo menos três itens em cada coluna (moradia, alimentação, lazer, trabalho).",
        "Socializar os quadros preenchidos e discutir coletivamente os pontos em comum encontrados.",
        "Conversar sobre por que existem essas diferenças (histórico, território, relação com a natureza).",
        "Fechar com um registro individual sobre uma semelhança e uma diferença que mais chamaram atenção."
      ]
    },
    {
      "theme": "Respeitando diferentes modos de vida",
      "curriculumCode": "EF05H12",
      "description": "Valorização e respeito aos diferentes modos de vida, reconhecendo suas diferenças em relação às culturas, aos povos e às épocas estudadas.",
      "materials": ["Cartazes ou registros de todas as cidades e povos estudados no bimestre", "Papel para produção de cartazes", "Canetinhas"],
      "steps": [
        "Retomar rapidamente todos os modos de vida estudados: São Paulo, outras cidades e povos indígenas/quilombolas.",
        "Conversar sobre atitudes de respeito e de desrespeito que às vezes aparecem quando falamos do 'diferente'.",
        "Dividir a turma em grupos para criar frases ou desenhos que expressem respeito à diversidade de modos de vida.",
        "Expor os cartazes produzidos em mural da sala ou da escola.",
        "Promover uma roda final de compromissos coletivos sobre respeito à diversidade.",
        "Registrar individualmente uma frase sobre a importância de respeitar diferentes culturas."
      ]
    },
    {
      "theme": "São Paulo acessível",
      "curriculumCode": "EF05H13",
      "description": "Compreensão de como a Cidade de São Paulo se organizou ao longo do tempo em relação à questão da acessibilidade, como calçadas, ônibus e Libras.",
      "materials": ["Fotos de calçadas, ônibus e sinalizações acessíveis em São Paulo", "Vídeo curto sobre acessibilidade na cidade", "Folha de registro"],
      "steps": [
        "Perguntar aos alunos o que entendem por 'acessibilidade' e dar exemplos do cotidiano.",
        "Mostrar fotos de recursos de acessibilidade na cidade: rampas, piso tátil, ônibus adaptados, intérpretes de Libras.",
        "Assistir a um vídeo curto que mostre como esses recursos ajudam pessoas com deficiência a circular pela cidade.",
        "Conversar sobre como era a cidade antes de existirem esses recursos e o que ainda precisa melhorar.",
        "Em grupos, os alunos listam um espaço da escola ou do bairro que poderia ser mais acessível.",
        "Compartilhar as sugestões em roda de conversa."
      ]
    },
    {
      "theme": "Identidades plurais na cidade",
      "curriculumCode": "EF05H14",
      "description": "Reconhecimento da existência de identidades plurais e de diferentes grupos e culturas presentes na cidade.",
      "materials": ["Imagens de diferentes grupos culturais presentes em São Paulo (comunidades migrantes, povos originários, afrodescendentes)", "Folha de registro"],
      "steps": [
        "Apresentar imagens de diferentes grupos culturais e comunidades que vivem em São Paulo hoje.",
        "Conversar sobre a origem de algumas dessas comunidades (migração interna, imigração, povos originários).",
        "Perguntar aos alunos sobre suas próprias origens familiares e culturais, se sentirem-se à vontade para compartilhar.",
        "Registrar em folha um grupo cultural estudado e uma característica marcante dele.",
        "Montar um mural coletivo com os registros, valorizando a pluralidade encontrada na turma e na cidade.",
        "Encerrar com uma reflexão sobre como a diversidade enriquece a cidade."
      ]
    },
    {
      "theme": "O cotidiano muda com o tempo",
      "curriculumCode": "EF05H15",
      "description": "Compreensão do cotidiano como revelador de contextos de mudanças históricas, observando como pequenas rotinas se transformam ao longo do tempo.",
      "materials": ["Relatos de familiares mais velhos sobre seu cotidiano na infância", "Folha de entrevista simples", "Lápis"],
      "steps": [
        "Propor que os alunos entrevistem em casa um familiar mais velho sobre como era seu dia a dia quando criança.",
        "Elaborar coletivamente um roteiro simples de perguntas (brincadeiras, escola, transporte, comunicação).",
        "Na aula seguinte, os alunos compartilham trechos das entrevistas realizadas.",
        "Comparar coletivamente o cotidiano relatado com o cotidiano atual dos alunos.",
        "Discutir o que mudou e por que essas mudanças aconteceram (tecnologia, urbanização, costumes).",
        "Registrar uma conclusão sobre como o cotidiano ajuda a entender mudanças históricas."
      ]
    },
    {
      "theme": "Objetos e imagens contam histórias",
      "curriculumCode": "EF05H16",
      "description": "Reconhecimento de que textos, imagens, objetos e outras produções humanas estabelecem relações com seus autores, locais de produção e tempo histórico.",
      "materials": ["Objetos antigos trazidos de casa ou imagens de objetos históricos", "Folha de análise de objeto", "Lápis"],
      "steps": [
        "Pedir com antecedência que os alunos tragam um objeto antigo de casa (ou usar imagens de objetos históricos).",
        "Explicar que todo objeto, texto ou imagem foi criado por alguém, em um lugar e época específicos.",
        "Em duplas, os alunos analisam um objeto e tentam responder: quem fez, quando e onde foi usado.",
        "Compartilhar as análises com a turma, destacando pistas que ajudaram a chegar às respostas.",
        "Discutir coletivamente por que é importante considerar autor, local e época ao estudar uma fonte.",
        "Registrar a conclusão da turma sobre como objetos ajudam a contar histórias."
      ]
    },
    {
      "theme": "Cada um vê a história de um jeito",
      "curriculumCode": "EF05H17",
      "description": "Reconhecimento e respeito de que diferentes sujeitos possuem percepções diferenciadas da realidade, estando inseridos no mesmo tempo e espaço ou em tempos e espaços diferentes.",
      "materials": ["Uma imagem ou situação ambígua para observação coletiva", "Folha de registro", "Lápis"],
      "steps": [
        "Mostrar à turma uma imagem que pode ser interpretada de mais de uma forma e pedir que descrevam o que veem.",
        "Perceber coletivamente que diferentes alunos descreveram a mesma imagem de formas diferentes.",
        "Relacionar essa experiência com o estudo da história: pessoas de épocas e lugares diferentes também veem os fatos de formas diferentes.",
        "Apresentar um exemplo simples de dois relatos diferentes sobre um mesmo acontecimento histórico estudado no ano.",
        "Discutir em grupo por que é importante ouvir e respeitar diferentes pontos de vista.",
        "Registrar individualmente uma situação em que perceberam pontos de vista diferentes sobre o mesmo fato."
      ]
    }
  ]
};
