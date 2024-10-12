import {requestContactWritePermission, showSettingsAlert} from '@app/utils';

export default function useContact() {
  const onSaveButtonPressed = async () => {
    const status = await requestContactWritePermission();
    if (!status)
      return showSettingsAlert(
        'You have to give contact permission in order to save contacts',
      );
  };

  return {onSaveButtonPressed};
}
