//27.Escribe una función que tome dos números y un booleano como parámetros.
//Si el booleano es verdadero, la función debe devolver la multiplicación de los
//dos números; de lo contrario, debe devolver su diferencia.

function operacion(num1, num2, esMultiplicacion) {
    if (esMultiplicacion) {
      return num1 * num2;
    } else {
      return num1 - num2;
    }
  }
  
  // Ejemplo de uso de la función con datos de ejemplo
  var numero1 = 5;
  var numero2 = 3;
  var multiplicacion = true; // Cambiar a false si se desea hacer una resta
  
  var resultado = operacion(numero1, numero2, multiplicacion);
  
  console.log("Resultado: " + resultado);
  