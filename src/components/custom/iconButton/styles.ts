import {horizontalScale, moderateScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles(buttonBgColor: string, rounded: boolean) {
  return StyleSheet.create({
    container: {
      backgroundColor: buttonBgColor,
      width: horizontalScale(55),
      aspectRatio: 1 / 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(rounded ? 30 : 10),
    },
  });
}
