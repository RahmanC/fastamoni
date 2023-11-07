import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import Login from "screens/auth/Login";
import SignUp from "screens/auth/SignUp";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.LOGIN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
