import { ColorValue, ViewStyle } from "react-native";

export interface TextProps {
  color?: string;
  size?: number;
  style?: any;
  uppercase?: boolean;
  lowercase?: boolean;
  children?: any;
  type?: string;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  onPress?: () => void;
  lineHeight?: number;
  white?: boolean;
  black?: boolean;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  maxWidth?: number;
  numberOfLines?: number;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined;
}

export interface SizeHeight {
  [key: string]: number;
}

export interface InputProps {
  value: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  onEndEditing?: () => void;
  onSelectionChange?: () => void;
  placeholder?: string;
  isShowIcon?: boolean;
  icon?: any;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  iconStyle?: ViewStyle;
  borderColor?: string;
  iconPress?: () => void;
  autoFocus?: boolean;
  backgroundColor?: string;
  multiline?: boolean;
  editable?: boolean;
  color?: ColorValue;
  keyboardType?: any;
}

export interface InputAppProps {
  name: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  isShowIcon?: boolean;
  icon?: any;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  styleView?: ViewStyle;
  title: string;
  colorTitle?: string;
  borderColor?: string;
  iconPress?: () => void;
  autoFocus?: boolean;
  marginTop?: number;
  multiline?: boolean;
  editable?: boolean;
  onPress?: () => void;
  styleInput?: ViewStyle;
  keyboardType?: any;
  onBlur?: () => void;
}

export interface ButtonProps {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
  children?: any;
  styleText?: any;
  disabled?: boolean;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  email: string;
  password: string;
  confirmPassword: string;
}
