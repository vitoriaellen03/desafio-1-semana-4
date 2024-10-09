document.addEventListener("DOMContentLoaded", function () {
    // Inserir o header
    const headerElement = document.querySelector("header:first-of-type");
    if (headerElement) {
        fetch("/assets/html/header.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar o header.");
                }
                return response.text();
            })
            .then(data => {
                headerElement.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Inserir o footer
    const footerElement = document.querySelector("footer:last-of-type");
    if (footerElement) {
        fetch("/assets/html/footer.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar o footer.");
                }
                return response.text();
            })
            .then(data => {
                footerElement.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
            });
    }
});
