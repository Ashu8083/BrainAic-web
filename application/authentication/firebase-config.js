// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxoYLYsm5enqO1hsmgR_KPCseMehStgJ4",
    authDomain: "login-f6531.firebaseapp.com",
    projectId: "login-f6531",
    storageBucket: "login-f6531.appspot.com",
    messagingSenderId: "972991136208",
    appId: "1:972991136208:web:0eff2ef80089f609edb9d5",
    measurementId: "G-FSY011S7D7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
