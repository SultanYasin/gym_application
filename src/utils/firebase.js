
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC7B7J4vLxVdoxEEHIqAKJizWSYtz-pI3A",
  authDomain: "auth-935e1.firebaseapp.com",
  projectId: "auth-935e1",
  storageBucket: "auth-935e1.appspot.com",
  messagingSenderId: "306251057620",
  appId: "1:306251057620:web:b7c543d0087c5896186e41",
  measurementId: "G-TWKC7YSQ57"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider} 

