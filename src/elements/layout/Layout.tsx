import React from "react";
import { View as DefaultView, ColorValue } from "react-native";

interface Props {
  children?: React.ReactNode;
  style?: any;
  borderColor?: ColorValue | string;
  borderRadius?: number;
}

const Layout = ({ children, style, borderColor, borderRadius }: Props) => {
  return (
    <DefaultView
      style={[
        {
          backgroundColor: "#f4f4f4",
          borderColor: borderColor || "#555555",
          borderRadius: borderRadius,
        },
        style,
      ]}
    >
      {children}
    </DefaultView>
  );
};
export default Layout;
