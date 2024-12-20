// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0qo2GXNHTefVBVaCCUNbDpKyzCYYKbao",
  authDomain: "fir-2-78de2.firebaseapp.com",
  projectId: "fir-2-78de2",
  storageBucket: "fir-2-78de2.firebasestorage.app",
  messagingSenderId: "214117752025",
  appId: "1:214117752025:web:13225e769a492ed21472c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db,auth};
