import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBKdicul3XCr8BGnbHofkOUIyhxM6prRdU",
  authDomain: "grocery-30393.firebaseapp.com",
  projectId: "grocery-30393",
  storageBucket: "grocery-30393.appspot.com",
  messagingSenderId: "517414490907",
  appId: "1:517414490907:web:ee6ede3b0f1f59c69779be"
};

const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)