import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {initializeAuth, getReactNativePersistence} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBH_rhVHG7z5pjA9_dFIJoPvIoFBO8mJqI",
  authDomain: "metas-966ea.firebaseapp.com",
  projectId: "metas-966ea",
  storageBucket: "metas-966ea.firebasestorage.app",
  messagingSenderId: "924812740729",
  appId: "1:924812740729:web:628bf30035aeb101caaca8",
  measurementId: "G-552BPWLFPQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export {db, auth};