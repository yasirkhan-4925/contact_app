import {CustomView, Icon} from '@app/components';
import dynamicStyles from '../../styles';
import {TouchableOpacity, View} from 'react-native';
import {IconSetsEnum} from '@app/utils/types';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const styles = dynamicStyles();
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Icon
          iconSetName={IconSetsEnum.MaterialIcons}
          name="arrow-back"
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
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
