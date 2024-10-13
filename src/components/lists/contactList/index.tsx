import ContactListItem from '@app/components/listItems/contactListItem';
import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import dynamicStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '@app/navigation/constant';
import {Contact} from 'react-native-contacts/type';

interface Props {
  contacts: Contact[];
}

const ContactList: React.FC<{contacts: Contact[]}> = ({contacts}) => {
  const styles = dynamicStyles();
  const navigation = useNavigation();

  const onPressContactListItem = useCallback(() => {
    navigation.navigate(Screen.ContactDetails as never);
  }, [navigation]);

  const renderItem = useCallback(
    ({item}: {item: Contact}) => (
      <ContactListItem
        onPress={onPressContactListItem}
        userName={item.displayName}
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
        data={contacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={20}
        windowSize={10}
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
