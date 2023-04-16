//13.Escribe una función que tome una cadena de texto como parámetro y
//devuelva true si la cadena contiene la letra "a", o false si no la contiene.

function contieneLetraA(cadena) {
  // Convertimos la cadena a minúsculas para hacer la búsqueda case-insensitive
  cadena = cadena.toLowerCase();
  
  // Verificamos si la cadena contiene la letra "a"
  if (cadena.includes("a")) {
    return true;
  } else {
    return false;
  }
}
// Llamamos a la función contieneLetraA con diferentes ejemplos de cadenas
console.log(contieneLetraA("Hola")); // true
console.log(contieneLetraA("Mundo")); // false
console.log(contieneLetraA("JavaScript")); // true
console.log(contieneLetraA("12345")); // false
