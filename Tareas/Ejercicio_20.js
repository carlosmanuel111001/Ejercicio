//20.Escribe una función que tome un arreglo como parámetro y devuelva una
//copia del arreglo invertido.

function invertirArreglo(arr) {
    // Creamos una copia del arreglo original para no modificarlo directamente
    let copiaArr = arr.slice();
    // Usamos el método reverse() para invertir el arreglo
    copiaArr.reverse();
    // Devolvemos la copia invertida del arreglo
    return copiaArr;
  }
  let arregloOriginal = [1, 2, 3, 4, 5];
  let arregloInvertido = invertirArreglo(arregloOriginal);
  console.log(arregloInvertido); // Output: [5, 4, 3, 2, 1]
    