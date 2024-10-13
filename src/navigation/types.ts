import {RouteProp} from '@react-navigation/native';
import {Contact} from 'react-native-contacts/type';
import {Screen} from './constant';

// Define the navigation prop type
export type RootStackParamList = {
  ContactDetails: {contact: Contact};
  // Add other screens as necessary
};

export type ContactDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  Screen.ContactDetails
>;
