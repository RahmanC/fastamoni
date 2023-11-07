import { ViewStyle } from "react-native";

export interface AppModalProps {
  children: React.ReactNode;
  visible?: boolean;
  handleModalClose: () => void;
  customStyle?: ViewStyle;
  style?: ViewStyle;
}

export interface ConditionProps {
  children?: React.ReactNode;
  isVisible?: any;
}

export interface ButtonIconHeaderProps {
  onPress?: () => void;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  icon?: string;
  backgroundColor?: string;
  borderColor?: string;
  style?: any;
  label?: string;
}

export interface ErrorBlockProps {
  isVisible: any;
  errorMessage: string;
}

export interface ErrorProps {
  visible: any;
  error: any;
}

export interface AppFormProps {
  initialValues: any;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children: React.ReactNode;
}
