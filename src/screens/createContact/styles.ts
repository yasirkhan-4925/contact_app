import {colors} from '@app/assets/colors';
import {verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.bgPrimary,
      flex: 1,
    },
    containerScroll: {paddingBottom: verticalScale(20)},
  });
}
