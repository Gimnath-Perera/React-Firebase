import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyB7fldRlBbF9FmjSu6qU6bTReUa60Qr4qY',
  authDomain: 'todo-d14a6.firebaseapp.com',
  projectId: 'todo-d14a6',
  storageBucket: 'todo-d14a6.appspot.com',
  messagingSenderId: '671032201667',
  appId: '1:671032201667:web:8a3e92c8a83ea4f639ad76',
  measurementId: 'G-GDD1DENL35'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
