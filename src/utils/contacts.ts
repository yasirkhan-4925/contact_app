import {Contact as ContactType} from 'react-native-contacts/type';
import Contact from 'react-native-contacts';
import {ContactFormValues} from '@app/components/types';

export function customSortContacts(a: any, b: any) {
  const nameA = a.displayName?.toUpperCase();
  const nameB = b.displayName?.toUpperCase();

  // If both names start with 'a', or both don't start with 'a', compare normally
  if (
    (nameA[0] === 'A' && nameB[0] === 'A') ||
    (nameA[0] !== 'A' && nameB[0] !== 'A')
  ) {
    return nameA.localeCompare(nameB);
  }

  // If only the first name starts with 'a', move it before the other name
  return nameA[0] === 'A' ? -1 : 1;
}

export function filterContacts(c: any) {
  return c.filter((c: any) => c.givenName?.trim().length > 0);
}
export function deleteContact(contact: ContactType) {
  return Contact.deleteContact(contact);
}

export function updateContactData(contact: ContactFormValues) {
  return Contact.updateContact(contact as never);
}
