import firebase from "firebase";
// Initialize Firebase
const config = {
    apiKey: "AIzaSyBKtLxejToNm9xYMNqNXInqCGWPRG2aSvU",
    authDomain: "paginadenutricion-e2ff0.firebaseapp.com",
    databaseURL: "https://paginadenutricion-e2ff0.firebaseio.com",
    projectId: "paginadenutricion-e2ff0",
    storageBucket: "paginadenutricion-e2ff0.appspot.com",
    messagingSenderId: "745698229661"
};
const fire = firebase.initializeApp(config);
export default fire;
export const googleProvider = new firebase.auth.GoogleAuthProvider();