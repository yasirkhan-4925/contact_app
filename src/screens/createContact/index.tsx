import React from 'react';
import {ScrollView, View} from 'react-native';
import dynamicStyles from './styles';
import Header from './components/header';
import ContactForm from '@app/components/forms/contactForm';
import useContact from './useContact';
import AddPhoto from './components/addPhoto';

const CreateContact = () => {
  const styles = dynamicStyles();
  const {onSaveButtonPressed, formikRef, isEditable} = useContact();
  return (
    <View style={styles.container}>
      <Header isEditable={isEditable} onSaveButtonPress={onSaveButtonPressed} />
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <AddPhoto />
        <ContactForm ref={formikRef} />
      </ScrollView>
    </View>
  );
};

export default CreateContact;
