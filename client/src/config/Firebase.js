import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBeUiaotv-6BT_gmhU2ArjXA2zcLYvw2Qc",
  authDomain: "healthyhelperv2.firebaseapp.com",
  databaseURL: "https://healthyhelperv2.firebaseio.com",
  projectId: "healthyhelperv2",
  storageBucket: "healthyhelperv2.appspot.com",
  appId: "1:271873144564:web:7b424cb4b2928e794890a1",
  messagingSenderId: "G-7D67GQFD37"
};

const Firebase = firebase.initializeApp(config);

export default Firebase;