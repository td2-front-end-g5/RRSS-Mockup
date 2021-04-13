export const validateSigned = () => {
    const email = document.getElementById('login-username')
    const password = document.getElementById('login-password')
    signIn(email, password);
}
