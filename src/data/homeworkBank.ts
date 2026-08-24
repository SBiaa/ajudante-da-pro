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
      exercises: [
        { kind: "lines", instruction: "Peça para alguém da sua casa ensinar uma receita simples, como uma vitamina ou um suco. Escreva o nome da receita:", lines: 1 },
        { kind: "lines", instruction: "Escreva os ingredientes que essa pessoa usa:", lines: 3 },
        { kind: "lines", instruction: "Escreva o passo a passo da receita, na ordem certa (1º, 2º, 3º...):", lines: 4 },
        { kind: "draw", instruction: "Desenhe a receita pronta:" },
      ],
    },
    {
      theme: "Contação de histórias de diferentes culturas",
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
  ],
};
