// Saludo Bienvenida
alert("Bienvenid@ a Pizzería Bistró");

let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
if (nombre != "" || apellido != "") {
    alert("Hola, " + nombre + " " + apellido + ", \nle asignaremos un número a su orden.");
}

//Número de Orden
for (let i = 1; i <= 5; i++) {
    alert("Su número de orden es: " + i + " " + nombre + " " + apellido);
    if (i != "") {
        break;
    }
}

// Promo Encuesta
let favoritos = 3;
alert("Estamos haciendo una encuesta para incorporar empanadas a nuestro menu. \nIngrese sus " + favoritos + " gustos de empanadas favoritos")

for (let i = 1; i <= favoritos; i++) {
    let saborEmpanada = prompt("Ingresa gusto de empanada favorito");
    if (i !== favoritos) {
        alert("Uff me encantan las empanadas de " + saborEmpanada + ". Te quedan " + (favoritos - i))
    } else {
        alert("Uff me encantan las empanadas de " + saborEmpanada + "\nWow... Increible selección¡¡¡");
    }
}

let carne = parseInt(prompt("Cuantas empanadas de carne te comerías?"));
let pollo = parseInt(prompt("Cuantas empanadas de pollo te comerías?"));
if (carne >= 0 && pollo >= 0) {
    alert("Genial te comerías " + carne + " empanadas de carne y " + pollo + " de pollo. \nEn total te comerías " + (carne + pollo) + " empanadas, Felicitaciones!");
} else if (carne > pollo) {
    alert("Veo que tus favoritas son las empanadas de Carne, son deliciosas!!!");
} else {
    alert("Veo que tus favoritas son las empanadas de Pollo, son deliciosas!!!");
}

// Sorteo
let cantidadIntentos = 3;
let pizzaMasVendida = "Especial";
let gustos = prompt("Participa en el sorteo de la pizza mas vendida? \nCual crees que será la pizza más vendida en Pizzería Bistro? \n Napolitana, Margarita, Jamón y Rucula, 4 Quesos, Calzone, Bistró ó Especial ???");

while (gustos !== pizzaMasVendida) {
    gustos = prompt("No, intentalo de nuevo. \nCual crees que será la pizza más vendida en Pizzería Bistro? \n Napolitana, Margarita, Jamón y Rucula, 4 Quesos, Calzone, Bistró ó Especial ???");

}
alert("Felicitaciones, has ganado una pizza " + pizzaMasVendida + "!!!");


// Ordenar del Menu
let pizza = parseInt(prompt("Que número de pizza quieres ordenar del menu?"));
while (pizza <= 7) {
    switch (pizza) {
        case 1:
            console.log("Pizza Napolitana");
            alert("Es deliciosa la Pizza Napolitana");
            break;
        case 2:
            console.log("Pizza Margarita");
            alert("Es deliciosa la Pizza Margarita");
            break;
        case 3:
            console.log("Pizza Jamón y Rucula");
            alert("Es deliciosa la Pizza Jamón y Rucula");
            break;
        case 4:
            console.log("Pizza 4 quesos");
            alert("Es deliciosa la Pizza 4 quesos");
            break;
        case 5:
            console.log("Pizza Calzone");
            alert("Es deliciosa la Pizza Calzone");
            break;
        case 6:
            console.log("Pizza Bistró");
            alert("Es deliciosa la Pizza Bistró");
            break;
        case 7:
            console.log("Pizza Especial");
            alert("Es deliciosa la Pizza Especial");
            break;
        default:
            alert("No indicaste un número valido de pizza");
            break;
    }
    if (pizza != "") {
        break;
    }
}
let bebida = parseInt(prompt("Con que número de bebida quieres acompañar tu pedido?"));
while (bebida <= 2) {
    switch (bebida) {
        case 1:
            console.log("Gaseosa");
            alert("Seleccionaste Gaseosa");
            break;
        case 2:
            console.log("Cerveza");
            alert("Seleccionaste Cerveza");
            break;
        default:
            alert("No indicaste un número valido de bebida");
            break;
    }
    if (bebida != "") {
        break;
    }
}

const precioPizza = 1000;
const precioBebida = 100;
const iva = 0.12;
let total = parseInt(precioPizza + precioBebida + ((precioPizza + precioBebida) * iva));


// Moneda de Pago
let valorUSD = 240; //Dolar
let valorEUR = 260; //Euro
let valorYEN = 0.93; //YEN Japones
let valorIDR = 0.0084; //Rupia Indonesia
let valorLIB = 151.74; //Libra Esterlina

let monedaUsuario = prompt("Por favor indica tu moneda de pago: USD, EUR, YEN, IDR, LIB ???");

switch (monedaUsuario) {
    case "USD":
        alert("En total tu orden incluyendo IVA va por: " + parseFloat(total / valorUSD) + " USD");
        break;
    case "EUR":
        alert("En total tu orden incluyendo IVA va por: " + parseFloat(total / valorEUR) + " EUR");
        break;
    case "YEN":
        alert("En total tu orden incluyendo IVA va por: " + parseFloat(total / valorYEN) + " YEN");
        break;
    case "IDR":
        alert("En total tu orden incluyendo IVA va por: " + parseFloat(total / valorIDR) + " IDR");
        break;
    case "LIB":
        alert("En total tu orden incluyendo IVA va por: " + parseFloat(total / valorLIB) + " LIB");
        break;
    default:
        alert("En total tu orden incluyendo IVA va por: " + total + " Pesos Argentinos");
        break;
}

// La función suma retorna la suma de 2 parámetros
function suma(a, b) {
    return a + b;
}

// variable global
let elegirCuotas;

// bucle que se encarga de pedir la cantidad de cuotas a ingresar para pagar con tarjeta de crédito y que se encarga de validar que la cantidad de cuotas sea un numero entre 1, 3, 6, 9 ó 12.
while (elegirCuotas != 1 && elegirCuotas != 3 && elegirCuotas != 6 && elegirCuotas != 9 && elegirCuotas != 12) {
    elegirCuotas = parseInt(prompt("Usted puede abonar su orden con tarjeta de crédito en 1, 3, 6, 9 ó 12 cuotas. Recuerde que abonando con tarjeta de crédito tendra un recargo."));

    switch (elegirCuotas) {
        case 1:
            alert("El precio final en 1 pago es de : " + suma(total, (total * 0.08)) + " pesos");            
            break;

        case 3:
            alert("El precio final en 3 cuotas es de : " + suma(total, (total * 0.15)) + " pesos");            
            break;

        case 6:
            alert("El precio final en 6 cuotas es de : "+ suma(total, (total * 0.30))+ " pesos");            
            break;

        case 9:
            alert("El precio final en 9 cuotas es de : " + suma(total, (total * 0.50)) + " pesos");            
            break;

        case 12:
            alert("El precio final en 12 cuotas es de : " + suma(total, (total * 0.65)) + " pesos");            
            break;

        default:
            alert("No ingresaste un número de cuotas valido.");
    }
}

if (total > 0) {
    alert("Gracias por visitar Pizzería Bistró, ha sido un placer atenderte¡¡¡");
} else {
    alert("Selecciona tu orden del menu");
}










