import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "navigation";
import { Colors } from "configs";
import { Provider as AppProvider } from "react-redux";
import { store } from "redux/store";

export default function App() {
  return (
    <View style={styles.container}>
      <AppProvider store={store}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
});
