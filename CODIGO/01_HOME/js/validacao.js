window.onload = function () {
    const previousPage = document.referrer;
    const currentPageProtocol = window.location.protocol;
    const requiredSubstring = 'https://valcilda.github.io/TOQUE-MAGICO/CODIGO/00_ANUNCIO/index.html';

    function denyAccess() {
        document.body.style.display = 'none';
        alert('😡ATENÇÃO: FOI DETECTADO QUE VOCÊ ACESSOU ESTA PÁGINA SEM PASSAR PELO ANÚNCIO! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA DO ANÚNCIO!');
        window.location.href = 'https://valcilda.github.io/TOQUE-MAGICO/index.html';
    }

    if (currentPageProtocol === 'file:') {
        document.body.classList.add('js-enabled');
        return;
    }

    if (!previousPage) {
        denyAccess();
        return;
    }

    if (previousPage.startsWith('https://')) {
        if (previousPage.includes(requiredSubstring)) {
            document.body.classList.add('js-enabled');
        } 
        else {
            denyAccess();
        }
        return;
    }

    denyAccess();
};
