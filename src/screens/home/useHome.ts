import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Screen} from '@app/navigation/constant';

import {
  checkContactReadPermission,
  customSortContacts,
  filterContacts,
  requestContactsReadPermission,
} from '@app/utils';
import {useEffect, useRef, useState} from 'react';

import Contacts from 'react-native-contacts';
import {AppState, Platform} from 'react-native';
import {Contact} from 'react-native-contacts/type';
export default function useHome() {
  const [loading, setLoading] = useState(true);

  const [contacts, setContacts] = useState<Contact[]>([]);

  const [isPermissionGiven, setIsPermissionGiven] = useState(true);

  const isAlreadyLoadedRef = useRef(false);
  const navigation = useNavigation();
  function onPressAddIcon() {
    navigation.navigate(Screen.CreateContact as never);
  }

  const loadContacts = async () => {
    if (!isAlreadyLoadedRef.current) {
      setLoading(true);
    }

    try {
      const contacts = await Contacts.getAll();

      if (contacts) {
        const filteredContacts: Contact[] =
          filterContacts(contacts).sort(customSortContacts);

        setContacts(filteredContacts);
      }
    } catch (error) {
      console.error(error);
    } finally {
      isAlreadyLoadedRef.current = true;
      setLoading(false);
    }
  };

  async function getContacts() {
    try {
      const isReadContactPermissionGranted =
        await requestContactsReadPermission();

      if (!isReadContactPermissionGranted) return setIsPermissionGiven(false);

      setIsPermissionGiven(isReadContactPermissionGranted);

      await loadContacts();
    } catch (error) {
      console.error(error);
    }
  }

  async function AppStateChangeListener(status: string) {
    if (status === 'foreground' || status === 'active') {
      if (Platform.OS === 'android') {
        try {
          const isPermissionGiven = await checkContactReadPermission();

          if (!isPermissionGiven) return setIsPermissionGiven(false);

          setIsPermissionGiven(isPermissionGiven);
          loadContacts();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  useFocusEffect(() => {
    getContacts();
  });

  useEffect(() => {
    AppState.addEventListener('change', AppStateChangeListener);
  }, []);

  return {
    onPressAddIcon,
    contacts,
    loading,
    isPermissionGiven,
  };
}
