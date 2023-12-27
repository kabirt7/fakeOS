export const calcModal = () => {
  const html = document.querySelector("#htmlRef");
  html.innerHTML === ""
    ? (html.innerHTML = `<div class="calculator">
  <section id="top">
    <div class="calculator__banner">
     <ul>
      <li>x</li>
      <li>-</li>
      <li>+</li>
     </ul>
    </div> 
    <div class="calculator__display"><p class="calculator__display__text">5</p></div>
  </section>
  <section id="bottom">
    <table>
      <tr>
        <td id="reset">AC</td>
        <td id="plus-minus">+/-</td>
        <td id="percent">%</td>
        <td id="divide">/</td>
      </tr>
      <tr>
        <td id="seven">7</td>
        <td id="eight">8</td>
        <td id="nine">9</td>
        <td id="multiply">X</td>
      </tr>
      <tr>
        <td id="four">4</td>
        <td id="five">5</td>
        <td id="six">6</td>
        <td id="minus">-</td>
      </tr>
      <tr>
        <td id="one">1</td>
        <td id="two">2</td>
        <td id="three">3</td>
        <td id="plus">+</td>
      </tr>
      <tr>
        <td id="zero" colspan="2">0</td>
        
        <td id="point">.</td>
        <td id="sum">=</td>
      </tr>
    </table>
  </section>
</div>`)
    : (html.innerHTML = "");
};
