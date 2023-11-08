import React, { memo, useMemo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import routes from "./routes";
import HomeNavigator from "./HomeNavigator";
import SettingsNavigator from "./SettingsNavigator";
import { FontAwesome5 } from "@expo/vector-icons";
import Layout from "elements/layout/Layout";
import { Colors } from "configs";
import Text from "elements/Text";

const Tab = createBottomTabNavigator();
const MainTab = memo(() => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen
          name={routes.HOMENAVIGATOR}
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={routes.SETTINGSNAVIGATOR}
          component={SettingsNavigator}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
});

const MyTabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return useMemo(() => {
    return (
      <Layout style={styles.container}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            return navigation.navigate(route.name);
          };

          const getNameIcon = (): string => {
            switch (index) {
              case 0:
                return "home";

              case 1:
                return "tools";

              default:
                return "home";
            }
          };

          const getColor = () => {
            return isFocused ? Colors.Purple : "#000000";
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.btn}
              key={index}
              activeOpacity={1}
            >
              <View style={styles.borderButton}>
                <FontAwesome5
                  name={getNameIcon()}
                  color={getColor()}
                  size={25}
                />
                <Text
                  size={isFocused ? 14 : 13}
                  marginTop={5}
                  color={isFocused ? Colors.Purple : Colors.Black}
                  style={[isFocused && styles.labelActive]}
                >
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </Layout>
    );
  }, [state, descriptors, navigation]);
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS === "ios" ? 82 : 60,
    paddingBottom: 10,
  },
  container: {
    flexDirection: "row",
    backgroundColor: Colors.White,
  },
  borderButton: {
    justifyContent: "center",
    alignItems: "center",
  },

  labelActive: {
    fontWeight: "700",
  },
});

export default MainTab;
