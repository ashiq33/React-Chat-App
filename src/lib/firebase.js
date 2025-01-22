import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "sheets-5081b.firebaseapp.com",
  projectId: "sheets-5081b",
  storageBucket: "sheets-5081b.firebasestorage.app",
  messagingSenderId: "573843765591",
  appId: "1:573843765591:web:e04119893b098e04696612",
  measurementId: "G-5WFHYRLBZS",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()