//15.Escribe una función que tome un arreglo de números como parámetro y
//devuelva la suma de todos los números en el arreglo.

function sumarArregloNumeros(arr) {
    let suma = 0; // Inicializamos la variable suma en 0
  
    // Recorremos cada número en el arreglo y lo sumamos a la variable suma
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
  
    return suma; // Devolvemos el resultado de la suma
  }
  
  // Ejemplo de uso
  const arregloNumeros = [1, 2, 3, 4, 5]; // Arreglo de números
  const resultado = sumarArregloNumeros(arregloNumeros); // Llamamos a la función con el arreglo como parámetro
  console.log(resultado); // Imprimimos el resultado en la consola
  