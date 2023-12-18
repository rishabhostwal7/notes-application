import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA_qYrETfynFY1gXIa8xVAl2GsyAk8Z4_g",
  authDomain: "react-notes-c4996.firebaseapp.com",
  projectId: "react-notes-c4996",
  storageBucket: "react-notes-c4996.appspot.com",
  messagingSenderId: "296775299673",
  appId: "1:296775299673:web:c72ba5d1658d51c3ff3748"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")