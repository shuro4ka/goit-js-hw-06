//Для кожного элемента li.item у спику ul#categories, 
//знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і 
//кількість елементів в категорії (усіх <li>, вкладених в нього).

const numberOfCategories = document.querySelectorAll("li.item");
console.log("Number of categories:", numberOfCategories.length);

numberOfCategories.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const numberOfInnerItems = item.querySelectorAll("ul > li");
    console.log(`Category: ${title} \nElements: ${numberOfInnerItems.length}`);
})