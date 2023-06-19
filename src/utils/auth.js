import { initalizeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnlDUQi8NYizS2fevIVy6Rpc34Ctcle6Q",
  authDomain: "serenity-cb004.firebaseapp.com",
  projectId: "serenity-cb004",
  storageBucket: "serenity-cb004.appspot.com",
  messagingSenderId: "95273856112",
  appId: "1:95273856112:web:4ddc9d62b2c1d19f8398b5",
};
// initialize App
const app = initalizeApp(firebaseConfig);

// get Auth singleton
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () =>
  await signInWithPopup(auth, googleProvider);
export const signInWithEmail = async ({ email, password }) =>
  await signInWithEmailAndPassword(auth, email, password);

const firestore = getFirestore(app);

export const getUserDocRef = async (user, extraParams = {}) => {
  const userDocRef = doc(firestore, "user", user.uid);
  const snapShot = await getDoc(userDocRef);

  if (!snapShot.exists()) {
    try {
      const createdAt = new Date();
      const data = {
        createdAt,
        ...extraParams,
      };
      setDoc(userDocRef, data);
    } catch (error) {}
  }

  return userDocRef;
};

export const authObserver = (callback) => onAuthStateChanged(auth, callback);
