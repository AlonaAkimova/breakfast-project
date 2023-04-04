import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "breakfast-project.firebaseapp.com",
  projectId: "breakfast-project",
  storageBucket: "breakfast-project.appspot.com",
  messagingSenderId: "473682550330",
  appId: "1:473682550330:web:b1696b1e897bdd53105f03",
};

// env
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
