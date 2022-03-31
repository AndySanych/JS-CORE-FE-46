/////////////////////////// Чистые функции ////////////////////////

/*Функция с побочными эффектами - это функция которая в процессе выполнения может изменять 
или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять 
операции ввода-вывода и т. п.
*/

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value

//   }
// }

// const numbers = [1, 2, 3, 4, 5]
// dirtyMultiply(numbers, 2)
// Произошла мутация исходных данных - массива numbers
// console.log(numbers)
/*Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. Она 
изменяет (мутирует) исходный массив по ссылке.

 Чистая функция (pure function) - это функция результат которой зависит только от значений переданных 
аргументов. При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет 
побочных эффектов, то есть не изменяет значения аргументов.

 Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не изменяя
исходный.*/

// const pureMultiply = (array, value) => {
//   const newArrya = []

//   array.forEach(element => {
//     newArrya.push(element * value)
//   })

//   return newArrya
// }

// const numbers = [1, 2, 3, 4, 5]
// const doubleNumbers = pureMultiply(numbers, 2)

// // Не произошло мутации исходных данных
// console.log(numbers) // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubleNumbers) // [2, 4, 6, 8, 10]



//////////////////////////// EXMPLE ////////////////////////

/*                         ---  1  ---                     */

// function changeEven(numbers, value) {

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }
// const numberArray = [1, 2, 3, 4, 5];
// changeEven(numberArray, 10)
// console.log(numberArray)


/*Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, 
значение которого это чётное число, добавляя к нему значение параметра value.
 Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, 
а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
*/

// const changeEven = (numbers, value) => {
//   const newNumbers = []

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       number += value
//     }
//     newNumbers.push(number)
//   })

  
//   return newNumbers
// }
// const numberArray = [1, 2, 3, 4, 5];
// const doubleNumbers = changeEven(numberArray, 10)

// console.log(numberArray)
// console.log(doubleNumbers)



///////////////////// Перебирающие методы массива ///////////////////////////

/*В JavaScript есть методы массивов пришедшие из функциональных языков. Большинство из них это 
чистые функции. Они создают новый массив, заполняют его, применяя к значению каждого элемента 
указанную коллбек-функцию, после чего возвращают этот новый массив.
 Все перебирающие методы массивов имеют схожий синтаксис. Исходный массив array, вызов метода 
method и callback-функция callback в качестве аргумента метода.
*/

// array.method(callback[currentValue, index, array])

/*В большинстве методов, аргументами callback-функции являются значение элемента currentValue 
(первый параметр), позиция элемента index (второй параметр) и сам исходный массив array 
(третий параметр).
*/

// array.method((item, idx, arr) => {
   // логика которая будет применяться на каждой итерации
// })

/*Все параметры, кроме значения элемента item, необязательны. Названия параметров могут быть любые, 
но есть неофициальные соглашения.
*/

// array.method(item => {
  // логика которая будет применяться на каждой итерации
// })



//////////////////////////////// Метод map() ///////////////////////////////

/*Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для 
каждого элемента исходного массива, а результат её работы записывает в новый массив, который и будет 
результатом выполнения метода.
*/

// массив.map((element, index, arrya) => {
  // Тело коллбек-функции
// })

/* * Поэлементно перебирает оригинальный массив.
   * Не изменяет оригинальный массив.
   * Результат работа коллбек-функции записывается в новый массив.
   * Возвращает новый массив такой же длины.
Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный массив 
используется как эталон, на базе которого можно сделать другую коллекцию.
*/

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер']

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase())
// console.log(planetsInUpperCase) // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLocaleLowerCase())
// console.log(planetsInLowerCase) // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
// console.log(planets) // ['Земля', 'Марс', 'Венера', 'Юпитер']

/*Использование анонимных стрелочных функций с неявным возвратом сильно сокращает «шум» объявления 
коллбек-функции, делая код чище и проще для восприятия.
*/


/////////////////////////////// EXAMPLE ///////////////////////////////

/*                            ---  1  ---                       */

/*Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. 
Обязательно используй метод map().
*/

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter']

// const planetsLengths = planets.map(planet => planet.length)
// console.log(planets)
// console.log(planetsLengths)



/////////////////////////////// Массив объектов ////////////////////////////////

/*Мы уже знаем что повседневная задача это манипуляция массивом объектов. Например, получить массив 
значений свойства из всех объектов. Есть массив студентов, а нужно получить отдельный массив их имён.
*/

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ]

// const name = students.map(student => student.name)
// console.log(name) // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

/*Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение 
свойства каждого из них.
*/


/////////////////////////////// EXAMPLE ///////////////////////////////

/*                            ---  1  ---                       */

/*Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг 
(свойство title) из всех объектов массива books.
*/

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ]

// const titles = books.map(book => book.title)
// console.log(titles)


/*                            ---  2  ---                       */

/*Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
*/

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]
  
/*Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей 
(свойство name) из массива объектов в параметре users.
*/

// const getUserNames = users => {

// }

//                  ||
//                  \/

// const getUserNames = users => users.map(user => user.name)

/*Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов 
пользователей (свойство email) из массива объектов в параметре users.
*/

// const getUserEmails = users => users.map(user => user.email)


/////////////////////////////// Метод flatMap() ////////////////////////////////

/*Метод flatMap(callback) аналогичен методу map(), но применяется в случаях когда результат 
это многомерный массив который необходимо «разгладить».
*/

// массив.flatMap((element, index, array) => {
//   // Тело коллбек-функции
// })

/*В массиве students хранится список студентов со списком предметов которые посещает студент 
в свойстве courses. Несколько студентов могут посещать один и тот же предмет. Необходимо составить 
список всех предметов которые посещает эта группа студентов, пока даже повторяющихся.
*/

// const students = [
//   {name: 'Манго', courses: ['математика', 'физика']},
//   {name: 'Поли', courses: ['информатика', 'математика']},
//   {name: 'Киви', courses: ['физика', 'биология']},
// ]

// const coursesMap = students.map(student => student.courses)
// console.log(coursesMap) // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// const coursesFlatMap = students.flatMap(student => student.courses)
// console.log(coursesFlatMap) // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология']

/*Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает
в новый массив. Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице
(одна вложенность). Этот разглаженный массив и есть результат работы flatMap().
*/



/////////////////////////////// EXAMPLE ///////////////////////////////

/*                            ---  1  ---                       */

/*Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров 
книг (свойство genres) из массива книг books.
*/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ]

// const genres = books.flatMap(book => book.genres)
// console.log(genres)




/////////////////////////////// Метод filter() ////////////////////////////////

/*Метод filter(callback) используется для единственной операции - фильтрации массива, то есть 
когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.
*/

// массив.filter((element, index, array) => {
//   // Тело коллбек-функции
// })

/*
 * Не изменяет оригинальный массив.
 * Поэлементно перебирает оригинальный массив.
 * Возвращает новый массив.
 * Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
 * Если коллбек вернул true элемент добавляется в возвращаемый массив.
 * Если коллбек вернул false элемент не добавляется в возвращаемый массив.
 * Если ни один элемент не удовлетворил условию, возвращает пустой массив.
*/

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

/*То есть метод filter вызывает коллбек-функцию для каждого элемента исходного массива и 
если результат её выполнения true, текущий элемент добавляет в новый массив.
*/


/////////////////////////////// EXAMPLE ///////////////////////////////

/*                            ---  1  ---                       */

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73]

// const evenNumbers = numbers.filter(number => number % 2 === 0)
// console.log(evenNumbers)

// const oddNumbers = numbers.filter(number => number % 2 !== 0)
// console.log(oddNumbers)


///////////////////////// Фильтрация уникальных элементов //////////////////////////

/*Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только 
уникальные элементы. Этот приём работает только с массивом примитивных значений - не объектов.
 Вернёмся к группе студентов и массиву всех посещаемых предметов, которые мы получили методом 
flatMap().
*/

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ]

// const allCourses = students.flatMap(student => student.courses)
// console.log(allCourses) // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология']

/*В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться. 
Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы, 
то есть без повторений.
*/

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// )

// console.log(uniqueCourses) // ['математика', 'физика', 'информатика', 'биология']

/*Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course 
и получаем его индекс в оригинальном массиве всех курсов. В параметре index хранится индекс текущего 
элемента course при переборе массива методом filter.
 Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз 
когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.
*/

/*# Массив всех курсов
['математика', 'физика', 'информатика', 'математика', 'физика', 'биология']
*/

/*Для элемента 'математика' под индексом 0:
  - indexOf() вернёт 0, потому что ищет первое совпадение.
  - Значение параметра index будет 0.
  - Они равны, значит это уникальный элемент.

 Для элемента 'математика' под индексом 3:
  - indexOf() вернёт 0, потому что ищет первое совпадение.
  - Значение параметра index будет 3.
  - Они не равны, значит это повторяющийся - не уникальный элемент.
  */



  /////////////////////////////// EXAMPLE ///////////////////////////////

/*                            ---  1  ---                       */

/*Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) 
из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.
*/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ]

// const allGenres = books.flatMap(book => book.genres)
// console.log(allGenres)
// const uniqueGenres = allGenres.filter(
//   (book, index, array) => array.indexOf(book) === index
// )
// console.log(uniqueGenres)



  ///////////////////////// Массив объектов //////////////////////////

/*При работе с массивом объектов выполняется фильтрация по значению какого-то свойства. 
В результате получается новый массив отфильтрованных объектов.
 Например, есть массив студентов с баллами за тест. Необходимо отфильтровать лучших (балл выше 80),
худших (балл ниже 50) и средних студентов (балл от 50 до 80).
*/

// const LOW_SCORE = 50
// const HIGH_SCORE = 80
// const students = [
//   {name: 'Манго', score: 83 },
//   {name: 'Поли', score: 59 },
//   {name: 'Аякс', score: 37 },
//   {name: 'Киви', score: 94 },
//   {name: 'Хьюстон', score: 64 },
// ]

// const best = students.filter(student => student.score >= HIGH_SCORE)
// console.log(best) // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE)
// console.log(worst) // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({score}) => score >= LOW_SCORE && score < HIGH_SCORE
// )
// console.log(average) // Массив объектов с именами Поли и Хьюстон



/////////////////////////////// EXAMPLE ///////////////////////////////

/*                            ---  1  ---                       */

/*Используя метод filter() дополни код так, чтобы:
  - В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше 
  либо равно значению переменной MIN_RATING.
  - В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) 
  которое совпадает со значением в переменной AUTHOR.
  */

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67
//   },
// ]

// const MIN_RATING = 8
// const AUTHOR = "Bernard Cornwell"

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING)
// console.log(topRatedBooks)

// const booksByAuthor = books.filter(book => book.author === AUTHOR)
// console.log(booksByAuthor)



/*                            ---  2  ---                       */

/*Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.*/
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

/*Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив 
пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
*/

// const getUsersWithEyeColor = (users, color) => {
 
// }

//                            ||
//                            \/
                              
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color)


/*                            ---  3  ---                       */


/*Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив 
пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
*/

// const getUsersWithAge = (users, minAge, maxAge) => users.filter(
//   ({ age }) => age >= minAge && age < maxAge
// )


/*                            ---  4  ---                       */

/*Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив 
пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя 
хранится в свойстве friends.
*/

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName))
// };
// console.log(getUsersWithFriend(users, "Jacklyn Lucas"))

/*                            ---  5  ---                       */

/*Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей 
(свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы 
возвращаемый массив не содержал повторений.
*/

// const getFriends = (users) => users.flatMap(user => user.friends)
//   .filter((friends, index, array) => array.indexOf(friends) === index)
// console.log(getFriends(users))

/*                            ---  6  ---                       */

/*Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, 
значение свойства isActive которых true.
*/

// const getActiveUsers = (users) => users.filter(user => user.isActive === true)
// console.log(getActiveUsers(users))

/*                            ---  7  ---                       */

/*Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, 
значение свойства isActive которых false.
*/

// const getInactiveUsers = (users) => {
//    return users.filter(user => user.isActive !== true)
// }

//                        &&

// const getInactiveUsers = (users) => users.filter(user => user.isActive !== true)
// console.log(getInactiveUsers(users))


//////////////////////////////// Метод find() ///////////////////////////////////

/*Если метод filter(cabllack) используется для поиска всех элементов удовлетворяющим условию, то метод find(callback) 
позволяет найти и вернуть первый подходящий элемент, после чего перебор массива прекращается. То есть он ищет до 
первого совпадения.
*/

// массив.find((element, index, array) => {
//   // Тело коллбек-функции
// })

/*  - Не изменяет оригинальный массив.
    - Поэлементно перебирает оригинальный массив.
    - Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.
    - Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает undefined.

Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства. Например, поиск 
пользователя по почте, автомобиля по серийному номеру, книги по названию и т. п.
*/

// const colorPikerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ]
// colorPikerOptions.find(option => option.label === 'blue') // { label: 'blue', color: '#2196F3' }
// colorPikerOptions.find(option => option.label === 'pink') // { label: 'pink', color: '#E91E63' }
// colorPikerOptions.find(option => option.label === 'white') // undefined


/////////////////////////////// EXAMPLE ///////////////////////////////

/*                            ---  1  ---                       */

/*Используя метод find() дополни код так, чтобы:
  - В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением 
  переменной BOOK_TITLE.
  - В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением 
  переменной AUTHOR.
  */

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ]
// const BOOK_TITLE = 'The Dream of a Ridiculous Man'
// const AUTHOR = 'Robert Sheckley'

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE)
// console.log(bookWithTitle)
// const bookByAuthor = books.find(book => book.author === AUTHOR)
// console.log(bookByAuthor)

/*                            ---  2  ---                       */

/*Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого 
(свойство email) совпадает со значением параметра email.
*/

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getUserWithEmail = (users, email) => {
//    return users.find(user => user.email === email)
// }
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"))


/////////////////////////////// Метод findIndex() ///////////////////////////////////

/*Метод findIndex(callback) это современная замена методу indexOf(). Позволяет выполнять поиск по более сложным 
условиям чем просто равенство. Используется как для поиска в массиве примитивов, так и в массиве обьектов.
*/

// массив.findIndex((element, index, array) => {
//   // Тело коллбек-функции
// })

/* - Не изменяет оригинальный массив.
   - Поэлементно перебирает оригинальный массив.
   - Возвращает индекс первого элемента удовлетворяющего условию, то есть когда коллбек возвращает true.
   - Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает -1.
   */

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ]

// colorPickerOptions.findIndex(option => option.label === "blue") // 2
// colorPickerOptions.findIndex(option => option.label === "pink") // 3
// colorPickerOptions.findIndex(option => option.label === "white") // -1



/////////////////////////////// Метод every() ////////////////////////////////////

/*Проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. Возвращает true или false.
*/

// массив.every((element, index, array) => {
//   // Тело коллбек-функции
// })

/* - Не изменяет оригинальный массив.
   - Поэлементно перебирает оригинальный массив.
   - Возвращает true если все элементы массива удовлетворяют условию.
   - Возвращает false если хотябы один элемент массив не удовлетворяет условию.
   - Перебор массива прекращается если коллбек возвращает false.
   */

   // Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false


/////////////////////////////// EXAMPLE ///////////////////////////////

/*                            ---  1  ---                       */

/*Используя метод every() дополни код так, чтобы:

  - В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
  - В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
  - В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
  - В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
  - В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
  - В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
*/

// const firstArray = [26, 94, 36, 18]
// const secondArray = [17, 61, 23]
// const thirdArray = [17, 26, 94, 61, 36, 23, 18]

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0)
// console.log(eachElementInFirstIsEven)
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0)
// console.log(eachElementInFirstIsOdd)

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0)
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0)

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0)
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 === 0)


/*                            ---  2  ---                       */

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

/*Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны 
(свойство isActive) и возвращала true или false.
*/
// const isEveryUserActive = (users) => {
//    return users.every(user => user.isActive === true)
// }

// console.log(isEveryUserActive(users))


/////////////////////////////// Метод some() ////////////////////////////////////

/*Проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true или false.
*/

// массив.some((element, index, array) => {
//   // Тело коллбек-функции
// })

/* - Не изменяет оригинальный массив.
   - Поэлементно перебирает оригинальный массив.
   - Возвращает true если хотя бы один элемент массива удовлетворяет условию.
   - Возвращает false если ни один элемент массив не удовлетворяет условию.
   - Перебор массива прекращается если коллбек возвращает true.
*/

// Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true



/////////////////////////////// EXAMPLE ///////////////////////////////

/*                            ---  1  ---                       */

/*Используя метод some() дополни код так, чтобы:

  - В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
  - В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
  - В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
  - В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
  - В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
  - В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
  */

// const firstArray = [26, 94, 36, 18]
// const secondArray = [17, 61, 23]
// const thirdArray = [17, 26, 94, 61, 36, 23, 18]

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0)
// console.log(anyElementInFirstIsEven) //true
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0)
// console.log(anyElementInFirstIsOdd) //false

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0)
// console.log(anyElementInSecondIsEven) //false
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0)
// console.log(anyElementInSecondIsOdd) //true

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0)
// console.log(anyElementInThirdIsEven) //true
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0)
// console.log(anyElementInThirdIsOdd) //true


/*                            ---  2  ---                       */


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

/*Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей 
(свойство isActive) и возвращала true или false.
*/

// const isAnyUserActive = users => {
//    return users.some(user => user.isActive === true)
// }
// console.log(isAnyUserActive(users)) //true



/////////////////////////////// Метод reduce() ////////////////////////////////////

/*Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с 
сохранением промежуточного результата, как аккумулятор. Немного сложнее других в усвоении, но результат стоит того.
*/

// массив.reduce((previousValue, element, index, array) => {
  // Тело коллбек-функции
// }, initialValue)

/* - Не изменяет оригинальный массив.
   - Поэлементно перебирает оригинальный массив.
   - Возвращает что угодно.
   - Делает что угодно.
Легче всего представить его работу на примере подсчёта суммы элементов массива.
*/

// const total = [2, 7, 3, 14, 6].reduce((previusValue, number) => {
//   return previusValue + number
// }, 0)
// console.log(total) // 32

/*Первый параметр коллбек-функции (previousValue) это аккумулятор, то есть промежуточный результат. Значение 
которое вернёт коллбек-функция на текущей итерации, будет значением этого параметра на следующей.
 Вторым аргументом для reduce() можно передать необязательное начальное значение аккумулятора - параметр initialValue.
 */

 /*# Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
   # присваивает ей значение параметра initialValue или первого элемента
   # перебираемого массива, если initialValue не задан.
previousValue = 0

   # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
   # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
   Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
   Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
   Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
   Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
   Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

   # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
Результат - 32
То есть метод reduce() используется когда необходимо взять «много» и привести к «одному». В повседневных задачах 
его применение сводится к работе с числами.
*/


//////////////////////////////// EXAMPLE ////////////////////////////////////

/*                             ---  1  ---                                 */


/*Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, 
что бы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
*/

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// }
// const playtimes = Object.values(players) // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number
// })
// console.log(totalPlayTime) //2592

// const averagePlayTime = totalPlayTime / playtimes.length


/////////////////////////////// Массив объектов ////////////////////////////////////

/*При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. Например, 
есть массив студентов с баллами за тест. Необходимо получить средний бал.
*/

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ]

// Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score
// }, 0)
// console.log(totalScore) // 337

// const averageScore = totalScore / students.length
// console.log(averageScore) // 67.4



//////////////////////////////// EXAMPLE ////////////////////////////////////

/*                             ---  1  ---                                 */

/*Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и 
получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время 
(свойство playtime) на количество игр (свойство gamesPlayed).
*/

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ]

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed
// }, 0)
// console.log(totalAveragePlaytimePerGame)


/*                             ---  2  ---                                 */

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

/*Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств 
(свойство balance) которые хранят пользователи из массива users.
*/

// const calculateTotalBalance = users => {
//    return users.reduce((totalBalance, user) => totalBalance + user.balance, 0)
// }
// console.log(calculateTotalBalance(users))


/*Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей 
(свойство friends) всех пользователей из массива users.
*/

// const getTotalFriendCount = users => {
//    return users.reduce((getTotalFriendCount, user) => {
//        return getTotalFriendCount + user.friends.length
//    }, 0)
// }
// console.log(getTotalFriendCount(users))



////////////////////////////////////// Продвинутый reduce /////////////////////////////

/*Допустим у нас есть следующая задача: из массива постов твиттера отдельного пользователя необходимо посчитать 
сумму всех лайков. Можно перебрать циклом for или forEach, каждое из этих решений потребует дополнительного кода. 
А можно использовать reduce.
*/
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ]

// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes) // 32

// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// }

// console.log(countLikes(tweets)) // 32

/*Заметили свойство tags у каждого поста? Продолжая тему reduce, мы соберем в массив все теги, которые встречаются 
в постах.
*/

/*Пройдем по всем элементам коллекции и добавим значения свойства tags к аккумулятору, начальное значение 
которого укажем пустым массивом []. На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
*/

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags)

//   return allTags
// }, [])
// console.log(tags)

/*Наверное сбор тегов не одиночная операция, поэтому напишем функцию для сбора тегов из коллекции
*/

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags)

//     return allTags
// }, [])

// console.log(getTags(tweets))

/*После того, как мы собрали все теги из постов, хорошо бы было посчитать количество уникальных тегов в массиве.
 И снова reduce тут как тут.
 */

//  const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags)

//     return allTags
//   }, [])

// const tags = getTags(tweets)
// console.log(tags)

/*Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее. Это стандартная практика если 
callback-функция довольно большая.
 Если в объекте-аккумуляторе acc нету своего свойства с ключем tag, то создаем его и записывает ему значение 0.
 В противном случае увеличиваем значение на 1.
 */

//  const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0
//   }

//   acc[tag] += 1

//   return acc
// }
/* Начальное значение аккумулятора это пустой объект {}
*/
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags)
// console.log(tagCount)



////////////////////////////////////// Цепочки методов /////////////////////////////

/*Есть массив объектов с именами, баллами и посещаемыми предметами каждого студента.
*/

const students = [
  { name: "Манго", score: 83, courses: ["математика", "физика"] },
  { name: "Поли", score: 59, courses: ["информатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["физика", "биология"] },
  { name: "Киви", score: 94, courses: ["литература", "информатика"] },
]

/*Необходимо получить массив их имён отсортированный по возрастанию баллов за тест. Для этого мы отсортируем копию 
массива методом sort(), после чего методом map() составим массив значений свойства name из сортированного массива.
*/

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score)
// const names = sortedByAscendingScore.map(student => student.name)

// console.log(names) // ['Аякс', 'Поли', 'Манго', 'Киви']

/*Проблема в том, что у нас появляются промежуточные переменные после каждой операции кроме финальной. 
Переменная sortedByAscendingScore лишняя и необходима только для хранения промежуточного результата.
 Избавиться от таких «мёртвых» переменных можно группируя вызовы методов в цепочки. Каждый следующий метод 
 будет выполняться на результате работы предыдущего.
 */

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name)

// console.log(names)
 
/* 1. Делаем копию исходного массива перед сортировкой.
   2. На копии вызываем метод sort().
   3. К результату работы метода sort() применяем метод map().
   4. Переменной names присваивается результат работы метода map().
   */

/*Получим сортированный по алфавиту массив уникальных посещаемых предметов.
*/

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b))
  
// console.log(uniqueSortedCourses)
  
/* 1. На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
   2. К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
   3. На результате метода filter() вызываем sort().
   4. Переменной uniqueSortedCourses присваивается результат работы метода sort().

Цепочка методов может быть произвольной длины, но обычно не более 2-3 операций. Во-первых, перебирающие методы 
используются для сравнительно простых операций над коллекцией. Во-вторых, вызов каждого последующего метода, 
это дополнительный перебор массива, что при достаточном количестве, может сказаться на производительности!!!
*/



//////////////////////////////// EXAMPLE ////////////////////////////////////

/*                             ---  1  ---                                 */

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
]

const MIN_BOOK_RATING = 8

/*Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, 
рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
*/
const names = books
  // .map(book => book.author)
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((a, b) => a.localeCompare(b))

// console.log(names)


/*                             ---  2  ---                                 */

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

/*Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей 
отсортированный по возрастанию количества их друзей (свойство friends).
*/

const getNamesSortedByFriendCount = users => {

  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name)
}

// console.log(getNamesSortedByFriendCount(users))


/*                             ---  3  ---                                 */

/*Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) 
отсортированный по алфавиту
*/

const getSortedFriends = users => {
   
  return users
    .flatMap(user => user.friends)
    .filter((friend, index, arr) => arr.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b))
}

// console.log(getSortedFriends(users))


/*                             ---  4  ---                                 */

/*Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей 
(свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
*/

const getTotalBalanceByGender = (users, gender) => {
   
  return users
    .filter(user => user.gender === gender)
    .reduce((total, user) => {
      return total + user.balance;
   }, 0)
}
console.log(getTotalBalanceByGender(users, 'male'))
console.log(getTotalBalanceByGender(users, 'female'))




