let counterValue = 0;
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const decr = () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
};
decrementButton.addEventListener("click", decr);
const incr = () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
};
incrementButton.addEventListener("click", incr);
