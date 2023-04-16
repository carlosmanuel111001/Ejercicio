//12.Escribe una función que tome un arreglo como parámetro y devuelva el último
//elemento del arreglo.

function obtenerUltimoElemento(arreglo) {
  if (arreglo && arreglo.length > 0) {
    return arreglo[arreglo.length - 1];
  } else {
    return null; // o cualquier otro valor que desees para indicar que el arreglo está vacío
  }
}
const miArreglo = [1, 2, 3, 4, 5];
const ultimoElemento = obtenerUltimoElemento(miArreglo);
console.log("El último elemento del arreglo es:", ultimoElemento);
