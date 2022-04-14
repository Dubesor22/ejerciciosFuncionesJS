// 1.Bucles
// Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.

for (let i = 4; i <= 10; i++) {
  console.log(i);
}

// Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.

for (let i = 3; i <= 17; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

//Utiliza la siguiente array para resolver los próximos ejercicios:
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

//Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.
//he recorrido el array para asignar a values el valor del segundo elememento
let mayor25 = [];

for (let persona of gente) {
  if (persona.edad >= 25) {
    mayor25.push(persona.nombre);
  }
}
console.log(mayor25);

//Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.
let nombresConJ = [];
for (let persona of gente) {
  if (persona.nombre.startsWith("J")) {
    nombresConJ.push(persona.nombre);
  }
}
console.log(nombresConJ);

//Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.

let nombre4Letras = [];

for (let persona of gente) {
  if (persona.nombre.length === 4) {
    nombre4Letras.push(persona.nombre);
  }
}
console.log(nombre4Letras);

//Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.

//en este pusheo persona solo, para que se vea que se cumplen las 2 condiciones conb el &&
let nombreJyMenor40 = [];

for (persona of gente) {
  if (persona.nombre.startsWith("J") && persona.edad < 40) {
    nombreJyMenor40.push(persona);
  }
}
console.log(nombreJyMenor40);

// 2.Objetos
// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'

const ordenador = {
  marca: "La pava",
  tipo: "portátil",
  perifericos: ["raton", "touchPad", "monitor"],
  almacenamiento: {
    maestro: 0,
    discos: ["SSD", "HDD"],
  },
};

// TEST 1
if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'

const obj = {
  a: {
    b: true,
    c: [1, 2],
  },
  d: 5,
  f: "hola",
};

// TEST 1
if (typeof obj === "object") {
  console.log("🟢");
} else {
  console.log("suspendes");
}
// TEST 2
if (typeof obj.a.b === "boolean") {
  console.log("🟢");
} else {
  console.log("suspendes");
}

// TEST 3
if (typeof obj.a.c[1] === "number") {
  console.log("🟢");
} else {
  console.log("suspendes");
}
// TEST 4
if (typeof obj.d === "number") {
  console.log("🟢");
} else {
  console.log("suspendes");
}
// TEST 5
if (obj.d > 4 && obj.d < 8) {
  console.log("🟢");
} else {
  console.log("suspendes");
}
// TEST 6
if (typeof obj.f === "string") {
  console.log("🟢");
} else {
  console.log("suspendes");
}
// TEST 7
if (obj.f.length === 4) {
  console.log("🟢");
} else {
  console.log("suspendes");
}

// Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'

let arr = [
  { name: "pepito", age: 25 },
  { name: "pepito", age: 50 },
  { name: "Juan", age: 30 },
];

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (arr.length === 3) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 6
if (arr[1].name === "pepito") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 8
if (arr[0].age === 25) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// 3.Funciones
// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'

function convierteString(num) {
  if (typeof num === "number") {
    return num.toString();
  } else {
    return "Debo ser ejecutada con un numero! 👏";
  }
}
console.log(convierteString("hola"));

// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterInicial(str) {
  if (str.length != 0) {
    if (typeof str === "string") {
      return str.slice(0, 1);
    } else if (typeof str != "string") {
      return "Debo ser ejecutado con un String";
    }
  } else {
    return "debo de ser ejecutada con un string no vacio";
  }
}
console.log(caracterInicial(""));

// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter(str) {
  if (str.length != 0) {
    if (typeof str === "string") {
      return str.slice(-1);
    } else if (typeof str != "number") {
      return "Debo ser ejecutado con un String";
    }
  } else {
    return "debo de ser ejecutada con un string no vacio";
  }
}
console.log(ultimoCaracter("HOLAAAA"));

// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracteres(str) {
  if (typeof str === "string") {
    return str.length;
  } else {
    return "debo de ser ejecutado como un string";
  }
}
console.log(cuentaCaracteres("mano el del bombo"));

//Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'

function getCiudadesOrdenada(str1, str2, str3) {
  let cadena = [str1, str2, str3];
  if (cadena[(0, 1, 2)].length == 0 || cadena === undefined) {
    return "no es un formato correcto";
  } else {
    return cadena.sort();
  }
}
console.log(getCiudadesOrdenada("Paris", "Madrid", "Barcelona"));

// //Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

function esPalindromo(str) {
  if (typeof str === "string" && str.length != 0) {
    const strReversed = str.split("").reverse().join("");
    return strReversed === str ? "Es palindromo" : "No es Palindromo";
  } else {
    return "introduce un String valido o no vacio";
  }
}
console.log(esPalindromo("HooH"));

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(num) {
  if (typeof num === "number") {
    return num.toFixed(2);
  } else {
    return "no es un formato correcto";
  }
}
console.log(getPrecioMostrar(25.55565665676));

// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

function division(num1, num2) {
  return num1 / num2;
}
console.log(division(10, 2));

//Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar(num) {
  if (num % 2 === 0) {
    return "es Par";
  } else {
    return "no es par";
  }
}
console.log(esPar(10));

// Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

const numeros = [5, 8, 4, 7, 1, 10, 15, 11, 19, 22, 55, 33, 26];

function ordenarArray2(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}
console.log(ordenarArray2(numeros));

//Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array   con los elementos impares
let numerosImpares = [];
function obtenerImpares(num) {
  for (let i = 0; i < numeros.length; i++) {
    if (num[i] % 2 === 1) {
      numerosImpares.push(num[i]);
    }
  }
  return numerosImpares;
}
console.log(obtenerImpares(numeros));

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
const miArray = [1, 3, 5, 6, 10];
let arraySuma = 0;
function sumarArray(arr) {
  for (let i = 0; i < miArray.length; i++) {
    arraySuma += arr[i];
  }
  return arraySuma;
}
console.log(sumarArray(miArray));

//Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
let arrayMulti = 1;
function multiplicaArray(arr) {
  for (let i = 0; i < miArray.length; i++) {
    arrayMulti *= arr[i];
  }
  return arrayMulti;
}
console.log(multiplicaArray(miArray));

//Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]
let masQue5 = [];
function cincoOMas(num) {
  for (let i = 0; i < numeros.length; i++) {
    if (num[i] >= 5) {
      masQue5.push(num[i]);
    }
  }
  return masQue5;
}
console.log(cincoOMas(miArray));

//Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.

//Descomentar Prompt y el console.log si quieres usar la funcion
//const numPrompt = prompt("introduzca un numero");
function primo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return "no es Primo";
    }
  }
  return "es Primo";
}
//console.log(primo(numPrompt));

//Crea una función checkPasswordcon una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).
const password = "holi";
//checkPassword();

function checkPassword() {
  let contador = 0;
  while (contador < 3) {
    const logPassword = prompt(
      `introduzca password, te quedan ${3 - contador} intentos`
    );
    contador++;
    if (password === logPassword) {
      alert("ACETATE");
      break;
    }
    contador < 3
      ? alert("Incorrecto, Prueba Otra Vez")
      : alert("Incorrecto, Has gastado todos tus intentos");
  }
}

//Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), según este último se realizará la operación correspondiente. Al final mostrará el resultado en un cuadro de diálogo. Los signos aritméticos disponibles son:
// +: suma los dos operadores.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

function calculadoraInversa(int, string) {
  switch (string) {
    case "+":
      console.log(int + int);
      break;
    case "-":
      console.log(int - int);
      break;
    case "*":
      console.log(int * int);
      break;
    case "/":
      console.log(int / int);
      break;
    case "^":
      console.log(int ** int);
      break;
    case "%":
      console.log(int % int);
      break;
  }
}
calculadoraInversa(2, "+");
