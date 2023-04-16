//18.Escribe una función que tome una cadena de texto como parámetro y
//devuelva la cadena en minúsculas.

function convertirAMinusculas(cadena) {
    return cadena.toLowerCase();
  }
  const textoMayusculas = "ESTA ES UNA CADENA EN MAYÚSCULAS";
  const textoMinusculas = convertirAMinusculas(textoMayusculas);
  console.log(textoMinusculas); // Output: "esta es una cadena en mayúsculas"
    