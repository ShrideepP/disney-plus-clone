// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAe2I1WZvisnRHNdxIbiuLV3Lgzi9mHBw",
  authDomain: "disney-clone-5c25b.firebaseapp.com",
  projectId: "disney-clone-5c25b",
  storageBucket: "disney-clone-5c25b.appspot.com",
  messagingSenderId: "148718381253",
  appId: "1:148718381253:web:2444ff6987323bb70ce8ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();