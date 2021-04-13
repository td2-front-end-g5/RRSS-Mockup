export const initFirebase = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyBvav-53w23fwCRLnZDhtaCNIXuCVewrRc",
    authDomain: "pruebafinal-17bb3.firebaseapp.com",
    projectId: "pruebafinal-17bb3",
    storageBucket: "pruebafinal-17bb3.appspot.com",
    messagingSenderId: "754403789308",
    appId: "1:754403789308:web:84e60a4912df6ca7268a79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}