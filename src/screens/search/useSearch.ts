import {customSortContacts, filterContacts} from '@app/utils';
import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import Contacts from 'react-native-contacts';
import {Contact} from 'react-native-contacts/type';
export default function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);

  const onChangeText = (textValue: string) => {
    setSearchQuery(textValue);
  };

  const searchContacts = async (text: string) => {
    console.log('🚀 ~ searchContacts ~ text:', text);
    try {
      if (!text) {
        setContacts([]);
        return;
      }
      const searchedContacts = await Contacts.getContactsMatchingString(text);

      if (searchContacts.length) {
        const filteredContacts: Contact[] =
          filterContacts(searchedContacts).sort(customSortContacts);

        setContacts(filteredContacts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSearch = (e: string) => {
    searchContacts(e);
    // console.log(e);
  };

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);

  return {searchQuery, onChangeText, contacts};
}
