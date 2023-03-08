import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9apTMWmRS6-8MIDWSILJOeGJygS6RR0M",
  authDomain: "sfduel-74b69.firebaseapp.com",
  projectId: "sfduel-74b69",
  storageBucket: "sfduel-74b69.appspot.com",
  messagingSenderId: "466050752318",
  appId: "1:466050752318:web:996f1d42767646c21e166f",
  measurementId: "G-8QNR5S8Y7C"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};
export default getFirestore();