import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDW83t7QwvPmdC0-a9qOBAGp3S5KMglono",
    authDomain: "clone-bac51.firebaseapp.com",
    databaseURL: "https://clone-bac51.firebaseio.com",
    projectId: "clone-bac51",
    storageBucket: "clone-bac51.appspot.com",
    messagingSenderId: "235315500524",
    appId: "1:235315500524:web:5b21d7340e4e8de1f71cc9",
    measurementId: "G-G8QXGME2HV"
});

const auth = firebase.auth();

export { auth };