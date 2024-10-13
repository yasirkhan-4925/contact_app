import {colors} from '@app/assets/colors';
import {verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: colors.bgPrimary,
    },
    headerContainer: {
      paddingTop: verticalScale(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
}
