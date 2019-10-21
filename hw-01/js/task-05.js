"use strict";

let price;
let countryToDeliver = prompt("Укажите страну для доставки", "");

if (countryToDeliver) {
  countryToDeliver = countryToDeliver.toUpperCase();

  switch (countryToDeliver) {
    case "КИТАЙ":
      price = 100;
      countryToDeliver = "Китай";
      break;

    case "ЧИЛИ":
      price = 250;
      countryToDeliver = "Чили";
      break;

    case "АВСТРАЛИЯ":
      price = 170;
      countryToDeliver = "Австралию";
      break;

    case "ИНДИЯ":
      price = 80;
      countryToDeliver = "Индию";
      break;

    case "ЯМАЙКА":
      price = 120;
      countryToDeliver = "Ямайку";
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }

  if (price) {
    alert(`Доставка в ${countryToDeliver} будет стоить ${price} кредитов`);
  }
} 
