import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Screen from "elements/layout/Screen";
import InputApp from "elements/InputApp";
import AppButton from "elements/AppButton";
import { useDispatch } from "react-redux";
import { CreateUser } from "redux/slices/users";
import { Colors } from "configs";
import Text from "elements/Text";
import { CreateUserProps } from "type/users";

const CreateUserForm = ({
  handleModal,
  handleSuccess,
  loading,
}: CreateUserProps) => {
  const dispatch: any = useDispatch();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleCreate = async () => {
    const apiData = {
      name: name,
      job: job,
    };
    dispatch(CreateUser(apiData, handleSuccess));
  };

  return (
    <Screen style={styles.container}>
      <Text center type="H3" marginBottom={15}>
        Create a New User
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <InputApp title={"Name"} value={name} onChangeText={setName} />
          <InputApp
            marginTop={24}
            title={"Job"}
            value={job}
            onChangeText={setJob}
          />
        </View>
        <View style={styles.button}>
          <AppButton
            title={loading ? "please wait..." : "Create User"}
            disabled={loading || !name || !job}
            onPress={handleCreate}
          />
          <AppButton
            title={"Cancel"}
            style={styles.cancel}
            onPress={handleModal}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default CreateUserForm;

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
  },
  cancel: {
    marginTop: 20,
    backgroundColor: Colors.Yellow,
  },
  container: {
    padding: 40,
  },
});
