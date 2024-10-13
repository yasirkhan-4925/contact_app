import React from 'react';
import dynamicStyles from './styles';
import Header from './components/header';
import {CustomView} from '@app/components';
import ContactProfile from './components/contactProfile';
import {ScrollView} from 'react-native';
import useContactDetails from './useContactDetails';
const ContactDetailsScreen = () => {
  const {contact, onDeleteContactPress} = useContactDetails();
  const styles = dynamicStyles();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <CustomView containerStyle={styles.container}>
        <Header />
        <ContactProfile
          onDeleteContactPress={onDeleteContactPress}
          contact={contact}
        />
      </CustomView>
    </ScrollView>
  );
};

export default ContactDetailsScreen;
