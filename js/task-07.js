const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const callback = (event) => {
    return (text.style.fontSize = event.currentTarget.getAttribute("max"));
};

range.addEventListener("input", callback);
