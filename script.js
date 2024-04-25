// Adicionando o header via JS

// Seleciona o elemento <header> existente
const header = document.querySelector("header");

// Criando o elemento <nav>
const nav = document.createElement("nav");

// Criando o elemento <div> com a classe "logo"
const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");

// Criando o elemento <a> dentro da div "logo"
const logoLink = document.createElement("a");

// Adicionando os spans ao link da logo
const span1 = document.createElement("span");
span1.textContent = "JH";
logoLink.appendChild(span1);

const span2 = document.createElement("span");
span2.textContent = "Developer";
logoLink.appendChild(span2);

// Adicionando o link da logo à div "logo"
logoDiv.appendChild(logoLink);

// Criando o elemento <h5> dentro da div "logo"
const h5 = document.createElement("h5");
h5.textContent = "Programação Full-Stack";
logoDiv.appendChild(h5);

// Adicionando a div "logo" ao <nav>
nav.appendChild(logoDiv);

// Criando o elemento <div> com o id "botao"
const botaoDiv = document.createElement("div");
botaoDiv.id = "botao";

// Criando a imagem dentro da div "botao"
const img = document.createElement("img");
img.classList.add("button");
img.src = "images/icon-menu.png";
img.alt = "";
botaoDiv.appendChild(img);

// Adicionando a div "botao" ao <nav>
nav.appendChild(botaoDiv);

// Criando o elemento <div> com o id "menu"
const menuDiv = document.createElement("div");
menuDiv.id = "menu";

// Criando os links dentro da div "menu"
const links = ["Home", "Sobre Mim", "Serviços", "Cases", "Contato"];
links.forEach((linkText) => {
  const link = document.createElement("a");
  link.href = "#"; // Altere isso para os URLs apropriados
  link.textContent = linkText;
  menuDiv.appendChild(link);
});

// Adicionando a div "menu" ao <nav>
nav.appendChild(menuDiv);

// Adicionando o <nav> ao <header>
header.appendChild(nav);

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

// // Adicionando o footer via JS

// Criando os elementos do footer
const footer = document.createElement("footer");

// Criando o contêiner interno
const footerContainer = document.createElement("div");
footerContainer.classList.add("footer"); // Adicionando classe para estilização

// Criando logo
const logo = document.createElement("a");
logo.classList.add("logo-footer");
logo.href = ""; // Definir href se necessário

// Criando spans separados para JH e Developer
const spanJH = document.createElement("span");
spanJH.classList.add("logo-footer");
spanJH.innerText = "JH";

const spanDeveloper = document.createElement("span");
spanDeveloper.classList.add("logo-footer");
spanDeveloper.innerText = "Developer";

// Adicionando spans ao âncora do logo
logo.appendChild(spanJH);
logo.appendChild(spanDeveloper);

// Criando seção de direitos reservados
const reserved = document.createElement("div");
reserved.classList.add("reserved");
const reservedText = document.createElement("p");
reservedText.innerText = "© 2024 JHDeveloper. Todos os direitos reservados.";
reserved.appendChild(reservedText);

// Criando contêiner de links sociais
const link = document.createElement("div");
link.classList.add("links-footer");

// Criando link do Linkedin
const linkedinLink = document.createElement("a");
linkedinLink.href = "https://www.linkedin.com/in/jhonatan-silva-834773292";
const linkedinImg = document.createElement("img");
linkedinImg.src = "./images/linkedin.png";
linkedinImg.alt = "LinkedIn";
linkedinLink.appendChild(linkedinImg);

// Criando link do Github
const githubLink = document.createElement("a");
githubLink.href = "https://github.com/JhonatanSilva90";
const githubImg = document.createElement("img");
githubImg.src = "./images/github.png";
githubImg.alt = "GitHub";
githubLink.appendChild(githubImg);

// Adicionando elementos aos seus contêineres
link.appendChild(linkedinLink);
link.appendChild(githubLink);
footerContainer.appendChild(logo);
footerContainer.appendChild(reserved);
footerContainer.appendChild(link);

// Adicionando contêiner ao footer
footer.appendChild(footerContainer);

// Adicionando footer ao corpo
document.body.appendChild(footer);
