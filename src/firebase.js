import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2pi0RiZF3VeU2PIRx1VG9qu8J0J9TRjg",
  authDomain: "cred-news.firebaseapp.com",
  projectId: "cred-news",
  storageBucket: "cred-news.appspot.com",
  messagingSenderId: "220168688339",
  appId: "1:220168688339:web:fbdeaa4d704d3ed34f7a26",
  measurementId: "G-HRLWYS50C8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
