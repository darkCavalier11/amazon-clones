// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDMLifEHI8mK8rBqrhcpPpCq3G950M-rFg",
  authDomain: "challenge-35df3.firebaseapp.com",
  databaseURL: "https://challenge-35df3.firebaseio.com",
  projectId: "challenge-35df3",
  storageBucket: "challenge-35df3.appspot.com",
  messagingSenderId: "638124718151",
  appId: "1:638124718151:web:fa9c05f515aef7f6f05962",
  measurementId: "G-Z5EHE7B6M7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
