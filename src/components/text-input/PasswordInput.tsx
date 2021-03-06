import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import {
  TextInput
} from 'react-native-paper';

const PasswordInput = (props: any) => {
  const { handleTextChange } = props; 
  return (
    <>
      <TextInput
      style={styles.texbox}
      mode='outlined'
      placeholder='Password'
      onChangeText={(text) => handleTextChange(text)}
      secureTextEntry={true}
      />
    </>
  );
}

const styles = StyleSheet.create({
  texbox: {
    alignContent: 'center',
    height: 45,
  }
});

export default PasswordInput;
