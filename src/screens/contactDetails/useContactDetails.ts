import {ContactDetailsScreenRouteProp} from '@app/navigation/types';
import {deleteContact} from '@app/utils/contacts';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Contact} from 'react-native-contacts/type';
import {Alert} from 'react-native';
import {showToast} from '@app/utils/general';

export default function useContactDetails() {
  const route = useRoute<ContactDetailsScreenRouteProp>();
  const navigation = useNavigation<any>();
  const {contact} = route.params;

  // Define the Contact type

  const onDeleteContactPress = async (contact: Contact) => {
    try {
      Alert.alert(
        'Delete Contact',
        `Are you sure you want to delete ?`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: async () => {
              await deleteContact(contact);
              showToast('Contact deleted successfully');
              navigation.popToTop();
            },
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      console.error('error deleting contact ', error);
    }
  };

  return {contact, onDeleteContactPress};
}
