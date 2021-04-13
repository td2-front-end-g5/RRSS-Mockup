import { initFirebase } from './assets/js/firebase.js'
import { signIn } from './assets/js/auth.js'
import { validateSigned } from './assets/js/validate.js'
import { initRouter } from './router.js'
import { templateLogin } from './assets/view/templateLogin.js'

const init = () => {
    initRouter();
    templateLogin();
    initFirebase();
    validateSigned();
    signIn();
}

window.addEventListener('load', init)