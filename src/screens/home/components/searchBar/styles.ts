import {colors} from '@app/assets/colors';
import {horizontalScale, moderateScale, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

const dynamicStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.bgSecondary,
      height: verticalScale(50),
      borderRadius: moderateScale(30),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: horizontalScale(15),
    },
    searchText: {
      color: colors.textSecondary,
      lineHeight: 20,
    },
    searchTextContainer: {
      flex: 1,
      paddingLeft: horizontalScale(10),
    },
    avatarTextStyles: {
      fontSize: moderateScale(15),
    },
  });
};

export default dynamicStyles;
