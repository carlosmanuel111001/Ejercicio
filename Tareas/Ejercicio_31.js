//31.Escribe una función en JavaScript que reciba un arreglo de números y retorne
//el promedio de todos los elementos del arreglo.

function calcularPromedio(arregloNumeros) {
    // Verificar si el arreglo está vacío
    if (arregloNumeros.length === 0) {
      return 0; // Si está vacío, retornar 0 para evitar división por cero
    }
  
    // Sumar todos los elementos del arreglo
    const suma = arregloNumeros.reduce((acumulador, numero) => {
      return acumulador + numero;
    }, 0);
  
    // Calcular el promedio dividiendo la suma entre la cantidad de elementos
    const promedio = suma / arregloNumeros.length;
  
    return promedio;
  }
  const numeros = [4, 8, 12, 16, 20];
  const promedio = calcularPromedio(numeros);
  console.log("El promedio es: " + promedio);
    