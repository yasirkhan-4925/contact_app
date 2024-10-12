import {colors} from '@app/assets/colors';
import {horizontalScale, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles() {
  return StyleSheet.create({
    container: {flex: 1, alignItems: 'center'},
    formContainer: {
      width: '70%',
    },
    removeAbleFieldContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    removeAbleField: {
      flex: 1,
    },
    removeAbleFieldIconContainer: {
      position: 'absolute',

      top: horizontalScale(26),
      right: horizontalScale(-35),
    },
    addFieldText: {
      marginTop: verticalScale(10),
      color: colors.buttonPrimary,
    },
    buttonContainer: {
      marginTop: horizontalScale(20),
    },
  });
}
