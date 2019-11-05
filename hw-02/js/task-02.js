"use strict";
// const calculateEngravingPrice = function(message, pricePerWord) {
//   const words = message.split(" ");
//   let totalPrice = words.length * pricePerWord;
//   return totalPrice;
// };

const calculateEngravingPrice = (message, pricePerWord) =>
  message.split(" ").length * pricePerWord;

console.log(
  "Загальна вартість гравіювання: ",
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  "Загальна вартість гравіювання: ",
  calculateEngravingPrice("Donec orci lectus aliquam est", 40)
);
