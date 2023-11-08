import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "./layout/Screen";
import Text from "./Text";
import { Colors } from "configs";

const Loader = ({ label }: { label?: string }) => {
  return (
    <Screen style={styles.loaderContainer}>
      <Image
        source={require("../../assets/icon.png")}
        style={styles.logo}
        resizeMode="center"
      />
      <Text style={styles.label}>{label ?? "Please wait ..."}</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Colors.Purple,
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  loaderContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 200,
  },
});

export default Loader;
