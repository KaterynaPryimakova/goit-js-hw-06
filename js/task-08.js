const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", callback);
function callback(event) {
    event.preventDefault();
    const form = event.target.elements;
    const userEmail = form.email.value;
    const userPassWord = form.password.value;
    if (userEmail === "" || userPassWord === "") {
        alert(`Попередження! Всі поля повинні бути заповнені!`);
    }
    const userInfo = {
        email: userEmail,
        password: userPassWord,
    };
    if (userEmail !== "" || userPassWord !== "") {
        console.log(userInfo);
    }
    event.target.reset();
}
