import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import Profile from "screens/profile/Profile";

const Stack = createNativeStackNavigator();

const ProfileNavigator = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default ProfileNavigator;
