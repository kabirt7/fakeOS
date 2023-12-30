export const notesModal = () => {
  const html = document.querySelector("#htmlRef-notes");
  html.innerHTML === ""
    ? (html.innerHTML = `
    <div class="notes">

     <section class="notes__banner">
      <ul class="notes__window-menu">
       <li class="red"></li>
       <li class="yellow"></li>
       <li class="green"></li>
      </ul>
      <button></button>
      <button></button>
     </section> 
     <section class="notes__container">
       <ul class="notes__list">
        <li>Note 1</li>
        <li>Note 2</li>
        <li>Note 3</li>
       </ul>
       <main class="notes__create">
        <h1>hello</h1>
       </main>
     </section>
    </div>
    `)
    : (html.innerHTML = "");
};
