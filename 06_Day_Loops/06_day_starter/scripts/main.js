console.log(countries)
alert('Open the console and check if the countries has been loaded')




// 1. Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while

for(let i = 0; i < 10; i++ ){
    console.log([countries[i]])
}

i = 0;
while(i < 10){
    console.log([countries[i]])
    i++
}


i = 0;
do{
    console.log([countries[i]])
    i++
}while(i < 10);

// 2. Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while

for(let i = 10; i >= 0; i-- ){
    console.log([countries[i]])
}

i = 10;
while(i >= 0){
    console.log([countries[i]])
    i--
}


i = 10;
do{
    console.log([countries[i]])
    i--
}while(i >= 0);


// 3. Itera de 0 a n usando el bucle for

for(let i = 0; i < countries.length; i++){
    console.log([countries[i]])
}

// 4. Escribe un bucle que haga el siguiente patrón usando console.log():

//    ```js
//        #
//        ##
//        ###
//        ####
//        #####
//        ######
//        #######
//    ```

for(let i = 0; i < 7; i++){
    let simbolo = ""
    for(let x = 0; x <= i; x++){
        simbolo += "#"
    }
    console.log(simbolo)
    
}

// 5. Usa un bucle para imprimir el siguiente patrón:

//    ```sh
//    0 x 0 = 0
//    1 x 1 = 1
//    2 x 2 = 4
//    3 x 3 = 9
//    4 x 4 = 16
//    5 x 5 = 25
//    6 x 6 = 36
//    7 x 7 = 49
//    8 x 8 = 64
//    9 x 9 = 81
//    10 x 10 = 100
//    ```

for(let i = 0; i < 11; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}


// 6. Usando un bucle imprime el siguiente patrón:

//    ```sh
//     i    i^2   i^3
//     0    0     0
//     1    1     1
//     2    4     8
//     3    9     27
//     4    16    64
//     5    25    125
//     6    36    216
//     7    49    343
//     8    64    512
//     9    81    729
//     10   100   1000
//    ```

for(let i = 0; i < 11; i++){
    console.log(`${Math.pow(i,1)}  ${Math.pow(i,2)}  ${Math.pow(i,3)}`)
}

// 7. Usa el bucle for para iterar de 0 a 100 e imprima solo números pares

for(let i = 0; i < 101; i++){
    if (i % 2 === 0 ){
        console.log(i)
    }
}

// 8. Usa el bucle for para iterar de 0 a 100 e imprima solo números impares

for(let i = 0; i < 101; i++){
    if (i % 2 !== 0 ){
        console.log(i)
    }
}

// 9. Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
console.log("esprimo")

// Iniciar un bucle for desde 2 hasta menos de 100, ya que 1 no es primo y queremos incluir hasta el 99.
for(let num = 2; num < 100; num++){
    // Inicializar una variable `esPrimo` como verdadera. Asumimos que cada número es primo hasta que se demuestre lo contrario.
    let esPrimo = true;
    // Iniciar otro bucle for para verificar si `num` es divisible por algún número aparte de sí mismo y 1.
    for(let i = 2; i < num; i++){
        // Si `num` es divisible por `i` (es decir, el resto es 0), entonces no es un número primo.
        if(num % i === 0){
            // Establecer `esPrimo` a falso ya que encontramos un divisor aparte de 1 y `num`.
            esPrimo = false;
            // Romper el bucle interno ya que no es necesario seguir buscando más divisores.
            break;
        }
    }
    // Si después de verificar todos los posibles divisores `esPrimo` sigue siendo verdadero, imprimir `num`.
    if(esPrimo) console.log(num);
}

// 10. Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.

//     ```sh
//     La suma de todos los números de 0 a 100 es 5050.
//     ```

let sumando = 0;
for(let i = 0; i < 101; i++){
sumando +=i;
}

console.log(sumando)

// 11. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares 
//y la suma de todos los impares.

//     ```sh
//     La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.
//     ```

sumando = 0;
for(let i = 0; i < 101; i++){
    if(i % 2 ===0) 
    sumando +=i
}

console.log(sumando)

// 12. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y
// la suma de todos los impares. Imprimir suma de pares y suma de impares como un array

//     ```sh
//       [2550, 2500]
//     ```

let pares = 0;
let impares = 0;
for(let i = 0; i < 101; i++){
    if(i % 2 === 0){
        pares +=i
    }else{
        impares +=i
    }
}

const numeros = [pares, impares]

console.log(numeros)

// 13. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios

let numerosAle = []
const cantidadN = 5;
i = 0
while(i < cantidadN){
    let numeroRandom = Math.floor(Math.random()*100)
    numerosAle.push(numeroRandom)
    i++;
}

console.log(numerosAle)

// 14. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. 
// Los números debe ser únicos

numerosAle = []

i = 0
while(i < cantidadN){
    let numeroRandom = Math.floor(Math.random()*6)+1
    if(numerosAle.indexOf(numeroRandom) >= 0){
        continue
    }else{
        numerosAle.push(numeroRandom)
        i++;
    }
    
}

console.log(numerosAle)


// 15. Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:

//     ```sh
//     5j2khz
//     ```

let alfabeto = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let key = "";

for(let i = 0; i < 6; i++){
    //encontrar posicion del string
    let posicion = Math.floor(Math.random() * alfabeto.length)
    let char = alfabeto.charAt(posicion)
    key += char
}

console.log(key)

// ### Ejercicios: Nivel 2

// 1. Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:

//    ```sh
//      fe3jo1gl124g
//    ```

//    ```sh
//      xkqci4utda1lmbelpkm03rba
//    ```

longitudRam = Math.floor(Math.random() * (20 - 5 + 1)) + 20;
console.log(longitudRam)
//alfabeto = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
key = "";


for(let i = 0; i < longitudRam; i++){
    //encontrar posicion del string
    let posicion = Math.floor(Math.random() * alfabeto.length)
    let char = alfabeto.charAt(posicion)
    key += char
}

console.log(key)

// 1. Escribe un script que genere un número hexadecimal aleatorio.

//    ```sh
//    '#ee33df'
//    ```

longitudRam = 6;
console.log(longitudRam)
alfabeto = "0123456789ABCDEF"
key = ""


for(let i = 0; i < longitudRam; i++){
    //encontrar posicion del string
    let posicion = Math.floor(Math.random() * alfabeto.length)
    let char = alfabeto.charAt(posicion)
    key += char
}

console.log("#" + key)


// 1. Escribe un script que genere un número de color rgb aleatorio.

//    ```sh
//    rgb(240,180,80)
//    ```

let rgb = [null,null,null];

i=0
while(i < rgb.length){
    rgb[i] = Math.floor(Math.random() * (256) )
    i++
}

console.log("rgb("+ rgb.toString()+")")


// 1. Usando el array countries anterior, crea un array como el siguiente.

//    ```sh
//    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//    ```

let abcPaises = []

for(let i = 0; i < countries.length; i++){
    //si la primera letra del ultimo registro es igual a la primera letra del siguiente registro
    let siguienteLetra = countries[i].charAt(0)

if(abcPaises.length > 0 ){
    let ultimaLetra = abcPaises[abcPaises.length-1].charAt(0)
    if(siguienteLetra !== ultimaLetra){
        abcPaises.push(countries[i].toLocaleUpperCase())
    }
}else{
    //Establecer primer elemento del array abcpaises
    abcPaises.push(countries[i].toLocaleUpperCase())
}
}

console.log(abcPaises.toString())

// 1. Usando el array countries anterior, crea un array para saber la longitud de cada país.

//    ```sh
//    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
//    ```

lengthPaises = [];

for(let i = 0; i < abcPaises.length; i++){
    lengthPaises.push(abcPaises[i].length)
}

console.log(lengthPaises.toString())

// 1. Utiliza el array countries para crear la siguiente array de arrays

//    ```sh
//      [
//      ['Albania', 'ALB', 7],
//      ['Bolivia', 'BOL', 7],
//      ['Canada', 'CAN', 6],
//      ['Denmark', 'DEN', 7],
//      ['Ethiopia', 'ETH', 8],
//      ['Finland', 'FIN', 7],
//      ['Germany', 'GER', 7],
//      ['Hungary', 'HUN', 7],
//      ['Ireland', 'IRE', 7],
//      ['Iceland', 'ICE', 7],
//      ['Japan', 'JAP', 5],
//      ['Kenya', 'KEN', 5]
//    ]
//    ```

arrPaises = [];

for(let i = 0; i < abcPaises.length; i++){
    arrPaises.push([abcPaises[i], abcPaises[i].slice(0,3).toUpperCase(),abcPaises[i].length]);
}

let json = JSON.stringify(arrPaises)

console.log(json)

// 1. En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.

//    ```sh
//    ['Finland','Ireland', 'Iceland']
//    ```

//variable cadena buscar
let buscar = "land";

//array match
arrPaisesMatch = [];

//array nomatch
arrPaisesNoMatch = [];

//recorrer array countries
for(let i = 0; i < countries.length; i++){
    if(countries[i].indexOf(buscar) !== -1){
        arrPaisesMatch.push(countries[i])
    }else{
        arrPaisesNoMatch.push(countries[i])
    }
}
console.log("Match:"+ arrPaisesMatch.toString(),"\n","No match:"+arrPaisesNoMatch.toString())

// 1. En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. 
//Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', 
//imprime 'Estos países no terminan con ia'.

//    ```sh
//    ['Albania', 'Bolivia','Ethiopia']
//    ```

//variable cadena buscar
buscar = "ia";

//array match
arrPaisesMatch = [];

//array nomatch
arrPaisesNoMatch = [];

//recorrer array countries
for(let i = 0; i < countries.length; i++){
    if(countries[i].indexOf(buscar) !== -1){
        arrPaisesMatch.push(countries[i])
    }else{
        arrPaisesNoMatch.push(countries[i])
    }
}
console.log("Match:"+ arrPaisesMatch.toString(),"\n","No match:"+arrPaisesNoMatch.toString())

// 1. Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.

//    ```sh
//    Ethiopia
//    ```

let paisMinLength = Infinity;
let paisMaxLength = 0
let indicePaisMinLength = 0;
let IndicePaisMaxLength = 0

for(let i = 0; i < countries.length; i++){

    if(countries[i].length > paisMaxLength ){
        IndicePaisMaxLength = i
        paisMaxLength = countries[i].length
    }else if(countries[i].length < paisMinLength){
        indicePaisMinLength = i
        paisMinLength = countries[i].length
    }
}

console.log(`
    - Mas corto: "${countries[indicePaisMinLength]}" con ${paisMinLength} caracteres.
    - Mas largo: "${countries[IndicePaisMaxLength]}" con ${paisMaxLength} caracteres.
`)

// 1. Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.

//    ```sh
//    ['Japan', 'Kenya']
//    ```

const nCaracteres = 5
let arrCaracteres = []

for(let i = 0; i < countries.length; i++){
    if(countries[i].length === 5){
        arrCaracteres.push(countries[i])
    }
}

console.log(arrCaracteres.toString());


// 1. Encuentra la palabra más larga en el array webTechs

// 1. Utiliza el array de webTechs para crear la el siguiente array de arrays:

//    ```sh
//    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
//    ```

// 1. Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
// 1. Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.
// 1. Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().
// 1. Imprime todos los elementos del array como se muestra a continuación:

//    ```js
//    const fullStack = [
//      ["HTML", "CSS", "JS", "React"],
//      ["Node", "Express", "MongoDB"],
//    ];
//    ```

//    ```sh
//      HTML
//      CSS
//      JS
//      REACT
//      NODE
//      EXPRESS
//      MONGODB
//    ```

// ### Ejercicios: Nivel 3

// 1. Copia el array countries (Evita mutaciones)

let arrNuevoCountries = Array.from(countries)

// 1. Los arrays son mutables. Crea una copia del array que no modifique el original. 
//Ordena la copia del array y guárdala en una variable sortedCountries

const sortedCountries = Array.from(countries.sort())

console.log(sortedCountries.toString())

// 1. Ordena el array webTechs y el array mernStack
// 1. Extrae todos los países que contengan la palabra 'land' del [array countries](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e imprimela como un array


//variable cadena buscar
buscar = "land";

arrPaisesPos = [];

arrPaisesLand = [];

//recorrer array countries
for(let i = 0; i < arrNuevoCountries.length; i++){
    if(arrNuevoCountries[i].indexOf(buscar) !== -1){
        //codigo para extraer el elemento de countries e insertarlo en arrPaisesLand
        let elementoExtraido = arrNuevoCountries.splice(i,1)[0]
        arrPaisesLand.unshift(elementoExtraido)
    }
}
console.log("Array Land:"+ arrPaisesLand.toString(),"\n","Array original:"+arrNuevoCountries.toString())


// 1. Encuentra el país que contiene la mayor cantidad de caracteres en el [array countries](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 1. Extrae todos los países que contienen la palabra 'land' del [array countries](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e imprimela como un array
// 1. Extrae todos los países que contengan solo cuatro caracters del [array countries](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e impremela como un array

let arr4char = []
for(let i = 0; i < arrNuevoCountries.length; i++){

    //si arrNuevoCountries tiene 4 caracteres
    if(arrNuevoCountries[i].length === 4){
        //splice del elemento
        let elemento = arrNuevoCountries.splice(i,1)[0]
        //pop al nuevo arr4char
        arr4char.push(elemento)
    }
}

console.log(arr4char.toString())


// 1. Extrae todos los paíse que contengan dos o más palabras del [array countries](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e imprimela como un array


arr4char = []
for(let i = 0; i < arrNuevoCountries.length; i++){

    //si arrNuevoCountries tiene 4 caracteres
    if(arrNuevoCountries[i].length > 1){
        //splice del elemento
        let elemento = arrNuevoCountries.splice(i,1)[0]
        //pop al nuevo arr4char
        arr4char.push(elemento)
    }
}

console.log(arr4char.toString())

// 1. Invertir el [array countries](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) y poner en mayúscula cada país y almacenalo en un array

let arrInvertido = [...abcPaises].reverse()
console.log(arrInvertido.toString())

// 🎉 ¡FELICITACIONES! 🎉

// [<< Día 5](../dia_05_Arreglos/dia_05_arreglos.md) | [Día 7 >>](../dia_07_Funciones/dia_07_funciones.md)
