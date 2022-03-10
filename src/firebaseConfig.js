
 import "firebase/compat/firestore";
 import "firebase/compat/auth";
 import firebase from "firebase/compat/app";
 import {getDatabase} from "firebase/database";





 export const firebaseConfig = {
    apiKey: "AIzaSyCmOWGeoETMivcI7OnwjcxoR3oqzHDfxp4",
    authDomain: "auth-react-c2f06.firebaseapp.com",
    projectId: "auth-react-c2f06",
    storageBucket: "auth-react-c2f06.appspot.com" ,
    messagingSenderId:"197905796861" ,
    appId: "1:197905796861:web:cfb21a08286cc1ed6a3894"

};
const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();


export {db, auth};

