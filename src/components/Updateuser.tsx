import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Screen from "elements/layout/Screen";
import InputApp from "elements/InputApp";
import AppButton from "elements/AppButton";
import { useDispatch } from "react-redux";
import { UpdateUser } from "redux/slices/users";
import { Colors } from "configs";
import Text from "elements/Text";
import { CreateUserTypes, UpdateUserProps } from "type/users";
import SubmitButton from "elements/AppButton/SubmitButton";
import { AppForm } from "./AppForm";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  job: Yup.string(),
});

const UpdateUserForm = ({
  handleModal,
  handleSuccess,
  loading,
  id,
  user_name,
}: UpdateUserProps) => {
  const dispatch: any = useDispatch();

  const handleUpdate = (data: CreateUserTypes) => {
    dispatch(UpdateUser(id, data, handleSuccess));
  };

  return (
    <Screen style={styles.container}>
      <Text center type="H3" marginBottom={15}>
        Update User Information
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppForm
          initialValues={{
            name: user_name,
            job: "",
          }}
          onSubmit={handleUpdate}
          validationSchema={validationSchema}
        >
          <View>
            <InputApp name="name" title={"Name"} />
            <InputApp name="job" marginTop={24} title={"Job"} />
          </View>
          <View style={styles.button}>
            <SubmitButton
              title={loading ? "please wait..." : "Submit"}
              disabled={loading}
            />
            <AppButton
              title={"Cancel"}
              style={styles.cancel}
              onPress={handleModal}
            />
          </View>
        </AppForm>
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
