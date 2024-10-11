import {colors} from '@app/assets/colors';
import {horizontalScale, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
    paddingVertical: verticalScale(20),
  },
  addIconContainer: {
    position: 'absolute',

    bottom: verticalScale(60),
    right: horizontalScale(25),
  },
});

export default styles;
