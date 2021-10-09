import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC3wR3FlmZymgPwqOF9ngWSDU8O6I9qHBA",
    authDomain: "clone-c7088.firebaseapp.com",
    projectId: "clone-c7088",
    storageBucket: "clone-c7088.appspot.com",
    messagingSenderId: "842101515141",
    appId: "1:842101515141:web:d4611068d59e9ba9b89aec",
    measurementId: "G-D2X4V0WZ2K"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };