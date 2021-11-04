// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG0OusAzFDC-tv3QCTAY1FOCVTcppFdRI",
  authDomain: "gym-management-app-a7a96.firebaseapp.com",
  projectId: "gym-management-app-a7a96",
  storageBucket: "gym-management-app-a7a96.appspot.com",
  messagingSenderId: "329265244595",
  appId: "1:329265244595:web:c87ff27d46fbf00ed7c3c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setting up Firebase Additional Resources 
const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth};