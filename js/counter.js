const counter = {
  value: 0,
  increment() {
    console.log('increment -> this', this)
    this.value += 1
  },
  decrement() {
    console.log('decrement -> this', this)
    this.value -= 1
  },
}

const decrementBtm = document.querySelector('.js-decrement')
const incrementBtm = document.querySelector('.js-increment')
const valueEl = document.querySelector('.js-value')

console.log(decrementBtm)
console.log(incrementBtm)
console.log(valueEl)


decrementBtm.addEventListener('click', function () {
  console.log('Кликнули на декремент')

  counter.decrement()
  console.log(counter)
  valueEl.textContent = counter.value
})

incrementBtm.addEventListener('click', function () {
  console.log('Кликнули на инскремент')

  counter.increment()
  console.log(counter)
  valueEl.textContent = counter.value
})