//25.Escribe una función que tome tres números como parámetros y devuelva el
//resultado de la suma de los dos primeros, multiplicado por el tercero.

function sumMult(num1, num2, num3) {
    // Suma de los dos primeros números
    const suma = num1 + num2;
    // Multiplicación del resultado de la suma por el tercer número
    const resultado = suma * num3;
    // Devuelve el resultado
    return resultado;
  }
  
  // Ejemplo de uso
  const num1 = 2;
  const num2 = 3;
  const num3 = 4;
  const resultado = sumMult(num1, num2, num3);
  console.log(resultado); // Salida: 20 (2 + 3 = 5, 5 * 4 = 20)
  