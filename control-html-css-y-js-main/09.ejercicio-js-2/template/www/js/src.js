'use strict';


function relojes() {


const horaActual=new Date();
const hora=horaActual.getHours();
console.log(hora);
const minutos=horaActual.getMinutes();
console.log(minutos);
const segundos=horaActual.getSeconds();
console.log(segundos);

}
   setInterval(relojes,5000); 