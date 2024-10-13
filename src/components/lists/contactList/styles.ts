import {horizontalScale, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles() {
  return StyleSheet.create({
    container: {
      paddingTop: verticalScale(10),
      paddingHorizontal: horizontalScale(5),
      flex: 1,
    },
  });
}
