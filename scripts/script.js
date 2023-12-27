// banner functionality
import { toggleMenu } from "./modules/dom.js";
import { calcModal } from "./modules/modal-calculator.js";

const appleIcon = document.querySelector("#apple-wrapper");
appleIcon.addEventListener("click", toggleMenu);

// calculator modal

const calcIcon = document.querySelector(".footer__wrap li:nth-child(2)");
calcIcon.addEventListener("click", calcModal);

// footer menu single clickable functionality + greyed out other menu items

// desktop icons, 3 of them. some as in the footer menu
// these modals will work through js, not the show hide functionality

// const appleWrapper = document.querySelector("#apple-wrapper");
// const appleMenu = document.querySelector("#apple-menu");

// appleWrapper.addEventListener("click", function () {
//   appleMenu.classList.toggle("banner__list__menu--hidden");
//   appleMenu.classList.toggle("banner__list__menu--show");
// });
