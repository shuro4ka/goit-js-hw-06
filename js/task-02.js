const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const title = document.querySelector("#ingredients");
title.textContent = 'Ingredients';
document.body.append(title);
console.log(title);
document.body.appendChild(title);

const listItem = document.createElement("li");
listItem.classList.add("item");
listItem.textContent = 'Potatoes';
console.log(listItem);
title.appendChild(listItem);








// Напиши скрипт, який для кожного елемента 
// масиву ingredients:

// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його 
// текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за 
// одну операцію у список ul.ingredients.
