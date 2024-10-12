import {verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles() {
  return StyleSheet.create({
    textInputContainer: {
      marginTop: verticalScale(10),
    },
  });
}
