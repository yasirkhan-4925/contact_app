import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppText from '@app/components/custom/appText';
import {ETextType} from '@app/components/types';
import CustomView from '@app/components/custom/customView';

const HomeScreen = () => {
  return (
    <CustomView containerStyle={styles.container}>
      <AppText type={ETextType.H2}>This is home </AppText>
    </CustomView>
  );
};

export default HomeScreen;
