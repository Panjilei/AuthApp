import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/common/Header';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount () {
    const firebaseConfig = {
      apiKey: "AIzaSyDfJyyOERg24evxN55Bp3vlb9GdQio2NpQ",
      authDomain: "authapp-b8fa0.firebaseapp.com",
      databaseURL: "https://authapp-b8fa0.firebaseio.com",
      projectId: "authapp-b8fa0",
      storageBucket: "authapp-b8fa0.appspot.com",
      messagingSenderId: "453263418527",
      appId: "1:453263418527:web:0ace12dee08bd8eec12eaa",
      measurementId: "G-18J5MV09TX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  } 
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm/>
      </View>
    );
  }
}

export default App;