//Funciones sin parámetros
function saludar() {
    console.log("Hola a todos");
    alert("Hola a todos");
}
saludar()

function solicitarNombre() {
    let nombreIngresado = prompt("Ingresa tu Nombre");
    console.log("El nombre ingresado es " + nombreIngresado);
    alert("Tu nombre es " + nombreIngresado);
}
solicitarNombre();
solicitarNombre();
solicitarNombre();


//Funciones con Parámetros
function sumarDosParametros(numero1, numero2) {
    console.log(numero1 + numero2);
}
sumarDosParametros(2, 3);
sumarDosParametros(7, 10);
sumarDosParametros(8, 8);

function sumarTresParametros(numero1, numero2, numero3) {
    console.log(numero1 + numero2 + numero3);
}
sumarTresParametros(2, 3, 5);
sumarTresParametros(7, 10, 1);
sumarTresParametros(8, 8, 22);

function saludoMasNombre(saludo, nombre) {
    console.log(saludo + " , " + nombre)
}
saludoMasNombre("Hola", "Cristina");
saludoMasNombre("Como estas", "como te has sentido");
saludoMasNombre("Que tengas un hermoso día", "adios");


// Función que suma 2 numeros y asigna resultado
let resultado = 0;
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
// Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje);
}
sumar(4, 2);
mostrar(resultado);


//return saca el resultado de la función y la corta
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let valor = sumar(3, 5);

//Función Calculadora
function calculadora(primerNumero, segundoNumero, operacion) {
    switch(operacion) {
        case "+": return primerNumero + segundoNumero;
        
        case "-": return primerNumero - segundoNumero;
        
        case "*": return primerNumero * segundoNumero;
        
        case "/": return primerNumero / segundoNumero;
        
        default: 0;
    }
}
console.log(calculadora(5, 2, "+"));

//otro ejemplo
let resultado1 = 0;
let resultado2 = 0;
function sumar(a, b) {
    return a + b;
}
resultado1 = sumar(2, 3);
resultado2 = sumar(6, 7);

// Las Variables Globales pueden ser referenciadas desde cualquier punto del código
let global = 0;
function restar(primerNumero, segundoNumero) {
    global = primerNumero - segundoNumero;
}
restar(5, 3)
console.log(global)

// Las Variables locales solo pueden ser referenciadas dentro de la función
function dividir(primerNumero, segundoNumero) {
    let local = primerNumero / segundoNumero;
    console.log(local);
}
dividir(8, 2);

// Otro ejemplo
let nombreUsuario = "Cristina García"; // Variable Global

function saludar() {
    let nombreUsuario = "David Rojas"; //Variable local
    console.log(nombreUsuario);
}
// Para acceder a nombreUsuario global
console.log(nombreUsuario)

// Para acceder a nombreUsuario local
saludar()

// SCOPE
// var: la ultima var declarada pisa a la de arriba
// let: no reasigna el valor de la variable la restringe
// const: son variables que no se pueden modificar

var a = 1;
var b = 2;

if ( a===1 ){
    var a = 11; // El alcance de a es global, pisa la primera declaración
    let b = 22; //  El alcance de a es local, solo dentro del if

console.log(a); // 11
console.log(b); // 22
}
console.log(a); // 11
console.log(b); // 2


// Funciones Anónimas: se definen sin nombre para ser asignadas a una variable
const suma = function (a, b) { return a + b}
const resta = function (a, b) { return a - b}

console.log(suma(15, 20));
console.log(resta(15, 5));


// Otro ejemplo
const operacion = function ( numeroUno, numeroDos ) {
    return numeroUno + numeroDos}

operacion(20, 20);
operacion(50, 20);

// Funciones flecha son funciones anónimas de sintaxis simplificadas
const multiplica = (a, b) => {
    return a * b
}
multiplica(2, 8)
multiplica(2, 9)

// También se puede simplificar en una sola línea así
const div = (a, b) => a / b
console.log( div(2, 8) )
console.log( div(2, 9) )

// Otro ejemplo
const iva = x => x * 0.21
let precioProducto = 500
let descuento = 50
// Calculo, precioProducto + IVA - descuento
let precioTotal = resta(suma(precioProducto, iva(precioProducto)), descuento)
console.log(precioTotal)
