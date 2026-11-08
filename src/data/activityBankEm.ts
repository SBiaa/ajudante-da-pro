// Banco de atividades do Ensino Médio — folhas no estilo ENEM/SARESP (questões objetivas com
// texto-base e alternativas A–E, mais uma questão aberta). Fica à parte do banco principal
// (src/data/activityBank.ts) e é juntado a ele em activitiesFor (src/lib/activityPicker.ts).
//
// Cada `theme` bate exatamente com uma entrada de src/data/themeBankEstado1SerieEm.ts.
// Cobre os 48 temas da 1ª série (24 de Matemática, 24 de Biologia), em ordem de bimestre.
// Questões originais (não copiadas de provas). `answer` é o índice da alternativa correta
// (0 = A) e só aparece no gabarito do professor.

import { OwnSubject } from "@/types/plano";
import { ActivityEntry } from "@/types/activity";

export const EM_ACTIVITY_BANK: Partial<Record<OwnSubject, ActivityEntry[]>> = {
  matematica: [
    {
      theme: "IDH e inflação: como esses índices são calculados",
      exercises: [
        {
          kind: "multiple-choice",
          context:
            "O IDH varia de 0 a 1 e é classificado em faixas: muito alto (0,800 ou mais), alto (de 0,700 a 0,799), médio (de 0,600 a 0,699) e baixo (abaixo de 0,600).",
          instruction: "Um município com IDH igual a 0,748 é classificado como de desenvolvimento humano",
          options: ["muito alto.", "alto.", "médio.", "baixo.", "muito baixo."],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction:
            "Uma cesta de produtos custava R$ 500,00 em janeiro e passou a custar R$ 525,00 em dezembro. A inflação dessa cesta no período foi de",
          options: ["2,5%.", "5%.", "25%.", "0,5%.", "10%."],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction:
            "Em um ano, o salário de uma pessoa teve reajuste de 4%, enquanto a inflação foi de 6%. Sobre o poder de compra dessa pessoa, pode-se afirmar que ele",
          options: ["aumentou 2%.", "aumentou 10%.", "ficou igual.", "diminuiu.", "dobrou."],
          answer: 3,
        },
        {
          kind: "lines",
          instruction:
            "Escolha um dos índices estudados (IDH ou inflação) e explique uma limitação desse número para descrever a realidade de uma cidade.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Porcentagens no dia a dia: taxas, índices e coeficientes",
      exercises: [
        {
          kind: "multiple-choice",
          instruction:
            "Um produto de R$ 200,00 teve um aumento de 10% e, um mês depois, um desconto de 10% sobre o novo preço. O preço final do produto é",
          options: ["R$ 200,00.", "R$ 198,00.", "R$ 202,00.", "R$ 180,00.", "R$ 220,00."],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction:
            "Uma cidade de 80 000 habitantes registrou 1 200 nascimentos em um ano. A taxa de natalidade dessa cidade, em nascimentos por mil habitantes, é de",
          options: ["1,5.", "12.", "15.", "150.", "66,7."],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction:
            "Em uma pesquisa com 250 pessoas em idade de trabalhar, 60 estavam desempregadas. A taxa de desemprego nessa amostra é de",
          options: ["6%.", "16%.", "24%.", "25%.", "60%."],
          answer: 2,
        },
        {
          kind: "lines",
          instruction:
            "Explique por que um aumento de 10% seguido de um desconto de 10% não faz o preço voltar ao valor original.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Velocidade média e densidade: grandezas que são razões",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Um ônibus percorre 180 km em 2 h 30 min. A velocidade média desse ônibus é de",
          options: ["60 km/h.", "75 km/h.", "90 km/h.", "72 km/h.", "450 km/h."],
          answer: 3,
        },
        {
          kind: "multiple-choice",
          instruction: "Um carro está a 72 km/h. Essa velocidade, em metros por segundo, equivale a",
          options: ["7,2 m/s.", "20 m/s.", "25 m/s.", "259,2 m/s.", "2 m/s."],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction:
            "Um município tem 45 000 habitantes e área de 300 km². A densidade demográfica desse município é de",
          options: ["15 hab/km².", "1 500 hab/km².", "150 hab/km².", "13 500 hab/km².", "0,15 hab/km²."],
          answer: 2,
        },
        {
          kind: "lines",
          instruction:
            "Um bloco de 200 g ocupa um volume de 250 cm³. Calcule sua densidade em g/cm³ e diga se ele boia na água (densidade 1 g/cm³). Mostre o cálculo.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Potência e consumo de energia elétrica em casa (kWh)",
      exercises: [
        {
          kind: "multiple-choice",
          instruction:
            "Um chuveiro de 5 500 W fica ligado 30 minutos por dia. Em 30 dias, o consumo de energia desse chuveiro é de",
          options: ["82,5 kWh.", "165 kWh.", "2,75 kWh.", "82 500 kWh.", "8,25 kWh."],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction:
            "Se a tarifa de energia é de R$ 0,80 por kWh, o custo mensal de um chuveiro que consome 82,5 kWh por mês é de",
          options: ["R$ 2,20.", "R$ 33,00.", "R$ 66,00.", "R$ 82,50.", "R$ 132,00."],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction:
            "Uma lâmpada LED de 9 W substitui uma incandescente de 60 W e fica ligada 5 horas por dia. A economia de energia em 30 dias é de",
          options: ["1,53 kWh.", "76,5 kWh.", "0,255 kWh.", "7,65 kWh.", "9 kWh."],
          answer: 3,
        },
        {
          kind: "lines",
          instruction:
            "Escolha dois aparelhos da sua casa, estime a potência e o tempo de uso diário de cada um e calcule o consumo mensal em kWh.",
          lines: 6,
        },
      ],
    },
    {
      theme: "Pesquisa amostral na escola: tabela de frequências e histograma",
      exercises: [
        {
          kind: "multiple-choice",
          instruction:
            "Uma escola tem 1 200 alunos e quer estimar o tempo médio de deslocamento até a escola. A forma mais adequada de escolher a amostra é",
          options: [
            "entrevistar apenas os alunos de uma sala.",
            "entrevistar os primeiros 50 alunos que chegam.",
            "sortear alunos de todas as turmas e séries.",
            "entrevistar só os alunos que moram perto.",
            "entrevistar os amigos de quem faz a pesquisa.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          context:
            "Tempo de deslocamento de 40 alunos (em minutos):\n0 ⊢ 10: 8 alunos · 10 ⊢ 20: 14 alunos · 20 ⊢ 30: 10 alunos · 30 ⊢ 40: 6 alunos · 40 ⊢ 50: 2 alunos",
          instruction: "De acordo com a tabela, a frequência relativa da classe 10 ⊢ 20 é de",
          options: ["14%.", "35%.", "25%.", "40%.", "28%."],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context:
            "Tempo de deslocamento de 40 alunos (em minutos):\n0 ⊢ 10: 8 alunos · 10 ⊢ 20: 14 alunos · 20 ⊢ 30: 10 alunos · 30 ⊢ 40: 6 alunos · 40 ⊢ 50: 2 alunos",
          instruction: "Segundo a mesma tabela, quantos alunos levam 30 minutos ou mais para chegar à escola?",
          options: ["2.", "6.", "16.", "8.", "18."],
          answer: 3,
        },
        {
          kind: "lines",
          instruction:
            "Com os dados da tabela, descreva como ficaria o histograma: o que vai em cada eixo e qual classe teria a barra mais alta.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Média, moda, mediana e desvio padrão com dados da turma",
      exercises: [
        {
          kind: "multiple-choice",
          context: "Notas de sete alunos em uma prova: 5, 6, 6, 7, 8, 9 e 15 (prova com questão bônus).",
          instruction: "A média aritmética dessas notas é",
          options: ["6.", "7.", "8.", "9.", "15."],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          context: "Notas de sete alunos em uma prova: 5, 6, 6, 7, 8, 9 e 15 (prova com questão bônus).",
          instruction: "A mediana dessas notas é",
          options: ["6.", "7.", "8.", "7,5.", "9."],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "Notas de sete alunos em uma prova: 5, 6, 6, 7, 8, 9 e 15 (prova com questão bônus).",
          instruction: "Considerando a nota 15, a medida que melhor representa o desempenho típico do grupo é",
          options: [
            "a média, porque usa todos os valores.",
            "a moda, porque é sempre a maior.",
            "o desvio padrão, porque é um tipo de média.",
            "a mediana, porque é menos afetada pelo valor extremo.",
            "nenhuma delas, pois os dados são poucos.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction:
            "Duas turmas tiveram média 7 na mesma prova. Na turma A, o desvio padrão foi 0,5; na turma B, 2,5. Explique o que essa diferença indica sobre as notas das turmas.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Ladrilhamento do plano com polígonos regulares",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "O ângulo interno de um hexágono regular mede",
          options: ["60°.", "90°.", "108°.", "120°.", "135°."],
          answer: 3,
        },
        {
          kind: "multiple-choice",
          instruction: "Qual destes polígonos regulares NÃO consegue ladrilhar o plano usando apenas peças iguais a ele?",
          options: [
            "Triângulo equilátero.",
            "Quadrado.",
            "Pentágono regular.",
            "Hexágono regular.",
            "Todos conseguem ladrilhar o plano.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          context: "Em um piso, octógonos regulares (ângulo interno de 135°) e quadrados se encontram em cada vértice, sem falhas nem sobreposições.",
          instruction: "Quantos octógonos e quantos quadrados se encontram em cada vértice desse piso?",
          options: [
            "1 octógono e 2 quadrados.",
            "2 octógonos e 1 quadrado.",
            "2 octógonos e 2 quadrados.",
            "3 octógonos e 1 quadrado.",
            "1 octógono e 3 quadrados.",
          ],
          answer: 1,
        },
        {
          kind: "lines",
          instruction:
            "Explique por que o pentágono regular não ladrilha o plano sozinho, usando a medida do seu ângulo interno.",
          lines: 4,
        },
      ],
    },
    // ---- 2º ao 4º bimestre ----
    {
      theme: "Lendo gráficos de funções em notícias e na ciência",
      exercises: [
        {
          kind: "multiple-choice",
          context: "Temperatura de uma cidade ao longo de um dia: 6h → 14 °C; 10h → 20 °C; 14h → 26 °C; 18h → 22 °C; 22h → 16 °C.",
          instruction: "Em qual intervalo de horários a temperatura só aumentou?",
          options: [
            "Das 6h às 14h.",
            "Das 14h às 22h.",
            "Das 10h às 18h.",
            "Das 18h às 22h.",
            "Em nenhum intervalo.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          context: "Temperatura de uma cidade ao longo de um dia: 6h → 14 °C; 10h → 20 °C; 14h → 26 °C; 18h → 22 °C; 22h → 16 °C.",
          instruction: "A taxa média de variação da temperatura entre 6h e 10h foi de",
          options: [
            "6 °C/h.",
            "1,5 °C/h.",
            "3 °C/h.",
            "0,67 °C/h.",
            "20 °C/h.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "Um gráfico de barras compara o preço da gasolina em dois meses (R$ 5,80 e R$ 6,00), mas o eixo vertical começa em R$ 5,70. Visualmente, a segunda barra parece três vezes maior que a primeira.",
          instruction: "O aumento real do preço foi de, aproximadamente,",
          options: [
            "300%.",
            "200%.",
            "34%.",
            "3,4%.",
            "20%.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Descreva, com suas palavras, o que acontece com a temperatura da cidade ao longo do dia, citando o horário de temperatura máxima.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Reta de tendência: relação entre duas variáveis",
      exercises: [
        {
          kind: "multiple-choice",
          context: "Em um diagrama de dispersão com a altura (eixo x) e a envergadura (eixo y) dos alunos, os pontos ficam próximos de uma reta crescente.",
          instruction: "Esse padrão indica que",
          options: [
            "não há relação entre as duas medidas.",
            "quanto maior a altura, maior tende a ser a envergadura.",
            "quanto maior a altura, menor a envergadura.",
            "a envergadura é sempre igual à altura.",
            "os dados foram medidos errado.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "A reta de tendência y = 0,9x + 20 relaciona as horas de estudo por semana (x) e a nota em uma avaliação (y, de 0 a 100).",
          instruction: "Pela reta, a nota estimada para quem estuda 30 horas é",
          options: [
            "27.",
            "50.",
            "570.",
            "47.",
            "29.",
          ],
          answer: 3,
        },
        {
          kind: "multiple-choice",
          context: "A reta de tendência y = 0,9x + 20 relaciona as horas de estudo por semana (x) e a nota em uma avaliação (y, de 0 a 100).",
          instruction: "Nessa reta, o coeficiente 0,9 significa que",
          options: [
            "a nota inicial é 0,9.",
            "a nota máxima possível é 90.",
            "cada hora a mais de estudo aumenta a nota em cerca de 0,9 ponto.",
            "a nota diminui 0,9 ponto por hora.",
            "o coeficiente não tem significado.",
          ],
          answer: 2,
        },
        {
          kind: "lines",
          instruction: "A reta y = 0,9x + 20 pode ser usada para prever a nota de quem estuda 200 horas por semana? Justifique.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Da tabela à fórmula: reconhecendo a função afim",
      exercises: [
        {
          kind: "multiple-choice",
          context: "Uma corrida de táxi custa R$ 5,00 de bandeirada mais R$ 3,00 por quilômetro rodado.",
          instruction: "A lei da função que dá o preço P da corrida em função da distância x, em km, é",
          options: [
            "P = 5x + 3.",
            "P = 3x + 5.",
            "P = 8x.",
            "P = 3x.",
            "P = 5x.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "Uma corrida de táxi custa R$ 5,00 de bandeirada mais R$ 3,00 por quilômetro rodado.",
          instruction: "Com essa tarifa, uma corrida de 12 km custa",
          options: [
            "R$ 36,00.",
            "R$ 65,00.",
            "R$ 41,00.",
            "R$ 96,00.",
            "R$ 44,00.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          context: "Tabela: x = 1, 2, 3, 4 → y = 2, 5, 10, 17.",
          instruction: "Essa tabela NÃO representa uma função afim porque",
          options: [
            "os valores de y são pares.",
            "as diferenças entre valores consecutivos de y não são constantes.",
            "x começa em 1.",
            "y é crescente.",
            "há apenas quatro pares de valores.",
          ],
          answer: 1,
        },
        {
          kind: "lines",
          instruction: "Um plano de celular cobra R$ 30,00 fixos mais R$ 0,50 por minuto excedente. Escreva a lei da função e calcule o valor da conta com 40 minutos excedentes.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Gráfico da função afim: coeficiente angular e linear",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "O gráfico de f(x) = −2x + 6 corta o eixo y no ponto",
          options: [
            "(0, −2).",
            "(0, 6).",
            "(6, 0).",
            "(3, 0).",
            "(0, 3).",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "A raiz (zero) da função f(x) = −2x + 6 é",
          options: [
            "−3.",
            "6.",
            "3.",
            "−2.",
            "2.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "Sobre a função f(x) = −2x + 6, é correto afirmar que ela é",
          options: [
            "crescente, pois 6 é positivo.",
            "constante.",
            "crescente, pois −2 é menor que 6.",
            "decrescente, pois o coeficiente linear é positivo.",
            "decrescente, pois o coeficiente angular é negativo.",
          ],
          answer: 4,
        },
        {
          kind: "lines",
          instruction: "Esboce o gráfico de f(x) = 2x − 4 indicando os pontos em que ele corta os eixos x e y.",
          lines: 6,
        },
      ],
    },
    {
      theme: "Proporcional ou não? Função linear x função afim",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Qual destas situações é de proporcionalidade direta (função linear)?",
          options: [
            "Corrida de táxi com bandeirada.",
            "Salário fixo mais comissão por venda.",
            "Conta de água com taxa mínima.",
            "Preço de x quilos de arroz a R$ 6,00 o quilo.",
            "Plano de celular com mensalidade fixa.",
          ],
          answer: 3,
        },
        {
          kind: "multiple-choice",
          instruction: "O gráfico de uma função linear f(x) = ax, com a ≠ 0, sempre",
          options: [
            "é paralelo ao eixo x.",
            "passa pela origem (0, 0).",
            "corta o eixo y no ponto (0, a).",
            "é uma parábola.",
            "deixa de passar pela origem.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "Tabela: x = 1, 2, 3, 4 → y = 7, 9, 11, 13.",
          instruction: "A relação entre x e y nessa tabela é",
          options: [
            "afim e não proporcional, pois y = 2x + 5.",
            "linear, pois y dobra quando x dobra.",
            "proporcional, com y = 7x.",
            "constante.",
            "quadrática.",
          ],
          answer: 0,
        },
        {
          kind: "lines",
          instruction: "Dê um exemplo do dia a dia de uma situação proporcional e outro de uma não proporcional, explicando a diferença entre elas.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Progressão aritmética como função afim",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Na progressão aritmética (4, 7, 10, 13, ...), o 20º termo é",
          options: [
            "60.",
            "64.",
            "61.",
            "57.",
            "80.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "A soma dos 20 primeiros termos da PA (4, 7, 10, 13, ...) é",
          options: [
            "650.",
            "1 300.",
            "610.",
            "1 220.",
            "325.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "O termo geral da PA (4, 7, 10, 13, ...) pode ser escrito como a função",
          options: [
            "aₙ = 4n + 3.",
            "aₙ = 3n + 4.",
            "aₙ = n + 3.",
            "aₙ = 3n + 1.",
            "aₙ = 7n.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Uma pessoa guarda R$ 50,00 no primeiro mês e, a cada mês, R$ 10,00 a mais que no mês anterior. Quanto terá guardado ao final de 12 meses? Mostre o cálculo.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Áreas de quadrados e a função y = ax²",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Se o lado de um quadrado triplica, a sua área fica multiplicada por",
          options: [
            "3.",
            "6.",
            "9.",
            "27.",
            "1,5.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          context: "A distância de frenagem d (em metros) de um carro pode ser modelada por d = 0,006v², com a velocidade v em km/h.",
          instruction: "A 100 km/h, a distância de frenagem estimada é de",
          options: [
            "6 m.",
            "60 m.",
            "600 m.",
            "0,6 m.",
            "36 m.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "A distância de frenagem d (em metros) de um carro pode ser modelada por d = 0,006v², com a velocidade v em km/h.",
          instruction: "Se a velocidade do carro dobra, a distância de frenagem",
          options: [
            "dobra.",
            "triplica.",
            "não muda.",
            "cai pela metade.",
            "quadruplica.",
          ],
          answer: 4,
        },
        {
          kind: "lines",
          instruction: "Monte uma tabela com a área de quadrados de lado 1 a 5 e explique por que os pontos no gráfico (lado × área) não formam uma reta.",
          lines: 6,
        },
      ],
    },
    {
      theme: "Parábola: concavidade, raízes e vértice",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "As raízes da função f(x) = x² − 6x + 8 são",
          options: [
            "2 e 4.",
            "−2 e −4.",
            "1 e 8.",
            "3 e −1.",
            "0 e 6.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "O vértice da parábola de f(x) = x² − 6x + 8 é o ponto",
          options: [
            "(3, 8).",
            "(3, −1).",
            "(−3, 1).",
            "(6, 8).",
            "(2, 4).",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "Sobre a função g(x) = −x² + 4, é correto afirmar que",
          options: [
            "tem concavidade para cima e valor mínimo 4.",
            "não tem raízes reais.",
            "tem concavidade para baixo e valor máximo 4.",
            "tem vértice no ponto (4, 0).",
            "é uma função afim.",
          ],
          answer: 2,
        },
        {
          kind: "lines",
          instruction: "Esboce o gráfico de f(x) = x² − 6x + 8 marcando as raízes, o vértice e o ponto em que ele corta o eixo y.",
          lines: 6,
        },
      ],
    },
    {
      theme: "Modelagem com funções: custo, receita e lucro",
      exercises: [
        {
          kind: "multiple-choice",
          context: "Uma cantina tem custo fixo de R$ 300,00 por mês e gasta R$ 2,00 para produzir cada salgado, que é vendido a R$ 5,00.",
          instruction: "A função lucro L, em função da quantidade x de salgados vendidos no mês, é",
          options: [
            "L = 3x − 300.",
            "L = 5x − 300.",
            "L = 7x − 300.",
            "L = 3x + 300.",
            "L = 2x − 300.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          context: "Uma cantina tem custo fixo de R$ 300,00 por mês e gasta R$ 2,00 para produzir cada salgado, que é vendido a R$ 5,00.",
          instruction: "Para não ter prejuízo no mês, a cantina precisa vender no mínimo",
          options: [
            "60 salgados.",
            "100 salgados.",
            "150 salgados.",
            "300 salgados.",
            "43 salgados.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "Uma cantina tem custo fixo de R$ 300,00 por mês e gasta R$ 2,00 para produzir cada salgado, que é vendido a R$ 5,00.",
          instruction: "Vendendo 250 salgados no mês, o lucro da cantina é de",
          options: [
            "R$ 750,00.",
            "R$ 1 250,00.",
            "R$ 950,00.",
            "R$ 450,00.",
            "R$ 150,00.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Se o preço do salgado subir para R$ 6,00 (mantidos os custos), quantos salgados a cantina precisa vender para não ter prejuízo? Mostre o cálculo.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Problemas de máximo e mínimo com função quadrática",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Com 20 m de cerca, o retângulo de maior área possível tem lados de",
          options: [
            "2 m e 8 m.",
            "4 m e 6 m.",
            "5 m e 5 m.",
            "1 m e 9 m.",
            "10 m e 10 m.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "A maior área que pode ser cercada com 20 m de cerca, em forma de retângulo, é de",
          options: [
            "20 m².",
            "24 m².",
            "100 m².",
            "25 m².",
            "16 m².",
          ],
          answer: 3,
        },
        {
          kind: "multiple-choice",
          context: "Uma bola é lançada para cima e sua altura, em metros, é dada por h(t) = −5t² + 20t, com t em segundos.",
          instruction: "A altura máxima atingida pela bola é de",
          options: [
            "10 m.",
            "20 m.",
            "15 m.",
            "40 m.",
            "4 m.",
          ],
          answer: 1,
        },
        {
          kind: "lines",
          instruction: "Na situação da bola, h(t) = −5t² + 20t, em que instante ela volta ao chão? Explique como você descobriu.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Funções definidas por partes: conta de luz e Imposto de Renda",
      exercises: [
        {
          kind: "multiple-choice",
          context: "Tarifa de água (simplificada): até 10 m³, valor fixo de R$ 40,00; de 10 a 20 m³, mais R$ 6,00 por m³ acima de 10; acima de 20 m³, mais R$ 10,00 por m³ acima de 20 (somado às faixas anteriores).",
          instruction: "Uma casa que consumiu 8 m³ no mês paga",
          options: [
            "R$ 40,00.",
            "R$ 48,00.",
            "R$ 32,00.",
            "R$ 80,00.",
            "R$ 0,00.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          context: "Tarifa de água (simplificada): até 10 m³, valor fixo de R$ 40,00; de 10 a 20 m³, mais R$ 6,00 por m³ acima de 10; acima de 20 m³, mais R$ 10,00 por m³ acima de 20 (somado às faixas anteriores).",
          instruction: "Uma casa que consumiu 15 m³ no mês paga",
          options: [
            "R$ 90,00.",
            "R$ 70,00.",
            "R$ 130,00.",
            "R$ 100,00.",
            "R$ 75,00.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "Tarifa de água (simplificada): até 10 m³, valor fixo de R$ 40,00; de 10 a 20 m³, mais R$ 6,00 por m³ acima de 10; acima de 20 m³, mais R$ 10,00 por m³ acima de 20 (somado às faixas anteriores).",
          instruction: "Uma casa que consumiu 25 m³ no mês paga",
          options: [
            "R$ 250,00.",
            "R$ 160,00.",
            "R$ 150,00.",
            "R$ 190,00.",
            "R$ 100,00.",
          ],
          answer: 2,
        },
        {
          kind: "lines",
          instruction: "Escreva a função do valor V da conta para consumos x entre 10 e 20 m³ e explique por que o gráfico muda de inclinação em 10 m³.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Crescimento exponencial: populações e juros",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Uma cultura começa com 500 bactérias e dobra a cada hora. Após 5 horas, haverá",
          options: [
            "2 500 bactérias.",
            "5 000 bactérias.",
            "16 000 bactérias.",
            "32 000 bactérias.",
            "10 000 bactérias.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "A lei que dá o número N de bactérias após t horas, começando com 500 e dobrando a cada hora, é",
          options: [
            "N = 500 + 2t.",
            "N = 500 · 2ᵗ.",
            "N = 2 · 500ᵗ.",
            "N = 500t².",
            "N = 1 000t.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "R$ 1 000,00 aplicados a 10% ao mês, com juros compostos, valem após 2 meses",
          options: [
            "R$ 1 200,00.",
            "R$ 1 100,00.",
            "R$ 2 000,00.",
            "R$ 1 020,00.",
            "R$ 1 210,00.",
          ],
          answer: 4,
        },
        {
          kind: "lines",
          instruction: "Compare o crescimento linear (somar sempre o mesmo valor) com o exponencial (multiplicar sempre pelo mesmo fator) usando um exemplo com números.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Progressão geométrica e função exponencial",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Na progressão geométrica (3, 6, 12, 24, ...), o 8º termo é",
          options: [
            "48.",
            "192.",
            "384.",
            "768.",
            "24.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "A soma dos 6 primeiros termos da PG (3, 6, 12, 24, ...) é",
          options: [
            "96.",
            "189.",
            "192.",
            "381.",
            "63.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "Os termos da PG (3, 6, 12, 24, ...) podem ser descritos pela função",
          options: [
            "aₙ = 3n.",
            "aₙ = 2 · 3ⁿ.",
            "aₙ = 3 + 2n.",
            "aₙ = 3 · 2ⁿ⁻¹.",
            "aₙ = 6n.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Uma notícia falsa é enviada a 3 pessoas no 1º dia, e cada pessoa que a recebe repassa para outras 3 no dia seguinte. Quantas pessoas novas recebem a notícia no 5º dia? Mostre o raciocínio.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Logaritmo: o que é e para que serve",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "O valor de log₂ 32 é",
          options: [
            "16.",
            "5.",
            "6.",
            "64.",
            "4.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "O valor de log 1 000 (logaritmo na base 10) é",
          options: [
            "3.",
            "10.",
            "100.",
            "30.",
            "4.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Uma população de bactérias dobra a cada hora. O tempo necessário para ela ficar 1 024 vezes maior é de",
          options: [
            "512 h.",
            "20 h.",
            "10 h.",
            "1 024 h.",
            "8 h.",
          ],
          answer: 2,
        },
        {
          kind: "lines",
          instruction: "Use as propriedades dos logaritmos para calcular log 2 + log 5 e explique o resultado.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Escala Richter e pH: escalas logarítmicas",
      exercises: [
        {
          kind: "multiple-choice",
          context: "Na escala Richter, cada aumento de 1 unidade de magnitude corresponde a uma amplitude de onda 10 vezes maior.",
          instruction: "Um terremoto de magnitude 7, em relação a um de magnitude 5, tem amplitude",
          options: [
            "2 vezes maior.",
            "10 vezes maior.",
            "20 vezes maior.",
            "100 vezes maior.",
            "1 000 vezes maior.",
          ],
          answer: 3,
        },
        {
          kind: "multiple-choice",
          context: "O pH de uma solução é dado por pH = −log [H⁺], com a concentração de íons H⁺ em mol/L.",
          instruction: "Uma solução com [H⁺] = 10⁻³ mol/L tem pH igual a",
          options: [
            "−3.",
            "3.",
            "0,001.",
            "7.",
            "11.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "O pH de uma solução é dado por pH = −log [H⁺], com a concentração de íons H⁺ em mol/L.",
          instruction: "Uma solução de pH 3, em relação a uma de pH 5, é",
          options: [
            "100 vezes mais ácida.",
            "2 vezes mais ácida.",
            "2 vezes menos ácida.",
            "100 vezes menos ácida.",
            "igualmente ácida.",
          ],
          answer: 0,
        },
        {
          kind: "lines",
          instruction: "Explique por que escalas como a Richter e a de pH usam logaritmos em vez de números comuns.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Gráficos das funções exponencial e logarítmica",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "O domínio da função f(x) = log₂ x é",
          options: [
            "o conjunto de todos os números reais.",
            "x > 0.",
            "x ≥ 0.",
            "x < 0.",
            "x ≠ 1.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "O gráfico de f(x) = 2ˣ corta o eixo y no ponto",
          options: [
            "(0, 0).",
            "(0, 2).",
            "(0, 1).",
            "(1, 0).",
            "o gráfico não corta o eixo y.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "Os gráficos de y = 2ˣ e de y = log₂ x são simétricos em relação à reta",
          options: [
            "y = 0.",
            "x = 0.",
            "y = −x.",
            "y = x.",
            "y = 1.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "A função f(x) = (1/2)ˣ é crescente ou decrescente? Justifique calculando f(x) para alguns valores de x.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Juros simples x juros compostos em planilha",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "R$ 2 000,00 aplicados a juros simples de 5% ao mês, durante 6 meses, rendem de juros",
          options: [
            "R$ 600,00.",
            "R$ 680,19.",
            "R$ 100,00.",
            "R$ 2 600,00.",
            "R$ 60,00.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "R$ 2 000,00 aplicados a 5% ao mês, em juros compostos, resultam após 2 meses em um montante de",
          options: [
            "R$ 2 200,00.",
            "R$ 2 205,00.",
            "R$ 2 100,00.",
            "R$ 2 010,00.",
            "R$ 4 410,00.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "Em um gráfico do montante ao longo do tempo, os juros simples e os juros compostos aparecem, respectivamente, como",
          options: [
            "curva exponencial e reta.",
            "duas retas.",
            "reta e curva exponencial.",
            "duas parábolas.",
            "reta e parábola.",
          ],
          answer: 2,
        },
        {
          kind: "lines",
          instruction: "Um produto custa R$ 1 000,00 à vista ou 10 parcelas de R$ 120,00. Calcule quanto se paga a mais no parcelado e diga qual opção você escolheria e por quê.",
          lines: 5,
        },
      ],
    },
  ],

  biologia: [
    {
      theme: "Cadeias e teias alimentares: o fluxo de energia",
      exercises: [
        {
          kind: "multiple-choice",
          context: "Considere a cadeia alimentar: capim → gafanhoto → sapo → cobra → gavião.",
          instruction: "Nessa cadeia, o sapo ocupa o nível trófico de",
          options: ["produtor.", "consumidor primário.", "consumidor secundário.", "consumidor terciário.", "decompositor."],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction:
            "Os produtores de um ecossistema fixam 10 000 kcal de energia, e cerca de 10% passa de um nível trófico para o seguinte. A energia que chega aos consumidores secundários é de, aproximadamente,",
          options: ["10 000 kcal.", "1 000 kcal.", "10 kcal.", "100 kcal.", "1 kcal."],
          answer: 3,
        },
        {
          kind: "multiple-choice",
          instruction: "As cadeias alimentares raramente têm mais de cinco níveis tróficos porque",
          options: [
            "os predadores de topo são raros por acaso.",
            "a energia disponível diminui a cada nível.",
            "a matéria fica toda retida nos produtores.",
            "os decompositores consomem os herbívoros.",
            "a energia aumenta e se acumula no topo.",
          ],
          answer: 1,
        },
        {
          kind: "lines",
          instruction:
            "Monte uma teia alimentar com pelo menos cinco seres vivos de um ecossistema brasileiro e explique o que aconteceria se um deles fosse retirado.",
          lines: 6,
        },
      ],
    },
    {
      theme: "Fotossíntese e respiração celular: o metabolismo energético",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Na fotossíntese, os reagentes utilizados pela planta são",
          options: [
            "glicose e oxigênio.",
            "gás carbônico e água.",
            "oxigênio e água.",
            "glicose e gás carbônico.",
            "nitrogênio e água.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "A respiração celular aeróbica ocorre",
          options: [
            "apenas nos animais.",
            "apenas nas plantas, durante a noite.",
            "em praticamente todos os seres vivos aeróbicos, inclusive nas plantas.",
            "apenas nos fungos.",
            "apenas no interior dos cloroplastos.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          context:
            "Um ramo de elódea (planta aquática) foi colocado sob uma lâmpada, a diferentes distâncias, e as bolhas liberadas foram contadas por minuto: 10 cm → 30 bolhas; 20 cm → 18 bolhas; 40 cm → 7 bolhas.",
          instruction: "O resultado desse experimento indica que",
          options: [
            "a luz não interfere na fotossíntese.",
            "as bolhas liberadas são de gás carbônico.",
            "quanto mais longe a lâmpada, maior a produção de oxigênio.",
            "quanto maior a intensidade luminosa, maior a taxa de fotossíntese.",
            "a planta só respira no escuro.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Explique por que a fotossíntese e a respiração celular são processos complementares no ecossistema.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Equilíbrio dos ecossistemas e o que o ameaça",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "O javali, introduzido no Brasil, espalhou-se rapidamente pelo território principalmente porque",
          options: [
            "tem muitos predadores naturais no país.",
            "é uma espécie exótica com poucos predadores naturais e alta taxa de reprodução.",
            "alimenta-se apenas de capim.",
            "é uma espécie nativa da Mata Atlântica.",
            "não se reproduz em ambientes tropicais.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "A pesca excessiva de uma espécie de peixe predador tende a provocar, em um primeiro momento,",
          options: [
            "a diminuição das populações de suas presas.",
            "nenhuma alteração na teia alimentar.",
            "a extinção imediata dos produtores.",
            "o aumento da população do próprio predador.",
            "o aumento das populações de suas presas.",
          ],
          answer: 4,
        },
        {
          kind: "multiple-choice",
          instruction: "Qual destas medidas contribui para reduzir o desmatamento de forma sustentável?",
          options: [
            "Ampliar a pecuária extensiva sobre áreas de mata.",
            "Substituir a mata nativa por monocultura.",
            "Usar queimadas para limpar o solo.",
            "Incentivar o manejo florestal certificado e a fiscalização.",
            "Aumentar a caça de espécies nativas.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction:
            "Escolha uma ameaça ao equilíbrio de um ecossistema da sua região e proponha uma solução, dizendo quem precisaria agir.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Investigação científica: da pergunta à hipótese",
      exercises: [
        {
          kind: "multiple-choice",
          context:
            "Um grupo quer saber se a luz interfere na germinação do feijão. Coloca 10 sementes em copos no claro e 10 em copos no escuro, com a mesma quantidade de água e na mesma temperatura.",
          instruction: "Nesse experimento, a variável testada (independente) é",
          options: [
            "a temperatura.",
            "a quantidade de água.",
            "a presença de luz.",
            "o tipo de semente.",
            "o número de sementes germinadas.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          context:
            "Um grupo quer saber se a luz interfere na germinação do feijão. Coloca 10 sementes em copos no claro e 10 em copos no escuro, com a mesma quantidade de água e na mesma temperatura.",
          instruction: "O número de sementes germinadas, contado ao final do experimento, é",
          options: [
            "uma variável controlada.",
            "a variável dependente (a resposta medida).",
            "a hipótese do grupo.",
            "a conclusão do experimento.",
            "o grupo controle.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "Qual das frases abaixo é uma hipótese?",
          options: [
            "O feijão é uma planta leguminosa.",
            "Quantas sementes germinaram em cada copo?",
            "Os copos foram regados todos os dias.",
            "Sementes de feijão germinam igualmente no claro e no escuro, pois usam a reserva de nutrientes da própria semente.",
            "O experimento durou uma semana.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Por que é importante manter a água e a temperatura iguais nos dois grupos? Explique.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Divulgação científica em ecologia: fontes confiáveis",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Qual destes sinais indica que um texto de divulgação científica é mais confiável?",
          options: [
            "Não informa o autor nem a data de publicação.",
            "Cita estudos e instituições que podem ser consultados.",
            "Usa apenas linguagem alarmista.",
            "Pede que o leitor compartilhe antes de terminar a leitura.",
            "Apresenta um gráfico sem indicar a fonte dos dados.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context:
            "Uma postagem afirma: “Estudo prova que plantar uma árvore compensa toda a poluição de um carro por um ano.” A postagem não traz link nem nome do estudo.",
          instruction: "Diante dessa postagem, a atitude mais adequada é",
          options: [
            "compartilhar, pois o tema é importante.",
            "acreditar, pois o texto fala de ciência.",
            "desconsiderar qualquer informação sobre árvores.",
            "pedir ao autor que apague a postagem.",
            "procurar o estudo original e outras fontes antes de aceitar a informação.",
          ],
          answer: 4,
        },
        {
          kind: "multiple-choice",
          context:
            "Um gráfico de barras mostra a área desmatada de 2019 a 2023, mas o eixo vertical começa em 9 000 km² em vez de começar em zero.",
          instruction: "Esse recurso no gráfico pode",
          options: [
            "tornar o gráfico mais preciso.",
            "exagerar visualmente as diferenças entre os anos.",
            "esconder o título do gráfico.",
            "alterar os valores reais dos dados.",
            "deixar o gráfico sem escala.",
          ],
          answer: 1,
        },
        {
          kind: "lines",
          instruction: "Escreva três critérios que você usaria para decidir se uma notícia sobre meio ambiente é confiável.",
          lines: 5,
        },
      ],
    },
    // ---- 2º ao 4º bimestre ----
    {
      theme: "Efeito estufa: essencial para a vida",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Sem o efeito estufa natural, a temperatura média da superfície da Terra seria",
          options: [
            "muito mais alta que a atual.",
            "muito mais baixa, em torno de −18 °C.",
            "igual à atual.",
            "igual à de Vênus.",
            "impossível de estimar.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "São exemplos de gases de efeito estufa",
          options: [
            "oxigênio e nitrogênio.",
            "hélio e argônio.",
            "gás carbônico, metano e vapor d'água.",
            "hidrogênio e oxigênio.",
            "nitrogênio e argônio.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          context: "Dois potes iguais, cada um com um termômetro, ficaram 30 minutos ao sol; um deles estava coberto com filme plástico. Ao final, o pote coberto marcava 38 °C e o aberto, 31 °C.",
          instruction: "O pote coberto funciona como um modelo de",
          options: [
            "camada de ozônio.",
            "chuva ácida.",
            "inversão térmica.",
            "efeito estufa, pois retém parte do calor.",
            "ciclo da água.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Diferencie o efeito estufa natural da intensificação do efeito estufa causada pelas atividades humanas.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Aquecimento global e mudanças climáticas",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "No Brasil, a maior parte das emissões de gases de efeito estufa está ligada",
          options: [
            "à mudança de uso do solo, como o desmatamento.",
            "às usinas nucleares.",
            "ao uso de geladeiras.",
            "às erupções vulcânicas.",
            "à respiração humana.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Uma consequência esperada do aquecimento global é",
          options: [
            "a diminuição do nível do mar.",
            "o aumento de eventos climáticos extremos, como secas e enchentes.",
            "o fim das estações do ano.",
            "o resfriamento dos oceanos.",
            "o aumento das geleiras.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "Gráficos mostram que, desde 1960, a concentração de CO₂ na atmosfera e a temperatura média global aumentaram juntas.",
          instruction: "Uma interpretação adequada desses gráficos é que",
          options: [
            "o CO₂ não tem relação com a temperatura.",
            "a temperatura sobe por acaso, sem explicação.",
            "gráficos não servem para estudar o clima.",
            "o aquecimento é apenas natural.",
            "os dados são compatíveis com a intensificação do efeito estufa pelas emissões humanas.",
          ],
          answer: 4,
        },
        {
          kind: "lines",
          instruction: "Proponha uma ação individual, uma da escola e uma do governo para reduzir as emissões de gases de efeito estufa.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Energia da biomassa e dos resíduos",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "O biogás produzido em biodigestores é formado principalmente por",
          options: [
            "metano.",
            "oxigênio.",
            "nitrogênio.",
            "hélio.",
            "ozônio.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Uma vantagem de usar o bagaço de cana para gerar energia é",
          options: [
            "não emitir nenhum gás na queima.",
            "não depender de plantação.",
            "aproveitar um resíduo da produção de açúcar e etanol.",
            "ser inesgotável mesmo sem manejo.",
            "substituir totalmente a energia solar.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "Um problema associado à produção de biocombustíveis em grande escala é",
          options: [
            "a falta de tecnologia em todo o mundo.",
            "a possível competição com áreas de alimentos e o risco de desmatamento.",
            "a emissão de radiação.",
            "a ausência de resíduos.",
            "a impossibilidade de transporte.",
          ],
          answer: 1,
        },
        {
          kind: "lines",
          instruction: "Explique como restos de comida podem virar energia em um biodigestor.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Poluição sonora e visual: efeitos no corpo",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "A exposição prolongada a sons muito intensos pode lesar principalmente",
          options: [
            "apenas o tímpano.",
            "o cristalino.",
            "as cordas vocais.",
            "as células ciliadas da cóclea, no ouvido interno.",
            "a pele.",
          ],
          answer: 3,
        },
        {
          kind: "multiple-choice",
          context: "Medições feitas com aplicativo: sala de aula, 65 dB; refeitório, 82 dB; perto de uma obra, 95 dB. Considere que exposições longas acima de 85 dB trazem risco à audição.",
          instruction: "O local que exige proteção auditiva para quem fica nele por muito tempo é",
          options: [
            "a sala de aula.",
            "o refeitório.",
            "a área perto da obra.",
            "todos os locais medidos.",
            "nenhum dos locais.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "Além de prejudicar a audição, a poluição sonora pode causar",
          options: [
            "aumento do estresse e distúrbios do sono.",
            "melhora da concentração.",
            "crescimento ósseo.",
            "melhora da visão.",
            "nenhum outro efeito.",
          ],
          answer: 0,
        },
        {
          kind: "lines",
          instruction: "Cite duas medidas para reduzir a poluição sonora na escola e explique como cada uma ajuda.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Ciclos do carbono, do nitrogênio e da água",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "No ciclo do carbono, o processo que retira CO₂ da atmosfera é",
          options: [
            "a respiração.",
            "a fotossíntese.",
            "a combustão.",
            "a decomposição.",
            "a evaporação.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "As bactérias fixadoras que vivem nas raízes de leguminosas transformam",
          options: [
            "o nitrogênio do ar (N₂) em compostos que as plantas conseguem aproveitar.",
            "o CO₂ em glicose.",
            "a água em vapor.",
            "o oxigênio em ozônio.",
            "o nitrato do solo em N₂.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "No ciclo da água, a transpiração das plantas contribui para",
          options: [
            "produzir CO₂.",
            "fixar nitrogênio.",
            "formar rochas.",
            "diminuir as chuvas.",
            "retirar água do solo e devolvê-la à atmosfera como vapor.",
          ],
          answer: 4,
        },
        {
          kind: "lines",
          instruction: "Escolha um dos três ciclos e explique um ponto em que o ser humano interfere nele.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Poluição do solo, da água e do ar",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "A eutrofização de rios e represas acontece quando",
          options: [
            "a temperatura da água cai.",
            "o número de peixes aumenta.",
            "o excesso de nutrientes favorece a proliferação de algas e reduz o oxigênio da água.",
            "a água fica mais limpa.",
            "a chuva ácida neutraliza a água.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "A chuva ácida está relacionada principalmente à emissão de",
          options: [
            "óxidos de enxofre e de nitrogênio.",
            "oxigênio.",
            "vapor d'água.",
            "hélio.",
            "nitrogênio gasoso (N₂).",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Um índice de qualidade do ar “ruim” em um dia frio e sem vento pode ser explicado pela",
          options: [
            "fotossíntese.",
            "inversão térmica, que dificulta a dispersão dos poluentes.",
            "chuva forte.",
            "formação de ozônio na estratosfera.",
            "evaporação.",
          ],
          answer: 1,
        },
        {
          kind: "lines",
          instruction: "Cite uma fonte de poluição do solo, da água ou do ar perto da escola e uma consequência dela para a saúde.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Agrotóxicos, fertilizantes e pecuária nos ciclos biogeoquímicos",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "O uso excessivo de fertilizantes nitrogenados pode",
          options: [
            "aumentar o oxigênio dos rios.",
            "eliminar as algas.",
            "não ter nenhum efeito no ambiente.",
            "levar nitrogênio aos rios e contribuir para a eutrofização.",
            "reduzir sempre a produtividade.",
          ],
          answer: 3,
        },
        {
          kind: "multiple-choice",
          instruction: "A pecuária bovina interfere no ciclo do carbono principalmente",
          options: [
            "pela emissão de metano na digestão dos animais e pelo desmatamento para pastagens.",
            "pela produção de oxigênio.",
            "pela fixação de nitrogênio.",
            "pela absorção de CO₂ pelos animais.",
            "pela evaporação.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Uma prática que reduz o uso de agrotóxicos é",
          options: [
            "a monocultura em larga escala.",
            "o controle biológico de pragas.",
            "a aplicação preventiva semanal.",
            "a queimada.",
            "o desmatamento.",
          ],
          answer: 1,
        },
        {
          kind: "lines",
          instruction: "Apresente um argumento de um produtor rural e um de um ambientalista sobre o uso de agrotóxicos e proponha um ponto de acordo entre eles.",
          lines: 6,
        },
      ],
    },
    {
      theme: "Reflorestamento e ações para reduzir os impactos",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "O reflorestamento contribui para o ciclo do carbono porque",
          options: [
            "as árvores liberam apenas CO₂.",
            "impede a ocorrência de chuvas.",
            "as árvores retiram CO₂ da atmosfera pela fotossíntese e o armazenam em sua biomassa.",
            "aumenta a erosão do solo.",
            "diminui a biodiversidade.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "A mata ciliar, ao redor de rios e nascentes, é importante porque",
          options: [
            "protege o solo da erosão e ajuda a manter a qualidade da água.",
            "aumenta o assoreamento.",
            "impede os animais de beber água.",
            "seca as nascentes.",
            "não tem função ambiental.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Na compostagem, os restos de alimentos são transformados em adubo pela ação de",
          options: [
            "produtores.",
            "raios ultravioleta.",
            "consumidores de topo.",
            "decompositores, como fungos e bactérias.",
            "pássaros.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Planeje uma ação ambiental para a escola: escreva o objetivo, duas etapas e como medir se deu certo.",
          lines: 6,
        },
      ],
    },
    {
      theme: "Teorias sobre a origem da vida",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "O experimento de Redi, com frascos de carne abertos e cobertos com gaze, mostrou que",
          options: [
            "as larvas surgem de ovos depositados por moscas.",
            "a carne gera vida espontaneamente.",
            "a gaze produz larvas.",
            "a vida surge do ar.",
            "as moscas nascem da gaze.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "O experimento de Pasteur com frascos de “pescoço de cisne” contribuiu para",
          options: [
            "provar a panspermia.",
            "refutar a geração espontânea (abiogênese).",
            "mostrar que micróbios surgem do caldo.",
            "comprovar a evolução química.",
            "confirmar as ideias de Lamarck.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "O experimento de Miller e Urey (1953) mostrou que",
          options: [
            "a vida veio de outro planeta.",
            "bactérias surgem da água.",
            "o DNA surge espontaneamente.",
            "em condições que simulavam a Terra primitiva, podem se formar aminoácidos a partir de moléculas simples.",
            "a atmosfera primitiva tinha muito oxigênio.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Compare a geração espontânea com a biogênese e diga qual evidência ajudou a ciência a decidir entre elas.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Teorias evolutivas: de Lamarck a Darwin",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Segundo Lamarck, as girafas têm pescoço longo porque",
          options: [
            "seus ancestrais esticavam o pescoço e essa característica adquirida passava aos filhos.",
            "nasciam com variações e a seleção natural favoreceu as de pescoço longo.",
            "sofreram mutações dirigidas pelo ambiente.",
            "foram criadas assim.",
            "o acaso agiu sem nenhuma herança.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Para Darwin, a evolução ocorre principalmente por",
          options: [
            "uso e desuso.",
            "vontade dos organismos.",
            "seleção natural atuando sobre variações já existentes na população.",
            "herança de caracteres adquiridos.",
            "criação independente das espécies.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "O aumento de bactérias resistentes a antibióticos é explicado pela teoria atual porque",
          options: [
            "o antibiótico ensina as bactérias a resistir.",
            "as bactérias decidem mudar.",
            "o antibiótico cria resistência em todas as bactérias.",
            "não há explicação científica.",
            "bactérias que já eram resistentes sobrevivem ao antibiótico e se reproduzem.",
          ],
          answer: 4,
        },
        {
          kind: "lines",
          instruction: "Usando o exemplo das bactérias resistentes, explique por que não se deve interromper um tratamento com antibiótico antes do tempo indicado.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Níveis de organização: células procariontes e eucariontes",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "A principal diferença entre células procariontes e eucariontes é que as procariontes",
          options: [
            "não têm membrana plasmática.",
            "não têm núcleo delimitado por membrana.",
            "não têm material genético.",
            "são sempre maiores.",
            "existem apenas nas plantas.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "Estruturas presentes em células vegetais e ausentes em células animais são",
          options: [
            "parede celular e cloroplastos.",
            "núcleo e mitocôndrias.",
            "membrana plasmática e citoplasma.",
            "ribossomos.",
            "DNA.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "A sequência correta dos níveis de organização, do mais simples ao mais complexo, é",
          options: [
            "tecido → célula → órgão → sistema → organismo.",
            "órgão → tecido → célula → sistema → organismo.",
            "célula → tecido → órgão → sistema → organismo.",
            "organismo → sistema → órgão → tecido → célula.",
            "célula → órgão → tecido → sistema → organismo.",
          ],
          answer: 2,
        },
        {
          kind: "lines",
          instruction: "Ao observar células da epiderme da cebola e da mucosa da bochecha ao microscópio, que diferenças você esperaria ver? Explique.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Metabolismo celular e obtenção de energia nos seres vivos",
      exercises: [
        {
          kind: "multiple-choice",
          context: "Em uma garrafa com água morna, açúcar e fermento biológico, um balão foi preso no gargalo e encheu depois de algum tempo.",
          instruction: "O balão enche porque as leveduras",
          options: [
            "realizam fermentação e liberam gás carbônico.",
            "produzem oxigênio pela fotossíntese.",
            "absorvem o ar da garrafa.",
            "liberam nitrogênio.",
            "fazem a água evaporar.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Comparada à respiração aeróbica, a fermentação",
          options: [
            "produz mais energia por molécula de glicose.",
            "precisa de oxigênio.",
            "ocorre apenas em animais.",
            "produz menos energia (ATP) por molécula de glicose.",
            "não utiliza glicose.",
          ],
          answer: 3,
        },
        {
          kind: "multiple-choice",
          instruction: "Seres autotróficos são aqueles que",
          options: [
            "se alimentam de outros seres vivos.",
            "produzem o próprio alimento, como plantas e algas.",
            "decompõem a matéria morta.",
            "vivem apenas no escuro.",
            "não respiram.",
          ],
          answer: 1,
        },
        {
          kind: "lines",
          instruction: "Cite dois usos humanos da fermentação e explique o papel dos microrganismos em cada um.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Fisiologia comparada: sistemas em diferentes formas de vida",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Os peixes realizam trocas gasosas principalmente por meio de",
          options: [
            "brânquias.",
            "pulmões.",
            "traqueias.",
            "pele seca.",
            "estômatos.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Os insetos levam o ar diretamente aos tecidos por meio de",
          options: [
            "brânquias.",
            "pulmões.",
            "traqueias.",
            "alvéolos.",
            "vasos sanguíneos.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "Mamíferos e aves têm circulação dupla e completa, o que significa que",
          options: [
            "o sangue passa uma única vez pelo coração.",
            "eles não têm coração.",
            "o sangue arterial e o venoso se misturam.",
            "a circulação é aberta.",
            "o sangue rico em oxigênio não se mistura com o pobre em oxigênio no coração.",
          ],
          answer: 4,
        },
        {
          kind: "lines",
          instruction: "Os anfíbios também respiram pela pele. Explique por que isso os torna dependentes de ambientes úmidos.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Dinâmica de populações: natalidade, mortalidade e expectativa de vida",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Uma população de 10 000 habitantes teve 150 nascimentos e 80 óbitos em um ano, sem migrações. A taxa de crescimento natural foi de",
          options: [
            "1,5%.",
            "7%.",
            "0,7%.",
            "2,3%.",
            "0,8%.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          context: "A pirâmide etária do Brasil de 1980 tinha a base larga; a atual tem a base mais estreita e o topo mais largo.",
          instruction: "Essa mudança indica",
          options: [
            "queda da natalidade e aumento da expectativa de vida.",
            "aumento da natalidade.",
            "diminuição da expectativa de vida.",
            "aumento da proporção de jovens.",
            "que nada mudou na população.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "A capacidade de suporte de um ambiente corresponde",
          options: [
            "ao número de espécies que vivem nele.",
            "à taxa de natalidade da população.",
            "à área total do ambiente.",
            "ao tamanho máximo de população que o ambiente consegue manter por longo tempo.",
            "ao número de predadores.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Faça uma previsão para a população brasileira daqui a 20 anos (mais jovem ou mais idosa?) e cite uma incerteza dessa previsão.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Leis de Mendel e probabilidade",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "No cruzamento Aa × Aa, a proporção esperada de descendentes com fenótipo dominante é",
          options: [
            "3/4.",
            "1/4.",
            "1/2.",
            "1.",
            "0.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "No cruzamento Aa × Aa, a probabilidade de um descendente ser aa é",
          options: [
            "3/4.",
            "1/4.",
            "1/2.",
            "1/3.",
            "0.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          context: "Em uma simulação, a turma sorteou 40 “filhos” do cruzamento Aa × Aa e obteve 27 com fenótipo dominante e 13 com fenótipo recessivo.",
          instruction: "Sobre esse resultado, é correto afirmar que",
          options: [
            "ele prova que Mendel estava errado.",
            "deveria dar exatamente 30 e 10.",
            "mostra que A não é dominante.",
            "o sorteio foi feito de forma errada.",
            "ele se aproxima do esperado (30 e 10), e a diferença se deve ao acaso.",
          ],
          answer: 4,
        },
        {
          kind: "lines",
          instruction: "Um casal heterozigoto (Aa × Aa) quer saber a probabilidade de ter dois filhos aa. Calcule e mostre o raciocínio.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Sistema ABO e fator Rh",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Uma pessoa com sangue do tipo AB tem genótipo",
          options: [
            "IᴬIᴬ.",
            "ii.",
            "IᴬIᴮ.",
            "Iᴬi.",
            "Iᴮi.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "Um casal com genótipos Iᴬi e Iᴮi pode ter filhos dos tipos sanguíneos",
          options: [
            "A, B, AB e O.",
            "apenas AB.",
            "apenas A e B.",
            "apenas O.",
            "apenas A e O.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "A pessoa considerada doadora universal de hemácias, nos sistemas ABO e Rh, tem sangue",
          options: [
            "AB positivo.",
            "A negativo.",
            "O positivo.",
            "O negativo.",
            "AB negativo.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Um casal tem filhos do tipo A e do tipo O. Que genótipos os pais podem ter? Explique.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Conceito de espécie e árvores filogenéticas",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Pelo conceito biológico, indivíduos da mesma espécie são aqueles que",
          options: [
            "são parecidos fisicamente.",
            "cruzam entre si e geram descendentes férteis.",
            "vivem no mesmo lugar.",
            "comem o mesmo alimento.",
            "têm a mesma cor.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "A mula, filha de cavalo com jumenta, é estéril. Isso indica que cavalo e jumento",
          options: [
            "são espécies diferentes.",
            "são da mesma espécie.",
            "são da mesma raça.",
            "não têm ancestral comum.",
            "não são animais.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Em uma árvore filogenética, o ponto em que dois ramos se separam (nó) representa",
          options: [
            "o ser mais evoluído do grupo.",
            "uma extinção certa.",
            "a espécie atual mais forte.",
            "nada de especial.",
            "um ancestral comum.",
          ],
          answer: 4,
        },
        {
          kind: "lines",
          instruction: "Explique por que a frase “o ser humano veio do macaco” está errada, usando a ideia de ancestral comum.",
          lines: 4,
        },
      ],
    },
    {
      theme: "Evolução humana: origem, dispersão e diversidade",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "As evidências fósseis e genéticas indicam que o Homo sapiens surgiu",
          options: [
            "na África.",
            "na Europa.",
            "nas Américas.",
            "na Ásia.",
            "na Oceania.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "A variação na cor da pele humana está associada, em grande parte, à adaptação a",
          options: [
            "uma dieta exclusiva.",
            "apenas à altitude.",
            "diferentes níveis de radiação ultravioleta.",
            "apenas ao clima frio.",
            "nenhum fator ambiental.",
          ],
          answer: 2,
        },
        {
          kind: "multiple-choice",
          instruction: "Do ponto de vista genético, a ideia de “raças humanas” biológicas",
          options: [
            "foi comprovada pela ciência.",
            "divide os humanos em espécies diferentes.",
            "vale apenas para a cor da pele.",
            "não se sustenta, pois a variação genética entre humanos é pequena e contínua.",
            "foi provada por Darwin.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Relacione a origem comum da humanidade com a importância de respeitar a diversidade étnica e cultural.",
          lines: 5,
        },
      ],
    },
    {
      theme: "Feira de ciências: comunicando resultados",
      exercises: [
        {
          kind: "multiple-choice",
          instruction: "Em um pôster científico, a seção “Resultados” deve trazer",
          options: [
            "a opinião pessoal dos autores.",
            "os dados obtidos, de preferência em gráficos ou tabelas.",
            "os agradecimentos.",
            "a pergunta da investigação.",
            "apenas fotos dos autores.",
          ],
          answer: 1,
        },
        {
          kind: "multiple-choice",
          instruction: "Ao apresentar uma investigação para alunos do 6º ano, o mais adequado é",
          options: [
            "adaptar a linguagem, explicando os termos técnicos com exemplos.",
            "usar apenas termos técnicos.",
            "ler o texto do pôster inteiro.",
            "esconder os dados.",
            "não aceitar perguntas.",
          ],
          answer: 0,
        },
        {
          kind: "multiple-choice",
          instruction: "Uma conclusão bem escrita deve",
          options: [
            "repetir a introdução.",
            "trazer dados novos que não foram medidos.",
            "afirmar certeza absoluta.",
            "responder à pergunta da investigação com base nos dados obtidos.",
            "evitar citar a hipótese.",
          ],
          answer: 3,
        },
        {
          kind: "lines",
          instruction: "Escolha uma investigação feita no ano e escreva o título e a conclusão de um pôster sobre ela.",
          lines: 5,
        },
      ],
    },
  ],
};
