// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// 1. Declara un array _vacío_.
const array = [];
let array2 = new Array();

// 2. Declara un array com mas de 5 elementos.
const array3 = [0,1,2,3,4,5,6];

// 3. Encuentra la longitud de tu array.
console.log(array3.length);

// 4. Obtenga el primer elemento, el elemento del medio y 
//el último elemento de un array.

console.log(array3[0]);
console.log(parseInt(Math.ceil(array3.length/2)));

// 5. Declara un array llamado _mixedDataTypes_, 
//coloque diferentes tipos de datos en el array y encuentre la longitud del array. 
//El tamaño del array debe ser mayor que 5.

const _mixedDataTypes_ = ["hola",1, 1.2, "holaaa", "adios", 3, 7 ];

// 6. Declare un variable array de nombre _itCompanies_ y 
//asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.

const empresas2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Imprima el array usando _console.log()_.

console.log(empresas2);

// 8. Imprima el número de empresas en el array.

console.log(empresas2.length);

// 9. Imprime la primer empresa , la intermedia y la última empresa

console.log(empresas2[0]);
console.log(empresas2[(Math.ceil(empresas2.length -1)) / 2]);
console.log(empresas2[empresas2.length -1]);

// 10. Imprime cada empresa.

console.log(empresas2.join('\n'));

// 11. Cambie el nombre de cada empresa 
//a mayúsculas uno por uno e imprímalos.

// 12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.

const empresas = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Unir el array en una cadena, si ese fuera el paso deseado por alguna razón.
let empresasStr = empresas.join(", "); // Esto crea una cadena de las empresas separadas por comas y espacios.
// Ahora, si quisieras dividir esa cadena (aunque sería redundante), podrías hacerlo:
let word = empresasStr.split(", "); // Esto te devolvería un array similar al array 'empresas' original.

console.log(word);

// 13. Compruebe si existe una determinada empresa en el array itCompanies. 
//Si existe, retorna la empresa; de lo contrario, retorna la empresa _no existe_

let index = empresas.indexOf("itCompanies");

if(index === -1){
    console.log("No existe");
}else{
    console.log("Existe");
}

// 14. Filtre las empresas que tienen más de una 'o' 
//sin el método _filter()_

const empresas4 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Unir el array en una cadena, separando cada elemento con una coma
let cadena = empresas4.join(',');

console.log(cadena); // Esto imprimirá "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"

// Si después deseas separar esta cadena en un array nuevamente, usando 'o' como delimitador por ejemplo:
let str = cadena.split('o');
console.log(str); // Esto te dará un array de partes de la cadena original separadas por 'o'


// 15. Ordene el array usando el método _sort()_

const array_orden = ["manzana", "pollo", "verdura", "naranjas", "ajo"]
console.log(array_orden.sort());

// 16. Invierte la array usando el método _reverse()_

console.log(array_orden.reverse());

// 17. Cortar las primeras 3 empresas del array

console.log(array_orden.slice(0, 2));

// 18. Cortar las últimas 3 empresas del array

console.log(array_orden.slice(array_orden.length -3, array_orden.length));

// 19. Cortar la empresa o empresas intermedias de TI del array

let pos_central = Math.floor(array_orden.length/2);
console.log(pos_central);

console.log(array_orden.slice(pos_central, (pos_central+1)));

// 20. Eliminar la primera empresa de TI del array

array_orden.shift();
console.log(array_orden);

// 21. Eliminar la empresa o empresas intermedias de TI del array

array_orden.splice(pos_central, (pos_central+1));
console.log(array_orden);

// 22. Elimine la última empresa de TI del array

array_orden.pop();
console.log(array_orden);

// 23. Eliminar todas las empresas de TI
array_orden.splice(0, array_orden.length);
console.log(array_orden);


// ### Ejercicios: Nivel 2

// 1. Cree un archivo de countries.js separado y almacene el array de países en este archivo,
// cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo.
// Acceda a ambos archivos en el archivo main.js

// 1. Primero elimine todos los signos de puntuación y cambie de string 
// a array y cuente el número de palabras en el array



//    ```js
//    let text =
//      "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
//    console.log(words);
//    console.log(words.length);
//    ```

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let rgex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
let text_modified = text.replace(rgex, "");

console.log(text_modified);

const array_text = text_modified.split(" ");

console.log(array_text);
console.log(array_text.length);

//    ```sh
//    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

//    13
//    ```

// 1. En el siguiente carrito de compras agregue, elimine, edite artículos

//    ```js
//    const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//    ```

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//    - Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado

let elem = prompt("introduce un elemento");

let index1 = shoppingCart.indexOf(elem);

if(index1 === -1){
    shoppingCart.unshift(elem);
}else{
    console.log("El elemento existe");
}

console.log(shoppingCart);

//    - Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado

let elem2 = prompt("introduce un elemento");

let index2 = shoppingCart.indexOf(elem2);

if(index2 === -1){
    shoppingCart.push(elem2);
}else{
    console.log("El elemento existe");
}

console.log(shoppingCart);

//    - Elimine 'Honey' si es alérgico a la miel (honey)

let elem3 = prompt("introduce un elemento");

let index3 = shoppingCart.indexOf(elem3);

console.log("index3" + index3);

if(index3 !== -1){
    shoppingCart.splice(index,1);
    console.log("Elemento eliminado");
}else{
    console.log("El elemento no existe");
}

console.log(shoppingCart);

//    - Modificar Tea a 'Green Tea'

let searchStr = "Tea";
let newStr = "Green Tea";

let index4 = shoppingCart.indexOf(searchStr);

console.log("index4" + index4);

if(index4 !== -1){
    shoppingCart[index4] = newStr;
    console.log("Elemento sustituido");
}else{
    console.log("El elemento no existe");
}

console.log(shoppingCart);

// 1. En el array de países, verifique si 'Ethiopia' existe en el array si existe,
// imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.

let str2 = "Ethiopia";

//buscar index ethiopia
index5 = countries.indexOf(str2);

//si no existe agregar
if(index5 !== -1){
    
    console.log("ETHIOPIA");
}else{
    countries.push(str2);
    console.log("agregado");
}

console.log(countries);


// 1. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.
// 1. Concatene las siguientes dos variables y guardelas en una variable fullStack.

//    ```js
//    const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
//    const backEnd = ["Node", "Express", "MongoDB"];

//    console.log(fullStack);
//    ```

//    ```sh
//    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//    ```

// ### Ejercicios: Nivel 3

// 1.  El siguiente es un array de 10 edades de estudiantes:

//         ```js
//         const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//         ```

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//         - Ordene el array y encuentre la edad mínima y máxima

const agessort = ages.sort((a , b) => a-b)
const edadMinMax = [agessort[0], agessort[agessort.length-1]]
console.log(edadMinMax)

//         - Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
//         - Encuentre la edad promedio (todos los elementos divididos por el número de elementos)

const mediaAges = ages.reduce((acumulador, actual) => acumulador + actual, 0)
console.log(mediaAges / ages.length);

//         - Encuentre el rango de las edades (max menos min)
//         - Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_

const vMin = Math.min(...ages)
const vMax = Math.max(...ages)

const difMin = Math.abs(vMin - mediaAges)
const difMax = Math.abs(vMax - mediaAges)

console.log(vMax," ",vMin)

//     1.Cortar los diez primeros países de la [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

const top10 = (countries.slice(0,10))
console.log(top10)

// 1.  Encuentre el país o países de en medio en el [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

let paisCentro = Math.floor(countries.length/2);
console.log(countries.length, paisCentro)

// 1.  Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.

const paises1 = (countries.slice(0, paisCentro))
const paises2 = (countries.slice(paisCentro, countries.length))

console.log(paises1, paises2)

// 🎉 ¡Felicitaciones! 🎉

// [<< Día 4](../dia_04_Condicionales/dia_04_Condicionales.md) | [Día 6 >>](../dia_06_Bucles/dia_06_bucles.md)
