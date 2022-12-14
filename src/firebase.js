
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// const firebaseConfig = {
//   apiKey: "AIzaSyBo8r9J9WgkZYW4tVcxk7Wbpc6qKww06fo",
//   authDomain: "new-chat-18e9f.firebaseapp.com",
//   projectId: "new-chat-18e9f",
//   storageBucket: "new-chat-18e9f.appspot.com",
//   messagingSenderId: "514476784462",
//   appId: "1:514476784462:web:d7418c8da55de9256afc1f"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBtjzC5i9lJR7kHIBHJcFYw3EvSLFQOv-Q",
  authDomain: "what-s-chat-881c1.firebaseapp.com",
  databaseURL: "https://what-s-chat-881c1-default-rtdb.firebaseio.com",
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