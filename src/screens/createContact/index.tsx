import React from 'react';
import {View} from 'react-native';
import dynamicStyles from './styles';
import Header from './components/header';
import ContactForm from '@app/components/forms/contactForm';
import useContact from './useContact';

const CreateContact = () => {
  const styles = dynamicStyles();
  const {onSaveButtonPressed, formikRef} = useContact();
  return (
    <View style={styles.container}>
      <Header onSaveButtonPress={onSaveButtonPressed} />
      <ContactForm ref={formikRef} />
    </View>
  );
};

export default CreateContact;
