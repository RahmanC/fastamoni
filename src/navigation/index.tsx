import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import AuthNavigator from "./AuthNavigator";
import MainTab from "./MainTab";

const Stack = createNativeStackNavigator();

const RootNavigator = memo(() => {
  return (
    <Stack.Navigator initialRouteName={routes.MAINTAB}>
      <Stack.Screen
        name={routes.MAINTAB}
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.AUTHNAVIGATOR}
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default RootNavigator;
