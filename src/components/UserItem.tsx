import { StyleSheet, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { UserType } from "type/users";
import Text from "elements/Text";
import { Colors } from "configs";
import { useNavigation } from "@react-navigation/native";
import routes from "navigation/routes";

const UserItem = memo(({ data }: UserType) => {
  const { navigate }: any = useNavigation();
  const handlePress = () => {
    navigate(routes.USERDETAILS, { data });
  };
  return (
    <TouchableOpacity style={styles.userContainer} onPress={handlePress}>
      <Text marginRight={10} size={14}>
        {data.first_name}
      </Text>
      <Text size={14}>{data.last_name}</Text>
    </TouchableOpacity>
  );
});

export default UserItem;

const styles = StyleSheet.create({
  userContainer: {
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: Colors.Border,
    flexDirection: "row",
    backgroundColor: Colors.White,
    marginBottom: 16,
    borderRadius: 16,
  },
});
