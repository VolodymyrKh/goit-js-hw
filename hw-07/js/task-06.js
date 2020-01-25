"use strict";
const inputValidation = document.querySelector("#validation-input");

inputValidation.addEventListener("blur", event => {
  event.currentTarget.classList.add(
    event.currentTarget.value.length ===
      Number(event.currentTarget.dataset.length)
      ? "valid"
      : "invalid"
  );

  // console.log(event.currentTarget.value.length);
  // console.log(Number(event.currentTarget.dataset.length));
});

inputValidation.addEventListener("focus", event => {
  event.currentTarget.classList.remove("valid");
  event.currentTarget.classList.remove("invalid");
});
