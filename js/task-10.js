function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
input.addEventListener("input", getValue);
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
function getValue() {
    const amount = Number(input.value);
    return amount;
}
function createBoxes() {
    const amount = getValue();
    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        boxes.appendChild(box);
        boxSize += 10;
    }
}
function destroyBoxes() {
    boxes.innerHTML = "";
    input.value = "";
}
