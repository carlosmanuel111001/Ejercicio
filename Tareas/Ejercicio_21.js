//21.Escribe una función que tome un arreglo como parámetro y devuelva el último
//elemento del arreglo.

function obtenerUltimoElemento(arreglo) {
    if (arreglo && arreglo.length > 0) {
      return arreglo[arreglo.length - 1];
    } else {
      return null; // o cualquier valor que desees para indicar que el arreglo está vacío
    }
  }
// Definimos un arreglo de ejemplo
const miArreglo = [1, 2, 3, 4, 5];

// Definimos la función obtenerUltimoElemento
function obtenerUltimoElemento(arreglo) {
  if (arreglo && arreglo.length > 0) {
    return arreglo[arreglo.length - 1];
  } else {
    return null; // o cualquier valor que desees para indicar que el arreglo está vacío
  }
}

// Llamamos a la función con nuestro arreglo de ejemplo
const ultimoElemento = obtenerUltimoElemento(miArreglo);

// Imprimimos el resultado
console.log("El último elemento del arreglo es: ", ultimoElemento);
  