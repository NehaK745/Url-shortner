import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCwaUeYSWGxbN2_tbsKFDDVb1kjiSb97O8",
    authDomain: "url-shortner-b9e51.firebaseapp.com",
    projectId: "url-shortner-b9e51",
    storageBucket: "url-shortner-b9e51.appspot.com",
    messagingSenderId: "1061908295159",
    appId: "1:1061908295159:web:3d5b7bfc6e815d9863d2f2"
  };
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();