// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz0jmB8xlVBbJC4zQVFt9C-i5kAgoELH0",
  authDomain: "myportfolio-8a3de.firebaseapp.com",
  projectId: "myportfolio-8a3de",
  storageBucket: "myportfolio-8a3de.firebasestorage.app",
  messagingSenderId: "1005010228248",
  appId: "1:1005010228248:web:6483d7b23e0b8454de1f6d",
  measurementId: "G-J2N08VELLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, getDocs };