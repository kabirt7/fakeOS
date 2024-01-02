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
  changeAlbum,
  findParent,
} from "./modules/modal-photo-viewer.js";
import { notesModal, saveNote, deleteNote } from "./modules/modal-notes.js";
import { handleWindowButtons } from "./modules/app-close-handling.js";
import { updateTime } from "./modules/clock.js";

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
  {
    name: "Grey1",
  },
  {
    name: "Grey2",
  },
];

let openedApp = [];

export const updatedOpenedApp = (value) => {
  openedApp = [];
  openedApp.push(value);
  console.log(openedApp);
};

document.addEventListener("DOMContentLoaded", () => {
  const iconContainer = document.querySelector(".desktop__container");
  const dockContainer = document.querySelector(".dock__wrap");

  appOrder.forEach((app, index) => {
    const icon = document.createElement("li");
    const title = document.createElement("p");
    title.textContent = app.name;

    app.image = `Icon-Img-${index + 1}`;

    icon.style.backgroundImage = `url('../src/${app.image}.png')`;
    icon.style.backgroundSize = "cover";

    icon.addEventListener("click", () => {
      if (app.action) {
        app.action();
      }
    });
    icon.appendChild(title);
    iconContainer.appendChild(icon);
  });

  appOrder.forEach((app) => {
    const icon = document.createElement("li");
    // icon.textContent = app.name;
    icon.classList.add("dock__item");

    icon.style.backgroundImage = `url('../src/${app.image}.png')`;
    icon.style.backgroundSize = "cover";

    icon.addEventListener("click", () => {
      app.action();
    });

    dockContainer.appendChild(icon);
  });
});

// Calculator functionality with event delegation
const calcContainer = document.querySelector("#htmlRef-calc");

calcContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "TD") {
    if (/[0-9.]/.test(target.dataset.value)) {
      appendToDisplay(target.dataset.value);
      evalExp(target.dataset.value);
    } else if (/[AC]/.test(target.dataset.value)) {
      clearDisplay();
    } else {
      evalExp(target.dataset.value);
    }
  }
  handleWindowButtons(event);
});

// Photo Viewer Functionality

const photoContainer = document.querySelector("#htmlRef-photo");

photoContainer.addEventListener("click", (event) => {
  const target = event.target;
  const clickedElementId = findParentId(target);
  const clickedElement = findParent(target);

  if (clickedElement.classList.contains("left__menu__option")) {
    changeAlbum(clickedElementId);
  }

  handleWindowButtons(event);
});

photoContainer.addEventListener("dblclick", (event) => {
  const target = event.target;
  console.log("doubleclicked");

  if (target.classList.contains("right__icon")) {
    imageOpen(target.id);
  }
});

// Notes functionality

const noteContainer = document.querySelector("#htmlRef-notes");

noteContainer.addEventListener("click", (event) => {
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

document.addEventListener("DOMContentLoaded", () => {
  updateTime(); // Initial call

  // Set up a recurring update every second using setInterval
  setInterval(() => {
    updateTime();
  }, 1000);
});

const photoModal = document.querySelector("#htmlRef-modal");

photoModal.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV") {
    photoModal.style.display = "none";
  }
});
