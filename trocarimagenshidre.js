let contador = 1;

let ArrayimagemAnterior = [
  "imgs/hidre1.jpg",
  "imgs/hidre2.jpg"
];
let Arrayimagemproximo= [
  "imgs/hidre3.jpg",
  "imgs/hidre3.jpg"

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
