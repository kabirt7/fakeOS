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
  imageOpen,
} from "./modules/modal-photo-viewer.js";
import { notesModal, saveNote, deleteNote } from "./modules/modal-notes.js";
import { handleWindowButtons } from "./modules/app-close-handling.js";

// banner functionality
const appleIcon = document.querySelector("#apple-wrapper");
appleIcon.addEventListener("click", toggleMenu);

// dock and desktop icons

const appOrder = [
  {
    name: "Photos",
    action: () => {
      photoViewerModal();
    },
  },
  {
    name: "Calculator",
    action: () => {
      calcModal();
    },
  },
  {
    name: "Notes",
    action: () => {
      notesModal();
    },
  },
];

let openedApp = [];

export const updatedOpenedApp = (value) => {
  openedApp = [];
  openedApp.push(value);
  console.log(openedApp);
};

document.addEventListener("DOMContentLoaded", function () {
  const iconContainer = document.querySelector(".desktop__container");
  const dockContainer = document.querySelector(".dock__wrap");

  appOrder.forEach((app) => {
    const icon = document.createElement("li");
    icon.textContent = app.name;

    icon.addEventListener("click", () => {
      app.action();
    });

    iconContainer.appendChild(icon);
  });

  appOrder.forEach((app) => {
    const icon = document.createElement("li");
    icon.textContent = app.name;
    icon.classList.add("dock__item");

    icon.addEventListener("click", () => {
      app.action();
    });

    dockContainer.appendChild(icon);
  });
});

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

  handleWindowButtons(event);
});

photoMenu.addEventListener("dblclick", function (event) {
  const target = event.target;
  console.log("doubleclicked");

  if (target.classList.contains("right__icon")) {
    imageOpen(target.id);
  }
});

// Notes functionality

const noteContainer = document.querySelector("#htmlRef-notes");

noteContainer.addEventListener("click", function (event) {
  const target = event.target;
  const check = document.querySelector(".notes__list__item");
  if (target.id === "save-button") {
    saveNote();
  }

  if (check) {
    if (target.id === "delete-button") {
      deleteNote();
    }
  }

  handleWindowButtons(event);
});
