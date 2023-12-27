// banner

const appleWrapper = document.querySelector("#apple-wrapper");
const appleMenu = document.querySelector("#apple-menu");

appleWrapper.addEventListener("click", function () {
  appleMenu.classList.toggle("banner__list__menu--hidden");
  appleMenu.classList.toggle("banner__list__menu--show");
});
