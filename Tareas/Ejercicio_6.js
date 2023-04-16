//Escribe una función que tome un número como parámetro y devuelva true si
//el número es par, o false si es impar.

function numeroPar(numero) {
    if (typeof numero !== 'number') {
      console.error('El valor proporcionado no es un número');
      return false;
    }
  
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplos de uso:
  console.log(numeroPar(4));  // true
  console.log(numeroPar(7));  // false
  console.log(numeroPar(0));  // true
  console.log(numeroPar(-6)); // true
  console.log(numeroPar('abc')); // false (no es un número)
  