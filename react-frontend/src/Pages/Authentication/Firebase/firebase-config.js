import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//please run:
// npm install firebase
// npm install react-firebase-hooks

const firebaseConfig = {
    apiKey: "AIzaSyA0ncIKU5jIysAn0hE1twqG4cTkhrV1UeI",
    authDomain: "happy-bodies-anywhere.firebaseapp.com",
    projectId: "happy-bodies-anywhere",
    storageBucket: "happy-bodies-anywhere.appspot.com",
    messagingSenderId: "843530764615",
    appId: "1:843530764615:web:81d211d99ee4eec37acc62"
  };

  const app = initializeApp(firebaseConfig);

  //auth contains all the info of the user that just logged in (https://console.firebase.google.com/project/happy-bodies-anywhere/authentication/users)
  //https://firebase.google.com/docs/reference/rest/auth?hl=en&authuser=0
  const auth = getAuth();
  //links our app to the firestore database (https://console.firebase.google.com/project/happy-bodies-anywhere/firestore/data/~2Fusers~2F65MoLtxHjJb7sTPHEahToV5hzG42)
  const db = getFirestore();
  
  export { auth, db }

  