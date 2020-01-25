"use strict";
const categoriesList = document.querySelector("#categories");

const categoriesListNumber = categoriesList.children.length;

console.log(`В списке ${categoriesListNumber} категории`);

[...categoriesList.children].forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll("li").length}`);
});
