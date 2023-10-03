const userName = document.querySelector("#name-input");
const greeting = document.querySelector("#name-output");
const addName = (event) => {
  if (event.currentTarget.value === "") {
    greeting.textContent = "Anonymous";
  } else {
    greeting.textContent = event.currentTarget.value;
  }
};
userName.addEventListener("input", addName);
