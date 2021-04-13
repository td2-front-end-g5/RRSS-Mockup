import { signIn } from '../js/auth.js'

export const validateSigned = () => {
    //const email = document.getElementById('login-username')
    //const password = document.getElementById('login-password')
    const email= 'user@prueba.cl';
    const password = 'user1234';
    signIn(email, password);
}
