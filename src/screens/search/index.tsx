import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {ContactList, CustomView, SearchBar} from '@app/components';
import useSearch from './useSearch';

const SearchScreen = () => {
  const {searchQuery, onChangeText, contacts} = useSearch();
  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={onChangeText}
        searchQuery={searchQuery}
        placeholder="Search Contacts"
      />
      <CustomView containerStyle={styles.listContainer}>
        <ContactList contacts={contacts} />
      </CustomView>
    </View>
  );
};

export default SearchScreen;
