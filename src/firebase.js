import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeLplmmSBuGaf3grtDx-iS6ENWdeOf9mM",
    authDomain: "crud-84d15.firebaseapp.com",
    projectId: "crud-84d15",
    storageBucket: "crud-84d15.appspot.com",
    messagingSenderId: "1053076535467",
    appId: "1:1053076535467:web:16f98a55fb1a5859625fee"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);