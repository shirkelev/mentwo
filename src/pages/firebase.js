/* global firebase */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS1VZCQRZHQUQjWoK9aXAvl1YuKwCpZPo",
  authDomain: "internview-af2ef.firebaseapp.com",
  projectId: "internview-af2ef",
  storageBucket: "internview-af2ef.appspot.com",
  messagingSenderId: "884230331509",
  appId: "1:884230331509:web:c873584da72b8b9c96ac3c",
  measurementId: "G-SLLLHV84CM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { db, auth, googleAuthProvider };
