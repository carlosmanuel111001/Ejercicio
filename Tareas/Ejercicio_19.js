//19.Escribe una función que tome un número como parámetro y devuelva true si
//el número es divisible por 3 y 5, o false si no lo es.

// Función que verifica si un número es divisible por 3 y 5
function divisible(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplos de uso de la función
  const numero1 = 15;
  const numero2 = 7;
  
  console.log(`${numero1} es divisible por 3 y 5: ${divisible(numero1)}`); // true
  console.log(`${numero2} es divisible por 3 y 5: ${divisible(numero2)}`); // false
  