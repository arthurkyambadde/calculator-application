"use strict";

const numberButton = Array.from(document.querySelectorAll(".number"));

// console.log(numberButton);

const functionsButtons = Array.from(
  document.querySelectorAll(".math-operation")
);
// console.log(functionsButtons);

const sinX = document.querySelector(".sin-operation");
const cosX = document.querySelector(".cos-operation");
const tanX = document.querySelector(".tan-operation");
const logX = document.querySelector(".log-operation");
const lnX = document.querySelector(".ln-operation");
const squareRoot = document.querySelector(".squareRoot-operation");
const superscript = document.querySelector(".super-script");
// console.log(superscript.innerText);
const squaredValue = document.querySelector(".squaredValue-operation");

const equalsTo = document.querySelector(".equals");
const deleteNumber = document.querySelector(".delete-character");
const clearDisplay = document.querySelector(".clear-display");
const previousFigure = document.querySelector(".previous-calculation");
let currentFigure = document.querySelector(".current-calculation");

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

  if (buttonText === "log") {
    currentFigure = log(currentFigure);
    console.log(currentFigure);
  }

  if (buttonText === "=") {
    previousFigure.innerText = eval(currentFigure.innerText);
    currentFigure.innerText = "";
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

// const me = "jjfggfjfjfjq";
// me.slice(-1);
// console.log(me.slice(0, me.length - 1));
const sinOperation = () => {
  const radians = Number(currentFigure.innerText) * 0.0174533;
  currentFigure.innerText = `sin(${currentFigure.innerText})`;
  previousFigure.innerText = Math.sin(radians);
};

const cosOperation = () => {
  const radians = Number(currentFigure.innerText) * 0.0174533;
  currentFigure.innerText = `cos(${currentFigure.innerText})`;
  previousFigure.innerText = Math.cos(radians);
};

const tanOperation = () => {
  const radians = Number(currentFigure.innerText) * 0.0174533;
  currentFigure.innerText = `tan(${currentFigure.innerText})`;
  previousFigure.innerText = Math.tan(radians);
};

const logOperation = () => {
  const newNumber = Number(currentFigure.innerText);
  console.log(newNumber);
  currentFigure.innerText = `log(${currentFigure.innerText})`;
  previousFigure.innerText = Math.log10(newNumber);
  console.log("log");
};

const lnOperation = () => {
  const newNumber = Number(currentFigure.innerText);
  currentFigure.innerText = `ln(${currentFigure.innerText})`;
  previousFigure.innerText = Math.log(newNumber);
};

const squareRootOperation = () => {
  const newNumber = Number(currentFigure.innerText);
  currentFigure.innerText = `√(${currentFigure.innerText})`;
  previousFigure.innerText = Math.sqrt(newNumber);
  console.log("hbgjsgjbhf");
};

const squaredvalueOperation = () => {
  const newNumber = Number(currentFigure.innerText);
  console.log(superscript.textContent);
  currentFigure.innerText = `${currentFigure.innerText} ${superscript.innerText}`;
  previousFigure.innerText = newNumber * newNumber;
};

sinX.addEventListener("click", sinOperation);
cosX.addEventListener("click", cosOperation);
tanX.addEventListener("click", tanOperation);
logX.addEventListener("click", logOperation);
lnX.addEventListener("click", lnOperation);
squareRoot.addEventListener("click", squareRootOperation);
squaredValue.addEventListener("click", squaredvalueOperation);
