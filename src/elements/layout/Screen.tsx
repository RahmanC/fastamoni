import React from "react";
import Constants from "expo-constants";

import { SafeAreaView, StyleSheet, View } from "react-native";
import { Colors } from "configs";

interface Screen {
  children: React.ReactNode;
  style?: any;
}

const Screen = ({ children, style }: Screen) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: Colors.White,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
