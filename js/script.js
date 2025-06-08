document.addEventListener('DOMContentLoaded', () => {

    const temaBtns = document.querySelectorAll('.tema');

    const body = document.body;
    const logo = document.getElementById('logo');
    const logoFooter = document.getElementById('logo-footer');
    
    const toggleTheme = () => {
        body.classList.toggle('light');

        const isLight = body.classList.contains('light');

        temaBtns.forEach(btn => {
            const temaIcone = btn.querySelector('i');
            temaIcone.classList.toggle('fa-sun-bright', !isLight);
            temaIcone.classList.toggle('fa-moon', isLight);
        });

        logo.src = isLight
            ? 'Assets/icon/logo-dark.svg'
            : 'Assets/icon/logo.svg';

        logoFooter.src = isLight
            ? 'Assets/icon/logo-footer-dark.svg'
            : 'Assets/icon/logo-footer.svg';
    };

    temaBtns.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });


    const mockupImages = document.querySelectorAll('.mockup');

    function ajustarImagens() {
        const larguraTela = window.innerWidth;

        mockupImages.forEach(img => {
            if (!img.dataset.srcOriginal) {
                img.dataset.srcOriginal = img.src;
            }

            const srcOriginal = img.dataset.srcOriginal;

            const srcMobile = srcOriginal.replace('.png', '-inteiro.png');

            if (larguraTela < 1128) {
                img.src = srcMobile;
            } else {
                img.src = srcOriginal;
            }
        });
    }

    window.addEventListener('resize', ajustarImagens);
    ajustarImagens();
});