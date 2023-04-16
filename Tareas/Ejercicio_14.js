//14.Escribe una función que tome dos cadenas como parámetros y devuelva true
//si ambas cadenas son anagramas, es decir, si tienen las mismas letras en
//un orden diferente.


function sonAnagramas(cadena1, cadena2) {
  // Convertimos las cadenas a minúsculas y removemos espacios en blanco
  cadena1 = cadena1.toLowerCase().replace(/\s+/g, '');
  cadena2 = cadena2.toLowerCase().replace(/\s+/g, '');

  // Verificamos si tienen la misma longitud
  if (cadena1.length !== cadena2.length) {
    return false;
  }

  // Convertimos las cadenas a arrays y las ordenamos
  const arrayCadena1 = cadena1.split('').sort();
  const arrayCadena2 = cadena2.split('').sort();

  // Comparamos los arrays
  for (let i = 0; i < arrayCadena1.length; i++) {
    if (arrayCadena1[i] !== arrayCadena2[i]) {
      return false;
    }
  }

  return true;
}

// Ejemplo de uso
const cadena1 = "Hola mundo";
const cadena2 = "mundo hola";
if (sonAnagramas(cadena1, cadena2)) {
  console.log("Son anagramas");
} else {
  console.log("No son anagramas");
}
