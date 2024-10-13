import React from 'react';
import {Image, StyleProp, Text, TextStyle, View} from 'react-native';
import dynamicStyles from './styles';
import {colors} from '@app/assets/colors';

const bgColors = [
  '#2ecc71', // emerald
  '#3498db', // peter river
  '#8e44ad', // wisteria
  '#e67e22', // carrot
  '#e74c3c', // alizarin
  '#1abc9c', // turquoise
  '#ffff', // midnight blue
  '#FDA7DF',
  '#9980FA',
  '#B53471',
];

interface Props {
  username: string;
  size: number;
  imageUrl?: string | null;
  customTextStyles?: StyleProp<TextStyle>;
}

function Avatar({username, size, imageUrl, customTextStyles = {}}: Props) {
  const styles = dynamicStyles(colors as never);

  const spaces = username?.indexOf(' ');
  const l_name = username && username[1] ? username.substr(spaces + 1) : '';

  let initials = '';
  if (spaces === -1) {
    initials = username.substr(0, 1);
  } else {
    if (username?.length) {
      initials = username.substr(0, 1) + l_name.substr(0, 1);
    } else {
      initials = '';
    }
  }

  const sizing = {width: size, height: size};
  let randomNum = 3;
  const textLength = username?.length || 0;
  if (textLength > 0 && textLength <= 9) {
    randomNum = textLength;
  } else if (textLength >= 10 && textLength < 20) {
    const count = textLength / 2;
    randomNum = Math.floor(count);
  } else if (textLength >= 20 && textLength < 30) {
    const count = textLength / 3;
    randomNum = Math.floor(count);
  } else if (textLength >= 30 && textLength < 40) {
    const count = textLength / 4;
    randomNum = Math.floor(count);
  } else if (textLength >= 40 && textLength < 50) {
    const count = textLength / 5;
    randomNum = Math.floor(count);
  } else if (textLength >= 50 && textLength < 60) {
    const count = textLength / 6;
    randomNum = Math.floor(count);
  } else if (textLength >= 60 && textLength < 70) {
    const count = textLength / 7;
    randomNum = Math.floor(count);
  } else if (textLength >= 70 && textLength < 80) {
    const count = textLength / 8;
    randomNum = Math.floor(count);
  } else if (textLength >= 80 && textLength < 90) {
    const count = textLength / 9;
    randomNum = Math.floor(count);
  } else if (textLength >= 90 && textLength < 100) {
    const count = textLength / 10;
    randomNum = Math.floor(count);
  } else {
    randomNum = Math.floor(Math.random() * 10);
  }

  const txtStyle: object[] = [styles.txt];
  if (size >= 100) {
    txtStyle.push({fontSize: 22});
  } else if (size >= 50) {
    txtStyle.push({fontSize: 18});
  }

  if (imageUrl) {
    return <Image source={{uri: imageUrl}} style={[styles.image, sizing]} />;
  }

  return (
    <View
      style={[
        styles.container,
        sizing,
        {backgroundColor: bgColors[randomNum]},
      ]}>
      <Text style={[txtStyle, customTextStyles]}>{initials.toUpperCase()}</Text>
    </View>
  );
}

export default Avatar;
