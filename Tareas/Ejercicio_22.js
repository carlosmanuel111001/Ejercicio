//22.Escribe una función que tome un número como parámetro y devuelva el cubo
//de su valor si el número es negativo, o el doble del valor si no lo es.

function calcularValor(numero) {
    if (numero < 0) {
      // Si el número es negativo, devuelve el cubo de su valor
      return Math.pow(numero, 3);
    } else {
      // Si el número es positivo o cero, devuelve el doble de su valor
      return numero * 2;
    }
  }
// Ejemplo de uso de la función
let numero1 = 5;
let numero2 = -3;

console.log(calcularValor(numero1)); // Output: 10
console.log(calcularValor(numero2)); // Output: -27
  