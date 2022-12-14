
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAQKrSUaGmY7DOBBXzMNsUzaco0rqoPW7k",
  authDomain: "chatappclone-dc295.firebaseapp.com",
  projectId: "chatappclone-dc295",
  storageBucket: "chatappclone-dc295.appspot.com",
  messagingSenderId: "528686484059",
  appId: "1:528686484059:web:c078f1365c5e9a6f304d7e",
  measurementId: "G-WBL5EPR204"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
 export const storage = getStorage();
 export const db =getFirestore();