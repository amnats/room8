import React from 'react';
import './App.css';
import View from './components/View/View';
import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyC6Bmz27pWZ4q9dOv8i4AUllEY3sLL9Pm4',
  authDomain: "room8-fd9e6.firebaseapp.com",
  databaseURL: "https://room8-fd9e6.firebaseio.com",
  projectId: "room8-fd9e6",
});

const db = firebase.firestore();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <View db={db}/>
      </div>
    );
  }
}

export default App;
