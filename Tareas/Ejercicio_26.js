//26.Escribe una función que tome cuatro números como parámetros y devuelva
//el resultado de la resta del primer número por el segundo, multiplicado por la
//división del tercer número entre el cuarto.

function calcularResultado(num1, num2, num3, num4) {
    let resta = num1 - num2;
    let division = num3 / num4;
    let resultado = resta * division;
    return resultado;
  }
  
  // Ejemplo de uso
  let num1 = 10;
  let num2 = 5;
  let num3 = 15;
  let num4 = 3;
  
  let resultado = calcularResultado(num1, num2, num3, num4);
  console.log(resultado); // Output: 25
  