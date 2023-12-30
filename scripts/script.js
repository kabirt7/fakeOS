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
  changeAlbum,
} from "./modules/modal-photo-viewer.js";
import { notesModal } from "./modules/modal-notes.js";

// banner functionality
const appleIcon = document.querySelector("#apple-wrapper");
appleIcon.addEventListener("click", toggleMenu);

// Dock Modals
const photoViewerIcon = document.querySelector(".dock__wrap li:nth-child(1)");
photoViewerIcon.addEventListener("click", photoViewerModal);

const calcIcon = document.querySelector(".dock__wrap li:nth-child(2)");
calcIcon.addEventListener("click", calcModal);

const notesIcon = document.querySelector(".dock__wrap li:nth-child(3)");
notesIcon.addEventListener("click", notesModal);

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

  if (clickedElement.classList.contains("left__menu__option")) {
    changeAlbum(clickedElementId, clickedElement);
  }
});
