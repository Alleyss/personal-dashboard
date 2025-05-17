// Import only what you need from Firebase v9 SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object (from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyCvb34RVIrQ-AOGqZpgQ-om8YoitRS9Weg",
    authDomain: "personal-dashboard-ef893.firebaseapp.com",
    projectId: "personal-dashboard-ef893",
    storageBucket: "personal-dashboard-ef893.appspot.com",
    messagingSenderId: "430114358049",
    appId: "1:430114358049:web:5480c6bfb33780f2c0f460",
    measurementId: "G-02LVHK3S2Z"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db ,auth };
