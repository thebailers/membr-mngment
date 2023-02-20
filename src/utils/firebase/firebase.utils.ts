import { initializeApp } from "firebase/app";

// auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
} from "firebase/auth";

// firestore
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Get firestore db
const db = getFirestore();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUserDocumentFromAuth = async (userAuth: UserCredential) => {
  const userDocRef = doc(db, "users", userAuth.user.uid);
  console.log("userDocRef");
  console.log(userDocRef);
};

export const signUpUserEmailPassword = (email: string, password: string) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInEmailPassword = (email: string, password: string) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const verifyUserEmail = () => {
  if (auth.currentUser)
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      console.log("email sent");
    });
};
