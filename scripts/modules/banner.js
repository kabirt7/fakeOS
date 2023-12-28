// Banner Menu Toggle

export const toggleMenu = () => {
  const modifiedElement = document.querySelector("#apple-menu");
  modifiedElement.classList.toggle("banner__menu--hidden");
  modifiedElement.classList.toggle("banner__menu--show");
};
