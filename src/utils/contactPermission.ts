import {PermissionsAndroid, Platform} from 'react-native';
import {Alert, Linking} from 'react-native';
const requestContactWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      return (
        (await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          {
            title: 'Contacts Permission',
            message: 'This app would like to get write contact permission.',
            buttonPositive: 'Give Permission',
          },
        )) === PermissionsAndroid.RESULTS.GRANTED
      );
    } catch (error) {
      Promise.reject(error);
    }
  } else {
    return true;
  }
};
const checkContactWritePermission = async () => {
  try {
    return PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
    );
  } catch (error) {}
};

const showSettingsAlert = (
  text: string,
  isCancelAble: boolean = true,
): void => {
  const optionsArray: Array<{
    text: string;
    onPress?: () => void;
    style?: 'cancel';
  }> = [
    {
      text: 'Open Settings',
      onPress: () => {
        openSettings();
      },
    },
  ];

  if (isCancelAble) {
    optionsArray.unshift({
      text: 'Cancel',
      style: 'cancel',
    });
  }
  Alert.alert('Permission Required', text, [...optionsArray], {
    cancelable: isCancelAble,
  });
};

const requestContactsReadPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      return (
        (await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts Permission',
            message: 'This app would like to read your contacts',
            buttonPositive: 'Give Permission',
          },
        )) === PermissionsAndroid.RESULTS.GRANTED
      );
    } catch (error) {
      Promise.reject(error);
    }
  } else {
    return true;
  }
};

const checkContactReadPermission = async () => {
  try {
    return PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    );
  } catch (error) {}
};

const openSettings = () => {
  Linking.openSettings().catch(() => {
    Alert.alert('Unable to open settings');
  });
};
export {
  requestContactWritePermission,
  showSettingsAlert,
  checkContactWritePermission,
  requestContactsReadPermission,
  checkContactReadPermission,
  openSettings,
};
