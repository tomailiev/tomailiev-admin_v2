////copy before other content!
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions"



/// copy after other content!
const db = process.env.NODE_ENV === 'development' ? getFirestore(app, 'mock-data') :  getFirestore(app);
// const db = getFirestore(app)
const storage = process.env.NODE_ENV === 'development' ? getStorage(app, 'gs://relic-mock-storage') : getStorage(app);
const staticStorage = getStorage(app, 'gs://relic-708e6-static');
const auth = getAuth(app);
const functions =  getFunctions(app);
if (process.env.REACT_APP_EMULATORS) {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}
export { db, analytics, storage, staticStorage, firebaseConfig, auth, functions };