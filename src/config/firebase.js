// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeT5ay34-a1WZN9xeyI066OdkCslLY3Mk",
  authDomain: "vite-contact-e9ba6.firebaseapp.com",
  projectId: "vite-contact-e9ba6",
  storageBucket: "vite-contact-e9ba6.firebasestorage.app",
  messagingSenderId: "829984382410",
  appId: "1:829984382410:web:a77f34e5eca5ebd19ec333",
  measurementId: "G-TSQ5E1C7FS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
