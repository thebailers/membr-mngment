import { initializeApp } from "firebase/app";

// auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBNPtqGUQUfs8h2D_H3jBQ99qSHgqhu5w",
  authDomain: "membr-mngment.firebaseapp.com",
  projectId: "membr-mngment",
  storageBucket: "membr-mngment.appspot.com",
  messagingSenderId: "3833974251",
  appId: "1:3833974251:web:ec65574044b6d3a3085dae",
  measurementId: "G-W0BZEM06KB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Sign up new users
const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
