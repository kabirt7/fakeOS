// banner functionality
import { toggleMenu } from "./modules/dom.js";

const clickedElement = document.querySelector("#apple-wrapper");
clickedElement.addEventListener("click", toggleMenu);

// const appleWrapper = document.querySelector("#apple-wrapper");
// const appleMenu = document.querySelector("#apple-menu");

// appleWrapper.addEventListener("click", function () {
//   appleMenu.classList.toggle("banner__list__menu--hidden");
//   appleMenu.classList.toggle("banner__list__menu--show");
// });
