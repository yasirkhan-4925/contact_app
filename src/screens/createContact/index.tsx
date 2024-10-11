import {colors} from '@app/assets/colors';
import React from 'react';
import {Text, View} from 'react-native';

const CreateContact = () => {
  return (
    <View
      style={{
        backgroundColor: colors.bgPrimary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Create contact</Text>
    </View>
  );
};

export default CreateContact;
