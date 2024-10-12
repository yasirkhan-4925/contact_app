import {useRef} from 'react';
import dynamicStyles from './styles';
import {FieldArrayRenderProps} from 'formik';
import {generateUniqueId} from '@app/utils';

export default function useContactForm() {
  const styles = dynamicStyles();
  const phoneFieldArrayHelpersRef = useRef<FieldArrayRenderProps | null>(null);
  const emailFieldArrayHelpersRef = useRef<FieldArrayRenderProps | null>(null);

  const removeField = (helper: FieldArrayRenderProps, index: number) => {
    helper.remove(index);
  };

  const addPhoneField = () => {
    phoneFieldArrayHelpersRef?.current?.push({
      id: generateUniqueId(),
      label: '',
      number: '',
    });
  };
  const addEmailField = () => {
    emailFieldArrayHelpersRef?.current?.push({
      id: generateUniqueId(),
      label: '',
      email: '',
    });
  };
  return {
    styles,
    phoneFieldArrayHelpersRef,
    emailFieldArrayHelpersRef,
    removeField,
    addEmailField,
    addPhoneField,
  };
}
