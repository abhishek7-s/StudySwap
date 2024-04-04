import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4Ui0NA0KD7XV-haPWiCBfGsHtRjPzzu8",
  authDomain: "studyswap-35ce9.firebaseapp.com",
  projectId: "studyswap-35ce9",
  storageBucket: "studyswap-35ce9.appspot.com",
  messagingSenderId: "609831568469",
  appId: "1:609831568469:web:b220e77679daea2cb300dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;