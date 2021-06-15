import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCIoqBSd6PGfMChyrbLUJ-HFeYEXeL7RVQ",
  authDomain: "hrtools-32d4f.firebaseapp.com",
  databaseURL: "https://hrtools-32d4f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hrtools-32d4f",
  storageBucket: "hrtools-32d4f.appspot.com",
  messagingSenderId: "356539007494",
  appId: "1:356539007494:web:11a7c830614ec366e5f987"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
        <App />
      </FirebaseDatabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
