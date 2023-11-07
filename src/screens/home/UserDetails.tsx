import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Screen from "elements/layout/Screen";
import Text from "elements/Text";
import AppButton from "elements/AppButton";
import { Colors } from "configs";

const UserDetails = () => {
  const { params }: any = useRoute();
  let userData = params?.data;

  return (
    <Screen style={styles.container}>
      <Image source={{ uri: userData.avatar }} style={styles.image} />
      <View style={styles.info}>
        <Text size={20} style={styles.name}>
          {userData.first_name} {userData.last_name}
        </Text>
        <Text size={16} marginTop={10} style={styles.email}>
          {userData.email}
        </Text>
      </View>
      <AppButton title="Update User Data" style={styles.button} />
    </Screen>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Yellow,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  email: {
    fontStyle: "italic",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 500,
  },
  info: {
    marginVertical: 20,
    alignItems: "center",
  },
  name: {
    fontWeight: "700",
  },
});
