//16.Escribe una función que tome dos números como parámetros y devuelva el
//número menor.

function numeroMenor(num1, num2) {
    if (num1 < num2) {
      return num1;
    } else {
      return num2;
    }
  }
// Ejemplo de uso de la función numeroMenor()
let num1 = 5;
let num2 = 10;
let menor = numeroMenor(num1, num2);
console.log("El número menor entre " + num1 + " y " + num2 + " es: " + menor);
  