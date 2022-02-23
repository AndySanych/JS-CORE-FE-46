// console.log(typeof {}, {})
console.log({})

const obj = {
//ключ: свойство,  - ключ это всегда string! 
  prop_a: 'A',
  prop_b: 'B',
  prop_c: 2,
  prop_d: null,
  prop_e: true,
  name: 'Andy',
  age: 36,
  isOnline: false,
  isStudent: true,
  skills: ['HTML', 'CSS'],
  music: {
    bands: ['Bi-2'],
    songs: ['Полковнику никто не пишет'],
  },

  // methods
  // ES5
  showName1: function () {
    console.log('Hello')
  },
  // ES6
  showName2 () {
    console.log('World')
  },
}
console.log(obj)

// Получить значение свойства в объекте GET || READ
// 1 - способ
// console.log('name:', obj.name)
// console.log('age:', obj.age)


// 2 - способ
// console.log(obj['name'])
// console.log(obj['age'])

// Вызов метода
// obj.showName1()
// obj.showName2()

// Изменить значение свойства в объекте UPDATE
// console.log(obj.age)
obj.age = 18
// console.log(obj.age)

// добавление свойства в объект
// console.log(obj.languages)// такого свойства пока еще нет - по этому undefined
 
//  а теперь добавлю это свойство в объект POST || CREATE
obj.languages = ['ukranian', 'russian', 'english']
// console.log(obj.languages)

// удалить ненужное свойство в объекте (ну вдруг!) через delete DELETE
delete obj.age
// console.log(obj.age)
// console.log(obj)
// НУЖНО УМЕТЬ НАЙТИ И ИЗМЕНИТЬ, А НЕ УДАЛИТЬ!!! НО МОЖЕТ ВСТРЕЧАТЬСЯ

// short props

let age = 30
// console.log(age)
const skills = ['JavaSript', 'React']
// console.log(skills)

// classic
// const myUser = {
//   age: age,
// }
//    ||
//    \/
// если имя ключа и переменной совпадают, можно записать так:
const myUser = {
  age,
  skills,
}
// console.log(myUser)

// вычесляемые свойства obj[var]
let key1 = 'name'
let key2 = 'lastName'
let key3 = 'skills'

const nextUser = {
  stuentName: 'user',
  [key1]: 'user',
}
// // console.log(nextUser)

// for in
for (let prop in nextUser) {
  console.log('key', prop)
}

const object = {}
for (let key in object) {
  console.log('key', key)// ничего не произойдет так, как объект пустой
}

// наследование
const product = {
  price: 10
}
// console.log('grand father:', product)

// CREATE
const newProduct = Object.create(product)// если не имеет личное свойство, по наследственности получит свойство от product
// console.log('father:', newProduct)

newProduct.price = 100

const newNewProduct = Object.create(newProduct)// если не имеет личное свойство по наследственности получит свойство от newProduct и от product
// console.log('new son', newNewProduct)
newNewProduct.title = 'product'

for (let key in newProduct) {
  // console.log(key)
  // console.log(newNewProduct[key])
}
// метод obj.hasOwnProperty() - покажет есть ли личное свойство объекта без наследственности
// console.log(newNewProduct.hasOwnProperty('price')) // false
// console.log(newProduct.hasOwnProperty('price')) // true

for (let key in newNewProduct) {
  if (newNewProduct.hasOwnProperty(key)) {
    // console.log('key of newNewProduct', key)
    // console.log(newNewProduct [key])
  }
}

// Object.keys() - массив ключей
const myKeys = Object.keys(obj)
// console.log(myKeys)
// console.log(myKeys[0]) // key at index 0
// console.log(obj[myKeys[0]]) // A string
//          obj['prop_a']

// Object.values() - массив значений
const myValues = Object.values(obj)
// console.log(myValues)
// console.log(myValues[8]) // value at index 8

// example
const prod = {
  count: 2,
  price: 10,
}
const vals = Object.values(prod)
// console.log(vals)
const totalPrice = vals[0] * vals[1]
// console.log(totalPrice)

// Object.entries() - многомерный массив в виде [[key1, value1], [key1, value1], [key1, value1]]
const myEntries = Object.entries(prod)
// console.log(myEntries)

// & metods
// this
let nickName = 'BLA BLA BLA'
const user = {
  nickName: 'Super User',
  showUserName() {
    return `Hello, ${this. nickName}`
  },
}
console.log(user.showUserName())
