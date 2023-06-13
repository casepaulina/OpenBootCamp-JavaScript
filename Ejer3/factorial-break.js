//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let num = 10;
let resultado = num;
let i = num - 1;

while (num) {
    num *=i;
    i--;
    if(i<=1){
        break
    };
}

console.log(num)