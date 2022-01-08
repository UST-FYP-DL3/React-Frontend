// different firebase has different import ways
//import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAARMdx81V3qGCe0FP3aOzrRRZYFokjrSg",
    authDomain: "fyp-1-82732.firebaseapp.com",
    projectId: "fyp-1-82732",
    storageBucket: "fyp-1-82732.appspot.com",
    messagingSenderId: "486075527936",
    appId: "1:486075527936:web:250591dff697f4c7daf9e5",
    measurementId: "G-C1X3R6N972"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };