// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMOULF5CXnCyw4nqNmKJ6hkZCWZ2AXc04",
    authDomain: "projeto-mundo-invertido-51ba5.firebaseapp.com",
    projectId: "projeto-mundo-invertido-51ba5",
    storageBucket: "projeto-mundo-invertido-51ba5.appspot.com",
    messagingSenderId: "271067629561",
    appId: "1:271067629561:web:4af99d65701480d318df28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app