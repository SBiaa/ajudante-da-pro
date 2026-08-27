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
    {
      theme: "Lendo, escrevendo e comparando números naturais na reta numerada",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com o sinal >, < ou =:", items: ["6.302 ___ 6.320", "12.500 ___ 12.500", "9.876 ___ 9.786"] },
        { kind: "word-select", instruction: "Leia a lista de números com um adulto da sua casa e circule os que são maiores que 5.000:", items: ["3.210", "7.845", "5.001", "4.999", "9.320", "5.000"] },
        { kind: "draw", instruction: "Peça para alguém da sua casa dizer um número de 4 algarismos. Escreva esse número e represente-o em uma reta numerada." },
        { kind: "lines", instruction: "Explique para alguém da sua família como se lê o número 27.340. Depois escreva aqui como foi essa explicação.", lines: 3 },
      ],
    },
    {
      theme: "Compondo e decompondo números naturais",
      exercises: [
        { kind: "fill-blank", instruction: "Complete a composição:", items: ["5.000 + 300 + 40 + 7 = __________", "9.000 + 0 + 20 + 6 = __________", "1.000 + 700 + 0 + 5 = __________"] },
        { kind: "options", instruction: "Procure em casa uma embalagem, conta ou objeto com um número de 4 algarismos. Qual é o valor da dezena nesse número?", options: ["É o segundo algarismo da direita para a esquerda", "É sempre o número 10", "É o primeiro algarismo da esquerda", "Não dá para saber"] },
        { kind: "draw", instruction: "Encontre um número em uma embalagem ou conta de casa e desenhe sua decomposição em milhar, centena, dezena e unidade." },
        { kind: "lines", instruction: "Peça para alguém da sua casa escrever um número de 4 algarismos. Decomponha esse número e explique como fez.", lines: 3 },
      ],
    },
    {
      theme: "Recitação oral de sequências numéricas",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as sequências descendentes:", items: ["980, 970, 960, ____, ____, ____", "500, 480, 460, ____, ____, ____", "2.000, 1.900, 1.800, ____, ____, ____"] },
        { kind: "word-select", instruction: "Circule os números que fazem parte da sequência de 25 em 25 começando em 0:", items: ["25", "40", "50", "75", "90", "100", "125", "150", "200", "210"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa contar em voz alta de 7 em 7 a partir de 0 até 70. Escreva aqui os números que essa pessoa disse.", lines: 4 },
        { kind: "draw", instruction: "Desenhe um caracol numérico (espiral) contando de 3 em 3 a partir de 0 até 30, junto de alguém da sua casa." },
      ],
    },
    {
      theme: "Estimativas e arredondamentos na resolução de problemas",
      exercises: [
        { kind: "fill-blank", instruction: "Arredonde para a centena mais próxima:", items: ["342 → ____", "758 → ____", "495 → ____"] },
        { kind: "options", instruction: "Você tem R$ 50 e quer comprar um lanche de R$ 18 e um suco de R$ 7. Fazendo uma estimativa rápida, o dinheiro é suficiente?", options: ["Sim, sobra dinheiro", "Não, falta dinheiro", "Dá exatamente certo", "Não é possível estimar"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer quanto custaram as compras do mês (aproximadamente). Escreva o valor arredondado para a centena mais próxima.", lines: 3 },
        { kind: "draw", instruction: "Junto com alguém da sua casa, estime quantos passos você dá da porta de casa até a cozinha (ou outro cômodo) e depois conte de verdade para comparar. Desenhe o percurso e escreva os dois números." },
      ],
    },
    {
      theme: "Cálculo das quatro operações com estratégias pessoais",
      exercises: [
        { kind: "lines", instruction: "Calcule 620 - 275 usando uma estratégia pessoal e explique como pensou.", lines: 4 },
        { kind: "fill-blank", instruction: "Resolva mentalmente:", items: ["300 + 450 = ____", "18 x 5 = ____", "96 ÷ 8 = ____"] },
        { kind: "options", instruction: "Peça para alguém da sua casa resolver 235 + 198 de cabeça. Qual estratégia essa pessoa usou?", options: ["Arredondar 198 para 200 e depois tirar 2", "Somar as centenas, dezenas e unidades separadamente", "Contar nos dedos", "Usar calculadora"] },
        { kind: "draw", instruction: "Junto com alguém da sua casa, invente um problema de compras usando valores aproximados e resolva-o com cálculo mental. Desenhe os produtos escolhidos." },
      ],
    },
    {
      theme: "Multiplicando e dividindo por 10, 100 e 1000",
      exercises: [
        { kind: "fill-blank", instruction: "Complete:", items: ["82 x 10 = ____", "6 x 1.000 = ____", "9.000 ÷ 100 = ____", "500 ÷ 10 = ____"] },
        { kind: "options", instruction: "Uma fábrica produz 45 caixas por dia, cada caixa com 100 peças. Quantas peças a fábrica produz por dia?", options: ["4.500", "450", "45.000", "4.050"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa te dar um número entre 1 e 100. Multiplique esse número por 10, 100 e 1.000 e explique a regularidade que percebeu.", lines: 3 },
        { kind: "draw", instruction: "Junto com alguém da sua casa, procure um produto que vem em pacotes de 10 ou 100 unidades (como ovos, clipes, folhas de papel). Desenhe o produto e calcule quantas unidades teria em 10 pacotes iguais." },
      ],
    },
    {
      theme: "Fatos básicos da multiplicação por 6, 7, 8 e 9",
      exercises: [
        { kind: "fill-blank", instruction: "Calcule:", items: ["9 x 6 = ____", "48 ÷ 8 = ____", "7 x 8 = ____", "63 ÷ 9 = ____"] },
        { kind: "options", instruction: "Peça para alguém da sua casa te perguntar 5 fatos da tabuada do 6, 7, 8 ou 9. Como você foi?", options: ["Acertei todos", "Acertei a maioria", "Acertei poucos", "Não sabia nenhum"] },
        { kind: "lines", instruction: "Escreva 3 fatos da tabuada do 8 que alguém da sua casa te ajudou a treinar.", lines: 3 },
        { kind: "draw", instruction: "Desenhe um quadro com 6 fileiras de 7 objetos (bolinhas, quadradinhos) para mostrar por que 6 x 7 = 42." },
      ],
    },
    {
      theme: "Multiplicação e divisão por decomposição",
      exercises: [
        { kind: "lines", instruction: "Calcule 45 x 3 decompondo o número 45. Explique cada etapa.", lines: 4 },
        { kind: "fill-blank", instruction: "Complete a decomposição:", items: ["18 x 4 = (10 x 4) + (8 x 4) = ____", "52 x 3 = (50 x 3) + (2 x 3) = ____"] },
        { kind: "options", instruction: "Peça para alguém da sua casa calcular 32 x 4 de cabeça, usando decomposição. Como essa pessoa fez?", options: ["Separou em 30 x 4 e 2 x 4, depois somou", "Contou de 4 em 4 até 32 vezes", "Usou apenas os dedos", "Não sabia calcular"] },
        { kind: "draw", instruction: "Junto com alguém da sua casa, desenhe a decomposição do cálculo 24 x 5 usando um retângulo dividido em duas partes." },
      ],
    },
    {
      theme: "Técnicas convencionais das quatro operações",
      exercises: [
        { kind: "fill-blank", instruction: "Resolva usando a conta armada:", items: ["538 + 347 = ____", "701 - 468 = ____", "143 x 5 = ____", "456 ÷ 6 = ____"] },
        { kind: "options", instruction: "Peça para alguém da sua casa resolver uma conta de subtração com você usando a técnica que essa pessoa aprendeu na escola dela. É igual à sua?", options: ["Sim, é igual", "É parecida, mas com pequenas diferenças", "É totalmente diferente", "Essa pessoa não lembra"] },
        { kind: "lines", instruction: "Escolha uma conta de multiplicação armada que você resolveu e explique cada etapa para alguém da sua casa. O que essa pessoa achou mais difícil de entender?", lines: 4 },
        { kind: "draw", instruction: "Junto com alguém da sua casa, invente uma conta de divisão com um número de 3 algarismos dividido por um número de 1 algarismo e resolva pela técnica armada." },
      ],
    },
    {
      theme: "Problemas dos campos aditivo e multiplicativo",
      exercises: [
        { kind: "lines", instruction: "Uma padaria vendeu 145 pães de manhã e 98 pães à tarde. Quantos pães foram vendidos no total? Explique seu raciocínio.", lines: 4 },
        { kind: "fill-blank", instruction: "Resolva com a ajuda de alguém da sua casa:", items: ["Uma van transporta 15 pessoas por viagem. Em 6 viagens, quantas pessoas foram transportadas? ____", "Uma horta tem 240 tomates e foram colhidos 165. Quantos tomates ainda restam? ____"] },
        { kind: "options", instruction: "Peça para alguém da sua casa contar quantas prateleiras tem um armário e quantos objetos cabem em cada prateleira. Se cada prateleira tem a mesma quantidade, como você calcula o total?", options: ["Multiplicando o número de prateleiras pela quantidade em cada uma", "Somando só as prateleiras", "Dividindo os objetos pelas prateleiras", "Não é possível calcular"] },
        { kind: "draw", instruction: "Junto com alguém da sua casa, crie e resolva um problema envolvendo compras (com soma e multiplicação) usando preços reais de produtos que vocês têm em casa." },
      ],
    },
    {
      theme: "Números racionais no cotidiano",
      exercises: [
        { kind: "word-select", instruction: "Com alguém da sua casa, circule os produtos da geladeira ou despensa cujas embalagens mostram números racionais (como 1,5 litro, 500g, meio quilo):", items: ["1,5 litro de suco", "3 maçãs", "500g de farinha", "2 pacotes de macarrão", "1/2 dúzia de ovos", "R$ 8,90"] },
        { kind: "options", instruction: "Observe um preço em uma nota fiscal ou etiqueta de casa. Esse valor tem vírgula?", options: ["Sim, quase todo preço tem centavos", "Não, preços nunca têm vírgula", "Só em promoções", "Não sei"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar uma receita culinária. Escreva uma medida da receita que usa fração ou número decimal (como 1/2 xícara ou 0,5 litro).", lines: 3 },
        { kind: "draw", instruction: "Desenhe uma embalagem de produto de casa (como leite ou arroz) e escreva o número racional (decimal ou fração) que aparece nela." },
      ],
    },
    {
      theme: "Leitura e escrita de números racionais",
      exercises: [
        { kind: "fill-blank", instruction: "Complete com a escrita correta:", items: ["0,25 = __________", "4,10 = __________", "1/4 = __________"] },
        { kind: "options", instruction: "Peça para alguém da sua casa ler em voz alta o número 7,30. Como essa pessoa leu?", options: ["Sete vírgula trinta (ou sete e trinta centésimos)", "Setecentos e trinta", "Sete mil trezentos", "Setenta e três"] },
        { kind: "lines", instruction: "Escreva um número decimal que você encontrou em uma embalagem ou preço em casa e explique como se lê.", lines: 3 },
        { kind: "draw", instruction: "Junto com alguém da sua casa, escreva por extenso três preços de produtos que vocês têm em casa (por exemplo, R$ 2,50 = dois reais e cinquenta centavos)." },
      ],
    },
    {
      theme: "Comparando e ordenando números racionais",
      exercises: [
        { kind: "fill-blank", instruction: "Ordene do menor para o maior:", items: ["0,9 / 0,19 / 0,91 → __________", "3,4 / 3,04 / 3,44 → __________"] },
        { kind: "options", instruction: "Peça para alguém da sua casa comparar dois preços de produtos (por exemplo, R$ 5,90 e R$ 5,09). Qual é o mais barato?", options: ["R$ 5,09", "R$ 5,90", "Os dois custam o mesmo", "Não é possível saber"] },
        { kind: "lines", instruction: "Escolha dois preços de produtos de casa com vírgula e escreva qual é maior e por quê.", lines: 3 },
        { kind: "draw", instruction: "Junto com alguém da sua casa, procure três embalagens com pesos ou volumes decimais (como 0,5L, 1,2kg, 0,25kg) e desenhe-as em ordem, da menor para a maior quantidade." },
      ],
    },
    {
      theme: "Sistema decimal na representação de números racionais",
      exercises: [
        { kind: "fill-blank", instruction: "Complete:", items: ["No número 8,63, o algarismo 6 vale ____ décimos", "No número 2,19, o algarismo 9 vale ____ centésimos"] },
        { kind: "options", instruction: "Peça para alguém da sua casa mostrar um valor em dinheiro (por exemplo R$ 12,40). O que representa o algarismo depois da vírgula (o 4)?", options: ["4 décimos de real (40 centavos)", "4 centavos", "4 reais", "4 dezenas"] },
        { kind: "lines", instruction: "Escreva um número decimal de uma conta ou preço de casa e explique o valor de cada algarismo depois da vírgula.", lines: 3 },
        { kind: "draw", instruction: "Junto com alguém da sua casa, desenhe uma tabela de unidade, décimo e centésimo e represente um valor em dinheiro que vocês encontraram em casa." },
      ],
    },
    {
      theme: "Sequências numéricas recursivas com múltiplos",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as sequências:", items: ["Múltiplos de 8: 8, 16, 24, ____, ____, ____", "Múltiplos de 3: 3, 6, 9, ____, ____, ____"] },
        { kind: "word-select", instruction: "Com alguém da sua casa, circule os múltiplos de 6 nesta lista:", items: ["6", "10", "12", "15", "18", "20", "24", "28", "30"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher um número de 1 a 10. Escreva os 6 primeiros múltiplos desse número e explique a regularidade que percebeu.", lines: 4 },
        { kind: "draw", instruction: "Junto com alguém da sua casa, desenhe uma trilha de jogo contando de múltiplos de 4 a partir de 0 até 48." },
      ],
    },
    {
      theme: "Descobrindo o número desconhecido em uma igualdade",
      exercises: [
        { kind: "fill-blank", instruction: "Descubra o número desconhecido:", items: ["32 + ___ = 80", "___ - 24 = 50", "9 x ___ = 72", "___ ÷ 4 = 12"] },
        { kind: "options", instruction: "Peça para alguém da sua casa inventar uma igualdade com um número desconhecido, como ___ + 15 = 40. Você conseguiu resolver?", options: ["Sim, descobri o número sozinho", "Precisei de ajuda", "Não consegui", "A pessoa não quis participar"] },
        { kind: "lines", instruction: "Escreva a igualdade que alguém da sua casa inventou para você e explique como descobriu o número desconhecido.", lines: 3 },
        { kind: "draw", instruction: "Junto com alguém da sua casa, desenhe uma balança equilibrada representando uma igualdade com número desconhecido que vocês criaram juntos." },
      ],
    },
    {
      theme: "Localização de pessoas e objetos em malhas quadriculadas",
      exercises: [
        { kind: "draw", instruction: "Desenhe uma malha quadriculada representando um cômodo da sua casa e marque a posição de três móveis, indicando linha e coluna de cada um." },
        { kind: "fill-blank", instruction: "Com alguém da sua casa, complete:", items: ["A geladeira está na linha ___, coluna ___", "O sofá está na linha ___, coluna ___"] },
        { kind: "options", instruction: "Peça para alguém da sua casa te dar instruções de linha e coluna para você encontrar um objeto escondido em uma malha desenhada. Você encontrou?", options: ["Sim, encontrei seguindo as instruções", "Encontrei com dificuldade", "Não encontrei", "Não fizemos a atividade"] },
        { kind: "lines", instruction: "Descreva como foi brincar de encontrar objetos na malha quadriculada com alguém da sua casa.", lines: 3 },
      ],
    },
    {
      theme: "Movimentação e ângulos como mudança de direção",
      exercises: [
        { kind: "draw", instruction: "Desenhe o trajeto que você faz da sua casa até um lugar próximo (padaria, escola, casa de um parente), indicando as mudanças de direção (vire à direita, vire à esquerda)." },
        { kind: "fill-blank", instruction: "Com alguém da sua casa, complete as instruções de um trajeto real:", items: ["Saindo da porta de casa, ando ____ passos e viro à ____", "Depois viro mais uma vez à ____ para chegar a ____"] },
        { kind: "options", instruction: "Peça para alguém da sua casa te dar instruções de direção (frente, direita, esquerda) para você chegar a um cômodo com os olhos fechados. Funcionou?", options: ["Sim, cheguei certinho", "Cheguei com alguns erros", "Não consegui seguir as instruções", "Não fizemos a atividade"] },
        { kind: "lines", instruction: "Descreva o trajeto que alguém da sua casa te ensinou, usando os termos direita, esquerda e mudança de direção.", lines: 4 },
      ],
    },
    {
      theme: "Classificando e comparando polígonos",
      exercises: [
        { kind: "word-select", instruction: "Com alguém da sua casa, procure objetos com formato de polígono e circule os que vocês encontraram:", items: ["Janela (retângulo)", "Bola (círculo)", "Fatia de pizza triangular", "Prato redondo", "Ladrilho quadrado", "Sinal de trânsito triangular"] },
        { kind: "fill-blank", instruction: "Complete:", items: ["Um objeto de casa com formato de quadrado é: __________", "Um objeto de casa com formato de retângulo é: __________"] },
        { kind: "options", instruction: "Peça para alguém da sua casa te ajudar a contar os lados de uma mesa ou porta. Quantos lados ela tem?", options: ["4 lados", "3 lados", "5 lados", "Nenhum lado"] },
        { kind: "draw", instruction: "Desenhe três objetos que você encontrou em casa com formato de polígono e escreva o nome de cada polígono." },
      ],
    },
    {
      theme: "Similaridades e diferenças entre figuras espaciais",
      exercises: [
        { kind: "word-select", instruction: "Com alguém da sua casa, procure objetos e circule os que têm formato de figura espacial:", items: ["Bola (esfera)", "Caixa de sapato (bloco retangular)", "Lata (cilindro)", "Dado (cubo)", "Chapéu de festa (cone)", "Livro (bloco retangular)"] },
        { kind: "fill-blank", instruction: "Complete com objetos de casa:", items: ["Um objeto com formato de esfera é: __________", "Um objeto com formato de cilindro é: __________", "Um objeto com formato de cubo é: __________"] },
        { kind: "options", instruction: "Peça para alguém da sua casa comparar uma bola e uma laranja. O que elas têm em comum na forma?", options: ["As duas têm formato de esfera, arredondado", "Não têm nada em comum", "As duas têm faces planas", "As duas têm vértices"] },
        { kind: "draw", instruction: "Junto com alguém da sua casa, desenhe três objetos de formatos espaciais diferentes encontrados na cozinha ou sala e escreva o nome de cada figura espacial." },
      ],
    },
    {
      theme: "Planificação de figuras geométricas espaciais",
      exercises: [
        { kind: "word-select", instruction: "Marque, entre os objetos da sua casa, os que têm formato de cone:", items: ["Casquinha de sorvete", "Caixa de sapato", "Chapéu de aniversário (aquele pontudo)", "Lata de ervilha", "Dado de jogo"] },
        { kind: "options", instruction: "Peça para alguém da sua casa te ajudar a olhar uma embalagem em forma de pirâmide (como um brinquedo em forma de pirâmide). Quantas faces triangulares uma pirâmide de base quadrada tem, sem contar a base?", options: ["4", "6", "3", "5"] },
        { kind: "draw", instruction: "Escolha uma embalagem da sua casa (caixa, lata ou pacote) e desenhe como seria a planificação dela se você a abrisse totalmente." },
        { kind: "lines", instruction: "Converse com alguém da sua casa: qual é a diferença entre a planificação de um cubo e a de um bloco retangular (paralelepípedo)? Escreva o que vocês concluíram.", lines: 3 },
      ],
    },
    {
      theme: "Figuras planas nas faces de poliedros",
      exercises: [
        { kind: "lines", instruction: "Escolha um objeto poliedro (com faces planas) da sua casa, como uma caixa de sapato ou uma embalagem de presente. Descreva quantas faces ele tem e qual é o formato de cada uma.", lines: 3 },
        { kind: "fill-blank", instruction: "Complete:", items: ["Uma caixa de sapato (bloco retangular) tem __________ faces retangulares.", "Um dado de jogar tem __________ faces, todas em formato de __________.", "Uma pirâmide de base quadrada tem 1 face __________ e 4 faces __________."] },
        { kind: "options", instruction: "Peça para alguém da sua casa mostrar uma embalagem em formato de prisma. Quantos formatos diferentes de face essa embalagem costuma ter?", options: ["Pode ter 1 ou 2 formatos diferentes, dependendo do prisma", "Sempre só triângulos", "Sempre só círculos", "Nenhuma, prismas não têm faces planas"] },
        { kind: "draw", instruction: "Desenhe as figuras planas (separadas) que você encontraria se desmontasse todas as faces de um cubo." },
      ],
    },
    {
      theme: "Ângulos retos e não retos em figuras poligonais",
      exercises: [
        { kind: "lines", instruction: "Ande pela sua casa e observe 3 objetos ou cantos que formam ângulos retos (por exemplo, o canto de uma porta). Escreva quais são.", lines: 3 },
        { kind: "word-select", instruction: "Marque os objetos da sua casa que provavelmente têm ângulos retos em seus cantos:", items: ["Porta", "Bola", "Televisão", "Prato redondo", "Janela"] },
        { kind: "options", instruction: "Peça para alguém da sua casa usar o canto de uma folha de papel para comparar com o ângulo da ponta de uma fatia de pizza. O ângulo da ponta da pizza costuma ser:", options: ["Menor que o ângulo reto (agudo)", "Igual ao ângulo reto", "Maior que o ângulo reto (obtuso)", "Impossível saber"] },
        { kind: "draw", instruction: "Escolha um móvel ou objeto retangular da sua casa (como uma mesa) e desenhe seu contorno, marcando com um quadradinho os 4 ângulos retos dos cantos." },
      ],
    },
    {
      theme: "Chances de ocorrência em eventos aleatórios",
      exercises: [
        { kind: "options", instruction: "Peça para alguém da sua casa jogar uma moeda 10 vezes com você e anotar quantas vezes deu cara e quantas deu coroa. O resultado esperado é que os números fiquem:", options: ["Próximos um do outro (chances parecidas)", "Sempre 10 caras e 0 coroas", "Sempre 0 caras e 10 coroas", "Impossível prever nada"] },
        { kind: "lines", instruction: "Pense em uma situação da sua rotina em casa que é certa de acontecer (por exemplo, o dia terminar) e uma que é impossível. Escreva as duas e explique por quê.", lines: 4 },
        { kind: "word-select", instruction: "Marque as situações que são IMPOSSÍVEIS de acontecer:", items: ["Um cachorro falar português", "Chover em um dia de verão", "O mês de fevereiro ter 45 dias", "Uma pessoa nascer em janeiro", "Uma pedra flutuar sozinha no ar"] },
        { kind: "draw", instruction: "Desenhe uma caixa com bolinhas coloridas de forma que seja muito provável tirar uma bolinha azul e pouco provável tirar uma bolinha vermelha." },
      ],
    },
    {
      theme: "Interpretando tabelas e gráficos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar uma conta de luz ou água com um gráfico de consumo. O que esse gráfico mostra? O consumo está subindo, descendo ou variando?", lines: 3 },
        { kind: "options", instruction: "Se um gráfico de barras mostra a temperatura de 4 dias da semana e a barra de quarta-feira é a mais alta, isso significa que quarta-feira foi o dia:", options: ["Mais quente da semana", "Mais frio da semana", "Com mais chuva", "Sem nenhuma informação"] },
        { kind: "fill-blank", instruction: "Peça a alguém da sua casa para escolher 3 números do dia a dia (por exemplo, idade das pessoas da casa) e complete:", items: ["Os números escolhidos foram: __________, __________, __________.", "O maior número que vocês escolheram foi __________."] },
        { kind: "draw", instruction: "Junto com alguém da sua casa, escolha 3 informações sobre a família (idades, alturas ou número de irmãos de cada um) e desenhe um gráfico de colunas simples com esses dados." },
      ],
    },
    {
      theme: "Pesquisa, coleta e organização de dados",
      exercises: [
        { kind: "lines", instruction: "Peça para 5 pessoas da sua casa ou vizinhança responderem: Qual estação do ano você mais gosta? Anote as respostas aqui e diga qual foi a mais escolhida.", lines: 4 },
        { kind: "word-select", instruction: "Marque quais das opções abaixo são boas perguntas para uma pesquisa de dados:", items: ["Qual seu time de futebol favorito?", "Bom dia, tudo bem?", "Quantas horas você dorme por noite?", "Qual seu programa de TV favorito?", "Você sabe seu próprio nome?"] },
        { kind: "fill-blank", instruction: "Complete com os dados da sua pesquisa em casa:", items: ["Na minha pesquisa em casa, perguntei: __________.", "A resposta mais comum foi: __________.", "No total, entrevistei __________ pessoas."] },
        { kind: "draw", instruction: "Organize os dados que você coletou em casa em uma tabela simples, com o nome de cada pessoa entrevistada e sua resposta." },
      ],
    },
    {
      theme: "Produzindo textos a partir de dados de pesquisa",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar quantos livros, quantos aparelhos eletrônicos e quantas plantas existem na sala. Depois, escreva um textinho contando o que há em maior e menor quantidade.", lines: 4 },
        { kind: "fill-blank", instruction: "Complete:", items: ["Na minha casa, o cômodo com mais objetos que eu contei foi __________.", "Isso aconteceu porque __________."] },
        { kind: "options", instruction: "Ao contar para a família o resultado de uma pesquisa, é importante:", options: ["Explicar os números com clareza, dizendo o que é maior e o que é menor", "Só mostrar os números sem explicar nada", "Inventar números diferentes dos que foram coletados", "Não contar para ninguém"] },
        { kind: "lines", instruction: "Escreva um pequeno texto (como se fosse para o mural da escola) contando o resultado da pesquisa que você fez em casa sobre um assunto à sua escolha.", lines: 5 },
      ],
    },
    {
      theme: "Estimativa e medição de comprimento, massa e capacidade",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a medir, com uma fita métrica ou régua, o comprimento da mesa da cozinha. Anote a medida e escreva como vocês fizeram.", lines: 3 },
        { kind: "fill-blank", instruction: "Complete:", items: ["Na cozinha da minha casa, encontrei uma embalagem que mostra sua capacidade em __________ (litros ou mililitros).", "Encontrei também uma embalagem que mostra a massa em __________ (gramas ou quilogramas)."] },
        { kind: "options", instruction: "Peça para alguém pesar (em uma balança de cozinha, se tiver) um pacote de macarrão. Qual é a unidade mais provável de aparecer na embalagem?", options: ["Gramas (g)", "Metros (m)", "Litros (L)", "Quilômetros (km)"] },
        { kind: "draw", instruction: "Escolha 3 objetos da sua casa e desenhe-os, escrevendo ao lado uma estimativa (chute) do comprimento, massa ou capacidade de cada um." },
      ],
    },
    {
      theme: "Relação entre grandeza e unidade de medida",
      exercises: [
        { kind: "fill-blank", instruction: "Complete:", items: ["Um pacote de açúcar de 1 kg tem __________ gramas.", "Uma garrafa de 2 litros de refrigerante tem __________ mililitros."] },
        { kind: "options", instruction: "Peça para alguém da sua casa mostrar uma embalagem com a massa escrita em gramas. Se a embalagem tem 500 g, quantas embalagens iguais são necessárias para completar 1 kg?", options: ["2", "5", "10", "500"] },
        { kind: "lines", instruction: "Junto com alguém da sua casa, procure na cozinha uma embalagem que mostre litros e outra que mostre mililitros. Escreva o nome dos produtos e as medidas encontradas.", lines: 3 },
        { kind: "draw", instruction: "Desenhe uma balança de dois pratos equilibrada, mostrando de um lado 1 kg e do outro lado quatro pacotes de 250 g cada." },
      ],
    },
    {
      theme: "Duração de intervalos de tempo",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa a que horas você foi dormir ontem e a que horas acordou hoje. Calcule quantas horas você dormiu e escreva como fez a conta.", lines: 4 },
        { kind: "fill-blank", instruction: "Complete:", items: ["Ontem eu comecei a fazer a lição de casa às __________ e terminei às __________.", "Isso significa que gastei __________ para fazer a lição."] },
        { kind: "options", instruction: "Se um programa de televisão começa às 20h e dura 1 hora e 30 minutos, a que horas ele termina?", options: ["21h30", "22h", "20h30", "21h"] },
        { kind: "draw", instruction: "Desenhe a sua rotina de um sábado, marcando em relógios pelo menos 3 horários importantes (acordar, almoçar, dormir)." },
      ],
    },
    {
      theme: "Conversões entre unidades de medida de tempo",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa há quantos meses (ou anos) vocês moram na casa/apartamento atual. Depois, calcule aproximadamente quantas semanas seria isso.", lines: 3 },
        { kind: "fill-blank", instruction: "Complete:", items: ["O meu aniversário é daqui a __________ meses.", "Isso é aproximadamente __________ semanas."] },
        { kind: "options", instruction: "Se uma viagem em família vai durar 14 dias, isso equivale a quantas semanas?", options: ["2 semanas", "1 semana", "4 semanas", "7 semanas"] },
        { kind: "draw", instruction: "Junto com alguém da sua casa, desenhe uma linha do tempo de uma semana (domingo a sábado) marcando um evento importante da família em cada dia, se houver." },
      ],
    },
    {
      theme: "Valores decimais no sistema monetário brasileiro",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar uma nota fiscal ou lista de compras do mercado. Escolha 2 produtos e escreva os preços. Depois, calcule quanto custariam os dois juntos.", lines: 4 },
        { kind: "fill-blank", instruction: "Complete com preços de produtos que você encontrou em casa:", items: ["O produto mais barato que encontrei custa R$ __________.", "O produto mais caro que encontrei custa R$ __________.", "A diferença de preço entre os dois é R$ __________."] },
        { kind: "options", instruction: "Se um brinquedo custa R$ 25,90 e você tem R$ 30,00, você tem dinheiro suficiente para comprá-lo?", options: ["Sim, e ainda sobra troco", "Não, falta dinheiro", "Sim, mas sem sobrar nada", "Impossível saber"] },
        { kind: "draw", instruction: "Faça uma lista de compras imaginária com 3 produtos e seus preços (em reais e centavos) e desenhe como ficaria a soma total." },
      ],
    },
    {
      theme: "Perímetro como medida do contorno de figuras",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a medir, com uma fita métrica, o contorno (perímetro) de uma mesa retangular. Anote as medidas dos lados e calcule o perímetro.", lines: 4 },
        { kind: "fill-blank", instruction: "Complete com os dados da mesa que você mediu:", items: ["A mesa que medi tem __________ cm de comprimento e __________ cm de largura.", "O perímetro dessa mesa é __________ cm."] },
        { kind: "options", instruction: "Se um terreno quadrado tem 8 metros de lado, quantos metros de cerca são necessários para contornar todo o terreno?", options: ["32 metros", "16 metros", "64 metros", "8 metros"] },
        { kind: "draw", instruction: "Escolha um cômodo da sua casa (ou um objeto retangular) e desenhe seu formato, estimando as medidas dos lados e calculando o perímetro aproximado." },
      ],
    },
    {
      theme: "Calculando o perímetro em malhas quadriculadas",
      exercises: [
        { kind: "draw", instruction: "Desenhe uma malha quadriculada de 6 por 6 e, dentro dela, uma figura de sua escolha. Depois, calcule o perímetro contando os lados dos quadradinhos." },
        { kind: "fill-blank", instruction: "Complete com os dados da figura que você desenhou:", items: ["A figura que desenhei tem __________ lados.", "O perímetro da minha figura é __________ quadradinhos."] },
        { kind: "options", instruction: "Peça para alguém da sua casa desenhar um retângulo em uma folha quadriculada com 3 quadradinhos de largura e 5 de comprimento. Qual é o perímetro dessa figura?", options: ["16 quadradinhos", "15 quadradinhos", "8 quadradinhos", "18 quadradinhos"] },
        { kind: "lines", instruction: "Explique para alguém da sua casa como se calcula o perímetro de uma figura em malha quadriculada e escreva aqui o que você explicou.", lines: 3 },
      ],
    },
    {
      theme: "Certo, provável e impossível em jogos",
      exercises: [
        { kind: "lines", instruction: "Jogue um jogo de dado ou cartas com alguém da sua casa. Anote um resultado que era muito provável de acontecer e outro que era pouco provável, explicando por quê.", lines: 4 },
        { kind: "options", instruction: "Se em um jogo de cartas há 10 cartas vermelhas e 2 pretas, tirar uma carta vermelha é:", options: ["Muito provável", "Pouco provável", "Impossível", "Certeza absoluta, sempre dá vermelha"] },
        { kind: "word-select", instruction: "Marque as situações que são CERTAS de acontecer em um jogo de dado comum (1 a 6):", items: ["Sair um número de 1 a 6", "Sair o número 10", "Sair um número inteiro", "Sair sempre o mesmo número", "Sair um número menor que 7"] },
        { kind: "draw", instruction: "Desenhe uma roleta de jogo dividida em partes coloridas de forma que seja muito provável cair na cor amarela e impossível cair na cor roxa." },
      ],
    },
    {
      theme: "Antecipando ocorrências para ganhar um jogo",
      exercises: [
        { kind: "lines", instruction: "Jogue um jogo de trilha ou dados com alguém da sua casa. Antes de jogar o dado, tente prever (antecipar) qual resultado ajudaria você a ganhar e explique por quê.", lines: 4 },
        { kind: "options", instruction: "Em um jogo onde ganha quem tirar o maior número no dado, se seu adversário já tirou 5, qual número você precisa tirar para ganhar?", options: ["6", "Qualquer número de 1 a 6", "1", "Não tem como ganhar"] },
        { kind: "fill-blank", instruction: "Complete com os dados do jogo que você jogou em casa:", items: ["No jogo que joguei em casa, para ganhar eu precisava tirar o número __________.", "A chance de tirar esse número era de __________ em 6."] },
        { kind: "draw", instruction: "Combine com alguém da sua casa um jogo simples de dados e desenhe o placar final, explicando quem ganhou e por quê." },
      ],
    },
    {
      theme: "Matemática e cultura indígena",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre povos indígenas do Brasil. Pesquisem juntos: quantas etnias indígenas existem aproximadamente no Brasil hoje? Escreva o que descobriram.", lines: 4 },
        { kind: "fill-blank", instruction: "Complete imaginando uma aldeia indígena:", items: ["Uma aldeia indígena que pesquisei (ou imaginei) tem __________ famílias.", "Se cada família planta em média 5 tipos de alimentos, ao todo seriam plantados __________ tipos (considerando repetições)."] },
        { kind: "options", instruction: "As pinturas corporais de muitos povos indígenas usam frequentemente qual tipo de padrão?", options: ["Padrões geométricos que se repetem (simetria)", "Números escritos", "Gráficos de barras", "Fórmulas matemáticas"] },
        { kind: "draw", instruction: "Desenhe um colar ou pulseira com contas de 2 cores que se alternam em um padrão que se repete (por exemplo: azul, azul, vermelho, azul, azul, vermelho...)." },
      ],
    },
    {
      theme: "Matemática, biodiversidade e Fome Zero",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre quais alimentos são plantados ou comprados na sua região. Escolham 3 alimentos e pesquisem (ou estimem) quantas espécies de sementes existem desses alimentos no Brasil.", lines: 4 },
        { kind: "fill-blank", instruction: "Complete observando a geladeira ou despensa da sua casa:", items: ["Na geladeira ou despensa da minha casa encontrei __________ tipos diferentes de frutas ou verduras.", "Se cada tipo custasse em média R$ 4,00 o quilo, comprar 1 kg de cada custaria R$ __________."] },
        { kind: "options", instruction: "Reduzir o desperdício de alimentos ajuda a combater a fome. Se uma família compra 10 kg de frutas por semana e desperdiça 2 kg, que fração das frutas foi desperdiçada?", options: ["2/10 (ou 1/5)", "10/2", "8/10", "2/2"] },
        { kind: "draw", instruction: "Desenhe os alimentos que você e sua família mais consomem durante a semana e organize-os por tipo (frutas, verduras, grãos), contando quantos itens há em cada grupo." },
      ],
    },
    {
      theme: "Propriedade associativa da adição e da multiplicação",
      exercises: [
        { kind: "fill-blank", instruction: "Complete:", items: ["(10 + 5) + 3 = __________", "10 + (5 + 3) = __________", "Os dois resultados são __________ (iguais/diferentes)."] },
        { kind: "lines", instruction: "Peça para alguém da sua casa te dar 3 números pequenos. Some-os de duas formas diferentes, agrupando primeiro os dois primeiros e depois os dois últimos. Escreva as contas e o resultado.", lines: 4 },
        { kind: "options", instruction: "Se você precisa multiplicar 2 x 5 x 4, qual caminho é mais fácil de calcular de cabeça, usando a propriedade associativa?", options: ["(2 x 5) x 4 = 10 x 4 = 40", "2 + 5 + 4 = 11", "2 x 5 + 4 = 14", "Não existe um jeito mais fácil"] },
        { kind: "draw", instruction: "Junto com alguém da sua casa, escolha 3 números e desenhe duas formas diferentes de agrupá-los na multiplicação, mostrando que o resultado final é o mesmo." },
      ],
    },
    {
      theme: "Regularidades em multiplicações por 0 e por 1",
      exercises: [
        { kind: "fill-blank", instruction: "Complete:", items: ["123 x 1 = __________", "1 x 987 = __________", "500 x 0 = __________", "0 x 1 = __________"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa te dar um número grande (com 3 ou mais algarismos). Multiplique esse número por 1 e depois por 0. Escreva o que você percebeu sobre essas regularidades.", lines: 4 },
        { kind: "options", instruction: "Se uma loja vende 0 produtos de um tipo em um dia, quanto ela ganhou com esse produto naquele dia?", options: ["R$ 0,00, porque qualquer valor multiplicado por 0 é 0", "O mesmo que o preço do produto", "Depende do preço", "Impossível saber"] },
        { kind: "draw", instruction: "Escreva (ou desenhe) uma pequena tabela com 4 multiplicações por 1 e 4 multiplicações por 0, usando números diferentes escolhidos por você." },
      ],
    },
    {
      theme: "Leitura, escrita e comparação de números naturais de várias ordens",
      exercises: [
        { kind: "fill-blank", instruction: "Observe embalagens ou contas da sua casa (conta de luz, água, mercado) e escreva dois números que você encontrar:", items: ["Número 1 encontrado: __________", "Número 1 por extenso: __________", "Número 2 encontrado: __________"] },
        { kind: "options", instruction: "Arredondando 68.245 para a dezena de milhar mais próxima, obtemos:", options: ["70.000", "60.000", "68.000", "68.300"] },
        { kind: "word-select", instruction: "Circule, entre os números abaixo, aqueles que são maiores que 50.000:", items: ["23.450", "9.870", "104.320", "56.000"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer um número de telefone, CEP ou valor de conta. Escreva o número e explique qual é o valor posicional do algarismo das centenas nesse número:", lines: 4 },
      ],
    },
    {
      theme: "Leitura e representação de números racionais na reta numerada",
      exercises: [
        { kind: "draw", instruction: "Observe uma fita métrica, régua ou trena que exista na sua casa. Desenhe um trecho dela e marque a posição do número 2,5:" },
        { kind: "fill-blank", instruction: "Complete:", items: ["Metade de uma pizza representa a fração __________ ou o decimal __________", "Um quarto de hora representa a fração __________ ou o decimal __________"] },
        { kind: "options", instruction: "Qual desses números racionais fica entre 4 e 5 na reta numerada?", options: ["4,6", "5,3", "3,9", "6,0"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa te falar uma medida com vírgula (como o preço de um produto ou uma altura). Escreva a fração correspondente a essa medida decimal e explique como pensou:", lines: 4 },
      ],
    },
    {
      theme: "Significados dos números racionais: parte-todo e quociente",
      exercises: [
        { kind: "lines", instruction: "Escolha um alimento da sua casa que possa ser dividido em partes iguais (pão, barra de cereal, fruta). Descreva a situação e escreva a fração correspondente:", lines: 4 },
        { kind: "options", instruction: "Se 7 barras de chocolate forem divididas igualmente entre 2 crianças, quanto cada uma recebe?", options: ["3 barras e meia (7/2)", "3 barras inteiras", "14 barras", "2 barras e meia"] },
        { kind: "fill-blank", instruction: "Complete:", items: ["Dividir 9 balas entre 4 crianças igualmente: cada uma recebe __________ balas", "Isso pode ser escrito como a fração __________"] },
        { kind: "word-select", instruction: "Circule as situações abaixo que representam o significado de quociente (uma divisão em partes iguais):", items: ["6 laranjas divididas entre 3 pessoas", "3 pedaços coloridos de uma pizza de 8 pedaços", "10 reais divididos entre 5 amigos", "2 fatias pintadas de um bolo cortado em 6 partes"] },
      ],
    },
    {
      theme: "Comparação e ordenação de frações e números decimais",
      exercises: [
        { kind: "word-select", instruction: "Circule os números abaixo que são maiores que 0,5:", items: ["1/4", "3/5", "0,8", "2/10", "0,45"] },
        { kind: "fill-blank", instruction: "Complete:", items: ["Compare os preços: R$ 3,50 e R$ 3,05. O maior é __________"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar dois preços de produtos com vírgula (do supermercado, por exemplo). Escreva os dois valores e explique qual é maior e por quê:", lines: 4 },
        { kind: "options", instruction: "Colocando em ordem decrescente os números 0,9 — 1/2 — 0,25 — 3/4, a sequência correta é:", options: ["0,9 — 3/4 — 1/2 — 0,25", "0,25 — 1/2 — 3/4 — 0,9", "0,9 — 0,25 — 3/4 — 1/2", "1/2 — 3/4 — 0,9 — 0,25"] },
      ],
    },
    {
      theme: "Investigação da equivalência de frações",
      exercises: [
        { kind: "fill-blank", instruction: "Complete as frações equivalentes:", items: ["2/5 = ___/10", "1/3 = ___/9", "3/4 = ___/12"] },
        { kind: "draw", instruction: "Em casa, encontre um objeto que possa ser dividido em partes iguais (uma fruta, uma folha de papel dobrada). Divida-o de duas formas diferentes que representem a mesma fração (por exemplo, 1/2 e 2/4) e desenhe o que você fez:" },
        { kind: "options", instruction: "Qual das frações abaixo NÃO é equivalente a 1/3?", options: ["3/6", "2/6", "4/12", "5/15"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a pensar em uma situação real (uma receita, uma divisão de doces) em que duas frações diferentes representam a mesma quantidade. Descreva a situação:", lines: 4 },
      ],
    },
    {
      theme: "Estratégias de cálculo com as quatro operações",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa fazer uma compra imaginária de dois produtos. Some os valores usando cálculo mental e explique como você pensou:", lines: 4 },
        { kind: "options", instruction: "Qual é a estimativa mais razoável para o resultado de 597 + 203?", options: ["Aproximadamente 800", "Aproximadamente 500", "Aproximadamente 1.200", "Aproximadamente 300"] },
        { kind: "fill-blank", instruction: "Calcule:", items: ["394 + 208 = __________", "1.005 - 487 = __________", "37 x 4 = __________"] },
        { kind: "draw", instruction: "Represente com desenhos (bolinhas, grupos) uma situação de divisão do dia a dia da sua casa, como repartir 18 balas entre 3 pessoas:" },
      ],
    },
    {
      theme: "Resolução de problemas dos campos aditivo e multiplicativo",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar quantas pessoas moram na casa e quantas refeições cada pessoa faz por dia. Calcule quantas refeições são feitas na casa toda em uma semana e explique como calculou:", lines: 5 },
        { kind: "fill-blank", instruction: "Resolva:", items: ["Uma caixa de bombons custa R$ 32,00. Se eu comprar 4 caixas, vou pagar: __________", "Se eu pagar com uma nota de R$ 150,00, vou receber de troco: __________"] },
        { kind: "options", instruction: "Em uma padaria, 5 pães custam R$ 15,00. Quanto custam 12 pães, mantendo o mesmo preço por pão?", options: ["R$ 36,00", "R$ 30,00", "R$ 45,00", "R$ 25,00"] },
        { kind: "draw", instruction: "Ilustre um problema de mais de uma etapa (que precise de duas contas para resolver) sobre uma situação real da sua casa, e escreva a resposta final:" },
      ],
    },
    {
      theme: "Cálculo de adição e subtração com números decimais",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar duas notas fiscais ou preços de produtos com centavos. Some os dois valores e explique o cálculo:", lines: 4 },
        { kind: "fill-blank", instruction: "Resolva:", items: ["Uma corrida de aplicativo custou R$ 14,90 e a gorjeta foi R$ 2,10. Total: __________", "Se paguei com R$ 20,00, o troco foi: __________"] },
        { kind: "options", instruction: "João tinha R$ 50,00, comprou um lanche de R$ 23,75. Quanto sobrou?", options: ["R$ 26,25", "R$ 27,25", "R$ 25,25", "R$ 26,75"] },
        { kind: "draw", instruction: "Desenhe uma cena de compra em um mercado ou padaria da sua casa, com dois produtos e seus preços, e calcule o total gasto:" },
      ],
    },
    {
      theme: "Cálculo de porcentagens simples e sua relação com frações",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar uma promoção ou desconto (em uma embalagem, panfleto ou aplicativo). Calcule quanto seria o desconto em reais e explique o cálculo:", lines: 4 },
        { kind: "fill-blank", instruction: "Resolva:", items: ["Em uma turma de 40 alunos, 10% faltaram. Quantos alunos faltaram? __________", "Quantos alunos vieram à aula? __________"] },
        { kind: "options", instruction: "75% é equivalente a qual fração?", options: ["3/4", "1/4", "1/2", "7/5"] },
        { kind: "word-select", instruction: "Circule as porcentagens que, juntas, somam 100%:", items: ["25%", "50%", "10%", "75%", "40%"] },
      ],
    },
    {
      theme: "Problemas do campo aditivo com números racionais em forma decimal",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar quanto ela gastou em duas compras diferentes (com valores em reais e centavos). Calcule o total e explique o cálculo:", lines: 4 },
        { kind: "fill-blank", instruction: "Resolva:", items: ["Uma receita usa 0,5 kg de farinha e 0,25 kg de açúcar. Total de ingredientes: __________ kg"] },
        { kind: "options", instruction: "Se uma torneira gasta 2,3 litros por minuto e ficar aberta por 2 minutos, mais meio minuto gastando 1,15 litro, o total aproximado é:", options: ["Aproximadamente 5,75 litros", "Aproximadamente 4,6 litros", "Aproximadamente 6,9 litros", "Aproximadamente 3,45 litros"] },
        { kind: "draw", instruction: "Ilustre uma situação de casa (compras, receita, corrida) envolvendo soma ou subtração de números decimais, e escreva a conta que resolve o problema:" },
      ],
    },
    {
      theme: "Investigação das propriedades da igualdade",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar com este desafio: se 7 + 6 = 13, o que precisa acontecer nos dois lados para descobrir quanto vale x em x + 6 = 13? Explique o raciocínio de vocês:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete:", items: ["Se a = 9, então a + 5 = __________", "E a + 5 - 5 = __________"] },
        { kind: "options", instruction: "Numa igualdade y - 3 = 12, para descobrir o valor de y, o que devemos fazer nos dois lados?", options: ["Somar 3 nos dois lados", "Subtrair 3 nos dois lados", "Multiplicar por 3 nos dois lados", "Dividir por 3 nos dois lados"] },
        { kind: "draw", instruction: "Desenhe uma situação com objetos de casa (livros, moedas, brinquedos) representando dois grupos com a mesma quantidade, e mostre o que acontece se você tirar a mesma quantidade dos dois grupos:" },
      ],
    },
    {
      theme: "Problemas envolvendo ampliação e redução proporcional de quantidades",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te mostrar uma receita culinária. Escolha um ingrediente e calcule a quantidade necessária se a receita for feita para o dobro ou o triplo de pessoas. Explique o cálculo:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete mantendo a proporção:", items: ["Se 5 litros de tinta pintam 2 paredes, quantos litros são necessários para pintar 6 paredes? __________"] },
        { kind: "options", instruction: "Uma equipe de 4 pessoas arruma uma sala em 60 minutos. Se a proporção de tempo por pessoa se mantiver e a equipe dobrar para 8 pessoas, o tempo esperado é:", options: ["Menor que 60 minutos, aproximadamente 30 minutos", "O mesmo, 60 minutos", "O dobro, 120 minutos", "Impossível calcular"] },
        { kind: "draw", instruction: "Escolha um objeto pequeno de casa (uma caixa, um desenho) e represente ele em dois tamanhos: o original e reduzido pela metade, mantendo a proporção:" },
      ],
    },
    {
      theme: "Problemas de partilha de uma quantidade em partes desiguais",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a pensar em uma situação de partilha desigual (por exemplo, dividir uma tarefa ou um valor entre pessoas de idades diferentes). Descreva a situação e resolva:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete:", items: ["Repartir R$ 100,00 entre dois irmãos, sendo que um recebe o dobro do outro: o menor recebe __________, o maior recebe __________"] },
        { kind: "options", instruction: "Uma quantidade de 48 balas será repartida entre duas crianças, uma recebendo o triplo da outra. Quantas balas a criança que recebe menos vai ganhar?", options: ["12 balas", "16 balas", "24 balas", "36 balas"] },
        { kind: "draw", instruction: "Desenhe uma situação da sua casa em que algo precisa ser repartido de forma desigual entre duas pessoas (por exemplo, tempo de uso do computador entre irmãos de idades diferentes), e explique como você faria essa partilha:" },
      ],
    },
    {
      theme: "Localização e movimentação de pontos no plano cartesiano",
      exercises: [
        { kind: "draw", instruction: "Crie um pequeno mapa do quarto ou de um cômodo da sua casa usando um plano cartesiano, marcando a posição de três móveis ou objetos com coordenadas:" },
        { kind: "fill-blank", instruction: "Complete:", items: ["O ponto (0,0) é chamado de __________", "No plano cartesiano, o primeiro número indica o deslocamento no eixo __________ e o segundo no eixo __________"] },
        { kind: "options", instruction: "Um ponto em (6, 2) se move 4 unidades para cima. Quais são suas novas coordenadas?", options: ["(6, 6)", "(10, 2)", "(2, 6)", "(6, -2)"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa jogar com você: um de vocês escolhe coordenadas e o outro tenta descrever para onde o ponto se moveria. Registre uma jogada e explique o movimento:", lines: 4 },
      ],
    },
    {
      theme: "Características e classificação de poliedros",
      exercises: [
        { kind: "lines", instruction: "Procure em casa três objetos com formato de poliedro (caixas, embalagens, dados). Descreva cada objeto e diga se ele se parece mais com um prisma ou uma pirâmide, explicando por quê:", lines: 5 },
        { kind: "word-select", instruction: "Circule as embalagens ou objetos comuns em casa que costumam ter formato de prisma:", items: ["Caixa de sapato", "Bola de futebol", "Caixa de leite", "Lata de refrigerante", "Dado de jogo"] },
        { kind: "options", instruction: "Uma pirâmide de base pentagonal (5 lados) tem quantas faces triangulares laterais?", options: ["5 faces triangulares", "4 faces triangulares", "6 faces triangulares", "3 faces triangulares"] },
        { kind: "fill-blank", instruction: "Complete:", items: ["Um cubo é um caso especial de prisma cuja base é um __________", "Todas as suas faces são __________"] },
      ],
    },
    {
      theme: "Planificação de sólidos geométricos",
      exercises: [
        { kind: "draw", instruction: "Pegue uma caixa de papelão vazia (de pasta de dente, sapato, remédio) e observe como ela se abriria (sua planificação). Desenhe o que você observou:" },
        { kind: "options", instruction: "A planificação de um cone é formada por:", options: ["Um círculo (base) e um setor circular (lateral)", "Dois círculos e um retângulo", "Um triângulo e um quadrado", "Seis quadrados"] },
        { kind: "fill-blank", instruction: "Complete:", items: ["Um prisma de base triangular, quando planificado, mostra __________ triângulos (as bases) e __________ retângulos (as faces laterais)"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a montar uma caixinha de papel simples (dobradura). Descreva os passos e diga qual sólido geométrico foi formado:", lines: 4 },
      ],
    },
    {
      theme: "Relações entre faces, vértices e arestas de poliedros",
      exercises: [
        { kind: "fill-blank", instruction: "Escolha um objeto de casa com formato de poliedro e complete:", items: ["Faces = __________", "Vértices = __________", "Arestas = __________"] },
        { kind: "lines", instruction: "Verifique se o objeto que você escolheu em casa obedece à relação de Euler (faces + vértices = arestas + 2). Mostre a conta e explique se deu certo:", lines: 4 },
        { kind: "options", instruction: "Se um poliedro tem 5 faces e 6 vértices, quantas arestas ele tem, segundo a relação de Euler?", options: ["9 arestas", "11 arestas", "7 arestas", "13 arestas"] },
        { kind: "draw", instruction: "Peça para alguém da sua casa escolher outro objeto poliedro e desenhe-o, marcando com cores diferentes as faces, os vértices e as arestas:" },
      ],
    },
    {
      theme: "Classificação de polígonos pelo número de lados e ângulos",
      exercises: [
        { kind: "lines", instruction: "Procure em casa três objetos ou embalagens com formato de polígono (não círculos). Nomeie cada polígono pelo número de lados e diga se parece regular ou irregular:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete:", items: ["Uma placa de sinalização de PARE tem formato de __________ (nomeie o polígono)", "Um azulejo quadrado tem __________ lados e __________ ângulos"] },
        { kind: "options", instruction: "Um polígono com todos os ângulos retos (90°) e 4 lados, mas com lados de tamanhos diferentes entre lados adjacentes, é um:", options: ["Retângulo", "Quadrado", "Triângulo retângulo", "Hexágono"] },
        { kind: "draw", instruction: "Desenhe o contorno de um objeto de casa que tenha formato poligonal e classifique-o pelo número de lados:" },
      ],
    },
    {
      theme: "Circunferência e seus elementos",
      exercises: [
        { kind: "draw", instruction: "Encontre um objeto redondo em casa (tampa de panela, prato, moeda). Contorne-o em uma folha e, com uma régua, meça e marque o diâmetro:" },
        { kind: "fill-blank", instruction: "Meça um objeto redondo de casa e complete:", items: ["Diâmetro = __________ cm", "Raio = __________ cm"] },
        { kind: "options", instruction: "O centro de uma circunferência é o ponto que está:", options: ["À mesma distância de todos os pontos da circunferência", "Sempre no ponto mais alto da figura", "Fora da circunferência", "Sobre a linha da circunferência"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a medir o diâmetro de uma roda de bicicleta, pneu ou objeto redondo grande. Registre a medida e calcule o raio, explicando o cálculo:", lines: 4 },
      ],
    },
    {
      theme: "Composição e decomposição de polígonos com figuras triangulares",
      exercises: [
        { kind: "draw", instruction: "Recorte ou desenhe um polígono (como um pentágono ou hexágono) em papel e trace linhas para dividi-lo em triângulos. Cole ou desenhe o resultado:" },
        { kind: "fill-blank", instruction: "Complete:", items: ["Um hexágono pode ser decomposto em __________ triângulos, traçando diagonais a partir de um único vértice"] },
        { kind: "options", instruction: "Ao decompor um retângulo com uma diagonal, obtemos:", options: ["Dois triângulos", "Dois quadrados", "Um triângulo e um quadrado", "Quatro triângulos"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa desenhar um polígono qualquer. Tente decompô-lo em triângulos e explique os passos que você seguiu:", lines: 4 },
      ],
    },
    {
      theme: "Ampliação e redução de polígonos em malha quadriculada",
      exercises: [
        { kind: "draw", instruction: "Em uma folha quadriculada (ou desenhando seu próprio quadriculado), copie um polígono simples e desenhe-o reduzido pela metade ao lado:" },
        { kind: "fill-blank", instruction: "Complete:", items: ["Um quadrado de lado 6 quadradinhos, reduzido para a metade, terá lado __________"] },
        { kind: "options", instruction: "Uma figura de 2 x 5 quadradinhos é ampliada para o triplo do tamanho. Quais serão suas novas medidas?", options: ["6 x 15", "4 x 10", "2 x 15", "6 x 5"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa desenhar uma figura simples em um quadriculado. Amplie-a ou reduza-a mantendo a proporção e explique como você garantiu que a forma não ficasse distorcida:", lines: 4 },
      ],
    },
    {
      theme: "Simetria de reflexão em figuras planas",
      exercises: [
        { kind: "draw", instruction: "Procure em casa um objeto ou embalagem que tenha simetria de reflexão (por exemplo, um prato, uma porta, uma caixa). Desenhe o objeto e marque o eixo de simetria." },
        { kind: "fill-blank", instruction: "Complete as frases sobre simetria:", items: ["Uma figura tem simetria de reflexão quando pode ser dividida por uma linha chamada __________.", "As duas partes da figura, quando dobradas sobre o eixo, ficam __________ uma sobre a outra.", "Um __________ tem 4 eixos de simetria."] },
        { kind: "options", instruction: "Peça para alguém da sua casa citar um objeto simétrico. Qual das opções abaixo é um exemplo de figura SEM simetria de reflexão?", options: ["Um triângulo escaleno (três lados diferentes)", "Um círculo", "Um quadrado", "A letra H"] },
        { kind: "lines", instruction: "Você tem um triângulo escaleno (lados todos diferentes). Ele possui eixo de simetria? Explique por quê.", lines: 3 },
      ],
    },
    {
      theme: "Identificação de ângulos retos, agudos e obtusos",
      exercises: [
        { kind: "fill-blank", instruction: "Complete classificando os ângulos:", items: ["O canto de uma folha de caderno forma um ângulo __________.", "As pontas abertas de uma tesoura, quando bem abertas, formam um ângulo __________.", "Um ângulo de 150° é chamado de __________."] },
        { kind: "word-select", instruction: "Ande pela sua casa e observe objetos com cantos retos. Marque, entre os itens abaixo, os que costumam ter ângulos retos:", items: ["Porta", "Fatia de pizza", "Janela", "Livro fechado", "Guarda-chuva aberto", "Tela de televisão"] },
        { kind: "options", instruction: "Peça para alguém da sua casa apontar um objeto com ângulo obtuso. Qual afirmação descreve corretamente um ângulo obtuso?", options: ["É maior que 90° e menor que 180°", "É exatamente igual a 90°", "É menor que 90°", "É igual a 180°"] },
        { kind: "lines", instruction: "Escolha um cômodo da sua casa e descreva três ângulos que você observa nele (podem ser retos, agudos ou obtusos).", lines: 4 },
      ],
    },
    {
      theme: "Resultados possíveis de experimentos aleatórios",
      exercises: [
        { kind: "draw", instruction: "Em casa, pegue (ou imagine) um baralho comum. Desenhe os 4 naipes e escreva quantos resultados possíveis existem ao tirar uma carta ao acaso." },
        { kind: "word-select", instruction: "Marque quais situações abaixo são experimentos aleatórios (o resultado não pode ser previsto com certeza):", items: ["Lançar um dado", "Somar 2 + 2", "Tirar uma carta de um baralho embaralhado", "O sol nascer amanhã", "Sortear um nome em um chapéu"] },
        { kind: "options", instruction: "Peça para alguém da sua casa lançar uma moeda 5 vezes e anotar os resultados. Antes de lançar, quantos resultados possíveis existem para cada lançamento?", options: ["2", "5", "1", "6"] },
        { kind: "lines", instruction: "Pense em uma gaveta com 4 meias pretas e 2 meias brancas. Quais são todos os resultados possíveis ao tirar uma meia sem olhar? Algum resultado é mais provável?", lines: 4 },
      ],
    },
    {
      theme: "Cálculo da probabilidade de eventos equiprováveis",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa separar 6 objetos iguais (por exemplo, tampinhas), sendo 4 de uma cor e 2 de outra. Sem olhar, qual a probabilidade de pegar cada cor? Explique seu cálculo.", lines: 4 },
        { kind: "fill-blank", instruction: "Calcule as probabilidades:", items: ["Em uma caixa com 4 bolas verdes e 4 bolas amarelas, a probabilidade de tirar uma bola verde é __________ em __________.", "Se um dado tem 6 faces e queremos saber a chance de sair um número menor que 3 (1 ou 2), a probabilidade é __________ em 6."] },
        { kind: "options", instruction: "Em um jogo de cartas com 4 cartas numeradas de 1 a 4, qual é a probabilidade de tirar o número 2?", options: ["1 em 4", "2 em 4", "4 em 4", "1 em 2"] },
        { kind: "draw", instruction: "Desenhe uma caixa imaginária com 3 bolas azuis e 1 bola vermelha. Ao lado, escreva a probabilidade de tirar cada cor." },
      ],
    },
    {
      theme: "Associação de tabelas a gráficos de colunas, barras e linhas",
      exercises: [
        { kind: "draw", instruction: "Peça para alguém da sua casa informar a temperatura aproximada em 4 momentos do dia (manhã, meio-dia, tarde, noite). Monte um gráfico de linhas com esses dados." },
        { kind: "options", instruction: "Qual tipo de gráfico é mais indicado para comparar a quantidade de livros lidos por 5 colegas diferentes?", options: ["Gráfico de colunas ou barras", "Gráfico de linhas", "Nenhum gráfico serve", "Só uma tabela sem gráfico"] },
        { kind: "fill-blank", instruction: "Complete as frases sobre gráficos:", items: ["Em uma tabela, os dados são organizados em __________ e __________.", "Um gráfico de __________ usa retângulos na vertical para comparar quantidades.", "Um gráfico de __________ usa retângulos na horizontal."] },
        { kind: "lines", instruction: "Explique a diferença entre um gráfico de colunas e um gráfico de linhas. Em que situação cada um é mais útil?", lines: 4 },
      ],
    },
    {
      theme: "Pesquisa e organização de dados em tabelas e gráficos",
      exercises: [
        { kind: "draw", instruction: "Pesquise com as pessoas da sua casa qual é a comida favorita de cada uma. Organize os dados em uma tabela e depois em um gráfico de colunas." },
        { kind: "lines", instruction: "Explique por que é importante organizar os dados de uma pesquisa em uma tabela antes de construir o gráfico.", lines: 3 },
        { kind: "word-select", instruction: "Marque quais das opções abaixo são exemplos de variáveis numéricas (que podem ser contadas ou medidas):", items: ["Número de calçado", "Cor da camiseta favorita", "Peso em quilogramas", "Time de futebol preferido", "Quantidade de livros lidos no mês"] },
        { kind: "options", instruction: "Se você quer descobrir qual é o animal de estimação mais comum entre as famílias da sua turma, qual é o primeiro passo?", options: ["Definir a pergunta da pesquisa e coletar os dados de cada família", "Desenhar o gráfico antes de perguntar a alguém", "Inventar os números sem perguntar", "Pular direto para a tabela sem pesquisa"] },
      ],
    },
    {
      theme: "Produção de texto a partir da leitura de tabelas e gráficos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar (ou descrever) uma tabela ou gráfico de um jornal, revista ou aplicativo. Escreva um pequeno texto explicando o que esse gráfico mostra.", lines: 5 },
        { kind: "draw", instruction: "Monte uma tabela com a quantidade de horas que cada pessoa da sua casa dorme por noite. Depois, transforme em um gráfico de barras." },
        { kind: "options", instruction: "Um bom texto sobre um gráfico deve responder principalmente a qual pergunta?", options: ["O que os dados do gráfico revelam ou comparam?", "Qual é a cor mais bonita do gráfico?", "Quantas letras tem o título?", "Quem desenhou o gráfico?"] },
        { kind: "fill-blank", instruction: "Complete as frases sobre a leitura de gráficos:", items: ["Ao ler um gráfico, primeiro observamos o __________ para saber do que se trata.", "Depois, observamos os __________ e a __________ para entender os valores.", "Por fim, escrevemos um texto comparando as __________."] },
      ],
    },
    {
      theme: "Resolução de problemas a partir de dados organizados em tabelas e gráficos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te contar quantos quilômetros percorre para ir ao trabalho durante 3 dias diferentes da semana. Organize os dados e calcule quantos quilômetros a pessoa percorreu ao todo nesses 3 dias.", lines: 4 },
        { kind: "fill-blank", instruction: "Resolva os problemas com os dados:", items: ["Se uma tabela mostra que a família gastou R$ 320 no mercado em uma semana e R$ 280 na semana seguinte, o total gasto nas duas semanas foi de __________.", "A diferença entre as duas semanas foi de __________."] },
        { kind: "options", instruction: "Uma tabela mostra que uma pessoa bebeu 2 litros de água por dia durante 5 dias. Quantos litros ela bebeu ao todo?", options: ["10 litros", "7 litros", "2 litros", "25 litros"] },
        { kind: "draw", instruction: "Faça uma tabela simples com a quantidade de horas de sono de cada pessoa da sua casa em uma noite. Depois, escreva e resolva um problema usando esses dados (por exemplo, soma total ou diferença entre a maior e a menor quantidade)." },
      ],
    },
    {
      theme: "Problemas envolvendo medidas de comprimento, massa, tempo, temperatura e capacidade",
      exercises: [
        { kind: "lines", instruction: "Com ajuda de alguém da sua casa, verifique o peso (massa) de duas embalagens diferentes na cozinha (por exemplo, um pacote de arroz e uma caixa de leite). Anote os pesos e calcule a diferença entre eles.", lines: 4 },
        { kind: "fill-blank", instruction: "Resolva os problemas de medidas:", items: ["Se um pacote de açúcar pesa 1 kg e você usa 350 g em uma receita, sobram __________ g.", "Uma garrafa tem 2 litros. Se você já bebeu 750 mL, restam __________ mL.", "Um ônibus saiu às 7h20 e chegou às 8h05. A viagem durou __________ minutos."] },
        { kind: "options", instruction: "Peça para alguém da sua casa dizer a temperatura de hoje. Se de manhã estava 18°C e à noite caiu para 12°C, o que aconteceu com a temperatura?", options: ["Diminuiu 6°C", "Aumentou 6°C", "Ficou igual", "Diminuiu 12°C"] },
        { kind: "draw", instruction: "Meça (ou estime) o comprimento de três móveis da sua casa em centímetros ou metros. Desenhe uma tabela com o nome do móvel e a medida de cada um." },
      ],
    },
    {
      theme: "Cálculo do perímetro de polígonos",
      exercises: [
        { kind: "draw", instruction: "Meça (com régua ou passos) o contorno de um cômodo da sua casa, como a sala ou seu quarto. Desenhe o formato aproximado e calcule o perímetro." },
        { kind: "fill-blank", instruction: "Resolva os problemas de perímetro:", items: ["Uma quadra de futebol de várzea mede 40 m de comprimento por 25 m de largura. O perímetro dessa quadra é __________ m.", "Um pentágono regular (todos os lados iguais) tem lado de 8 cm. Seu perímetro é __________ cm."] },
        { kind: "options", instruction: "Peça para alguém da sua casa escolher um objeto retangular (mesa, tapete, porta). Se ele mede 2 m de comprimento e 1 m de largura, qual é o perímetro?", options: ["6 metros", "3 metros", "2 metros", "4 metros"] },
        { kind: "lines", instruction: "Explique a diferença entre medir o perímetro de uma figura e medir a distância entre dois pontos dentro dela.", lines: 3 },
      ],
    },
    {
      theme: "Compreensão da área como medida de superfície",
      exercises: [
        { kind: "draw", instruction: "Escolha um cômodo da sua casa e observe seu piso. Desenhe o formato do piso (aproximado) em uma malha quadriculada e conte quantos 'quadradinhos' seriam necessários para cobri-lo, representando a área." },
        { kind: "lines", instruction: "Peça para alguém da sua casa explicar por que, ao comprar piso ou carpete para uma casa, é preciso calcular a área do cômodo e não apenas o perímetro. Escreva a explicação com suas palavras.", lines: 4 },
        { kind: "options", instruction: "Qual das situações abaixo envolve o cálculo de área?", options: ["Saber quantos metros quadrados de grama são necessários para cobrir um jardim", "Saber quantos metros de fio são necessários para cercar o jardim", "Saber quantos litros de água cabem em uma piscina", "Saber quantos minutos leva para atravessar o jardim"] },
        { kind: "fill-blank", instruction: "Complete as frases sobre área:", items: ["A área é a medida da __________ de uma figura plana.", "Duas figuras com formatos diferentes podem ter a mesma __________.", "Para medir área, usamos unidades como cm², que se lê 'centímetros __________'."] },
      ],
    },
    {
      theme: "Cálculo de áreas de retângulos e quadrados em malha quadriculada",
      exercises: [
        { kind: "draw", instruction: "Meça (com régua) uma folha de caderno, um livro ou outro objeto retangular da sua casa. Anote a base e a altura em centímetros e calcule a área." },
        { kind: "fill-blank", instruction: "Resolva os problemas de área:", items: ["Uma sala retangular tem 5 m de largura e 4 m de comprimento. Sua área é __________ m².", "Um azulejo quadrado tem lado de 20 cm. Sua área é __________ cm²."] },
        { kind: "options", instruction: "Peça para alguém da sua casa medir a mesa da cozinha (comprimento e largura). Se ela tem 1,5 m por 0,8 m, qual cálculo dá a área?", options: ["1,5 x 0,8", "1,5 + 0,8", "1,5 - 0,8", "(1,5 + 0,8) x 2"] },
        { kind: "lines", instruction: "Um tapete retangular tem 3 m de comprimento e 2 m de largura. Calcule sua área e explique cada passo do seu raciocínio.", lines: 3 },
      ],
    },
    {
      theme: "Problemas com o sistema monetário brasileiro",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar (ou lembrar) o valor de uma conta recente, como luz, água ou mercado. Se essa conta fosse dividida igualmente entre 4 pessoas, quanto cada uma pagaria? Explique como calcular.", lines: 4 },
        { kind: "fill-blank", instruction: "Resolva os problemas com dinheiro:", items: ["Uma pizza custa R$ 45,00 e será dividida entre 5 pessoas. Cada pessoa paga __________.", "Se você tem R$ 100,00 e gasta R$ 37,50, sobram __________."] },
        { kind: "options", instruction: "Ana tinha R$ 25,00. Ganhou mais R$ 15,00 de mesada e depois gastou R$ 12,80 em um lanche. Quanto ela tem agora?", options: ["R$ 27,20", "R$ 12,20", "R$ 40,00", "R$ 2,80"] },
        { kind: "draw", instruction: "Simule uma compra em casa: escolha 3 produtos com preços (pode olhar embalagens ou inventar valores realistas) e calcule o troco de uma nota de R$ 100,00." },
      ],
    },
    {
      theme: "Noção de volume por meio do empilhamento de cubos",
      exercises: [
        { kind: "draw", instruction: "Se você tiver blocos de montar (ou dados) em casa, empilhe alguns formando um bloco retangular. Se não tiver, desenhe uma pilha de cubinhos com 4 de comprimento, 2 de largura e 3 de altura, e calcule o total." },
        { kind: "lines", instruction: "Peça para alguém da sua casa te ajudar a pensar: quantos cubinhos caberiam empilhados dentro de uma caixa com 3 de comprimento, 3 de largura e 2 de altura? Explique seu raciocínio.", lines: 4 },
        { kind: "options", instruction: "Um sólido é formado por 5 camadas iguais, cada uma com 6 cubinhos. Qual é o volume total?", options: ["30 cubinhos", "11 cubinhos", "25 cubinhos", "36 cubinhos"] },
        { kind: "fill-blank", instruction: "Complete as frases sobre volume:", items: ["Volume é a grandeza que mede o __________ ocupado por um sólido.", "Um cubo com 2 cubinhos de aresta (2x2x2) tem volume de __________ cubinhos."] },
      ],
    },
    {
      theme: "Jogos de tabuleiro: estratégias e antecipação de jogadas",
      exercises: [
        { kind: "lines", instruction: "Jogue um jogo de tabuleiro com alguém da sua casa (pode ser damas, dominó, jogo da velha ou outro). Escreva quais jogadas você fez para tentar vencer e o que aprendeu observando as jogadas do seu adversário.", lines: 5 },
        { kind: "options", instruction: "No jogo de damas, por que é importante pensar antes de mover uma peça para a borda do tabuleiro?", options: ["Porque a peça pode ficar mais vulnerável a ser capturada", "Porque as peças na borda sempre vencem o jogo", "Porque não é permitido mover peças para a borda", "Porque a borda do tabuleiro não conta pontos"] },
        { kind: "fill-blank", instruction: "Complete as frases sobre estratégia em jogos:", items: ["Antes de fazer uma jogada, um bom jogador tenta __________ o que o adversário pode fazer em seguida.", "Justificar uma jogada significa explicar o __________ por trás da escolha."] },
        { kind: "draw", instruction: "Peça para alguém da sua casa te ensinar um jogo de tabuleiro ou de cartas que essa pessoa gostava quando era criança. Desenhe o tabuleiro ou as regras principais do jogo." },
      ],
    },
    {
      theme: "Composição de figuras com peças do Tangram",
      exercises: [
        { kind: "lines", instruction: "Se você tiver um Tangram em casa (ou desenhar um), tente formar um retângulo usando 4 peças. Explique quais peças você escolheu e por quê.", lines: 4 },
        { kind: "draw", instruction: "Desenhe uma figura livre (como uma casa, um barco ou um animal) usando o formato das peças do Tangram como inspiração." },
        { kind: "options", instruction: "No Tangram, dois triângulos pequenos podem ser juntados para formar:", options: ["Um quadrado ou um triângulo médio", "Um círculo", "Um pentágono", "Um hexágono regular"] },
        { kind: "fill-blank", instruction: "Complete as frases sobre o Tangram:", items: ["O Tangram é um quebra-cabeça chinês formado por __________ peças.", "Ao juntar todas as peças do Tangram, geralmente formamos um __________ grande."] },
      ],
    },
    {
      theme: "Projeto sobre produção e consumo consciente de alimentos",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre como a família evita o desperdício de comida (por exemplo, reaproveitando sobras). Escreva o que você descobriu e proponha uma ideia matemática para calcular quanto de alimento é economizado por semana com essa prática.", lines: 5 },
        { kind: "fill-blank", instruction: "Resolva o problema sobre desperdício de alimentos:", items: ["Se uma família desperdiça 500 g de comida por dia, em uma semana (7 dias) o desperdício é de __________ g, ou seja, __________ kg."] },
        { kind: "options", instruction: "Se uma horta comunitária produz 45 kg de verduras em um mês e são divididos igualmente entre 9 famílias, quantos quilos cada família recebe?", options: ["5 kg", "9 kg", "45 kg", "4 kg"] },
        { kind: "draw", instruction: "Peça para alguém da sua casa contar quantas vezes por semana a família come frutas, verduras e legumes. Organize essa informação em uma tabela simples." },
      ],
    },
    {
      theme: "Projeto sobre impactos sociais e ambientais da produção e consumo",
      exercises: [
        { kind: "lines", instruction: "Pesquise com alguém da sua casa quantos quilos de material reciclável (papel, plástico, vidro, metal) a família descarta por semana, aproximadamente. Calcule quanto isso representaria em um ano e comente sobre a importância da reciclagem.", lines: 5 },
        { kind: "fill-blank", instruction: "Resolva o problema sobre consumo consciente:", items: ["Se uma pessoa usa 3 garrafas plásticas por semana e passa a usar 1 garrafa reutilizável, deixa de comprar __________ garrafas por semana e __________ por mês."] },
        { kind: "options", instruction: "Se uma comunidade reduz o consumo de energia elétrica em 15% em um mês, isso significa que:", options: ["Ela gastou menos energia do que gastaria normalmente", "Ela gastou mais energia do que o normal", "O consumo de energia dobrou", "Não houve nenhuma mudança"] },
        { kind: "draw", instruction: "Observe o consumo de água da sua casa (na conta de água, se possível) e desenhe uma tabela simples comparando dois meses diferentes." },
      ],
    },
    {
      theme: "Justificativa da linguagem matemática e das estratégias de resolução",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa propor um problema de matemática do dia a dia (por exemplo, dividir uma conta ou calcular quantos itens cabem em uma caixa). Resolva o problema e escreva a justificativa completa da sua estratégia.", lines: 5 },
        { kind: "options", instruction: "Dois alunos resolveram o mesmo problema de formas diferentes, mas chegaram à mesma resposta correta. Isso significa que:", options: ["Existem várias estratégias possíveis para resolver o mesmo problema", "Apenas um dos dois está certo", "Um copiou do outro", "A matemática só aceita um jeito de resolver"] },
        { kind: "fill-blank", instruction: "Complete as frases sobre estratégias de resolução:", items: ["Ao resolver 350 ÷ 7, uma estratégia possível é pensar em quantas vezes o __________ cabe no __________.", "Explicar essa estratégia com palavras ajuda outras pessoas a __________ o meu raciocínio."] },
        { kind: "draw", instruction: "Escolha uma operação matemática (adição, subtração, multiplicação ou divisão) e crie um pequeno problema envolvendo sua família. Represente a solução com um desenho ou esquema." },
      ],
    },
    {
      theme: "Investigação da propriedade distributiva da multiplicação e da divisão",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te dar dois números para multiplicar (um deles com dois algarismos, como 34). Calcule usando a propriedade distributiva, decompondo o número maior, e explique cada passo.", lines: 5 },
        { kind: "fill-blank", instruction: "Complete usando a propriedade distributiva:", items: ["12 x 15 pode ser calculado como 12 x 10 + 12 x __________ = __________ + __________ = __________.", "84 ÷ 4 pode ser pensado como (80 ÷ 4) + (__________ ÷ 4) = 20 + 1 = __________."] },
        { kind: "options", instruction: "Qual é a vantagem de usar a propriedade distributiva para calcular 8 x 47 de cabeça?", options: ["Facilita o cálculo, pois transforma em contas menores e mais simples (8x40 e 8x7)", "Torna o cálculo mais difícil", "Só funciona com números pares", "Não tem nenhuma vantagem"] },
        { kind: "draw", instruction: "Desenhe um retângulo dividido em duas partes para representar a multiplicação 9 x 16 como 9 x 10 + 9 x 6." },
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
      gradeYear: "3-ano",
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
    {
      theme: "Roda de contos, mitos, lendas e fábulas de diferentes culturas",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar um mito, uma lenda ou uma fábula que conhece. Escreva um resumo da história com suas palavras.", lines: 5, note: "Pode ser uma história ouvida dos avós, pais ou vizinhos." },
        { kind: "options", instruction: "As fábulas quase sempre terminam com:", options: ["Uma moral, ou seja, um ensinamento para o leitor", "Um convite para uma festa", "Uma lista de ingredientes", "Um mapa do tesouro"] },
        { kind: "word-select", instruction: "Marque os elementos que costumam aparecer em CONTOS de diferentes culturas:", items: ["Personagens com desejos e conflitos", "Um lugar ou tempo onde a história acontece", "Um narrador que conta os fatos", "Um gráfico de vendas", "Um problema que o personagem precisa resolver"] },
        { kind: "draw", instruction: "Desenhe o personagem da história que você ouviu em casa e escreva o nome dele embaixo do desenho." },
      ],
    },
    {
      theme: "Discussão sobre organização interna de textos literários",
      exercises: [
        { kind: "lines", instruction: "Releia (ou peça para alguém ler com você) um trecho de um livro que você tem em casa. Escreva onde e quando a história acontece.", lines: 4 },
        { kind: "options", instruction: "As ilustrações de um livro literário servem para:", options: ["Ajudar a entender e enriquecer o sentido do texto", "Substituir totalmente a necessidade de ler", "Ocupar espaço na página", "Mostrar apenas a capa do livro"] },
        { kind: "word-select", instruction: "Marque quais destas frases têm linguagem tipicamente literária (com comparações e adjetivos):", items: ["O céu estava tão vermelho quanto uma fruta madura.", "A reunião foi marcada para as 14h.", "Seus olhos brilhavam como duas estrelas.", "O produto custa R$ 15,00.", "A floresta parecia sussurrar segredos antigos."] },
        { kind: "draw", instruction: "Escolha um personagem de uma história que você conhece e desenhe uma cena marcante dele. Escreva embaixo em que lugar essa cena acontece." },
      ],
    },
    {
      theme: "Comparando registros literário, jornalístico e publicitário",
      exercises: [
        { kind: "lines", instruction: "Procure em casa um anúncio, propaganda ou embalagem com texto publicitário. Copie uma frase dele e explique por que ela tenta convencer o leitor.", lines: 4 },
        { kind: "options", instruction: "Um texto jornalístico geralmente se preocupa em:", options: ["Informar fatos reais com precisão (quem, quando, onde, o quê)", "Usar rimas e ritmo", "Vender um produto específico", "Contar uma história inventada com final feliz"] },
        { kind: "word-select", instruction: "Marque as frases que parecem ter sido tiradas de uma PROPAGANDA:", items: ["Aproveite! Preços imperdíveis só até domingo!", "O relatório aponta queda de 3% nas vendas.", "Era uma vez, em um reino distante...", "Experimente e sinta a diferença hoje mesmo!", "A prefeitura inaugurou a nova praça ontem."] },
        { kind: "draw", instruction: "Crie um pequeno cartaz de propaganda para um produto inventado por você. Desenhe e escreva uma frase curta e chamativa." },
      ],
    },
    {
      theme: "Explorando poemas: haicai, cordel e quadrinha",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa recitar ou cantar uma quadrinha ou cantiga que conhece. Escreva-a com suas palavras (sem copiar de livro).", lines: 4 },
        { kind: "options", instruction: "A quadrinha é um poema que costuma ter:", options: ["Quatro versos, rima e ritmo fácil de decorar", "Cem versos sem rima", "Apenas uma palavra", "Formato de carta formal"] },
        { kind: "word-select", instruction: "Marque quais temas costumam aparecer em cordéis:", items: ["Histórias populares do sertão nordestino", "Fatos do dia a dia contados com humor e rima", "Fórmulas de química", "Personagens corajosos e situações inesperadas", "Gráficos de bolsa de valores"] },
        { kind: "draw", instruction: "Ilustre a quadrinha ou cantiga que você escreveu no exercício 1, desenhando uma cena que ela descreve." },
      ],
    },
    {
      theme: "Letra e melodia: lendo e ouvindo canções",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa escolher uma canção que gosta. Escreva o nome da canção e do que ela fala (o assunto da letra).", lines: 4 },
        { kind: "options", instruction: "Quando lemos a letra de uma canção ANTES de ouvi-la, é comum:", options: ["Imaginar um ritmo e uma melodia diferentes do que realmente é a canção", "Já saber a melodia de cor", "Não conseguir entender nada do texto", "Ler mais rápido que ouvindo"] },
        { kind: "word-select", instruction: "Marque o que pode mudar o sentido de uma canção quando a melodia muda (mesma letra, melodia diferente):", items: ["A emoção transmitida", "O andamento (rápido ou devagar)", "O número de letras do alfabeto", "O clima (alegre ou triste)", "A ortografia das palavras"] },
        { kind: "draw", instruction: "Desenhe uma cena que representa o que a canção escolhida no exercício 1 faz você imaginar." },
      ],
    },
    {
      theme: "Textos dramáticos e situações de encenação",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa lembrar de uma peça de teatro, novela ou desenho que tenha falas de personagens. Escreva o nome de dois personagens e o que eles discutem.", lines: 4 },
        { kind: "options", instruction: "Uma esquete é:", options: ["Uma cena curta de teatro, geralmente engraçada", "Um livro muito longo", "Um tipo de poema sem rima", "Um texto científico"] },
        { kind: "word-select", instruction: "Marque o que costuma aparecer escrito em um texto de teatro (roteiro):", items: ["Nome do personagem antes da fala", "Rubricas com indicações de cena", "Gráficos de barras", "Diálogos", "Uma tabela de preços"] },
        { kind: "draw", instruction: "Desenhe o cenário (o lugar) onde você imagina que aconteceria o diálogo que você escreveu na atividade de sala ou em outro momento." },
      ],
    },
    {
      theme: "Contexto de produção de textos reivindicatórios e relatos históricos",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa se ela já participou de algum pedido ou reivindicação (abaixo-assinado, reclamação, pedido à prefeitura). Escreva o que essa pessoa contou.", lines: 4 },
        { kind: "options", instruction: "Um relato histórico costuma responder principalmente à pergunta:", options: ["O que aconteceu, quando e por quê?", "Quanto custa esse produto?", "Qual é a moral da história?", "Como decorar um bolo?"] },
        { kind: "word-select", instruction: "Marque quais valores podem aparecer em um texto reivindicatório sobre melhorias no bairro:", items: ["Direito à segurança", "Direito ao lazer", "Preço de uma promoção", "Direito à saúde", "Uma fábula sobre animais"] },
        { kind: "draw", instruction: "Desenhe um cartaz simples pedindo algo que você acha importante para a sua rua ou bairro (por exemplo, mais árvores ou uma praça)." },
      ],
    },
    {
      theme: "Conhecendo culturas por relatos históricos e divulgação científica",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém mais velho da sua casa sobre um costume ou uma tradição da família (comida, festa, história). Escreva o que essa pessoa contou.", lines: 5 },
        { kind: "options", instruction: "Um texto de divulgação científica tem como objetivo principal:", options: ["Explicar de forma clara um assunto da ciência para o público", "Vender um produto", "Contar uma fábula", "Anunciar uma festa"] },
        { kind: "word-select", instruction: "Marque quais destas fontes são úteis para conhecer fatos históricos:", items: ["Relatos de pessoas que viveram a época", "Documentários", "Reportagens de jornal", "Uma receita de bolo", "Entrevistas com historiadores"] },
        { kind: "draw", instruction: "Desenhe algo relacionado à tradição ou costume que você descobriu no exercício 1." },
      ],
    },
    {
      theme: "Organização hierárquica de textos de divulgação científica",
      exercises: [
        { kind: "lines", instruction: "Procure em casa (livro, revista ou internet, com ajuda de um adulto) um pequeno texto de divulgação científica. Escreva o título e do que ele fala.", lines: 4 },
        { kind: "options", instruction: "Quando um texto de divulgação científica separa as ideias em vários parágrafos, isso ajuda o leitor a:", options: ["Encontrar e entender cada informação com mais facilidade", "Ler mais devagar sem motivo", "Esquecer o assunto do texto", "Confundir as informações"] },
        { kind: "word-select", instruction: "Marque o que costuma vir ANTES do texto principal em um artigo de divulgação científica:", items: ["Título", "Subtítulo", "A conclusão do texto", "A última frase do texto", "Uma pergunta que desperta curiosidade"] },
        { kind: "draw", instruction: "Faça um pequeno esquema (com quadrinhos ou setas) mostrando como as informações do texto que você encontrou estão organizadas: o que vem primeiro, depois e por último." },
      ],
    },
    {
      theme: "Efeitos de sentido em quadrinhos, charges e tiras",
      exercises: [
        { kind: "lines", instruction: "Procure em casa uma revista, gibi ou jornal com quadrinhos, tiras ou charges (ou peça para alguém lembrar de uma). Descreva uma cena e a onomatopeia ou expressão que mais chamou atenção.", lines: 4 },
        { kind: "options", instruction: "Uma charge costuma tratar de:", options: ["Um assunto atual, muitas vezes político ou social, com crítica e humor", "Uma receita culinária", "Um poema de amor", "Uma fórmula matemática"] },
        { kind: "word-select", instruction: "Marque quais destas onomatopeias combinam com o som de uma porta batendo:", items: ["BAM!", "MIAU", "TOC TOC", "PLIM PLIM", "CRAC"] },
        { kind: "draw", instruction: "Desenhe uma pequena tira de 3 quadrinhos contando uma piada curta ou uma situação engraçada do seu dia a dia. Use pelo menos uma onomatopeia." },
      ],
    },
    {
      theme: "Multimodalidade em textos de projetos interdisciplinares",
      gradeYear: "4-ano",
      exercises: [
        { kind: "lines", instruction: "Procure em casa (livro, revista ou caderno de outra matéria) um texto que misture imagem, gráfico e texto escrito. Descreva o que você encontrou e como as partes se completam.", lines: 5 },
        { kind: "options", instruction: "Um gráfico dentro de um texto sobre um projeto de Ciências serve para:", options: ["Mostrar dados numéricos de forma visual e mais fácil de entender", "Substituir todo o texto escrito", "Deixar a página colorida sem outro motivo", "Contar uma fábula"] },
        { kind: "word-select", instruction: "Marque quais destes materiais combinam imagem e texto (são multimodais):", items: ["Um cartaz de feira de ciências com fotos e legendas", "Uma carta manuscrita sem nenhuma imagem", "Um infográfico sobre o ciclo da água", "Uma lista de nomes", "Um mapa ilustrado com informações escritas"] },
        { kind: "draw", instruction: "Escolha um tema de outra matéria (Ciências, História ou Geografia) e crie um pequeno esquema com desenho e texto explicando esse tema." },
      ],
    },
    {
      theme: "Lendo trechos de textos jurídicos do cotidiano",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre um direito da criança que vocês acham que deveria ser mais respeitado na sua cidade. Escreva o que conversaram.", lines: 4 },
        { kind: "options", instruction: "Um texto jurídico serve principalmente para:", options: ["Estabelecer regras, direitos e deveres de forma oficial", "Contar uma história de aventura", "Anunciar um produto", "Ensinar uma receita"] },
        { kind: "word-select", instruction: "Marque as situações em que consultar um texto jurídico, como o ECA, pode ajudar:", items: ["Saber se uma criança pode trabalhar", "Saber os direitos de um aluno na escola", "Escolher um sabor de sorvete", "Entender a proteção contra violência", "Saber a letra de uma canção"] },
        { kind: "draw", instruction: "Escolha um direito da criança que você aprendeu e desenhe uma cena mostrando esse direito sendo respeitado." },
      ],
    },
    {
      theme: "Antecipando o conteúdo de propagandas e anúncios",
      exercises: [
        { kind: "lines", instruction: "Procure um anúncio ou folheto em casa (embalagem, panfleto, encarte). Antes de ler tudo, escreva o que você imaginou pelo título e pela imagem — depois confira se acertou.", lines: 5 },
        { kind: "options", instruction: "Os folhetos de supermercado costumam usar imagens grandes de produtos principalmente para:", options: ["Despertar o desejo de compra rapidamente, só de olhar", "Contar uma história", "Explicar uma lei", "Ensinar uma matéria escolar"] },
        { kind: "word-select", instruction: "Marque quais valores costumam ser usados para convencer o leitor em propagandas:", items: ["Promessa de economia ('mais barato')", "Promessa de qualidade ('o melhor')", "Fórmula matemática", "Novidade ('lançamento')", "Data histórica"] },
        { kind: "draw", instruction: "Crie um anúncio para um produto inventado por você, pensando em uma imagem e um título que despertem a curiosidade do leitor antes mesmo de ele ler o texto todo." },
      ],
    },
    {
      theme: "Relendo e marcando trechos importantes do texto",
      exercises: [
        { kind: "lines", instruction: "Releia um trecho de um livro ou texto que você tem em casa. Anote uma palavra que você não conhecia e o que você acha que ela significa (depois pode confirmar no dicionário).", lines: 4 },
        { kind: "options", instruction: "Se uma frase do texto gera dúvida, o melhor a fazer é:", options: ["Marcar a frase e reler com atenção, ou perguntar/pesquisar depois", "Ignorar e continuar sem entender", "Rasgar a página", "Parar de ler o livro para sempre"] },
        { kind: "word-select", instruction: "Marque os momentos em que vale a pena reler um trecho de texto:", items: ["Quando não entendemos uma informação", "Quando queremos confirmar um detalhe importante", "Quando terminamos de ler o texto inteiro sem nenhuma dúvida", "Quando encontramos uma palavra difícil", "Quando queremos comentar algo com um colega"] },
        { kind: "draw", instruction: "Escolha uma palavra nova que você aprendeu na leitura de casa. Desenhe algo que representa o significado dela." },
      ],
    },
    {
      theme: "Pesquisando em múltiplas fontes sobre um tema de estudo",
      exercises: [
        { kind: "lines", instruction: "Escolha um tema de seu interesse. Pergunte para alguém da sua casa o que essa pessoa sabe sobre o assunto e escreva o que você aprendeu com a conversa.", lines: 5 },
        { kind: "options", instruction: "Assistir a um documentário de forma crítica significa:", options: ["Prestar atenção e pensar se as informações fazem sentido, sem aceitar tudo sem questionar", "Assistir sem prestar atenção", "Acreditar em tudo sem pensar", "Não assistir a documentários"] },
        { kind: "word-select", instruction: "Marque o que é importante fazer antes de começar uma pesquisa sobre um tema novo:", items: ["Pensar no que já sabemos sobre o assunto", "Definir quais fontes vamos consultar", "Anotar as dúvidas que temos", "Copiar qualquer texto sem ler", "Pensar em perguntas que queremos responder"] },
        { kind: "draw", instruction: "Escolha um tema de estudo e desenhe um pequeno esquema com o que você já sabe sobre ele e o que gostaria de descobrir." },
      ],
    },
    {
      theme: "Tutoria de leitura oral: preparando a leitura em voz alta",
      exercises: [
        { kind: "lines", instruction: "Leia um trecho curto de um texto para alguém da sua casa, treinando a entonação. Escreva o que essa pessoa achou da sua leitura.", lines: 4 },
        { kind: "options", instruction: "Ler uma notícia em voz alta pede um tom de voz:", options: ["Claro e mais formal, como um apresentador de telejornal", "Animado como uma piada", "Sussurrado o tempo todo", "Cantado"] },
        { kind: "word-select", instruction: "Marque os cuidados que ajudam numa boa leitura em voz alta:", items: ["Ler o texto antes, em silêncio, para entender", "Respeitar a pontuação (vírgulas, pontos)", "Ler bem rápido sem pausas", "Ajustar o volume da voz", "Dar entonação às falas dos personagens"] },
        { kind: "draw", instruction: "Desenhe você mesmo lendo em voz alta para alguém da sua família, e escreva embaixo qual texto você escolheria ler." },
      ],
    },
    {
      theme: "Reescrevendo textos mantendo o tema e o conteúdo",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma história curta (pode ser inventada na hora). Depois, reescreva essa história com suas próprias palavras, mantendo os fatos principais.", lines: 6 },
        { kind: "options", instruction: "Manter a coerência ao reescrever um texto significa:", options: ["Fazer os fatos terem sentido lógico entre si, sem contradições", "Escrever frases desconectadas umas das outras", "Copiar o texto original sem mudar nada", "Inventar um final totalmente diferente"] },
        { kind: "word-select", instruction: "Marque o que é importante verificar depois de reescrever um texto:", items: ["Se a história ainda faz sentido", "Se os personagens continuam os mesmos", "Se as palavras estão bem escritas", "Se o texto ficou maior que o original, sem se importar com o motivo", "Se o final combina com o restante da história"] },
        { kind: "draw", instruction: "Ilustre a cena principal da história que você reescreveu no exercício 1." },
      ],
    },
    {
      theme: "Produzindo contos de diferentes culturas",
      exercises: [
        { kind: "lines", instruction: "Continue o conto que você começou a planejar em sala: escreva o conflito (problema) que o personagem principal vai enfrentar.", lines: 6, note: "Se não tiver feito a atividade de sala, pode começar um conto novo." },
        { kind: "options", instruction: "Um conto representativo de outra cultura pode trazer:", options: ["Costumes, crenças ou lugares diferentes dos que conhecemos no dia a dia", "Apenas personagens brasileiros", "Só fatos de hoje em dia", "Nenhuma característica especial"] },
        { kind: "word-select", instruction: "Marque o que ajuda a dar coesão ao seu conto (ligação entre as partes):", items: ["Usar palavras como 'depois', 'então', 'enquanto isso'", "Repetir o nome do personagem sem usar pronomes nenhuma vez", "Manter os tempos verbais combinando entre si", "Escrever frases sem nenhuma relação entre elas", "Concordar corretamente verbos e substantivos"] },
        { kind: "draw", instruction: "Desenhe o personagem principal do seu conto e o lugar (cenário) onde a história acontece." },
      ],
    },
    {
      theme: "Produzindo entrevistas e verbetes de enciclopédia",
      exercises: [
        { kind: "lines", instruction: "Entreviste alguém da sua casa sobre um tema de interesse (trabalho, uma tradição, um hobby). Escreva pelo menos duas perguntas e as respostas que a pessoa deu.", lines: 6 },
        { kind: "options", instruction: "Um verbete de enciclopédia sobre 'reciclagem' deveria:", options: ["Explicar de forma clara e objetiva o que é reciclagem e para que serve", "Contar uma aventura sobre um herói", "Fazer rimas sobre lixo", "Vender produtos recicláveis"] },
        { kind: "word-select", instruction: "Marque o que deve aparecer em um bom verbete de enciclopédia:", items: ["Definição clara do termo", "Informações objetivas e verificáveis", "Opiniões pessoais sem comprovação", "Linguagem organizada", "Dados relevantes sobre o assunto"] },
        { kind: "draw", instruction: "Ilustre o tema da entrevista que você fez em casa (por exemplo, o trabalho ou hobby da pessoa entrevistada)." },
      ],
    },
    {
      theme: "Escrevendo cartas de solicitação e reivindicação",
      exercises: [
        { kind: "lines", instruction: "Termine a carta que você começou em sala (ou escreva uma nova) pedindo algo importante para o seu bairro ou sua escola. Não esqueça da despedida e assinatura.", lines: 6 },
        { kind: "options", instruction: "Ao escrever uma carta de solicitação, é importante usar uma linguagem:", options: ["Educada e clara, adequada à situação formal", "Cheia de gírias", "Confusa e sem explicação", "Igual à de uma propaganda"] },
        { kind: "word-select", instruction: "Marque os elementos que aparecem em uma carta formal:", items: ["Data", "Saudação (Prezado/a...)", "Corpo do texto com o pedido", "Uma rima no final", "Assinatura"] },
        { kind: "draw", instruction: "Desenhe um envelope de carta e escreva nele para quem você enviaria a carta de solicitação que escreveu." },
      ],
    },
    {
      theme: "Escrevendo comentários digitais sobre textos lidos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ler um pequeno texto (ou reler algo que você trouxe da escola) e escrever um comentário sobre ele com você. Depois, escreva você também o seu comentário.", lines: 5 },
        { kind: "options", instruction: "Comentar de forma respeitosa, mesmo discordando de um texto, significa:", options: ["Explicar sua opinião sem ofender o autor ou outros leitores", "Não poder discordar nunca", "Xingar quem escreveu", "Ignorar o texto completamente"] },
        { kind: "word-select", instruction: "Marque o que NÃO deve aparecer em um comentário digital adequado:", items: ["Ofensas pessoais", "Opinião justificada", "Palavrões", "Relação com o texto original", "Comentário sem nenhuma relação com o assunto"] },
        { kind: "draw", instruction: "Desenhe um 'balão de comentário' (como em uma rede social) com uma frase curta de opinião sobre um texto que você leu recentemente." },
      ],
    },
    {
      theme: "Apresentando sínteses orais sobre temas estudados",
      exercises: [
        { kind: "lines", instruction: "Escolha um assunto que você aprendeu recentemente na escola e explique-o em voz alta para alguém da sua casa, usando um esquema com os pontos principais. Escreva os pontos que você usou.", lines: 5 },
        { kind: "options", instruction: "Fazer perguntas durante uma apresentação de um colega serve para:", options: ["Esclarecer dúvidas e demonstrar interesse pelo assunto apresentado", "Atrapalhar quem está apresentando", "Mostrar que não prestou atenção", "Nada, não deve-se fazer perguntas"] },
        { kind: "word-select", instruction: "Marque boas práticas para quando você está ouvindo a apresentação de um colega:", items: ["Prestar atenção", "Anotar dúvidas para perguntar depois", "Respeitar a fala do colega", "Conversar sobre outro assunto", "Fazer perguntas relacionadas ao tema"] },
        { kind: "draw", instruction: "Crie um pequeno esquema visual (com desenhos e palavras-chave) sobre o assunto que você apresentou em casa." },
      ],
    },
    {
      theme: "Debatendo temas atuais com respeito à fala do outro",
      exercises: [
        { kind: "lines", instruction: "Escolha um tema atual e converse com alguém da sua casa sobre ele, ouvindo a opinião dessa pessoa mesmo que seja diferente da sua. Escreva a opinião de cada um e os motivos apresentados.", lines: 6 },
        { kind: "options", instruction: "Se durante um debate alguém discorda de você, a melhor atitude é:", options: ["Ouvir os argumentos da pessoa e responder com respeito", "Parar de participar do debate", "Falar mal da pessoa depois", "Fingir que não ouviu"] },
        { kind: "word-select", instruction: "Marque exemplos de temas atuais que poderiam ser debatidos em sala:", items: ["Uso de telas por crianças", "Separação do lixo reciclável", "Bullying na escola", "A cor favorita de cada um", "Respeito às diferenças"] },
        { kind: "draw", instruction: "Escolha um tema debatido (em sala ou em casa) e desenhe um cartaz simples defendendo sua opinião sobre ele." },
      ],
    },
    {
      theme: "Registrando informações durante uma escuta oral",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma notícia ou um acontecimento recente. Enquanto ouve, anote as informações principais (o quê, quando, onde) e depois escreva um pequeno resumo.", lines: 6 },
        { kind: "options", instruction: "Anotar apenas as palavras-chave (e não a fala inteira) durante uma escuta ajuda a:", options: ["Registrar o essencial sem perder o ritmo de quem está ouvindo", "Copiar tudo palavra por palavra", "Não prestar atenção ao que está sendo dito", "Distrair quem está falando"] },
        { kind: "word-select", instruction: "Marque o que vale a pena registrar durante a escuta de uma notícia:", items: ["O assunto principal", "Quando o fato aconteceu", "Onde o fato aconteceu", "A cor da roupa de quem contou a notícia", "Por que o fato é importante"] },
        { kind: "draw", instruction: "Faça um pequeno esquema (com palavras-chave e desenhos) resumindo a notícia ou acontecimento que alguém da sua casa contou para você." },
      ],
    },
    {
      theme: "Comparando textos de gêneros diferentes e do mesmo gênero",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar dois textos do mesmo tipo (duas receitas, duas listas de compras, dois bilhetes). Escreva o que eles têm em comum:", lines: 3, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Uma bula de remédio e uma história em quadrinhos são gêneros diferentes. Por que não podemos confundir um com o outro?", options: ["Porque cada gênero tem uma finalidade e uma forma própria de organizar as informações", "Porque um é mais colorido que o outro", "Porque um tem mais páginas", "Porque só um deles pode ser lido em voz alta"] },
        { kind: "word-select", instruction: "Marque as características que aparecem em uma CARTA PESSOAL:", items: ["saudação inicial", "data e local", "assinatura de quem escreve", "manchete", "despedida", "ingredientes"] },
        { kind: "fill-blank", instruction: "Complete comparando um conto de fadas e uma fábula:", items: ["O conto de fadas costuma ter personagens mágicos e final __________.", "A fábula tem animais que falam e termina com uma __________."] },
      ],
    },
    {
      theme: "Eliminando repetições no texto com sinônimos e pronomes",
      exercises: [
        { kind: "options", instruction: "Na frase 'A professora explicou a lição. A explicação da professora foi clara.', qual palavra é sinônimo/derivada de 'explicou'?", options: ["explicação", "lição", "clara", "professora"] },
        { kind: "fill-blank", instruction: "Reescreva evitando a repetição, usando pronome ou sinônimo:", items: ["'O menino chutou a bola. O menino comemorou o gol.' → 'O menino chutou a bola. __________ comemorou o gol.'", "'A vovó fez um bolo. A vovó serviu o bolo quentinho.' → 'A vovó fez um bolo. __________ serviu ainda quentinho.'"] },
        { kind: "word-select", instruction: "No texto 'O aluno estudou muito. O aluno fez a prova. O aluno tirou nota boa.', marque as palavras repetidas em excesso:", items: ["aluno", "estudou", "fez", "prova", "tirou", "nota"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma notícia do dia. Escreva o que essa pessoa contou evitando repetir os nomes — use pronomes e sinônimos:", lines: 4, note: "Atividade para fazer com a família" },
      ],
    },
    {
      theme: "Usando organizadores textuais no texto",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa explicar como se faz um prato simples (ovo frito, suco, sanduíche). Escreva o passo a passo usando organizadores textuais como primeiro, depois e por fim:", lines: 5, note: "Atividade para fazer com a família" },
        { kind: "word-select", instruction: "Marque os organizadores textuais que indicam OPOSIÇÃO ou CONTRASTE entre ideias:", items: ["mas", "porém", "no entanto", "além disso", "primeiro", "por isso"] },
        { kind: "fill-blank", instruction: "Complete com um organizador textual adequado:", items: ["Eu queria ir ao parque, __________ estava chovendo muito.", "Estudei bastante para a prova; __________, tirei uma boa nota."] },
        { kind: "options", instruction: "Qual organizador textual indica ADIÇÃO de uma nova ideia?", options: ["Além disso", "Portanto", "Por outro lado", "No início"] },
      ],
    },
    {
      theme: "Mantendo os tempos verbais coerentes no texto",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma lembrança de infância. Escreva o que essa pessoa contou, cuidando para manter os verbos no passado do início ao fim:", lines: 5, note: "Atividade para fazer com a família" },
        { kind: "fill-blank", instruction: "Complete o texto mantendo o mesmo tempo verbal (presente) em todas as frases:", items: ["Todos os dias eu __________ (acordar) cedo, __________ (tomar) café e __________ (ir) para a escola."] },
        { kind: "word-select", instruction: "Leia o texto e marque o verbo que quebra a coerência: 'Todos os dias ela acorda cedo, toma café e foi para a escola.'", items: ["acorda", "toma", "foi", "cedo", "café", "escola"] },
        { kind: "options", instruction: "Em um texto todo no presente, qual frase mantém a coerência verbal?", options: ["Ele come rápido e sai correndo.", "Ele comeu rápido e sai correndo.", "Ele come rápido e saiu correndo.", "Ele comia rápido e sairia correndo."] },
      ],
    },
    {
      theme: "Articulando as partes do texto e mantendo o narrador",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar uma história curta (pode ser inventada). Escreva o início dessa história, decidindo se o narrador será em 1ª ou 3ª pessoa, e mantenha essa escolha do início ao fim:", lines: 5, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Em um texto narrado em 3ª pessoa, o narrador:", options: ["Não participa da história e conta os fatos de fora, usando 'ele' ou 'ela'", "É sempre uma das personagens principais", "Usa somente a palavra 'eu'", "Nunca pode descrever os sentimentos das personagens"] },
        { kind: "word-select", instruction: "Marque as frases narradas em 3ª pessoa:", items: ["Ela abriu a caixa devagar.", "Eu abri a caixa devagar.", "Eles correram até o rio.", "Nós corremos até o rio.", "O menino sorriu satisfeito.", "Sorri satisfeito."] },
        { kind: "fill-blank", instruction: "Reescreva o trecho mantendo o narrador em 1ª pessoa do início ao fim:", items: ["Cheguei em casa cansado. __________ (Eu/Ele) larguei a mochila no sofá e fui direto para o quarto."] },
      ],
    },
    {
      theme: "Usando a pontuação medial e final com intenção",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ditar uma frase de exclamação, uma de pergunta e uma afirmativa. Escreva as três frases com a pontuação correta:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Qual é a função das reticências (...) em um texto?", options: ["Indicar que a frase ficou incompleta, uma pausa ou suspense", "Terminar uma pergunta", "Separar itens de uma lista", "Indicar surpresa forte"] },
        { kind: "fill-blank", instruction: "Complete as frases com a pontuação adequada:", items: ["Que dia lindo__________", "Onde você guardou meu caderno__________", "Comprei pão, leite e ovos__________"] },
        { kind: "word-select", instruction: "Marque as frases que usam vírgula para separar o vocativo (quando chamamos alguém):", items: ["Maria, venha aqui!", "Comprei pão, leite e queijo.", "João, me ajude com a lição.", "Levei bola, corda e peteca.", "Pedro, olhe isso!"] },
      ],
    },
    {
      theme: "Analisando as escolhas de palavras no próprio texto",
      exercises: [
        { kind: "lines", instruction: "Leia para alguém da sua casa uma frase de um texto seu. Peça sugestões de palavras mais expressivas para substituir uma palavra simples (como 'foi', 'disse', 'bonito'). Escreva a frase original e a nova versão:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Na frase 'A casa era bonita', qual palavra tornaria o texto mais expressivo no lugar de 'bonita'?", options: ["Deslumbrante", "Casa", "Era", "A"] },
        { kind: "word-select", instruction: "Marque as palavras que poderiam substituir 'disse' de forma mais expressiva:", items: ["gritou", "sussurrou", "comeu", "exclamou", "dormiu", "murmurou"] },
        { kind: "fill-blank", instruction: "Escolha a palavra mais adequada para deixar a frase mais expressiva:", items: ["A criança __________ pela sala, muito animada. (andou ou saltitou?)", "O céu estava __________ à noite. (escuro ou estrelado?)"] },
      ],
    },
    {
      theme: "Identificando metáforas, comparações e personificações",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa completar a frase 'A noite é...' com uma metáfora (sem usar 'como'). Escreva a frase criada e explique o que ela quer dizer:", lines: 3, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Na frase 'O vento cantava uma canção triste', qual figura de linguagem foi usada?", options: ["Personificação (dar características humanas ao vento)", "Comparação com 'como'", "Rima", "Onomatopeia"] },
        { kind: "word-select", instruction: "Marque as frases que usam PERSONIFICAÇÃO (dão características humanas a algo que não é humano):", items: ["A lua observava a cidade em silêncio.", "A lua é redonda e brilhante.", "As flores dançavam com o vento.", "As flores são coloridas.", "O relógio contava as horas com paciência.", "O relógio marca as horas."] },
        { kind: "fill-blank", instruction: "Complete criando uma comparação usando 'como':", items: ["O menino corria __________ um foguete.", "Ela é forte __________ um leão."] },
      ],
    },
    {
      theme: "Explorando campo semântico e hiperonímia com o dicionário",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa citar cinco objetos da cozinha. Escreva os cinco objetos e depois escreva o hiperônimo (palavra geral) que reúne todos eles:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "word-select", instruction: "Marque as palavras que pertencem ao campo semântico de 'esportes':", items: ["futebol", "basquete", "cadeira", "natação", "computador", "vôlei"] },
        { kind: "fill-blank", instruction: "Use o dicionário se precisar e complete com o hiperônimo adequado:", items: ["Camisa, calça e vestido são tipos de __________.", "Leão, tigre e onça são tipos de __________."] },
        { kind: "options", instruction: "Qual é o hiperônimo da palavra 'violão'?", options: ["Instrumento musical", "Corda", "Música", "Show"] },
      ],
    },
    {
      theme: "Descobrindo palavras polissêmicas",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer duas frases usando a palavra 'letra' com sentidos diferentes (letra do alfabeto e letra de música, por exemplo). Escreva as frases:", lines: 3, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "A palavra 'ponto' pode ter vários sentidos. Em 'Cheguei no ponto de ônibus', o que significa 'ponto'?", options: ["Local de parada", "Sinal de pontuação", "Nota de prova", "Ponto de costura"] },
        { kind: "fill-blank", instruction: "A palavra 'canto' pode ter dois sentidos diferentes. Complete:", items: ["O pássaro fazia um __________ lindo pela manhã. (som que ele emite)", "Ela ficou sentada no __________ da sala. (lugar/extremidade)"] },
        { kind: "word-select", instruction: "A palavra 'sofá' tem um só sentido, mas a palavra 'vela' é polissêmica. Marque as frases em que 'vela' significa 'objeto que se acende':", items: ["Acendi uma vela no bolo de aniversário.", "O barco tinha uma vela grande e branca.", "A vela apagou com o vento.", "A vela do barco enchia com o vento.", "Comprei velas para o aniversário."] },
      ],
    },
    {
      theme: "Explorando recursos gráfico-textuais do material lido",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa mostrar uma embalagem de produto (caixa de remédio, pacote de biscoito). Observe os recursos gráficos usados (cores, tamanhos de letra, negrito) e escreva para que servem:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Para que serve o ITÁLICO em um texto?", options: ["Para destacar palavras estrangeiras, títulos de obras ou dar ênfase especial", "Para indicar erro de ortografia", "Para separar parágrafos", "Para numerar as páginas"] },
        { kind: "word-select", instruction: "Marque os recursos gráfico-textuais comuns em capas de livros:", items: ["título em destaque", "nome do autor", "ilustração", "índice detalhado", "cor de fundo", "notas de rodapé"] },
        { kind: "fill-blank", instruction: "Complete explicando a função de cada recurso:", items: ["As cores usadas em um cartaz servem para __________ e chamar a atenção do leitor.", "O tamanho maior de uma letra no título serve para indicar que aquela informação é __________."] },
      ],
    },
    {
      theme: "Reconhecendo variedades da língua portuguesa",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém mais velho da sua casa uma palavra ou expressão que ele(a) usava quando era criança e que hoje quase não se usa mais. Escreva a palavra e o que ela significa:", lines: 3, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "O que são gírias?", options: ["Palavras ou expressões informais usadas principalmente por um grupo, como os jovens", "Palavras usadas somente em documentos oficiais", "Erros de ortografia", "Palavras que não existem no dicionário e nunca podem ser usadas"] },
        { kind: "word-select", instruction: "Marque palavras de origem indígena ou africana que fazem parte do português falado no Brasil:", items: ["abacaxi", "moleque", "cafuné", "computador", "pipoca", "televisão"] },
        { kind: "fill-blank", instruction: "Complete relacionando a variedade linguística com a situação:", items: ["Em uma entrevista de emprego, é mais adequado usar a linguagem __________ (formal/informal).", "Conversando com os amigos no recreio, é comum usar a linguagem __________ (formal/informal)."] },
      ],
    },
    {
      theme: "Combatendo o preconceito linguístico",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre alguma vez em que ela ouviu alguém falar de um jeito diferente (sotaque, gíria, expressão regional). Escreva o que essa pessoa contou e por que devemos respeitar essas diferenças:", lines: 5, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Qual atitude é a mais correta diante de uma pessoa que fala com sotaque diferente do seu?", options: ["Respeitar e valorizar o jeito dela falar", "Imitar e rir do sotaque dela", "Corrigir a fala dela na frente de todos", "Evitar conversar com ela"] },
        { kind: "word-select", instruction: "Marque as frases que mostram RESPEITO à diversidade linguística:", items: ["Cada região tem seu jeito de falar, e isso é riqueza.", "Só existe uma forma certa de falar português.", "Aprendi uma palavra nova com meu colega de outra cidade.", "Rir do jeito que o colega fala é engraçado.", "Todo mundo tem o direito de falar do seu jeito."] },
        { kind: "fill-blank", instruction: "Complete a frase com sua reflexão:", items: ["Quando alguém fala diferente de mim, eu devo __________.", "O preconceito linguístico machuca porque __________."] },
      ],
    },
    {
      theme: "Analisando substantivos e concordância nominal",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa citar três substantivos (nomes de objetos, pessoas ou lugares). Escreva os três substantivos e, para cada um, escreva uma frase com um adjetivo concordando corretamente:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Qual frase está com a concordância nominal CORRETA?", options: ["As meninas alegres cantaram no palco.", "As meninas alegre cantaram no palco.", "As menina alegres cantaram no palco.", "A meninas alegres cantaram no palco."] },
        { kind: "word-select", instruction: "Marque os substantivos PRÓPRIOS (nomes específicos, com letra maiúscula):", items: ["São Paulo", "cidade", "Maria", "menina", "Brasil", "país"] },
        { kind: "fill-blank", instruction: "Complete fazendo a concordância nominal correta:", items: ["Os menino__________ estudioso__________ tiraram boas notas.", "A bicicleta nova__________ (concorde no feminino singular) é minha."] },
      ],
    },
    {
      theme: "Analisando verbos e concordância verbal",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar o que fez hoje, usando frases no plural (nós fizemos, eles fizeram). Escreva o que essa pessoa contou, prestando atenção na concordância verbal:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Qual frase está com a concordância verbal CORRETA?", options: ["Os alunos chegaram cedo à escola.", "Os alunos chegou cedo à escola.", "O aluno chegaram cedo à escola.", "Os aluno chegou cedo à escola."] },
        { kind: "fill-blank", instruction: "Complete os verbos concordando corretamente com o sujeito:", items: ["Ontem __________ (chover) muito na cidade.", "As crianças __________ (brincar) no parquinho depois da aula.", "Meu pai e minha mãe __________ (trabalhar) juntos."] },
        { kind: "word-select", instruction: "Marque os verbos que indicam ESTADO (não ação) nas frases: 'A menina está cansada. O cachorro correu. Ele parece triste. Nós cantamos.'", items: ["está", "correu", "parece", "cantamos"] },
      ],
    },
    {
      theme: "Acentuando palavras de uso frequente",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa citar cinco palavras do dia a dia. Escreva essas palavras e verifique com essa pessoa quais delas precisam de acento gráfico:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "word-select", instruction: "Marque as palavras que estão ESCRITAS CORRETAMENTE, com o acento no lugar certo:", items: ["árvore", "arvore", "café", "cafe", "sábado", "sabado"] },
        { kind: "fill-blank", instruction: "Reescreva cada palavra com o acento correto:", items: ["numero → __________", "medico → __________", "otimo → __________"] },
        { kind: "options", instruction: "Qual destas palavras está escrita CORRETAMENTE?", options: ["Ônibus", "Onibus", "Ônibûs", "Ónibus"] },
      ],
    },
    {
      theme: "Identificando a sílaba tônica das palavras",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa falar três palavras. Escreva as palavras, divida em sílabas e marque qual é a sílaba tônica de cada uma:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Na palavra 'sabonete', qual sílaba é a tônica?", options: ["ne (sa-bo-NE-te)", "sa (SA-bo-ne-te)", "bo (sa-BO-ne-te)", "te (sa-bo-ne-TE)"] },
        { kind: "word-select", instruction: "Marque as palavras cuja sílaba tônica é a PENÚLTIMA (paroxítonas): mesa, café, casa, sofá, porta, boneca.", items: ["mesa", "café", "casa", "sofá", "porta", "boneca"] },
        { kind: "fill-blank", instruction: "Divida em sílabas e indique a tônica:", items: ["'relógio' se divide em re-ló-gio. A sílaba tônica é __________.", "'janela' se divide em ja-ne-la. A sílaba tônica é __________."] },
      ],
    },
    {
      theme: "Relacionando acento gráfico e sílaba tônica",
      gradeYear: "4-ano",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ler as palavras 'sabia' e 'sabiá' em voz alta. Pergunte se essa pessoa percebe a diferença na pronúncia por causa do acento. Escreva o que vocês descobriram:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "A palavra 'público' é acentuada porque:", options: ["É proparoxítona (a força está na antepenúltima sílaba), e todas as proparoxítonas recebem acento", "É uma palavra estrangeira", "Termina em O", "Tem mais de duas sílabas"] },
        { kind: "word-select", instruction: "Marque as palavras proparoxítonas (força na antepenúltima sílaba), que SEMPRE são acentuadas:", items: ["médico", "lâmpada", "número", "janela", "cadeira", "árvore"] },
        { kind: "fill-blank", instruction: "Complete comparando duas palavras parecidas, mas com sentidos diferentes por causa do acento:", items: ["'Policia' sem acento é forma do verbo policiar (ex: 'o guarda policia a rua'); já '__________', com acento, é a instituição.", "'Secretaria' sem acento é o lugar; '__________', com acento, é a profissional que trabalha lá."] },
      ],
    },
    {
      theme: "Escrevendo palavras regulares contextuais (M/N, R/RR, O/U)",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ditar cinco palavras com M, N, R, RR, O ou U. Escreva as palavras ditadas e depois confira se escreveu certo:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "fill-blank", instruction: "Complete com O ou U, conforme o som da palavra:", items: ["cachorr__________ (animal de estimação)", "b__________neca (brinquedo)"] },
        { kind: "word-select", instruction: "Marque as palavras escritas CORRETAMENTE:", items: ["tempo", "tenpo", "carro", "caro", "vento", "vemto"] },
        { kind: "options", instruction: "Qual a regra para usar M ou N antes de consoante?", options: ["Usa-se M antes de P e B; nos demais casos, usa-se N", "Usa-se sempre M", "Usa-se sempre N", "Não existe regra"] },
      ],
    },
    {
      theme: "Investigando palavras regulares morfológico-gramaticais",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa citar um adjetivo terminado em OSO ou OSA (como gostoso, cheirosa). Escreva a palavra e forme uma frase com ela:", lines: 3, note: "Atividade para fazer com a família" },
        { kind: "word-select", instruction: "Marque os adjetivos terminados em ES/ESA, comuns em nacionalidades e títulos:", items: ["francês", "portuguesa", "japonês", "bonita", "chinesa", "alegre"] },
        { kind: "fill-blank", instruction: "Complete com a terminação adequada:", items: ["Uma pessoa da França é fran__________. (ês ou esa?)", "Uma pessoa de Portugal é portugu__________. (ês ou esa, no feminino?)"] },
        { kind: "options", instruction: "Qual destas palavras é um substantivo derivado com o sufixo EZA, como 'beleza' (de belo)?", options: ["Riqueza (de rico)", "Bonito", "Correu", "Cadeira"] },
      ],
    },
    {
      theme: "Escrevendo palavras com flexões em ÃO/AM e coletivos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa citar um substantivo coletivo que conheça (time, cardume, matilha...). Escreva a palavra e explique o que ela significa:", lines: 3, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Qual é o substantivo coletivo de 'árvores'?", options: ["Floresta ou mata", "Cardume", "Matilha", "Enxame"] },
        { kind: "fill-blank", instruction: "Complete com ÃO ou AM:", items: ["Eles compr__________ frutas na feira. (verbo comprar no passado)", "As crianças cant__________ no recreio. (verbo cantar no passado)"] },
        { kind: "word-select", instruction: "Marque os substantivos COLETIVOS corretos:", items: ["alcateia (lobos)", "constelação (estrelas)", "arquipélago (ilhas)", "mesa (móvel)", "vocabulário (palavras)", "computador (objeto)"] },
      ],
    },
    {
      theme: "Escrevendo palavras irregulares com a letra X",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa citar três palavras com X. Escreva as palavras e o som que o X faz em cada uma (CH, Z, SS ou KS):", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "word-select", instruction: "Marque as palavras em que o X tem som de Z:", items: ["exame", "exemplo", "táxi", "exercício", "próximo", "xarope"] },
        { kind: "fill-blank", instruction: "Complete com X ou CH, conforme o som da palavra:", items: ["__________ícara (objeto para tomar café, som de CH)", "bru__________a (mulher que voa de vassoura, som de X)"] },
        { kind: "options", instruction: "Na palavra 'máximo', o X tem som de:", options: ["SS", "CH", "Z", "KS"] },
      ],
    },
    {
      theme: "Dividindo sílabas corretamente no final da linha",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ditar três palavras longas. Escreva as palavras e divida cada uma em sílabas, mostrando onde poderiam ser separadas no final de uma linha:", lines: 4, note: "Atividade para fazer com a família" },
        { kind: "options", instruction: "Por que não se pode dividir 'água' como 'á-gua' deixando só uma letra na linha, mas sim 'á-gua' é aceito porque não sobra letra sozinha? Marque a regra correta sobre translineação:", options: ["Nunca se deve deixar uma única letra sozinha no início ou no final da linha", "Pode-se dividir a palavra em qualquer lugar", "Só se pode dividir palavras com mais de cinco letras", "A translineação não segue nenhuma regra"] },
        { kind: "word-select", instruction: "Marque as divisões CORRETAS, sem deixar consoantes duplicadas separadas incorretamente:", items: ["pas-so", "clas-se", "car-ro", "c-arro", "as-sa-do", "asa-do"] },
        { kind: "fill-blank", instruction: "Divida corretamente para translineação:", items: ["'quadro' divide-se em __________.", "'chocolate' divide-se em __________."] },
      ],
    },
    {
      theme: "Rodas de leitura de contos, mitos, lendas e fábulas de diferentes culturas",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar um mito, lenda ou fábula que conhece (pode ser de qualquer região ou cultura). Escreva um resumo dessa história:", lines: 6, note: "Pergunte também quem contou essa história para essa pessoa quando ela era criança." },
        { kind: "options", instruction: "As fábulas costumam terminar apresentando:", options: ["Uma moral, ou seja, um ensinamento sobre a história contada", "Uma receita culinária", "Uma propaganda de produto", "Nenhuma conclusão"] },
        { kind: "word-select", instruction: "Marque os elementos que costumam aparecer em fábulas:", items: ["Animais que falam e agem como pessoas", "Moral no final", "Notícia com data e local", "Ensinamento sobre comportamento humano", "Gráfico de barras"] },
        { kind: "fill-blank", instruction: "Complete sobre a história que você ouviu em casa:", items: ["Essa história é sobre ___________.", "Eu acho que o ensinamento (ou a curiosidade) mais importante dessa história é ___________."] },
      ],
    },
    {
      theme: "Discutindo organização, estilo e ilustração em textos literários",
      exercises: [
        { kind: "lines", instruction: "Escolha um livro ilustrado que você tem em casa (ou já leu) e escreva como a capa do livro já dá pistas sobre a história antes mesmo de você começar a ler:", lines: 5 },
        { kind: "options", instruction: "Quando um autor usa frases curtas e diretas ao longo de todo um livro, isso é um exemplo de:", options: ["Estilo do autor", "Erro de revisão", "Regra fixa que todo livro precisa seguir", "Ilustração"] },
        { kind: "fill-blank", instruction: "Complete pensando em um livro que você conhece:", items: ["No livro ___________ (escreva o título), a ilustração ajuda a entender ___________."] },
        { kind: "draw", instruction: "Escolha uma cena de um livro que você já leu em casa e desenhe como você imagina essa cena, pensando em como ficaria numa ilustração de livro." },
      ],
    },
    {
      theme: "Comparando registros literário, publicitário e jornalístico",
      exercises: [
        { kind: "lines", instruction: "Com a ajuda de alguém da sua casa, procure em um jornal, revista ou aplicativo de notícias um anúncio publicitário e uma notícia. Escreva as diferenças que você percebeu entre a linguagem dos dois:", lines: 6 },
        { kind: "word-select", instruction: "Marque as palavras mais prováveis de aparecer em um anúncio publicitário:", items: ["Compre já", "O prefeito informou", "Desconto imperdível", "Era uma vez", "Aproveite a promoção"] },
        { kind: "options", instruction: "Um texto que começa com \"Era uma vez\" pertence, quase sempre, a qual registro?", options: ["Literário", "Jornalístico", "Publicitário", "Jurídico"] },
        { kind: "fill-blank", instruction: "Complete com o registro correspondente:", items: ["Um texto que informa fatos recentes, com data e fonte, é do registro ___________.", "Um texto que tenta convencer alguém a comprar algo é do registro ___________."] },
      ],
    },
    {
      theme: "Leitura programada de uma obra literária mais extensa",
      exercises: [
        { kind: "lines", instruction: "Leia o capítulo combinado da obra em casa. Depois, conte para alguém da sua família o que aconteceu e escreva, em poucas linhas, como essa pessoa reagiu à história:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete com suas impressões sobre a leitura de hoje em casa:", items: ["A parte que eu mais gostei de ler hoje foi ___________.", "Uma pergunta que ficou na minha cabeça é ___________."] },
        { kind: "options", instruction: "Se você tivesse que recomendar essa obra para um colega, você diria que ela é:", options: ["Interessante, porque prende a atenção do leitor", "Chata, porque não desperta nenhum interesse", "Impossível de entender", "Não sei ainda, preciso ler mais"] },
        { kind: "draw", instruction: "Desenhe a capa que você criaria para essa obra, se pudesse escolher a ilustração." },
      ],
    },
    {
      theme: "Letras de canções e sua relação com o poema",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém da sua casa qual é a canção favorita dela. Sem copiar a letra, escreva com suas próprias palavras sobre o que fala essa canção e por que essa pessoa gosta dela:", lines: 6 },
        { kind: "options", instruction: "Quando um poema é musicado (recebe uma melodia), ele passa a ser chamado de:", options: ["Letra de canção (ou canção)", "Fábula", "Notícia", "Verbete"] },
        { kind: "word-select", instruction: "Marque os elementos que uma canção pode ter, além da letra:", items: ["Melodia", "Ritmo", "Instrumentos musicais", "Data de publicação obrigatória", "Refrão"] },
        { kind: "fill-blank", instruction: "Complete pensando na canção que você escolheu:", items: ["Essa canção fala sobre ___________.", "O sentimento que ela transmite é de ___________."] },
      ],
    },
    {
      theme: "Textos reivindicatórios e representações sociais em artigos e relatos históricos",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre uma mudança que vocês gostariam para o bairro ou para a cidade. Escreva um pequeno texto reivindicando essa mudança:", lines: 6 },
        { kind: "options", instruction: "Um texto reivindicatório costuma se dirigir a quem?", options: ["A uma autoridade ou instituição responsável por resolver o problema", "A nenhum destinatário específico", "Apenas a amigos próximos", "A um personagem de ficção"] },
        { kind: "fill-blank", instruction: "Complete sobre a reivindicação que você escreveu:", items: ["Eu estou pedindo essa mudança porque ___________.", "Essa mudança beneficiaria principalmente ___________."] },
        { kind: "word-select", instruction: "Marque as palavras que fortalecem um pedido em um texto reivindicatório:", items: ["solicitamos", "é urgente", "talvez, quem sabe", "reivindicamos", "não importa"] },
      ],
    },
    {
      theme: "Relatos históricos e divulgação científica sobre diferentes culturas",
      exercises: [
        { kind: "lines", instruction: "Pergunte para alguém mais velho da sua família sobre uma tradição ou costume de família que vem de outra geração ou de outra cultura. Escreva um pequeno relato sobre isso:", lines: 6 },
        { kind: "options", instruction: "Um relato histórico de família (contado por um avô, por exemplo) se parece com um relato histórico escolar porque:", options: ["Ambos organizam fatos do passado, situados no tempo", "Ambos são totalmente inventados", "Nenhum dos dois tem nenhuma relação com fatos reais", "Ambos são sempre escritos em versos"] },
        { kind: "fill-blank", instruction: "Complete sobre a tradição que você descobriu em casa:", items: ["Essa tradição existe na minha família desde ___________.", "Ela é importante para minha família porque ___________."] },
        { kind: "draw", instruction: "Desenhe algo que represente essa tradição ou costume de família que você descobriu." },
      ],
    },
    {
      theme: "Efeitos de sentido em quadrinhos, charges e tiras de diferentes culturas",
      exercises: [
        { kind: "lines", instruction: "Procure em casa (em revista, jornal ou aplicativo) uma tira ou HQ. Descreva os recursos usados nela (balões, onomatopeias, expressões dos personagens) e o efeito que eles causam:", lines: 6 },
        { kind: "word-select", instruction: "Marque os recursos que você pode encontrar em uma tira de jornal:", items: ["Balões de fala", "Onomatopeias", "Quadros numerados como página de dicionário", "Expressões faciais", "Linhas de movimento"] },
        { kind: "options", instruction: "Se um personagem de HQ aparece com gotas de suor na testa, isso costuma indicar:", options: ["Nervosismo, medo ou esforço físico", "Que o personagem está muito feliz", "Que está chovendo dentro da história", "Nada, é só um detalhe sem função"] },
        { kind: "fill-blank", instruction: "Complete sobre a tira que você encontrou em casa:", items: ["Na tira, o efeito de humor (ou crítica) acontece porque ___________."] },
      ],
    },
    {
      theme: "Multimodalidade em textos de projetos interdisciplinares",
      gradeYear: "5-ano",
      exercises: [
        { kind: "lines", instruction: "Procure em casa uma embalagem, bula de remédio ou manual de instruções. Descreva quais linguagens (texto, imagem, ícones, números) aparecem juntas nesse texto:", lines: 6 },
        { kind: "options", instruction: "Uma bula de remédio, com texto, tabelas e símbolos de alerta, é um exemplo de texto:", options: ["Multimodal, porque combina diferentes linguagens", "Puramente literário", "Sem nenhuma organização", "Exclusivamente oral"] },
        { kind: "word-select", instruction: "Marque os elementos multimodais que você pode encontrar em uma embalagem de produto:", items: ["Tabela nutricional", "Código de barras", "Texto corrido sem nenhuma imagem", "Símbolo de reciclagem", "Foto do produto"] },
        { kind: "fill-blank", instruction: "Complete sobre o texto multimodal que você encontrou em casa:", items: ["O texto que encontrei foi ___________.", "As linguagens que aparecem juntas nele são ___________."] },
      ],
    },
    {
      theme: "Conhecendo trechos de textos da esfera jurídica",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre uma regra ou direito que vocês conhecem (pode ser do ECA, do condomínio ou de casa mesmo). Escreva essa regra explicando para que ela serve:", lines: 5 },
        { kind: "options", instruction: "As regras de convivência de um condomínio (regimento interno) são parecidas com uma lei porque:", options: ["Estabelecem deveres e direitos que todos devem seguir", "São sempre engraçadas", "Não precisam ser seguidas por ninguém", "Só valem para uma pessoa"] },
        { kind: "fill-blank", instruction: "Complete pensando em regras de convivência:", items: ["Uma regra importante na minha casa é ___________.", "Essa regra existe porque ___________."] },
        { kind: "word-select", instruction: "Marque as palavras relacionadas a regras e direitos:", items: ["dever", "direito", "regra", "personagem", "cumprir", "receita"] },
      ],
    },
    {
      theme: "Comparando textos publicitários sobre o mesmo produto",
      exercises: [
        { kind: "lines", instruction: "Com a ajuda de alguém da sua casa, procure (em encarte, revista ou aplicativo) dois anúncios de produtos parecidos (por exemplo, dois sabonetes). Compare os argumentos usados em cada um:", lines: 6 },
        { kind: "word-select", instruction: "Marque os argumentos comuns em anúncios de produtos de limpeza ou higiene:", items: ["Cheiro agradável", "Preço baixo", "Data de fundação da empresa", "Eficácia comprovada", "Embalagem sustentável"] },
        { kind: "options", instruction: "Dois anúncios do mesmo tipo de produto podem ser diferentes principalmente porque:", options: ["Usam argumentos diferentes para convencer públicos diferentes", "Um deles nunca usa imagens", "Um deles é sempre mais longo", "Não existe diferença possível entre eles"] },
        { kind: "fill-blank", instruction: "Complete comparando os dois anúncios que você encontrou:", items: ["O primeiro anúncio destaca ___________, enquanto o segundo destaca ___________."] },
      ],
    },
    {
      theme: "Estratégias de releitura: grifar, anotar e consultar dicionário",
      exercises: [
        { kind: "lines", instruction: "Releia, em casa, um texto de qualquer matéria. Grife duas palavras que você não conhecia bem, procure o significado (no dicionário ou com alguém da família) e escreva os significados encontrados:", lines: 5 },
        { kind: "word-select", instruction: "Marque os momentos em que vale a pena parar a leitura e consultar o dicionário:", items: ["Quando uma palavra é desconhecida", "Quando a frase não faz sentido para você", "Quando o texto tem muitas páginas", "Quando surge uma dúvida sobre o significado de um termo", "Quando o texto está em letra maiúscula"] },
        { kind: "options", instruction: "Grifar e anotar durante a leitura ajuda principalmente a:", options: ["Voltar depois aos pontos importantes e organizar o que foi entendido", "Deixar o livro mais colorido", "Substituir a necessidade de reler o texto", "Não tem nenhuma utilidade"] },
        { kind: "fill-blank", instruction: "Complete com as palavras que você pesquisou:", items: ["A palavra ___________ significa ___________."] },
      ],
    },
    {
      theme: "Pesquisando em várias fontes para estudar temas das áreas de conhecimento",
      exercises: [
        { kind: "lines", instruction: "Escolha um tema de Ciências, História ou Geografia que você está estudando. Com a ajuda de alguém da sua casa, pesquise esse tema em duas fontes diferentes (livro, site confiável, documentário) e escreva o que encontrou em cada uma:", lines: 6 },
        { kind: "options", instruction: "Ao pesquisar em casa com apoio de um adulto, é importante:", options: ["Verificar se a fonte é confiável antes de usar a informação", "Usar qualquer informação, mesmo sem verificar a fonte", "Copiar tudo sem escrever nada com as próprias palavras", "Pesquisar sempre em uma fonte só"] },
        { kind: "fill-blank", instruction: "Complete com o resultado da sua pesquisa:", items: ["Na primeira fonte, descobri que ___________.", "Na segunda fonte, descobri que ___________."] },
        { kind: "word-select", instruction: "Marque os cuidados importantes ao pesquisar um tema em casa:", items: ["Verificar se a fonte é confiável", "Anotar de onde veio a informação", "Copiar qualquer texto sem checar nada", "Comparar informações de fontes diferentes", "Perguntar para um adulto em caso de dúvida"] },
      ],
    },
    {
      theme: "Reescrevendo textos narrativos respeitando o texto-fonte",
      exercises: [
        { kind: "lines", instruction: "Escolha uma história curta que alguém da sua casa conhece bem (pode ser contada de memória). Depois de ouvir, reescreva essa história com suas próprias palavras, mantendo os fatos principais:", lines: 6 },
        { kind: "options", instruction: "Quando reescrevemos uma história contada por outra pessoa, o mais importante é:", options: ["Manter os fatos principais, mesmo mudando as palavras", "Inventar um final totalmente diferente", "Copiar exatamente as mesmas palavras da pessoa", "Não incluir nenhum personagem da história original"] },
        { kind: "fill-blank", instruction: "Complete sobre a história que você reescreveu:", items: ["Essa história foi contada por ___________.", "O fato mais importante que eu mantive na reescrita foi ___________."] },
        { kind: "draw", instruction: "Desenhe o momento mais importante da história que você reescreveu." },
      ],
    },
    {
      theme: "Produzindo contos com coerência e coesão",
      exercises: [
        { kind: "lines", instruction: "Continue em casa o conto que você começou a escrever em sala, criando o conflito (o problema) que o personagem principal vai enfrentar:", lines: 6 },
        { kind: "fill-blank", instruction: "Complete as frases usando conectivos que dão coesão ao texto:", items: ["O menino correu até a floresta. ___________, percebeu que estava perdido.", "Ela tentou abrir a porta várias vezes, ___________ a chave não funcionava."] },
        { kind: "options", instruction: "Um conto perde a coerência quando:", options: ["Apresenta fatos que se contradizem ou não fazem sentido entre si", "Tem um personagem principal bem definido", "Segue uma ordem lógica de acontecimentos", "Usa conectivos para ligar as ideias"] },
        { kind: "lines", instruction: "Peça para alguém da sua casa ouvir o conto que você está escrevendo e escreva o que essa pessoa achou da história até agora:", lines: 4 },
      ],
    },
    {
      theme: "Criando quadrinhas e novas estrofes para poemas conhecidos",
      exercises: [
        { kind: "lines", instruction: "Escreva uma quadrinha para alguém especial da sua família (avó, avô, irmão, mãe, pai), com pelo menos duas palavras que rimem:", lines: 4 },
        { kind: "word-select", instruction: "Marque as palavras que rimam com \"coração\":", items: ["canção", "flor", "mão", "limão", "casa", "botão"] },
        { kind: "fill-blank", instruction: "Complete o verso, criando uma rima:", items: ["Minha casa é pequena / mas tem muito ___________ (rima com \"carinho\")."] },
        { kind: "options", instruction: "Uma quadrinha é composta por quantos versos?", options: ["Quatro versos", "Dez versos", "Um verso só", "Vinte versos"] },
      ],
    },
    {
      theme: "Escrevendo verbetes de curiosidade sobre temas estudados",
      exercises: [
        { kind: "lines", instruction: "Escolha um animal ou objeto que existe na sua casa ou no seu bairro e, com ajuda de alguém da família ou de uma pesquisa simples, escreva um verbete de curiosidade sobre ele:", lines: 6 },
        { kind: "options", instruction: "Um verbete de curiosidade deve trazer, principalmente:", options: ["Informações verdadeiras e interessantes sobre o tema", "Apenas a opinião de quem escreve, sem nenhuma informação", "Uma receita culinária", "Um poema rimado"] },
        { kind: "fill-blank", instruction: "Complete o verbete que você criou:", items: ["O ___________ (nome do tema) é ___________ (o que é).", "Uma curiosidade interessante sobre ele é que ___________."] },
        { kind: "draw", instruction: "Ilustre o verbete que você escreveu em casa." },
      ],
    },
    {
      theme: "Produzindo um artigo de divulgação científica sobre tema de interesse da comunidade",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre um problema ou tema de interesse do seu bairro ou cidade (por exemplo, lixo nas ruas, falta de árvores). Escreva um pequeno parágrafo explicando esse tema como se fosse parte de um artigo de divulgação científica:", lines: 6 },
        { kind: "options", instruction: "Um artigo de divulgação científica sobre um problema da comunidade deve, além de explicar o problema:", options: ["Trazer informações que ajudem o leitor a entender as causas e possíveis soluções", "Apenas reclamar do problema, sem nenhuma explicação", "Inventar uma história de ficção sobre o problema", "Ignorar completamente dados e pesquisas"] },
        { kind: "fill-blank", instruction: "Complete sobre o tema que você escolheu:", items: ["O problema que escolhi foi ___________.", "Uma possível solução para esse problema seria ___________."] },
        { kind: "word-select", instruction: "Marque as palavras que ajudam a explicar um problema de forma científica:", items: ["causa", "consequência", "era uma vez", "dados mostram", "solução", "personagem"] },
      ],
    },
    {
      theme: "Escrevendo comentários opinativos sobre temas atuais",
      exercises: [
        { kind: "lines", instruction: "Assista com alguém da sua casa a uma notícia no jornal ou converse sobre um assunto atual. Escreva um pequeno comentário opinativo sobre esse tema:", lines: 6 },
        { kind: "fill-blank", instruction: "Complete usando expressões de opinião:", items: ["Na minha opinião, esse assunto é importante porque ___________.", "Eu acredito que a solução para isso seria ___________."] },
        { kind: "options", instruction: "Um bom comentário opinativo apresenta:", options: ["Uma opinião clara, com pelo menos um argumento que a justifique", "Apenas uma opinião, sem nenhuma explicação", "Somente fatos, sem nenhuma opinião", "Um resumo sem nenhuma opinião pessoal"] },
        { kind: "word-select", instruction: "Marque as expressões que introduzem opinião:", items: ["Eu acho que", "Segundo o jornal", "Na minha opinião", "Data e local", "Acredito que"] },
      ],
    },
    {
      theme: "Produzindo cartas argumentativas de leitor",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua casa sobre um assunto que incomoda vocês na cidade ou no bairro. Escreva uma carta argumentativa de leitor sobre esse assunto, como se fosse enviar para um jornal:", lines: 6 },
        { kind: "options", instruction: "Uma carta argumentativa de leitor deve terminar, de preferência, com:", options: ["Um pedido claro ou uma proposta relacionada ao assunto discutido", "Uma receita de bolo", "Nenhuma conclusão", "Uma piada sem relação com o tema"] },
        { kind: "fill-blank", instruction: "Complete sua carta com as partes que faltam:", items: ["Prezados editores, escrevo para falar sobre ___________.", "Por isso, sugiro que ___________."] },
        { kind: "word-select", instruction: "Marque as expressões adequadas para começar uma carta formal:", items: ["Prezados editores", "Caro editor", "E aí, beleza?", "Venho por meio desta", "Oi gente"] },
      ],
    },
    {
      theme: "Entrevistando especialistas a partir de roteiro pré-elaborado",
      exercises: [
        { kind: "lines", instruction: "Escolha alguém da sua casa que tenha uma profissão ou uma habilidade especial (cozinhar, consertar coisas, cuidar de plantas) e faça uma pequena entrevista com essa pessoa, usando pelo menos 4 perguntas preparadas antes. Escreva as respostas:", lines: 8 },
        { kind: "options", instruction: "Antes de entrevistar alguém da família, o mais importante a fazer é:", options: ["Preparar as perguntas com antecedência, pensando no assunto da entrevista", "Fazer perguntas aleatórias sem nenhum planejamento", "Não anotar nenhuma resposta", "Interromper a pessoa toda hora"] },
        { kind: "fill-blank", instruction: "Complete sobre a entrevista que você fez em casa:", items: ["Eu entrevistei ___________ sobre ___________.", "A resposta que mais me surpreendeu foi ___________."] },
        { kind: "word-select", instruction: "Marque as boas práticas para uma entrevista em casa:", items: ["Preparar perguntas antes", "Ouvir com atenção", "Anotar as respostas", "Interromper sempre", "Agradecer no final"] },
      ],
    },
    {
      theme: "Apresentando ideias em diferentes situações comunicativas orais",
      exercises: [
        { kind: "lines", instruction: "Escolha um assunto (um livro, um jogo, uma notícia) e apresente sua ideia sobre ele para alguém da sua casa, como se fosse uma roda de conversa. Escreva o que você disse e o que essa pessoa respondeu:", lines: 6 },
        { kind: "options", instruction: "Em uma conversa em família sobre um assunto, é importante:", options: ["Falar com clareza e também ouvir a opinião dos outros", "Falar sem parar, sem deixar ninguém opinar", "Evitar olhar para quem está ouvindo", "Mudar de assunto o tempo todo"] },
        { kind: "fill-blank", instruction: "Complete sobre a conversa que você teve em casa:", items: ["Eu apresentei minha ideia sobre ___________.", "A pessoa da minha casa respondeu que ___________."] },
        { kind: "word-select", instruction: "Marque as atitudes importantes para uma boa conversa em casa:", items: ["Falar com clareza", "Ouvir com atenção", "Interromper sempre", "Respeitar a opinião do outro", "Olhar para quem fala"] },
      ],
    },
    {
      theme: "Expondo temas estudados com apoio de esquemas e notas",
      exercises: [
        { kind: "lines", instruction: "Escolha um tema estudado na escola recentemente e explique-o oralmente para alguém da sua casa, usando algumas notas escritas como apoio. Escreva aqui as notas que você usou:", lines: 5 },
        { kind: "options", instruction: "Ao explicar um tema para alguém da família usando notas, o objetivo das notas é:", options: ["Ajudar a lembrar os pontos principais, sem precisar ler tudo pronto", "Substituir totalmente a fala, sendo lido palavra por palavra", "Confundir quem está ouvindo", "Não tem nenhuma função"] },
        { kind: "fill-blank", instruction: "Complete sobre a exposição que você fez em casa:", items: ["Eu expliquei o tema ___________ para ___________.", "Essa pessoa entendeu bem a parte sobre ___________."] },
        { kind: "draw", instruction: "Desenhe o esquema (com palavras-chave e setas) que você usou como apoio para explicar o tema em casa." },
      ],
    },
    {
      theme: "Relatando oralmente experiências vividas",
      exercises: [
        { kind: "lines", instruction: "Conte oralmente para alguém da sua casa uma experiência marcante que você viveu recentemente. Depois, escreva um resumo desse relato, organizando começo, meio e fim:", lines: 6 },
        { kind: "fill-blank", instruction: "Complete organizando seu relato no tempo:", items: ["Primeiro, ___________.", "Depois, ___________.", "No final, ___________."] },
        { kind: "options", instruction: "Ao relatar uma experiência vivida para a família, é interessante incluir:", options: ["Como você se sentiu durante a experiência", "Apenas os fatos, sem nenhum sentimento", "Fatos que nunca aconteceram", "Nenhum detalhe sobre o que aconteceu"] },
        { kind: "word-select", instruction: "Marque as palavras que ajudam a organizar um relato no tempo:", items: ["Primeiro", "Depois", "Em seguida", "Nunca", "Por fim"] },
      ],
    },
    {
      theme: "Debatendo temas atuais controversos com base em pesquisa",
      exercises: [
        { kind: "lines", instruction: "Escolha um tema atual controverso e converse com alguém da sua casa sobre ele, ouvindo a opinião dessa pessoa. Escreva o argumento dela e o seu, mesmo que sejam diferentes:", lines: 6 },
        { kind: "options", instruction: "Ao discordar da opinião de alguém da família sobre um tema atual, o ideal é:", options: ["Ouvir o argumento da pessoa com respeito e explicar o seu com calma", "Gritar até a pessoa concordar", "Fingir que concorda, mesmo pensando diferente", "Ignorar completamente o que a pessoa disse"] },
        { kind: "fill-blank", instruction: "Complete sobre a conversa que você teve em casa:", items: ["O tema que conversamos foi ___________.", "A opinião dessa pessoa é que ___________, e a minha é que ___________."] },
        { kind: "word-select", instruction: "Marque as atitudes respeitosas para debater um tema com a família:", items: ["Ouvir com atenção", "Justificar sua opinião com exemplos", "Gritar para vencer a conversa", "Respeitar quem pensa diferente", "Ficar aberto a mudar de ideia"] },
      ],
    },
    {
      theme: "Registrando informações durante situações de escuta oral",
      exercises: [
        { kind: "draw", instruction: "Peça para alguém da sua casa contar uma lembrança de infância (uma história, uma viagem, um fato engraçado). Enquanto ouve, desenhe um pequeno esquema com os principais momentos da história, na ordem em que aconteceram.", note: "Não precisa ser bonito — o objetivo é registrar a sequência dos fatos." },
        { kind: "lines", instruction: "Depois de ouvir a história de alguém da família, escreva um resumo com as informações mais importantes que você anotou (quem participou, onde e quando aconteceu):", lines: 5 },
        { kind: "options", instruction: "Se durante a escuta você perde uma informação importante, o que é mais adequado fazer?", options: ["Perguntar educadamente e pedir para repetir", "Inventar uma informação parecida", "Deixar o espaço em branco e nunca mais voltar a ele", "Interromper e mudar de assunto"] },
        { kind: "fill-blank", instruction: "Complete com base na conversa que você teve em casa:", items: ["A pessoa que eu entrevistei foi __________.", "A informação mais interessante que registrei foi __________."] },
      ],
    },
    {
      theme: "Comparando gêneros textuais e suas características específicas",
      exercises: [
        { kind: "draw", instruction: "Procure em casa dois textos de gêneros diferentes (por exemplo: uma embalagem de produto e uma carta, ou um bilhete e uma propaganda). Desenhe um quadro comparando a forma de cada um (título, imagens, tamanho dos parágrafos).", note: "Pode ser embalagem, encarte, bula, carta — qualquer texto impresso que você encontrar." },
        { kind: "lines", instruction: "Descreva os dois textos que você encontrou em casa: qual é o gênero de cada um e para que ele serve?", lines: 5 },
        { kind: "options", instruction: "Qual característica NÃO costuma variar de um gênero para outro?", options: ["O alfabeto usado para escrever", "A forma de organizar as informações", "A linguagem usada (formal ou informal)", "A finalidade do texto"] },
        { kind: "fill-blank", instruction: "Complete comparando os textos que encontrou em casa:", items: ["O texto 1 tem a função de __________.", "O texto 2 tem a função de __________."] },
      ],
    },
    {
      theme: "Evitando repetições desnecessárias no texto",
      exercises: [
        { kind: "lines", instruction: "Escolha um bilhete ou mensagem que você mandou recentemente (ou peça para relembrar uma). Reescreva-o evitando repetir a mesma palavra mais de uma vez seguida:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete evitando a repetição da palavra destacada:", items: ["O professor explicou a lição. O professor também deu exemplos. → __________ também deu exemplos.", "Comprei um livro novo. O livro é sobre dinossauros. → __________ é sobre dinossauros."] },
        { kind: "options", instruction: "Peça para alguém da sua casa ler uma frase com uma palavra repetida em excesso. Qual estratégia vocês podem usar juntos para melhorar a frase?", options: ["Substituir a palavra repetida por um sinônimo ou pronome", "Apagar a frase inteira", "Repetir a palavra mais uma vez", "Trocar todas as palavras da frase"] },
        { kind: "draw", instruction: "Peça para alguém da família contar uma pequena história em voz alta. Observe se essa pessoa repete palavras. Depois, escreva a história substituindo as repetições por pronomes ou sinônimos.", note: "Você pode gravar mentalmente ou pedir para repetir devagar." },
      ],
    },
    {
      theme: "Utilizando organizadores textuais no gênero produzido",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa te ensinar uma tarefa simples (arrumar a cama, regar uma planta, guardar a louça). Escreva o passo a passo usando organizadores textuais de sequência:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete as frases com um organizador textual adequado ao sentido:", items: ["Estudei bastante, __________ fui bem na prova. (consequência)", "__________, quero agradecer a todos que ajudaram. (conclusão)"] },
        { kind: "word-select", instruction: "Releia o passo a passo que você escreveu e marque quais organizadores você usou:", items: ["primeiro", "depois", "em seguida", "por fim", "nenhum", "então"] },
        { kind: "options", instruction: "Por que os organizadores textuais são importantes em um texto de instruções?", options: ["Ajudam o leitor a entender a ordem das ações", "Deixam o texto mais longo sem necessidade", "Substituem a necessidade de explicar as ações", "Servem apenas para decorar o texto"] },
      ],
    },
    {
      theme: "Mantendo o tempo verbal para garantir a coesão do texto",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar um fato que aconteceu há muito tempo (quando era criança, por exemplo). Escreva o relato mantendo todos os verbos no tempo passado:", lines: 6 },
        { kind: "fill-blank", instruction: "Complete mantendo a coerência do tempo verbal (futuro):", items: ["Amanhã eu __________ (visitar) meus avós e __________ (levar) um presente.", "No próximo mês, nós __________ (viajar) para a praia."] },
        { kind: "options", instruction: "Se você está escrevendo sobre planos futuros, qual tempo verbal deve predominar no texto?", options: ["Futuro", "Passado", "Presente do indicativo apenas", "Não importa, pode misturar livremente"] },
        { kind: "word-select", instruction: "Releia o relato que você escreveu sobre a história contada em casa. Marque os verbos que você usou no passado:", items: ["foi", "brincou", "estudou", "vai", "morava", "come"] },
      ],
    },
    {
      theme: "Articulando as partes do texto de forma coerente",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa contar os passos de uma receita ou tarefa. Escreva o texto garantindo que uma parte esteja ligada à outra, sem pular etapas:", lines: 5 },
        { kind: "options", instruction: "Se em um parágrafo você fala sobre um cachorro e no seguinte muda de repente para falar sobre um carro sem nenhuma ligação, o texto está:", options: ["Incoerente, porque as ideias não se conectam", "Perfeitamente coerente", "Apenas um pouco longo", "Sem nenhum problema"] },
        { kind: "fill-blank", instruction: "Reescreva a frase final desse pequeno texto para que ela combine com o restante: 'Choveu o dia inteiro e o rio subiu. As famílias ficaram preocupadas. __________.'", items: ["__________."] },
        { kind: "draw", instruction: "Desenhe, em três quadrinhos, uma pequena história com começo, meio e fim que faça sentido (por exemplo: uma criança planta uma árvore, cuida dela e ela cresce). Depois, escreva uma legenda embaixo de cada quadrinho.", note: "Mostre para alguém da família e pergunte se a história faz sentido." },
      ],
    },
    {
      theme: "Usando a pontuação medial e final para dar sentido ao texto",
      exercises: [
        { kind: "fill-blank", instruction: "Complete o pequeno diálogo com a pontuação adequada:", items: ["— Você vai ao aniversário__________ perguntou Marcos.", "— Claro que vou__________ respondeu Júlia, animada."] },
        { kind: "lines", instruction: "Peça para alguém da sua casa ditar uma frase de exclamação, uma de interrogação e uma afirmativa. Escreva as três frases com a pontuação correta:", lines: 4 },
        { kind: "word-select", instruction: "Releia um bilhete ou mensagem de texto que alguém da sua casa escreveu recentemente. Marque quais sinais de pontuação essa pessoa usou:", items: ["ponto final", "vírgula", "ponto de interrogação", "ponto de exclamação", "reticências", "nenhum sinal"] },
        { kind: "options", instruction: "Por que é importante usar a pontuação correta em um texto?", options: ["Porque ajuda o leitor a entender o sentido e a entonação das frases", "Porque deixa o texto mais colorido", "Porque é uma regra sem nenhuma função", "Porque aumenta o número de palavras"] },
      ],
    },
    {
      theme: "Analisando as escolhas de palavras nos textos produzidos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa comparar como fala com os amigos e como fala em uma situação mais formal (por exemplo, com o médico ou no trabalho). Escreva duas frases dessa pessoa, uma informal e outra formal, sobre o mesmo assunto:", lines: 4 },
        { kind: "options", instruction: "Escolher bem as palavras em um texto ajuda principalmente a:", options: ["Comunicar exatamente o que se quer dizer, no tom adequado", "Deixar o texto mais longo", "Impressionar sem necessidade", "Confundir o leitor"] },
        { kind: "fill-blank", instruction: "Complete substituindo a palavra repetitiva e pouco precisa 'coisa' por uma palavra mais adequada:", items: ["Aquela __________ (coisa) que vi no céu era um pássaro.", "Fiz uma __________ (coisa) muito legal na escola hoje: uma maquete."] },
        { kind: "word-select", instruction: "Releia um texto que você escreveu recentemente (um bilhete, uma redação) e marque se ele usa:", items: ["palavras repetidas em excesso", "palavras precisas e variadas", "gírias em texto formal", "vocabulário adequado ao assunto"] },
      ],
    },
    {
      theme: "Identificando efeitos de sentido de metáfora e comparação",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer uma expressão popular que usa metáfora ou comparação (por exemplo: 'é um poço de sabedoria', 'rápido como um raio'). Anote a expressão e explique o que ela quer dizer:", lines: 4 },
        { kind: "options", instruction: "Qual é o efeito de sentido de usar uma metáfora em um texto?", options: ["Tornar a linguagem mais expressiva e criar imagens na mente do leitor", "Deixar o texto mais confuso de propósito", "Substituir a pontuação", "Encurtar o texto sem motivo"] },
        { kind: "fill-blank", instruction: "Complete com uma metáfora ou comparação de sua criação:", items: ["A noite estava tão escura que parecia __________.", "Meu coração bateu como __________."] },
        { kind: "word-select", instruction: "Releia a expressão que alguém da família te ensinou e marque se ela é:", items: ["metáfora", "comparação", "nenhuma das duas"] },
      ],
    },
    {
      theme: "Explorando palavras de um mesmo campo semântico com o dicionário",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa citar cinco palavras relacionadas a uma profissão (por exemplo: cozinha, culinária). Anote as palavras e, se puder, consulte um dicionário para confirmar o significado de uma delas:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete o campo semântico de 'móveis' com palavras que existem na sua casa:", items: ["Móveis da sala: sofá, __________ e __________."] },
        { kind: "options", instruction: "Se você não sabe o significado exato de uma palavra de um campo semântico, o que deve fazer?", options: ["Consultar o dicionário", "Inventar um significado qualquer", "Ignorar a palavra para sempre", "Perguntar apenas para os amigos, sem checar"] },
        { kind: "word-select", instruction: "Marque as palavras que pertencem ao campo semântico de 'escola':", items: ["professor", "caderno", "geladeira", "lousa", "recreio", "sapato"] },
      ],
    },
    {
      theme: "Identificando palavras polissêmicas em diferentes contextos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa usar a palavra 'célula' ou outra palavra científica (por exemplo: 'força', 'energia') em uma frase do dia a dia e depois no sentido científico. Escreva as duas frases:", lines: 4 },
        { kind: "options", instruction: "A palavra 'célula' usada em Ciências (unidade básica dos seres vivos) e usada para 'célula de um partido político' é um exemplo de:", options: ["Polissemia — mesma palavra, contextos e sentidos diferentes", "Um erro de escrita", "Sinônimos perfeitos", "Palavras completamente diferentes por acaso"] },
        { kind: "fill-blank", instruction: "Complete com o sentido da palavra 'planta' em cada contexto:", items: ["Na frase 'Reguei a planta', a palavra significa __________.", "Na frase 'A planta do prédio ficou pronta', a palavra significa __________."] },
        { kind: "word-select", instruction: "Releia as frases que você escreveu com alguém da família e marque em qual contexto a palavra usada tinha sentido científico/técnico:", items: ["frase 1", "frase 2", "nenhuma", "as duas"] },
      ],
    },
    {
      theme: "Explorando recursos gráfico-textuais em materiais lidos",
      exercises: [
        { kind: "draw", instruction: "Procure em casa uma embalagem, revista ou encarte. Observe os recursos gráficos usados (negrito, cores, tamanhos de letra) e desenhe uma cópia simplificada, reproduzindo esses recursos.", note: "Pode ser embalagem de alimento, caixa de remédio, encarte de mercado." },
        { kind: "lines", instruction: "Explique por que a embalagem ou revista que você escolheu usa esses recursos gráficos (negrito, cor, tamanho da letra):", lines: 4 },
        { kind: "options", instruction: "Quando um texto usa letras maiúsculas em uma palavra inteira (por exemplo, PROMOÇÃO), qual é o efeito mais comum?", options: ["Dar destaque e chamar atenção", "Indicar erro de digitação", "Diminuir a importância da palavra", "Nenhum efeito"] },
        { kind: "word-select", instruction: "Releia a embalagem ou revista que você escolheu em casa e marque os recursos gráficos que ela usa:", items: ["negrito", "cores diferentes", "tamanhos de letra variados", "itálico", "imagens", "nenhum recurso"] },
      ],
    },
    {
      theme: "Conhecendo as variedades linguísticas da língua portuguesa",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém mais velho da sua família contar uma palavra ou expressão que ele(a) usava quando criança, que hoje é pouco usada ou é diferente da forma como você fala. Escreva a palavra/expressão e o que ela significa:", lines: 4 },
        { kind: "options", instruction: "As variedades linguísticas influenciadas por povos indígenas, africanos e europeus mostram que a língua portuguesa do Brasil é:", options: ["Resultado de uma rica mistura cultural", "Uma língua sem nenhuma influência externa", "Idêntica ao português de Portugal em tudo", "Uma invenção recente sem história"] },
        { kind: "fill-blank", instruction: "Complete contando sobre a conversa que você teve em casa:", items: ["A pessoa que entrevistei foi __________.", "A palavra ou expressão que ela me ensinou foi __________, que significa __________."] },
        { kind: "word-select", instruction: "Marque os motivos pelos quais é importante conhecer as variedades linguísticas do português:", items: ["compreender a diversidade cultural do Brasil", "respeitar diferentes formas de falar", "achar que só existe uma forma certa de falar", "valorizar a história dos diferentes povos"] },
      ],
    },
    {
      theme: "Valorizando as variedades linguísticas e combatendo o preconceito linguístico",
      exercises: [
        { kind: "lines", instruction: "Converse com alguém da sua família sobre alguma vez em que ela ouviu ou percebeu alguém sendo tratado com preconceito por causa do jeito de falar. Escreva o que essa pessoa contou (sem usar nomes, se preferir):", lines: 5 },
        { kind: "options", instruction: "Se um colega faz piada do sotaque de outro colega vindo de outra região, o que é mais adequado fazer?", options: ["Explicar que isso é preconceito linguístico e pedir respeito", "Rir também da piada", "Ignorar completamente a situação", "Concordar que existe um jeito 'errado' de falar"] },
        { kind: "fill-blank", instruction: "Complete com base na conversa que teve em casa:", items: ["A situação que a pessoa da minha família me contou foi __________.", "O que eu aprendi com essa conversa foi __________."] },
        { kind: "word-select", instruction: "Marque as situações em que a linguagem mais formal costuma ser mais adequada, sem que isso signifique que a linguagem informal esteja 'errada':", items: ["uma entrevista de emprego", "uma conversa com os amigos", "um discurso oficial", "uma mensagem de texto para um amigo", "uma redação escolar formal"] },
      ],
    },
    {
      theme: "Analisando o papel dos artigos e adjetivos na caracterização dos nomes",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa descrever um objeto especial que guarda em casa (uma foto, um enfeite, uma lembrança). Escreva a descrição usando artigos e pelo menos três adjetivos:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete com adjetivos que caracterizem cada substantivo:", items: ["A comida __________ e __________ estava deliciosa.", "O dia estava __________ e __________."] },
        { kind: "options", instruction: "Na frase 'O gato preguiçoso dormiu a tarde toda', qual palavra caracteriza o substantivo 'gato'?", options: ["preguiçoso", "dormiu", "tarde", "toda"] },
        { kind: "word-select", instruction: "Releia a descrição que você escreveu sobre o objeto de alguém da família e marque os artigos que você usou:", items: ["o", "a", "os", "as", "um", "uma"] },
      ],
    },
    {
      theme: "Concordância nominal entre artigos, adjetivos e substantivos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa descrever três objetos ou lugares da casa (por exemplo: 'a cozinha organizada', 'os quartos arrumados'). Escreva as frases dessa pessoa, conferindo se a concordância nominal está correta:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete fazendo a concordância nominal correta:", items: ["Os alunos __________ (aplicado) fizeram __________ (todo) as tarefas.", "A professora explicou as regras __________ (novo) da escola."] },
        { kind: "options", instruction: "Qual frase apresenta ERRO de concordância nominal?", options: ["Os livro interessante estão na estante.", "Os livros interessantes estão na estante.", "As flores bonitas enfeitam a mesa.", "O carro vermelho está na garagem."] },
        { kind: "word-select", instruction: "Releia as frases que alguém da sua casa disse e marque se a concordância nominal estava correta em cada uma:", items: ["frase 1 correta", "frase 2 correta", "frase 3 correta", "havia erro em alguma frase"] },
      ],
    },
    {
      theme: "Efeitos de sentido dos modos, tempos e formas nominais dos verbos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa dar três instruções ou conselhos (por exemplo, sobre organizar o quarto). Escreva as frases dessa pessoa e identifique se os verbos estão no modo imperativo:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete com o verbo na forma nominal indicada:", items: ["__________ (brincar - gerúndio) no parque, as crianças se divertiam.", "__________ (estudar - infinitivo) é essencial para aprender."] },
        { kind: "options", instruction: "Qual é o efeito de sentido de usar o modo subjuntivo em 'Espero que você venha à festa'?", options: ["Expressa desejo ou possibilidade, não certeza", "Expressa uma ordem direta", "Expressa um fato certo do passado", "Não tem nenhum efeito de sentido"] },
        { kind: "word-select", instruction: "Releia as instruções que alguém da família te deu e marque quais verbos estavam no modo imperativo:", items: ["verbo 1", "verbo 2", "verbo 3", "nenhum estava no imperativo"] },
      ],
    },
    {
      theme: "Identificando a sílaba tônica das palavras em textos conhecidos",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa falar cinco palavras em voz alta. Escreva as palavras separadas em sílabas e indique qual é a sílaba tônica de cada uma:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete identificando a posição da sílaba tônica:", items: ["Em 'relógio', a sílaba tônica é a __________ (primeira/do meio/última).", "Em 'abacaxi', a sílaba tônica é a __________ (primeira/do meio/última)."] },
        { kind: "options", instruction: "Ao ler um texto em voz alta para alguém da família, por que é importante pronunciar corretamente a sílaba tônica das palavras?", options: ["Para que a leitura fique clara e compreensível", "Não tem nenhuma importância", "Só importa na escrita, nunca na fala", "Para deixar a leitura mais lenta"] },
        { kind: "word-select", instruction: "Marque as palavras ditas por alguém da sua casa que têm a sílaba tônica na PENÚLTIMA sílaba (paroxítonas):", items: ["mesa", "cadeira", "café", "janela", "jacaré", "computador"] },
      ],
    },
    {
      theme: "Relacionando acentos gráficos à tonicidade e à pronúncia",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ler em voz alta as palavras 'avó', 'avô', 'ovo' e 'novo', prestando atenção ao som aberto ou fechado. Escreva o que você percebeu sobre a pronúncia de cada uma:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete com acento agudo ou circunflexo, conforme o som da palavra:", items: ["avó (irmã do pai/mãe da mãe/pai, som aberto) — já está com acento agudo, confirme: av__.", "você (pronome de tratamento, som fechado) — já está com acento agudo? corrija se necessário: voc__."] },
        { kind: "options", instruction: "O acento agudo indica, em geral, um som:", options: ["Aberto", "Fechado", "Nasal", "Silencioso"] },
        { kind: "word-select", instruction: "Releia as palavras que alguém da família leu em voz alta e marque quais tinham som ABERTO na vogal tônica:", items: ["avó", "avô", "novo (adjetivo)", "novo (verbo renovar)", "café", "você"] },
      ],
    },
    {
      theme: "Praticando a acentuação de palavras proparoxítonas",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa dizer uma palavra proparoxítona do dia a dia (por exemplo: 'xícara', 'último', 'próximo'). Escreva a palavra e uma frase com ela:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete as palavras proparoxítonas comuns no dia a dia:", items: ["x__cara (usada para tomar café)", "__ltimo (que vem depois de todos os outros)"] },
        { kind: "options", instruction: "Qual é a regra geral de acentuação das palavras proparoxítonas?", options: ["Todas são acentuadas, sem exceção", "Só são acentuadas se terminarem em vogal", "Nunca são acentuadas", "Depende do estado onde a pessoa mora"] },
        { kind: "word-select", instruction: "Releia a palavra que alguém da sua casa disse e marque se ela é proparoxítona:", items: ["sim, é proparoxítona", "não, é paroxítona", "não, é oxítona", "não sei classificar"] },
      ],
    },
    {
      theme: "Escrevendo palavras regulares contextuais (nasalidade, R/RR, O/U)",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ditar cinco palavras com R ou RR (por exemplo: rato, carro, careta, honra). Escreva as palavras e confira se usou R ou RR corretamente:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete com O ou U, conforme o uso mais comum na palavra:", items: ["b__neca (brinquedo)", "cost__me (hábito)", "an__ncio (propaganda)"] },
        { kind: "options", instruction: "Quando usamos RR em vez de R?", options: ["Quando o som forte do R aparece entre duas vogais", "No início de qualquer palavra", "Depois de consoante, sempre", "Nunca se usa RR em português"] },
        { kind: "word-select", instruction: "Releia as palavras que alguém da sua casa ditou e marque as que usam RR (som forte entre vogais):", items: ["palavra 1", "palavra 2", "palavra 3", "nenhuma tinha RR"] },
      ],
    },
    {
      theme: "Comparando palavras derivadas ligadas a categorias gramaticais",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa citar três palavras terminadas em ANÇA ou ÊNCIA. Escreva as palavras e o verbo relacionado a cada uma:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete com substantivos derivados de verbos terminados em ISAR:", items: ["Do verbo 'analisar' deriva 'anál__se'.", "Do verbo 'pesquisar' deriva 'pesqu__sa'."] },
        { kind: "options", instruction: "Saber que substantivos abstratos costumam terminar em ANÇA ou ÊNCIA ajuda a:", options: ["Escrever corretamente palavras novas por analogia", "Decorar cada palavra separadamente sem lógica", "Ignorar a ortografia", "Confundir mais o estudante"] },
        { kind: "word-select", instruction: "Releia as palavras citadas por alguém da sua casa e marque as que terminam em ÊNCIA:", items: ["palavra 1", "palavra 2", "palavra 3", "nenhuma"] },
      ],
    },
    {
      theme: "Escrevendo substantivos e adjetivos com terminações regulares",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa citar três adjetivos que indicam o lugar de origem de uma pessoa (por exemplo: paulista, carioca, francês, japonesa). Escreva as palavras em frases:", lines: 4 },
        { kind: "fill-blank", instruction: "Complete os substantivos derivados de adjetivos terminados em EZA:", items: ["Do adjetivo 'belo' deriva o substantivo 'bel__za'.", "Do adjetivo 'triste' deriva o substantivo 'trist__za'."] },
        { kind: "options", instruction: "Verbos terminados em ISSE (como 'quisesse', 'fizesse') pertencem a qual tempo e modo verbal?", options: ["Pretérito imperfeito do subjuntivo", "Presente do indicativo", "Futuro do indicativo", "Imperativo afirmativo"] },
        { kind: "word-select", instruction: "Releia os adjetivos de origem citados por alguém da sua casa e marque os que terminam em ÊS ou ESA:", items: ["palavra 1", "palavra 2", "palavra 3", "nenhuma"] },
      ],
    },
    {
      theme: "Escrevendo palavras irregulares com X e SC",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ditar cinco palavras com SC (por exemplo: nascer, piscina, crescer, científico, descer). Escreva as palavras e confira a grafia depois:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete com SC, S, SS ou Ç, conforme a grafia correta:", items: ["na__er (vir ao mundo)", "cre__er (ficar maior)", "pi__ina (lugar para nadar)"] },
        { kind: "options", instruction: "Como é possível memorizar melhor as palavras irregulares com X e SC?", options: ["Anotando e revisando uma lista pessoal dessas palavras", "Evitando escrever essas palavras", "Decorando todas de uma vez sem anotar", "Não é possível memorizar, apenas adivinhar"] },
        { kind: "word-select", instruction: "Releia as palavras com SC ditadas por alguém da sua casa e marque as que você escreveu corretamente:", items: ["palavra 1", "palavra 2", "palavra 3", "palavra 4", "palavra 5"] },
      ],
    },
    {
      theme: "Dividindo silabicamente palavras compostas no final da linha",
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa citar três palavras compostas com hífen (por exemplo: guarda-sol, couve-flor, segunda-feira). Escreva cada palavra e mostre como ela ficaria dividida no final de uma linha, repetindo o hífen:", lines: 5 },
        { kind: "fill-blank", instruction: "Complete a divisão silábica no final da linha, repetindo o hífen:", items: ["couve-flor → couve-/ __________", "segunda-feira → segunda-/ __________"] },
        { kind: "options", instruction: "Se uma palavra composta SEM hífen (como 'passatempo') precisar ser dividida no final da linha, o que se faz?", options: ["Divide-se normalmente pela sílaba, sem repetir nenhum sinal extra", "Sempre se acrescenta um hífen novo", "Nunca se pode dividir essa palavra", "Divide-se apenas pela letra inicial"] },
        { kind: "word-select", instruction: "Releia as palavras compostas citadas por alguém da sua casa e marque as que têm hífen:", items: ["palavra 1", "palavra 2", "palavra 3", "nenhuma"] },
      ],
    },
  ],
};
