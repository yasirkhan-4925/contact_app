import {colors} from '@app/assets/colors';
import {horizontalScale, moderateScale, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export function dynamicStyles() {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(30),
    },
    addPhotoContainer: {
      backgroundColor: colors.buttonPrimary,
      width: horizontalScale(150),
      aspectRatio: 1 / 1,
      borderRadius: moderateScale(100),
      justifyContent: 'center',
      alignItems: 'center',
    },
    addPhotoText: {
      marginTop: verticalScale(15),
      color: colors.buttonPrimary,
      fontWeight: 'bold',
    },
  });
}
