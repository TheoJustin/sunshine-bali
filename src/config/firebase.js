// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxfKb3U2arXxKW8VPGmK5psxZSgaV3QGQ",
  authDomain: "icp-bali.firebaseapp.com",
  projectId: "icp-bali",
  storageBucket: "icp-bali.appspot.com",
  messagingSenderId: "345015407263",
  appId: "1:345015407263:web:2a8b40add4308c133cc8aa",
  measurementId: "G-XLRSMKQ1C9",
  storageBucket: ''
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);