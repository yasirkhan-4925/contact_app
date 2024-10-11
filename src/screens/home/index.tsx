import React from 'react';
import styles from './styles';
import SearchBar from '@app/screens/home/components/searchBar';
import {CustomView, ContactList, IconButton, Button} from '@app/components';
import {IconSetsEnum} from '@app/utils/types';
import {moderateScale} from '@app/utils';
import {View} from 'react-native';
import {colors} from '@app/assets/colors';
import useHome from './useHome';

const HomeScreen = () => {
  const {onPressAddIcon} = useHome();
  return (
    <CustomView containerStyle={styles.container}>
      <SearchBar />
      <ContactList />
      <View style={styles.addIconContainer}>
        <IconButton
          onPress={onPressAddIcon}
          iconSetName={IconSetsEnum.MaterialIcons}
          iconSize={moderateScale(35)}
          iconName="add"
          buttonBgColor={colors.buttonDarkSecondary}
        />
      </View>
    </CustomView>
  );
};

export default HomeScreen;
