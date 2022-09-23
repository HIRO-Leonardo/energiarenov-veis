let contador = 1;

let ArrayimagemAnterior = [
  "imgs/energia-eolica.webp",
  "imgs/energiaeolicaaerogerador-cke.webp"
];
let Arrayimagemproximo= [
  "imgs/eolica.jpg",
  "imgs/sh_energia-eolica_759730900.jpg"

]

function Anterior() {
  if (contador == ArrayimagemAnterior.length) {
   
    contador = 0;
  }
  document.getElementById("imagem").src = ArrayimagemAnterior[contador]; 
  contador++; 
}
function Proximo() {
  if (contador == Arrayimagemproximo.length) {
    
    contador = 0;
  }
  document.getElementById("imagem").src = Arrayimagemproximo[contador]; 
  contador++; 
}
