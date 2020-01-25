"use strict";
const inputName = document.querySelector("#name-input");

const outputName = document.querySelector("#name-output");

// console.log(inputName);
// console.log(outputName);

inputName.addEventListener(
  "input",
  event =>
    (outputName.textContent =
      event.currentTarget.value === ""
        ? "незнакомец"
        : event.currentTarget.value)
);
