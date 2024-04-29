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

// Criando as TAGS "Sobre Mim", antes exibidas por HTML, agora por meio do JavaScript
// Função para criar e adicionar elementos HTML
function criarElementos() {
  // Criando os elementos
  const section = document.createElement("section");
  section.classList.add("main"); // Adicionando a classe 'main' à section
  const divSobreMim = document.createElement("div");
  divSobreMim.classList.add("sobremim");

  const h2SobreMim = document.createElement("h2");
  h2SobreMim.textContent = "Sobre Mim";

  const pSobreMim = document.createElement("p");
  pSobreMim.textContent =
    "Sou um Programador Full Stack apaixonado por transformar ideias em soluções digitais impactantes. Minha expertise abrange diversas tecnologias, desde a construção de interfaces elegantes com HTML, CSS e JavaScript até o desenvolvimento robusto de aplicações utilizando React, Python e SQL.";

  const h2Tecnologias = document.createElement("h2");
  h2Tecnologias.textContent = "Tecnologias que domino:";

  const divTecnologias = document.createElement("div");
  divTecnologias.classList.add("tecnologias");

  const imgHTML5 = criarImagem("./images/html-5.png");
  const imgCSS3 = criarImagem("./images/css-3.png");
  const imgJS = criarImagem("./images/js.png");
  imgJS.id = "imgjs";
  const imgReact = criarImagem("./images/react.png");
  const imgPython = criarImagem("./images/python.png");
  const imgSQL = criarImagem("./images/servidor-sql.png");

  const h2Abordagem = document.createElement("h2");
  h2Abordagem.textContent = "Abordagem Profissional:";

  const pAbordagem = document.createElement("p");
  pAbordagem.textContent =
    "Tenho uma abordagem centrada no cliente, sempre empenhado em superar expectativas e entregar resultados excepcionais. Acredito que a excelência técnica aliada à compreensão profunda das necessidades do cliente é a chave para o sucesso de qualquer projeto.";

  const h2Foco = document.createElement("h2");
  h2Foco.textContent = "Foco em Resultados:";

  const pFoco = document.createElement("p");
  pFoco.textContent =
    "Minha mentalidade é orientada para resultados. Busco constantemente maneiras de otimizar processos, melhorar a eficiência e criar soluções que não apenas atendam, mas excedam as metas e objetivos estabelecidos.";

  const h2Principios = document.createElement("h2");
  h2Principios.textContent = "Princípios Profissionais:";

  const pInovacao = document.createElement("p");
  pInovacao.innerHTML =
    "<strong>Inovação:</strong> Sempre em busca de novas tecnologias e abordagens para melhorar a qualidade e a eficiência do desenvolvimento.";

  const pColaboracao = document.createElement("p");
  pColaboracao.innerHTML =
    "<strong>Colaboração:</strong> Valorizo o trabalho em equipe e a troca de ideias para alcançar soluções mais sólidas.";

  const pComprometimento = document.createElement("p");
  pComprometimento.innerHTML =
    "<strong>Comprometimento:</strong> Dedicado a entregar projetos no prazo, mantendo altos padrões de qualidade.";

  // Adicionando os elementos à div .sobremim
  divTecnologias.appendChild(imgHTML5);
  divTecnologias.appendChild(imgCSS3);
  divTecnologias.appendChild(imgJS);
  divTecnologias.appendChild(imgReact);
  divTecnologias.appendChild(imgPython);
  divTecnologias.appendChild(imgSQL);

  divSobreMim.appendChild(h2SobreMim);
  divSobreMim.appendChild(pSobreMim);
  divSobreMim.appendChild(document.createElement("br"));
  divSobreMim.appendChild(h2Tecnologias);
  divSobreMim.appendChild(divTecnologias);
  divSobreMim.appendChild(document.createElement("br"));
  divSobreMim.appendChild(h2Abordagem);
  divSobreMim.appendChild(pAbordagem);
  divSobreMim.appendChild(document.createElement("br"));
  divSobreMim.appendChild(h2Foco);
  divSobreMim.appendChild(pFoco);
  divSobreMim.appendChild(document.createElement("br"));
  divSobreMim.appendChild(h2Principios);
  divSobreMim.appendChild(pInovacao);
  divSobreMim.appendChild(document.createElement("br"));
  divSobreMim.appendChild(pColaboracao);
  divSobreMim.appendChild(document.createElement("br"));
  divSobreMim.appendChild(pComprometimento);
  divSobreMim.appendChild(document.createElement("br"));

  // Adicionando div .sobremim à section
  section.appendChild(divSobreMim);

  // Adicionando a div .image-container com a imagem
  const divImageContainer = document.createElement("div");
  divImageContainer.classList.add("image-container");
  const imgJhonatan = document.createElement("img");
  imgJhonatan.id = "img-jhonatan";
  imgJhonatan.src = "./images/jhonatan.jpg";
  imgJhonatan.alt = "Imagem Jhonatan";
  imgJhonatan.classList.add("colorida");
  divImageContainer.appendChild(imgJhonatan);
  section.appendChild(divImageContainer);

  // Adicionando section como o primeiro filho da tag main
  const main = document.querySelector("main");
  main.insertBefore(section, main.firstChild);

  // Função auxiliar para criar elementos <img>
  function criarImagem(src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    return img;
  }
}

// Chamando a função para criar os elementos quando a página é carregada
window.onload = function () {
  criarElementos();
};

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

// Adicionando as informações de contatos via JavaScript
// Criação dos elementos HTML
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");

const headerH3 = document.createElement("h3");
headerH3.classList.add("header");
headerH3.textContent = "Contatos";

const buttonsContainerDiv = document.createElement("div");
buttonsContainerDiv.classList.add("buttons-container");

const emailButton = document.createElement("button");
emailButton.classList.add("email");
emailButton.innerHTML = `
  <img src="./images/envelope.png" alt="email" />
  <a href="mailto:jhonatan.dev90@gmail.com">jhonatan.dev90@gmail.com</a>
`;

const telefoneButton = document.createElement("button");
telefoneButton.classList.add("telefone");
telefoneButton.innerHTML = `
  <img src="./images/telefone.png" alt="telefone" />
  <a href="tel:+5593991737093">+55 93 99173-7093</a>
`;

const mensagemContatoDiv = document.createElement("div");
mensagemContatoDiv.classList.add("mensagem-contato");

const mensagemHeaderH3 = document.createElement("h3");
mensagemHeaderH3.textContent = "Entre em contato através do formulário abaixo:";

const form = document.createElement("form");
form.setAttribute("action", "");

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("placeholder", "Email");
emailInput.setAttribute("required", "");

const mensagemTextarea = document.createElement("textarea");
mensagemTextarea.setAttribute("name", "mensagem");
mensagemTextarea.setAttribute("id", "mensagem");
mensagemTextarea.setAttribute("placeholder", "Mensagem");
mensagemTextarea.setAttribute("required", "");

const enviarButton = document.createElement("button");
enviarButton.setAttribute("type", "submit");
enviarButton.setAttribute("id", "buttonsubmit");
enviarButton.textContent = "Enviar";

// Montagem da estrutura
containerDiv.appendChild(headerH3);

emailButton.appendChild(document.createElement("br"));
telefoneButton.appendChild(document.createElement("br"));

buttonsContainerDiv.appendChild(emailButton);
buttonsContainerDiv.appendChild(telefoneButton);

mensagemContatoDiv.appendChild(mensagemHeaderH3);
mensagemContatoDiv.appendChild(form);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(mensagemTextarea);
form.appendChild(document.createElement("br"));
form.appendChild(enviarButton);

containerDiv.appendChild(buttonsContainerDiv);
containerDiv.appendChild(mensagemContatoDiv);

// Adicionar à página
document.body.appendChild(containerDiv);

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
