import React from "react";
import Text from "elements/Text";
import { Colors } from "configs";
import { StyleSheet } from "react-native";
import { ErrorProps } from "type";

const ErrorMessage = ({ error, visible }: ErrorProps) => {
  if (!error || !visible) return null;
  return <Text style={styles.error}>{error}</Text>;
};

export default ErrorMessage;
const styles = StyleSheet.create({
  error: { color: Colors.Red, fontSize: 14, fontWeight: "600" },
});
