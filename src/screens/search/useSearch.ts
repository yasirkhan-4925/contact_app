import {customSortContacts, filterContacts} from '@app/utils';
import {useEffect, useState} from 'react';
import {debounce} from 'lodash';
import Contacts from 'react-native-contacts';
import {Contact} from 'react-native-contacts/type';
export default function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);

  const onChangeText = (textValue: string) => {
    setSearchQuery(textValue);
  };

  const searchContacts = async (text: string) => {
    try {
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

  const debouncing = debounce(() => {
    if (!searchQuery) return setContacts([]);
    onSearch(searchQuery);
  }, 600);

  useEffect(() => {
    debouncing();
    return () => {
      debouncing.cancel();
    };
  }, [searchQuery]);

  return {searchQuery, onChangeText, contacts};
}
