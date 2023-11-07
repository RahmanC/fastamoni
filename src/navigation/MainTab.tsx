import React, { memo, useMemo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import routes from "./routes";
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { FontAwesome5 } from "@expo/vector-icons";
import Layout from "elements/layout/Layout";

const Tab = createBottomTabNavigator();
const MainTab = memo(() => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} lazy={true} />}>
        <Tab.Screen name={routes.HOMENAVIGATOR} component={HomeNavigator} />
        <Tab.Screen
          name={routes.PROFILENAVIGATOR}
          component={ProfileNavigator}
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
                return isFocused ? "home" : "home";

              case 1:
                return isFocused ? "user-alt" : "user";

              default:
                return "home";
            }
          };

          const getColor = () => {
            return isFocused ? "#000000" : "#000000";
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
              <View
                style={[styles.borderButton, isFocused && styles.borderActive]}
              >
                <FontAwesome5
                  name={getNameIcon()}
                  color={getColor()}
                  size={25}
                />
                <Text>{label}</Text>
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
    height: 82,
    paddingBottom: 10,
  },
  container: {
    flexDirection: "row",
  },
  borderButton: {
    width: 80,
    height: 80,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  borderActive: {
    backgroundColor: "#f4f4f4",
  },
});

export default MainTab;
