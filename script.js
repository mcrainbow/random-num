"use strict";

const number = document.querySelector(".count");
const button = document.querySelector(".reset");

button.addEventListener("click", () => {
  number.innerHTML = Math.floor(Math.random() * 10 + 1);
  console.log(number.innerHTML);
});
