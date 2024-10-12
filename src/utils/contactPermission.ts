import {PermissionsAndroid, Platform} from 'react-native';
import {Alert, Linking} from 'react-native';
async function requestContactWritePermission() {
  if (Platform.OS === 'android') {
    try {
      return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        {
          title: 'Contacts Permission',
          message: 'This app would like to get write contact permission.',
          buttonPositive: 'Allow',
        },
      );
    } catch (error) {
      Promise.reject(error);
    }
  } else {
    return true;
  }
}

const showSettingsAlert = (text: string) => {
  Alert.alert(
    'Permission Required',
    text,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Open Settings',
        onPress: () => {
          Linking.openSettings().catch(() => {
            Alert.alert('Unable to open settings');
          });
        },
      },
    ],
    {cancelable: false},
  );
};

const checkContactWritePermission = async () => {
  try {
    return PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
    );
  } catch (error) {}
};
export {
  requestContactWritePermission,
  showSettingsAlert,
  checkContactWritePermission,
};
