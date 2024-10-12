import {FormFieldTypeEnum} from '@app/components/types';
import {TextInput} from 'react-native-paper';
import {colors} from '@app/assets/colors';
import {View} from 'react-native';
import dynamicStyles from './styles';

interface Props {
  formFieldType: FormFieldTypeEnum;
  fieldName: string;
  label: string;
  formikProps: any;
}

const Field = ({
  formFieldType,
  label,
  formikProps: {handleChange, values, handleBlur, touched, errors},
  fieldName,
}: Props) => {
  const styles = dynamicStyles();
  switch (formFieldType) {
    case FormFieldTypeEnum.TEXT_INPUT:
      return (
        <>
          <View style={styles.textInputContainer}>
            <TextInput
              label={label}
              value={values[fieldName]}
              onChangeText={handleChange(fieldName)}
              onBlur={handleBlur(fieldName)}
              mode="outlined"
              activeOutlineColor={colors.buttonPrimary}
              error={touched[fieldName] ? !!errors[fieldName] : undefined}
            />
          </View>

          {/* <HelperText type="error" visible={!!errors.firstName}>
                {errors.firstName}
              </HelperText>  */}
        </>
      );
    case FormFieldTypeEnum.PHONE_INPUT:
      return (
        <>
          <View style={styles.textInputContainer}>
            <TextInput
              keyboardType="phone-pad"
              label={label}
              value={values[fieldName]}
              onChangeText={handleChange(fieldName)}
              onBlur={handleBlur(fieldName)}
              mode="outlined"
              activeOutlineColor={colors.buttonPrimary}
              error={touched[fieldName] ? !!errors[fieldName] : undefined}
            />
          </View>

          {/* <HelperText type="error" visible={!!errors.firstName}>
                  {errors.firstName}
                </HelperText>  */}
        </>
      );
  }
  return <></>;
};

const CustomFormField = (props: Props) => {
  return (
    <>
      <Field {...props} />
    </>
  );
};

export default CustomFormField;
