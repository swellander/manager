import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase'; 
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAqJY-UvRWLkbfK0_nXAXKj1YxgCbmJ-QA',
      authDomain: 'manager-2b38d.firebaseapp.com',
      databaseURL: 'https://manager-2b38d.firebaseio.com',
      projectId: 'manager-2b38d',
      storageBucket: 'manager-2b38d.appspot.com',
      messagingSenderId: '587681185356'
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hey
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
