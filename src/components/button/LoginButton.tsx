import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import {
  Button
} from 'react-native-paper';

const LoginButton = (props: any) => {
  
  const { handleButtonClick } = props;
  return (
    <>
      <Button
      mode='contained'
      style={styles.button}
      onPress={handleButtonClick}>
          LOGIN
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    height: 45,
    marginTop: 7
  }
});

export default LoginButton;
