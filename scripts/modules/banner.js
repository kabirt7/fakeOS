// Banner Menu Toggle

export const toggleMenu = () => {
  const modal = document.querySelector("#apple-menu");
  const clickedElement = document.querySelector("#apple-wrapper");
  modal.classList.toggle("banner__menu--hidden");
  modal.classList.toggle("banner__menu--show");
  clickedElement.classList.toggle("banner__list__item--clicked");
};
