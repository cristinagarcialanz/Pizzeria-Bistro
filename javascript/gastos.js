// Calculamos la Ganacia del día
alert("Hola, Vamos a Calcular la ganacia del día");

let precioNapolitana = 1000;
let precioMargarita = 1000;
let precioJamonRucula = 1200;
let precioQuesos = 1200;
let precioCalzone = 1200;
let precioBistro = 1500;
let precioEspecial = 1500;

let cantidadNapolitana = parseInt(prompt("Indique la cantidad de Pizzas Napolitanas vendidas hoy"));
let cantidadMargarita = parseInt(prompt("Indique la cantidad de Pizzas Margaritas vendidas hoy"));
let cantidadJamonRucula = parseInt(prompt("Indique la cantidad de Pizzas Jamón y Rucula vendidas hoy"));
let cantidadQuesos = parseInt(prompt("Indique la cantidad de Pizzas 4 Quesos vendidas hoy"));
let cantidadCalzone = parseInt(prompt("Indique la cantidad de Pizzas Calzone vendidas hoy"));
let cantidadBistro = parseInt(prompt("Indique la cantidad de Pizzas Bistro vendidas hoy"));
let cantidadEspecial = parseInt(prompt("Indique la cantidad de Pizzas Especial vendidas hoy"));


var totalNapolitana;
function totalPizzaNapolitana(cantidadNapolitana, precioNapolitana) {
    totalNapolitana = parseInt(cantidadNapolitana * precioNapolitana);
    console.log(totalNapolitana);    
    return totalNapolitana;    
}
alert("Total Vendido en Pizza Napolitana: " + totalPizzaNapolitana(cantidadNapolitana, precioNapolitana));

var totalMargarita;
function totalPizzaMargarita(cantidadMargarita, precioMargarita) {
    totalMargarita = cantidadMargarita * precioMargarita;
    console.log(totalMargarita);
    return totalMargarita;    
}
alert("Total Vendido en Pizza Margarita: " + totalPizzaMargarita(cantidadMargarita, precioMargarita));

var totalJamonRucula;
function totalPizzaJamonRucula(cantidadJamonRucula, precioJamonRucula) {
    totalJamonRucula = cantidadJamonRucula * precioJamonRucula;
    console.log(totalJamonRucula);
    return totalJamonRucula;    
}
alert("Total Vendido en Pizza JamonRucula: " + totalPizzaJamonRucula(cantidadJamonRucula, precioJamonRucula));

var totalQuesos;
function totalPizzaQuesos(cantidadQuesos, precioQuesos) {
    totalQuesos = cantidadQuesos * precioQuesos;
    console.log(totalQuesos);
    return totalQuesos;    
}
alert("Total Vendido en Pizza 4 Quesos: " + totalPizzaQuesos(cantidadQuesos, precioQuesos));

var totalCalzone;
function totalPizzaCalzone(cantidadCalzone, precioCalzone) {
    totalCalzone = cantidadCalzone * precioCalzone;
    console.log(totalCalzone);
    return totalCalzone;    
}
alert("Total Vendido en Pizza Calzone: " + totalPizzaCalzone(cantidadCalzone, precioCalzone));

var totalBistro;
function totalPizzaBistro(cantidadBistro, precioBistro) {
    totalBistro = cantidadBistro * precioBistro;
    console.log(totalBistro);
    return totalBistro;    
}
alert("Total Vendido en Pizza Bistro: " + totalPizzaBistro(cantidadBistro, precioBistro));

var totalEspecial;
function totalPizzaEspecial(cantidadEspecial, precioEspecial) {
    totalEspecial = cantidadEspecial * precioEspecial;
    console.log(totalEspecial);
    return totalEspecial;    
}
alert("Total Vendido en Pizza Especial: " + totalPizzaEspecial(cantidadEspecial, precioEspecial));


var totalVendidoDia;
function totalVendido(totalNapolitana, totalMargarita, totalJamonRucula, totalQuesos, totalCalzone, totalBistro, totalEspecial) {
    totalVendidoDia = totalNapolitana + totalMargarita + totalJamonRucula + totalQuesos + totalCalzone + totalBistro + totalEspecial;
    return totalVendidoDia;
}
alert("El Total Vendido en el día es " + totalVendido(totalNapolitana, totalMargarita, totalJamonRucula, totalQuesos, totalCalzone, totalBistro, totalEspecial));

const pagoCredito = 2000;

const cantidadEmpleados = 15;
let gastoComidaEmpleado = parseInt(prompt("Ingrese el gasto en comida por empleado el día de hoy"));

let totalComidasEmpleados;
function totalGastoComidasEmpleados(cantidadEmpleados, gastoComidaEmpleado) {
    totalComidasEmpleados = cantidadEmpleados * gastoComidaEmpleado;
    console.log(totalComidasEmpleados);
    return totalComidasEmpleados;
}
alert("El Total en gastos en comida de empleados en el día es " + totalGastoComidasEmpleados(cantidadEmpleados, gastoComidaEmpleado));

let gastos;
function totalGastos(totalComidasEmpleados, pagoCredito) {
    gastos = totalComidasEmpleados + pagoCredito;
    return gastos;
}
alert("El Total en gastos del día es " + totalGastos(totalComidasEmpleados, pagoCredito));

let ganaciaDelDia;
function ganacia(totalVendidoDia, gastos) {
    ganaciaDelDia = totalVendidoDia - gastos;
    return ganaciaDelDia;
}
alert("La Ganancia del día es de " + ganacia(totalVendidoDia, gastos) + " pesos");