// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// ## 💻 Ejercicios

// ### Ejercicios: Nivel 1

// 1. Crear un objeto vacío llamado dog

let dog = {}

// 1. Imprime el objeto dog en la consola

console.log(dog) //?

// 1. Añade las propiedades name, legs, color, age y bark para el objeto dog. 
//La propiedad bark es un método que devuelve _woof woof_

dog = {
  name: "chuchin",
  legs: "4",
  color: "brown",
  age: "12",
  bark: function () {
    return "_woof woof_"
  }
}

// 1. Obtener name, legs, color, age y el valor de bark del objeto dog

console.log(dog.name + '\n' + dog.legs)

// 1. Establecer nuevas propiedades al objeto dog: breed, getDogInfo

dog.breed = "Yorkshire"
dog.getDogInfo = function () {
  return this.name
}
console.log(dog.getDogInfo())

// ### Ejercicios: Nivel 2


//   ````js
let users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// 1. Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.

// Función para encontrar al usuario con el máximo número de habilidades
function findUserWithMaxSkills(users) {
  let maxSkills = 0;
  let userWithMostSkills = '';
  Object.keys(users).forEach(user => {
    const numberOfSkills = users[user].skills.length;
    if (numberOfSkills > maxSkills) {
      maxSkills = numberOfSkills;
      userWithMostSkills = user;
    }
  });
  return userWithMostSkills;
}

// Uso de la función
const userWithMostSkills = findUserWithMaxSkills(users);

console.log(userWithMostSkills); // Imprime el nombre del usuario con más habilidades

// Ejercicios de refuerzo:

//Dado un arreglo de objetos usuarios donde cada objeto tiene propiedades como nombre, edad y país, 
//escribe una función filtrarUsuarios que acepte dos parámetros: el arreglo usuarios y un 
//callback criterio que define el criterio de filtrado. 
//La función debe retornar un nuevo arreglo de usuarios que cumplan con el criterio especificado.

let usuarios = [
  { nombre: "Ana", edad: 25, país: "España" },
  { nombre: "Luis", edad: 30, país: "México" },
  { nombre: "Claudia", edad: 28, país: "Colombia" }
];

function criterio(usuario) {
  return usuario.edad > 26;
}

function filtrarUsuarios(usuarios, criterio) {
  // arr para los elementos filtrados
  const mayoresde26 = []
  for (const user of usuarios) {
    if (criterio(user)) {
      mayoresde26.push(user)
    }
  }
  return mayoresde26
}

let usuariosfiltrados = filtrarUsuarios(usuarios, criterio)

console.log(usuariosfiltrados)

//Tienes un arreglo de objetos personas, donde cada objeto tiene un nombre y una edad. 

const personas = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Luis', edad: 22 },
  { nombre: 'Rubén', edad: 23 }
]

//Escribe una función actualizarEdades que tome este arreglo y un callback. 
//El callback deberá incrementar la edad de cada persona por 1. La función actualizarEdades aplicará 
//este callback a cada objeto del arreglo.

function aumentar1anio(persona) {//ejecuta cada item del callback
  persona.edad += 1
}

function actualizarEdades(personas, callback) {
  personas.forEach(callback)
}

let edadesAumetadas = actualizarEdades(personas, aumentar1anio)

console.log(personas)

// Dado un arreglo de objetos productos, donde cada objeto tiene un nombre, categoria, y precio, 

const productos = [
  { nombre: 'figura abeja', categoria: 'hogar', precio: 19 },
  { nombre: 'figura perro', categoria: 'hogar', precio: 20 },
  { nombre: 'crema de manos', categoria: 'estetica', precio: 5 }
]

// crea una función filtrarPorCategoria. Esta función debe aceptar dos argumentos:
// el arreglo productos y un callback que determina si un producto debe ser incluido en base a su categoría. 
// La función debe retornar un nuevo arreglo con los productos que cumplen con el criterio especificado por el callback.
// Objetivo: Practicar el uso de callbacks para filtrar elementos de un arreglo basándose en una condición.

function filtrarHogar(elemento) {
  return elemento.categoria === 'hogar'
}

function filtrarPorCategoria(productos, callback) {
  const productosFiltrados = []

  for (const producto of productos) {
    if (filtrarHogar(producto)) {
      productosFiltrados.push(producto)
    }
  }

  return productosFiltrados
}

console.log(filtrarPorCategoria(productos, filtrarHogar))


// 1. Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.

users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// 1. Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.

function filtrarPuntos(elemento) {
  return elemento.points > 49
}

function usuariosMax50(users, callback) {
  const arrUsuariosMax50 = []

  for (const user of Object.values(users)) {
    if (filtrarPuntos(user)) {
      arrUsuariosMax50.push(user)
    }
  }

  return arrUsuariosMax50

}

console.log(usuariosMax50(users, filtrarPuntos))

//    ````

// 1. Encontrar personas que sean desarrolladores CSS stack del objeto de los usuarios

function filtrarSkill(elemento, skill) {
  return elemento.skills.includes(skill)
}

function buscarPersonaSkill(users, callback, skill) {
  const arrPersonaSkill = []

  for (const user of Object.values(users)) {
    if (callback(user, skill)) {
      arrPersonaSkill.push(user)
    }
  }

  return arrPersonaSkill

}

console.log(buscarPersonaSkill(users, filtrarSkill, 'CSS'))

// 1. Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original

const clonedUsers = {
  ...users,
  Ruben: {
    email: 'ruben@ruben.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 40,
    isLoggedIn: false,
    points: 40
  }
}

console.log(clonedUsers)

// 1. Obtener todas las claves o propiedades del objeto usuarios

const userKeys = Object.keys(users)

console.log(userKeys)

Object.keys(users).forEach((key) => {

  //claves
  console.log(key, users[key])

  // 1. Obtener todos los valores del objeto usuarios
  console.log(`Email de ${key}: ${users[key].email}`)
})

let paises = {
  suiza: {
    nombre: "Suiza",
    capital: "Berna",
    poblacion: 8600000,
    idiomas: ["alemán", "francés", "italiano", "romanche"]
  },
  belgica: {
    nombre: "Bélgica",
    capital: "Bruselas",
    poblacion: 11500000,
    idiomas: ["neerlandés", "francés", "alemán"]
  },
  canada: {
    nombre: "Canadá",
    capital: "Ottawa",
    poblacion: 38000000,
    idiomas: ["inglés", "francés"]
  },
  sudafrica: {
    nombre: "Sudáfrica",
    capital: "Pretoria",
    poblacion: 59000000,
    idiomas: ["afrikáans", "inglés", "ndebele", "northern sotho", "sotho", "swazi", "tsonga", "tswana", "venda", "xhosa", "zulú"]
  }
};

// 1. Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.

const paisesKeys = []

Object.keys(paises).forEach((key) => {
  paisesKeys.push(key, paises[key])
}
)

console.log(paisesKeys)

// ### Ejercicios: Nivel 3

// 1.  Crea un objeto literal llamado _personAccount_. Tiene las propiedades _firstName, lastName, incomes, expenses_ y 
// tiene los metodos _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ y _accountBalance_. 
// Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.

// Propiedades:

// firstName: El primer nombre de la persona.
// lastName: El apellido de la persona.
// incomes: Un arreglo de objetos, donde cada objeto representa un ingreso y contiene una descripción del ingreso y su cantidad.
// expenses: Un arreglo de objetos, similar a incomes, pero cada objeto representa un gasto.
// Métodos:

// totalIncome(): Calcula y retorna la suma total de todos los ingresos.
// totalExpense(): Calcula y retorna la suma total de todos los gastos.
// accountInfo(): Retorna una cadena de texto con información de la cuenta, 
//incluyendo nombre completo, ingreso total, gasto total y balance actual.
// addIncome(description, amount): Añade un nuevo ingreso al arreglo incomes.
// addExpense(description, amount): Añade un nuevo gasto al arreglo expenses.
// accountBalance(): Calcula y retorna el balance actual de la cuenta, es decir, la diferencia entre el total de ingresos y el total de gastos.

const _personAccount_ = {
  firstName: 'Rubén',
  lastName: 'Vaquerizo',
  incomes: [
    { descripcion: 'Salario', cantidad: 100 },
    { descripcion: 'Venta', cantidad: 100 }
  ],
  expenses: [
    { descripcion: 'Comida', cantidad: 20 },
    { descripcion: 'Transporte', cantidad: 3 }
  ],
  totalIncome: function () {
    return this.incomes.reduce((acc, curr) =>
      acc + curr.cantidad, 0)
  },

  totalExpense: function () {
    return this.expenses.reduce((acc, curr) =>
      acc + curr.cantidad, 0)
  },
  // accountBalance(): Calcula y retorna el balance actual de la cuenta, es decir, la diferencia entre el total de ingresos y el total de gastos.
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense()
  },
  accountInfo: function () {
    // accountInfo(): Retorna una cadena de texto con información de la cuenta, 
    //incluyendo nombre completo, ingreso total, gasto total y balance actual.
    return `Nombre; ${this.firstName} ${this.lastName}, Ingresos: ${this.totalIncome()}
  , Gastos: ${this.totalExpense()}, Balance: ${this.accountBalance()} `
  },
  // addIncome(description, amount): Añade un nuevo ingreso al arreglo incomes.
  addIncome: function (descripcion, cantidad) {
    this.incomes.push({ descripcion, cantidad })
  },
  // addExpense(description, amount): Añade un nuevo gasto al arreglo expenses.
  addExpense: function (descripcion, cantidad) {
    this.incomes.push(descripcion, cantidad)
  }

}
console.log(_personAccount_.accountInfo())
console.log(_personAccount_.totalIncome())
console.log(_personAccount_.totalExpense())
_personAccount_.addIncome("Ventas2", 20)
console.log(_personAccount_.totalIncome())
console.log(_personAccount_.accountInfo())

// totalIncome: function(){
//   return this.incomes.reduce((acc, curr) => {
//     return acc + curr.cantidad},0)
//     }
//   }



// 2.  \*\*\*\* Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()


const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];


const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];


// Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB.
// a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
// b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación

function signUp(username, email, password){
  // Verificar si el usuario existe
  const userExists = users2.some(item => users2.username === username || users2.email === email)

  // Si el usuario existe mostramos mensaje de que existe
  if(userExists){
    console.log("El usuario ya existe")
    return false
  }

  //si no existe creamos el usuario
  const newUser = {
    _id: generateId(),
    username: username,
    email: email,
    password: password,
    createdAt: new Date().toLocaleString("es-ES", { hour12: true }),
    isLoggedIn: false
  }

  users2.push(newUser);
  console.log("usuario agregado")
  return true

}

  //genera una id
  function generateId(){
    return Math.random().toString(36).substring(2,9)
  }

  signUp("Anais", "Anaisvs@gmail.com", "dsdfAdw2erw")

  console.log(users2)
  console.log(generateId())

// 3. El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades.
//    a. Crear una función llamada rateProduct que califique el producto
//    b. Crear una función llamada averageRating que calcule la valoración media de un producto

// 4. Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like

// 🎉 ¡FELICITACIONES! 🎉
