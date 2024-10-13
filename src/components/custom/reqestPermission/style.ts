import {horizontalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export default function dynamicStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    promptTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    promptText: {
      textAlign: 'center',
    },
    buttonContainer: {
      marginTop: horizontalScale(10),
    },
  });
}
