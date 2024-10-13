import {useNavigation} from '@react-navigation/native';
import {Screen} from '@app/navigation/constant';

import {
  checkContactReadPermission,
  customSortContacts,
  filterContacts,
  requestContactsReadPermission,
  showSettingsAlert,
} from '@app/utils';
import {useEffect, useRef, useState} from 'react';

import Contacts from 'react-native-contacts';
import {AppState, Platform} from 'react-native';
import {Contact} from 'react-native-contacts/type';
export default function useHome() {
  const [loading, setLoading] = useState(false);
  const [permissionLoading, setPermissionLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const [isPermissionGiven, setIsPermissionGiven] = useState(false);

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
      console.log(error);
    } finally {
      isAlreadyLoadedRef.current = true;
      setLoading(false);
    }
  };

  async function getContacts() {
    try {
      setPermissionLoading(true);
      const isReadContactPermissionGranted =
        await requestContactsReadPermission();
      setPermissionLoading(false);
      if (!isReadContactPermissionGranted) return;

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
          setPermissionLoading(true);
          const isPermissionGiven = await checkContactReadPermission();
          setPermissionLoading(false);
          if (!isPermissionGiven) return;

          setIsPermissionGiven(isPermissionGiven);
          loadContacts();
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    AppState.addEventListener('change', AppStateChangeListener);
  }, []);

  return {
    onPressAddIcon,
    contacts,
    loading,
    isPermissionGiven,
    permissionLoading,
  };
}
