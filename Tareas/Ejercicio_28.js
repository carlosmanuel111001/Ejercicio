//28.Escribe una función que tome tres parámetros booleanos y devuelva
//verdadero si al menos uno de los tres parámetros es verdadero, de lo
//contrario, debe devolver falso.

function unVerdadero(parametro1, parametro2, parametro3) {
    if (parametro1 || parametro2 || parametro3) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplo de uso de la función con datos
  const resultado1 = unVerdadero(true, false, false);
  console.log(resultado1); // Devuelve true, ya que al menos uno de los parámetros es verdadero
  
  const resultado2 = unVerdadero(false, false, false);
  console.log(resultado2); // Devuelve false, ya que ninguno de los parámetros es verdadero
  