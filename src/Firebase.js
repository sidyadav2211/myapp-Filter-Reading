
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDgmyf7YYQnuQ10bBRx-tVo9yR2OpvoYak",
    authDomain: "testing-ab37b.firebaseapp.com",
    databaseURL: "https://testing-ab37b.firebaseio.com",
    projectId: "testing-ab37b",
    storageBucket: "testing-ab37b.appspot.com",
    messagingSenderId: "162090644931",
    appId: "1:162090644931:web:8ef05ceb3527e895a17976",
    measurementId: "G-VR4VT1C596"
};
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
// db.settings({ timestampsInSnapshots: true })
const firebaseAuth = firebaseApp.auth()
// const provider = new firebaseApp.FacebookAuthProvider()
export { firebaseAuth, db }