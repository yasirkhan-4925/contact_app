import {CustomView, Icon} from '@app/components';
import dynamicStyles from '../../styles';
import {TouchableOpacity, View} from 'react-native';
import {IconSetsEnum} from '@app/utils/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Contact} from 'react-native-contacts/type';
import {Screen} from '@app/navigation/constant';
import {RootStackParamList} from '@app/navigation/types';

interface Props {
  contact: Contact;
}
const Header = ({contact}: Props) => {
  const styles = dynamicStyles();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onEditButtonPress = () => {
    navigation.navigate(Screen.CreateContact, {contact, isEditable: true});
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Icon
          iconSetName={IconSetsEnum.MaterialIcons}
          name="arrow-back"
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onEditButtonPress} activeOpacity={0.8}>
        <Icon
          iconSetName={IconSetsEnum.MaterialIcons}
          name="mode-edit"
          size={23}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
