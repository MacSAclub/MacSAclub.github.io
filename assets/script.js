import { greetings } from "./greetings.js"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const welcome_message = document.getElementById("welcome-message")
setInterval(
  () => {
    welcome_message.innerText = greetings[getRandomInt(0, greetings.length)].hello
  }, 100
)
document.getElementById("welcome-message").innerText = "test"