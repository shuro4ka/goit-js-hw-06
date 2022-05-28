// Напиши скрипт, який для кожного елемента 
// масиву ingredients:
// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його 
// текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за 
// одну операцію у список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const makeIngredientsList = elements => {
  return elements.map(element => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = element;

  return listItem;
});
}
const elements = makeIngredientsList(ingredients);
ingredientsList.append(...elements);
