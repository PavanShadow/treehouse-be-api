const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyAsoO_blZbjGoqC-U1labsrvQ-WwlQ_Z5s",
    authDomain: "treehouse-api-b4d6c.firebaseapp.com",
    projectId: "treehouse-api-b4d6c",
    storageBucket: "treehouse-api-b4d6c.appspot.com",
    messagingSenderId: "385807103590",
    appId: "1:385807103590:web:a591b14577bbd9f8749fa7",
    measurementId: "G-NP4CQPBG5S"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Item = db.collection('Items');
module.exports = Item;
