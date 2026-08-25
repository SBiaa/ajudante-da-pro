// Banco de temas do 2º ano — rede ESTADUAL (Currículo Paulista, SEDUC-SP/EFAPE), no mesmo formato
// de src/data/themeBank.ts (que cobre a rede municipal). Códigos de habilidade (curriculumCode)
// pesquisados diretamente nos documentos oficiais do Currículo Paulista para Anos Iniciais
// (efape.educacao.sp.gov.br/curriculopaulista, "Habilidades Essenciais — Anos Iniciais") — não
// são estimados nem convertidos de outro currículo. Alguns códigos aparecem combinados
// (ex.: "EF02LP01A/EF02LP01B") quando o documento oficial os apresenta como uma habilidade
// essencial única desdobrada em duas partes.

import { BankEntry, OwnSubject } from "@/types/plano";

export const ESTADO_2_ANO_THEME_BANK: Record<OwnSubject, BankEntry[]> = {
  "lingua-portuguesa": [
    {
      "theme": "Escrita de palavras conhecidas com letra maiúscula correta",
      "curriculumCode": "EF02LP01A/EF02LP01B",
      "description": "Grafia correta de palavras conhecidas ou familiares, com uso de letra maiúscula no início de frases e em substantivos próprios.",
      "materials": ["Lousa ou cartaz", "Lista de palavras conhecidas da turma (nomes, lugares)", "Cadernos"],
      "steps": [
        "Escrever na lousa uma lista de palavras conhecidas dos alunos, incluindo nomes próprios sem letra maiúscula.",
        "Perguntar à turma o que percebem de diferente ou errado nessas palavras.",
        "Explicar quando usar letra maiúscula: início de frase e nomes próprios.",
        "Pedir que os alunos reescrevam a lista corrigindo as letras maiúsculas no caderno.",
        "Corrigir coletivamente, destacando os acertos.",
        "Fechar com uma frase ditada pelo professor para os alunos escreverem sozinhos."
      ]
    },
    {
      "theme": "Descobrindo a grafia de palavras novas pelo som",
      "curriculumCode": "EF02LP02",
      "description": "Grafar palavras desconhecidas apoiando-se no som e na grafia de palavras familiares ou já estáveis para o aluno.",
      "materials": ["Cartões com palavras conhecidas", "Lousa"],
      "steps": [
        "Apresentar uma palavra nova e desconhecida para a turma (ex.: 'girassol').",
        "Perguntar se alguém conhece uma palavra parecida no som (ex.: 'gira', 'sol').",
        "Construir coletivamente a grafia da palavra nova comparando com as palavras conhecidas.",
        "Propor mais 2 ou 3 palavras novas para os alunos tentarem escrever sozinhos, usando o mesmo raciocínio.",
        "Corrigir em conjunto, comentando as estratégias usadas por diferentes alunos."
      ]
    },
    {
      "theme": "Sons parecidos, letras diferentes: f/v, t/d, p/b, c/qu",
      "curriculumCode": "EF02LP03",
      "description": "Grafia correta de palavras com correspondências regulares diretas (f/v, t/d, p/b) e contextuais (c/qu, g/gu, r/rr, s/z inicial).",
      "materials": ["Cartaz com pares de palavras (ex.: faca/vaca, tato/dado)", "Lousa"],
      "steps": [
        "Apresentar pares de palavras que variam por uma letra (faca/vaca, telha/delha).",
        "Ler os pares em voz alta, destacando a diferença de som.",
        "Explicar a regra de cada correspondência (f/v, t/d, p/b) com exemplos no quadro.",
        "Distribuir uma lista de palavras com lacunas para os alunos completarem com a letra correta.",
        "Corrigir coletivamente e discutir os erros mais comuns."
      ]
    },
    {
      "theme": "Ditongos, dígrafos e encontros consonantais no dia a dia",
      "curriculumCode": "EF02LP04",
      "description": "Grafia correta de palavras com ditongos (vassoura, tesoura), dígrafos (repolho, queijo, passeio) e encontros consonantais (graveto, bloco).",
      "materials": ["Lista de palavras com ditongos/dígrafos/encontros consonantais", "Cadernos"],
      "steps": [
        "Ler em voz alta palavras com ditongos, dígrafos e encontros consonantais, destacando o som.",
        "Separar as palavras em três grupos na lousa conforme o tipo de dificuldade ortográfica.",
        "Pedir que os alunos identifiquem outras palavras do dia a dia que se encaixem em cada grupo.",
        "Propor um ditado curto com palavras dos três grupos.",
        "Corrigir coletivamente, revisando as palavras com mais erros."
      ]
    },
    {
      "theme": "Palavras com til, m e n no final da sílaba",
      "curriculumCode": "EF02LP05",
      "description": "Grafia correta de palavras com marcas de nasalidade, usando as letras m, n e o sinal gráfico til.",
      "materials": ["Cartaz com palavras nasais (mão, pão, cantam, sim)", "Lousa"],
      "steps": [
        "Ler em voz alta um pequeno grupo de palavras nasalizadas, perguntando o que soa parecido.",
        "Mostrar as três formas de marcar a nasalidade: til, m e n.",
        "Organizar as palavras em três colunas na lousa conforme a marca usada.",
        "Propor um jogo de completar palavras com a marca de nasalidade correta.",
        "Fechar com um ditado de frases simples contendo essas palavras."
      ]
    },
    {
      "theme": "Acentuando palavras do nosso dia a dia",
      "curriculumCode": "EF02LP06",
      "description": "Acentuação correta de palavras de uso frequente.",
      "materials": ["Lista de palavras comuns acentuadas (café, você, é, está)", "Cartolina"],
      "steps": [
        "Apresentar palavras de uso frequente sem acento e perguntar se está faltando algo.",
        "Mostrar a mesma palavra acentuada corretamente e comparar a pronúncia.",
        "Construir com a turma um cartaz de 'palavras acentuadas do nosso dia a dia'.",
        "Propor exercício de completar frases escolhendo a palavra acentuada corretamente.",
        "Revisar coletivamente os erros mais frequentes."
      ]
    },
    {
      "theme": "Produzindo e revisando textos em letra cursiva",
      "curriculumCode": "EF02LP07A/EF02LP07B",
      "description": "Planejamento e produção de textos de diferentes gêneros considerando situação comunicativa, tema, estrutura e estilo, com revisão e edição final utilizando letra cursiva.",
      "materials": ["Caderno de caligrafia ou pauta", "Modelo de texto curto"],
      "steps": [
        "Escolher com a turma um gênero curto e conhecido para produzir (bilhete, lista, convite).",
        "Planejar coletivamente o que será escrito: para quem, por quê, o que não pode faltar.",
        "Cada aluno produz seu texto em letra cursiva no caderno.",
        "Em duplas, os alunos trocam os textos e apontam o que pode ser melhorado.",
        "Cada aluno revisa e reescreve a versão final, cuidando da apresentação."
      ]
    },
    {
      "theme": "Separando palavras e fechando frases com ponto e maiúscula",
      "curriculumCode": "EF02LP08A/EF02LP08B",
      "description": "Segmentação correta das palavras em um texto e segmentação correta das frases, usando ponto final e letra maiúscula no início de cada frase.",
      "materials": ["Texto curto escrito sem espaços entre palavras", "Lousa"],
      "steps": [
        "Mostrar um texto escrito propositalmente sem espaços entre as palavras.",
        "Pedir que os alunos, em duplas, tentem separar as palavras corretamente.",
        "Corrigir coletivamente, discutindo onde separar cada palavra.",
        "Repetir o exercício com um texto sem pontuação nem maiúsculas, pedindo que marquem onde começam e terminam as frases.",
        "Reescrever o texto corrigido todos juntos na lousa."
      ]
    },
    {
      "theme": "Usando ponto, vírgula, interrogação e exclamação",
      "curriculumCode": "EF02LP09",
      "description": "Pontuação dos textos produzidos usando diferentes sinais (ponto final, ponto de exclamação, ponto de interrogação, vírgula e reticências) conforme as características do gênero.",
      "materials": ["Cartaz com os sinais de pontuação", "Textos curtos sem pontuação"],
      "steps": [
        "Apresentar cada sinal de pontuação e seu uso com exemplos orais (pergunta, exclamação, pausa).",
        "Ler um texto curto sem pontuação e pedir que a turma sugira onde colocar os sinais.",
        "Reescrever o texto com a pontuação decidida coletivamente.",
        "Propor que cada aluno escreva 3 frases próprias usando pelo menos 2 sinais diferentes.",
        "Compartilhar algumas frases em voz alta, respeitando a entonação da pontuação."
      ]
    },
    {
      "theme": "Palavras parecidas e palavras opostas",
      "curriculumCode": "EF02LP10",
      "description": "Compreensão dos efeitos de sentido de palavras ou expressões pela aproximação (sinonímia) ou oposição (antonímia) de significados.",
      "materials": ["Cartões com pares de palavras sinônimas e antônimas", "Lousa"],
      "steps": [
        "Apresentar um par de palavras sinônimas (feliz/contente) e perguntar o que têm em comum.",
        "Apresentar um par de palavras antônimas (grande/pequeno) e perguntar a diferença.",
        "Dividir a turma em duplas para formar novos pares com cartões embaralhados.",
        "Cada dupla apresenta um par formado, explicando se é sinônimo ou antônimo.",
        "Fechar com uma frase para os alunos substituírem uma palavra por seu sinônimo ou antônimo."
      ]
    },
    {
      "theme": "Aumentando e diminuindo palavras com sufixos",
      "curriculumCode": "EF02LP11",
      "description": "Compreensão dos efeitos de sentido produzidos pelo uso de aumentativo e diminutivo, como os sufixos -ão, -inho e -zinho.",
      "materials": ["Imagens de objetos em tamanhos diferentes", "Lousa"],
      "steps": [
        "Mostrar a imagem de um objeto pequeno e outro grande do mesmo tipo (casa/casinha/casarão).",
        "Escrever as três palavras na lousa e destacar os sufixos.",
        "Pedir que os alunos criem o aumentativo e o diminutivo de outras palavras sugeridas.",
        "Discutir coletivamente que sentido cada sufixo transmite (carinho, tamanho, exagero).",
        "Fechar com um desenho: cada aluno desenha e escreve o nome de um objeto em versão aumentativa ou diminutiva."
      ]
    },
    {
      "theme": "Lendo cantigas e quadrinhas da tradição oral",
      "curriculumCode": "EF02LP12",
      "description": "Leitura e compreensão de cantigas, quadrinhas e outros textos do campo da vida cotidiana, com certa autonomia, considerando situação comunicativa, tema, estrutura e estilo do gênero.",
      "materials": ["Cantiga ou quadrinha impressa ou em cartaz"],
      "steps": [
        "Apresentar a cantiga ou quadrinha escrita em cartaz.",
        "Ler em voz alta, batendo palmas no ritmo.",
        "Pedir que os alunos leiam juntos em coro.",
        "Perguntar sobre o tema e o que rima no texto.",
        "Propor que os alunos leiam sozinhos, em duplas, apontando as rimas encontradas."
      ]
    },
    {
      "theme": "Escrevendo bilhetes e cartas para alguém especial",
      "curriculumCode": "EF02LP13A",
      "description": "Planejamento e produção, em colaboração com colegas e com ajuda do professor, de bilhetes e cartas do campo da vida cotidiana, considerando situação comunicativa, tema e estrutura do gênero.",
      "materials": ["Modelo de bilhete e de carta", "Papel para escrita", "Envelope (opcional)"],
      "steps": [
        "Mostrar um bilhete e uma carta reais, comparando as partes de cada um.",
        "Perguntar coletivamente para quem cada aluno gostaria de escrever e por quê.",
        "Planejar juntos o que precisa ter no texto (destinatário, mensagem, despedida, remetente).",
        "Cada aluno escreve seu próprio bilhete ou carta para um colega ou familiar.",
        "Trocar os bilhetes entre os colegas ou entregar às pessoas escolhidas."
      ]
    },
    {
      "theme": "Convites e avisos da escola e da comunidade",
      "curriculumCode": "EF02LP14",
      "description": "Leitura e compreensão de textos do campo da vida pública usados para divulgar eventos da escola ou comunidade (convite, propaganda, comunicado, carta, bilhete, convocação).",
      "materials": ["Convites e comunicados reais da escola"],
      "steps": [
        "Trazer exemplos reais de convites ou comunicados da escola.",
        "Ler cada um em voz alta, identificando do que se trata o evento.",
        "Perguntar quem está convocando, para quem e quando é o evento.",
        "Em duplas, os alunos identificam as informações essenciais em um novo convite.",
        "Fechar comparando os diferentes tipos de texto (convite x comunicado x aviso)."
      ]
    },
    {
      "theme": "Cantando cantigas mantendo ritmo e melodia",
      "curriculumCode": "EF02LP15",
      "description": "Canto de cantigas e canções, mantendo o ritmo e a melodia.",
      "materials": ["Letra de cantiga conhecida", "Instrumento simples de percussão (opcional)"],
      "steps": [
        "Escolher uma cantiga popular conhecida pela turma.",
        "Cantar a cantiga com o professor, batendo palmas no ritmo.",
        "Dividir a turma em grupos para cantar trechos diferentes.",
        "Repetir a cantiga aumentando a velocidade ou trocando o volume, mantendo o ritmo.",
        "Encerrar com todos cantando juntos, do início ao fim."
      ]
    },
    {
      "theme": "Bilhetes, recados e receitas: reconhecendo a estrutura",
      "curriculumCode": "EF02LP16A/EF02LP16B",
      "description": "Leitura e compreensão de bilhetes, recados, avisos, cartas e receitas do campo da vida cotidiana, identificando e mantendo a estrutura composicional específica de cada um.",
      "materials": ["Exemplos de bilhete, recado e receita"],
      "steps": [
        "Apresentar um bilhete, um recado e uma receita, um de cada vez.",
        "Perguntar o que cada texto tem em comum e o que é diferente entre eles.",
        "Em grupos, os alunos organizam cartões com partes soltas de cada tipo de texto na ordem correta.",
        "Cada grupo apresenta a estrutura montada, explicando as partes.",
        "Fechar registrando no caderno as partes fixas de cada gênero (ex.: receita tem ingredientes e modo de preparo)."
      ]
    },
    {
      "theme": "Quando aconteceu? Advérbios de tempo nas histórias",
      "curriculumCode": "EF02LP17",
      "description": "Identificação e uso de advérbios e locuções adverbiais de tempo (antes, ontem, há muito tempo, no dia seguinte, ao anoitecer) na leitura de textos do campo artístico-literário.",
      "materials": ["Conto de fadas ou fábula impressa"],
      "steps": [
        "Ler um conto de fadas em voz alta para a turma.",
        "Pedir que os alunos levantem a mão sempre que ouvirem uma expressão de tempo.",
        "Anotar na lousa as expressões encontradas (há muito tempo, no dia seguinte).",
        "Discutir o que cada expressão indica sobre a passagem do tempo na história.",
        "Propor que os alunos reescrevam um trecho da história usando uma nova expressão de tempo."
      ]
    },
    {
      "theme": "Divulgando eventos da escola: convite e propaganda",
      "curriculumCode": "EF02LP18A/EF02LP18B",
      "description": "Planejamento, produção, revisão e edição de textos para divulgação de eventos da escola ou comunidade, usando linguagem persuasiva e elementos visuais.",
      "materials": ["Cartolina ou folha A4", "Canetinhas coloridas"],
      "steps": [
        "Escolher com a turma um evento fictício ou real da escola para divulgar.",
        "Planejar coletivamente o texto: o que precisa dizer, quando e onde é o evento.",
        "Cada aluno ou dupla cria seu convite ou cartaz, com desenho e linguagem persuasiva.",
        "Trocar os cartazes entre colegas para sugestões de melhoria.",
        "Revisar e finalizar o cartaz, expondo os trabalhos na sala."
      ]
    },
    {
      "theme": "Montando um jornal falado com notícias da turma",
      "curriculumCode": "EF02LP19A/EF02LP19B",
      "description": "Planejamento, produção e revisão de notícias, entre outros textos do campo da vida pública, para serem oralizadas em áudio ou vídeo compondo um jornal falado.",
      "materials": ["Gravador de áudio ou celular (opcional)", "Roteiro simples de notícia"],
      "steps": [
        "Explicar o que é um jornal falado e mostrar um exemplo curto.",
        "Em grupos, os alunos escolhem um fato do dia a dia da escola para virar notícia.",
        "Cada grupo planeja o texto: o que aconteceu, quando, onde e com quem.",
        "Os grupos ensaiam a leitura da notícia em voz alta.",
        "Gravar ou apresentar ao vivo as notícias, revisando o texto antes da apresentação final."
      ]
    },
    {
      "theme": "Para que servem os textos de pesquisa?",
      "curriculumCode": "EF02LP20",
      "description": "Reconhecimento da função social de textos usados para apresentar informações coletadas em pesquisas (resumos, mapas conceituais, fichas técnicas, relatos de experiências).",
      "materials": ["Exemplos de ficha técnica e resumo simples"],
      "steps": [
        "Mostrar um resumo e uma ficha técnica de um animal, por exemplo.",
        "Perguntar para que servem esses textos e onde costumamos encontrá-los.",
        "Comparar com um bilhete ou uma carta, discutindo a diferença de finalidade.",
        "Em duplas, os alunos identificam qual tipo de texto usariam para apresentar uma pesquisa sobre um tema escolhido.",
        "Fechar com um registro coletivo do 'para que serve cada texto de pesquisa'."
      ]
    },
    {
      "theme": "Pesquisando em textos expositivos digitais",
      "curriculumCode": "EF02LP21",
      "description": "Leitura e compreensão, com mediação do professor, de textos expositivos (resumos, fichas técnicas, relatos de experiências) em diferentes ambientes digitais de pesquisa.",
      "materials": ["Computador, tablet ou impressão de site de pesquisa infantil"],
      "steps": [
        "Escolher um tema simples de interesse da turma (ex.: um animal).",
        "Mostrar em um site ou material impresso um texto expositivo sobre o tema.",
        "Ler juntos, destacando as informações principais.",
        "Perguntar quais partes do texto ajudam a entender melhor o assunto (título, imagens, negrito).",
        "Registrar coletivamente 3 informações novas aprendidas com a leitura."
      ]
    },
    {
      "theme": "Criando verbetes de enciclopédia da turma",
      "curriculumCode": "EF02LP22A/EF02LP22B",
      "description": "Planejamento, produção, revisão e edição de verbetes de enciclopédia, entre outros textos do campo das práticas de estudo e pesquisa.",
      "materials": ["Exemplo de verbete de enciclopédia infantil", "Papel para produção"],
      "steps": [
        "Ler um verbete curto de enciclopédia infantil sobre um animal ou objeto.",
        "Identificar coletivamente as partes do verbete (nome, definição, características).",
        "Cada aluno escolhe um tema simples e planeja seu próprio verbete.",
        "Os alunos escrevem o verbete seguindo a estrutura observada.",
        "Em duplas, revisam o texto do colega e ajustam antes de montar um mural de 'enciclopédia da turma'."
      ]
    },
    {
      "theme": "Lendo verbetes de enciclopédia",
      "curriculumCode": "EF02LP23",
      "description": "Leitura e compreensão, em colaboração com colegas e ajuda do professor, de verbetes de enciclopédia, entre outros textos do campo das práticas de estudo e pesquisa.",
      "materials": ["Enciclopédia infantil impressa ou digital"],
      "steps": [
        "Apresentar uma enciclopédia infantil e explicar como ela é organizada.",
        "Escolher um verbete e ler em voz alta para a turma.",
        "Perguntar o que descobriram sobre o assunto após a leitura.",
        "Em duplas, os alunos procuram outro verbete e leem juntos.",
        "Cada dupla conta para a turma uma informação nova que encontrou."
      ]
    },
    {
      "theme": "Contando nossas experiências em áudio ou vídeo",
      "curriculumCode": "EF02LP24A/EF02LP24B",
      "description": "Planejamento, produção e revisão de textos das práticas de estudo e pesquisa (resumos, fichas técnicas, relatos de experiências) que possam ser oralizados em áudio ou vídeo.",
      "materials": ["Celular ou gravador (opcional)", "Roteiro simples"],
      "steps": [
        "Escolher com a turma uma experiência recente para relatar (uma atividade, um passeio).",
        "Planejar coletivamente o que contar: o que aconteceu primeiro, depois e no final.",
        "Cada aluno ou dupla treina a fala do relato em voz alta.",
        "Gravar (ou simular ao vivo) o relato de cada grupo.",
        "Ouvir as gravações e sugerir pequenos ajustes antes da versão final."
      ]
    },
    {
      "theme": "Mantendo o assunto em textos expositivos",
      "curriculumCode": "EF02LP25",
      "description": "Identificação e manutenção da situação comunicativa, tema, estrutura composicional e estilo próprio de textos expositivos em diferentes ambientes digitais de pesquisa, inclusive em versões orais.",
      "materials": ["Texto expositivo curto sobre um tema de pesquisa"],
      "steps": [
        "Ler um texto expositivo curto e identificar o tema principal.",
        "Perguntar se todas as frases do texto falam sobre o mesmo assunto.",
        "Apresentar um texto com uma frase 'fora do assunto' e pedir que encontrem o erro.",
        "Em duplas, os alunos organizam frases soltas mantendo o mesmo tema e estrutura.",
        "Fechar com uma leitura em voz alta do texto reorganizado."
      ]
    },
    {
      "theme": "Ouvindo e lendo notícias do bairro e da escola",
      "curriculumCode": "EF02LP26",
      "description": "Leitura e compreensão, em colaboração com colegas e ajuda do professor, de notícias e outros textos do campo da vida pública que possam ser oralizados para compor um jornal falado.",
      "materials": ["Notícia curta impressa ou de jornal infantil"],
      "steps": [
        "Apresentar uma notícia curta e simples para a turma.",
        "Ler em voz alta, destacando o que aconteceu, quando e onde.",
        "Perguntar coletivamente qual é o assunto principal da notícia.",
        "Em duplas, os alunos respondem perguntas simples sobre o texto lido.",
        "Fechar comentando como essa notícia poderia ser lida em um jornal falado."
      ]
    },
    {
      "theme": "Criando e revisando nossos próprios contos de fadas",
      "curriculumCode": "EF02LP27A/EF02LP27B",
      "description": "Planejamento, produção, revisão e edição de contos de fadas, maravilhosos, populares, fábulas e outros textos do campo artístico-literário.",
      "materials": ["Papel para escrita", "Livros de contos de fadas para consulta"],
      "steps": [
        "Relembrar coletivamente as partes de um conto de fadas (personagens, problema, final).",
        "Cada aluno ou dupla planeja seu próprio conto, com personagem e problema definidos.",
        "Os alunos escrevem uma primeira versão do conto.",
        "Trocar os textos entre colegas para sugestões de melhoria.",
        "Revisar e produzir a versão final, ilustrando a história."
      ]
    },
    {
      "theme": "Lendo contos de fadas e fábulas com autonomia",
      "curriculumCode": "EF02LP28A",
      "description": "Leitura e compreensão, com certa autonomia, de contos de fadas, maravilhosos, populares, fábulas e crônicas do campo artístico-literário.",
      "materials": ["Livro de conto de fadas ou fábula"],
      "steps": [
        "Apresentar o livro escolhido, mostrando capa e ilustrações.",
        "Pedir que os alunos leiam a história em duplas, em silêncio ou sussurrando.",
        "Circular pela sala apoiando quem tiver dificuldade na leitura.",
        "Reunir a turma para conversar sobre o que entenderam da história.",
        "Fechar com um pequeno desenho representando a parte que mais gostaram."
      ]
    },
    {
      "theme": "Qual é o problema da história? Identificando o conflito",
      "curriculumCode": "EF02LP28B",
      "description": "Identificação do conflito gerador em uma narrativa ficcional (contos de fadas, maravilhosos, populares, fábulas, crônicas) e de sua resolução.",
      "materials": ["Conto de fadas ou fábula conhecida"],
      "steps": [
        "Ler uma história curta em voz alta para a turma.",
        "Perguntar: qual foi o problema que apareceu na história?",
        "Perguntar como esse problema foi resolvido no final.",
        "Em duplas, os alunos desenham o problema e a solução da história em duas cenas.",
        "Compartilhar os desenhos, explicando o conflito e a resolução encontrados."
      ]
    },
    {
      "theme": "Como são os personagens? Palavras que os descrevem",
      "curriculumCode": "EF02LP28C",
      "description": "Reconhecimento de palavras e expressões usadas na caracterização de personagens e ambientes em uma narrativa ficcional (contos de fadas, maravilhosos, populares, fábulas, crônicas).",
      "materials": ["Conto de fadas com personagens bem descritos"],
      "steps": [
        "Ler um trecho do conto que descreva um personagem ou um lugar.",
        "Perguntar quais palavras do texto ajudam a imaginar como é o personagem ou o ambiente.",
        "Anotar na lousa as palavras encontradas (ex.: 'floresta escura', 'gigante feroz').",
        "Em duplas, os alunos procuram outras palavras de caracterização no mesmo texto.",
        "Fechar pedindo que cada aluno desenhe o personagem usando as palavras descritivas encontradas."
      ]
    },
    {
      "theme": "Observando a forma dos poemas concretos",
      "curriculumCode": "EF02LP29",
      "description": "Observação da estrutura composicional de poemas concretos (visuais), suas ilustrações e recursos visuais, para compreender seus efeitos de sentido.",
      "materials": ["Exemplo de poema concreto (visual)", "Papel e lápis de cor"],
      "steps": [
        "Mostrar um poema concreto, no qual o formato do texto desenha o próprio tema.",
        "Perguntar o que os alunos notam de diferente em relação a um poema comum.",
        "Discutir como o formato do texto ajuda a entender ou sentir o poema.",
        "Propor que cada aluno crie um pequeno poema concreto sobre um tema simples (sol, chuva, coração).",
        "Expor os poemas criados em um mural da sala."
      ]
    }
  ],
  matematica: [
    {
      "theme": "Comparando e ordenando números até a centena",
      "curriculumCode": "EF02MA01",
      "description": "Comparar, ordenar e registrar números naturais até a ordem das centenas, compreendendo o valor posicional dos algarismos e a função do zero no sistema de numeração decimal.",
      "materials": ["Material dourado ou palitos agrupados de 10 em 10", "Cartões com números de 3 algarismos"],
      "steps": [
        "Distribuir cartões com números de três algarismos para os alunos, em duplas.",
        "Pedir que cada dupla monte o número recebido usando material dourado ou palitos agrupados de 10 em 10.",
        "Comparar dois números montados por duplas diferentes, decidindo qual é maior e por quê, observando a casa da centena, dezena e unidade.",
        "Organizar os cartões da turma em ordem crescente na lousa.",
        "Discutir coletivamente o papel do algarismo zero em números como 105 ou 230.",
        "Registrar no caderno três comparações feitas usando os sinais > e <."
      ]
    },
    {
      "theme": "Estimando e contando coleções grandes",
      "curriculumCode": "EF02MA02",
      "description": "Fazer estimativas sobre a quantidade de objetos de uma coleção grande usando estratégias diversas e, em seguida, registrar o resultado da contagem real.",
      "materials": ["Pote transparente com muitos objetos pequenos (feijões, tampinhas, grãos)", "Folha de registro"],
      "steps": [
        "Mostrar o pote cheio de objetos para a turma sem deixar contar.",
        "Pedir que cada aluno escreva sua estimativa de quantos objetos há no pote.",
        "Organizar a turma em grupos para contar os objetos por agrupamentos de 10.",
        "Comparar o total contado com as estimativas registradas, discutindo quais ficaram mais próximas.",
        "Registrar o resultado final da contagem no quadro."
      ]
    },
    {
      "theme": "Comparando quantidades: tem mais, tem menos",
      "curriculumCode": "EF02MA03",
      "description": "Comparar quantidades de objetos de dois conjuntos por estimativa ou correspondência, indicando qual tem mais, qual tem menos ou se têm a mesma quantidade.",
      "materials": ["Dois conjuntos de objetos por dupla (ex.: botões e clipes)"],
      "steps": [
        "Distribuir dois conjuntos de objetos diferentes para cada dupla.",
        "Pedir que os alunos organizem os objetos em fileiras, um embaixo do outro, fazendo correspondência um a um.",
        "Perguntar qual conjunto tem mais, qual tem menos ou se as quantidades são iguais.",
        "Pedir que registrem quantos a mais ou quantos a menos um conjunto tem em relação ao outro.",
        "Socializar os resultados com a turma, comparando estratégias usadas."
      ]
    },
    {
      "theme": "Compondo e decompondo números até 3 ordens",
      "curriculumCode": "EF02MA04",
      "description": "Compor e decompor números naturais de até três ordens com apoio de material manipulável, por meio de diferentes formas de adição.",
      "materials": ["Material dourado", "Cartões de valor posicional (centena, dezena, unidade)"],
      "steps": [
        "Apresentar um número de três algarismos e pedir que os alunos montem com material dourado.",
        "Pedir que decomponham o número em centenas, dezenas e unidades usando os cartões de valor posicional.",
        "Propor que escrevam a decomposição como soma (ex.: 245 = 200 + 40 + 5).",
        "Inverter a atividade: dar uma soma decomposta e pedir que descubram o número correspondente.",
        "Realizar uma rodada de desafios em duplas, trocando números para compor e decompor."
      ]
    },
    {
      "theme": "Fatos básicos de adição e subtração de cabeça",
      "curriculumCode": "EF02MA05",
      "description": "Construir fatos básicos da adição e da subtração e utilizá-los no cálculo mental ou escrito, agilizando a resolução de contas simples.",
      "materials": ["Fichas com fatos básicos (ex.: 5+3, 9-4)", "Cronômetro ou relógio da sala"],
      "steps": [
        "Apresentar fichas com pequenas contas de adição e subtração para a turma resolver oralmente.",
        "Cronometrar rodadas rápidas em que os alunos respondem os fatos básicos de memória.",
        "Registrar no caderno os fatos que ainda geram dúvida para praticar depois.",
        "Propor um jogo em duplas com cartas de fatos básicos, marcando ponto para quem responder primeiro.",
        "Fechar com uma lista coletiva na lousa dos fatos que a turma já domina."
      ]
    },
    {
      "theme": "Resolvendo problemas de juntar, separar e comparar",
      "curriculumCode": "EF02MA06",
      "description": "Resolver e elaborar problemas de adição e subtração com números de até três ordens, envolvendo as ideias de juntar, acrescentar, separar e retirar.",
      "materials": ["Problemas impressos ou escritos na lousa", "Material manipulável de apoio"],
      "steps": [
        "Ler um problema em voz alta com a turma e identificar o que ele pede para descobrir.",
        "Perguntar se a situação envolve juntar, acrescentar, separar ou retirar.",
        "Deixar os alunos resolverem sozinhos ou em duplas, usando desenhos, contas ou material manipulável.",
        "Corrigir coletivamente na lousa, mostrando diferentes formas de resolução.",
        "Propor que cada dupla elabore um novo problema parecido para trocar com outra dupla."
      ]
    },
    {
      "theme": "Descobrindo a multiplicação: somando parcelas iguais",
      "curriculumCode": "EF02MA07",
      "description": "Resolver e elaborar situações-problema de adição de parcelas iguais, com apoio de imagens ou material manipulável, construindo o significado inicial da multiplicação.",
      "materials": ["Potinhos e objetos pequenos para formar grupos iguais", "Folha de registro"],
      "steps": [
        "Propor uma situação: 'temos 4 potinhos com 3 bolinhas em cada um, quantas bolinhas ao todo?'.",
        "Deixar os alunos montarem os grupos com material manipulável para resolver.",
        "Pedir que registrem a soma das parcelas iguais (3+3+3+3) no caderno.",
        "Apresentar a ideia de que essa soma repetida pode ser chamada de multiplicação.",
        "Propor que cada aluno crie uma situação semelhante para um colega resolver."
      ]
    },
    {
      "theme": "Explorando dobro, metade, triplo e terça parte",
      "curriculumCode": "EF02MA08",
      "description": "Resolver e elaborar situações-problema envolvendo as ideias de dobro, metade, triplo e terça parte, com apoio de imagens ou material manipulável.",
      "materials": ["Fichas ou objetos para repartir (tampinhas, palitos)", "Imagens de apoio"],
      "steps": [
        "Apresentar uma quantidade de objetos e perguntar qual seria o dobro dessa quantidade.",
        "Repetir a atividade pedindo o triplo, usando material manipulável para verificar.",
        "Propor a divisão de uma quantidade em duas partes iguais para descobrir a metade.",
        "Fazer o mesmo para a terça parte, dividindo em três partes iguais.",
        "Registrar no caderno os resultados encontrados em cada situação, com desenhos de apoio."
      ]
    },
    {
      "theme": "Construindo sequências numéricas crescentes e decrescentes",
      "curriculumCode": "EF02MA09",
      "description": "Construir sequências de números naturais em ordem crescente ou decrescente a partir de um número dado, seguindo uma regularidade estabelecida.",
      "materials": ["Cartões numerados", "Lousa"],
      "steps": [
        "Escrever na lousa um número inicial e uma regra (ex.: 'somar 2 a cada passo').",
        "Pedir que os alunos completem a sequência crescente seguindo a regra.",
        "Repetir a atividade com uma sequência decrescente.",
        "Propor que duplas criem suas próprias sequências e troquem com outra dupla para completar.",
        "Socializar algumas sequências criadas, verificando se a regularidade foi respeitada."
      ]
    },
    {
      "theme": "Descobrindo o padrão das sequências",
      "curriculumCode": "EF02MA10",
      "description": "Descrever um padrão ou regularidade de sequências repetitivas e recursivas, usando palavras, símbolos ou desenhos.",
      "materials": ["Fichas coloridas ou figuras geométricas variadas"],
      "steps": [
        "Montar na lousa uma sequência repetitiva de figuras (ex.: círculo, quadrado, círculo, quadrado...).",
        "Perguntar aos alunos qual é o padrão que se repete.",
        "Pedir que descrevam o padrão com suas próprias palavras.",
        "Propor que cada aluno monte uma sequência própria com material colorido, seguindo um padrão escolhido.",
        "Trocar as sequências entre colegas para que descubram o padrão do colega."
      ]
    },
    {
      "theme": "Completando os elementos que faltam na sequência",
      "curriculumCode": "EF02MA11",
      "description": "Descrever e completar elementos ausentes em sequências repetitivas e recursivas de números, objetos ou figuras.",
      "materials": ["Fichas de sequência com espaços em branco"],
      "steps": [
        "Apresentar sequências com uma ou mais posições vazias, de números ou de figuras.",
        "Pedir que os alunos identifiquem o padrão da sequência antes de preencher os espaços.",
        "Deixar que completem individualmente as lacunas.",
        "Corrigir coletivamente, explicando o raciocínio usado em cada caso.",
        "Propor uma atividade extra em que os alunos criam sequências com lacunas para os colegas resolverem."
      ]
    },
    {
      "theme": "Localizando e descrevendo deslocamentos no espaço",
      "curriculumCode": "EF02MA12",
      "description": "Identificar e registrar, em linguagem verbal ou não verbal, a localização e os deslocamentos de pessoas e objetos no espaço, considerando mais de um ponto de referência.",
      "materials": ["Objetos da sala de aula", "Giz ou fita para marcar trajetos no chão"],
      "steps": [
        "Posicionar objetos em diferentes pontos da sala como referências.",
        "Pedir que um aluno se desloque da carteira até a porta, descrevendo em voz alta o caminho percorrido.",
        "Registrar coletivamente as mudanças de direção e sentido usadas na descrição.",
        "Propor que duplas criem um pequeno trajeto e descrevam para a turma adivinhar o destino.",
        "Desenhar no caderno o trajeto realizado, indicando os pontos de referência."
      ]
    },
    {
      "theme": "Desenhando roteiros e plantas de ambientes conhecidos",
      "curriculumCode": "EF02MA13",
      "description": "Esboçar roteiros a serem seguidos ou plantas simples de ambientes familiares, assinalando entradas, saídas e pontos de referência.",
      "materials": ["Folha de papel", "Lápis de cor"],
      "steps": [
        "Observar junto com a turma o layout da sala de aula, identificando porta, janelas e móveis.",
        "Pedir que cada aluno desenhe uma planta simples da sala, marcando a entrada e a saída.",
        "Propor que indiquem pontos de referência importantes, como a mesa do professor.",
        "Comparar as plantas feitas por diferentes alunos, discutindo semelhanças e diferenças.",
        "Repetir a atividade para outro ambiente conhecido, como a casa do aluno."
      ]
    },
    {
      "theme": "Reconhecendo sólidos geométricos no mundo físico",
      "curriculumCode": "EF02MA14",
      "description": "Reconhecer, nomear e comparar figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera), relacionando-as a objetos do mundo físico.",
      "materials": ["Sólidos geométricos de madeira ou plástico", "Objetos do cotidiano (caixa, lata, bola)"],
      "steps": [
        "Apresentar os sólidos geométricos e pedir que os alunos os manipulem, observando faces, vértices e arestas.",
        "Pedir que associem cada sólido a um objeto conhecido (ex.: cilindro e lata).",
        "Organizar uma caça aos sólidos pela sala, procurando objetos parecidos com cada forma.",
        "Registrar em uma tabela o nome do sólido e um objeto correspondente encontrado.",
        "Socializar as descobertas com a turma toda."
      ]
    },
    {
      "theme": "Reconhecendo e nomeando figuras planas",
      "curriculumCode": "EF02MA15",
      "description": "Reconhecer, comparar e nomear figuras planas (círculo, quadrado, retângulo e triângulo) em desenhos ou nas faces de sólidos geométricos, a partir de características comuns.",
      "materials": ["Sólidos geométricos", "Papel e lápis para contorno"],
      "steps": [
        "Apresentar as figuras planas círculo, quadrado, retângulo e triângulo em cartazes.",
        "Pedir que os alunos contornem as faces de sólidos geométricos no papel para descobrir quais figuras planas aparecem.",
        "Comparar as figuras encontradas, discutindo número de lados e formato.",
        "Propor uma busca por figuras planas em objetos e desenhos do ambiente escolar.",
        "Registrar em um mural coletivo as figuras planas identificadas."
      ]
    },
    {
      "theme": "Medindo comprimentos com unidades padronizadas e não padronizadas",
      "curriculumCode": "EF02MA16",
      "description": "Estimar, medir e comparar comprimentos de lados de salas e de polígonos, usando unidades de medida não padronizadas e padronizadas (metro, centímetro, milímetro) e instrumentos adequados.",
      "materials": ["Fita métrica ou régua", "Barbante ou passos como unidade não padronizada"],
      "steps": [
        "Pedir que os alunos estimem, em passos, o comprimento de uma parede da sala.",
        "Medir o mesmo comprimento usando passos reais, registrando o resultado.",
        "Repetir a medição usando fita métrica ou régua, comparando com a medida em passos.",
        "Discutir por que a medida padronizada é mais confiável para comparar resultados entre grupos.",
        "Registrar em uma tabela as medidas de diferentes objetos da sala, usando unidade padronizada."
      ]
    },
    {
      "theme": "Medindo capacidade e massa no dia a dia",
      "curriculumCode": "EF02MA17",
      "description": "Estimar, medir, comparar e registrar capacidade e massa, usando estratégias pessoais e unidades de medida não padronizadas ou padronizadas (litro, mililitro, grama, quilograma).",
      "materials": ["Recipientes de diferentes tamanhos", "Balança simples, se disponível"],
      "steps": [
        "Apresentar recipientes de tamanhos diferentes e pedir que estimem qual tem maior capacidade.",
        "Comparar as capacidades enchendo os recipientes com água e observando o resultado.",
        "Repetir a atividade com objetos de massas diferentes, estimando qual é mais pesado.",
        "Usar uma balança simples, se disponível, para conferir as estimativas de massa.",
        "Registrar em tabela os resultados de capacidade e massa encontrados."
      ]
    },
    {
      "theme": "Calculando intervalos de tempo com o calendário",
      "curriculumCode": "EF02MA18",
      "description": "Indicar a duração de intervalos de tempo entre duas datas, utilizando o calendário para planejamentos e organização de agenda.",
      "materials": ["Calendário do mês em cartaz", "Agenda ou caderno"],
      "steps": [
        "Mostrar o calendário do mês e localizar a data atual junto com a turma.",
        "Propor uma pergunta, como 'quantos dias faltam para o aniversário da escola?'.",
        "Pedir que os alunos contem os dias no calendário para responder.",
        "Repetir com outras datas importantes, como feriados ou eventos da turma.",
        "Registrar no caderno os intervalos de tempo calculados."
      ]
    },
    {
      "theme": "Medindo o tempo com o relógio digital",
      "curriculumCode": "EF02MA19",
      "description": "Medir a duração de um intervalo de tempo usando o relógio digital, registrando o horário de início e de fim de uma atividade.",
      "materials": ["Relógio digital ou aplicativo de relógio", "Folha de registro"],
      "steps": [
        "Escolher uma atividade da rotina, como o recreio, para cronometrar.",
        "Registrar o horário de início observando o relógio digital.",
        "Registrar o horário de término ao final da atividade.",
        "Calcular juntos quanto tempo durou a atividade.",
        "Repetir com outra atividade do dia para praticar a leitura do relógio digital."
      ]
    },
    {
      "theme": "Trocando moedas e cédulas: equivalência de valores",
      "curriculumCode": "EF02MA20",
      "description": "Estabelecer a equivalência de valores entre moedas e cédulas do sistema monetário brasileiro para resolver situações cotidianas.",
      "materials": ["Réplicas de moedas e cédulas brasileiras", "Cartazes com preços de produtos fictícios"],
      "steps": [
        "Apresentar réplicas de moedas e cédulas e identificar seus valores com a turma.",
        "Propor situações de troca, como 'quantas moedas de 25 centavos equivalem a uma de 1 real?'.",
        "Organizar uma mercadinho simulado em sala, com produtos e preços fictícios.",
        "Pedir que os alunos, em duplas, façam 'compras' usando as réplicas e calculem o troco.",
        "Socializar as trocas realizadas, discutindo diferentes formas de compor o mesmo valor."
      ]
    },
    {
      "theme": "Provável, improvável, impossível: o acaso no dia a dia",
      "curriculumCode": "EF02MA21",
      "description": "Classificar resultados de eventos cotidianos aleatórios como pouco prováveis, muito prováveis, improváveis e impossíveis.",
      "materials": ["Dado", "Cartões com afirmações sobre eventos do cotidiano"],
      "steps": [
        "Apresentar afirmações do cotidiano, como 'vai nevar aqui amanhã' ou 'o sol vai nascer amanhã'.",
        "Pedir que os alunos classifiquem cada afirmação como provável, improvável ou impossível.",
        "Realizar um jogo com dado, perguntando a chance de sair um número específico.",
        "Discutir coletivamente por que alguns resultados são mais prováveis que outros.",
        "Registrar no caderno exemplos de eventos prováveis e improváveis do dia a dia."
      ]
    },
    {
      "theme": "Lendo e comparando dados em tabelas e gráficos",
      "curriculumCode": "EF02MA22",
      "description": "Comparar informações de pesquisas apresentadas em tabelas de dupla entrada e gráficos de colunas simples ou barras, para compreender melhor a realidade próxima.",
      "materials": ["Tabela ou gráfico já pronto com dados da turma (ex.: brincadeira favorita)"],
      "steps": [
        "Apresentar uma tabela ou gráfico simples com dados coletados anteriormente pela turma.",
        "Perguntar qual categoria teve mais respostas e qual teve menos, observando o gráfico.",
        "Pedir que comparem duas categorias e digam a diferença entre elas.",
        "Propor perguntas de interpretação, como 'quantos alunos ao todo responderam a essa pesquisa?'.",
        "Registrar no caderno as conclusões tiradas da leitura do gráfico."
      ]
    },
    {
      "theme": "Fazendo uma pesquisa e organizando os dados coletados",
      "curriculumCode": "EF02MA23",
      "description": "Realizar uma pesquisa escolhendo até três variáveis categóricas de interesse, organizando os dados coletados em listas, tabelas e gráficos de colunas simples.",
      "materials": ["Folha para anotação da pesquisa", "Papel quadriculado para o gráfico"],
      "steps": [
        "Escolher com a turma um tema de pesquisa, como fruta preferida.",
        "Definir até três opções de resposta para a pesquisa.",
        "Circular pela sala coletando a resposta de cada colega e anotando em uma lista.",
        "Organizar os dados coletados em uma tabela simples.",
        "Transformar a tabela em um gráfico de colunas no papel quadriculado.",
        "Apresentar o gráfico final para a turma, comentando o resultado da pesquisa."
      ]
    },
    {
      "theme": "Fatos básicos de multiplicação e divisão: metade, dobro e triplo",
      "curriculumCode": "EF02MA24",
      "description": "Construir fatos básicos da multiplicação e da divisão e utilizá-los em procedimentos de cálculo para resolver problemas envolvendo metade, dobro e triplo.",
      "materials": ["Objetos para agrupar e repartir (tampinhas, palitos)", "Fichas com fatos de multiplicação simples"],
      "steps": [
        "Apresentar situações simples de multiplicação, como 'quantas rodas têm 3 carrinhos?'.",
        "Deixar os alunos resolverem usando material manipulável, agrupando os objetos.",
        "Propor situações de divisão simples, como repartir 12 balas igualmente entre 4 amigos.",
        "Praticar oralmente pequenos fatos de multiplicação e divisão com apoio de fichas.",
        "Registrar no caderno os fatos praticados, junto com um desenho representando a situação.",
        "Fechar com um jogo rápido em duplas, alternando perguntas de multiplicação e divisão."
      ]
    }
  ],
  ciencias: [
    {
      "theme": "De que material é feito? Explorando objetos do dia a dia",
      "curriculumCode": "EF02CI01",
      "description": "Identificação dos materiais que compõem objetos usados no cotidiano (metal, madeira, vidro, entre outros), como são utilizados e pesquisa sobre como esses objetos eram feitos e usados no passado.",
      "materials": ["Objetos variados de metal, madeira, vidro e plástico", "Imagens de objetos antigos (ferro de passar a carvão, rádio antigo, etc.)"],
      "steps": [
        "Espalhar sobre uma mesa objetos feitos de materiais diferentes.",
        "Pedir que as crianças toquem e classifiquem cada objeto pelo material (metal, madeira, vidro, plástico).",
        "Mostrar imagens de versões antigas de alguns desses objetos.",
        "Conversar sobre o que mudou no material ou na forma de uso ao longo do tempo.",
        "Registrar em uma tabela simples: objeto, material, uso hoje e uso no passado."
      ]
    },
    {
      "theme": "Escolhendo o material certo para cada objeto",
      "curriculumCode": "EF02CI02",
      "description": "Reflexão sobre por que diferentes materiais são escolhidos para construir objetos do cotidiano, considerando propriedades como flexibilidade, dureza e transparência.",
      "materials": ["Pedaços de materiais diferentes (elástico, madeira, plástico transparente, tecido)", "Objetos do cotidiano feitos com esses materiais"],
      "steps": [
        "Distribuir pequenas amostras de materiais para os grupos testarem (dobrar, apertar, olhar através).",
        "Perguntar: esse material é duro, mole, flexível ou transparente?",
        "Relacionar cada propriedade a um objeto real (janela de vidro é transparente, elástico é flexível).",
        "Propor que a turma sugira qual material usariam para construir um objeto novo (por exemplo, uma capa de chuva) e por quê.",
        "Fechar com uma roda de conversa sobre as escolhas feitas."
      ]
    },
    {
      "theme": "Cuidado em casa: prevenindo acidentes domésticos",
      "curriculumCode": "EF02CI03",
      "description": "Identificação de situações de risco no ambiente doméstico (objetos cortantes, inflamáveis, eletricidade, produtos de limpeza, medicamentos, condições climáticas) e discussão sobre cuidados de prevenção.",
      "materials": ["Imagens de situações de risco doméstico (tomada, faca, produto de limpeza, remédio)", "Cartolina para cartaz de segurança"],
      "steps": [
        "Mostrar imagens de diferentes situações de risco dentro de casa.",
        "Perguntar à turma o que pode acontecer de perigoso em cada uma.",
        "Discutir em grupo qual cuidado deve ser tomado em cada situação.",
        "Construir coletivamente um cartaz de 'Casa Segura' com as regras levantadas.",
        "Pedir que cada criança escolha uma regra para contar em casa aos familiares."
      ]
    },
    {
      "theme": "Plantas e animais do meu dia a dia",
      "curriculumCode": "EF02CI04",
      "description": "Observação e descrição de características de plantas e animais do cotidiano (tamanho, forma, cor, fase da vida e local onde vivem), relacionando-as ao ambiente em que se desenvolvem.",
      "materials": ["Imagens ou exemplares reais de plantas e animais comuns na região", "Ficha de observação simples"],
      "steps": [
        "Levar a turma para observar plantas e animais no pátio da escola ou usar imagens.",
        "Pedir que registrem tamanho, forma, cor e onde cada ser vivo foi encontrado.",
        "Perguntar em que fase da vida cada planta ou animal parece estar (filhote, adulto, muda, floração).",
        "Relacionar as características observadas ao ambiente onde vivem.",
        "Compartilhar os registros em roda, comparando plantas e animais diferentes."
      ]
    },
    {
      "theme": "Água e luz: o que os seres vivos precisam para viver",
      "curriculumCode": "EF02CI05",
      "description": "Investigação, em ambientes do cotidiano da turma, da importância da água e da luz para a manutenção da vida das plantas e dos animais.",
      "materials": ["Duas mudas de plantas iguais", "Água", "Espaço com luz e espaço escuro (ou caixa fechada)"],
      "steps": [
        "Organizar um experimento simples: uma muda recebe água e luz, outra fica sem um dos dois.",
        "Registrar previsões da turma sobre o que vai acontecer com cada planta.",
        "Observar as plantas ao longo de alguns dias e anotar as mudanças.",
        "Discutir por que a água e a luz são importantes também para os animais.",
        "Concluir coletivamente por que todo ser vivo precisa de água e luz para viver."
      ]
    },
    {
      "theme": "Conhecendo as partes de uma planta",
      "curriculumCode": "EF02CI06",
      "description": "Identificação das principais partes de uma planta (raiz, caule, folhas, flores e frutos), da função de cada uma delas e das relações entre as plantas, o ambiente e os demais seres vivos.",
      "materials": ["Uma planta com raiz visível (ou muda desenterrada com cuidado)", "Imagens de plantas com flores e frutos", "Folha de papel para desenho"],
      "steps": [
        "Mostrar uma planta real ou imagem grande destacando raiz, caule, folhas, flores e frutos.",
        "Explicar brevemente a função de cada parte (raiz fixa e absorve água, folha faz alimento, etc.).",
        "Pedir que a turma desenhe uma planta e nomeie cada parte.",
        "Conversar sobre como abelhas, pássaros e outros animais se relacionam com as flores e frutos.",
        "Fechar perguntando o que aconteceria se a planta perdesse uma dessas partes."
      ]
    },
    {
      "theme": "Onde está o Sol agora? Observando o céu ao longo do dia",
      "curriculumCode": "EF02CI07A",
      "description": "Observação e registro da posição do Sol no céu em diferentes momentos do dia, relacionando essa posição às atividades realizadas ao longo do dia.",
      "materials": ["Folha de registro com desenho do céu em três horários", "Lápis de cor"],
      "steps": [
        "Combinar com a turma três momentos do dia para observar o céu (manhã, meio-dia, fim de tarde), sempre de um ponto seguro e sem olhar diretamente para o Sol.",
        "Em cada momento, pedir que desenhem em que parte do céu o Sol parece estar.",
        "Anotar junto de cada desenho qual atividade a turma estava fazendo naquele horário.",
        "Comparar os três registros ao final do dia.",
        "Concluir junto com a turma que a posição do Sol no céu muda ao longo do dia."
      ]
    },
    {
      "theme": "Brincando com sombras: como elas mudam ao longo do dia",
      "curriculumCode": "EF02CI07B",
      "description": "Observação e registro do tamanho, da forma e da posição da sombra projetada por um objeto, descrevendo como ela muda de acordo com a posição do Sol em diferentes horários do dia.",
      "materials": ["Um objeto fixo no pátio (poste, cone, boneco de papel)", "Giz para contornar a sombra no chão", "Folha de registro"],
      "steps": [
        "Escolher um objeto fixo no pátio e contornar sua sombra com giz pela manhã.",
        "Repetir o contorno da sombra do mesmo objeto no meio-dia e no fim da tarde.",
        "Comparar tamanho, forma e posição das três sombras marcadas.",
        "Registrar em desenho como a sombra mudou ao longo do dia.",
        "Discutir com a turma por que a sombra muda de tamanho e posição."
      ]
    },
    {
      "theme": "Sol quente: comparando o aquecimento em diferentes superfícies",
      "curriculumCode": "EF02CI08",
      "description": "Observação, registro e comparação do efeito da radiação solar (aquecimento e reflexão da luz) em diferentes tipos de superfície, como água, areia, solo, e superfícies escuras, claras e metálicas.",
      "materials": ["Amostras de água, areia e solo em potes pequenos", "Um objeto de superfície escura e um claro", "Termômetro (opcional)"],
      "steps": [
        "Colocar as amostras (água, areia, solo) e os objetos claro/escuro em um local ensolarado por um tempo determinado.",
        "Pedir que a turma toque cada superfície antes e depois de ficarem no sol, com cuidado.",
        "Registrar quais superfícies esquentaram mais e quais esquentaram menos.",
        "Discutir por que superfícies escuras costumam esquentar mais que as claras.",
        "Relacionar a atividade a situações do dia a dia, como andar descalço na areia ou tocar em um carro escuro no sol."
      ]
    }
  ],
  geografia: [
    {
      "theme": "Quem chegou aqui? Migrantes na nossa comunidade",
      "curriculumCode": "EF02GE01",
      "description": "Reconhecer e descrever a influência dos migrantes internos e externos que contribuíram para a modificação, organização e/ou construção do espaço geográfico do bairro ou comunidade.",
      "materials": ["Nenhum material obrigatório; opcionalmente fotos de família"],
      "steps": [
        "Perguntar se os alunos conhecem alguém da família ou do bairro que veio de outra cidade ou país.",
        "Explicar de forma simples o que é ser migrante.",
        "Conversar sobre como essas pessoas contribuem para o bairro (comidas, costumes, construções).",
        "Pedir que os alunos perguntem em casa se algum familiar migrou e de onde veio.",
        "Compartilhar as respostas na aula seguinte e localizar as origens citadas em um mapa simples."
      ]
    },
    {
      "theme": "Costumes e tradições da nossa comunidade",
      "curriculumCode": "EF02GE02",
      "description": "Comparar costumes e tradições de diferentes populações e grupos sociais do bairro ou comunidade, reconhecendo a importância do respeito à diversidade étnica, geográfica e cultural.",
      "materials": ["Objetos, imagens ou comidas típicas trazidas de casa (opcional)", "Cartolina para mural"],
      "steps": [
        "Perguntar aos alunos sobre tradições de família (comidas, festas, músicas, religiões).",
        "Convidar cada aluno a contar brevemente uma tradição de sua família ou comunidade.",
        "Registrar as tradições citadas em um mural coletivo da turma.",
        "Conversar sobre como essas diferenças enriquecem a comunidade.",
        "Reforçar a importância do respeito às diferenças étnicas e culturais entre colegas."
      ]
    },
    {
      "theme": "Jeitos diferentes de viver: quilombolas, indígenas e caiçaras",
      "curriculumCode": "EF02GE04",
      "description": "Reconhecer semelhanças e diferenças nos hábitos de povos como quilombolas, assentados, indígenas e caiçaras, nas relações com a natureza e no modo de viver em diferentes lugares e tempos.",
      "materials": ["Imagens ou vídeos curtos sobre comunidades quilombolas, indígenas e caiçaras", "Mapa do Brasil (opcional)"],
      "steps": [
        "Apresentar imagens de diferentes comunidades tradicionais brasileiras (quilombolas, indígenas, caiçaras).",
        "Conversar sobre onde cada grupo costuma viver e como se relaciona com a natureza.",
        "Comparar semelhanças e diferenças entre os modos de vida apresentados e o modo de vida dos alunos.",
        "Registrar no caderno uma característica de cada grupo estudado.",
        "Reforçar o respeito à diversidade de modos de vida no Brasil."
      ]
    },
    {
      "theme": "O bairro mudou? Comparando fotos de ontem e hoje",
      "curriculumCode": "EF02GE05",
      "description": "Identificar e analisar mudanças e permanências na paisagem dos lugares de vivência, comparando os elementos de um mesmo lugar em diferentes tempos.",
      "materials": ["Fotos antigas e atuais do bairro ou da escola (impressas ou projetadas)", "Folha dividida em 'antes' e 'depois'"],
      "steps": [
        "Mostrar fotos antigas e atuais de um mesmo lugar do bairro ou da escola.",
        "Perguntar o que os alunos reconhecem e o que mudou nas imagens.",
        "Listar coletivamente no quadro o que permaneceu igual e o que foi transformado.",
        "Pedir que os alunos desenhem o 'antes' e o 'depois' de um lugar que conhecem.",
        "Conversar sobre possíveis causas das mudanças observadas (novas construções, árvores cortadas, etc.)."
      ]
    },
    {
      "theme": "Dia e noite: nossas rotinas",
      "curriculumCode": "EF02GE06",
      "description": "Relacionar o dia e a noite a diferentes tipos de atividades sociais, como horário escolar, comercial e de sono, a partir da experiência familiar, escolar e da comunidade.",
      "materials": ["Cartolina ou folha grande dividida ao meio (dia/noite)", "Figuras ou desenhos de atividades cotidianas"],
      "steps": [
        "Perguntar aos alunos o que costumam fazer de dia e o que fazem à noite.",
        "Organizar um cartaz dividido em duas colunas: 'atividades do dia' e 'atividades da noite'.",
        "Distribuir figuras de atividades (escola, mercado aberto, dormir, jantar) para os alunos colarem na coluna certa.",
        "Discutir por que certos serviços (escola, mercado, banco) funcionam só de dia.",
        "Registrar no caderno duas atividades que cada aluno faz de dia e duas que faz à noite."
      ]
    },
    {
      "theme": "Formas de representar um lugar",
      "curriculumCode": "EF02GE08",
      "description": "Reconhecer diferentes formas de representação, como desenhos, mapas mentais, maquetes, croquis, globo, plantas, mapas temáticos, cartas e imagens aéreas e de satélite, representando componentes da paisagem dos lugares de vivência.",
      "materials": ["Exemplos impressos de mapa, globo, planta e foto aérea", "Folha em branco e lápis de cor"],
      "steps": [
        "Mostrar exemplos variados de representações: desenho, mapa, globo, planta, foto aérea.",
        "Perguntar quais diferenças os alunos percebem entre essas formas de representar um lugar.",
        "Explicar brevemente para que serve cada tipo de representação.",
        "Pedir que cada aluno escolha uma forma e represente a escola ou sua casa.",
        "Expor os trabalhos e comparar as diferentes formas escolhidas pela turma."
      ]
    },
    {
      "theme": "Olhando de cima: fotos aéreas e mapas da escola",
      "curriculumCode": "EF02GE09",
      "description": "Identificar objetos e lugares de vivência, como escola e moradia, a partir da leitura de imagens aéreas, fotografias e mapas.",
      "materials": ["Imagem aérea ou de satélite da escola/bairro (impressa)", "Mapa simples da região"],
      "steps": [
        "Mostrar uma imagem aérea ou de satélite da escola ou do bairro.",
        "Pedir que os alunos tentem identificar a escola, ruas e outros pontos conhecidos na imagem.",
        "Comparar a imagem aérea com um mapa simples do mesmo lugar.",
        "Discutir como fica diferente ver um lugar de cima em vez de de dentro dele.",
        "Pedir que os alunos circulem, na imagem, um lugar que reconhecem e digam o nome dele."
      ]
    },
    {
      "theme": "Onde as coisas estão: frente, atrás, direita e esquerda",
      "curriculumCode": "EF02GE10",
      "description": "Aplicar princípios de localização e posição de objetos usando referenciais espaciais como frente e atrás, esquerda e direita, em cima e embaixo, dentro e fora, em representações da sala de aula, da escola e de trajetos.",
      "materials": ["Objetos da sala de aula", "Folha de papel para desenho simples da sala"],
      "steps": [
        "Revisar oralmente os referenciais espaciais (frente/atrás, direita/esquerda, em cima/embaixo, dentro/fora).",
        "Pedir que os alunos posicionem objetos na sala seguindo comandos ('coloque o lápis em cima da mesa').",
        "Desenhar coletivamente um esquema simples da sala de aula no quadro.",
        "Pedir que cada aluno desenhe sua carteira e indique um colega que fica à direita e outro à esquerda.",
        "Fazer uma roda de conversa comparando os desenhos e corrigindo posições trocadas."
      ]
    },
    {
      "theme": "A importância do solo e da água",
      "curriculumCode": "EF02GE11A",
      "description": "Reconhecer a importância do solo e da água para as diferentes formas de vida, tomando como referência o próprio lugar de vivência e comparando com outros lugares.",
      "materials": ["Amostra de terra (opcional)", "Copo com água", "Imagens de plantações e nascentes"],
      "steps": [
        "Perguntar aos alunos para que servem o solo e a água no dia a dia.",
        "Mostrar imagens de plantações, animais e pessoas usando solo e água.",
        "Conversar sobre o que aconteceria se faltasse água ou solo fértil.",
        "Comparar o uso do solo e da água no lugar onde os alunos vivem com outro lugar (campo ou outra cidade).",
        "Registrar no caderno um desenho mostrando um uso do solo e um uso da água."
      ]
    },
    {
      "theme": "Recursos naturais e seus usos",
      "curriculumCode": "EF02GE13*",
      "description": "Identificar os recursos naturais de diferentes lugares e discutir as diferentes formas de sua utilização.",
      "materials": ["Imagens de recursos naturais (água, madeira, solo, sol, vento)", "Cartaz para classificação"],
      "steps": [
        "Apresentar imagens de recursos naturais e perguntar se os alunos os reconhecem.",
        "Discutir para que servem esses recursos no dia a dia (água para beber, madeira para móveis, sol para energia).",
        "Organizar um cartaz classificando os recursos por tipo de uso.",
        "Pedir que os alunos citem um recurso natural usado em sua própria casa.",
        "Fechar com uma conversa sobre a importância de usar os recursos naturais com cuidado."
      ]
    },
    {
      "theme": "Maquete da minha sala de aula",
      "curriculumCode": "EF02GE14*",
      "description": "Elaborar maquete da sala de aula e/ou de residência e de outros lugares de vivência.",
      "materials": ["Caixas de papelão pequenas", "Tampinhas, palitos e sucata", "Cola e tesoura sem ponta"],
      "steps": [
        "Observar coletivamente os móveis e espaços da sala de aula.",
        "Dividir a turma em grupos para representar diferentes partes da sala com sucata.",
        "Montar a maquete posicionando mesas, quadro e porta de forma correspondente à sala real.",
        "Comparar a maquete com a sala verdadeira, ajustando posições.",
        "Apresentar a maquete pronta explicando o que cada peça representa."
      ]
    },
    {
      "theme": "Meu primeiro mapa com legenda",
      "curriculumCode": "EF02GE15*",
      "description": "Elaborar mapas de lugares de vivência, utilizando recursos como legenda e título.",
      "materials": ["Folha de papel", "Lápis de cor", "Modelo simples de legenda"],
      "steps": [
        "Explicar o que é um título e uma legenda em um mapa, com exemplo simples no quadro.",
        "Combinar símbolos para elementos comuns (árvore, casa, escola).",
        "Pedir que os alunos desenhem um mapa simples do trajeto de casa até a escola.",
        "Orientar a inclusão de um título e de uma legenda com os símbolos usados.",
        "Trocar os mapas entre colegas para tentar 'ler' o mapa do outro usando a legenda."
      ]
    }
  ],
  historia: [
    {
      "theme": "Lugares de encontro no bairro",
      "curriculumCode": "EF02HI01A",
      "description": "Reconhecimento dos espaços lúdicos e de sociabilidade do bairro, identificando o que aproxima e o que separa as pessoas em diferentes grupos sociais ou de parentesco.",
      "materials": ["Papel para desenho", "Lápis de cor ou giz de cera"],
      "steps": [
        "Perguntar aos alunos quais lugares do bairro eles frequentam para brincar ou encontrar outras pessoas (praça, quadra, igreja, salão).",
        "Listar na lousa os lugares citados.",
        "Conversar sobre quem costuma ir a cada lugar e por quê.",
        "Discutir o que aproxima as pessoas (amizade, família, interesses) e o que às vezes as separa (horários, regras, distância).",
        "Pedir que cada aluno desenhe seu lugar de encontro preferido no bairro.",
        "Compartilhar os desenhos em roda, comentando as semelhanças entre os lugares escolhidos."
      ]
    },
    {
      "theme": "Cuidando dos espaços públicos",
      "curriculumCode": "EF02HI01B",
      "description": "Identificação de formas de preservar os espaços públicos do bairro e da comunidade, reconhecendo a responsabilidade coletiva sobre eles.",
      "materials": ["Cartolina", "Canetinhas"],
      "steps": [
        "Mostrar fotos de uma praça bem cuidada e de uma praça suja ou danificada.",
        "Perguntar o que diferencia as duas situações.",
        "Listar coletivamente atitudes que ajudam a preservar espaços públicos (não sujar, não pichar, cuidar das plantas, respeitar os equipamentos).",
        "Dividir a turma em duplas para criar um cartaz com uma dica de preservação.",
        "Expor os cartazes no mural da sala ou do corredor da escola."
      ]
    },
    {
      "theme": "Respeito e convivência nos espaços públicos",
      "curriculumCode": "EF02HI01C",
      "description": "Reconhecimento de como as pessoas se relacionam nos espaços públicos, valorizando o respeito ao próximo e ao espaço como base para o convívio saudável na comunidade.",
      "materials": ["Situações-problema impressas ou lidas em voz alta"],
      "steps": [
        "Ler para a turma pequenas situações do cotidiano em espaços públicos (fila no ônibus, brincadeira na praça, uso do parquinho).",
        "Perguntar, para cada situação, se houve respeito ou desrespeito e por quê.",
        "Discutir em roda quais atitudes tornam o convívio mais agradável para todos.",
        "Propor uma dramatização rápida em duplas mostrando uma atitude respeitosa em um espaço público.",
        "Fechar com um combinado coletivo de convivência para os espaços que a turma frequenta."
      ]
    },
    {
      "theme": "Papéis sociais na minha comunidade",
      "curriculumCode": "EF02HI02",
      "description": "Identificação e descrição de práticas e papéis sociais exercidos pelas pessoas em diferentes comunidades, como profissões e funções do dia a dia.",
      "materials": ["Imagens de pessoas exercendo diferentes ocupações (opcional)"],
      "steps": [
        "Perguntar aos alunos quem são as pessoas que trabalham ou atuam na comunidade deles (professor, agente de saúde, comerciante, líder religioso).",
        "Listar na lousa os papéis citados e o que cada um faz.",
        "Conversar sobre como esses papéis ajudam a comunidade a funcionar.",
        "Pedir que cada aluno escolha um papel social e desenhe essa pessoa em ação.",
        "Compartilhar os desenhos, explicando a importância de cada papel escolhido."
      ]
    },
    {
      "theme": "O que mudou, o que ficou: pertencimento e memória",
      "curriculumCode": "EF02HI03",
      "description": "Seleção de situações cotidianas que evidenciem mudança, pertencimento e memória, com respeito e valorização dos diferentes modos de vida.",
      "materials": ["Caderno de registro"],
      "steps": [
        "Pedir que os alunos pensem em algo que mudou na rua ou no bairro deles (uma loja nova, uma casa reformada, uma praça reformada).",
        "Pedir também que pensem em algo que continua igual há muito tempo.",
        "Compartilhar em roda as mudanças e permanências observadas.",
        "Conversar sobre como diferentes famílias vivem de formas diferentes, e que isso deve ser respeitado.",
        "Registrar no caderno uma mudança e uma permanência percebidas na comunidade."
      ]
    },
    {
      "theme": "Objetos que contam histórias",
      "curriculumCode": "EF02HI04",
      "description": "Seleção de objetos pessoais e de grupos próximos ao convívio do aluno, compreendendo sua função, seu uso e seu significado.",
      "materials": ["Um objeto pessoal trazido de casa (pedido com antecedência)"],
      "steps": [
        "Pedir que cada aluno traga um objeto pessoal que tenha um significado especial para ele ou para a família.",
        "Em roda, cada aluno mostra o objeto e explica para que ele serve e por que é importante.",
        "Perguntar à turma se alguém tem objetos parecidos e por quê.",
        "Discutir coletivamente como os objetos ajudam a lembrar de momentos e pessoas.",
        "Registrar no caderno um desenho do objeto com uma frase sobre seu significado."
      ]
    },
    {
      "theme": "Documentos que contam histórias",
      "curriculumCode": "EF02HI05",
      "description": "Seleção de documentos pessoais e de grupos próximos ao convívio do aluno, compreendendo sua função, seu uso e seu significado.",
      "materials": ["Cópias ou exemplos ilustrativos de documentos (certidão de nascimento, carteirinha da escola)"],
      "steps": [
        "Mostrar exemplos de documentos que as pessoas costumam ter (certidão de nascimento, carteirinha de identificação escolar, comprovante de residência).",
        "Perguntar se os alunos sabem para que servem esses documentos.",
        "Explicar de forma simples por que certos documentos são guardados com cuidado.",
        "Conversar sobre documentos de grupos aos quais o aluno pertence (carteirinha de time, de igreja, de clube).",
        "Propor que cada aluno desenhe um documento importante para sua família e explique sua função."
      ]
    },
    {
      "theme": "Histórias contadas de boca em boca",
      "curriculumCode": "EF02HI05B",
      "description": "Reconhecimento e valorização da tradição oral como meio de transmitir conhecimentos entre gerações e preservar a memória da família e da comunidade.",
      "materials": ["Nenhum material obrigatório"],
      "steps": [
        "Perguntar se os alunos já ouviram histórias contadas por avós, pais ou vizinhos mais velhos.",
        "Explicar que, antes de existirem livros e vídeos, muitas histórias eram passadas de boca em boca.",
        "Pedir que cada aluno pense em uma história, causo ou ditado popular que ouviu de alguém da família.",
        "Convidar alguns alunos a contar suas histórias para a turma.",
        "Combinar a tarefa de perguntar em casa uma história antiga da família para trazer na próxima aula."
      ]
    },
    {
      "theme": "Antes, durante e depois: organizando o tempo",
      "curriculumCode": "EF02HI06",
      "description": "Identificação e organização temporal de fatos da vida cotidiana, usando noções como antes, durante, ao mesmo tempo e depois, além dos conceitos de presente, passado e futuro.",
      "materials": ["Tiras de papel com desenhos de uma rotina embaralhada"],
      "steps": [
        "Apresentar uma sequência de imagens de uma rotina (acordar, tomar café, ir à escola, voltar para casa) fora de ordem.",
        "Pedir que os alunos organizem as tiras na ordem correta.",
        "Introduzir as palavras antes, durante, ao mesmo tempo e depois usando a sequência montada.",
        "Pedir que cada aluno conte um fato do seu dia usando uma dessas palavras.",
        "Fazer uma roda final relacionando os fatos ao presente, passado e futuro (o que já aconteceu, o que está acontecendo, o que vai acontecer)."
      ]
    },
    {
      "theme": "Como as pessoas mediam o tempo antigamente",
      "curriculumCode": "EF02HI07A",
      "description": "Identificação das diferentes maneiras de sentir, perceber e medir o tempo ao longo da história, comparando formas antigas e atuais.",
      "materials": ["Imagens de relógio de sol, ampulheta e relógio atual (opcional)"],
      "steps": [
        "Perguntar aos alunos como eles sabem que horas são hoje em dia.",
        "Contar que antigamente as pessoas usavam o sol, a sombra, o canto do galo ou uma ampulheta para perceber o tempo.",
        "Mostrar imagens desses instrumentos antigos, se disponíveis.",
        "Conversar sobre como a percepção do tempo pode ser diferente dependendo do lugar e da época.",
        "Propor um desenho comparando uma forma antiga e uma forma atual de perceber o tempo."
      ]
    },
    {
      "theme": "Relógio e calendário: marcadores do tempo",
      "curriculumCode": "EF02HI07B",
      "description": "Identificação e utilização de diferentes marcadores do tempo presentes na comunidade, como relógio e calendário.",
      "materials": ["Um relógio de parede ou de papel", "Um calendário do mês atual"],
      "steps": [
        "Mostrar um relógio e um calendário para a turma.",
        "Perguntar para que servem e onde os alunos os veem no dia a dia (em casa, na escola, no celular dos pais).",
        "Praticar a leitura de horas simples no relógio e de datas no calendário.",
        "Marcar no calendário da sala um evento importante do mês (aniversário, feriado, passeio).",
        "Pedir que os alunos registrem no caderno a data do dia usando o calendário como referência."
      ]
    },
    {
      "theme": "Pesquisando a história da minha família e comunidade",
      "curriculumCode": "EF02HI08",
      "description": "Pesquisa, organização e compilação de histórias da família e/ou da comunidade registradas em diferentes fontes, como relatos orais, fotografias e objetos.",
      "materials": ["Ficha de pesquisa simples para casa", "Cola e tesoura (para montar um mural, se possível)"],
      "steps": [
        "Explicar que histórias podem ser encontradas em fotos, objetos, músicas e conversas com familiares.",
        "Enviar uma ficha simples para casa pedindo que a família ajude a registrar uma história ou lembrança.",
        "Na aula seguinte, pedir que cada aluno compartilhe o que descobriu.",
        "Organizar as histórias coletadas em um mural ou painel da turma, agrupando por tipo de fonte (foto, objeto, relato).",
        "Conversar sobre como diferentes fontes ajudam a contar a mesma história de formas diferentes."
      ]
    },
    {
      "theme": "Guardar ou descartar: por que preservamos objetos",
      "curriculumCode": "EF02HI09",
      "description": "Identificação de objetos e documentos pessoais ligados à própria experiência na família e/ou comunidade, discutindo por que alguns são preservados e outros são descartados.",
      "materials": ["Exemplos de objetos guardados por diferentes motivos (opcional)"],
      "steps": [
        "Perguntar se em casa existe algum objeto guardado há muito tempo e por que ele não foi jogado fora.",
        "Listar coletivamente motivos para guardar objetos (lembrança, uso ainda necessário, valor sentimental).",
        "Perguntar também por que às vezes descartamos objetos (não servem mais, estão quebrados, não têm mais uso).",
        "Propor uma roda de conversa comparando os objetos guardados por diferentes famílias da turma.",
        "Registrar no caderno um objeto guardado em casa e o motivo pelo qual ele foi preservado."
      ]
    },
    {
      "theme": "Os trabalhos da minha comunidade",
      "curriculumCode": "EF02HI10",
      "description": "Identificação das diferentes formas de trabalho existentes na comunidade em que o aluno vive, reconhecendo seus significados, especificidades e importância.",
      "materials": ["Nenhum material obrigatório"],
      "steps": [
        "Perguntar aos alunos quais trabalhos existem na comunidade onde moram.",
        "Listar na lousa os diferentes trabalhos citados, do comércio a serviços públicos.",
        "Conversar sobre a importância de cada trabalho para o funcionamento da comunidade.",
        "Pedir que cada aluno escolha um trabalho e desenhe a pessoa exercendo essa função.",
        "Compartilhar os desenhos, destacando a diversidade de trabalhos presentes na comunidade."
      ]
    },
    {
      "theme": "O trabalho e seus impactos no ambiente",
      "curriculumCode": "EF02HI11A",
      "description": "Identificação de impactos causados no ambiente pela ação humana, incluindo as diferentes formas de trabalho existentes na comunidade em que o aluno vive.",
      "materials": ["Imagens de atividades de trabalho e seus impactos ambientais (opcional)"],
      "steps": [
        "Retomar os trabalhos da comunidade discutidos anteriormente.",
        "Perguntar se algum desses trabalhos pode gerar lixo, poluição ou outro impacto no ambiente.",
        "Listar coletivamente exemplos de impactos positivos e negativos observados no bairro.",
        "Conversar sobre como esses impactos afetam as pessoas e a natureza ao redor.",
        "Registrar no caderno um exemplo de impacto ambiental relacionado a algum trabalho da comunidade."
      ]
    },
    {
      "theme": "Criando um projeto para cuidar do ambiente",
      "curriculumCode": "EF02HI11B",
      "description": "Criação de projetos de intervenção voltados aos impactos causados no meio ambiente pelo ser humano, aplicáveis no ambiente escolar e familiar.",
      "materials": ["Cartolina", "Canetinhas ou lápis de cor"],
      "steps": [
        "Retomar os impactos ambientais discutidos na aula anterior.",
        "Formar pequenos grupos e propor que cada um pense em uma pequena ação para reduzir um desses impactos na escola ou em casa.",
        "Orientar os grupos a desenhar ou escrever sua ideia de projeto em uma cartolina (por exemplo: separar o lixo, economizar água, reaproveitar papel).",
        "Cada grupo apresenta sua ideia para a turma.",
        "Combinar com a turma a aplicação de uma das ideias na sala de aula durante a semana."
      ]
    }
  ]
};
