import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import { Header, Button, Spinner } from './src/components/common';

export default class App extends Component {
  state = { 
    loggedIn: null,
    username: ''
  };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, username: user.email });
        console.log(user)
      } else {
        this.setState({ loggedIn: false });
      }   
    }
  ) 
};

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Button onPress={() => firebase.auth().signOut()}>
                  Log Out
              </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }


  render() {
    return (
      <SafeAreaView>
        <View>
          <Header title="Authentication"/>
          {this.renderContent()}      
        </View>
      </SafeAreaView>
    );
  }
}