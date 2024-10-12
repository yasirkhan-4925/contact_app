import {FormikProps} from 'formik';

export const checkFormikError = async <T>(
  formikRef: React.RefObject<FormikProps<T> | null>,
) => {
  return formikRef.current?.validateForm();
};

export const getFormikValues = async <T>(
  formikRef: React.RefObject<FormikProps<T> | null>,
) => {
  return formikRef.current?.values;
};
