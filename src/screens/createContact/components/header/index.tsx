import {AppText, Button, Icon} from '@app/components';
import dynamicStyles from './styles';
import {TouchableOpacity, View} from 'react-native';
import {IconSetsEnum} from '@app/utils/types';
import {moderateScale} from '@app/utils';
import {useNavigation} from '@react-navigation/native';
import {ButtonSizeEnum, ETextType} from '@app/components/types';

interface Props {
  onSaveButtonPress: (message?: string) => void;
  isEditable?: boolean;
}

const Header = ({onSaveButtonPress, isEditable = false}: Props) => {
  const navigation = useNavigation();
  const styles = dynamicStyles();

  const onPressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressHandler} activeOpacity={0.9}>
        <Icon
          iconSetName={IconSetsEnum.EntypoIcons}
          name="cross"
          size={moderateScale(30)}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <AppText type={ETextType.H4}>Create contact</AppText>
      </View>

      <View style={styles.btnContainer}>
        <Button
          onPress={() =>
            onSaveButtonPress(
              isEditable ? 'Contact Edit Successfully' : undefined,
            )
          }
          buttonText="Save"
          buttonSize={ButtonSizeEnum.SMALL}
        />
      </View>
    </View>
  );
};

export default Header;
