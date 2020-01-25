"use strict";

const fontSizeControll = document.querySelector("#font-size-control");

const textToChange = document.querySelector("#text");

fontSizeControll.addEventListener("input", event => {
  let fontSize = event.currentTarget.value;

  textToChange.style.fontSize = fontSize + "px";
});
