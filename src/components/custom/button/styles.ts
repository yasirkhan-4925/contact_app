import {horizontalScale, moderateScale, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles(
  buttonBgColor: string,
  buttonTextColor: string,
) {
  return StyleSheet.create({
    container: {
      backgroundColor: buttonBgColor,
      borderRadius: moderateScale(30),
      height: verticalScale(55),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonTextColor: {
      color: buttonTextColor,
    },
    iconContainer: {
      marginRight: horizontalScale(5),
    },
  });
}
