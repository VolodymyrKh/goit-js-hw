"use strict";

let price;
const PRINT_COUNTRY ='Напишите название страны в которую нужно доставить товар';
const CANCEL_BY_USER = 'Отменено пользователем!';
const NOT_DELIVERY = 'В вашей стране доставка не доступна';
const CHINA = 'КИТАЙ';
const CHILLI = 'ЧИЛИ';
const INDIA = 'ИНДИЯ';
const JAMAICA = 'ЯМАЙКА';
const AUSTRALIA = 'АВСТРАЛИЯ'
let countryToDeliver = prompt(PRINT_COUNTRY);

if (countryToDeliver) {
  countryToDeliver = countryToDeliver.toUpperCase();

  switch (countryToDeliver) {
    case CHINA:
      price = 100;
      countryToDeliver = "Китай";
      break;

    case CHILLI:
      price = 250;
      countryToDeliver = "Чили";
      break;

    case AUSTRALIA:
      price = 170;
      countryToDeliver = "Австралию";
      break;

    case INDIA:
      price = 80;
      countryToDeliver = "Индию";
      break;

    case JAMAICA:
      price = 120;
      countryToDeliver = "Ямайку";
      break;

    default:
      alert(NOT_DELIVERY);
  }

  if (price) {
    alert(`Доставка в ${countryToDeliver} будет стоить ${price} кредитов`);
  }
} 
