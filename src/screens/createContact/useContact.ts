import {useRef} from 'react';
import {FormikProps} from 'formik';
import {
  checkFormikError,
  getFormikValues,
  isObjectEmpty,
  requestContactWritePermission,
  showSettingsAlert,
} from '@app/utils';
import {ContactFormValues} from '@app/components/types';
import Contacts from 'react-native-contacts';
import {useNavigation} from '@react-navigation/native';
import {showToast} from '@app/utils/general';

export default function useContact() {
  const navigation = useNavigation<any>();
  const formikRef = useRef<FormikProps<ContactFormValues> | null>(null);

  const onSaveButtonPressed = async (
    onSaveMessage: string = 'Contact Saved Successfully',
  ) => {
    const isPermissionGranted = await requestContactWritePermission();
    if (!isPermissionGranted) {
      return showSettingsAlert(
        'You have to give contact permission in order to save contacts',
      );
    }

    const errors = await checkFormikError(formikRef);

    const isNoErrors = isObjectEmpty(errors);
    if (isNoErrors) {
      const values = await getFormikValues(formikRef);

      if (values) {
        const contact = await createContact(values);
        console.log('🚀 ~ useContact ~ contact:', contact);
        if (contact) {
          showToast(onSaveMessage);
          navigation.popToTop();
        }
      }
    }
  };

  const createContact = async (values: ContactFormValues) => {
    try {
      const newContact = {
        givenName: values.firstName,
        familyName: values.lastName,
        phoneNumbers: values.phoneNumbers,
        emailAddresses: values.emailAddresses,
        company: values.company,
      };

      return await Contacts.addContact(newContact);
    } catch (error) {
      console.log(error);
    }
  };

  return {onSaveButtonPressed, formikRef};
}
