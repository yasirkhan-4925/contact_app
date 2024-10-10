import {Colors} from '@app/assets/colors';
import {StyleSheet} from 'react-native';

const FONT_FAMILY_REGULAR = 'Montserrat-Regular';
const FONT_FAMILY_BOLD = 'Montserrat-SemiBold';
const FONT_FAMILY_ITALIC = 'Montserrat-Italic';

const dynamicStyles = (colors: Colors) => {
  return StyleSheet.create({
    h0: {
      fontSize: 32,
      lineHeight: 48,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h1: {
      fontSize: 29,
      lineHeight: 43.5,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h2: {
      fontSize: 26,
      lineHeight: 39,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h3: {
      fontSize: 25.53,
      lineHeight: 38.3,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h4: {
      fontSize: 23,
      lineHeight: 34.5,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h5: {
      fontSize: 20,
      lineHeight: 30,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h6: {
      fontSize: 18,
      lineHeight: 27,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h7: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    body01: {
      fontSize: 18,
      lineHeight: 27,
      fontFamily: FONT_FAMILY_REGULAR,
      fontWeight: '400',
    },
    body02: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: FONT_FAMILY_REGULAR,
      fontWeight: '400',
    },
    body03: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: FONT_FAMILY_REGULAR,
      fontWeight: '400',
    },
    body04: {
      fontSize: 11,
      lineHeight: 16.5,
      fontFamily: FONT_FAMILY_REGULAR,
      fontWeight: '400',
    },
    italic: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: FONT_FAMILY_ITALIC,
      fontWeight: '400',
    },
    italic_body03: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: FONT_FAMILY_ITALIC,
      fontWeight: '400',
    },
    underlined: {
      textDecorationLine: 'underline',
    },
    centered: {
      textAlign: 'center',
    },
    color: {
      color: colors.text,
    },
    allUppercase: {
      textTransform: 'uppercase',
    },
  });
};

export default dynamicStyles;
