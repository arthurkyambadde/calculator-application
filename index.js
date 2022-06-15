"use strict";

const numberButton = Array.from(document.querySelectorAll(".number"));

// console.log(numberButton);

const functionsButtons = Array.from(
  document.querySelectorAll(".math-operation")
);
// console.log(functionsButtons);

const equalsTo = document.querySelector(".equals");
const deleteNumber = document.querySelector(".delete-character");
const clearDisplay = document.querySelector(".clear-display");
const previousFigure = document.querySelector(".previous-calculation");
const currentFigure = document.querySelector(".current-calculation");

const works = function () {
  let buttonText = this.innerText;
  console.log(buttonText);
  console.log("works");

  if (buttonText === "AC") {
    previousFigure.innerText = "";
    currentFigure.innerText = "";
    return;
  }
  if (buttonText === "Del") {
    currentFigure.innerText = currentFigure.innerText.slice(0, -1);
    return;
  }

  if (buttonText === "=") {
    previousFigure.innerText = eval(currentFigure.innerText);
  } else {
    currentFigure.innerText += buttonText;
    console.log(currentFigure.innerText);
    return;
  }
};

functionsButtons.forEach((functionsButton) =>
  functionsButton.addEventListener("click", works)
);

numberButton.forEach((button) => button.addEventListener("click", works));

const me = "jjfggfjfjfjq";
me.slice(-1);
console.log(me.slice(0, me.length - 1));
