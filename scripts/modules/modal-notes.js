// import { updatedOpenedApp } from "../script.js";
import { closeModals } from "./app-close-handling.js";

export const notesModal = () => {
  closeModals();
  const html = document.querySelector("#htmlRef-notes");
  if (html.classList.contains("hidden")) {
    html.classList.remove("hidden");
  } else {
    html.classList.add("hidden");
  }
};

// const tmp = noteInput.textContent;

export function saveNote() {
  const noteContainer = document.querySelector(".notes__list");
  const noteInput = document.querySelector(".notes__create__input");
  console.log(noteInput);

  const noteInputText = noteInput.value.trim();
  const newNote = document.createElement("li");
  newNote.classList.add("notes__list__item");
  newNote.textContent = noteInputText;
  noteContainer.appendChild(newNote);
}

export function deleteNote() {
  const noteContainer = document.querySelector(".notes__list");

  const lastItem = noteContainer.lastElementChild;
  lastItem.remove();
}
