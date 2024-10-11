import ContactListItem from '@app/components/listItems/contactListItem';
import React from 'react';
import {View} from 'react-native';
import dynamicStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '@app/navigation/constant';

const ContactList = () => {
  const styles = dynamicStyles();
  const navigation = useNavigation();

  const onPressContactListItem = () => {
    navigation.navigate(Screen.ContactDetails as never);
  };
  return (
    <View style={styles.container}>
      <ContactListItem
        onPress={onPressContactListItem}
        userName="Muhammad Yasir"
      />
      <ContactListItem onPress={onPressContactListItem} userName="Wasi Ayub" />
      <ContactListItem
        onPress={onPressContactListItem}
        userName="Sameer Ahmed Khan"
      />
      <ContactListItem onPress={onPressContactListItem} userName="Ashar Ali" />
    </View>
  );
};

export default ContactList;
