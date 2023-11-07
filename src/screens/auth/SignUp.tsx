import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Text from "elements/Text";
import Constants from "expo-constants";
import InputApp from "elements/InputApp";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "configs";
import routes from "navigation/routes";
import { useNavigation } from "@react-navigation/native";
import { AppForm } from "components/AppForm";
import * as Yup from "yup";
import { SignUpProps } from "type/input";
import SubmitButton from "elements/AppButton/SubmitButton";
import ErrorBlock from "components/ErrorBlock";
import { RegisterUser, UpdateRegistrationMessage } from "redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
  confirmPassword: Yup.string().when("password", (password) => {
    if (password) {
      return Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required()
        .label("Confirm Password");
    }
    return Yup.string().nullable();
  }),
});

export default function SignUp() {
  const dispatch: any = useDispatch();

  const { navigate }: any = useNavigation();
  const { isLoading, responseError, registrationSuccess } = useSelector(
    (state: any) => state.auth
  );

  const [visiblePassword, setVisiblePassword] = useState(false);

  const onShowHidePassword = useCallback(() => {
    setVisiblePassword((prev) => !prev);
  }, []);

  const onLogin = useCallback(() => {
    navigate(routes.LOGIN);
  }, [navigate]);

  const handleSignUp = async (data: SignUpProps) => {
    let apiData = {
      email: data.email,
      password: data.password,
    };
    dispatch(
      RegisterUser(
        apiData,
        "Registration Successful, Kindly proceed to login or wait to be redirected"
      )
    );
  };

  // clear success message and navigate to login screen after 10secs
  useEffect(() => {
    if (!!registrationSuccess) {
      const timer = setTimeout(() => {
        dispatch(UpdateRegistrationMessage(""));
        navigate(routes.LOGIN);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [registrationSuccess]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={require("images/icon.png")}
            style={styles.logo}
            resizeMode="center"
          />
          <Text type="H4" style={styles.headerText}>
            Please create an account!
          </Text>
          <ErrorBlock
            isVisible={!!responseError}
            errorMessage={responseError}
          />
          <ErrorBlock
            style={{ backgroundColor: "#27AE60" }}
            textStyle={{ color: "white" }}
            isVisible={!!registrationSuccess}
            errorMessage={registrationSuccess}
          />
          <AppForm
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={handleSignUp}
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
              <InputApp
                name="confirmPassword"
                title={"Confirm Password"}
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
                title={isLoading ? "please wait..." : "Sign Up"}
                disabled={isLoading}
              />
            </View>
          </AppForm>

          <View style={styles.signUp}>
            <Text type="H5" color={Colors.Black}>
              Already a member?{" "}
              <Text
                type="H5"
                color={Colors.Purple}
                style={{ fontWeight: "600" }}
                onPress={onLogin}
              >
                Login
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
