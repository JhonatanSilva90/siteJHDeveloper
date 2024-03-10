// Inserir os dados do Portfolio:
const listaPortfolio = document.querySelector(".listaPortfolio");

const dadosPortfolio = [
  {
    name: "Nome da aplicação",
    imagem: "Imagem da aplicação",
    descricao: "Breve descrição da aplicação",
    tecnologias: ["Lista de tecnologias", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Nome da aplicação",
    imagem: "Imagem da aplicação",
    descricao: "Breve descrição da aplicação",
    tecnologias: ["Lista de tecnologias", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Nome da aplicação",
    imagem: "Imagem da aplicação",
    descricao: "Breve descrição da aplicação",
    tecnologias: ["Lista de tecnologias", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Nome da aplicação",
    imagem: "Imagem da aplicação",
    descricao: "Breve descrição da aplicação",
    tecnologias: ["Lista de tecnologias", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Nome da aplicação",
    imagem: "Imagem da aplicação",
    descricao: "Breve descrição da aplicação",
    tecnologias: ["Lista de tecnologias", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Nome da aplicação",
    imagem: "Imagem da aplicação",
    descricao: "Breve descrição da aplicação",
    tecnologias: ["Lista de tecnologias", "HTML", "CSS", "JavaScript"],
  },
];

dadosPortfolio.forEach((portfolio) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <h4>${portfolio.name}<h4>
  <img src="${portfolio.imagem}" alt="${portfolio.name}">
  <p>${portfolio.descricao}</p>
  <p>${portfolio.tecnologias.join(" | ")}</p>
  `;
  listaPortfolio.appendChild(card);
});
