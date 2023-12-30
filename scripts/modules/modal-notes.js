export const notesModal = () => {
  const html = document.querySelector("#htmlRef-notes");
  html.innerHTML === ""
    ? (html.innerHTML = `
    <div class="photo-viewer notes">
     <section class="left notes__left">
      <ul class="left__header notes__left__header">
       <li class="red"></li>
       <li class="yellow"></li>
       <li class="green"></li>
      </ul>
     
       <ul>
        
       </ul>
     </section> 
     <section class="right">
      <div class="right__header">
       
       <h3 class="right__header__title">My Dog</h3>
      </div>
      <ul class="right__icon__container">
       
       </div>
      </ul>
     </section>
    </div>
    `)
    : (html.innerHTML = "");
};
