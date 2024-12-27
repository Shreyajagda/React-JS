// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh1r5ZXO-VPccW4ecQbof1JHaJKdIhqOM",
  authDomain: "react-project-b649d.firebaseapp.com",
  projectId: "react-project-b649d",
  storageBucket: "react-project-b649d.firebasestorage.app",
  messagingSenderId: "1028010636422",
  appId: "1:1028010636422:web:71a55f05ee3ccd5c720d07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider;

export {auth, db ,provider};

