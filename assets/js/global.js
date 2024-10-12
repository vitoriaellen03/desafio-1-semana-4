// Aply Hamburguer-Navigation
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav-menu");

    function toggleOverflowClass() {
        if (window.innerWidth > 1080) {
            if (hamburger) {
                hamburger.classList.remove("active");
            }
            if (menu) {
                menu.classList.remove("active");
                document.documentElement.classList.remove("overflow-hidden");
            }
        }
    }

    window.addEventListener("resize", toggleOverflowClass);

    if (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("active");
            if (menu) {
                menu.classList.toggle("active");
                document.documentElement.classList.toggle("overflow-hidden");
            }
        });
    }
});