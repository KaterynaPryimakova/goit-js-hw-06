const userName = document.querySelector("#name-input");
const greeting = document.querySelector("#name-output");
userName.addEventListener("input", addName);
function addName(event) {
    if (event.currentTarget.value === "") {
        greeting.textContent = "Anonymous";
    } else {
        greeting.textContent = event.currentTarget.value;
    }
}
