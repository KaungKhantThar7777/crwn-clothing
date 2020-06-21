import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAkKIegBNTukY-XPPA8juBmfjX8Ri_7Inc",
  authDomain: "crwn-db-f03cd.firebaseapp.com",
  databaseURL: "https://crwn-db-f03cd.firebaseio.com",
  projectId: "crwn-db-f03cd",
  storageBucket: "crwn-db-f03cd.appspot.com",
  messagingSenderId: "101137826880",
  appId: "1:101137826880:web:549c55611e66723f55cba5",
  measurementId: "G-XT42EM07G0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
