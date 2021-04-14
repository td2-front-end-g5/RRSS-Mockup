import { templateLogin } from './assets/view/templateLogin.js'
import { templateHome } from './assets/view/templateHome.js'

const changeRoute = (hash) => {
    if (hash === '#/home') {
        return showTemplate(hash);
    } else if (hash === '') {
        return showTemplate(hash);
    }
}

const showTemplate = (hash) => {
    const router = hash.substring(2);
    //console.log(router)
    const containerRoot = document.querySelector('#raiz');
    containerRoot.innerHTML = '';

    switch (router) {

        case 'home':
            templateHome();
            break;

        case '':
            templateLogin();
            break;
        
        default:
            containerRoot.innerHTML = `<p>Error 404</p>`
    }
}

export const initRouter = () => {
    window.addEventListener('load', changeRoute(window.location.hash));

    if ('onhashchange' in window) {
        window.onhashchange = () => {
            changeRoute(window.location.hash);
        }
    }
}