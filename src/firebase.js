// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0HbXmmluh92eoRmZjC62OrzQjdR_DaSI",
  authDomain: "netflix-practice-75394.firebaseapp.com",
  projectId: "netflix-practice-75394",
  storageBucket: "netflix-practice-75394.appspot.com",
  messagingSenderId: "117431850533",
  appId: "1:117431850533:web:617432a0de913c47b111cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
