import React from 'react';
import dynamicStyles from './styles';
import Header from './components/header';
import {CustomView} from '@app/components';
import ContactProfile from './components/contactProfile';
import {ScrollView} from 'react-native';
const ContactDetailsScreen = () => {
  const styles = dynamicStyles();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <CustomView containerStyle={styles.container}>
        <Header />
        <ContactProfile />
      </CustomView>
    </ScrollView>
  );
};

export default ContactDetailsScreen;
