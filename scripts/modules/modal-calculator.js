// import { updatedOpenedApp } from "../script.js";
import { closeModals } from "./app-close-handling.js";

export const calcModal = () => {
  closeModals();
  const html = document.querySelector("#htmlRef-calc");
  // handleDockIcons();
  if (html.classList.contains("hidden")) {
    html.classList.remove("hidden");
  } else {
    html.classList.add("hidden");
  }
};

export const appendToDisplay = (value) => {
  console.log("got to append function");
  const display = document.querySelector(".calculator__display__text");
  display.textContent = "";
  display.textContent += value;
};

export const clearDisplay = () => {
  console.log("got to clear function");
  let exp = document.querySelector(".calculator__expression");
  let display = document.querySelector(".calculator__display__text");
  display.textContent = "";
  exp.textContent = "";
};

export const evalExp = (value) => {
  console.log("got to eval function");
  let exp = document.querySelector(".calculator__expression");
  let display = document.querySelector(".calculator__display__text");

  if (/[=]/.test(value)) {
    console.log("got to equals");
    display.textContent = eval(exp.textContent);
    exp.textContent = display.textContent;
  } else if (/[^=]/.test(value)) {
    exp.textContent += value;
    console.log(exp);
  }
};
