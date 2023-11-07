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
