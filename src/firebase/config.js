// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"
import { getEnvVariables } from "../helpers/getEnvVariables";


const {VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDER_ID,
  VITE_APP_ID} = getEnvVariables()


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDw_cqhXOTvxxUP2imcYCy0dWnYLGJ7Y4Y",
//   authDomain: "social-media-3ca5b.firebaseapp.com",
//   projectId: "social-media-3ca5b",
//   storageBucket: "social-media-3ca5b.appspot.com",
//   messagingSenderId: "50831840841",
//   appId: "1:50831840841:web:f9750c728debc20fa21198",
// };


const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID,
}
   

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
