import React, {useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AppTextType, ETextType, IStyles} from '@app/components/types';
import dynamicStyles from '@app/components/custom/appText/styles';
import {colors} from '@app/assets/colors';

export const FONT_FAMILY_REGULAR = 'Montserrat-Regular';
export const FONT_FAMILY_BOLD = 'Montserrat-SemiBold';
export const FONT_FAMILY_ITALIC = 'Montserrat-Italic';

const getStyle = (type: ETextType, styles: IStyles) => {
  switch (type) {
    case ETextType.H0:
      return styles.h0;
    case ETextType.H1:
      return styles.h1;
    case ETextType.H2:
      return styles.h2;
    case ETextType.H3:
      return styles.h3;
    case ETextType.H4:
      return styles.h4;
    case ETextType.H5:
      return styles.h5;
    case ETextType.H6:
      return styles.h6;
    case ETextType.H7:
      return styles.h7;
    case ETextType.BODY_01:
      return styles.body01;
    case ETextType.BODY_02:
      return styles.body02;
    case ETextType.BODY_03:
      return styles.body03;
    case ETextType.BODY_04:
      return styles.body04;
    case ETextType.ITALIC:
      return styles.italic;
    case ETextType.ITALIC_BODY_03:
      return styles.italic_body03;
    default:
      return styles.body02;
  }
};

const getConditionStyle = (condition: boolean, style: object) => {
  if (condition) {
    return style;
  }
  return null;
};

const AppText = ({
  type,
  underlined = false,
  centered = false,
  allUppercase = false,
  textStyles = {},
  children,
  handlePress,
  ...rest
}: AppTextType) => {
  const styles = dynamicStyles(colors as never) as IStyles;
  const underlineStyle = getConditionStyle(underlined, styles.underlined);
  const isCentered = getConditionStyle(centered, styles.centered);
  const isAllUppercase = getConditionStyle(allUppercase, styles.allUppercase);

  const renderText = useMemo(
    () => (
      <Text
        allowFontScaling={false}
        style={[
          styles.color,
          getStyle(type as never, styles),
          underlineStyle,
          isCentered,
          isAllUppercase,
          textStyles,
        ]}
        {...rest}>
        {children}
      </Text>
    ),
    [
      children,
      isAllUppercase,
      isCentered,
      rest,
      styles,
      textStyles,
      type,
      underlineStyle,
    ],
  );

  return typeof handlePress === 'function' ? (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      {renderText}
    </TouchableOpacity>
  ) : (
    renderText
  );
};

export default AppText;
