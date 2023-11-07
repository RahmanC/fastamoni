import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { Colors } from "configs";
import { SizeHeight, TextProps } from "type/input";

const FontSize: SizeHeight = {
  H1: 30,
  H2: 24,
  H3: 20,
  H4: 16,
  H5: 15,
  H6: 13,
  Body: 14,
  Label: 12,
  P6: 13,
};

const LineHeight: SizeHeight = {
  H1: 38,
  H2: 28,
  H3: 32,
  H4: 24,
  H5: 18,
  H6: 16,
  Body: 22,
  Label: 20,
  P6: 22,
};

export default ({
  left,
  right,
  center,
  color = "#1E1F20",
  size,
  style: _style,
  uppercase,
  lowercase,
  children,
  onPress,
  numberOfLines,
  type, //H1, H2, H3, H4, Body, Label
  white,
  black,
  ...props
}: TextProps) => {
  let style: TextStyle = {};
  if (Array.isArray(_style)) {
    style = { ...StyleSheet.flatten(_style) };
  } else {
    style = { ..._style };
  }

  let _children = "";
  if (typeof children === "string") {
    if (uppercase) {
      _children = children.toUpperCase();
    } else if (lowercase) {
      _children = children.toLowerCase();
    }
  }

  let textSize = size;
  let lineHeight = size;
  if (type) {
    textSize = FontSize[`${type}`];
    lineHeight = LineHeight[`${type}`];
  }

  let textAlign: "left" | "center" | "right" | "auto" | "justify" | undefined =
    "left";

  if (left) {
    textAlign = "left";
  }
  if (right) {
    textAlign = "right";
  }
  if (center) {
    textAlign = "center";
  }

  if (props.lineHeight) {
    lineHeight = props.lineHeight;
  }

  let marginTop;
  let marginLeft;
  let marginRight;
  let marginBottom;
  let marginHorizontal;
  let marginVertical;
  let maxWidth;

  let textDecorationLine:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined = "none";

  if (props.textDecorationLine) {
    textDecorationLine = props.textDecorationLine;
  }

  if (props.marginTop) {
    marginTop = props.marginTop;
  }
  if (props.marginLeft) {
    marginLeft = props.marginLeft;
  }
  if (props.marginRight) {
    marginRight = props.marginRight;
  }
  if (props.marginBottom) {
    marginBottom = props.marginBottom;
  }
  if (props.marginHorizontal) {
    marginHorizontal = props.marginHorizontal;
  }
  if (props.marginVertical) {
    marginVertical = props.marginVertical;
  }
  if (props.maxWidth) {
    maxWidth = props.maxWidth;
  }

  return (
    <Text
      {...props}
      style={[
        {
          color: white ? Colors.White : black ? Colors.Black : color,
          fontSize: textSize,
          lineHeight: lineHeight,
          textAlign: textAlign,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
          textDecorationLine: textDecorationLine,
          maxWidth: maxWidth,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}
    >
      {_children || children}
    </Text>
  );
};
