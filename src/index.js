import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'; 

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyCZWcjlMYFhoPQVA4-cS6mySiLpW6x8fE0",
    authDomain: "pseudogram-e8d40.firebaseapp.com",
    databaseURL: "https://pseudogram-e8d40.firebaseio.com",
    projectId: "pseudogram-e8d40",
    storageBucket: "pseudogram-e8d40.appspot.com",
    messagingSenderId: "755587061474"
});

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
registerServiceWorker();
