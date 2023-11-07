import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SettingsProps } from "type";
import Text from "elements/Text";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Colors } from "configs";

const SettingItem = ({ icon, title, onPress }: SettingsProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <SimpleLineIcons name={icon} size={24} color={Colors.Yellow} />
    </TouchableOpacity>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: Colors.Purple,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    elevation: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.Purple,
  },
});
