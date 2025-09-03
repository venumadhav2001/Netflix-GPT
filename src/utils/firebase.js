// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC57Dq0v9OJ_GE6Sd2E-ZWQyjtjmrpNAC4",
  authDomain: "netflixgpt-2503.firebaseapp.com",
  projectId: "netflixgpt-2503",
  storageBucket: "netflixgpt-2503.firebasestorage.app",
  messagingSenderId: "729615776473",
  appId: "1:729615776473:web:d3f569c9a4d467f8381cc8",
  measurementId: "G-9CXZ5LW0J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);