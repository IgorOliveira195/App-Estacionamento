import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAgXRr2nyoXnz5sOHjP-k2vLvlRWrKjJBs",
    authDomain: "estacionamento-a5f6a.firebaseapp.com",
    projectId: "estacionamento-a5f6a",
    storageBucket: "estacionamento-a5f6a.appspot.com",
    messagingSenderId: "649749413031",
    appId: "1:649749413031:web:8e12ddb21b45bddb75af82"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()

export default database