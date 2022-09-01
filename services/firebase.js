// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC020GngHn6_iuT2xpzNiIXf97m3Ent5rw",
  authDomain: "schoolhype-website.firebaseapp.com",
  projectId: "schoolhype-website",
  storageBucket: "schoolhype-website.appspot.com",
  messagingSenderId: "760047989297",
  appId: "1:760047989297:web:2539c4f31b64de4dc7db10",
  measurementId: "G-Q6DGWH05E4"
};

// Initialize Firebase
export let analytics = null;
export const app = initializeApp(firebaseConfig);
isSupported().then((result) => {
    if(result) {
        analytics = getAnalytics(app)
    }
})
export const database = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);