import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1QBNQOTFVBwEQLsCl51PHOEUyyFbmELA",
  authDomain: "ecotracker-v2.firebaseapp.com",
  projectId: "ecotracker-v2",
  storageBucket: "ecotracker-v2.appspot.com",
  messagingSenderId: "594498137118",
  appId: "1:594498137118:web:7682d3b8efd7052928120f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export default { app };
