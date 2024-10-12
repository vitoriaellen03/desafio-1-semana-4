// validation Fomr Login
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#login form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailAlert = loginForm.querySelector("#email + .alert-form");
    const passwordAlert = loginForm.querySelector("#password + .alert-form");

    function validateLoginForm() {
        const email = emailInput.value;
        const password = passwordInput.value;
        emailAlert.textContent = ""; 
        passwordAlert.textContent = ""; 

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        if (!emailRegex.test(email)) {
            emailAlert.textContent = "Please enter a valid email.";
            isValid = false;
        }

        if (password.trim() === "") {
            passwordAlert.textContent = "Password cannot be empty.";
            isValid = false;
        }

        return isValid;
    }

    emailInput.addEventListener("input", validateLoginForm);
    passwordInput.addEventListener("input", validateLoginForm);

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateLoginForm()) {
            window.location.href = "/assets/pages/kanban-page.html";
        }
    });
});
