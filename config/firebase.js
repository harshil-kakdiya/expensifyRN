// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUtoc7VEBotBXbvmHiiH1KwsD6SXr7DSY",
  authDomain: "expensify-9f0cd.firebaseapp.com",
  projectId: "expensify-9f0cd",
  storageBucket: "expensify-9f0cd.appspot.com",
  messagingSenderId: "791036389538",
  appId: "1:791036389538:web:06f5a68772204bf1130ffb",
  measurementId: "G-4XGGNV23T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);
connectAuthEmulator(auth, "http://192.168.0.99:8081")
export const tripsRef= collection(db, 'trips')
export const expensesRef= collection(db, 'expenses')

export default app;
