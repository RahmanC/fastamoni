import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import Home from "screens/home/Home";

const Stack = createNativeStackNavigator();

const HomeNavigator = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.USERDETAILS} component={Home} />
    </Stack.Navigator>
  );
});

export default HomeNavigator;
