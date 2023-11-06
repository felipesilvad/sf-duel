import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
"Private"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};
export default getFirestore();
