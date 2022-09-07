import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";
import { ref, push } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBMpt3UyLqK2BbPe1zkT-339HeY5_76PTk",
    authDomain: "ecommerce-final-68b95.firebaseapp.com",
    projectId: "ecommerce-final-68b95",
    storageBucket: "ecommerce-final-68b95.appspot.com",
    messagingSenderId: "582610128613",
    appId: "1:582610128613:web:7e0a7790092a802def4e0c",
    databaseURL: "https://ecommerce-final-68b95-default-rtdb.firebaseio.com/"
    };

 // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const database = getDatabase(firebaseApp);
const ProdListRef = ref(database, 'products');
const newProdRef = push(ProdListRef);
console.log("se ejecuto correctamente");
 
  

export { auth, db };  