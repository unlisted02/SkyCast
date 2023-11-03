import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    projectId: 'weather-app-angular-65dba',
    appId: '1:695097891845:web:a11d7a4bea39f0cc69906c',
    databaseURL: 'https://weather-app-angular-65dba-default-rtdb.firebaseio.com',
    storageBucket: 'weather-app-angular-65dba.appspot.com',
    apiKey: 'AIzaSyAT6N507o1-6CeTKCdKUDL-8pqrQp2-K8o',
    authDomain: 'weather-app-angular-65dba.firebaseapp.com',
    messagingSenderId: '695097891845',
    measurementId: 'G-0CETR3P8N3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;