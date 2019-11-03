"use strict";
const checkForSpam = function(str) {
  const SPAM = "spam";
  const SALE = "sale";
  const strLowerCase = str.toLowerCase();
  let bool = false;
  if (strLowerCase.includes(SPAM) || strLowerCase.includes(SALE)) {
    bool = true;
  }

  return bool;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
