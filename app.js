import { initFirebase } from './assets/js/firebase.js'
import { initRouter } from './router.js'

const init = () => {
    initRouter();
    initFirebase();
}

window.addEventListener('load', init)