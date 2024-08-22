// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2_ZZG7X5p-KjoDojDGPX6BZm1l4a6Hq8",
  authDomain: "toma-iliev.firebaseapp.com",
  databaseURL: "https://toma-iliev.firebaseio.com",
  projectId: "toma-iliev",
  storageBucket: "toma-iliev.appspot.com",
  messagingSenderId: "733232669569",
  appId: "1:733232669569:web:6571c5992d19f7179fbe80",
  measurementId: "G-915J6MLZXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);