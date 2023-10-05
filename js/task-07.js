const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.addEventListener("input", callback);
function callback(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}
