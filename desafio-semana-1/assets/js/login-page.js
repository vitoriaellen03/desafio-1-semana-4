document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#login form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailAlert = loginForm.querySelector("#email + .alert-form");
    const passwordAlert = loginForm.querySelector("#password + .alert-form");

    // Função de validação
    function validateLoginForm() {
        const email = emailInput.value;
        const password = passwordInput.value;
        emailAlert.textContent = ""; // Resetar mensagem de alerta de e-mail
        passwordAlert.textContent = ""; // Resetar mensagem de alerta de senha

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        // Validação do e-mail
        if (!emailRegex.test(email)) {
            emailAlert.textContent = "Please enter a valid email.";
            isValid = false;
        }

        // Validação da senha
        if (password.trim() === "") {
            passwordAlert.textContent = "Password cannot be empty.";
            isValid = false;
        }

        return isValid;
    }

    // Valida ao digitar no campo de e-mail e senha
    emailInput.addEventListener("input", validateLoginForm);
    passwordInput.addEventListener("input", validateLoginForm);

    // Valida ao enviar o formulário
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (validateLoginForm()) {
            // Se a validação for bem-sucedida, redireciona para a página do Kanban
            window.location.href = "/pages/kanban-page.html";
        }
    });
});
