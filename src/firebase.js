import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE8TBTL1AJaohHQZGgrtS5AswPXt-vP4M",
  authDomain: "vocal-for-local-c6404.firebaseapp.com",
  databaseURL: "https://vocal-for-local-c6404.firebaseio.com",
  projectId: "vocal-for-local-c6404",
  storageBucket: "vocal-for-local-c6404.appspot.com",
  messagingSenderId: "1041327585494",
  appId: "1:1041327585494:web:90a7dc1251c9663f503177",
  measurementId: "G-DRE1J3PYDM"
};

  firebase.initializeApp(firebaseConfig);

  const db =firebase.firestore();
  const auth=firebase.auth();
  const storage = firebase.storage();

  export {db , auth, storage };