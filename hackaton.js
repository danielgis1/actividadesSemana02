// Author: Daniel Aguado
// Language: javascript
// Path: hackaton.js

// EJERCICIO #0
// Asignar a objetos
// Tienes una variedad de user objectos, Cada uno tiene name, surname y id.
// Escriba el código para crear otra matriz a partir de él, de objetos con id y fullName, donde
// fullName se genera a partir de name y surname.

let userOne = {
    name: "Daniel",
    surname: "Aguado",
    id: "123456789"
};

let userTwo = {
    name: "Juan",
    surname: "Perez",
    id: "987654321"
};

let userThree = {
    name: "Pedro",
    surname: "Gomez",
    id: "111111111"
};

let users = [userOne, userTwo, userThree];

let usersMapped = users.map((user) => {
    return {
        id: user.id,
        fullName: `${user.name} ${user.surname}`
    }
})

console.log(usersMapped);


// EJERCICIO #1
// ¿Se copia el arreglo?
console.log("Se referencia a fruits en shoppingCart");
// ¿Qué va a mostrar este código?
let fruits = ["Apples", "Pear", "Orange"]; // insertar un nuevo valor en la "copia"
let shoppingCart = fruits;
shoppingCart.push("Banana"); // ¿Qué hay en las frutas?
console.log("En frutas existen los mismos elementos que en shoppingCart");
console.log(fruits.length); // devuleve 4


// EJERCICIO #2
// Operaciones de arreglos
// Intentemos 5 operaciones de arreglos.
// 1. Crea un arreglo styles on los items “Jazz” y “Blues”.
let styles = ["Jazz", "Blues"];

// 2. Adjunta “Rock-n-Roll” al final
styles.push("Rock-n-Roll");

// 3. Reemplaza el valor en el medio por “Classics”. Su código para encontrar el valor medio
// debería funcionar para cualquier arreglo con longitud impar.
const insertElementInMiddle = (array, element) => {
    let start = parseInt(array.length / 2);
    let deleteCount = array.length % 2;
    array.splice(start, deleteCount, element);
};

insertElementInMiddle(styles, 'Classics');
console.log(styles);

// 4. Quita el primer valor del arreglo y muéstralo.
console.log(styles.shift());

// 5. Anteponer Rap y Reggae en el arreglo

styles.splice(0, 0, 'Rap', 'Reggae');
console.log(styles);


// EJERCICIO #3
// Sumar números de entrada
// Escribe la función sumInput() esta:
// - Pregunta al usuario por valores usando prompt y almacena los valores en el arreglo.
// - Termina de preguntar cuando el usuario ingresa un valor no numérico, una cadena vacía o presiona “Cancelar”.
// - Calcula y devuelve la suma de elementos del arreglo.
// PD. Un cero 0 es un número válido, no detenga la entrada en cero.

let numbers = []; // empty array

const sumImputs = () => {
    let param = prompt("Enter a number");
    const paramNull = param === null; // if param is null
    const paramNaN = isNaN(Number(param)); // if param is not a number
    const paramStringEmpty = param === ""; // if param is empty string
    if (paramNull || paramNaN || paramStringEmpty) {
        if (numbers.length > 0) {
            alert(numbers.reduce((acum, num) => acum + num));
        }
        return;
    }
    numbers.push(Number(param));
    console.log(numbers);
    sumImputs();
}

sumImputs();


// EJERCICIO #4
// Rango de filtro
// Escribe una función filterRange(arr, a, b) que obtiene una matriz arr, busca elementos con
// valores mayores o iguales a "a" y menores o iguales a "b" y devuelve un resultado como una matriz.
// La función no debería modificar la matriz. Debería devolver la nueva matriz.
// Por ejemplo:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)

const filterRange = (arr, a, b) => {
    return arr.filter((num) => num >= a && num <= b)
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);


// EJERCICIO #5
// Copiar y ordenar el arreglo
// Tenemos una variedad de cadenas arr. Quisiéramos tener una copia ordenada, pero no la modificamos.
// Crea una función copySorted(arr) que devuelve tal copia.
let arr2 = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
    return arr.slice().sort();
}

let sorted = copySorted(arr2);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr2); // HTML, JavaScript, CSS (no changes)


// Ejercicio #6
// Crea una calculadora extensible
// Crea una función constructora Calculator que crea objetos de calculadora "extensibles".
// La tarea consta de dos partes.
// Primero, implemente el método calculate(str) que lleva una string como "1 + 2" en el formato
// “Numero operator Numero” (delimitado por espacios) y devuelve el resultado. Debe entender más + y menos -.
// Ejemplo de uso:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
function Calculator() {
    this.operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };
    this.calculate = (str) => {
        let arr = str.split(' ');
        let a = Number(arr[0]);
        let b = Number(arr[2]);
        let operator = arr[1];
        if (!this.operation[operator]) {
            return "The operator entered does not exist";
        }
        return this.operation[operator](a, b);
    }
}

calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10

// Luego agrega el método addMethod(name, func) que le enseña a la calculadora una nueva
// operación. Toma el nombre del operador y la función de dos argumentos func (a, b) que lo
// implementa.
// - No hay paréntesis ni expresiones complejas en esta tarea.
// - Los números y el operador están delimitados con exactamente un espacio.
// - Puede haber un manejo de errores si desea agregarlo.

calc.addMethod = function (name, func) {
    this.operation[name] = func;
}

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("2 ** 3")); // 8
console.log(calc.calculate("3 _ 7")); // 10


// EJERCICIO #8
// Reescriba if..else usando múltiples operadores ternarios '?'.
// Para facilitar la lectura, se recomienda dividir el código en varias líneas.
let login = ''
let mensaje;

if (login == 'Empleado') {
    mensaje = 'Hola';
} else if (login == 'Director') {
    mensaje = 'Saludos';
} else if (login == '') {
    mensaje = 'Sin inicio de sesión';
} else {
    mensaje = '';
}

let isEmployees = login == 'Empleado';
let isDirector = login == 'Director';
let isEmptyString = login == '';
mensaje = isEmployees ? 'Hola' : isDirector ? 'Saludos' : isEmptyString ? 'Sin inicio de sesión' : '';
console.log(mensaje);