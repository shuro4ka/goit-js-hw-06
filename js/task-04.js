// Лічильник складається зі спану і кнопок, які по кліку 
// повинні збільшувати і зменшувати його значення на одиницю.
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Створи змінну counterValue, в якій буде зберігатися 
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких 
// збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.




const counter = document.querySelector("#value");
let counterValue = 0;

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');

buttonIncrement.addEventListener("click", () => {
counterValue += 1;
counter.textContent = counterValue;
});
buttonDecrement.addEventListener("click", () => {
counterValue -=1;
counter.textContent = counterValue;
});

























// const counter = document.querySelector("#value");
// let counterValue = 0;

// const buttonDecrement = document.querySelector('button[data-action="decrement"]');
// const buttonIncrement = document.querySelector('button[data-action="increment"]');

// buttonDecrement.addEventListener("click", () => {
//   counterValue--;
//   counter.textContent = counterValue;
// });

// buttonIncrement.addEventListener("click", () => {
//   counterValue++;
//   counter.textContent = counterValue;
// });