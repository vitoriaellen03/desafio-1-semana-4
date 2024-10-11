document.addEventListener("DOMContentLoaded", function () {
    // Inserir o header
    const headerElement = document.querySelector("header:first-of-type");
    if (headerElement) {
        fetch("/assets/html/header.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error loading header.");
                }
                return response.text();
            })
            .then(data => {
                headerElement.innerHTML = data;

                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');

                if (hamburger && navMenu) {
                    hamburger.addEventListener('click', function () {
                        hamburger.classList.toggle('active');
                        navMenu.classList.toggle('active');
                    });
                }
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
                    throw new Error("Error loading footer.");
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
