// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaCchSOW-LPQkt-Sbj1dPsElXrg8HvUaM",
  authDomain: "eventify-1db23.firebaseapp.com",
  projectId: "eventify-1db23",
  storageBucket: "eventify-1db23.appspot.com",
  messagingSenderId: "707341013157",
  appId: "1:707341013157:web:9ac41e1f9c5cc9cae87d4c",
  measurementId: "G-4FRH3SJW89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
