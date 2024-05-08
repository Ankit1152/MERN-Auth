// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-813f5.firebaseapp.com",
  projectId: "mern-auth-813f5",
  storageBucket: "mern-auth-813f5.appspot.com",
  messagingSenderId: "1008341795710",
  appId: "1:1008341795710:web:1ae853861c3bbc0505292f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
