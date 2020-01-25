"use strict";
let currentValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", Decrement);
incrementBtn.addEventListener("click", Increment);

function Decrement() {
  currentValue -= 1;
  counterValue.textContent = currentValue;
}

function Increment() {
  currentValue += 1;
  counterValue.textContent = currentValue;
}
