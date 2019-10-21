"use strict";

const total = 100;
const ordered = 50;

if (ordered > total) {
  // alert('На складе недостаточно твоаров!')
  console.log("На складе недостаточно товаров!");
} else {
  // alert('Заказ оформлен, с вами свяжется менеджер')
  console.log("Заказ оформлен, с вами свяжется менеджер");
}

const message =
  ordered > total
    ? "На складе недостаточно товаров!"
    : "Заказ оформлен, с вами свяжется менеджер";
console.log(message);
