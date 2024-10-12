import React, {forwardRef} from 'react';
import {Formik, FormikProps} from 'formik';
import dynamicStyles from './styles';
import {View} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import {colors} from '@app/assets/colors';
import {ContactFormValues} from '@app/components/types';
import * as Yup from 'yup';

// const ContactSchema = Yup.object().shape({
//   firstName: Yup.string().required('first name is required'),
// });

const initialValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  company: '',
};

const ContactForm = forwardRef<FormikProps<ContactFormValues>, {}>(
  (props, ref) => {
    const styles = dynamicStyles();

    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Formik
            // validationSchema={ContactSchema}
            innerRef={ref}
            initialValues={initialValues}
            onSubmit={() => {}}>
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View>
                  <TextInput
                    label="First Name"
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    mode="outlined"
                    activeOutlineColor={colors.buttonPrimary}
                    error={touched.firstName ? !!errors.firstName : undefined}
                  />
                  {/* <HelperText type="error" visible={!!errors.firstName}>
                    {errors.firstName}
                  </HelperText> */}
                </View>
                <View>
                  <TextInput
                    label="Last Name"
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    mode="outlined"
                    activeOutlineColor={colors.buttonPrimary}
                  />
                </View>
                <View>
                  <TextInput
                    label="Company"
                    value={values.company}
                    onChangeText={handleChange('company')}
                    onBlur={handleBlur('company')}
                    mode="outlined"
                    activeOutlineColor={colors.buttonPrimary}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    );
  },
);

export default ContactForm;
