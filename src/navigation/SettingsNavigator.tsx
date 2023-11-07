import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import Settings from "screens/settings/Settings";

const Stack = createNativeStackNavigator();

const SettingsNavigator = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
});

export default SettingsNavigator;
