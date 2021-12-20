import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHCZkXmGx8m1hvnSrzG0ku9l8orVl1bjc",
  authDomain: "react-libreria.firebaseapp.com",
  projectId: "react-libreria",
  storageBucket: "react-libreria.appspot.com",
  messagingSenderId: "1011962352106",
  appId: "1:1011962352106:web:1f6cc6dd894db168a4e293"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
