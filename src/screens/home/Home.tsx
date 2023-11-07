import { FlatList, StyleSheet } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import Screen from "elements/layout/Screen";
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "redux/slices/users";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import Text from "elements/Text";
import UserItem from "components/UserItem";
import ButtonIconHeader from "components/ButtonIconHeader";
import ConditionalRender from "components/Conditionalrender";
import AppModal from "components/AppModal";

const Home = () => {
  const { setOptions } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch: any = useDispatch();
  const { isLoading, users } = useSelector((state: any) => state.users);

  const getUsers = () => {
    dispatch(FetchUser("1"));
  };

  useFocusEffect(
    useCallback(() => {
      getUsers();
    }, [])
  );

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
    return (
      <Screen>
        <Text>Loading...</Text>
      </Screen>
    );
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
          children={<Text>hi</Text>}
          //   visible={false}
        />
      </ConditionalRender>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({});
