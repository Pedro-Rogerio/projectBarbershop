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

function proximaImagemDeFundo() {
  const elemento = document.getElementById("fundo");
  const novaImagemDeFundo = fundo[indice];
  
  setTimeout(() => {
    elemento.style.backgroundImage = novaImagemDeFundo;
  }, 500);
  
  indice = (indice + 1) % fundo.length;

  const elemento2 = document.getElementById("foto");
  const novaImagemDeFrente = detalhes[indice];
  
  // Define a opacidade da imagem para zero
  elemento2.style.opacity = 0;
  
  // Aguarda 0,2 segundos antes de alterar a imagem
  setTimeout(() => {
    elemento2.src = novaImagemDeFrente;
    
    // Define a opacidade da imagem de volta para 1
    elemento2.style.opacity = 1;
  }, 200);
  
  indice2 = (indice2 + 1) % detalhes.length;
}


function anteriorImagemDeFundo() {
  const elemento = document.getElementById("fundo");
  indice = (indice - 1 < 0) ? fundo.length - 1 : indice - 1;
  const novaImagemDeFundo = fundo[indice];

  setTimeout(() => {
    elemento.style.backgroundImage = novaImagemDeFundo;
  }, 500);

  const elemento2 = document.getElementById("foto");
  indice2 = (indice2 - 1 < 0) ? detalhes.length - 1 : indice2 - 1;

  // Define a opacidade da imagem para zero
  elemento2.style.opacity = 0;

  // Aguarda 0,2 segundos antes de alterar a imagem
  setTimeout(() => {
    const novaImagemDeFrente = detalhes[indice2];
    elemento2.src = novaImagemDeFrente;

    // Define a opacidade da imagem de volta para 1
    elemento2.style.opacity = 1;
  }, 200);
}
