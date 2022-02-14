// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdm2Smxov3UMtIXBVpuWzV5ejRZCXEIy4",
  authDomain: "react-mern-colone.firebaseapp.com",
  projectId: "react-mern-colone",
  storageBucket: "react-mern-colone.appspot.com",
  messagingSenderId: "489976716441",
  appId: "1:489976716441:web:2cd9153de7336c1c81ec08",
  measurementId: "G-8XKJNTQP75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const provider=new GoogleAuthProvider()

export {auth, provider}