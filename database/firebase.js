// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAoHBlJheVuWk9tUP2UD61JjZeWW4iVD3Q",
  authDomain: "fashionbook-f269e.firebaseapp.com",
  projectId: "fashionbook-f269e",
  storageBucket: "fashionbook-f269e.appspot.com",
  messagingSenderId: "41619461125",
  appId: "1:41619461125:web:bacf055edef88fb3c0386c",
});

const db = getFirestore();
export default db;
