// this is your main.js script

/*alert('Open the browser console whenever you work on JavaScript')

let edad = prompt("Introduzca su edad");

if(edad > 18){
    alert(`Con ${edad} años puedes conducir`)
}else{
    alert(`Con ${edad} años no puedes conducir te faltan ${18-edad} años`)
};*/


//  Compara los valores de myAge y yourAge usando if... else. Según la comparación, 
//registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

// let miedad = prompt("mi edad");
// let tuedad = prompt("tu edad");

// if(miedad < tuedad){
//     console.log(`Soy ${tuedad-miedad} años mas pequeño.`);
// }else if(miedad === tuedad){
//     console.log("Tenemos la misma edad");
// }else{
//     console.log(`Eres ${miedad-tuedad} años mas pequeño.`);
// };

//1. Los números pares son divisibles por 2 y el resto es cero.
// ¿Cómo verificar si un número es par o no usando JavaScript?

// let numero = parseInt(prompt("Introduce un numero"));

// if (isNaN(numero)) {
//     console.log("no es un numero");
// } else if(numero % 0){
//     console.log("Es par");
// }else{
//     console.log("es impar");
// };

// Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let nota = parseInt(prompt("escriba la nota"));

// if(nota > 79 && nota < 101){
//     console.log("A");
// }else if(nota > 69 && nota < 80){
//     console.log("B");
// }else if(nota > 59 && nota < 70){
//     console.log("C");
// }else if(nota > 49 && nota < 60){
//     console.log("D");
// }else if(nota >= 0 && nota < 50){
//     console.log("F");
// }

// let estacion = prompt("Introduce la estación");
// estacion.toUpperCase();

// switch(estacion){
//     case "Septiembre":
//     case "Octubre":
//     case "Noviembre":
//         console.log("Temporada Otoño");
//         break;
//     case "Dicembre":
//     case "Enero":
//     case "Febrero":
//         console.log("Temporada Invierno");
//     case "Marzo":
//     case "Abril":
//     case "Mayo":
//         console.log("Temporada Primavera");
//     case "Junio":
//     case "Julio":
//     case "Agosto":
//         console.log("Temporada Verano");
//     default:
//         console.log("No valido");
//     }
const now = new Date();
//let anio = now.getFullYear() % 4 ;
let bisiesto = now.getFullYear() % 4 ;
console.log(bisiesto);
let mes = prompt("Introduce el mes");

    switch (mes){
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":            
        case "Diciembre":
            console.log(`${mes} tiene 31 días`);
            break;
        case "Febrero":
            if(bisiesto > 0){
                console.log(`${mes} tiene 29 días`);
            }else{
                console.log(`${mes} tiene 28 días`);
            }
            break;
        case "Junio":
        case "Abril":
        case "Septiembre":
        case "Noviembre":
            console.log(`${mes} tiene 30 días`);
        break;
        default:
            console.log(`${mes} no valido`);
    };