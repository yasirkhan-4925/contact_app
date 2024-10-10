import React, {Children} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const CustomView = ({containerStyle, children}: Props) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

export default CustomView;
