import { signIn } from '../js/auth.js'

export const validateSigned = (email, password) => {
    signIn(email, password);
}
