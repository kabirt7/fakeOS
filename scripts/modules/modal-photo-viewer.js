import { updatedOpenedApp } from "../script.js";
import { handleDockIcons } from "./app-close-handling.js";
import { handleWindowButtons } from "./app-close-handling.js";

export function findParent(element) {
  while (element) {
    if (element.id) {
      return element;
    }
    element = element.parentElement;
  }
  return null;
}

const albums = [
  {
    id: "album-1",
    title: "My Dog",
    images: [
      {
        pic: "../../src/edit.jpg",
        name: "My-Dog-Image-1",
      },
      {
        pic: "../../src/edit.jpg",
        name: "My-Dog-Image-2",
      },
    ],
  },
  {
    id: "album-2",
    title: "Outfits",
    images: [
      {
        pic: "../../src/edit.jpg",
        name: "Outfits-Image-1",
      },
      {
        pic: "../../src/edit.jpg",
        name: "Outfits-Image-2",
      },
    ],
  },
  {
    id: "album-3",
    title: "Art",
    images: [
      {
        pic: "../../src/edit.jpg",
        name: "Art-Image-1",
      },
      {
        pic: "../../src/edit.jpg",
        name: "Art-Image-2",
      },
    ],
  },
];

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
       
       </ul>
     </section> 
     <section class="right">
      <div class="right__header">
       <button class="right__button right__button__left"></button>
       <button class="right__button right__button__right"></button>
       <h3 class="right__header__title">My Dog</h3>
      </div>
      <ul class="right__icon__container">
      </ul>
     </section>
    </div>
    `;

    const albumContainer = document.querySelector(".right__icon__container");
    const photoMenu = document.querySelector(".left__menu");
    const photoModal = document.querySelector("#htmlRef-modal");
    const cross = photoModal.querySelector("div");

    albums.forEach((album, index) => {
      // for left menu options
      const albumOption = document.createElement("li");
      const albumOptionIcon = document.createElement("img");
      const albumOptionTitle = document.createElement("p");
      albumOption.classList.add("left__menu__option");
      albumOptionIcon.src = "../../src/Icon-Photo.png";
      albumOptionTitle.textContent = album.title;
      if (index === 0) {
        albumOption.classList.add("left__menu__option--clicked");
      }
      albumOption.id = `option-${index}`;
      albumOption.appendChild(albumOptionIcon);
      albumOption.appendChild(albumOptionTitle);
      photoMenu.appendChild(albumOption);

      // for right container albums and enclosed images

      const photoAlbum = document.createElement("li");
      photoAlbum.classList.add("right__icon__album");
      albumContainer.appendChild(photoAlbum);
      photoAlbum.id = `album-${index}`;

      if (index !== 0) {
        photoAlbum.classList.add("right__icon__album--hidden");
      }

      album.images.forEach((image) => {
        const imageCont = document.createElement("div");
        const title = document.createElement("p");
        const icon = document.createElement("img");
        title.textContent = image.name;
        icon.src = "../../src/Icon-Photo.png";
        imageCont.classList.add("right__icon");
        imageCont.id = image.name;
        imageCont.appendChild(icon);
        imageCont.appendChild(title);
        photoAlbum.appendChild(imageCont);

        imageCont.addEventListener("click", (event) => {
          if (event.target.tagName === "P" || event.target.tagName === "IMG") {
            photoModal.style.display = "block";
            photoModal.style.backgroundImage = `url(${image.pic})`;
            photoModal.style.backgroundSize = "cover";
            cross.style.display = "block";

            // photoModal.style.backgroundColor = "magenta";
          }
        });
      });
    });

    updatedOpenedApp("Photos");
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

function deselectMenuItems() {
  const leftMenuOptions = document.querySelectorAll(".left__menu__option");
  leftMenuOptions.forEach((option) => {
    if (option.classList.contains("left__menu__option--clicked")) {
      option.classList.remove("left__menu__option--clicked");
    }
  });
  const rightIcons = document.querySelectorAll(".right__icon__album");
  rightIcons.forEach((icon) => {
    if (!icon.classList.contains("right__icon__album--hidden")) {
      icon.classList.add("right__icon__album--hidden");
    }
  });
}

// function hideImages() {
//   const images = document.querySelectorAll(".right__icon__album");
//   console.log(images);
//   images.forEach((image) => {
//     image.classList.add("right__icon__album--hidden");
//   });
//   console.log("images hidden!");
// }

// export function changeAlbum(id) {
//   console.log(`${id} clicked!`);
//   deselectMenuItems();

//   const clickedOption = document.querySelector(`#${id}`);
//   clickedOption.classList.add("left__menu__option--clicked");

//   const selectedAlbum = document.querySelector(`#${id}`);
//   const albumData = albums.find((album) => album.id === id);

//   if (selectedAlbum && albumData) {
//     selectedAlbum.classList.remove("right__icon__album--hidden");
//     document.querySelector(".right__header__title").innerHTML = albumData.title;
//   }

//   console.log("end of change album function !");
// }

const transformValue = (input) => {
  // Assuming the input format is always "option-N"
  // where N is a number, and you want to transform it to "album-N"

  // Extract the number part from the input
  const numberPart = input.split("-")[1];

  // Create the transformed value
  const transformedValue = "album-" + numberPart;

  return transformedValue;
};

export function changeAlbum(id) {
  deselectMenuItems();
  const clickedOption = document.querySelector(`#${id}`);
  clickedOption.classList.add("left__menu__option--clicked");
  console.log(`${id} clicked!`);
  const newID = transformValue(id);
  const selectedAlbum = document.querySelector(`#${newID}`);
  const title = clickedOption.querySelector("p");
  console.log(selectedAlbum);
  if (selectedAlbum) {
    selectedAlbum.classList.remove("right__icon__album--hidden");
    document.querySelector(".right__header__title").textContent =
      title.textContent;
  }

  console.log("end of change album function !");
}

// export function imageOpen(id) {
//   albums.find((album) => {
//     const foundImage = album.images.find((image) => image.id === idToFind);
//     photoModal.backgroundImage = url(`${foundImage.pic}`);
//     photoModal.backgroundSize = "cover";
//   });

//   console.log("end of image open function !");
// }

// export function imageOpen(value) {
//   imageModal.classList.toggle(`${value}`);
//   console.log("image opened");
// }
