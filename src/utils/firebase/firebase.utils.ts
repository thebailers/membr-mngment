import { initializeApp } from "firebase/app";

// auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  User,
  signOut,
  onAuthStateChanged,
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

type AdditionalInformation = {
  displayName?: string;
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation: AdditionalInformation
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // check if user exits in the database
  if (!userSnapshot.exists()) {
    // add user to db
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (e) {
      console.log(e);
    }
  }
};

export const signUpUserEmailPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const verifyUserEmail = async () => {
  if (auth.currentUser)
    await sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      console.log("email sent");
    });
};

export const signOutUser = async () => {
  return await signOut(auth);
};
