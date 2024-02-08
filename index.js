const perguntas = [
    {
      pergunta: "Qual é o nome do protagonista de Kengan Ashura?",
      respostas: [
        "Kazuo Yamashita",
        "Ohma Tokita",
        "Ryuki Gaoh",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é considerado o 'Niko' de Ohma Tokita?",
      respostas: [
        "Kazuo Yamashita",
        "Yamashita Kazuo",
        "Tokita Niko",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a empresa que organiza os torneios Kengan em Kengan Ashura?",
      respostas: [
        "Yamashita Trading Co.",
        "Nogi Group",
        "Kengan Association",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o apelido de Agito Kanoh em Kengan Ashura?",
      respostas: [
        "Niko",
        "The Fang of Metsudo",
        "The Devil Lance",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o representante da empresa Nogi Group no torneio Kengan Annihilation Tournament?",
      respostas: [
        "Retsudo Katahara",
        "Kazuo Yamashita",
        "Hideki Nogi",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a posição de Ohma Tokita no início do Kengan Annihilation Tournament?",
      respostas: [
        "6ª",
        "7ª",
        "8ª",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do torneio no qual Ohma Tokita participa para representar a empresa Yamashita Trading Co.?",
      respostas: [
        "Kengan Annihilation Tournament",
        "Underground Fighting Tournament",
        "Kengan Association Tournament",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é considerado o lutador mais forte de Kengan Ashura?",
      respostas: [
        "Gensai Kuroki",
        "Tokita Niko",
        "Gaolang Wongsawat",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o estilo de luta de Ohma Tokita?",
      respostas: [
        "Niko Style",
        "Koei Style",
        "Demonsbane Style",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o mentor de Ohma Tokita em Kengan Ashura?",
      respostas: [
        "Kazuo Yamashita",
        "Tokita Niko",
        "Kiryu Setsuna",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span").textContent = corretas.size + " de " + totalDePerguntas
  
  for(const item of perguntas) {
  
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta
  
    for(let resposta of item.respostas) {
  
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      dt.querySelector("span").textContent = resposta
      dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal = document.querySelector("#acertos span").textContent = corretas.size + " de " + totalDePerguntas
      }
  
      quizItem.querySelector("dl").appendChild(dt)
    }
  
    quizItem.querySelector("dl dt").remove()
  
    quiz.appendChild(quizItem)
  
  }
  