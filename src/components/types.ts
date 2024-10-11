import {ReactNode} from 'react';

export interface TextType {
  H0: string;
  H1: string;
  H2: string;
  H3: string;
  H4: string;
  H5: string;
  H6: string;
  H7: string;
  BODY_01: string;
  BODY_02: string;
  BODY_03: string;
  BODY_04: string;
  ITALIC: string;
}

export enum ETextType {
  H0 = 'H0',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  H7 = 'H7',
  BODY_01 = 'BODY_01',
  BODY_02 = 'BODY_02',
  BODY_03 = 'BODY_03',
  BODY_04 = 'BODY_04',
  ITALIC = 'ITALIC',
  ITALIC_BODY_03 = 'ITALIC_BODY_03',
}

export interface IStyles {
  h0: object;
  h1: object;
  h2: object;
  h3: object;
  h4: object;
  h5: object;
  h6: object;
  h7: object;
  body01: object;
  body02: object;
  body03: object;
  body04: object;
  italic: object;
  italic_body03: object;
  underlined: object;
  centered: object;
  allUppercase: object;
  color: object;
  iconStyle: object;
  dot: object;
  container: object;
}

export interface AppTextType {
  type?: ETextType;
  underlined?: boolean;
  centered?: boolean;
  allUppercase?: boolean;
  textStyles?: object;
  children?: ReactNode;
  handlePress?: () => void;
  numberOfLines?: number;
  onPress?: () => void;
}

export enum ButtonSizeEnum {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}
