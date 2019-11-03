"use strict";
const formatString = function(string) {
  const chars = string.split("");
  let newString;
  if (chars.length > 40) {
    chars.length = 40;
    chars.push("...");
  }
  newString = chars.join("");
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
