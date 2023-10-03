const input = document.querySelector("#validation-input");
const length = Number(input.dataset.length);
const callback = (event) => {
    const symbolsOfUser = event.currentTarget.value.length;
    if (symbolsOfUser === length) {
        input.style.borderColor = "#4caf50";
    } else {
        input.style.borderColor = "#f44336";
    }
};
input.addEventListener("blur", callback);
