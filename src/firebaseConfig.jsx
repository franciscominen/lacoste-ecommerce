import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSvGbxA8YjBmvJzn8WdRrxZbXz4zaP_j8",
    authDomain: "reactjs-lacoste-ecommerce.firebaseapp.com",
    projectId: "reactjs-lacoste-ecommerce",
    storageBucket: "reactjs-lacoste-ecommerce.appspot.com",
    messagingSenderId: "928456881157",
    appId: "1:928456881157:web:13692a901aeed6f51e986c",
    measurementId: "G-YRSEJ5XR1F"
  };

const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore()


/* import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBSvGbxA8YjBmvJzn8WdRrxZbXz4zaP_j8",
    authDomain: "reactjs-lacoste-ecommerce.firebaseapp.com",
    projectId: "reactjs-lacoste-ecommerce",
    storageBucket: "reactjs-lacoste-ecommerce.appspot.com",
    messagingSenderId: "928456881157",
    appId: "1:928456881157:web:13692a901aeed6f51e986c",
    measurementId: "G-YRSEJ5XR1F"
});

const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();

export default firestore; */