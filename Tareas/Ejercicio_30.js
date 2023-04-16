//30.Escribe una función que tome un arreglo de strings como parámetro y
//devuelva un nuevo arreglo con todas las palabras en minúscula.

function palabraMinuscula(arr) {
    // Crear un nuevo arreglo para almacenar las palabras en minúscula
    let arrMinusculas = [];
  
    // Recorrer el arreglo de entrada
    for (let i = 0; i < arr.length; i++) {
      // Convertir la palabra a minúscula y agregarla al nuevo arreglo
      arrMinusculas.push(arr[i].toLowerCase());
    }
  
    // Devolver el nuevo arreglo con todas las palabras en minúscula
    return arrMinusculas;
  }
  
  // Ejemplo de uso:
  let palabras = ["HOLA", "MUNDO", "EN", "MAYÚSCULAS"];
  let palabrasMinusculas = palabraMinuscula(palabras);
  console.log(palabrasMinusculas); // Salida: ["hola", "mundo", "en", "mayúsculas"]
  