import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Screen from "elements/layout/Screen";
import Text from "elements/Text";
import { useDispatch } from "react-redux";
import { Logout } from "redux/slices/auth";
import { useNavigation } from "@react-navigation/native";
import routes from "navigation/routes";

const Profile = () => {
  const dispatch: any = useDispatch();
  const { navigate }: any = useNavigation();

  const handleLogout = () => {
    dispatch(Logout(handleNavigate));
  };

  const handleNavigate = () => {
    navigate(routes.AUTHNAVIGATOR);
  };

  return (
    <Screen style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
