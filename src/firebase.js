import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDgo4lnWQWJztfAmvl0BhliIFikK1xd5zI",
  authDomain: "portfolio-vivek-ba9f1.firebaseapp.com",
  projectId: "portfolio-vivek-ba9f1",
  storageBucket: "portfolio-vivek-ba9f1.appspot.com",
  messagingSenderId: "248385694091",
  appId: "1:248385694091:web:0185c1e787ffba15d9a78e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();