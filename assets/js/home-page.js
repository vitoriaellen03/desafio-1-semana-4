document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("subscribeForm");
    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");
    const emailAlert = subscribeForm.querySelector("#email + .alert-form");
    const nameAlert = subscribeForm.querySelector("#name + .alert-form");
    const successfulAlert = this.documentElement.querySelector(".alert");

    // Função de validação
    function validateForm() {
        const email = emailInput.value;
        const name = nameInput.value;
        emailAlert.textContent = "We promise not to spam";
        nameAlert.textContent = "";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        // Validação do e-mail
        if (!emailRegex.test(email)) {
            emailAlert.textContent = "Please enter a valid email.";
            isValid = false;
        }

        // Validação do nome
        if (name.trim() === "") {
            nameAlert.textContent = "The name cannot be empty.";
            isValid = false;
        }

        return isValid;
    }

    // Valida ao digitar
    emailInput.addEventListener("input", validateForm);
    nameInput.addEventListener("input", validateForm);

    // Valida ao enviar o formulário
    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            // Armazenar no LocalStorage
            localStorage.setItem("email", emailInput.value);
            localStorage.setItem("name", nameInput.value);
            successfulAlert.classList.add("sucess");
            successfulAlert.textContent = "Successful registration!";

            // Exibir o alert por 5 segundos
            successfulAlert.style.display = "block";

            setTimeout(function () {
                successfulAlert.style.display = "none";
            }, 5000);
        }
    });
});
