import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEZb0bzh8NsH_CNDJtTY_gmld-XVaCZPA",
  authDomain: "elysian-chaniya-choli.firebaseapp.com",
  projectId: "elysian-chaniya-choli",
  storageBucket: "elysian-chaniya-choli.firebasestorage.app",
  messagingSenderId: "232370338690",
  appId: "1:232370338690:web:e9f1c1f6ad3f66eaeaad9b"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
