import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAz5FlS3SVJ2CKqajOcGYUPGG0djzaHjqc",
    authDomain: "todos-1d2ab.firebaseapp.com",
    projectId: "todos-1d2ab",
    storageBucket: "todos-1d2ab.appspot.com",
    messagingSenderId: "386533726516",
    appId: "1:386533726516:web:ad581c43989a19d0d06d61",
    measurementId: "G-9631X9BH1B"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

