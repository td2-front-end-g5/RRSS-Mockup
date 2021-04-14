
export const signIn = (email, password) => {
  console.log(email, password)
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      console.log("Logeado exitosamente", user);
      window.location.hash = '#/home'
      //console.log(window.location.hash)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}