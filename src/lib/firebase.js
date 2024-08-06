import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-1f74b.firebaseapp.com",
  projectId: "reactchat-1f74b",
  storageBucket: "reactchat-1f74b.appspot.com",
  messagingSenderId: "891388964928",
  appId: "1:891388964928:web:6953496159378b0f862fa5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
