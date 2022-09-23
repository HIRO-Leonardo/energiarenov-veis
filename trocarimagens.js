let contador = 1;

let ArrayimagemAnterior = [
  "imgs/painer-solar.jpg",
  "imgs/solar.jpg"
];
let Arrayimagemproximo= [
  "imgs/energia-solar-fotovoltaica-paineis-solares.jpg",
  "imgs/Assinantes-de-energia-solar-crescem-mais-de-quatro-vezes-no-estado-de-Sao-Paulo.jpg"

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
