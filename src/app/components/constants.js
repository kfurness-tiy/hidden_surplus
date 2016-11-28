import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDpPskRsD-HNu3_beJfgE7P2gNwwKc2Xgs",
    authDomain: "hidden-surplus.firebaseapp.com",
    databaseURL: "https://hidden-surplus.firebaseio.com",
  };
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
