import { welcome_languages } from "./greetings.js"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async (event) => {
  const slogan_elem = document.getElementById("slogan")

  while(true) {
    const new_elem = document.createElement("p");
    const elem_style = new_elem.style;
    new_elem.innerText = welcome_languages[getRandomInt(0, welcome_languages.length - 1)];
    elem_style.position = "absolute";
    elem_style.left = `${getRandomInt(5, 90)}%`;
    elem_style.top = `${getRandomInt(5, 90)}%`;
    elem_style.animation = "fadeIn 5s";
    slogan_elem.appendChild(new_elem);
    await timeout(50)
    setTimeout(async () => {
      elem_style.animation = "fadeOut 3s";
      await timeout(5000)
      new_elem.remove()
    }, 5000)
  }
});