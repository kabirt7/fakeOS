export const photoViewerModal = () => {
  const html = document.querySelector("#htmlRef");
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
      <div><div class="red"></div><li>My Dog</li></div>
      <div><div class="red"></div><li>Outfits</li></div>
      <div><div class="red"></div><li>Art</li></div>
     </ul>
   </section> 
   <section class="right">
    <div class="right__header">
     <button class="right__button"></button>
     <button class="right__button"></button>
     <h3>My Dog</h3>
    </div>
    <ul class="right__icon__container">
     <li class="right__icon">Img1</li>
     <li class="right__icon">Img2</li>
    </ul>
   </section>
  </div>
  `)
    : (html.innerHTML = "");
};
