// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzl94LdSH5MtEZGufcsge9oS3FPyDSHSE",
    authDomain: "jintheevil-s-portfolio.firebaseapp.com",
    databaseURL: "https://jintheevil-s-portfolio-default-rtdb.firebaseio.com",
    projectId: "jintheevil-s-portfolio",
    storageBucket: "jintheevil-s-portfolio.appspot.com",
    messagingSenderId: "345726874847",
    appId: "1:345726874847:web:2f47aea16444089b90256a",
    measurementId: "G-6Q1TX9JX6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);