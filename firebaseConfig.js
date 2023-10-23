// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getStorage} from  'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuSZXDk-Dg8E6l5zwGFh_krpnKVmSMu8A",
  authDomain: "eawards.vercel.app",
  projectId: "eawards-app",
  storageBucket: "eawards-app.appspot.com",
  messagingSenderId: "987521265914",
  appId: "1:987521265914:web:e72c278a3dee943c7f1943",
  measurementId: "G-4L32DTS37R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {
  auth,db,storage
}