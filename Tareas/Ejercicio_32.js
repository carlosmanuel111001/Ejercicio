//32.Dado un arreglo de números, escribe una función que devuelva la suma de
//todos los números pares. Si el arreglo está vacío o no contiene números
//pares, la función deberá devolver 0.

function sumaNumerosPares(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { // Verifica si el número es par
        suma += arr[i]; // Suma el número par a la suma total
      }
    }
    return suma;
  }
  const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sumaPares = sumaNumerosPares(arreglo);
  console.log("La suma de los números pares es:", sumaPares);
    