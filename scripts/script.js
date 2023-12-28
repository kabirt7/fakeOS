import { toggleMenu } from "./modules/banner.js";
import {
  calcModal,
  appendToDisplay,
  clearDisplay,
  evalExp,
} from "./modules/modal-calculator.js";

// banner functionality
const appleIcon = document.querySelector("#apple-wrapper");
appleIcon.addEventListener("click", toggleMenu);

// Dock Modals
const calcIcon = document.querySelector(".footer__wrap li:nth-child(2)");
calcIcon.addEventListener("click", calcModal);

// Calculator functionality with event delegation
const modalContainer = document.querySelector("#htmlRef");

modalContainer.addEventListener("click", function (event) {
  const target = event.target;

  if (target.tagName === "TD") {
    console.log(`${target.textContent} clicked!`);

    if (/[0-9.]/.test(target.dataset.value)) {
      appendToDisplay(target.dataset.value);
      evalExp(target.dataset.value);
    } else if (/[AC]/.test(target.dataset.value)) {
      clearDisplay();
    } else {
      evalExp(target.dataset.value);
    }
  }
});

// import { toggleMenu } from "./modules/banner.js";
// import { calcModal } from "./modules/modal-calculator.js";
// import { appendToDisplay } from "./modules/modal-calculator.js";

// // banner functionality

// const appleIcon = document.querySelector("#apple-wrapper");
// appleIcon.addEventListener("click", toggleMenu);

// // Dock Modals

// const calcIcon = document.querySelector(".footer__wrap li:nth-child(2)");
// calcIcon.addEventListener("click", calcModal);

// // Calculator functionality

// const calcButtons = document.querySelectorAll("td");
// console.log(calcButtons);
// calcButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     if (/[0-9]/.test(button.dataset.value)) {
//       appendToDisplay(button.dataset.value);
//     }
//   });
// });

// footer menu single clickable functionality + greyed out other menu items

// desktop icons, 3 of them. some as in the footer menu
// these modals will work through js, not the show hide functionality

// const appleWrapper = document.querySelector("#apple-wrapper");
// const appleMenu = document.querySelector("#apple-menu");

// appleWrapper.addEventListener("click", function () {
//   appleMenu.classList.toggle("banner__list__menu--hidden");
//   appleMenu.classList.toggle("banner__list__menu--show");
// });
