function palabraReversa(str) {
    // Separamos la cadena en palabras usando un espacio como delimitador
    const palabras = str.split(" ");
    
    // Invertimos el orden de las palabras
    const palabrasInvertidas = palabras.reverse();
    
    // Unimos las palabras invertidas en una nueva cadena usando un espacio como separador
    const resultado = palabrasInvertidas.join(" ");
    
    return resultado;
  }
  
  // Ejemplo de uso
  const cadenaOriginal = "Hola mundo";
  const cadenaInvertida = reverseWords(cadenaOriginal);
  console.log(cadenaInvertida); // Output: "mundo Hola"
  

