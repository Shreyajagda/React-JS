// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZAODe6JB48P99ivr8LLh1O4dUM8apq_s",
  authDomain: "fir-storage-6e3aa.firebaseapp.com",
  projectId: "fir-storage-6e3aa",
  storageBucket: "fir-storage-6e3aa.firebasestorage.app",
  messagingSenderId: "252072752386",
  appId: "1:252072752386:web:e3a78c262c0d0d7ec57e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


export {db, auth} 