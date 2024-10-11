import {useNavigation} from '@react-navigation/native';
import {Screen} from '@app/navigation/constant';

export default function useHome() {
  const navigation = useNavigation();
  function onPressAddIcon() {
    navigation.navigate(Screen.CreateContact as never);
  }

  return {onPressAddIcon};
}
