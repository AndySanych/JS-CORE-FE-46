/////////////////////CALLBACK FUNCTIONS (Колбэк-функция)////////////////////

/*Функции не отличаются от чисел, строк или массивов - это просто специальный тип
 данных (объект высшего порядка), значение, которое можно хранить в переменной или
  передавать как аргумент в другую функцию.
*/
// function greet(name) {
//   return `Добро пожаловать ${name}!`
// }
// Вызываем функцию greet и выводим результат в консоль
// console.log(greet('Mango')) // Добро пожаловать Манго!

// Выводим функцию greet в консоль не вызывая её
// console.log(greet) // ƒ greet(name) { return `Добро пожаловать ${name}!`}

/*В первом логе мы вызываем функцию greet при помощи круглых скобок и в консоль
выводится результат её выполнения. Во втором логе передаётся ссылка на функцию,
а не результат вызова (отсуствуют круглые скобки), поэтому в консоль выводится
её тело. Это значит, что функцию можно присвоить в переменную или передать как 
аругмент другой функции.

 Функция обратного вызова (callback, колбэк) - это функция, которая передаётся
другой функции в качестве аргумента и та, в свою очередь, вызывает переданную
функцию.

 Функция высшего порядка(higher order function) - функция, принимающая в качестве
параметров другие функции или возвращающая функцию как результат.
*/

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}!`)
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регестрируем гостя ${name}.`)
// }

// registerGuest('Mango', greet)

/*Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в 
параметр callback и вызвана внури функции registerGuest через круглые скобки. 
Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.
*/


////////////////////INLINE CALLBACK FUNCTION (Инлайн колбэки)///////////////////////

/*Если колбэк-функция маленькая и нужна только для передачи аргументом, её можно объявить
прямо при вызове функции в которую передаём колбэк. Такая функция будет доступна только как
значение параметра и больше нигде в коде.
*/

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`)
//   callback(name)
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest('Mango', function greet(name) {
//   console.log(`Добро пожаловать ${name}.`)
// })

// // Передаём инлайн функцию notify как колбэк
// registerGuest('Poly', function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`)
// })


/////////////////////// Несколько колбэков /////////////////////////////////

/*Функция может принимать произвольное количество колбэков. Например, представим что мы пишем 
логику принятия звонков для телефона. Программа должна включить автоответчик если абонент 
недоступен, или соединить звонок в противном случае. Доступность абонента будем имитировать 
генератором случайного числа, чтобы между разными вызовами функции можно было получить различные
 результаты.
 */

// function processCall(recipient) {
//    // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5
  
//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient}, недоступен, оставте сообщение.`)
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`)
//     // Логика принятия звонка
//   }
// }
 
// processCall('Mango')

/*Проблема такого подхода в том, что функция processCall делает слишком много и привязывает
проверку доступности абонента к двум заранее определённым действиям. Что если в будущем вместо
автоответчика нужно будет оставлять голограмму?
 Мы могли бы написать функцию так, чтобы она возвращала какое-то значение и потом по результату
её выполнения делать проверки и выполнять нужный код. Но проверки не относятся к внешнему коду 
и будут его засорять.
 Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable,
и вызывала их по условию.
*/

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient)
//     return
//   }

//   onAvailable(recipient)
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`)
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`)
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`)
//   // Логика записи голограммы
// }

// processCall('Mango', takeCall, activateAnsweringMachine)
// processCall('Poly', takeCall, leaveHoloMessage)

/*Колбэки применяются для обработки действий пользователя на странице, при обработке запросов
на сервер, выполнения заранее неизвестных функций и т. п. В этом и заключается их суть - это
функции предназначенные для отложенного выполнения.
*/


////////////////////// Абстрагирование повторения ////////////////////////////

/*Абстракция - скрытие деталей реализации. Позволяет думать о задачах на более высоком (абстрактном)
уровне. Функции это хороший способ построения абстракций.
 Например, скрипт выполняет какое-то действие определенное количество раз. Для этого можно написать
цикл for.
*/

// for (let i = 0; i < 10; i += 1) {
//   console.log(i)
// }

/*Можем ли мы абстрагировать «делать что-то N раз» как функцию? - да, напишем функцию, 
которая вызывает console.log() N раз.
*/

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i)
//   }
// }

// repeatLog(5)

/*Но что, если мы хотим сделать что-то, кроме логирования чисел? Поскольку «делать что-то» 
можно представить как функцию, а функции - это просто значения, мы можем передать действие 
как аргумент.
*/

// function printValue(value) {
//   console.log(value)
// }

// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i)
//   }
// }

// Передаем printValue как callback-функцию
// repeat(3, printValue)
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint)
// Logging value: 0
// Logging value: 1
// Logging value: 2




/////////////////// Метод forEach ///////////////////////////////

/*Перебирающий метод массива который используется как замена циклов
for и for...of при работе с коллекцией данных.
*/

// массив.forEach(function callback(element, index, array) {
//    // Тело коллбек-функции
// })


/** Поэлементно перебирает массив.
  * Вызызвает коллбек-функцию для каждого элемента массива.
  * Ничего не возвращает.
 
 Аргументы коллбек-функции это значение текущего элемента «element», 
его индекс «index» и сам исходный массив «array». Объявлять можно только 
те параметры которые нужны, чаще всего это элемент, главное не забывать 
про их порядок.
*/

// const numbers = [5, 10, 15, 20, 25]

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`)
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`)
// })

/*Единственным случаем, когда стоит использовать циклы for или for...of 
для перебора массива, это задачи с прерыванием выполнения цикла. Прервать 
выполнение метода forEach нельзя, он всегда перебирает массив до конца.
*/


//////////////////// EXAMPLES //////////////////////////////

/*               ---    1   ---                       */
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0

//   // Классический for
//    // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   console.log(`Индекс ${i}, значение ${orderedItems[i]}`);
//   //   totalPrice += orderedItems[i]
//   // }

//   // Перебирающий forEach
//   orderedItems.forEach(function (orderedItem, index) {
//     console.log(`Индекс ${index}, значение ${orderedItem}`)
//     totalPrice += orderedItem
//   })
 
//   return totalPrice
// }
// console.log(calculateTotalPrice([1, 2, 3]))


/*               ---   2   ---                       */
// function filterArray(numbers, value) {
//   const filteredNumbers = []

  // Классический for
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i])
  //   }
  // }

  // Перебирающий forEach
//   numbers.forEach(function (number, index) {
//     console.log(`Индекс ${index}, значение ${number}`)

//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   })

//   return filteredNumbers
// }
// console.log(filterArray([3, 5, 8, 12, 15], 9))


/*                ---   3   ---                      */
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = []
  
  // Классический for
  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  // Перебирающий forEach
  // firstArray.forEach(function (number) {
  //   console.log(`значение ${number}`)
  //   if (secondArray.includes(number)) {
  //     commonElements.push(number)
  //   }
  // } )

  // return commonElements
  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]))



/////////////// ARROW FUNCTION (Стрелочные функции) //////////////

/*Стрелочные функции имеют сокращённый, более лаконичный синтаксис, 
что уменьшает объем кода, особенно когда функция маленькая или если 
она используется как коллбек.
 Все стрелки создаются как функциональное выражение, и если функция 
 не анонимна, то она должна быть присвоена переменной.
 */

 // Обычное объявление функции
// function classicAdd(a, b, c) {
//    return a + b + c
// }
// console.log(classicAdd(2, 3, 5))

// Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c
// }
// console.log(arrowAdd(4, 3, 7))

/*Ключевое слово «function» не используется, вместо этого сразу 
идёт объявление параметров, за которыми следует символ => и тело функции.
 Если параметров несколько, то они перечисляются через запятую в круглых 
скобках, между знаками равно = и стрелкой =>.
*/

// const add = (a, b, c) => {
//   return a * b * c
// }
// console.log(add(2, 2, 3))
 
/*Если параметр один, его объявление может быть без круглых скобок.
*/

// const nowAdd = a => {
//   return a / 2
// }
// console.log(nowAdd(14))

/*Если параметров нет, то обязательно должны быть пустые круглые скобки.*/

// const greet = () => {
//   console.log('Hello!')
// }
// greet()


////////////////// Неявный возврат //////////////////////////

/*В стрелочной функции после символа => идёт её тело. Здесь может быть 
два варианта: с фигурными скобками и без них.
*/

// const add = (a, b, c) => {
//   console.log(a, b, c)
//   return a + b + c
// }

/*Если фигурные скобки есть, и функция должна возвращать какое-то значение, 
необходимо явно поставить return. Это называется явный возврат (explicit return). 
 Такой синтаксис используется в том случае, если в теле функции нужно выполнить 
 ещё какие-то инструкции кроме возврата значения.
 */

// const add = (a, b, c) => a + b + c
// console.log(add(2, 2, 3))

/*Если фигурных скобок нет, то возвращается результат выражения стоящего после =>.
 Это называется неявный возврат (implicit return). В примере вернётся результат 
выражения сложения параметров a, b и c.
 Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом 
и возвращаемым выражением, но подходит только в случае когда в теле функции не 
нужно выполнять никаких дополнительных инструкций кроме возврата значения.
*/

// До
// function classicAdd(a, b, c) {
//   return a + b + c
// }
// console.log(classicAdd(2, 5, 3))

// После
// const add = (a, b, c) => a + b + c
// console.log(add(7, 5, 3))
 

///////////////// EXAMPLES /////////////////////

/*               ---   1  ---                 */

// До
//  function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem
// }
// console.log(calculateTotalPrice(3, 4))

// После
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem
// }
// console.log(calculateTotalPrice(2, 4))

// Или
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem
// console.log(calculateTotalPrice(5, 5))


/////////////////// Псевдомассив «arguments» /////////////////

/*У стрелочных функций нет локальной переменной «arguments», содержащей все аргументы. 
 Если необходимо собрать все аргументы в массив, используется операция «rest».
 */

const add = (...args) => {
   console.log(args)
}
 add(1, 2, 3) // [1, 2, 3]















/* Функция обратного вызова (callback)
 - Функция может принимать другие функции как параметры
 - Функция которая передаётся другой функции как аргумент называется «функцией обратного (отложенного) вызова» (callback-функция)
 - Функция которая принимает другую функцию как параметр или возвращает функцию как результат своей работы называется «функцией 
 высшего порядка» 
*/
// const fnA = function (message, callback) {
//   console.log(message)
//   console.log(callback)
//   callback(100)
// }

// const fbB = function (number) {
//   console.log('Это лог при вызове fnB', number)
// }
// fnA('hello', fbB)

// const doMath = function (a, b, callback) {
//   const result = callback(a, b)
//   console.log(result);
// }

// const add = function (x, y) {
//   return x + y
// }

// const sub = function (x, y) {
//   return x - y
// }
// doMath(2, 3, add)
// doMath(10, 8, sub)

// // inline callbacks
// doMath(5, 4, function (x, y) {
//   return x + y
// })
// doMath(7, 3, function (x, y) {
//   return x - y
// })


// отложенный вызов: геолокация
// const onGetPositionSuccess = function (position) {
//   console.log('Это вызов onGetPositionSuccess')
//   console.log(position)
// }
// const onGetPositionError = function (error) {
//   console.log('Это вызов onGetPositionError')
//   console.log(error)
// }
// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError)


// Отложенный вызов: интервалы
// const callback = function () {
//   console.log('Через 2 секунды внутри колбека в таймауте')
// }
// console.log('В коде перед таймаутом')
// setTimeout(callback, 2000)
// console.log('В коде после таймаута')

// Фильтр
// const filter = function (array, test) {
//   const filteredArray = []
//   for (const el of array) {
//     console.log(el)
//     const passed = test(el)
//     if (passed) {
//       filteredArray.push(el)
//     }
//   }
//   return filteredArray
// }
// // 1. надо передать функцию
// // 2. функция получает элемент массива
// // 3. если элемент массива удовлетворяет условию то функция вернет true
// // 4. если элемент массива НЕ удовлетворяет условию то функция вернет false
// const callback1 = function (value) {
//   return value >= 3
// }
// const r1 = filter([1, 2, 3, 4, 5], callback1)
// console.log(r1)

// const callback2 = function (value) {
//   return value <= 4
// }
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2)
// console.log(r2)



// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false},
//   {name: 'bananas', quantity: 100, isFresh: true},
// ]
// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120
// }
// const r3 = filter(fruits, getFruitsWithQuantity)
// console.log(r3)












/* Функция результатом своей работы может возвращать другую функцию.

  Возвращаемая функция во время вызова будет иметь доступ ко всем локальным переменным
  (области видимости) родительской функции (той из которой её вернули), это назылается
  «замыкание».
  */

// const fnA = function (parametr) {
//   const innerVariable = 'значение внутренней переменной функции fnA'
  
//   const innerFunction = function () {
//     console.log(parametr)
//     console.log(innerVariable)
//     console.log('Это вызов innerVariable')
//   }
//   return innerFunction
// }

// const fnB = fnA(555)
// fnB()
// console.log(fnB)

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`)
// }

// makeDish('Mango', 'пирожок')
// makeDish('Mango', 'омлет')
// makeDish('Mango', 'чай')

// makeDish('Poly', 'котлеты')
// makeDish('Poly', 'супик')
// makeDish('Poly', 'кофе')

// const makeSheff = function (name) {

//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`)
//   }
//   return makeDish
// }
// const mango = makeSheff('Mango')
// console.dir(mango)
// mango('котлеты')
// mango('пирожок')

// const poly = makeSheff('Poly')
// poly('чай')
// poly('омлет')

/*
  Округлятор
*/

// const floatingPoint = 3.456789
// const someInt = Math.round(floatingPoint)
// console.log(someInt)
// const withDecimals = Number(floatingPoint.toFixed(2))
// console.log(withDecimals)

// const rounder = function (number, places) {
//   return Number(number.toFixed(places))
// }
// console.log(rounder(3.987667, 2))
// console.log(rounder(3.987667, 3))
// console.log(rounder(5.1324, 2))
// console.log(rounder(5.1324, 3))

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places))
//   }
// }
// const rounder2 = rounder(2)
// const rounder3 = rounder(3)

// console.dir(rounder2)
// console.dir(rounder3)

// console.log(rounder2(3.987667))
// console.log(rounder3(3.987667))
// console.log(rounder2(5.1324))
// console.log(rounder3(5.1324))
  

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary

//   return {
//     raise(amount) {
//       if (amount > 1000) {
//         return 'Ты офигел?'
//       }
//       salary += amount
//     },
//     lower(amount) {
//       salary -= amount
//     },
//     current() {
//       return `Текущая зарплата ${employeeName} - ${salary}`
//     }
//   }
// }
// const salaryManager = salaryManagerFactory('Mango', 5000)
// console.log(salaryManager.current())
// console.log(salaryManager.raise(23546757))
// console.log(salaryManager.current())
