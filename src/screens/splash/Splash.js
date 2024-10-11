import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({ navigation }) => {
  //   const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    setLoading(true);
    // console.log('AGYA', number);
    // setTimeout(() => {
    //   setLoading(false);
    //   navigation.replace("Login");
    // }, 1000);
    getLoggedInUser();

    return () => console.log("Unmounted");
  }, [isFocused]);

  console.log("[Loading]:: ", loading);
  console.log("[isFocused]:: ", isFocused);

  const getLoggedInUser = async () => {
    let data = await AsyncStorage.getItem("user");
    if (data) {
      navigation.replace("Home");
    } else {
      navigation.replace("Login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text
          style={styles.logoText}
          //   onPress={() => setLoading(prev => prev + 1)}
        >
          University of Central Punjab
        </Text>
      </View>
      <View style={styles.loading}>
        {loading ? <ActivityIndicator size={"large"} color={"red"} /> : null}
      </View>
    </View>
  );
};

export default Splash;
