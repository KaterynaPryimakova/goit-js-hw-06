let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
decrementButton.addEventListener("click", decr);
incrementButton.addEventListener("click", incr);
function decr() {
    counterValue -= 1;
    document.querySelector("#value").textContent = counterValue;
}
function incr() {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
}
