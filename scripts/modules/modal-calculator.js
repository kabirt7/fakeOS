export const calcModal = () => {
  const html = document.querySelector("#htmlRef-calc");
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
    <div class="calculator__display"><p class="calculator__display__text"></p></div><div class="calculator__expression"></div>
  </section>
  <section id="bottom">
    <table>
      <tr>
        <td id="reset" data-value="AC">AC</td>
        <td id="plus-minus">+/-</td>
        <td id="percent">%</td>
        <td id="divide" data-value="/">/</td>
      </tr>
      <tr>
        <td id="seven" data-value="7">7</td>
        <td id="eight" data-value="8">8</td>
        <td id="nine" data-value="9">9</td>
        <td id="multiply" data-value="*">X</td>
      </tr>
      <tr>
        <td id="four" data-value="4">4</td>
        <td id="five" data-value="5">5</td>
        <td id="six" data-value="6">6</td>
        <td id="minus" data-value="-">-</td>
      </tr>
      <tr>
        <td id="one" data-value="1">1</td>
        <td id="two" data-value="2">2</td>
        <td id="three" data-value="3">3</td>
        <td id="plus" data-value="+">+</td>
      </tr>
      <tr>
        <td id="zero" data-value="0" colspan="2">0</td>
        
        <td id="point" data-value=".">.</td>
        <td id="sum" data-value="=">=</td>
      </tr>
    </table>
  </section>
</div>`)
    : (html.innerHTML = "");
};

export const appendToDisplay = (value) => {
  console.log("got to append function");
  const display = document.querySelector(".calculator__display__text");
  display.textContent = "";
  display.textContent += value;
};

export const clearDisplay = () => {
  console.log("got to clear function");
  let exp = document.querySelector(".calculator__expression");
  let display = document.querySelector(".calculator__display__text");
  display.textContent = "";
  exp.textContent = "";
};

export const evalExp = (value) => {
  console.log("got to eval function");
  let exp = document.querySelector(".calculator__expression");
  let display = document.querySelector(".calculator__display__text");

  if (/[=]/.test(value)) {
    console.log("got to equals");
    display.textContent = eval(exp.textContent);
    exp.textContent = display.textContent;
  } else if (/[^=]/.test(value)) {
    exp.textContent += value;
    console.log(exp);
  }
};
