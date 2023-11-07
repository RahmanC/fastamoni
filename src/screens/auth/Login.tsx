import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Text from "elements/Text";
import Screen from "elements/layout/Screen";
import Constants from "expo-constants";

export default function Login() {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text type="H4" style={styles.headerText}>
            Please log in to your Account!
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: Constants.statusBarHeight + 52,
  },
  headerText: {
    fontWeight: "600",
  },
});
