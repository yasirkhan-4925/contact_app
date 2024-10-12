import React, {forwardRef} from 'react';
import {FieldArray, FieldArrayRenderProps, Formik, FormikProps} from 'formik';
import dynamicStyles from './styles';
import {TouchableOpacity, View} from 'react-native';
import {colors} from '@app/assets/colors';
import {
  ContactFormValues,
  ETextType,
  FormFieldTypeEnum,
} from '@app/components/types';
import CustomFormField from '@app/components/custom/customFormFIeld';
import Icon from '@app/components/custom/Icon';
import {IconSetsEnum} from '@app/utils/types';
import {moderateScale, generateUniqueId} from '@app/utils';
import AppText from '@app/components/custom/appText';

// const ContactSchema = Yup.object().shape({
//   firstName: Yup.string().required('first name is required'),
// });

const initialValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  company: '',
  phoneNumbers: [
    {
      id: generateUniqueId(),
      label: '',
      number: '',
    },
  ],
};

const ContactForm = forwardRef<FormikProps<ContactFormValues>, {}>((_, ref) => {
  const styles = dynamicStyles();

  const removeField = (helper: FieldArrayRenderProps, index: number) => {
    console.log('🚀 ~ removeField ~ index:', index);
    helper.remove(index);
  };

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

              <FieldArray
                name="phoneNumbers"
                render={helper => {
                  return (
                    <>
                      {props.values.phoneNumbers.length
                        ? props.values.phoneNumbers.map((item, index) => (
                            <View key={item.id}>
                              <View style={styles.removeAbleFieldContainer}>
                                <View style={styles.removeAbleField}>
                                  <CustomFormField
                                    label={`Phone (${index + 1})`}
                                    fieldName={`phoneNumbers.${index}.number`}
                                    formFieldType={
                                      FormFieldTypeEnum.PHONE_INPUT
                                    }
                                    formikProps={props}
                                  />
                                </View>

                                <TouchableOpacity
                                  onPress={() => removeField(helper, index)}
                                  activeOpacity={0.8}
                                  style={styles.removeAbleFieldIconContainer}>
                                  <Icon
                                    iconSetName={IconSetsEnum.MaterialIcons}
                                    name="remove-circle-outline"
                                    color={colors.red}
                                    size={moderateScale(30)}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          ))
                        : null}

                      {props?.values?.phoneNumbers?.length &&
                      props?.values?.phoneNumbers.length < 3 ? (
                        <View>
                          <AppText
                            onPress={() =>
                              helper.push({
                                label: '',
                                number: '',
                                id: generateUniqueId(),
                              })
                            }
                            textStyles={styles.addFieldText}
                            type={ETextType.BODY_02}>
                            Add Field
                          </AppText>
                        </View>
                      ) : null}
                    </>
                  );
                }}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
});

export default ContactForm;
