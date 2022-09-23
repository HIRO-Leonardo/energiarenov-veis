let contador = 1;

let ArrayimagemAnterior = [
  "imgs/usina-nuclear2.webp",
  "imgs/usina2.jpg"
];
let Arrayimagemproximo= [
  "imgs/reator-nuclear.webp",
  "imgs/usina-nuclear.webp"

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
