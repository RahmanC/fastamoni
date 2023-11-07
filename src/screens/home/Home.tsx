import { FlatList, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import Screen from "elements/layout/Screen";
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "redux/slices/users";
import { useFocusEffect } from "@react-navigation/native";

import Text from "elements/Text";
import UserItem from "components/UserItem";

const Home = () => {
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
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({});
