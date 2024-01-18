// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "home-loan-8b914.firebaseapp.com",
  projectId: "home-loan-8b914",
  storageBucket: "home-loan-8b914.appspot.com",
  messagingSenderId: "725791139743",
  appId: "1:725791139743:web:113adae38b4eef7c7f7faa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);