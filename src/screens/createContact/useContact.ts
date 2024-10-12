import {requestContactWritePermission, showSettingsAlert} from '@app/utils';
import {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';

export default function useContact() {
  const getContactWritePermission = async () => {
    const permission = await requestContactWritePermission();

    if (
      permission === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN ||
      permission === PermissionsAndroid.RESULTS.DENIED
    ) {
      return showSettingsAlert(
        'You have to give contact permission in order to save contacts',
      );
    }

    return permission;
  };

  const onSaveButtonPressed = async () => {
    console.log(await getContactWritePermission());
  };

  return {onSaveButtonPressed};
}
