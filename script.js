const points = document.getElementById("points")
const gameArea = document.getElementById("gameArea")

// Array com as perguntas e respostas (verdadeiro = true, falso = false)
const quiz = [
  {
    question:
      "Toda linguagem de programação precisa ser traduzida para linguagem de máquina para ser executada.",
    answer: true,
  },
  {
    question:
      "Linguagens de máquina são escritas em binário e interpretadas diretamente pelo ser humano.",
    answer: false,
  },
  {
    question:
      "Um interpretador traduz todo o programa de uma só vez antes da execução.",
    answer: false,
  },
  {
    question:
      "O compilador converte o código-fonte para código de máquina antes da execução.",
    answer: true,
  },
  { 
    question: "Python é uma linguagem compilada.", 
    answer: false 
  },
  {
    question: "A linguagem C é considerada uma linguagem compilada.",
    answer: true,
  },
  { 
    question: "O código objeto é gerado por interpretadores.", 
    answer: false 
  },
  {
    question: "Um compilador pode identificar erros léxicos e sintáticos.",
    answer: true,
  },
  {
    question: "Linguagens de alto nível são diretamente executadas pela CPU.",
    answer: false,
  },
  {
    question:
      "A linguagem de baixo nível está mais próxima da linguagem humana.",
    answer: false,
  },
  {
    question: "O Jupyter Notebook é uma IDE usada comumente com Python.",
    answer: true,
  },
  {
    question: "O Google Colab permite executar códigos Python na nuvem.",
    answer: true,
  },
  {
    question:
      "Um analisador léxico transforma código-fonte em árvores de decisão.",
    answer: false,
  },
  {
    question:
      "O analisador sintático verifica a estrutura gramatical do código.",
    answer: true,
  },
  {
    question:
      "O analisador semântico identifica erros que aparecem apenas em tempo de execução.",
    answer: true,
  },
  {
    question:
      "Threads são comandos que aparecem apenas em linguagens funcionais.",
    answer: false,
  },
  {
    question:
      "Python utiliza o paradigma imperativo e também o orientado a objetos.",
    answer: true,
  },
  {
    question:
      "No paradigma funcional, o estado do programa muda constantemente.",
    answer: false,
  },
  {
    question: "O paradigma lógico utiliza lógica matemática como base.",
    answer: true,
  },
  {
    question:
      "Paradigmas de programação definem a forma como os programas são estruturados.",
    answer: true,
  },
  {
    question: "A decomposição é um dos pilares do pensamento computacional.",
    answer: true,
  },
  {
    question:
      "Reconhecimento de padrões não é importante em lógica de programação.",
    answer: false,
  },
  {
    question: "Todo programa de computador é uma formalização de um algoritmo.",
    answer: true,
  },
  {
    question:
      "Compiladores são mais indicados para desenvolvimento rápido e testes.",
    answer: false,
  },
  {
    question: "O interpretador permite execução linha por linha do código.",
    answer: true,
  },
  {
    question:
      "Linguagens interpretadas não geram arquivos executáveis como .exe.",
    answer: true,
  },
  {
    question: "Linguagem Assembly é um exemplo de linguagem de alto nível.",
    answer: false,
  },
  {
    question: "A palavra-chave while em Python é um exemplo de lexema.",
    answer: true,
  },
  {
    question:
      "Os tokens são formados por palavras reservadas e símbolos da linguagem.",
    answer: true,
  },
  {
    question: "Palavras reservadas podem ser redefinidas pelo programador.",
    answer: false,
  },
  {
    question: "try e except são utilizados para tratamento de erros em Python.",
    answer: true,
  },
  {
    question: "Encapsulamento é uma prática usada na programação funcional.",
    answer: false,
  },
  {
    question: "Modularidade é um conceito importante para organizar o código.",
    answer: true,
  },
  {
    question:
      "Reutilização de código é incentivada no paradigma orientado a objetos.",
    answer: true,
  },
  { question: "JavaScript é uma linguagem compilada.", answer: false },
  {
    question:
      "Jupyter é usado apenas para escrever texto e não para executar código.",
    answer: false,
  },
  {
    question: "Colab é uma ferramenta offline usada apenas com Java.",
    answer: false,
  },
  { question: "A IDE facilita a edição e execução do código.", answer: true },
  {
    question: "for, if, def são exemplos de palavras reservadas em Python.",
    answer: true,
  },
  {
    question: "A sintaxe de Python é semelhante à de linguagens de máquina.",
    answer: false,
  },
  {
    question: "O código fonte precisa estar 100% correto para ser compilado.",
    answer: true,
  },
  {
    question:
      "A abstração ajuda a focar apenas nas partes essenciais do problema.",
    answer: true,
  },
  {
    question: "Linguagens funcionais aceitam estados e mudanças constantes.",
    answer: false,
  },
  {
    question:
      "O paradigma de banco de dados lida com manipulação de consultas.",
    answer: true,
  },
  { question: "SQL é uma linguagem imperativa.", answer: false },
  {
    question:
      "Compiladores executam o código diretamente, sem gerar arquivos intermediários.",
    answer: false,
  },
  {
    question: "Python pode ser executado por meio de Jupyter e Colab.",
    answer: true,
  },
  {
    question: "Código objeto e código fonte são exatamente a mesma coisa.",
    answer: false,
  },
  {
    question:
      "A árvore sintática é uma estrutura de dados construída na análise semântica.",
    answer: false,
  },
  {
    question: "A análise sintática cuida da ordem e agrupamento dos tokens.",
    answer: true,
  },
  {
    question: "O paradigma estruturado evita o uso de sub-rotinas.",
    answer: false,
  },
  {
    question: "O paradigma orientado a objetos trabalha com classes e objetos.",
    answer: true,
  },
  {
    question: "O paradigma lógico não é baseado em instruções, mas em regras.",
    answer: true,
  },
  {
    question:
      "Programas escritos em linguagens interpretadas não funcionam sem o interpretador.",
    answer: true,
  },
  {
    question: "Código compilado roda mais rápido que interpretado.",
    answer: true,
  },
  {
    question: "Compiladores precisam rodar em tempo de execução.",
    answer: false,
  },
  { question: "O Python é uma linguagem estaticamente tipada.", answer: false },
  {
    question: "if é um exemplo de estrutura condicional em Python.",
    answer: true,
  },
  {
    question: "print() é usado para entrada de dados em Python.",
    answer: false,
  },
  {
    question: "Python aceita múltiplos paradigmas de programação.",
    answer: true,
  },
  {
    question: "Palavras reservadas podem ser criadas pelo programador.",
    answer: false,
  },
  {
    question: "A análise semântica ocorre antes da análise sintática.",
    answer: false,
  },
  {
    question: "A abstração ajuda a ignorar detalhes desnecessários.",
    answer: true,
  },
  {
    question: "A decomposição divide um problema complexo em partes menores.",
    answer: true,
  },
  {
    question:
      "Os compiladores são mais usados quando a performance é essencial.",
    answer: true,
  },
  {
    question: "O Python não tem suporte a orientação a objetos.",
    answer: false,
  },
  {
    question: "O Java é exclusivamente uma linguagem funcional.",
    answer: false,
  },
  {
    question:
      "A memória usada por programas compilados é menor que por interpretados.",
    answer: false,
  },
  {
    question: "O Google Colab permite colaboração em tempo real.",
    answer: true,
  },
  { question: "O Jupyter salva arquivos com a extensão .py.", answer: false },
  {
    question:
      "Analisadores léxicos são necessários para qualquer linguagem de programação.",
    answer: true,
  },
  {
    question: "Palavras-chave podem ser sobrescritas por variáveis.",
    answer: false,
  },
  {
    question: "Um interpretador pode melhorar o processo de depuração.",
    answer: true,
  },
  {
    question:
      "A análise semântica pode impedir erros de lógica em tempo de execução.",
    answer: true,
  },
  {
    question: "O .exe é um exemplo de arquivo gerado por interpretadores.",
    answer: false,
  },
  {
    question: "Python permite trabalhar com variáveis sem declarar tipos.",
    answer: true,
  },
  {
    question: "Python exige ponto e vírgula ao fim de cada linha.",
    answer: false,
  },
  {
    question: "Compiladores não podem detectar erros de sintaxe.",
    answer: false,
  },
  {
    question:
      "A modularidade permite dividir o programa em partes independentes.",
    answer: true,
  },
  {
    question: "A função input() permite capturar dados do usuário em Python.",
    answer: true,
  },
  {
    question: "A abstração é desnecessária em linguagens de baixo nível.",
    answer: false,
  },
  { question: "A linguagem C++ é uma linguagem compilada.", answer: true },
  { question: "A linguagem Prolog usa o paradigma funcional.", answer: false },
  {
    question: "As linguagens imperativas não usam instruções de controle.",
    answer: false,
  },
  {
    question: "O paradigma funcional evita alterações no estado do programa.",
    answer: true,
  },
  {
    question:
      "A decomposição é usada para dividir problemas em tarefas menores.",
    answer: true,
  },
  { question: "O Python possui tipos de dados imutáveis.", answer: true },
  { question: "Operadores aritméticos são considerados tokens.", answer: true },
  { question: "A indentação é opcional em Python.", answer: false },
  {
    question: "Os erros semânticos são detectados durante a execução.",
    answer: true,
  },
  {
    question:
      "Linguagens de programação não precisam de tradutores para funcionar.",
    answer: false,
  },
  { question: "Tokens são unidades léxicas de uma linguagem.", answer: true },
  { question: "O Python usa blocos delimitados por {}.", answer: false },
  {
    question: "Variáveis em Python devem ser tipadas com int, str, etc.",
    answer: false,
  },
  {
    question: "A árvore sintática é gerada durante a análise sintática.",
    answer: true,
  },
  {
    question:
      "O analisador léxico interpreta a estrutura gramatical do código.",
    answer: false,
  },
  {
    question: "A linguagem Elm pertence ao paradigma funcional.",
    answer: true,
  },
  {
    question:
      "O paradigma orientado a objetos é baseado em métodos e atributos.",
    answer: true,
  },
  {
    question: "Em Python, o símbolo == é usado para atribuição de valor.",
    answer: false,
  },
  {
    question:
      "O paradigma lógico define programas por regras de inferência lógica.",
    answer: true,
  },
]

// Função para gerar uma lista com 50 perguntas aleatórias sem repetição
function newGame() {
  const selectedQuestions = []
  const usedIndices = new Set()

  while (selectedQuestions.length < 50) {
    const randomIndex = Math.floor(Math.random() * quiz.length)
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex)
      selectedQuestions.push({ id: randomIndex, ...quiz[randomIndex] })
    }
  }
  selectedQuestions.sort((a, b) => a.id - b.id)
  setGame(selectedQuestions)
}

// Gerar jogo
function setGame(questions) {
    points.innerHTML = 0
    gameArea.innerHTML = ""

    questions.forEach(q => {
        let questionCard = document.createElement("div")
        questionCard.className = "questionCard"
        questionCard.id = q.id

        let number = document.createElement("div")
        number.className = "number"
        number.innerHTML = q.id + 1
        questionCard.appendChild(number)

        let question = document.createElement("div")
        question.className = "question"
        question.innerHTML = q.question
        questionCard.appendChild(question)

        let answers = document.createElement("div")
        answers.className = "answers"
        let btTrue = document.createElement("button")
        btTrue.className = "buttons T"
        btTrue.innerHTML = "True"
        btTrue.addEventListener("click", () => checkAnswer(q.id, true, answers))
        let btFalse = document.createElement("button")
        btFalse.className = "buttons F"
        btFalse.innerHTML = "False"
        btFalse.addEventListener("click", () => checkAnswer(q.id, false, answers))
        answers.appendChild(btTrue)
        answers.appendChild(btFalse)
        questionCard.appendChild(answers)

        gameArea.appendChild(questionCard)
    })
}

function checkAnswer(id, answer, fild) {
    if (quiz[id].answer === answer) {
        fild.innerHTML = `<div class="result R">Acertou</div>`
        points.innerHTML++
    }
    else {
        fild.innerHTML = `<div class="result W">Errou</div>`
    }
}

const jogoAtual = newGame()

document.getElementById("btNewGame").addEventListener("click", newGame)