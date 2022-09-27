import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDidUzZ-8mMKzbrY5YO5bnRzw7MQNTUfG0",
  authDomain: "e-ride-6fa96.firebaseapp.com",
  projectId: "e-ride-6fa96",
  storageBucket: "e-ride-6fa96.appspot.com",
  messagingSenderId: "725486366347",
  appId: "1:725486366347:web:b27a785fc425b5dc58ae8e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
