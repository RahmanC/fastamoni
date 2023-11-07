import React, { memo, useLayoutEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import AuthNavigator from "./AuthNavigator";
import MainTab from "./MainTab";
import { useSelector } from "react-redux";
import Screen from "elements/layout/Screen";
import Text from "elements/Text";

const Stack = createNativeStackNavigator();

const RootNavigator = memo(() => {
  const { token } = useSelector((state: any) => state.auth);

  const [initialRoute, setInitialRoute] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    if (token) {
      setInitialRoute(routes.MAINTAB);
      setLoading(false);
    } else {
      setInitialRoute(routes.AUTHNAVIGATOR);
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return (
      <Screen>
        <Text>Loading...</Text>
      </Screen>
    );
  }

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
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
