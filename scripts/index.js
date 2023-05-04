// Define o array com os caminhos para as imagens de fundo
const fundo = [
    "url('../assets/img/corte2.jpg')",
    "url('../assets/img/corte3.jpg')",
    "url('../assets/img/corte4.jpg')",
    "url('../assets/img/corte5.jpg')",
    "url('../assets/img/corte1.jpg')"
];

const detalhes = [
    "../assets/img/detalhe1.png",
    "../assets/img/detalhe2.png",
    "../assets/img/detalhe3.png",
    "../assets/img/detalhe4.png",
    "../assets/img/detalhe5.png"
];

// Define a variável de índice para rastrear qual imagem de fundo deve ser usada
let indice = 0;
let indice2 = 1;

// Define a função para alternar a imagem de fundo do elemento
function proximaImagemDeFundo() {
  // Seleciona a próxima imagem de fundo no array
  // Obtém o elemento que terá a imagem de fundo alterada
  const elemento = document.getElementById("fundo");
  const novaImagemDeFundo = fundo[indice];
  // Define a nova imagem de fundo no elemento
  elemento.style.backgroundImage = novaImagemDeFundo;
  // Incrementa o índice para apontar para a próxima imagem de fundo no array
  indice = (indice + 1) % fundo.length;
    // Seleciona a próxima imagem de fundo no array
  // Obtém o elemento que terá a imagem de fundo alterada
  const elemento2 = document.getElementById("foto");
  const novaImagemDeFrente = detalhes[indice];
  // Define a nova imagem de fundo no elemento
  elemento2.src = novaImagemDeFrente;
  // Incrementa o índice para apontar para a próxima imagem de fundo no array
  indice2 = (indice2 + 1) % detalhes.length;

}

function anteriorImagemDeFundo() {
    // Obtém o elemento que terá a imagem de fundo alterada
    const elemento = document.getElementById("fundo");
    // Obtém a imagem de fundo anterior no array
    indice = (indice - 1 < 0) ? fundo.length - 1 : indice - 1;
    const novaImagemDeFundo = fundo[indice];
    // Define a nova imagem de fundo no elemento
    elemento.style.backgroundImage = novaImagemDeFundo;
    // Obtém o elemento que terá a imagem da frente alterada
    const elemento2 = document.getElementById("foto");
    // Obtém a imagem da frente anterior no array
    indice2 = (indice2 - 1 < 0) ? detalhes.length - 1 : indice2 - 1;
    const novaImagemDeFrente = detalhes[indice2];
    // Define a nova imagem da frente no elemento
    elemento2.src = novaImagemDeFrente;

  }