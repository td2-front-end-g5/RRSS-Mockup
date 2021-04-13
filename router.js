import { templateLogin } from './assets/view/templateLogin.js'

const changeRoute = (hash) => {
    console.log(hash)
    if (hash == '') {
        return showTemplate(hash)
    }
}

const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerApp = document.getElementById('raiz');
    containerApp.innerHTML = '';

    switch (router) {
        case '':
            templateLogin();
            break;
    }
}

export const router = () => {
    window.addEventListener('load', changeRoute(window.location.hash));
    if ('onhashchange' in window) {
        window.onchange = () => {
            changeRoute(window.location.hash)
        }
    }
}

export const initRouter = () => {
    //evento que carga la página, ya que la url cambia
    window.addEventListener('load', changeRoute(window.location.hash));
    //Metodo que reconocer si hubo un cambio en el hash y le pasa ese nuevo hash a changeRouter

    if ('onhashchange' in window) {
        //cuando reconoce un cambio de hash, llama a la función changeRoute para qur cambie la vista
        window.onhashchange = () => {
            changeRoute(window.location.hash);
        }
    }
}