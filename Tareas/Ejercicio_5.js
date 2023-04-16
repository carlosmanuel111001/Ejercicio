function obtenerPrimerElemento(arreglo) {
  if (arreglo && Array.isArray(arreglo) && arreglo.length > 0) {
    return arreglo[0];
  } else {
    return undefined; // Si el arreglo está vacío o no es un arreglo, retorna undefined
  }
}
// Ejemplo de uso de la función obtenerPrimerElemento

// Definir un arreglo
const miArreglo = [1, 2, 3, 4, 5];

// Llamar a la función y almacenar el resultado en una variable
const primerElemento = obtenerPrimerElemento(miArreglo);

// Imprimir el resultado en la consola
console.log(primerElemento); // Output: 1
