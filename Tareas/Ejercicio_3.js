function sumarArreglo(num) {
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    suma += num[i];
  }
  return suma;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
const resultado = sumarArreglo(numeros);
console.log("La suma del arrreglo es "+resultado); // Output: 15

