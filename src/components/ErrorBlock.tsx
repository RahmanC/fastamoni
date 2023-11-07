import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "configs";

import { ErrorBlockProps } from "type";
import ConditionalRender from "./Conditionalrender";

const ErrorBlock = ({
  isVisible,
  errorMessage,
  style,
  textStyle,
}: ErrorBlockProps) => {
  return (
    <ConditionalRender isVisible={isVisible}>
      <View style={[styles.container, style]}>
        <Text style={[styles.error, textStyle]}>{errorMessage}</Text>
      </View>
    </ConditionalRender>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.LighRed,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 20,
  },
  error: {
    color: Colors.Red,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default ErrorBlock;
