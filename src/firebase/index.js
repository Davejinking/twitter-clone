import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyo-2RQth4FlFfIc6g75XLt_Dmf6gGSRQ",
    authDomain: "twitter-clone-ed30f.firebaseapp.com",
    projectId: "twitter-clone-ed30f",
    storageBucket: "twitter-clone-ed30f.appspot.com",
    messagingSenderId: "739841905181",
    appId: "1:739841905181:web:67c12f59522ef937c0acf4",
    measurementId: "G-GLTZJXCLLG"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const db = firebase.firestore()
  export const stroage = firebase.storage()

  // 유저정보
  export const USER_COLEECTION = db.collection("users")
  // 트윗정보
  export const TWEET_COLEETION = db.collection("tweets")