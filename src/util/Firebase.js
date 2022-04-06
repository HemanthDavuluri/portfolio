import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDxeqByiNtveQefXo7NEg-aloQgzqsuOQk",
  authDomain: "portfolio-69a6c.firebaseapp.com",
  projectId: "portfolio-69a6c",
  storageBucket: "portfolio-69a6c.appspot.com",
  messagingSenderId: "942919127119",
  appId: "1:942919127119:web:f7a5c71435fea81c609a3a",
  measurementId: "G-376Q69C3EL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
getAnalytics(app);

export default app;
