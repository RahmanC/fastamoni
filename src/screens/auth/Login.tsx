import { ScrollView, StyleSheet, View } from "react-native";
import React, { useCallback, useState } from "react";
import Text from "elements/Text";
import Constants from "expo-constants";
import InputApp from "elements/InputApp";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "configs";
import routes from "navigation/routes";
import { useNavigation } from "@react-navigation/native";
import AppButton from "elements/AppButton";
import { useSelector } from "react-redux";

export default function Login() {
  const { isLoading, isLoggedIn } = useSelector((state: any) => state.auth);

  const { navigate }: any = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);

  const onShowHidePassword = useCallback(() => {
    setVisiblePassword((prev) => !prev);
  }, []);

  const onSignUp = useCallback(() => {
    navigate(routes.SIGNUP);
  }, [navigate]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text type="H4" style={styles.headerText}>
            Please log in to your Account!
          </Text>
          <View style={styles.inputLogin}>
            <InputApp title={"Email"} value={email} onChangeText={setEmail} />
            <InputApp
              title={"Password"}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!visiblePassword}
              marginTop={24}
              icon={
                <Ionicons
                  name={
                    visiblePassword ? "md-eye-outline" : "md-eye-off-outline"
                  }
                  size={24}
                  color="black"
                />
              }
              isShowIcon
              iconPress={onShowHidePassword}
            />
          </View>
          <View style={styles.button}>
            <AppButton title="Login" />
          </View>

          <View style={styles.signUp}>
            <Text type="H5" color={Colors.Black}>
              Don't have an account?{" "}
              <Text
                type="H5"
                color={Colors.Purple}
                style={{ fontWeight: "600" }}
                onPress={onSignUp}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 50,
  },
  header: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: Constants.statusBarHeight + 62,
  },
  headerText: {
    fontWeight: "600",
  },
  inputLogin: {
    marginTop: 40,
  },
  signUp: {
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});
