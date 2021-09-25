
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import {getFirestore, collection, doc, getDoc,setDoc,getDocs, addDoc, deleteDoc, query, where, orderBy, onSnapshot} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";



// we don't have to manually create collections... if not present while adding document... firebase creates a collection


const firebaseConfig = {
    apiKey: "AIzaSyAI5iydJSlbnDrvdYjHJMIZbXXof3LqZN0",
    authDomain: "rbchatroom.firebaseapp.com",
    projectId: "rbchatroom",
    storageBucket: "rbchatroom.appspot.com",
    messagingSenderId: "943305910738",
    appId: "1:943305910738:web:a7253bc873d0360fcf000b",
    measurementId: "G-1ETTCG01TY"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore();

 
export {db, collection, doc, getDoc,setDoc,getDocs, addDoc, deleteDoc, query, where, orderBy, onSnapshot} ;


