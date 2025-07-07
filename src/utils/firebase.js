// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx4J3Cku_wUYtl-yvLLtph82mRaxBqBWs",
  authDomain: "netflix-gpt-ab873.firebaseapp.com",
  projectId: "netflix-gpt-ab873",
  storageBucket: "netflix-gpt-ab873.firebasestorage.app",
  messagingSenderId: "110516670085",
  appId: "1:110516670085:web:a96ebea1e0c92491b123ec",
  measurementId: "G-8NYTHR2PKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

//npm install -g firebase-tools
//firebase login
//firebase init
//firebase deploy
