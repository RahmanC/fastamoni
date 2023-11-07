import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import Home from "screens/home/Home";
import UserDetails from "screens/home/UserDetails";

const Stack = createNativeStackNavigator();

const HomeNavigator = memo(() => {
  return (
    <Stack.Navigator initialRouteName={routes.HOME}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.USERDETAILS} component={UserDetails} />
    </Stack.Navigator>
  );
});

export default HomeNavigator;
