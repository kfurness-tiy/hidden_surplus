import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDpPskRsD-HNu3_beJfgE7P2gNwwKc2Xgs",
    authDomain: "hidden-surplus.firebaseapp.com",
    databaseURL: "https://hidden-surplus.firebaseio.com",
  };
firebase.initializeApp(config);

export const fbRef = firebase.database().ref();
export const fbDoGood = fbRef.child('doGood');
export const firebaseAuth = firebase.auth;

// Authentication setup credit goes to Tyler McGinnis https://github.com/tylermcginnis/react-router-firebase-auth
