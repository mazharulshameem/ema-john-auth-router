// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVB9ZzY6z3yvCycm-fE8wVR65yBWgCnHo",
  authDomain: "ema-john-auth-router.firebaseapp.com",
  projectId: "ema-john-auth-router",
  storageBucket: "ema-john-auth-router.appspot.com",
  messagingSenderId: "24971189619",
  appId: "1:24971189619:web:73d55f162848d9daf27906",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;