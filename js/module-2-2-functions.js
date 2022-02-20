// Объявление (создание)
// FUNCTION EXPRESSIN
// myFunc() - нельзя вызвать до объявления
// const myFunc = function (param1) {
//   //перечисляем действия - инструкции, которые должны выполниться
//   console.log('Это функциональное выражение')
// }

// // FUNCTION DECLARATION
// // myFuncDecl() - можно вызвать в любом месте
// function myFuncDecl(param) {
//   console.log('Это декларативное объявление')
// }

// // ARROW FUNCTION - ES6
// // myArrowFunc() - нельзя вызвать до объявления
// const myArrowFunc = (param) => {
//   //перечисляем действия - инструкции, которые должны выполниться
//   console.log('Это стрелочная функция');
// }

// // Вызов функций
// myFunc()
// myFuncDecl()
// myArrowFunc()


// PARAMS & ARGUMENTS
// default params
// function toSayHello(userName = 'User') {
//   alert(`${userName}, рады вас приветствовать!!!`)
// }
// // toSayHello()


// function showInfo(userName, userAge) {
//   console.log(`Hello, my name is ${userName}. I am ${userAge} years old `);
// }
// // showInfo('Andy', 36)


// // argument & ...args
// function getResult(...allParams) {
//   console.log(arguments) // - псевдомассив (пользовались до ES6 - 2015 года но может встречаться)
//   console.log('allParams:', allParams)
//   for (let elem of arguments) {
//     console.log(elem)
//   }
//   // arguments.push(1) // - не сработает. Псевдомассив не имеет методов массива
//   // Преобразование псевдомассива в полноценный массив
//   const myArgs = Array.from(arguments)
//   console.log(myArgs)
//   myArgs.push(1)
//   console.log(myArgs)
// }
// getResult(0, 1, 2, 3, 4, 5)


// const getArrayRes = (...allParams) => { // работает с ...args
//   // console.log(arguments) // стрелочная функция была введена с ES6 и с псевдомассивом не работает
//   console.log(allParams)
// }
// console.log(getArrayRes(1, 2, 3, 4)) 



// EXAMPLES

// const getTotal = (a, b) => {
//   return a + b
// }
// console.log(getTotal(2, 5))
// //         ||
// //         \/
// const getResult = (a, b) => a + b // в стрелке можно не ставить фигурные скобки в условие и без return
// console.log(getResult(7, 8))


// const greet = (user) => `Hello ${user}` 
// console.log(greet('world!'))
// //          ||
// //          \/
// const userName = user => `Hello, ${user}`// если один аргумент, можно не ставить круглые скобки
// console.log(userName('Andy!!!')) 


// // 1
// function checkYear(year) {
//   let condition = year % 4 === 0
//   if (condition) return `${year} - високосный!`
//   return `${year} - не високосный!` 
// }
// console.log(checkYear(2022))

// 2
function game() {
  let comp = Math.ceil(Math.random() * (10 - 1) + 1)
  let user = prompt('Введите число от 1 до 10')
  console.log(comp, user)
  if (comp == user) return 'You are WIN!'
  return 'You lose'
}
// console.log(game())

// 3
function getMathResult() {
  let num1 = prompt('Enter the first number')
  let num2 = prompt('Enter the second number')
  let symbol = prompt('Enter the symbol')
  let total = 0
  console.log(num1, num2, symbol)
  switch (symbol) {
    case '+':
      total = Number(num1) + Number(num2)
      break
    
    case '-':
      total = num1 - num2
      break
    
    case '*':
      total = num1 * num2
      break
    
    case '/':
      total = num1 / num2
      break
  
    default:
      console.error('ERROR')
  }
  return total
}
// 2
2
  +
  

// Конкатенация только при +
console.log(2 + 2 + '2')// 42 - string
console.log(2 + '2' + '2')// 222 - string
console.log('2' + 2 + 2)// 222 - string

// Конкатенации при -, * , / не будет
console.log(2 - 2 - '2')// -2 - number
console.log(2 - '2' - '2')// -2 - number
console.log('2' - 2 - 2)// -2 - number

console.log(2 * 2 * '2')// 8 - number
console.log(2 * '2' * '2')// 8 - number
console.log('2' * 2 * 2)// 8 - number

console.log(2 / 2 / '2')// 0.5 - number
console.log(2 /'2' / '2')// 0.5 - number
console.log('2' / 2 / 2)// 0.5 - number