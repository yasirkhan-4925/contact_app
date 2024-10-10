import {Colors} from '@app/assets/colors';
import {StyleSheet} from 'react-native';

const dynamicStyles = (colors: Colors) => {
  return StyleSheet.create({
    container: {
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    txt: {
      color: colors.white,
      fontSize: 18,
      textAlign: 'center',
    },
    image: {
      borderRadius: 100,
      backgroundColor: colors.grey,
    },
  });
};

export default dynamicStyles;
