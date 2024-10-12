import {horizontalScale, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles() {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: verticalScale(60),
      alignItems: 'center',
      paddingTop: verticalScale(20),
      paddingLeft: horizontalScale(10),
      paddingRight: horizontalScale(5),
    },
    titleContainer: {
      marginLeft: horizontalScale(8),
      marginBottom: horizontalScale(3),
    },
    btnContainer: {
      marginLeft: 'auto',
    },
  });
}
