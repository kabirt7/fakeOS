import { toggleMenu } from "./modules/banner.js";
import {
  calcModal,
  appendToDisplay,
  clearDisplay,
  evalExp,
} from "./modules/modal-calculator.js";
import {
  photoViewerModal,
  findParentId,
  findParent,
  deselectItems,
  changeAlbum,
} from "./modules/modal-photo-viewer.js";

// banner functionality
const appleIcon = document.querySelector("#apple-wrapper");
appleIcon.addEventListener("click", toggleMenu);

// Dock Modals
const photoViewerIcon = document.querySelector(".dock__wrap li:nth-child(1)");
photoViewerIcon.addEventListener("click", photoViewerModal);

const calcIcon = document.querySelector(".dock__wrap li:nth-child(2)");
calcIcon.addEventListener("click", calcModal);

// Calculator functionality with event delegation
const modalContainer = document.querySelector("#htmlRef-calc");

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

// Photo Viewer Functionality

const photoMenu = document.querySelector("#htmlRef-photo");

photoMenu.addEventListener("click", function (event) {
  const target = event.target;
  const clickedElementId = findParentId(target);
  const clickedElement = findParent(target);

  console.log(`${clickedElementId} clicked!`);
  deselectItems();
  clickedElement.classList.toggle("left__menu__option--clicked");
  changeAlbum(clickedElementId);

  // if (clickedElementId === "my-dog") {
  //   console.log(`${clickedElementId} clicked!`);
  //   deselectItems();
  //   clickedElement.classList.toggle("left__menu__option--clicked");
  //   changeAlbum(clickedElementId);
  // }
  // if (clickedElementId === "outfits") {
  //   console.log(`${clickedElementId} clicked!`);
  //   deselectItems();
  //   clickedElement.classList.toggle("left__menu__option--clicked");
  //   changeAlbum(clickedElementId);
  // }
  // if (clickedElementId === "art") {
  //   console.log(`${clickedElementId} clicked!`);
  //   deselectItems();
  //   clickedElement.classList.toggle("left__menu__option--clicked");
  //   changeAlbum(clickedElementId);
  // }
});
