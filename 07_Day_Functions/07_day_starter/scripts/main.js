// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


// ## 💻 Ejercicios

// ### Ejercicios: Nivel 1

// 1. Declare una función _fullName_ e imprima su nombre completo.

// function _fullName_(){
//     console.log("Ruben VS")
// }

// _fullName_()

// 2. Declare una función _fullName_ y ahora toma firstName, lastName como parámetro y retorna su nombre completo.

let firstName = "Ruben"
let lastName = "VS"

function _fullName_(firstName, lastName){
    console.log(firstName + " " +lastName)
}

_fullName_(firstName, lastName)

// 3. Declare una función _addNumbers_ que toma dos parámetros y retorna la suma de ambos.

let n1 = 2
let n2 = 2

function _addNumbers_(n1,n2){
    return n1+n2;
}
console.log(_addNumbers_(n1,n2))

// 4. El área de un rectángulo se calcula de la siguiente manera: _area = length x width_. 
//Escribe una función _areaOfRectangle_ que calcule el área de un rectángulo.

// let length = 3
// let width = 1

function _areaOfRectangle_(length, width){
    return (length*width);
}

console.log(_areaOfRectangle_(30, 2))

// 5. El perímetro de un rectángulo se calcula de la siguiente manera: _perimeter= 2x(length + width)_. 
//Escribe una función _perimeterOfRectangle_ que calcule el perímetro de un rectángulo.


function _perimeterOfRectangle_(length, width){
    return (2*(length+width));
}

console.log(_perimeterOfRectangle_(30, 2))

// 6. El volumen de un prisma rectangular se calcula de la siguiente manera: _volume = length x width x height_. 
//Escribe una función _volumeOfRectPrism_ que calcule el volumen de un prisma.

function _volumeOfRectPrism_(length, width, height){
    return (length*width*height);
}

console.log(_volumeOfRectPrism_(30, 2, 3))

// 7. El área de un círculo se calcula de la siguiente manera: _area = π x r x r_. 
//Escribe una función _areaOfCircle_ que calcule el área de un círculo.

const pi =1.1416
let r = 0;

function _areaOfCircle_(pi, r){
    return (pi*r*r);
}

console.log(_areaOfCircle_(pi, 2))

// 8. La circunferencia de un círculo se calcula de la siguiente manera: _circumference = 2πr_. 
//Escribe una función _circumOfCircle_ que calcule la circunferencia de un círculo.


function _circumOfCircle_(pi, r){
    return (2*pi*r);
}

console.log(_circumOfCircle_(pi, 3))

// 9. La densidad de una sustancia se calcula de la siguiente manera:_density= mass/volume_. 
//Escribe una función _density_ que calcule la densidad de una sustancia.


function _density_(mass,volume){
    return (mass/volume);
}

console.log(_density_(54, 3))

// 10. La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. 
//Escribe una función que calcule la velocidad de un objeto en movimiento, _speed_.

function _speed_(metros, segundos){
    return metros/segundos
}

console.log(_speed_(34, 5 ))

// 11. El peso de una sustancia se calcula de la siguiente manera: _weight = mass x gravity_. 
//Escribe una función _weight_ que calcule el peso de una sustancia.

function _weight_(mass){
    const gravity = 9.81
    return mass * gravity
}

console.log(_weight_(1))

// 12. La temperatura en °C se puede convertir a °F usando esta fórmula: _°F = (°C x 9/5) + 32_. 
//Escribe una función _convertCelsiusToFahrenheit_ que convierta °C a °F.

function _convertCelsiusToFahrenheit_(celsius){
    let F = (celsius * 9/5) + 32
    return F
}

console.log(_convertCelsiusToFahrenheit_(30))

// 13. El índice de masa corporal (IMC) se calcula de la siguiente manera: 
//_imc = peso en Kg / (altura x altura) en m2_. Escribe una función que calcule _imc_. 
//El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. 
//Compruebe si una persona tiene un _peso bajo, peso normal, con sobrepeso_ u _obeso_ según la 
//información que se proporciona a continuación.

console.log(_imc_(80, 1.74))

function _imc_(kg, altura){
    let imc = kg / (altura**2)
    console.log(imc)

    if(imc > 0 && imc < 18.5){
        return "Peso bajo"
    }else if(imc < 24.9){
        return "Peso normal"
    }else if(imc < 29.9){
        return "Sobre Peso"
    }else if(imc > 29.89){
        return "Obeso"
    }else{
        return "valor no valido";
    } 
}


//     - Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
//     - _Peso bajo_: IMC inferior a 18,5
//     - _Peso normal_: IMC de 18,5 a 24,9
//     - _Sobrepeso_: IMC de 25 a 29,9
//     - _Obeso_: IMC es 30 o más

// 14. Escribe una función llamada _checkSeason_, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.

function _checkSeason_(mes){
    if(mes > 10 || mes < 2){ //11,0,1
        return "Invierno" 
    }else if(mes > 1 && mes < 5){ //2,3,4
        return "Primavera"
    }else if(mes > 4 && mes < 8){//5,6,7
        return "Verano"
    }else if(mes > 8 && mes <= 11){//9,10,11
        return "Otoño"
    }
}

// 15. Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y 
//devuelva su máximo sin usar el método Math.max.

//     ```js
//     console.log(findMax(0, 10, 5));
//     10;
//     console.log(findMax(0, -10, -2));
//     0;
//     ```

function _findMax_(a,b,c){
    let mayorab = a > b ? a : b;
    let mayorabc = mayorab > c ? mayorab : c;

    if(mayorab>mayorabc){
        return mayorab
    }else{
        return mayorabc
    }
}

console.log(_findMax_(0, 10, 5))

// ### Ejercicios: Nivel 2

// 1. La ecuación lineal se calcula de la siguiente manera: _ax + by + c = 0_. 
//Escribe una función que calcule el valor de una ecuación lineal, _solveLinEquation_.
// x = (-b * y - c) / a;

function _solveLinEquation_(a,b,y,c){
    if(a === 0){
        throw new Error("'A' no puede ser cero");
    }
    let x = (-b * y - c) / a
    return x; 
}

console.log(_solveLinEquation_(10,7,6,3))

// 1. La ecuación cuadrática se calcula de la siguiente manera: _ax2 + bx + c = 0_. 
//Escribe una función que calcule el valor o los valores de una ecuación cuadrática, _solveQuadEquation_.

//    ```js
//    console.log(solveQuadratic()); // {0}
//    console.log(solveQuadratic(1, 4, 4)); // {-2}
//    console.log(solveQuadratic(1, -1, -2)); // {2, -1}
//    console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
//    console.log(solveQuadratic(1, 0, -4)); //{2, -2}
//    console.log(solveQuadratic(1, -1, 0)); //{1, 0}
//    ```

// 1. Declare una función llamada _printArray_. 
//Toma un array como parámetro e imprime cada valor del array.

const frutas = ["arandanos","peras", "naranzjas", "fresas"]

function _printArray_(arr){
    for(const element of arr){
        console.log(element)
    }
}
_printArray_(frutas)

// 1. Declare una función llamada _showDateTime_ que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.

//    ```sh
//    showDateTime()
//    08/01/2020 04:08
//    ```

function _showDateTime_(){
    const now = new Date()
    const day = now.getDate().toString().padStart(2,"0")
    const month = (now.getMonth() +1).toString().padStart(2,"0")
    const year = now.getFullYear().toString()
    const hours = now.getHours().toString().padStart(2,"0")
    const minutes = now.getMinutes().toString().padStart(2,"0")

    const stringDate = `${day}/${month}/${year} ${hours}:${minutes}`

    return stringDate
}

console.log(_showDateTime_())

// 1. Declare una función llamada _swapValues_. Esta función intercambia el valor de x a y.

//    ```js
//    swapValues(3, 4); // x => 4, y=>3
//    swapValues(4, 5); // x = 5, y = 4
//    ```

function _swapValues_(x1,y1){

    let y = x1
    let x = y1

    return "x = " + x + ",y = "+ y 
}

console.log(_swapValues_(2,4))


// 1. Declare una función llamada _reverseArray_. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).

//    ```js
//    console.log(reverseArray([1, 2, 3, 4, 5]));
//    //[5, 4, 3, 2, 1]
//    console.log(reverseArray(["A", "B", "C"]));
//    //['C', 'B', 'A']
//    ```

const arrayejemplo = [1, 2, 3, 4, 5]

const _reverseArray_ = (arr) =>{
    const arrRev = []
    for (element of arr){
        arrRev.unshift(element)
    }
return arrRev

}

console.log(_reverseArray_(arrayejemplo).toString())

// 1. Declare una función llamada _capitalizeArray_. 
//Toma un array como parámetro y retorna el array - capitalizedarray.

const _capitalizeArray_ = (arr) =>{
    const capArr = []
    for(element of arr){
        capArr.push(element.toUpperCase())
    }

    return capArr
}

console.log(_capitalizeArray_(frutas).toString())

// 1. Declare una función llamada _addItem_. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.

const arrElementos = []

const  _addItem_ = (element) => {
    arrElementos.push(element)

    return arrElementos
}
_addItem_("Hola")

console.log(arrElementos.toString())

// 1. Declare una función llamada _removeItem_. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.


const _removeItem_ = (pos, arr) => {
    if(pos > arr.length ){
        throw new Error("Possición fuera de limites")
    }else{
        arr.splice(pos,1)
    }
    return arr;
}

console.log(_removeItem_(0,arrElementos).toString())
console.log(arrElementos.toString())

// 1. Declare una función llamada _sumOfNumbers_. Toma un número como parámetro y suma todos los números en ese rango.

//let rango = prompt("introduce un numero")
let suma = 0;


function sumarRango(rango){
    rango = parseInt(rango, 10)
    console.log(rango)
    for(let i = 0; i <= rango; i++){
        suma +=i ;
    }
    return suma
}

//console.log(sumarRango(rango))

// 1. Declare una función llamada _sumOfOdds_. Toma un parámetro numérico y suma todos los números impares en ese rango.
suma = 0

function _sumOfOdds_(rango){
    rango = parseInt(rango, 10)
    console.log(rango)

    for(let i = 0; i <= rango; i++){
        if(i%2 !== 0){
            suma +=i ;
        }
    }
    return suma
}

//console.log(_sumOfOdds_(rango))

// 1. Declare una función llamada _sumOfEven_. Toma un parámetro numérico y suma todos los números pares en ese rango.

suma = 0

function _sumOfEven_(rango){
    rango = parseInt(rango, 10)
    console.log(rango)

    for(let i = 0; i <= rango; i++){
        if(i%2 === 0){
            suma +=i ;
        }
    }
    return suma
}

//console.log(_sumOfEven_(rango))

// 1. Declare una función llamada _evensAndOdds_ . Toma un entero positivo como parámetro y cuenta el número de pares e impares.

//    ```sh
//    evensAndOdds(100);
//    El número de impares son 50.
//    El número de pares es 51.
//    ```

function pedirNumero(){
    let numero;
    do{
        numero = parseInt(prompt("Dame un numero"),10)
    }while(isNaN(numero))

    return numero
}

function _evensAndOdds_(int){
    let contPares = 0;
    let contImpares = 0;

    for(let i = 0; i <= int; i++){
        if(i % 2 == 0){
            contPares +=1
        }else{
            contImpares +=1
        }
    }
    return `El número de pares son ${contPares}
            El número de impares son ${contImpares}`
}

let numero = pedirNumero()

console.log(_evensAndOdds_(numero).toString())

// 1. Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos

//    ```js
//    sum(1, 2, 3); // -> 6
//    sum(1, 2, 3, 4); // -> 10
//    ```

const sumarArray = (arr) => {
    let suma = 0;
    for(element of arr){
        suma += parseInt(element, 10);
    }
    return suma
}

console.log(sumarArray([2,2,45,1]))

// 1. Escriba una función _randomUserIp_ que genere una ip de usuario aleatoria.

function _randomUserIp_(){
    const ip = []
    const bloques = 4 //numero de bloques

    for(let i = 0; i<bloques; i++){
        ip.push(Math.floor(Math.random() * 256)) 
    }
        
    return ip.join(".")
}

console.log(_randomUserIp_())

// 1. Escriba una función _randomMacAddress_ que genere una dirección mac aleatoria.

function _randomMacAddress_(){
    const mac = []
    const bloques = 6 //numero de bloques
    const dicHex = "0123456789ABCDEF"
    

    for(let i = 0; i<bloques; i++){
        let bloqueRand = ""
        for(let j = 0; j<2; j++){
            const charRand = dicHex.charAt(Math.floor(Math.random() * dicHex.length))
            bloqueRand += charRand
            console.log(charRand)
            console.log(bloqueRand)
        }  
        mac.push(bloqueRand)
    }
        
    return mac.join(":")
}

console.log(_randomMacAddress_().toString())

// 1. Declare una función llamada _randomHexaNumberGenerator_. Cuando se llama a esta función, 
//genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.

//    ```sh
//    console.log(randomHexaNumberGenerator());
//    '#ee33df'
//    ```

function _randomHexaNumberGenerator_(){
    const dicHex = "0123456789ABCDEF"
    const length = Math.floor((Math.random() * 10) + 4)
    let hexRand = ""

    for(let i = 0; i < length; i++ ){
        let char = Math.floor(Math.random()*17)
        hexRand += dicHex.charAt(char)
    }

    return hexRand;
}

console.log(_randomHexaNumberGenerator_()) 

// 1. Declare una función llamada _userIdGenerator_. Cuando se llama a esta función, genera un id de siete caracteres. 
//La función devuelve el id.

//    ```sh
//    console.log(userIdGenerator());
//    41XTDbE
//    ```

function _userIdGenerator_(){
    const dic = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=<>?"
    const length = 7
    let stringRand = ""

    for(let i = 0; i < length; i++){
        let char = Math.floor(Math.random()*dic.length)
        stringRand += dic.charAt(char)
    }

    return stringRand.toUpperCase()
}

console.log("#" + _userIdGenerator_()) 

// ### Ejercicios: Nivel 3

// 1. Modifique la función _userIdGenerator_. Declare una función de nombre _userIdGeneratedByUser_. 
//No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada
// es la cantidad de ID que se supone que se generarán.

const length = prompt("Introduzca el numero de caracteres")
const nIds = prompt("Introduzca el numero de IDs a generar")

function _userIdGeneratedByUser_(){
    const dic = "abcdefghijklmnopqrstuvwxyz0123456789!@$%^&*()-_+=<>?"
    const ids = []

for(let i = 0; i < nIds; i++){
    let stringRand = ""
    for(let j = 0; j < length; j++){
        let char = Math.floor(Math.random()*dic.length)
        stringRand += dic.charAt(char)
    }
    ids.push(stringRand)
}
    return ids.join("\n")
}

console.log(_userIdGeneratedByUser_(length, nIds)) 

//    ```sh
//    userIdGeneratedByUser()
//    'kcsy2
//    SMFYb
//    bWmeq
//    ZXOYh
//    2Rgxf
//    '
//    userIdGeneratedByUser()
//    '1GCSgPLMaBAVQZ26
//    YD7eFwNQKNs7qXaT
//    ycArC5yrRupyG00S
//    UbGxOFI7UXSWAyKN
//    dIV0SSUTgAdKwStr
//    '
//    ```

// 1. Escriba una función llamada _rgbColorGenerator_ que genera colores rgb
// 1. Escriba una función **_arrayOfRgbColors_** que retorna cualquier cantidad de colores RGB en un array.

//    ```sh
//    rgbColorGenerator()
//    rgb(125,244,255)
//    ```

function _rgbColorGenerator_(){
    const rgb = []
    const bloques = 6 //numero de bloques
    const nCodigos = 3 //cantidad de codigos  

    for(let i = 0; i<bloques; i++){
        const color = []
        for(let j = 0; j<nCodigos; j++){
            const numRand = Math.floor(Math.random()*256)
            color.push(numRand)
        }  
        rgb.push(color)
    }
        
    return rgb.join("\nrgb:")
}

console.log("rgb:" + _rgbColorGenerator_())

// 1. Escriba una función **_arrayOfHexaColors_** que retorna cualquier cantidad de colores hexadecimales en un array.

function _arrayOfHexaColors_(numberOfColors) {
    const dicHex = "0123456789ABCDEF";
    const arrCol = []; // Aquí se almacenarán los colores como arrays
    const nCodigos = 6; // Cantidad de caracteres para un color hexadecimal

    for (let i = 0; i < numberOfColors; i++) {
        const color = [];
        for (let j = 0; j < nCodigos; j++) {
            const idxHex = Math.floor(Math.random() * dicHex.length);
            color.push(dicHex.charAt(idxHex)); // Se añade el carácter al arreglo del color actual
        }
        arrCol.push(color); // Se añade el arreglo del color al arreglo de colores
    }

    return arrCol;
}

// Para mostrar el resultado de manera más amigable sin usar map
function printColors(colorsArray) {
    const colorStrings = [];
    for (let i = 0; i < colorsArray.length; i++) {
        colorStrings.push(`#${colorsArray[i].join('')}`);
    }
    return colorStrings;
}

// Ejemplo de uso: Generar y mostrar 3 colores hexadecimales
const generatedColors = _arrayOfHexaColors_(3);
console.log(printColors(generatedColors));

// function _arrayOfHexaColors_(numberOfColors) {
//     const dicHex = "0123456789ABCDEF";
//     const arrCol = []; // Aquí se almacenarán los colores como arrays
//     const nCodigos = 6; // Cantidad de caracteres para un color hexadecimal

//     for (let i = 0; i < numberOfColors; i++) {
//         const color = [];
//         for (let j = 0; j < nCodigos; j++) {
//             const idxHex = Math.floor(Math.random() * dicHex.length);
//             color.push(dicHex.charAt(idxHex)); // Se añade el carácter al arreglo del color actual
//         }
//         arrCol.push(color); // Se añade el arreglo del color al arreglo de colores
//     }

//     return arrCol;
// }

// // Para mostrar el resultado de manera más amigable sin usar map
// function printColors(colorsArray) {
//     const colorStrings = [];
//     for (let i = 0; i < colorsArray.length; i++) {
//         colorStrings.push(`#${colorsArray[i].join('')}`);
//     }
//     return colorStrings;
// }

// // Ejemplo de uso: Generar y mostrar 3 colores hexadecimales
// const generatedColors = _arrayOfHexaColors_(3);
// console.log(printColors(generatedColors));



// 1. Escriba una función **_convertHexaToRgb_** que convierta el color hexa a rgb y retorna un color rgb.

function _convertHexaToRgb_(color){
color = limpiarValor(color)


let r = parseInt(color.substring(0,2), 16)
let g = parseInt(color.substring(2,4), 16)
let b = parseInt(color.substring(4,6), 16)

return `r:${r}, g:${g}, b:${b}`

}

function limpiarValor(color){
    if(color.startsWith("#")){//Quitamos la # si la tiene
        return color.slice(1)
    }
}

console.log(_convertHexaToRgb_("#111111"))

// 1. Escriba una función **_convertRgbToHexa_** que convierta rgb a color hexa y retorna un color hexa.

function _convertRgbToHexa_(r, g, b){
    
    color = limpiarValor(color)
    
    let r = Math.max(0, Math.min(parseInt(r), 255))
    let g = Math.max(0, Math.min(parseInt(g), 255))
    let b = Math.max(0, Math.min(parseInt(b), 255))

   // Convertir cada componente a hexadecimal y combinarlos
   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b) // Combina los valores RGB en un solo valor de 24 bits
   .toString(16) // Convierte el valor a hexadecimal
   .slice(1); // Elimina el primer dígito (siempre será "1") para obtener el formato hexadecimal correcto
    
    }
    
    console.log(_convertHexaToRgb_(255,255,255))
    


// 1. Escriba una función **_generateColors_** que pueda generar cualquier número de colores hexa o rgb.

//    ```js
//    console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
//    console.log(generateColors("hexa", 1)); // '#b334ef'
//    console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
//    console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
//    ```

// 1. Llame a su función _shuffleArray_, toma un array como parámetro y devuelve un array mezclada

const randomizeArr = (arr) =>{
    let arrRand = []

    for(element of arr){
        // valor con la posicion random donde meter el nuevo valor dentro de los limities de arrRand

        let posRand = Math.floor(Math.random() * arrRand.length )
        console.log(posRand)
    
        arrRand.splice(posRand,0)
    }
    
}
randomizeArr(["hola","adios",1,2,3,4,5,6])


// 1. Llame a su función _factorial_, toma un número entero como parámetro y devuelve un factorial del número.
// 1. Llame a su función _isEmpty_, toma un parámetro y verifica si está vacío o no.
// 1. Llame a su función _sum_, toma cualquier cantidad de argumentos y devuelve la suma.
// 1. Escriba una función llamada _sumOfArrayItems_, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
// 1. Escribe una función llamada _average_, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.
// 1. Escriba una función llamada _modifyArray_ que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.

//    ```js
//    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
//    ```

//    ```sh
//    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
//    ```

//    ```js
//    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
//    ```

//    ```sh
//    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
//    ```

//    ```js
//    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//    ```

//    ```sh
//      'Not Found'
//    ```

// 1. Escribe una función llamada _isPrime_, que verifica si un número es un número primo.
// 1. Escriba una función que verifique si todos los elementos son únicos en un array.
// 1. Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
// 1. El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto \$ o \_. Escriba una función **isValidVariable** que verifique si una variable es válida o inválida.
// 1. Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.

//    ```js
//    sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];
//    ```

// 1. Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido
//    🎉 ¡FELICITACIONES! 🎉

// [<< Día 6](../dia_06_Bucles/dia_06_bucles.md) | [Día 8 >>](../dia_08_Objetos/dia_08_objetos.md)
