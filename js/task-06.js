const input = document.querySelector("#validation-input");
const length = Number(input.dataset.length);
input.addEventListener("blur", callback);
function callback(event) {
    const symbolsOfUser = event.currentTarget.value.length;
    if (symbolsOfUser === length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}
