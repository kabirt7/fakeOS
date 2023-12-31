import { updatedOpenedApp } from "../script.js";
import { handleDockIcons } from "./app-close-handling.js";

export const notesModal = () => {
  const html = document.querySelector("#htmlRef-notes");
  if (html.innerHTML === "") {
    handleDockIcons();
    html.innerHTML = `
    <div class="notes">

     <section class="notes__banner">
      <ul class="notes__window-menu">
       <li class="red"></li>
       <li class="yellow"></li>
       <li class="green"></li>
      </ul>
      <button id="save-button"></button>
      <button id="delete-button"></button>
     </section> 
     <section class="notes__container">
       <ul class="notes__list">
        <li class="notes__list__item">Note 1</li>
        <li class="notes__list__item">Note 2</li>
        <li class="notes__list__item">Note 3</li>
       </ul>
       <main class="notes__create">
        <textarea class="notes__create__input"></textarea>
       </main>
     </section>
    </div>
    `;

    updatedOpenedApp("Notes");
  } else {
    html.innerHTML = "";
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
