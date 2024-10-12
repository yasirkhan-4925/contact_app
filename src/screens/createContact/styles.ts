import {colors} from '@app/assets/colors';
import {StyleSheet} from 'react-native';

export default function dynamicStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.bgPrimary,
      flex: 1,
    },
  });
}
