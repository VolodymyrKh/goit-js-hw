"use strict";
// const formatString = function(string) {
//   const chars = string.split("");
//   let newString;
//   if (chars.length > 40) {
//     chars.length = 40;
//     chars.push("...");
//   }
//   newString = chars.join("");
//   return newString;
// };

const formatString = function(string) {
  let newString = string;
  if (string.length > 40) {
    newString = `${string.slice(0, 40)}...`;
  }

  return newString;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
