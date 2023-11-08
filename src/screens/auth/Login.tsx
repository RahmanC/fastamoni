import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Text from "elements/Text";
import Constants from "expo-constants";
import InputApp from "elements/InputApp";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "configs";
import routes from "navigation/routes";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, UpdateResponse } from "redux/slices/auth";
import ErrorBlock from "components/ErrorBlock";
import { AppForm } from "components/AppForm";
import SubmitButton from "elements/AppButton/SubmitButton";
import * as Yup from "yup";
import { LoginProps } from "type/input";

const validationSchema = Yup.object().shape({
  email: Yup.string(),
  password: Yup.string(),
});

export default function Login() {
  const dispatch: any = useDispatch();
  const { isLoading, responseError } = useSelector((state: any) => state.auth);

  const { navigate }: any = useNavigation();
  const [visiblePassword, setVisiblePassword] = useState(false);

  const onShowHidePassword = useCallback(() => {
    setVisiblePassword((prev) => !prev);
  }, []);

  const onSignUp = useCallback(() => {
    navigate(routes.SIGNUP);
  }, [navigate]);

  const handleLogin = async (data: LoginProps) => {
    let apiData = {
      email: data.email.toLowerCase(),
      password: data.password,
    };
    dispatch(LoginUser(apiData, handleNavigate));
  };

  const handleNavigate = () => {
    navigate(routes.MAINTAB, { replace: true });
  };

  // clear error message after 10secs
  useEffect(() => {
    if (!!responseError) {
      const timer = setTimeout(() => {
        dispatch(UpdateResponse(""));
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [responseError]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.logo}
            resizeMode="center"
          />

          <Text type="H4" style={styles.headerText}>
            Please log in to your Account!
          </Text>
          <ErrorBlock
            isVisible={!!responseError}
            errorMessage={responseError}
          />
          <AppForm
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleLogin}
            validationSchema={validationSchema}
          >
            <View style={styles.inputLogin}>
              <InputApp name="email" title={"Email"} />
              <InputApp
                name="password"
                title={"Password"}
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
              <SubmitButton
                title={isLoading ? "please wait..." : "Login"}
                disabled={isLoading}
              />
            </View>
          </AppForm>

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
  logo: {
    marginBottom: 12,
    marginLeft: 12,
    width: 60,
    height: 60,
  },
  signUp: {
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});
