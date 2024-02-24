// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {Firestore, getFirestore} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV0RW1FtwAgebzKjBKk7chBwuMy6AMpeA",
  authDomain: "vite-weather.firebaseapp.com",
  projectId: "vite-weather",
  storageBucket: "vite-weather.appspot.com",
  messagingSenderId: "1037393654560",
  appId: "1:1037393654560:web:b4a8f8609d418c0bb4dd45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

