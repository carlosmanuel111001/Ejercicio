//Escribe una función que tome un arreglo como parámetro y devuelva el
//número de elementos en el arreglo.

function contarElementos(arreglo) {
  if (Array.isArray(arreglo)) { // Verificar si el parámetro es un arreglo
    return arreglo.length; // Devolver la longitud del arreglo
  } else {
    console.error("El parámetro debe ser un arreglo."); // Mostrar un mensaje de error si el parámetro no es un arreglo
    return -1; // Devolver -1 para indicar un error
  }
}
const miArreglo = [1, 2, 3, 4, 5];
const numeroDeElementos = contarElementos(miArreglo);
console.log("El número de elementos en el arreglo es: " + numeroDeElementos);
