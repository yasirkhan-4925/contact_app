import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

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

export enum ChatStatus {
  SENT = 'sent',
  DELIVERED = 'delivered',
  SEEN = 'seen',
}

export enum ChatType {
  MEDIA = 'media',
  TEXT = 'text',
}

export enum MessageType {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  TEXT = 'text',
  DOCUMENT = 'document',
}

export enum MediaMimes {
  IMAGE = 'image/jpeg',
  VIDEO = 'video/mp4',
  AUDIO = 'audio/mp3',
  DOCUMENT = 'application/pdf',
}

export enum UserVerificationStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  PAYMENT_PENDING = 'paymentPending',
  PAYMENT_APPROVED = 'paymentApproved',
  PAYMENT_REJECTED = 'paymentRejected',
  REJECTED = 'rejected',
}

export enum CallLogStatus {
  MISSED = 'missed',
  INCOMING = 'incoming',
  OUTGOING = 'outgoing',
}

export enum BlockStatus {
  isUserBlocked = 'isUserBlocked',
  ifLoggedInUserIsBlocked = 'ifLoggedInUserIsBlocked',
}

export enum Mute {
  HOUR_8 = '8 hours',
  WEEK_1 = '1 week',
  ALWAYS = 'always',
}

export enum MuteStatus {
  MUTE = 'muted',
  UNMUTE = 'unmuted',
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

export interface Colors {
  green: string;
  yellow: string;
  inputBg: string;
  mainTextColor: string;
  carotColor: string;
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

export interface LoginRequest {
  username: string;
  password: string;
  platform: string;
  fcmToken?: string;
  apnsToken?: string;
}

export interface Translation {
  t: (value: string) => string;
}

export interface Input {
  title: string;
  requiredFalse: boolean;
  textarea: boolean;
  disabled: boolean;
  onChangeText: (e: string) => void;
  onBlur: () => void;
  inputContainer: ViewStyle;
  borderColor: string;
}

export interface onTypingInterface {
  group: string;
  type: string;
  user: string;
}

export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
  WHATSAPP = 'whatsapp',
}

export enum ISubscription {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}
