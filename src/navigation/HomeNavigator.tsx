import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import Home from "screens/home/Home";

const Stack = createNativeStackNavigator();

const HomeNavigator = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default HomeNavigator;
