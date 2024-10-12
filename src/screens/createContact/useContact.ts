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

export default function useContact() {
  const navigation = useNavigation<any>();
  const formikRef = useRef<FormikProps<ContactFormValues> | null>(null);

  const onSaveButtonPressed = async () => {
    const status = await requestContactWritePermission();
    if (!status) {
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
        console.log('🚀 ~ onSaveButtonPressed ~ contact:', contact);

        if (contact) {
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
