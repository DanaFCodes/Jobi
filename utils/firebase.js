import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDqqVSvthw2-DsBRm6KX1TDrHT04bGcTlo",
  authDomain: "jobi-891df.firebaseapp.com",
  projectId: "jobi-891df",
  storageBucket: "jobi-891df.appspot.com",
  messagingSenderId: "169996959210",
  appId: "1:169996959210:web:464894b12c961c7b8c0693"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}

const firestore = firebase.firestore();
export { firestore };

