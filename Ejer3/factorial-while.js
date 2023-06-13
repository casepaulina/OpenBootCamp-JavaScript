// Este archivo debe calcular el factorial de 10 utilizando un bucle while

let num = 10;
let resultado = num;
let i = num - 1;

while (i>1) {
    resultado = resultado * i;
    i--
}

console.log(resultado);