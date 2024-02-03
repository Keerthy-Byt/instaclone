import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKcI065TaU26Lvxf7klUt2Spuswv0N3cE",
  authDomain: "insta-clone-8ebe2.firebaseapp.com",
  projectId: "insta-clone-8ebe2",
  storageBucket: "insta-clone-8ebe2.appspot.com",
  messagingSenderId: "354543318506",
  appId: "1:354543318506:web:fff755424f033afdf92e93",
  measurementId: "G-X3DYM2CFB1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFireStore(app);
const storage = getStorage(app);

export (app, auth, firestore, storage);