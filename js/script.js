const temaBtn = document.querySelector('.tema');
const body = document.body;
const logo = document.getElementById('logo');
const logoFooter = document.getElementById('logo-footer');
const temaIcone = temaBtn.querySelector('i'); // pega o <i> dentro do botão

temaBtn.addEventListener('click', () => {

    body.classList.toggle('light');

    const isLight = body.classList.contains('light');

    logo.src = isLight
        ? 'Assets/icon/logo-dark.svg'
        : 'Assets/icon/logo.svg';

    logoFooter.src = isLight
        ? 'Assets/icon/logo-footer-dark.svg'
        : 'Assets/icon/logo-footer.svg';

    temaIcone.classList.toggle('fa-sun-bright', !isLight);
    temaIcone.classList.toggle('fa-moon', isLight);
    });
