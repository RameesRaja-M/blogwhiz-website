// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD8MS2Z460ndlxvDexj1wD8oTN2gMwkxJE",
  authDomain: "blog-app-a0474.firebaseapp.com",
  projectId: "blog-app-a0474",
  storageBucket: "blog-app-a0474.firebasestorage.app",
  messagingSenderId: "438835878242",
  appId: "1:438835878242:web:fe2ab183753b8f77a4f43b",
  measurementId: "G-7PBM9C1D9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth