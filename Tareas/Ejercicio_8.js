//Escribe una función que tome una cadena como parámetro y devuelva true
//si la cadena es un palíndromo, es decir, si se lee igual de adelante hacia atrás
//que de atrás hacia adelante.

function palindromo(cadena) {
  // Convertir la cadena a minúsculas y quitar los espacios en blanco
  cadena = cadena.toLowerCase().replace(/\s+/g, '');

  // Obtener la longitud de la cadena
  const longitud = cadena.length;

  // Comparar los caracteres de la cadena desde ambos extremos hacia el centro
  for (let i = 0; i < longitud / 2; i++) {
    if (cadena[i] !== cadena[longitud - 1 - i]) {
      return false; // Si los caracteres no son iguales, no es un palíndromo
    }
  }

  return true; // Si no se encontraron diferencias, es un palíndromo
}

// Ejemplos de uso:
console.log(palindromo("anita lava la tina")); // true
console.log(palindromo("Hola mundo")); // false
console.log(palindromo("A man a plan a canal Panama")); // true
