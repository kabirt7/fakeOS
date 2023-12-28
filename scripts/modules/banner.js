// Banner Menu Toggle

export const toggleMenu = () => {
  const modifiedElement = document.querySelector("#apple-menu");
  modifiedElement.classList.toggle("banner__menu--hidden");
  modifiedElement.classList.toggle("banner__menu--show");
};

// Example usage:
// setupModalToggle("#modal-wrapper", "#modal-content", "modal--hidden", "modal--show");

// on click footer functionalities

// const appleWrapper = document.querySelector("#apple-wrapper");
// const appleMenu = document.querySelector("#apple-menu");

// appleWrapper.addEventListener("click", function () {
//   appleMenu.classList.toggle("banner__list__menu--hidden");
//   appleMenu.classList.toggle("banner__list__menu--show");
// });

// toggle function
// export function displayToggle(
//   clickedElementSelector,
//   modifiedElementSelector,
//   hiddenClass,
//   showClass
// ) {
//   const clickedElement = document.querySelector(clickedElementSelector);
//   const modifiedElement = document.querySelector(modifiedElementSelector);

//   clickedElement.addEventListener("click", function () {
//     modifiedElement.classList.toggle(hiddenClass);
//     modifiedElement.classList.toggle(showClass);
//   });
// }
