import { FlatList, StyleSheet, View } from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Screen from "elements/layout/Screen";
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "redux/slices/users";
import { useNavigation } from "@react-navigation/native";

import Text from "elements/Text";
import UserItem from "components/UserItem";
import ButtonIconHeader from "components/ButtonIconHeader";
import ConditionalRender from "components/Conditionalrender";
import AppModal from "components/AppModal";
import CreateUserForm from "components/CreateUser";
import AppButton from "elements/AppButton";
import routes from "navigation/routes";
import Loader from "elements/Loader";

const Home = () => {
  const { setOptions, navigate }: any = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const dispatch: any = useDispatch();
  const { isLoading, users } = useSelector((state: any) => state.users);

  const getUsers = () => {
    dispatch(FetchUser("1"));
  };

  useLayoutEffect(() => {
    getUsers();
  }, []);

  const handleBack = () => {
    setSuccessModal(false);
    navigate(routes.HOME);
  };

  useLayoutEffect(() => {
    setOptions({
      title: "Users",
      headerStyle: {
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { height: 0 },
        elevation: 0,
      },
      headerLeft: null,
      headerRight: () => (
        <ButtonIconHeader
          marginRight={10}
          marginBottom={7}
          icon="plus"
          // label="Create User"
          onPress={() => setModalVisible(true)}
        />
      ),
    });
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Screen>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <UserItem data={item} />;
        }}
        keyExtractor={(item) => item?.id?.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 16,
          paddingBottom: 16,
        }}
      />
      <ConditionalRender isVisible={modalVisible}>
        <AppModal
          handleModalClose={() => setModalVisible(false)}
          children={
            <CreateUserForm
              handleSuccess={() => {
                setModalVisible(false);
                setSuccessModal(true);
              }}
              handleModal={() => setModalVisible(false)}
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
                User created Successfully!
              </Text>
              <AppButton
                title="Go Back"
                onPress={handleBack}
                style={styles.button}
              />
            </View>
          }
        />
      </ConditionalRender>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
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
