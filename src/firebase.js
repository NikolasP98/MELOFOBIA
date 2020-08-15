import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAyxJZ2Thrl4fFjuYvAWbQlz-vxJhSTWbw",
    authDomain: "melofobia-1ce40.firebaseapp.com",
    databaseURL: "https://melofobia-1ce40.firebaseio.com",
    projectId: "melofobia-1ce40",
    storageBucket: "melofobia-1ce40.appspot.com",
    messagingSenderId: "693305348998",
    appId: "1:693305348998:web:12185ed4729de3b871d207",
    measurementId: "G-60YZNT668V"
};

firebase.initializeApp(firebaseConfig);

export default firebase;