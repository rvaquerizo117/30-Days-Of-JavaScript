// ## 💻 Ejercicios

// ### Ejercicios: Nivel 1

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. Explique la diferencia entre **_forEach, map, filter, and reduce_**.

//**_forEach, map, filter, and reduce_**. 
//forech para recorrer arrays sin devolver un valor
//map devuelve otro array con las modificaciones que hagamos al igual que filter con los elementos coincidentes, 
//y reduce va a devolver un solo valor con el acumulado del array

// 2. Defina una función callback antes de utilizarla en forEach, map, filter o reduce.

//forEach
function imprimir_Algo(elemento){ // funcion de callback
    console.log("Imprimo el numero " + elemento)
}

const numericos = [2,4,5,6,7,6] // array de numeros
numericos.forEach(imprimir_Algo) // llamamos a la cunfion de callback desde el array.forEach

//map
function cuadrado(numero){
    return numero*numero
}

const cuadrados = numericos.map(cuadrado)
console.log(cuadrados)

//filter

function soloPares(elem){
    if(elem % 2 === 0){
        return elem
    }
}

const pares = numericos.filter(soloPares)
console.log(pares)

//reduce

// function sumarArr(acc, curr){
//     return acc + curr
// }

const suma = numericos.reduce((acc, curr) => acc + curr)
console.log(suma)

// 3. Utiliza **_forEach_** para mostrar con console.log cada país del array de países.
// 4. Utiliza **_forEach_** para mostrar con console.log cada nombre del array de nombres.
// 5. Utiliza **_forEach_** para mostrar con console.log cada número del array de números.
// 6. Utiliza **_map_** para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
// 7. Utilice **_map_** para crear un array de longitudes de países a partir del array de países.
// 8. Usa **_map_** para crear un nuevo array cambiando cada número al cuadrado en el array de números.
// 9. Utilice **_map_** para cambiar cada nombre a mayúsculas en el array de nombres.
// 10. Utilice **_map_** para asignar el array de productos a sus correspondientes precios.
// 11. Utilice **_filter_** para filtrar los países que contienen **_land_**.
// 12. Utilice **_filter_** para filtrar los países que tienen seis caracteres.
// 13. Utilice **_filter_** para filtrar los países que contengan seis letras o más en el array de países.
// 14. Utilice **_filter_** para filtrar los países que empiezan por "E";
// 15. Utilice **_filter_** para filtrar sólo los precios con valores.
// 16. Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
// 17. Usa **_reduce_** para sumar todos los números del array de números.
// 18. Utiliza **_reduce_** para concatenar todos los países y producir esta frase: **_Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa_**
// 19. Explique la diferencia entre **_some_** y **_every_**
// 20. Utilice **_some_** para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
// 21. Utilice **_every_** para comprobar si todos los países contienen la palabra land.
// 22. Explique la diferencia entre **_find_** y **_findIndex_**.
// 23. Utilice **_find_** para encontrar el primer país que contenga sólo seis letras en el array de países.
// 24. Utilice **_findIndex_** para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
// 25. Utilice **_findIndex_** para encontrar la posición de **_Norway_** si no existe en el array obtendrá -1.
// 26. Utilice **_findIndex_** para encontrar la posición de **_Russia_** si no existe en el array obtendrá -1.

// ### Ejercicios: Nivel 2

// 1. Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
// 1. Encuentre la suma del precio de los productos usando sólo reduce(callback)).
// 1. Declara una función llamada **_categorizeCountries_** que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
// 1. Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.
// 1. Declara una función **_getFirstTenCountries_** y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js.
// 1. Declara una función **_getLastTenCountries_** que devuelve los últimos diez países del array de países.
// 1. Encuentre qué _letra_ se utiliza muchas _veces_ como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)

// ### Ejercicios: Nivel 3

// 1. Utiliza la información de los países, en la carpeta de datos. Ordena los países por nombre, por capital, por población
// 1. \*\*\* Encuentre las 10 lenguas más habladas:

//    ````js
//    // El resultado debería ser el siguiente
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//    {country: 'English',count:91},
//    {country: 'French',count:45},
//    {country: 'Arabic',count:25},
//    {country: 'Spanish',count:24},
//    {country:'Russian',count:9},
//    {country:'Portuguese', count:9},
//    {country:'Dutch',count:8},
//    {country:'German',count:7},
//    {country:'Chinese',count:5},
//    {country:'Swahili',count:4}
//    ]

//    // El resultado debería ser el siguiente
//    console.log(mostSpokenLanguages(countries, 3))
//    [
//    {country: 'English',count: 91},
//    {country: 'French',count: 45},
//    {country: 'Arabic',count: 25},
//    ]```

//    ````

// 1. \*\*\* Utilice el archivo countries_data.js para crear una función que cree los diez países más poblados.

//    ````js
//    console.log(mostPopulatedCountries(countries, 10))

//    [
//    {country: 'China', population: 1377422166},
//    {country: 'India', population: 1295210000},
//    {country: 'United States of America', population: 323947000},
//    {country: 'Indonesia', population: 258705000},
//    {country: 'Brazil', population: 206135893},
//    {country: 'Pakistan', population: 194125062},
//    {country: 'Nigeria', population: 186988000},
//    {country: 'Bangladesh', population: 161006790},
//    {country: 'Russian Federation', population: 146599183},
//    {country: 'Japan', population: 126960000}
//    ]

//    console.log(mostPopulatedCountries(countries, 3))
//    [
//    {country: 'China', population: 1377422166},
//    {country: 'India', population: 1295210000},
//    {country: 'United States of America', population: 323947000}
//    ]
//    ```

//    ````

// 1. \*\*\* Intenta desarrollar un programa que calcule la medida de tendencia central de una muestra(mean, median, mode) y medida de la variabilidad(range, variance, standard deviation). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puede crear un objeto llamado estadísticas y crear todas las funciones que hacen cálculos estadísticos como método para el objeto estadísticas. Comprueba el resultado que aparece a continuación.

//    ```js
//    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

//    console.log('Count:', statistics.count()) // 25
//    console.log('Sum: ', statistics.sum()) // 744
//    console.log('Min: ', statistics.min()) // 24
//    console.log('Max: ', statistics.max()) // 38
//    console.log('Range: ', statistics.range() // 14
//    console.log('Mean: ', statistics.mean()) // 30
//    console.log('Median: ',statistics.median()) // 29
//    console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
//    console.log('Variance: ',statistics.var()) // 17.5
//    console.log('Standard Deviation: ', statistics.std()) // 4.2
//    console.log('Variance: ',statistics.var()) // 17.5
//    console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
//    ```

//    ```sh
//    console.log(statistics.describe())
//    Count: 25
//    Sum:  744
//    Min:  24
//    Max:  38
//    Range:  14
//    Mean:  30
//    Median:  29
//    Mode:  (26, 5)
//    Variance:  17.5
//    Standard Deviation:  4.2
//    Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
//    ```