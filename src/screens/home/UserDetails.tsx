import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import Screen from "elements/layout/Screen";
import Text from "elements/Text";
import AppButton from "elements/AppButton";
import { Colors } from "configs";
import ConditionalRender from "components/Conditionalrender";
import AppModal from "components/AppModal";
import UpdateUserForm from "components/Updateuser";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const { isLoading } = useSelector((state: any) => state.users);

  const { params }: any = useRoute();
  let userData = params?.data;

  const [modalVisible, setModalVisible] = useState(null);
  const [successModal, setSuccessModal] = useState(false);

  const handleUpdate = (data: React.SetStateAction<null>) => {
    setModalVisible(data);
  };

  const handleBack = () => {
    setSuccessModal(false);
  };

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
      <AppButton
        title="Update User Data"
        style={styles.button}
        onPress={() => handleUpdate(userData)}
      />
      <ConditionalRender isVisible={modalVisible}>
        <AppModal
          handleModalClose={() => setModalVisible(null)}
          children={
            <UpdateUserForm
              id={userData.id}
              user_name={`${userData.first_name} ${userData.last_name}`}
              handleModal={() => setModalVisible(null)}
              handleSuccess={() => {
                setSuccessModal(true);
                setModalVisible(null);
              }}
              loading={isLoading}
            />
          }
        />
      </ConditionalRender>

      <ConditionalRender isVisible={successModal}>
        <AppModal
          style={styles.modal}
          customStyle={styles.modalInner}
          handleModalClose={() => setSuccessModal(false)}
          children={
            <View style={styles.successModal}>
              <Text marginBottom={24} size={16}>
                User data updated successfully!
              </Text>
              <AppButton
                title="Okay"
                onPress={handleBack}
                style={styles.modalButton}
              />
            </View>
          }
        />
      </ConditionalRender>
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
  modalButton: {
    minWidth: "100%",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalInner: {
    minWidth: "90%",
    padding: 40,
  },
  successModal: {
    justifyContent: "center",
    alignItems: "center",
  },
});
