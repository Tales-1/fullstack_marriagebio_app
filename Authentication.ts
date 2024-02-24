// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlv18wm9YoYgt7kd4JTWvMmt6h68M9too",
  authDomain: "flask-ser.firebaseapp.com",
  projectId: "flask-ser",
  storageBucket: "flask-ser.appspot.com",
  messagingSenderId: "26422188673",
  appId: "1:26422188673:web:33898d06c204f8932fcb80",
  measurementId: "G-MVQPCH0R8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email:string,password:string) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
        return true;
    } catch (err) {
        if(err instanceof Error){
            console.error(err)
            return false;
        } else {
            console.log("unexpected error", err)
            return false;
        }
    }
}

const logout = () => {
    signOut(auth)
}

export {
    auth,
    logInWithEmailAndPassword,
    logout
}