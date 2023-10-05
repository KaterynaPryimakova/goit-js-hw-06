function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const background = document.querySelector("body");
const changeButton = document.querySelector(".change-color");
const result = document.querySelector(".color");
changeButton.addEventListener("click", changeColor);
function changeColor() {
    background.style.backgroundColor = getRandomHexColor();
    result.textContent = background.style.backgroundColor;
}
