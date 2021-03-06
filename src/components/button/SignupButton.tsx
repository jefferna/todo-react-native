import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import {
  Button
} from 'react-native-paper';

const SignupButton = () => {
  const handleButtonPress = () => {
    console.log('Signup Button Pressed!');
  }
  
  return (
    <>
      <Button
      mode='text'
      style={styles.button}
      onPress={handleButtonPress}>
          New User? Create Account Here!
      </Button>
    </>
  );
}


const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    height: 45,
  }
});

export default SignupButton;
