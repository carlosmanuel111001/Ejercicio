//23.Escribe una función que tome una cadena como parámetro y devuelva la
//cadena en orden inverso. Debe emplear el ciclo for.

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  const inputString = "Hola, mundo!";
  const reversedString = reverseString(inputString);
  console.log(reversedString);
    