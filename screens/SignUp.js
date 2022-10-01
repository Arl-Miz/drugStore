import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import FormSubmitButton from "../components/FormSubmitButton";
import { COLORS } from "../constants/styles";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import { useFonts } from "expo-font";

const validation = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(3, "Invalid name")
    .required("Name is required"),
  email: Yup.string().email("Invalid Email!").required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "password is too short!")
    .required("password is required"),
  confirmPassword: Yup.string().equals(
    [Yup.ref("password"), null],
    "password does not match!"
  ),
});
const Capitalize = (word) => {
  return word
    .split("")
    .map((letter, index) =>
      index ? letter.toUpperCase() : letter.toUpperCase()
    )
    .join("");
};

const SignUp = ({ navigation }) => {
  const [checkboxState, setCheckboxState] = useState(true);
  const { width, height } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/AmaticSC-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            backgroundColor: COLORS.BACKGROUND_COLOR,
            flex: 1,
            //   justifyContent: "center",
            //   alignItems: "center",
          }}
        >
          <StatusBar translucent backgroundColor={COLORS.SECONDARY_COLOR} />

          {/* <View
          style={{
            borderRadius: 30,
            backgroundColor: "#000000",
            height: height / 1.6,
            width: width / 1.1,
            paddingTop: 50,
          }}
        > */}
          <View
            style={{
              flex: 0.3,
              // height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 29, color: "#ffffff" }}>Get Started!</Text>
            <Text style={{ fontSize: 22, color: "#fffd" }}>
              Create an account to continue
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validation}
              onSubmit={(values, formikActions) => {
                console.log(values);
                Alert.alert(
                  `hi ${Capitalize(values.fullName)} !`,
                  "You are now signed in",
                  [
                    {
                      text: "OK",
                      onPress: () => navigation.navigate("Home"),
                      style: "destructive",
                    },
                  ]
                );
                setTimeout(() => {
                  formikActions.resetForm();
                  formikActions.setSubmitting(false);
                }, 5000);
              }}
            >
              {(props) => (
                <View
                  style={{
                    //   flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    //   marginTop: 14,
                  }}
                >
                  <FormInput
                    error={props.touched.fullName && props.errors.fullName}
                    onChangeText={props.handleChange("fullName")}
                    onBlur={props.handleBlur("fullName")}
                    value={props.values.fullName}
                    // label="Full Name"
                    placeholder="example name"
                  />
                  <FormInput
                    error={props.touched.email && props.errors.email}
                    onChangeText={props.handleChange("email")}
                    onBlur={props.handleBlur("email")}
                    placeholder="example email"
                    value={props.values.email}
                  />
                  <FormInput
                    error={props.touched.password && props.errors.password}
                    onChangeText={props.handleChange("password")}
                    onBlur={props.handleBlur("password")}
                    value={props.values.password}
                    placeholder="********"
                    secureTextEntry
                    isPassword="true"
                  />
                  {/* <FormInput
                  error={
                    props.touched.confirmPassword &&
                    props.errors.confirmPassword
                  }
                  onChangeText={props.handleChange("confirmPassword")}
                  onBlur={props.handleBlur("confirmPassword")}
                  value={props.values.confirmPassword}
                  placeholder="********"
                  secureTextEntry
                  isPassword="true"
                /> */}
                  {/* <View style={styles.container}> */}
                  <View
                    style={{
                      flexDirection: "row",
                      width: "85%",
                      justifyContent: "space-between",
                      marginVertical: 5,
                      alignItems: "center",
                    }}
                  >
                    <BouncyCheckbox
                      size={24}
                      fillColor={COLORS.SECONDARY_COLOR}
                      unfillColor={COLORS.ITEMBG_COLOR}
                      iconStyle={{
                        borderColor: COLORS.BITCHY_PINK,
                        borderRadius: 6,
                      }}
                      innerIconStyle={{ borderWidth: 2, borderRadius: 6 }}
                      onPress={() => setCheckboxState(!checkboxState)}
                    />

                    <Text style={{ color: "white", fontSize: 14 }}>
                      By creataing an account
                      <Text style={{ color: COLORS.BITCHY_PINK }}>
                        you agree to our Terms and Condition
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.btn_container}>
                    {/* <View style={{ position: "absolute", left: 40, width: 110 }}> */}
                    <FormSubmitButton
                      submitting={props.isSubmitting}
                      onPress={props.handleSubmit}
                      title="Sign Up"
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>

          <View style={{}}>
            <View style={{ alignItems: "center", marginBottom: 19 }}>
              <Text style={{ color: "white", fontSize: 30 }}>OR</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: COLORS.ITEM_BG_COLOR,
                    width: width / 2.7,
                    height: 70,
                    borderRadius: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: 12, height: 12 }}
                    source={require("../assets/Google.png")}
                  />
                  <Text style={{ color: "white" }}>Google</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: COLORS.ITEM_BG_COLOR,
                    width: width / 2.7,
                    height: 70,
                    borderRadius: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: 12, height: 12 }}
                    source={require("../assets/FaceBook.png")}
                  />

                  <Text style={{ color: "white" }}>Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              bottom: -130,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "white" }}>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate("logIn")}>
              <View>
                <Text style={{ color: COLORS.BITCHY_PINK }}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  circleGradient: {
    backgroundColor: "#000000",
    borderRadius: 8,
    padding: 8,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "#060606",
    color: "#008f68",
    fontSize: 18,
  },
  input: {
    backgroundColor: COLORS.ITEM_BG_COLOR,
    // borderWidth: 1,
    // borderColor: "#ffffff",
    // padding: 10,
    // margin: 15,
    fontSize: 19,
    width: "90%",
    borderRadius: 6,
  },
  //   container: {
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     // width: "100%",
  //   },
  btn_container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 15,
  },
});
