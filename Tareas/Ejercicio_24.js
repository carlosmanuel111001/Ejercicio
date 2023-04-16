//24.Escribe una función que tome dos números como parámetros y devuelva el
//resultado de la división del primero por el segundo.

// Definición de la función para dividir dos números
function dividirNumeros(numero1, numero2) {
    if (numero2 === 0) {
      return "Error: No es posible dividir por 0";
    } else {
      return numero1 / numero2;
    }
  }
  
  // Ejemplo de uso de la función con datos
  const num1 = 10;
  const num2 = 5;
  const resultado = dividirNumeros(num1, num2);
  console.log(`El resultado de la división de ${num1} / ${num2} es: ${resultado}`);
  