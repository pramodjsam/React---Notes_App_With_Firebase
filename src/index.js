import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDuT4DePt9aMixelZDJ3crZ4I7mhDysKYo",
    authDomain: "react-notes-firebase-1a680.firebaseapp.com",
    projectId: "react-notes-firebase-1a680",
    storageBucket: "react-notes-firebase-1a680.appspot.com",
    messagingSenderId: "653569506397",
    appId: "1:653569506397:web:96eef019be6c0a65f361b4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

