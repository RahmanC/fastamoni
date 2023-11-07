import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "configs";

import Text from "elements/Text";
import { ButtonProps } from "type/input";

const AppButton = ({ title, onPress, style, styleText }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.54}
      onPress={onPress}
    >
      <Text style={[styles.title, styleText]} center type="H5">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    minWidth: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.Purple,
  },
  title: {
    color: Colors.White,
  },
});
