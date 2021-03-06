import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {
  LoginPage,
} from './src/pages/login'

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1}}>
            <LoginPage/>
          </SafeAreaView>
      </>
    );
  }
};

export default App;
