//29.Escribe una función que tome dos parámetros numéricos y un parámetro
//booleano. Si el tercer parámetro es verdadero, la función debe devolver el
//resultado de elevar el primer parámetro a la potencia del segundo parámetro,
//de lo contrario, debe devolver la raíz cuadrada del primer parámetro.

function calcularResultado(base, exponente, esPotencia) {
    if (esPotencia) {
      // Si esPotencia es verdadero, calcula la potencia
      return Math.pow(base, exponente);
    } else {
      // Si esPotencia es falso, calcula la raíz cuadrada
      return Math.sqrt(base);
    }
  }
  console.log(calcularResultado(2, 3, true)); // Devuelve 8 (2 elevado a la 3)
  console.log(calcularResultado(9, 0.5, false)); // Devuelve 3 (raíz cuadrada de 9)
    