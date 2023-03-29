// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAQa9QBJ1dCMJy-cFQ9HTugQw-ErPfnF8Y",
    authDomain: "challenge-66426.firebaseapp.com",
    projectId: "challenge-66426",
    storageBucket: "challenge-66426.appspot.com",
    messagingSenderId: "165352664861",
    appId: "1:165352664861:web:ee760b67917b365f49fbf4",
    measurementId: "G-KPDWMSW0Q6"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export { db, auth };