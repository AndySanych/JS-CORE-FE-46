//============== Ключевое слово this ================

//========== Контекст выполнения функции ============

/*Можно с уверенностью сказать, что ключевое слово this это одна из самых запутанных концепций 
JavaScript на старте обучения. Новички часто подставляют this методом научного тыка до тех пор, 
пока скрипт не сработает.

 Контекст в JavaScript похож на контекст в предложении:
  • Петя бежит быстро, потому что Петя пытается поймать поезд.
  • Петя бежит быстро, потому что он пытается поймать поезд.
 Второе предложение звучит лаконичнее. Предметом предложения является Петя и мы можем сказать, 
что контекст предложения - это Петя, потому что он в центре внимания в это конкретное время в 
предложении. Даже местоимение «кто» относится к Пете.
 И точно так же объект может быть текущим контекстом исполнения функции.
 */

// Петя бежит быстро, потому что Петя пытается поймать поезд.
// const petya = {
//   userName: 'Petya',
//   showName() {
//     console.log(petya.userName)
//   },
// }

// petya.showName()

/*Обращение к свойствам объекта внутри методов, используя имя самого объекта, аналогично 
использованию Петя вместо он.
 Внутри функций можно использовать зарезервированное ключевое слово this. Во время исполнения 
 функции, в this записывается ссылка на объект, в контексте которого она была вызвана. Таким 
 образом, в теле функции мы можем получить доступ к свойствам и методам этого объекта.
 */

// Петя бежит быстро, потому что он (this) пытается поймать поезд.
// const petya = {
//   userName: 'Petya',
//   showName() {
//     console.log(this.userName)
//   },
// }

// petya.showName()

/*Разберем пример с коллекцией книг.
*/

// const bookShelf = {
//   authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
//   getAuthors() {
//     return this.authors
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName)
//   },
// }

// console.log(bookShelf.getAuthors()) //['Бернард Корнуэлл', 'Роберт Шекли']
// bookShelf.addAuthor('Ли Танит')
// console.log(bookShelf.getAuthors()) //['Бернард Корнуэлл', 'Роберт Шекли', 'Ли Танит']

/*Методы getAuthors и addAuthor это функции (методы объекта), которые вызываются в контексте 
объекта bookShelf. Во время их выполнения в this записывается ссылка на объект bookShelf и 
мы можем обратиться к его свойствам и методам.
*/



//========== Правила определения this ============

/*Необходимо усвоить всего одно правило для определения this - значение контекста внутри 
функции (не стрелочной) определятся не в момент ее создания, а в момент вызова. То есть 
значение this определяется тем, как вызывается функция, а не где она была объявлена.
*/

//========== this в глобальной области видимости ============

/*В глобальной области видимости, если скрипт выполняется не в строгом режиме, this 
ссылается на объект window. В строгом режиме значение this, в глобальной области 
видимости, будет undefined.
*/

// function foo() {
//   console.log(this)
// }

// foo() // window без "use strict" и undefined с "use strict"


//========== this в методе объекта ============

/*Если функция была вызвана как метод объекта, то контекст будет ссылаться на объект, 
частью которого является метод.
*/

// const petya = {
//   userName: 'Petya',
//   showThis() {
//     console.log(this)
//   },
//   showName() {
//     console.log(this.userName)
//   }
// }
// petya.showThis() // {userName: 'Petya', showThis: ƒ, showName: ƒ}
// petya.showName() // Petya

/*Разберем более сложный пример для лучшего понимания.
  • Сначала создадим функцию в глобальной области видимости и вызовем ее.
  • После чего присвоим ее в свойство объекта и вызовем как метод этого объекта.
*/

// function showThis() {
//   console.log("this in showThis: ", this)
// }

// showThis()

// const user = {
//   userName: 'Mango',
// }

// Записываем ссылку на функцию в свойство объекта
// Обратите внимание, что это не вызов - нет ()
// user.showContext = showThis

// Вызываем функцию в контексте объекта
// this будет указывать на текущий объект, в контексте
// которого осуществляется вызов, а не на глобальный объект.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}


//========== this в callback-функциях ============

/*При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка 
на метод, которая присваивается как значение параметра, вызываемого без объекта.
*/

// const customet = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
// }
// console.log(customet.getFullName());

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`)
// }
// makeMessage(customer.getFullName) // Uncaught ReferenceError: customer is not defined(Будет ошибка при вызове функции)

/*ИНТЕРЕСНО
Решение этой проблемы рассматривается в секции про метод bind() и методы объекта.*/



//========== this в стрелочных функциях ============

/*Стрелочные функции не имеют своего this. В отличии от обычных функций, изменить значение this 
внутри стрелки после её объявления нельзя.
*/

/*ИНТЕРЕСНО
Контекст внутри стрелки определяется местом её объявления, а не вызова и ссылается на контекст родительской функции.
*/

/*Стрелочные функции также игнорируют наличие строгого режима. Если стрелка запомнила глобальный контекст, 
то this в ней будет содержать ссылку на window независимо от того, выполняется скрипт в строгом режиме или нет.
*/

// const showThis = () => {
//   console.log("this in showThis: ", this);
// }

// showThis() // this in showThis: window

// const user = {
//   username: "Mango",
// }
// user.showContext = showThis

// user.showContext() // this in showThis: window


/*Ограничивая стрелочные функции постоянным контекстом, JavaScript-движки могут лучше их оптимизировать, 
в отличие от обычных функций, значение this которых может быть изменено.
 Пример не практичный, но отлично показывает как работает контекст для стрелок. Значение контекста берется 
 из родительской области видимости.
 */

//  const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрелки запоминают контекст во время объявления,
//       // из родительской области видимости
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}


//========== Методы функций ============

/*Бывают ситуации когда функцию нужно вызвать в контексте какого-то объекта, при этом 
функция не является его методом. Для этого у функций есть методы call, apply и bind.
*/

//========== Метод call() ==============

// foo.call(obj, arg1, arg2, ...)

/*Метод call вызовет функцию foo так, что в this будет ссылка на объект obj, 
а также передаст аргументы arg1, arg2 и т. д.
*/

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };

// greetGuest.call(mango, "Добро пожаловать"); // Добро пожаловать, Манго.
// greetGuest.call(poly, "С приездом"); // С приездом, Поли.


//========== Метод apply() ==============

/*Метод apply это аналог метода call за исключением того, что синтаксис передачи аргументов 
требует не перечисление, а массив, даже если аргумент всего один.
*/

// foo.call(obj, arg1, arg2, ...)

// foo.apply(obj, [arg1, arg2, ...])

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };

// greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.


//========== Метод bind() ==============

/*Методы call и apply вызывают функцию «на месте», то есть сразу. Но в случае колбэк-функций, 
когда необходимо не сразу вызвать функцию, а передать ссылку на неё, причём с привязанным 
контекстом, используется метод bind.
*/

// foo.bind(obj, arg1, arg2, ...)

/*Метод bind создаёт и возвращает копию функции foo с привязанным контекстом obj и 
аргументами arg1, arg2 и т. д. Получается копия функции которую можно передать 
куда угодно и вызвать когда угодно.
*/

// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam)
// console.log(steamGreeter("Манго"))
// steamGreeter("Манго") // "Манго, добро пожаловать в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail)
// gmailGreeter("Поли") // "Поли, добро пожаловать в «Gmail»."


//========== bind() и методы объекта ==============

/*При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк 
это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.
*/

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
// }

// function makeMessage(callback) {
  // callback() это вызов метода getFullName без объекта
  // console.log(`Обрабатываем заявку от ${callback()}.`)
// }

// makeMessage(customer.getFullName) // Будет ошибка при вызове функции

/*В строгом режиме, значение this в методе getFullName, при вызове как колбэк-функции callback(), 
будет undefined. При обращении к свойствам firstName и lastName будет ошибка, так как undefined это не объект.
 Метод bind используется для привязки контекста при передаче методов объекта как колбэк-функций. 
Передадим колбэком не оригинальный метод getFullName, а его копию с привязанным контекстом к объекту customer.
*/

// ❌ Было
// makeMessage(customer.getFullName) // Будет ошибка при вызове функции

// ✅ Стало
// makeMessage(customer.getFullName.bind(customer)) // Обрабатываем заявку от Jacob Mercer.










//============== EXAMPLE ==================

//-------------- 1 -----------------
/*Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения 
к свойствам и методам объекта.
*/

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
 
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName)
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName)

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`
//   },
// }
// console.log(pizzaPalace.checkPizza("Smoked")) // true
// console.log(pizzaPalace.order("Smoke")) // Sorry, there is no pizza named «Smoke»


//-------------- 2 -----------------
/*Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей 
нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив 
отсутствующие this при обращении к свойствам объекта.
 После объявления объекта мы добавили вызовы методов в той последовательности, в которой 
твой код будут проверять тесты. Пожалуйста ничего там не меняй.
*/

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
 
//   getBalance() {
//     return this.balance
//   },
//   getDiscount() {
//     return this.discount
//   },
//   setDiscount(value) {
//     this.discount = value
//   },
//   getOrders() {
//     return this.orders
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount
//     this.orders.push(order)
//   },
// }

// customer.setDiscount(0.15)
// console.log(customer.getDiscount()) // 0.15
// customer.addOrder(5000, "Steak")
// console.log(customer.getBalance()) // 19750
// console.log(customer.getOrders()) // ["Burger", "Pizza", "Salad", "Steak"]


//-------------- 3 -----------------
/*Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо 
исправить их, правильно расставив this в методах объекта historyService, чтобы методы 
начали работать правильно.
*/

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ")
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails]
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email)
//   },
// }

// console.log(historyService.getOrdersLog())
// console.log(historyService.getEmails())
// console.log(historyService.getOrdersByEmail("jacob@hotmail.com"))



//========================== Lesson Alexander Repeta ======================

/*Контекст (this)
  • Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
  • Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
*/

/*Как метод объекта. В контексте объекта.*/

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this)
//   }
// }

// user.showTag()

/*Вызов без контекст
В строгом режиме = undefined
Не в строгом режиме = Window
*/

// const foo = function () {
//   console.log('showTag -> this', this)
// }

// foo() // showTag -> this undefined

/*Как метод объекта но объявлена как внешняя функция.
В контексте объекта.
*/

// const showTag = function () {
//   console.log('showTag -> this', this)
//   console.log('showTag -> this.tag', this.tag)
// }

// showTag() // showTag -> this undefined
          /*  module-5-1-this.js:476 Uncaught TypeError: Cannot read properties of undefined (reading 'tag')
           at showTag (module-5-1-this.js:476:43)
           at module-5-1-this.js:479:1*/

// const user = {
//   tag: 'Poly'
// }

// user.showUserTag = showTag
// console.log('user', user) // user {tag: 'Poly', showUserTag: ƒ}

// user.showUserTag() // showTag -> this {tag: 'Poly', showUserTag: ƒ}
                      // showTag -> this.tag Poly

/*Вызов без контекста, но объявлена как метод объекта*/

// const user = {
//   tag: 'Poly',
//   showTag() {
//     console.log('showTag -> this', this)
//     console.log('showTag -> this.tag', this.tag)
//   },
// }

// user.showTag() // showTag -> this {tag: 'Poly', showUserTag: ƒ}
//                // showTag -> this.tag Poly

// const outerShowTag = user.showTag

// outerShowTag() // showTag -> this undefined
              /*module-5-1-this.js:500 Uncaught TypeError: Cannot read properties of undefined (reading 'tag')
                at showTag (module-5-1-this.js:500:45)
                at module-5-1-this.js:509:1*/


/*Контекст в callback-функциях*/

// const user = {
//   tag: 'Poly',
//   showTag() {
//     console.log('showTag -> this', this)
//     console.log('showTag -> this.tag', this.tag)
//   },
// }

// user.showTag()

// const xyz = user.showTag

// xyz()

// const invokeAction = function (action) {
//   console.log(action)

//   action()
// }

// invokeAction(user.showTag) //showTag -> this undefined


//============= EXAMPLE ================
//================ 1 ===================

// const fn = function () {
//   console.log('fn -> this', this);
// }

// fn() // fn -> this undefined


//================ 2 ===================
// const book = {
//   title: 'React for beginners',
//   showThis() {
//     console.log('showThis -> this', this)
//   },
//   showTitle() {
//     console.log('showTitle -> this.title', this.title)
//   },
// }

// book.showThis() // showThis -> this {title: 'React for beginners', showThis: ƒ, showTitle: ƒ}

// const outerShowThis = book.showThis
// outerShowThis() //showThis -> this undefined

// const outerShowTitle = book.showTitle
// outerShowTitle()
                  /*module-5-1-this.js:557 Uncaught TypeError: Cannot read properties of undefined (reading 'title')
                   t showTitle (module-5-1-this.js:557:49)
                   at module-5-1-this.js:567:1*/


//================ 3 ===================
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this)
//     this.color = color
//   }

//   // changeColor() // changeColor -> this undefined

//   const sweater = {
//     color: 'teal',
//   }

//   sweater.updateColor = changeColor
  
//   // sweater.updateColor('red') // changeColor -> this {color: 'teal', updateColor: ƒ}

//   return sweater.updateColor
// }

// const swapColor = makeChangeColor()

// swapColor('blue') // changeColor -> this undefined


//================ 4 ===================
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this)
//     this.color = color
//   }

//   return changeColor
// }

// const updateColor = makeChangeColor()
// updateColor('yellow') // changeColor -> this undefined

// const hat = {
//   color: 'blue',
//   updateColor,
// }

// console.log(hat.updateColor) // ƒ (color) {console.log('changeColor -> this', this)this.color = color}
  
// hat.updateColor('orange') // changeColor -> this {color: 'blue', updateColor: ƒ}

//================ 5 ===================
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this)
//     this.value += value
//   },
//   decrement(value) {
//     console.log('decrement -> this', this)
//     this.value -= value
//   },
  
// }

// const updateCounter = function (value, operation) {
//   operation(value)
// }

// // updateCounter(10, counter.increment)
// updateCounter(5, counter.decrement)






//============== call & apply ====================

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr)
//   console.log('showthis -> this', this)
// }

// showThis()

// const objA = {
//   a: 5,
//   b:10,
// }

// showThis.call(objA, 10, 20, [30, 40, 50])
// showThis.apply(objA, [1, 2, [3, 4, 5]])

// const objB = {
//   x: 777,
//   y: 25,
// }

// showThis.call(objB, 1, 2, 3, 4, 5)
// showThis.apply(objB, [10, 20, 30, 40, 50])
// showThis()


const changeColor = function (color) {
  console.log('changeColor -> this', this)
  this.color = color
}

const hat = {
  color: 'black',
}

// changeColor.call(hat, 'orange')
// changeColor.apply(hat, ['red'])
// console.log(hat)

const sweater = {
  color: 'green',
}

// changeColor.call(sweater, 'blue')
// console.log(sweater)



//============== bind ================

const changeHatColor = changeColor.bind(hat)
const changeSweaterColor = changeColor.bind(sweater)

// changeColor()
// changeHatColor('yellow')
// console.log(hat)

// changeSweaterColor('red')
// console.log(sweater)

// решение проблемы с counter

//  const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this)
//     this.value += value
//   },
//   decrement(value) {
//     console.log('decrement -> this', this)
//     this.value -= value
//   },
  
// }

// const updateCounter = function (value, operation) {
//   operation(value)
// }

// updateCounter(10, counter.increment.bind(counter))
// updateCounter(5, counter.decrement.bind(counter))

// console.log(counter)


