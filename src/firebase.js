
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBtjzC5i9lJR7kHIBHJcFYw3EvSLFQOv-Q",
  authDomain: "what-s-chat-881c1.firebaseapp.com",
  projectId: "what-s-chat-881c1",
  storageBucket: "what-s-chat-881c1.appspot.com",
  messagingSenderId: "964870142667",
  appId: "1:964870142667:web:486003fac215ceaebb394e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
 export const storage = getStorage();
 export const db =getFirestore();