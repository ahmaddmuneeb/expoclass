import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/splash/Splash";
import Login from "../screens/login/Login";
import Home from "../screens/home/Home";

const RootStackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        {/* <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="BottomTabNavigator"
          component={Login}
        /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   headerRight: () => (
          //     <Button onPress={() => handleLogout()} title="Logout" color="black" />
          //   ),
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
