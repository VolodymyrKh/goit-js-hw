"use strict";
let currentValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

function decrement() {
  currentValue -= 1;
  counterValue.textContent = currentValue;
}

function increment() {
  currentValue += 1;
  counterValue.textContent = currentValue;
}
