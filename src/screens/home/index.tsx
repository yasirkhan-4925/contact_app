import React from 'react';
import styles from './styles';
import SearchBar from '@app/screens/home/components/searchBar';
import {CustomView, ContactList, Button} from '@app/components';

const HomeScreen = () => {
  return (
    <CustomView containerStyle={styles.container}>
      <SearchBar />
      <ContactList />
      <Button />
    </CustomView>
  );
};

export default HomeScreen;
