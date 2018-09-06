import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCR45T93771-O2ozcZ8Ze-YWjerfsfJWQA",
    authDomain: "sissy-virtual-nurse-37575.firebaseapp.com",
    databaseURL: "https://sissy-virtual-nurse-37575.firebaseio.com",
    projectId: "sissy-virtual-nurse-37575",
    storageBucket: "sissy-virtual-nurse-37575.appspot.com",
    messagingSenderId: "670403823031"
};




firebase.initializeApp(config);

ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
