// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXmuPUFH87rJVYPrKP2Wanjxh1Md8puBg",
  authDomain: "ecommerce-a44e1.firebaseapp.com",
  projectId: "ecommerce-a44e1",
  storageBucket: "ecommerce-a44e1.firebasestorage.app",
  messagingSenderId: "944743281745",
  appId: "1:944743281745:web:ac58f4760923c6cefe7470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }