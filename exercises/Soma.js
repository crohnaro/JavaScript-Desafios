/* Função que soma */

function soma(a, b) {
    return a + b;
  
}

let numero1 = parseFloat(prompt("Digite o primeiro valor:"));
let numero2 = parseFloat(prompt("Digite o segundo valor:"));

let resultado = soma(numero1 + numero2);

console.log("A soma de" , numero1 , "e" , numero2 , "é: " , resultado);


module.exports = soma;
