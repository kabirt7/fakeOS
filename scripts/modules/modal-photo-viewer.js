export const photoViewerModal = () => {
  const html = document.querySelector("#htmlRef-photo");
  html.innerHTML === ""
    ? (html.innerHTML = `
  <div class="photo-viewer">
   <section class="left">
    <ul class="left__header">
     <li class="red"></li>
     <li class="yellow"></li>
     <li class="green"></li>
    </ul>
    <div class="left__menu__title">Albums</div>
     <ul class="left__menu">
      <div class="left__menu__option" id="my-dog"><div class="red"></div><li>My Dog</li></div>
      <div class="left__menu__option" id="outfits"><div class="red"></div><li>Outfits</li></div>
      <div class="left__menu__option" id="art"><div class="red"></div><li>Art</li></div>
     </ul>
   </section> 
   <section class="right">
    <div class="right__header">
     <button class="right__button"></button>
     <button class="right__button"></button>
     <h3>My Dog</h3>
    </div>
    <ul class="right__icon__container">
     <div class="right__icon__album" id="album-one">
     <li class="right__icon">Img1</li>
     <li class="right__icon">Img2</li>
     </div>
     <div class="right__icon__album right__icon__album--hidden" id="album-two">
     <li class="right__icon">Img3</li>
     <li class="right__icon">Img4</li>
     </div>
     <div class="right__icon__album right__icon__album--hidden" id="album-three">
     <li class="right__icon">Img5</li>
     <li class="right__icon">Img6</li>
     </div>
    </ul>
   </section>
  </div>
  `)
    : (html.innerHTML = "");
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

export function deselectItems() {
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

export function changeAlbum(value) {
  hideImages();
  const albumOne = document.querySelector("#album-one");
  const albumTwo = document.querySelector("#album-two");
  const albumThree = document.querySelector("#album-three");

  if (value === "my-dog") {
    albumOne.classList.remove("right__icon__album--hidden");
  }

  if (value === "outfits") {
    albumTwo.classList.remove("right__icon__album--hidden");
  }

  if (value === "art") {
    albumThree.classList.remove("right__icon__album--hidden");
  }

  console.log("end of change album function !");
  // need to appropriately remove hidden class i.e. fix doc QS
  // need to appropriately
}
