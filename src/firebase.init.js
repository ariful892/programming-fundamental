// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9totyzBa_-tiGYn-osbtVARYkyGeRWKQ",
    authDomain: "programming-fundamental-b1ee0.firebaseapp.com",
    projectId: "programming-fundamental-b1ee0",
    storageBucket: "programming-fundamental-b1ee0.appspot.com",
    messagingSenderId: "621206857038",
    appId: "1:621206857038:web:1c33d053842be5ab3bea1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;