import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Screen from "elements/layout/Screen";
import InputApp from "elements/InputApp";
import AppButton from "elements/AppButton";
import { useDispatch } from "react-redux";
import { UpdateUser } from "redux/slices/users";
import { Colors } from "configs";
import Text from "elements/Text";
import { UpdateUserProps } from "type/users";

const UpdateUserForm = ({
  handleModal,
  handleSuccess,
  loading,
  id,
}: UpdateUserProps) => {
  const dispatch: any = useDispatch();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleCreate = async () => {
    const apiData = {
      name: name,
      job: job,
    };
    dispatch(UpdateUser(id, apiData, handleSuccess));
  };

  return (
    <Screen style={styles.container}>
      <Text center type="H3" marginBottom={15}>
        Update User Information
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
            title={loading ? "please wait..." : "Submit"}
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

export default UpdateUserForm;

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
