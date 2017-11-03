var firebase = require("firebase-admin");

firebase.initializeApp({
  apiKey: "AIzaSyBfyYpJWAA_3_8JCe4OBqjn2IncDyd5uc4",
  authDomain: "sige-rg.firebaseapp.com",
  databaseURL: "https://sige-rh.firebaseio.com/",
  storageBucket: "gs://sige-rh.appspot.com/",
});

module.exports = firebase;