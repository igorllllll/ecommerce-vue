import firebase from 'firebase/app'

require('firebase/auth');
require('firebase/firestore');
require('firebase/storage');
require('firebase/fuctions');

var firebaseConfig = {
    apiKey: "AIzaSyBUrmfxA9NVm-ucYXKZOTxKTyPI5bq--r8",
    authDomain: "test-f4b9b.firebaseapp.com",
    databaseURL: 'https://test-f4b9b-default-rtdb.firebaseio.com/',
    projectId: "test-f4b9b",
    storageBucket: "test-f4b9b.appspot.com",
    messagingSenderId: "485779223162",
    appId: "1:485779223162:web:81c7c423047c148341c1c3"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

export {
    firebase,
    auth,
    db,
    storage,
    functions
}