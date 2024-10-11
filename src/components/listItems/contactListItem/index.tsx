import {AppText, Avatar} from '@app/components';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import dynamicStyles from './styles';
import {moderateScale} from '@app/utils';
import {ETextType} from '@app/components/types';

interface Props {
  userName: string;
  onPress: () => void;
}

const ContactListItem = ({userName, onPress}: Props) => {
  const styles = dynamicStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Avatar
        username={userName}
        size={moderateScale(45)}
        customTextStyles={styles.avatarTextStyles}
      />
      <View style={styles.textContainer}>
        <AppText numberOfLines={1} type={ETextType.H6}>
          {userName}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;
