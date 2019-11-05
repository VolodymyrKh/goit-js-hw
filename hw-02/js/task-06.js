"use strict";
let input;
let total = 0;
const numbers = [];

do {
  input = prompt("ВВедіть число", "");
  let arrayItem = Number(input);
  if (!arrayItem && input !== null && arrayItem !== 0) {
    alert("Ви ввели не число, спробуйте еще раз");
  } else if (input !== null) {
    numbers.push(arrayItem);
  }
} while (input);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
}
console.log(numbers);
console.log(`Загальна сума чисел дорівнює ${total}`);
