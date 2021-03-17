const firebase = require("firebase");

require("firebase/firestore");

const users = require("./data.js");

firebase.initializeApp({
    apiKey: "AIzaSyCC9s3cMSuzjKXac9hpnyogPcTXy9xeBrI",
    authDomain : "whatsapp-clone-e5410.firebaseapp.com",
    projectId :"whatsapp-clone-e5410"
});

const db = firebase.firestore();

users.forEach((user) => {
    db.collection("users").add(user)
    .then((docRef) => {
        console.log(`Document added with ID : ${docRef.id}`);
    }).catch((error) => {
       console.error(`Error writing document : ${error}`);
    });
});
