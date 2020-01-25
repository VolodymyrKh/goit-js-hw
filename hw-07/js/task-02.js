"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsList = document.querySelector("#ingredients");

const createItem = text => {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
};

const createList = arr => arr.map(item => createItem(item));

ingredientsList.append(...createList(ingredients));


