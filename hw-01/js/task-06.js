"use strict";

let input;
let total = 0;

do {
  input = prompt("Введите число", "");
  if (!Number(input) && input !== null) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += Number(input);
  }
} while (input);

console.log("Общая сумма чисел равна:", total);
