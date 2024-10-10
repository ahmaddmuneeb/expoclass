import {
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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          backgroundColor: "red",
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
                onPress={() => navigation.replace("Home")}
                style={{
                  width: "95%",
                  overflow: "hidden",
                  backgroundColor: "#fc1",
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
