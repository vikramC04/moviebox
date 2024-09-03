// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from  "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA-CqQro0KCZ4OE9XkNTxsYin4uY32hrw",
  authDomain: "moviecurtain-7773c.firebaseapp.com",
  projectId: "moviecurtain-7773c",
  storageBucket: "moviecurtain-7773c.appspot.com",
  messagingSenderId: "698864803479",
  appId: "1:698864803479:web:e94a7241718524c3be93d2",
  measurementId: "G-LPT2X8PTVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics }