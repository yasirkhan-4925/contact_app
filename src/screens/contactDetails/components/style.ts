import {colors} from '@app/assets/colors';
import {horizontalScale, moderateScale, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.bgPrimary,
      paddingBottom: verticalScale(10),
    },
    avatarTextStyles: {
      fontSize: moderateScale(80),
      fontWeight: 'bold',
    },
    avatarContainer: {
      marginTop: verticalScale(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    userNameContainer: {
      marginTop: verticalScale(10),
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',

      gap: moderateScale(65),
      marginTop: verticalScale(10),
    },
    contactInfoContainer: {
      width: '100%',
      marginTop: verticalScale(30),

      borderRadius: moderateScale(15),
      backgroundColor: colors.bgSecondary,
      paddingVertical: verticalScale(10),
      paddingHorizontal: horizontalScale(10),
    },
    contactInfoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(20),
    },
    contactInfoIconContainer: {
      // borderColor: 'red',
      // borderWidth: 1,
      width: horizontalScale(35),
      marginRight: horizontalScale(10),
    },
    divider: {
      height: verticalScale(2),
      width: '100%',
      backgroundColor: colors.bgSecondary,
      marginTop: verticalScale(10),
    },
    settingsContainer: {},
    settingsItem: {
      flexDirection: 'row',
      alignItems: 'center',
      height: verticalScale(50),
    },
    settingsText: {
      color: colors.red,
    },
    settingsIconContainer: {
      marginRight: horizontalScale(8),
    },
  });
}
