// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR39X4jI4ULWRBkTF_ySPrhoGmoH-8pTg",
  authDomain: "netflix-787bf.firebaseapp.com",
  projectId: "netflix-787bf",
  storageBucket: "netflix-787bf.appspot.com",
  messagingSenderId: "426966979706",
  appId: "1:426966979706:web:96bdfc2e62012f72a617c3",
  measurementId: "G-F4J3DG9DX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export {auth};
