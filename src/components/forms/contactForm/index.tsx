import React, {forwardRef} from 'react';
import {Formik, FormikProps} from 'formik';
import dynamicStyles from './styles';
import {View} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import {colors} from '@app/assets/colors';
import {ContactFormValues, FormFieldTypeEnum} from '@app/components/types';
import * as Yup from 'yup';
import CustomFormField from '@app/components/custom/customFormFIeld';

// const ContactSchema = Yup.object().shape({
//   firstName: Yup.string().required('first name is required'),
// });

const initialValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  company: '',
  PhoneNumbers: [
    {
      label: '',
      number: '',
    },
  ],
};

const ContactForm = forwardRef<FormikProps<ContactFormValues>, {}>((_, ref) => {
  const styles = dynamicStyles();

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Formik
          // validationSchema={ContactSchema}
          innerRef={ref}
          initialValues={initialValues}
          onSubmit={() => {}}>
          {props => (
            <>
              <CustomFormField
                label="First Name"
                fieldName="firstName"
                formFieldType={FormFieldTypeEnum.TEXT_INPUT}
                formikProps={props}
              />

              <CustomFormField
                label="Last Name"
                fieldName="lastName"
                formFieldType={FormFieldTypeEnum.TEXT_INPUT}
                formikProps={props}
              />

              <CustomFormField
                label="Company"
                fieldName="company"
                formFieldType={FormFieldTypeEnum.TEXT_INPUT}
                formikProps={props}
              />
              <CustomFormField
                label="Phone"
                fieldName="phone"
                formFieldType={FormFieldTypeEnum.PHONE_INPUT}
                formikProps={props}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
});

export default ContactForm;
