import React from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import dynamicStyles from './styles';
import AppText from '../appText';
import {ButtonSizeEnum} from '@app/components/types';
import {colors} from '@app/assets/colors';
import {IconSetsEnum} from '@app/utils/types';
import {horizontalScale, moderateScale, verticalScale} from '@app/utils';
import Icon from '../Icon';

interface Props {
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonIconName?: string;
  buttonIconSize?: number;
  buttonIconSetName?: IconSetsEnum;
  buttonIconColor?: string;
  buttonSize?: ButtonSizeEnum;
  containerStyle?: StyleProp<ViewStyle>;
  buttonText: string;
  onPress: () => void;
}

const Button = ({
  buttonText,
  buttonBgColor = colors.buttonPrimary,
  buttonTextColor = colors.text,
  buttonIconSetName,
  buttonIconColor = colors.text,
  buttonIconName = '',
  buttonIconSize = moderateScale(30),
  buttonSize = ButtonSizeEnum.LARGE,
  containerStyle = {},
  onPress,
}: Props) => {
  const styles = dynamicStyles(buttonBgColor, buttonTextColor);

  const getButtonSize = (buttonSize: ButtonSizeEnum) => {
    switch (buttonSize) {
      case ButtonSizeEnum.SMALL:
        return {
          borderRadius: moderateScale(30),
          height: verticalScale(40),
          width: horizontalScale(70),
          minWidth: horizontalScale(70),
        };
      case ButtonSizeEnum.MEDIUM:
        return {
          borderRadius: moderateScale(30),
          height: verticalScale(55),
          width: horizontalScale(250),
          minWidth: horizontalScale(250),
        };
      default:
        return {
          borderRadius: moderateScale(30),
          height: verticalScale(55),
        };
    }
  };

  const getButtonText = (buttonSize: ButtonSizeEnum) => {
    switch (buttonSize) {
      case ButtonSizeEnum.SMALL:
        return {
          fontSize: moderateScale(15),
        };
      case ButtonSizeEnum.MEDIUM:
        return {
          fontSize: moderateScale(18),
        };
      default:
        return {
          fontSize: moderateScale(18),
        };
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, getButtonSize(buttonSize), containerStyle]}>
      {buttonIconName && buttonIconSetName && (
        <View style={styles.iconContainer}>
          <Icon
            name={buttonIconName}
            iconSetName={buttonIconSetName || ('' as IconSetsEnum)}
            size={buttonIconSize}
            color={buttonIconColor}
          />
        </View>
      )}

      <AppText textStyles={[buttonTextColor, getButtonText(buttonSize)]}>
        {buttonText}
      </AppText>
    </TouchableOpacity>
  );
};

export default Button;
