import React from 'react';
import styles from './styles';
import SearchBar from '@app/screens/home/components/searchBar';
import {
  CustomView,
  ContactList,
  IconButton,
  AppText,
  Loading,
  RequestPermission,
} from '@app/components';
import {IconSetsEnum} from '@app/utils/types';
import {moderateScale} from '@app/utils';
import {View} from 'react-native';
import {colors} from '@app/assets/colors';
import useHome from './useHome';
import {openSettings} from '@app/utils/contactPermission';

const HomeScreen = () => {
  const {
    onPressAddIcon,
    isPermissionGiven,
    loading,
    permissionLoading,
    contacts,
  } = useHome();

  if (!isPermissionGiven) {
    return (
      <CustomView containerStyle={styles.container}>
        {permissionLoading ? (
          <></>
        ) : (
          <RequestPermission promptText="We need Permission to access Contacts" />
        )}
      </CustomView>
    );
  }

  return (
    <CustomView containerStyle={styles.container}>
      {loading ? (
        <>
          <Loading color={colors.buttonPrimary} size="small" />
        </>
      ) : (
        <>
          <SearchBar />
          <ContactList contacts={contacts} />
          <View style={styles.addIconContainer}>
            <IconButton
              onPress={onPressAddIcon}
              iconSetName={IconSetsEnum.MaterialIcons}
              iconSize={moderateScale(35)}
              iconName="add"
              buttonBgColor={colors.buttonDarkSecondary}
            />
          </View>
        </>
      )}
    </CustomView>
  );
};

export default HomeScreen;
