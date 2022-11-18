// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYRrqYtnDpzFRyTmQlgNAy0gq5no2XxRg",
  authDomain: "chat-app-ddd95.firebaseapp.com",
  projectId: "chat-app-ddd95",
  storageBucket: "chat-app-ddd95.appspot.com",
  messagingSenderId: "870641714086",
  appId: "1:870641714086:web:194068d878a3138341c567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)