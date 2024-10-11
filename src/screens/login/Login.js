import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      // Alert.alert("All fields are required");
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "All fields are required!",
        position: "bottom",
      });
      return;
    }

    try {
      let userData = { email, password };
      let finalData = JSON.stringify(userData);
      console.log(finalData);
      await AsyncStorage.setItem("user", finalData);
      navigation.replace("Home");
    } catch (error) {}
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={
        Platform.OS === "ios" ? "padding" : Platform.OS === "android" ? "height" : "position"
      }
    >
      <ScrollView
        style={{
          flex: 1,
          height: "100%",
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              flex: 1,
              //   alignItems: 'center',
              //   alignSelf: 'center',
              justifyContent: "center",
              paddingHorizontal: 16,
            }}
          >
            {/* image */}
            <View
              style={{
                alignSelf: "center",
                marginVertical: 2,
              }}
            >
              <Image
                source={require("../../assets/logo.png")}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
            </View>
            {/* inputs */}
            <View
              style={{
                marginVertical: 2,
              }}
            >
              <TextInput
                style={{
                  width: "95%",
                  backgroundColor: "#f7f7f7",
                  paddingVertical: 16,
                  paddingHorizontal: 6,
                  marginVertical: 4,
                  borderWidth: "#707070",
                  borderWidth: 1,
                  borderRadius: 4,
                  fontSize: 16,
                  alignSelf: "center",
                }}
                placeholder="Email"
                value={email}
                onChangeText={(e) => setEmail(e)}
                placeholderTextColor={"#707070"}
              />
              <TextInput
                style={{
                  width: "95%",
                  backgroundColor: "#f7f7f7",
                  paddingVertical: 16,
                  paddingHorizontal: 6,
                  marginVertical: 4,
                  borderWidth: "#707070",
                  borderWidth: 1,
                  borderRadius: 4,
                  fontSize: 16,
                  alignSelf: "center",
                }}
                placeholder="Password"
                value={password}
                onChangeText={(e) => setPassword(e)}
                secureTextEntry
                placeholderTextColor={"#707070"}
              />
            </View>

            <View
              style={{
                marginVertical: 2,
              }}
            >
              <TouchableOpacity
                onPress={() => handleLogin()}
                style={{
                  width: "95%",
                  overflow: "hidden",
                  backgroundColor: "#fc1000",
                  paddingVertical: 16,
                  paddingHorizontal: 6,
                  marginVertical: 4,
                  borderRadius: 4,
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Login
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({});
