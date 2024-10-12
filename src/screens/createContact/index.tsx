import React from 'react';
import {Text, View} from 'react-native';
import dynamicStyles from './styles';
import Header from './components/header';
import ContactForm from '@app/components/forms/contactForm';
import useContact from './useContact';

const CreateContact = () => {
  const styles = dynamicStyles();
  const {onSaveButtonPressed} = useContact();
  return (
    <View style={styles.container}>
      <Header onSaveButtonPress={onSaveButtonPressed} />
      <ContactForm />
    </View>
  );
};

export default CreateContact;
