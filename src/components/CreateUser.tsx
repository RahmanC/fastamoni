import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Screen from "elements/layout/Screen";
import InputApp from "elements/InputApp";
import AppButton from "elements/AppButton";
import { useDispatch } from "react-redux";
import { CreateUser } from "redux/slices/users";
import { Colors } from "configs";
import Text from "elements/Text";
import { CreateUserTypes, CreateUserProps } from "type/users";
import { AppForm } from "./AppForm";
import * as Yup from "yup";
import SubmitButton from "elements/AppButton/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  job: Yup.string().required().label("Job"),
});

const CreateUserForm = ({
  handleModal,
  handleSuccess,
  loading,
}: CreateUserProps) => {
  const dispatch: any = useDispatch();

  const handleCreate = (data: CreateUserTypes) => {
    dispatch(CreateUser(data, handleSuccess));
  };

  return (
    <Screen style={styles.container}>
      <Text center type="H3" marginBottom={15}>
        Create a New User
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppForm
          initialValues={{
            name: "",
            job: "",
          }}
          onSubmit={handleCreate}
          validationSchema={validationSchema}
        >
          <View>
            <InputApp name="name" title={"Name"} />
            <InputApp name="job" marginTop={24} title={"Job"} />
          </View>
          <View style={styles.button}>
            <SubmitButton
              title={loading ? "please wait..." : "Create User"}
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
