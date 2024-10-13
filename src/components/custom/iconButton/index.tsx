import {Icon} from '@app/components';
import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import dynamicStyles from './styles';
import {IconSetsEnum} from '@app/utils/types';
import {colors} from '@app/assets/colors';

interface Props {
  iconName: string;
  iconSize: number;
  iconSetName: IconSetsEnum;
  onPress: () => void;
  iconColor?: string;
  buttonBgColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  rounded?: boolean;
  disabled?: boolean;
}
const IconButton = ({
  iconName,
  iconSetName,
  iconSize,
  iconColor = colors.bgSecondary,
  onPress,
  buttonBgColor = colors.buttonPrimary,
  rounded = false,
  containerStyle = {},
  disabled = false,
}: Props) => {
  const styles = dynamicStyles(buttonBgColor, rounded);
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Icon
        name={iconName}
        color={iconColor}
        iconSetName={iconSetName}
        size={iconSize}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
