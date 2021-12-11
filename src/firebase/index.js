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
  export const storage = firebase.storage()
  
  export const USER_COLEECTION = db.collection('users')
  export const TWEET_COLEECTION = db.collection('tweets')
  export const COMMENT_COLEECTION = db.collection('comment')
  export const RETWEET_COLEECTION = db.collection('retweets')
  export const LIKE_COLEECTION = db.collection('likes')
