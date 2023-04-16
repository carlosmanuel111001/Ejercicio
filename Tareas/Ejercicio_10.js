//10.Escribe una función que tome un número como parámetro y devuelva true si
//el número es positivo, o false si es negativo.

function esPositivo(numero) {
  if (numero > 0) {
    return true;
  } else {
    return false;
  }
}

// Ejemplo de uso
console.log(esPositivo(5)); // true
console.log(esPositivo(-3)); // false
