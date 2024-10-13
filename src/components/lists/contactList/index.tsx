import ContactListItem from '@app/components/listItems/contactListItem';
import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import dynamicStyles from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Screen} from '@app/navigation/constant';
import {Contact} from 'react-native-contacts/type';
import {RootStackParamList} from '@app/navigation/types';

interface Props {
  contacts: Contact[];
}

const ContactList: React.FC<{contacts: Contact[]}> = ({contacts}: Props) => {
  const styles = dynamicStyles();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressContactListItem = useCallback(
    (item: Contact) => {
      navigation.navigate(Screen.ContactDetails, {contact: item});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: Contact}) => (
      <ContactListItem
        onPress={() => onPressContactListItem(item)}
        contact={item}
      />
    ),
    [onPressContactListItem],
  );

  const keyExtractor = useCallback(
    (_: Contact, index: number) => index.toString(),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={contacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={20}
        windowSize={30}
        getItemLayout={(_, index) => ({
          length: 70,
          offset: 70 * index,
          index,
        })}
      />
    </View>
  );
};

export default ContactList;
