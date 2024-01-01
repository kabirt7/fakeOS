import { updatedOpenedApp } from "../script.js";
import { handleDockIcons } from "./app-close-handling.js";

export const photoViewerModal = () => {
  const html = document.querySelector("#htmlRef-photo");
  if (html.innerHTML === "") {
    handleDockIcons();
    html.innerHTML = `
    <div class="photo-viewer">
     <section class="left">
      <ul class="left__header">
       <li class="red"></li>
       <li class="yellow"></li>
       <li class="green"></li>
      </ul>
      <div class="left__menu__title">Albums</div>
       <ul class="left__menu">
        <div class="left__menu__option left__menu__option--clicked" id="my-dog"><div class="photo-icon"></div><li>My Dog</li></div>
        <div class="left__menu__option" id="outfits"><div class="photo-icon"></div><li>Outfits</li></div>
        <div class="left__menu__option" id="art"><div class="photo-icon"></div><li>Art</li></div>
       </ul>
     </section> 
     <section class="right">
      <div class="right__header">
       <button class="right__button right__button__left"></button>
       <button class="right__button right__button__right"></button>
       <h3 class="right__header__title">My Dog</h3>
      </div>
      <ul class="right__icon__container">
       <div class="right__icon__album" id="album-one">
       <li class="right__icon photo-icon" id="Img-1"></li>
       <p>Image 1</p>
       </div>
       <div class="right__icon__album right__icon__album--hidden" id="album-two">
       </div>
       <div class="right__icon__album right__icon__album--hidden" id="album-three">
       </div>
      </ul>
     </section>
    </div>
    `;

    updatedOpenedApp("Notes");
  } else {
    html.innerHTML = "";
  }
};

export function findParentId(element) {
  while (element) {
    if (element.id) {
      return element.id;
    }
    element = element.parentElement;
  }
  return null;
}

export function findParent(element) {
  while (element) {
    if (element.id) {
      return element;
    }
    element = element.parentElement;
  }
  return null;
}

function deselectMenuItems() {
  const leftMenuOptions = document.querySelectorAll(".left__menu__option");
  leftMenuOptions.forEach((option) => {
    option.classList.remove("left__menu__option--clicked");
  });
}

function hideImages() {
  const images = document.querySelectorAll(".right__icon__album");
  console.log(images);
  images.forEach((image) => {
    image.classList.add("right__icon__album--hidden");
  });
  console.log("images hidden!");
}

export function changeAlbum(id, element) {
  const albums = [
    {
      id: "my-dog",
      element: document.querySelector("#album-one"),
      title: "My Dog",
    },
    {
      id: "outfits",
      element: document.querySelector("#album-two"),
      title: "Outfits",
    },
    {
      id: "art",
      element: document.querySelector("#album-three"),
      title: "Art",
    },
  ];

  hideImages();
  console.log(`${id} clicked!`);
  deselectMenuItems();
  element.classList.toggle("left__menu__option--clicked");

  const selectedAlbum = albums.find((album) => album.id === id);
  if (selectedAlbum) {
    selectedAlbum.element.classList.remove("right__icon__album--hidden");
    document.querySelector(".right__header__title").innerHTML =
      selectedAlbum.title;
  }

  console.log("end of change album function !");
}

export function imageOpen(value) {
  const imageModal = document.querySelector("#htmlRef-modal");
  imageModal.classList.toggle(`${value}`);
  console.log("image opened");
}
