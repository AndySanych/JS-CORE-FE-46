// логические операторы
// &&
// console.log('I love JavaScript' && 1)
// //                        true && true
// console.log('React' && 1 && true)
// //           true && true && true
// // вернет последнее значение true если все true
// console.log(0 && 'React' && 1)
// //       false &&  true && true
// console.log(0 && false && 'React' && 1)
//       false && false && true && true
// запнется на первом false и прекращает проверку

// examle
// let minPrice = 100
// let maxPrice = 200
// let currentPrice = 180

// if (currentPrice >= minPrice && currentPrice <= maxPrice) {
//   console.log('Этот товар я могу купить сейчас')
// } else {
//   console.log('Эта цена не подходит')
// }


// // ||
// console.log('true' || true)
// //           true || true
// // возращает первое значение true
// console.log( false|| 'true')
// //           true || false
// // возращает первое значение true, если даже есть false
// console.log(false || 0 || NaN)
// //        false || false || false
// // вернет последнее значение false если все false

// if (currentPrice >= minPrice || currentPrice <= maxPrice) {
//   console.log('Этот товар я могу купить сейчас')
// } else {
//   console.log('Эта цена не подходит')
// }
// оператор && проверит все значения и если все true то выполнит условие. Если хотя бы одно, из значений будет false - не выполнит условие
// оператор || выполнит условие, если хотя бы одно, из значений будет true


// let day = 'fri'
// if (
//   day === 'mon' ||
//   day === 'tue' ||
//   day === 'wed' ||
//   day === 'thu' ||
//   day === 'fri'

// ) {
//   // console.log(`${day} - будний день`)
// } else {
//   // console.log('Это выходной!')
// }

// !
// console.log(!false)
// console.log(!0)
// console.log(!'object')
// console.log(!NaN)

// // example
// let enterPromt = null
// if (!enterPromt) {
//   console.log('Пользователь нажал ОТМЕНА')
// }

// // !!
// console.log(!!1)
// console.log(!!0)

// ветления

// 1 - если
// if (condition) {
//   statement
// }

// 2 - если и все остальные случаи
// if (condition) {
//   statement
// } else {
//   statement
// }

// let age = 18
// if (age >= 18) {
//   console.log('Вам можно!')
// } else {
//   console.log('Вам нельзя!')
// }

// age >= 18 ? console.log('Вам можно!') : console.log('Вам нельзя!')

// Альтернатива if...else - тернальный оператор
// (condition) ? true : false

// 3 - множественые условия
// let a = 22
// if (a > 0 && a < 5) {
//   console.log('0-5')
// } else if (a > 5 && a < 10) {
//   console.log('6-10')
// } else if (a > 10 && a <= 15) {
//   console.log('11-15')
// } else {
//   console.log('more then 15')
// }

// SWITCH - работает только в сравнении
// let a = 10
// switch (a) {
//   case a > 0 && a < 5:
//     console.log('0-5')
//     break
  
//   case a > 5 && a < 10:
//     console.log('6-10')
//     break
  
//   case a > 10 && a <= 15:
//     console.log('11-15')
//     break

//   default:
//     console.log('switch more then 15')
//     break
// }
// нельзя выполнить условия!


// full example
// let day = 'sun'
// switch (day) {
//   case 'mon':
//     console.log(`${day} - будний день`)
//     break
  
//   case 'tue':
//     console.log(`${day} - будний день`)
//     break
  
//     case 'wed':
//     console.log(`${day} - будний день`)
//     break
  
//     case 'thu':
//     console.log(`${day} - будний день`)
//     break
  
//     case 'fri':
//     console.log(`${day} - будний день`)
//     break

//   default:
//     console.log('Это выходной!')
//     break
// }
// можно выполнить условия!


// short example
// day = 'wed'
// switch (day) {
//   case 'mon':
//   case 'tue':
//   case 'wed':
//   case 'thu':
//   case 'fri':
//     console.log(`${day} - будний день`)
//     break

//   default:
//     console.log('Это выходной!')
//     break
// }

// isNaN()
// если реально не число -> true
// console.log(isNaN(NaN)) // true
// console.log(isNaN('NaN')) // true
// console.log(isNaN('true')) // true

// console.log(isNaN('false')) // true
// // console.log(Number('false')) // NaN -> true

// console.log(isNaN('0,4')) // true


// // если число -> false
// console.log(isNaN(0)) // false
// console.log(isNaN('0')) // false
// console.log(isNaN(1)) // false
// console.log(isNaN(10000)) // false

// console.log(isNaN(Infinity)) // false
// console.log(isNaN('Infinity')) // false
// console.log(isNaN(0.4)) // false
// console.log(isNaN('0.4')) // false

// console.log(isNaN(true)) // false
// console.log(isNaN(false)) // false


// области видимости
// const result = 1 // глобальная переменная

// if (result > 0) {
//   let result = 111 // локальная переменная
//   result += 10
//   console.log('LOCAL:', result)
// }
// // let result = 100 // ERROR
// console.log('GLOBAL:', result)


// циклы
// const max = 10
// let y = 15
// let i = 0
// while (y < max) {
//   y += 1
//   i += 1
//   console.log(`итерация - ${i}:`, y)
// }
// думает потом делает


// do {
//   y += 1
//   i += 1
//   console.log(`итерация - ${i}:`, y)
// } while (y < max)
// делает потом думает

// ЦИКЛ СО СЧЕТЧИКОМ
// обычно local переменные объявляются i || j || k
//   старт     условие до   шаг итерации
//                       i++
//                       i = i + 1
for (let i = 1; i < 10; i += 1) {
  if (i % 2 === 0) {
    console.log(`continue${i}`)
    continue
  }
}

for (let i = 1; i < 10; i += 1) {
  if (i % 2 === 0) {
    console.log(`break${i}`)
    break
  }
}
