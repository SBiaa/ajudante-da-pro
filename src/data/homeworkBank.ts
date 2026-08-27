// Banco de lições de casa: para cada tema do banco de temas (src/data/themeBank.ts) de
// Matemática e Língua Portuguesa, uma folha de exercícios extra para o aluno levar para casa,
// vinculada ao mesmo "theme" exato usado lá. Complementa (não substitui) a folha de "Atividade"
// em sala (src/data/activityBank.ts) — mesmo formato, exercícios diferentes, pensados para o
// aluno resolver sozinho ou com a família. Curada manualmente, sem geração via IA em tempo real,
// mesmo espírito do banco de temas.

import { ActivityEntry } from "@/types/activity";

export type HomeworkSubject = "matematica" | "lingua-portuguesa";

export const HOMEWORK_BANK: Record<HomeworkSubject, ActivityEntry[]> = {
  matematica: [
    {
      theme: "Números no dia a dia",
      exercises: [
        { kind: "fill-blank", instruction: "Escreva o número correspondente a cada nome:", items: ["doze = ___", "vinte = ___", "trinta e quatro = ___", "cinquenta = ___"] },
        { kind: "options", instruction: "Em qual situação o número indica uma quantidade, e não uma posição?", options: ["5ª fileira da sala de aula", "2º lugar na fila", "6 cadernos na mochila", "1º colocado na corrida"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer um número de telefone ou o número de um documento. Escreva os algarismos que você ouviu:", lines: 2 },
        { kind: "draw", instruction: "Desenhe três objetos da sua casa que tenham números escritos neles, como um controle remoto ou uma embalagem:" },
      ],
    },
    {
      theme: "Comparando números",
      exercises: [
        { kind: "fill-blank", instruction: "Compare os números usando os sinais > (maior), < (menor) ou = (igual):", items: ["62 ___ 26", "89 ___ 89", "34 ___ 43", "71 ___ 17"] },
        { kind: "options", instruction: "Qual desses números é o menor?", options: ["54", "45", "50", "15"] },
        { kind: "word-select", instruction: "Circule os números que são menores que 30:", items: ["12", "45", "28", "67", "19", "81"] },
        { kind: "lines", instruction: "Escreva um número maior que 60 e outro menor que 20:", lines: 2 },
      ],
    },
    {
      theme: "Compondo e decompondo números",
      gradeYear: "2-ano",
      exercises: [
        { kind: "fill-blank", instruction: "Decomponha os números em dezenas (D) e unidades (U):", items: ["48 = ___ D + ___ U", "63 = ___ D + ___ U", "91 = ___ D + ___ U", "77 = ___ D + ___ U"] },
        { kind: "fill-blank", instruction: "Componha o número a partir da decomposição:", items: ["3 D + 7 U = ___", "8 D + 2 U = ___", "5 D + 9 U = ___"] },
        { kind: "draw", instruction: "Desenhe o número 34 usando bolinhas agrupadas em dezenas e unidades:" },
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher um número entre 10 e 99. Escreva esse número decomposto em dezenas e unidades:", lines: 2 },
      ],
    },
    {
      theme: "Contando coleções de objetos",
      exercises: [
        { kind: "draw", instruction: "Desenhe uma coleção com 18 objetos (bolinhas, estrelas ou quadradinhos):" },
        { kind: "fill-blank", instruction: "Conte e escreva quantos objetos há em cada grupo:", items: ["■ ■ ■ ■ ■ ■ ■ ■ ■ = ___", "♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ ♦ = ___"] },
        { kind: "options", instruction: "Você recebeu um pote cheio de botões para contar. Qual é a melhor forma de fazer isso sem errar?", options: ["Agrupar de 10 em 10 e contar os grupos", "Contar todos de uma vez, bem rápido", "Adivinhar sem contar", "Contar só a metade do pote"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa separar um punhado de grãos (feijão, milho ou arroz). Conte quantos são e escreva o total:", lines: 2 },
      ],
    },
    {
      theme: "Contagem de 2 em 2, de 5 em 5, de 10 em 10",
      exercises: [
        { kind: "fill-blank", instruction: "Continue a contagem de 2 em 2, começando do 8:", items: ["8, 10, 12, ___, ___, ___, ___"] },
        { kind: "fill-blank", instruction: "Continue a contagem de 5 em 5, começando do 15:", items: ["15, 20, 25, ___, ___, ___"] },
        { kind: "fill-blank", instruction: "Continue a contagem de 10 em 10, de trás para frente, começando do 100:", items: ["100, 90, 80, ___, ___, ___"] },
        { kind: "word-select", instruction: "Circule os números que aparecem quando contamos de 10 em 10 a partir do 0:", items: ["10", "15", "20", "24", "30", "35", "40"] },
        { kind: "lines", instruction: "Suba ou desça uma escada da sua casa contando de 2 em 2. Escreva até qual número você chegou:", lines: 2 },
      ],
    },
    {
      theme: "Continhas de mais e de menos",
      exercises: [
        { kind: "fill-blank", instruction: "Resolva as adições:", items: ["31 + 26 = ___", "45 + 38 = ___", "62 + 19 = ___"] },
        { kind: "fill-blank", instruction: "Resolva as subtrações:", items: ["55 - 27 = ___", "80 - 34 = ___", "91 - 45 = ___"] },
        { kind: "lines", instruction: "Arme e resolva a conta 68 + 24, mostrando o passo a passo:", lines: 4 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer dois números entre 20 e 50. Escreva a soma e a diferença entre eles:", lines: 3 },
      ],
    },
    {
      theme: "Maior, menor ou igual?",
      exercises: [
        { kind: "fill-blank", instruction: "Escreva o número que é um a mais e um a menos:", items: ["___ , 47 , ___", "___ , 60 , ___", "___ , 88 , ___"] },
        { kind: "word-select", instruction: "Circule o número que está entre 60 e 70:", items: ["58", "65", "72", "80", "63"] },
        { kind: "options", instruction: "Qual afirmação está correta sobre 82 e 28?", options: ["82 é maior que 28", "82 é menor que 28", "82 é igual a 28", "Não dá para comparar"] },
        { kind: "lines", instruction: "Escreva um número que seja maior que 70 e menor que 80:", lines: 1 },
      ],
    },
    {
      theme: "Resolvendo problemas de juntar e separar",
      exercises: [
        { kind: "lines", instruction: "Leia e resolva: Lucas tinha 32 figurinhas. Ganhou mais 27 figurinhas de um amigo. Com quantas figurinhas ele ficou?", lines: 4 },
        { kind: "fill-blank", instruction: "Complete a operação que resolve o problema acima:", items: ["32 + 27 = ___"] },
        { kind: "lines", instruction: "Leia e resolva: Marina tinha 50 bolinhas de gude. Deu 23 para uma amiga. Com quantas bolinhas ela ficou?", lines: 4 },
        { kind: "fill-blank", instruction: "Complete a operação que resolve este segundo problema:", items: ["50 - 23 = ___"] },
      ],
    },
    {
      theme: "Problemas de multiplicar e de dividir",
      exercises: [
        { kind: "lines", instruction: "Leia e resolva: em cada caixa há 5 lápis. São 4 caixas. Quantos lápis há ao todo?", lines: 4 },
        { kind: "draw", instruction: "Desenhe 4 grupos com 5 bolinhas em cada grupo e escreva quantas bolinhas há ao todo:" },
        { kind: "fill-blank", instruction: "Complete:", items: ["3 + 3 + 3 + 3 = ___", "O dobro de 8 é ___", "A metade de 14 é ___", "O triplo de 4 é ___"] },
        { kind: "lines", instruction: "Leia e resolva: 18 balas serão divididas igualmente entre 3 crianças. Quantas balas cada uma recebe?", lines: 3 },
      ],
    },
    {
      theme: "Usando os sinais +, – e =",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com o sinal + ou -:", items: ["6 ___ 7 = 13", "25 ___ 8 = 17", "10 ___ 10 = 20", "40 ___ 15 = 25"] },
        { kind: "fill-blank", instruction: "Escreva o número que falta para a igualdade ficar correta:", items: ["9 + ___ = 16", "___ - 5 = 11", "20 = 12 + ___"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer dois números entre 1 e 20. Escreva uma conta de adição e uma de subtração usando esses números com os sinais +, - e =:", lines: 2 },
      ],
    },
    {
      theme: "Sequências numéricas crescentes e decrescentes",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a sequência crescente:", items: ["4, 8, 12, ___, ___, ___"] },
        { kind: "fill-blank", instruction: "Complete a sequência decrescente:", items: ["70, 60, 50, ___, ___, ___"] },
        { kind: "word-select", instruction: "Circule os números que continuam a sequência 5, 15, 25...:", items: ["30", "35", "40", "45", "50", "36"] },
        { kind: "lines", instruction: "Invente sua própria sequência decrescente com 5 números e escreva a regra que você usou:", lines: 2 },
      ],
    },
    {
      theme: "Descobrindo o padrão da sequência",
      exercises: [
        { kind: "fill-blank", instruction: "Observe a sequência e escreva os dois próximos números:", items: ["3, 6, 9, 12, ___, ___"] },
        { kind: "options", instruction: "Qual é o padrão da sequência 2, 4, 6, 8, 10?", options: ["Soma 1 a cada número", "Soma 2 a cada número", "Soma 3 a cada número", "Multiplica por 3"] },
        { kind: "lines", instruction: "Explique com suas palavras qual é o padrão (regra) da sequência 20, 15, 10, 5:", lines: 3 },
      ],
    },
    {
      theme: "Onde estou na escola?",
      exercises: [
        { kind: "draw", instruction: "Desenhe um mapa simples do seu quarto ou da sala da sua casa, marcando onde fica a cama ou o sofá, a porta e a janela:" },
        { kind: "word-select", instruction: "Circule as palavras que indicam posição ou localização:", items: ["ATRÁS", "PULANDO", "EM CIMA", "VERMELHO", "DENTRO", "AO LADO"] },
        { kind: "options", instruction: "Se você está de frente para a televisão e alguém está à sua direita, essa pessoa está:", options: ["Entre você e a televisão", "Do lado direito de quem está de frente para a televisão", "Atrás da televisão", "Dentro do sofá"] },
        { kind: "lines", instruction: "Descreva com palavras como chegar do seu quarto até a cozinha da sua casa:", lines: 3 },
      ],
    },
    {
      theme: "Desenhando croquis",
      exercises: [
        { kind: "draw", instruction: "Faça um croqui (desenho simples) do caminho da sua casa até a casa de um parente ou amigo, marcando pontos de referência:" },
        { kind: "lines", instruction: "Escreva os pontos de referência (mercado, praça, farmácia etc.) que aparecem no seu croqui:", lines: 3 },
        { kind: "options", instruction: "Um croqui serve para:", options: ["Mostrar de forma simples um caminho ou lugar", "Fazer uma conta de matemática", "Contar uma história", "Cantar uma música"] },
      ],
    },
    {
      theme: "Formas geométricas espaciais no dia a dia",
      exercises: [
        { kind: "fill-blank", instruction: "Escreva o nome da forma geométrica espacial parecida com cada objeto:", items: ["Dado de jogar: ___________", "Chapéu de festa: ___________", "Rolo de papel higiênico: ___________", "Laranja: ___________"] },
        { kind: "word-select", instruction: "Circule os nomes de figuras geométricas espaciais:", items: ["ESFERA", "RETÂNGULO", "CUBO", "CÍRCULO", "PIRÂMIDE", "CILINDRO"] },
        { kind: "draw", instruction: "Desenhe três objetos da sua casa que lembram formas geométricas espaciais (cubo, esfera, cone ou cilindro):" },
      ],
    },
    {
      theme: "Formas geométricas planas",
      exercises: [
        { kind: "word-select", instruction: "Circule os nomes de figuras geométricas planas:", items: ["RETÂNGULO", "ESFERA", "CÍRCULO", "CUBO", "TRIÂNGULO", "QUADRADO"] },
        { kind: "fill-blank", instruction: "Complete quantos lados tem cada figura:", items: ["Triângulo: ___ lados", "Retângulo: ___ lados", "Círculo: ___ lados", "Losango: ___ lados"] },
        { kind: "draw", instruction: "Desenhe um retângulo, um losango e um círculo:" },
        { kind: "lines", instruction: "Explique uma diferença entre o círculo e o triângulo:", lines: 2 },
      ],
    },
    {
      theme: "Provável, improvável ou impossível?",
      exercises: [
        { kind: "options", instruction: "\"Vai chover flores do céu\" é um evento:", options: ["Provável", "Improvável", "Impossível", "Certo"] },
        { kind: "word-select", instruction: "Circule as situações prováveis de acontecer amanhã:", items: ["O SOL NASCER", "UM CACHORRO FALAR", "CHOVER", "UMA PESSOA VOAR SEM AJUDA", "VOCÊ IR À ESCOLA"] },
        { kind: "lines", instruction: "Escreva um evento impossível e um evento certo de acontecer:", lines: 2 },
      ],
    },
    {
      theme: "Lendo tabelas e gráficos de barras",
      gradeYear: "2-ano",
      exercises: [
        { kind: "lines", instruction: "Observe: em uma pesquisa, 6 crianças escolheram maçã, 9 escolheram banana e 4 escolheram uva. Qual foi a fruta mais escolhida? Explique como você descobriu:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete com base na pesquisa acima:", items: ["Maçã: ___ crianças", "Banana: ___ crianças", "Uva: ___ crianças", "Total de crianças: ___"] },
        { kind: "draw", instruction: "Desenhe um gráfico de barras simples representando os dados da pesquisa (maçã, banana, uva):" },
      ],
    },
    {
      theme: "Pesquisa da turma em gráficos",
      exercises: [
        { kind: "lines", instruction: "Escolha um tema para pesquisar com as pessoas da sua casa (por exemplo, cor preferida) e escreva 3 opções de resposta:", lines: 3 },
        { kind: "fill-blank", instruction: "Depois de perguntar para as pessoas da sua casa, registre os resultados:", items: ["Opção 1: ___________ — ___ votos", "Opção 2: ___________ — ___ votos", "Opção 3: ___________ — ___ votos"] },
        { kind: "draw", instruction: "Desenhe uma tabela ou gráfico de colunas com os resultados da sua pesquisa em casa:" },
      ],
    },
    {
      theme: "Medindo comprimento, capacidade e massa",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com a unidade de medida correta (metro, litro ou quilograma):", items: ["O comprimento de uma rua é medido em ___________", "O suco de uma jarra é medido em ___________", "O peso de uma pessoa é medido em ___________"] },
        { kind: "options", instruction: "Qual instrumento usamos para medir o comprimento de um objeto?", options: ["Balança", "Fita métrica", "Copo medidor", "Relógio"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a medir com os pés (passos) o comprimento de um cômodo. Escreva quantos passos você contou:", lines: 3 },
      ],
    },
    {
      theme: "Moedas e cédulas do Brasil",
      exercises: [
        { kind: "fill-blank", instruction: "Complete:", items: ["R$ 4 = ___ moedas de R$ 1", "R$ 20 = ___ cédulas de R$ 10"] },
        { kind: "fill-blank", instruction: "Some os valores:", items: ["3 moedas de R$ 1 + 1 moeda de R$ 0,50 = R$ ___", "1 cédula de R$ 20 + 1 cédula de R$ 5 = R$ ___"] },
        { kind: "word-select", instruction: "Circule as moedas que existem no Brasil:", items: ["R$ 0,05", "R$ 0,25", "R$ 0,50", "R$ 1", "R$ 3", "R$ 1,50"] },
        { kind: "lines", instruction: "Você tem R$ 50 e quer comprar um livro de R$ 34. Quanto vai receber de troco? Explique como pensou:", lines: 3 },
      ],
    },
    {
      theme: "Lendo horas no relógio digital",
      exercises: [
        { kind: "fill-blank", instruction: "Escreva por extenso o horário mostrado no relógio digital:", items: ["8:00 = ___________", "13:30 = ___________", "18:00 = ___________"] },
        { kind: "options", instruction: "No relógio digital 21:00, que horas são?", options: ["Nove horas da noite", "Nove horas da manhã", "Vinte e uma da manhã", "Nove minutos"] },
        { kind: "lines", instruction: "Escreva o horário em que você janta e o horário em que você vai dormir:", lines: 2 },
      ],
    },
    {
      theme: "Usando o calendário da sala",
      exercises: [
        { kind: "fill-blank", instruction: "Observe um calendário em casa e complete:", items: ["Hoje é dia ___ do mês de ___________", "Este mês tem ___ dias", "O primeiro dia deste mês caiu em um ___________"] },
        { kind: "word-select", instruction: "Circule os dias do fim de semana:", items: ["SEGUNDA-FEIRA", "SÁBADO", "QUARTA-FEIRA", "DOMINGO", "SEXTA-FEIRA", "TERÇA-FEIRA"] },
        { kind: "lines", instruction: "Peça para alguém da sua família contar uma data importante (aniversário, viagem) e escreva em qual mês ela acontece:", lines: 2 },
        { kind: "draw", instruction: "Desenhe um calendário simples de uma semana e marque com um X o dia de hoje:" },
      ],
    },
    {
      theme: "Jogo de quebra-cabeça",
      exercises: [
        { kind: "draw", instruction: "Desenhe um quebra-cabeça de 6 peças que você inventou:", note: "Se quiser, recorte depois e monte com alguém da família." },
        { kind: "options", instruction: "Qual peça de um quebra-cabeça costuma ser mais fácil de encontrar primeiro?", options: ["Uma peça de canto, com duas bordas retas", "Uma peça do meio, sem bordas retas", "Uma peça de qualquer cor", "Uma peça embaralhada com as outras"] },
        { kind: "lines", instruction: "Se você tiver um quebra-cabeça em casa, monte-o com a família. Escreva quantas peças ele tem e quanto tempo vocês levaram:", lines: 2 },
        { kind: "lines", instruction: "Escreva uma dica que você daria para alguém que está começando a montar um quebra-cabeça:", lines: 2 },
      ],
    },
    {
      theme: "Torre de Hanói simplificada",
      exercises: [
        { kind: "draw", instruction: "Desenhe 3 discos de tamanhos diferentes empilhados do maior (embaixo) para o menor (em cima):" },
        { kind: "lines", instruction: "Em casa, empilhe 3 objetos de tamanhos diferentes (tampas, copos ou botões) do maior para o menor. Escreva quais objetos você usou:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete:", items: ["Para mover 2 discos de um pino para outro, são necessários ___ movimentos"] },
        { kind: "lines", instruction: "Explique por que é mais difícil mover 3 discos do que mover 2 discos:", lines: 2 },
      ],
    },
    {
      theme: "Para onde nos movemos na escola",
      exercises: [
        { kind: "word-select", instruction: "Circule as palavras que indicam direção ou sentido:", items: ["PARA CIMA", "VERMELHO", "PARA BAIXO", "PARA A DIREITA", "CADEIRA", "PARA A ESQUERDA"] },
        { kind: "lines", instruction: "Escreva o caminho que você faz do seu quarto até a cozinha da sua casa, usando palavras como direita, esquerda e para frente:", lines: 3 },
        { kind: "options", instruction: "Se você está de frente para a porta da sua casa e dá meia-volta, passa a ficar de frente para:", options: ["O que estava atrás de você", "O teto", "O chão", "A mesma porta"] },
        { kind: "draw", instruction: "Desenhe, visto de cima, um cômodo da sua casa mostrando onde ficam os móveis:" },
      ],
    },
    {
      theme: "Figuras geométricas espaciais: parecidas ou diferentes?",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com \"tem\" ou \"não tem\":", items: ["A pirâmide ___________ pontas.", "A esfera ___________ faces planas.", "O bloco retangular ___________ faces planas."] },
        { kind: "word-select", instruction: "Circule os objetos de casa parecidos com um cilindro:", items: ["LATA DE MILHO", "CAIXA DE SAPATO", "ROLO DE PAPEL TOALHA", "BOLA", "CANO DE PVC", "LIVRO"] },
        { kind: "draw", instruction: "Procure em casa um objeto parecido com uma pirâmide e um objeto parecido com um cubo. Desenhe os dois:" },
        { kind: "lines", instruction: "Escreva uma diferença entre o cilindro e o cone:", lines: 2 },
      ],
    },
    {
      theme: "O que os gráficos estão nos contando?",
      exercises: [
        { kind: "lines", instruction: "Observe: em um gráfico sobre frutas preferidas, \"banana\" tem 8 votos, \"maçã\" tem 6 votos e \"uva\" tem 11 votos. Escreva uma conclusão sobre esse gráfico:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete com base nos dados acima:", items: ["Fruta mais votada: ___________", "Fruta menos votada: ___________", "Diferença entre uva e maçã: ___ votos"] },
        { kind: "options", instruction: "Em um gráfico de barras, quanto maior a barra:", options: ["Maior é a quantidade representada", "Menor é a quantidade representada", "Mais bonita é a cor", "Mais rápido foi contado"] },
      ],
    },
    {
      theme: "Resolvendo problemas com comprimento, capacidade e massa",
      exercises: [
        { kind: "lines", instruction: "Leia e resolva: um barbante mede 60 cm. Pedro usou 25 cm para amarrar um pacote. Quantos centímetros de barbante sobraram?", lines: 3 },
        { kind: "fill-blank", instruction: "Complete a operação do problema do barbante:", items: ["60 - 25 = ___"] },
        { kind: "lines", instruction: "Leia e resolva: uma caixa de leite tem 1 litro. Foram usados 300 ml para fazer um bolo. Aproximadamente quanto leite ainda resta na caixa? Explique seu raciocínio:", lines: 3 },
        { kind: "lines", instruction: "Peça para alguém em casa te ajudar a pesar uma fruta ou um pacote de comida na balança da cozinha e anote quantos gramas ou quilos ela pesa:", lines: 2 },
      ],
    },
    {
      theme: "Quantos dias faltam?",
      exercises: [
        { kind: "lines", instruction: "Se hoje é dia 5 e a festa junina da escola é dia 23, quantos dias faltam? Explique como você contou:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete usando o calendário:", items: ["De quarta a domingo são ___ dias", "De hoje até daqui a 2 semanas são ___ dias"] },
        { kind: "lines", instruction: "Pergunte a alguém da sua família a data de aniversário dele e calcule, aproximadamente, quantos dias faltam a partir de hoje:", lines: 2 },
      ],
    },
    {
      theme: "Explicando como resolvi o problema",
      exercises: [
        { kind: "lines", instruction: "Resolva o problema: Ana tinha 45 balas e deu 18 para o irmão. Depois de resolver, explique com suas palavras todo o caminho que você fez para chegar à resposta:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete a operação que você usou:", items: ["45 - 18 = ___"] },
        { kind: "lines", instruction: "Você poderia ter resolvido esse problema de outro jeito? Explique:", lines: 2 },
      ],
    },
    {
      theme: "Inventando perguntas para um problema",
      exercises: [
        { kind: "lines", instruction: "Leia a situação: \"No armário da sala há 28 livros e 14 revistas.\" Invente uma pergunta matemática sobre essa situação:", lines: 2 },
        { kind: "lines", instruction: "Agora resolva a pergunta que você inventou e explique como chegou à resposta:", lines: 3 },
        { kind: "fill-blank", instruction: "Se sua pergunta foi \"quantos materiais há ao todo?\", verifique a resposta:", items: ["28 + 14 = ___"] },
      ],
    },
    {
      theme: "Quantificando coleções de jeitos diferentes",
      exercises: [
        { kind: "draw", instruction: "Desenhe uma coleção de 16 objetos organizados em grupos de 4:" },
        { kind: "fill-blank", instruction: "Complete usando diferentes estratégias de contagem para o número 36:", items: ["Contando de 1 em 1: ___ objetos", "Contando de 2 em 2: ___ pares", "Contando de 10 em 10: 3 grupos de 10 e ___ a mais"] },
        { kind: "lines", instruction: "Escolha uma coleção de objetos que você tem em casa (botões, tampinhas, lápis) e conte quantos são de 5 em 5. Escreva o resultado:", lines: 2 },
      ],
    },
    {
      theme: "Continuando o padrão da sequência",
      exercises: [
        { kind: "fill-blank", instruction: "Descubra o número que falta na sequência:", items: ["3, 6, ___, 12, 15", "20, ___, 30, 35, 40", "8, 11, 14, ___, 20"] },
        { kind: "word-select", instruction: "Circule os números que dariam continuidade à sequência 4, 8, 12...:", items: ["14", "15", "16", "18", "20", "22"] },
        { kind: "lines", instruction: "Explique qual é a regra (padrão) da sequência 8, 11, 14, 17, 20:", lines: 2 },
      ],
    },
    {
      theme: "Decompondo números para calcular",
      exercises: [
        { kind: "fill-blank", instruction: "Use a decomposição para calcular 47 + 32:", items: ["47 = 40 + 7", "32 = 30 + 2", "40 + 30 = ___", "7 + 2 = ___", "47 + 32 = ___"] },
        { kind: "fill-blank", instruction: "Agora calcule decompondo 69 - 24:", items: ["69 = 60 + 9", "24 = 20 + 4", "60 - 20 = ___", "9 - 4 = ___", "69 - 24 = ___"] },
        { kind: "lines", instruction: "Explique com suas palavras o que significa \"decompor\" um número:", lines: 2 },
      ],
    },
    {
      theme: "Investigando a poluição perto de nós",
      exercises: [
        { kind: "lines", instruction: "Em uma pesquisa da turma, 15 crianças disseram que separam o lixo em casa, e 9 disseram que não separam. Quantas crianças participaram da pesquisa? Escreva a conta e a resposta:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete com os dados da pesquisa:", items: ["Separam o lixo: ___ crianças", "Não separam: ___ crianças", "Total: ___ crianças"] },
        { kind: "lines", instruction: "Converse com sua família sobre como o lixo é separado (ou não) na sua casa e escreva o que você descobriu:", lines: 2 },
        { kind: "draw", instruction: "Desenhe um gráfico de barras com os resultados da pesquisa sobre separar o lixo:" },
      ],
    },
    {
      theme: "Batalha de cartas: quem tem o maior número?",
      exercises: [
        { kind: "lines", instruction: "Se você tiver cartas numeradas ou um baralho em casa, jogue uma batalha de cartas com alguém da família. Escreva com quem você jogou:", lines: 2, note: "Se não tiver cartas, pode escrever números em pedaços de papel e usar como cartas." },
        { kind: "fill-blank", instruction: "Compare os números usando > ou <:", items: ["56 ___ 65", "8 ___ 80", "91 ___ 19", "100 ___ 98"] },
        { kind: "options", instruction: "Se as duas cartas tiverem o mesmo número de algarismos, para saber qual é maior devemos comparar primeiro:", options: ["O algarismo mais à esquerda", "O algarismo mais à direita", "A cor da carta", "O tamanho da carta"] },
        { kind: "lines", instruction: "Você tirou a carta 74 e seu adversário tirou a carta 47. Quem venceu a rodada? Explique como você descobriu:", lines: 2 },
      ],
    },
    {
      theme: "Quantas figurinhas eu tenho a mais?",
      exercises: [
        { kind: "lines", instruction: "Leia e resolva: Rafael tem 41 figurinhas e Sofia tem 27. Quantas figurinhas Rafael tem a mais que Sofia?", lines: 3 },
        { kind: "fill-blank", instruction: "Complete a operação:", items: ["41 - 27 = ___"] },
        { kind: "lines", instruction: "Agora invente uma situação parecida com dois colegas e quantidades diferentes de figurinhas:", lines: 3 },
      ],
    },
    {
      theme: "Quanto pesa cada bicho de estimação?",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com uma estimativa de peso para cada animal (em quilogramas):", items: ["Um coelho pesa aproximadamente ___ kg", "Um cachorro pequeno pesa aproximadamente ___ kg", "Um cavalo pesa aproximadamente ___ kg"] },
        { kind: "word-select", instruction: "Circule o animal que provavelmente é o mais leve:", items: ["CAVALO", "PASSARINHO", "CACHORRO GRANDE", "VACA"] },
        { kind: "lines", instruction: "Se você tiver um bicho de estimação em casa, peça ajuda para descobrir ou estimar quanto ele pesa e escreva o resultado:", lines: 2 },
      ],
    },
    {
      theme: "Fazendo compras na feirinha da sala",
      exercises: [
        { kind: "fill-blank", instruction: "Imagine uma lojinha de brinquedos. Some o total da compra:", items: ["Carrinho R$ 5 + Bola R$ 3 = R$ ___", "Boneca R$ 7 + Livro R$ 2 = R$ ___"] },
        { kind: "word-select", instruction: "Circule as moedas que você usaria para pagar exatamente R$ 0,60:", items: ["R$ 0,50", "R$ 0,25", "R$ 0,10", "R$ 1,00", "R$ 0,05"] },
        { kind: "lines", instruction: "Você tem uma cédula de R$ 20 e comprou um item de R$ 12. Quanto de troco você deve receber? Explique como calculou:", lines: 3 },
        { kind: "lines", instruction: "Peça para alguém em casa mostrar uma nota fiscal ou lista de compras do mercado e escreva o preço de um item:", lines: 2 },
      ],
    },
    {
      theme: "Qual é a mais provável de acontecer?",
      exercises: [
        { kind: "lines", instruction: "Em um saco há 7 bolinhas amarelas e 3 bolinhas verdes. Se você tirar uma bolinha sem olhar, qual cor é mais provável de sair? Explique por quê:", lines: 3 },
        { kind: "options", instruction: "Em um sorteio com 8 balas de morango e 2 balas de menta, tirar uma bala de menta é um evento:", options: ["Pouco provável", "Muito provável", "Impossível", "Certo"] },
        { kind: "word-select", instruction: "Circule as situações impossíveis em um jogo de dados comum (números de 1 a 6):", items: ["TIRAR O NÚMERO 4", "TIRAR O NÚMERO 8", "TIRAR O NÚMERO 1", "TIRAR O NÚMERO -1"] },
      ],
    },
    {
      theme: "Pesquisa: qual é o animal de estimação preferido da turma?",
      exercises: [
        { kind: "fill-blank", instruction: "Pergunte a 5 pessoas da sua família ou vizinhos qual é o animal de estimação preferido e registre:", items: ["Cachorro: ___ votos", "Gato: ___ votos", "Outro animal: ___ votos"] },
        { kind: "draw", instruction: "Desenhe um gráfico de barras com os resultados da sua pesquisa sobre animais de estimação:" },
        { kind: "lines", instruction: "Escreva uma frase contando qual foi o animal preferido entre as pessoas que você entrevistou:", lines: 2 },
      ],
    },
    {
      theme: "Seguindo o padrão das profissões",
      exercises: [
        { kind: "fill-blank", instruction: "Observe o padrão e complete quem vem a seguir:", items: ["Bombeiro, Dentista, Bombeiro, Dentista, ___________, ___________"] },
        { kind: "word-select", instruction: "Circule as profissões que aparecem na sequência bombeiro, dentista, bombeiro, dentista...:", items: ["BOMBEIRO", "DENTISTA", "MÉDICO", "PROFESSOR", "COZINHEIRO", "PINTOR"] },
        { kind: "lines", instruction: "Explique qual é a regra (padrão) usada na sequência de profissões acima:", lines: 2 },
        { kind: "lines", instruction: "Pergunte a alguém da sua família qual é a profissão dele e escreva:", lines: 2 },
      ],
    },
    {
      theme: "Números que são código: a etiqueta da vacina",
      exercises: [
        { kind: "options", instruction: "O número escrito na placa de um carro representa:", options: ["Um código de identificação, não uma quantidade", "Uma quantidade de peças do carro", "Uma soma", "Uma data"] },
        { kind: "word-select", instruction: "Circule as situações em que o número funciona como código (não indica quantidade):", items: ["NÚMERO DO TELEFONE", "7 BOLACHAS", "NÚMERO DA PLACA DO CARRO", "4 CADEIRAS", "NÚMERO DA CASA"] },
        { kind: "lines", instruction: "Explique a diferença entre o número 3 em \"3 cadernos\" e o número 3 no número de um apartamento (apartamento 3):", lines: 3 },
        { kind: "fill-blank", instruction: "Escreva um exemplo de número que funciona como código no seu dia a dia:", items: ["Exemplo: ___________"] },
      ],
    },
    {
      theme: "Lendo, escrevendo e comparando números naturais",
      exercises: [
        { kind: "fill-blank", instruction: "Escreva por extenso os números:", items: ["234 = ______", "508 = ______", "961 = ______"] },
        { kind: "fill-blank", instruction: "Compare os números usando os sinais > (maior), < (menor) ou = (igual):", items: ["345 ___ 354", "600 ___ 599", "128 ___ 128"] },
        { kind: "lines", instruction: "Coloque em ordem crescente os números: 452, 89, 601, 305.", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer um número entre 100 e 999. Escreva esse número por extenso e depois escreva o número que vem antes e o que vem depois dele:", lines: 3 },
      ],
    },
    {
      theme: "Compondo e decompondo números",
      gradeYear: "3-ano",
      exercises: [
        { kind: "fill-blank", instruction: "Decomponha os números em centenas (C), dezenas (D) e unidades (U):", items: ["347 = ___ C + ___ D + ___ U", "582 = ___ C + ___ D + ___ U", "916 = ___ C + ___ D + ___ U"] },
        { kind: "fill-blank", instruction: "Componha o número a partir da decomposição:", items: ["2 C + 5 D + 8 U = ___", "6 C + 0 D + 3 U = ___"] },
        { kind: "draw", instruction: "Desenhe o número 234 usando quadrados (centenas), palitos (dezenas) e bolinhas (unidades):" },
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher um número entre 100 e 999. Escreva esse número decomposto em centenas, dezenas e unidades:", lines: 2 },
      ],
    },
    {
      theme: "Contagem oral em ordem crescente e decrescente",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a contagem em ordem crescente, de 5 em 5:", items: ["10, 15, 20, ___, ___, 35"] },
        { kind: "fill-blank", instruction: "Complete a contagem em ordem decrescente, de 10 em 10:", items: ["100, 90, 80, ___, ___, 50"] },
        { kind: "lines", instruction: "Conte em voz alta de 3 em 3 começando do 0 até 30. Escreva aqui os números que você falou:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher um número entre 20 e 50. Conte em voz alta, junto com essa pessoa, de 1 em 1 até esse número e depois volte contando ao contrário até o 0. Escreva o número escolhido:", lines: 2 },
      ],
    },
    {
      theme: "Comparando números: maior, menor, dobro e metade",
      exercises: [
        { kind: "fill-blank", instruction: "Escreva o dobro de cada número:", items: ["6 → ___", "9 → ___", "15 → ___"] },
        { kind: "fill-blank", instruction: "Escreva a metade de cada número:", items: ["8 → ___", "20 → ___", "36 → ___"] },
        { kind: "options", instruction: "Circule a resposta certa: 45 está entre...", options: ["40 e 50", "30 e 40", "50 e 60"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer dois números diferentes. Escreva qual é o maior e qual é o menor:", lines: 2 },
      ],
    },
    {
      theme: "Números na reta numérica",
      exercises: [
        { kind: "draw", instruction: "Desenhe uma reta numérica de 0 a 20 e marque com um X os números 4, 11 e 17:" },
        { kind: "fill-blank", instruction: "Observe a reta numérica de 10 em 10 e complete os números que faltam:", items: ["0, 10, ___, 30, ___, 50"] },
        { kind: "lines", instruction: "Escreva quais números ficam entre 45 e 50 na reta numérica:", lines: 1 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer um número entre 0 e 100. Desenhe uma pequena reta numérica e marque onde esse número fica:", lines: 3 },
      ],
    },
    {
      theme: "Calculando adições e subtrações com estratégias próprias",
      exercises: [
        { kind: "lines", instruction: "Resolva a conta 38 + 25 do jeito que você preferir (pode desenhar, usar os dedos ou fazer de cabeça). Explique como pensou:", lines: 3 },
        { kind: "fill-blank", instruction: "Calcule de cabeça, arredondando os números:", items: ["49 + 30 = ___", "98 - 20 = ___", "51 + 19 = ___"] },
        { kind: "lines", instruction: "Resolva a conta 72 - 35 explicando o passo a passo que você usou:", lines: 3 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer dois números entre 20 e 80. Calcule a soma e a diferença entre eles, usando a estratégia que você quiser:", lines: 3 },
      ],
    },
    {
      theme: "Resolvendo problemas de juntar, separar e comparar",
      exercises: [
        { kind: "lines", instruction: "Na sua casa há 8 copos na estante e alguém guardou mais 5 copos. Quantos copos há agora? Resolva e escreva a resposta:", lines: 3 },
        { kind: "lines", instruction: "Você tinha 15 figurinhas e deu 6 para um amigo. Com quantas figurinhas você ficou? Resolva:", lines: 3 },
        { kind: "lines", instruction: "Ana tem 24 lápis e Pedro tem 17. Quantos lápis a mais Ana tem que Pedro? Resolva:", lines: 3 },
        { kind: "lines", instruction: "Peça para alguém da sua casa inventar um problema de juntar ou separar com objetos da casa. Escreva o problema e resolva:", lines: 4 },
      ],
    },
    {
      theme: "Adição e subtração com reserva e recurso (conta armada)",
      exercises: [
        { kind: "lines", instruction: "Arme e resolva a conta 267 + 158, mostrando o passo a passo:", lines: 4 },
        { kind: "lines", instruction: "Arme e resolva a conta 342 - 175, mostrando o passo a passo:", lines: 4 },
        { kind: "fill-blank", instruction: "Resolva as contas armadas:", items: ["456 + 389 = ___", "703 - 268 = ___"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer dois números de três algarismos. Arme e resolva a soma entre eles:", lines: 4 },
      ],
    },
    {
      theme: "Fatos básicos da multiplicação por 2, 3, 4 e 5",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a tabuada do 2:", items: ["2 x 3 = ___", "2 x 6 = ___", "2 x 9 = ___"] },
        { kind: "fill-blank", instruction: "Complete a tabuada do 5:", items: ["5 x 2 = ___", "5 x 4 = ___", "5 x 7 = ___"] },
        { kind: "fill-blank", instruction: "Resolva as multiplicações:", items: ["3 x 6 = ___", "4 x 8 = ___"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher um número entre 2 e 5 e outro número entre 1 e 10. Multiplique os dois números e escreva a conta:", lines: 2 },
      ],
    },
    {
      theme: "Problemas de multiplicação: proporcionalidade e arranjo retangular",
      exercises: [
        { kind: "lines", instruction: "Cada pacote de biscoito tem 4 unidades. Se você tem 5 pacotes, quantos biscoitos há ao todo? Resolva:", lines: 3 },
        { kind: "draw", instruction: "Desenhe um arranjo retangular com 3 fileiras de 4 bolinhas cada e escreva a multiplicação que representa esse desenho:" },
        { kind: "lines", instruction: "Uma caixa de ovos tem 2 fileiras com 6 ovos em cada fileira. Quantos ovos há na caixa? Resolva:", lines: 3 },
        { kind: "lines", instruction: "Peça para alguém da sua casa organizar objetos da cozinha (como talheres) em fileiras iguais. Conte quantas fileiras e quantos objetos por fileira, e escreva a multiplicação:", lines: 3 },
      ],
    },
    {
      theme: "Usando os sinais das operações matemáticas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as sentenças com o sinal correto (+, -, x, : ou =):", items: ["8 ___ 3 = 11", "20 ___ 4 = 5", "6 ___ 2 = 12"] },
        { kind: "word-select", instruction: "Circule apenas os sinais de multiplicação nesta lista:", items: ["+", "x", "-", "x", ":", "="] },
        { kind: "lines", instruction: "Escreva uma sentença matemática usando o sinal de mais (+) e outra usando o sinal de menos (-):", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer dois números. Escreva uma sentença de multiplicação com esses números, usando o sinal x:", lines: 2 },
      ],
    },
    {
      theme: "Regularidades em sequências numéricas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a sequência, somando sempre 4:", items: ["3, 7, 11, ___, ___, 23"] },
        { kind: "fill-blank", instruction: "Complete a sequência, subtraindo sempre 6:", items: ["50, 44, 38, ___, ___, 20"] },
        { kind: "lines", instruction: "Explique qual é a regra (o padrão) da sequência 2, 5, 8, 11, 14:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher um número para somar sempre. Crie uma sequência com 5 números usando essa regra:", lines: 3 },
      ],
    },
    {
      theme: "Descobrindo padrões em sequências",
      exercises: [
        { kind: "draw", instruction: "Observe o padrão de figuras: círculo, quadrado, círculo, quadrado... Desenhe os próximos 4 elementos da sequência:" },
        { kind: "fill-blank", instruction: "Descubra o padrão e complete:", items: ["1, 3, 5, 7, ___, ___", "10, 20, 30, ___, ___"] },
        { kind: "lines", instruction: "Explique com suas palavras qual é o padrão da sequência 5, 10, 15, 20:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa criar uma sequência com um padrão (de figuras ou números). Desenhe ou escreva a sequência e descubra o padrão:", lines: 3 },
      ],
    },
    {
      theme: "A ideia de igualdade em sentenças matemáticas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete para que as duas sentenças fiquem iguais (com o mesmo resultado):", items: ["4 + 6 = 3 + ___", "12 - 5 = ___ + 3", "8 + 2 = 15 - ___"] },
        { kind: "options", instruction: "Marque as sentenças que são verdadeiras:", options: ["5 + 5 = 4 + 6", "9 - 3 = 4 + 2", "7 + 1 = 10 - 1"] },
        { kind: "lines", instruction: "Escreva duas sentenças de adição diferentes que tenham o resultado 10:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer um número. Escreva duas contas diferentes (uma de mais e uma de menos) que deem esse número como resultado:", lines: 3 },
      ],
    },
    {
      theme: "Localizando objetos no espaço com maquetes e croquis",
      exercises: [
        { kind: "draw", instruction: "Desenhe um croqui simples do seu quarto (ou da sala) visto de cima, marcando onde fica a cama (ou o sofá), a porta e uma janela:" },
        { kind: "lines", instruction: "Observe o desenho que você fez. Escreva o que fica à direita da porta e o que fica à esquerda:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa esconder um objeto pequeno. Escreva as pistas de localização que essa pessoa te der (perto de, longe de, ao lado de, em cima de):", lines: 3 },
      ],
    },
    {
      theme: "Descrevendo a movimentação de objetos no espaço",
      exercises: [
        { kind: "lines", instruction: "Escreva o caminho que você faz da sua cama até a porta da cozinha, usando palavras como para frente, para a direita, para a esquerda:", lines: 3 },
        { kind: "draw", instruction: "Desenhe uma seta mostrando o caminho de uma pessoa que sai do quarto e vai até a cozinha, na planta da sua casa:" },
        { kind: "lines", instruction: "Peça para alguém da sua casa te dar instruções de movimento (como três passos para frente e depois vire à direita) para chegar a um objeto escondido. Escreva as instruções que essa pessoa deu:", lines: 3 },
      ],
    },
    {
      theme: "Elementos das figuras geométricas planas e espaciais",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com o número de lados de cada figura plana:", items: ["Triângulo tem ___ lados", "Quadrado tem ___ lados", "Retângulo tem ___ lados"] },
        { kind: "lines", instruction: "Procure uma caixa (como de sapato ou de creme dental) na sua casa. Conte e escreva quantas faces, arestas e vértices ela tem:", lines: 3 },
        { kind: "draw", instruction: "Desenhe um triângulo, um quadrado e um círculo, e marque os vértices de cada um com um pontinho:" },
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar um objeto redondo (como uma bola ou uma lata). Escreva o nome da figura espacial parecida com esse objeto:", lines: 2 },
      ],
    },
    {
      theme: "Comparando figuras planas e espaciais",
      exercises: [
        { kind: "fill-blank", instruction: "Complete relacionando a figura espacial com a figura plana parecida:", items: ["Cubo é parecido com o ___", "Esfera é parecida com o ___", "Bloco retangular é parecido com o ___"] },
        { kind: "lines", instruction: "Procure em casa um objeto parecido com um cubo e outro parecido com uma esfera. Escreva quais objetos você encontrou:", lines: 2 },
        { kind: "draw", instruction: "Desenhe um quadrado ao lado de um cubo, mostrando a diferença entre eles:" },
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher três objetos redondos, retangulares ou cúbicos. Escreva o nome de cada objeto e da figura geométrica parecida com ele:", lines: 3 },
      ],
    },
    {
      theme: "Planificações de figuras espaciais",
      exercises: [
        { kind: "lines", instruction: "Pegue uma caixa de papelão vazia (como caixa de sabonete ou de remédio) e, com cuidado, abra-a com ajuda de um adulto até ficar plana. Desenhe ou descreva o que você viu:", lines: 3 },
        { kind: "options", instruction: "Marque quais figuras espaciais têm faces planificadas em formato de círculo:", options: ["Cilindro", "Cubo", "Cone", "Pirâmide"] },
        { kind: "draw", instruction: "Desenhe como ficaria a planificação (o molde aberto) de uma caixa em formato de cubo:" },
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a encontrar uma embalagem em formato de cilindro (como de sabonete líquido). Escreva o nome do objeto encontrado:", lines: 2 },
      ],
    },
    {
      theme: "Explorando pirâmides, cubos, cones, cilindros e esferas",
      exercises: [
        { kind: "fill-blank", instruction: "Escreva o nome da figura espacial de cada objeto:", items: ["Bola de futebol = ___", "Casquinha de sorvete = ___", "Dado de jogo = ___", "Lata de milho = ___"] },
        { kind: "lines", instruction: "Procure pela casa um objeto em formato de pirâmide (ou o mais parecido que encontrar). Escreva qual objeto foi:", lines: 2 },
        { kind: "draw", instruction: "Desenhe um cone, um cilindro e uma esfera:" },
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher três objetos redondos. Diga se cada um é mais parecido com um cilindro, um cone ou uma esfera, e escreva:", lines: 3 },
      ],
    },
    {
      theme: "O que é mais provável? Explorando o acaso",
      exercises: [
        { kind: "options", instruction: "Se você jogar uma moeda para cima, marque o que pode acontecer:", options: ["Dar cara", "Dar coroa", "Ficar rosa"] },
        { kind: "lines", instruction: "Pegue um dado (ou uma moeda) em casa. Jogue 10 vezes e anote quantas vezes deu cada resultado:", lines: 4 },
        { kind: "lines", instruction: "É mais provável, menos provável ou impossível chover pedra amanhã? E é mais provável ou menos provável escurecer à noite? Escreva sua resposta:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher entre duas coisas do dia a dia (como se vai chover ou fazer sol amanhã) e explicar qual é mais provável de acontecer. Escreva o que essa pessoa disse:", lines: 3 },
      ],
    },
    {
      theme: "Lendo tabelas e gráficos de barras",
      gradeYear: "3-ano",
      exercises: [
        { kind: "lines", instruction: "Pergunte para 4 pessoas da sua casa qual é a fruta preferida delas. Anote os nomes e as respostas em uma tabela:", lines: 5 },
        { kind: "draw", instruction: "Com os dados que você coletou, desenhe um gráfico de barras simples mostrando quantas pessoas escolheram cada fruta:" },
        { kind: "lines", instruction: "Observando o gráfico que você fez, escreva qual fruta foi a mais escolhida:", lines: 2 },
      ],
    },
    {
      theme: "Fazendo pesquisa e organizando dados em tabelas",
      exercises: [
        { kind: "lines", instruction: "Escolha um tema para pesquisar com sua família, por exemplo: qual o programa de TV preferido de cada um. Anote o nome de cada pessoa e a resposta dela:", lines: 5 },
        { kind: "fill-blank", instruction: "Organize os dados da sua pesquisa em uma tabela simples, com duas colunas: Nome e Resposta.", items: ["___  |  ___", "___  |  ___", "___  |  ___"] },
        { kind: "lines", instruction: "Depois de organizar a tabela, escreva uma conclusão sobre a sua pesquisa:", lines: 2 },
      ],
    },
    {
      theme: "Interpretando e descrevendo dados de tabelas e gráficos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar a conta de luz ou de água (ou qualquer tabela com números que tiver em casa). Escreva quais informações essa tabela mostra:", lines: 3 },
        { kind: "lines", instruction: "Observe o gráfico de barras que você fez em outra atividade (ou peça para alguém desenhar um). Escreva qual foi o maior valor e qual foi o menor:", lines: 2 },
        { kind: "lines", instruction: "Escreva uma conclusão sobre os dados que você observou, como se estivesse explicando para um colega:", lines: 3 },
      ],
    },
    {
      theme: "Resolvendo problemas com dinheiro",
      exercises: [
        { kind: "lines", instruction: "Se um lápis custa R$ 2,00 e uma borracha custa R$ 1,50, quanto você gastaria comprando os dois? Resolva:", lines: 3 },
        { kind: "lines", instruction: "Você tem uma nota de R$ 10,00 e compra um brinquedo de R$ 6,00. Quanto de troco você recebe? Resolva:", lines: 3 },
        { kind: "fill-blank", instruction: "Escreva de quantas formas diferentes você pode formar R$ 1,00 usando moedas de 50 centavos, 25 centavos e 10 centavos:", items: ["___ + ___ = R$ 1,00", "___ + ___ + ___ = R$ 1,00"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa separar algumas moedas ou cédulas de brinquedo (ou reais de verdade, com supervisão). Some os valores e escreva o total:", lines: 3 },
      ],
    },
    {
      theme: "Relações entre dia, semana, mês e ano no calendário",
      exercises: [
        { kind: "lines", instruction: "Observe um calendário da sua casa (ou peça para alguém mostrar o do celular). Escreva quantos dias tem o mês atual:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete:", items: ["Uma semana tem ___ dias", "Um ano tem ___ meses", "Um mês tem cerca de ___ semanas"] },
        { kind: "lines", instruction: "Escreva a data do seu aniversário e quantos meses faltam para ele a partir de hoje:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer uma data importante da família (como um aniversário). Consulte o calendário e escreva em que dia da semana ela cai neste ano:", lines: 2 },
      ],
    },
    {
      theme: "Lendo horas e minutos no relógio",
      exercises: [
        { kind: "draw", instruction: "Observe um relógio da sua casa (de parede, de pulso ou do celular). Desenhe o mostrador marcando a hora que é agora:" },
        { kind: "fill-blank", instruction: "Complete os horários:", items: ["7 horas e 30 minutos também pode ser escrito como ___", "meio-dia é ___ horas"] },
        { kind: "lines", instruction: "Escreva o horário em que você acorda e o horário em que você vai dormir. Depois calcule quantas horas você dorme:", lines: 3 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer um horário. Desenhe como ficariam os ponteiros de um relógio nesse horário:", lines: 2 },
      ],
    },
    {
      theme: "Escolhendo o instrumento certo para medir",
      exercises: [
        { kind: "fill-blank", instruction: "Escreva qual instrumento você usaria para medir cada coisa: régua, fita métrica, relógio ou copo medidor:", items: ["A altura da porta: ___", "O tempo de um banho: ___", "A quantidade de água de um copo: ___", "O comprimento de um lápis: ___"] },
        { kind: "lines", instruction: "Procure em casa dois instrumentos de medida diferentes (régua, fita métrica, balança, copo medidor, relógio...). Escreva quais você encontrou e para que servem:", lines: 3 },
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a escolher o instrumento certo para medir a altura de uma porta. Escreva qual instrumento vocês escolheram e por quê:", lines: 2 },
      ],
    },
    {
      theme: "Medindo comprimentos com metro, centímetro e milímetro",
      exercises: [
        { kind: "lines", instruction: "Use uma régua ou fita métrica para medir o comprimento de uma mesa da sua casa. Escreva a medida:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete com metro (m), centímetro (cm) ou milímetro (mm):", items: ["O tamanho de um lápis é medido em ___", "A altura de uma porta é medida em ___", "A espessura de uma moeda é medida em ___"] },
        { kind: "lines", instruction: "Meça o comprimento de três objetos da sua casa (um livro, um sapato e um travesseiro, por exemplo) e anote as medidas:", lines: 3 },
        { kind: "lines", instruction: "Peça para alguém da sua casa medir a sua altura com a fita métrica. Escreva quantos centímetros você tem:", lines: 2 },
      ],
    },
    {
      theme: "Medindo capacidades com litro e mililitro",
      exercises: [
        { kind: "lines", instruction: "Observe uma garrafa ou embalagem da sua casa (de suco, leite ou água). Escreva quantos litros ou mililitros ela indica:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete:", items: ["1 litro tem ___ mililitros", "Meio litro tem ___ mililitros"] },
        { kind: "lines", instruction: "Use um copo para encher uma garrafa de 1 litro com água, contando quantos copos você usou. Escreva o resultado:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar duas embalagens diferentes (de bebidas ou produtos de limpeza) e comparar qual tem mais capacidade. Escreva o que vocês descobriram:", lines: 3 },
      ],
    },
    {
      theme: "Medindo massa com quilograma e grama",
      exercises: [
        { kind: "lines", instruction: "Observe embalagens de alimentos da sua casa (arroz, açúcar, macarrão). Escreva quantos quilos ou gramas cada uma indica:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete:", items: ["1 quilograma tem ___ gramas", "Meio quilo tem ___ gramas"] },
        { kind: "lines", instruction: "Se houver uma balança em casa, pese uma fruta ou legume e anote o resultado. Se não houver, escreva o peso indicado em uma embalagem:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa comparar o peso de dois objetos com as mãos, dizendo qual parece mais pesado. Escreva os dois objetos e qual é mais pesado:", lines: 2 },
      ],
    },
    {
      theme: "Criando e mudando regras de um jogo",
      exercises: [
        { kind: "lines", instruction: "Escolha um jogo que você conhece (como jogo da velha, dama ou um jogo de cartas). Escreva as regras principais desse jogo:", lines: 4 },
        { kind: "lines", instruction: "Invente uma nova regra para esse jogo, sem deixar ele fácil demais nem impossível de jogar. Escreva a nova regra:", lines: 3 },
        { kind: "lines", instruction: "Jogue esse jogo com a regra nova com alguém da sua casa. Escreva o que essa pessoa achou da mudança:", lines: 2 },
      ],
    },
    {
      theme: "Estratégias para vencer um jogo",
      exercises: [
        { kind: "lines", instruction: "Escolha um jogo (como jogo da velha ou dama) e jogue uma partida com alguém da sua casa. Escreva quem venceu:", lines: 2 },
        { kind: "lines", instruction: "Escreva uma estratégia (um plano) que você usou para tentar vencer o jogo:", lines: 3 },
        { kind: "lines", instruction: "Pergunte para a pessoa com quem você jogou qual estratégia ela usou. Escreva o que ela respondeu:", lines: 2 },
        { kind: "lines", instruction: "Jogue novamente usando uma estratégia diferente. Escreva se funcionou melhor ou pior que a primeira vez:", lines: 3 },
      ],
    },
    {
      theme: "Projeto: água potável e saúde",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa quantos copos de água, em média, cada pessoa da família bebe por dia. Anote as respostas de cada pessoa:", lines: 4 },
        { kind: "lines", instruction: "Se um copo tem 200 mililitros, calcule quantos mililitros de água você bebe se tomar 5 copos por dia:", lines: 3 },
        { kind: "lines", instruction: "Observe a torneira da sua casa. Se ela ficar pingando por alguns minutos, converse com sua família sobre quanta água pode ser desperdiçada. Escreva o que vocês concluíram:", lines: 3 },
      ],
    },
    {
      theme: "Projeto: saneamento básico e saúde",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre o caminho que a água suja (do banho, da pia) percorre depois de sair da sua casa. Escreva o que essa pessoa te explicou:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete com Sim ou Não sobre hábitos que ajudam a saúde e o saneamento:", items: ["Jogar lixo na rua ajuda a evitar doenças? ___", "Lavar as mãos antes de comer ajuda a evitar doenças? ___", "Descartar o lixo em local correto ajuda o meio ambiente? ___"] },
        { kind: "lines", instruction: "Conte quantas lixeiras existem na sua casa e em quais cômodos elas ficam. Escreva o que você observou:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma forma de economizar água ou cuidar do saneamento em casa. Escreva o que essa pessoa disse:", lines: 2 },
      ],
    },
    {
      theme: "Criando problemas a partir de uma sentença matemática",
      exercises: [
        { kind: "lines", instruction: "A partir da sentença 15 + 8 = 23, invente um problema que combine com essa conta (por exemplo, sobre figurinhas, doces ou brinquedos). Escreva o problema:", lines: 4 },
        { kind: "lines", instruction: "A partir da sentença 30 - 12 = 18, invente outro problema. Escreva o problema:", lines: 4 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer uma sentença matemática (como 20 + 5 = 25). Invente um problema com essa sentença e escreva:", lines: 4 },
      ],
    },
    {
      theme: "Investigando a propriedade comutativa da adição",
      exercises: [
        { kind: "fill-blank", instruction: "Resolva as duas contas e compare os resultados:", items: ["7 + 5 = ___", "5 + 7 = ___"] },
        { kind: "fill-blank", instruction: "Resolva:", items: ["23 + 16 = ___", "16 + 23 = ___"] },
        { kind: "lines", instruction: "O que você percebeu ao comparar os resultados das contas acima? Escreva sua conclusão:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer dois números. Some-os nas duas ordens diferentes e escreva o que você descobriu:", lines: 3 },
      ],
    },
    {
      theme: "Números que marcam lugar: a fila do ônibus",
      exercises: [
        { kind: "word-select", instruction: "Circule as palavras que indicam posição (ordem), e não quantidade:", items: ["PRIMEIRO", "CINCO", "TERCEIRO", "DEZ", "ÚLTIMO", "SEGUNDO"] },
        { kind: "options", instruction: "Na fila da padaria, dona Rosa é a 6ª pessoa. Isso quer dizer que:", options: ["Ela comprou 6 pães", "Existem 6 pessoas antes dela", "Existem 5 pessoas antes dela", "Ela tem 6 anos"] },
        { kind: "lines", instruction: "Peça para as pessoas da sua casa se organizarem em fila. Escreva o nome de quem ficou em 1º e em último lugar:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete o número da posição:", items: ["Depois do 3º lugar vem o ___ lugar", "Depois do 6º lugar vem o ___ lugar", "O lugar antes do 5º é o ___ lugar", "O primeiro lugar também pode ser chamado de ___ lugar"] },
      ],
    },
    {
      theme: "Montando números com o material dourado",
      exercises: [
        { kind: "fill-blank", instruction: "Separe cada número em dezenas e unidades:", items: ["34 = ___ dezena(s) e ___ unidade(s)", "27 = ___ dezena(s) e ___ unidade(s)", "50 = ___ dezena(s) e ___ unidade(s)", "18 = ___ dezena(s) e ___ unidade(s)"] },
        { kind: "options", instruction: "No material dourado, uma barrinha comprida representa:", options: ["1 unidade", "1 dezena", "1 centena", "1 dúzia"] },
        { kind: "lines", instruction: "Em casa, junte 23 objetos pequenos (feijões, botões ou tampinhas). Separe em grupos de 10. Escreva quantos grupos de 10 e quantos sobraram:", lines: 2 },
        { kind: "draw", instruction: "Desenhe o número 42 usando barrinhas (dezenas) e bolinhas (unidades):" },
      ],
    },
    {
      theme: "Pulando na reta numérica de 2 em 2",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a sequência contando de 2 em 2:", items: ["2, 4, 6, ___, ___", "10, 12, ___, 16, ___", "20, ___, 24, ___, 28", "___, 32, 34, ___, 38"] },
        { kind: "options", instruction: "Contando de 2 em 2 a partir do 0, qual destes números NÃO aparece na sequência?", options: ["8", "14", "21", "30"] },
        { kind: "lines", instruction: "Suba uma escada ou conte os degraus de 2 em 2 em algum lugar da sua casa. Escreva até que número você chegou:", lines: 2 },
        { kind: "draw", instruction: "Desenhe uma reta numérica de 0 a 10 e marque com uma bolinha os números que aparecem ao contar de 2 em 2:" },
      ],
    },
    {
      theme: "Mais um, mais dois: comparando coleções de tampinhas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete quem tem mais um ou mais dois elementos:", items: ["Ana tem 5 tampinhas. Léo tem mais uma que Ana: Léo tem ___", "Léo tem 6 tampinhas. Bia tem mais duas que Léo: Bia tem ___", "Bia tem 8 tampinhas. Zeca tem mais uma que Bia: Zeca tem ___", "Zeca tem 9 tampinhas. Tom tem mais duas que Zeca: Tom tem ___"] },
        { kind: "options", instruction: "Se você tem 7 bolinhas de gude e seu amigo tem mais duas que você, quantas bolinhas seu amigo tem?", options: ["5", "8", "9", "14"] },
        { kind: "lines", instruction: "Junte um grupinho de tampinhas ou botões em casa. Conte quantos são e escreva quantos seriam se você tivesse mais dois:", lines: 2 },
        { kind: "draw", instruction: "Desenhe duas coleções de tampinhas: uma com 5 tampinhas e outra com mais duas do que a primeira:" },
      ],
    },
    {
      theme: "Dobro e metade com fileiras de cadeiras",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com o dobro ou a metade:", items: ["O dobro de 4 é ___", "A metade de 10 é ___", "O dobro de 6 é ___", "A metade de 8 é ___"] },
        { kind: "options", instruction: "Uma fileira da sala tem 5 cadeiras. Se outra fileira tem o dobro, quantas cadeiras ela tem?", options: ["5", "10", "15", "2"] },
        { kind: "lines", instruction: "Conte quantas cadeiras existem em uma fileira na sua casa (na mesa, por exemplo). Escreva quanto seria o dobro desse número:", lines: 2 },
        { kind: "draw", instruction: "Desenhe uma fileira com 4 cadeiras e, ao lado, outra fileira com o dobro de cadeiras:" },
      ],
    },
    {
      theme: "Construindo a sequência dos números pares",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a sequência de números pares:", items: ["0, 2, 4, ___, ___", "10, 12, ___, 16, ___", "20, ___, 24, ___, 28", "30, 32, ___, ___, 38"] },
        { kind: "options", instruction: "Qual destes números NÃO é par?", options: ["16", "23", "30", "8"] },
        { kind: "lines", instruction: "Escreva, em ordem decrescente, os números pares de 10 até 0:", lines: 2 },
        { kind: "draw", instruction: "Desenhe 6 pares de sapatos (ou meias) para mostrar os números pares 2, 4, 6, 8, 10, 12:" },
      ],
    },
    {
      theme: "Lendo o mapa da caça ao tesouro",
      exercises: [
        { kind: "options", instruction: "No mapa da caça ao tesouro, o X que marca o tesouro fica à direita da árvore. Isso quer dizer que:", options: ["O tesouro está atrás da árvore", "O tesouro está do lado direito da árvore", "O tesouro está em cima da árvore", "O tesouro está longe do mapa"] },
        { kind: "lines", instruction: "Pense no caminho de um cômodo até outro da sua casa. Descreva esse caminho com palavras, dizendo por onde se passa:", lines: 3 },
        { kind: "word-select", instruction: "Circule as palavras que indicam direção num mapa:", items: ["DIREITA", "AMARELO", "ESQUERDA", "BONITO", "EM FRENTE", "GOSTOSO"] },
        { kind: "draw", instruction: "Desenhe um mapa simples da sua casa até a casa de um vizinho ou parente, com pontos de referência:" },
      ],
    },
    {
      theme: "Sorteando bolinhas coloridas do saquinho",
      exercises: [
        { kind: "options", instruction: "Num saquinho há 9 bolinhas azuis e 1 bolinha vermelha. Ao sortear uma bolinha sem olhar, é mais provável tirar:", options: ["Uma bolinha vermelha", "Uma bolinha azul", "As duas cores com a mesma chance", "Nenhuma bolinha"] },
        { kind: "fill-blank", instruction: "Complete com PROVÁVEL ou IMPROVÁVEL:", items: ["Saquinho com 8 bolinhas verdes e 2 amarelas: tirar uma verde é ___", "Saquinho com 8 bolinhas verdes e 2 amarelas: tirar uma amarela é ___", "Saquinho só com bolinhas brancas: tirar uma branca é ___"] },
        { kind: "lines", instruction: "Em casa, separe objetos parecidos, sendo mais de uma cor. Sem olhar, pegue um. Escreva qual cor você acha mais provável de pegar e por quê:", lines: 3 },
        { kind: "draw", instruction: "Desenhe um saquinho com 7 bolinhas de uma cor e 1 bolinha de outra cor:" },
      ],
    },
    {
      theme: "Quantas letras tem o seu nome? Organizando os dados em gráfico",
      exercises: [
        { kind: "lines", instruction: "Escreva seu nome completo e conte quantas letras ele tem:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete com o número de letras de cada nome:", items: ["ANA tem ___ letras", "PEDRO tem ___ letras", "GABRIEL tem ___ letras"] },
        { kind: "options", instruction: "Num gráfico de colunas sobre a quantidade de letras dos nomes, quanto maior a coluna, mais:", options: ["Mais rápido o nome é escrito", "Mais letras o nome tem", "Mais bonito é o nome", "Mais pessoas têm esse nome"] },
        { kind: "draw", instruction: "Desenhe um gráfico de colunas comparando o número de letras do seu nome com o de duas pessoas da sua família:" },
      ],
    },
    {
      theme: "Montando o valor certo com cédulas e moedas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete como formar cada valor usando cédulas e moedas:", items: ["8 reais = uma nota de 5 reais + ___ moedas de 1 real", "12 reais = uma nota de 10 reais + ___ moedas de 1 real", "7 reais = uma nota de 2 reais + uma nota de ___ reais"] },
        { kind: "options", instruction: "Para pagar exatamente 6 reais, qual combinação está correta?", options: ["Uma nota de 5 + uma moeda de 1", "Uma nota de 2 + uma nota de 2", "Uma nota de 10", "Uma moeda de 1 + uma moeda de 1"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar cédulas e moedas (de verdade ou de brinquedo). Escreva quais você usaria para formar 15 reais:", lines: 3 },
        { kind: "draw", instruction: "Desenhe as cédulas e moedas que você usaria para formar o valor de 20 reais:" },
      ],
    },
    {
      theme: "Comandos de robô: direita, esquerda, para frente",
      exercises: [
        { kind: "word-select", instruction: "Circule as palavras que são comandos de movimento:", items: ["FRENTE", "AZUL", "DIREITA", "MESA", "ESQUERDA", "PARA TRÁS"] },
        { kind: "options", instruction: "Se um robô está de frente para a porta e recebe o comando 'vire à esquerda', para onde ele fica olhando?", options: ["Para a porta ainda", "Para o lado esquerdo de onde estava", "Para trás", "Para cima"] },
        { kind: "lines", instruction: "Dê 3 comandos (frente, direita, esquerda) para alguém da sua casa seguir andando pela sala. Escreva os comandos que você deu:", lines: 3 },
        { kind: "draw", instruction: "Desenhe o caminho que uma pessoa percorreu seguindo os comandos: 3 passos à frente, vira à direita, mais 2 passos à frente:" },
      ],
    },
    {
      theme: "Quantas semanas até as férias?",
      exercises: [
        { kind: "fill-blank", instruction: "Complete usando o calendário:", items: ["1 semana tem ___ dias", "2 semanas têm ___ dias", "Do domingo até o próximo domingo passa ___ semana"] },
        { kind: "options", instruction: "Se faltam 21 dias para as férias, aproximadamente quantas semanas faltam?", options: ["1 semana", "2 semanas", "3 semanas", "7 semanas"] },
        { kind: "lines", instruction: "Olhe um calendário em casa e conte quantas semanas faltam para um dia especial (aniversário, festa ou férias). Escreva o que você descobriu:", lines: 3 },
        { kind: "draw", instruction: "Desenhe um calendário simples de uma semana (segunda a domingo) e marque o dia de hoje:" },
      ],
    },
    {
      theme: "Quanto lixo produzimos em uma semana?",
      exercises: [
        { kind: "lines", instruction: "Observe, por dois dias, quantos sacos de lixo sua casa produz. Escreva o que você percebeu:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete a tabela de lixo da semana (invente números possíveis):", items: ["Segunda-feira: ___ sacos de lixo", "Quarta-feira: ___ sacos de lixo", "Sexta-feira: ___ sacos de lixo"] },
        { kind: "options", instruction: "Para saber quanto lixo a turma produziu na semana toda, o que é preciso fazer com os números de cada dia?", options: ["Multiplicar todos por 2", "Somar todos os dias", "Escolher só o maior número", "Dividir por 7"] },
        { kind: "draw", instruction: "Desenhe uma lixeira e, ao lado, um gráfico simples mostrando quantos sacos de lixo sua casa produziu em 3 dias diferentes:" },
      ],
    },
    {
      theme: "Caça-números na sala de aula",
      exercises: [
        { kind: "lines", instruction: "Escreva um número que você viu hoje em casa (na TV, no relógio, numa embalagem) e diga o que ele representa:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete dizendo se o número é um código, uma quantidade ou uma medida:", items: ["O número do canal da TV é um ___", "O número de pessoas que moram com você é uma ___", "O número do seu tênis é uma ___", "O número da sua rua é um ___"] },
        { kind: "options", instruction: "O número escrito numa régua indica:", options: ["uma medida", "um código", "uma quantidade", "uma hora"] },
        { kind: "draw", instruction: "Desenhe um objeto da sua casa que tem um número escrito nele e escreva o número ao lado." },
      ],
    },
    {
      theme: "Quebra-cabeça das dezenas e unidades",
      exercises: [
        { kind: "fill-blank", instruction: "Complete decompondo cada número em dezenas e unidades:", items: ["34 = ___ dezena(s) e ___ unidade(s)", "58 = ___ dezena(s) e ___ unidade(s)", "70 = ___ dezena(s) e ___ unidade(s)", "26 = ___ dezena(s) e ___ unidade(s)"] },
        { kind: "options", instruction: "O número 45 é formado por:", options: ["4 dezenas e 5 unidades", "5 dezenas e 4 unidades", "45 unidades e 0 dezenas", "9 dezenas"] },
        { kind: "lines", instruction: "Escolha um número entre 20 e 99 e escreva quantas dezenas e quantas unidades ele tem:", lines: 2 },
        { kind: "draw", instruction: "Desenhe o número 32 usando bolinhas: monte grupos de 10 bolinhas para as dezenas e bolinhas soltas para as unidades." },
      ],
    },
    {
      theme: "Contagem regressiva do foguete",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as contagens regressivas do lançamento do foguete:", items: ["De 10 em 10: 50, 40, ___, 20, ___, 0", "De 5 em 5: 30, 25, ___, 15, ___, 5", "De 10 em 10: 100, 90, ___, 70, ___", "De 5 em 5: 45, 40, ___, 30, ___"] },
        { kind: "options", instruction: "Numa contagem regressiva de 5 em 5, depois do 20 vem o:", options: ["15", "25", "16", "10"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa contar junto com você, de 10 em 10, começando do 100 até chegar no 0. Escreva os números que vocês disseram:", lines: 3 },
        { kind: "draw", instruction: "Desenhe um foguete pronto para decolar com o número 0 escrito nele." },
      ],
    },
    {
      theme: "Entre quais números estou?",
      exercises: [
        { kind: "fill-blank", instruction: "Descubra o número escondido em cada intervalo:", items: ["Estou entre o 14 e o 16. Que número sou? ___", "Estou entre o 29 e o 31. Que número sou? ___", "Estou entre o 49 e o 51. Que número sou? ___", "Estou entre o 9 e o 11. Que número sou? ___"] },
        { kind: "options", instruction: "Qual número está entre 22 e 24?", options: ["23", "25", "21", "20"] },
        { kind: "lines", instruction: "Pense em dois números perto da sua idade (um a menos e um a mais) e escreva qual número está entre eles:", lines: 2 },
        { kind: "draw", instruction: "Desenhe uma reta numerada de 0 a 10 e marque com um X o número que está entre o 6 e o 8." },
      ],
    },
    {
      theme: "Montando a conta com os sinais certos",
      exercises: [
        { kind: "fill-blank", instruction: "Complete cada conta com o sinal + ou -:", items: ["Eu tinha 6 balas e ganhei mais 3. Conta: 6 ___ 3 = 9", "Eu tinha 10 figurinhas e dei 4 para um amigo. Conta: 10 ___ 4 = 6", "Eu tinha 5 lápis e comprei mais 5. Conta: 5 ___ 5 = 10", "Eu tinha 8 balas e comi 2. Conta: 8 ___ 2 = 6"] },
        { kind: "options", instruction: "Qual sinal completa corretamente 12 ___ 5 = 7?", options: ["-", "+", "=", "x"] },
        { kind: "lines", instruction: "Invente uma pequena história de ganhar ou perder objetos e escreva a conta com o sinal certo:", lines: 3 },
        { kind: "draw", instruction: "Desenhe uma cena em que você ganha 3 brinquedos novos, tendo 2 antes. Escreva a conta embaixo do desenho." },
      ],
    },
    {
      theme: "Mapa do tesouro da sala de aula",
      exercises: [
        { kind: "lines", instruction: "Escolha um objeto escondido em algum cômodo da sua casa e escreva as instruções de como chegar até ele, usando palavras como direita, esquerda, na frente, atrás:", lines: 4 },
        { kind: "options", instruction: "Se o tesouro está embaixo da mesa, qual foi o ponto de referência usado?", options: ["a mesa", "a porta", "a janela", "o quadro"] },
        { kind: "fill-blank", instruction: "Complete usando à direita ou à esquerda:", items: ["O armário fica ___ da porta", "A cama fica ___ da janela", "O sofá fica ___ da televisão", "A mochila fica ___ da cadeira"] },
        { kind: "draw", instruction: "Desenhe um mapa simples do seu quarto ou da sala de casa, marcando com um X onde você esconderia um tesouro." },
      ],
    },
    {
      theme: "Caça aos sólidos geométricos na sala",
      exercises: [
        { kind: "word-select", instruction: "Circule apenas os objetos que lembram uma esfera (bola):", items: ["BOLA", "LARANJA", "CAIXA", "DADO", "LATA", "BONÉ"] },
        { kind: "options", instruction: "Uma lata de milho tem o formato de um:", options: ["cilindro", "cubo", "cone", "esfera"] },
        { kind: "lines", instruction: "Procure em casa um objeto que lembre uma pirâmide ou um cone e escreva o nome dele:", lines: 2 },
        { kind: "draw", instruction: "Desenhe três objetos da cozinha da sua casa e escreva embaixo de cada um se ele lembra um cubo, uma esfera ou um cilindro." },
      ],
    },
    {
      theme: "Comparando o gráfico do lanche saudável",
      exercises: [
        { kind: "lines", instruction: "Pergunte para 3 pessoas da sua casa qual fruta elas mais gostam de comer no lanche e escreva os nomes:", lines: 3 },
        { kind: "options", instruction: "Num gráfico de colunas sobre frutas do lanche, a fruta com a coluna mais alta é a que:", options: ["mais pessoas escolheram", "menos pessoas escolheram", "custa mais caro", "é mais colorida"] },
        { kind: "fill-blank", instruction: "Complete com o resultado da sua pesquisa:", items: ["A fruta mais escolhida foi: ___", "Quantas pessoas você perguntou? ___", "Quantas escolheram a mesma fruta que você? ___", "Alguma fruta não foi escolhida por ninguém? Qual? ___"] },
        { kind: "draw", instruction: "Desenhe um gráfico de colunas simples mostrando quantas pessoas da sua casa gostam de cada fruta que você perguntou." },
      ],
    },
    {
      theme: "Quem é mais alto? Medindo a turma com fita métrica",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém te ajudar a medir sua altura com uma fita métrica ou trena. Escreva o resultado:", lines: 2 },
        { kind: "options", instruction: "Para medir a altura de uma pessoa, o instrumento mais adequado é:", options: ["fita métrica", "balança", "relógio", "copo medidor"] },
        { kind: "fill-blank", instruction: "Complete com as medidas que você descobriu:", items: ["Minha altura é ___ cm", "A altura de uma pessoa da minha casa é ___ cm", "Quem é mais alto, eu ou essa pessoa? ___", "Quantos centímetros de diferença há entre nós? ___"] },
        { kind: "draw", instruction: "Desenhe você e uma pessoa da sua casa lado a lado, do mais baixo para o mais alto." },
      ],
    },
    {
      theme: "Que horas o recreio começa? Lendo o relógio da rotina",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com os horários da sua rotina:", items: ["Eu acordo às ___ horas", "Eu almoço às ___ horas", "A aula começa às ___ horas", "Eu durmo às ___ horas"] },
        { kind: "options", instruction: "Se o relógio digital marca 10:00, isso significa:", options: ["dez horas em ponto", "dez e meia", "uma hora", "dez para as onze"] },
        { kind: "lines", instruction: "Escreva um horário importante da sua rotina em casa (hora de comer, de tomar banho, de dormir) e o que você faz nesse horário:", lines: 2 },
        { kind: "draw", instruction: "Desenhe um relógio digital marcando a hora que você chega da escola em casa." },
      ],
    },
    {
      theme: "Rola ou não rola? Testando os sólidos geométricos",
      exercises: [
        { kind: "options", instruction: "Qual desses objetos rola melhor no chão?", options: ["uma bola", "uma caixa de sapato", "um dado", "um livro"] },
        { kind: "word-select", instruction: "Circule os objetos que têm partes arredondadas e podem rolar:", items: ["BOLA", "CAIXA", "LATA", "DADO", "LARANJA", "TIJOLO"] },
        { kind: "lines", instruction: "Procure um objeto redondo em casa e outro com cantos retos. Escreva os nomes deles:", lines: 2 },
        { kind: "draw", instruction: "Desenhe um objeto que rola e um objeto que não rola, os dois que você encontrou em casa." },
      ],
    },
    {
      theme: "Contando de dois em dois: formando pares de meias",
      exercises: [
        { kind: "fill-blank", instruction: "Complete quantos pares se formam com essa quantidade de meias:", items: ["6 meias formam ___ pares", "10 meias formam ___ pares", "14 meias formam ___ pares", "8 meias formam ___ pares"] },
        { kind: "options", instruction: "Contando de 2 em 2 a partir do 0, qual sequência está certa?", options: ["0, 2, 4, 6, 8", "0, 2, 3, 5, 7", "0, 1, 2, 3, 4", "0, 2, 4, 5, 6"] },
        { kind: "lines", instruction: "Junte as meias ou sapatos de uma gaveta da sua casa e conte de dois em dois quantos pares há. Escreva o total:", lines: 2 },
        { kind: "draw", instruction: "Desenhe 5 pares de meias, cada par com uma cor diferente." },
      ],
    },
    {
      theme: "Contando para o colega como pensei para resolver",
      exercises: [
        { kind: "lines", instruction: "Resolva o problema e depois explique com suas palavras como você pensou: Ana tinha 8 figurinhas e ganhou mais 5. Com quantas ela ficou?", lines: 4 },
        { kind: "options", instruction: "Antes de escrever como você pensou, o que é mais importante fazer primeiro?", options: ["entender bem o problema", "escrever qualquer número", "apagar a folha", "desenhar sem ler o problema"] },
        { kind: "fill-blank", instruction: "Complete explicando como você resolveu o problema:", items: ["Primeiro eu li o problema e entendi que precisava ___", "Depois eu fiz a conta de ___", "O resultado que encontrei foi ___", "Para explicar ao colega eu diria: ___"] },
        { kind: "draw", instruction: "Desenhe os passos que você seguiu para resolver um problema de matemática, numerando cada passo." },
      ],
    },
    {
      theme: "Duelo de dados: quem tira o maior número?",
      exercises: [
        { kind: "options", instruction: "Em uma rodada, saíram os números 67 e 76. Qual venceu o duelo, ou seja, qual é o maior?", options: ["67", "76", "Empate", "Nenhum dos dois"] },
        { kind: "fill-blank", instruction: "Peça para alguém da sua casa dizer dois números de dois algarismos. Escreva-os e complete:", items: ["Primeiro número: ___", "Segundo número: ___", "O maior é: ___"] },
        { kind: "lines", instruction: "Escreva dois números de dois algarismos usando os números de uma placa de carro ou de uma casa da sua rua. Diga qual dos dois é maior:", lines: 3 },
        { kind: "draw", instruction: "Desenhe dois dados de forma que, juntando os pontos, formem o menor número de dois algarismos possível:" },
      ],
    },
    {
      theme: "Quantos grãos de feijão no pote?",
      exercises: [
        { kind: "lines", instruction: "Pegue um potinho com feijões, botões ou grãos de arroz em casa. Escreva quantos você acha que tem antes de contar:", lines: 1, note: "Depois conte de verdade e compare com o que você escreveu." },
        { kind: "fill-blank", instruction: "Complete com o resultado da sua contagem:", items: ["Eu estimei: ___", "Eu contei: ___", "A diferença entre os dois números foi: ___"] },
        { kind: "options", instruction: "Qual é a melhor forma de contar uma quantidade grande de grãos sem errar?", options: ["Separar em grupinhos de 10 e contar os grupos", "Contar tudo de uma vez, bem rápido", "Só olhar e adivinhar", "Contar só a metade do pote"] },
        { kind: "draw", instruction: "Desenhe o pote ou potinho que você usou, com os grãos organizados em grupos de 10:" },
      ],
    },
    {
      theme: "Ficha de cálculo com reserva: armando as contas",
      exercises: [
        { kind: "fill-blank", instruction: "Arme e resolva as contas, reagrupando quando precisar:", items: ["27 + 15 = ___", "43 + 38 = ___", "52 − 26 = ___", "81 − 47 = ___"] },
        { kind: "options", instruction: "Na conta 26 + 17, quando somamos as unidades (6 + 7 = 13), o que fazemos com o 1 de dezena que sobra?", options: ["Levamos para a coluna das dezenas", "Jogamos fora", "Escrevemos embaixo das unidades", "Ignoramos"] },
        { kind: "lines", instruction: "Invente uma conta de adição com reserva usando o número da sua casa e o número de pessoas da sua família. Escreva a conta e o resultado:", lines: 3 },
        { kind: "draw", instruction: "Desenhe material dourado ou palitinhos representando a conta 34 + 19, mostrando o agrupamento de 10 unidades em uma dezena:" },
      ],
    },
    {
      theme: "Problema do lanche: quantos salgadinhos sobraram?",
      exercises: [
        { kind: "lines", instruction: "Leia: 'A vovó fez 24 coxinhas para o lanche. As crianças comeram 17. Quantas coxinhas sobraram?' Escreva como você pensou para resolver:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete a resposta do problema do lanche:", items: ["24 − 17 = ___", "Sobraram ___ coxinhas"] },
        { kind: "options", instruction: "No lanche da tarde, havia 30 biscoitos. As crianças comeram alguns e sobraram 12. Quantos biscoitos foram comidos?", options: ["18", "12", "42", "30"] },
        { kind: "draw", instruction: "Desenhe o lanche da sua casa de hoje e escreva quantos salgadinhos ou biscoitos havia antes e depois de você comer:" },
      ],
    },
    {
      theme: "Verdadeiro ou falso: a igualdade está certa?",
      exercises: [
        { kind: "options", instruction: "A sentença 8 + 5 = 12 está:", options: ["Falsa, porque 8 + 5 = 13", "Verdadeira", "Falsa, porque 8 + 5 = 15", "Não dá para saber"] },
        { kind: "fill-blank", instruction: "Escreva V para verdadeiro ou F para falso em cada sentença:", items: ["6 + 4 = 10 ( ___ )", "9 + 3 = 11 ( ___ )", "7 + 7 = 14 ( ___ )", "15 − 5 = 9 ( ___ )"] },
        { kind: "lines", instruction: "Escolha uma das sentenças falsas de cima e escreva como ela ficaria certa:", lines: 2 },
        { kind: "draw", instruction: "Desenhe duas mãos com dedos levantados que mostrem uma igualdade verdadeira, por exemplo 5 + 5 = 10:" },
      ],
    },
    {
      theme: "Onde está escondido o brinquedo?",
      exercises: [
        { kind: "lines", instruction: "Esconda um brinquedo em um cômodo da sua casa e escreva pistas usando palavras como 'perto de', 'longe de', 'embaixo de' ou 'ao lado de' para alguém encontrar:", lines: 3 },
        { kind: "options", instruction: "Se o brinquedo está 'embaixo da cama, perto da parede', onde alguém deve procurar primeiro?", options: ["Debaixo da cama", "Em cima do armário", "Na porta", "No teto"] },
        { kind: "fill-blank", instruction: "Complete as frases de localização:", items: ["O brinquedo está ___ do sofá.", "A caixa está ___ da porta.", "O bicho de pelúcia está ___ da cama."] },
        { kind: "draw", instruction: "Desenhe o cômodo da sua casa onde você escondeu o brinquedo, marcando com um X o lugar exato:" },
      ],
    },
    {
      theme: "Construindo uma cidade com embalagens",
      exercises: [
        { kind: "lines", instruction: "Junte 3 embalagens vazias da sua casa (caixa, lata, garrafa). Escreva o nome de cada uma e a figura geométrica espacial que ela lembra:", lines: 3 },
        { kind: "options", instruction: "Uma lata de ervilha tem o formato de qual figura geométrica espacial?", options: ["Cilindro", "Cubo", "Esfera", "Pirâmide"] },
        { kind: "fill-blank", instruction: "Ligue cada embalagem à sua forma, completando:", items: ["Caixa de sapato = ___", "Bola de futebol = ___", "Lata de milho = ___"] },
        { kind: "draw", instruction: "Desenhe a maquete de uma cidade feita com embalagens recicladas, com pelo menos 3 construções diferentes:" },
      ],
    },
    {
      theme: "Quem venceu a queimada? Lendo a tabela de resultados",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém te contar o placar de um jogo (queimada, futebol, ou outro) que você assistiu ou jogou. Escreva o placar:", lines: 2 },
        { kind: "options", instruction: "Numa tabela de queimada, o Time Azul venceu 3 partidas e o Time Verde venceu 5. Qual time ganhou mais partidas?", options: ["Time Verde", "Time Azul", "Os dois empataram", "Não dá para saber"] },
        { kind: "fill-blank", instruction: "Complete a tabela de resultados da queimada com os números que faltam:", items: ["Time Azul: 3 vitórias e ___ derrotas (de 5 jogos)", "Time Verde: ___ vitórias e 2 derrotas (de 7 jogos)"] },
        { kind: "draw", instruction: "Desenhe uma tabela simples com o nome de dois times e o número de vitórias de cada um:" },
      ],
    },
    {
      theme: "Quanto cabe no copo? Medindo capacidade",
      exercises: [
        { kind: "lines", instruction: "Escolha dois recipientes da sua casa (copo, xícara, garrafinha). Use um copo pequeno para medir quantas vezes ele enche cada um. Escreva o resultado:", lines: 3 },
        { kind: "options", instruction: "Se um copo pequeno enche uma garrafa 6 vezes e enche uma jarra 10 vezes, qual recipiente tem mais capacidade?", options: ["A jarra", "A garrafa", "Os dois têm a mesma capacidade", "O copo pequeno"] },
        { kind: "fill-blank", instruction: "Complete com maior ou menor:", items: ["Um balde tem capacidade ___ do que um copo.", "Uma colher tem capacidade ___ do que uma panela."] },
        { kind: "draw", instruction: "Desenhe os dois recipientes que você mediu em casa, do menor para o maior:" },
      ],
    },
    {
      theme: "Qual relógio mostra o horário mais cedo?",
      exercises: [
        { kind: "options", instruction: "Qual horário é mais cedo?", options: ["07:15", "10:30", "14:00", "19:45"] },
        { kind: "fill-blank", instruction: "Complete comparando os horários:", items: ["08:00 é mais ___ do que 15:00.", "20:00 é mais ___ do que 07:00."] },
        { kind: "lines", instruction: "Escreva o horário em que você acorda e o horário em que você dorme. Diga qual é mais cedo:", lines: 2 },
        { kind: "draw", instruction: "Desenhe dois relógios digitais: um mostrando um horário de manhã e outro mostrando um horário de noite:" },
      ],
    },
    {
      theme: "Qual foi o brinquedo mais votado?",
      exercises: [
        { kind: "lines", instruction: "Pergunte para 3 pessoas da sua casa qual é o brinquedo ou brincadeira preferida delas. Escreva as respostas:", lines: 3 },
        { kind: "options", instruction: "Em um gráfico de colunas sobre brinquedos preferidos, a coluna da bola tem 8 quadradinhos e a da boneca tem 5. Qual brinquedo foi mais votado?", options: ["A bola", "A boneca", "Os dois empataram", "Não dá para saber"] },
        { kind: "fill-blank", instruction: "Complete a conclusão sobre a votação da sua casa:", items: ["O brinquedo mais votado foi ___", "Ele recebeu ___ votos"] },
        { kind: "draw", instruction: "Desenhe um gráfico de colunas simples com os votos que você coletou em casa:" },
      ],
    },
    {
      theme: "O número que sumiu da sequência",
      exercises: [
        { kind: "fill-blank", instruction: "Descubra o número que sumiu de cada sequência:", items: ["2, 4, ___, 8, 10", "10, 20, 30, ___, 50", "5, 10, 15, ___, 25"] },
        { kind: "options", instruction: "Na sequência 12, ___, 16, 18, qual número está faltando?", options: ["14", "13", "15", "20"] },
        { kind: "lines", instruction: "Invente uma sequência com um número escondido e escreva-a para alguém da sua casa descobrir:", lines: 2 },
        { kind: "draw", instruction: "Desenhe uma trilha numerada de 1 a 10 com uma casinha vazia no lugar de um número que sumiu:" },
      ],
    },
    {
      theme: "Desenhando os passos que usei para resolver o problema",
      exercises: [
        { kind: "draw", instruction: "Escolha um problema de matemática que você resolveu essa semana. Desenhe o primeiro passo que você usou para pensar nele:" },
        { kind: "lines", instruction: "Agora escreva com suas palavras o que você fez depois do desenho, até chegar na resposta:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete as etapas da sua resolução:", items: ["Primeiro eu ___", "Depois eu ___", "Por fim, a resposta foi ___"] },
        { kind: "options", instruction: "Por que é importante mostrar os passos usados para resolver um problema, e não só a resposta final?", options: ["Porque ajuda a explicar como você pensou", "Porque deixa a folha mais bonita", "Porque é mais rápido de escrever", "Porque não precisa pensar"] },
      ],
    },
    {
      theme: "Ordenando os aniversariantes do mês",
      exercises: [
        { kind: "lines", instruction: "Peça para três pessoas da sua casa dizerem o dia em que nasceram. Escreva os nomes em ordem, do aniversário mais cedo no mês para o mais tarde:", lines: 3 },
        { kind: "options", instruction: "Marina nasceu dia 5, Beto dia 18 e Sol dia 27. Quem nasceu por último no mês?", options: ["Marina", "Beto", "Sol", "Todos no mesmo dia"] },
        { kind: "fill-blank", instruction: "Complete com MAIOR ou MENOR:", items: ["O dia 29 é ___ que o dia 12.", "O dia 3 é ___ que o dia 20.", "O dia 25 é ___ que o dia 10.", "O dia 8 é ___ que o dia 31."] },
        { kind: "draw", instruction: "Desenhe um calendário simples de um mês e marque com uma estrela o dia do seu aniversário:" },
      ],
    },
    {
      theme: "Contando os livros da estante da sala",
      exercises: [
        { kind: "lines", instruction: "Conte quantos livros tem na estante da sua sala de aula (ou peça ajuda ao professor) e escreva o número:", lines: 2 },
        { kind: "options", instruction: "Se a estante 1 tem 12 livros e a estante 2 tem 9 livros, qual estante tem mais livros?", options: ["Estante 1", "Estante 2", "As duas têm a mesma quantidade", "Não é possível saber"] },
        { kind: "fill-blank", instruction: "Complete contando os grupos de livros:", items: ["5 livros de história + 4 livros de ciências = ___ livros", "8 livros novos + 3 livros usados = ___ livros", "6 livros grandes + 6 livros pequenos = ___ livros", "10 livros − 4 livros emprestados = ___ livros"] },
        { kind: "draw", instruction: "Desenhe uma estante com livros e escreva embaixo quantos livros você desenhou:" },
      ],
    },
    {
      theme: "Corrida das continhas: calculando e conferindo o resultado",
      exercises: [
        { kind: "fill-blank", instruction: "Resolva as continhas:", items: ["8 + 5 = ___", "14 − 6 = ___", "9 + 7 = ___", "20 − 8 = ___"] },
        { kind: "options", instruction: "Para conferir se 8 + 5 = 13 está certo, qual conta você pode fazer?", options: ["13 − 5 = 8", "13 + 5 = 18", "8 − 13 = 5", "5 + 5 = 10"] },
        { kind: "lines", instruction: "Escolha uma das continhas que você resolveu e explique, com suas palavras, como você conferiu o resultado:", lines: 3 },
        { kind: "draw", instruction: "Desenhe uma pista de corrida com números e trace o caminho de 0 até o número que é o resultado de 9 + 6:" },
      ],
    },
    {
      theme: "Problemas da cantina da escola",
      exercises: [
        { kind: "lines", instruction: "Ana comprou um suco de R$ 3 e um biscoito de R$ 2. Ela pagou com uma nota de R$ 10. Quanto ela recebeu de troco? Escreva a resposta com a conta:", lines: 3 },
        { kind: "options", instruction: "Se um salgado custa R$ 4 e você tem R$ 4, quanto vai sobrar de troco?", options: ["R$ 0", "R$ 1", "R$ 4", "R$ 8"] },
        { kind: "fill-blank", instruction: "Complete os preços da cantina imaginária:", items: ["1 suco (R$ 3) + 1 pão de queijo (R$ 2) = R$ ___", "1 água (R$ 2) + 1 bolo (R$ 4) = R$ ___", "Pagando com R$ 10 uma compra de R$ 6, o troco é R$ ___", "Pagando com R$ 5 uma compra de R$ 3, o troco é R$ ___"] },
        { kind: "draw", instruction: "Desenhe o lanche que você compraria na cantina com R$ 5 e escreva quanto custaria:" },
      ],
    },
    {
      theme: "Escada numérica de 3 em 3",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a escada numérica de 3 em 3:", items: ["3, 6, 9, ___, 15", "0, 3, ___, 9, 12", "15, 12, ___, 6, 3", "18, ___, 12, 9, 6"] },
        { kind: "options", instruction: "Começando do 3 e contando de 3 em 3, qual é o quinto número dessa sequência (3, 6, 9, 12...)?", options: ["12", "15", "18", "9"] },
        { kind: "lines", instruction: "Escolha outro número para começar e escreva uma sequência de 3 em 3 com 5 números:", lines: 2 },
        { kind: "draw", instruction: "Desenhe uma escada com 5 degraus e escreva em cada degrau um número da sequência de 3 em 3:" },
      ],
    },
    {
      theme: "Qual é a regra da sequência?",
      exercises: [
        { kind: "options", instruction: "Na sequência 5, 10, 15, 20..., qual é a regra?", options: ["Somar 5 a cada número", "Somar 10 a cada número", "Subtrair 5 a cada número", "Dobrar o número anterior"] },
        { kind: "fill-blank", instruction: "Descubra a regra e complete:", items: ["1, 3, 5, 7, ___ (a regra é somar ___)", "2, 4, 8, 16, ___ (a regra é ___)", "20, 17, 14, ___ (a regra é subtrair ___)", "10, 20, 30, ___ (a regra é somar ___)"] },
        { kind: "lines", instruction: "Invente sua própria sequência de números com uma regra (pode ser somar, subtrair ou dobrar) e escreva os 5 primeiros números:", lines: 3 },
        { kind: "draw", instruction: "Desenhe um cartaz com a sua sequência do exercício anterior, usando cores diferentes para destacar o padrão:" },
      ],
    },
    {
      theme: "Mosaico com formas planas",
      exercises: [
        { kind: "options", instruction: "Qual dessas formas tem 4 lados iguais?", options: ["Quadrado", "Triângulo", "Círculo", "Retângulo"] },
        { kind: "fill-blank", instruction: "Complete com o nome da forma:", items: ["Uma forma redonda, sem lados, é o ___", "Uma forma com 3 lados é o ___", "Uma forma com 4 lados, sendo dois maiores e dois menores, é o ___", "Uma forma com 4 lados todos iguais é o ___"] },
        { kind: "lines", instruction: "Escreva o nome de 3 objetos da sua casa que têm o formato de um quadrado ou retângulo:", lines: 3 },
        { kind: "draw", instruction: "Desenhe um mosaico usando pelo menos três formas diferentes (triângulos, quadrados, retângulos e círculos):" },
      ],
    },
    {
      theme: "Quantos irmãos você tem? Pesquisa e gráfico da turma",
      exercises: [
        { kind: "lines", instruction: "Pergunte a 4 pessoas da sua família ou vizinhança quantos irmãos elas têm e escreva os nomes e as respostas:", lines: 4 },
        { kind: "options", instruction: "Numa pesquisa, 5 alunos não têm irmãos, 8 alunos têm 1 irmão e 3 alunos têm 2 irmãos. Qual foi a resposta mais comum?", options: ["Não ter irmãos", "Ter 1 irmão", "Ter 2 irmãos", "Ter 3 irmãos"] },
        { kind: "fill-blank", instruction: "Complete com os dados da pesquisa do exercício anterior:", items: ["Número de alunos sem irmãos: ___", "Número de alunos com 1 irmão: ___", "Número de alunos com 2 irmãos: ___", "Total de alunos pesquisados: ___"] },
        { kind: "draw", instruction: "Desenhe um gráfico de colunas com os dados que você coletou na sua pesquisa em casa:" },
      ],
    },
    {
      theme: "Trocando moedas: quantas de 1 real formam 5?",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as trocas de moedas:", items: ["1 moeda de R$ 5 = ___ moedas de R$ 1", "1 moeda de R$ 2 = ___ moedas de R$ 1", "2 moedas de R$ 1 = 1 moeda de ___", "5 moedas de R$ 1 = 1 moeda de ___"] },
        { kind: "options", instruction: "Quantas moedas de R$ 1 você precisa juntar para formar R$ 10?", options: ["5 moedas", "10 moedas", "2 moedas", "1 moeda"] },
        { kind: "lines", instruction: "Se você tiver moedas em casa, procure uma de R$ 1 e uma de R$ 5. Escreva o que está desenhado em cada uma delas:", lines: 2 },
        { kind: "draw", instruction: "Desenhe 5 moedas de R$ 1 e, do lado, desenhe a moeda de R$ 5 que vale o mesmo que elas juntas:" },
      ],
    },
    {
      theme: "O que vem depois? Prevendo os dias da semana",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com o dia da semana:", items: ["Se hoje é segunda-feira, amanhã será ___", "Se hoje é sexta-feira, amanhã será ___", "O dia depois de quarta-feira é ___", "O dia antes de domingo é ___"] },
        { kind: "options", instruction: "Se hoje é quinta-feira, que dia será depois de amanhã?", options: ["Sábado", "Sexta-feira", "Domingo", "Quarta-feira"] },
        { kind: "lines", instruction: "Escreva o que você vai fazer amanhã e o que pretende fazer depois de amanhã:", lines: 3 },
        { kind: "draw", instruction: "Desenhe um calendário da semana e marque com uma cor o dia de hoje:" },
      ],
    },
    {
      theme: "Problema da receita de suco",
      exercises: [
        { kind: "lines", instruction: "Uma receita de suco usa 3 copos de água para 1 copo de suco concentrado. Se você quer fazer o dobro da receita, quantos copos de água vai usar? Escreva a resposta:", lines: 2 },
        { kind: "options", instruction: "Uma jarra cheia tem 8 copos de suco. Se já foram servidos 5 copos, quantos copos ainda restam?", options: ["3 copos", "5 copos", "8 copos", "13 copos"] },
        { kind: "fill-blank", instruction: "Complete as medidas da receita:", items: ["2 copos de suco + 1 copo de água = ___ copos", "Uma jarra pequena tem 4 copos e uma jarra grande tem 8 copos: a diferença é ___ copos", "Para encher 2 jarras de 4 copos cada, preciso de ___ copos no total", "Se sobram 2 copos de uma jarra de 6 copos, foram usados ___ copos"] },
        { kind: "draw", instruction: "Desenhe uma jarra de suco e marque nela quantos copos ela consegue encher:" },
      ],
    },
    {
      theme: "Calculando de cabeça com ajuda das dezenas",
      exercises: [
        { kind: "fill-blank", instruction: "Use as dezenas para calcular de cabeça:", items: ["20 + 30 = ___", "40 + 20 = ___", "50 − 20 = ___", "70 − 40 = ___"] },
        { kind: "options", instruction: "Para calcular 38 + 21 de cabeça, uma forma fácil é:", options: ["Somar 30+20 e depois 8+1", "Somar 38+2 e ignorar o resto", "Subtrair 38−21", "Multiplicar 38 por 21"] },
        { kind: "lines", instruction: "Escolha uma conta de somar dois números com final zero (como 30 + 40) e explique como você pensou para resolver de cabeça:", lines: 3 },
        { kind: "draw", instruction: "Desenhe 3 pacotes com 10 bolinhas cada e escreva quantas bolinhas há ao todo:" },
      ],
    },
    {
      theme: "Que pergunta posso fazer com esses números?",
      exercises: [
        { kind: "lines", instruction: "Observe os números: numa caixa há 15 bolinhas de gude e em outra caixa há 8 bolinhas. Invente uma pergunta matemática usando esses dois números:", lines: 2 },
        { kind: "lines", instruction: "Resolva a pergunta que você criou e escreva a conta que usou para chegar na resposta:", lines: 2 },
        { kind: "options", instruction: "Com os números 15 e 8, qual pergunta faz mais sentido matematicamente?", options: ["Quantas bolinhas há ao todo nas duas caixas?", "Qual é a cor das bolinhas?", "De que material são feitas as bolinhas?", "Quem comprou as bolinhas?"] },
        { kind: "draw", instruction: "Desenhe as duas caixas de bolinhas de gude com a quantidade certa em cada uma:" },
      ],
    },
    {
      theme: "Dividindo balas em partes iguais",
      exercises: [
        { kind: "lines", instruction: "Se você tem 12 balas para dividir em partes iguais entre você e 2 amigos, quantas balas cada um recebe? Explique como você pensou:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete as divisões:", items: ["10 balas para 2 crianças = __ balas cada", "8 balas para 4 crianças = __ balas cada", "6 balas para 3 crianças = __ balas cada", "9 balas para 3 crianças = __ balas cada"] },
        { kind: "options", instruction: "Você tem 15 figurinhas para dividir igualmente entre você e 4 colegas. O que acontece?", options: ["Dá exatamente 3 figurinhas para cada um, sem sobrar nenhuma", "Sobram muitas figurinhas", "Faltam figurinhas para todos", "Dá só 1 figurinha para você"] },
        { kind: "draw", instruction: "Desenhe 9 bolinhas de gude divididas em 3 grupos iguais:" },
      ],
    },
    {
      theme: "Adivinha a forma: pistas e desenhos",
      exercises: [
        { kind: "draw", instruction: "Um colega deu esta pista: 'Tenho 3 lados e 3 pontas.' Desenhe a forma que ele descreveu:" },
        { kind: "lines", instruction: "Escreva uma pista sobre uma forma geométrica para um familiar tentar adivinhar (sem dizer o nome da forma):", lines: 3 },
        { kind: "options", instruction: "Qual pista descreve um quadrado?", options: ["Tenho 4 lados iguais e 4 pontas", "Tenho 3 lados e 3 pontas", "Sou redondo e não tenho pontas", "Tenho 5 lados"] },
        { kind: "word-select", instruction: "Circule os nomes de formas geométricas planas:", items: ["CÍRCULO", "CADEIRA", "TRIÂNGULO", "BANANA", "QUADRADO", "RETÂNGULO", "SAPATO", "MOCHILA"] },
      ],
    },
    {
      theme: "Estratégia das bordas: montando o quebra-cabeça",
      exercises: [
        { kind: "lines", instruction: "Explique com suas palavras por que é uma boa estratégia montar primeiro as peças da borda do quebra-cabeça:", lines: 3 },
        { kind: "options", instruction: "Qual é a primeira coisa que você deve fazer para montar um quebra-cabeça mais rápido?", options: ["Separar as peças da borda (que têm um lado reto)", "Colar as peças em qualquer ordem", "Esconder as peças do meio", "Misturar todas as peças"] },
        { kind: "draw", instruction: "Desenhe como ficaria a borda (moldura) de um quebra-cabeça retangular, sem as peças do meio:" },
        { kind: "fill-blank", instruction: "Complete as frases sobre o quebra-cabeça:", items: ["As peças da borda têm pelo menos um lado __________", "Depois de montar a borda, eu monto o __________", "Separar peças pela __________ ajuda a montar mais rápido", "Uma peça de canto tem __________ lados retos"] },
      ],
    },
    {
      theme: "Troca de problemas: eu invento, o colega resolve e eu confiro",
      exercises: [
        { kind: "lines", instruction: "Invente um problema de matemática usando coisas da sua casa (por exemplo, brinquedos ou frutas). Escreva o problema completo:", lines: 4 },
        { kind: "lines", instruction: "Troque seu problema com um colega ou familiar. Escreva a resposta que ele encontrou:", lines: 2 },
        { kind: "options", instruction: "Depois de conferir a resposta do problema, o que você deve fazer se ela estiver errada?", options: ["Explicar com calma onde está o erro e ajudar a corrigir", "Rasgar o problema", "Não falar nada", "Rir do colega"] },
        { kind: "draw", instruction: "Desenhe uma cena que represente o problema que você inventou:" },
      ],
    },
    {
      theme: "Os números no nosso dia a dia",
      exercises: [
        { kind: "draw", instruction: "Com a ajuda de alguém da sua casa, escolha um objeto que tem um número escrito nele (controle remoto, caixa, embalagem) e desenhe esse objeto com o número:" },
        { kind: "options", instruction: "O número escrito na porta da sua casa serve para...", options: ["mostrar quantas pessoas moram lá", "identificar a casa (código de endereço)", "mostrar a idade da casa", "mostrar o tamanho da casa"] },
        { kind: "word-select", instruction: "Circule apenas os números:", items: ["5", "B", "12", "@", "7", "#"] },
        { kind: "fill-blank", instruction: "Pergunte para alguém da família e complete:", items: ["O número da casa (ou apartamento) é ___.", "Um número de telefone de alguém da família começa com ___."] },
      ],
    },
    {
      theme: "Descobrindo como se escrevem os números",
      exercises: [
        { kind: "lines", instruction: "Escreva, do seu jeito, o número da sua idade e o número de pessoas que moram com você:", lines: 2 },
        { kind: "fill-blank", instruction: "Peça para alguém da sua casa ditar 3 números pequenos para você escrever:", items: ["___", "___", "___"] },
        { kind: "options", instruction: "Qual desses é o número \"quatro\"?", options: ["3", "4", "7", "1"] },
        { kind: "word-select", instruction: "Circule os números que você já sabe escrever sozinho:", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      ],
    },
    {
      theme: "Contando e registrando coleções",
      exercises: [
        { kind: "draw", instruction: "Escolha uma coleção de objetos da sua casa (talheres, sapatos, brinquedos) e desenhe todos eles:" },
        { kind: "fill-blank", instruction: "Conte e registre com números:", items: ["Quantidade de portas na sua casa: ___", "Quantidade de janelas na sua sala: ___"] },
        { kind: "word-select", instruction: "Circule as formas de registrar uma contagem:", items: ["Desenho", "Número", "Cheiro", "Palavra escrita", "Cor do céu"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa esconder alguns objetos na mão. Conte e escreva quantos são:", lines: 1 },
      ],
    },
    {
      theme: "Contagem para frente e para trás",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as sequências:", items: ["3, 4, 5, ___, 7", "8, ___, 6, 5, 4", "0, 2, 4, ___, 8"] },
        { kind: "options", instruction: "Qual número vem antes do 15?", options: ["16", "14", "13", "17"] },
        { kind: "word-select", instruction: "Circule os números que aparecem quando contamos de 2 em 2 começando do 0:", items: ["0", "1", "2", "3", "4", "5", "6"] },
        { kind: "lines", instruction: "Peça para alguém contar em voz alta de trás para frente começando do 10. Depois, tente sozinho e escreva até onde você conseguiu ir:", lines: 1 },
      ],
    },
    {
      theme: "Qual número é maior?",
      exercises: [
        { kind: "fill-blank", instruction: "Compare usando > (maior) ou < (menor):", items: ["10 ___ 6", "2 ___ 8", "14 ___ 11"] },
        { kind: "options", instruction: "Qual desses números é o menor?", options: ["18", "8", "13", "20"] },
        { kind: "lines", instruction: "Escreva um número maior que 10 e um número menor que 5:", lines: 2 },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer dois números. Escreva os dois números e diga qual deles é maior:", lines: 2 },
      ],
    },
    {
      theme: "Formando pares e grupos",
      exercises: [
        { kind: "draw", instruction: "Encontre 6 objetos iguais na sua casa (meias, sapatos, talheres) e desenhe-os organizados em pares:" },
        { kind: "fill-blank", instruction: "Complete:", items: ["Um par tem ___ objetos.", "Dois pares têm ___ objetos."] },
        { kind: "options", instruction: "Qual desses grupos forma exatamente 3 pares?", options: ["5 objetos", "6 objetos", "7 objetos", "9 objetos"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa separar os talheres da gaveta em grupos de garfos, facas e colheres. Escreva quantos grupos foram formados:", lines: 1 },
      ],
    },
    {
      theme: "Mais, menos ou igual?",
      exercises: [
        { kind: "draw", instruction: "Encontre dois grupos de objetos na sua casa (por exemplo, colheres e garfos) e desenhe os dois grupos:" },
        { kind: "options", instruction: "No desenho que você fez, o grupo com mais objetos foi:", options: ["O primeiro", "O segundo", "Os dois são iguais", "Não deu para saber"] },
        { kind: "fill-blank", instruction: "Complete com MAIS, MENOS ou IGUAL:", items: ["Se eu tenho 2 balas e meu amigo tem 5, eu tenho ___ balas que ele.", "Se eu tenho 6 figurinhas e meu amigo tem 6, nós temos quantidade ___."] },
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar duas quantidades de objetos (por exemplo, chinelos e chaves). Escreva qual grupo tem mais:", lines: 1 },
      ],
    },
    {
      theme: "Quebrando e juntando números",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as composições:", items: ["8 = 6 + ___", "9 = 4 + ___", "5 = 1 + ___"] },
        { kind: "draw", instruction: "Use 9 objetos da sua casa (grãos de feijão, botões, tampinhas). Separe-os em dois grupos e desenhe como ficou:" },
        { kind: "options", instruction: "Quanto é 5 + 5?", options: ["9", "10", "11", "8"] },
        { kind: "lines", instruction: "Peça para alguém pensar em um número entre 5 e 10. Descubra de duas formas diferentes como formar esse número juntando dois números menores e escreva:", lines: 2 },
      ],
    },
    {
      theme: "Contas de cabeça: fatos da soma e da subtração",
      exercises: [
        { kind: "fill-blank", instruction: "Resolva de cabeça:", items: ["6 + 3 = ___", "8 - 5 = ___", "1 + 9 = ___", "10 - 6 = ___"] },
        { kind: "options", instruction: "Quanto é 7 - 3?", options: ["3", "4", "5", "10"] },
        { kind: "word-select", instruction: "Circule as contas que dão resultado igual a 10:", items: ["6 + 4", "5 + 4", "8 + 2", "15 - 5", "9 - 1"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa inventar uma conta de soma ou subtração simples. Resolva de cabeça e escreva a conta com a resposta:", lines: 1 },
      ],
    },
    {
      theme: "O que acontece quando eu acrescento ou tiro?",
      exercises: [
        { kind: "fill-blank", instruction: "Complete:", items: ["Tinha 7 reais e gastei 2. Ficaram ___ reais.", "Tinha 4 brinquedos e ganhei 6. Agora tenho ___ brinquedos."] },
        { kind: "options", instruction: "Quando eu acrescento objetos a uma coleção, a quantidade...", options: ["Aumenta", "Diminui", "Some tudo", "Fica igual sempre"] },
        { kind: "draw", instruction: "Peça para alguém te dar alguns objetos e depois tirar alguns. Desenhe o antes e o depois:" },
        { kind: "lines", instruction: "Escreva uma situação da sua casa em que alguma coisa foi acrescentada ou tirada (por exemplo, comida no prato, roupa na cesta):", lines: 2 },
      ],
    },
    {
      theme: "Dobro e triplo com objetos",
      exercises: [
        { kind: "fill-blank", instruction: "Complete:", items: ["O dobro de 3 é ___.", "O triplo de 3 é ___.", "O dobro de 6 é ___."] },
        { kind: "draw", instruction: "Escolha uma quantidade pequena de objetos da sua casa e desenhe o triplo dela (três vezes mais):" },
        { kind: "options", instruction: "Qual desses números é o dobro de 3?", options: ["6", "9", "3", "5"] },
        { kind: "lines", instruction: "Peça para alguém pensar em um número pequeno. Descubra e escreva o dobro e o triplo desse número:", lines: 2 },
      ],
    },
    {
      theme: "Organizando em grupos iguais",
      exercises: [
        { kind: "draw", instruction: "Pegue objetos da sua casa (grãos, tampinhas, brinquedos pequenos) e organize-os em grupos iguais. Desenhe como ficou:" },
        { kind: "fill-blank", instruction: "Complete:", items: ["6 objetos em grupos de 3 formam ___ grupos.", "10 objetos em grupos de 5 formam ___ grupos."] },
        { kind: "options", instruction: "Por que organizar objetos em grupos iguais ajuda na contagem?", options: ["Porque fica mais fácil contar de pouco em pouco", "Porque os objetos ficam mais bonitos", "Porque esconde os objetos", "Não ajuda em nada"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a separar um pacote de biscoitos (ou outro alimento) em grupos iguais para dividir entre as pessoas. Escreva quantos grupos formaram:", lines: 1 },
      ],
    },
    {
      theme: "Resolvendo problemas de juntar",
      exercises: [
        { kind: "fill-blank", instruction: "Resolva o problema: Pedro tem 3 figurinhas e seu irmão deu mais 5. Com quantas figurinhas Pedro ficou?", items: ["3 + 5 = ___"] },
        { kind: "draw", instruction: "Resolva desenhando: na fruteira tinham 2 maçãs. Alguém colocou mais 4. Desenhe a fruteira com todas as maçãs:" },
        { kind: "options", instruction: "Maria tinha 7 balas e ganhou mais 2. Com quantas balas ela ficou?", options: ["9", "5", "8", "10"] },
        { kind: "lines", instruction: "Invente, com a ajuda de alguém da sua casa, um problema de juntar (somar) usando objetos da sua casa. Escreva o problema e a resposta:", lines: 3 },
      ],
    },
    {
      theme: "Organizando por cor, forma e tamanho",
      exercises: [
        { kind: "draw", instruction: "Escolha alguns brinquedos ou objetos da sua casa e desenhe-os organizados por cor (juntando os da mesma cor):" },
        { kind: "word-select", instruction: "Circule as formas que são redondas:", items: ["Círculo", "Quadrado", "Bola", "Livro", "Roda", "Triângulo"] },
        { kind: "options", instruction: "Qual desses grupos está organizado por tamanho, do menor para o maior?", options: ["Pequeno, médio, grande", "Grande, pequeno, médio", "Médio, grande, pequeno", "Não é possível organizar por tamanho"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a organizar as roupas ou os brinquedos por cor ou tamanho. Escreva como você organizou:", lines: 2 },
      ],
    },
    {
      theme: "Descobrindo o que vem depois no padrão",
      exercises: [
        { kind: "fill-blank", instruction: "Descubra o padrão e complete:", items: ["🔺🔻🔺🔻___", "3, 6, 3, 6, ___", "1, 3, 5, ___, 9"] },
        { kind: "options", instruction: "Em um padrão vermelho, verde, vermelho, verde, vermelho, ___. Qual cor vem depois?", options: ["Vermelho", "Verde", "Azul", "Amarelo"] },
        { kind: "draw", instruction: "Peça para alguém da sua casa criar um padrão com objetos (por exemplo, garfo, colher, garfo, colher...). Desenhe o padrão que essa pessoa criou:" },
        { kind: "lines", instruction: "Observe uma roupa, tapete ou papel de parede da sua casa que tenha um padrão que se repete. Escreva o que você encontrou:", lines: 2 },
      ],
    },
    {
      theme: "Onde eu estou na sala?",
      exercises: [
        { kind: "draw", instruction: "Desenhe um cômodo da sua casa (seu quarto ou a sala) e mostre onde fica um móvel importante, como a cama ou o sofá:" },
        { kind: "options", instruction: "Um ponto de referência é...", options: ["algo fixo que ajuda a explicar onde um lugar fica", "um brinquedo qualquer", "uma cor", "um número aleatório"] },
        { kind: "word-select", instruction: "Circule os pontos de referência que existem na sua casa:", items: ["Geladeira", "Cama", "Nuvem", "Porta de entrada", "Planeta", "Sofá"] },
        { kind: "lines", instruction: "Escreva perto de qual móvel ou cômodo fica o seu lugar preferido em casa:", lines: 2 },
      ],
    },
    {
      theme: "Minha posição na sala",
      exercises: [
        { kind: "draw", instruction: "Sente-se em um lugar da sua casa e desenhe o que está à sua frente e o que está atrás de você:" },
        { kind: "options", instruction: "Levante a sua mão direita. Ela fica do lado...", options: ["direito do seu corpo", "esquerdo do seu corpo", "de cima do seu corpo", "de baixo do seu corpo"] },
        { kind: "fill-blank", instruction: "Peça para alguém da sua casa ficar ao seu lado e complete:", items: ["Essa pessoa está à minha ___ (direita ou esquerda).", "Na minha frente está ___."] },
        { kind: "lines", instruction: "Escreva o que fica à sua direita e o que fica à sua esquerda quando você está deitado na sua cama:", lines: 2 },
      ],
    },
    {
      theme: "O caminho até lá",
      exercises: [
        { kind: "draw", instruction: "Desenhe o caminho que você faz do seu quarto até a cozinha (ou até a porta de entrada) da sua casa:" },
        { kind: "lines", instruction: "Peça para alguém da sua casa explicar o caminho de casa até um lugar próximo (mercado, escola, praça). Escreva esse caminho:", lines: 3 },
        { kind: "options", instruction: "Se eu ando para frente e depois viro à direita, eu fiz:", options: ["Um caminho com duas partes", "Nada", "Um círculo", "Um caminho com dez partes"] },
        { kind: "word-select", instruction: "Circule os lugares que podem fazer parte de um caminho até a sua casa:", items: ["Rua", "Esquina", "Nuvem", "Portão", "Planeta", "Calçada"] },
      ],
    },
    {
      theme: "Lendo mapinhas da sala",
      exercises: [
        { kind: "draw", instruction: "Com a ajuda de alguém da sua casa, faça um mapinha simples de um cômodo da sua casa (seu quarto, por exemplo):" },
        { kind: "options", instruction: "Ao olhar um mapinha desenhado de cima, os móveis aparecem...", options: ["como formas simples, vistas de cima", "com fotos reais", "invisíveis", "só com números"] },
        { kind: "fill-blank", instruction: "Complete usando o mapinha que você desenhou:", items: ["No meu mapinha, a cama (ou outro móvel) fica perto do(a) ___.", "A porta do cômodo fica do lado ___."] },
        { kind: "lines", instruction: "Peça para alguém explicar, olhando o seu mapinha, como chegar até um objeto escondido no cômodo. Escreva o que essa pessoa disse:", lines: 2 },
      ],
    },
    {
      theme: "Formas geométricas no dia a dia",
      exercises: [
        { kind: "draw", instruction: "Procure na sua casa um objeto parecido com um cubo, um com formato de esfera e outro com formato de cilindro. Desenhe os três:" },
        { kind: "options", instruction: "Um sorvete de casquinha (a casquinha vazia) tem formato parecido com um:", options: ["Cone", "Cubo", "Esfera", "Cilindro"] },
        { kind: "word-select", instruction: "Circule os objetos da sua casa que podem ter formato de cilindro:", items: ["Lata", "Copo", "Livro", "Rolo de papel", "Caixa", "Cano"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa ajudar você a encontrar um objeto com formato de bloco retangular (parecido com uma caixa). Escreva qual objeto encontraram:", lines: 1 },
      ],
    },
    {
      theme: "As faces da caixa",
      exercises: [
        { kind: "word-select", instruction: "Circule, na sua casa, os objetos que lembram uma caixa (bloco retangular):", items: ["Caixa de leite", "Bola", "Geladeira", "Livro", "Laranja", "Caixa de sapato"] },
        { kind: "draw", instruction: "Escolha uma caixa que você tem em casa (de remédio, de cereal, de sapato) e desenhe ela aqui:" },
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar uma caixa. Escreva o que tem dentro dela:", lines: 2 },
        { kind: "options", instruction: "Quantas faces uma caixa em formato de bloco retangular tem?", options: ["6", "4", "2", "8"] },
      ],
    },
    {
      theme: "Rola ou não rola?",
      exercises: [
        { kind: "lines", instruction: "Procure em casa um objeto que rola. Escreva o nome dele:", lines: 1 },
        { kind: "word-select", instruction: "Circule os objetos que rolam:", items: ["Lata de refrigerante", "Caixa de fósforo", "Laranja", "Controle remoto", "Bola de gude", "Livro"] },
        { kind: "options", instruction: "Qual desses objetos NÃO rola?", options: ["Caixa de sapato", "Bola", "Laranja", "Lata redonda"] },
        { kind: "draw", instruction: "Desenhe um objeto da sua casa que tem superfície arredondada." },
      ],
    },
    {
      theme: "Desenhando formas geométricas",
      exercises: [
        { kind: "draw", instruction: "Escolha um objeto da sua casa e desenhe ele do jeitinho que ele é (bola, caixa, lata ou cone)." },
        { kind: "lines", instruction: "Escreva o nome de um objeto da sua casa parecido com uma bola:", lines: 1 },
        { kind: "word-select", instruction: "Circule os objetos que lembram uma esfera (bola):", items: ["Laranja", "Caixa de leite", "Lata de tinta", "Bola de futebol", "Dado", "Casquinha de sorvete"] },
        { kind: "options", instruction: "Qual desses objetos tem formato parecido com um dado?", options: ["Caixa de sapato", "Bola", "Laranja", "Casquinha de sorvete"] },
      ],
    },
    {
      theme: "Vai acontecer ou não?",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa uma coisa que com certeza vai acontecer amanhã. Escreva:", lines: 2 },
        { kind: "options", instruction: "Amanhecer com o sol nascendo é uma coisa que:", options: ["Acontece com certeza", "É impossível", "Talvez aconteça", "Nunca acontece"] },
        { kind: "word-select", instruction: "Circule as situações que TALVEZ ACONTEÇAM ou têm certeza de acontecer:", items: ["Nevar na sua casa amanhã", "Você dormir hoje à noite", "Um gato falar com você", "O dia virar noite", "Uma vaca voar"] },
        { kind: "draw", instruction: "Desenhe uma situação que com certeza vai acontecer no seu dia (por exemplo, escovar os dentes)." },
      ],
    },
    {
      theme: "Pesquisando as preferências da turma",
      exercises: [
        { kind: "lines", instruction: "Pergunte para 2 pessoas da sua casa qual é a fruta preferida delas. Escreva os nomes e as frutas:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete com a pesquisa que você fez:", items: ["A fruta preferida de ____ é ____.", "A fruta preferida de ____ é ____."] },
        { kind: "options", instruction: "Para saber a preferência de várias pessoas, o que devemos fazer?", options: ["Perguntar e anotar as respostas", "Só imaginar", "Perguntar uma vez e esquecer", "Escolher por elas"] },
        { kind: "draw", instruction: "Desenhe a merenda que você mais gosta de comer na escola." },
      ],
    },
    {
      theme: "Lendo tabelas e gráficos simples",
      exercises: [
        { kind: "lines", instruction: "Pergunte para as pessoas da sua casa: prefere café ou suco? Escreva quantas pessoas escolheram cada um:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete com o resultado da sua pesquisa:", items: ["Quantas pessoas escolheram café: ____", "Quantas pessoas escolheram suco: ____"] },
        { kind: "options", instruction: "Se 4 pessoas escolheram café e 2 escolheram suco, qual bebida foi mais escolhida?", options: ["Café", "Suco", "As duas foram iguais", "Nenhuma"] },
        { kind: "draw", instruction: "Desenhe uma coluna para café e uma coluna para suco, mostrando o resultado da sua pesquisa em casa." },
      ],
    },
    {
      theme: "Coletando e organizando dados",
      exercises: [
        { kind: "lines", instruction: "Conte quantas pessoas moram na sua casa, quantos são crianças e quantos são adultos. Escreva os números:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete com a contagem da sua casa:", items: ["Número de adultos na minha casa: ____", "Número de crianças na minha casa: ____"] },
        { kind: "draw", instruction: "Desenhe uma tabela com duas colunas (ADULTOS e CRIANÇAS) e marque um risquinho para cada pessoa da sua casa." },
        { kind: "options", instruction: "Para organizar dados coletados, é útil usar:", options: ["Uma tabela", "Um desenho qualquer", "Nada, só de cabeça", "Um som"] },
      ],
    },
    {
      theme: "Contando o que o gráfico mostra",
      exercises: [
        { kind: "lines", instruction: "Mostre para alguém da sua casa um gráfico do seu caderno e explique com suas palavras o que ele mostra. Escreva o que você contou:", lines: 2 },
        { kind: "options", instruction: "Quando eu falo sobre um gráfico, é importante dizer:", options: ["O que cada coluna representa", "Só as cores", "Nada sobre os números", "Um segredo"] },
        { kind: "fill-blank", instruction: "Complete olhando um gráfico do seu caderno:", items: ["Neste gráfico, a coluna mais alta é: ____", "A coluna mais baixa é: ____"] },
        { kind: "draw", instruction: "Desenhe um gráfico simples mostrando quantas pessoas da sua casa gostam de futebol e quantas não gostam." },
      ],
    },
    {
      theme: "Medindo com o corpo e objetos",
      exercises: [
        { kind: "lines", instruction: "Meça o comprimento da sua cama usando passos. Escreva quantos passos ela tem:", lines: 1 },
        { kind: "fill-blank", instruction: "Complete depois de medir em casa:", items: ["A cama tem ____ passos de comprimento.", "A mesa da cozinha tem ____ palmos de largura."] },
        { kind: "options", instruction: "Uma unidade de medida não padronizada é:", options: ["O palmo da mão", "A régua", "A fita métrica", "O metro"] },
        { kind: "draw", instruction: "Desenhe um objeto da sua casa e mostre como você mediu ele (com palmos, pés ou passos)." },
      ],
    },
    {
      theme: "Quem é mais comprido, mais pesado, cabe mais?",
      exercises: [
        { kind: "lines", instruction: "Compare dois objetos da sua casa e escreva qual é mais pesado:", lines: 2 },
        { kind: "options", instruction: "Qual desses copos cabe mais água?", options: ["O copo maior", "O copo menor", "Os dois cabem igual", "Nenhum cabe água"] },
        { kind: "word-select", instruction: "Circule os objetos que você acha que CABEM MAIS água:", items: ["Colher", "Panela", "Garfo", "Balde", "Copo", "Xícara"] },
        { kind: "draw", instruction: "Desenhe dois objetos da sua casa e mostre qual é mais comprido." },
      ],
    },
    {
      theme: "Os dias da semana e o calendário",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa: que dia foi ontem? Escreva:", lines: 1 },
        { kind: "fill-blank", instruction: "Complete sobre os dias da semana:", items: ["Meu aniversário é em um dia da semana chamado: ____", "Meu dia da semana preferido é: ____"] },
        { kind: "word-select", instruction: "Circule o dia de hoje:", items: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"] },
        { kind: "options", instruction: "Depois de domingo, qual dia vem?", options: ["Segunda-feira", "Sábado", "Sexta-feira", "Terça-feira"] },
      ],
    },
    {
      theme: "Escrevendo a data de hoje",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa a data de aniversário dela. Escreva:", lines: 1 },
        { kind: "fill-blank", instruction: "Complete com a data do seu aniversário:", items: ["Dia do meu aniversário: ____", "Mês do meu aniversário: ____"] },
        { kind: "options", instruction: "Qual desses é o jeito certo de escrever uma data?", options: ["27/08/2026", "Agosto 27", "2026 dia", "Vinte sete"] },
        { kind: "draw", instruction: "Desenhe uma folhinha de calendário mostrando o dia do seu aniversário." },
      ],
    },
    {
      theme: "Conhecendo o dinheiro brasileiro",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar uma moeda ou nota de verdade. Escreva qual é o valor dela:", lines: 1 },
        { kind: "fill-blank", instruction: "Complete somando o dinheiro:", items: ["Se eu tenho 2 notas de 2 reais, tenho ____ reais no total.", "Se eu tenho 3 moedas de 1 real, tenho ____ reais no total."] },
        { kind: "options", instruction: "Para comprar um doce de 3 reais, quais moedas eu posso usar?", options: ["3 moedas de 1 real", "1 moeda de 1 real", "2 moedas de 1 real", "Nenhuma moeda"] },
        { kind: "draw", instruction: "Desenhe as moedas ou notas que você usaria para pagar um brinquedo de 5 reais." },
      ],
    },
    {
      theme: "Brincando e calculando",
      exercises: [
        { kind: "lines", instruction: "Brinque com alguém da sua casa de uma brincadeira com contagem (amarelinha, esconde-esconde contando, bolinha de gude). Escreva qual brincadeira vocês jogaram:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete sobre a brincadeira que você jogou:", items: ["No esconde-esconde, contei até: ____.", "Se eu tinha 5 figurinhas e ganhei mais 3 jogando, fiquei com ____."] },
        { kind: "options", instruction: "Em muitas brincadeiras tradicionais, para começar o jogo, uma criança precisa:", options: ["Contar em voz alta", "Ler um livro", "Escrever uma carta", "Dormir"] },
        { kind: "draw", instruction: "Desenhe você brincando com alguém da sua família." },
      ],
    },
    {
      theme: "Registrando as regras do jogo",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te ensinar uma brincadeira antiga. Escreva o nome da brincadeira:", lines: 1 },
        { kind: "fill-blank", instruction: "Complete sobre a brincadeira que você aprendeu:", items: ["Uma regra dessa brincadeira é: ____", "Essa brincadeira pode ser jogada por ____ pessoas."] },
        { kind: "options", instruction: "Uma boa forma de registrar quem ganhou várias rodadas de um jogo é usando:", options: ["Uma tabela para marcar os pontos", "Só a memória", "Nenhum registro", "Um desenho sem sentido"] },
        { kind: "draw", instruction: "Desenhe uma tabela simples para marcar os pontos de um jogo que você brinca em casa." },
      ],
    },
    {
      theme: "Matemática e conservação dos oceanos",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre como não jogar lixo no mar ou nos rios. Escreva uma ideia que vocês pensaram:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete sobre a reciclagem na sua casa:", items: ["Na minha casa separamos ____ tipos de lixo para reciclar.", "Se eu reduzir o uso de 2 sacolas plásticas por semana, em duas semanas eu deixo de usar ____ sacolas."] },
        { kind: "options", instruction: "Reciclar o plástico ajuda a:", options: ["Diminuir o lixo que vai para o mar", "Aumentar o lixo no mar", "Sujar mais os rios", "Não muda nada"] },
        { kind: "draw", instruction: "Desenhe você e sua família cuidando do meio ambiente (jogando lixo no lixo certo, por exemplo)." },
      ],
    },
    {
      theme: "Matemática no oceano profundo",
      exercises: [
        { kind: "lines", instruction: "Pesquise ou pergunte para alguém da sua casa o nome de um animal que vive no fundo do mar. Escreva:", lines: 1 },
        { kind: "fill-blank", instruction: "Resolva contando os animais marinhos:", items: ["Se uma água-viva tem 8 tentáculos e outra também tem 8, juntas têm ____ tentáculos.", "Uma lula tem 10 braços. Duas lulas juntas têm ____ braços."] },
        { kind: "options", instruction: "O oceano profundo é um lugar:", options: ["Muito escuro e frio", "Muito quente e cheio de luz", "Igual a uma piscina", "Sem nenhum animal"] },
        { kind: "draw", instruction: "Desenhe o animal marinho que mais te chamou atenção nas aulas sobre o oceano." },
      ],
    },
    {
      theme: "Explicando como eu pensei",
      exercises: [
        { kind: "lines", instruction: "Resolva com alguém da sua casa: se você tem 6 figurinhas e dá 2 para um amigo, com quantas você fica? Explique como pensou:", lines: 2 },
        { kind: "options", instruction: "Explicar em voz alta como resolvemos uma conta ajuda a:", options: ["Organizar as ideias na cabeça", "Esquecer a resposta", "Confundir mais ainda", "Nada, não ajuda"] },
        { kind: "fill-blank", instruction: "Complete contando como você pensou:", items: ["Para resolver 7 - 3, eu comecei contando a partir do número ____.", "O resultado que encontrei foi: ____."] },
        { kind: "draw", instruction: "Desenhe, com bolinhas ou risquinhos, como você resolveria a conta 5 + 4." },
      ],
    },
    {
      theme: "Contando como resolvi o problema",
      exercises: [
        { kind: "lines", instruction: "Resolva em casa: se tem 10 laranjas na fruteira e alguém come 4, quantas sobram? Explique para sua família como você resolveu:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete sobre o problema das laranjas:", items: ["O resultado do problema das laranjas é: ____.", "Eu contei para minha família usando: ____."] },
        { kind: "options", instruction: "Contar para a família como resolvemos um problema ajuda a:", options: ["Mostrar e organizar o que aprendemos", "Esconder o que aprendemos", "Confundir a família", "Nada disso"] },
        { kind: "draw", instruction: "Desenhe a fruteira com as laranjas que sobraram depois do problema." },
      ],
    },
  ],
  "lingua-portuguesa": [
    {
      theme: "Lista de nomes da turma e dos livros da sala",
      exercises: [
        { kind: "lines", instruction: "Escreva o nome de 4 pessoas que moram com você:", lines: 4 },
        { kind: "word-select", instruction: "Circule apenas os nomes de pessoas da família (e não de objetos da casa):", items: ["MÃE", "TRAVESSEIRO", "PAI", "GELADEIRA", "VOVÓ", "CONTROLE", "IRMÃO", "SOFÁ"] },
        { kind: "lines", instruction: "Escreva o título de um livro que você tem em casa ou de que você gosta:", lines: 1 },
        { kind: "draw", instruction: "Desenhe a capa desse livro:" },
      ],
    },
    {
      theme: "Organizando o cotidiano com listas",
      exercises: [
        { kind: "lines", instruction: "Escreva uma lista com 3 coisas que você precisa levar na mochila amanhã:", lines: 3 },
        { kind: "options", instruction: "Para que serve fazer uma lista antes de arrumar a mochila?", options: ["Para não esquecer nada importante", "Para desenhar bonito", "Para brincar com os amigos"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer 3 tarefas que precisam ser feitas hoje. Escreva a lista:", lines: 3 },
        { kind: "draw", instruction: "Desenhe você arrumando sua mochila:" },
      ],
    },
    {
      theme: "Leitura de parlendas e trava-línguas",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ensinar um trava-língua ou uma parlenda. Escreva-o aqui:", lines: 3 },
        { kind: "word-select", instruction: "Circule as palavras que rimam com MELÃO:", items: ["LEÃO", "MESA", "FEIJÃO", "BOLA", "BALÃO", "LIVRO"] },
        { kind: "draw", instruction: "Treine falar o trava-língua bem rápido com alguém da sua casa. Depois, desenhe as duas pessoas rindo da brincadeira:" },
      ],
    },
    {
      theme: "Lendo placas, rótulos e histórias em quadrinhos",
      exercises: [
        { kind: "options", instruction: "O que você acha que quer dizer uma placa com o desenho de um garfo e uma faca?", options: ["Tem um restaurante perto", "Proibido entrar", "Hospital"] },
        { kind: "lines", instruction: "Escreva o nome de 3 rótulos de embalagens que você tem na sua casa:", lines: 3 },
        { kind: "word-select", instruction: "Circule as palavras que podem aparecer em uma placa de aviso:", items: ["PARE", "MESA", "SILÊNCIO", "CADEIRA", "CUIDADO", "LIVRO"] },
        { kind: "draw", instruction: "Desenhe um quadrinho, com balão de fala, contando o que você fez depois da escola hoje:" },
      ],
    },
    {
      theme: "Roda de contos de fadas e fábulas de diferentes culturas",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém contar um conto de fadas ou uma fábula que essa pessoa conhece. Escreva o nome da história:", lines: 1 },
        { kind: "lines", instruction: "Escreva quem contou a história para você:", lines: 1 },
        { kind: "lines", instruction: "O que aconteceu no começo da história?", lines: 2 },
        { kind: "draw", instruction: "Desenhe o personagem de que você mais gostou:" },
      ],
    },
    {
      theme: "Cantigas e parlendas da tradição oral",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua família cantar uma cantiga de roda que essa pessoa cantava quando era criança. Escreva o nome dela:", lines: 1 },
        { kind: "lines", instruction: "Escreva um pedacinho dessa cantiga, do jeito que você conseguir:", lines: 2 },
        { kind: "options", instruction: "Essa cantiga era parecida com alguma que você já conhecia?", options: ["Sim", "Não", "Mais ou menos"] },
        { kind: "draw", instruction: "Desenhe essa pessoa cantando a cantiga para você:" },
      ],
    },
    {
      theme: "Relatos históricos e verbetes de enciclopédia",
      exercises: [
        { kind: "lines", instruction: "Escolha um animal ou objeto de curiosidade e pergunte para alguém da sua casa o que essa pessoa sabe sobre ele. Escreva o nome escolhido:", lines: 1 },
        { kind: "lines", instruction: "Escreva 2 informações que essa pessoa te contou:", lines: 2 },
        { kind: "lines", instruction: "Agora peça para alguém contar uma história antiga da sua família. Escreva sobre quem era a história:", lines: 2 },
        { kind: "draw", instruction: "Desenhe algo que você imaginou enquanto ouvia essa história:" },
      ],
    },
    {
      theme: "Escrevendo listas de palavras",
      exercises: [
        { kind: "lines", instruction: "Escreva uma lista com o nome de 5 frutas ou comidas que têm na sua casa:", lines: 5 },
        { kind: "word-select", instruction: "Circule, nesta lista, um nome que comece com a mesma letra do seu nome:", items: ["ANA", "BEATRIZ", "CARLOS", "DANIEL", "ELISA", "FELIPE", "GABRIEL", "HELOÍSA"] },
        { kind: "fill-blank", instruction: "Escolha 2 palavras da sua lista e separe as sílabas:", items: ["1. __________", "2. __________"] },
        { kind: "lines", instruction: "Agora copie sua lista inteira com letra bem caprichada:", lines: 5 },
      ],
    },
    {
      theme: "Escrevendo parlendas e quadrinhas de cor",
      exercises: [
        { kind: "lines", instruction: "Escreva de cor uma parlenda ou quadrinha que você sabe, do jeito que você conseguir (peça ajuda em casa se precisar):", lines: 4 },
        { kind: "fill-blank", instruction: "Escolha 3 palavras da parlenda que você escreveu e separe as sílabas:", items: ["1. __________", "2. __________", "3. __________"] },
        { kind: "options", instruction: "Essa parlenda tem palavras que rimam?", options: ["Sim", "Não", "Não sei"] },
        { kind: "draw", instruction: "Desenhe algo que essa parlenda faz você imaginar:" },
      ],
    },
    {
      theme: "Recontando histórias conhecidas",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém contar uma história que você já conhece. Escreva o título dela:", lines: 1 },
        { kind: "lines", instruction: "Agora reconte a história com suas palavras para essa pessoa. Escreva quem eram os personagens:", lines: 2 },
        { kind: "lines", instruction: "Onde a história acontecia?", lines: 1 },
        { kind: "draw", instruction: "Desenhe a parte da história que você mais gostou de recontar:" },
      ],
    },
    {
      theme: "Reescrevendo contos conhecidos",
      exercises: [
        { kind: "lines", instruction: "Escolha um conto que você conhece bem e escreva o começo dele, com suas palavras:", lines: 3 },
        { kind: "lines", instruction: "Escreva o que aconteceu no meio da história:", lines: 3 },
        { kind: "lines", instruction: "Escreva como a história terminou:", lines: 3 },
        { kind: "draw", instruction: "Desenhe a capa do seu conto reescrito:" },
      ],
    },
    {
      theme: "Relato escrito de um passeio da turma",
      exercises: [
        { kind: "lines", instruction: "Escreva sobre um passeio ou uma saída que você fez com sua família. O que aconteceu primeiro?", lines: 2 },
        { kind: "lines", instruction: "O que aconteceu depois?", lines: 2 },
        { kind: "lines", instruction: "O que aconteceu por último?", lines: 2 },
        { kind: "word-select", instruction: "Circule as palavras que indicam tempo:", items: ["ANTES", "JANELA", "ENQUANTO", "CADEIRA", "NO FIM", "MESA", "DEPOIS", "LIVRO"] },
      ],
    },
    {
      theme: "Escrevendo bilhetes e cartões",
      exercises: [
        { kind: "lines", instruction: "Escolha alguém da sua família para quem você vai escrever um cartão. Escreva o nome dessa pessoa:", lines: 1 },
        { kind: "lines", instruction: "Escreva uma mensagem de carinho ou de agradecimento para essa pessoa:", lines: 4 },
        { kind: "lines", instruction: "Não esqueça de assinar! Escreva seu nome:", lines: 1 },
        { kind: "draw", instruction: "Desenhe um enfeite para decorar o cartão:" },
      ],
    },
    {
      theme: "Escrevendo regras de brincadeiras e receitas",
      gradeYear: "2-ano",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ensinar uma receita simples, como uma vitamina ou um suco. Escreva o nome da receita:", lines: 1 },
        { kind: "lines", instruction: "Escreva os ingredientes que essa pessoa usa:", lines: 3 },
        { kind: "lines", instruction: "Escreva o passo a passo da receita, na ordem certa (1º, 2º, 3º...):", lines: 4 },
        { kind: "draw", instruction: "Desenhe a receita pronta:" },
      ],
    },
    {
      theme: "Contação de histórias de diferentes culturas",
      gradeYear: "2-ano",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém contar uma história que aprendeu quando era criança. De que lugar ou cultura é essa história?", lines: 1 },
        { kind: "lines", instruction: "O que você mais gostou nessa história?", lines: 2 },
        { kind: "options", instruction: "Você gostaria de contar essa história para a turma na próxima roda?", options: ["Sim", "Não", "Talvez"] },
        { kind: "draw", instruction: "Desenhe um momento dessa história:" },
      ],
    },
    {
      theme: "Explicando o que aprendemos",
      exercises: [
        { kind: "lines", instruction: "Escolha algo que você aprendeu essa semana na escola e escreva o nome do assunto:", lines: 1 },
        { kind: "lines", instruction: "Explique esse assunto para alguém da sua casa. Depois, escreva com suas palavras o que você explicou:", lines: 3 },
        { kind: "lines", instruction: "Essa pessoa fez alguma pergunta sobre o assunto? Escreva a pergunta:", lines: 2 },
      ],
    },
    {
      theme: "Roda de conversa sobre temas do dia",
      exercises: [
        { kind: "lines", instruction: "Escolha um assunto e converse sobre ele com alguém da sua casa. Escreva qual foi o assunto:", lines: 1 },
        { kind: "lines", instruction: "O que você pensa sobre esse assunto?", lines: 2 },
        { kind: "lines", instruction: "O que a pessoa com quem você conversou pensa sobre ele?", lines: 2 },
      ],
    },
    {
      theme: "Relatando experiências do fim de semana",
      exercises: [
        { kind: "lines", instruction: "Escreva sobre algo interessante que aconteceu com você esta semana, em um dia que não foi sábado ou domingo. O que aconteceu primeiro?", lines: 2 },
        { kind: "lines", instruction: "O que aconteceu depois?", lines: 2 },
        { kind: "lines", instruction: "Como você se sentiu nesse momento?", lines: 2 },
        { kind: "draw", instruction: "Desenhe esse momento:" },
      ],
    },
    {
      theme: "Discussão em roda: ouvir e opinar",
      exercises: [
        { kind: "lines", instruction: "Escolha um assunto e pergunte a opinião de duas pessoas da sua casa sobre ele. Qual foi o assunto?", lines: 1 },
        { kind: "lines", instruction: "Escreva a opinião da primeira pessoa:", lines: 2 },
        { kind: "lines", instruction: "Escreva a opinião da segunda pessoa:", lines: 2 },
        { kind: "lines", instruction: "As opiniões foram parecidas ou diferentes? Escreva o que você achou:", lines: 2 },
      ],
    },
    {
      theme: "Personagens dos contos",
      exercises: [
        { kind: "lines", instruction: "Escreva o nome de um personagem de uma história que você conhece (pode ser de livro, filme ou desenho):", lines: 1 },
        { kind: "options", instruction: "Marque as características desse personagem:", options: ["Corajoso", "Bondoso", "Esperto", "Medroso", "Brincalhão"] },
        { kind: "lines", instruction: "Escreva por que você escolheu essas características:", lines: 2 },
        { kind: "draw", instruction: "Desenhe esse personagem:" },
      ],
    },
    {
      theme: "Revisando textos coletivos: evitando repetições",
      exercises: [
        { kind: "fill-blank", instruction: "Troque a palavra repetida por outra parecida ou por um pronome:", items: ["A borboleta pousou na flor. A borboleta voou embora. → A borboleta pousou na flor. __________ voou embora.", "O menino abriu a caixa. O menino sorriu. → O menino abriu a caixa. __________ sorriu.", "A galinha botou um ovo. A galinha cacarejou. → A galinha botou um ovo. __________ cacarejou."] },
        { kind: "word-select", instruction: "Circule as palavras que poderiam substituir \"o cachorro\" em um texto:", items: ["ELE", "O BICHO", "A MESA", "O ANIMAL", "AZUL", "O PEQUENO"] },
        { kind: "lines", instruction: "Escreva duas frases seguidas contando algo que você fez, repetindo seu nome nas duas. Depois reescreva trocando a segunda vez pelo pronome \"eu\":", lines: 3 },
        { kind: "lines", instruction: "Peça para alguém em casa ouvir suas duas frases e dizer qual ficou mais bonita de ouvir:", lines: 1 },
      ],
    },
    {
      theme: "Reescrita de texto com coerência",
      exercises: [
        { kind: "lines", instruction: "Escreva um textinho curto (3 frases) contando o que você fez ao acordar hoje, na ordem certa:", lines: 4 },
        { kind: "options", instruction: "Depois de escrever, releia. As frases contam a história em uma ordem que faz sentido?", options: ["Sim, uma coisa depois da outra", "Estão fora de ordem", "Não sei"] },
        { kind: "fill-blank", instruction: "Se alguma parte ficou confusa, escreva ela de novo, mais clara:", items: ["Frase corrigida: __________"] },
        { kind: "lines", instruction: "Peça para alguém da família ler seu texto e contar, com as próprias palavras, o que entendeu:", lines: 2 },
      ],
    },
    {
      theme: "Separando as palavras do texto",
      exercises: [
        { kind: "fill-blank", instruction: "Separe as palavras destas frases grudadas:", items: ["OPATOFOINALAGOA → ________________________", "MINHAMÃEFEZBOLO → ________________________", "ELEGOSTADEFUTEBOL → ________________________"] },
        { kind: "word-select", instruction: "Circule só as que são palavras de verdade (as outras estão erradas, grudadas ou cortadas):", items: ["CASADO", "CA SA", "ESCOLA", "ES COLA", "BONECA", "BONE CA"] },
        { kind: "lines", instruction: "Escreva uma frase sua, sem deixar nenhuma palavra grudada nem cortada errado:", lines: 2 },
      ],
    },
    {
      theme: "Palavras acentuadas",
      exercises: [
        { kind: "word-select", instruction: "Circule as palavras que têm acento:", items: ["ÔNIBUS", "JANELA", "AVÔ", "PÉ", "SAPATO", "VOCÊ", "CADEIRA", "ÁRVORE"] },
        { kind: "fill-blank", instruction: "Complete as palavras colocando o acento no lugar certo:", items: ["CAF_ (café)", "AV_ (avó)", "V_ (pé)"] },
        { kind: "lines", instruction: "Escreva 3 palavras acentuadas que existem lá na sua casa:", lines: 3 },
        { kind: "lines", instruction: "Peça para alguém em casa ler suas palavras e dizer se o acento está certo:", lines: 1 },
      ],
    },
    {
      theme: "Palavras difíceis: H, L, LH, C e S",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com H, L, LH, C ou S:", items: ["__ORTA", "TRABA__O", "VE__O", "ABE__A", "__APÉU"] },
        { kind: "word-select", instruction: "Circule as palavras em que o H não tem nenhum som:", items: ["HORTA", "HOMEM", "CASA", "HOSPITAL", "MESA", "HOJE"] },
        { kind: "word-select", instruction: "Circule as palavras escritas com LH:", items: ["TOALHA", "MELANCIA", "OLHO", "GAROTO", "COELHO", "CADERNO"] },
        { kind: "lines", instruction: "Escreva uma frase usando uma palavra difícil que você aprendeu (com H, L, LH, C ou S):", lines: 2 },
      ],
    },
    {
      theme: "Roda de notícias e reportagens da turma",
      exercises: [
        { kind: "lines", instruction: "Converse com sua família sobre uma notícia que aconteceu essa semana. Escreva do que ela falava:", lines: 2 },
        { kind: "fill-blank", instruction: "Complete com as informações dessa notícia:", items: ["Quem: __________", "O quê: __________", "Quando: __________", "Onde: __________"] },
        { kind: "options", instruction: "Uma notícia de verdade deve contar:", options: ["Fatos que realmente aconteceram", "Coisas inventadas", "Segredos de brincadeira"] },
        { kind: "draw", instruction: "Desenhe uma cena da notícia que você contou." },
      ],
    },
    {
      theme: "Escrevendo listas com letras móveis",
      exercises: [
        { kind: "lines", instruction: "Se você tivesse letras móveis em casa, que lista gostaria de montar (comidas favoritas, brinquedos, nomes da família)? Escolha uma:", lines: 1 },
        { kind: "fill-blank", instruction: "Escreva 3 itens dessa lista, uma letra de cada vez, como se estivesse montando com letras móveis:", items: ["1. __________", "2. __________", "3. __________"] },
        { kind: "word-select", instruction: "Circule o que também pode virar uma lista escrita:", items: ["INGREDIENTES DE RECEITA", "NOMES DE COLEGAS", "CORES FAVORITAS", "UM DESENHO SOZINHO", "TÍTULOS DE FILMES", "UM ABRAÇO"] },
        { kind: "lines", instruction: "Peça para alguém em casa ditar mais uma palavra para você escrever na sua lista:", lines: 1 },
      ],
    },
    {
      theme: "Escrevendo indicações literárias e verbetes de curiosidades",
      gradeYear: "2-ano",
      exercises: [
        { kind: "lines", instruction: "Escolha um livro que você tem em casa ou já leu antes e escreva o título:", lines: 1 },
        { kind: "lines", instruction: "Escreva uma indicação curta para um amigo: por que ele deveria ler esse livro?", lines: 3 },
        { kind: "lines", instruction: "Escolha um animal ou lugar que você gosta e escreva (ou peça para alguém ajudar a escrever) uma curiosidade sobre ele:", lines: 3 },
        { kind: "draw", instruction: "Desenhe a capa do livro que você indicou." },
      ],
    },
    {
      theme: "Revisando textos: cortando o que não combina",
      exercises: [
        { kind: "fill-blank", instruction: "Reescreva as frases tirando as palavras de fala que não combinam com um texto escrito:", items: ["A vovó, tipo, fez um bolo. → __________", "Eu fui, aí, na casa do meu tio. → __________", "O cachorro, sabe, latiu a noite toda. → __________"] },
        { kind: "options", instruction: "Palavras como \"tipo\", \"aí\" e \"sabe\" usadas o tempo todo aparecem mais:", options: ["Quando a gente fala", "Quando a gente escreve um texto para todos lerem", "Em uma placa de rua"] },
        { kind: "lines", instruction: "Escreva uma frase organizada, sem palavras sobrando, contando o que você comeu hoje:", lines: 2 },
      ],
    },
    {
      theme: "Reescrevendo com o mesmo narrador",
      exercises: [
        { kind: "options", instruction: "Na frase \"Ela abriu a porta e viu um gato\", quem está contando a história?", options: ["Um personagem contando sobre si mesmo (1ª pessoa)", "Alguém de fora contando sobre outra pessoa (3ª pessoa)"] },
        { kind: "fill-blank", instruction: "Reescreva as frases trocando o narrador (de \"ele/ela\" para \"eu\"):", items: ["Ela abriu a porta devagar. → __________", "Ele correu para pegar a bola. → __________"] },
        { kind: "lines", instruction: "Escolha uma história que você conhece bem e reescreva o começo dela mudando o narrador (se era em 3ª pessoa, escreva em 1ª pessoa, ou o contrário):", lines: 4 },
      ],
    },
    {
      theme: "Comparando coisas nas histórias",
      exercises: [
        { kind: "word-select", instruction: "Circule as frases que comparam uma coisa com outra:", items: ["LEVE COMO UMA PENA", "SUBIU A ESCADA", "TEIMOSO COMO UM BURRO", "ABRIU O LIVRO", "QUIETO COMO UM RATO", "FECHOU A PORTA"] },
        { kind: "fill-blank", instruction: "Complete as comparações do seu jeito:", items: ["Alto como __________", "Macio como __________", "Barulhento como __________"] },
        { kind: "lines", instruction: "Peça para alguém em casa te ajudar a pensar em uma comparação engraçada para descrever um bicho de estimação ou brinquedo. Escreva aqui:", lines: 2 },
        { kind: "draw", instruction: "Desenhe a comparação que você inventou." },
      ],
    },
    {
      theme: "O que as imagens do livro nos contam",
      exercises: [
        { kind: "options", instruction: "Cores claras e brilhantes numa ilustração costumam passar a sensação de:", options: ["Alegria e festa", "Medo e mistério", "Nada, é só enfeite"] },
        { kind: "lines", instruction: "Escolha uma ilustração de um livro que você tem em casa. O que ela mostra que as palavras não contam?", lines: 3 },
        { kind: "word-select", instruction: "Circule o que costuma aparecer nas ilustrações de um livro:", items: ["DESENHOS", "CORES", "SOMBRAS", "NÚMERO DA PÁGINA", "EXPRESSÕES DO ROSTO", "TÍTULO DO CAPÍTULO"] },
        { kind: "draw", instruction: "Desenhe uma cena usando cores que combinem com o sentimento de alegria." },
      ],
    },
    {
      theme: "Palavras que soam parecido: M, N, NH e til",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com M ou N (lembre-se: antes de P e B usa-se M):", items: ["TA__BÉM", "A__IGO", "CA__BALO", "PI__TAR"] },
        { kind: "word-select", instruction: "Circule as palavras escritas com NH:", items: ["PINHEIRO", "CARINHO", "MENINO", "NINHO", "SAPATO", "VIZINHO"] },
        { kind: "word-select", instruction: "Circule as palavras que têm til (~):", items: ["LEÃO", "JANELA", "ÓRFÃ", "MOÇA", "CORAÇÃO", "BALÃO"] },
        { kind: "lines", instruction: "Escreva uma frase usando uma palavra com M, N, NH ou til que você encontrou em casa:", lines: 2 },
      ],
    },
    {
      theme: "Para quem e para quê vou escrever?",
      exercises: [
        { kind: "options", instruction: "Antes de escrever qualquer texto, é importante pensar:", options: ["Para quem vou escrever e por qual motivo", "Só na letra bonita", "Em nada, é só começar"] },
        { kind: "lines", instruction: "Imagine que você vai escrever um convite. Para quem seria esse convite?", lines: 1 },
        { kind: "fill-blank", instruction: "Complete pensando em um texto que você poderia escrever para alguém da família:", items: ["Vou escrever para: __________", "O motivo é: __________"] },
        { kind: "lines", instruction: "Escreva duas linhas desse textinho para a pessoa que você escolheu:", lines: 2 },
      ],
    },
    {
      theme: "De onde vem o assunto do texto",
      exercises: [
        { kind: "options", instruction: "De onde pode vir o assunto de um texto?", options: ["De algo que vivemos, de uma pesquisa ou da imaginação", "Só do que o professor mandar copiar", "Textos não precisam ter assunto"] },
        { kind: "lines", instruction: "Escolha um assunto que você conhece bem da sua casa (um animal de estimação, uma comida, um passeio) e escreva o nome dele:", lines: 1 },
        { kind: "lines", instruction: "Escreva 2 coisas que você já sabe sobre esse assunto, sem precisar pesquisar:", lines: 2 },
        { kind: "draw", instruction: "Desenhe o assunto que você escolheu." },
      ],
    },
    {
      theme: "Fazendo o plano do texto",
      exercises: [
        { kind: "fill-blank", instruction: "Faça o plano de um textinho antes de escrevê-lo:", items: ["Sobre o que vou escrever: __________", "Como vai começar: __________", "O que vai acontecer no meio: __________", "Como vai terminar: __________"] },
        { kind: "options", instruction: "Fazer um plano antes de escrever ajuda porque:", options: ["Ajuda a não esquecer as ideias", "Deixa mais demorado sem motivo", "Atrapalha a escrita"] },
        { kind: "lines", instruction: "Agora escreva o texto seguindo o plano que você fez:", lines: 5 },
        { kind: "lines", instruction: "Leia seu plano para alguém da família antes de escrever o texto. O que a pessoa achou da ideia?", lines: 1 },
      ],
    },
    {
      theme: "Revisando o texto: a primeira versão não é a última",
      exercises: [
        { kind: "lines", instruction: "Escreva uma primeira versão de um textinho curto (3 frases) sobre seu animal ou brincadeira favorita:", lines: 4 },
        { kind: "options", instruction: "Depois de terminar de escrever, o que é melhor fazer?", options: ["Reler e ver o que pode ficar melhor", "Guardar sem reler", "Mostrar sem olhar de novo"] },
        { kind: "fill-blank", instruction: "Releia seu texto e escreva uma frase melhorada:", items: ["Frase melhorada: __________"] },
        { kind: "lines", instruction: "Peça para alguém em casa ler as duas versões e dizer qual ficou melhor:", lines: 1 },
      ],
    },
    {
      theme: "Combinando como vai ser o texto antes de escrever",
      exercises: [
        { kind: "lines", instruction: "Se você fosse escrever um texto com alguém da sua família, que tipo de texto poderiam fazer juntos (lista de compras, bilhete, receita)?", lines: 1 },
        { kind: "options", instruction: "Quando duas pessoas têm ideias diferentes sobre como fazer um texto junto, o melhor é:", options: ["Conversar até combinar uma ideia para os dois", "Cada um fazer o seu sem combinar nada", "Desistir de escrever"] },
        { kind: "lines", instruction: "Escreva sua ideia para esse texto combinado:", lines: 2 },
        { kind: "lines", instruction: "Escreva a ideia que a pessoa da sua família deu:", lines: 2 },
      ],
    },
    {
      theme: "Compartilhando o texto para melhorar",
      exercises: [
        { kind: "lines", instruction: "Escreva um textinho curto para compartilhar com alguém da sua família:", lines: 4 },
        { kind: "lines", instruction: "Peça para a pessoa ler e escreva o que ela achou que você escreveu bem:", lines: 2 },
        { kind: "fill-blank", instruction: "Peça uma sugestão para melhorar o texto e escreva aqui:", items: ["Sugestão recebida: __________"] },
        { kind: "options", instruction: "Depois de ouvir uma sugestão sobre seu texto, você pode:", options: ["Usar a ideia para deixar o texto melhor", "Ignorar sem pensar", "Rasgar o texto"] },
      ],
    },
    {
      theme: "O dado das histórias",
      exercises: [
        { kind: "lines", instruction: "Escolha um objeto ou desenho qualquer perto de você em casa. Ele vai ser a sua imagem sorteada. Qual você escolheu?", lines: 1 },
        { kind: "lines", instruction: "Invente uma história usando essa imagem. Escreva o começo:", lines: 3 },
        { kind: "lines", instruction: "O que acontece depois na sua história?", lines: 2 },
        { kind: "draw", instruction: "Desenhe a parte da história que você inventou." },
      ],
    },
    {
      theme: "Roda de escuta de contos, mitos e lendas de diferentes culturas",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar um conto, mito ou lenda que conhece. Escreva o título e quem são os personagens:", lines: 3 },
        { kind: "options", instruction: "Qual dessas frases costuma aparecer no começo de um conto?", options: ["Era uma vez...", "Notícias de hoje...", "Ingredientes: dois ovos...", "Assinado pelo autor"] },
        { kind: "word-select", instruction: "Circule os tipos de história que você já ouviu contar:", items: ["CONTO", "LENDA", "MITO", "RECEITA", "FÁBULA", "BULA DE REMÉDIO"] },
        { kind: "draw", instruction: "Desenhe uma cena da história que alguém da sua família contou para você:" },
      ],
    },
    {
      theme: "Leitura autônoma de contos e fábulas de diversas culturas",
      exercises: [
        { kind: "lines", instruction: "Escolha um conto ou uma fábula para ler sozinho. Escreva o título e o nome do autor, se houver:", lines: 2 },
        { kind: "fill-blank", instruction: "Depois de ler, complete:", items: ["O personagem principal é ___", "A história acontece em ___", "O que mais gostei foi ___"] },
        { kind: "options", instruction: "O que diferencia uma fábula de outras histórias?", options: ["Tem animais que falam e ensina uma lição", "Fala sobre notícias verdadeiras", "Traz uma lista de ingredientes", "É sempre sobre números"] },
        { kind: "draw", instruction: "Desenhe o personagem principal da história que você leu:" },
      ],
    },
    {
      theme: "Leitura compartilhada de um livro em capítulos",
      exercises: [
        { kind: "lines", instruction: "Leia um capítulo de um livro com alguém da sua casa. Escreva o título do livro e o que aconteceu nesse capítulo:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete sobre a leitura de hoje:", items: ["Título do livro: ___", "Capítulo lido: ___", "Personagem favorito até agora: ___"] },
        { kind: "options", instruction: "O que faz você querer continuar lendo os próximos capítulos?", options: ["Saber o que vai acontecer depois", "Contar as páginas", "Ver só as figuras", "Nada, é chato"] },
        { kind: "draw", instruction: "Desenhe como você imagina que será o próximo capítulo:" },
      ],
    },
    {
      theme: "Investigando a linguagem dos contos: repetição, comparação e adjetivos",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as comparações como nos contos:", items: ["Forte como um ___", "Rápido como um ___", "Branco como a ___", "Esperto como uma ___"] },
        { kind: "word-select", instruction: "Circule os adjetivos (palavras que descrevem características) desta lista:", items: ["CORAJOSO", "CORRER", "GIGANTE", "MESA", "MALVADO", "BONITA"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer uma expressão com repetição, como \"corre, corre\" ou \"longe, longe daqui\". Escreva-a aqui:", lines: 2 },
        { kind: "options", instruction: "Em qual frase há uma comparação?", options: ["Ele era ligeiro como um raio", "Ele comeu o bolo todo", "A porta estava aberta", "Ela foi para a escola"] },
      ],
    },
    {
      theme: "Rodas de notícias e reportagens sobre diferentes grupos sociais",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma notícia que viu ou ouviu recentemente. Escreva o que aconteceu:", lines: 3 },
        { kind: "options", instruction: "Qual é o principal objetivo de uma notícia?", options: ["Informar sobre um fato que aconteceu", "Ensinar uma receita", "Contar uma história de fadas", "Vender um produto"] },
        { kind: "word-select", instruction: "Circule as palavras que combinam com uma notícia de jornal:", items: ["MANCHETE", "REPÓRTER", "PRINCESA", "ENTREVISTA", "FADA", "FATO"] },
        { kind: "draw", instruction: "Desenhe uma cena da notícia que você ouviu contar:" },
      ],
    },
    {
      theme: "Conhecendo outras culturas por relatos históricos e verbetes",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém mais velho da sua casa contar como era a vida dele(a) quando era criança. Escreva o que você descobriu:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete o verbete sobre um animal ou objeto que você conhece:", items: ["Nome: ___", "Onde vive ou é usado: ___", "Uma curiosidade sobre ele: ___"] },
        { kind: "options", instruction: "Onde podemos encontrar verbetes com informações sobre um assunto?", options: ["Em enciclopédias e dicionários", "Em bulas de remédio", "Em listas de compras", "Em bilhetes de ônibus"] },
        { kind: "draw", instruction: "Desenhe algo que você aprendeu sobre uma cultura diferente da sua:" },
      ],
    },
    {
      theme: "Pesquisa em diferentes fontes sobre um tema de estudo",
      exercises: [
        { kind: "lines", instruction: "Escolha um tema que você quer pesquisar. Escreva onde você poderia encontrar informações sobre ele na sua casa (livros, revistas, sites):", lines: 3 },
        { kind: "fill-blank", instruction: "Complete com fontes de pesquisa:", items: ["Livros e ___", "Revistas e ___", "Sites e ___"] },
        { kind: "options", instruction: "Qual dessas é uma fonte confiável para uma pesquisa escolar?", options: ["Uma enciclopédia ou site confiável", "Um boato que alguém contou sem provas", "Um desenho animado qualquer", "Um sonho que você teve"] },
        { kind: "draw", instruction: "Desenhe o tema que você escolheu pesquisar:" },
      ],
    },
    {
      theme: "Selecionando textos para pesquisa usando sumários e títulos",
      exercises: [
        { kind: "lines", instruction: "Pegue um livro da sua casa e observe o sumário (índice). Escreva três títulos de capítulos que você encontrou:", lines: 3 },
        { kind: "options", instruction: "Para que serve o título de um texto antes de começarmos a ler?", options: ["Para dar uma ideia do assunto do texto", "Para enfeitar a página", "Para contar quantas páginas tem", "Para substituir o texto todo"] },
        { kind: "fill-blank", instruction: "Complete:", items: ["O sumário fica no ___ do livro", "Ele mostra o ___ de cada capítulo", "Serve para ___ o que procuramos"] },
        { kind: "draw", instruction: "Desenhe a capa de um livro que você gostaria de pesquisar:" },
      ],
    },
    {
      theme: "Grifando informações importantes para a pesquisa",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém ler um pequeno texto ou verbete com você (de um livro, revista ou embalagem). Escreva a informação mais importante que vocês encontraram:", lines: 3 },
        { kind: "options", instruction: "Por que grifamos as informações importantes em um texto de pesquisa?", options: ["Para encontrá-las mais rápido depois", "Para deixar o texto colorido", "Para apagar o resto do texto", "Para copiar o livro inteiro"] },
        { kind: "fill-blank", instruction: "Complete sobre o texto que você leu:", items: ["Assunto do texto: ___", "Informação mais importante: ___"] },
        { kind: "draw", instruction: "Desenhe algo relacionado à informação que você grifou:" },
      ],
    },
    {
      theme: "Preparando um texto teatral para leitura dramática",
      exercises: [
        { kind: "lines", instruction: "Escolha uma fala curta de uma história e leia com alguém da sua casa, cada um fazendo a voz de um personagem. Escreva qual personagem você interpretou:", lines: 2 },
        { kind: "options", instruction: "Como devemos ler a fala de um personagem bravo?", options: ["Com voz firme e mais forte", "Sussurrando bem baixinho", "Cantando", "Sem dizer nada"] },
        { kind: "fill-blank", instruction: "Complete sobre a leitura que vocês fizeram:", items: ["Nome da história: ___", "Personagem que eu li: ___", "Como era a voz dele(a): ___"] },
        { kind: "draw", instruction: "Desenhe você e sua família encenando a história:" },
      ],
    },
    {
      theme: "Recontando histórias conhecidas com marcas do registro literário",
      exercises: [
        { kind: "lines", instruction: "Reconte com suas palavras uma história conhecida (como Chapeuzinho Vermelho ou Os Três Porquinhos) para alguém da sua casa. Escreva como você começou o reconto:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete com expressões usadas para começar e terminar histórias:", items: ["___, uma vez...", "E foram felizes para ___"] },
        { kind: "options", instruction: "Qual expressão combina com o final de um conto de fadas?", options: ["E viveram felizes para sempre", "Fim de jogo", "Assinado, o autor", "Ingredientes necessários"] },
        { kind: "draw", instruction: "Desenhe a cena da história que você recontou:" },
      ],
    },
    {
      theme: "Reescrita coletiva de um conto conhecido",
      exercises: [
        { kind: "lines", instruction: "Escolha um conto conhecido e dite um novo trecho dele para alguém da sua casa escrever. Copie aqui o que foi escrito:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete sobre o conto escolhido:", items: ["Título do conto: ___", "O que eu mudei na história: ___"] },
        { kind: "options", instruction: "Ao reescrever um conto, o que é importante manter?", options: ["Os personagens principais e o tema da história", "Só o título", "Nenhuma parte da história original", "Apenas o final"] },
        { kind: "draw", instruction: "Desenhe a parte do conto que você reescreveu:" },
      ],
    },
    {
      theme: "Criando novos finais para contos de diferentes culturas",
      exercises: [
        { kind: "lines", instruction: "Escolha um conto que você conhece bem e escreva um final diferente para ele:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete sobre o seu novo final:", items: ["Título do conto: ___", "O que acontece no meu novo final: ___"] },
        { kind: "options", instruction: "O que um bom final para uma história precisa ter?", options: ["Combinar com o que aconteceu antes na história", "Não ter nenhuma relação com a história", "Ser sempre triste", "Ser escrito em outra língua"] },
        { kind: "draw", instruction: "Desenhe o novo final que você criou:" },
      ],
    },
    {
      theme: "Escrevendo indicações literárias e verbetes de curiosidades",
      gradeYear: "3-ano",
      exercises: [
        { kind: "lines", instruction: "Escreva uma indicação de um livro ou uma história para alguém da sua casa ler, explicando por que essa pessoa vai gostar:", lines: 3 },
        { kind: "fill-blank", instruction: "Escreva um verbete curto sobre um animal, lugar ou objeto que você acha curioso:", items: ["Nome: ___", "Uma característica interessante: ___", "Onde encontramos ele: ___"] },
        { kind: "options", instruction: "Uma indicação literária serve para:", options: ["Convidar alguém a ler um livro", "Substituir o livro inteiro", "Contar o final da história", "Vender ingressos de cinema"] },
        { kind: "draw", instruction: "Desenhe a capa do livro que você indicou:" },
      ],
    },
    {
      theme: "Diário da turma: relatando experiências vividas",
      exercises: [
        { kind: "lines", instruction: "Escreva no seu diário o que aconteceu de mais importante com você hoje:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete seu registro do dia:", items: ["Hoje é ___ (dia da semana)", "O que aconteceu: ___", "Como eu me senti: ___"] },
        { kind: "options", instruction: "Qual dessas palavras ajuda a marcar o tempo em um relato?", options: ["Ontem", "Cadeira", "Verde", "Rápido"] },
        { kind: "draw", instruction: "Desenhe o momento mais importante do seu dia:" },
      ],
    },
    {
      theme: "Escrevendo regras de brincadeiras e receitas",
      gradeYear: "3-ano",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ensinar uma brincadeira ou uma receita simples. Escreva os passos em ordem:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete com as palavras que organizam a ordem dos passos:", items: ["___, misture os ingredientes", "___, escolha quem começa a brincar", "Por ___, aproveite o resultado"] },
        { kind: "options", instruction: "Por que é importante escrever as instruções em ordem?", options: ["Para que a pessoa consiga seguir os passos corretamente", "Porque fica mais bonito", "Não tem importância nenhuma", "Para deixar o texto mais longo"] },
        { kind: "draw", instruction: "Desenhe você fazendo a receita ou a brincadeira com sua família:" },
      ],
    },
    {
      theme: "Contação de histórias de diferentes culturas",
      gradeYear: "3-ano",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma história que aprendeu quando era criança, de família ou de outro lugar. Escreva o título e do que ela trata:", lines: 3 },
        { kind: "options", instruction: "O que é importante fazer enquanto alguém está contando uma história?", options: ["Prestar atenção e ouvir com respeito", "Falar ao mesmo tempo", "Sair andando pela casa", "Assistir televisão"] },
        { kind: "fill-blank", instruction: "Complete sobre a história que você ouviu:", items: ["Quem contou: ___", "De onde vem essa história: ___"] },
        { kind: "draw", instruction: "Desenhe a pessoa contando a história para você:" },
      ],
    },
    {
      theme: "Apresentação oral sobre temas estudados",
      exercises: [
        { kind: "lines", instruction: "Escolha um tema que você estudou na escola. Escreva três informações que você pode contar sobre ele para sua família:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete para se preparar para falar sobre o tema:", items: ["Tema escolhido: ___", "Primeira informação: ___", "Uma pergunta que eu poderia fazer sobre o tema: ___"] },
        { kind: "options", instruction: "O que ajuda bastante na hora de apresentar um tema para outras pessoas?", options: ["Ter anotações preparadas antes de falar", "Falar bem baixinho para ninguém ouvir", "Não pensar em nada antes", "Ler um assunto totalmente diferente"] },
        { kind: "draw", instruction: "Desenhe algo relacionado ao tema que você vai apresentar:" },
      ],
    },
    {
      theme: "Relatando experiências vividas para a turma",
      exercises: [
        { kind: "lines", instruction: "Escreva sobre uma experiência que você viveu recentemente e que gostaria de contar para seus colegas amanhã:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete seu relato:", items: ["O que aconteceu: ___", "Onde aconteceu: ___", "Como eu me senti: ___"] },
        { kind: "options", instruction: "Um bom relato de experiência deve contar:", options: ["O que aconteceu, onde e como a pessoa se sentiu", "Apenas uma lista de ingredientes", "Somente números e datas", "Nada sobre sentimentos"] },
        { kind: "draw", instruction: "Desenhe a experiência que você vai contar:" },
      ],
    },
    {
      theme: "Roda de conversa sobre convivência e respeito",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua família sobre um momento em que o respeito ajudou a resolver um problema entre pessoas. Escreva o que essa pessoa contou:", lines: 3 },
        { kind: "options", instruction: "Qual atitude mostra respeito pelo outro?", options: ["Ouvir a opinião da pessoa mesmo pensando diferente", "Rir das ideias dos outros", "Falar sem deixar o outro terminar", "Ignorar quando alguém está triste"] },
        { kind: "word-select", instruction: "Circule as atitudes que ajudam a conviver bem com os outros:", items: ["ESCUTAR", "GRITAR", "RESPEITAR", "EMPURRAR", "AJUDAR", "IGNORAR"] },
        { kind: "draw", instruction: "Desenhe uma cena em que você ajudou ou respeitou alguém:" },
      ],
    },
    {
      theme: "Comparando a estrutura de diferentes gêneros textuais",
      exercises: [
        { kind: "lines", instruction: "Procure em casa dois textos diferentes (uma receita, uma notícia, uma carta, um rótulo). Escreva quais textos você encontrou:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete relacionando o texto com uma característica dele:", items: ["Uma receita tem uma lista de ___", "Uma notícia tem um ___ que resume o fato", "Uma carta começa com uma ___"] },
        { kind: "options", instruction: "O que diferencia os gêneros textuais entre si?", options: ["A forma como são organizados e para que servem", "A cor do papel em que estão escritos", "O tamanho da letra usada", "Nada, todos são iguais"] },
        { kind: "word-select", instruction: "Circule os gêneros textuais que você conhece:", items: ["RECEITA", "NOTÍCIA", "CARTA", "CADEIRA", "BILHETE", "JANELA"] },
      ],
    },
    {
      theme: "Caça aos pronomes: eliminando repetições no texto",
      exercises: [
        { kind: "fill-blank", instruction: "Reescreva as frases trocando a palavra repetida por um pronome (ele, ela, eles):", items: ["Maria foi ao parque. Maria brincou muito. → Maria foi ao parque. ___ brincou muito.", "Os meninos correram. Os meninos riram. → Os meninos correram. ___ riram."] },
        { kind: "word-select", instruction: "Circule os pronomes nesta lista de palavras:", items: ["ELE", "CASA", "ELA", "MESA", "ELES", "VERDE"] },
        { kind: "options", instruction: "Por que usamos pronomes no lugar de repetir um nome no texto?", options: ["Para evitar repetições e deixar o texto mais fluido", "Para deixar o texto mais confuso", "Para aumentar o número de palavras", "Não tem nenhuma razão"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer uma frase com o nome de uma pessoa repetido duas vezes. Escreva a frase e depois reescreva-a usando um pronome:", lines: 3 },
      ],
    },
    {
      theme: "Revisando organizadores textuais no texto produzido",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as frases com um organizador textual adequado (primeiro, depois, então, por fim):", items: ["___, acordei bem cedo.", "___, tomei café da manhã.", "___, fui para a escola.", "___, fiz a lição de casa."] },
        { kind: "word-select", instruction: "Circule as palavras que ajudam a organizar a ordem dos fatos em um texto:", items: ["PRIMEIRO", "CADEIRA", "DEPOIS", "AMARELO", "EM SEGUIDA", "MESA"] },
        { kind: "options", instruction: "Para que servem os organizadores textuais, como \"primeiro\" e \"depois\"?", options: ["Para mostrar a ordem em que as coisas acontecem", "Para enfeitar o texto", "Para trocar o assunto do texto", "Para terminar o texto"] },
        { kind: "lines", instruction: "Escreva três coisas que você fez hoje, usando as palavras primeiro, depois e por fim:", lines: 3 },
      ],
    },
    {
      theme: "Dando coerência ao final de uma história",
      exercises: [
        { kind: "lines", instruction: "Leia o começo desta história para alguém da sua casa: \"Era uma vez uma menina que encontrou uma chave dourada no jardim.\" Agora escreva um final que combine com esse começo:", lines: 4 },
        { kind: "options", instruction: "Qual final combina melhor com uma história sobre uma chave mágica encontrada no jardim?", options: ["A chave abre uma porta secreta e revela um segredo", "A história termina falando sobre uma receita de bolo", "Aparece um resultado de jogo de futebol", "Nada acontece com a chave"] },
        { kind: "fill-blank", instruction: "Complete sobre o final que você criou:", items: ["O que a chave abriu: ___", "Como a história terminou: ___"] },
        { kind: "draw", instruction: "Desenhe o final que você imaginou para a história da chave dourada:" },
      ],
    },
    {
      theme: "Quem conta a história? Narrador em 1ª e 3ª pessoa",
      exercises: [
        { kind: "options", instruction: "Na frase \"Eu corri até a escola\", quem está contando a história?", options: ["A própria pessoa que viveu a história (1ª pessoa)", "Alguém de fora observando (3ª pessoa)", "Ninguém está contando", "Um animal"] },
        { kind: "fill-blank", instruction: "Reescreva a frase mudando de 3ª para 1ª pessoa:", items: ["Ela foi ao mercado. → ___ fui ao mercado.", "Ele brincou no parque. → ___ brinquei no parque."] },
        { kind: "lines", instruction: "Peça para alguém da sua casa contar algo que aconteceu com ela mesma, usando \"eu\". Escreva o que essa pessoa contou:", lines: 3 },
        { kind: "draw", instruction: "Desenhe a pessoa contando a história para você:" },
      ],
    },
    {
      theme: "Observando a pontuação do diálogo nos textos",
      exercises: [
        { kind: "word-select", instruction: "Circule os sinais que aparecem quando um personagem está falando em uma história:", items: ["TRAVESSÃO", "VÍRGULA", "PONTO DE INTERROGAÇÃO", "NÚMERO", "PONTO DE EXCLAMAÇÃO", "SETA"] },
        { kind: "fill-blank", instruction: "Complete o diálogo com o sinal de pontuação correto (— para indicar a fala):", items: ["___ Bom dia! disse a menina.", "___ Cadê meu livro? perguntou o menino."] },
        { kind: "options", instruction: "Para que serve o travessão em um diálogo?", options: ["Para indicar que um personagem começou a falar", "Para separar números", "Para terminar o texto", "Para enfeitar a página"] },
        { kind: "lines", instruction: "Encontre um livro em casa com diálogo entre personagens e copie uma fala que use travessão:", lines: 2 },
      ],
    },
    {
      theme: "Pontuando o texto: segmentando frases",
      exercises: [
        { kind: "fill-blank", instruction: "Reescreva o texto separando as frases com pontos finais: \"Hoje eu fui à escola encontrei meus amigos e brincamos muito no recreio depois voltei para casa\"", items: ["Texto separado em frases: ___"] },
        { kind: "options", instruction: "Onde devemos colocar o ponto final?", options: ["No fim de cada frase, quando a ideia termina", "No começo do texto", "Depois de cada palavra", "Nunca é necessário usar"] },
        { kind: "lines", instruction: "Escreva três frases curtas sobre o seu dia, cada uma terminando com ponto final:", lines: 3 },
        { kind: "draw", instruction: "Desenhe uma cena de uma das frases que você escreveu:" },
      ],
    },
    {
      theme: "Descobrindo comparações escondidas: a metáfora",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as metáforas (comparações escondidas, sem usar \"como\"):", items: ["Meu irmão é um ___ (muito forte)", "Meu avô é um ___ de sabedoria", "Ela é um ___ no time de futebol (muito rápida)"] },
        { kind: "options", instruction: "Em qual frase há uma metáfora?", options: ["Meu pai é um leão quando fica bravo", "Meu pai é forte como um leão", "Meu pai foi trabalhar hoje", "Meu pai comprou um carro"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer uma expressão que compara uma pessoa a um animal ou coisa, sem usar a palavra \"como\" (por exemplo, \"Ele é uma fera\"). Escreva-a aqui:", lines: 2 },
        { kind: "draw", instruction: "Desenhe a imagem que a metáfora que você escreveu faz você pensar:" },
      ],
    },
    {
      theme: "Usando acentos em palavras conhecidas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as palavras com o acento que falta:", items: ["ARVORE → ___", "MUSICA → ___", "CAFE → ___", "SABADO → ___"] },
        { kind: "word-select", instruction: "Circule as palavras que têm acento gráfico:", items: ["CAFÉ", "MESA", "MÚSICA", "LIVRO", "SÁBADO", "CADERNO"] },
        { kind: "options", instruction: "Para que serve o acento gráfico em uma palavra?", options: ["Para marcar a sílaba pronunciada com mais força", "Para deixar a palavra maior", "Para trocar o significado sempre", "Não serve para nada"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa ditar três palavras acentuadas (com acento) para você escrever:", lines: 3 },
      ],
    },
    {
      theme: "Caçando a sílaba tônica nas palavras do texto",
      exercises: [
        { kind: "fill-blank", instruction: "Separe as palavras em sílabas e sublinhe a sílaba mais forte (tônica):", items: ["BANANA → ___", "CADERNO → ___", "SABONETE → ___"] },
        { kind: "word-select", instruction: "Circule as palavras em que a última sílaba é a mais forte:", items: ["CAFÉ", "MESA", "JACARÉ", "LIVRO", "SOFÁ", "CADEIRA"] },
        { kind: "options", instruction: "O que é a sílaba tônica de uma palavra?", options: ["A sílaba pronunciada com mais força", "A primeira sílaba sempre", "A última letra da palavra", "Uma sílaba que não existe"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa falar seu nome completo bem devagar. Bata palmas na sílaba mais forte de cada nome e escreva quais foram:", lines: 2 },
      ],
    },
    {
      theme: "Relacionando acento gráfico e sílaba tônica",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a frase: a sílaba que recebe o acento gráfico é sempre a sílaba ___", items: ["Complete: a sílaba acentuada é a sílaba ___"] },
        { kind: "options", instruction: "Na palavra \"SOFÁ\", qual sílaba é a mais forte?", options: ["FÁ", "SO", "As duas são iguais", "Nenhuma"] },
        { kind: "word-select", instruction: "Circule as palavras em que o acento marca a sílaba tônica:", items: ["ÁRVORE", "CADERNO", "MÚSICA", "JANELA", "SÍLABA", "COMPUTADOR"] },
        { kind: "lines", instruction: "Escolha três palavras acentuadas de um livro ou embalagem da sua casa e escreva-as, sublinhando a sílaba tônica:", lines: 3 },
      ],
    },
    {
      theme: "Revisando a grafia de M/N, R/RR e O/U final",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as palavras com M ou N:", items: ["CA___PO (campo)", "PO___TE (ponte)", "A___TES (antes)", "BRI___CAR (brincar)"] },
        { kind: "word-select", instruction: "Circule as palavras escritas corretamente:", items: ["CARRO", "CARO", "ARRANHAR", "ARANHAR", "AMANHECEU", "AMANHECEO"] },
        { kind: "options", instruction: "Quando usamos RR entre vogais?", options: ["Quando o som de R é forte, como em \"carro\"", "Sempre no início das palavras", "Nunca é usado no meio das palavras", "Apenas em nomes de pessoas"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa ditar três palavras com M, N, R, RR, O ou U final para você escrever:", lines: 3 },
      ],
    },
    {
      theme: "Comparando flexões verbais terminadas em -O e -AM",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as frases passando o verbo para o plural:", items: ["Ele brincou no parque. → Eles ___ no parque.", "Ela cantou uma música. → Elas ___ uma música.", "O menino correu rápido. → Os meninos ___ rápido."] },
        { kind: "options", instruction: "Qual é a forma correta no plural?", options: ["Eles jogaram bola", "Eles jogarum bola", "Eles jogarom bola", "Eles jogaro bola"] },
        { kind: "word-select", instruction: "Circule os verbos escritos corretamente:", items: ["ANDARAM", "ANDARUM", "PULARAM", "PULARUM", "CANTOU", "CANTOM"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa contar o que fez ontem, usando verbos no plural (como \"nós brincamos\" ou \"eles jogaram\"). Escreva o que essa pessoa contou:", lines: 3 },
      ],
    },
    {
      theme: "Memorizando a grafia de palavras irregulares",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as palavras com a letra correta (H, LH ou X):", items: ["___OMEM (homem)", "OR___A (orelha)", "___ADREZ (xadrez)", "MO___O (molho)"] },
        { kind: "word-select", instruction: "Circule as palavras escritas corretamente:", items: ["HOMEM", "OMEM", "ORELHA", "OREJA", "XÍCARA", "CHÍCARA"] },
        { kind: "options", instruction: "Por que algumas palavras precisam ser memorizadas em vez de seguir uma regra?", options: ["Porque nem sempre a escrita corresponde exatamente ao som", "Porque são palavras inventadas", "Porque ninguém usa essas palavras", "Porque são sempre curtas"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa ditar três palavras com H, LH ou X para você escrever:", lines: 3 },
      ],
    },
    {
      theme: "Dividindo palavras no final da linha",
      exercises: [
        { kind: "fill-blank", instruction: "Separe estas palavras em sílabas:", items: ["CADERNO → ___", "BONECA → ___", "JANELA → ___", "SAPATO → ___"] },
        { kind: "options", instruction: "Quando uma palavra não cabe inteira no final da linha, o que podemos fazer?", options: ["Dividi-la entre as sílabas, com hífen", "Cortá-la no meio de uma sílaba", "Apagar a palavra", "Escrever em outra cor"] },
        { kind: "word-select", instruction: "Circule as divisões silábicas corretas:", items: ["CA-DER-NO", "CAD-ERNO", "BO-NE-CA", "BON-ECA", "JA-NE-LA", "JAN-ELA"] },
        { kind: "lines", instruction: "Escolha três palavras de um livro ou rótulo da sua casa e escreva-as já divididas em sílabas:", lines: 3 },
      ],
    },
    {
      theme: "Regras para não deixar uma letra sozinha na linha",
      exercises: [
        { kind: "fill-blank", instruction: "Responda: podemos dividir estas palavras no fim da linha assim? (sim ou não)", items: ["Á-GUA: ___", "A-MOR: ___", "U-VA: ___"] },
        { kind: "options", instruction: "Qual é a regra para dividir palavras no fim da linha?", options: ["Nunca deixar uma letra sozinha no início ou fim da linha", "Sempre dividir no meio da palavra", "Dividir só palavras grandes", "Não existe regra"] },
        { kind: "word-select", instruction: "Circule as palavras que NÃO devem ser divididas no fim da linha, porque sobraria uma letra sozinha:", items: ["ÁGUA", "CADERNO", "AMOR", "JANELA", "UVA", "BONECA"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher três nomes de pessoas da família e verifiquem juntos se algum deles ficaria com uma letra sozinha se fosse dividido no fim da linha. Escreva o que descobriram:", lines: 3 },
      ],
    },
    {
      theme: "Caça-nomes no varal da sala",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer o nome completo dele. Escreva o nome e conte quantas letras tem:", lines: 2 },
        { kind: "options", instruction: "Um varal de aniversariantes serve para:", options: ["Pendurar roupas", "Mostrar em que mês cada colega faz aniversário", "Decorar a sala com desenhos", "Guardar os cadernos da turma"] },
        { kind: "fill-blank", instruction: "Complete com nomes de pessoas da sua família:", items: ["O nome da minha mãe ou responsável é ___", "O nome de um irmão, tio ou avó é ___"] },
        { kind: "draw", instruction: "Desenhe uma bandeirinha de varal com o seu nome escrito nela:" },
      ],
    },
    {
      theme: "Manchetes de jornal na roda",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar uma manchete de jornal ou notícia (impressa ou no celular). Escreva a manchete que você leu:", lines: 2 },
        { kind: "options", instruction: "Uma manchete de jornal geralmente é:", options: ["Um texto bem longo e detalhado", "Uma frase curta que resume a notícia", "Um desenho sem palavras", "Uma lista de números"] },
        { kind: "fill-blank", instruction: "Complete a manchete usando pistas do começo da frase:", items: ["Time da cidade vence o ___", "Chuva forte atinge o ___", "Escola realiza festa de ___"] },
        { kind: "draw", instruction: "Desenhe a foto que poderia acompanhar uma manchete de jornal sobre um evento da sua escola:" },
      ],
    },
    {
      theme: "Relato histórico do bairro da escola",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém mais velho da sua casa como era o bairro há muitos anos. Escreva o que essa pessoa contou:", lines: 4 },
        { kind: "options", instruction: "Um relato histórico sobre um bairro conta principalmente:", options: ["Uma receita de comida", "Como o lugar era antes e como mudou com o tempo", "Uma lista de compras", "Apenas o nome das ruas"] },
        { kind: "fill-blank", instruction: "Complete com informações do seu bairro:", items: ["O nome do meu bairro é ___", "Perto da minha casa tem ___"] },
        { kind: "draw", instruction: "Desenhe como você imagina que era o bairro da sua escola há muito tempo atrás:" },
      ],
    },
    {
      theme: "Conto em quadrinhos: reescrevendo em cenas",
      exercises: [
        { kind: "options", instruction: "Um quadrinho (história em quadrinhos) usa principalmente:", options: ["Só números", "Desenhos e legendas curtas", "Somente música", "Só uma cor"] },
        { kind: "word-select", instruction: "Circule as palavras que podem ser título de um conto:", items: ["CHAPEUZINHO VERMELHO", "MESA", "OS TRÊS PORQUINHOS", "AMARELO", "A BELA ADORMECIDA", "CADEIRA"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma história curta. Escreva como a história termina:", lines: 3 },
        { kind: "draw", instruction: "Desenhe a última cena do conto que você escolheu, mostrando como a história termina:" },
      ],
    },
    {
      theme: "Manual de instruções para montar um brinquedo de papel",
      exercises: [
        { kind: "lines", instruction: "Escolha um brinquedo simples de papel (avião, barquinho, chapéu). Escreva o nome do brinquedo:", lines: 1 },
        { kind: "fill-blank", instruction: "Complete os passos do manual de instruções:", items: ["Passo 1: ___", "Passo 2: ___", "Passo 3: ___"] },
        { kind: "options", instruction: "Um manual de instruções deve ter os passos:", options: ["Em qualquer ordem", "Na ordem certa, um depois do outro", "Todos misturados numa frase só", "Sem nenhuma numeração"] },
        { kind: "draw", instruction: "Faça o passo a passo desenhado (em 3 quadrinhos) de como montar um brinquedo de papel:" },
      ],
    },
    {
      theme: "Apresentando meu brinquedo preferido",
      exercises: [
        { kind: "lines", instruction: "Escreva o nome do seu brinquedo preferido e por que você gosta dele:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete as informações sobre seu brinquedo:", items: ["Meu brinquedo preferido é ___", "Ele tem a cor ___", "Eu brinco com ele quando ___"] },
        { kind: "options", instruction: "Ao apresentar um brinquedo para a turma, é importante:", options: ["Falar bem baixinho para ninguém ouvir", "Falar de forma que os colegas entendam", "Não olhar para ninguém", "Ler um texto sem mostrar o brinquedo"] },
        { kind: "draw", instruction: "Desenhe o seu brinquedo preferido para mostrar para a turma:" },
      ],
    },
    {
      theme: "Trocando nomes repetidos por apelidos",
      exercises: [
        { kind: "lines", instruction: "Escreva um apelido carinhoso que alguém da sua casa usa para chamar você ou outra pessoa da família:", lines: 2 },
        { kind: "options", instruction: "Na frase 'Rafael correu. Rafael caiu. Rafael levantou.', o que poderia melhorar o texto?", options: ["Escrever tudo em letra maiúscula", "Trocar o nome repetido por 'ele' nas outras vezes", "Apagar o nome Rafael de tudo", "Não mudar nada"] },
        { kind: "fill-blank", instruction: "Complete trocando o nome repetido:", items: ["O cachorro latiu. ___ correu.", "Beatriz cantou. ___ dançou."] },
        { kind: "draw", instruction: "Desenhe uma pessoa da sua família e escreva embaixo o apelido que ela tem:" },
      ],
    },
    {
      theme: "Acento ou não? Jogo de cartas",
      exercises: [
        { kind: "word-select", instruction: "Circule apenas as palavras que têm acento:", items: ["CAFÉ", "MESA", "MAÇÃ", "LIVRO", "AVÓ", "CADERNO"] },
        { kind: "fill-blank", instruction: "Complete as palavras com o acento que falta (agudo ou circunflexo):", items: ["av___ = mãe do meu pai ou da minha mãe", "caf___ = bebida quente que tomamos de manhã", "___nibus = veículo que leva várias pessoas"] },
        { kind: "options", instruction: "A palavra 'AVÔ' tem acento circunflexo. Esse acento serve para:", options: ["Deixar a palavra maior", "Marcar como a palavra deve ser pronunciada", "Enfeitar a palavra", "Trocar o significado por outro sem relação"] },
        { kind: "lines", instruction: "Escreva 2 palavras com acento que você conhece de casa (nomes de comida, pessoas ou objetos):", lines: 2 },
      ],
    },
    {
      theme: "Escrevendo o cardápio do lanche com letras móveis",
      exercises: [
        { kind: "lines", instruction: "Escreva o cardápio do seu lanche de hoje (o que você comeu ou vai comer):", lines: 3 },
        { kind: "word-select", instruction: "Circule apenas os nomes de alimentos:", items: ["BANANA", "CADEIRA", "PÃO", "LÁPIS", "SUCO", "MOCHILA"] },
        { kind: "fill-blank", instruction: "Complete o nome dos alimentos com as letras que faltam:", items: ["ba___na", "p___o", "bis___ito"] },
        { kind: "draw", instruction: "Desenhe o cardápio do seu lanche preferido, com pelo menos 3 alimentos:" },
      ],
    },
    {
      theme: "Como a chuva? Caça às comparações do texto",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa completar: 'Ficou vermelho como...'. Escreva a resposta que a pessoa deu:", lines: 2 },
        { kind: "word-select", instruction: "Circule as palavras que poderiam ser usadas para comparar algo rápido:", items: ["RAIO", "PEDRA", "FOGUETE", "TARTARUGA", "VENTO", "SONO"] },
        { kind: "options", instruction: "Qual frase tem uma comparação?", options: ["O menino correu até a escola.", "O menino era rápido como um raio.", "O menino tem 7 anos.", "O menino mora perto da escola."] },
        { kind: "draw", instruction: "Escolha uma comparação (rápido como um raio, frio como gelo, etc.) e desenhe uma cena que a represente:" },
      ],
    },
    {
      theme: "Escolhendo o gênero certo para cada recado",
      exercises: [
        { kind: "options", instruction: "Para avisar rapidamente sua mãe que você foi à casa de um amigo, o melhor gênero é:", options: ["Um bilhete", "Um cartaz gigante", "Uma lista de compras", "Um livro inteiro"] },
        { kind: "fill-blank", instruction: "Complete com o gênero mais adequado (bilhete, cartaz ou lista):", items: ["Para anunciar uma festa na escola, uso um ___", "Para organizar o que comprar no mercado, uso uma ___", "Para avisar algo rápido para alguém de casa, uso um ___"] },
        { kind: "lines", instruction: "Escreva um bilhete curto avisando que você está brincando na casa de um vizinho:", lines: 3 },
        { kind: "draw", instruction: "Desenhe um cartaz anunciando uma festa junina ou outro evento da escola:" },
      ],
    },
    {
      theme: "Marcando com lápis o que ficou confuso no texto",
      exercises: [
        { kind: "options", instruction: "Ao revisar o texto de um colega e encontrar um trecho confuso, o melhor a fazer é:", options: ["Rasgar a folha do colega", "Marcar o trecho com lápis para o colega ajustar depois", "Ignorar e não falar nada", "Apagar o trecho sem avisar"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa ler uma frase que você escreveu. Escreva se a pessoa entendeu tudo ou se ficou alguma dúvida:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete as frases confusas com uma informação que falta, deixando-as mais claras:", items: ["O menino foi ___ e pegou o brinquedo.", "Ela gostou muito ___."] },
        { kind: "draw", instruction: "Desenhe um lápis marcando (sublinhando) uma parte confusa de um texto imaginário:" },
      ],
    },
    {
      theme: "Lista de brinquedos do dia do brinquedo",
      exercises: [
        { kind: "fill-blank", instruction: "Complete falando sobre os brinquedos da sua casa:", items: ["Em casa, o brinquedo que eu mais gosto é: ___", "Um brinquedo antigo da minha família é: ___", "Um brinquedo que eu gostaria de ganhar é: ___", "Um brinquedo que eu poderia emprestar para um colega é: ___"] },
        { kind: "options", instruction: "Qual desses NÃO é um brinquedo?", options: ["pião", "caderno", "boneca", "bola"] },
        { kind: "lines", instruction: "Pergunte a alguém da sua casa qual era o brinquedo favorito dela quando era criança. Escreva o nome:", lines: 2 },
        { kind: "draw", instruction: "Desenhe o brinquedo mais antigo que você encontrar na sua casa." },
      ],
    },
    {
      theme: "Mural das lendas de cada família",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa se conhece alguma lenda ou mito e escreva o nome dela:", lines: 2 },
        { kind: "options", instruction: "Uma lenda é uma história que:", options: ["passa de geração em geração, contada pelas pessoas", "só existe em livros escolares", "conta fatos de jornal", "é sempre sobre matemática"] },
        { kind: "fill-blank", instruction: "Complete com informações sobre a lenda que você ouviu:", items: ["O nome da lenda que ouvi foi: ___", "Quem me contou foi: ___", "A lenda fala sobre: ___", "A parte que eu mais gostei foi: ___"] },
        { kind: "draw", instruction: "Desenhe um personagem ou uma cena da lenda que você ouviu em casa." },
      ],
    },
    {
      theme: "Lista de frutas do lanche coletivo",
      exercises: [
        { kind: "lines", instruction: "Escreva o nome de 3 frutas que você gosta de comer no lanche:", lines: 3 },
        { kind: "word-select", instruction: "Circule apenas os nomes de frutas na lista:", items: ["MAÇÃ", "BOLA", "BANANA", "CADEIRA", "UVA", "LÁPIS", "MANGA", "SAPATO"] },
        { kind: "fill-blank", instruction: "Complete sobre as frutas que você conhece:", items: ["A fruta que começa com a mesma letra do meu nome é: ___", "Uma fruta amarela que eu conheço é: ___", "Uma fruta vermelha que eu conheço é: ___", "Minha fruta preferida é: ___"] },
        { kind: "draw", instruction: "Desenhe as frutas que você escolheu para o lanche coletivo da turma." },
      ],
    },
    {
      theme: "Final alternativo para um conto conhecido",
      exercises: [
        { kind: "options", instruction: "Se o lobo do conto Os Três Porquinhos ganhasse um novo final, ele poderia:", options: ["se tornar amigo dos porquinhos", "sempre ter que continuar mau", "desaparecer da história sem motivo", "virar outro personagem completamente diferente"] },
        { kind: "fill-blank", instruction: "Complete sobre o novo final que você criou:", items: ["No conto que eu escolhi, o personagem principal é: ___", "O problema da história é: ___", "No final original, isso se resolve assim: ___", "No final que eu imaginei, isso se resolve assim: ___"] },
        { kind: "lines", instruction: "Conte para alguém da sua casa o novo final que você inventou para o conto. Escreva o que essa pessoa achou:", lines: 3 },
        { kind: "draw", instruction: "Desenhe o personagem principal do conto no seu novo final." },
      ],
    },
    {
      theme: "Organizando o sarau de histórias da turma",
      exercises: [
        { kind: "lines", instruction: "Se você fosse contar uma história no sarau da turma, qual história escolheria? Escreva o nome:", lines: 2 },
        { kind: "options", instruction: "Num sarau de histórias, é importante:", options: ["falar com calma para todos ouvirem", "falar bem baixinho", "não olhar para ninguém", "ler muito rápido sem parar"] },
        { kind: "fill-blank", instruction: "Complete pensando na sua participação no sarau:", items: ["Eu gostaria de contar a história de: ___", "Eu contaria essa história para: ___", "Eu me sentiria ___ contando uma história", "Uma pessoa que eu convidaria para ouvir é: ___"] },
        { kind: "draw", instruction: "Desenhe você contando uma história para a turma no sarau." },
      ],
    },
    {
      theme: "Relato oral do dia em que aprendi algo novo",
      exercises: [
        { kind: "lines", instruction: "Escreva sobre um dia em que você aprendeu algo novo em casa ou na escola:", lines: 4 },
        { kind: "options", instruction: "Ao contar uma experiência em roda de conversa, é importante:", options: ["contar os fatos na ordem em que aconteceram", "inventar fatos que não aconteceram", "falar ao mesmo tempo que os colegas", "não deixar ninguém entender"] },
        { kind: "fill-blank", instruction: "Complete sobre o que você aprendeu:", items: ["A coisa nova que eu aprendi foi: ___", "Eu aprendi isso com: ___", "Isso aconteceu quando eu tinha: ___", "Eu me senti ___ quando aprendi isso"] },
        { kind: "draw", instruction: "Desenhe o momento em que você aprendeu essa coisa nova." },
      ],
    },
    {
      theme: "Substituindo \"ele\" e \"ela\" no texto dos animais",
      exercises: [
        { kind: "lines", instruction: "Escreva um pequeno texto (3 a 4 frases) sobre um animal de estimação (seu ou de alguém que você conhece), usando 'ele' ou 'ela' para não repetir o nome do animal:", lines: 4 },
        { kind: "options", instruction: "Na frase 'O cavalo comeu capim. Ele bebeu água depois.', a palavra 'Ele' substitui:", options: ["o cavalo", "o capim", "a água", "depois"] },
        { kind: "fill-blank", instruction: "Complete as frases usando 'ele' ou 'ela':", items: ["O peixe nadava no aquário. ___ era colorido.", "A galinha botou um ovo. ___ estava no galinheiro.", "O coelho pulou rápido. ___ tinha orelhas grandes.", "A vaca deu leite. ___ vivia na fazenda."] },
        { kind: "draw", instruction: "Desenhe um animal de estimação e escreva embaixo uma frase usando 'ele' ou 'ela'." },
      ],
    },
    {
      theme: "Bingo das palavras com H mudo",
      exercises: [
        { kind: "word-select", instruction: "Circule as palavras que começam com H:", items: ["HOTEL", "OVO", "HORA", "ABELHA", "HOMEM", "JANELA", "HOSPITAL", "CADEIRA"] },
        { kind: "fill-blank", instruction: "Complete cada palavra com a letra H:", items: ["___otel (lugar onde as pessoas dormem em viagem)", "___ora (aparece no relógio)", "___omem (pessoa adulta)", "___ospital (lugar onde os médicos trabalham)"] },
        { kind: "options", instruction: "A letra H no começo dessas palavras:", options: ["não tem som, é muda", "tem som de R", "tem som de F", "não pode ser usada"] },
        { kind: "draw", instruction: "Desenhe um hotel, uma hora no relógio ou um hospital — escolha uma palavra com H e ilustre-a." },
      ],
    },
    {
      theme: "Legenda para o cartaz dos dinossauros",
      exercises: [
        { kind: "lines", instruction: "Escolha um dinossauro que você conhece e escreva uma curiosidade sobre ele para uma legenda:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete a legenda do seu dinossauro:", items: ["O nome do dinossauro é: ___", "Ele comia: ___ (carne ou plantas)", "Ele era do tamanho de: ___", "Uma curiosidade sobre ele é: ___"] },
        { kind: "options", instruction: "Uma legenda de cartaz deve ser:", options: ["curta e clara", "muito longa e cheia de detalhes", "escrita só com números", "escondida atrás da imagem"] },
        { kind: "draw", instruction: "Desenhe o dinossauro que você escolheu para o cartaz da turma." },
      ],
    },
    {
      theme: "Inventando comparações para o coleguinha",
      exercises: [
        { kind: "lines", instruction: "Escreva uma comparação para descrever alguém da sua família (por exemplo: minha irmã é rápida como um coelho):", lines: 3 },
        { kind: "fill-blank", instruction: "Complete as comparações sobre pessoas da sua família:", items: ["Meu pai ou minha mãe é forte como um ___", "Meu irmão ou minha irmã é levinho(a) como uma ___", "Meu avô ou minha avó é sábio(a) como uma ___", "Meu bichinho de estimação é ligeiro como um ___"] },
        { kind: "options", instruction: "Para inventar uma boa comparação, é preciso pensar em:", options: ["uma característica da pessoa e um animal ou objeto parecido", "só em números", "uma cor qualquer sem sentido", "uma palavra difícil só para complicar"] },
        { kind: "draw", instruction: "Desenhe uma pessoa da sua família ao lado do animal ou objeto que você usou na comparação." },
      ],
    },
    {
      theme: "Pesquisando sobre um animal antes de escrever",
      exercises: [
        { kind: "lines", instruction: "Escolha um animal que você tem curiosidade e escreva 3 coisas que você já sabe sobre ele:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete a pesquisa sobre o animal escolhido:", items: ["O animal que escolhi é: ___", "Ele vive em: ___", "Ele come: ___", "Uma pergunta que eu ainda tenho sobre ele é: ___"] },
        { kind: "options", instruction: "Antes de escrever um texto sobre um animal, é importante:", options: ["pesquisar informações sobre ele", "inventar qualquer coisa sem pesquisar", "copiar o texto de um colega", "não pensar em nada antes"] },
        { kind: "draw", instruction: "Desenhe o animal que você escolheu pesquisar, com o maior número de detalhes que você souber sobre ele." },
      ],
    },
    {
      theme: "Votando o tema do mural da turma",
      exercises: [
        { kind: "lines", instruction: "Se você pudesse escolher o tema do mural da turma, qual seria? Escreva e explique por quê:", lines: 3 },
        { kind: "options", instruction: "Quando a turma vota para escolher um tema, o resultado deve ser:", options: ["o tema com mais votos", "sempre a ideia do professor", "o tema que ninguém quis", "escolhido sem perguntar a ninguém"] },
        { kind: "fill-blank", instruction: "Complete pensando na votação do mural:", items: ["O tema que eu queria votar é: ___", "Eu escolheria esse tema porque: ___", "Se outro tema ganhar, eu ___", "Um colega que talvez vote igual a mim é: ___"] },
        { kind: "draw", instruction: "Desenhe como você imagina que ficaria o mural, com o tema que você votou." },
      ],
    },
    {
      theme: "Escalando ajudantes do dia",
      exercises: [
        { kind: "fill-blank", instruction: "Pergunte para alguém da sua casa qual tarefa ele(a) faz em casa todo dia e complete:", items: ["A tarefa é: ___", "Ele(a) faz essa tarefa no período da: ___"] },
        { kind: "options", instruction: "Por que é importante ter uma escala com o nome de cada ajudante do dia?", options: ["Para todos saberem de quem é a vez", "Para deixar a sala mais colorida", "Porque é obrigado por lei", "Não tem nenhum motivo"] },
        { kind: "lines", instruction: "Se você fosse o ajudante do dia amanhã, escreva o que você faria com capricho:", lines: 3 },
        { kind: "draw", instruction: "Desenhe você mesmo fazendo uma tarefa de ajudante, como distribuir os cadernos ou apagar a lousa:" },
      ],
    },
    {
      theme: "Comparando fábulas do Brasil e da África",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma história que aprendeu quando era criança. Escreva o nome dela e do que ela trata:", lines: 3 },
        { kind: "options", instruction: "O que uma fábula brasileira e uma fábula africana podem ter em comum, mesmo vindo de lugares diferentes?", options: ["Animais que falam e ensinam uma lição", "O mesmo autor", "O mesmo idioma", "A mesma capa"] },
        { kind: "fill-blank", instruction: "Complete sobre as fábulas que você conhece:", items: ["Uma fábula que eu conheço se chama ___", "O animal principal dela é ___", "A lição que ela ensina é ___"] },
        { kind: "draw", instruction: "Desenhe o animal principal de uma fábula que você já ouviu:" },
      ],
    },
    {
      theme: "Livrinho de trava-línguas da turma",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer um trava-língua que conhece. Escreva-o do seu jeito, como você lembra:", lines: 3 },
        { kind: "word-select", instruction: "Circule as palavras que combinam com o som repetido do trava-língua 'O RATO ROEU A ROUPA DO REI DE ROMA':", items: ["RATO", "GATO", "ROEU", "PORTA", "ROUPA", "ROMA"] },
        { kind: "options", instruction: "Por que os trava-línguas são difíceis de falar rápido?", options: ["Porque têm sons parecidos que se repetem", "Porque são muito compridos", "Porque não têm sentido nenhum", "Porque são escritos em outra língua"] },
        { kind: "draw", instruction: "Desenhe uma cena que combine com o trava-língua que você escolheu:" },
      ],
    },
    {
      theme: "Linha do tempo do nosso dia de horta",
      exercises: [
        { kind: "lines", instruction: "Se sua casa tivesse uma hortinha, escreva o que você faria primeiro, depois e por fim para cuidar dela:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete com palavras de tempo (primeiro, depois, por fim):", items: ["___ eu escolheria as sementes.", "___ eu plantaria na terra.", "___ eu regaria e esperaria crescer."] },
        { kind: "options", instruction: "Qual dessas plantas costuma ser cuidada em uma horta?", options: ["Alface", "Cadeira", "Bola", "Livro"] },
        { kind: "draw", instruction: "Desenhe uma hortinha com pelo menos duas plantas ou legumes que você conhece:" },
      ],
    },
    {
      theme: "Contação para a turma do 1º ano",
      exercises: [
        { kind: "lines", instruction: "Escolha uma história curta para contar para uma criança menor. Escreva o título e o motivo da escolha:", lines: 2 },
        { kind: "options", instruction: "O que é importante fazer durante uma contação de histórias para prender a atenção de quem ouve?", options: ["Mudar a voz dos personagens e mostrar as imagens", "Ler bem baixinho e rápido", "Ler sem olhar para quem escuta", "Contar sem nenhuma emoção na voz"] },
        { kind: "fill-blank", instruction: "Complete o planejamento da sua contação:", items: ["Eu vou contar a história: ___", "Vou usar esses objetos ou fantoches: ___"] },
        { kind: "draw", instruction: "Desenhe você contando essa história para alguém da sua casa:" },
      ],
    },
    {
      theme: "Assembleia da turma: decidindo as regras da sala",
      exercises: [
        { kind: "lines", instruction: "Se você pudesse escolher uma regra para a sua casa, qual seria? Escreva a regra e o motivo:", lines: 3 },
        { kind: "options", instruction: "Durante uma assembleia, o que devemos fazer quando um colega está falando?", options: ["Escutar com atenção e esperar a vez de falar", "Falar junto, bem alto", "Sair da roda", "Rir da opinião dele"] },
        { kind: "fill-blank", instruction: "Complete as regras combinadas para a sua casa ou sala:", items: ["Regra 1: ___", "Regra 2: ___"] },
        { kind: "draw", instruction: "Desenhe a turma sentada em roda conversando em uma assembleia:" },
      ],
    },
    {
      theme: "Colocando em ordem as tiras da história embaralhada",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma história desorganizada, fora de ordem, de propósito. Escreva como ficaria a ordem certa:", lines: 3 },
        { kind: "fill-blank", instruction: "Numere as partes de uma história na ordem certa:", items: ["( ___ ) O personagem resolve o problema.", "( ___ ) Surge um problema na história.", "( ___ ) O personagem é apresentado."] },
        { kind: "word-select", instruction: "Circule as palavras que ajudam a organizar a ordem dos fatos em uma história:", items: ["PRIMEIRO", "CADEIRA", "DEPOIS", "JANELA", "POR FIM", "MESA"] },
        { kind: "draw", instruction: "Desenhe fora de ordem três cenas de uma história e peça para alguém da sua casa numerar a ordem certa:" },
      ],
    },
    {
      theme: "Ditado das palavras com C ou S no início",
      exercises: [
        { kind: "fill-blank", instruction: "Peça para alguém da sua casa ditar estas palavras. Escreva o que você ouviu:", items: ["___ (sapo)", "___ (cebola)", "___ (sala)", "___ (cidade)"] },
        { kind: "word-select", instruction: "Circule apenas as palavras que começam com a letra S:", items: ["SAPO", "CASA", "SOL", "CEBOLA", "SALA", "CIDADE"] },
        { kind: "options", instruction: "A palavra 'cebola' começa com a letra C, mas tem o mesmo som de qual letra?", options: ["S", "K", "Z", "T"] },
        { kind: "draw", instruction: "Desenhe um objeto que comece com C e outro que comece com S:" },
      ],
    },
    {
      theme: "Tirando o \"aí\" e o \"daí\" do texto",
      exercises: [
        { kind: "lines", instruction: "Conte para alguém da sua casa o que você fez hoje, sem usar as palavras 'aí' e 'daí'. Depois escreva o que você contou:", lines: 3 },
        { kind: "fill-blank", instruction: "Reescreva as frases tirando o 'aí' ou o 'daí':", items: ["Eu acordei, aí escovei os dentes. → ___", "Fui para a escola, daí encontrei meus amigos. → ___"] },
        { kind: "options", instruction: "Por que é melhor evitar 'aí' e 'daí' quando escrevemos um texto?", options: ["Porque são palavras usadas ao falar, e não ao escrever", "Porque são palavras proibidas em qualquer situação", "Porque ninguém entende o que elas significam", "Porque são palavras muito difíceis"] },
        { kind: "draw", instruction: "Desenhe uma cena do seu dia que você contou sem usar 'aí' ou 'daí':" },
      ],
    },
    {
      theme: "Comparando duas capas do mesmo livro",
      exercises: [
        { kind: "lines", instruction: "Procure em casa dois livros ou embalagens com desenhos diferentes. Escreva qual chama mais a sua atenção e por quê:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete observando uma capa de livro que você tem em casa:", items: ["O título do livro é: ___", "A imagem da capa mostra: ___"] },
        { kind: "options", instruction: "Se duas capas do mesmo livro usam cores bem diferentes, o que provavelmente muda entre elas?", options: ["A impressão ou sensação que a capa passa", "A história dentro do livro", "O número de páginas", "O nome do autor"] },
        { kind: "draw", instruction: "Desenhe duas versões diferentes de capa para o mesmo livro, usando cores diferentes em cada uma:" },
      ],
    },
    {
      theme: "Brainstorm de ideias para o texto sobre a escola",
      exercises: [
        { kind: "lines", instruction: "Escreva 3 coisas que vêm à sua cabeça quando você pensa na sua escola:", lines: 3 },
        { kind: "word-select", instruction: "Circule as palavras que têm a ver com a escola:", items: ["LOUSA", "PRAIA", "RECREIO", "GELADEIRA", "PROFESSORA", "CACHORRO"] },
        { kind: "fill-blank", instruction: "Complete as ideias para um texto sobre a escola:", items: ["Minha parte preferida da escola é ___", "Na escola eu aprendo ___"] },
        { kind: "draw", instruction: "Desenhe a sua escola com os lugares que você mais gosta:" },
      ],
    },
    {
      theme: "Caixinha de sugestões para o texto do colega",
      exercises: [
        { kind: "lines", instruction: "Leia (ou peça para alguém ler) um texto curto que você escreveu. Escreva um bilhete com uma sugestão para melhorá-lo:", lines: 3 },
        { kind: "options", instruction: "Qual é uma boa forma de dar uma sugestão para o texto de um colega?", options: ["Dizer o que gostou e o que pode melhorar, com respeito", "Só apontar os erros", "Não falar nada", "Rasgar o texto do colega"] },
        { kind: "fill-blank", instruction: "Complete o bilhete de sugestão para um texto:", items: ["Eu gostei de: ___", "Eu sugiro melhorar: ___"] },
        { kind: "draw", instruction: "Desenhe uma caixinha de sugestões decorada para colocar os bilhetes da turma:" },
      ],
    },
    {
      theme: "Adivinhas na roda",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua família contar uma adivinha que ela conhece. Escreva a adivinha:", lines: 3 },
        { kind: "lines", instruction: "Agora escreva a resposta da adivinha que a pessoa te contou:", lines: 1 },
        { kind: "options", instruction: "Numa roda de adivinhas, o que é mais importante fazer enquanto os colegas falam?", options: ["Prestar atenção e esperar a vez de falar", "Falar ao mesmo tempo que todos", "Sair da roda", "Não escutar as respostas dos colegas"] },
        { kind: "draw", instruction: "Desenhe você contando uma adivinha para a sua família:" },
      ],
    },
    {
      theme: "Livrinho das cantigas que a vovó cantava",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém mais velho da sua família uma cantiga ou parlenda que ela cantava quando era criança. Escreva o nome dela:", lines: 1 },
        { kind: "lines", instruction: "Escreva um pedaço da cantiga que a pessoa te ensinou, do jeito que você conseguir lembrar:", lines: 4 },
        { kind: "options", instruction: "O que é uma parlenda?", options: ["Um texto rimado, geralmente usado em brincadeiras e cantado ou falado de cor", "Uma receita de comida", "Um tipo de conta de matemática", "Um documento da escola"] },
        { kind: "draw", instruction: "Desenhe a pessoa da sua família cantando a cantiga para você:" },
      ],
    },
    {
      theme: "Adivinha de cor: escrevendo sem olhar",
      exercises: [
        { kind: "lines", instruction: "Sem olhar para nenhum texto, escreva de cor uma adivinha que você já sabe:", lines: 3 },
        { kind: "lines", instruction: "Agora escreva a resposta da adivinha, também sem olhar para nada:", lines: 1 },
        { kind: "options", instruction: "Depois de escrever de cor, o que você deve fazer para conferir se escreveu certo?", options: ["Reler o que escreveu e pensar se faz sentido", "Rasgar a folha", "Não conferir nunca", "Copiar de outro colega"] },
        { kind: "draw", instruction: "Desenhe algo relacionado com a resposta da sua adivinha:" },
      ],
    },
    {
      theme: "Convite para a festa junina da escola",
      exercises: [
        { kind: "options", instruction: "Se o convite não disser o horário da festa, o que pode acontecer?", options: ["As pessoas podem chegar na hora errada", "Nada muda", "A festa fica mais organizada", "Todo mundo chega no horário certo mesmo assim"] },
        { kind: "lines", instruction: "Escreva o nome de 3 pessoas que você convidaria para a festa junina da escola:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete o convite pensando na festa da sua escola:", items: ["Comidas que não podem faltar: ___", "Brincadeira que eu mais gosto na festa junina: ___", "Roupa que eu vou usar: ___", "Quem eu vou levar comigo: ___"] },
        { kind: "draw", instruction: "Desenhe uma bandeirinha colorida para decorar o convite da festa junina:" },
      ],
    },
    {
      theme: "Explicando o ciclo da água",
      exercises: [
        { kind: "lines", instruction: "Explique com suas palavras o que acontece com a água quando ela evapora:", lines: 3 },
        { kind: "options", instruction: "O que forma as nuvens no céu?", options: ["O vapor de água que sobe e se junta no ar", "A fumaça dos carros", "As folhas das árvores", "A luz do sol sozinha"] },
        { kind: "fill-blank", instruction: "Complete as etapas do ciclo da água:", items: ["A água do rio esquenta e vira ___", "O vapor sobe e forma as ___", "A água cai das nuvens em forma de ___", "A chuva enche os rios e o ciclo ___ de novo"] },
        { kind: "draw", instruction: "Desenhe o ciclo da água mostrando o rio, o sol, as nuvens e a chuva:" },
      ],
    },
    {
      theme: "Debate sobre reciclagem na escola",
      exercises: [
        { kind: "lines", instruction: "Escreva sua opinião: você acha importante separar o lixo para reciclar? Por quê?", lines: 3 },
        { kind: "options", instruction: "Qual lixeira é a certa para jogar uma garrafa de plástico vazia?", options: ["Lixeira de plástico (reciclável)", "Lixeira de papel", "Lixeira de vidro", "Qualquer lixeira serve"] },
        { kind: "word-select", instruction: "Circule os materiais que podem ser reciclados:", items: ["PLÁSTICO", "RESTO DE COMIDA", "PAPEL", "VIDRO", "GUARDANAPO SUJO", "LATA", "FRALDA USADA", "PAPELÃO"] },
        { kind: "draw", instruction: "Desenhe as lixeiras coloridas de reciclagem e escreva o que vai em cada uma:" },
      ],
    },
    {
      theme: "Separando as palavras da mensagem secreta",
      exercises: [
        { kind: "lines", instruction: "Separe as palavras desta mensagem e reescreva certinho: MINHACASATEMUMJARDIM", lines: 2 },
        { kind: "lines", instruction: "Crie uma mensagem secreta sem espaços sobre a sua família e escreva aqui:", lines: 2 },
        { kind: "options", instruction: "Por que é importante deixar espaço entre as palavras quando escrevemos?", options: ["Para facilitar a leitura de quem vai ler o texto", "Para o texto ficar maior", "Para gastar mais tinta", "Não tem nenhuma importância"] },
        { kind: "draw", instruction: "Desenhe um envelope fechado guardando a sua mensagem secreta:" },
      ],
    },
    {
      theme: "Reportagem sobre uma criança de outro lugar do Brasil",
      exercises: [
        { kind: "lines", instruction: "Depois de ouvir a reportagem, escreva o nome do lugar do Brasil onde a criança mora:", lines: 1 },
        { kind: "lines", instruction: "Escreva duas coisas na vida dessa criança que são diferentes da sua rotina:", lines: 2 },
        { kind: "options", instruction: "Por que é importante conhecer como vivem crianças de outras regiões do Brasil?", options: ["Para entender que existem diferentes jeitos de viver e respeitá-los", "Porque todas as crianças vivem do mesmo jeito", "Não é importante conhecer isso", "Só para decorar nomes de cidades"] },
        { kind: "draw", instruction: "Desenhe algo que chamou sua atenção na história dessa criança:" },
      ],
    },
    {
      theme: "Tirando o \"né\" e o \"tipo\" da história escrita",
      exercises: [
        { kind: "lines", instruction: "Leia a frase: 'O menino, tipo, foi lá e, né, achou um tesouro.' Reescreva ela sem as palavras 'né' e 'tipo':", lines: 2 },
        { kind: "fill-blank", instruction: "Reescreva as frases tirando as marcas da fala:", items: ["'A cachorra, né, correu atrás da bola' fica: ___", "'Ela foi, tipo, correndo para casa' fica: ___", "'Eu fui, né, no mercado ontem' fica: ___", "'O bolo ficou, tipo, gostoso demais' fica: ___"] },
        { kind: "options", instruction: "Palavras como 'né' e 'tipo' são mais comuns:", options: ["Quando a gente fala, no dia a dia", "Quando a gente escreve um livro", "Nunca são usadas", "Só em textos científicos"] },
        { kind: "lines", instruction: "Escreva uma frase pequena contando o que você fez ontem, sem usar 'né' ou 'tipo':", lines: 2 },
      ],
    },
    {
      theme: "Ditado: escolhendo M ou N no final da sílaba",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as palavras com M ou N:", items: ["po__ta", "ca__po (de futebol)", "bri__co", "mo__tanha"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa ditar 3 palavras com M ou N no meio, e escreva o que você ouviu:", lines: 3 },
        { kind: "word-select", instruction: "Circule as palavras escritas com o M ou N no lugar certo:", items: ["PONTE", "CANPO", "MONTANHA", "BRINCO", "TENPO", "SAMBA", "CONTA", "TANBOR"] },
        { kind: "options", instruction: "Antes de B ou P, qual letra usamos sempre?", options: ["M", "N", "S", "R"] },
      ],
    },
    {
      theme: "Organizando as partes do texto num quadro antes de escrever",
      exercises: [
        { kind: "fill-blank", instruction: "Complete o quadro de planejamento de uma história:", items: ["Início (quem são os personagens e onde acontece): ___", "Meio (o problema que aparece na história): ___", "Fim (como o problema se resolve): ___", "Título da história: ___"] },
        { kind: "options", instruction: "Por que é útil fazer um quadro antes de escrever um texto?", options: ["Porque ajuda a organizar as ideias antes de escrever", "Porque deixa o texto mais bagunçado", "Porque não precisa mais escrever depois", "Não serve para nada"] },
        { kind: "lines", instruction: "Usando o quadro que você preencheu, escreva o começo da sua história:", lines: 4 },
        { kind: "draw", instruction: "Desenhe o personagem principal da história que você está planejando:" },
      ],
    },
    {
      theme: "Lendo meu texto para a família e trazendo o que acharam",
      exercises: [
        { kind: "lines", instruction: "Leia um texto que você escreveu para alguém da sua família e escreva o nome dessa pessoa:", lines: 1 },
        { kind: "lines", instruction: "Escreva o que essa pessoa achou do seu texto (o que ela gostou ou o que ela achou que podia melhorar):", lines: 3 },
        { kind: "options", instruction: "Para que serve mostrar o texto que você escreveu para outra pessoa?", options: ["Para receber ideias de como melhorar o texto", "Para esconder o que você escreveu", "Não serve para nada", "Só para mostrar a letra bonita"] },
        { kind: "draw", instruction: "Desenhe você lendo seu texto para a pessoa da sua família:" },
      ],
    },
    {
      theme: "Poema decorado vira leitura",
      exercises: [
        { kind: "lines", instruction: "Em casa, treine ler o poema decorado olhando para o texto escrito. Escreva o nome de quem ouviu você recitar:", lines: 1 },
        { kind: "draw", instruction: "Desenhe você recitando o poema para sua família:" },
        { kind: "options", instruction: "O que você deve fazer quando erra um verso ao recitar?", options: ["Parar, olhar o texto e continuar de onde errou", "Desistir de recitar", "Inventar um verso novo", "Sair correndo"] },
        { kind: "lines", instruction: "Escreva o verso do poema de que você mais gosta:", lines: 2 },
      ],
    },
    {
      theme: "Verbete sobre a profissão dos familiares",
      exercises: [
        { kind: "lines", instruction: "Pergunte a um familiar qual é a profissão dele e escreva o que ele faz no trabalho:", lines: 3 },
        { kind: "options", instruction: "O que é um verbete?", options: ["Um texto curto que explica o que é uma palavra ou profissão", "Uma carta para um amigo", "Uma lista de compras", "Um poema com rimas"] },
        { kind: "fill-blank", instruction: "Complete o verbete sobre a profissão de um familiar seu:", items: ["Nome da profissão: __________", "O que essa pessoa faz: __________", "Onde ela trabalha: __________", "Um objeto que ela usa no trabalho: __________"] },
        { kind: "draw", instruction: "Desenhe seu familiar trabalhando na profissão dele:" },
      ],
    },
    {
      theme: "Recontando a fábula com fantoches",
      exercises: [
        { kind: "lines", instruction: "Escreva o nome da fábula que você recontou com fantoches:", lines: 1 },
        { kind: "options", instruction: "O que toda fábula costuma ter no final?", options: ["Uma moral, ou seja, um ensinamento", "Uma receita de bolo", "Uma lista de números", "Um mapa do tesouro"] },
        { kind: "lines", instruction: "Escreva, em ordem, o que aconteceu no começo, no meio e no fim da fábula:", lines: 3 },
        { kind: "draw", instruction: "Desenhe um fantoche de um dos personagens da fábula:" },
      ],
    },
    {
      theme: "Carta para um amigo de outra turma",
      exercises: [
        { kind: "lines", instruction: "Escreva a resposta da carta que você recebeu do seu amigo de outra turma:", lines: 4 },
        { kind: "word-select", instruction: "Circule as palavras que combinam com uma carta de amizade:", items: ["ABRAÇO", "FATURA", "AMIGO", "IMPOSTO", "SAUDADE", "CONTRATO", "CARINHO", "RECIBO"] },
        { kind: "options", instruction: "Quem deve ter o nome escrito no início da carta?", options: ["A pessoa que vai receber a carta", "Um cantor famoso", "Só o nome da escola", "Nenhum nome"] },
        { kind: "draw", instruction: "Desenhe você entregando a carta para seu amigo na escola:" },
      ],
    },
    {
      theme: "Roda do meu animal favorito",
      exercises: [
        { kind: "lines", instruction: "Escreva o nome do seu animal favorito e por que você gosta dele:", lines: 3 },
        { kind: "options", instruction: "Na roda de conversa, o que você deve fazer enquanto um colega está falando?", options: ["Escutar com atenção e esperar minha vez", "Falar ao mesmo tempo", "Sair da roda", "Conversar com outro colega"] },
        { kind: "draw", instruction: "Desenhe o seu animal favorito:" },
        { kind: "fill-blank", instruction: "Complete as informações sobre o seu animal favorito:", items: ["Nome do animal: __________", "Onde ele vive: __________", "O que ele come: __________", "Uma característica dele: __________"] },
      ],
    },
    {
      theme: "Retrato falado da personagem",
      exercises: [
        { kind: "lines", instruction: "Escreva o nome da personagem do conto e três características físicas dela (como é o cabelo, os olhos, a altura):", lines: 3 },
        { kind: "fill-blank", instruction: "Complete o retrato falado da personagem:", items: ["Como ela é por fora: __________", "Como ela é por dentro (personalidade): __________", "O que ela mais gosta de fazer: __________", "Uma frase que ela diria: __________"] },
        { kind: "draw", instruction: "Desenhe a personagem do jeito que você imagina ela:" },
        { kind: "options", instruction: "O que é a 'personalidade' de uma personagem?", options: ["O jeito de ser dela, como corajosa ou tímida", "A cor do cabelo dela", "O tamanho dos sapatos dela", "A idade dela"] },
      ],
    },
    {
      theme: "Cortando a frase gigante em pedaços",
      exercises: [
        { kind: "lines", instruction: "Escreva uma frase grudada (sem espaços) sobre sua casa para um familiar separar as palavras:", lines: 2 },
        { kind: "options", instruction: "Como sabemos onde termina uma palavra e começa outra em uma frase escrita corretamente?", options: ["Pelo espaço em branco entre elas", "Pela cor da letra", "Pelo tamanho da folha", "Pelo número da página"] },
        { kind: "fill-blank", instruction: "Separe as palavras destas frases:", items: ["MINHACASAEBONITA = __________", "EUGOSTODEBRINCAR = __________", "AVOVOFAZBOLO = __________", "OCEUESTAAZUL = __________"] },
        { kind: "draw", instruction: "Desenhe cartões separados para cada palavra da frase: 'MEU IRMÃO GOSTA DE FUTEBOL'." },
      ],
    },
    {
      theme: "Montando o nome dos bichos com letras móveis",
      exercises: [
        { kind: "lines", instruction: "Escolha um animal e escreva o nome dele letra por letra, como se estivesse usando letras móveis:", lines: 2 },
        { kind: "word-select", instruction: "Circule os nomes de animais escritos corretamente:", items: ["GATO", "GATTO", "CACHORO", "CACHORRO", "PASSARO", "PASARO", "PEIXE", "PEXE"] },
        { kind: "lines", instruction: "Escolha uma letra do nome de um animal e explique por que ela é usada nessa palavra:", lines: 2 },
        { kind: "draw", instruction: "Desenhe o animal cujo nome você montou:" },
      ],
    },
    {
      theme: "Reescrevendo a lenda do Boitatá contada por ele mesmo",
      exercises: [
        { kind: "lines", instruction: "Reescreva um pedacinho da lenda do Boitatá como se você fosse ele, contando a história em primeira pessoa (usando 'eu'):", lines: 4 },
        { kind: "options", instruction: "Quando contamos uma história em primeira pessoa, qual palavra usamos bastante?", options: ["Eu", "Ele", "Eles", "A gente deles"] },
        { kind: "fill-blank", instruction: "Complete as frases como se você fosse o Boitatá contando sua própria história:", items: ["Eu sou uma cobra de fogo que mora __________", "Eu protejo __________", "Meus olhos brilham como __________", "À noite eu __________"] },
        { kind: "draw", instruction: "Desenhe como você imagina o Boitatá contando sua própria história:" },
      ],
    },
    {
      theme: "Quando escrevo GA-GO-GA e GUE-GUI",
      exercises: [
        { kind: "lines", instruction: "Escreva uma lista com 4 palavras da sua casa que tenham GA, GO, GU, GUE ou GUI:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete com GUE ou GUI:", items: ["A___ do rio", "___rra entre times de futebol (brincadeira)", "Si___ o caminho até a escola", "Bri___ com seus amigos"] },
        { kind: "options", instruction: "Qual destas palavras tem o som de 'guê' (sem separar as letras)?", options: ["Guerra", "Gente", "Girafa", "Gelo"] },
        { kind: "draw", instruction: "Desenhe algo em casa cujo nome tenha GA, GO ou GU:" },
      ],
    },
    {
      theme: "Lendo em voz alta para achar o que falta",
      exercises: [
        { kind: "lines", instruction: "Leia seu texto em voz alta para um familiar. Escreva uma frase que faltava alguma informação e como você a corrigiu:", lines: 3 },
        { kind: "options", instruction: "Por que ler o próprio texto em voz alta ajuda a revisá-lo?", options: ["Porque ajuda a perceber o que falta ou não faz sentido", "Porque deixa o texto mais colorido", "Porque fica mais rápido de escrever", "Porque não precisa mais reler"] },
        { kind: "fill-blank", instruction: "Complete a frase para deixá-la mais completa:", items: ["Ontem eu fui __________ com minha família", "Meu animal de estimação se chama __________ e é __________", "Na escola eu aprendi __________", "No fim de semana eu gosto de __________"] },
        { kind: "draw", instruction: "Desenhe você lendo seu texto em voz alta para alguém da família:" },
      ],
    },
    {
      theme: "Carta misteriosa sorteia a história do dia",
      exercises: [
        { kind: "lines", instruction: "Sorteie ou escolha uma imagem em casa (uma foto, um desenho, um objeto) e escreva o começo de uma história inventada sobre ela:", lines: 4 },
        { kind: "options", instruction: "Quando você conta uma história para a turma, o que é importante fazer?", options: ["Falar com clareza para todos ouvirem e entenderem", "Falar bem baixinho", "Ler de costas para a turma", "Não olhar para ninguém"] },
        { kind: "fill-blank", instruction: "Complete as partes da sua história inventada:", items: ["No começo, __________", "No meio, aconteceu que __________", "No final, __________", "O personagem principal era __________"] },
        { kind: "draw", instruction: "Desenhe a carta misteriosa (imagem) que você escolheu para inventar a história:" },
      ],
    },
    {
      theme: "Lista de nomes da turma e da agenda do dia",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a escrever seu nome completo:", lines: 2 },
        { kind: "word-select", instruction: "Circule os nomes desta lista que têm a mesma letra inicial do seu nome:", items: ["Ana", "Bruno", "Carla", "Diego", "Elisa", "Felipe", "Gustavo"] },
        { kind: "options", instruction: "Uma lista de nomes serve para:", options: ["Saber quem está na turma", "Fazer um bolo", "Assistir televisão", "Guardar brinquedos"] },
        { kind: "draw", instruction: "Desenhe você chegando na escola e olhando a lista de chamada:" },
      ],
    },
    {
      theme: "Ficha de empréstimo de livros da sala",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa escrever com você o nome do livro que você pegou emprestado:", lines: 1 },
        { kind: "options", instruction: "Quando terminar de ler o livro emprestado, o que você deve fazer?", options: ["Devolver o livro na data combinada", "Guardar o livro para sempre", "Rasgar as páginas", "Emprestar para o cachorro"] },
        { kind: "fill-blank", instruction: "Complete sobre o livro que você levou para casa:", items: ["O livro que eu levei se chama __________", "Ele tem __________ (poucas ou muitas) figuras"] },
        { kind: "draw", instruction: "Desenhe a sua parte preferida do livro que você levou para casa:" },
      ],
    },
    {
      theme: "Leitura de parlenda conhecida de cor",
      exercises: [
        { kind: "lines", instruction: "Recite a parlenda que aprendeu na escola para alguém da sua casa. Peça para essa pessoa escrever o nome dela:", lines: 1 },
        { kind: "word-select", instruction: "Circule as palavras que aparecem na parlenda \"Um, dois, feijão com arroz\":", items: ["feijão", "arroz", "sapato", "biscoito", "pastéis", "boneca"] },
        { kind: "options", instruction: "Uma parlenda é um texto que a gente:", options: ["Sabe de cor e fala com ritmo", "Só pode ler em silêncio", "Nunca pode repetir", "Escreve todo dia diferente"] },
        { kind: "draw", instruction: "Desenhe você e sua família recitando a parlenda juntos:" },
      ],
    },
    {
      theme: "Roda de leitura de rótulos e embalagens",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher uma embalagem da cozinha. Copie o nome do produto:", lines: 1 },
        { kind: "word-select", instruction: "Circule os itens que costumam vir em embalagens ou rótulos:", items: ["biscoito", "suco", "nuvem", "macarrão", "estrela", "sabonete"] },
        { kind: "options", instruction: "Onde mais encontramos rótulos com letras e números para ler?", options: ["Em embalagens de comida e remédio", "Dentro do travesseiro", "No fundo do mar", "Em uma nuvem"] },
        { kind: "draw", instruction: "Desenhe uma embalagem que você encontrou em casa:" },
      ],
    },
    {
      theme: "Roda de contação de contos de fadas e acumulativos",
      exercises: [
        { kind: "lines", instruction: "Conte para alguém da sua casa a história que você ouviu na roda de contação. Peça para essa pessoa escrever o nome da história:", lines: 1 },
        { kind: "options", instruction: "Em uma história acumulativa, o que acontece a cada parte nova?", options: ["Um elemento novo se soma aos anteriores, e tudo se repete", "A história muda completamente de personagens", "A história fica cada vez mais curta", "Nada se repete"] },
        { kind: "word-select", instruction: "Circule as palavras que combinam com contos de fadas:", items: ["castelo", "fada", "princesa", "ônibus", "dragão", "computador"] },
        { kind: "draw", instruction: "Desenhe o castelo ou a casa onde aconteceu a história que você ouviu:" },
      ],
    },
    {
      theme: "Cantigas de roda e seus efeitos de sentido",
      exercises: [
        { kind: "lines", instruction: "Cante para alguém da sua casa a cantiga que aprendeu na roda. Pergunte se essa pessoa conhece outra parecida e escreva o nome:", lines: 1 },
        { kind: "options", instruction: "Cantigas de roda geralmente são cantadas:", options: ["Em roda, de mãos dadas", "Sozinho, no escuro", "Deitado na cama", "Dentro do carro em silêncio"] },
        { kind: "word-select", instruction: "Circule o que costuma acontecer quando cantamos uma cantiga de roda:", items: ["dar as mãos", "formar uma roda", "ficar quieto", "dançar", "dormir", "cantar"] },
        { kind: "draw", instruction: "Desenhe você cantando a cantiga de roda com sua família:" },
      ],
    },
    {
      theme: "Notícias e contos sobre diferentes famílias e culturas",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma história de quando você era bebê. Escreva uma palavra dessa história:", lines: 2 },
        { kind: "options", instruction: "É importante respeitar famílias diferentes da nossa porque:", options: ["Cada família tem seu jeito de viver e todas merecem respeito", "Só existe uma família certa", "Famílias diferentes não devem se falar", "Não precisamos conhecer outras famílias"] },
        { kind: "word-select", instruction: "Circule quem mora ou cuida de você na sua casa:", items: ["mãe", "pai", "avó", "avô", "tio", "irmão", "vizinho"] },
        { kind: "draw", instruction: "Desenhe as pessoas que moram com você:" },
      ],
    },
    {
      theme: "Conhecendo a história do bairro pela leitura",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém mais velho da sua casa como era o bairro antigamente. Escreva o que essa pessoa contou:", lines: 2 },
        { kind: "options", instruction: "Conversar com pessoas mais velhas sobre o bairro ajuda a:", options: ["Conhecer a história do lugar onde moramos", "Aprender a andar de bicicleta", "Fazer comida", "Assistir televisão"] },
        { kind: "word-select", instruction: "Circule o que pode ter mudado no seu bairro com o passar do tempo:", items: ["prédios", "ruas", "lojas", "o sol", "as estrelas", "as casas"] },
        { kind: "draw", instruction: "Desenhe como você imagina que era o seu bairro há muitos anos:" },
      ],
    },
    {
      theme: "Comparando os nomes da turma",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer o nome completo de duas pessoas da família. Escreva os nomes:", lines: 2 },
        { kind: "word-select", instruction: "Circule os nomes que terminam com a letra A:", items: ["Ana", "Pedro", "Maria", "Lucas", "Julia", "Davi"] },
        { kind: "options", instruction: "Dois nomes são parecidos quando:", options: ["Começam ou terminam com as mesmas letras", "Têm a mesma quantidade de amigos", "São da mesma cor", "Rimam com números"] },
        { kind: "fill-blank", instruction: "Compare seu nome com o nome de alguém da sua casa:", items: ["Meu nome começa com __________", "O nome dessa pessoa começa com __________"] },
      ],
    },
    {
      theme: "Meu nome é assim",
      exercises: [
        { kind: "lines", instruction: "Escreva seu nome completo mais uma vez, sem copiar de nenhum lugar, e peça para alguém da sua casa conferir:", lines: 1 },
        { kind: "options", instruction: "Você já consegue escrever seu nome:", options: ["Sozinho, sem precisar copiar", "Só olhando um modelo", "Só de olhos fechados", "Ainda não escrevo meu nome"] },
        { kind: "word-select", instruction: "Circule as letras que aparecem no seu nome nesta lista:", items: ["A", "B", "C", "D", "E", "F", "G", "H"] },
        { kind: "draw", instruction: "Desenhe você mesmo segurando uma placa com seu nome escrito:" },
      ],
    },
    {
      theme: "Lista de livros preferidos da turma",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a escrever o nome do seu livro preferido de casa:", lines: 1 },
        { kind: "options", instruction: "Uma lista de livros preferidos serve para:", options: ["Saber quais livros a turma mais gosta de ler", "Jogar bola", "Fazer comida", "Guardar roupas"] },
        { kind: "word-select", instruction: "Circule os títulos desta lista que parecem nomes de histórias infantis:", items: ["A Menina e o Vento", "Relatório Financeiro Mensal", "O Gato Que Ria", "Lista de Compras do Mercado", "Uma Casa Cheia de Amigos"] },
        { kind: "draw", instruction: "Desenhe o personagem do seu livro preferido:" },
      ],
    },
    {
      theme: "Montando listas com letras móveis",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa escrever, em letras separadas, o nome de um objeto da casa. Copie essas letras aqui:", lines: 2 },
        { kind: "word-select", instruction: "Circule as palavras que estão escritas com as letras corretas para o que representam:", items: ["SOL", "LUA", "BOLA", "XKPT", "GATO", "VNML"] },
        { kind: "options", instruction: "Letras móveis ajudam a gente a:", options: ["Montar e desmontar palavras para aprender a escrever", "Pintar desenhos", "Jogar futebol", "Contar números grandes"] },
        { kind: "draw", instruction: "Desenhe uma palavra que você montaria com letras móveis, escolhendo um objeto que você gosta:" },
      ],
    },
    {
      theme: "Escrevendo de cor a parlenda favorita",
      exercises: [
        { kind: "lines", instruction: "Escreva de novo, em casa, um pedacinho da parlenda que você sabe de cor. Peça para alguém da família ouvir você recitando:", lines: 2, note: "Vale escrever do seu jeito, sem se preocupar em acertar todas as letras." },
        { kind: "options", instruction: "Escrever uma parlenda de cor é mais fácil porque:", options: ["Já sabemos as palavras de tanto repetir", "Ninguém nunca ouviu essa parlenda antes", "As palavras são sempre diferentes", "Não precisa pensar em letras"] },
        { kind: "word-select", instruction: "Circule as palavras que podem aparecer em parlendas:", items: ["arroz", "biscoito", "carro", "pastéis", "nuvem", "feijão"] },
        { kind: "draw", instruction: "Desenhe você escrevendo a parlenda em casa:" },
      ],
    },
    {
      theme: "Recontando a história com nossas palavras",
      exercises: [
        { kind: "lines", instruction: "Reconte para alguém da sua casa a história que ouviu na escola. Peça para essa pessoa escrever uma palavra que lembra o final:", lines: 1 },
        { kind: "options", instruction: "Recontar uma história com nossas palavras significa:", options: ["Contar a mesma história do nosso jeito, sem decorar", "Copiar o texto do livro igualzinho", "Inventar uma história totalmente nova", "Não contar nada"] },
        { kind: "word-select", instruction: "Circule as palavras que costumam aparecer no início de uma história:", items: ["Era uma vez", "No final", "Depois de tudo", "Um dia", "Ontem à noite", "Amanhã"] },
        { kind: "draw", instruction: "Desenhe a parte da história que você mais gostou de recontar:" },
      ],
    },
    {
      theme: "Reescrevendo um conto conhecido",
      exercises: [
        { kind: "lines", instruction: "Conte para alguém da sua casa qual conto a turma está reescrevendo e peça para essa pessoa escrever o título junto com você:", lines: 1 },
        { kind: "options", instruction: "Reescrever um conto conhecido é uma forma de:", options: ["Praticar a escrita usando uma história que já conhecemos", "Decorar o texto todo sem entender", "Aprender matemática", "Desenhar sem pensar na história"] },
        { kind: "word-select", instruction: "Circule os elementos que fazem parte de um conto:", items: ["personagens", "lugar onde acontece", "problema da história", "final", "preço", "ingredientes"] },
        { kind: "draw", instruction: "Desenhe o personagem principal do conto que a turma está reescrevendo:" },
      ],
    },
    {
      theme: "Indicando um livro para os colegas",
      exercises: [
        { kind: "draw", instruction: "Em casa, escolha um livro que você tem e desenhe a capa dele:" },
        { kind: "fill-blank", instruction: "Complete com o nome do livro escolhido:", items: ["O nome do livro é: __________."] },
        { kind: "options", instruction: "Peça para alguém da sua casa te ajudar: esse livro é de aventura, de animais ou de princesa?", options: ["Aventura", "Animais", "Princesa", "Outro tipo"] },
        { kind: "lines", instruction: "Escreva uma frase curta dizendo por que você gosta desse livro:", lines: 2 },
      ],
    },
    {
      theme: "Relato do passeio da turma",
      exercises: [
        { kind: "draw", instruction: "Peça para alguém da sua casa contar sobre um passeio que fez quando era criança. Desenhe esse passeio:" },
        { kind: "fill-blank", instruction: "Complete sobre o passeio da turma:", items: ["No passeio da turma, nós fomos de __________ (ônibus, a pé, van)."] },
        { kind: "options", instruction: "Qual dessas é uma boa forma de terminar o relato de um passeio?", options: ["Por fim, voltamos para a escola", "Amanhã vou nascer", "Nunca fomos a lugar nenhum", "Ontem eu não fui"] },
        { kind: "lines", instruction: "Escreva o nome do lugar do passeio da turma:", lines: 1 },
      ],
    },
    {
      theme: "Convite para a festa da turma",
      exercises: [
        { kind: "lines", instruction: "Escreva um convite curto para chamar alguém da sua casa para uma festa imaginária:", lines: 3 },
        { kind: "fill-blank", instruction: "Complete com os dados do seu convite:", items: ["Dia: __________", "Local: __________"] },
        { kind: "options", instruction: "Peça para alguém da sua casa ler o seu convite. Ela entendeu para onde é o convite?", options: ["Sim, entendeu tudo", "Faltou dizer o local", "Faltou dizer o dia", "Faltou dizer quem convida"] },
        { kind: "draw", instruction: "Desenhe um envelope decorado para colocar o seu convite:" },
      ],
    },
    {
      theme: "Roda de explicação sobre um tema estudado",
      exercises: [
        { kind: "lines", instruction: "Escolha um assunto que você aprendeu na escola e escreva uma frase explicando para alguém da sua casa:", lines: 2 },
        { kind: "options", instruction: "Peça para alguém da sua casa fazer uma pergunta sobre o assunto. Você conseguiu responder?", options: ["Sim, consegui responder", "Não sabia a resposta", "Não entendi a pergunta", "Esqueci o assunto"] },
        { kind: "word-select", instruction: "Circule as palavras que ajudam a explicar um assunto:", items: ["porque", "então", "cadeira", "por isso", "tênis", "assim"] },
        { kind: "draw", instruction: "Desenhe você explicando o assunto para a sua família:" },
      ],
    },
    {
      theme: "Roda de jornal: o que aconteceu essa semana",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa uma novidade da semana e escreva:", lines: 2 },
        { kind: "options", instruction: "A novidade que você descobriu aconteceu:", options: ["Essa semana", "Há muitos anos", "No ano que vem", "Nunca aconteceu"] },
        { kind: "word-select", instruction: "Circule as palavras que são dias da semana:", items: ["segunda", "bola", "sexta", "gato", "domingo", "carro"] },
        { kind: "draw", instruction: "Desenhe a novidade que alguém da sua casa contou para você:" },
      ],
    },
    {
      theme: "Contando o que fiz no fim de semana",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa o que ela fez no último fim de semana e escreva:", lines: 2 },
        { kind: "word-select", instruction: "Circule as atividades que podem ser feitas no fim de semana:", items: ["passear", "dormir na escola", "brincar", "assistir TV", "estudar de madrugada", "visitar a família"] },
        { kind: "options", instruction: "O fim de semana é formado por quais dias?", options: ["Sábado e domingo", "Segunda e terça", "Só domingo", "Quarta e quinta"] },
        { kind: "draw", instruction: "Desenhe o que alguém da sua casa fez no fim de semana:" },
      ],
    },
    {
      theme: "Discussão sobre as regras da sala",
      exercises: [
        { kind: "lines", instruction: "Combine com alguém da sua casa uma regra para a hora da tarefa e escreva essa regra:", lines: 2 },
        { kind: "options", instruction: "Por que é importante ter regras em casa e na escola?", options: ["Para todos conviverem bem", "Para ninguém se divertir", "Para atrapalhar", "Não é importante"] },
        { kind: "word-select", instruction: "Circule as regras que existem na sua casa:", items: ["arrumar a cama", "gritar à noite", "escovar os dentes", "guardar os brinquedos", "não obedecer", "ajudar a arrumar a mesa"] },
        { kind: "draw", instruction: "Desenhe uma regra da sua casa que você segue:" },
      ],
    },
    {
      theme: "Quem são os personagens do conto",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma história e escreva o nome de um personagem dela:", lines: 2 },
        { kind: "options", instruction: "O personagem principal é aquele que:", options: ["Aparece mais e vive a história toda", "Só aparece uma vez", "Nunca aparece", "É o título do livro"] },
        { kind: "word-select", instruction: "Circule as palavras que podem descrever um personagem:", items: ["corajoso", "mesa", "medroso", "esperto", "cadeira", "gentil"] },
        { kind: "draw", instruction: "Desenhe o personagem da história que alguém da sua casa contou:" },
      ],
    },
    {
      theme: "Tirando as repetições do nosso texto",
      exercises: [
        { kind: "fill-blank", instruction: "Troque a palavra repetida por 'ele' ou 'ela':", items: ["O cachorro latiu. __________ estava com fome."] },
        { kind: "lines", instruction: "Escreva duas frases sobre alguém da sua casa sem repetir o nome da pessoa na segunda frase:", lines: 2 },
        { kind: "options", instruction: "Por que é bom não repetir o mesmo nome várias vezes em um texto?", options: ["Porque fica mais bonito de ler", "Porque é proibido", "Porque é mais rápido de escrever", "Não faz diferença"] },
        { kind: "word-select", instruction: "Circule, nesta lista, as vezes que o nome 'João' se repete e poderia ser trocado por 'ele':", items: ["João", "João", "ele", "João", "apelido", "João"] },
      ],
    },
    {
      theme: "Ajustando as palavras de ligação do texto",
      exercises: [
        { kind: "fill-blank", instruction: "Complete usando uma palavra de ligação diferente de 'aí':", items: ["Cheguei em casa, __________ fiz a tarefa."] },
        { kind: "lines", instruction: "Escreva uma frase contando o que você fez hoje sem usar a palavra 'aí':", lines: 2 },
        { kind: "options", instruction: "Qual dessas frases tem uma palavra de ligação repetida demais?", options: ["Fui, aí comi, aí dormi, aí acordei", "Primeiro fui, depois comi, por fim dormi", "Eu fui à escola", "Eu gosto de brincar"] },
        { kind: "word-select", instruction: "Peça para alguém da sua casa contar o dia dela: circule as palavras de ligação que você ouvir na fala:", items: ["então", "depois", "porque", "mas", "quando", "também"] },
      ],
    },
    {
      theme: "Organizando as partes da nossa história",
      exercises: [
        { kind: "lines", instruction: "Conte uma história curta para alguém da sua casa e escreva como ela começa:", lines: 2 },
        { kind: "options", instruction: "O que geralmente acontece no final de uma história?", options: ["O problema se resolve", "A história começa", "Aparecem novos personagens", "Nada acontece"] },
        { kind: "fill-blank", instruction: "Complete com as partes da história que você contou:", items: ["No começo, __________.", "No fim, __________."] },
        { kind: "draw", instruction: "Desenhe o fim da história que você contou para a sua família:" },
      ],
    },
    {
      theme: "Quem está contando a história?",
      exercises: [
        { kind: "lines", instruction: "Escreva uma frase contando algo como se você fosse o personagem, usando a palavra 'eu':", lines: 2 },
        { kind: "options", instruction: "Quando a história fala 'ele' ou 'ela', quem está contando?", options: ["Alguém de fora da história", "O próprio personagem", "Ninguém", "O livro"] },
        { kind: "word-select", instruction: "Peça para alguém ler com você: circule as frases contadas com 'ele' ou 'ela' (3ª pessoa):", items: ["Ele foi à praia", "Eu fui à praia", "Ela comeu um bolo", "Eu comi um bolo"] },
        { kind: "draw", instruction: "Desenhe uma cena e conte para alguém da sua casa usando 'ele' ou 'ela':" },
      ],
    },
    {
      theme: "Comparando coisas nos textos que lemos",
      exercises: [
        { kind: "fill-blank", instruction: "Compare duas pessoas ou coisas da sua casa:", items: ["__________ é maior que __________."] },
        { kind: "lines", instruction: "Escreva uma comparação entre você e alguém da sua casa:", lines: 2 },
        { kind: "options", instruction: "Na frase 'O gato é mais rápido que a tartaruga', o que está sendo comparado?", options: ["A velocidade dos dois", "A cor dos dois", "O tamanho da casa", "O nome dos dois"] },
        { kind: "word-select", instruction: "Circule os pares de palavras que podem ser comparados:", items: ["grande e pequeno", "rápido e lento", "mesa e cadeira", "alto e baixo", "lápis e borracha", "forte e fraco"] },
      ],
    },
    {
      theme: "Observando as cores e imagens do livro",
      exercises: [
        { kind: "draw", instruction: "Escolha um livro da sua casa e desenhe a ilustração da capa dele:" },
        { kind: "options", instruction: "As cores escuras em uma imagem geralmente mostram um momento:", options: ["De mistério ou medo", "De festa colorida", "De muito sol", "De alegria só"] },
        { kind: "word-select", instruction: "Peça para alguém da sua casa mostrar um livro com você: circule o que vocês observaram nele:", items: ["cores fortes", "imagens grandes", "desenhos pequenos", "texto grande", "personagens coloridos", "página em branco"] },
        { kind: "lines", instruction: "Escreva qual é a sua cor favorita nos livros e por quê:", lines: 2 },
      ],
    },
  ],
};
