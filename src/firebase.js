import firebase from 'firebase/app'

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
    apiKey: "AIzaSyCLvzPvgXZmDC7Z7EpF0pEJ5fE0AsHb1KE",
    authDomain: "todo-app-29db7.firebaseapp.com",
    projectId: "todo-app-29db7",
    storageBucket: "todo-app-29db7.appspot.com",
    messagingSenderId: "492370269573",
    appId: "1:492370269573:web:d9c903b0afe7ae6ff560ec"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;