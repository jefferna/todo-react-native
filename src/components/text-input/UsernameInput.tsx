import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import {
  TextInput
} from 'react-native-paper';

const UsernameInput = (props: any) => {

  const {handleTextChange} = props;
  return (
    <>
      <TextInput
      style={styles.texbox}
      mode='outlined'
      placeholder='Username'
      onChangeText={handleTextChange}
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

export default UsernameInput;
