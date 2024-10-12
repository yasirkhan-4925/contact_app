import React from 'react';
import {Text, View} from 'react-native';
import dynamicStyles from './styles';
import Header from './components/header';

const CreateContact = () => {
  const styles = dynamicStyles();
  return (
    <View style={styles.container}>
      <Header onSaveButtonPress={() => {}} />
    </View>
  );
};

export default CreateContact;
