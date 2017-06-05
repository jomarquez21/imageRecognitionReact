import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const config = {
  apiKey: "AIzaSyB-InvWSoEVKx9wA5UY_P5Yuj4BYWKlgio",
  authDomain: "imagerecognitionreact.firebaseapp.com",
  databaseURL: "https://imagerecognitionreact.firebaseio.com",
  projectId: "imagerecognitionreact",
  storageBucket: "imagerecognitionreact.appspot.com",
  messagingSenderId: "20005783564"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
