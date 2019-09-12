import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDtGAW5rruadGaiF4pqsE2ksC6uFg32DI4",
    authDomain: "windowswallpaper-30a76.firebaseapp.com",
    databaseURL: "https://windowswallpaper-30a76.firebaseio.com",
    projectId: "windowswallpaper-30a76",
    storageBucket: "",
    messagingSenderId: "567213343208",
    appId: "1:567213343208:web:406bf620aacf4df2da245d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;