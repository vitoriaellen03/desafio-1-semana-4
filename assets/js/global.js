document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-menu');

    function toggleOverflowClass() {
        // Verifica se a largura da tela é maior que 1080px
        if (window.innerWidth > 1080) {
            if (hamburger) {
                hamburger.classList.remove('active');
            }
            if (menu) {
                menu.classList.remove('active');
                document.documentElement.classList.remove('overflow-hidden');
            }
        }
    }

    // Adiciona um ouvinte de evento de redimensionamento para verificar automaticamente a largura da tela
    window.addEventListener('resize', toggleOverflowClass);

    // Adiciona o ouvinte de evento de clique no hamburguer
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            if (menu) {
                menu.classList.toggle('active');
                document.documentElement.classList.toggle('overflow-hidden');
            }
        });
    }
});