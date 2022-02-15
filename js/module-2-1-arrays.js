// ARRAYS  Array() String() Number() Boolean()

// create (post) new array
// const array = [1, 2, 3, 'JavaScript', 4, 5, 6]
// console.log(array)

// // array length - количество элементов в массиве
// // console.log(array.length)

// // read (get) element by arrays
// console.log(array[0])
// console.log(array[3])

// // update (patch) element in array
// array[0] = 'I love'
// console.log(array[0])
// console.log(array)

// // delete element in array - плохая практика
// delete array[1]
// delete array[2]

// console.log(array[1])
// console.log(array[0])
// console.log(array)

// add element by index
// array[1] = 'HTML'
// array[2] = 'CSS'
// console.log(array)

// iterate by array (for & for...of)
// const array = [1, 2, 3, 'JavaScript', 4, 5, 6]
// array[0] = 'I Love'
// console.table(array)

//                                i = i + 1
//                                i++

// for (let i = 0; i < array.length; i += 1) {
//   console.log(`итерация - ${i + 1}:`, array[i])
   
// //   // итерация 1 - array[0] - I Love
// //   // итерация 2 - array[1] - 2
// //   // итерация 3 - array[2] - 3
// //   // итерация 4 - array[3] - JavaScript
// //   // итерация 5 - array[4] - 4
// //   // итерация 6 - array[5] - 5
// //   // итерация 7 - array[6] - 6
// }

// break & continue
// CONTINUE
// const array = ['I love', 'HTML', 'CSS', 'JavaScript', 4, 5, 6]
// for (let i = 0; i < array.length; i += 1) {
//   if (typeof array[i] === 'string') {
//     continue
//   }
//   console.log(`итерация - ${i + 1}:`, array[i])
// }

// // BREAK
// for (let i = 0; i < array.length; i += 1) {
//   console.log('BREAK');
//   if (typeof array[i] === 'string') {
//     break
//   }
//   console.log(`итерация - ${i + 1}:`, array[i])
// }

// multidimensional arrays (многомерные массивы)
// const multiArray = [
//   [1, 10, 100, 1000],
//   [2, 20, 200, 2000],
//   [3, 30, 300, 3000],
// ]
// console.log(multiArray.length) // 3
// // console.log(multiArray[0]) // [1, 10, 100, 1000]

// let it = 1
// for (let array of multiArray) {
//   console.log(`iteration - ${it}:`, array)
//   it += 1
// }
// // перебрал масивы которые в масиве

// for (let zzz of multiArray) {
//   console.log(`iteration - ${it}:`, zzz)
//   it += 1
//   for (let xxx of zzz) {
//     console.log('xxx:', xxx)
//   }
// }
// получился цикл в цикле

// Примитивы присваиваются новой переменной по значению - т.е. ксерокопия
// let age = 30
// console.log('age', age)

// let myAge = age
// console.log('myAge', myAge)
// // переменная это ячейка памяти (в данном случае - age & myAge) в которую вложили значение (числовое - 30)
// console.log(age === myAge) // true

// age = 31
// // если изменить значение переменной - age, значение переменной - myAge не изменится
// console.log('age', age)
// console.log('myAge', myAge)
// console.log(age === myAge) // false



// Примитивные данные (string, number, boolean, undefined, null) - копируются по значению в отдельную ячейку
// памяти

// С массивами, фунциями и объектами - иначе
// Cложные типы передают только ссылку, т.е. еще одна переменная имеет доступ к тем же данным
// const numbers = [12, 23, 34, 46]
// console.log('numbers:', numbers)

// const myNumbers = numbers
// console.log('myNumbers:', myNumbers)
// // а теперь изменю значение первого элемента в исходном массиве
// numbers[0] = 100500
// console.log('numbers:', numbers)
// console.log('myNumbers:', myNumbers) // так же изменится значение
// console.log(numbers === myNumbers) // true

// Array Methods
// const numbers = [12, 23, 34, 46]
// numbers[0] = 100500
// console.log('numbers:', numbers)

// // slice() - копирует в отдельную ячейку памяти
// const mySliceNumbers = numbers.slice() // slice() - копирует значения всего масива
// console.log('mySliceNumbers:', mySliceNumbers)

// console.log(mySliceNumbers === numbers) // false - разные ячейки памяти

// numbers[0] = 12
// console.log('numbers:', numbers)
// console.log('mySliceNumbers:', mySliceNumbers)

// console.log(mySliceNumbers === numbers) // false - разные ячейки памяти

// //                           копирует (с__до__), не включая
// const firstTwoElements = numbers.slice(0, 2)
// console.log(firstTwoElements)

// split() - из строки в массив
// let myString = 'my String'
// console.log(typeof myString, myString)
// console.log(myString[0])
// console.log(myString[1])
// console.log(myString[2])
// console.log(myString[3])
// console.log(myString[4])
// console.log(myString[5])
// console.log(myString[6])
// console.log(myString[7])
// console.log(myString[8])
// console.log(myString.length)


// const arrayFromString1 = myString.split('')
// console.log(arrayFromString1)

// const arrayFromString2 = myString.split(' ')
// console.log(arrayFromString2)

// const arrayFromString3 = myString.split('s')
// console.log(arrayFromString3)

// const arrayFromString4 = myString.split('S')
// console.log(arrayFromString4)

// join() - из массива в строку
// const myArray = ['I', 'Love', 'JavaScript']
// console.log(myArray.length)

// let arrayToString1 = myArray.join(' ')
// console.log(arrayToString1)

// let arrayToString2 = myArray.join('-')
// console.log(arrayToString2)

// indexOf() & includes()
// const myArray = ['I', 'Love', 'JavaScript']
// console.log(myArray.indexOf('Love')) // если находит, покажет индекс значения. Не находит, покажет -1
// console.log(myArray.includes('love')) // если находит - true. Не находит - false

// unshift(), shift(), push(), pop()

//                                   ADD
// unshift(el1, ... , el) -------------------------- push(el1, ... , el)
//                        |         array          |
//                        |   [0],[1],[2],[3],[4]  |
//                shift() -------------------------- pop()
//                                  DELETE

// const exampleArray = [1, 1, 2, 3, 4, 4]
// console.log(exampleArray) 

// // добавить можно любое кол-во элементов .unshift(0, 0,...)
// const unshiftElem = exampleArray.unshift(0, 0)// добавит значение (в данном случае 0) в начало массива
// console.log(unshiftElem) // exampleArray.length - новая длинна массива 
// console.log(exampleArray) // [0, 0, 1, 1, 2, 3, 4, 4]

// // добавить можно любое кол-во элементов .unshift(5, 5,...)
// const pushElem = exampleArray.push(5, 5) // добавит значение (в данном случае 5) в конец массива
// console.log(pushElem) // exampleArray.length - новая длинна массива
// console.log(exampleArray) // [0, 0, 1, 1, 2, 3, 4, 4, 5, 5]

// // удалить можно только один элемент в начале массива
// const shiftElem = exampleArray.shift() // удаляет один элемент в начале
// console.log(shiftElem) // [0] - покажет удаленный элемент (в данном случае 0)
// console.log(exampleArray) // [0, 1, 1, 2, 3, 4, 4, 5, 5]

// // удалить можно только один элемент в конце массива
// const popElem = exampleArray.pop() // удаляет один элемент в конце
// console.log(popElem) // [5] - покажет удаленный элемент (в данном случае 5)
// console.log(exampleArray) // [0, 1, 1, 2, 3, 4, 4, 5]

// // splice(idx, num) - delete elems
// let deleteSplice = exampleArray.splice(1, 1) // удаляет элемент в любом месте, любое кол-во
// console.log(deleteSplice) // [1] - покажет удаленный элемент (в данном случае 1) или несколько элементов
// console.log(exampleArray) //[0, 1, 2, 3, 4, 4, 5]

// // splice(idx, num, el1, ... , el) - add new elems
// let addSplice = exampleArray.splice(1, 0, 'I', 'Love', 'JS')
// console.log(addSplice) // []
// console.log(exampleArray) // [0, 'I', 'Love', 'JS', 1, 2, 3, 4, 4, 5]

// // splice(idx, num, el1, ... , el) - replace elemes
// let replaceSplice = exampleArray.splice(7, 1, 'React', 'NodeJS')
// console.log(replaceSplice) // [4] - покажет удаленный элемент (в данном случае 4) или несколько элементов
// console.log(exampleArray) // [0, 'I', 'Love', 'JS', 1, 2, 3, 'React', 'NodeJS', 4, 5]

// concat() - через запятую принимает в себя массивы, в той последовательности, в которой их нужно добавить к 
// масиву, на котором этот метод вызван
const firstPiece = [1, 2]
console.log(firstPiece)

const secondPiece = [3, 4]
console.log(secondPiece)

const thirdPiece = [5, 6]
console.log(thirdPiece)

const fullArray = firstPiece.concat(secondPiece, thirdPiece)  
console.log(fullArray)
