import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpWi8mJ-4qH2sDFvefwhhOJqQtZKqlPDc",
  authDomain: "funn-chats.firebaseapp.com",
  projectId: "funn-chats",
  storageBucket: "funn-chats.appspot.com",
  messagingSenderId: "25615746990",
  appId: "1:25615746990:web:a7538365cbf82570806a3f"
};
  export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();