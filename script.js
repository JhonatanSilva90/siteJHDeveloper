// Inserir os dados do Portfolio:
const listaPortfolio = document.querySelector(".listaPortfolio");

const dadosPortfolio = [
  {
    name: "Projeto Sorteador",
    imagem: "./images/readmeSorteador.png",
    descricao:
      "Sorteador de nomes, criado através de uma aplicação interativa e funcional, de maneira simples e eficiente. Os usuários podem inserir uma lista de nomes e obter um nome sorteado aleatoriamente.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    linkProjeto: "https://jhonatansilva90.github.io/Projeto-Sorteador/",
  },
  {
    name: "Verificador de Previsão do Tempo",
    imagem: "./images/readmeVerificadorTemperatura.png",
    descricao:
      "Projeto de verificação de temperatura, com exibição de informações de temperatura em °C, nuvens e umidade das cidades pesquisadas.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    linkProjeto:
      "https://jhonatansilva90.github.io/Verificador-de-Previs-o-do-Tempo/",
  },
  {
    name: "To Do List",
    imagem: "./images/readmeToDoList.png",
    descricao:
      "O Projeto To Do List permite ao usuário a criação de uma lista de tarefas para auxilia-lo no dia a dia. Ele oferece a possibilidade de criação e exclusão de tarrefas, definir tarefas como realizadas e limpar toda a lista de tarefa criada.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    linkProjeto: "https://jhonatansilva90.github.io/To-Do-List/",
  },
  {
    name: "Página de Criptomoedas",
    imagem: "./images/readmePaginaCriptomoedas.png",
    descricao:
      "Página web com informações sobre criptomoedas. A página exibi as informações de maneira clara, além disso, o sistema permiti o usuário fazer conversões entre os preços das moedas.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    linkProjeto: "https://jhonatansilva90.github.io/Pagina-Criptomoeda/",
  },
  {
    name: "Cronômetro",
    imagem: "./images/readmeCronometro.png",
    descricao:
      "O projeto é um cronômetro, criado através de uma aplicação interativa e funcional. Por meio de uma interface simples, os usuários podem iniciar, pausar, reiniciar e resetar o cronômetro.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    linkProjeto: "https://jhonatansilva90.github.io/Cronometro/",
  },
  {
    name: "Buscador de Endereços",
    imagem: "./images/readmeBuscadorEnderecos.png",
    descricao:
      "Integrando-se à API do ViaCEP, a aplicação oferece uma interface simples, permitindo que os usuários digitem o CEP desejado e obtenham em retorno informações detalhadas, como Rua, Bairro, Cidade e Estado.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    linkProjeto: "https://jhonatansilva90.github.io/buscarEndereco-ViaCEP/",
  },
];

dadosPortfolio.forEach((portfolio) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <h4>${portfolio.name}<h4>
  <img class="imgProjetos" src="${portfolio.imagem}" alt="${portfolio.name}">
  <p>${portfolio.descricao}</p>
  <p>${portfolio.tecnologias.join(" | ")}</p>
  `;
  // Adicionando um event listener ao card
  card.addEventListener("click", () => {
    window.open(portfolio.linkProjeto, "_blank");
  });

  listaPortfolio.appendChild(card);
});
