// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8VL-aZgfSUxeaDB9IXBOokRzv8qkM96Q",
  authDomain: "moha-milon-73445.firebaseapp.com",
  projectId: "moha-milon-73445",
  storageBucket: "moha-milon-73445.appspot.com",
  messagingSenderId: "758851598287",
  appId: "1:758851598287:web:e163a03879ab680b5804ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth