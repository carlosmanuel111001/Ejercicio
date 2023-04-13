function encontrarNumeroMayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let numero1 = 5;
let numero2 = 10;

let numeroMayor = encontrarNumeroMayor(numero1, numero2);
console.log("El número mayor es: " + numeroMayor);
