import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Screen from "elements/layout/Screen";
import Text from "elements/Text";
import { useDispatch } from "react-redux";
import { Logout } from "redux/slices/auth";
import { useNavigation } from "@react-navigation/native";
import routes from "navigation/routes";
import SettingItem from "components/SettingItem";

const Settings = () => {
  const dispatch: any = useDispatch();
  const { navigate }: any = useNavigation();

  const handleLogout = () => {
    dispatch(Logout(handleNavigate));
  };

  const handleNavigate = () => {
    navigate(routes.LOGIN);
  };

  return (
    <Screen style={styles.container}>
      <SettingItem onPress={() => {}} icon={"user"} title="Update Profile" />
      <SettingItem onPress={() => {}} icon={"question"} title="Contact" />
      <SettingItem onPress={handleLogout} icon={"logout"} title="Logout" />
    </Screen>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
