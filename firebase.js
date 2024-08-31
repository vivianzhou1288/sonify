// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSQOpZS8zbTuPtNN_03zdv1qI0WVLKBjo",
  authDomain: "sonify-c0062.firebaseapp.com",
  projectId: "sonify-c0062",
  storageBucket: "sonify-c0062.appspot.com",
  messagingSenderId: "536167278329",
  appId: "1:536167278329:web:d6218aa9ca60b206eba428",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
