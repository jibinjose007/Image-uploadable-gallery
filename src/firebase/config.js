import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArQP01XO-4UIdtz-j8oAqwDiHMxJXIV4s",
    authDomain: "image-gallery-db982.firebaseapp.com",
    projectId: "image-gallery-db982",
    storageBucket: "image-gallery-db982.appspot.com",
    messagingSenderId: "796201631775",
    appId: "1:796201631775:web:df8be00a63e79c6c9fd52a"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStoreage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectFirestore , projectStoreage };