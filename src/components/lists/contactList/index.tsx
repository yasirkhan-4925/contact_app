import ContactListItem from '@app/components/listItems/contactListItem';
import React from 'react';
import {View} from 'react-native';

const ContactList = () => {
  return (
    <View>
      <ContactListItem />
      <ContactListItem />
      <ContactListItem />
      <ContactListItem />
    </View>
  );
};

export default ContactList;
