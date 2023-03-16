// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcHZCIKfjjaIxlJUnbdiSyvYJGbG-2PIY",
  authDomain: "note-72137.firebaseapp.com",
  projectId: "note-72137",
  storageBucket: "note-72137.appspot.com",
  messagingSenderId: "914448774576",
  appId: "1:914448774576:web:d24f5314dbdd57e7cf1275",
  measurementId: "G-70B1TFZRQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);