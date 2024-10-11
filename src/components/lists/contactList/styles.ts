import {horizontalScale, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles() {
  return StyleSheet.create({
    container: {
      paddingHorizontal: horizontalScale(5),
      marginTop: verticalScale(10),
    },
  });
}
