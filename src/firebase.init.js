// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBctg6sh8rHMvgZnHdz0FFnrawW7XVPo2k",
    authDomain: "buy-and-rent-79aad.firebaseapp.com",
    projectId: "buy-and-rent-79aad",
    storageBucket: "buy-and-rent-79aad.appspot.com",
    messagingSenderId: "1021828302387",
    appId: "1:1021828302387:web:8e1170d814a3761942c546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;