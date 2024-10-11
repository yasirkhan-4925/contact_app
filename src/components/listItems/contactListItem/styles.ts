import {colors} from '@app/assets/colors';
import {horizontalScale, moderateScale, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

const dynamicStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(15),
    },
    avatarTextStyles: {
      fontSize: moderateScale(18),
      color: colors.bgSecondary,
    },
    textContainer: {
      paddingLeft: horizontalScale(15),
    },
  });
};

export default dynamicStyles;
