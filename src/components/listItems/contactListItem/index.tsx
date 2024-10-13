import {AppText, Avatar} from '@app/components';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import dynamicStyles from './styles';
import {moderateScale} from '@app/utils';
import {ETextType} from '@app/components/types';
import {Contact} from 'react-native-contacts/type';

interface Props {
  contact: Contact;
  onPress: () => void;
}

const ContactListItem = ({contact, onPress}: Props) => {
  const styles = dynamicStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Avatar
        username={contact?.givenName || ''}
        size={moderateScale(45)}
        customTextStyles={styles.avatarTextStyles}
      />
      <View style={styles.textContainer}>
        <AppText numberOfLines={1} type={ETextType.H6}>
          {contact?.displayName}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;
