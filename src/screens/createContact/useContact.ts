import {useEffect, useRef} from 'react';
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
import {useNavigation, useRoute} from '@react-navigation/native';
import {showToast} from '@app/utils/general';
import {CreateContactScreenRouteProp} from '@app/navigation/types';
import {updateContactData} from '@app/utils/contacts';

export default function useContact() {
  const navigation = useNavigation<any>();
  const route = useRoute<CreateContactScreenRouteProp>();
  const contactData = route?.params?.contact;
  const isEditable = route?.params?.isEditable;

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
        if (isEditable) {
          await updateContact(values);
        } else {
          await createContact(values);
        }

        showToast(onSaveMessage);
        navigation.popToTop();
      }
    }
  };

  const updateContact = async (values: ContactFormValues) => {
    try {
      const newContact = {
        ...contactData,
        givenName: values.firstName,
        familyName: values.lastName,
        phoneNumbers: values.phoneNumbers,
        emailAddresses: values.emailAddresses,
        company: values.company,
      };

      return await updateContactData(newContact as never);
    } catch (error) {
      console.log(error);
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
      console.error(error);
    }
  };

  const setFormikValuesFromParams = () => {
    if (contactData) {
      formikRef.current?.setValues({
        firstName: contactData.givenName,
        lastName: contactData.familyName,
        company: contactData.company,
        phoneNumbers: contactData.phoneNumbers,
        emailAddresses: contactData.emailAddresses,
      });
      // formikRef.current?.setFieldValue('firstName', contactData.givenName);
      // formikRef.current?.setFieldValue('lastName', contactData.familyName);
      // formikRef.current?.setFieldValue('company', contactData.company);

      // formikRef.current?.setFieldValue(
      //   'phoneNumbers',
      //   contactData.phoneNumbers,
      // );
      // formikRef.current?.setFieldValue(
      //   'emailAddresses',
      //   contactData.emailAddresses,
      // );
    }
  };

  useEffect(() => {
    setFormikValuesFromParams();
  }, []);
  return {onSaveButtonPressed, formikRef, isEditable};
}
